// webgpu_native/meshnet_gpu.js
// ---------------------------------------------------------------------------
// Host side of the hand-written WebGPU MeshNet: the port of brainchopC's
// src/backend_webgpu.c, with weights read from the app's model.safetensors
// through the WebGL2 path's loader (webgl2_runners/weights.js), so this path
// inherits its orientation convention and is validated against the same
// tinygrad runners.
//
// Interface: setupNet(device, safetensorBytes, callbackUI, modelEntry) returns
// execute(input) -> [Float32Array labels], exactly what the tinygrad runners in
// webgpu_runners/ return, so inference-webgpu.js keeps its pre- and
// post-processing unchanged. `input` is the normalized volume after the
// model's transpose; labels come back in that same order.
//
// Each layer is its own submission (conv, then for GroupNorm models moments,
// moments_finish, norm), as in brainchopC. One submission per inference is
// what the tinygrad runners do, and a slow device can then exceed the GPU
// watchdog (amdgpu resets a job after a few seconds) and lose the device.
// ---------------------------------------------------------------------------

import { descriptorFor } from '../webgl2_runners/descriptors.js';
import { parseSafetensors, describeSafetensors, packWeights, deriveDescriptor } from '../webgl2_runners/weights.js';
import { buildWgsl } from './kernels.js';
import { choosePreset } from './presets.js';

const DIM = 256;   // main.js conforms every input to 256^3 before inference

/** f32 -> f16 bits, round to nearest even, for browsers without Float16Array. */
function toF16Bits(src) {
  if (typeof Float16Array !== 'undefined') return new Uint16Array(new Float16Array(src).buffer);
  const out = new Uint16Array(src.length);
  const f = new Float32Array(1), u = new Uint32Array(f.buffer);
  for (let i = 0; i < src.length; i++) {
    f[0] = src[i];
    const x = u[0], sign = (x >>> 16) & 0x8000, e = (x >>> 23) & 0xff, m = x & 0x7fffff;
    if (e === 0xff) { out[i] = sign | 0x7c00 | (m ? 0x200 : 0); continue; }
    const he = e - 127 + 15;
    if (he >= 0x1f) { out[i] = sign | 0x7c00; continue; }
    if (he <= 0) {
      if (he < -10) { out[i] = sign; continue; }
      const mm = m | 0x800000, shift = 14 - he;
      let h = mm >>> shift;
      const rem = mm & ((1 << shift) - 1), half = 1 << (shift - 1);
      if (rem > half || (rem === half && (h & 1))) h++;
      out[i] = sign | h; continue;
    }
    let h = (he << 10) | (m >>> 13);
    const rem = m & 0x1fff;
    if (rem > 0x1000 || (rem === 0x1000 && (h & 1))) h++;
    out[i] = sign | h;
  }
  return out;
}

/**
 * Whether this path can run `modelEntry` on `device`. Returns a reason string
 * when it cannot, so the caller can log why it used the tinygrad runner.
 */
export function nativeUnsupportedReason(device, modelEntry) {
  if (!device.features?.has('shader-f16')) return 'device lacks shader-f16';
  if (modelEntry.outputType === 'probability') return 'probability output (CAT-lite) is not ported yet';
  if (modelEntry.enableTTA) return 'test-time augmentation uses the tinygrad TTA runner';
  if (modelEntry.forceFP32) return 'model entry forces fp32';
  if (!modelEntry.webgpu_safetensor) return 'no safetensors weights';
  if (!descriptorFor(modelEntry)) return 'no descriptor in webgl2_runners/descriptors.js';
  return null;
}

/** Bytes of GPU memory the network needs: two activations + input + labels + readback + moments. */
function workingSetBytes(d, momLX) {
  const nvox = d.nx * d.ny * d.nz;
  const groups = (d.nx / momLX) * d.ny * d.nz;
  return 2 * nvox * d.cs * 2 + nvox * 2 + 2 * nvox * 4 + (groups + 1) * d.cs * 2 * 4;
}

export async function setupNet(device, safetensorBytes, callbackUI, modelEntry) {
  const entry = descriptorFor(modelEntry);
  if (!entry) throw new Error(`webgpu-native: no descriptor for ${modelEntry.path}`);
  const bytes = safetensorBytes instanceof Uint8Array ? safetensorBytes : new Uint8Array(safetensorBytes);
  const desc = describeSafetensors(parseSafetensors(
    bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength)));
  const d = deriveDescriptor(desc, {
    nx: DIM, ny: DIM, nz: DIM, activation: entry.activation, dilations: entry.dilations,
  });
  if (!d.nclass) throw new Error('webgpu-native: model has no classifier');
  // One bias_off serves the conv bias (family A) and the GroupNorm affine bias
  // (family C); no shipped model has both, so refuse rather than mis-run one.
  if (d.convBias && d.affine) throw new Error('webgpu-native: conv bias together with a GroupNorm affine is not supported');
  const preset = choosePreset(device, d);
  const nvox = DIM * DIM * DIM;
  const actBytes = nvox * d.cs * 2;
  const L = device.limits;
  if (actBytes > L.maxStorageBufferBindingSize || actBytes > L.maxBufferSize) {
    throw new Error(`webgpu-native: a ${actBytes >>> 20} MiB activation exceeds this device's buffer limits`);
  }
  console.log(`[WebGPU-native] ${entry.name}: ${d.chan}ch (stride ${d.cs}) ${d.nclass}cls ` +
    `norm=${d.norm} affine=${d.affine} act=${d.activation} | preset ${preset.localX}x${preset.vox} ` +
    `(moments ${preset.momLX}, ${preset.source}) | ~${Math.round(workingSetBytes(d, preset.momLX) / 1048576)} MiB`);

  const packed = packWeights(desc, d);
  const { layers, clsFloat, clsBiasFloat } = packed.offsets;

  device.pushErrorScope('validation');
  device.pushErrorScope('out-of-memory');
  let scopes = 2;
  try {
    const module = device.createShaderModule({ code: buildWgsl(d, preset) });

    // One explicit layout for all five entry points; an inferred layout only
    // carries the bindings its own entry point uses.
    const kinds = ['read-only-storage', 'storage', 'read-only-storage', 'uniform',
      'storage', 'storage', 'read-only-storage', 'read-only-storage'];
    const bgl = device.createBindGroupLayout({
      entries: kinds.map((type, binding) => ({ binding, visibility: GPUShaderStage.COMPUTE, buffer: { type } })),
    });
    const layout = device.createPipelineLayout({ bindGroupLayouts: [bgl] });
    const entryPoints = ['conv', 'classify', ...(d.norm === 'gn' ? ['moments', 'moments_finish', 'norm'] : [])];
    const pipelines = Object.fromEntries(await Promise.all(entryPoints.map(async (e) =>
      [e, await device.createComputePipelineAsync({ layout, compute: { module, entryPoint: e } })])));

    const buf = (size, usage) => device.createBuffer({ size, usage });
    const S = GPUBufferUsage.STORAGE;
    const partialGroups = (DIM / preset.momLX) * DIM * DIM;
    const weightsF16 = toF16Bits(packed.data);
    const input = buf(nvox * 2, S | GPUBufferUsage.COPY_DST);
    const actA = buf(actBytes, S);
    const actB = buf(actBytes, S);
    const weights = buf(Math.ceil(weightsF16.byteLength / 16) * 16, S | GPUBufferUsage.COPY_DST);
    const moments = buf((partialGroups + 1) * d.cs * 2 * 4, S);
    const labels = buf(nvox * 4, S | GPUBufferUsage.COPY_SRC);
    const readback = buf(nvox * 4, GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST);
    device.queue.writeBuffer(weights, 0, weightsF16);

    // Per layer: its own uniform block and bind group. Activations ping-pong:
    // layer 0 reads the one-channel input, then A -> B -> A ...
    const groupFor = (srcBuf, dstBuf, params) => {
      const ubo = buf(32, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST);
      device.queue.writeBuffer(ubo, 0, params);
      return device.createBindGroup({
        layout: bgl,
        entries: [
          { binding: 0, resource: { buffer: srcBuf } },
          { binding: 1, resource: { buffer: dstBuf } },
          { binding: 2, resource: { buffer: weights } },
          { binding: 3, resource: { buffer: ubo } },
          { binding: 4, resource: { buffer: moments } },
          { binding: 5, resource: { buffer: labels } },
          { binding: 6, resource: { buffer: weights } },
          { binding: 7, resource: { buffer: srcBuf } },
        ],
      });
    };
    const params = (fields) => {
      const p = new Uint32Array(8);
      p[0] = fields.dilation | 0; p[1] = fields.weightOff >>> 0; p[2] = fields.affineOff >>> 0;
      p[3] = fields.biasOff >>> 0; p[4] = fields.inChannels >>> 0; p[5] = fields.inStride >>> 0;
      p[6] = partialGroups;
      return p;
    };
    const steps = [];
    let src = input, dst = actA;
    layers.forEach((rec, li) => {
      const first = li === 0;
      steps.push(groupFor(src, dst, params({
        dilation: d.dilations[li],
        weightOff: rec.wq * 4,
        affineOff: rec.affQ !== undefined ? rec.affQ * 4 : 0,
        // conv bias (family A) or GroupNorm affine bias (family C); never both
        biasOff: rec.biasQ !== undefined ? rec.biasQ * 4 : (rec.affBiasQ !== undefined ? rec.affBiasQ * 4 : 0),
        inChannels: first ? 1 : d.cs,
        inStride: first ? 1 : d.cs,
      })));
      src = dst; dst = dst === actA ? actB : actA;
    });
    const classifyGroup = groupFor(src, dst, params({
      weightOff: clsFloat, biasOff: clsBiasFloat >= 0 ? clsBiasFloat : 0,
    }));

    scopes = 0;
    const oom = await device.popErrorScope();
    const invalid = await device.popErrorScope();
    if (oom || invalid) {
      throw new Error(`webgpu-native setup failed: ${(oom || invalid).message}`);
    }

    const convX = DIM / (preset.localX * preset.vox), rowX = DIM / preset.localX;
    const momX = DIM / preset.momLX;

    return async function execute(volume) {
      if (volume.length !== nvox) throw new Error(`webgpu-native: input has ${volume.length} voxels, expected ${nvox}`);
      device.pushErrorScope('validation');
      device.queue.writeBuffer(input, 0, toF16Bits(volume));
      for (const group of steps) {
        const enc = device.createCommandEncoder();
        const pass = enc.beginComputePass();
        pass.setBindGroup(0, group);
        pass.setPipeline(pipelines.conv);
        pass.dispatchWorkgroups(convX, DIM, DIM);
        if (d.norm === 'gn') {
          pass.setPipeline(pipelines.moments);
          pass.dispatchWorkgroups(momX, DIM, DIM);
          pass.setPipeline(pipelines.moments_finish);
          pass.dispatchWorkgroups(1, 1, 1);
          pass.setPipeline(pipelines.norm);
          pass.dispatchWorkgroups(rowX, DIM, DIM);
        }
        pass.end();
        device.queue.submit([enc.finish()]);
      }
      const enc = device.createCommandEncoder();
      const pass = enc.beginComputePass();
      pass.setBindGroup(0, classifyGroup);
      pass.setPipeline(pipelines.classify);
      pass.dispatchWorkgroups(rowX, DIM, DIM);
      pass.end();
      enc.copyBufferToBuffer(labels, 0, readback, 0, nvox * 4);
      device.queue.submit([enc.finish()]);

      await readback.mapAsync(GPUMapMode.READ);
      const out = new Float32Array(new Uint32Array(readback.getMappedRange()));
      readback.unmap();
      const err = await device.popErrorScope();
      if (err) throw new Error(`webgpu-native inference failed: ${err.message}`);
      return [out];
    };
  } finally {
    // Balance the scopes if setup threw before popping them.
    while (scopes-- > 0) await device.popErrorScope().catch(() => {});
  }
}

export default { setupNet };
