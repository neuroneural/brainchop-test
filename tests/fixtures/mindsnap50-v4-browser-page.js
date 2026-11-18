// In-browser end-to-end WebGPU V4 (8-bit) + WebGPU Native FP16 + WebGL2 (RGBA16F & RGBA8)
// + bilateral-safe postprocessing verification for MindSnap-50 (`id: 4`, `model24chan50cls`).
import * as fastV4Runner from '../../webgpu_runners/meshnet_fast_v4_runner.js';
import { setupNet as setupNativeFp16 } from '../../webgpu_native/meshnet_gpu.js';
import { descriptorFor } from '../../webgl2_runners/descriptors.js';
import { parseSafetensors, describeSafetensors, applyClassifierBias, packWeights, deriveDescriptor } from '../../webgl2_runners/weights.js';
import { probeWebgl2, runMeshNetGL } from '../../webgl2_runners/meshnet_gl.js';
import { inferenceModelsList, brainChopOpts, resolveModelEntry } from '../../brainchop-parameters.js';
import { processSegmentationVolume, transposeVolume3DToU8, countUniqueLabelsU8 } from '../../tensor-utils.js';
import { prepareInput, createDevice } from './cat-lite-browser-page.js';

function compare50(ref, pred, nclass = 50) {
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
    if (sumRef[c] > 0) dices.push((2.0 * inter[c]) / (sumRef[c] + sumPred[c]));
  }
  return {
    macroDice: dices.reduce((a, b) => a + b, 0) / dices.length,
    minDice: Math.min(...dices),
    presentClasses: dices.length,
    fgAgreePct: (100.0 * exactFg) / Math.max(1, fgUnion),
    allAgreePct: (100.0 * exactAll) / ref.length,
  };
}

export async function runMindSnap50BrowserVerification({ iterations = 5, hasPyFp32Ref = false } = {}) {
  const { input, length } = await prepareInput('original');
  const rawEntry = inferenceModelsList.find((m) => m.id === 4);
  if (!rawEntry) throw new Error('Missing id=4 in inferenceModelsList');
  if (rawEntry.numClasses !== 50 || !rawEntry.path.includes('model24chan50cls')) {
    throw new Error(`Unexpected id=4 entry: ${JSON.stringify(rawEntry)}`);
  }

  const entryV4 = resolveModelEntry(rawEntry, true);
  const entryFp16 = resolveModelEntry(rawEntry, false);
  const weightsUrl = '/models/model24chan50cls/model.safetensors';
  const rawBuf = await (await fetch(weightsUrl)).arrayBuffer();
  const weights = new Uint8Array(rawBuf);

  let pyRefLabels = null;
  if (hasPyFp32Ref) {
    const refBuf = await (await fetch('/__py_fp32_ref_t1crop.u8')).arrayBuffer();
    pyRefLabels = new Uint8Array(refBuf);
    if (pyRefLabels.length !== length) {
      throw new Error(`Python FP32 reference length mismatch: ${pyRefLabels.length} vs ${length}`);
    }
  }

  async function runGpuPath(label, setupFn, entry) {
    const device = await createDevice({ timestampQuery: false });
    let allocBytes = 0, maxBufBytes = 0;
    const origCreate = device.createBuffer.bind(device);
    device.createBuffer = (desc) => {
      allocBytes += desc.size;
      if (desc.size > maxBufBytes) maxBufBytes = desc.size;
      return origCreate(desc);
    };
    const tSetup0 = performance.now();
    const execute = await setupFn(device, weights, () => {}, entry);
    const setupMs = performance.now() - tSetup0;
    const wallMs = [];
    let out = null;
    for (let it = 0; it < iterations; it++) {
      const t0 = performance.now();
      [out] = await execute(input);
      wallMs.push(performance.now() - t0);
    }
    const labels = out instanceof Uint8Array ? out : new Uint8Array(out);
    if (typeof execute.dispose === 'function') execute.dispose({ keepSharedWorkspace: false });
    device.destroy();
    return {
      label,
      setupMs: +setupMs.toFixed(2),
      coldWallMs: +wallMs[0].toFixed(2),
      warmMedianMs: +wallMs.slice(1).sort((a, b) => a - b)[Math.floor((wallMs.length - 1) / 2)].toFixed(2),
      wallMs: wallMs.map((v) => +v.toFixed(2)),
      maxBufferMiB: +(maxBufBytes / 1048576).toFixed(2),
      totalAllocMiB: +(allocBytes / 1048576).toFixed(2),
      uniqueClasses: countUniqueLabelsU8(labels),
      labels,
    };
  }

  const fp16Res = await runGpuPath('webgpu_native_fp16', setupNativeFp16, entryFp16);
  const v4Res = await runGpuPath('webgpu_fast_v4_8bit', fastV4Runner.setupNet, entryV4);

  // Native WebGL2 RGBA16F & RGBA8 verification
  const parsed = parseSafetensors(rawBuf);
  const spec = descriptorFor(entryFp16);
  const desc = applyClassifierBias(describeSafetensors(parsed), entryFp16.classifierBias);

  function runGlMode(quantize8Bit) {
    const d = deriveDescriptor(desc, {
      nx: 256,
      ny: 256,
      nz: 256,
      activation: spec.activation,
      dilations: spec.dilations,
      quantize8Bit,
    });
    const probe = probeWebgl2(d, [256, 256, 256]);
    if (!probe.supported) throw new Error(`probeWebgl2(q8=${quantize8Bit}) failed: ${(probe.reasons || []).join('; ')}`);
    const packed = packWeights(desc, d);
    const t0 = performance.now();
    const glOut = runMeshNetGL({
      descriptor: d,
      packed: packed.data,
      offsets: packed.offsets,
      input,
      probability: null,
      vox2: probe.vox2,
      onProgress: () => {},
      onLog: (m) => console.log(m),
    });
    const ms = performance.now() - t0;
    const u8 = glOut.labels instanceof Uint8Array ? glOut.labels : new Uint8Array(glOut.labels);
    return {
      ms: +ms.toFixed(2),
      activationMiB: +(probe.activationBytes / 1048576).toFixed(2),
      vox2: !!probe.vox2,
      renderer: probe.renderer,
      uniqueClasses: countUniqueLabelsU8(u8),
      labels: u8,
    };
  }

  const gl16Res = runGlMode(false);
  const gl8Res = runGlMode(true);

  // Verify `processSegmentationVolume` preserves BOTH left & right hemispheres of bilateral classes!
  const nativeOrderV4 = transposeVolume3DToU8(v4Res.labels, [256, 256, 256], [2, 1, 0]);
  // Add a deliberate isolated 8-voxel exterior noise island at corner (2,2,2) to prove binary mask cleanup removes it
  const withExteriorSpeckle = nativeOrderV4.slice();
  withExteriorSpeckle[(2 * 256 + 2) * 256 + 2] = 25;
  const postClean = await processSegmentationVolume(
    withExteriorSpeckle,
    new Uint8Array(length),
    entryV4,
    { ...brainChopOpts, isPostProcessEnable: true },
    null,
    [256, 256, 256]
  );
  const speckleRemoved = postClean[(2 * 256 + 2) * 256 + 2] === 0;
  // Check bilateral preservation along X (left < 120 vs right > 136) for cortical class 42 (superiorfrontal) & 10 (Hippocampus)
  let leftCtx = 0, rightCtx = 0, leftHip = 0, rightHip = 0;
  for (let z = 0; z < 256; z++) {
    for (let y = 0; y < 256; y++) {
      const row = (z * 256 + y) * 256;
      for (let x = 0; x < 256; x++) {
        const c = postClean[row + x];
        if (c >= 16 && c <= 49) {
          if (x < 120) leftCtx++;
          else if (x > 136) rightCtx++;
        } else if (c === 10) {
          if (x < 124) leftHip++;
          else if (x > 132) rightHip++;
        }
      }
    }
  }

  const parity = {
    webgpu_v4_vs_webgpu_fp16: compare50(fp16Res.labels, v4Res.labels, 50),
    webgl2_rgba16f_vs_webgpu_fp16: compare50(fp16Res.labels, gl16Res.labels, 50),
    webgl2_rgba8_vs_webgpu_fp16: compare50(fp16Res.labels, gl8Res.labels, 50),
  };
  if (pyRefLabels) {
    parity.webgpu_v4_vs_python_fp32 = compare50(pyRefLabels, v4Res.labels, 50);
    parity.webgpu_fp16_vs_python_fp32 = compare50(pyRefLabels, fp16Res.labels, 50);
    parity.webgl2_rgba16f_vs_python_fp32 = compare50(pyRefLabels, gl16Res.labels, 50);
    parity.webgl2_rgba8_vs_python_fp32 = compare50(pyRefLabels, gl8Res.labels, 50);
  }

  return {
    modelId: rawEntry.id,
    modelName: rawEntry.modelName,
    webgpu_v4_8bit: {
      setupMs: v4Res.setupMs,
      coldWallMs: v4Res.coldWallMs,
      warmMedianMs: v4Res.warmMedianMs,
      wallMs: v4Res.wallMs,
      maxBufferMiB: v4Res.maxBufferMiB,
      totalAllocMiB: v4Res.totalAllocMiB,
      uniqueClasses: v4Res.uniqueClasses,
    },
    webgpu_native_fp16: {
      setupMs: fp16Res.setupMs,
      coldWallMs: fp16Res.coldWallMs,
      warmMedianMs: fp16Res.warmMedianMs,
      maxBufferMiB: fp16Res.maxBufferMiB,
      uniqueClasses: fp16Res.uniqueClasses,
    },
    webgl2_rgba16f: {
      inferenceMs: gl16Res.ms,
      activationMiB: gl16Res.activationMiB,
      vox2: gl16Res.vox2,
      renderer: gl16Res.renderer,
      uniqueClasses: gl16Res.uniqueClasses,
    },
    webgl2_rgba8: {
      inferenceMs: gl8Res.ms,
      activationMiB: gl8Res.activationMiB,
      vox2: gl8Res.vox2,
      uniqueClasses: gl8Res.uniqueClasses,
    },
    postprocess_bilateral_check: {
      exteriorSpeckleRemoved: speckleRemoved,
      leftCorticalVoxels: leftCtx,
      rightCorticalVoxels: rightCtx,
      leftHippocampusVoxels: leftHip,
      rightHippocampusVoxels: rightHip,
      uniqueClassesAfterPostprocess: countUniqueLabelsU8(postClean),
    },
    parity,
  };
}
