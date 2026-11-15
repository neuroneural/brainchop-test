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
 * Resolve the effective model config for a menu entry given the global Turbo
 * (8-bit V4 WebGPU / RGBA8 WebGL2) toggle state without mutating the base entry.
 */
function resolveModelEntry(modelEntry, turboEnabled = true) {
  if (!modelEntry || !turboEnabled || !modelEntry.turbo) {
    return modelEntry;
  }
  const { turbo, ...base } = modelEntry;
  return { ...base, ...turbo, isTurboActive: true };
}

// Model IDs identify postprocessing behavior; menu order is the array order.
const inferenceModelsList = [
  {
    id: 2,
    type: 'Brain_Extraction',
    path: '/models/mindgrab/model.json',
    modelName: '\u{1FA93}\u{1F310} omnimodal Skull Stripping',
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
        '8-bit V4 accelerated MindGrab (~4.2s on M1 WebGPU, ~2.8x faster than fp16, auto-scales from 160 MiB down to 80 MiB max buffer on mobile WebGPU).'
    },
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    isPostProcessEnable: true, // If true 3D Connected Components filter will apply
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 20, // Padding size add to cropped brain
    autoThreshold: 0.5, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: true, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'The omnimodal skull stripping model delivers high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET. With Turbo ON (default), uses the V4 8-bit WebGPU engine (auto 80 MiB mobile / 160 MiB desktop max buffer, 3-tier f16/f32 portability) and RGBA8 on WebGL2 (~2.8x faster than fp16 with >99.9% foreground agreement).'
  },
  {
    // Primary 24-channel Subcortical + GWM model.
    // FP16 runner uses tuned 24-channel backbone kernels (1.5 GiB storage buffer).
    // Turbo mode runs the 8-bit V4 MindMap v2 runner (240 MiB desktop / 120 MiB mobile).
    id: 21,
    type: 'Atlas',
    path: '/models/model24chan18cls_gdice_prio/model.json',
    modelName: '\u{1FA93} Subcortical + GWM',
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
        '8-bit V4 accelerated MindMap v2 (~3.0s on M1 WebGPU, ~2.9x faster than fp16, auto-scales from 240 MiB down to 120 MiB max buffer on mobile WebGPU).'
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
      "WebGPU requires a device with 1.5 GiB storage-buffer support and may need a dedicated graphics card. For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100,
    description:
      'Parcellation of the brain into 17 regions (gray and white matter plus subcortical structures) via a deep 24-channel gridding-free MeshNet. With Turbo ON (default), runs the 8-bit V4 WebGPU engine (auto 120 MiB mobile / 240 MiB desktop max buffer, ~2.9x faster than fp16, >99.2% foreground agreement) or RGBA8 on WebGL2.'
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
        '8-bit V4 accelerated CAT-lite tissue fraction estimate (~3.5s on M1 WebGPU, auto-scales from 240 MiB down to 120 MiB max buffer on mobile WebGPU).'
    },
    outputType: 'probability',
    probabilityPostprocess: 'cat-lite',
    // This temperature controls the three anatomical priors, not the final
    // partial-volume contrast. A moderate value supplies soft interfaces while
    // the intensity model, rather than temperature alone, creates fractions.
    softmaxTemperature: 2.0,
    brainSupportTemperature: 1.0,
    brainSupportPower: 1.0,
    // Approximate the acquisition/resampling point-spread function on each of
    // the three priors before the joint mixed-class fit (not on the final map).
    partialVolumeSigma: 0.65,
    probabilityDisplay: 'grayMatter',
    // One overlay per CAT-lite output, in [GM, WM, CSF] order; `tint` colors
    // the light overlay ramp and `name` suffixes saved files.
    probabilityTissues: [
      { name: 'gm', tint: [255, 64, 64] },
      { name: 'wm', tint: [255, 255, 255] },
      { name: 'csf', tint: [64, 128, 255] },
    ],
    // The wider ramp restores depth cues in volume rendering; reduced alpha
    // keeps mid-probability gray from drawing a dark band over bright T1 WM.
    probabilityOverlayFloor: 128,
    probabilityOverlayAlpha: 48,
    probabilityDisplayMin: 0.03,
    // CAT-lite is much easier to inspect without a bright anatomical volume
    // competing with it. main.js applies this temporarily and restores the
    // user's previous underlay opacity on the next non-probability result.
    probabilityUnderlayOpacity: 0.1,   // must land on the BG slider step (0.1)
    probabilityGroups: {
      grayMatter: [2, 6, 7, 8, 9, 10, 14, 15, 16, 17],
      whiteMatter: [1, 5],
      csf: [3, 4, 11, 12],
    },
    // CAT-lite refinement controls. These intentionally remain here so they
    // can be tuned without recompiling the WebGPU runner.
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
      "Experimental neural-assisted mixed-class partial-volume estimate, not CAT12. Keep \u26A1 ON for 120-240 MiB WebGPU & cross-browser support (FP16 reference mode requires ~1.5 GiB of graphics memory).",
    inferenceDelay: 100,
    description:
      'CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. With \u26A1 ON (default), runs via the V4 8-bit WebGPU engine or RGBA8 WebGL2. Experimental and not a CAT12 result.'
  },
  {
    // Primary 104-class DK-atlas model (MindSnap v3-RepBN): best overall T1-like
    // 104-class parcellation with zero runtime parameter overhead.
    // Full artifact set in public/models/model24chan104cls_v3_repbn/:
    //   WebGPU V4 int8 : dkatlas24_int8_runner.js        + model.safetensors (Turbo ON, default)
    //   WebGPU fp16    : dkatlas24_synth_runner.js       + model.safetensors (Turbo OFF)
    //   WebGPU fp32    : dkatlas24_synth_f32_runner.js   + model_f32.safetensors
    //   WebGL2         : meshnet_gl RGBA8 (Turbo ON) / RGBA16F (Turbo OFF) / model.json
    id: 5,
    type: 'Atlas',
    path: '/models/model24chan104cls_v3_repbn/model.json',
    modelName: '\u{1FA93}\u{1F52A} Aparc+Aseg 104',
    colormapPath: './models/model24chan104cls_v3_repbn/colormap.json',
    webgpu_safetensor: './models/model24chan104cls_v3_repbn/model.safetensors',
    webgpu_runner: 'dkatlas24_synth', // FP16 reference runner (Turbo OFF); auto-falls back to fp32/WebGL2 if needed.
    forceFP32: false,
    webgpuStorageSize: 1610612736,
    numClasses: 104,
    turbo: {
      webgpu_runner: 'dkatlas24_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        '8-bit V4 accelerated Aparc+Aseg 104 (~3.3s on M1 WebGPU, ~3.4x faster than fp16, auto-scales from 240 MiB down to 120 MiB max buffer on mobile WebGPU).'
    },
    preModelId: null, // No pre-model; run the full head like the CLI.
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true, // WebGL2 fallback needs this (texture limit); WebGPU ignores it and runs full volume.
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true, // synth104 trained with quantile normalization (catalyst pipeline) -- must match at inference. Do NOT set false.
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "FP16 mode requires 1.5 GiB WebGPU buffer support; keep ⚡ Turbo ON for 120-240 MiB WebGPU and Safari/Firefox support.",
    inferenceDelay: 100,
    description:
      'Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical, MindSnap v3-RepBN) for standard T1-weighted MRI. With Turbo ON (default), runs via the V4 8-bit WebGPU engine (~3.3s on M1, auto 120 MiB mobile / 240 MiB desktop max buffer, 3-tier f16/f32 portability) and RGBA8 on WebGL2.'
  },
  {
    // MindSnap v3-Omnimodal champion (RepWNConv3d + d=31/d=7 DeepSup folded -> SWA + 0.08 WiSE):
    // Robust 104-class DK-atlas complement across T2w, FLAIR, head CT, thick-slice clinical scans (2-5 mm),
    // high noise, bias fields, skull-stripped scans, and contrast-randomized modalities (beating SynthSeg Robust).
    id: 60,
    type: 'Atlas',
    path: '/models/model24chan104cls_v3_omnimodal/model.json',
    modelName: '\u{1FA93}\u{1F310} Aparc+Aseg 104 (Omnimodal / Clinical)',
    colormapPath: './models/model24chan104cls_v3_omnimodal/colormap.json',
    webgpu_safetensor: './models/model24chan104cls_v3_omnimodal/model.safetensors',
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
        '8-bit V4 accelerated Omnimodal/Clinical Aparc+Aseg 104 (~3.4s on M1 WebGPU, ~3.4x faster than fp16, auto-scales down to 120 MiB max buffer on mobile WebGPU).'
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
      "FP16 mode requires 1.5 GiB WebGPU buffer support; keep ⚡ Turbo ON for 120-240 MiB WebGPU and Safari/Firefox support.",
    inferenceDelay: 100,
    description:
      'Contrast-agnostic & clinical-degradation-robust 104-region Desikan-Killiany parcellation (MindSnap v3-Omnimodal, outperforming SynthSeg Robust across multimodal & thick-slice benchmarks). Use instead of standard Aparc+Aseg 104 for T2w, FLAIR, CT, thick clinical slices (2-5 mm), high noise, strong bias fields, and skull-stripped scans.'
  },
  {
    id: 4,
    type: 'Atlas',
    path: '/models/model30chan50cls/model.json',
    modelName: '\u{1F52A} Aparc+Aseg 50',
    colormapPath: './models/model30chan50cls/colormap.json',
      webgpu_safetensor: './models/model30chan50cls/model.safetensors', webgpu_runner: 'model30chan50cls',
          webgpuTTArunner: true,
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 200, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: true, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'This is a 50-class model, that segments the brain into the Aparc+Aseg Freesurfer Atlas but one where cortical homologues are merged into a single class.'
  },
  {
    id: 6,
    type: 'Divider',
    modelName: '-----------------',
    path: null
  },
  {
    // Fast Subcortical + GWM: backed by the deep gridding-free MeshNet
    // model16chan18cls (16 channels, 13 conv + 1x1, affine GroupNorm + GELU,
    // dilations -> 31 / RF=255). Lightest/fastest of the deep 18-class family;
    // the 24-channel model (id 21) is the primary menu entry.
    // Assets in public/models/model16chan18cls/:
    //   WebGPU fp16 : model16chan18cls_runner.js     + model.safetensors
    //   WebGPU fp32 : model16chan18cls_f32_runner.js + model_f32.safetensors
    //   WebGL2      : model.json (tfjs topology)      + model.bin
    id: 3,
    type: 'Atlas',
    path: '/models/model16chan18cls/model.json',
    modelName: '\u26A1\u{1FA93} Subcortical + GWM (fast)',
    colormapPath: './models/model16chan18cls/colormap.json',
    webgpu_safetensor: './models/model16chan18cls/model.safetensors',
    webgpu_runner: 'model16chan18cls',
    forceFP32: false, // fp16 default; fp32 auto-used only if device lacks shader-f16 AND the _f32 runner exists.
    webgpuStorageSize: 536870912, // 16 * 256^3 * 2 = 512 MiB largest full-volume fp16 activation/classifier chunk buffer.
    numClasses: 18,
    turbo: {
      webgpu_runner: 'model16chan18cls_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 83886080,
      warning:
        '8-bit V4 accelerated 16-channel MindMap (~2.0s on M1 WebGPU, ~2.8x faster than fp16, auto-scales from 160 MiB down to 80 MiB max buffer on mobile WebGPU).'
    },
    preModelId: null, // gridding-free (RF=255): full head, no pre-model/crop on WebGPU.
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // WebGL2 fallback only (texture limit); WebGPU runs the full volume.
    cropPadding: 20, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: true, // synth18/turbo16 trained with quantile normalization -- must match at inference. Do NOT set false.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: true, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. A deep 16-channel gridding-free MeshNet (affine GroupNorm + GELU), synth-trained for robustness across data quality including varying saturation and clinical scans. With Turbo ON (default), runs the V4 8-bit WebGPU engine (auto 80 MiB mobile / 160 MiB desktop max buffer, ~2.8x faster than fp16, >99.1% foreground agreement) or RGBA8 on WebGL2.'
  },
  {
    // Previous primary 104-class model, retained for lesion scans.
    // Synth-trained 24ch/104cls gridding-free MeshNet (affine GroupNorm + GELU).
    // Weights converted from catalyst
    // synth104_gn_hdc_deep_turbo24_fromreal. Full artifact set in
    // public/models/model24chan104cls_synth/:
    //   WebGPU fp16 : dkatlas24_synth_runner.js     + model.safetensors
    //   WebGPU fp32 : dkatlas24_synth_f32_runner.js + model_f32.safetensors
    //   WebGL2      : model.json (tfjs topology)     + model.bin
    id: 14,
    type: 'Atlas',
    path: '/models/model24chan104cls_synth/model.json',
    modelName: '\u{1FA93}\u{1F52A} Aparc+Aseg 104 (lesion scans)',
    colormapPath: './models/model24chan104cls_synth/colormap.json',
    webgpu_safetensor: './models/model24chan104cls_synth/model.safetensors',
    webgpu_runner: 'dkatlas24_synth', // dedicated runner; fp16 export uses the lossless conv-weight rescale (overflow-safe fast f16 GroupNorm)
    forceFP32: false, // false -> fp16 runner (dkatlas24_synth_runner.js + model.safetensors).
                      // true  -> fp32 runner (dkatlas24_synth_f32_runner.js + model_f32.safetensors).
    webgpuStorageSize: 1610612736,
    numClasses: 104,
    turbo: {
      webgpu_runner: 'dkatlas24_int8',
      quantize8Bit: true,
      forceFP32: false,
      webgpuStorageSize: 125829120,
      warning:
        '8-bit V4 Turbo Aparc+Aseg 104 for lesion scans (~3.3s on M1 WebGPU, ~3.4x faster than fp16, auto-scales down to 120 MiB max buffer on mobile WebGPU).'
    },
    preModelId: null, // No pre-model; run the full head like the CLI.
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true, // WebGL2 fallback needs this (texture limit); WebGPU ignores it and runs full volume.
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true, // synth104 trained with quantile normalization (catalyst pipeline) -- must match at inference (inference-webgpu.js / inference-logic.js). Do NOT set false.
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "This model may need a dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100,
    description:
      'Desikan-Killiany atlas parcellation into 104 regions (cortical + subcortical). A deep 24-channel gridding-free MeshNet with affine GroupNorm and GELU, synth-trained for robustness across data quality. Runs on WebGL2 and WebGPU (fp16 default, fp32 selectable).'
  },
] // inferenceModelsList
