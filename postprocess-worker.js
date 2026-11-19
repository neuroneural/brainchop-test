// postprocess-worker.js
// Dedicated Web Worker keeping heavy 256³ CPU postprocessing off the main UI
// thread:
//   1. `processSegmentation`: 6-connected BWLabeler + hierarchical / per-class
//      connected-component filtering (used by inference-webgpu.js).
//   2. `resliceToNative`: 2× supersampled majority-vote / trilinear native-grid
//      resampling during Save -> Native space.

import { processSegmentationVolume } from "./tensor-utils.js";
import { resliceVolumeData } from "./reslice-volume.js";
import { applyCatLitePartialVolume } from "./cat-lite.js";

function collectTransferables(...views) {
  const seen = new Set();
  const list = [];
  for (const v of views) {
    if (v && ArrayBuffer.isView(v) && v.buffer instanceof ArrayBuffer && !seen.has(v.buffer)) {
      seen.add(v.buffer);
      list.push(v.buffer);
    }
  }
  return list;
}

self.onmessage = async (event) => {
  const { id, cmd, payload } = event.data || {};
  try {
    if (cmd === "processSegmentation") {
      const { nativeLabels, niftiImage, modelEntry, opts, wantMask, shape } = payload;
      const maskResult = wantMask ? {} : null;
      const outImg = await processSegmentationVolume(
        nativeLabels,
        niftiImage,
        modelEntry,
        opts,
        maskResult,
        shape
      );
      const mask = maskResult ? maskResult.mask || null : null;
      const transfer = collectTransferables(outImg, mask);
      self.postMessage({ id, ok: true, result: { outImg, mask } }, transfer);
      return;
    }

    if (cmd === "resliceToNative") {
      const result = resliceVolumeData(payload);
      const transfer = collectTransferables(result.img);
      self.postMessage({ id, ok: true, result }, transfer);
      return;
    }

    if (cmd === "catLite") {
      const { priors, intensity, shape, options } = payload;
      const { tissues, stats } = applyCatLitePartialVolume(priors, intensity, shape, options);
      const transfer = collectTransferables(...tissues);
      self.postMessage({ id, ok: true, result: { tissues, stats } }, transfer);
      return;
    }

    throw new Error(`Unknown postprocess worker command: ${cmd}`);
  } catch (err) {
    self.postMessage({
      id,
      ok: false,
      error: {
        message: err && err.message ? err.message : String(err),
        code: err && err.code ? err.code : null,
      },
    });
  }
};
