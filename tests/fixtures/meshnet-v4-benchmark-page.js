import { quantileNormalizeVolumeData, minMaxNormalizeVolumeData, transposeVolume3D } from '../../tensor-utils.js';
import { inferenceModelsList, resolveModelEntry } from '../../brainchop-parameters.js';
import { createDevice } from './cat-lite-browser-page.js';
import v4Runner from '../../webgpu_runners/meshnet_fast_v4_runner.js';
import v3Runner from '../../webgpu_runners/dkatlas24_int8_v3_runner.js';
import dkatlasFp16 from '../../webgpu_runners/dkatlas24_synth_runner.js';
import mindmapFp16 from '../../webgpu_runners/model24chan18cls_gdice_prio_runner.js';
import m16Fp16 from '../../webgpu_runners/model16chan18cls_runner.js';
import mindgrabFp16 from '../../webgpu_runners/mindgrab_runner.js';
import model5Fp16 from '../../webgpu_runners/model5_runner.js';

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

function compareLabels(ref, pred, nclass) {
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
    if (sumRef[c] > 0 || sumPred[c] > 0) {
      dices.push((2.0 * inter[c]) / Math.max(1, sumRef[c] + sumPred[c]));
    }
  }
  const macroDice = dices.reduce((a, b) => a + b, 0) / Math.max(1, dices.length);
  const minDice = Math.min(...dices);
  return {
    macroDice: +macroDice.toFixed(5),
    minDice: +minDice.toFixed(5),
    presentClasses: dices.length,
    fgAgreePct: +((100.0 * exactFg) / Math.max(1, fgUnion)).toFixed(3),
    allAgreePct: +((100.0 * exactAll) / ref.length).toFixed(3),
  };
}

async function loadNiftiInput(fname, useQuantile = true) {
  const buf = await (await fetch('/__ext_nifti/' + fname)).arrayBuffer();
  const dv = new DataView(buf);
  const dt = dv.getInt16(70, true);
  const voxOff = Math.round(dv.getFloat32(108, true));
  const length = 256 ** 3;
  const f32 = dt === 2
    ? Float32Array.from(new Uint8Array(buf, voxOff, length))
    : new Float32Array(buf.slice(voxOff, voxOff + length * 4));
  const random = Math.random;
  let seed = 123;
  Math.random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  let norm;
  try {
    norm = useQuantile ? quantileNormalizeVolumeData(f32) : minMaxNormalizeVolumeData(f32);
  } finally {
    Math.random = random;
  }
  return transposeVolume3D(norm, [256, 256, 256], [2, 1, 0]);
}

async function runRunner(label, mod, weightsBytes, entry, input, { iterations = 3, disableSubgroups = false, disableF16 = false } = {}) {
  const device = await createDevice({ timestampQuery: true, disableSubgroups, disableF16 });
  const profiler = profilePasses(device);
  let allocBytes = 0, maxBufBytes = 0;
  const origCreate = device.createBuffer.bind(device);
  device.createBuffer = (desc) => {
    allocBytes += desc.size;
    if (desc.size > maxBufBytes) maxBufBytes = desc.size;
    return origCreate(desc);
  };
  const wallMs = [], gpuMs = [];
  let outLabels = null, breakdown = null;
  try {
    device.pushErrorScope('validation');
    device.pushErrorScope('out-of-memory');
    const t0 = performance.now();
    const execute = await mod.setupNet(device, weightsBytes, null, entry);
    const setupMs = +(performance.now() - t0).toFixed(1);
    for (let it = 0; it < iterations; it++) {
      const s = performance.now();
      const [out] = await execute(input);
      const ms = performance.now() - s;
      wallMs.push(+ms.toFixed(1));
      const pTimes = await profiler.read();
      if (pTimes) {
        gpuMs.push(+pTimes.reduce((a, b) => a + b, 0).toFixed(1));
        if (it === iterations - 1 && execute.__passCategories?.length === pTimes.length) {
          breakdown = {};
          execute.__passCategories.forEach((cat, i) => {
            breakdown[cat] = +((breakdown[cat] || 0) + pTimes[i]).toFixed(2);
          });
        }
      }
      if (it === 0) outLabels = out;
    }
    const oom = await device.popErrorScope();
    const val = await device.popErrorScope();
    if (oom || val) throw new Error(label + ' WebGPU error: ' + (oom || val).message);
    return {
      stats: {
        setupMs,
        wallMs,
        warmWallMs: iterations > 1 ? Math.min(...wallMs.slice(1)) : wallMs[0],
        gpuMs,
        warmGpuMs: gpuMs.length > 1 ? Math.min(...gpuMs.slice(1)) : (gpuMs[0] || null),
        allocMiB: +(allocBytes / 1048576).toFixed(1),
        maxBufMiB: +(maxBufBytes / 1048576).toFixed(1),
        breakdown,
      },
      outLabels,
    };
  } finally {
    device.destroy();
  }
}

export async function runAllV4Checks() {
  const report = {};
  const t1CropQ = await loadNiftiInput('t1_crop.nii.gz', true);
  const mind6Q = await loadNiftiInput('mindboggle6.nii.gz', true);
  const strokeQ = await loadNiftiInput('strokeSubject.nii.gz', true);
  const t1CropMM = await loadNiftiInput('t1_crop.nii.gz', false);

  const wCache = {};
  const loadW = async (p) => (wCache[p] ||= new Uint8Array(await (await fetch(p)).arrayBuffer()));

  const refMods = {
    dkatlas24_synth: dkatlasFp16,
    model24chan18cls_gdice_prio: mindmapFp16,
    model16chan18cls: m16Fp16,
    mindgrab: mindgrabFp16,
    model5: model5Fp16,
  };

  const LEGACY_MODEL5_ENTRY = {
    id: 1,
    type: 'Segmentation',
    path: '/models/model5_gw_ae/model.json',
    webgpu_safetensor: './models/model5_gw_ae/model.safetensors',
    webgpu_runner: 'model5',
    enableQuantileNorm: false,
    enableTranspose: true,
    numClasses: 3,
    turbo: { webgpu_runner: 'meshnet_fast_v4', quantize8Bit: true, forceFP32: false },
  };

  async function benchPair(tag, fp16Id, _int8Id, scanName, input, opts = {}) {
    const raw = inferenceModelsList.find(m => m.id === fp16Id) || (fp16Id === 1 ? LEGACY_MODEL5_ENTRY : null);
    const base = opts.weightsOverride
      ? {
          ...raw,
          path: opts.weightsOverride.replace(/model\.safetensors$/, 'model.json'),
          webgpu_safetensor: `.${opts.weightsOverride}`,
        }
      : raw;
    const eRef = resolveModelEntry(base, false);
    const eTest = { ...resolveModelEntry(base, true), ...opts.entryOverride };
    const w = await loadW(eTest.webgpu_safetensor.replace(/^\.\//, '/'));
    const refMod = refMods[eRef.webgpu_runner];
    const ref = await runRunner(tag + '_fp16', refMod, w, eRef, input, { iterations: opts.refIters ?? 2 });
    const v4 = await runRunner(tag + '_v4', v4Runner, w, eTest, input, {
      iterations: opts.v4Iters ?? 3,
      disableSubgroups: !!opts.disableSubgroups,
      disableF16: !!opts.disableF16,
    });
    const nclass = eTest.numClasses || (eTest.id === 2 ? 2 : eTest.id === 1 ? 3 : 18);
    const parity = compareLabels(ref.outLabels, v4.outLabels, nclass);
    let v3 = null, parityVsV3 = null;
    if (opts.includeV3) {
      v3 = await runRunner(tag + '_v3', v3Runner, w, eTest, input, { iterations: 2 });
      parityVsV3 = compareLabels(ref.outLabels, v3.outLabels, nclass);
    }
    report[tag] = {
      scan: scanName,
      v4: v4.stats,
      fp16: ref.stats,
      v3: v3?.stats || null,
      speedupVsFp16: +(ref.stats.warmWallMs / v4.stats.warmWallMs).toFixed(2),
      speedupVsV3: v3 ? +(v3.stats.warmWallMs / v4.stats.warmWallMs).toFixed(2) : null,
      parityVsFp16: parity,
      parityV3VsFp16: parityVsV3,
    };
    console.log(tag, JSON.stringify({
      warmMs: v4.stats.warmWallMs,
      fp16Ms: ref.stats.warmWallMs,
      v3Ms: v3?.stats.warmWallMs,
      maxBufMiB: v4.stats.maxBufMiB,
      dice: parity.macroDice,
      fgPct: parity.fgAgreePct,
      breakdown: v4.stats.breakdown,
    }));
  }

  const INFANT_W = '/models/model24chan104cls_infant_refit_synth/model.safetensors';
  await benchPair('mindsnap104_t1crop', 5, 5, 't1_crop.nii.gz', t1CropQ, { includeV3: true, weightsOverride: INFANT_W });
  await benchPair('mindsnap104_t1crop_noConeSkip', 5, 5, 't1_crop.nii.gz', t1CropQ, {
    refIters: 1, v4Iters: 2, weightsOverride: INFANT_W, entryOverride: { disableConeSkip: true },
  });
  await benchPair('mindsnap104_mindboggle6', 5, 5, 'mindboggle6.nii.gz', mind6Q, { refIters: 2, v4Iters: 2, weightsOverride: INFANT_W });
  await benchPair('mindsnap104_strokeSubject', 5, 5, 'strokeSubject.nii.gz', strokeQ, { refIters: 2, v4Iters: 2, weightsOverride: INFANT_W });
  await benchPair('v3repbn104_t1crop', 5, 5, 't1_crop.nii.gz', t1CropQ, { refIters: 2, v4Iters: 2 });
  await benchPair('v3omnimodal104_t1crop', 60, 60, 't1_crop.nii.gz', t1CropQ, { refIters: 2, v4Iters: 2 });
  await benchPair('v3omnimodal104_strokeSubject', 60, 60, 'strokeSubject.nii.gz', strokeQ, { refIters: 2, v4Iters: 2 });
  await benchPair('mindmap18_t1crop', 21, 21, 't1_crop.nii.gz', t1CropQ, { includeV3: true });
  await benchPair('mindmap18_mindboggle6', 21, 21, 'mindboggle6.nii.gz', mind6Q, { refIters: 2, v4Iters: 2 });
  await benchPair('m16ch18_t1crop', 3, 3, 't1_crop.nii.gz', t1CropQ, { refIters: 2, v4Iters: 2 });
  await benchPair('mindgrab15ch_t1crop', 2, 2, 't1_crop.nii.gz', t1CropQ, { refIters: 2, v4Iters: 2 });
  await benchPair('model5_5ch_t1crop', 1, 1, 't1_crop.nii.gz', t1CropMM, { refIters: 2, v4Iters: 2 });
  await benchPair('mindsnap104_tier2_noSubgroups', 5, 5, 't1_crop.nii.gz', t1CropQ, {
    refIters: 1, v4Iters: 2, disableSubgroups: true,
  });
  await benchPair('mindmap18_tier2_noSubgroups', 21, 21, 't1_crop.nii.gz', t1CropQ, {
    refIters: 1, v4Iters: 2, disableSubgroups: true,
  });
  await benchPair('mindsnap104_tier3_f32', 5, 5, 't1_crop.nii.gz', t1CropQ, {
    refIters: 1, v4Iters: 1, disableF16: true,
  });
  await benchPair('mindmap18_tier3_f32', 21, 21, 't1_crop.nii.gz', t1CropQ, {
    refIters: 1, v4Iters: 1, disableF16: true,
  });

  return report;
}
