import { NiiVue, DRAG_MODE, SHOW_RENDER, nii2volume, writeVolume, makeLabelLut } from "@niivue/niivue";
import { conform } from "@niivue/nv-ext-image-processing";
import { mat4 } from "gl-matrix";
import { shiny } from "@niivue/niivue/assets/matcaps";
import { runInferenceWebGpu, warmupWebGpuRunners, yieldForPaint } from "./inference-webgpu.js";
import { inferenceModelsList, brainChopOpts, resolveModelEntry } from "./brainchop-parameters.js";
import { localSystemDetails } from "./brainchop-diagnostics.js";
import { getLabelHistogramU8 } from "./tensor-utils.js";
import { buildFreeSurferLut, remapLabelsToFreeSurfer } from "./freesurfer-labels.js";
import { installResponsiveLayout } from "./responsive-layout.js";
import { installTouchViewControls } from "./touch-view.js";

// niivue 1.0 dropped NVImage's methods (clone/saveToDisk/getValue); these
// replace the three we used. hdr keeps its prototype so the writers can use it.
function cloneVolume(src, img = src.img.slice(), name = src.name) {
  const hdr = Object.assign(Object.create(Object.getPrototypeOf(src.hdr)), src.hdr);
  const vol = nii2volume(hdr, img, name);
  vol.id = crypto.randomUUID();  // nii2volume defaults id to name; overlays must stay distinct
  return vol;
}

const cloneArr = (v) => (v && typeof v.slice === "function" ? v.slice() : v);

// Fast conformed overlay clone: reuses src (volumes[0]) geometry/RAS fields without running
// nii2volume's two 16.77M-voxel min/max and quantile scans.
function cloneOverlayVolume(src, img, name = src.name, hdrOverrides = {}, volOverrides = {}) {
  const hdr = Object.assign(Object.create(Object.getPrototypeOf(src.hdr)), src.hdr, {
    dims: [...src.hdr.dims],
    pixDims: [...src.hdr.pixDims],
    affine: src.hdr.affine.map((row) => [...row]),
    ...hdrOverrides,
  });
  const dims = src.dims ? src.dims.slice(0, 4) : hdr.dims.slice(0, 4);
  const nVox3D = src.nVox3D ?? dims[1] * dims[2] * dims[3];
  return {
    img,
    hdr,
    originalAffine: hdr.affine.map((row) => [...row]),
    dims,
    nVox3D,
    extentsMin: cloneArr(src.extentsMin),
    extentsMax: cloneArr(src.extentsMax),
    mm000: cloneArr(src.mm000),
    mm100: cloneArr(src.mm100),
    mm010: cloneArr(src.mm010),
    mm001: cloneArr(src.mm001),
    dimsRAS: src.dimsRAS ? [...src.dimsRAS] : undefined,
    pixDimsRAS: src.pixDimsRAS ? [...src.pixDimsRAS] : undefined,
    permRAS: src.permRAS ? [...src.permRAS] : undefined,
    toRAS: cloneArr(src.toRAS),
    toRASvox: cloneArr(src.toRASvox),
    matRAS: cloneArr(src.matRAS),
    obliqueRAS: cloneArr(src.obliqueRAS),
    oblique_angle: src.oblique_angle,
    frac2mm: cloneArr(src.frac2mm),
    frac2mmOrtho: cloneArr(src.frac2mmOrtho),
    img2RASstep: src.img2RASstep ? [...src.img2RASstep] : undefined,
    img2RASstart: src.img2RASstart ? [...src.img2RASstart] : undefined,
    volScale: src.volScale ? [...src.volScale] : undefined,
    name,
    id: crypto.randomUUID(),
    calMin: 0,
    calMax: 255,
    robustMin: 0,
    robustMax: 255,
    globalMin: 0,
    globalMax: 255,
    frame4D: 0,
    nFrame4D: 1,
    nTotalFrame4D: 1,
    isLegendVisible: false,
    ...volOverrides,
  };
}

function computeIntensityWindowFromHistU8(hist) {
  let mn = 256;
  let mx = -1;
  let nonZeroTotal = 0;
  for (let v = 0; v < 256; v++) {
    const c = hist[v];
    if (c > 0) {
      if (v < mn) mn = v;
      mx = v;
      if (v !== 0) nonZeroTotal += c;
    }
  }
  if (mn > mx) return { calMin: 0, calMax: 255, robustMin: 0, robustMax: 255, globalMin: 0, globalMax: 255 };
  if (mn === mx) return { calMin: mn, calMax: mx, robustMin: mn, robustMax: mx, globalMin: mn, globalMax: mx };
  const targetLo = Math.round(nonZeroTotal * 0.02);
  const targetHi = Math.round(nonZeroTotal * 0.02);
  let acc = 0;
  let qLo = mn;
  for (let v = mn; v <= mx; v++) {
    if (v === 0 && hist[0] > targetLo) {
      qLo = 0;
      break;
    }
    acc += hist[v];
    if (acc >= targetLo) {
      qLo = v;
      break;
    }
  }
  acc = 0;
  let qHi = mx;
  for (let v = mx; v >= mn; v--) {
    acc += hist[v];
    if (acc >= targetHi) {
      qHi = Math.min(mx, v + 1);
      break;
    }
  }
  if (qLo >= qHi) {
    qLo = mn;
    qHi = mx;
  }
  return { calMin: qLo, calMax: qHi, robustMin: qLo, robustMax: qHi, globalMin: mn, globalMax: mx };
}

// Niivue addresses voxels in RAS order (locationChange.vox, the drawing
// bitmap); NVImage.img is in the file's own storage order, and the conformed
// volume is deliberately not RAS (permRAS [-1, 3, -2]). Mirrors niivue's own
// getVoxelValue.
function rasToNativeIndex(vol, [rx, ry, rz]) {
  const d = vol.dimsRAS, start = vol.img2RASstart, step = vol.img2RASstep;
  if (!d || !start || !step) return null;
  if (rx < 0 || rx >= d[1] || ry < 0 || ry >= d[2] || rz < 0 || rz >= d[3]) return null;
  return start[0] + rx * step[0] + start[1] + ry * step[1] + start[2] + rz * step[2];
}

async function downloadVolume(vol, filename) {
  // writeVolume appends the buffer verbatim, so hand it exactly this view.
  const img = vol.img;
  const bytes = await writeVolume(filename, vol.hdr,
    img.buffer.byteLength === img.byteLength
      ? img.buffer
      : img.buffer.slice(img.byteOffset, img.byteOffset + img.byteLength));
  const url = URL.createObjectURL(new Blob([bytes]));
  const a = Object.assign(document.createElement("a"), { href: url, download: filename });
  a.click();
  URL.revokeObjectURL(url);
}

// --- Backend State ---
let gpuDevice = null;
let isWebGpuAvailable = false;
let gpuDeviceLostRecoveries = 0;

// --- Backend fallback chain state -----------------------------------------
// runSelectedInference() tries WebGPU, then the native WebGL2 runner, then the
// tfjs worker (fast, then seqConv), then the main thread. Every one of those
// stages reports its own failure through callbackUI's modalMessage, which used
// to pop a blocking window.alert -- so a user on a machine where WebGPU is
// unavailable got "WebGPU Error: ..." and then a perfectly good segmentation
// from the next backend. An earlier backend giving up is a console-level event.
// Messages are collected here and only surfaced if the whole chain fails.
let suppressBackendModals = false;
let backendAttemptMessages = [];

// --- DEBUG OVERRIDE -------------------------------------------------------
// Inference normally tries WebGPU first, then native WebGL2, then tfjs WebGL.
// Safari takes the latter two paths because its current WebGPU results fail.
// Safari 26.5 advertises shader-f16, but its WebGPU compute path has returned
// an all-class-2 cube for the light tissue model and all-zero labels for the
// 18-class model on this machine. Native WebGL2 produced a real segmentation.
// Keep Safari on the tested WebGL2 fallback until its WebGPU outputs are sound.
// ?inference=webgpu is an explicit test override for checking future WebKit builds.
const IS_SAFARI = /Safari/.test(navigator.userAgent) && !/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent);
const SAFARI_LEGACY_WEBGPU_GATE = IS_SAFARI && new URLSearchParams(window.location.search).get('inference') !== 'webgpu';
const FORCE_WEBGL2_TESTING = false;

// The NATIVE WebGL2 runner (webgl2_runners/) handles WebGL2 fallback without tfjs.
// The import stays DYNAMIC so WebGPU users never fetch the WebGL2 worker chunk.
const ENABLE_NATIVE_WEBGL2 = true;
// --------------------------------------------------------------------------

/**
 * Detects WebGPU support and initializes the device.
 * Provides detailed diagnostics for troubleshooting.
 */
async function initializeBackend(viewerGl = null) {
  const diagnostics = {
    secureContext: window.isSecureContext,
    navigatorGpuExists: 'gpu' in navigator,
    adapterObtained: false,
    deviceObtained: false,
    f16Support: false,
    error: null
  };

  // Note: When FORCE_WEBGL2_TESTING is true on Safari, we still initialize
  // WebGPU so V4 8-bit models (quantize8Bit: true) can run on WebGPU, while
  // legacy non-V4 models remain gated to WebGL2 in runInferenceChain().

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
          maxStorageBuffersPerShaderStage: adapter.limits.maxStorageBuffersPerShaderStage,
          maxUniformBufferBindingSize: adapter.limits.maxUniformBufferBindingSize,
          maxComputeInvocationsPerWorkgroup: adapter.limits.maxComputeInvocationsPerWorkgroup,
          maxComputeWorkgroupSizeX: adapter.limits.maxComputeWorkgroupSizeX,
          maxComputeWorkgroupSizeY: adapter.limits.maxComputeWorkgroupSizeY,
          maxComputeWorkgroupSizeZ: adapter.limits.maxComputeWorkgroupSizeZ,
          maxComputeWorkgroupStorageSize: adapter.limits.maxComputeWorkgroupStorageSize,
          maxComputeWorkgroupsPerDimension: adapter.limits.maxComputeWorkgroupsPerDimension
        };
        const hasF16 = adapter.features.has("shader-f16");
        const hasSubgroups = adapter.features.has("subgroups");
        diagnostics.f16Support = hasF16;
        diagnostics.subgroupsSupport = hasSubgroups;
        const requiredFeatures = [];
        if (hasF16) requiredFeatures.push("shader-f16");
        if (hasSubgroups) requiredFeatures.push("subgroups");

        const createdDevice = await adapter.requestDevice({ requiredLimits, requiredFeatures });
        createdDevice.__adapterInfo = adapter.info || null;
        if (viewerGl && typeof viewerGl.getParameter === "function") {
          try {
            if (/Firefox/i.test(navigator.userAgent || "")) {
              createdDevice.__glRenderer = String(viewerGl.getParameter(viewerGl.RENDERER) || "");
            } else {
              const dbg = viewerGl.getExtension("WEBGL_debug_renderer_info");
              createdDevice.__glRenderer = String(
                (dbg ? viewerGl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : viewerGl.getParameter(viewerGl.RENDERER)) || ""
              );
            }
          } catch { /* viewer may use WebGPU backend */ }
        }
        createdDevice.__isLost = false;
        if (createdDevice.lost && typeof createdDevice.lost.then === "function") {
          createdDevice.lost.then((lossInfo) => {
            createdDevice.__isLost = true;
            if (lossInfo?.reason === "destroyed") return;
            console.warn(
              `[WebGPU] Device was lost (${lossInfo?.reason || "unknown"}): ${lossInfo?.message || ""}`
            );
            if (gpuDevice === createdDevice) {
              gpuDevice = null;
              isWebGpuAvailable = false;
              diagnostics.deviceObtained = false;
              diagnostics.error = lossInfo?.message || "WebGPU device lost";
              updateBackendStatusUI(false, diagnostics);
            }
          });
        }
        gpuDevice = createdDevice;
        diagnostics.deviceObtained = true;

        isWebGpuAvailable = true;
        const f16Status = hasF16 ? "enabled" : "not available";
        console.log(`✓ WebGPU initialized successfully. F16: ${f16Status}, Subgroups: ${hasSubgroups ? "enabled" : "not available"}`);
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
  updateBackendStatusUI(isWebGpuAvailable, diagnostics);

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
    if (IS_SAFARI && !FORCE_WEBGL2_TESTING) {
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
  // Raw label names / colors for the current segmentation (index -> value), used by "Save Stats".
  let lastSegLabelNames = null;
  let lastSegColors = null; // { R:[], G:[], B:[] }
  let lastModelEntry = null;
  let lastBrainMask = null; // Mindgrab's postprocessed labels, before masking image intensities

  function getSelectedBaseModel() {
    const idx = modelSelect.value;
    if (idx === "-1" || modelSelect.selectedIndex < 0) return null;
    return inferenceModelsList[idx] || null;
  }

  function syncModelSelectTooltip() {
    const baseEntry = getSelectedBaseModel();
    modelSelect.title = baseEntry?.description || "Choose a segmentation model to run";
  }

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
  let isolatedProbabilityIndex = null; // selected CAT-lite tissue, or null = show all
  let probabilityOverlays = null;      // current [GM, WM, CSF] volumes
  let originalSegImg = null;   // pristine label voxels, for restore + stats
  let isolationStats = null;   // { lines:[...], color:[r,g,b,a] } drawn as a fixed HUD
  let nativeInputNV = null;    // volume as loaded (native grid), before conform
  // CAT-lite temporarily dims the T1 so a neutral-gray probability map remains
  // readable. Preserve the user's slider value and restore it when leaving the
  // probability view; never force ordinary segmentations to 100%.
  let probabilityUnderlayRestoreValue = null;
  let nativeInputName = "input.nii.gz";
  let crosshairVox = null; // background voxel index at the crosshair, from locationChange

  // --- Drag mode: segmented control -----------------------------------------
  // 0.62's `opts.dragMode` governed the RIGHT-button drag; left click and left
  // drag always moved the crosshair. 1.0 split the buttons into
  // primaryDragMode (left) and secondaryDragMode (right), and its
  // setDragMode() sets the secondary one -- so secondaryDragMode IS 0.62's
  // opts.dragMode, and that is what these buttons set. Measured mode by mode
  // with driven right-button drags, 0.62 vs 1.0:
  //   contrast     cal_min/cal_max   ==   cal_min/cal_max
  //   measurement  (draws a line)    ==   (draws a line)
  //   pan          pan2Dxyzmm        ==   pan2Dxyzmm
  //   slicer3D     pan + zoom        ==   pan + zoom
  // Do NOT point these at primaryDragMode: that puts the tool on the left
  // button, which is why "Drag to reslice in 3D" started zooming on a plain
  // left drag and why the app stopped navigating.
  const dragSegmented = document.getElementById("dragSegmented");
  if (dragSegmented) {
    dragSegmented.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        nv1.secondaryDragMode = parseInt(btn.dataset.drag, 10);
        dragSegmented.querySelectorAll("button").forEach((b) =>
          b.classList.toggle("active", b === btn));
      };
    });
  }

  // --- Draw tools: popover with pen selection + apply actions ---
  const drawBtn = document.getElementById("drawBtn");
  const drawPopover = document.getElementById("drawPopover");
  const penRow = document.getElementById("penRow");
  const drawApplyRow = document.getElementById("drawApplyRow");

  function openDrawPopover(open) {
    if (!drawPopover) return;
    drawPopover.hidden = !open;
    if (drawBtn) drawBtn.setAttribute("aria-expanded", String(open));
  }

  function setPen(mode) {
    nv1.drawIsEnabled = mode >= 0;
    if (mode >= 0) {
      // 1.0's drawIsEnabled only flips the flag; the bitmap is ours to create.
      if (!nv1.drawingVolume && nv1.volumes.length) nv1.createEmptyDrawing();
      nv1.drawPenValue = mode & 7;
      nv1.drawPenFilled = mode > 7;
    }
    if (penRow) penRow.querySelectorAll(".chip").forEach((b) =>
      b.classList.toggle("active", parseInt(b.dataset.pen, 10) === mode));
  }

  async function applyDraw(mode) {
    if (nv1.volumes.length < 2) {
      window.alert("No segmentation open (run a model first).");
      return;
    }
    if (mode === 0) { // undo
      nv1.drawUndo();
      return;
    }
    const draw = nv1.drawingVolume?.img;
    if (!draw) {
      window.alert("Nothing drawn yet — pick a pen and draw on the image first.");
      return;
    }
    const img = nv1.volumes[1].img;
    if (img instanceof Float32Array) {
      window.alert("Drawing edits label segmentations, not probability maps.");
      return;
    }
    // The drawing bitmap is indexed in RAS order, the overlay in storage order.
    const ov = nv1.volumes[1];
    const d = ov.dimsRAS;
    if (!d || draw.length !== d[1] * d[2] * d[3]) {
      window.alert("The drawing does not match the current image — redraw it.");
      return;
    }
    const value = mode === 1 ? 1 : 0;
    let r = 0;
    for (let rz = 0; rz < d[3]; rz++)
      for (let ry = 0; ry < d[2]; ry++)
        for (let rx = 0; rx < d[1]; rx++, r++)
          if (draw[r] > 0) img[rasToNativeIndex(ov, [rx, ry, rz])] = value;
    nv1.closeDrawing();
    await nv1.updateGLVolume();
    nv1.drawIsEnabled = false;
    setPen(-1);
  }

  if (drawBtn) {
    drawBtn.onclick = (e) => {
      e.stopPropagation();
      openDrawPopover(drawPopover.hidden);
    };
  }
  if (penRow) {
    penRow.querySelectorAll(".chip").forEach((btn) => {
      btn.onclick = () => setPen(parseInt(btn.dataset.pen, 10));
    });
  }
  if (drawApplyRow) {
    drawApplyRow.querySelectorAll(".chip").forEach((btn) => {
      btn.onclick = () => applyDraw(parseInt(btn.dataset.apply, 10));
    });
  }
  // Close the popover on outside click / Escape.
  document.addEventListener("click", (e) => {
    if (!drawPopover || drawPopover.hidden) return;
    if (!e.target.closest(".popover-wrap")) openDrawPopover(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") openDrawPopover(false);
  });
  // Dismiss any modal by clicking its backdrop (fallback where <dialog closedby="any"> is unsupported).
  const appDialogEl = document.getElementById("appDialog");
  if (appDialogEl && !("closedBy" in HTMLDialogElement.prototype)) {
    let pressedOutside = false;
    const isOutsideDialog = (e) => {
      const r = appDialogEl.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    appDialogEl.addEventListener("pointerdown", (e) => {
      pressedOutside = e.target === appDialogEl && isOutsideDialog(e);
    });
    appDialogEl.addEventListener("pointerup", (e) => {
      if (pressedOutside && e.target === appDialogEl && isOutsideDialog(e)) appDialogEl.close();
      pressedOutside = false;
    });
  }

  aboutBtn.onclick = function () {
    const aboutContent = `
      <div style="text-align: left; font-size: 0.95em;">
        <p><strong>🔒 Privacy First</strong><br>
        BrainChop runs entirely <strong>locally in your browser</strong>. Your imaging data never leaves your device, and no server-side processing is involved.</p>

        <p><strong>⌨️ Controls</strong><br>
        • <strong>Drag & Drop</strong> any NIfTI file to open.
        • Press <strong>C</strong> to toggle/cycle the clip-plane.
        • Press <strong>V</strong> repeatedly to cycle through views.
        • <strong>Option/Alt-click</strong> a segmentation label or CAT-lite tissue to show it alone in all panels + 3D. Click it again, click the background, or press Esc to restore all overlays.</p>

        <p><strong>🧠 AI Models</strong><br>
        <strong>🪓🧠 Omnimodal Skull Stripping:</strong> <em>Omnimodal Skull Stripping</em> (MindGrab) extracts the brain across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET.<br>
        <strong>🪓 / ⚡🪓 Subcortical + Tissue:</strong> <em>Subcortical + Tissue</em> (MindMap 24-channel) and <em>⚡🪓 Subcortical + Tissue</em> (MindMap 16-channel) for sub-3s research and clinical T1w parcellation.<br>
        <strong>⅔🧠 Tissue Fractions:</strong> <em>Tissue fraction maps (GM/WM/CSF)</em> for CAT-inspired continuous partial-volume estimation.<br>
        <strong>🪓🔪 / 🔪 Cortical + Subcortical Parcellation:</strong> <em>Desikan-Killiany Atlas</em> (104-region cortical + subcortical + 5-part corpus callosum) for standard and clinical T1w MRIs; <em>Desikan-Killiany (lesion scans)</em> for large focal lesions; <em>Desikan-Killiany 50</em> for merged bilateral cortical homologues.</p>
        
        <p><em>Note: Models may run slower on limited devices to ensure memory safety.</em></p>
      </div>
    `;
    showModal("About BrainChop", aboutContent);
  };

  // Matcap lighting for the 3D render. The matcap itself is fixed: the NiiVue
  // constructor auto-applies the first entry of opts.matcaps, so calling
  // loadMatcap() here would only re-assign the same URL and pay a full
  // updateGLVolume for it. The button just scales how strongly it is applied.
  const shadingBtn = document.getElementById("shadingBtn");
  shadingBtn.onclick = () => {
    const on = shadingBtn.classList.toggle("active");
    shadingBtn.setAttribute("aria-pressed", String(on));
    nv1.volumeIllumination = on ? 0.5 : 0;
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

  // updateGLVolume already coalesces: one call in flight, newest pending value
  // re-runs on completion. A drag never queues a backlog of stale redraws.
  opacitySlider0.oninput = () => {
    if (nv1.volumes[0]) nv1.volumes[0].opacity = Number(opacitySlider0.value);
    nv1.updateGLVolume();
  };
  function applyOverlayOpacity() {
    const opacity = Number(opacitySlider1.value);
    nv1.volumes.slice(1).forEach((overlay, i) => {
      overlay.opacity = probabilityOverlays?.[i] === overlay
        && isolatedProbabilityIndex !== null && i !== isolatedProbabilityIndex ? 0 : opacity;
    });
    nv1.updateGLVolume();
  }
  opacitySlider1.oninput = applyOverlayOpacity;

  function syncModelUnderlayOpacityNoRender(modelEntry = null) {
    const underlayOpacity = modelEntry?.probabilityUnderlayOpacity;
    if (underlayOpacity !== undefined) {
      if (probabilityUnderlayRestoreValue === null) {
        probabilityUnderlayRestoreValue = opacitySlider0.value;
      }
      opacitySlider0.value = underlayOpacity;
      if (nv1.volumes[0]) nv1.volumes[0].opacity = Number(underlayOpacity);
    } else if (probabilityUnderlayRestoreValue !== null) {
      opacitySlider0.value = probabilityUnderlayRestoreValue;
      probabilityUnderlayRestoreValue = null;
      if (nv1.volumes[0]) nv1.volumes[0].opacity = Number(opacitySlider0.value);
    }
  }

  function applyModelUnderlayOpacity(modelEntry = null) {
    syncModelUnderlayOpacityNoRender(modelEntry);
    nv1.updateGLVolume();
  }

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
    callbackUI("Conforming input volume to 256\u00b3...", 0.05);
    await yieldForPaint();
    await closeAllOverlays();
    const nii2 = await nv1.volumeTransform.conform(nii, { toRAS: false });
    const [nativeNV, nativeName] = [nativeInputNV, nativeInputName];
    const prevModelVal = modelSelect.value;
    await nv1.removeVolume(0);
    await nv1.addVolume(nii2);
    // addVolume re-ran doLoadImage with the conformed copy; keep the native grid and selected model.
    [nativeInputNV, nativeInputName] = [nativeNV, nativeName];
    modelSelect.value = prevModelVal;
    syncModelSelectTooltip();
  }

  function removeOverlaysNoRender() {
    isolatedProbabilityIndex = null;
    probabilityOverlays = null;
    while (nv1.model.volumes.length > 1) {
      nv1.model.removeVolume(nv1.model.volumes.length - 1);
    }
  }

  async function closeAllOverlays() {
    removeOverlaysNoRender();
    await nv1.updateGLVolume();
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
    if (hudEl) hudEl.style.display = "none";
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
    // The readout is a DOM layer, so update it when the isolation state changes.
    // updateGLVolume can finish without going through our drawScene hook.
    drawIsolationHUD();
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

  // Isolated-region readout, pinned to the top-left of the 3D render tile.
  // niivue 1.0 has no text API (drawText/drawSceneCore are gone; the overlay
  // hook is raw GL/WebGPU), so this is a plain DOM layer over the canvas.
  let hudEl = null;
  function drawIsolationHUD() {
    if (!hudEl) {
      hudEl = document.createElement("div");
      hudEl.style.cssText =
        "position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;" +
        "text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb";
      nv1.canvas.parentElement.appendChild(hudEl);
    }
    const tile = nv1.view?.screenSlices?.find((s) => s.axCorSag === 4 /* RENDER */);
    if (isolatedLabel === null || !isolationStats || !segOverlay() || !tile) {
      // niivue.css gives all divs a display value, overriding the hidden attribute.
      hudEl.style.display = "none";
      return;
    }
    const dpr = window.devicePixelRatio || 1;
    const [L, T] = tile.leftTopWidthHeight; // device px, top-left origin
    Object.assign(hudEl.style, { left: `${L / dpr + 8}px`, top: `${T / dpr + 8}px` });
    const { lines, color } = isolationStats;
    const rgb = color.slice(0, 3).map((c) => Math.round(c * 255)).join(",");
    hudEl.innerHTML =
      `<span style="color:rgb(${rgb})">${escapeHtml(lines[0])}</span>\n`
      + lines.slice(1).map(escapeHtml).join("\n");
    hudEl.style.display = "block";
  }

  // True (pristine) label under the crosshair, even while a region is isolated,
  // so Alt-clicking a different region switches straight to it.
  function labelUnderCursor() {
    const ov = segOverlay();
    if (!ov || !crosshairVox) return null;
    const idx = rasToNativeIndex(ov, crosshairVox);
    if (idx === null) return null;
    const v = (originalSegImg || ov.img)[idx];
    return v === undefined ? null : Math.round(v * ov.hdr.scl_slope + ov.hdr.scl_inter);
  }

  // Toggle isolation of a specific label value. Background (0) or the already
  // isolated label restores the full view. Shared by Alt-click, the stats
  // panel, and Esc.
  function isolateLabel(labelVal) {
    if (!segOverlay()) return;
    isolatedLabel = (labelVal === 0 || labelVal === isolatedLabel) ? null : labelVal;
    applyLabelIsolation();
  }

  // Read the three pristine fraction maps at the crosshair. Their voxel arrays
  // are in storage order, while locationChange.vox is in RAS order. An all-zero
  // voxel is background and restores the full view.
  function dominantProbabilityOverlay() {
    if (!probabilityOverlays || !crosshairVox ||
        probabilityOverlays.some((ov, i) => nv1.volumes[i + 1] !== ov)) return undefined;
    let bestIndex = null;
    let bestValue = 0;
    for (let i = 0; i < probabilityOverlays.length; i++) {
      const ov = probabilityOverlays[i];
      const idx = rasToNativeIndex(ov, crosshairVox);
      if (idx === null) return undefined;
      const value = ov.img[idx];
      if (Number.isFinite(value) && value > bestValue) {
        bestValue = value;
        bestIndex = i;
      }
    }
    return bestIndex;
  }

  function handleIsolateClick(e) {
    if (!e[ISOLATE_MODIFIER]) return;
    if (segOverlay()) {
      const lbl = labelUnderCursor();
      if (lbl === null || Number.isNaN(lbl)) return;
      isolateLabel(lbl);
    } else {
      const selected = dominantProbabilityOverlay();
      if (selected === undefined) return;
      const next = selected === isolatedProbabilityIndex ? null : selected;
      if (next !== isolatedProbabilityIndex) {
        isolatedProbabilityIndex = next;
        applyOverlayOpacity();
      }
    }
    e.preventDefault();
  }

  // Wrapper: owns the "is a fallback still possible" state for callbackUI.
  async function runSelectedInference() {
    if (suppressBackendModals) return; // already running
    suppressBackendModals = true;
    backendAttemptMessages = [];
    try {
      await runInferenceChain();
    } finally {
      suppressBackendModals = false;
      modelSelect.value = "-1";
      syncModelSelectTooltip();
    }
  }

  async function runInferenceChain() {
    const selectedModelIndex = modelSelect.value;
    if (selectedModelIndex === "-1") return;
    if (modelSelect.selectedIndex < 0) return;

    const memstatusItem = document.getElementById("memstatusItem");
    if (memstatusItem) memstatusItem.hidden = true;

    resetLabelIsolation(); // drop any active single-label state + HUD; callbackImg swaps overlays in one pass
    await ensureConformed();

    const baseModelEntry = inferenceModelsList[selectedModelIndex];
    const precisionParam = (new URLSearchParams(window.location.search).get("precision") || "").toLowerCase();
    const useWebGpuV4 = precisionParam !== "fp16" && precisionParam !== "fp32";
    const modelEntry = {
      ...resolveModelEntry(baseModelEntry, useWebGpuV4),
      ...(precisionParam === "fp32" ? { forceFP32: true } : {}),
    };

    const opts = { ...brainChopOpts };
    // Fix URL construction to handle './' base correctly and allow subfolders
    const rootUrl = new URL(import.meta.env.BASE_URL, window.location.href).href;
    // Remove trailing slash if present to avoid double slashes when appending paths starting with /
    opts.rootURL = rootUrl.endsWith('/') ? rootUrl.slice(0, -1) : rootUrl;

    const niftiImage = nv1.volumes[0].img;
    let lastError = null;

    // 1. Try WebGPU (unconditionally V4 8-bit unless ?precision=fp16|fp32; legacy non-V4 runners stay gated on Safari unless ?inference=webgpu)
    const skipSafariLegacyWebGpu = SAFARI_LEGACY_WEBGPU_GATE && !modelEntry.quantize8Bit;
    const skipWebGpu = FORCE_WEBGL2_TESTING || skipSafariLegacyWebGpu;
    if (skipSafariLegacyWebGpu && isWebGpuAvailable && modelEntry.webgpu_safetensor) {
      console.info('Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2.');
    }
    // If a prior GPU reset / sleep-wake lost the WebGPU device, try once to
    // re-acquire a fresh device before dispatching this run.
    if (!skipWebGpu && (!gpuDevice || gpuDevice.__isLost) && 'gpu' in navigator && gpuDeviceLostRecoveries < 2) {
      if (window.webgpuDiagnostics?.adapterObtained) {
        gpuDeviceLostRecoveries++;
        console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${gpuDeviceLostRecoveries})...`);
        await initializeBackend(nv1.view?.gl);
      }
    }
    if (isWebGpuAvailable && gpuDevice && !gpuDevice.__isLost && !skipWebGpu && modelEntry.webgpu_safetensor) {
      console.log("Attempting WebGPU backend...");

      const currentModelEntry = { ...modelEntry, enableTTA: false };

      try {
        await runInferenceWebGpu(gpuDevice, opts, currentModelEntry, nv1.volumes[0].hdr, niftiImage, callbackImg, callbackUI);
        return; // Success
      } catch (e) {
        lastError = e;
        console.error("WebGPU inference failed, falling back to native WebGL2.", e);
      }
    }

    // 2. Native WebGL2 worker runner (webgl2_runners/): prefer faster/exact RGBA16F first,
    //    auto-falling back inside the worker to RGBA8 only if VRAM texture allocation fails.
    if (ENABLE_NATIVE_WEBGL2 && baseModelEntry.webgpu_safetensor) {
      const forceWebGl2Rgba8 = precisionParam === "int8" || precisionParam === "rgba8";
      const webgl2Entry = {
        ...resolveModelEntry(baseModelEntry, false),
        quantize8Bit: forceWebGl2Rgba8,
        autoQuantize8BitFallback: !forceWebGl2Rgba8 && Boolean(baseModelEntry.turbo),
      };
      try {
        // Dynamic so WebGPU users never fetch this chunk (see ENABLE_NATIVE_WEBGL2).
        const { runInferenceWebGl2, nativeWebgl2Available } = await import("./inference-webgl2.js");
        if (nativeWebgl2Available()) {
          console.log("Attempting native WebGL2 runner...");
          await runInferenceWebGl2(opts, webgl2Entry, nv1.volumes[0].hdr, niftiImage, callbackImg, callbackUI);
          return; // Success
        }
        lastError = new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context).");
        console.warn(lastError.message);
      } catch (e) {
        lastError = e;
        console.error("Native WebGL2 failed.", e);
      }
    }

    showBackendFailure(lastError || new Error(`No available backend could run ${modelEntry.modelName}.`));
  }

  modelSelect.onchange = () => {
    syncModelSelectTooltip();
    return runSelectedInference();
  };
  syncModelSelectTooltip();
  // backendSelect.onchange = runSelectedInference; // Removed

  // --- Save actions -------------------------------------------------------
  // Each action performs the pristine-label swap where relevant (isolation is
  // a view-only state) so exports always contain the full segmentation.
  async function withPristineLabels(fn) {
    const ov = segOverlay();
    const restore = isolatedLabel !== null && ov && originalSegImg;
    if (restore) ov.img = originalSegImg;
    try {
      return await fn();
    } finally {
      if (restore) applyLabelIsolation();
    }
  }

  function binaryMaskVolume() {
    const overlay = nv1.volumes[1];
    const labels = lastModelEntry?.type === 'Brain_Extraction'
      ? lastBrainMask
      : (isolatedLabel !== null && originalSegImg ? originalSegImg : overlay.img);
    if (!labels || labels.length !== overlay.img.length) {
      throw new Error("The segmentation mask is unavailable. Run the model again.");
    }
    const binary = new Uint8Array(labels.length);
    for (let i = 0; i < labels.length; i++) binary[i] = labels[i] !== 0 ? 1 : 0;
    const mask = cloneVolume(overlay, binary, "brain_mask");
    Object.assign(mask.hdr, {
      datatypeCode: 2, numBitsPerVoxel: 8, scl_slope: 1, scl_inter: 0,
      cal_min: 0, cal_max: 1, intent_code: 1002,
    });
    return mask;
  }

  async function saveSegmentationConformed({ includeMask = false, useFreeSurfer = false } = {}) {
    if (nv1.volumes.length < 2) { window.alert("No segmentation to save (run a model first)."); return; }
    // The overlay already carries the right intent from callbackImg: LABEL for
    // discrete segmentations, none for intensity outputs (e.g. skull-stripped
    // brain). So save it as-is unless FreeSurfer label-ID remapping is requested.
    const fsLut = useFreeSurfer ? buildFreeSurferLut(lastSegLabelNames) : null;
    const overlays = nv1.volumes.slice(1);
    // Serial: three concurrent 256³ gzips compete for memory.
    await withPristineLabels(async () => {
      for (const overlay of overlays) {
        const isLabelOverlay = !!overlay.colormapLabel || overlay.hdr.intent_code === 1002;
        if (fsLut && isLabelOverlay) {
          const { img: fsImg, maxLabel } = remapLabelsToFreeSurfer(overlay.img, fsLut);
          const fsVol = cloneOverlayVolume(overlay, fsImg, overlay.name, {
            datatypeCode: 4,      // DT_INT16 (FreeSurfer cortical IDs reach 2035)
            numBitsPerVoxel: 16,
            scl_slope: 1,
            scl_inter: 0,
            cal_min: 0,
            cal_max: maxLabel,
            intent_code: 1002,    // NIFTI_INTENT_LABEL
          });
          await downloadVolume(fsVol, overlayFilename(overlay, overlays.length, "_fs"));
        } else {
          await downloadVolume(overlay, overlayFilename(overlay, overlays.length, ""));
        }
      }
      if (includeMask) await downloadVolume(binaryMaskVolume(), "binary_mask.nii.gz");
    });
  }

  // Multi-overlay results (CAT-lite GM/WM/CSF) save one file per overlay.
  function overlayFilename(overlay, count, suffix) {
    return count > 1 ? `segmentation_${overlay.name}${suffix}.nii.gz` : `segmentation${suffix}.nii.gz`;
  }

  function saveConformedInput() {
    if (nv1.volumes.length < 1) { window.alert("No image loaded."); return; }
    downloadVolume(nv1.volumes[0], "conformed_input.nii.gz");
  }

  async function saveScene() {
    if (nv1.volumes.length < 1) { window.alert("No image loaded."); return; }
    await withPristineLabels(async () => { await nv1.saveDocument("brainchop.nvd"); });
  }

  // Native-space segmentation: reslice the conformed (256³, 1 mm) labels back
  // onto the original input grid. See resliceLabelsToNative() for the method.
  async function saveSegmentationNative({ includeMask = false, useFreeSurfer = false } = {}) {
    if (nv1.volumes.length < 2) { window.alert("No segmentation to save (run a model first)."); return; }
    if (!nativeInputNV || !nativeInputNV.hdr || !nativeInputNV.hdr.affine) {
      window.alert("Original input grid is unavailable — reload the image and try again.");
      return;
    }
    const fsLut = useFreeSurfer ? buildFreeSurferLut(lastSegLabelNames) : null;
    callbackUI("Reslicing to native space…", 0);
    await new Promise((r) => setTimeout(r, 30)); // let the status paint before the blocking loop
    try {
      const overlays = nv1.volumes.slice(1);
      for (const overlay of overlays) {
        const isLabelOverlay = !!overlay.colormapLabel || overlay.hdr.intent_code === 1002;
        const activeLut = fsLut && isLabelOverlay ? fsLut : null;
        const outNV = await withPristineLabels(() => resliceLabelsToNative(overlay, activeLut));
        await downloadVolume(outNV, overlayFilename(overlay, overlays.length, activeLut ? "_fs_native" : "_native"));
      }
      if (includeMask) {
        const mask = resliceLabelsToNative(binaryMaskVolume());
        await downloadVolume(mask, "binary_mask_native.nii.gz");
      }
      callbackUI("Saved native-space segmentation.", 1);
    } catch (e) {
      console.error("Native-space reslice failed:", e);
      window.alert("Native-space export failed: " + (e && e.message ? e.message : e));
    }
  }

  // Reslice the conformed overlay onto the native input grid.
  //
  // For a label map (segmentation): nearest-neighbour with 2× supersampling and
  // a majority vote per output voxel — crisper categorical boundaries — written
  // as Int16 tagged NIFTI_INTENT_LABEL (optionally remapped via `labelLut`).
  // For an intensity output (e.g. skull-stripped brain): plain nearest-neighbour
  // keeping the native datatype and NOT tagged as a label — it's an image.
  // For a Float32 probability map (CAT-lite): trilinear, uint8 with scl_slope 1/255.
  //
  // The native→conformed voxel map is built by probing both grids' own affines
  // at four basis points (origin + unit steps), so it is correct for any
  // orientation without us re-deriving affine conventions. Validated: when the
  // two grids are identical the map is the identity.
  function resliceLabelsToNative(seg, labelLut = null) {
    const labels = seg.img;                    // pristine labels (see withPristineLabels)
    const A = nativeInputNV.hdr.affine;        // native storage-voxel -> mm (row-major 4x4)
    const nx = nativeInputNV.hdr.dims[1], ny = nativeInputNV.hdr.dims[2], nz = nativeInputNV.hdr.dims[3];
    const snx = seg.hdr.dims[1], sny = seg.hdr.dims[2], snz = seg.hdr.dims[3];

    const applyAffine = (a, v) => [
      a[0][0] * v[0] + a[0][1] * v[1] + a[0][2] * v[2] + a[0][3],
      a[1][0] * v[0] + a[1][1] * v[1] + a[1][2] * v[2] + a[1][3],
      a[2][0] * v[0] + a[2][1] * v[1] + a[2][2] * v[2] + a[2][3],
    ];
    // mm -> conformed storage voxel. niivue 1.0's NVImage has no mm2vox, so
    // invert the overlay's own storage-voxel -> mm affine instead.
    const segInv = mat4.create();
    if (!mat4.invert(segInv, mat4.fromValues(...seg.hdr.affine[0], ...seg.hdr.affine[1],
                                             ...seg.hdr.affine[2], ...seg.hdr.affine[3]))) {
      throw new Error("Segmentation affine is not invertible");
    }
    // gl-matrix is column-major, and fromValues consumed the rows in order, so
    // segInv is the inverse's transpose — read it back the same way.
    const applyInv = (m, v) => [
      m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3],
      m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7],
      m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11],
    ];
    // native storage voxel -> conformed storage voxel (fractional)
    const f = (v) => applyInv(segInv, applyAffine(A, v));
    const o = f([0, 0, 0]);
    const ex = f([1, 0, 0]).map((x, i) => x - o[i]);
    const ey = f([0, 1, 0]).map((x, i) => x - o[i]);
    const ez = f([0, 0, 1]).map((x, i) => x - o[i]);

    // Is this a discrete label map (segmentation) or a continuous intensity
    // output (e.g. skull-stripped brain from Brain_Extraction/mindgrab)? Label
    // overlays carry a colormapLabel; intensity ones use a plain colormap.
    const isLabel = !!seg.colormapLabel || seg.hdr.intent_code === 1002;
    const nvox = nx * ny * nz;
    const outNV = cloneVolume(nativeInputNV);
    const sample = (x, y, z) =>
      (x >= 0 && x < snx && y >= 0 && y < sny && z >= 0 && z < snz)
        ? labels[x + y * snx + z * snx * sny] : 0;

    if (isLabel) {
      // 2× supersample: 8 offsets at ±0.25 native voxel, in conformed space.
      const deltas = [];
      for (const dx of [-0.25, 0.25])
        for (const dy of [-0.25, 0.25])
          for (const dz of [-0.25, 0.25])
            deltas.push([
              dx * ex[0] + dy * ey[0] + dz * ez[0],
              dx * ex[1] + dy * ey[1] + dz * ez[1],
              dx * ex[2] + dy * ey[2] + dz * ez[2],
            ]);
      const out = new Int16Array(nvox);
      const lutLen = labelLut ? labelLut.length : 0;
      let maxLabel = 0;
      const tv = new Int32Array(8), tc = new Int32Array(8); // majority tally (≤8 distinct)
      let idx = 0;
      for (let k = 0; k < nz; k++) {
        for (let j = 0; j < ny; j++) {
          let bx = o[0] + j * ey[0] + k * ez[0];
          let by = o[1] + j * ey[1] + k * ez[1];
          let bz = o[2] + j * ey[2] + k * ez[2];
          for (let i = 0; i < nx; i++) {
            let nt = 0;
            for (let s = 0; s < 8; s++) {
              const lbl = sample(
                Math.round(bx + deltas[s][0]),
                Math.round(by + deltas[s][1]),
                Math.round(bz + deltas[s][2]));
              let t = -1;
              for (let q = 0; q < nt; q++) if (tv[q] === lbl) { t = q; break; }
              if (t < 0) { tv[nt] = lbl; tc[nt] = 1; nt++; } else { tc[t]++; }
            }
            let best = tv[0], bc = tc[0];
            for (let q = 1; q < nt; q++) if (tc[q] > bc) { bc = tc[q]; best = tv[q]; }
            if (labelLut && best >= 0 && best < lutLen) best = labelLut[best];
            if (best > maxLabel) maxLabel = best;
            out[idx++] = best;
            bx += ex[0]; by += ex[1]; bz += ex[2];
          }
        }
      }
      outNV.hdr.datatypeCode = 4;      // DT_INT16
      outNV.hdr.numBitsPerVoxel = 16;
      outNV.hdr.scl_slope = 1;
      outNV.hdr.scl_inter = 0;
      outNV.hdr.cal_min = 0;
      outNV.hdr.cal_max = maxLabel;
      outNV.hdr.intent_code = 1002;    // NIFTI_INTENT_LABEL
      outNV.img = out;
    } else {
      // Intensity output (skull-stripped brain): plain nearest-neighbour, keep
      // the native datatype, and do NOT tag as LABEL — this is an image.
      // Probabilities (0..1 float) would truncate to 0 in the native integer
      // type: store as uint8 0..255 with scl_slope 1/255 instead.
      const isProbability = seg.img instanceof Float32Array;
      const scale = isProbability ? 255 : 1;
      const round = isProbability ? 0.5 : 0;
      const out = isProbability ? new Uint8Array(nvox) : outNV.img;
      out.fill(0);
      if (isProbability) {
        Object.assign(outNV.hdr, { datatypeCode: 2, numBitsPerVoxel: 8, cal_min: 0, cal_max: 1 });
        outNV.img = out;
      }
      outNV.hdr.scl_slope = 1 / scale;
      outNV.hdr.scl_inter = 0;
      // Partial-volume fractions are continuous: trilinear keeps them smooth
      // instead of blocky. Integer conformed coordinates are voxel centres.
      const trilinear = (x, y, z) => {
        const x0 = Math.floor(x), y0 = Math.floor(y), z0 = Math.floor(z);
        const fx = x - x0, fy = y - y0, fz = z - z0;
        const v000 = sample(x0, y0, z0), v100 = sample(x0 + 1, y0, z0);
        const v010 = sample(x0, y0 + 1, z0), v110 = sample(x0 + 1, y0 + 1, z0);
        const v001 = sample(x0, y0, z0 + 1), v101 = sample(x0 + 1, y0, z0 + 1);
        const v011 = sample(x0, y0 + 1, z0 + 1), v111 = sample(x0 + 1, y0 + 1, z0 + 1);
        const y0z0 = v000 + fx * (v100 - v000), y1z0 = v010 + fx * (v110 - v010);
        const y0z1 = v001 + fx * (v101 - v001), y1z1 = v011 + fx * (v111 - v011);
        const z0v = y0z0 + fy * (y1z0 - y0z0), z1v = y0z1 + fy * (y1z1 - y0z1);
        return z0v + fz * (z1v - z0v);
      };
      const at = isProbability
        ? trilinear
        : (x, y, z) => sample(Math.round(x), Math.round(y), Math.round(z));
      let idx = 0;
      for (let k = 0; k < nz; k++) {
        for (let j = 0; j < ny; j++) {
          let bx = o[0] + j * ey[0] + k * ez[0];
          let by = o[1] + j * ey[1] + k * ez[1];
          let bz = o[2] + j * ey[2] + k * ez[2];
          for (let i = 0; i < nx; i++) {
            out[idx++] = at(bx, by, bz) * scale + round;
            bx += ex[0]; by += ex[1]; bz += ex[2];
          }
        }
      }
    }
    return outNV;
  }

  let saveUseFreeSurfer = false;
  let saveIncludeBinaryMask = false;

  const SAVE_ICONS = {
    cube: '<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',
    grid: '<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',
    volume: '<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',
    scene: '<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>',
  };

  const SAVE_OPTIONS = [
    { act: saveSegmentationConformed, group: "seg", icon: "cube", title: "Conformed space", sub: "256³ · 1 mm isotropic", need: "seg" },
    { act: saveSegmentationNative, group: "seg", icon: "grid", title: "Native space", sub: "Resampled to the input grid", need: "seg" },
    { act: saveConformedInput, group: "vol", icon: "volume", title: "Conformed input volume", sub: "Resampled T1 · 256³ · 1 mm", need: "img" },
    { act: saveScene, group: "vol", icon: "scene", title: "Scene (.nvd)", sub: "Full viewer state document", need: "img" },
  ];

  function openSaveModal() {
    const hasImg = nv1.volumes.length >= 1;
    const hasSeg = nv1.volumes.length >= 2;
    const hasMask = hasSeg && lastModelEntry && lastModelEntry.outputType !== "probability"
      && (lastModelEntry.type !== "Brain_Extraction" || !!lastBrainMask);
    const hasFreeSurfer = hasSeg && lastModelEntry && lastModelEntry.outputType !== "probability"
      && lastModelEntry.type !== "Brain_Extraction"
      && !!buildFreeSurferLut(lastSegLabelNames);
    const ready = (need) => (need === "seg" ? hasSeg : hasImg);

    let autofocusAssigned = false;
    const renderCards = (group) => SAVE_OPTIONS
      .map((o, i) => ({ o, i }))
      .filter(({ o }) => o.group === group)
      .map(({ o, i }) => {
        const enabled = ready(o.need);
        const autoAttr = enabled && !autofocusAssigned ? (autofocusAssigned = true, " autofocus") : "";
        const disClass = enabled ? "" : " disabled";
        const disAttr = enabled ? "" : " disabled";
        return `<button type="button" class="save-opt${disClass}" data-i="${i}"${disAttr}${autoAttr}>
          ${SAVE_ICONS[o.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${o.title}</span>
            <span class="save-opt-sub">${o.sub}</span>
          </span>
          ${SAVE_ICONS.arrow}
        </button>`;
      }).join("");

    const modifierRows = [];
    if (hasFreeSurfer) {
      modifierRows.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${saveUseFreeSurfer ? " checked" : ""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`);
    }
    if (hasMask) {
      modifierRows.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${saveIncludeBinaryMask ? " checked" : ""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);
    }
    const modifiersHtml = modifierRows.length
      ? `<div class="save-modifiers" role="group" aria-label="Segmentation export options">${modifierRows.join("")}</div>`
      : "";

    const segHint = !hasSeg ? '<span class="save-section-hint">Run a model first</span>' : "";
    const html = `
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${segHint}
          </div>
          <div class="save-options">${renderCards("seg")}</div>
          ${modifiersHtml}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${renderCards("vol")}</div>
        </section>
      </div>`;

    showModal("Save", html, { hideClose: true, saveMode: true });
    const msg = document.getElementById("dialogMessage");
    if (!msg) return;

    const fsInput = msg.querySelector("#saveFreeSurfer");
    if (fsInput) fsInput.onchange = () => { saveUseFreeSurfer = fsInput.checked; };
    const maskInput = msg.querySelector("#saveBinaryMask");
    if (maskInput) maskInput.onchange = () => { saveIncludeBinaryMask = maskInput.checked; };

    msg.querySelectorAll(".save-opt:not(.disabled)").forEach((btn) => {
      btn.onclick = () => {
        const opt = SAVE_OPTIONS[parseInt(btn.dataset.i, 10)];
        const includeMask = opt.need === "seg" && !!msg.querySelector("#saveBinaryMask")?.checked;
        const useFreeSurfer = opt.need === "seg" && hasFreeSurfer && !!msg.querySelector("#saveFreeSurfer")?.checked;
        const dlg = document.getElementById("appDialog");
        if (dlg && dlg.open) dlg.close();  // dismiss first so the native save dialog is unobstructed
        if (opt.need === "seg") {
          opt.act({ includeMask, useFreeSurfer });
        } else {
          opt.act();
        }
      };
    });
  }

  const saveBtn = document.getElementById("saveBtn");
  if (saveBtn) saveBtn.onclick = openSaveModal;

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

  function buildStatsCsv(rows, fsLut = null) {
    const header = fsLut
      ? ["label", "fs_label", "name", "voxels", "volume_mm3", "min", "max", "q1", "median", "q3", "mean", "stdev"]
      : ["label", "name", "voxels", "volume_mm3", "min", "max", "q1", "median", "q3", "mean", "stdev"];
    const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(6));
    const esc = (s) => /[",\n]/.test(s) ? `"${String(s).replace(/"/g, '""')}"` : String(s);
    const lines = [header.join(",")];
    for (const r of rows) {
      const cols = fsLut
        ? [r.label, r.label < fsLut.length ? fsLut[r.label] : r.label, esc(r.name)]
        : [r.label, esc(r.name)];
      cols.push(r.voxels, fmt(r.volume_mm3), r.min, r.max, r.q1, r.median, r.q3, fmt(r.mean), fmt(r.stdev));
      lines.push(cols.join(","));
    }
    return lines.join("\n") + "\n";
  }

  function downloadCsv(rows, fsLut = null) {
    const blob = new Blob([buildStatsCsv(rows, fsLut)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mask_stats.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const fmtCm3 = (mm3) => { const v = mm3 / 1000; return v >= 10 ? Math.round(v).toLocaleString() : v.toFixed(1); };

  function buildStatsPanelHtml(rows, totalMm3, fsLut = null) {
    const maxVol = Math.max(...rows.map((r) => r.volume_mm3));
    const colorOf = (r) => (lastSegColors && lastSegColors.R && lastSegColors.R[r.label] != null)
      ? `rgb(${lastSegColors.R[r.label]},${lastSegColors.G[r.label]},${lastSegColors.B[r.label]})`
      : "#6b9bd1";
    let body = "";
    for (const r of rows) {
      const pct = totalMm3 > 0 ? (r.volume_mm3 / totalMm3) * 100 : 0;
      const wAbs = maxVol > 0 ? (r.volume_mm3 / maxVol) * 100 : 0;
      const isIso = isolatedLabel === r.label;
      const fsId = fsLut && r.label < fsLut.length ? fsLut[r.label] : null;
      const val = `<span class="stat-val" data-cm3="${fmtCm3(r.volume_mm3)}" data-pct="${pct.toFixed(1)}%">${fmtCm3(r.volume_mm3)}</span>`;
      const bar = `<span class="stat-bar" style="width:${wAbs.toFixed(2)}%;background:${colorOf(r)}" data-w-abs="${wAbs.toFixed(2)}" data-w-pct="${pct.toFixed(2)}"></span>`;
      const cell = (k, v) => `<div class="stat-kv"><span class="k">${k}</span><span class="v">${v}</span></div>`;
      const detail = cell("min", r.min) + cell("max", r.max)
        + cell("Q1", r.q1) + cell("Q3", r.q3)
        + cell("median", r.median) + cell("mean", r.mean.toFixed(2))
        + cell("SD", r.stdev.toFixed(2)) + cell("voxels", r.voxels.toLocaleString());
      body += `
        <div class="stat-row${isIso ? " is-isolated" : ""}" data-label="${r.label}" data-name="${escapeHtml(r.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${colorOf(r)}" aria-hidden="true"></span>
              <span class="stat-name">${escapeHtml(r.name)}</span>
              <span class="stat-track" aria-hidden="true">${bar}</span>
              ${val}
            </button>
            <button type="button" class="stat-iso${isIso ? " active" : ""}" aria-pressed="${isIso}" aria-label="Isolate ${escapeHtml(r.name)}">${isIso ? "isolated" : "isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${escapeHtml(r.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${r.label}</span>
                ${fsId ? `<span class="save-badge">FS ${fsId}</span>` : ""}
              </span>
            </div>
            <div class="stat-detail-grid">${detail}</div>
          </div>
        </div>`;
    }
    const regionWord = rows.length === 1 ? "region" : "regions";
    const searchHtml = rows.length > 8
      ? `<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`
      : "";
    return `
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${rows.length} ${regionWord} &middot; ${fmtCm3(totalMm3)} cm³</span>
          ${searchHtml}
        </div>
        <div id="statsRows">
          ${body}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${SAVE_ICONS.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`;
  }

  saveStatsBtn.onclick = function () {
    if (nv1.volumes.length < 2) {
      showModal("Region volumes", "<p>No segmentation to measure — run a model first.</p>");
      return;
    }
    // Each distinct float would become its own label (and 256-bin histogram).
    if (nv1.volumes[1].img instanceof Float32Array) {
      showModal("Region volumes", "<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");
      return;
    }
    const imgArr = nv1.volumes[0].img;   // conformed input intensities
    // Use pristine labels so region stats stay whole-brain even while isolated.
    const labelArr = originalSegImg || nv1.volumes[1].img; // segmentation labels
    if (!imgArr || !labelArr || imgArr.length !== labelArr.length) {
      showModal("Region volumes", "<p>Input and segmentation grids do not match.</p>");
      return;
    }
    const pd = nv1.volumes[0].hdr.pixDims || [];
    const voxelVolMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;

    let rows = computeLabelStats(imgArr, labelArr, voxelVolMm3);
    if (rows.length === 0) {
      showModal("Region volumes", "<p>No non-background labels found in the segmentation.</p>");
      return;
    }
    // Largest region first, matching the reference panel layout.
    rows = rows.slice().sort((a, b) => b.volume_mm3 - a.volume_mm3);
    const totalMm3 = rows.reduce((s, r) => s + r.volume_mm3, 0);
    const fsLut = lastModelEntry && lastModelEntry.type !== "Brain_Extraction"
      ? buildFreeSurferLut(lastSegLabelNames)
      : null;

    showModal("Region volumes", buildStatsPanelHtml(rows, totalMm3, fsLut), { hideClose: true, statsMode: true });

    // Wire up interactivity (innerHTML strips <script>, so attach handlers here).
    const panel = document.getElementById("statsPanel");
    if (!panel) return;

    let currentMode = "cm3";
    let visibleCount = rows.length;
    const updateUnitSummary = () => {
      const unitEl = document.getElementById("statsUnitLabel");
      if (!unitEl) return;
      const countText = visibleCount === rows.length
        ? `${rows.length} ${rows.length === 1 ? "region" : "regions"}`
        : `${visibleCount} of ${rows.length} regions`;
      const totalText = currentMode === "pct" ? "100% of volume" : `${fmtCm3(totalMm3)} cm³`;
      unitEl.innerHTML = `${countText} &middot; ${totalText}`;
    };

    panel.querySelectorAll(".stat-toggle button").forEach((btn) => {
      btn.onclick = () => {
        currentMode = btn.dataset.mode;
        panel.querySelectorAll(".stat-toggle button").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        updateUnitSummary();
        panel.querySelectorAll(".stat-row").forEach((row) => {
          const val = row.querySelector(".stat-val");
          const bar = row.querySelector(".stat-bar");
          val.textContent = currentMode === "pct" ? val.dataset.pct : val.dataset.cm3;
          bar.style.width = (currentMode === "pct" ? bar.dataset.wPct : bar.dataset.wAbs) + "%";
        });
      };
    });

    const filterInput = document.getElementById("statsFilterInput");
    const emptyEl = document.getElementById("statsEmpty");
    if (filterInput) {
      const applyFilter = () => {
        const q = filterInput.value.trim().toLowerCase();
        visibleCount = 0;
        panel.querySelectorAll(".stat-row").forEach((row) => {
          const match = !q || row.dataset.name.includes(q) || row.dataset.label === q;
          row.hidden = !match;
          if (match) visibleCount++;
        });
        if (emptyEl) emptyEl.hidden = visibleCount > 0;
        updateUnitSummary();
      };
      filterInput.oninput = applyFilter;
      // Clear a non-empty filter query on Escape without closing the modal dialog.
      filterInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && filterInput.value !== "") {
          e.preventDefault();
          e.stopPropagation();
          filterInput.value = "";
          applyFilter();
        }
      });
    }

    panel.querySelectorAll(".stat-trigger").forEach((trigger) => {
      trigger.onclick = () => {
        const row = trigger.closest(".stat-row");
        const detail = row.querySelector(".stat-detail");
        const open = detail.hidden;
        detail.hidden = !open;
        row.classList.toggle("is-expanded", open);
        trigger.setAttribute("aria-expanded", String(open));
      };
    });

    // Per-row "isolate": show only that region in the viewer and close the
    // dialog so it's visible.
    panel.querySelectorAll(".stat-iso").forEach((btn) => {
      btn.onclick = () => {
        const labelVal = parseInt(btn.closest(".stat-row").dataset.label, 10);
        if (!Number.isNaN(labelVal)) isolateLabel(labelVal);
        const dlg = document.getElementById("appDialog");
        if (dlg && dlg.open) dlg.close();
      };
    });

    document.getElementById("statsDownloadBtn").onclick = () => downloadCsv(rows, fsLut);
  };

  function doLoadImage() {
    // Retain the volume as loaded (native grid) before ensureConformed() may
    // replace volumes[0] with the 256³ conformed copy — needed to reslice the
    // segmentation back to native space on export.
    if (nv1.volumes.length <= 1) {
      nativeInputNV = nv1.volumes[0] || null;
      nativeInputName = (nativeInputNV && nativeInputNV.name) ? nativeInputNV.name : "input.nii.gz";
      lastModelEntry = null;
      lastBrainMask = null;
      syncModelUnderlayOpacityNoRender();
      modelSelect.value = "-1";
      syncModelSelectTooltip();
      if (nv1.volumes[0]) opacitySlider0.oninput();
    }
  }

  const colormapJsonCache = new Map();
  async function fetchJSON(fnm) {
    if (colormapJsonCache.has(fnm)) return colormapJsonCache.get(fnm);
    const response = await fetch(fnm);
    const json = await response.json();
    colormapJsonCache.set(fnm, json);
    return json;
  }

  function createLabeledCountsFromHist(hist, labelStrings, voxelVolMm3 = 1) {
    let presentCount = 0;
    for (let k = 0; k < 256; k++) {
      if (hist[k] > 0) presentCount++;
    }
    if (!labelStrings || presentCount !== labelStrings.length) {
      missingLabelStatus = "Failed to Predict Some Labels - ";
    }
    return labelStrings.map((label, index) => {
      const count = index < 256 ? hist[index] : 0;
      const countText = count > 0 ? `${fmtCm3(count * voxelVolMm3)} cm3` : "Missing";
      if (countText === "Missing") missingLabelStatus += `${label}, `;
      return `${label}   ${countText}`;
    });
  }

  async function addProbabilityOverlay(img, modelEntry, tissue) {
    const probabilityDisplayMin = modelEntry.probabilityDisplayMin ?? 0.005;
    // A light tinted ramp (floor..tint) avoids the dark false edge a black-based
    // colormap draws over bright T1 white matter.
    const { probabilityOverlayAlpha: alpha = 96, probabilityOverlayFloor: floor = 192 } = modelEntry;
    const tint = tissue?.tint || [255, 255, 255];
    const colormap = `probability-light-${tint.join('-')}-${floor}-${alpha}`;
    if (!nv1.hasColormap(colormap)) {
      const [lowR, lowG, lowB] = tint.map((c) => Math.round(c * floor / 255));
      nv1.addColormap(colormap, {
        R: [lowR, tint[0]], G: [lowG, tint[1]], B: [lowB, tint[2]],
        A: [0, alpha], I: [0, 255],
      });
    }
    const overlayVolume = cloneOverlayVolume(
      nv1.volumes[0],
      img instanceof Float32Array ? img : Float32Array.from(img),
      tissue?.name ?? nv1.volumes[0].name,
      {
        scl_inter: 0,
        scl_slope: 1,
        datatypeCode: 16,       // DT_FLOAT32: preserve partial-volume probabilities
        numBitsPerVoxel: 32,
        cal_min: 0,
        cal_max: 1,
        intent_code: 1001,      // NIFTI_INTENT_ESTIMATE, not a categorical LABEL
      },
      {
        calMin: probabilityDisplayMin,
        calMax: 1,
        robustMin: probabilityDisplayMin,
        robustMax: 1,
        globalMin: 0,
        globalMax: 1,
        // ZERO_TO_MAX_TRANSPARENT_BELOW_MIN. Essential for 3D: the overlay shader
        // otherwise rounds every tiny positive alpha to opaque.
        colormapType: 1,
        colormap,
        opacity: Number(opacitySlider1.value),
        modulateAlpha: 1,
      }
    );
    // Modulating the overlay by itself makes zero genuinely transparent and lets
    // intermediate probabilities reveal the T1 underneath.
    overlayVolume.modulationImage = overlayVolume.id;
    await nv1.model.addVolume(overlayVolume);
    return nv1.volumes.at(-1);
  }

  async function callbackImg(img, opts, modelEntry, brainMask) {
    removeOverlaysNoRender();
    resetLabelIsolation();
    lastSegLabelNames = null;
    lastSegColors = null;
    lastModelEntry = modelEntry;
    lastBrainMask = modelEntry.type === 'Brain_Extraction' ? brainMask || null : null;
    if (modelEntry.outputType === 'probability') {
      // CAT-lite passes [GM, WM, CSF]; other probability models a single map.
      const maps = Array.isArray(img) ? img : [img];
      const overlays = [];
      for (let i = 0; i < maps.length; i++) {
        overlays.push(await addProbabilityOverlay(maps[i], modelEntry, modelEntry.probabilityTissues?.[i]));
      }
      if (modelEntry.probabilityPostprocess === 'cat-lite' && overlays.length === 3) {
        probabilityOverlays = overlays;
      }
      syncModelUnderlayOpacityNoRender(modelEntry);
      await nv1.updateGLVolume();
      return;
    }

    const u8Img = img instanceof Uint8Array
      ? img
      : new Uint8Array(img.buffer, img.byteOffset || 0, img.byteLength);
    let colormap;
    let colormapLabel = null;
    let intentCode = 0;
    let volBounds = { calMin: 0, calMax: 255, robustMin: 0, robustMax: 255, globalMin: 0, globalMax: 255 };

    if (modelEntry.type === 'Brain_Masking') {
      const newLabels = ["Background", "Brain Mask"];
      lastSegLabelNames = newLabels.slice();
      const newR = [0, 217];
      const newG = [0, 119];
      const newB = [0, 33];
      lastSegColors = { R: newR, G: newG, B: newB };
      const labelColormap = { R: newR, G: newG, B: newB, labels: newLabels };
      const cmapName = 'brainchop-label-mask';
      nv1.addColormap(cmapName, labelColormap);
      colormap = cmapName;
      colormapLabel = makeLabelLut(labelColormap);
      intentCode = 1002; // NIFTI_INTENT_LABEL
      volBounds = { calMin: 0, calMax: 1, robustMin: 0, robustMax: 1, globalMin: 0, globalMax: 1 };
    } else if (modelEntry.colormapPath) {
      const hist = getLabelHistogramU8(u8Img);
      const cmap = await fetchJSON(modelEntry.colormapPath);
      lastSegLabelNames = cmap["labels"] ? cmap["labels"].slice() : null;
      lastSegColors = { R: cmap["R"], G: cmap["G"], B: cmap["B"] };
      const pd = nv1.volumes[0].hdr.pixDims || [];
      const voxelVolMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;
      const newLabels = cmap["labels"] ? createLabeledCountsFromHist(hist, cmap["labels"], voxelVolMm3) : [];
      const labelColormap = {
        R: cmap["R"],
        G: cmap["G"],
        B: cmap["B"],
        ...(cmap["I"] ? { I: cmap["I"] } : {}),
        ...(cmap["A"] ? { A: cmap["A"] } : {}),
        labels: newLabels,
      };
      const cmapName = `brainchop-label-${modelEntry.id}`;
      nv1.addColormap(cmapName, labelColormap);
      colormap = cmapName;
      colormapLabel = makeLabelLut(labelColormap);
      const maxIdx = Math.max(1, (cmap["R"]?.length ?? 256) - 1);
      intentCode = 1002; // NIFTI_INTENT_LABEL
      volBounds = { calMin: 0, calMax: maxIdx, robustMin: 0, robustMax: maxIdx, globalMin: 0, globalMax: maxIdx };
    } else {
      const hist = getLabelHistogramU8(u8Img);
      volBounds = computeIntensityWindowFromHistU8(hist);
      colormap = opts.atlasSelectedColorTable.toLowerCase();
      if (modelEntry.type === 'Brain_Extraction') {
        colormap = 'copper2';
      }
      if (!nv1.hasColormap(colormap)) colormap = "actc";
    }

    const overlayVolume = cloneOverlayVolume(
      nv1.volumes[0],
      u8Img,
      nv1.volumes[0].name,
      {
        datatypeCode: 2,
        numBitsPerVoxel: 8,
        scl_inter: 0,
        scl_slope: 1,
        cal_min: volBounds.calMin,
        cal_max: volBounds.calMax,
        intent_code: intentCode,
      },
      {
        ...volBounds,
        colormap,
        ...(colormapLabel ? { colormapLabel } : {}),
        opacity: Number(opacitySlider1.value),
      }
    );
    await nv1.model.addVolume(overlayVolume);
    const addedSeg = nv1.volumes.at(-1);
    if (colormapLabel && addedSeg && !addedSeg.colormapLabel) {
      addedSeg.colormapLabel = colormapLabel;
    }
    syncModelUnderlayOpacityNoRender(modelEntry);
    await nv1.updateGLVolume();
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
    statData = await localSystemDetails(statData, nv1.view?.gl);
    diagnosticsString = ":: Diagnostics https://github.com/neuroneural/brainchop/issues ::\n";
    for (const key in statData) {
      if (statData[key] !== null && statData[key] !== undefined) {
        diagnosticsString += `${key}: ${statData[key]}\n`;
      }
    }
  }

  function formatStatusSegments(message) {
    const parts = String(message)
      .split(" · ")
      .map((part) => part.trim())
      .filter((part) => part !== "");
    if (parts.length <= 1) return escapeHtml(String(message));
    return parts
      .map((part, idx) =>
        `<span class="loc-seg"${idx >= 2 ? ' style="opacity:.75"' : ""}>${escapeHtml(part)}</span>`)
      .join('<span class="loc-sep">&middot;</span>');
  }

  function callbackUI(message = "", progressFrac = -1, modalMessage = "", statData = []) {
    if (message) {
      console.log(message);
      const locEl = document.getElementById("location");
      if (locEl) locEl.innerHTML = formatStatusSegments(message);
    }
    if (isNaN(progressFrac)) {
      const memstatusItem = document.getElementById("memstatusItem");
      if (memstatusItem) memstatusItem.hidden = false;
      memstatus.style.color = "#ef4444";
      memstatus.textContent = "Memory Issue";
    } else if (progressFrac >= 0) {
      modelProgress.value = progressFrac * modelProgress.max;
    }
    if (modalMessage) {
      if (suppressBackendModals) {
        // A backend declined; the next one in the chain still gets a go. Keep
        // it out of the user's way -- console + the memstatus indicator above
        // are the signal. showBackendFailure() reports these if nothing works.
        backendAttemptMessages.push(String(modalMessage));
        console.warn("[backend]", modalMessage);
      } else {
        showModal("Message", escapeHtml(String(modalMessage)).replace(/\n/g, "<br>"));
      }
    }
    if (statData && Object.keys(statData).length > 0) {
      reportTelemetry(statData);
    }
  }

  function handleLocationChange(data) {
    crosshairVox = data.vox;
    document.getElementById("location").innerHTML = data.string
      .split("   ")
      .map((value) => value.trim())
      .filter((value) => value !== "")
      .map((value) => `<span class="loc-seg">${escapeHtml(value)}</span>`)
      .join('<span class="loc-sep">&middot;</span>');
  }

  // Keep WebGL2 as the proven default while comparing NiiVue's WebGPU renderer.
  // Both renderers carry the BG-opacity patch; ?viewer=webgpu opts in locally.
  // The segmentation inference backend is selected separately.
  // matcaps must be supplied by name: loadMatcap() looks the name up here and,
  // on a miss, treats the name itself as a URL -- a silent 404 that leaves the
  // built-in default matcap in place rather than throwing.
  const viewerBackend = new URLSearchParams(window.location.search).get("viewer") === "webgpu"
    ? "webgpu" : "webgl2";
  const nv1 = new NiiVue({ backend: viewerBackend, matcaps: { Shiny: shiny } });
  await nv1.attachTo("gl1");
  console.info("NiiVue viewer backend:", nv1.backend);

  // Match the 2D panes (whose surround is the image's black background) so the
  // 3D render tile no longer reads as a lighter gray box.
  nv1.backgroundColor = [0, 0, 0, 1];
  nv1.is3DCrosshairVisible = true;
  // 1.0 lowered the clip-plane alpha default from 0.62's 0.5 to 0.4, which is
  // most of why the cut-plane surface reads dimmer. Measured on the same T1,
  // same plane: mean plane brightness 89.3 (0.62) vs 72.2 (1.0), and
  // 72.2/89.3 = 0.808 ~= 0.4/0.5. Restore 0.62's value.
  nv1.clipPlaneColor = [0.7, 0, 0.7, 0.5];
  // Brightness for the 3D render is NOT gamma. In 1.0 `gamma` rebuilds the
  // colormap texture, so it also recolours the 2D slices; in 0.62 it applied to
  // the render alone. Measured on the real cortex label (LUT RGB 205,62,78),
  // modal pixel of a flat label region in the axial pane:
  //   gamma        1.0          1.1          1.2           1.3
  //   0.62    205,62,78    205,62,78    205,62,78     205,62,78   <- 3D only
  //   1.0     205,62,78    209,71,87    213,78,95   216,86,103    <- 2D too
  // Raising it desaturates the labels in the slice viewer (HSV saturation
  // 0.698 -> 0.634 at gamma 1.2) at constant hue, which reads as "the red is
  // the wrong colour". Render brightness is handled by RENDER_GAIN in
  // patch-niivue-render.mjs instead: a flat gain on the composited render
  // preserves hue AND saturation exactly and cannot reach 2D. Leave neutral.
  nv1.gamma = 1;
  nv1.registerVolumeTransform(conform); // core dropped nv.conform() in 1.0
  nv1.isLegendVisible = false; // 1.0 defaults it on; it costs ~25% of the canvas width
  nv1.addEventListener("locationChange", (e) => handleLocationChange(e.detail));
  // Alt/Option-click a region to isolate it (see handleIsolateClick).
  nv1.canvas.addEventListener("click", handleIsolateClick);

  // Esc restores all labels or probability overlays (unless a dialog is open).
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (document.querySelector("dialog[open]")) return;
    if (isolatedLabel !== null) {
      isolatedLabel = null;
      applyLabelIsolation();
    } else if (isolatedProbabilityIndex !== null) {
      isolatedProbabilityIndex = null;
      applyOverlayOpacity();
    }
  });

  // Note: we intentionally do NOT force the label overlay to NEAREST in the 3D
  // pass. niivue's draw3D uses LINEAR there on purpose — in a volume ray-marcher
  // nearest sampling makes big opaque regions (e.g. white matter) accumulate
  // into a flat, noisy "glow" with the folds washed out. LINEAR gives the soft
  // shading that reveals surface structure. 2D panels stay crisp via
  // volumeIsNearestInterpolation.

  // Keep the DOM readout pinned to the render tile as the layout moves.
  const _origDrawScene = nv1.drawScene.bind(nv1);
  nv1.drawScene = function (needsSync) {
    const r = _origDrawScene(needsSync);
    try { drawIsolationHUD(); } catch (e) { console.warn("isolation HUD draw failed", e); }
    return r;
  };
  // Left button: navigate, always. This is what 0.62 did for every toolbar
  // selection -- its dragMode never touched the left button at all.
  nv1.primaryDragMode = DRAG_MODE.crosshair;
  // Right button: whatever the toolbar has selected. Matches 0.62's default of
  // slicer3D (index.html marks that button active).
  nv1.secondaryDragMode = DRAG_MODE.slicer3D;
  nv1.showRender = SHOW_RENDER.ALWAYS;
  // Keep 3D and 2D zoom independent: in NiiVue 1.0 rc.204+, isYoked3DTo2DZoom=true
  // became bidirectional so scrolling over the 3D render zooms all 2D slices too.
  nv1.isYoked3DTo2DZoom = false;
  nv1.crosshairGap = 11;
  // Reflect the actual initial drag mode in the segmented control, so the
  // highlight always matches nv.opts.dragMode regardless of the HTML default.
  {
    const seg = document.getElementById("dragSegmented");
    if (seg) seg.querySelectorAll("button").forEach((b) =>
      b.classList.toggle("active", parseInt(b.dataset.drag, 10) === nv1.secondaryDragMode));
  }
  nv1.volumeIsNearestInterpolation = true;
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
  nv1.addEventListener("volumeLoaded", doLoadImage);
  doLoadImage(); // the default volume loaded before the hook existed; capture its native grid
  // Phone/desktop layout: single-plane views on narrow screens. 1.0 picks the
  // multiplanar tiling itself, so the old scoring override is gone.
  installResponsiveLayout(nv1);
  // Pinch guards: keep two-finger gestures zooming the image, not the document.
  installTouchViewControls(nv1);
  // modelSelect.selectedIndex = -1; // Removed as we want the placeholder to be selected by default (which is index 0 or value "-1")
  // Actually, we set selected=true on placeholder, so browser should pick it up.
  // But let's be explicit.
  modelSelect.value = "-1";
  syncModelSelectTooltip();
  setPen(-1);

  await initializeBackend(nv1.view?.gl);

  // --- FIX IS HERE ---
  // Use URLSearchParams to correctly parse the query string.
  const urlParams = new URLSearchParams(window.location.search);
  const modelParam = urlParams.get("model");
  if (modelParam !== null && modelParam !== "" && Number(modelParam) >= 0 && Number(modelParam) < inferenceModelsList.length) {
    modelSelect.value = String(Number(modelParam));
    syncModelSelectTooltip();
    runSelectedInference();
  } else if (isWebGpuAvailable && !FORCE_WEBGL2_TESTING && gpuDevice) {
    const scheduleWarmup = window.requestIdleCallback
      ? (fn) => window.requestIdleCallback(fn, { timeout: 600 })
      : (fn) => setTimeout(fn, 200);
    scheduleWarmup(() => warmupWebGpuRunners(gpuDevice));
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

// Every backend failed: this is the one point in the chain where the user does
// need a dialog. Include what each backend said, since that is the useful part
// for a bug report -- and use the in-app modal rather than window.alert, which
// blocks the event loop and looks like a browser error.
function showBackendFailure(lastError) {
  const reasons = backendAttemptMessages.length
    ? backendAttemptMessages
    : [lastError && lastError.message ? lastError.message : String(lastError || "unknown error")];
  const list = reasons
    .map((r) => `<li>${escapeHtml(r)}</li>`)
    .join("");
  showModal(
    "Segmentation failed",
    `<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${list}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`
  );
}

// Helper to show custom modal
function showModal(title, message, opts = {}) {
  const dialog = document.getElementById("appDialog");
  const titleEl = document.getElementById("dialogTitle");
  const msgEl = document.getElementById("dialogMessage");
  const closeBtn = document.getElementById("dialogCloseBtn");

  if (!dialog) return;

  titleEl.textContent = title;
  msgEl.innerHTML = message;

  // Default: show the bottom Close button. The Save picker hides it — you
  // dismiss via an option, the top-right ×, Esc, or the backdrop.
  closeBtn.style.display = opts.hideClose ? "none" : "";
  closeBtn.onclick = () => dialog.close();
  dialog.classList.toggle("dialog-save", !!opts.saveMode);
  dialog.classList.toggle("dialog-stats", !!opts.statsMode);
  const xBtn = document.getElementById("dialogXBtn");
  if (xBtn) xBtn.onclick = () => dialog.close();
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
