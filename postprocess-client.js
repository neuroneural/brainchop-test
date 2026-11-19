// postprocess-client.js
// Persistent Web Worker client for off-main-thread segmentation postprocessing
// (BWLabeler) and native-space NIfTI reslicing. Falls back to direct in-thread
// execution when Web Workers are unavailable (e.g. Node test environments).

import { processSegmentationVolume } from "./tensor-utils.js";
import { resliceVolumeData } from "./reslice-volume.js";
import { applyCatLitePartialVolume } from "./cat-lite.js";
import PostprocessWorker from "./postprocess-worker.js?worker";

let workerInstance = null;
let nextRequestId = 1;
const pending = new Map();

function rejectAllPending(err) {
  for (const { reject } of pending.values()) {
    reject(err);
  }
  pending.clear();
}

function resetWorker(err) {
  if (workerInstance) {
    try {
      workerInstance.terminate();
    } catch {
      // ignore terminate errors
    }
    workerInstance = null;
  }
  if (err) rejectAllPending(err);
}

function getWorker() {
  if (typeof Worker === "undefined") return null;
  if (!workerInstance) {
    workerInstance = new PostprocessWorker({ type: "module" });
    workerInstance.onmessage = (event) => {
      const { id, ok, result, error } = event.data || {};
      const entry = pending.get(id);
      if (!entry) return;
      pending.delete(id);
      if (ok) {
        entry.resolve(result);
      } else {
        const err = new Error(error?.message || "Postprocessing worker failed");
        if (error?.code) err.code = error.code;
        entry.reject(err);
      }
    };
    workerInstance.onerror = (event) => {
      const msg = event?.message || "Postprocessing worker crashed";
      resetWorker(new Error(msg));
    };
    workerInstance.onmessageerror = () => {
      resetWorker(new Error("Postprocessing worker message deserialization failed"));
    };
  }
  return workerInstance;
}

function callWorker(cmd, payload, transfer = []) {
  const worker = getWorker();
  if (!worker) return null;
  const id = nextRequestId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    try {
      worker.postMessage({ id, cmd, payload }, transfer);
    } catch (err) {
      pending.delete(id);
      reject(err);
    }
  });
}

function isWholeOwnedBuffer(view) {
  return (
    view &&
    ArrayBuffer.isView(view) &&
    view.buffer instanceof ArrayBuffer &&
    view.byteOffset === 0 &&
    view.byteLength === view.buffer.byteLength
  );
}

/**
 * Run `processSegmentationVolume` inside the shared postprocessing Web Worker.
 *
 * Buffer ownership contract:
 * - `nativeLabels` may be transferred zero-copy when `transferLabels` is true
 *   (caller must not read `nativeLabels` afterwards).
 * - `niftiImage` is NEVER transferred (it belongs to NiiVue's base volume) and
 *   is only sent at all for `Brain_Extraction` models that mask intensities.
 */
export async function processSegmentationInWorker(
  nativeLabels,
  niftiImage,
  modelEntry,
  opts,
  maskResult = null,
  shapeOverride = null,
  { transferLabels = false } = {}
) {
  if (typeof Worker === "undefined") {
    return processSegmentationVolume(
      nativeLabels,
      niftiImage,
      modelEntry,
      opts,
      maskResult,
      shapeOverride
    );
  }

  const needsIntensity = modelEntry?.type === "Brain_Extraction";
  const payload = {
    nativeLabels,
    niftiImage: needsIntensity ? niftiImage : null,
    modelEntry: {
      id: modelEntry?.id,
      type: modelEntry?.type,
    },
    opts: {
      isPostProcessEnable: Boolean(opts?.isPostProcessEnable),
      fillSuppressedWithNeighborLabel: Boolean(opts?.fillSuppressedWithNeighborLabel),
      diagnoseEnclosedComponents: Boolean(opts?.diagnoseEnclosedComponents),
    },
    wantMask: Boolean(maskResult),
    shape: shapeOverride || [256, 256, 256],
  };

  const transfer =
    transferLabels && isWholeOwnedBuffer(nativeLabels) ? [nativeLabels.buffer] : [];

  const result = await callWorker("processSegmentation", payload, transfer);
  if (maskResult && result.mask) {
    maskResult.mask = result.mask;
  }
  return result.outImg;
}

/**
 * Run `resliceVolumeData` inside the shared postprocessing Web Worker.
 * `params.srcImg` is NEVER transferred so live NiiVue/CAT-lite arrays stay intact.
 */
export async function resliceVolumeInWorker(params) {
  if (typeof Worker === "undefined") {
    return resliceVolumeData(params);
  }
  return callWorker("resliceToNative", params, []);
}

const formatCatLiteTissues = ({ csf, gray, white }) =>
  `CSF=${csf.toFixed(3)} GM=${gray.toFixed(3)} WM=${white.toFixed(3)}`;

/**
 * Run CAT-lite partial-volume fitting inside the shared postprocessing Web
 * Worker, transferring the caller-owned [GM, WM, CSF] priors + intensity in
 * and transferring the fitted [GM, WM, CSF] volumes back zero-copy.
 */
export async function runCatLiteInWorker(priors, intensity, modelEntry, statData, toNative, shape = [256, 256, 256]) {
  const native = [];
  for (let tissue = 0; tissue < 3; tissue++) {
    native.push(await toNative(priors[tissue], tissue));
    priors[tissue] = null;
  }

  const options = {
    catLitePurePriorPower: modelEntry?.catLitePurePriorPower,
    catLitePriorStrength: modelEntry?.catLitePriorStrength,
    catLiteIntensityStrength: modelEntry?.catLiteIntensityStrength,
    catLiteMixelPrior: modelEntry?.catLiteMixelPrior,
    catLiteCsfWmMixelPrior: modelEntry?.catLiteCsfWmMixelPrior,
    catLiteSpatialWeight: modelEntry?.catLiteSpatialWeight,
    catLiteMinSupport: modelEntry?.catLiteMinSupport,
    catLiteSigmaFloor: modelEntry?.catLiteSigmaFloor,
    catLiteBiasBlockSize: modelEntry?.catLiteBiasBlockSize,
    catLiteBiasSmoothPasses: modelEntry?.catLiteBiasSmoothPasses,
    catLiteMinMeanSeparation: modelEntry?.catLiteMinMeanSeparation,
    catLiteMinPureVoxels: modelEntry?.catLiteMinPureVoxels,
  };

  let tissues;
  let stats;
  if (typeof Worker === "undefined") {
    ({ tissues, stats } = applyCatLitePartialVolume(native, intensity, shape, options));
  } else {
    const seen = new Set();
    const transfer = [];
    for (const arr of [...native, intensity]) {
      if (isWholeOwnedBuffer(arr) && !seen.has(arr.buffer)) {
        seen.add(arr.buffer);
        transfer.push(arr.buffer);
      }
    }
    ({ tissues, stats } = await callWorker(
      "catLite",
      { priors: native, intensity, shape, options },
      transfer
    ));
  }

  statData.Output_Type = "Continuous tissue probability";
  statData.Tissue = "GM/WM/CSF";
  statData.Softmax_Temperature = modelEntry?.softmaxTemperature ?? 1;
  if (stats.applied) {
    statData.Partial_Volume = "CAT-lite mixed-class PVE";
    statData.CAT_Lite_Tissue_Means = formatCatLiteTissues(stats.tissueMeans);
    statData.CAT_Lite_Tissue_Sigmas = formatCatLiteTissues(stats.tissueSigmas);
    const { componentCount, removedVoxels } = stats.supportCleanup;
    console.log(
      `[CAT-lite] means ${statData.CAT_Lite_Tissue_Means}; sigmas ${statData.CAT_Lite_Tissue_Sigmas}; ` +
      `removed ${removedVoxels} voxels outside the largest of ${componentCount} support components`
    );
  } else {
    statData.Partial_Volume = `Skipped: ${stats.reason}`;
    console.warn(`[CAT-lite] skipped: ${stats.reason}`);
  }
  return tissues;
}
