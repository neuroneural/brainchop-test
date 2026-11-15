import synthFp16 from '../../webgpu_runners/dkatlas24_synth_runner.js';
import int8Runner from '../../webgpu_runners/dkatlas24_int8_runner.js';
import int8V3Runner from '../../webgpu_runners/dkatlas24_int8_v3_runner.js';
import mindmapFp16 from '../../webgpu_runners/model24chan18cls_gdice_prio_runner.js';
import mindmapInt8 from '../../webgpu_runners/mindmap24_int8_runner.js';
import m16Fp16 from '../../webgpu_runners/model16chan18cls_runner.js';
import m16Int8 from '../../webgpu_runners/model16chan18cls_int8_runner.js';
import mindgrabFp16 from '../../webgpu_runners/mindgrab_runner.js';
import mindgrabInt8 from '../../webgpu_runners/mindgrab_int8_runner.js';
import { descriptorFor } from '../../webgl2_runners/descriptors.js';
import { parseSafetensors, describeSafetensors, packWeights, deriveDescriptor } from '../../webgl2_runners/weights.js';
import { probeWebgl2, runMeshNetGL } from '../../webgl2_runners/meshnet_gl.js';
import { inferenceModelsList, resolveModelEntry } from '../../brainchop-parameters.js';
import { prepareInput, createDevice } from './cat-lite-browser-page.js';

function profilePasses(device) {
  if (!device.features.has('timestamp-query')) return { read: async () => null };
  const queries = device.createQuerySet({ type: 'timestamp', count: 512 });
  const resolve = device.createBuffer({ size: 4096, usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC });
  const readback = device.createBuffer({ size: 4096, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });
  const createEncoder = device.createCommandEncoder.bind(device);
  let count = 0;
  device.createCommandEncoder = (...args) => {
    const encoder = createEncoder(...args);
    const begin = encoder.beginComputePass.bind(encoder), finish = encoder.finish.bind(encoder);
    count = 0;
    encoder.beginComputePass = (descriptor = {}) => {
      const first = count * 2;
      if (first + 1 >= 512) return begin(descriptor);
      count++;
      return begin({ ...descriptor, timestampWrites: { querySet: queries, beginningOfPassWriteIndex: first, endOfPassWriteIndex: first + 1 } });
    };
    encoder.finish = (...args) => {
      if (count > 0) {
        encoder.resolveQuerySet(queries, 0, count * 2, resolve, 0);
        encoder.copyBufferToBuffer(resolve, 0, readback, 0, count * 16);
      }
      return finish(...args);
    };
    return encoder;
  };
  return {
    read: async () => {
      await readback.mapAsync(GPUMapMode.READ);
      const ticks = new BigUint64Array(readback.getMappedRange());
      const times = Array.from({ length: count }, (_, i) => Number(ticks[i * 2 + 1] - ticks[i * 2]) / 1e6);
      readback.unmap();
      return times;
    },
  };
}

function compareLabels(ref, pred, nclass = 104) {
  const inter = new Float64Array(nclass);
  const sumRef = new Float64Array(nclass);
  const sumPred = new Float64Array(nclass);
  let exactAll = 0, exactFg = 0, fgUnion = 0;
  for (let i = 0; i < ref.length; i++) {
    const r = ref[i] | 0;
    const p = pred[i] | 0;
    if (r === p) exactAll++;
    if (r > 0 || p > 0) {
      fgUnion++;
      if (r === p) exactFg++;
    }
    sumRef[r]++;
    sumPred[p]++;
    if (r === p) inter[r]++;
  }
  const dices = [];
  for (let c = 1; c < nclass; c++) {
    if (sumRef[c] > 0) {
      dices.push((2.0 * inter[c]) / (sumRef[c] + sumPred[c]));
    }
  }
  const macroDice = dices.reduce((a, b) => a + b, 0) / dices.length;
  const minDice = Math.min(...dices);
  return {
    macroDice,
    minDice,
    presentClasses: dices.length,
    fgAgreePct: (100.0 * exactFg) / Math.max(1, fgUnion),
    allAgreePct: (100.0 * exactAll) / ref.length,
  };
}

export async function benchmarkInt8({ variant = 'original', iterations = 3, modelFamily = 'mindsnap104' } = {}) {
  const { input, length } = await prepareInput(variant);
  const FAMILY_CFG = {
    mindsnap104: { modelId: 5, nclass: 104, weightsPath: '/models/model24chan104cls_infant_refit_synth/model.safetensors', fp16Mod: synthFp16, int8Mod: int8Runner, hasV3: true },
    v3_repbn:    { modelId: 5, nclass: 104, weightsPath: '/models/model24chan104cls_v3_repbn/model.safetensors', fp16Mod: synthFp16, int8Mod: int8Runner, hasV3: true },
    v3_omnimodal: { modelId: 60, nclass: 104, weightsPath: '/models/model24chan104cls_v3_omnimodal/model.safetensors', fp16Mod: synthFp16, int8Mod: int8Runner, hasV3: false },
    lesion104:   { modelId: 14, nclass: 104, weightsPath: '/models/model24chan104cls_synth/model.safetensors', fp16Mod: synthFp16, int8Mod: int8Runner, hasV3: false },
    mindmap18:   { modelId: 21, nclass: 18, weightsPath: '/models/model24chan18cls_gdice_prio/model.safetensors', fp16Mod: mindmapFp16, int8Mod: mindmapInt8, hasV3: true },
    mindmap16:   { modelId: 3, nclass: 18, weightsPath: '/models/model16chan18cls/model.safetensors', fp16Mod: m16Fp16, int8Mod: m16Int8, hasV3: false },
    mindgrab15:  { modelId: 2, nclass: 2, weightsPath: '/models/mindgrab/model.safetensors', fp16Mod: mindgrabFp16, int8Mod: mindgrabInt8, hasV3: false },
  };
  const cfg = FAMILY_CFG[modelFamily];
  if (!cfg) throw new Error(`Unknown modelFamily: ${modelFamily}`);
  const { modelId, nclass, weightsPath, fp16Mod, int8Mod, hasV3 } = cfg;
  const rawEntry = inferenceModelsList.find(m => m.id === modelId);
  if (!rawEntry) throw new Error(`Missing model entry id=${modelId}`);
  const baseEntry = weightsPath && !rawEntry.webgpu_safetensor?.endsWith(weightsPath)
    ? {
        ...rawEntry,
        path: weightsPath.replace(/model\.safetensors$/, 'model.json'),
        webgpu_safetensor: `.${weightsPath}`,
      }
    : rawEntry;
  const entryFp16 = resolveModelEntry(baseEntry, false);
  const entryInt8 = resolveModelEntry(baseEntry, true);

  const weights = new Uint8Array(await (await fetch(weightsPath)).arrayBuffer());
  const hasDot4 = !!navigator.gpu?.wgslLanguageFeatures?.has?.('packed_4x8_integer_dot_product');

  async function benchWebGPU(label, mod, entry) {
    const device = await createDevice({ timestampQuery: true });
    const profiler = profilePasses(device);
    let allocBytes = 0, maxBufBytes = 0;
    const origCreate = device.createBuffer.bind(device);
    device.createBuffer = (desc) => {
      allocBytes += desc.size;
      if (desc.size > maxBufBytes) maxBufBytes = desc.size;
      return origCreate(desc);
    };
    const res = { inferenceMs: [], gpuKernelSumMs: [], setupMs: 0, allocationMiB: 0, maxBufferMiB: 0 };
    let outLabels = null;
    try {
      device.pushErrorScope('validation');
      device.pushErrorScope('out-of-memory');
      const t0 = performance.now();
      const execute = await mod.setupNet(device, weights, null, entry);
      res.setupMs = performance.now() - t0;
      res.allocationMiB = allocBytes / 1048576;
      res.maxBufferMiB = maxBufBytes / 1048576;
      for (let it = 0; it < iterations; it++) {
        const s = performance.now();
        const [out] = await execute(input);
        const ms = performance.now() - s;
        res.inferenceMs.push(ms);
        const passTimes = await profiler.read();
        if (passTimes) {
          res.numPasses = passTimes.length;
          res.gpuKernelSumMs.push(passTimes.reduce((a, b) => a + b, 0));
          if (it === iterations - 1 && passTimes.length === 53) {
            let conv0 = passTimes[0], convH = 0, mom = 0, norm = 0;
            for (let li = 0; li < 13; li++) {
              if (li > 0) convH += passTimes[li * 4];
              mom += passTimes[li * 4 + 1] + passTimes[li * 4 + 2];
              norm += passTimes[li * 4 + 3];
            }
            res.breakdownMs = { conv0, convHidden12: convH, moments13: mom, norm13: norm, classify: passTimes[52] };
          } else if (it === iterations - 1 && execute.__passCategories?.length === passTimes.length) {
            const breakdown = {};
            execute.__passCategories.forEach((cat, i) => {
              breakdown[cat] = +((breakdown[cat] || 0) + passTimes[i]).toFixed(2);
            });
            res.breakdownMs = breakdown;
          }
        }
        if (out.length !== length) throw new Error(`${label}: wrong output length ${out.length}`);
        if (it === 0) outLabels = out;
        console.log(`[WebGPU ${label}] iter ${it}: wall=${ms.toFixed(1)} ms, gpuSum=${(res.gpuKernelSumMs.at(-1) || 0).toFixed(1)} ms, alloc=${res.allocationMiB.toFixed(1)} MiB (maxBuf=${res.maxBufferMiB.toFixed(1)} MiB)`);
      }
      const oom = await device.popErrorScope();
      const val = await device.popErrorScope();
      if (oom || val) throw new Error(`${label} WebGPU error: ${(oom || val).message}`);
    } finally {
      device.destroy();
    }
    const warmWall = res.inferenceMs.length > 1 ? res.inferenceMs.slice(1) : res.inferenceMs;
    res.warmIterations = warmWall.length;
    res.warmMinMs = Math.min(...warmWall);
    res.warmMeanMs = warmWall.reduce((a, b) => a + b, 0) / warmWall.length;
    if (res.gpuKernelSumMs.length > 0) {
      const warmGpu = res.gpuKernelSumMs.length > 1 ? res.gpuKernelSumMs.slice(1) : res.gpuKernelSumMs;
      res.warmGpuMinMs = Math.min(...warmGpu);
      res.warmGpuMeanMs = warmGpu.reduce((a, b) => a + b, 0) / warmGpu.length;
    }
    return { stats: res, outLabels };
  }

  function benchWebGL2(label, entry) {
    const descEntry = descriptorFor(entry);
    const parsed = parseSafetensors(weights.buffer.slice(weights.byteOffset, weights.byteOffset + weights.byteLength));
    const desc = describeSafetensors(parsed);
    if (entry.classifierBias && desc.classifier) {
      desc.classifier.bias = Float32Array.from(entry.classifierBias);
    }
    const d = deriveDescriptor(desc, {
      nx: 256, ny: 256, nz: 256,
      activation: descEntry.activation,
      dilations: descEntry.dilations,
      quantize8Bit: !!entry.quantize8Bit,
    });
    const probe = probeWebgl2(d, [256, 256, 256]);
    if (!probe.supported) throw new Error(`${label} probe failed: ${probe.reasons.join('; ')}`);
    const packed = packWeights(desc, d);
    const canvas = new OffscreenCanvas(1, 1);
    const gl = canvas.getContext('webgl2', {
      antialias: false, depth: false, stencil: false,
      preserveDrawingBuffer: false, powerPreference: 'high-performance',
    });
    const inferenceMs = [];
    let outLabels = null;
    try {
      for (let it = 0; it < 2; it++) {
        const s = performance.now();
        const r = runMeshNetGL({
          descriptor: d,
          packed: packed.data,
          offsets: packed.offsets,
          input,
          vox2: probe.vox2,
          gl,
        });
        const ms = performance.now() - s;
        inferenceMs.push(ms);
        if (it === 0) outLabels = new Uint8Array(r.labels);
        console.log(`[WebGL2 ${label}] iter ${it}: wall=${ms.toFixed(1)} ms, texMem=${(probe.activationBytes / 1048576).toFixed(1)} MiB (${probe.renderer})`);
      }
    } finally {
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    return {
      stats: {
        inferenceMs,
        activationMiB: probe.activationBytes / 1048576,
        renderer: probe.renderer,
      },
      outLabels,
    };
  }

  const wgpuFp16 = await benchWebGPU('fp16_ref', fp16Mod, entryFp16);
  const wgpuInt8V3 = hasV3 ? await benchWebGPU('int8_v3', int8V3Runner, entryInt8) : null;
  const wgpuInt8 = await benchWebGPU('int8_v4', int8Mod, entryInt8);
  const wglFp16 = benchWebGL2('rgba16f', entryFp16);
  const wglRgba8 = benchWebGL2('rgba8', entryInt8);

  const parity = {
    webgpu_int8_vs_fp16: compareLabels(wgpuFp16.outLabels, wgpuInt8.outLabels, nclass),
    webgpu_int8_v3_vs_fp16: wgpuInt8V3 ? compareLabels(wgpuFp16.outLabels, wgpuInt8V3.outLabels, nclass) : null,
    webgl2_rgba16f_vs_webgpu_fp16: compareLabels(wgpuFp16.outLabels, wglFp16.outLabels, nclass),
    webgl2_rgba8_vs_webgl2_rgba16f: compareLabels(wglFp16.outLabels, wglRgba8.outLabels, nclass),
    webgl2_rgba8_vs_webgpu_fp16: compareLabels(wgpuFp16.outLabels, wglRgba8.outLabels, nclass),
  };

  const wgpuWarmFp16 = wgpuFp16.stats.warmMinMs;
  const wgpuWarmInt8V3 = wgpuInt8V3 ? wgpuInt8V3.stats.warmMinMs : null;
  const wgpuWarmInt8 = wgpuInt8.stats.warmMinMs;
  const wglWarmFp16 = Math.min(...wglFp16.stats.inferenceMs.slice(1));
  const wglWarmRgba8 = Math.min(...wglRgba8.stats.inferenceMs.slice(1));

  return {
    hasDot4I8Packed: hasDot4,
    speedups: {
      webgpu_wall_speedup: wgpuWarmFp16 / wgpuWarmInt8,
      webgpu_wall_mean_speedup: wgpuFp16.stats.warmMeanMs / wgpuInt8.stats.warmMeanMs,
      v4_vs_v3_wall_min_speedup: wgpuInt8V3 ? wgpuWarmInt8V3 / wgpuWarmInt8 : null,
      v4_vs_v3_wall_mean_speedup: wgpuInt8V3 ? wgpuInt8V3.stats.warmMeanMs / wgpuInt8.stats.warmMeanMs : null,
      webgpu_kernel_speedup: (
        wgpuFp16.stats.warmGpuMinMs && wgpuInt8.stats.warmGpuMinMs
          ? wgpuFp16.stats.warmGpuMinMs / wgpuInt8.stats.warmGpuMinMs
          : null
      ),
      webgpu_mem_saving_pct: 100.0 * (1.0 - wgpuInt8.stats.allocationMiB / wgpuFp16.stats.allocationMiB),
      webgpu_maxbuf_saving_pct: 100.0 * (1.0 - wgpuInt8.stats.maxBufferMiB / wgpuFp16.stats.maxBufferMiB),
      webgl2_wall_speedup: wglWarmFp16 / wglWarmRgba8,
      webgl2_mem_saving_pct: 100.0 * (1.0 - wglRgba8.stats.activationMiB / wglFp16.stats.activationMiB),
    },
    webgpu_fp16: wgpuFp16.stats,
    webgpu_int8_v3: wgpuInt8V3 ? wgpuInt8V3.stats : null,
    webgpu_int8: wgpuInt8.stats,
    webgl2_rgba16f: wglFp16.stats,
    webgl2_rgba8: wglRgba8.stats,
    parity,
  };
}
