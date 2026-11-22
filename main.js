import { NiiVue, DRAG_MODE, SHOW_RENDER, nii2volume, writeVolume, makeLabelLut } from "@niivue/niivue";
import {
  clinicalConform,
  DISPLAY_CONFORM_FHIGH,
  INFERENCE_CONFORM_FHIGH,
} from "./conform-transform.js";
import { isVolumeConformed, createInferenceInputCache } from "./conform-volume.js";
import { shiny } from "@niivue/niivue/assets/matcaps";
import {
  runInferenceWebGpu,
  warmupWebGpuRunners,
  releaseWebGpuWorkspace,
  yieldForPaint,
} from "./inference-webgpu.js";
import {
  applyWebGpuUrlOverrides,
  executeWithWebGpuSafeModeRetry,
} from "./gpu-compatibility.js";
import { inferenceModelsList, brainChopOpts, resolveModelEntry } from "./brainchop-parameters.js";
import { localSystemDetails } from "./brainchop-diagnostics.js";
import { getLabelHistogramU8 } from "./tensor-utils.js";
import { buildFreeSurferLut, remapLabelsToFreeSurfer } from "./freesurfer-labels.js";
import { installResponsiveLayout } from "./responsive-layout.js";
import { installTouchViewControls, resetView } from "./touch-view.js";
import { resliceVolumeInWorker } from "./postprocess-client.js";
import {
  buildCatLiteRgbaComposite,
  updateCatLiteRgbaOpacity,
  computeCatLiteStats,
  buildCatLiteStatsCsv,
} from "./cat-lite-overlay.js";

// crypto.randomUUID() requires a secure context (HTTPS / localhost); fall back
// to RFC 4122 v4 via getRandomValues so plain-HTTP LAN dev sessions work too.
function createVolumeId() {
  if (typeof crypto !== "undefined") {
    if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
    if (typeof crypto.getRandomValues === "function") {
      const b = new Uint8Array(16);
      crypto.getRandomValues(b);
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const hex = Array.from(b, (v) => v.toString(16).padStart(2, "0")).join("");
      return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
  }
  return `vol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function isTouchPrimary() {
  return Boolean(
    window.matchMedia?.("(pointer: coarse)")?.matches &&
    !window.matchMedia?.("(pointer: fine)")?.matches
  );
}

// niivue 1.0 dropped NVImage's methods (clone/saveToDisk/getValue); these
// replace the three we used. hdr keeps its prototype so the writers can use it.
function cloneVolume(src, img = src.img.slice(), name = src.name) {
  const hdr = Object.assign(Object.create(Object.getPrototypeOf(src.hdr)), src.hdr);
  const vol = nii2volume(hdr, img, name);
  vol.id = createVolumeId();  // nii2volume defaults id to name; overlays must stay distinct
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
    id: createVolumeId(),
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
// The inference chain tries WebGPU and then native WebGL2. Collect errors
// from both attempts and only show the modal if the whole chain fails.
let suppressBackendModals = false;
let backendAttemptMessages = [];

// --- DEBUG OVERRIDE -------------------------------------------------------
// Safari uses native WebGL2 for legacy models because their WebGPU results fail.
// Safari 26.5 advertises shader-f16, but its WebGPU compute path has returned
// an all-class-2 cube for the light tissue model and all-zero labels for the
// 18-class model on this machine. Native WebGL2 produced a real segmentation.
// Keep Safari on the tested WebGL2 fallback until its WebGPU outputs are sound.
// ?inference=webgpu is an explicit test override for checking future WebKit builds.
const IS_SAFARI = /Safari/.test(navigator.userAgent) && !/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent);
const SAFARI_LEGACY_WEBGPU_GATE = IS_SAFARI && new URLSearchParams(window.location.search).get('inference') !== 'webgpu';
const FORCE_WEBGL2_TESTING = new URLSearchParams(window.location.search).get('inference') === 'webgl2';

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
  const statusItem = document.getElementById('backendStatusItem');
  if (!statusEl) {
    console.log('Backend status element not found in DOM');
    return;
  }
  if (statusItem) statusItem.hidden = false;

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

  const activeModelItem = document.getElementById("activeModelItem");
  const activeModelBadge = document.getElementById("activeModelBadge");
  function updateActiveModelBadge(modelEntry) {
    if (!activeModelItem || !activeModelBadge) return;
    const name = modelEntry?.modelName?.trim();
    if (!name) {
      activeModelItem.hidden = true;
      activeModelBadge.textContent = "";
      activeModelBadge.removeAttribute("title");
      return;
    }
    activeModelBadge.textContent = name;
    activeModelBadge.title = `Active model: ${name}`;
    activeModelItem.hidden = false;
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
  let isolatedProbabilityIndex = null; // selected CAT-lite tissue (0=GM,1=WM,2=CSF), or null = show all
  let catLiteState = null;     // { maps:[gm,wm,csf], tissues, modelEntry, rgba, activeAlphaOffsets, activeBaseAlpha, overlay }
  let lastFullLabelLut = null; // pristine makeLabelLut(...) object for instant LUT-based isolation restore
  let isolationStats = null;   // { lines:[...], color:[r,g,b,a] } drawn as a fixed HUD
  let nativeInputNV = null;    // volume as loaded (native grid), before conform
  // Identity-bound 0–98% conformed uint8 input for WebGPU/WebGL2 inference
  // (paired to nv1.volumes[0], which retains FreeSurfer's 0–99.9% display clip).
  const inferenceInputCache = createInferenceInputCache();
  // CAT-lite temporarily dims the T1 so a neutral-gray probability map remains
  // readable. Preserve the user's slider value and restore it when leaving the
  // probability view; never force ordinary segmentations to 100%.
  let modelUnderlayRestoreValue = null;
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
        dragSegmented.querySelectorAll("button").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("active", active);
          b.setAttribute("aria-pressed", String(active));
        });
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
    if (catLiteState || img instanceof Float32Array) {
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
        • <strong>Option/Alt-click</strong> a segmentation label or CAT-lite tissue (or use <strong>Stats → isolate</strong> on touch screens) to show it alone in all panels + 3D. Click it again, click the background, or press Esc to restore all overlays.
        • Click <strong>Reset view</strong> (or <strong>⟲</strong> on mobile) to restore default zoom, pan, 3D angle, and contrast.</p>

        <p><strong>🧠 AI Models</strong><br>
        <strong>🪓🧠 Omnimodal Skull Stripping:</strong> <em>Omnimodal Skull Stripping</em> (MindGrab) extracts the brain across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET.<br>
        <strong>🪓 / ⚡🪓 Subcortical + Tissue:</strong> <em>Subcortical + Tissue</em> (MindMap 24-channel) and <em>⚡🪓 Subcortical + Tissue</em> (MindMap 16-channel) for sub-3s research and clinical T1w parcellation.<br>
        <strong>⅔🧠 Tissue Fractions:</strong> <em>Tissue fraction maps (GM/WM/CSF)</em> for CAT-inspired continuous partial-volume estimation.<br>
        <strong>🪓🔪 Cortical + Subcortical Parcellation:</strong> <em>Desikan-Killiany Atlas</em> (104-region cortical + subcortical + 5-part corpus callosum) for standard and clinical T1w MRIs; <em>Desikan-Killiany (lesion scans)</em> for large focal lesions; <em>Desikan-Killiany 50</em> for merged bilateral cortical homologues.</p>
        
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

  const resetViewBtn = document.getElementById("resetViewBtn");
  if (resetViewBtn) {
    resetViewBtn.onclick = () => resetView(nv1);
  }

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

  // Background opacity is a live 2D/3D shader uniform in NiiVue 1.0 (never
  // baked into volumeTexture), so BG dragging needs only drawScene() (~1 ms)
  // rather than a full updateGLVolume() rebuild.
  opacitySlider0.oninput = () => {
    if (!nv1.volumes[0]) return;
    nv1.volumes[0].opacity = Number(opacitySlider0.value);
    nv1.drawScene();
  };

  // Overlay opacity & LUT isolation skip rebuilding volumes[0] and its
  // 512-pass 3D Sobel gradient texture:
  //   - Scalar/label non-zero->non-zero opacity: updateVolumeAffineOnly() re-runs
  //     only the overlay orient pass on the resident GPU texture.
  //   - CAT-lite DT_RGBA32 or 0<->non-zero toggles: updateVolumeData(1) scopes
  //     the GPU update strictly to volumes[1], never touching volumes[0].
  let prevOverlayOpacity = Number(opacitySlider1.value);
  let overlayOpacityRaf = 0;

  function refreshOverlayOnly({ dataChanged = false, allowAffineFastPath = true } = {}) {
    if (nv1.volumes.length < 2) return nv1.updateGLVolume();
    const ov = nv1.volumes[1];
    const opacity = ov.opacity ?? 1;
    const toggledVisibility = (prevOverlayOpacity === 0) !== (opacity === 0);
    prevOverlayOpacity = opacity;

    if (
      allowAffineFastPath &&
      !dataChanged &&
      !toggledVisibility &&
      opacity > 0 &&
      nv1.volumes.length === 2 &&
      typeof nv1.updateVolumeAffineOnly === "function"
    ) {
      return nv1.updateVolumeAffineOnly();
    }
    if (nv1.volumes.length === 2 && typeof nv1.updateVolumeData === "function") {
      return nv1.updateVolumeData(1);
    }
    return nv1.updateGLVolume();
  }

  function applyOverlayOpacity() {
    const opacity = Number(opacitySlider1.value);
    if (catLiteState && nv1.volumes[1] === catLiteState.overlay) {
      if (opacity > 0) {
        updateCatLiteRgbaOpacity(
          catLiteState.rgba,
          catLiteState.activeAlphaOffsets,
          catLiteState.activeBaseAlpha,
          opacity
        );
      }
      catLiteState.overlay.opacity = opacity;
      refreshOverlayOnly({ dataChanged: true, allowAffineFastPath: false });
      return;
    }
    nv1.volumes.slice(1).forEach((overlay) => {
      overlay.opacity = opacity;
    });
    refreshOverlayOnly({ dataChanged: false, allowAffineFastPath: true });
  }

  opacitySlider1.oninput = () => {
    if (overlayOpacityRaf) return;
    overlayOpacityRaf = requestAnimationFrame(() => {
      overlayOpacityRaf = 0;
      applyOverlayOpacity();
    });
  };

  function syncModelUnderlayOpacityNoRender(modelEntry = null) {
    const underlayOpacity = modelEntry?.type === "Brain_Extraction"
      ? 0
      : modelEntry?.probabilityUnderlayOpacity;
    if (underlayOpacity !== undefined) {
      if (modelUnderlayRestoreValue === null) {
        modelUnderlayRestoreValue = opacitySlider0.value;
      }
      opacitySlider0.value = underlayOpacity;
      if (nv1.volumes[0]) nv1.volumes[0].opacity = Number(underlayOpacity);
    } else if (modelUnderlayRestoreValue !== null) {
      opacitySlider0.value = modelUnderlayRestoreValue;
      modelUnderlayRestoreValue = null;
      if (nv1.volumes[0]) nv1.volumes[0].opacity = Number(opacitySlider0.value);
    }
  }

  function applyModelUnderlayOpacity(modelEntry = null) {
    syncModelUnderlayOpacityNoRender(modelEntry);
    nv1.updateGLVolume();
  }

  async function ensureConformed() {
    const nii = nv1.volumes[0];
    if (isVolumeConformed(nii)) return;
    callbackUI("Conforming input volume to 256\u00b3...", 0.05);
    await yieldForPaint();
    await closeAllOverlays();
    const {
      hdr: conformedHdr,
      img: displayImg,
      inferenceImg,
    } = await clinicalConform.apply(nii.hdr, nii.img, {
      toRAS: false,
      fHigh: DISPLAY_CONFORM_FHIGH,
      inferenceFHigh: INFERENCE_CONFORM_FHIGH,
    });
    const nii2 = nii2volume(
      conformedHdr,
      displayImg,
      nii.name ? `${nii.name}_conform` : "conform"
    );
    const [nativeNV, nativeName] = [nativeInputNV, nativeInputName];
    const prevModelVal = modelSelect.value;
    await nv1.removeVolume(0);
    await nv1.addVolume(nii2);
    // addVolume re-ran doLoadImage with the conformed copy; keep the native grid,
    // coil-flare-safe 0–98% inference buffer, and selected model.
    [nativeInputNV, nativeInputName] = [nativeNV, nativeName];
    inferenceInputCache.set(
      nv1.volumes[0],
      inferenceImg && inferenceImg !== displayImg ? inferenceImg : nv1.volumes[0]?.img
    );
    modelSelect.value = prevModelVal;
    syncModelSelectTooltip();
  }

  function removeOverlaysNoRender() {
    isolatedProbabilityIndex = null;
    catLiteState = null;
    lastFullLabelLut = null;
    while (nv1.model.volumes.length > 1) {
      nv1.model.removeVolume(nv1.model.volumes.length - 1);
    }
  }

  async function closeAllOverlays() {
    removeOverlaysNoRender();
    resetLabelIsolation();
    updateActiveModelBadge(null);
    await nv1.updateGLVolume();
  }

  // The segmentation overlay, only if it carries a discrete label LUT.
  function segOverlay() {
    return (nv1.volumes.length >= 2 && nv1.volumes[1].colormapLabel)
      ? nv1.volumes[1] : null;
  }

  function activeCatLiteState() {
    return (catLiteState && nv1.volumes.length >= 2 && nv1.volumes[1] === catLiteState.overlay)
      ? catLiteState : null;
  }

  function resetLabelIsolation() {
    isolatedLabel = null;
    isolatedProbabilityIndex = null;
    isolationStats = null;
    if (hudEl) hudEl.style.display = "none";
  }

  // Build a fresh colormapLabel object showing ONLY `labelVal`.
  // Zeroing BOTH RGB and A (not just A) is load-bearing: NiiVue 1.0's label
  // orient shader writes `texelFetch(colormap, ...)` directly into the baked
  // non-premultiplied RGBA8 3D texture, and the 3D ray-marcher samples it with
  // LINEAR filtering. Setting R=G=B=A=0 makes hidden labels bit-identical to
  // background (0), preventing color bleed while keeping `ov.img` pristine and
  // avoiding a 16.77M-voxel CPU copy. Assigning a brand-new object invalidates
  // NiiVue's WeakMap-keyed GPU LUT cache without scanning label centroids.
  function buildIsolatedLabelLut(fullLut, labelVal) {
    const lut = new Uint8ClampedArray(fullLut.lut.length); // all 0 -> R=G=B=A=0
    const idx = labelVal - (fullLut.min ?? 0);
    if (idx >= 0 && idx * 4 + 3 < fullLut.lut.length) {
      const off = idx * 4;
      lut[off] = fullLut.lut[off];
      lut[off + 1] = fullLut.lut[off + 1];
      lut[off + 2] = fullLut.lut[off + 2];
      lut[off + 3] = fullLut.lut[off + 3];
    }
    return {
      lut,
      min: fullLut.min,
      max: fullLut.max,
      ...(fullLut.labels ? { labels: fullLut.labels } : {}),
    };
  }

  function applyLabelIsolation() {
    const ov = segOverlay();
    if (!ov) return;
    if (!lastFullLabelLut) lastFullLabelLut = ov.colormapLabel;
    if (isolatedLabel === null) {
      ov.colormapLabel = lastFullLabelLut;
      isolationStats = null;
    } else {
      ov.colormapLabel = buildIsolatedLabelLut(lastFullLabelLut, isolatedLabel);
      isolationStats = buildIsolationStats(isolatedLabel);
    }
    refreshOverlayOnly({ dataChanged: false, allowAffineFastPath: true });
    // The readout is a DOM layer, so update it when the isolation state changes.
    // updateGLVolume can finish without going through our drawScene hook.
    drawIsolationHUD();
  }

  // Full stats for one discrete label, formatted as lines for the on-screen readout.
  function buildIsolationStats(labelVal) {
    const base = nv1.volumes[0];
    const ov = segOverlay();
    const seg = ov?.img;
    if (!base || !seg) return null;
    const pd = base.hdr.pixDims || [];
    const voxMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;
    const dims = ov.hdr.dims.slice(1, 4);
    const rows = computeLabelStats(base.img, seg, voxMm3, dims);
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

  function buildCatLiteIsolationStats(tissueIndex) {
    const state = activeCatLiteState();
    const base = nv1.volumes[0];
    if (!state || !base) return null;
    const pd = base.hdr.pixDims || [];
    const voxMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;
    const dims = base.hdr.dims.slice(1, 4);
    const { rows, icvMm3 } = computeCatLiteStats(base.img, state.maps, voxMm3, dims, state.modelEntry);
    const r = rows.find((x) => x.tissueIndex === tissueIndex);
    if (!r) return null;
    const pct = icvMm3 > 0 ? (r.volume_mm3 / icvMm3) * 100 : 0;
    const br = (c) => Math.min(255, c * 0.55 + 130) / 255;
    return {
      lines: [
        r.name,
        `${fmtCm3(r.volume_mm3)} cm3   (${pct.toFixed(1)}% of ICV)`,
        `${Math.round(r.effectiveVoxels).toLocaleString()} equiv. voxels`,
        `intensity  ${r.mean.toFixed(0)} +/- ${r.stdev.toFixed(0)}`,
      ],
      color: [br(r.tint[0]), br(r.tint[1]), br(r.tint[2]), 1],
    };
  }

  function applyProbabilityIsolation() {
    const state = activeCatLiteState();
    if (!state) return;
    const opacity = Number(opacitySlider1.value);
    const rebuilt = buildCatLiteRgbaComposite(
      state.maps,
      state.modelEntry,
      isolatedProbabilityIndex,
      opacity,
      state.rasLayout
    );
    state.rgba = rebuilt.rgba;
    state.activeAlphaOffsets = rebuilt.activeAlphaOffsets;
    state.activeBaseAlpha = rebuilt.activeBaseAlpha;
    state.overlay.img = rebuilt.rgba;
    state.overlay.opacity = opacity;
    isolationStats = isolatedProbabilityIndex === null
      ? null
      : buildCatLiteIsolationStats(isolatedProbabilityIndex);
    refreshOverlayOnly({ dataChanged: true, allowAffineFastPath: false });
    drawIsolationHUD();
  }

  function isolateProbabilityTissue(tissueIndex) {
    if (!activeCatLiteState()) return;
    isolatedProbabilityIndex = (tissueIndex === null || tissueIndex === isolatedProbabilityIndex)
      ? null
      : tissueIndex;
    applyProbabilityIsolation();
  }

  // Isolated-region readout, pinned to the top-left of the 3D render tile.
  // niivue 1.0 has no text API (drawText/drawSceneCore are gone; the overlay
  // hook is raw GL/WebGPU), so this is a plain DOM layer over the canvas.
  let hudEl = null;
  let hudRafPending = false;
  function drawIsolationHUD() {
    if (!hudEl) {
      hudEl = document.createElement("div");
      hudEl.style.cssText =
        "position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;" +
        "text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb";
      nv1.canvas.parentElement.appendChild(hudEl);
    }
    const isActive = (isolatedLabel !== null && !!segOverlay())
      || (isolatedProbabilityIndex !== null && !!activeCatLiteState());
    const tile = nv1.view?.screenSlices?.find((s) => s.axCorSag === 4 /* RENDER */);
    if (!isActive || !isolationStats || !tile) {
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

  // NiiVue's `view.screenSlices` can lag one animation frame after resize or
  // pane-switch transitions; re-sync the HUD after layout settles.
  function scheduleIsolationHUDSync() {
    if (hudRafPending || (isolatedLabel === null && isolatedProbabilityIndex === null)) return;
    hudRafPending = true;
    requestAnimationFrame(() => {
      hudRafPending = false;
      drawIsolationHUD();
    });
  }

  // Pristine label under the crosshair — `ov.img` is never mutated by isolation,
  // so Alt-clicking a different region switches straight to it.
  function labelUnderCursor() {
    const ov = segOverlay();
    if (!ov || !crosshairVox) return null;
    const idx = rasToNativeIndex(ov, crosshairVox);
    if (idx === null) return null;
    const v = ov.img[idx];
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
    const state = activeCatLiteState();
    const base = nv1.volumes[0];
    if (!state || !base || !crosshairVox) return undefined;
    const idx = rasToNativeIndex(base, crosshairVox);
    if (idx === null) return undefined;
    let bestIndex = null;
    let bestValue = 0;
    for (let i = 0; i < state.maps.length; i++) {
      const value = state.maps[i][idx];
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
    } else if (activeCatLiteState()) {
      const selected = dominantProbabilityOverlay();
      if (selected === undefined) return;
      isolateProbabilityTissue(selected);
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
      modelProgress.classList.remove("is-busy");
      modelSelect.value = "-1";
      syncModelSelectTooltip();
    }
  }

  async function runInferenceChain() {
    const selectedModelIndex = modelSelect.value;
    if (selectedModelIndex === "-1") return;
    if (modelSelect.selectedIndex < 0) return;
    await initialBackend;

    const memstatusItem = document.getElementById("memstatusItem");
    if (memstatusItem) memstatusItem.hidden = true;

    resetLabelIsolation(); // drop any active single-label state + HUD; callbackImg swaps overlays in one pass
    await ensureConformed();

    const baseModelEntry = inferenceModelsList[selectedModelIndex];
    const params = new URLSearchParams(window.location.search);
    const precisionParam = (params.get("precision") || "").toLowerCase();
    const useWebGpuV4 = precisionParam !== "fp16" && precisionParam !== "fp32";
    const modelEntry = {
      ...resolveModelEntry(baseModelEntry, useWebGpuV4),
      ...(precisionParam === "fp32" ? { forceFP32: true } : {}),
    };

    const opts = { ...brainChopOpts, isTouchPrimary: isTouchPrimary() };
    // Fix URL construction to handle './' base correctly and allow subfolders
    const rootUrl = new URL(import.meta.env.BASE_URL, window.location.href).href;
    // Remove trailing slash if present to avoid double slashes when appending paths starting with /
    opts.rootURL = rootUrl.endsWith('/') ? rootUrl.slice(0, -1) : rootUrl;

    const niftiImage = inferenceInputCache.get(nv1.volumes[0]);
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

      const currentModelEntry = applyWebGpuUrlOverrides(
        { ...modelEntry, enableTTA: false },
        window.location.search
      );
      const acquireFreshWebGpuDevice = async ({ failedDevice }) => {
        if (failedDevice) {
          try { releaseWebGpuWorkspace(failedDevice); } catch {}
          if (!failedDevice.__isLost) {
            try { failedDevice.destroy(); } catch {}
          }
        }
        gpuDevice = null;
        isWebGpuAvailable = false;
        await initializeBackend(nv1.view?.gl);
        return isWebGpuAvailable && gpuDevice && !gpuDevice.__isLost ? gpuDevice : null;
      };

      try {
        await executeWithWebGpuSafeModeRetry({
          device: gpuDevice,
          modelEntry: currentModelEntry,
          runAttempt: (dev, entry) =>
            runInferenceWebGpu(dev, opts, entry, nv1.volumes[0].hdr, niftiImage, callbackImg, callbackUI),
          requestFreshDevice: acquireFreshWebGpuDevice,
          onRetry: ({ failureKind, error }) => {
            console.warn(
              `[WebGPU-V4] ${failureKind} during standard run (${error?.message || error}); ` +
              `persisted low-memory safe mode and retrying once in LowMem128 + paced.`
            );
            callbackUI("Retrying in low-memory WebGPU mode\u2026", 0.05);
          },
        });
        gpuDeviceLostRecoveries = 0;
        return; // Success
      } catch (e) {
        lastError = e;
        const msg = e?.message || String(e);
        if (!backendAttemptMessages.some((m) => m.includes(msg))) {
          backendAttemptMessages.push(`WebGPU: ${msg}`);
        }
        console.error("WebGPU inference failed, falling back to native WebGL2.", e);
      }
    } else if (!skipWebGpu && modelEntry.webgpu_safetensor) {
      backendAttemptMessages.push(`WebGPU: ${window.webgpuDiagnostics?.error || "no usable adapter or device"}`);
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
        backendAttemptMessages.push(lastError.message);
        console.warn(lastError.message);
      } catch (e) {
        lastError = e;
        backendAttemptMessages.push(`WebGL2: ${e?.message || e}`);
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
  // Label isolation mutates only `ov.colormapLabel` (never `ov.img`), so all
  // NIfTI exports always contain the pristine whole-brain segmentation.
  // CAT-lite displays a single DT_RGBA32 overlay in the viewer, while exports
  // materialize the 3 pristine Float32 [GM, WM, CSF] probability maps.
  function getExportOverlays() {
    const state = activeCatLiteState();
    if (state) {
      return state.maps.map((map, idx) =>
        cloneOverlayVolume(
          nv1.volumes[0],
          map,
          state.tissues[idx].name,
          {
            scl_inter: 0,
            scl_slope: 1,
            datatypeCode: 16,     // DT_FLOAT32
            numBitsPerVoxel: 32,
            cal_min: 0,
            cal_max: 1,
            intent_code: 1001,    // NIFTI_INTENT_ESTIMATE
          }
        )
      );
    }
    return nv1.volumes.slice(1);
  }

  function binaryMaskVolume() {
    const overlay = nv1.volumes[1];
    const labels = lastModelEntry?.type === 'Brain_Extraction'
      ? lastBrainMask
      : overlay.img;
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
    const overlays = getExportOverlays();
    // Serial: three concurrent 256³ gzips compete for memory.
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
    const ov = segOverlay();
    const prevLut = isolatedLabel !== null && ov && lastFullLabelLut ? ov.colormapLabel : null;
    if (prevLut) ov.colormapLabel = lastFullLabelLut;
    try {
      await nv1.saveDocument("brainchop.nvd");
    } finally {
      if (prevLut && ov) ov.colormapLabel = prevLut;
    }
  }

  // Native-space segmentation: reslice the conformed (256³, 1 mm) labels back
  // onto the original input grid inside the postprocess Web Worker.
  async function saveSegmentationNative({ includeMask = false, useFreeSurfer = false } = {}) {
    if (nv1.volumes.length < 2) { window.alert("No segmentation to save (run a model first)."); return; }
    if (!nativeInputNV || !nativeInputNV.hdr || !nativeInputNV.hdr.affine) {
      window.alert("Original input grid is unavailable — reload the image and try again.");
      return;
    }
    const fsLut = useFreeSurfer ? buildFreeSurferLut(lastSegLabelNames) : null;
    callbackUI("Reslicing to native space…", 0.15);
    try {
      const overlays = getExportOverlays();
      for (let i = 0; i < overlays.length; i++) {
        const overlay = overlays[i];
        const isLabelOverlay = !!overlay.colormapLabel || overlay.hdr.intent_code === 1002;
        const activeLut = fsLut && isLabelOverlay ? fsLut : null;
        const outNV = await resliceLabelsToNative(overlay, activeLut);
        await downloadVolume(outNV, overlayFilename(overlay, overlays.length, activeLut ? "_fs_native" : "_native"));
        if (overlays.length > 1) {
          callbackUI("Reslicing to native space…", 0.15 + ((i + 1) / overlays.length) * 0.75);
        }
      }
      if (includeMask) {
        const mask = await resliceLabelsToNative(binaryMaskVolume());
        await downloadVolume(mask, "binary_mask_native.nii.gz");
      }
      callbackUI("Saved native-space segmentation.", 1);
    } catch (e) {
      callbackUI("", 0);
      console.error("Native-space reslice failed:", e);
      window.alert("Native-space export failed: " + (e && e.message ? e.message : e));
    }
  }

  // Reslice the conformed overlay onto the native input grid in a Web Worker.
  // See reslice-volume.js for exact supersampled majority-vote / trilinear math.
  async function resliceLabelsToNative(seg, labelLut = null) {
    const isLabel = !!seg.colormapLabel || seg.hdr.intent_code === 1002;
    const isProbability = !isLabel && seg.img instanceof Float32Array;
    const dstTypedArrayKind = nativeInputNV.img?.constructor?.name || "Uint8Array";
    const { img, hdrPatch } = await resliceVolumeInWorker({
      srcImg: seg.img,
      srcDims: [seg.hdr.dims[1], seg.hdr.dims[2], seg.hdr.dims[3]],
      srcAffine: seg.hdr.affine,
      dstDims: [nativeInputNV.hdr.dims[1], nativeInputNV.hdr.dims[2], nativeInputNV.hdr.dims[3]],
      dstAffine: nativeInputNV.hdr.affine,
      isLabel,
      isProbability,
      dstTypedArrayKind,
      labelLut,
    });
    const outNV = cloneVolume(nativeInputNV, img);
    Object.assign(outNV.hdr, hdrPatch);
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

  // Compute per-label statistics + 3D storage-voxel centroids of the input
  // image intensities within each segmentation label. Single pass builds a
  // 256-bin histogram per label (conformed input is Uint8Array, so bins are
  // exact), deriving count/volume/min/max/quartiles/mean/stdev/centroidVox.
  function computeLabelStats(imgArr, labelArr, voxelVolMm3, dims = [256, 256, 256]) {
    const HIST = 256;
    const stats = new Map(); // labelValue -> { count, sum, sumSq, sumX, sumY, sumZ, hist }
    const [nx, ny, nz] = dims;
    const n = labelArr.length;
    if (nx * ny * nz === n) {
      let i = 0;
      for (let z = 0; z < nz; z++) {
        for (let y = 0; y < ny; y++) {
          for (let x = 0; x < nx; x++, i++) {
            const lbl = labelArr[i];
            if (lbl === 0) continue; // skip background
            let s = stats.get(lbl);
            if (!s) {
              s = { count: 0, sum: 0, sumSq: 0, sumX: 0, sumY: 0, sumZ: 0, hist: new Float64Array(HIST) };
              stats.set(lbl, s);
            }
            const v = imgArr[i];
            s.count++;
            s.sum += v;
            s.sumSq += v * v;
            s.sumX += x;
            s.sumY += y;
            s.sumZ += z;
            s.hist[v]++;
          }
        }
      }
    } else {
      for (let i = 0; i < n; i++) {
        const lbl = labelArr[i];
        if (lbl === 0) continue;
        let s = stats.get(lbl);
        if (!s) {
          s = { count: 0, sum: 0, sumSq: 0, sumX: 0, sumY: 0, sumZ: 0, hist: new Float64Array(HIST) };
          stats.set(lbl, s);
        }
        const v = imgArr[i];
        s.count++;
        s.sum += v;
        s.sumSq += v * v;
        s.hist[v]++;
      }
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
        centroidVox: [s.sumX / s.count, s.sumY / s.count, s.sumZ / s.count],
      });
    }
    return rows;
  }

  // Jump the 2D/3D crosshair directly to a region's anatomical centroid.
  // Storage-voxel coordinates map to world mm via `vol.hdr.affine` (never
  // `matRAS`, because `vol.img` is in storage order). For C-shaped or bilateral
  // structures whose arithmetic mean falls outside the structure itself, snap
  // to the closest actual in-region voxel on click so the crosshair always
  // lands inside the chosen structure.
  function jumpToRegionCentroid(row, { vol, labelArr = null, probMap = null } = {}) {
    if (!row?.centroidVox || !vol?.hdr?.affine) return;
    const [nx, ny, nz] = vol.hdr.dims.slice(1, 4);
    let [vx, vy, vz] = row.centroidVox;
    const rx = Math.max(0, Math.min(nx - 1, Math.round(vx)));
    const ry = Math.max(0, Math.min(ny - 1, Math.round(vy)));
    const rz = Math.max(0, Math.min(nz - 1, Math.round(vz)));
    const centerIdx = rx + ry * nx + rz * nx * ny;

    if (labelArr && labelArr[centerIdx] !== row.label) {
      let bestDist = Infinity;
      let bx = rx, by = ry, bz = rz;
      let idx = 0;
      for (let z = 0; z < nz; z++) {
        const dz = z - vz;
        const dz2 = dz * dz;
        for (let y = 0; y < ny; y++) {
          const dy = y - vy;
          const dyz2 = dy * dy + dz2;
          for (let x = 0; x < nx; x++, idx++) {
            if (labelArr[idx] !== row.label) continue;
            const dx = x - vx;
            const d2 = dx * dx + dyz2;
            if (d2 < bestDist) {
              bestDist = d2;
              bx = x; by = y; bz = z;
            }
          }
        }
      }
      if (Number.isFinite(bestDist)) {
        vx = bx; vy = by; vz = bz;
      }
    } else if (probMap && !(probMap[centerIdx] >= 0.5)) {
      let bestDist = Infinity;
      let bx = rx, by = ry, bz = rz;
      let idx = 0;
      for (let z = 0; z < nz; z++) {
        const dz = z - vz;
        const dz2 = dz * dz;
        for (let y = 0; y < ny; y++) {
          const dy = y - vy;
          const dyz2 = dy * dy + dz2;
          for (let x = 0; x < nx; x++, idx++) {
            if (!(probMap[idx] >= 0.5)) continue;
            const dx = x - vx;
            const d2 = dx * dx + dyz2;
            if (d2 < bestDist) {
              bestDist = d2;
              bx = x; by = y; bz = z;
            }
          }
        }
      }
      if (Number.isFinite(bestDist)) {
        vx = bx; vy = by; vz = bz;
      }
    }

    const A = vol.hdr.affine;
    const mm = [
      A[0][0] * vx + A[0][1] * vy + A[0][2] * vz + A[0][3],
      A[1][0] * vx + A[1][1] * vy + A[1][2] * vz + A[1][3],
      A[2][0] * vx + A[2][1] * vy + A[2][2] * vz + A[2][3],
    ];
    nv1.setCrosshairPos(mm);
  }

  const STAT_LOCATE_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="5.5"/>' +
    '<path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/>' +
    '</svg>';

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

  function downloadCsvText(csvText, filename = "mask_stats.csv") {
    const blob = new Blob([csvText], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function downloadCsv(rows, fsLut = null) {
    downloadCsvText(buildStatsCsv(rows, fsLut), "mask_stats.csv");
  }

  const fmtCm3 = (mm3) => { const v = mm3 / 1000; return v >= 10 ? Math.round(v).toLocaleString() : v.toFixed(1); };

  function buildStatsPanelHtml(rows, totalMm3, fsLut = null, { isCatLiteMode = false } = {}) {
    const maxVol = Math.max(...rows.map((r) => r.volume_mm3));
    const colorOf = (r) => {
      if (r.colorCss) return r.colorCss;
      return (lastSegColors && lastSegColors.R && lastSegColors.R[r.label] != null)
        ? `rgb(${lastSegColors.R[r.label]},${lastSegColors.G[r.label]},${lastSegColors.B[r.label]})`
        : "#6b9bd1";
    };
    const canIsolate = isCatLiteMode || !!segOverlay();
    let body = "";
    for (const r of rows) {
      const pct = totalMm3 > 0 ? (r.volume_mm3 / totalMm3) * 100 : 0;
      const wAbs = maxVol > 0 ? (r.volume_mm3 / maxVol) * 100 : 0;
      const isIso = isCatLiteMode
        ? isolatedProbabilityIndex === r.tissueIndex
        : isolatedLabel === r.label;
      const fsId = !isCatLiteMode && fsLut && r.label < fsLut.length ? fsLut[r.label] : null;
      const val = `<span class="stat-val" data-cm3="${fmtCm3(r.volume_mm3)}" data-pct="${pct.toFixed(1)}%">${fmtCm3(r.volume_mm3)}</span>`;
      const bar = `<span class="stat-bar" style="width:${wAbs.toFixed(2)}%;background:${colorOf(r)}" data-w-abs="${wAbs.toFixed(2)}" data-w-pct="${pct.toFixed(2)}"></span>`;
      const cell = (k, v) => `<div class="stat-kv"><span class="k">${k}</span><span class="v">${v}</span></div>`;
      const detail = isCatLiteMode
        ? cell("% ICV", `${pct.toFixed(1)}%`) + cell("cm³", fmtCm3(r.volume_mm3))
          + cell("mean", r.mean.toFixed(2)) + cell("SD", r.stdev.toFixed(2))
          + cell("min", r.min) + cell("max", r.max)
          + cell("equiv. vox", Math.round(r.effectiveVoxels).toLocaleString())
          + cell("support", r.supportVoxels.toLocaleString())
        : cell("min", r.min) + cell("max", r.max)
          + cell("Q1", r.q1) + cell("Q3", r.q3)
          + cell("median", r.median) + cell("mean", r.mean.toFixed(2))
          + cell("SD", r.stdev.toFixed(2)) + cell("voxels", r.voxels.toLocaleString());
      const idChip = isCatLiteMode
        ? `<span class="stat-id-chip">${escapeHtml(r.tissueKey.toUpperCase())}</span>`
        : `<span class="stat-id-chip">ID ${r.label}</span>`;
      const isoBtnHtml = canIsolate
        ? `<button type="button" class="stat-iso${isIso ? " active" : ""}" aria-pressed="${isIso}" aria-label="${isIso ? "Isolated" : "Isolate"} ${escapeHtml(r.name)}">${isIso ? "isolated" : "isolate"}</button>`
        : "";
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
            <span class="stat-actions">
              <button type="button" class="stat-locate" aria-label="Locate ${escapeHtml(r.name)}" title="Jump crosshair to ${escapeHtml(r.name)}">${STAT_LOCATE_ICON}</button>
              ${isoBtnHtml}
            </span>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${escapeHtml(r.name)}</span>
              <span class="stat-detail-badges">
                ${idChip}
                ${fsId ? `<span class="save-badge">FS ${fsId}</span>` : ""}
              </span>
            </div>
            <div class="stat-detail-grid">${detail}</div>
          </div>
        </div>`;
    }
    const unitNoun = isCatLiteMode ? (rows.length === 1 ? "tissue" : "tissues") : (rows.length === 1 ? "region" : "regions");
    const totalSuffix = isCatLiteMode ? " cm³ ICV" : " cm³";
    const pctLabel = isCatLiteMode ? "% of ICV" : "% of total";
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
            <button type="button" data-mode="pct" aria-pressed="false">${pctLabel}</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${rows.length} ${unitNoun} &middot; ${fmtCm3(totalMm3)}${totalSuffix}</span>
          ${searchHtml}
        </div>
        <div id="statsRows">
          ${body}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for stats &middot; Crosshair jumps &middot; Isolate solos in 3D</span>
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

    const imgArr = nv1.volumes[0].img;   // conformed input intensities
    const pd = nv1.volumes[0].hdr.pixDims || [];
    const voxelVolMm3 = (pd[1] && pd[2] && pd[3]) ? pd[1] * pd[2] * pd[3] : 1;
    const catState = activeCatLiteState();

    let rows;
    let totalMm3;
    let fsLut = null;
    let isCatLiteMode = false;
    let labelArr = null;
    const overlayVol = nv1.volumes[1];

    if (catState) {
      isCatLiteMode = true;
      const dims = nv1.volumes[0].hdr.dims.slice(1, 4);
      const computed = computeCatLiteStats(imgArr, catState.maps, voxelVolMm3, dims, catState.modelEntry);
      rows = computed.rows;
      totalMm3 = computed.icvMm3;
      if (rows.length === 0) {
        showModal("Tissue volumes", "<p>No non-zero tissue fractions found.</p>");
        return;
      }
      // Keep canonical GM / WM / CSF order or largest first? Largest-first matches
      // the bar-chart visual hierarchy used by every other model.
      rows = rows.slice().sort((a, b) => b.volume_mm3 - a.volume_mm3);
    } else if (overlayVol.img instanceof Float32Array) {
      showModal("Region volumes", "<p>Region statistics require a discrete label segmentation or CAT-lite GM/WM/CSF tissue maps.</p>");
      return;
    } else {
      labelArr = overlayVol.img; // always pristine with LUT-based isolation
      if (!imgArr || !labelArr || imgArr.length !== labelArr.length) {
        showModal("Region volumes", "<p>Input and segmentation grids do not match.</p>");
        return;
      }
      const dims = overlayVol.hdr.dims.slice(1, 4);
      rows = computeLabelStats(imgArr, labelArr, voxelVolMm3, dims);
      if (rows.length === 0) {
        showModal("Region volumes", "<p>No non-background labels found in the segmentation.</p>");
        return;
      }
      // Largest region first, matching the reference panel layout.
      rows = rows.slice().sort((a, b) => b.volume_mm3 - a.volume_mm3);
      totalMm3 = rows.reduce((s, r) => s + r.volume_mm3, 0);
      fsLut = lastModelEntry && lastModelEntry.type !== "Brain_Extraction"
        ? buildFreeSurferLut(lastSegLabelNames)
        : null;
    }

    const rowByLabel = new Map(rows.map((r) => [r.label, r]));
    const modalTitle = isCatLiteMode ? "Tissue volumes" : "Region volumes";
    showModal(
      modalTitle,
      buildStatsPanelHtml(rows, totalMm3, fsLut, { isCatLiteMode }),
      { hideClose: true, statsMode: true }
    );

    // Wire up interactivity (innerHTML strips <script>, so attach handlers here).
    const panel = document.getElementById("statsPanel");
    if (!panel) return;

    let currentMode = "cm3";
    let visibleCount = rows.length;
    const unitNoun = isCatLiteMode ? (rows.length === 1 ? "tissue" : "tissues") : (rows.length === 1 ? "region" : "regions");
    const updateUnitSummary = () => {
      const unitEl = document.getElementById("statsUnitLabel");
      if (!unitEl) return;
      const countText = visibleCount === rows.length
        ? `${rows.length} ${unitNoun}`
        : `${visibleCount} of ${rows.length} ${unitNoun}`;
      const totalText = currentMode === "pct"
        ? (isCatLiteMode ? "100% of ICV" : "100% of volume")
        : `${fmtCm3(totalMm3)}${isCatLiteMode ? " cm³ ICV" : " cm³"}`;
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

    // Per-row "Locate": jump the 2D/3D crosshair straight to the region's centroid.
    panel.querySelectorAll(".stat-locate").forEach((btn) => {
      btn.onclick = () => {
        const labelVal = parseInt(btn.closest(".stat-row").dataset.label, 10);
        const row = rowByLabel.get(labelVal);
        if (row) {
          jumpToRegionCentroid(row, {
            vol: isCatLiteMode ? nv1.volumes[0] : overlayVol,
            labelArr: isCatLiteMode ? null : labelArr,
            probMap: isCatLiteMode ? catState.maps[row.tissueIndex] : null,
          });
        }
        const dlg = document.getElementById("appDialog");
        if (dlg && dlg.open) dlg.close();
      };
    });

    // Per-row "isolate": show only that region/tissue in the viewer and close
    // the dialog so it's visible.
    panel.querySelectorAll(".stat-iso").forEach((btn) => {
      btn.onclick = () => {
        const labelVal = parseInt(btn.closest(".stat-row").dataset.label, 10);
        if (!Number.isNaN(labelVal)) {
          if (isCatLiteMode) {
            isolateProbabilityTissue(labelVal);
          } else {
            isolateLabel(labelVal);
          }
        }
        const dlg = document.getElementById("appDialog");
        if (dlg && dlg.open) dlg.close();
      };
    });

    document.getElementById("statsDownloadBtn").onclick = () => {
      if (isCatLiteMode) {
        downloadCsvText(buildCatLiteStatsCsv(rows, totalMm3), "tissue_stats.csv");
      } else {
        downloadCsv(rows, fsLut);
      }
    };
  };

  function doLoadImage() {
    // Release any cached 0–98% inference buffer as soon as the base volume
    // changes (including multi-volume .nvd loads or drag-and-drop replacement).
    inferenceInputCache.sync(nv1.volumes[0]);
    // Retain the volume as loaded (native grid) before ensureConformed() may
    // replace volumes[0] with the 256³ conformed copy — needed to reslice the
    // segmentation back to native space on export.
    if (nv1.volumes.length <= 1) {
      inferenceInputCache.clear();
      nativeInputNV = nv1.volumes[0] || null;
      nativeInputName = (nativeInputNV && nativeInputNV.name) ? nativeInputNV.name : "input.nii.gz";
      lastModelEntry = null;
      lastBrainMask = null;
      updateActiveModelBadge(null);
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
    updateActiveModelBadge(modelEntry);
    if (modelEntry.outputType === 'probability') {
      // CAT-lite passes [GM, WM, CSF]: display as a single DT_RGBA32 composite
      // overlay (1×64 MiB GPU texture, ~10× faster opacity drag, zero readPixels
      // stall) while retaining the 3 pristine Float32 maps for Save, Stats, and
      // Alt-click tissue isolation.
      const maps = Array.isArray(img) ? img : [img];
      if (modelEntry.probabilityPostprocess === 'cat-lite' && maps.length === 3) {
        const base = nv1.volumes[0];
        const floatMaps = maps.map((m) => (m instanceof Float32Array ? m : Float32Array.from(m)));
        const opacity = Number(opacitySlider1.value);
        const rasLayout = (base.dimsRAS && base.img2RASstart && base.img2RASstep)
          ? {
              dimsRAS: [...base.dimsRAS],
              img2RASstart: [...base.img2RASstart],
              img2RASstep: [...base.img2RASstep],
            }
          : null;
        const comp = buildCatLiteRgbaComposite(floatMaps, modelEntry, null, opacity, rasLayout);
        const rasVolOverrides = comp.isRasOrdered
          ? {
              dims: [...rasLayout.dimsRAS],
              permRAS: [1, 2, 3],
              img2RASstart: [0, 0, 0],
              img2RASstep: [1, rasLayout.dimsRAS[1], rasLayout.dimsRAS[1] * rasLayout.dimsRAS[2]],
            }
          : {};
        const rasHdrOverrides = comp.isRasOrdered
          ? {
              dims: [3, rasLayout.dimsRAS[1], rasLayout.dimsRAS[2], rasLayout.dimsRAS[3], 1, 1, 1, 1],
              ...(base.matRAS && base.matRAS.length >= 16
                ? {
                    affine: [
                      [base.matRAS[0], base.matRAS[4], base.matRAS[8], base.matRAS[12]],
                      [base.matRAS[1], base.matRAS[5], base.matRAS[9], base.matRAS[13]],
                      [base.matRAS[2], base.matRAS[6], base.matRAS[10], base.matRAS[14]],
                      [base.matRAS[3], base.matRAS[7], base.matRAS[11], base.matRAS[15]],
                    ],
                  }
                : {}),
            }
          : {};
        const overlayVolume = cloneOverlayVolume(
          base,
          comp.rgba,
          "cat_lite_tissues",
          {
            ...rasHdrOverrides,
            scl_inter: 0,
            scl_slope: 1,
            datatypeCode: 2304,     // DT_RGBA32
            numBitsPerVoxel: 32,
            cal_min: 0,
            cal_max: 255,
            intent_code: 1001,      // NIFTI_INTENT_ESTIMATE
          },
          {
            ...rasVolOverrides,
            calMin: 0,
            calMax: 255,
            robustMin: 0,
            robustMax: 255,
            globalMin: 0,
            globalMax: 255,
            opacity,
          }
        );
        await nv1.model.addVolume(overlayVolume);
        const addedOverlay = nv1.volumes.at(-1);
        catLiteState = {
          maps: floatMaps,
          tissues: comp.tissues,
          modelEntry,
          rasLayout: comp.isRasOrdered ? rasLayout : null,
          rgba: comp.rgba,
          activeAlphaOffsets: comp.activeAlphaOffsets,
          activeBaseAlpha: comp.activeBaseAlpha,
          overlay: addedOverlay,
        };
      } else {
        for (let i = 0; i < maps.length; i++) {
          await addProbabilityOverlay(maps[i], modelEntry, modelEntry.probabilityTissues?.[i]);
        }
      }
      syncModelUnderlayOpacityNoRender(modelEntry);
      prevOverlayOpacity = Number(opacitySlider1.value);
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
    lastFullLabelLut = colormapLabel ? addedSeg.colormapLabel : null;
    syncModelUnderlayOpacityNoRender(modelEntry);
    prevOverlayOpacity = Number(opacitySlider1.value);
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
      modelProgress.classList.remove("is-busy");
      const memstatusItem = document.getElementById("memstatusItem");
      if (memstatusItem) memstatusItem.hidden = false;
      memstatus.style.color = "#ef4444";
      memstatus.textContent = "Memory Issue";
    } else if (progressFrac >= 0) {
      modelProgress.value = progressFrac * modelProgress.max;
      modelProgress.classList.toggle("is-busy", progressFrac > 0 && progressFrac < 1);
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
    const segments = data.string
      .split("   ")
      .map((value) => value.trim())
      .filter((value) => value !== "");
    let tissueHtml = "";
    const state = activeCatLiteState();
    const base = nv1.volumes[0];
    if (state && base && crosshairVox) {
      // NiiVue appends a dummy scalar readout ("0" / RGBA byte) for the
      // DT_RGBA32 display overlay; replace it with live GM/WM/CSF fractions.
      if (segments.length > 1) segments.pop();
      const idx = rasToNativeIndex(base, crosshairVox);
      if (idx !== null) {
        const gm = state.maps[0][idx] || 0;
        const wm = state.maps[1][idx] || 0;
        const csf = state.maps[2][idx] || 0;
        if (gm + wm + csf >= 0.005) {
          tissueHtml =
            '<span class="loc-seg loc-tissues">' +
            `<span class="loc-k">GM</span> <span class="loc-v">${gm.toFixed(2)}</span> ` +
            `<span class="loc-k">WM</span> <span class="loc-v">${wm.toFixed(2)}</span> ` +
            `<span class="loc-k">CSF</span> <span class="loc-v">${csf.toFixed(2)}</span>` +
            "</span>";
        }
      }
    }
    const htmlParts = segments.map((value) => `<span class="loc-seg">${escapeHtml(value)}</span>`);
    if (tissueHtml) htmlParts.push(tissueHtml);
    document.getElementById("location").innerHTML = htmlParts.join('<span class="loc-sep">&middot;</span>');
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
  if (!nv1.volumeTransforms.includes(clinicalConform.name)) {
    nv1.registerVolumeTransform(clinicalConform); // robust conform worker (0-99.9% clip, <2% neg floor, NaN-safe)
  }
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
      applyProbabilityIsolation();
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
    try {
      drawIsolationHUD();
      scheduleIsolationHUDSync();
    } catch (e) { console.warn("isolation HUD draw failed", e); }
    return r;
  };
  window.addEventListener("resize", scheduleIsolationHUDSync);
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
  const initialBackend = initializeBackend(nv1.view?.gl);

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

  await initialBackend;

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

const STAR_CACHE_KEY = "brainchop:gh-stars:v1";
const STAR_CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

async function updateStarCount() {
  const starEl = document.getElementById("star-count");
  if (!starEl) return;

  // Paint cached star count immediately (eliminating "0" flash) and skip the
  // unauthenticated GitHub API call (60 req/hr limit) while cache is fresh.
  let cached = null;
  try {
    const raw = window.localStorage?.getItem(STAR_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.count === "number" && Number.isFinite(parsed.count)) {
        cached = parsed;
        starEl.textContent = String(parsed.count);
      }
    }
  } catch {
    // private browsing / disabled storage — proceed to live fetch
  }

  if (cached && typeof cached.ts === "number" && Date.now() - cached.ts < STAR_CACHE_TTL_MS) {
    return;
  }

  try {
    const response = await fetch("https://api.github.com/repos/neuroneural/brainchop");
    if (!response.ok) return;
    const data = await response.json();
    if (typeof data?.stargazers_count === "number" && Number.isFinite(data.stargazers_count)) {
      starEl.textContent = String(data.stargazers_count);
      try {
        window.localStorage?.setItem(
          STAR_CACHE_KEY,
          JSON.stringify({ count: data.stargazers_count, ts: Date.now() })
        );
      } catch {
        // ignore quota / private-mode write errors
      }
    }
  } catch (error) {
    console.error("Error fetching star count:", error);
  }
}

(async function () {
  await main();
  await updateStarCount();
  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    const registerSw = () => {
      navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch((err) => {
        console.warn("[PWA] Service Worker registration failed:", err);
      });
    };
    if (document.readyState === "complete") {
      registerSw();
    } else {
      window.addEventListener("load", registerSw, { once: true });
    }
  }
})();
