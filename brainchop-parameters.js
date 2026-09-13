export { inferenceModelsList, brainChopOpts }

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
  fillSuppressedWithNeighborLabel: false, // If true, blobs dropped by the per-class "largest component" filter are repainted with their surrounding surviving label instead of background (adds one linear neighbour pass; applies to per-class models e.g. 3/8/9, 5/14, 1/7 — not the binary brain-mask path)
  diagnoseEnclosedComponents: false, // DEBUG: if true, log per-component stats (class, size, largest-of-class?, dominant neighbour & enclosure) for 104-class models to the console. Output-neutral; used to tune island absorption.
  isContoursViewEnable: false, // If true 3D contours of the labeled regions will apply
  browserArrayBufferMaxZDim: 30, // This value depends on Memory available
  telemetryFlag: false, // Ethical and transparent collection of browser usage while adhering to security and privacy standards
  chartXaxisStepPercent: 10, // percent from total labels on Xaxis
  uiSampleName: 'BC_UI_Sample', // Sample name used by interface
  atlasSelectedColorTable: 'Fire' // Select from ["Hot-and-Cold", "Fire", "Grayscale", "Gold", "Spectrum"]
}

// Inference Models, the ids must start from 1 in sequence
const inferenceModelsList = [
  {
    id: 1,
    type: 'Segmentation',
    path: '/models/model5_gw_ae/model.json',
    modelName: '\u26A1 Tissue GWM (light)',
    colormapPath: './models/model5_gw_ae/colormap3.json',
      webgpu_safetensor: './models/model5_gw_ae/model.safetensors', webgpu_runner: 'model5', //'model5_gw_ae',
          webgpuTTArunner: true,
    preModelId: null, // Model run first e.g.  crop the brain   { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 18, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning: null, // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Gray and white matter segmentation model. Operates on full T1 image in a single pass, but uses only 5 filters per layer. Can work on integrated graphics cards but is barely large enough to provide good accuracy. Still more accurate than the subvolume model.'
  },
  {
    id: 2,
    type: 'Brain_Extraction',
    path: '/models/mindgrab/model.json',
    modelName: '\u{1FA93}\u{1F9E0} omnimodal Skull Stripping',
    webgpu_safetensor: './models/mindgrab/model.safetensors',
      webgpu_runner: 'mindgrab',
      webgpuTTArunner: true,      
    webgpuStorageSize: 503316480, // 15 * 256^3 * 2 = 480 MiB largest full-volume fp16 activation buffer.
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
      'The omnimodal skull stripping model delivers high-accuracy brain extraction in seconds, supporting multiple imaging modalities including T1, T2, FLAIR, DWI, EPI, MRA, PDw, CT, and PET without a need for tuning. Its generated WebGPU runner stores full-volume activations in fp16, reducing the largest GPU buffer to 480 MiB without the former low-memory speed penalty.'
  },
  {
    // Default Subcortical + GWM: now backed by the deep gridding-free MeshNet
    // model16chan18cls (16 channels, 13 conv + 1x1, affine GroupNorm + GELU,
    // dilations -> 31 / RF=255). Lightest/fastest of the deep 18-class family;
    // the WebGPU build is good enough to be the default (replaces the old
    // model30chan18cls here). Same family as the Heavy variant (id 8).
    // Assets in public/models/model16chan18cls/:
    //   WebGPU fp16 : model16chan18cls_runner.js     + model.safetensors
    //   WebGPU fp32 : model16chan18cls_f32_runner.js + model_f32.safetensors
    //   WebGL2      : model.json (tfjs topology)      + model.bin
    id: 3,
    type: 'Atlas',
    path: '/models/model16chan18cls/model.json',
    modelName: '\u{1FA93} Subcortical + GWM',
    colormapPath: './models/model16chan18cls/colormap.json',
    webgpu_safetensor: './models/model16chan18cls/model.safetensors',
    webgpu_runner: 'model16chan18cls',
    forceFP32: false, // fp16 default; fp32 auto-used only if device lacks shader-f16 AND the _f32 runner exists.
    webgpuStorageSize: 536870912, // 16 * 256^3 * 2 = 512 MiB largest full-volume fp16 activation/classifier chunk buffer.
    numClasses: 18,
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
      'Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. A deep 16-channel gridding-free MeshNet (affine GroupNorm + GELU), synth-trained for robustness across data quality including varying saturation and clinical scans. The lightest/fastest of the Subcortical + GWM family.'
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
    // Primary 104-class DK-atlas model. Synth-trained 24ch/104cls gridding-free
    // MeshNet (affine GroupNorm + GELU), promoted into the canonical Aparc+Aseg 104
    // slot -- replaces the real-data model24chan104cls entry and the legacy
    // 21-channel model21_104class. Weights converted from catalyst
    // synth104_gn_hdc_deep_turbo24_fromreal. Full artifact set in
    // public/models/model24chan104cls_synth/:
    //   WebGPU fp16 : dkatlas24_synth_runner.js     + model.safetensors
    //   WebGPU fp32 : dkatlas24_synth_f32_runner.js + model_f32.safetensors
    //   WebGL2      : model.json (tfjs topology)     + model.bin
    id: 5,
    type: 'Atlas',
    path: '/models/model24chan104cls_synth/model.json',
    modelName: '\u{1FA93}\u{1F52A} Aparc+Aseg 104',
    colormapPath: './models/model24chan104cls_synth/colormap.json',
    webgpu_safetensor: './models/model24chan104cls_synth/model.safetensors',
    webgpu_runner: 'dkatlas24_synth', // dedicated runner; fp16 export uses the lossless conv-weight rescale (overflow-safe fast f16 GroupNorm)
    forceFP32: false, // false -> fp16 runner (dkatlas24_synth_runner.js + model.safetensors).
                      // true  -> fp32 runner (dkatlas24_synth_f32_runner.js + model_f32.safetensors).
    webgpuStorageSize: 1610612736,
    numClasses: 104,
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
  {
    id: 6,
    type: 'Divider',
    modelName: '-----------------',
    path: null
  },
  {
    // Experimental 24-channel version of the default 18-class model.
    // The WebGPU runner uses the proven tuned 24-channel backbone kernels from
    // dkatlas24 and this model's own 18-class classifier head. It measured
    // about 12.3 seconds on an M1 browser test. The matching rescaled fp16
    // weights are required by its fp16 GroupNorm kernels.
    // The scheduled graph's largest storage buffer is 1.5 GiB.
    id: 21,
    type: 'Atlas',
    path: '/models/model24chan18cls_gdice_prio/model.json',
    modelName: '\u{1FA93} Subcortical + GWM (24ch, experimental)',
    colormapPath: './models/model24chan18cls_gdice_prio/colormap.json',
    webgpu_safetensor: './models/model24chan18cls_gdice_prio/model.safetensors',
    webgpu_runner: 'model24chan18cls_gdice_prio',
    forceFP32: false,
    webgpuStorageSize: 1610612736,
    numClasses: 18,
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
      "Experimental candidate. WebGPU requires a device with 1.5 GiB storage-buffer support and may need a dedicated graphics card. For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100,
    description:
      'Experimental parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. A deep 24-channel gridding-free MeshNet (affine GroupNorm + GELU), retrained with a priority-weighted generalized-Dice loss (validation macro-dice ~0.865; independent MRN macro-dice ~0.861).'
  },
  {
    // CAT-inspired experiment. The runner returns grouped GM, WM and CSF priors.
    // cat-lite.js then fits the subject's normalized T1 with pure and mixed
    // tissue classes. This is neural-assisted and is NOT a CAT12 result.
    id: 23,
    type: 'Probability_Map',
    path: '/models/model24chan18cls_gdice_prio/model.json',
    modelName: '\u{1F9E0} Gray-matter CAT-lite PVE (24ch, experimental)',
    webgpu_safetensor: './models/model24chan18cls_gdice_prio/model.safetensors',
    webgpu_runner: 'model24chan18cls_gdice_prio_probability',
    forceFP32: false,
    webgpuOnly: true,
    webgpuStorageSize: 1610612736,
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
    probabilityColormap: 'gray',
    // A light-gray overlay ramp avoids the dark false edge made by compositing
    // ordinary black-to-white gray probabilities over naturally bright WM,
    // while retaining probability-dependent contrast for the 3D view.
    probabilityDisplayEncoding: 'light-gray-overlay',
    // The wider ramp restores depth cues in volume rendering; reduced alpha
    // keeps mid-probability gray from drawing a dark band over bright T1 WM.
    probabilityOverlayFloor: 128,
    probabilityOverlayAlpha: 48,
    probabilityDisplayMin: 0.03,
    // CAT-lite is much easier to inspect without a bright anatomical volume
    // competing with it. main.js applies this temporarily and restores the
    // user's previous underlay opacity on the next non-probability result.
    probabilityUnderlayOpacity: 0.05,
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
    catLiteKeepLargestComponent: true,
    catLiteComponentThreshold: 0.03,
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
      "Experimental neural-assisted mixed-class partial-volume estimate, not CAT12. WebGPU with shader-f16 and 1.5 GiB storage-buffer support is required.",
    inferenceDelay: 100,
    description:
      'CAT-inspired gray-matter partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce the displayed continuous GM fraction. Experimental and not a CAT12 result.'
  },
  {
    id: 7,
    type: 'Segmentation',
    path: '/models/model_sae16ch3_tfjs/model.json',
    modelName: '\u{1FA93} Tissue GWM',
    colormapPath: './models/model_sae16ch3_tfjs/colormap.json',
    webgpu_safetensor: './models/model_sae16ch3_tfjs/model.safetensors', webgpu_runner: 'robust_tissue', // 'model21_104class',
    webgpuTTArunner: true,
    preModelId: null, // Model run first e.g.  crop the brain   { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    webglEnableTranspose: false, // WebGL-only override: this model's tfjs export expects the UNtransposed orientation (unlike its WebGPU safetensors export, which needs enableTranspose:true). With transpose on, the WebGL segmentation degrades to noise. WebGPU is unaffected by this flag.
    enableCrop: false, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 10, // Padding size add to cropped brain
      inputPermutation: null, // [0, 1, 2] etc. Overrides enableTranspose if set.
      outputPermutation: null, // Inverse of inputPermutation.
    outputShift: [0, 0, 0], // No shift: matches the (correct) WebGPU display. outputShift is a WebGL-only correction (restoreToOriginalSize); the WebGPU path ignores it, so a non-zero value here desyncs WebGL from WebGPU by that many voxels. [Row, Col, Depth]
    forceFP32: false, // Force float32 precision for better quality
    ttaFlipAxis: 0, // Axis to flip for TTA (1 = Depth/Width depending on transpose)
    autoThreshold: 0.2, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: true, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Omnimodal gray and white matter segmentation model using SpatialAE architecture with swish activation. Operates on full T1 image in a single pass but needs a dedicated graphics card to operate.'
  },
  {
    // Subcortical + GWM (Heavy): the deep gridding-free MeshNet model32chan18cls
    // (32 channels, 13 conv + 1x1, affine GroupNorm + GELU, dilations -> 31 / RF=255),
    // same architecture family as the Aparc+Aseg 104 model. Higher capacity than the
    // default model30chan18cls (id 3), but offered as an opt-in "Heavy" choice.
    // The optimized fp16 graph materializes 32-channel activations and reuses
    // dead buffers, halving its largest binding from 2 GiB to 1 GiB.
    // Assets in public/models/model32chan18cls/:
    //   WebGPU fp16 : model32chan18cls_runner.js     + model.safetensors     (present; optimized low-memory graph)
    //   WebGPU fp32 : model32chan18cls_f32_runner.js + model_f32.safetensors  (pending)
    //   WebGL2      : model.json (tfjs topology)      + model.bin             (present)
    id: 8,
    type: 'Atlas',
    path: '/models/model32chan18cls/model.json',
    modelName: '\u{1FA93} Subcortical + GWM (Heavy)',
    colormapPath: './models/model32chan18cls/colormap.json',
    webgpu_safetensor: './models/model32chan18cls/model.safetensors',
    webgpu_runner: 'model32chan18cls',
    forceFP32: false, // fp16 default; fp32 auto-used only if device lacks shader-f16 AND the _f32 runner exists.
    webgpuStorageSize: 1073741824, // 32 * 256^3 * 2 = 1 GiB largest full-volume fp16 activation buffer.
    numClasses: 18,
    preModelId: null, // gridding-free (RF=255): full head, no pre-model/crop on WebGPU.
    preModelPostProcess: false,
    isBatchOverlapEnable: false,
    numOverlapBatches: 0,
    enableTranspose: true,
    enableCrop: true, // WebGL2 fallback only (texture limit); WebGPU runs the full volume.
    cropPadding: 20,
    autoThreshold: 0,
    enableQuantileNorm: true, // model32chan18cls trained with quantile normalization -- must match at inference. Do NOT set false.
    filterOutWithPreMask: false,
    enableSeqConv: true,
    textureSize: 0,
    warning:
      "Heavy model: needs a dedicated graphics card and is slower than the default Subcortical + GWM. For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100,
    description:
      'Higher-capacity subcortical + gray/white matter parcellation (17 regions) using a deep 32-channel gridding-free MeshNet (affine GroupNorm + GELU). More robust but heavier than the default Subcortical + GWM (id 3). Uses an optimized low-memory WebGPU fp16 graph with a TensorFlow.js WebGL2 fallback.'
  },
  {
    id: 10,
    type: 'Brain_Extraction',
    path: '/models/model5_gw_ae/model.json',
    modelName: '\u26A1 Extract the Brain (FAST)',
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 18, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning: null, // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Extract the brain fast model operates on full T1 image in a single pass, but uses only 5 filters per layer. Can work on integrated graphics cards but is barely large enough to provide good accuracy. Still more accurate than the failsafe version.'
  },
  {
    id: 11,
    type: 'Brain_Extraction',
    path: '/models/model11_gw_ae/model.json',
    modelName: '\u{1F52A} Extract the Brain (High Acc, Slow)',
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: true, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Extract the brain high accuracy model operates on full T1 image in a single pass, but uses only 11 filters per layer. Can work on dedicated graphics cards. Still more accurate than the fast version.'
  },
  {
    id: 12,
    type: 'Brain_Masking',
    path: '/models/model5_gw_ae/model.json',
    modelName: '\u26A1 Brain Mask (FAST)',
    colormapPath: './models/model5_gw_ae/colormap.json',
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 17, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning: null, // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'This fast masking model operates on full T1 image in a single pass, but uses only 5 filters per layer. Can work on integrated graphics cards but is barely large enough to provide good accuracy. Still more accurate than failsafe version.'
  },
  {
    id: 13,
    type: 'Brain_Masking',
    path: '/models/model11_gw_ae/model.json',
    modelName: '\u{1F52A} Brain Mask (High Acc, Low Mem)',
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: true, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: true, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'This masking model operates on full T1 image in a single pass, but uses 11 filters per layer. Can work on dedicated graphics cards. Still more accurate than fast version.'
  },
] // inferenceModelsList
