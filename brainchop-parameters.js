export { inferenceModelsList, brainChopOpts, resolveModelEntry }

const brainChopOpts = {
  // General settings for input shape [batchSize, batch_D, batch_H, batch_W, numOfChan]
  batchSize: 1, // How many batches are used during each inference iteration
  numOfChan: 1, // num of channel of the input shape
  isColorEnable: true, // If false, grey scale will enabled
  isAutoColors: true, // If false, manualColorsRange will be in use
  bgLabelValue: 0, // Semenatic Segmentation background label value
  drawBoundingVolume: false, // plot bounding volume used to crop the brain
  isGPU: true, //use WebGL/GPU (faster) or CPU (compatibility)
  isBrainCropMaskBased: true, // Check if brain masking will be used for cropping & optional show or brain tissue will be used
  showPhase1Output: false, // This will load to papaya the output of phase-1 (ie. brain mask or brain tissue)
  isPostProcessEnable: true, // If true 3D Connected Components filter will apply
  fillSuppressedWithNeighborLabel: false, // If true, blobs dropped by the per-class "largest component" filter are repainted with their surrounding surviving label instead of background (adds one linear neighbour pass; applies to per-class models e.g. 3/8/9/21, 5/14, 1/7 — not the binary brain-mask path)
  diagnoseEnclosedComponents: false, // DEBUG: if true, log per-component stats (class, size, largest-of-class?, dominant neighbour & enclosure) for 104-class models to the console. Output-neutral; used to tune island absorption.
  isContoursViewEnable: false, // If true 3D contours of the labeled regions will apply
  browserArrayBufferMaxZDim: 30, // This value depends on Memory available
  telemetryFlag: false, // Ethical and transparent collection of browser usage while adhering to security and privacy standards
  chartXaxisStepPercent: 10, // percent from total labels on Xaxis
  uiSampleName: 'BC_UI_Sample', // Sample name used by interface
  atlasSelectedColorTable: 'Fire' // Select from ["Hot-and-Cold", "Fire", "Grayscale", "Gold", "Spectrum"]
}

/**
 * Resolve the effective model config for a menu entry.
 * On WebGPU, `useV4 = true` (default) selects the lossless 8-bit V4 activation
 * engine (`meshnet_fast_v4_runner.js`, 80–240 MiB max storage buffer).
 * Passing `useV4 = false` returns the FP16 reference configuration (used by
 * native WebGL2 RGBA16F and developer `?precision=fp16` parity checks).
 */
function resolveModelEntry(modelEntry, useV4 = true) {
  if (!modelEntry) {
    return modelEntry;
  }
  const { turbo, ...base } = modelEntry;
  if (!useV4 || !turbo) {
    return base;
  }
  return { ...base, ...turbo, isTurboActive: true };
}

// Model IDs identify postprocessing behavior; menu order is the array order.
const inferenceModelsList = [
  {
    id: 2,
    type: 'Brain_Extraction',
    path: '/models/mindgrab/model.json',
    modelName: '\u{1FA93}\u{1F9E0} Omnimodal Skull Stripping',
    webgpu_safetensor: './models/mindgrab/model.safetensors',
    webgpu_runner: 'mindgrab',
    // Exact output/bias values from the trained model.bin / model.25.bias.
    // Both the generated WebGPU head and native WebGL2 export omit this tensor.
    classifierBias: [1.525439739227295, -1.5258055925369263],
    webgpuTTArunner: false, // The old TTA export also omits the classifier bias.
    forceFP32: false,
    webgpuStorageSize: 503316480, // 15 * 256^3 * 2 = 480 MiB largest full-volume fp16 activation buffer.
    numClasses: 2,
    turbo: {
      webgpu_runner: 'mindgrab_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuTTArunner: false,
      webgpuStorageSize: 83886080, // V4 uses 160 MiB on desktop, auto LowMem128 (80 MiB) on mobile WebGPU.
      warning:
        'Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2.'
    },
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    isPostProcessEnable: true,
    enableCrop: true,
    cropPadding: 20,
    autoThreshold: 0.5,
    enableQuantileNorm: true,
    filterOutWithPreMask: false,
    enableSeqConv: false,
    textureSize: 0,
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100,
    description:
      'Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2.'
  },
  {
    // Primary 24-channel Subcortical + Tissue model (MindMap-18 v4.0 Gold).
    id: 21,
    type: 'Atlas',
    path: '/models/model24chan18cls_gdice_prio/model.json',
    modelName: '\u{1FA93} Subcortical + Tissue',
    colormapPath: './models/model24chan18cls_gdice_prio/colormap.json',
    webgpu_safetensor: './models/model24chan18cls_gdice_prio/model.safetensors',
    webgpu_runner: 'model24chan18cls_gdice_prio',
    forceFP32: false,
    webgpuStorageSize: 1610612736,
    numClasses: 18,
    turbo: {
      webgpu_runner: 'mindmap24_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        'Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2.'
    },
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true, // WebGL2 fallback only; WebGPU runs the full volume.
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true,
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",
    inferenceDelay: 100,
    description:
      'Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap-18 v4.0: sharp sulci, clinical atrophy sensitivity, and slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer).'
  },
  {
    // CAT-inspired experiment. The runner returns grouped GM, WM and CSF priors.
    // cat-lite.js then fits the subject's normalized T1 with pure and mixed
    // tissue classes. This is neural-assisted and is NOT a CAT12 result.
    id: 23,
    type: 'Probability_Map',
    path: '/models/model24chan18cls_gdice_prio/model.json',
    modelName: '\u2154\u{1F9E0} Tissue fraction maps (GM/WM/CSF)',
    webgpu_safetensor: './models/model24chan18cls_gdice_prio/model.safetensors',
    webgpu_runner: 'model24chan18cls_gdice_prio_probability',
    forceFP32: false,
    webgpuStorageSize: 1610612736,
    numClasses: 18,
    turbo: {
      webgpu_runner: 'mindmap24_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        'Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile).'
    },
    outputType: 'probability',
    probabilityPostprocess: 'cat-lite',
    softmaxTemperature: 2.0,
    brainSupportTemperature: 1.0,
    brainSupportPower: 1.0,
    partialVolumeSigma: 0.65,
    probabilityDisplay: 'grayMatter',
    probabilityTissues: [
      { name: 'gm', tint: [255, 64, 64] },
      { name: 'wm', tint: [255, 255, 255] },
      { name: 'csf', tint: [64, 128, 255] },
    ],
    probabilityOverlayFloor: 128,
    probabilityOverlayAlpha: 48,
    probabilityDisplayMin: 0.03,
    probabilityUnderlayOpacity: 0.1,   // must land on the BG slider step (0.1)
    probabilityGroups: {
      grayMatter: [2, 6, 7, 8, 9, 10, 14, 15, 16, 17],
      whiteMatter: [1, 5],
      csf: [3, 4, 11, 12],
    },
    catLitePurePriorPower: 3.0,
    catLitePriorStrength: 0.8,
    catLiteIntensityStrength: 0.75,
    catLiteMixelPrior: 0.35,
    catLiteCsfWmMixelPrior: 6.0,
    catLiteSpatialWeight: 0.25,
    catLiteMinSupport: 0.03,
    catLiteSigmaFloor: 0.025,
    catLiteBiasBlockSize: 16,
    catLiteBiasSmoothPasses: 3,
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true,
    enableQuantileNorm: true,
    enableFovRecenter: false,
    enableFovInflate: false,
    warning:
      "Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",
    inferenceDelay: 100,
    description:
      'CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result.'
  },
  {
    // Primary 104-class DK-atlas model (MindSnap-104 v4.0 Gold): best overall T1-weighted
    // 104-class cortical + subcortical parcellation with clinical atrophy sensitivity and zero runtime overhead.
    id: 5,
    type: 'Atlas',
    path: '/models/model24chan104cls_v3_repbn/model.json',
    modelName: '\u{1FA93}\u{1F52A} Desikan-Killiany Atlas',
    colormapPath: './models/model24chan104cls_v3_repbn/colormap.json',
    webgpu_safetensor: './models/model24chan104cls_v3_repbn/model.safetensors',
    webgpu_runner: 'dkatlas24_synth',
    forceFP32: false,
    webgpuStorageSize: 1610612736,
    numClasses: 104,
    turbo: {
      webgpu_runner: 'dkatlas24_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        'Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2.'
    },
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true,
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true, // synth104 trained with quantile normalization (catalyst pipeline) -- must match at inference. Do NOT set false.
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",
    inferenceDelay: 100,
    description:
      'Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI (MindSnap-104 v4.0: sharp sulci, clinical atrophy sensitivity, spotless CSF/cerebellum), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2.'
  },
  {
    // Primary 50-class bilateral Desikan-Killiany model (MindSnap-50 v4.0 Gold):
    // 24-channel gridding-free MeshNet (GroupNorm + GELU, RF=255) with built-in
    // full-head skull stripping, clinical atrophy sensitivity, and lossless 8-bit V4 WebGPU / native WebGL2 support.
    id: 4,
    type: 'Atlas',
    path: '/models/model24chan50cls/model.json',
    modelName: '\u{1FA93}\u{1F52A} Desikan-Killiany 50',
    colormapPath: './models/model24chan50cls/colormap.json',
    webgpu_safetensor: './models/model24chan50cls/model.safetensors',
    webgpu_runner: 'meshnet_fast_v4',
    forceFP32: false,
    webgpuStorageSize: 805306368,
    numClasses: 50,
    turbo: {
      webgpu_runner: 'meshnet_fast_v4',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        'Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2.'
    },
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true,
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true,
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",
    inferenceDelay: 100,
    description:
      'Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v4.0: sharp sulci and clinical atrophy sensitivity), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2.'
  },
  {
    id: 6,
    type: 'Divider',
    modelName: '-----------------',
    path: null
  },
  {
    // Fast 16-channel Subcortical + Tissue: backed by MindMap-16ch v3.5
    // model16chan18cls (16 channels, 13 conv + 1x1, affine GroupNorm + GELU, RF=255).
    id: 3,
    type: 'Atlas',
    path: '/models/model16chan18cls/model.json',
    modelName: '\u26A1\u{1FA93} Subcortical + Tissue',
    colormapPath: './models/model16chan18cls/colormap.json',
    webgpu_safetensor: './models/model16chan18cls/model.safetensors',
    webgpu_runner: 'model16chan18cls',
    forceFP32: false,
    webgpuStorageSize: 536870912,
    numClasses: 18,
    turbo: {
      webgpu_runner: 'model16chan18cls_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 83886080,
      warning:
        'Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile).'
    },
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true,
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true, // synth18/turbo16 trained with quantile normalization -- must match at inference. Do NOT set false.
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",
    inferenceDelay: 100,
    description:
      'Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint.'
  },
  {
    // Retained 104-class model for focal lesion scans.
    id: 14,
    type: 'Atlas',
    path: '/models/model24chan104cls_synth/model.json',
    modelName: '\u{1FA93}\u{1F52A} Desikan-Killiany (lesion scans)',
    colormapPath: './models/model24chan104cls_synth/colormap.json',
    webgpu_safetensor: './models/model24chan104cls_synth/model.safetensors',
    webgpu_runner: 'dkatlas24_synth',
    forceFP32: false,
    webgpuStorageSize: 1610612736,
    numClasses: 104,
    turbo: {
      webgpu_runner: 'dkatlas24_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        'Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2.'
    },
    preModelId: null,
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true,
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true,
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",
    inferenceDelay: 100,
    description:
      'Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.'
  },
] // inferenceModelsList
