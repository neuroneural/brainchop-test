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
      'The omnimodal skull stripping model delivers high-accuracy brain extraction in seconds, supporting multiple imaging modalities including T1, T2, FLAIR, DWI, EPI, MRA, PDw, CT, and PET without a need for tuning. It runs in a single pass with only 15 filters per layer, and is offered in high-memory/fast and low-memory/slow configurations. Use it today to improve and accelerate your brain extraction!'
  },
  {
    id: 3,
    type: 'Atlas',
    path: '/models/model30chan18cls/model.json',
    modelName: '\u{1FA93} Subcortical + GWM',
    colormapPath: './models/model30chan18cls/colormap.json',
      webgpu_safetensor: './models/model30chan18cls/model.safetensors', webgpu_runner: 'model30chan18cls',
      webgpuTTArunner: true,      
    preModelId: null, // Model run first e.g.  crop the brain  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 200, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    autoThreshold: 0.2, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. This is a robust model able to handle range of data quality, including varying saturation, and even clinical scans. It may work on infant brains, but your mileage may vary.'
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
  /* --- Old plain 'Aparc+Aseg 104' (model21_104class) replaced by the
     deep-robust 24-channel model promoted into this slot. Kept for
     reference / quick rollback. ---
  {
    id: 5,
    type: 'Atlas',
    path: '/models/model21_104class/model.json',
    modelName: '\u{1F52A} Aparc+Aseg 104',
    colormapPath: './models/model21_104class/colormap.json',
    webgpu_safetensor: './models/model21_104class/model.safetensors', webgpu_runner: 'model21', // 'model21_104class',
    preModelId: 1, // model run first e.g.  Brain_Extraction  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 200, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'FreeSurfer aparc+aseg atlas 104 parcellate brain areas into 104 regions. It contains a combination of the Desikan-Killiany atlas for cortical area and also segmentation of subcortical regions.'
  },
  */
  {
    id: 5,
    type: 'Atlas',
    path: '/models/model24chan104cls/model.json',
    modelName: '\u{1F52A} Aparc+Aseg 104',
    colormapPath: './models/model24chan104cls/colormap.json',
    // WebGPU (primary): fp16 runner + weights by default (dkatlas24_runner.js +
    // model.safetensors). The fp16 export now does a true-fp16 conversion --
    // f16-stored activations with f32 accumulators -- giving 123 compute passes and
    // a single submit. If WebGPU is unavailable, main.js falls back to the WebGL2
    // worker path automatically.
    webgpu_safetensor: './models/model24chan104cls/model.safetensors',
    webgpu_runner: 'dkatlas24',
    forceFP32: false, // false -> fp16 runner (dkatlas24_runner.js + model.safetensors).
                      // true  -> fp32 runner (dkatlas24_f32_runner.js + model_f32.safetensors).
    // Largest WebGPU storage buffer in the SHIPPED dkatlas24_runner.js is a
    // 24-channel full-volume CONV OUTPUT kept at *fp32*: 24 * 256^3 * 4 = 1.5 GiB
    // (buf_0 / data0_402653184:array<f32>). The fp16 export already stores the
    // GroupNorm/GELU outputs as f16, but each conv result is the tensor GroupNorm
    // reduces over, and tinygrad keeps that shared node at its native f32 -- so 11
    // full-volume f32 buffers remain (verify: grep -cE '_402653184:array<f32>'). A
    // plain re-export does NOT shrink this (the shipped runner already postdates the
    // fp16-activation fix). Reducing it needs tiny_meshnet.py to *materialize* the
    // conv output as f16 (cast + contiguous/realize before GroupNorm) then re-export
    // until that grep is 0 -> peak ~768 MiB, under Firefox's 1024 MiB cap. mindgrab
    // has the same pattern but at 15 ch (960 MiB f32) so it just fits; this 24-ch
    // model at 1.5 GiB does not. See ADD_DKATLAS24.md. This value matches the actual
    // allocation so the pre-emptive memory check is truthful and the OOM error-scope
    // fallback in inference-webgpu.js kicks in cleanly.
    webgpuStorageSize: 1610612736,
    numClasses: 104,
    // Gridding-free model: dilations ramp to 31 (RF = 255), matched to the full
    // 256^3 cube. On WebGPU it runs the full volume like brainchop-cli (no pre-model,
    // no crop) -- cropping would starve the large-dilation layers of context and
    // collapse the output. The WebGL2 fallback can't fit the full unpacked volume in
    // one texture (24*256^3 = ~20066^2 > the 16384 limit), so that path crops instead
    // (see enableCrop/cropPadding below).
    preModelId: null, // No pre-model; run the full head like the CLI.
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 0, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    // WebGL2 fallback only: must crop (texture limit above). cropPadding keeps some
    // background so per-channel GroupNorm stats stay close to the full-volume
    // distribution the model was trained on. WebGPU ignores crop and runs full volume.
    enableCrop: true, // WebGL2 fallback needs this (texture limit); WebGPU ignores it.
    cropPadding: 20, // Max practical margin: this model's RF is 255 (needs full 256^3 context), so
                     // give the cortex as much surrounding context as fits. Cube must stay <= ~223^3
                     // (16384^2/24 texels), so if you hit a texture error on a large head, lower this.
    autoThreshold: 0, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // This model is trained/validated with quantile normalization.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // WebGL2 fallback: cropped volume fits the fast (dense) path.
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Desikan-Killiany atlas parcellation into 104 regions (cortical + subcortical). A deeper 24-channel gridding-free MeshNet with affine GroupNorm and GELU that replaces the 21-channel model: more robust at the same peak activation memory. Runs on WebGL2 and WebGPU (fp16 default, fp32 selectable).'
  },
  {
    id: 6,
    type: 'Divider',
    modelName: '-----------------',
    path: null
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
    enableTranspose: false, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: false, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
      inputPermutation: null, // [0, 1, 2] etc. Overrides enableTranspose if set.
      outputPermutation: null, // Inverse of inputPermutation.
    outputShift: [0, 0, 1], // Manual shift correction [Row, Col, Depth]
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
    id: 8,
    type: 'Atlas',
    path: '/models/model18cls/model.json',
    modelName: '\u{1FA93} Subcortical + GWM (Small Model)',
    colormapPath: './models/model18cls/colormap.json',
    webgpu_safetensor: './models/model18cls/model.safetensors', webgpu_runner: 'model21chan18cls',
    preModelId: null, // model run first e.g.  Brain_Extraction  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 200, // Number of extra overlap batches for inference
    enableTranspose: true, // Keras and tfjs input orientation may need a tranposing step to be matched
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    autoThreshold: 0.2, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: true, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. This is a robust model able to handle range of data quality, including varying saturation, and even clinical scans. It may work on infant brains, but your mileage may vary.'
  },
  {
    id: 9,
    type: 'Atlas',
    path: '/models/model_sae32ch18_tfjs/model.json',
    modelName: '\u{1FA93} Subcortical + GWM (Large Model)',
    colormapPath: './models/model_sae32ch18_tfjs/colormap.json',
    webgpu_safetensor: './models/model_sae32ch18_tfjs/model.safetensors', webgpu_runner: 'robust_subcortical',
    webgpuTTArunner: true,
    preModelId: null, // model run first e.g.  Brain_Extraction  { null, 1, 2, ..  }
    preModelPostProcess: false, // If true, perform postprocessing to remove noisy regions after preModel inference generate output.
    isBatchOverlapEnable: false, // create extra overlap batches for inference
    numOverlapBatches: 200, // Number of extra overlap batches for inference
    enableTranspose: true, // Runner was exported with SAE_PERMUTE off, so transpose the input here to match (vs re-exporting with SAE_PERMUTE=1).
    enableCrop: true, // For speed-up inference, crop brain from background before feeding to inference model to lower memory use.
    cropPadding: 0, // Padding size add to cropped brain
    inputPermutation: null, // [0, 1, 2] etc. Overrides enableTranspose if set.
    outputPermutation: null, // Inverse of inputPermutation.
    outputShift: [0, 0, 1], // Manual shift correction [Row, Col, Depth]
    forceFP32: false, // Force float32 precision for better quality
    ttaFlipAxis: 0, // Axis to flip for TTA (1 = Depth/Width depending on transpose)      
    autoThreshold: 0.2, // Threshold between 0 and 1, given no preModel and tensor is normalized either min-max or by quantiles. Will remove noisy voxels around brain
    enableQuantileNorm: false, // Some models needs Quantile Normaliztion.
    filterOutWithPreMask: false, // Can be used to multiply final output with premodel output mask to crean noisy areas
    enableSeqConv: false, // For low memory system and low configuration, enable sequential convolution instead of last layer
    textureSize: 0, // Requested Texture size for the model, if unknown can be 0.
    warning:
      "This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.", // Warning message to show when select the model.
    inferenceDelay: 100, // Delay in ms time while looping layers applying.
    description:
      'Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. This is a larger capacity version of the 18-class model for potentially better robustness.'
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
