// inference-webgl2.js
// ---------------------------------------------------------------------------
// Thin main-thread wrapper around brainchop-webgl2-worker.js, so wiring the
// native WebGL2 path into main.js is a few lines rather than a second copy of
// the worker plumbing.
//
// The contract main.js needs: this resolves when a segmentation was delivered,
// and REJECTS for anything else -- unsupported device, missing descriptor,
// missing safetensors, a GL error, an all-zero volume. main.js treats a
// rejection exactly as it already treats a WebGPU failure: fall through to the
// tfjs worker, which can still run every one of these models. There is no case
// where a rejection here should surface to the user as an error.
// ---------------------------------------------------------------------------

import MyWebgl2Worker from './brainchop-webgl2-worker.js?worker';

export function nativeWebgl2Available() {
  // A cheap gate before spawning anything: the runner needs OffscreenCanvas
  // (it has no DOM in a worker) and a webgl2 context. The real capability
  // probe -- draw buffers, EXT_color_buffer_float, and whether 1 GiB of 3D
  // textures actually allocates -- runs inside the worker against the model's
  // own shape, because those answers are per-model.
  if (typeof Worker === 'undefined') return false;
  try {
    const c = new OffscreenCanvas(1, 1);
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

/**
 * @returns {Promise<void>} resolves once callbackImg has fired; rejects to mean
 *          "fall back", with a reason worth logging.
 */
export function runInferenceWebGl2(opts, modelEntry, niftiHeader, niftiImage, callbackImg, callbackUI) {
  return new Promise((resolve, reject) => {
    let worker = new MyWebgl2Worker({ type: 'module' });
    let msgQueue = Promise.resolve();
    let displaySec = null;

    const done = (fn, arg) => {
      if (!worker) return;
      worker.terminate();          // releases the module heap and the GL context
      worker = null;
      fn(arg);
    };

    worker.onmessage = (event) => {
      const { cmd, message, progressFrac, modalMessage, statData, img, opts: o, modelEntry: m, brainMask, reason, timings } = event.data;
      if (cmd === 'unsupported') {
        done(reject, new Error(`native WebGL2 declined: ${reason}`));
        return;
      }
      if (cmd === 'ui') {
        if (statData && statData.Status === 'Fail') {
          done(reject, new Error(statData.Error_Type || modalMessage || 'native WebGL2 failed'));
          return;
        }
        msgQueue = msgQueue.then(() => {
          callbackUI(message, progressFrac, modalMessage, statData);
        }).catch((err) => done(reject, err));
        return;
      }
      if (cmd === 'img') {
        msgQueue = msgQueue.then(async () => {
          const dispStart = performance.now();
          await callbackImg(img, o, m, brainMask);
          displaySec = ((performance.now() - dispStart) / 1000).toFixed(4);
        }).catch((err) => done(reject, err));
        return;
      }
      if (cmd === 'complete') {
        msgQueue = msgQueue.then(() => {
          const fullStat = statData && typeof statData === 'object' ? { ...statData } : {};
          if (displaySec != null) fullStat.Display_t = displaySec;
          const t = timings || {};
          console.log(
            `[Timing] WebGL2 | ${modelEntry.modelName} | setup=${(Number(t.Setup_t || 0) * 1000).toFixed(1)}ms ` +
            `prep=${(Number(t.Preprocess_t || 0) * 1000).toFixed(1)}ms infer=${(Number(t.Inference_t || 0) * 1000).toFixed(1)}ms ` +
            `post=${(Number(t.Postprocess_t || 0) * 1000).toFixed(1)}ms disp=${(Number(displaySec || 0) * 1000).toFixed(1)}ms`
          );
          callbackUI(message, 1, '', JSON.stringify(fullStat));
          done(resolve);
        }).catch((err) => done(reject, err));
      }
    };

    worker.onerror = (e) => done(reject, e instanceof ErrorEvent ? new Error(e.message) : e);

    // The input is COPIED, not transferred. Transferring would neuter the
    // caller's ArrayBuffer, so a fallback to the tfjs worker -- which is the
    // whole point of rejecting -- would get an empty volume with no diagnostic.
    // A structured clone of 16 MB is a few milliseconds against a multi-second run.
    worker.postMessage({
      opts,
      modelEntry: { ...modelEntry, enableTTA: false },
      niftiHeader: { dims: niftiHeader.dims, datatypeCode: niftiHeader.datatypeCode },
      niftiImage,
    });
  });
}
