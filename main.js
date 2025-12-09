import { Niivue } from "@niivue/niivue";
import { runInference as runInferenceTfjsMain } from "./brainchop-mainthread.js";
import { runInferenceWebGpu } from "./inference-webgpu.js";
import { inferenceModelsList, brainChopOpts } from "./brainchop-parameters.js";
import { localSystemDetails } from "./brainchop-diagnostics.js";
import MyWorker from "./brainchop-webworker.js?worker";

// --- Backend State ---
// --- Backend State ---
let gpuDevice = null;
let isWebGpuAvailable = false;

/**
 * Detects WebGPU support, initializes the device, and populates the backend UI selector.
 */
// In main.js
/**
 * Detects WebGPU support and initializes the device.
 */
async function initializeBackend() {
  if ('gpu' in navigator) {
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (adapter) {
        const requiredLimits = {
          maxBufferSize: adapter.limits.maxBufferSize,
          maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize
        };
        const requiredFeatures = adapter.features.has("shader-f16") ? ["shader-f16"] : [];

        gpuDevice = await adapter.requestDevice({ requiredLimits, requiredFeatures });

        isWebGpuAvailable = true;
        const f16Status = requiredFeatures.length > 0 ? " (f16)" : "";
        console.log(`WebGPU is available. F16 support: ${f16Status !== ""}`);
      }
    } catch (e) {
      console.error("WebGPU initialization failed.", e);
    }
  }

  if (!isWebGpuAvailable) {
    console.log("WebGPU not available, falling back to WebGL.");
  }
}

async function main() {
  let diagnosticsString = "";
  let missingLabelStatus = "";
  let chopWorker;

  dragMode.onchange = async function () {
    nv1.opts.dragMode = this.selectedIndex;
  };

  drawDrop.onchange = async function () {
    if (nv1.volumes.length < 2) {
      window.alert("No segmentation open (use the Segmentation pull down)");
      drawDrop.selectedIndex = -1;
      return;
    }
    if (!nv1.drawBitmap) {
      window.alert("No drawing (hint: use the Draw pull down to select a pen)");
      drawDrop.selectedIndex = -1;
      return;
    }
    const mode = parseInt(this.value);
    if (mode === 0) {
      nv1.drawUndo();
      drawDrop.selectedIndex = -1;
      return;
    }
    let img = nv1.volumes[1].img;
    let draw = await nv1.saveImage({ filename: "", isSaveDrawing: true });
    const niiHdrBytes = 352;
    const nvox = img.length;
    if (mode === 1) { //append
      for (let i = 0; i < nvox; i++) if (draw[niiHdrBytes + i] > 0) img[i] = 1;
    }
    if (mode === 2) { //delete
      for (let i = 0; i < nvox; i++) if (draw[niiHdrBytes + i] > 0) img[i] = 0;
    }
    nv1.closeDrawing();
    nv1.updateGLVolume();
    nv1.setDrawingEnabled(false);
    penDrop.selectedIndex = -1;
    drawDrop.selectedIndex = -1;
  };

  penDrop.onchange = async function () {
    const mode = parseInt(this.value);
    nv1.setDrawingEnabled(mode >= 0);
    if (mode >= 0) nv1.setPenValue(mode & 7, mode > 7);
  };

  aboutBtn.onclick = function () {
    window.alert(
      "Drag and drop NIfTI images. Use pulldown menu to choose brainchop model",
    );
  };

  diagnosticsBtn.onclick = function () {
    if (diagnosticsString.length < 1) {
      window.alert(
        "No diagnostic string generated: run a model to create diagnostics",
      );
      return;
    }
    missingLabelStatus = missingLabelStatus.slice(0, -2);
    if (missingLabelStatus !== "") {
      if (diagnosticsString.includes('Status: OK')) {
        diagnosticsString = diagnosticsString.replace('Status: OK', `Status: ${missingLabelStatus}`);
      }
    }
    missingLabelStatus = ""
    navigator.clipboard.writeText(diagnosticsString);
    window.alert("Diagnostics copied to clipboard\n" + diagnosticsString);
  };

  opacitySlider0.oninput = function () {
    nv1.setOpacity(0, opacitySlider0.value / 255);
    nv1.updateGLVolume();
  };

  opacitySlider1.oninput = function () {
    nv1.setOpacity(1, opacitySlider1.value / 255);
  };

  async function ensureConformed() {
    const nii = nv1.volumes[0];
    let isConformed =
      nii.dims[1] === 256 && nii.dims[2] === 256 && nii.dims[3] === 256
      && nii.img instanceof Uint8Array && nii.img.length === 256 * 256 * 256;
    if (
      nii.permRAS[0] !== -1 ||
      nii.permRAS[1] !== 3 ||
      nii.permRAS[2] !== -2
    ) {
      isConformed = false;
    }
    if (isConformed) return;
    const nii2 = await nv1.conform(nii, false);
    await nv1.removeVolume(nv1.volumes[0]);
    await nv1.addVolume(nii2);
  }

  async function closeAllOverlays() {
    while (nv1.volumes.length > 1) {
      await nv1.removeVolume(nv1.volumes[1]);
    }
  }

  async function runSelectedInference() {
    if (modelSelect.value === "-1") return;
    if (modelSelect.selectedIndex < 0) return;

    await closeAllOverlays();
    await ensureConformed();

    const modelEntry = inferenceModelsList[modelSelect.value];
    const opts = { ...brainChopOpts };
    opts.rootURL = window.location.origin + import.meta.env.BASE_URL;

    const niftiImage = nv1.volumes[0].img;

    // 1. Try WebGPU
    if (isWebGpuAvailable && modelEntry.webgpu_safetensor) {
      console.log("Attempting WebGPU backend...");
      try {
        runInferenceWebGpu(gpuDevice, opts, modelEntry, nv1.volumes[0].hdr, niftiImage, callbackImg, callbackUI);
        return; // Success
      } catch (e) {
        console.error("WebGPU inference failed, falling back to WebWorker.", e);
      }
    }

    // 2. Try WebWorker (WebGL)
    console.log("Attempting WebWorker backend...");
    if (typeof chopWorker !== "undefined") {
      console.log("Worker is busy. Please wait.");
      return;
    }

    const plainNiftiHeader = {
      dims: nv1.volumes[0].hdr.dims,
      datatypeCode: nv1.volumes[0].hdr.datatypeCode,
    };

    const runWorker = (useSeqConv) => {
      return new Promise((resolve, reject) => {
        const currentOpts = { ...opts, enableSeqConv: useSeqConv };
        const currentModelEntry = { ...modelEntry, enableSeqConv: useSeqConv };

        chopWorker = new MyWorker({ type: "module" });
        chopWorker.postMessage({ opts: currentOpts, modelEntry: currentModelEntry, niftiHeader: plainNiftiHeader, niftiImage });

        chopWorker.onmessage = function (event) {
          const { cmd, message, progressFrac, modalMessage, statData, img, opts, modelEntry } = event.data;
          if (cmd === "ui") {
            if (modalMessage) {
              chopWorker.terminate();
              chopWorker = undefined;
              // Check for failure status or error message
              if (statData && statData.Status === 'Fail') {
                reject(new Error(statData.Error_Type || modalMessage));
                return;
              }
              // Some errors might be passed as modalMessage without statData
              if (typeof modalMessage === 'string' && (modalMessage.toLowerCase().includes('fail') || modalMessage.toLowerCase().includes('error') || modalMessage.toLowerCase().includes('compatible') || modalMessage.toLowerCase().includes('texture') || modalMessage.toLowerCase().includes('maximum'))) {
                reject(new Error(modalMessage));
                return;
              }
            }
            callbackUI(message, progressFrac, modalMessage, statData);
          }
          if (cmd === "img") {
            chopWorker.terminate();
            chopWorker = undefined;
            callbackImg(img, opts, modelEntry);
            resolve();
          }
        };
        chopWorker.onerror = function (e) {
          console.error("WebWorker failed", e);
          chopWorker.terminate();
          chopWorker = undefined;
          reject(e);
        };
      });
    };

    try {
      console.log("Attempting WebWorker with enableSeqConv: false");
      await runWorker(false);
      return;
    } catch (e) {
      console.warn("WebWorker (fast) failed, retrying with enableSeqConv: true", e);

      // Explicitly terminate worker if it's still around
      if (typeof chopWorker !== "undefined") {
        chopWorker.terminate();
        chopWorker = undefined;
      }

      // Delay to allow WebGL context cleanup
      console.log("Waiting 1000ms for WebGL context cleanup...");
      await new Promise(r => setTimeout(r, 1000));

      try {
        console.log("Attempting WebWorker with enableSeqConv: true");
        await runWorker(true); // Retry with seqConv
        return;
      } catch (e2) {
        console.error("WebWorker (slow) failed, falling back to Main Thread.", e2);
      }
    }

    // 3. Fallback to Main Thread
    console.log("Attempting Main Thread backend...");

    const runMainThread = (useSeqConv) => {
      return new Promise((resolve, reject) => {
        const currentOpts = { ...opts, enableSeqConv: useSeqConv };
        const currentModelEntry = { ...modelEntry, enableSeqConv: useSeqConv };

        // Proxy callbackUI to intercept errors
        const proxyCallbackUI = (message, progressFrac, modalMessage, statData) => {
          if (statData && statData.Status === 'Fail') {
            reject(new Error(statData.Error_Type || modalMessage || "Inference Failed"));
            // We still call original callback to show error to user? 
            // Actually if we are falling back, we might NOT want to show the error yet?
            // But the existing code shows it. Let's let it show for now, or maybe suppress if we are going to retry.
            // For now, let's just reject.
          } else if (modalMessage && typeof modalMessage === 'string' && (modalMessage.toLowerCase().includes('fail') || modalMessage.toLowerCase().includes('error') || modalMessage.toLowerCase().includes('compatible') || modalMessage.toLowerCase().includes('texture') || modalMessage.toLowerCase().includes('maximum'))) {
            reject(new Error(modalMessage));
          }

          // If we are rejecting, we might want to prevent the UI from showing the error if we are going to retry.
          // But modifying callbackUI logic deeply is risky. 
          // Let's just pass it through. The user might see "Error" then "Retrying..."
          callbackUI(message, progressFrac, modalMessage, statData);
        };

        // Proxy callbackImg to resolve
        const proxyCallbackImg = (img, opts, modelEntry) => {
          callbackImg(img, opts, modelEntry);
          resolve();
        };

        runInferenceTfjsMain(currentOpts, currentModelEntry, nv1.volumes[0].hdr, niftiImage, proxyCallbackImg, proxyCallbackUI)
          .catch(e => reject(e));
      });
    };

    try {
      console.log("Attempting Main Thread with enableSeqConv: false");
      await runMainThread(false);
    } catch (e) {
      console.warn("Main Thread (fast) failed, retrying with enableSeqConv: true", e);
      await new Promise(r => setTimeout(r, 100)); // Small delay
      try {
        console.log("Attempting Main Thread with enableSeqConv: true");
        await runMainThread(true);
      } catch (e2) {
        console.error("Main Thread (slow) failed.", e2);
        window.alert("Inference failed on all backends.");
      }
    }
  }

  modelSelect.onchange = runSelectedInference;
  // backendSelect.onchange = runSelectedInference; // Removed

  saveImgBtn.onclick = function () {
    if (nv1.volumes.length < 2) {
      window.alert("No segmentation to save.");
      return;
    }
    nv1.volumes[1].saveToDisk("segmentation.nii.gz");
  };

  saveSceneBtn.onclick = function () {
    nv1.saveDocument("brainchop.nvd");
  };

  clipCheck.onchange = function () {
    nv1.setClipPlane(clipCheck.checked ? [0, 0, 90] : [2, 0, 90]);
  };

  function doLoadImage() {
    opacitySlider0.oninput();
    modelSelect.value = "-1";
  }

  async function fetchJSON(fnm) {
    const response = await fetch(fnm);
    return await response.json();
  }

  async function getUniqueValuesAndCounts(uint8Array) {
    const countsMap = new Map();
    for (const value of uint8Array) {
      countsMap.set(value, (countsMap.get(value) || 0) + 1);
    }
    return Array.from(countsMap, ([value, count]) => ({ value, count }));
  }

  async function createLabeledCounts(uniqueValuesAndCounts, labelStrings) {
    if (!labelStrings || uniqueValuesAndCounts.length !== labelStrings.length) {
      missingLabelStatus = "Failed to Predict Some Labels - ";
    }
    return labelStrings.map((label, index) => {
      const entry = uniqueValuesAndCounts.find(item => item.value === index);
      const countText = entry ? `${entry.count} mm3` : "Missing";
      if (countText === "Missing") missingLabelStatus += `${label}, `;
      return `${label}   ${countText}`;
    });
  }

  async function callbackImg(img, opts, modelEntry) {
    await closeAllOverlays();
    const overlayVolume = await nv1.volumes[0].clone();
    overlayVolume.zeroImage();
    Object.assign(overlayVolume.hdr, { scl_inter: 0, scl_slope: 1 });
    overlayVolume.img = img instanceof Uint8Array ? img : new Uint8Array(img.buffer);

    if (modelEntry.colormapPath) {
      const roiVolumes = await getUniqueValuesAndCounts(overlayVolume.img);
      const cmap = await fetchJSON(modelEntry.colormapPath);
      const newLabels = await createLabeledCounts(roiVolumes, cmap["labels"]);
      overlayVolume.setColormapLabel({ R: cmap["R"], G: cmap["G"], B: cmap["B"], labels: newLabels });
      overlayVolume.hdr.intent_code = 1002; // NIFTI_INTENT_LABEL
    } else {
      let colormap = opts.atlasSelectedColorTable.toLowerCase();
      if (!nv1.colormaps().includes(colormap)) colormap = "actc";
      overlayVolume.colormap = colormap;
    }
    overlayVolume.opacity = opacitySlider1.value / 255;
    await nv1.addVolume(overlayVolume);
  }

  async function reportTelemetry(statData) {
    if (typeof statData === "string") {
      try {
        statData = JSON.parse(statData);
      } catch (e) {
        console.error("Failed to parse telemetry data", e);
        return;
      }
    }
    statData = await localSystemDetails(statData, nv1.gl);
    diagnosticsString = ":: Diagnostics https://github.com/neuroneural/brainchop/issues ::\n";
    for (const key in statData) {
      diagnosticsString += `${key}: ${statData[key]}\n`;
    }
  }

  function callbackUI(message = "", progressFrac = -1, modalMessage = "", statData = []) {
    if (message) {
      console.log(message);
      document.getElementById("location").innerHTML = message;
    }
    if (isNaN(progressFrac)) {
      memstatus.style.color = "red";
      memstatus.innerHTML = "Memory Issue";
    } else if (progressFrac >= 0) {
      modelProgress.value = progressFrac * modelProgress.max;
    }
    if (modalMessage) {
      window.alert(modalMessage);
    }
    if (statData && Object.keys(statData).length > 0) {
      reportTelemetry(statData);
    }
  }

  function handleLocationChange(data) {
    document.getElementById("location").innerHTML = data.string
      .split("   ")
      .map((value) => `<p style="font-size: 14px;margin:0px;">${value}</p>`)
      .join("");
  }

  const defaults = {
    backColor: [0.4, 0.4, 0.4, 1],
    show3Dcrosshair: true,
    onLocationChange: handleLocationChange,
  };

  const nv1 = new Niivue(defaults);
  await nv1.attachTo("gl1");
  Object.assign(nv1.opts, {
    dragMode: nv1.dragModes.pan,
    multiplanarForceRender: true,
    yoke3Dto2DZoom: true,
    crosshairGap: 11,
  });
  nv1.setInterpolation(true);
  await nv1.loadVolumes([{ url: "./t1_crop.nii.gz" }]);

  // Add placeholder option
  const placeholderOption = document.createElement("option");
  placeholderOption.text = "Run Segmentation Model";
  placeholderOption.value = "-1";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  placeholderOption.hidden = true;
  modelSelect.appendChild(placeholderOption);

  for (let i = 0; i < inferenceModelsList.length; i++) {
    const option = document.createElement("option");
    option.text = inferenceModelsList[i].modelName;
    option.value = i;

    if (inferenceModelsList[i].type === 'Divider') {
      option.disabled = true;
    }

    modelSelect.appendChild(option);
  }
  nv1.onImageLoaded = doLoadImage;
  // modelSelect.selectedIndex = -1; // Removed as we want the placeholder to be selected by default (which is index 0 or value "-1")
  // Actually, we set selected=true on placeholder, so browser should pick it up.
  // But let's be explicit.
  modelSelect.value = "-1";
  drawDrop.selectedIndex = -1;

  await initializeBackend();

  // --- FIX IS HERE ---
  // Use URLSearchParams to correctly parse the query string.
  const urlParams = new URLSearchParams(window.location.search);
  const modelParam = urlParams.get("model");
  if (modelParam && modelParam < inferenceModelsList.length) {
    modelSelect.value = modelParam;
    runSelectedInference();
  }
}

async function updateStarCount() {
  try {
    const response = await fetch("https://api.github.com/repos/neuroneural/brainchop");
    const data = await response.json();
    document.getElementById("star-count").textContent = data.stargazers_count;
  } catch (error) {
    console.error("Error fetching star count:", error);
  }
}

(async function () {
  await main();
  await updateStarCount();
})();
