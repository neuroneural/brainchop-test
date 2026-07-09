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

// --- DEBUG OVERRIDE -------------------------------------------------------
// Normally false: WebGPU is used when available, WebGL2 is the fallback.
// Set true to force every model through the WebGL2 (WebWorker / tfjs) backend
// for debugging/benchmarking the fallback path. See the
// `isWebGpuAvailable && !FORCE_WEBGL2_TESTING` guard in runSelectedInference().
const FORCE_WEBGL2_TESTING = false;
// --------------------------------------------------------------------------

/**
 * Detects WebGPU support and initializes the device.
 * Provides detailed diagnostics for troubleshooting.
 */
async function initializeBackend() {
  const diagnostics = {
    secureContext: window.isSecureContext,
    navigatorGpuExists: 'gpu' in navigator,
    adapterObtained: false,
    deviceObtained: false,
    f16Support: false,
    error: null
  };

  // Check secure context first
  if (!window.isSecureContext) {
    console.warn('WebGPU requires a secure context (HTTPS or localhost).');
    console.warn('Current origin:', window.location.origin);
  }

  if ('gpu' in navigator) {
    try {
      console.log('Requesting WebGPU adapter...');
      const adapter = await navigator.gpu.requestAdapter();

      if (adapter) {
        diagnostics.adapterObtained = true;
        console.log('WebGPU adapter obtained:', adapter);

        // Log adapter info if available
        if (adapter.info) {
          console.log('Adapter info:', adapter.info);
        }

        // Log adapter limits
        console.log('Adapter limits:', {
          maxBufferSize: adapter.limits.maxBufferSize,
          maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
          maxComputeWorkgroupsPerDimension: adapter.limits.maxComputeWorkgroupsPerDimension
        });

        // Request the adapter's full limits. The default device limits cap
        // maxComputeInvocationsPerWorkgroup at 256, but BEAM-tuned runners
        // (e.g. dkatlas24) emit workgroups of 512-1024 invocations, which fail
        // to create a ComputePipeline unless we opt into the higher limit here.
        // Requesting the adapter's reported maximum is always valid.
        const requiredLimits = {
          maxBufferSize: adapter.limits.maxBufferSize,
          maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
          maxComputeInvocationsPerWorkgroup: adapter.limits.maxComputeInvocationsPerWorkgroup,
          maxComputeWorkgroupSizeX: adapter.limits.maxComputeWorkgroupSizeX,
          maxComputeWorkgroupSizeY: adapter.limits.maxComputeWorkgroupSizeY,
          maxComputeWorkgroupSizeZ: adapter.limits.maxComputeWorkgroupSizeZ,
          maxComputeWorkgroupStorageSize: adapter.limits.maxComputeWorkgroupStorageSize,
          maxComputeWorkgroupsPerDimension: adapter.limits.maxComputeWorkgroupsPerDimension
        };
        const hasF16 = adapter.features.has("shader-f16");
        diagnostics.f16Support = hasF16;
        const requiredFeatures = hasF16 ? ["shader-f16"] : [];

        gpuDevice = await adapter.requestDevice({ requiredLimits, requiredFeatures });
        diagnostics.deviceObtained = true;

        isWebGpuAvailable = true;
        const f16Status = hasF16 ? "enabled" : "not available";
        console.log(`✓ WebGPU initialized successfully. F16: ${f16Status}`);
      } else {
        console.warn('WebGPU adapter request returned null.');
        console.warn('This typically means:');
        console.warn('  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags');
        console.warn('  - Unsupported GPU hardware');
        console.warn('  - GPU drivers need updating');
        diagnostics.error = 'Adapter returned null';
      }
    } catch (e) {
      diagnostics.error = e.message;
      console.error('WebGPU initialization error:', e);

      // Provide Safari-specific guidance
      if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
        console.warn('Safari detected. To enable WebGPU:');
        console.warn('  1. Open Safari Settings/Preferences');
        console.warn('  2. Go to Advanced tab, enable "Show features for web developers"');
        console.warn('  3. Go to Feature Flags tab');
        console.warn('  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering');
        console.warn('  5. Restart Safari');
      }
    }
  } else {
    console.warn('navigator.gpu not found. WebGPU API is not available in this browser.');
    diagnostics.error = 'navigator.gpu not found';

    // Provide Firefox-specific guidance
    if (navigator.userAgent.includes('Firefox')) {
      console.warn('Firefox detected. To enable WebGPU in about:config:');
      console.warn('  1. Set dom.webgpu.enabled = true');
      console.warn('  2. Set gfx.webgpu.ignore-blocklist = true');
      console.warn('  3. Restart Firefox');
    }
  }

  // Update UI with backend status
  // While FORCE_WEBGL2_TESTING is on, report WebGL even if WebGPU initialized,
  // so the indicator matches the path actually used.
  updateBackendStatusUI(isWebGpuAvailable && !FORCE_WEBGL2_TESTING, diagnostics);

  if (!isWebGpuAvailable) {
    console.log('Falling back to WebGL backend.');
  }

  // Store diagnostics for later access
  window.webgpuDiagnostics = diagnostics;
  return diagnostics;
}

/**
 * Updates the UI to display the current backend status.
 */
function updateBackendStatusUI(webgpuAvailable, diagnostics) {
  const statusEl = document.getElementById('backendStatus');
  if (!statusEl) {
    console.log('Backend status element not found in DOM');
    return;
  }

  if (webgpuAvailable) {
    const f16Text = diagnostics.f16Support ? ' (F16)' : '';
    statusEl.textContent = `WebGPU${f16Text}`;
    statusEl.style.color = '#4CAF50'; // Green
    statusEl.title = 'WebGPU backend active - fastest performance';
  } else {
    statusEl.textContent = 'WebGL';
    statusEl.style.color = '#FF9800'; // Orange

    // Build helpful tooltip
    let tooltip = 'WebGL backend (fallback)';
    if (diagnostics.error) {
      tooltip += `\nReason: ${diagnostics.error}`;
    }
    if (!diagnostics.secureContext) {
      tooltip += '\n⚠ Not a secure context (HTTPS required)';
    }
    if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
      tooltip += '\n\nTo enable WebGPU in Safari:\n1. Settings > Feature Flags\n2. Enable WebGPU flags\n3. Restart Safari';
    }
    if (navigator.userAgent.includes('Firefox')) {
      tooltip += '\n\nTo enable WebGPU in Firefox:\n1. about:config > dom.webgpu.enabled = true\n2. gfx.webgpu.ignore-blocklist = true\n3. Restart Firefox';
    }
    statusEl.title = tooltip;
  }
}

async function main() {
  let diagnosticsString = "";
  let missingLabelStatus = "";
  let chopWorker;
  // Raw label names / colors for the current segmentation (index -> value), used by "Save Stats".
  let lastSegLabelNames = null;
  let lastSegColors = null; // { R:[], G:[], B:[] }

  // --- Single-label isolation --------------------------------------------
  // Alt/Option-click a region in a 2D panel to show ONLY that label across
  // the X/Y/Z panels and the 3D render. Alt-click the same region again (or
  // Alt-click background) to restore all labels. It's a pure display toggle:
  // we only flip per-label alpha in the overlay color LUT, never the voxels.
  // Option/Alt is chosen because niivue already binds Shift+drag and
  // Ctrl+drag to its own drag modes (and Ctrl-click is a context menu on
  // macOS), whereas altKey is free for in-canvas clicks.
  const ISOLATE_MODIFIER = "altKey";
  let isolatedLabel = null;    // label value shown alone, or null = show all
  let originalSegImg = null;   // pristine label voxels, for restore + stats
  let isolationStats = null;   // { lines:[...], color:[r,g,b,a] } drawn as a fixed HUD
  const HUD_TEXT_SCALE = 0.9;  // relative to niivue fontPx

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
    const aboutContent = `
      <div style="text-align: left; font-size: 0.95em;">
        <p><strong>🔒 Privacy First</strong><br>
        BrainChop runs entirely <strong>locally in your browser</strong>. Your imaging data never leaves your device, and no server-side processing is involved.</p>

        <p><strong>⌨️ Controls</strong><br>
        • <strong>Drag & Drop</strong> any NIfTI file to open.
        • Press <strong>C</strong> to toggle/cycle the clip-plane.
        • Press <strong>V</strong> repeatedly to cycle through views.
        • <strong>Option/Alt-click</strong> a region to isolate it (show it alone in all panels + 3D); Alt-click it again, or Alt-click the background, to bring the others back.</p>

        <p><strong>🧠 AI Models</strong><br>
        <strong>⚡ Flash Filet:</strong> Small, lightning fast, resource-friendly. Best for HCP-like structural MRIs ("Tissue GWM (light)").<br>
        <strong>🔪 Thin Slice:</strong> High quality but potentially fragile. Best for standard healthy adult data.<br>
        <strong>🪓 Rough Chop:</strong> New & robust! Works on a wide variety of data qualities (clinical, infant). May be less refined than "Thin slice" on perfect data but tougher on real-world data.</p>
        
        <p><em>Note: Models may run slower on limited devices to ensure memory safety.</em></p>
      </div>
    `;
    showModal("About BrainChop", aboutContent);
  };

  diagnosticsBtn.onclick = function () {
    let msg = diagnosticsString;

    // If no inference run yet, show startup diagnostics
    if (msg.length < 1 && window.webgpuDiagnostics) {
      const d = window.webgpuDiagnostics;
      msg = ":: Startup Diagnostics ::\n";
      msg += `Secure Context: ${d.secureContext}\n`;
      msg += `WebGPU Enabled: ${isWebGpuAvailable}\n`;
      msg += `F16 Support: ${d.f16Support}\n`;
      if (d.error) msg += `Error: ${d.error}\n`;

      // Add browser info
      msg += `User Agent: ${navigator.userAgent}\n`;
    }

    // If no inference run yet, show startup diagnostics
    if (msg.length < 1 && window.webgpuDiagnostics) {
      // ... (existing logic to build msg)
    }

    if (msg.length < 1) {
      showModal("Diagnostics", "No diagnostic string generated: run a model to create diagnostics");
      return;
    }

    // Logic for missing labels
    let statusMsg = msg;
    missingLabelStatus = missingLabelStatus.slice(0, -2);
    if (missingLabelStatus !== "") {
      if (statusMsg.includes('Status: OK')) {
        statusMsg = statusMsg.replace('Status: OK', `Status: ${missingLabelStatus}`);
      }
    }
    missingLabelStatus = "";

    // ^ note: clipboard write is async but often works without await in loose contexts. 
    // Ideally we catch errors.
    navigator.clipboard.writeText(statusMsg).then(() => {
      showModal("Diagnostics", `<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${statusMsg}</pre>`);
    }).catch(err => {
      showModal("Diagnostics", `<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${statusMsg}</pre>`);
    });
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

  // The segmentation overlay, only if it carries a discrete label LUT.
  function segOverlay() {
    return (nv1.volumes.length >= 2 && nv1.volumes[1].colormapLabel)
      ? nv1.volumes[1] : null;
  }

  function resetLabelIsolation() {
    isolatedLabel = null;
    originalSegImg = null;
    isolationStats = null;
  }

  // Isolation works on the label DATA, not the color LUT: non-selected voxels
  // are set to background (0). We tried hiding others via the LUT (alpha 0)
  // instead, but niivue's 3D atlas shader anti-aliases each voxel's ALPHA from
  // its 6 neighbours while keeping each voxel's own RGB — so hidden voxels
  // touching the kept region borrowed alpha and smeared their color/glow onto
  // the surface, burying the folds. Zeroing the data makes those voxels true
  // background: the shader skips them, the T1 shows through the sulci, and the
  // kept region keeps clean anti-aliased edges. Fully reversible — the pristine
  // labels are restored from originalSegImg (also used for stats).
  function applyLabelIsolation() {
    const ov = segOverlay();
    if (!ov) return;
    if (originalSegImg === null) originalSegImg = ov.img; // capture pristine once
    if (isolatedLabel === null) {
      ov.img = originalSegImg;
      isolationStats = null;
    } else {
      const src = originalSegImg;
      const out = new src.constructor(src.length);
      for (let i = 0; i < src.length; i++) out[i] = (src[i] === isolatedLabel) ? isolatedLabel : 0;
      ov.img = out;
      isolationStats = buildIsolationStats(isolatedLabel);
    }
    nv1.updateGLVolume();
  }

  // Full stats for one label, formatted as lines for the on-screen readout.
  function buildIsolationStats(labelVal) {
    const base = nv1.volumes[0];
    const seg = originalSegImg || (nv1.volumes[1] && nv1.volumes[1].img);
    if (!base || !seg) return null;
    const pd = base.hdr.pixDims || [];
    const voxMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;
    const rows = computeLabelStats(base.img, seg, voxMm3);
    const total = rows.reduce((s, r) => s + r.volume_mm3, 0);
    const r = rows.find((x) => x.label === labelVal);
    if (!r) return null;
    const pct = total > 0 ? (r.volume_mm3 / total) * 100 : 0;
    const lines = [
      r.name,
      `${fmtCm3(r.volume_mm3)} cm3   (${pct.toFixed(1)}% of brain)`,
      `${r.voxels.toLocaleString()} voxels`,
      `intensity  ${r.mean.toFixed(0)} +/- ${r.stdev.toFixed(0)}`,
    ];
    // Title in the region's own color, brightened for legibility on black.
    let color = [1, 1, 1, 1];
    if (lastSegColors && lastSegColors.R && lastSegColors.R[labelVal] != null) {
      const br = (c) => Math.min(255, c * 0.55 + 130) / 255;
      color = [br(lastSegColors.R[labelVal]), br(lastSegColors.G[labelVal]), br(lastSegColors.B[labelVal]), 1];
    }
    return { lines, color };
  }

  // Draw the isolated-region readout as fixed screen-space text in the empty
  // top-left corner of the 3D render tile. Because it's drawn per-frame in
  // canvas coordinates (not anchored in the scene), it stays put while the head
  // rotates. niivue's drawText is single-line, so we lay out the lines by hand.
  function drawIsolationHUD() {
    if (isolatedLabel === null || !isolationStats || !segOverlay()) return;
    const tile = nv1.screenSlices && nv1.screenSlices.find((s) => s.axCorSag === 4 /* RENDER */);
    if (!tile) return;
    const [L, T] = tile.leftTopWidthHeight; // canvas px, top-left origin
    const gl = nv1.gl;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.BLEND);
    const size = nv1.fontPx * HUD_TEXT_SCALE;
    const lineH = size * 1.55;
    const pad = nv1.fontPx * 0.6;
    const x = L + pad;
    const y = T + pad;
    const white = [0.92, 0.92, 0.92, 1];
    const { lines, color } = isolationStats;
    nv1.drawText([x, y], lines[0], HUD_TEXT_SCALE, color);
    for (let i = 1; i < lines.length; i++) {
      nv1.drawText([x, y + i * lineH], lines[i], HUD_TEXT_SCALE, white);
    }
  }

  // True (pristine) label under the crosshair, even while a region is isolated,
  // so Alt-clicking a different region switches straight to it.
  function labelUnderCursor() {
    const ov = segOverlay();
    if (!ov) return null;
    const mm = nv1.frac2mm(nv1.scene.crosshairPos, 0, true);
    const vox = ov.mm2vox(mm);
    const cur = ov.img;
    if (originalSegImg) ov.img = originalSegImg;
    const v = Math.round(ov.getValue(vox[0], vox[1], vox[2], ov.frame4D));
    ov.img = cur;
    return v;
  }

  // Toggle isolation of a specific label value. Background (0) or the already
  // isolated label restores the full view. Shared by Alt-click, the stats
  // panel, and Esc.
  function isolateLabel(labelVal) {
    if (!segOverlay()) return;
    isolatedLabel = (labelVal === 0 || labelVal === isolatedLabel) ? null : labelVal;
    applyLabelIsolation();
  }

  function handleIsolateClick(e) {
    if (!e[ISOLATE_MODIFIER]) return;
    if (!segOverlay()) return;
    const lbl = labelUnderCursor();
    if (lbl === null || Number.isNaN(lbl)) return;
    isolateLabel(lbl);
    e.preventDefault();
  }

  async function runSelectedInference() {
    const selectedModelIndex = modelSelect.value;
    if (selectedModelIndex === "-1") return;
    if (modelSelect.selectedIndex < 0) return;

    await closeAllOverlays();
    resetLabelIsolation(); // drop any active single-label view + its HUD
    await ensureConformed();

    const modelEntry = inferenceModelsList[selectedModelIndex];

    const opts = { ...brainChopOpts };
    // Fix URL construction to handle './' base correctly and allow subfolders
    const rootUrl = new URL(import.meta.env.BASE_URL, window.location.href).href;
    // Remove trailing slash if present to avoid double slashes when appending paths starting with /
    opts.rootURL = rootUrl.endsWith('/') ? rootUrl.slice(0, -1) : rootUrl;

    const niftiImage = nv1.volumes[0].img;

    // 1. Try WebGPU  (skipped while FORCE_WEBGL2_TESTING is true)
    if (isWebGpuAvailable && !FORCE_WEBGL2_TESTING && modelEntry.webgpu_safetensor) {
      console.log("Attempting WebGPU backend...");

      // Get UI state for TTA
      const useTTA = document.getElementById('ttaCheck') ? document.getElementById('ttaCheck').checked : false;
      const currentModelEntry = { ...modelEntry, enableTTA: useTTA };

      try {
        await runInferenceWebGpu(gpuDevice, opts, currentModelEntry, nv1.volumes[0].hdr, niftiImage, callbackImg, callbackUI);
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
        const useTTA = document.getElementById('ttaCheck').checked;
        const currentOpts = { ...opts, enableSeqConv: useSeqConv };
        const currentModelEntry = { ...modelEntry, enableSeqConv: useSeqConv, enableTTA: useTTA };

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

  // Compute per-label statistics of the input image intensities within each
  // segmentation label. Single pass builds a 256-bin histogram per label
  // (the conformed input is Uint8Array, so bins are exact), from which
  // count/volume/min/max/quartiles/mean/stdev are derived.
  function computeLabelStats(imgArr, labelArr, voxelVolMm3) {
    const HIST = 256;
    const stats = new Map(); // labelValue -> { count, sum, sumSq, hist }
    const n = labelArr.length;
    for (let i = 0; i < n; i++) {
      const lbl = labelArr[i];
      if (lbl === 0) continue; // skip background
      let s = stats.get(lbl);
      if (!s) {
        s = { count: 0, sum: 0, sumSq: 0, hist: new Float64Array(HIST) };
        stats.set(lbl, s);
      }
      const v = imgArr[i];
      s.count++;
      s.sum += v;
      s.sumSq += v * v;
      s.hist[v]++;
    }

    const quantileFromHist = (hist, count, p) => {
      const target = p * count;
      let cum = 0;
      for (let b = 0; b < hist.length; b++) {
        cum += hist[b];
        if (cum >= target) return b;
      }
      return hist.length - 1;
    };

    const rows = [];
    for (const [lbl, s] of [...stats.entries()].sort((a, b) => a[0] - b[0])) {
      const mean = s.sum / s.count;
      const variance = Math.max(0, s.sumSq / s.count - mean * mean);
      let min = 0, max = 0;
      for (let b = 0; b < s.hist.length; b++) { if (s.hist[b] > 0) { min = b; break; } }
      for (let b = s.hist.length - 1; b >= 0; b--) { if (s.hist[b] > 0) { max = b; break; } }
      rows.push({
        label: lbl,
        name: (lastSegLabelNames && lastSegLabelNames[lbl] != null) ? lastSegLabelNames[lbl] : `label_${lbl}`,
        voxels: s.count,
        volume_mm3: s.count * voxelVolMm3,
        min,
        max,
        q1: quantileFromHist(s.hist, s.count, 0.25),
        median: quantileFromHist(s.hist, s.count, 0.5),
        q3: quantileFromHist(s.hist, s.count, 0.75),
        mean,
        stdev: Math.sqrt(variance),
      });
    }
    return rows;
  }

  function buildStatsCsv(rows) {
    const header = ["label", "name", "voxels", "volume_mm3", "min", "max", "q1", "median", "q3", "mean", "stdev"];
    const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(6));
    const esc = (s) => /[",\n]/.test(s) ? `"${String(s).replace(/"/g, '""')}"` : String(s);
    const lines = [header.join(",")];
    for (const r of rows) {
      lines.push([r.label, esc(r.name), r.voxels, fmt(r.volume_mm3),
        r.min, r.max, r.q1, r.median, r.q3, fmt(r.mean), fmt(r.stdev)].join(","));
    }
    return lines.join("\n") + "\n";
  }

  function downloadCsv(rows) {
    const blob = new Blob([buildStatsCsv(rows)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mask_stats.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const escHtml = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmtCm3 = (mm3) => { const v = mm3 / 1000; return v >= 10 ? Math.round(v).toLocaleString() : v.toFixed(1); };

  function buildStatsPanelHtml(rows, totalMm3) {
    const maxVol = Math.max(...rows.map(r => r.volume_mm3));
    const colorOf = (r) => (lastSegColors && lastSegColors.R && lastSegColors.R[r.label] != null)
      ? `rgb(${lastSegColors.R[r.label]},${lastSegColors.G[r.label]},${lastSegColors.B[r.label]})`
      : "#6b9bd1";
    let body = "";
    for (const r of rows) {
      const pct = totalMm3 > 0 ? (r.volume_mm3 / totalMm3) * 100 : 0;
      const wAbs = maxVol > 0 ? (r.volume_mm3 / maxVol) * 100 : 0;
      const val = `<span class="stat-val" data-cm3="${fmtCm3(r.volume_mm3)}" data-pct="${pct.toFixed(1)}%">${fmtCm3(r.volume_mm3)}</span>`;
      const bar = `<span class="stat-bar" style="width:${wAbs.toFixed(2)}%;background:${colorOf(r)}" data-w-abs="${wAbs.toFixed(2)}" data-w-pct="${pct.toFixed(2)}"></span>`;
      const cell = (k, v) => `<div><span class="k">${k}</span><span class="v">${v}</span></div>`;
      const detail = cell("min", r.min) + cell("max", r.max)
        + cell("Q1", r.q1) + cell("Q3", r.q3)
        + cell("median", r.median) + cell("mean", r.mean.toFixed(2))
        + cell("SD", r.stdev.toFixed(2)) + cell("voxels", r.voxels.toLocaleString());
      body += `
        <div class="stat-row" role="button" tabindex="0" data-label="${r.label}" style="cursor:pointer">
          <div class="stat-line">
            <span class="stat-name">${escHtml(r.name)}</span>
            <span class="stat-track">${bar}</span>
            ${val}
            <button type="button" class="stat-iso" title="Show only this region in the viewer">isolate</button>
          </div>
          <div class="stat-detail" style="display:none">${detail}</div>
        </div>`;
    }
    return `
      <style>
        /* niivue.css sets a global "div{display:table-row}"; force block/flex on our
           plain container divs so width/1fr track sizing works. */
        /* Cap the dialog and let ONLY the region list scroll, so the header,
           toggle, Download and Close stay pinned/visible with long atlases. */
        #appDialog[open]{max-height:88vh;display:flex;flex-direction:column;box-sizing:border-box}
        #appDialog[open] h3{flex:0 0 auto}
        #appDialog[open] #dialogCloseBtn{flex:0 0 auto;align-self:center;width:auto;float:none}
        #dialogMessage{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}
        #statsPanel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;width:440px;max-width:100%;box-sizing:border-box}
        #statsPanel .stat-head{flex:0 0 auto;display:flex;justify-content:space-between;align-items:baseline;margin:0 0 8px}
        #statsPanel .stat-total{opacity:.7;font-size:.95em}
        #statsPanel .stat-toggle{flex:0 0 auto;align-self:flex-start;display:inline-flex;border:1px solid #444;border-radius:8px;overflow:hidden;margin:0 0 10px}
        #statsPanel .stat-toggle button{background:transparent;color:inherit;border:0;padding:6px 16px;cursor:pointer;font:inherit;float:none;margin:0}
        #statsPanel .stat-toggle button.active{background:#3a3a3a;font-weight:600}
        #statsPanel #statsRows{flex:1 1 auto;min-height:0;overflow-y:auto;display:block}
        #statsPanel .stat-row{display:block;padding:6px 4px;border-radius:6px}
        #statsPanel .stat-row:hover{background:rgba(255,255,255,.05)}
        #statsPanel .stat-line{display:grid;grid-template-columns:120px 1fr 60px auto;align-items:center;gap:10px}
        #statsPanel .stat-iso{background:transparent;color:inherit;border:1px solid #555;border-radius:6px;padding:2px 8px;font:inherit;font-size:.78em;opacity:.55;cursor:pointer;float:none;margin:0}
        #statsPanel .stat-row:hover .stat-iso{opacity:.9}
        #statsPanel .stat-iso:hover{background:#3a3a3a;border-color:#777}
        #statsPanel .stat-name{text-align:right;opacity:.85;font-size:.9em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #statsPanel .stat-track{background:rgba(255,255,255,.06);border-radius:5px;height:18px;overflow:hidden;min-width:0}
        #statsPanel .stat-bar{display:block;height:100%;border-radius:5px;min-width:3px}
        #statsPanel .stat-val{text-align:right;font-variant-numeric:tabular-nums;font-weight:600}
        #statsPanel .stat-detail{margin:4px 0 6px 0;display:grid;grid-template-rows:auto auto;grid-auto-flow:column;grid-auto-columns:1fr;gap:2px 14px;font-size:.78em;font-variant-numeric:tabular-nums}
        #statsPanel .stat-detail>div{display:flex;justify-content:space-between;gap:6px;white-space:nowrap}
        #statsPanel .stat-detail .k{opacity:.55}
        #statsPanel .stat-detail .v{font-weight:600}
        #statsPanel .stat-actions{flex:0 0 auto;display:block;margin-top:12px;border-top:1px solid #444;padding-top:10px;text-align:right}
      </style>
      <div id="statsPanel">
        <div class="stat-head">
          <span class="stat-total" id="statsUnitLabel">total ${fmtCm3(totalMm3)} cm³</span>
        </div>
        <div class="stat-toggle">
          <button type="button" data-mode="cm3" class="active">cm³</button>
          <button type="button" data-mode="pct">% of total</button>
        </div>
        <div id="statsRows">${body}</div>
        <div class="stat-actions">
          <button type="button" id="statsDownloadBtn">Download CSV</button>
        </div>
      </div>`;
  }

  saveStatsBtn.onclick = function () {
    if (nv1.volumes.length < 2) {
      window.alert("No segmentation to measure (run a model first).");
      return;
    }
    const imgArr = nv1.volumes[0].img;   // conformed input intensities
    // Use pristine labels so region stats stay whole-brain even while isolated.
    const labelArr = originalSegImg || nv1.volumes[1].img; // segmentation labels
    if (!imgArr || !labelArr || imgArr.length !== labelArr.length) {
      window.alert("Input and segmentation grids do not match.");
      return;
    }
    const pd = nv1.volumes[0].hdr.pixDims || [];
    const voxelVolMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;

    let rows = computeLabelStats(imgArr, labelArr, voxelVolMm3);
    if (rows.length === 0) {
      window.alert("No non-background labels found in the segmentation.");
      return;
    }
    // Largest region first, matching the reference panel layout.
    rows = rows.slice().sort((a, b) => b.volume_mm3 - a.volume_mm3);
    const totalMm3 = rows.reduce((s, r) => s + r.volume_mm3, 0);

    showModal("Region volumes", buildStatsPanelHtml(rows, totalMm3));

    // Wire up interactivity (innerHTML strips <script>, so attach handlers here).
    const panel = document.getElementById("statsPanel");
    if (!panel) return;

    panel.querySelectorAll(".stat-toggle button").forEach(btn => {
      btn.onclick = () => {
        const mode = btn.dataset.mode;
        panel.querySelectorAll(".stat-toggle button").forEach(b => b.classList.toggle("active", b === btn));
        document.getElementById("statsUnitLabel").textContent =
          mode === "pct" ? "100% of segmented volume" : `total ${fmtCm3(totalMm3)} cm³`;
        panel.querySelectorAll(".stat-row").forEach(row => {
          const val = row.querySelector(".stat-val");
          const bar = row.querySelector(".stat-bar");
          val.textContent = mode === "pct" ? val.dataset.pct : val.dataset.cm3;
          bar.style.width = (mode === "pct" ? bar.dataset.wPct : bar.dataset.wAbs) + "%";
        });
      };
    });

    panel.querySelectorAll(".stat-row").forEach(row => {
      const toggle = () => {
        const d = row.querySelector(".stat-detail");
        d.style.display = d.style.display === "none" ? "grid" : "none";
      };
      row.onclick = toggle;
      row.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } };
    });

    // Per-row "isolate": show only that region in the viewer and close the
    // dialog so it's visible. stopPropagation so the row's detail toggle
    // doesn't also fire.
    panel.querySelectorAll(".stat-iso").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const labelVal = parseInt(btn.closest(".stat-row").dataset.label, 10);
        if (!Number.isNaN(labelVal)) isolateLabel(labelVal);
        const dlg = document.getElementById("appDialog");
        if (dlg && dlg.open) dlg.close();
      };
    });

    document.getElementById("statsDownloadBtn").onclick = () => downloadCsv(rows);
  };

  saveSceneBtn.onclick = async function () {
    // Export the FULL segmentation even while a region is isolated (isolation is
    // a view-only state). Swap the pristine labels in for the save, then rebuild
    // the isolated view so the receiver can Esc/Alt-click through everything.
    const ov = segOverlay();
    const restore = isolatedLabel !== null && ov && originalSegImg;
    if (restore) ov.img = originalSegImg;
    try {
      await nv1.saveDocument("brainchop.nvd");
    } finally {
      if (restore) applyLabelIsolation();
    }
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
    resetLabelIsolation();
    const overlayVolume = await nv1.volumes[0].clone();
    overlayVolume.zeroImage();
    Object.assign(overlayVolume.hdr, { scl_inter: 0, scl_slope: 1 });
    overlayVolume.img = img instanceof Uint8Array ? img : new Uint8Array(img.buffer);

    lastSegLabelNames = null;
    lastSegColors = null;
    if (modelEntry.type === 'Brain_Masking') {
      const newLabels = ["Background", "Brain Mask"];
      lastSegLabelNames = newLabels.slice();
      const newR = [0, 217];
      const newG = [0, 119];
      const newB = [0, 33];
      lastSegColors = { R: newR, G: newG, B: newB };
      overlayVolume.setColormapLabel({ R: newR, G: newG, B: newB, labels: newLabels });
      overlayVolume.hdr.intent_code = 1002; // NIFTI_INTENT_LABEL
    } else if (modelEntry.colormapPath) {
      const roiVolumes = await getUniqueValuesAndCounts(overlayVolume.img);
      const cmap = await fetchJSON(modelEntry.colormapPath);
      lastSegLabelNames = cmap["labels"] ? cmap["labels"].slice() : null;
      lastSegColors = { R: cmap["R"], G: cmap["G"], B: cmap["B"] };
      const newLabels = await createLabeledCounts(roiVolumes, cmap["labels"]);
      overlayVolume.setColormapLabel({ R: cmap["R"], G: cmap["G"], B: cmap["B"], labels: newLabels });
      overlayVolume.hdr.intent_code = 1002; // NIFTI_INTENT_LABEL
    } else {
      let colormap = opts.atlasSelectedColorTable.toLowerCase();

      // Custom: Use copper2 for Brain Extraction models
      if (modelEntry.type === 'Brain_Extraction') {
        colormap = 'copper2';
      }

      if (!nv1.colormaps().includes(colormap)) colormap = "actc";
      overlayVolume.colormap = colormap;
    }
    overlayVolume.opacity = opacitySlider1.value / 255;
    await nv1.addVolume(overlayVolume);

    // One-line discoverability hint (only for multi-label overlays where
    // isolation applies). It sits in the location bar until the next mouse move.
    if (segOverlay() && lastSegLabelNames && lastSegLabelNames.length > 2) {
      const loc = document.getElementById("location");
      if (loc) loc.innerHTML =
        `<p style="font-size:14px;margin:0;opacity:.75;">Tip: Option/Alt-click a region to show only it — Esc restores all</p>`;
    }
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
      if (statData[key] !== null && statData[key] !== undefined) {
        diagnosticsString += `${key}: ${statData[key]}\n`;
      }
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
    // Match the 2D panes (whose surround is the image's black background) so the
    // 3D render tile no longer reads as a lighter gray box.
    backColor: [0, 0, 0, 1],
    show3Dcrosshair: true,
    onLocationChange: handleLocationChange,
  };

  const nv1 = new Niivue(defaults);
  await nv1.attachTo("gl1");
  // Alt/Option-click a region to isolate it (see handleIsolateClick).
  nv1.gl.canvas.addEventListener("click", handleIsolateClick);

  // Esc restores the full segmentation (unless a dialog is open — let it close).
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || isolatedLabel === null) return;
    if (document.querySelector("dialog[open]")) return;
    isolatedLabel = null;
    applyLabelIsolation();
  });

  // Note: we intentionally do NOT force the label overlay to NEAREST in the 3D
  // pass. niivue's draw3D uses LINEAR there on purpose — in a volume ray-marcher
  // nearest sampling makes big opaque regions (e.g. white matter) accumulate
  // into a flat, noisy "glow" with the folds washed out. LINEAR gives the soft
  // shading that reveals surface structure. 2D panels stay crisp via
  // setInterpolation(true).

  // Crisp isolation. niivue's atlas shader anti-aliases label edges with a
  // 7-tap alpha feather (uniform xyzaFrac.xyz = 1/dims). With the full
  // segmentation every voxel is a label, so the feather is invisible — but an
  // isolated region borders background (0), and the feather softens that edge,
  // making the isolated region look blurry/"interpolated" in 2D even though the
  // texture filter is nearest (the feather is baked into the overlay texture
  // that both 2D and 3D sample). While a region is isolated we zero the feather
  // offsets for the atlas shaders so edges stay hard, matching the full-seg
  // look; the outline component (xyzaFrac.a) is preserved. Passes through
  // untouched when not isolating, so the full segmentation is unchanged.
  const _origUniform4fv = nv1.gl.uniform4fv.bind(nv1.gl);
  nv1.gl.uniform4fv = function (loc, v) {
    if (isolatedLabel !== null) {
      const aU = nv1.orientShaderAtlasU && nv1.orientShaderAtlasU.uniforms.xyzaFrac;
      const aI = nv1.orientShaderAtlasI && nv1.orientShaderAtlasI.uniforms.xyzaFrac;
      if ((aU && loc === aU) || (aI && loc === aI)) {
        return _origUniform4fv(loc, [0, 0, 0, v[3]]);
      }
    }
    return _origUniform4fv(loc, v);
  };

  // Draw the isolated-region readout at the end of every frame (screen-space,
  // so it doesn't rotate with the 3D head).
  const _origDrawSceneCore = nv1.drawSceneCore.bind(nv1);
  nv1.drawSceneCore = function () {
    const s = _origDrawSceneCore();
    try { drawIsolationHUD(); } catch (e) { console.warn("isolation HUD draw failed", e); }
    return s;
  };
  Object.assign(nv1.opts, {
    dragMode: nv1.dragModes.pan,
    multiplanarForceRender: true,
    yoke3Dto2DZoom: true,
    crosshairGap: 11,
  });
  nv1.setInterpolation(true);
  await nv1.loadVolumes([{ url: "./t1_crop.nii.gz" }]);

  // Clear loading placeholder
  modelSelect.innerHTML = "";

  // Add default placeholder
  const placeholderOption = document.createElement("option");
  placeholderOption.text = "Run Segmentation Model";
  placeholderOption.value = "-1";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  placeholderOption.hidden = true;
  modelSelect.appendChild(placeholderOption);

  for (let i = 0; i < inferenceModelsList.length; i++) {
    console.log(`Adding model option: ${inferenceModelsList[i].modelName}`);
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

// Helper to show custom modal
function showModal(title, message) {
  const dialog = document.getElementById("appDialog");
  const titleEl = document.getElementById("dialogTitle");
  const msgEl = document.getElementById("dialogMessage");
  const closeBtn = document.getElementById("dialogCloseBtn");

  if (!dialog) return;

  titleEl.textContent = title;
  msgEl.innerHTML = message;

  closeBtn.onclick = () => dialog.close();
  dialog.showModal();
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
