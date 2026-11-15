import mindgrabFp16 from '../../webgpu_runners/mindgrab_runner.js';
import mindgrabInt8 from '../../webgpu_runners/mindgrab_int8_runner.js';
import { inferenceModelsList, resolveModelEntry } from '../../brainchop-parameters.js';
import { quantileNormalizeVolumeData, processSegmentationVolume } from '../../tensor-utils.js';
import { createDevice } from './cat-lite-browser-page.js';

const DIM = 256;
const NVOX = DIM * DIM * DIM;
const SHAPE = [DIM, DIM, DIM];

function hashSeed(str, id) {
  let h = (2166136261 ^ (id | 0)) >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619) >>> 0;
  }
  return h >>> 0;
}

async function normalizeScanDeterministic(imageU8, col, id) {
  const random = Math.random;
  let seed = hashSeed(col, id) || 123;
  Math.random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  try {
    return quantileNormalizeVolumeData(imageU8, 0.05, 0.95);
  } finally {
    Math.random = random;
  }
}

function toInt32Labels(f32Out) {
  const out = new Int32Array(f32Out.length);
  for (let i = 0; i < f32Out.length; i++) out[i] = f32Out[i] > 0.5 ? 1 : 0;
  return out;
}

async function runMindGrabPostprocess(rawI32, imageU8, entry) {
  const maskResult = {};
  await processSegmentationVolume(rawI32, imageU8, entry, { isPostProcessEnable: true }, maskResult, SHAPE);
  if (!maskResult.mask) throw new Error(`processSegmentationVolume did not populate mask for id=${entry.id}`);
  return maskResult.mask;
}

function compareBinaryMasks(ref, pred) {
  let tp = 0, sumRef = 0, sumPred = 0, exactAll = 0;
  for (let i = 0; i < NVOX; i++) {
    const r = ref[i] !== 0 ? 1 : 0;
    const p = pred[i] !== 0 ? 1 : 0;
    sumRef += r;
    sumPred += p;
    if (r === p) {
      exactAll++;
      if (r === 1) tp++;
    }
  }
  const fgUnion = sumRef + sumPred - tp;
  const fgDice = (sumRef + sumPred) > 0 ? (2.0 * tp) / (sumRef + sumPred) : 0.0;
  const fgAgreePct = fgUnion > 0 ? (100.0 * tp) / fgUnion : 100.0;
  const allAgreePct = (100.0 * exactAll) / NVOX;
  return { fgDice, fgAgreePct, allAgreePct, refVox: sumRef, predVox: sumPred };
}

function summarize(arr) {
  const n = arr.length;
  if (!n) return { mean: 0, min: 0, max: 0, std: 0 };
  let sum = 0, min = Infinity, max = -Infinity;
  for (const v of arr) {
    sum += v;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  const mean = sum / n;
  let sq = 0;
  for (const v of arr) sq += (v - mean) * (v - mean);
  return { mean, min, max, std: Math.sqrt(sq / n) };
}

export async function runSynthStripBenchmark({ plan }) {
  const baseEntry = inferenceModelsList.find((m) => m.id === 2);
  if (!baseEntry) throw new Error('Missing MindGrab entry id=2 in brainchop-parameters.js');
  const entryFp16 = resolveModelEntry(baseEntry, false);
  const entryV4 = resolveModelEntry(baseEntry, true);

  const weights = new Uint8Array(await (await fetch('/models/mindgrab/model.safetensors')).arrayBuffer());

  async function initRunner(mod, entry) {
    const dev = await createDevice({ timestampQuery: false });
    let allocBytes = 0, maxBufBytes = 0;
    const origCreate = dev.createBuffer.bind(dev);
    dev.createBuffer = (desc) => {
      allocBytes += desc.size;
      if (desc.size > maxBufBytes) maxBufBytes = desc.size;
      return origCreate(desc);
    };
    const t0 = performance.now();
    const exec = await mod.setupNet(dev, weights, null, entry);
    return {
      dev,
      exec,
      setupMs: performance.now() - t0,
      allocMiB: allocBytes / 1048576,
      maxBufMiB: maxBufBytes / 1048576,
    };
  }

  const fp16 = await initRunner(mindgrabFp16, entryFp16);
  const v4 = await initRunner(mindgrabInt8, entryV4);

  const flatPlan = [];
  for (const { name, ids } of plan) {
    for (const id of ids) flatPlan.push({ col: name, id });
  }

  const fetchScan = async (col, id) => {
    const res = await fetch(`/__synthstrip/scan?col=${encodeURIComponent(col)}&id=${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${col} id=${id}`);
    const ab = await res.arrayBuffer();
    if (ab.byteLength !== NVOX * 2) throw new Error(`Unexpected scan payload size ${ab.byteLength} for ${col} id=${id}`);
    return {
      imageU8: new Uint8Array(ab, 0, NVOX),
      gtMask: new Uint8Array(ab, NVOX, NVOX),
    };
  };

  const scanResults = [];
  try {
    fp16.dev.pushErrorScope('out-of-memory');
    v4.dev.pushErrorScope('out-of-memory');

    let nextFetch = flatPlan.length > 0 ? fetchScan(flatPlan[0].col, flatPlan[0].id) : null;

    for (let idx = 0; idx < flatPlan.length; idx++) {
      const { col, id } = flatPlan[idx];
      const { imageU8, gtMask } = await nextFetch;
      if (idx + 1 < flatPlan.length) {
        nextFetch = fetchScan(flatPlan[idx + 1].col, flatPlan[idx + 1].id);
      } else {
        nextFetch = null;
      }

      const input = await normalizeScanDeterministic(imageU8, col, id);

      const t0Fp16 = performance.now();
      const [rawFp16F32] = await fp16.exec(input);
      const fp16Ms = performance.now() - t0Fp16;

      const t0V4 = performance.now();
      const [rawV4F32] = await v4.exec(input);
      const v4Ms = performance.now() - t0V4;

      const rawFp16I32 = toInt32Labels(rawFp16F32);
      const rawV4I32 = toInt32Labels(rawV4F32);
      const ccFp16 = await runMindGrabPostprocess(rawFp16I32, imageU8, entryFp16);
      const ccV4 = await runMindGrabPostprocess(rawV4I32, imageU8, entryV4);

      const parityRaw = compareBinaryMasks(rawFp16I32, rawV4I32);
      const parityCC = compareBinaryMasks(ccFp16, ccV4);
      const fp16RawGt = compareBinaryMasks(gtMask, rawFp16I32);
      const v4RawGt = compareBinaryMasks(gtMask, rawV4I32);
      const fp16CCGt = compareBinaryMasks(gtMask, ccFp16);
      const v4CCGt = compareBinaryMasks(gtMask, ccV4);

      const row = {
        col,
        id,
        fp16Ms: +fp16Ms.toFixed(1),
        v4Ms: +v4Ms.toFixed(1),
        speedup: +(fp16Ms / v4Ms).toFixed(2),
        parityRawDice: +parityRaw.fgDice.toFixed(5),
        parityRawFgAgreePct: +parityRaw.fgAgreePct.toFixed(3),
        parityCCDice: +parityCC.fgDice.toFixed(5),
        parityCCFgAgreePct: +parityCC.fgAgreePct.toFixed(3),
        fp16RawGtDice: +fp16RawGt.fgDice.toFixed(5),
        v4RawGtDice: +v4RawGt.fgDice.toFixed(5),
        fp16CCGtDice: +fp16CCGt.fgDice.toFixed(5),
        v4CCGtDice: +v4CCGt.fgDice.toFixed(5),
        deltaGtDice: +(v4CCGt.fgDice - fp16CCGt.fgDice).toFixed(5),
      };
      scanResults.push(row);
      console.log(
        `[synthstrip ${idx + 1}/${flatPlan.length}] ${col}[id=${id}] ` +
        `fp16=${row.fp16Ms}ms v4=${row.v4Ms}ms (${row.speedup}x) | ` +
        `parityCC=${row.parityCCDice} (fg=${row.parityCCFgAgreePct}%) | ` +
        `GT: fp16=${row.fp16CCGtDice} v4=${row.v4CCGtDice} (delta=${row.deltaGtDice >= 0 ? '+' : ''}${row.deltaGtDice})`
      );
    }

    const oom1 = await fp16.dev.popErrorScope();
    const oom2 = await v4.dev.popErrorScope();
    if (oom1 || oom2) throw new Error(`WebGPU OOM: ${(oom1 || oom2).message}`);
  } finally {
    fp16.dev.destroy();
    v4.dev.destroy();
  }

  const byCollection = {};
  for (const { name } of plan) {
    const rows = scanResults.filter((r) => r.col === name);
    byCollection[name] = {
      n: rows.length,
      fp16MsMean: +summarize(rows.map((r) => r.fp16Ms)).mean.toFixed(1),
      v4MsMean: +summarize(rows.map((r) => r.v4Ms)).mean.toFixed(1),
      speedupMean: +(summarize(rows.map((r) => r.fp16Ms)).mean / summarize(rows.map((r) => r.v4Ms)).mean).toFixed(2),
      parityRawDice: {
        mean: +summarize(rows.map((r) => r.parityRawDice)).mean.toFixed(5),
        min: +summarize(rows.map((r) => r.parityRawDice)).min.toFixed(5),
      },
      parityCCDice: {
        mean: +summarize(rows.map((r) => r.parityCCDice)).mean.toFixed(5),
        min: +summarize(rows.map((r) => r.parityCCDice)).min.toFixed(5),
      },
      parityCCFgAgreePctMean: +summarize(rows.map((r) => r.parityCCFgAgreePct)).mean.toFixed(3),
      fp16CCGtDice: {
        mean: +summarize(rows.map((r) => r.fp16CCGtDice)).mean.toFixed(5),
        min: +summarize(rows.map((r) => r.fp16CCGtDice)).min.toFixed(5),
      },
      v4CCGtDice: {
        mean: +summarize(rows.map((r) => r.v4CCGtDice)).mean.toFixed(5),
        min: +summarize(rows.map((r) => r.v4CCGtDice)).min.toFixed(5),
      },
      deltaGtDiceMean: +summarize(rows.map((r) => r.deltaGtDice)).mean.toFixed(5),
    };
  }

  const colVals = Object.values(byCollection);
  const warmRows = scanResults.length > 1 ? scanResults.slice(1) : scanResults;
  const overall = {
    totalScans: scanResults.length,
    totalCollections: colVals.length,
    fp16WarmMsMean: +summarize(warmRows.map((r) => r.fp16Ms)).mean.toFixed(1),
    v4WarmMsMean: +summarize(warmRows.map((r) => r.v4Ms)).mean.toFixed(1),
    warmSpeedupMean: +(summarize(warmRows.map((r) => r.fp16Ms)).mean / summarize(warmRows.map((r) => r.v4Ms)).mean).toFixed(2),
    scanWeighted: {
      parityRawDiceMean: +summarize(scanResults.map((r) => r.parityRawDice)).mean.toFixed(5),
      parityCCDiceMean: +summarize(scanResults.map((r) => r.parityCCDice)).mean.toFixed(5),
      parityCCDiceMin: +summarize(scanResults.map((r) => r.parityCCDice)).min.toFixed(5),
      parityCCFgAgreePctMean: +summarize(scanResults.map((r) => r.parityCCFgAgreePct)).mean.toFixed(3),
      fp16CCGtDiceMean: +summarize(scanResults.map((r) => r.fp16CCGtDice)).mean.toFixed(5),
      v4CCGtDiceMean: +summarize(scanResults.map((r) => r.v4CCGtDice)).mean.toFixed(5),
      deltaGtDiceMean: +summarize(scanResults.map((r) => r.deltaGtDice)).mean.toFixed(5),
    },
    macroCollection: {
      parityCCDiceMean: +summarize(colVals.map((c) => c.parityCCDice.mean)).mean.toFixed(5),
      parityCCDiceMinCol: +summarize(colVals.map((c) => c.parityCCDice.mean)).min.toFixed(5),
      fp16CCGtDiceMean: +summarize(colVals.map((c) => c.fp16CCGtDice.mean)).mean.toFixed(5),
      v4CCGtDiceMean: +summarize(colVals.map((c) => c.v4CCGtDice.mean)).mean.toFixed(5),
      deltaGtDiceMean: +summarize(colVals.map((c) => c.deltaGtDiceMean)).mean.toFixed(5),
    },
  };

  return {
    runners: {
      fp16: { id: 2, setupMs: +fp16.setupMs.toFixed(1), allocMiB: +fp16.allocMiB.toFixed(1), maxBufMiB: +fp16.maxBufMiB.toFixed(1) },
      v4: { id: 28, setupMs: +v4.setupMs.toFixed(1), allocMiB: +v4.allocMiB.toFixed(1), maxBufMiB: +v4.maxBufMiB.toFixed(1) },
    },
    overall,
    byCollection,
    scans: scanResults,
  };
}
