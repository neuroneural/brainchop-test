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

// Persistent worker-scoped GL context, compiled GLSL shader cache, probe cache,
// and single-entry packed-weights cache (~1-2 MB). Activation 3D textures
// (1.0-1.5 GiB) are still unconditionally freed inside runMeshNetGL()'s finally
// block on every run, so peak VRAM is unchanged and idle VRAM stays ~0 MiB.
let sharedCanvas = null;
let sharedGl = null;
let sharedVao = null;
let sharedProgramCache = new Map();
let probeCache = new Map();
let cachedWeights = null; // { key, desc, d, packed }

function resetSharedGl() {
  if (sharedGl) {
    const lost = sharedGl.isContextLost();
    if (!lost) {
      for (const progSet of sharedProgramCache.values()) {
        for (const p of Object.values(progSet)) {
          if (p) sharedGl.deleteProgram(p);
        }
      }
      if (sharedVao) sharedGl.deleteVertexArray(sharedVao);
      sharedGl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  }
  sharedCanvas = null;
  sharedGl = null;
  sharedVao = null;
  sharedProgramCache = new Map();
  probeCache = new Map();
}

function ensureSharedGl() {
  if (sharedGl && !sharedGl.isContextLost()) {
    return sharedGl;
  }
  if (sharedGl) resetSharedGl();
  if (typeof OffscreenCanvas === 'undefined') return null;
  const canvas = new OffscreenCanvas(1, 1);
  const gl = canvas.getContext('webgl2', {
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
    powerPreference: 'high-performance',
  });
  if (!gl) return null;
  canvas.addEventListener?.('webglcontextlost', (ev) => {
    ev.preventDefault?.();
    console.warn('[webgl2] shared worker context lost; will recreate on next run');
  });
  sharedCanvas = canvas;
  sharedGl = gl;
  sharedVao = gl.createVertexArray();
  return gl;
}

async function loadModelWeightsCached(stUrl, entry, dim, modelEntry) {
  const biasKey = Array.isArray(modelEntry.classifierBias)
    ? modelEntry.classifierBias.join(',')
    : '';
  const wantQ8 = !!modelEntry.quantize8Bit;
  const cacheKey = `${stUrl}|${entry.activation}|${dim}|${biasKey}|q8=${+wantQ8}`;
  if (cachedWeights && cachedWeights.key === cacheKey) {
    return { desc: cachedWeights.desc, d: cachedWeights.d, packed: cachedWeights.packed, weightCacheHit: true };
  }
  const stRes = await fetch(stUrl);
  if (!stRes.ok) {
    throw new Error(`could not fetch ${stUrl}: ${stRes.status}`);
  }
  const raw = await stRes.arrayBuffer();
  const tensors = parseSafetensors(raw);
  const desc = applyClassifierBias(describeSafetensors(tensors), modelEntry.classifierBias);
  const d = deriveDescriptor(desc, {
    nx: dim, ny: dim, nz: dim,
    activation: entry.activation,
    dilations: entry.dilations,
    quantize8Bit: wantQ8,
  });
  const packed = packWeights(desc, d);
  // Single-entry cache: switching models immediately releases the previous ~1-2 MB weights.
  cachedWeights = { key: cacheKey, desc, d, packed };
  return { desc, d, packed, weightCacheHit: false };
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
  callbackUI(catLite ? 'Starting tissue estimation\u2026' : 'Starting segmentation\u2026', 0);

  const dim = 256;                      // main.js conforms before dispatching
  const dims = [dim, dim, dim];

  // ---- weights & shared GL setup ---------------------------------------
  const setupStart = performance.now();
  callbackUI('Loading model\u2026', 0.05);
  const stUrl = `${opts.rootURL}${modelEntry.webgpu_safetensor.replace(/^\.\//, '/')}`;
  let desc, d, packed, weightCacheHit;
  try {
    ({ desc, d, packed, weightCacheHit } = await loadModelWeightsCached(stUrl, entry, dim, modelEntry));
  } catch (err) {
    refuse(err?.message || String(err));
    return;
  }

  const gl = ensureSharedGl();
  if (!gl) {
    refuse('no webgl2 context could be created in worker');
    return;
  }

  // ---- probe (cached per model/quantization on the shared GL context) --
  const canAutoQ8 = !d.quantize8Bit && !!modelEntry.autoQuantize8BitFallback && desc.norm === 'gn';
  const probeKey = `${entry.name}:${dim}:${+!!d.quantize8Bit}:${+!!canAutoQ8}`;
  let probe = probeCache.get(probeKey);
  if (probe) {
    if (probe.useQuantize8Bit && !d.quantize8Bit) {
      d = deriveDescriptor(desc, {
        nx: dim, ny: dim, nz: dim,
        activation: entry.activation,
        dilations: entry.dilations,
        quantize8Bit: true,
      });
      packed = packWeights(desc, d);
    }
  } else {
    probe = probeWebgl2(d, dims, gl, { deferRgba16fOnLazyD3D11: canAutoQ8 });
    let useQuantize8Bit = !!d.quantize8Bit;
    if (!probe.supported && canAutoQ8) {
      console.warn(`[webgl2-native] RGBA16F probe declined (${probe.reasons.join('; ')}); falling back to RGBA8 quantized activations.`);
      useQuantize8Bit = true;
      d = deriveDescriptor(desc, {
        nx: dim, ny: dim, nz: dim,
        activation: entry.activation,
        dilations: entry.dilations,
        quantize8Bit: true,
      });
      packed = packWeights(desc, d);
      probe = probeWebgl2(d, dims, gl);
    }
    if (probe.supported) {
      probe = { ...probe, useQuantize8Bit };
      probeCache.set(probeKey, probe);
    }
  }
  console.log(`[webgl2-native] ${entry.name}: ${d.chan}ch P=${d.planes} ${d.nclass}cls ` +
    `norm=${d.norm} affine=${d.affine} act=${d.activation} q8=${!!d.quantize8Bit} | ` +
    `${Math.round(probe.activationBytes / 1048576)} MB activations | ${probe.renderer} ` +
    `(weights=${weightCacheHit ? 'hit' : 'miss'})`);
  if (!probe.supported) { refuse(probe.reasons.join('; ')); return; }

  const Setup_t = ((performance.now() - setupStart) / 1000).toFixed(4);

  // ---- preprocessing, identical to inference-webgpu.js ------------------
  const prepStart = performance.now();
  callbackUI('Preparing volume\u2026', 0.1);
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
  callbackUI(catLite ? 'Estimating tissue maps\u2026' : 'Segmenting\u2026', 0.2);
  const t0 = performance.now();
  const hasAnyNonZero = (arr) => {
    if (!arr) return false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) return true;
    }
    return false;
  };
  let out;
  try {
    out = runMeshNetGL({
      descriptor: d,
      packed: packed.data,
      offsets: packed.offsets,
      input,
      gl,
      vao: sharedVao,
      programCache: sharedProgramCache,
      probability: catLite ? tissueProbabilityConfig(modelEntry, d.nclass) : null,
      vox2: probe.vox2,
      onProgress: (frac) => callbackUI('', 0.2 + 0.7 * frac),
      onLog: (msg) => console.log(msg),
    });
    if (!catLite && !hasAnyNonZero(out.labels)) {
      throw new Error('native WebGL2 produced an all-zero volume');
    }
  } catch (err) {
    if (gl.isContextLost()) {
      resetSharedGl();
    }
    if (!d.quantize8Bit && modelEntry.autoQuantize8BitFallback && desc.norm === 'gn') {
      console.warn('[webgl2-native] RGBA16F execution failed; retrying once with RGBA8 quantized activations.', err);
      const retryGl = ensureSharedGl();
      if (!retryGl) throw err;
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
        gl: retryGl,
        vao: sharedVao,
        programCache: sharedProgramCache,
        probability: catLite ? tissueProbabilityConfig(modelEntry, d.nclass) : null,
        vox2: probe.vox2,
        onProgress: (frac) => callbackUI('', 0.2 + 0.7 * frac),
        onLog: (msg) => console.log(msg),
      });
      probeCache.set(probeKey, { ...probe, useQuantize8Bit: true });
    } else {
      throw err;
    }
  }
  const Inference_t = ((performance.now() - t0) / 1000).toFixed(4);
  statData.WebGL2_Cache = out.shaderCacheHit ? 'hit' : 'miss';
  console.log(
    `[webgl2-native] ---- Inference Time: ${Inference_t} s ---- (${out.path}, shaders=${statData.WebGL2_Cache})`
  );
  input = null;

  // ---- postprocessing, identical to inference-webgpu.js ----------------
  const elapsedText = `${Number(Inference_t).toFixed(1)} s`;
  const outPerm = modelEntry.outputPermutation || (modelEntry.enableTranspose ? [2, 1, 0] : null);
  if (catLite) {
    const p0 = performance.now();
    callbackUI('Refining tissue fractions\u2026', 0.92);
    smoothAndGateTissuePriors(out.tissues, out.support, dims, modelEntry);
    out.support = null;
    const toNative = (prior) => (outPerm
      ? transposeVolume3D(prior, finalShape, outPerm)
      : (prior instanceof Float32Array ? prior : Float32Array.from(prior)));
    const tissues = await runCatLite(out.tissues, catLiteIntensityData, modelEntry, statData, toNative);
    const Postprocess_t = ((performance.now() - p0) / 1000).toFixed(4);
    markSuccess(statData, Inference_t, Postprocess_t, { Preprocess_t, Setup_t });
    callbackImg(tissues, opts, modelEntry);
    callbackComplete(`${modelEntry.modelName} \u00b7 Tissue maps finished (${elapsedText})`, statData, {
      Setup_t,
      Preprocess_t,
      Inference_t,
      Postprocess_t,
    });
    return;
  }

  callbackUI('Finishing up\u2026', 0.9);
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
  const isolateHint = (modelEntry.numClasses ?? 0) > 2
    ? (opts?.isTouchPrimary
        ? ' \u00b7 Open Stats to isolate a region'
        : ' \u00b7 Option/Alt-click a region to isolate')
    : '';
  callbackComplete(`Segmentation finished (${elapsedText})${isolateHint}`, statData, {
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
    if (sharedGl?.isContextLost()) resetSharedGl();
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
