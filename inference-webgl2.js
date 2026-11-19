// inference-webgl2.js
// ---------------------------------------------------------------------------
// Thin main-thread wrapper around brainchop-webgl2-worker.js, reusing one
// persistent worker (and its WebGL2 context + compiled GLSL shader cache +
// single-entry weight cache) across consecutive runs so repeat runs skip
// context creation and shader compilation (~200-600 ms saved) while keeping
// idle VRAM at ~0 MiB (all activation textures are still freed per run).
//
// The contract main.js needs: this resolves when a segmentation was delivered,
// and REJECTS for anything else -- unsupported device, missing descriptor,
// missing safetensors, a GL error, an all-zero volume.
// ---------------------------------------------------------------------------

import MyWebgl2Worker from './brainchop-webgl2-worker.js?worker';

let sharedWorker = null;
let activeJob = null;

function disposeSharedWorker() {
  if (sharedWorker) {
    try {
      sharedWorker.terminate();
    } catch {
      // ignore terminate errors
    }
    sharedWorker = null;
  }
}

export function disposeWebGl2Worker() {
  if (activeJob) {
    const job = activeJob;
    activeJob = null;
    job.reject(new Error('native WebGL2 worker disposed'));
  }
  disposeSharedWorker();
}

function getSharedWorker() {
  if (sharedWorker) return sharedWorker;
  const worker = new MyWebgl2Worker({ type: 'module' });
  worker.onmessage = (event) => {
    const job = activeJob;
    if (!job) return;
    const { cmd, message, progressFrac, modalMessage, statData, img, opts: o, modelEntry: m, brainMask, reason, timings } = event.data || {};
    if (cmd === 'unsupported') {
      activeJob = null;
      job.reject(new Error(`native WebGL2 declined: ${reason}`));
      return;
    }
    if (cmd === 'ui') {
      if (statData && statData.Status === 'Fail') {
        activeJob = null;
        job.reject(new Error(statData.Error_Type || modalMessage || 'native WebGL2 failed'));
        return;
      }
      job.msgQueue = job.msgQueue.then(() => {
        job.callbackUI(message, progressFrac, modalMessage, statData);
      }).catch((err) => {
        if (activeJob === job) {
          activeJob = null;
          job.reject(err);
        }
      });
      return;
    }
    if (cmd === 'img') {
      job.msgQueue = job.msgQueue.then(async () => {
        const dispStart = performance.now();
        await job.callbackImg(img, o, m, brainMask);
        job.displaySec = ((performance.now() - dispStart) / 1000).toFixed(4);
      }).catch((err) => {
        if (activeJob === job) {
          activeJob = null;
          job.reject(err);
        }
      });
      return;
    }
    if (cmd === 'complete') {
      job.msgQueue = job.msgQueue.then(() => {
        const fullStat = statData && typeof statData === 'object' ? { ...statData } : {};
        if (job.displaySec != null) fullStat.Display_t = job.displaySec;
        const t = timings || {};
        console.log(
          `[Timing] WebGL2 | ${job.modelName} | setup=${(Number(t.Setup_t || 0) * 1000).toFixed(1)}ms ` +
          `prep=${(Number(t.Preprocess_t || 0) * 1000).toFixed(1)}ms infer=${(Number(t.Inference_t || 0) * 1000).toFixed(1)}ms ` +
          `post=${(Number(t.Postprocess_t || 0) * 1000).toFixed(1)}ms disp=${(Number(job.displaySec || 0) * 1000).toFixed(1)}ms ` +
          `cache=${fullStat.WebGL2_Cache || 'miss'}`
        );
        job.callbackUI(message, 1, '', JSON.stringify(fullStat));
        if (activeJob === job) {
          activeJob = null;
          job.resolve();
        }
      }).catch((err) => {
        if (activeJob === job) {
          activeJob = null;
          job.reject(err);
        }
      });
    }
  };
  worker.onerror = (e) => {
    const err = e instanceof ErrorEvent ? new Error(e.message) : e;
    const job = activeJob;
    activeJob = null;
    disposeSharedWorker();
    if (job) job.reject(err);
  };
  worker.onmessageerror = () => {
    const job = activeJob;
    activeJob = null;
    disposeSharedWorker();
    if (job) job.reject(new Error('native WebGL2 worker message error'));
  };
  sharedWorker = worker;
  return worker;
}

export function nativeWebgl2Available() {
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
  if (activeJob) {
    return Promise.reject(new Error('native WebGL2 inference already in progress'));
  }
  return new Promise((resolve, reject) => {
    const worker = getSharedWorker();
    activeJob = {
      resolve,
      reject,
      callbackImg,
      callbackUI,
      modelName: modelEntry.modelName,
      msgQueue: Promise.resolve(),
      displaySec: null,
    };

    // The input is COPIED, not transferred: transferring would detach
    // nv1.volumes[0].img. A structured clone of 16 MB takes ~2 ms.
    worker.postMessage({
      opts,
      modelEntry: { ...modelEntry, enableTTA: false },
      niftiHeader: { dims: niftiHeader.dims, datatypeCode: niftiHeader.datatypeCode },
      niftiImage,
    });
  });
}
