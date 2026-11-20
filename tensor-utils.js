import { BWLabeler } from './bwlabels.js';
import { validateCategoricalSegmentation } from './segmentation-quality.js';

// DEBUG ONLY: set true to force the post-processing noise guard to trip on any
// run, so you can test the "segmentation produced noise" failure path in the UI.
const FORCE_SEGMENTATION_NOISE = false;

// Reused 6-connected component label scratchpad avoids allocating/page-faulting 67.1 MiB on warm runs.
const sharedGuardScratch = { il: null, runs: null, runLen: 0, dirty: false };

/**
 * Compute deterministic volume quantiles { qmin, qmax }.
 *
 * For Uint8 volumes (all conformed 256³ inputs), runs an exact single-pass
 * 256-bin histogram over every voxel (zero sampling jitter, exact rank parity
 * with brainchopC's mn_quantile).
 * For non-Uint8 volumes larger than 100,000 voxels, uses a deterministic
 * golden-ratio low-discrepancy sequence (no Math.random()) to avoid both
 * run-to-run jitter and 3D grid stride aliasing.
 *
 * @param {ArrayLike<number>} data
 * @param {number} [lowerQuantile=0.05]
 * @param {number} [upperQuantile=0.95]
 * @returns {{ qmin: number, qmax: number }}
 */
export function computeQuantiles(data, lowerQuantile = 0.05, upperQuantile = 0.95) {
  const totalSize = data.length;
  if (totalSize === 0) return { qmin: 0, qmax: 0 };

  // Fast exact 256-bin histogram over all voxels for Uint8 volumes (~4-6 ms for 256³).
  if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
    const lowIndex = Math.max(0, Math.min(totalSize - 1, Math.floor(totalSize * lowerQuantile)));
    const highIndex = Math.max(0, Math.min(totalSize - 1, Math.ceil(totalSize * upperQuantile) - 1));
    const hist = new Uint32Array(256);
    for (let i = 0; i < totalSize; i++) {
      hist[data[i]]++;
    }
    let cum = 0;
    let qmin = 0;
    let qmax = 0;
    let foundLow = false;
    let foundHigh = false;
    for (let b = 0; b < 256; b++) {
      const c = hist[b];
      if (c === 0) continue;
      cum += c;
      if (!foundLow && cum > lowIndex) {
        qmin = b;
        foundLow = true;
      }
      if (!foundHigh && cum > highIndex) {
        qmax = b;
        foundHigh = true;
      }
      if (foundLow && foundHigh) break;
    }
    return { qmin, qmax };
  }

  const sampleSize = Math.min(100000, totalSize);
  const lowIndex = Math.max(0, Math.min(sampleSize - 1, Math.floor(sampleSize * lowerQuantile)));
  const highIndex = Math.max(0, Math.min(sampleSize - 1, Math.ceil(sampleSize * upperQuantile) - 1));
  const sample = new Float64Array(sampleSize);

  if (sampleSize >= totalSize) {
    sample.set(data);
  } else {
    // Deterministic Weyl / golden-ratio sequence covers [0, totalSize) uniformly
    // with zero aliasing against power-of-2 or arbitrary 3D grid strides.
    const PHI_INV = 0.6180339887498949;
    let frac = 0.5;
    for (let i = 0; i < sampleSize; i++) {
      frac += PHI_INV;
      if (frac >= 1) frac -= 1;
      sample[i] = data[Math.floor(frac * totalSize)];
    }
  }

  sample.sort();

  return {
    qmin: sample[lowIndex],
    qmax: sample[highIndex],
  };
}

/**
 * Compute scalar min and max over a numeric volume in a single linear pass,
 * with an early exit at [0, 255] for 8-bit MRI inputs.
 *
 * @param {ArrayLike<number>} data
 * @returns {{ min: number, max: number }}
 */
export function computeMinMax(data) {
  const n = data.length;
  if (n === 0) return { min: 0, max: 0 };

  let min = data[0];
  let max = data[0];
  if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
    for (let i = 1; i < n; i++) {
      const v = data[i];
      if (v < min) min = v;
      else if (v > max) max = v;
      if (min === 0 && max === 255) break;
    }
    return { min, max };
  }

  for (let i = 1; i < n; i++) {
    const v = data[i];
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return { min, max };
}

export function linearScaleVolume(data, offset, range) {
  const n = data.length;
  const out = new Float32Array(n);
  if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
    const lut = new Float32Array(256);
    for (let v = 0; v < 256; v++) {
      lut[v] = (v - offset) / range;
    }
    for (let i = 0; i < n; i++) {
      out[i] = lut[data[i]];
    }
    return out;
  }
  for (let i = 0; i < n; i++) {
    out[i] = (data[i] - offset) / range;
  }
  return out;
}

/**
 * Quantile-normalize a volume into a Float32Array using 5%..95% quantiles by default.
 *
 * @param {ArrayLike<number>} data
 * @param {number} [lowerQuantile=0.05]
 * @param {number} [upperQuantile=0.95]
 * @returns {Float32Array}
 */
export function quantileNormalizeVolumeData(data, lowerQuantile = 0.05, upperQuantile = 0.95) {
  const { qmin, qmax } = computeQuantiles(data, lowerQuantile, upperQuantile);
  const range = qmax - qmin;
  return linearScaleVolume(data, qmin, range === 0 ? 1 : range);
}

/**
 * Min-max normalize a volume into [0, 1] as a Float32Array.
 *
 * @param {ArrayLike<number>} data
 * @returns {Float32Array}
 */
export function minMaxNormalizeVolumeData(data) {
  const { min, max } = computeMinMax(data);
  const range = max - min;
  return linearScaleVolume(data, min, range === 0 ? 1 : range);
}

function transpose3DCore(data, shape, perm, OutCtor) {
  const D0 = shape[0] | 0;
  const D1 = shape[1] | 0;
  const D2 = shape[2] | 0;
  const total = D0 * D1 * D2;
  const out = new OutCtor(total);

  if (perm[0] === 2 && perm[1] === 1 && perm[2] === 0 && total === data.length) {
    const planeIn = D1 * D2;
    const planeOut = D1 * D0;
    const B = 16;
    for (let y = 0; y < D1; y++) {
      const inY = y * D2;
      const outY = y * D0;
      for (let i0b = 0; i0b < D0; i0b += B) {
        const i0End = Math.min(i0b + B, D0);
        for (let i2b = 0; i2b < D2; i2b += B) {
          const i2End = Math.min(i2b + B, D2);
          for (let i0 = i0b; i0 < i0End; i0++) {
            let inIdx = i0 * planeIn + inY + i2b;
            let outIdx = i2b * planeOut + outY + i0;
            for (let i2 = i2b; i2 < i2End; i2++, inIdx++, outIdx += planeOut) {
              out[outIdx] = data[inIdx];
            }
          }
        }
      }
    }
    return out;
  }

  const dims = [D0, D1, D2];
  const outDims = [dims[perm[0]], dims[perm[1]], dims[perm[2]]];
  const inStrides = [D1 * D2, D2, 1];
  const s0 = inStrides[perm[0]];
  const s1 = inStrides[perm[1]];
  const s2 = inStrides[perm[2]];
  let dst = 0;
  for (let a = 0; a < outDims[0]; a++) {
    const o0 = a * s0;
    for (let b = 0; b < outDims[1]; b++) {
      const o1 = o0 + b * s1;
      for (let c = 0; c < outDims[2]; c++, dst++) {
        out[dst] = data[o1 + c * s2];
      }
    }
  }
  return out;
}

/**
 * Cache-blocked 3D volume permutation returning Float32Array (default perm [2, 1, 0]).
 *
 * @param {ArrayLike<number>} data
 * @param {number[]} [shape=[256, 256, 256]]
 * @param {number[]} [perm=[2, 1, 0]]
 * @returns {Float32Array}
 */
export function transposeVolume3D(data, shape = [256, 256, 256], perm = [2, 1, 0]) {
  return transpose3DCore(data, shape, perm, Float32Array);
}

/**
 * Cache-blocked 3D volume permutation returning Uint8Array (default perm [2, 1, 0]).
 *
 * @param {ArrayLike<number>} data
 * @param {number[]} [shape=[256, 256, 256]]
 * @param {number[]} [perm=[2, 1, 0]]
 * @returns {Uint8Array}
 */
export function transposeVolume3DToU8(data, shape = [256, 256, 256], perm = [2, 1, 0]) {
  return transpose3DCore(data, shape, perm, Uint8Array);
}

/**
 * Single-pass 256-bin histogram over a Uint8 volume.
 *
 * @param {Uint8Array|Uint8ClampedArray} data
 * @returns {Uint32Array}
 */
export function getLabelHistogramU8(data) {
  const hist = new Uint32Array(256);
  for (let i = 0; i < data.length; i++) {
    hist[data[i]]++;
  }
  return hist;
}

/**
 * Count distinct label values (0..255) present in a Uint8 volume without allocating a Set.
 *
 * @param {Uint8Array|Uint8ClampedArray} data
 * @returns {number}
 */
export function countUniqueLabelsU8(data) {
  const hist = getLabelHistogramU8(data);
  let count = 0;
  for (let k = 0; k < 256; k++) {
    if (hist[k] > 0) count++;
  }
  return count;
}

/**
 * Validate finiteness, non-zero total mass, and (for probabilities) [0, 1] bounds.
 *
 * @param {ArrayLike<number>} data
 * @param {boolean} [isProbability=false]
 * @param {string} [description='output']
 * @returns {{ sum: number, min: number, max: number }}
 */
export function validateVolumeStats(data, isProbability = false, description = 'output') {
  let sum = 0;
  let minVal = Infinity;
  let maxVal = -Infinity;
  if (!isProbability && (data instanceof Uint8Array || data instanceof Uint8ClampedArray)) {
    if (data.length > 0) {
      let minB = 255;
      let maxB = 0;
      let tailStart = 0;
      if ((data.byteOffset & 3) === 0 && data.length >= 4) {
        const qLen = data.length >> 2;
        const u32 = new Uint32Array(data.buffer, data.byteOffset, qLen);
        for (let q = 0; q < qLen; q++) {
          const w = u32[q];
          if (w === 0) {
            minB = 0;
            continue;
          }
          const b0 = w & 0xff;
          const b1 = (w >>> 8) & 0xff;
          const b2 = (w >>> 16) & 0xff;
          const b3 = w >>> 24;
          sum += b0 + b1 + b2 + b3;
          if (b0 < minB) minB = b0; if (b0 > maxB) maxB = b0;
          if (b1 < minB) minB = b1; if (b1 > maxB) maxB = b1;
          if (b2 < minB) minB = b2; if (b2 > maxB) maxB = b2;
          if (b3 < minB) minB = b3; if (b3 > maxB) maxB = b3;
        }
        tailStart = qLen << 2;
      }
      for (let i = tailStart; i < data.length; i++) {
        const v = data[i];
        sum += v;
        if (v < minB) minB = v;
        if (v > maxB) maxB = v;
      }
      minVal = minB;
      maxVal = maxB;
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      const v = data[i];
      if (!Number.isFinite(v)) {
        throw new Error(`Model ${description} contains NaN or Inf values.`);
      }
      sum += v;
      if (v < minVal) minVal = v;
      if (v > maxVal) maxVal = v;
    }
  }
  console.log(`${isProbability ? 'Probability' : 'Segmentation'} volume sum: ${sum}`);
  if (sum === 0) {
    throw new Error(
      isProbability
        ? 'Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.'
        : 'Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.'
    );
  }
  if (isProbability && (minVal < -1e-6 || maxVal > 1 + 1e-6)) {
    throw new Error(
      `Probability output values out of range [0, 1]: min=${minVal.toFixed(4)}, max=${maxVal.toFixed(4)}`
    );
  }
  return { sum, min: minVal, max: maxVal };
}

/**
 * Main orchestrator function to post-process a segmentation volume on CPU.
 * Accepts either a legacy `{ shape, data() }` tensor-like object or a direct TypedArray
 * (with optional `shapeOverride`, defaulting to `[256, 256, 256]`).
 *
 * @param {{ shape?: number[], data?: () => Promise<ArrayLike<number>> } | ArrayLike<number>} outLabelVolume
 * @param {Uint8Array|Float32Array} niftiImage
 * @param {object} modelEntry
 * @param {object} opts
 * @param {object} [maskResult=null]
 * @param {number[]|null} [shapeOverride=null]
 * @returns {Promise<Uint8Array>}
 */
export async function processSegmentationVolume(
  outLabelVolume,
  niftiImage,
  modelEntry,
  opts,
  maskResult = null,
  shapeOverride = null
) {
  const fromAsyncTensor = Boolean(outLabelVolume && typeof outLabelVolume.data === 'function');
  let rawData;
  let Vshape;
  if (fromAsyncTensor) {
    console.log('Downloading segmentation data from GPU to CPU...');
    rawData = await outLabelVolume.data();
    Vshape = outLabelVolume.shape || shapeOverride || [256, 256, 256];
    console.log('Data download complete. Starting CPU processing.');
  } else {
    rawData = outLabelVolume;
    Vshape = shapeOverride || [256, 256, 256];
  }

  validateCategoricalSegmentation(rawData);

  let segmentationData;
  let ownsBuffer = false;
  if (rawData instanceof Uint8Array) {
    segmentationData = rawData;
    ownsBuffer = !fromAsyncTensor;
  } else {
    let maxVal = 0;
    for (let i = 0; i < rawData.length; i++) {
      if (rawData[i] > maxVal) maxVal = rawData[i];
    }
    segmentationData = maxVal <= 255 ? new Uint8Array(rawData) : new Uint32Array(rawData);
    ownsBuffer = true;
  }

  let guardMeta = null;
  if (opts.isPostProcessEnable) {
    console.log('Applying CPU-based connected-component labeling...');
    const bwStartTime = performance.now();
    const BWInstance = new BWLabeler();

    const FILL_NEIGHBOR_DEFAULT_IDS = [3, 5, 8, 9, 14, 15, 21, 38, 58, 59, 60, 218, 598, 608];
    const relabelSuppressed =
      !!opts.fillSuppressedWithNeighborLabel || FILL_NEIGHBOR_DEFAULT_IDS.includes(modelEntry.id);

    const DK104_ATLAS_IDS = [5, 14, 15, 58, 59, 60, 598, 608];
    const DK104_CORTICAL_FAMILY_OF = (cls) => (cls >= 1 && cls <= 34 ? 1 : cls >= 35 && cls <= 68 ? 2 : 0);
    const voteFamilyOf = DK104_ATLAS_IDS.includes(modelEntry.id) ? DK104_CORTICAL_FAMILY_OF : null;

    const totalVoxels = Vshape[0] * Vshape[1] * Vshape[2];
    const NOISE_COMPONENT_CAP = Math.max(100000, Math.floor(totalVoxels * 0.01));
    const [guardComponentCount, guardLabels] = BWInstance.bwlabel(
      segmentationData,
      Vshape,
      6,
      false,
      false,
      sharedGuardScratch
    );
    guardMeta = BWInstance.getLabelMeta(guardLabels);
    if (FORCE_SEGMENTATION_NOISE || guardComponentCount > NOISE_COMPONENT_CAP) {
      const msg =
        `Segmentation produced noise: ${guardComponentCount.toLocaleString()} ` +
        `disconnected regions (cap ${NOISE_COMPONENT_CAP.toLocaleString()}). ` +
        `The model output is unusable, so post-processing was aborted. ` +
        `Try re-running, switching backend (WebGPU/WebGL2), or another model.`;
      console.error('[postprocess] ' + msg);
      const err = new Error(msg);
      err.code = 'SEGMENTATION_NOISE';
      throw err;
    }

    if ([1, 7].includes(modelEntry.id)) {
      const SMALL_COMPONENT_MIN_RATIO = 0.02;
      const NEAR_BRAIN_MAX_GAP = 8;
      const DIAG_RANK_FILTER = false;
      const [_mx, filtered] = BWInstance.filter_clusters_by_rank(
        segmentationData,
        guardComponentCount,
        guardLabels,
        2,
        SMALL_COMPONENT_MIN_RATIO,
        Vshape,
        relabelSuppressed,
        NEAR_BRAIN_MAX_GAP,
        DIAG_RANK_FILTER,
        voteFamilyOf
      );
      segmentationData = filtered;
      ownsBuffer = true;
    } else if ([3, 8, 9, 21, 38, 218].includes(modelEntry.id)) {
      // 18-class hierarchical filter in one pass reusing guardLabels:
      // largest binary foreground component, then largest per-class for targets.
      const targetClasses = new Set([1, 2, 5, 6, 13]);
      const [_mx, filtered] = BWInstance.filter18ClassFromLabels(
        segmentationData,
        guardComponentCount,
        guardLabels,
        Vshape,
        targetClasses,
        relabelSuppressed,
        voteFamilyOf,
        ownsBuffer
      );
      segmentationData = filtered;
      ownsBuffer = true;
    } else if ([5, 14, 15, 58, 59, 60, 598, 608].includes(modelEntry.id)) {
      if (opts.diagnoseEnclosedComponents) {
        BWInstance.diagnose_components(
          segmentationData,
          guardComponentCount,
          guardLabels,
          Vshape,
          { label: `model${modelEntry.id}`, topN: 60 }
        );
      }
      // 104-class hierarchical filter reusing guardLabels:
      // Step 1: drop disconnected exterior/resection-cavity islands outside the main 6-connected binary brain mass.
      // Step 2: retain largest component per class + class-family neighbor relabeling inside the main brain.
      const [_mx, res2] = BWInstance.filterHierarchicalFromLabels(
        segmentationData,
        guardComponentCount,
        guardLabels,
        Vshape,
        'all',
        true,
        relabelSuppressed,
        voteFamilyOf,
        ownsBuffer
      );
      segmentationData = res2;
      ownsBuffer = true;
    } else {
      // Default legacy behavior: binarize foreground, keep largest binary 6-connected component.
      if (!ownsBuffer) {
        segmentationData = segmentationData.slice();
        ownsBuffer = true;
      }
      BWInstance.applyLargestBinaryMaskInPlace(segmentationData, guardComponentCount, guardLabels, Vshape);
    }

    const bwTime = ((performance.now() - bwStartTime) / 1000).toFixed(4);
    console.log(`Connected-component labeling took: ${bwTime} seconds.`);
  }

  switch (modelEntry.type) {
    case 'Brain_Masking': {
      const brainMask = new Uint8Array(segmentationData.length);
      if (guardMeta && guardMeta.runs) {
        const runs = guardMeta.runs;
        const runLen = guardMeta.runLen;
        for (let rk = 0; rk < runLen; rk += 2) {
          const s = runs[rk];
          const e = runs[rk + 1];
          for (let i = s; i < e; i++) {
            if (segmentationData[i] !== 0) brainMask[i] = 1;
          }
        }
      } else {
        for (let i = 0; i < segmentationData.length; i++) {
          brainMask[i] = segmentationData[i] !== 0 ? 1 : 0;
        }
      }
      return brainMask;
    }
    case 'Brain_Extraction': {
      const maskedData = new Uint8Array(segmentationData.length);
      const brainMask = maskResult ? new Uint8Array(segmentationData.length) : null;
      if (guardMeta && guardMeta.runs) {
        const runs = guardMeta.runs;
        const runLen = guardMeta.runLen;
        for (let rk = 0; rk < runLen; rk += 2) {
          const s = runs[rk];
          const e = runs[rk + 1];
          for (let i = s; i < e; i++) {
            if (segmentationData[i] !== 0) {
              maskedData[i] = niftiImage[i];
              if (brainMask) brainMask[i] = 1;
            }
          }
        }
      } else {
        for (let i = 0; i < segmentationData.length; i++) {
          const maskValue = segmentationData[i] !== 0 ? 1 : 0;
          maskedData[i] = niftiImage[i] * maskValue;
          if (brainMask) brainMask[i] = maskValue;
        }
      }
      if (maskResult) maskResult.mask = brainMask;
      return maskedData;
    }
    default: {
      return segmentationData instanceof Uint8Array ? segmentationData : new Uint8Array(segmentationData);
    }
  }
}
