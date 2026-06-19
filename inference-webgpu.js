import * as tf from '@tensorflow/tfjs';
import {
    quantileNormalizeVolumeData,
    minMaxNormalizeVolumeData,
    processSegmentationVolume
} from './tensor-utils.js';
import {
    createStatData,
    addLabelStats,
    markSuccess,
    markFailure,
    ExecutionModes
} from './diagnostic-stats.js';

// Use relative paths and eager loading for better error detection
const runnerModules = import.meta.glob('./webgpu_runners/*_runner.js', { eager: true });

// Helper to get available runners for debugging
function getAvailableRunners() {
    return Object.keys(runnerModules).map(path => {
        const match = path.match(/\/([^\/]+)_runner\.js$/);
        return match ? match[1] : null;
    }).filter(Boolean);
}

// Helper to find runner module with flexible matching
function findRunnerModule(runnerName) {
    // Try exact path first
    const exactPath = `./webgpu_runners/${runnerName}_runner.js`;
    if (runnerModules[exactPath]) {
        return runnerModules[exactPath];
    }

    // Try case-insensitive match
    const lowerName = runnerName.toLowerCase();
    for (const [path, module] of Object.entries(runnerModules)) {
        if (path.toLowerCase().includes(`/${lowerName}_runner.js`)) {
            return module;
        }
    }

    // Try partial match (in case runnerName doesn't include full name)
    for (const [path, module] of Object.entries(runnerModules)) {
        if (path.includes(runnerName)) {
            return module;
        }
    }

    return null;
}

// Strict existence check for a runner (exact name only, no partial matching) --
// used to decide whether an fp32 variant is actually available before switching.
function runnerExists(runnerName) {
    const exact = `./webgpu_runners/${runnerName}_runner.js`;
    if (runnerModules[exact]) return true;
    const lowerSuffix = `/${runnerName.toLowerCase()}_runner.js`;
    return Object.keys(runnerModules).some(p => p.toLowerCase().endsWith(lowerSuffix));
}

// Helper to safely setup the network
async function setupNetwork(device, modelEntry, callbackUI) {
    let runnerName = modelEntry.webgpu_runner;
    let weightsPath = modelEntry.webgpu_safetensor;

    // --- FP16 / FP32 SELECTION (capability-based) ---
    // Default WebGPU runners are fp16 (smaller weights, lower peak memory, faster).
    // The fp32 runner + weights are exported alongside as `<name>_f32`. We use fp32
    // when EITHER:
    //   1. the model entry forces it (forceFP32: true), an explicit manual override; OR
    //   2. the device does not support the `shader-f16` feature. The fp16 runner's
    //      WGSL declares `enable f16;` and uses array<f16>, so without that feature its
    //      compute pipelines fail to create. In that case we auto-switch to fp32 --
    //      but only if an fp32 runner actually exists. If no fp32 variant is available
    //      we leave the default runner in place; it will fail and main.js falls back
    //      to the WebGL2 worker.
    const f16Supported = !!(device.features && device.features.has && device.features.has('shader-f16'));
    let useF32 = false;

    if (modelEntry.forceFP32) {
        useF32 = true;
        console.log('[WebGPU] forceFP32: using fp32 runner and weights.');
    } else if (!f16Supported) {
        if (runnerExists(`${runnerName}_f32`)) {
            useF32 = true;
            console.log('[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.');
            callbackUI('fp16 not supported - using fp32 WebGPU runner.', 0.05);
        } else {
            console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${runnerName}_f32') available; ` +
                `the fp16 runner will likely fail and fall back to WebGL2.`);
        }
    }

    if (useF32) {
        runnerName = `${runnerName}_f32`;
        weightsPath = weightsPath.replace('.safetensors', '_f32.safetensors');
    }

    // --- TTA SUPPORT LOGIC ---
    if (modelEntry.enableTTA && modelEntry.webgpuTTArunner) {
        console.log(`[WebGPU] TTA Enabled: Switching to TTA runner and weights.`);
        runnerName = `${runnerName}_tta`;
        // Assumption: TTA weights are in the same folder with '_tta' suffix before .safetensors
        weightsPath = weightsPath.replace('.safetensors', '_tta.safetensors');
    }

    const runnerModule = findRunnerModule(runnerName);

    if (!runnerModule) {
        const available = getAvailableRunners();
        throw new Error(
            `Runner '${runnerName}' not found. ` +
            `Available runners: ${available.join(', ') || 'none'}. ` +
            `Looking in: ./webgpu_runners/`
        );
    }

    // Validate the module has the expected export
    if (!runnerModule.setupNet && !runnerModule.default?.setupNet) {
        throw new Error(
            `Runner module '${runnerName}' doesn't export 'setupNet'. ` +
            `Exported keys: ${Object.keys(runnerModule).join(', ')}`
        );
    }

    // Try to fetch the weights file with error handling
    let weightsBuffer;
    try {
        const response = await fetch(weightsPath);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        weightsBuffer = await response.arrayBuffer();
    } catch (error) {
        throw new Error(
            `Failed to load weights from '${weightsPath}': ${error.message}`
        );
    }

    // Get setupNet function (handle both named and default exports)
    const setupNet = runnerModule.setupNet || runnerModule.default?.setupNet;

    // Setup the network with proper error context
    try {
        return await setupNet(device, new Uint8Array(weightsBuffer), callbackUI);
    } catch (error) {
        throw new Error(
            `Failed to setup network for '${runnerName}': ${error.message}`
        );
    }
}

export async function runInferenceWebGpu(device, opts, modelEntry, niftiHeader, niftiImage, callbackImg, callbackUI) {
    callbackUI('Starting WebGPU inference...', 0);
    const inferenceStartTime = performance.now();
    const statData = createStatData(modelEntry, ExecutionModes.WEBGPU);
    statData.isModelFullVol = true;

    let outLabelVolume; // To hold the tensor for final disposal
    let collectedBuffers = []; // Track WebGPU buffers for cleanup
    let originalCreateBuffer = null; // To restore the original method
    let oomScopeOpen = false; // True while an 'out-of-memory' error scope is pushed

    try {
        // Validate inputs
        if (!device) {
            throw new Error('WebGPU device is required but not provided');
        }

        if (!modelEntry?.webgpu_runner) {
            throw new Error('Model entry must specify webgpu_runner property');
        }

        if (!modelEntry?.webgpu_safetensor) {
            throw new Error('Model entry must specify webgpu_safetensor property');
        }

        // --- MEMORY LIMIT CHECK ---
        // Dynamically check if device supports the required storage buffer size for this model.
        // Default to ~320MB (model5) if not specified to be safe.
        const requiredStorageBuffer = modelEntry.webgpuStorageSize || 335544320;

        if (device.limits) {
            const toMB = (b) => (b / (1024 * 1024)).toFixed(0);
            const bindingLimit = device.limits.maxStorageBufferBindingSize ?? Infinity;
            const bufferLimit = device.limits.maxBufferSize ?? Infinity;
            // The model's largest activation is bound as a single storage buffer, so it
            // must fit BOTH maxStorageBufferBindingSize and maxBufferSize. If either is
            // below what we need, the allocation cannot succeed -- skip WebGPU now and
            // let main.js use the WebGL2 worker, rather than triggering a runtime OOM.
            if (bindingLimit < requiredStorageBuffer || bufferLimit < requiredStorageBuffer) {
                const limitMB = toMB(Math.min(bindingLimit, bufferLimit));
                const requiredMB = toMB(requiredStorageBuffer);
                const msg = `[WebGPU] Device buffer limit (${limitMB} MB) is below the ${requiredMB} MB this model needs - using WebGL2 fallback.`;
                console.warn(msg);
                callbackUI(msg, 0.1);
                throw new Error(msg); // propagates to main.js -> WebWorker fallback
            }
        }

        // --- PRE-PROCESSING: FULL VOLUME ---
        callbackUI('Preparing input data...', 0.1);

        let tensor = tf.tensor(niftiImage, [256, 256, 256], 'float32');
        const normalized_tensor = modelEntry.enableQuantileNorm
            ? await quantileNormalizeVolumeData(tensor)
            : await minMaxNormalizeVolumeData(tensor);
        tensor.dispose();
        tensor = normalized_tensor;

        if (modelEntry.inputPermutation) {
            console.log(`[WebGPU] Permuting Input: ${modelEntry.inputPermutation}`);
            const permuted_tensor = tensor.transpose(modelEntry.inputPermutation);
            tensor.dispose();
            tensor = permuted_tensor;
        } else if (modelEntry.enableTranspose) {
            const transposed_tensor = tensor.transpose();
            tensor.dispose();
            tensor = transposed_tensor;
        }

        const inputData = await tensor.data();
        const finalShape = tensor.shape;
        tensor.dispose();
        callbackUI('Input data prepared (full volume).', 0.3);

        // --- DYNAMIC RUNNER & INFERENCE ---
        callbackUI('Loading model runner...', 0.4);

        // Track resources for cleanup using a temporary shim
        // We shim createBuffer to track resources without using a Proxy (which caused issues on Windows)
        if (device) {
            originalCreateBuffer = device.createBuffer.bind(device);
            device.createBuffer = (descriptor) => {
                const buffer = originalCreateBuffer(descriptor);
                collectedBuffers.push(buffer);
                return buffer;
            };
        }

        // --- OUT-OF-MEMORY ERROR SCOPE ---
        // Buffer allocation (in setupNetwork) and the compute passes (in execute)
        // are where a GPU OOM actually happens. Some backends (notably Firefox's
        // experimental WebGPU on macOS) report a generous maxBufferSize/
        // maxStorageBufferBindingSize yet still fail to allocate this model's
        // large full-volume activation buffers at runtime. Without a scope the
        // failure surfaces only as "Uncaptured WebGPU error: Out of memory" spam
        // and an all-zeros result. Capturing it here lets us throw deterministically
        // so main.js falls back to the WebGL2 worker cleanly. The popErrorScope
        // call also awaits queue completion, so by the time it resolves the
        // inference has actually run on the GPU.
        device.pushErrorScope('out-of-memory');
        oomScopeOpen = true; // ensure the scope is balanced even if the steps below throw

        const execute = await setupNetwork(device, modelEntry, callbackUI);

        if (typeof execute !== 'function') {
            throw new Error(
                `setupNet for '${modelEntry.webgpu_runner}' didn't return a function. ` +
                `Returned type: ${typeof execute}`
            );
        }

        callbackUI('Running inference...', 0.5);
        const inferenceResultArray = await execute(inputData);

        // Pop the scope once we've finished issuing GPU work. popErrorScope resolves
        // after the queued allocations/passes complete, so a non-null result means a
        // real OOM occurred during this model's run.
        oomScopeOpen = false;
        const oomError = await device.popErrorScope();
        if (oomError) {
            // Firefox: large model exceeds what this backend can allocate.
            throw new Error(
                `WebGPU out of memory (${oomError.message || 'allocation failed'}) ` +
                `- falling back to WebGL2.`
            );
        }

        if (!inferenceResultArray || !Array.isArray(inferenceResultArray)) {
            throw new Error(
                `Inference didn't return expected array format. ` +
                `Returned: ${typeof inferenceResultArray}`
            );
        }

        const Inference_t = ((performance.now() - inferenceStartTime) / 1000).toFixed(4);
        callbackUI(`WebGPU inference took ${Inference_t}s.`, 0.9);

        // --- POST-PROCESSING ---
        console.log('Inference result shape:', inferenceResultArray[0]?.length);

        outLabelVolume = tf.tidy(() => {
            let volume = tf.tensor(inferenceResultArray[0], finalShape, 'int32');

            if (modelEntry.outputPermutation) {
                console.log(`[WebGPU] Permuting Output: ${modelEntry.outputPermutation}`);
                volume = volume.transpose(modelEntry.outputPermutation);
            } else if (modelEntry.enableTranspose) {
                volume = volume.transpose();
            }

            // Validation check
            const sum = tf.sum(volume).dataSync()[0];
            console.log('Segmentation volume sum:', sum);

            if (sum === 0) {
                throw new Error("Segmentation resulted in all zeros (empty volume).");
            }

            return volume;
        });

        const postProcessStartTime = performance.now();
        const finalImage = await processSegmentationVolume(outLabelVolume, niftiImage, modelEntry, opts);
        const Postprocess_t = ((performance.now() - postProcessStartTime) / 1000).toFixed(4);

        callbackImg(finalImage, opts, modelEntry);

        // Add label statistics from output
        const uniqueLabels = new Set(finalImage);
        const actualLabels = uniqueLabels.size;
        const expectedLabels = modelEntry.numClasses || actualLabels;
        addLabelStats(statData, expectedLabels, actualLabels);

        markSuccess(statData, Inference_t, Postprocess_t);

        callbackUI(modelEntry.modelName + '<br>Segmentation finished.', 1, '', statData);

    } catch (error) {
        console.error("WebGPU Inference Error:", error);

        // If we threw while an OOM error scope was still open (e.g. setupNetwork or
        // execute failed before we popped it), pop it now so the scope stays balanced
        // and the captured error doesn't leak onto the device's uncaptured-error path.
        if (oomScopeOpen && device) {
            oomScopeOpen = false;
            try { await device.popErrorScope(); } catch (_) { /* device may be lost */ }
        }

        // Provide more specific error messages
        let errorMessage = error.message;
        if (error.message.includes('not found')) {
            errorMessage += '. Check that the runner file exists and the name matches.';
        } else if (error.message.includes('fetch')) {
            errorMessage += '. Check network connection and file paths.';
        } else if (error.message.includes('binding size')) {
            errorMessage += '. GPU memory limit exceeded.';
        }

        markFailure(statData, errorMessage, 'WebGPU inference failed');

        callbackUI('', -1, `WebGPU Error: ${errorMessage}`, statData);
        throw error; // Re-throw to trigger fallback in main.js
    } finally {
        // Clean up input tensor (it was disposed earlier but let's be safe if logic changes)
        // Clean up output tensor
        if (outLabelVolume) {
            outLabelVolume.dispose();
        }

        // Clean up WebGPU resources
        // Clean up WebGPU resources
        // Restore original createBuffer immediately
        if (originalCreateBuffer && device) {
            device.createBuffer = originalCreateBuffer;
        }

        // Clean up WebGPU resources
        if (collectedBuffers && collectedBuffers.length > 0) {
            // console.log(`Cleaning up ${collectedBuffers.length} WebGPU buffers...`);
            for (const buffer of collectedBuffers) {
                buffer.destroy();
            }
            collectedBuffers = [];
        }
    }
}
