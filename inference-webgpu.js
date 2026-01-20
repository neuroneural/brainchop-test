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

// Helper to safely setup the network
async function setupNetwork(device, modelEntry, callbackUI) {
    let runnerName = modelEntry.webgpu_runner;
    let weightsPath = modelEntry.webgpu_safetensor;

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

        if (device.limits && device.limits.maxStorageBufferBindingSize < requiredStorageBuffer) {
            const limitMB = (device.limits.maxStorageBufferBindingSize / (1024 * 1024)).toFixed(0);
            const requiredMB = (requiredStorageBuffer / (1024 * 1024)).toFixed(0);
            console.warn(`[WebGPU] maxStorageBufferBindingSize (${limitMB} MB) is less than required (${requiredMB} MB). Inference may fail.`);
            // Low memory on Windows is a common failure cause.
            callbackUI(`Warning: Device storage buffer limit (${limitMB} MB) is low (needs ${requiredMB} MB).`, -1);
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

        const execute = await setupNetwork(device, modelEntry, callbackUI);

        if (typeof execute !== 'function') {
            throw new Error(
                `setupNet for '${modelEntry.webgpu_runner}' didn't return a function. ` +
                `Returned type: ${typeof execute}`
            );
        }

        callbackUI('Running inference...', 0.5);
        const inferenceResultArray = await execute(inputData);

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
