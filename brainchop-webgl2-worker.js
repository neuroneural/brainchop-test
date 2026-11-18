// brainchop-webgl2-worker.js
// ---------------------------------------------------------------------------
// Worker for the NATIVE WebGL2 path (webgl2_runners/), as distinct from
// brainchop-webworker.js which is the tfjs path and remains the fallback.
//
// WHY A WORKER, not the main thread like inference-webgpu.js. The WebGL2 runner
// is synchronous: readPixels blocks and there is no cooperative yield. brainchopC
// measured its in-thread WebGL2 path drawing THREE FRAMES in 2.2 seconds against
// 56 for WebGPU -- a hung tab, not a slow one. The same measurement showed a
// worker takes the longest frame gap to 0 ms with no change to the backend at
// all, because an OffscreenCanvas needs no DOM.
//
// PRE- AND POST-PROCESSING ARE COPIED FROM inference-webgpu.js, NOT FROM
// inference-logic.js, and that is load-bearing rather than incidental. The
// weights come from model.safetensors, so this path inherits the WebGPU
// orientation convention: it must use `modelEntry.enableTranspose` and must NOT
// use `webglEnableTranspose`. Memory `webgl-tissue-gwm-orientation` records that
// id 7's tfjs export wants the OPPOSITE transpose from its safetensors export,
// and feeding the wrong one degrades the segmentation to noise without erroring.
//
// The upside of matching inference-webgpu.js exactly is that the WebGPU runner's
// output on the same volume is a direct oracle: same input pipeline, same
// weights, same output pipeline, so any label difference is the kernels.
// ---------------------------------------------------------------------------

import {
  minMaxNormalizeVolumeData,
  quantileNormalizeVolumeData,
  transposeVolume3D,
  transposeVolume3DToU8,
  countUniqueLabelsU8,
  processSegmentationVolume,
} from './tensor-utils.js';
import {
  createStatData, addLabelStats, markSuccess, markFailure, ExecutionModes,
} from './diagnostic-stats.js';
import { descriptorFor } from './webgl2_runners/descriptors.js';
import { parseSafetensors, describeSafetensors, applyClassifierBias, packWeights, deriveDescriptor } from './webgl2_runners/weights.js';
import { probeWebgl2, runMeshNetGL } from './webgl2_runners/meshnet_gl.js';
import { tissueProbabilityConfig, smoothAndGateTissuePriors } from './webgl2_runners/probability.js';
import { isCatLite, runCatLite } from './cat-lite.js';

function callbackUI(message = '', progressFrac = -1, modalMessage = '', statData = []) {
  let statStr = [];
  if (statData && Object.keys(statData).length > 0) statStr = JSON.stringify({ ...statData });
  self.postMessage({ cmd: 'ui', message, progressFrac, modalMessage, statData: statStr });
}

// Transfer, not clone: three 256^3 tissue maps are ~200 MB and the host
// terminates this worker once display & completion settle.
function callbackImg(img, opts, modelEntry, brainMask) {
  const arrays = Array.isArray(img) ? img : [img];
  if (brainMask) arrays.push(brainMask);
  const transferables = Array.from(new Set(arrays.map((a) => a.buffer)));
  self.postMessage({ cmd: 'img', img, opts, modelEntry, brainMask }, transferables);
}

function callbackComplete(message, statData, timings) {
  self.postMessage({ cmd: 'complete', message, statData: { ...statData }, timings });
}

/** A refusal, not a crash: main.js reads this and surfaces failure if no backend succeeded. */
function refuse(reason) {
  self.postMessage({ cmd: 'unsupported', reason });
}

async function run(opts, modelEntry, niftiHeader, niftiImage) {
  const catLite = isCatLite(modelEntry);
  const entry = descriptorFor(modelEntry);
  if (!entry) {
    refuse(`no native WebGL2 descriptor for ${modelEntry.path} (needs a webgl2_runners/descriptors.js entry and a model.safetensors)`);
    return;
  }
  if (!entry.fullVolume) {
    refuse(`${entry.name} needs cropping on this path, which is not implemented yet`);
    return;
  }

  const statData = createStatData(modelEntry, ExecutionModes.WEBGL_WEBWORKER ?? 'webgl2-native');
  statData.TF_Backend = 'webgl2-native';
  callbackUI(catLite ? 'CAT-lite probability estimation started' : 'Segmentation started', 0);

  const dim = 256;                      // main.js conforms before dispatching
  const dims = [dim, dim, dim];

  // ---- weights & GL setup ----------------------------------------------
  const setupStart = performance.now();
  callbackUI('Loading weights...', 0.05);
  const stUrl = `${opts.rootURL}${modelEntry.webgpu_safetensor.replace(/^\.\//, '/')}`;
  const stRes = await fetch(stUrl);
  if (!stRes.ok) { refuse(`could not fetch ${stUrl}: ${stRes.status}`); return; }
  const raw = await stRes.arrayBuffer();
  const tensors = parseSafetensors(raw);
  const desc = applyClassifierBias(describeSafetensors(tensors), modelEntry.classifierBias);
  let d = deriveDescriptor(desc, {
    nx: dim, ny: dim, nz: dim,
    activation: entry.activation,
    dilations: entry.dilations,
    quantize8Bit: !!modelEntry.quantize8Bit,
  });

  // ---- probe before doing any real work --------------------------------
  let probe = probeWebgl2(d, dims);
  if (!probe.supported && !d.quantize8Bit && modelEntry.autoQuantize8BitFallback && desc.norm === 'gn') {
    console.warn(`[webgl2-native] RGBA16F probe declined (${probe.reasons.join('; ')}); falling back to RGBA8 quantized activations.`);
    d = deriveDescriptor(desc, {
      nx: dim, ny: dim, nz: dim,
      activation: entry.activation,
      dilations: entry.dilations,
      quantize8Bit: true,
    });
    probe = probeWebgl2(d, dims);
  }
  console.log(`[webgl2-native] ${entry.name}: ${d.chan}ch P=${d.planes} ${d.nclass}cls ` +
    `norm=${d.norm} affine=${d.affine} act=${d.activation} q8=${!!d.quantize8Bit} | ` +
    `${Math.round(probe.activationBytes / 1048576)} MB activations | ${probe.renderer}`);
  if (!probe.supported) { refuse(probe.reasons.join('; ')); return; }

  let packed = packWeights(desc, d);
  const Setup_t = ((performance.now() - setupStart) / 1000).toFixed(4);

  // ---- preprocessing, identical to inference-webgpu.js ------------------
  const prepStart = performance.now();
  callbackUI('Preparing input data...', 0.1);
  const normed = modelEntry.enableQuantileNorm
    ? quantileNormalizeVolumeData(niftiImage)
    : minMaxNormalizeVolumeData(niftiImage);
  const catLiteIntensityData = catLite ? normed : null;
  let input;
  let finalShape = dims;
  if (modelEntry.inputPermutation) {
    const p = modelEntry.inputPermutation;
    finalShape = [dims[p[0]], dims[p[1]], dims[p[2]]];
    input = transposeVolume3D(normed, dims, p);
  } else if (modelEntry.enableTranspose) {
    input = transposeVolume3D(normed, dims, [2, 1, 0]);
  } else {
    input = normed;
  }
  const Preprocess_t = ((performance.now() - prepStart) / 1000).toFixed(4);

  // ---- inference -------------------------------------------------------
  callbackUI('Running inference...', 0.2);
  const t0 = performance.now();
  let out;
  try {
    out = runMeshNetGL({
      descriptor: d,
      packed: packed.data,
      offsets: packed.offsets,
      input,
      probability: catLite ? tissueProbabilityConfig(modelEntry, d.nclass) : null,
      vox2: probe.vox2,
      onProgress: (frac, msg) => callbackUI(msg, 0.2 + 0.7 * frac),
      onLog: (msg) => console.log(msg),
    });
  } catch (err) {
    if (!d.quantize8Bit && modelEntry.autoQuantize8BitFallback && desc.norm === 'gn') {
      console.warn('[webgl2-native] RGBA16F execution failed; retrying once with RGBA8 quantized activations.', err);
      d = deriveDescriptor(desc, {
        nx: dim, ny: dim, nz: dim,
        activation: entry.activation,
        dilations: entry.dilations,
        quantize8Bit: true,
      });
      packed = packWeights(desc, d);
      out = runMeshNetGL({
        descriptor: d,
        packed: packed.data,
        offsets: packed.offsets,
        input,
        probability: catLite ? tissueProbabilityConfig(modelEntry, d.nclass) : null,
        vox2: probe.vox2,
        onProgress: (frac, msg) => callbackUI(msg, 0.2 + 0.7 * frac),
        onLog: (msg) => console.log(msg),
      });
    } else {
      throw err;
    }
  }
  const Inference_t = ((performance.now() - t0) / 1000).toFixed(4);
  console.log(`[webgl2-native] ---- Inference Time: ${Inference_t} s ---- (${out.path})`);
  input = null;

  // ---- postprocessing, identical to inference-webgpu.js ----------------
  const outPerm = modelEntry.outputPermutation || (modelEntry.enableTranspose ? [2, 1, 0] : null);
  if (catLite) {
    const p0 = performance.now();
    callbackUI('CAT-lite: smoothing priors and fitting partial-volume classes...', 0.92);
    smoothAndGateTissuePriors(out.tissues, out.support, dims, modelEntry);
    out.support = null;
    const toNative = (prior) => (outPerm
      ? transposeVolume3D(prior, finalShape, outPerm)
      : (prior instanceof Float32Array ? prior : Float32Array.from(prior)));
    const tissues = await runCatLite(out.tissues, catLiteIntensityData, modelEntry, statData, toNative);
    const Postprocess_t = ((performance.now() - p0) / 1000).toFixed(4);
    markSuccess(statData, Inference_t, Postprocess_t, { Preprocess_t, Setup_t });
    callbackImg(tissues, opts, modelEntry);
    callbackComplete(modelEntry.modelName + '<br>CAT-lite probability map finished', statData, {
      Setup_t,
      Preprocess_t,
      Inference_t,
      Postprocess_t,
    });
    return;
  }

  const p0 = performance.now();
  const nativeLabels = outPerm
    ? transposeVolume3DToU8(out.labels, finalShape, outPerm)
    : (out.labels instanceof Uint8Array ? out.labels : new Uint8Array(out.labels));

  // An all-zero volume is a failure, never a result.
  let hasNonZero = false;
  for (let i = 0; i < nativeLabels.length; i++) {
    if (nativeLabels[i] !== 0) {
      hasNonZero = true;
      break;
    }
  }
  if (!hasNonZero) {
    refuse('native WebGL2 produced an all-zero volume');
    return;
  }

  const maskResult = {};
  const outimg = await processSegmentationVolume(nativeLabels, niftiImage, modelEntry, opts, maskResult, dims);
  const Postprocess_t = ((performance.now() - p0) / 1000).toFixed(4);

  const actualLabels = countUniqueLabelsU8(outimg);
  addLabelStats(statData, modelEntry.numClasses || actualLabels, actualLabels);
  markSuccess(statData, Inference_t, Postprocess_t, { Preprocess_t, Setup_t });
  callbackImg(outimg, opts, modelEntry, maskResult.mask);
  callbackComplete(modelEntry.modelName + '<br>Segmentation finished', statData, {
    Setup_t,
    Preprocess_t,
    Inference_t,
    Postprocess_t,
  });
}

self.addEventListener('message', async (e) => {
  const { opts, modelEntry, niftiHeader, niftiImage } = e.data;
  try {
    await run(opts, modelEntry, niftiHeader, niftiImage);
  } catch (err) {
    console.error('[webgl2-native] failed', err);
    // Any throw is a refusal from main.js's point of view: it should try the
    // tfjs worker rather than show the user an error, because the tfjs path can
    // still run every one of these models.
    try {
      const statData = createStatData(modelEntry, 'webgl2-native');
      markFailure(statData, err, 'native WebGL2 runner');
    } catch { /* stats are best-effort */ }
    refuse(err?.message || String(err));
  }
});
