import {
    computeQuantiles,
    computeMinMax,
    linearScaleVolume,
    transposeVolume3D,
    transposeVolume3DToU8,
    countUniqueLabelsU8,
    validateVolumeStats
} from './tensor-utils.js';
import {
    createStatData,
    addLabelStats,
    markSuccess,
    markFailure,
    ExecutionModes
} from './diagnostic-stats.js';
import { isCatLite } from './cat-lite.js';
import { processSegmentationInWorker, runCatLiteInWorker } from './postprocess-client.js';
import { setupNet as setupNativeNet, nativeUnsupportedReason } from './webgpu_native/meshnet_gpu.js';
import * as fastV4Runner from './webgpu_runners/meshnet_fast_v4_runner.js';

// Hand-written WGSL kernels (webgpu_native/, ported from brainchopC) run first
// for FP16 label models that have a webgl2_runners/descriptors.js entry (when
// 8-bit Turbo is OFF); V4 (quantize8Bit) uses meshnet_fast_v4_runner.js, and
// ?webgpuKernels=tinygrad forces the tinygrad FP16 runner for A/B comparison.
const ENABLE_NATIVE_WEBGPU = true;

function nativeWebGpuDisabledReason() {
    if (!ENABLE_NATIVE_WEBGPU) return 'disabled (ENABLE_NATIVE_WEBGPU)';
    try {
        if (new URLSearchParams(globalThis.location?.search || '').get('webgpuKernels') === 'tinygrad') {
            return 'disabled by ?webgpuKernels=tinygrad';
        }
    } catch { /* no location (worker/test) */ }
    return null;
}

const FAST_V4_RUNNERS = new Set([
    'meshnet_fast_v4',
    'dkatlas24_int8',
    'mindmap24_int8',
    'model16chan18cls_int8',
    'mindgrab_int8',
]);

function isFastV4RunnerName(runnerName) {
    return FAST_V4_RUNNERS.has(runnerName);
}

// Keep only the active FP16/FP32 fallback runners referenced by
// brainchop-parameters.js in the production bundle; static V4 aliases resolve
// directly to fastV4Runner so Vite avoids emitting unused test-only runners.
const runnerModules = import.meta.glob([
    './webgpu_runners/mindgrab_runner.js',
    './webgpu_runners/model16chan18cls_runner.js',
    './webgpu_runners/model16chan18cls_f32_runner.js',
    './webgpu_runners/model24chan18cls_gdice_prio_runner.js',
    './webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js',
    './webgpu_runners/dkatlas24_synth_runner.js',
    './webgpu_runners/dkatlas24_synth_f32_runner.js',
]);

// Helper to get available runners for debugging
function getAvailableRunners() {
    const globNames = Object.keys(runnerModules).map(path => {
        const match = path.match(/\/([^\/]+)_runner\.js$/);
        return match ? match[1] : null;
    }).filter(Boolean);
    return Array.from(new Set([...FAST_V4_RUNNERS, ...globNames]));
}

// Helper to find runner module with flexible matching
function findRunnerModule(runnerName) {
    if (FAST_V4_RUNNERS.has(runnerName)) {
        return async () => fastV4Runner;
    }

    // Try exact path first
    const exactPath = `./webgpu_runners/${runnerName}_runner.js`;
    if (runnerModules[exactPath]) {
        return runnerModules[exactPath];
    }

    // Try case-insensitive match
    const lowerName = runnerName.toLowerCase();
    for (const v4Name of FAST_V4_RUNNERS) {
        if (v4Name.toLowerCase() === lowerName) {
            return async () => fastV4Runner;
        }
    }
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
    if (FAST_V4_RUNNERS.has(runnerName)) return true;
    const exact = `./webgpu_runners/${runnerName}_runner.js`;
    if (runnerModules[exact]) return true;
    const lowerName = runnerName.toLowerCase();
    for (const v4Name of FAST_V4_RUNNERS) {
        if (v4Name.toLowerCase() === lowerName) return true;
    }
    const lowerSuffix = `/${lowerName}_runner.js`;
    return Object.keys(runnerModules).some(p => p.toLowerCase().endsWith(lowerSuffix));
}

// Cast any F32 tensors in a safetensors byte buffer to F16, in-memory.
// This lets us ship a single fp32 "master" model.safetensors and still feed the
// fp16 runner, whose weight buffers are f16-typed and f16-sized (createWeightBuf
// copies raw bytes, so it needs f16 byte counts). The f32->f16 cast here is the
// same round-to-nearest the exporter's model.half() applies, so fp16 inference
// results are unchanged -- the benefit is one full-precision source of truth on
// disk (and a true-fp32 path for the _f32 runner) instead of a baked-lossy fp16
// file. No-op if the buffer is already fp16. Weights are small (a few MB), so the
// conversion is negligible.
function castSafetensorsToF16(bytes, callbackUI) {
    if (typeof Float16Array === 'undefined') {
        // Runners already require Float16Array (input upload); surface clearly
        // rather than silently corrupting weights.
        throw new Error('Float16Array unavailable: cannot cast fp32 master weights to fp16.');
    }
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const headerLen = Number(dv.getBigUint64(0, true));
    const header = JSON.parse(new TextDecoder('utf8').decode(bytes.subarray(8, 8 + headerLen)));
    const dataStart = 8 + headerLen;

    const hasF32 = Object.entries(header).some(([k, v]) => k !== '__metadata__' && v.dtype === 'F32');
    if (!hasF32) return bytes; // already fp16 (or nothing to convert): use as-is

    const newHeader = {};
    const chunks = [];
    let offset = 0;
    for (const [name, info] of Object.entries(header)) {
        if (name === '__metadata__') { newHeader[name] = info; continue; }
        const [start, end] = info.data_offsets;
        const raw = bytes.subarray(dataStart + start, dataStart + end);
        let outBytes, dtype;
        if (info.dtype === 'F32') {
            const f32 = new Float32Array(raw.slice().buffer); // .slice() guarantees 4-byte alignment
            const f16 = new Float16Array(f32);                // value-preserving f32 -> f16
            outBytes = new Uint8Array(f16.buffer);
            dtype = 'F16';
        } else {
            outBytes = raw; dtype = info.dtype;               // pass through F16/I32/etc.
        }
        newHeader[name] = { dtype, shape: info.shape, data_offsets: [offset, offset + outBytes.byteLength] };
        chunks.push(outBytes);
        offset += outBytes.byteLength;
    }

    const headerBytes = new TextEncoder().encode(JSON.stringify(newHeader));
    const pad = (8 - (headerBytes.byteLength % 8)) % 8; // safetensors header is padded to 8 bytes
    const out = new Uint8Array(8 + headerBytes.byteLength + pad + offset);
    new DataView(out.buffer).setBigUint64(0, BigInt(headerBytes.byteLength + pad), true);
    out.set(headerBytes, 8);
    out.fill(0x20, 8 + headerBytes.byteLength, 8 + headerBytes.byteLength + pad); // pad with spaces
    let p = 8 + headerBytes.byteLength + pad;
    for (const c of chunks) { out.set(c, p); p += c.byteLength; }
    console.log('[WebGPU] Cast fp32 master weights -> fp16.');
    return out;
}

// --- SAFARI WEBGPU DIAGNOSTICS ---
// Dumps the *granted* device's features + key limits and the UA string with a
// greppable [SAFARI-DEBUG] tag. main.js logs the adapter at creation; this logs
// what the device we actually run on ended up with, per model load. Purely
// observational -- no behavior change. Pair with window.BC_WEBGPU_DEBUG=true to
// also get the pre-argmax logits readback inside the runner (NaN/Inf/min/max),
// which distinguishes fp16-overflow-NaN from equality-argmax fallthrough as the
// cause of the "fully filled cube" on Safari/Tahoe.
function logDeviceCapabilities(device, modelEntry) {
    try {
        const f = (name) => !!(device.features && device.features.has && device.features.has(name));
        const lim = device.limits || {};
        const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || 'unknown';
        const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Android/.test(ua);
        console.log('[SAFARI-DEBUG] ===== WebGPU device capabilities =====');
        console.log('[SAFARI-DEBUG] model:', modelEntry?.modelName || modelEntry?.webgpu_runner || '(unknown)');
        console.log('[SAFARI-DEBUG] userAgent:', ua, '| classified Safari:', isSafari);
        console.log('[SAFARI-DEBUG] shader-f16:', f('shader-f16'));
        console.log('[SAFARI-DEBUG] features:', device.features ? Array.from(device.features) : '(none)');
        console.log('[SAFARI-DEBUG] limits:', {
            maxBufferSize: lim.maxBufferSize,
            maxStorageBufferBindingSize: lim.maxStorageBufferBindingSize,
            maxComputeInvocationsPerWorkgroup: lim.maxComputeInvocationsPerWorkgroup,
            maxComputeWorkgroupSizeX: lim.maxComputeWorkgroupSizeX,
            maxComputeWorkgroupSizeY: lim.maxComputeWorkgroupSizeY,
            maxComputeWorkgroupSizeZ: lim.maxComputeWorkgroupSizeZ,
            maxComputeWorkgroupsPerDimension: lim.maxComputeWorkgroupsPerDimension
        });
        console.log('[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):',
            (typeof window !== 'undefined' && !!window.BC_WEBGPU_DEBUG));
        console.log('[SAFARI-DEBUG] =======================================');
    } catch (e) {
        console.warn('[SAFARI-DEBUG] capability dump failed:', e?.message);
    }
}

export function yieldForPaint() {
    if (typeof requestAnimationFrame !== 'function') {
        return new Promise((resolve) => setTimeout(resolve, 0));
    }
    return new Promise((resolve) => {
        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            resolve();
        };
        const fallback = setTimeout(finish, 25);
        requestAnimationFrame(() => {
            clearTimeout(fallback);
            setTimeout(finish, 0);
        });
    });
}

// Helper to safely setup the network
const RAW_WEIGHTS_CACHE_MAX = 6;
const WEIGHTS_CACHE_MAX = 4;
const rawWeightsCache = new Map();
const inflightRawWeights = new Map();
const weightsByteCache = new Map();
const activeRunnerByDevice = new WeakMap();
const warmedDevices = new WeakSet();

export function releaseWebGpuWorkspace(device) {
    fastV4Runner.releaseV4Workspace(device);
}

export async function warmupWebGpuRunners(device) {
    if (!device || warmedDevices.has(device)) return;
    warmedDevices.add(device);
    try {
        await fastV4Runner.warmupV4CorePipelines(device);
    } catch (err) {
        warmedDevices.delete(device);
        console.debug('[WebGPU] Background pipeline warmup skipped:', err?.message || err);
    }
}

function disposeRunnerEntry(entry, { keepSharedWorkspace = false } = {}) {
    if (!entry) return;
    try {
        if (typeof entry.execute?.dispose === 'function') {
            entry.execute.dispose({ keepSharedWorkspace });
        } else if (entry.ownedBuffers) {
            for (const buffer of entry.ownedBuffers) {
                buffer.destroy();
            }
        }
    } catch (err) {
        console.warn('[WebGPU] Failed to dispose cached runner buffers:', err);
    }
}

function buildRunnerKey(kernelTier, runnerName, weightsPath, modelEntry) {
    return JSON.stringify([
        kernelTier,
        runnerName,
        weightsPath,
        modelEntry.id ?? null,
        modelEntry.numClasses ?? null,
        modelEntry.outputType ?? null,
        modelEntry.dilations ?? null,
        modelEntry.activation ?? null,
        modelEntry.quantize8Bit ?? null,
        modelEntry.forceFP32 ?? null,
        modelEntry.disableF16 ?? null,
        modelEntry.disableSubgroups ?? null,
        modelEntry.disableConeSkip ?? null,
        modelEntry.forceLowMem128 ?? null,
        modelEntry.webgpuExecMode ?? null,
        modelEntry.softmaxTemperature ?? null,
        modelEntry.brainSupportTemperature ?? null,
        modelEntry.brainSupportPower ?? null,
        modelEntry.partialVolumeSigma ?? null,
        modelEntry.probabilityGroups ?? null,
        modelEntry.probabilityDisplay ?? null,
        modelEntry.classifierBias ?? null
    ]);
}

function fetchRawWeightsBytes(weightsPath) {
    const cached = rawWeightsCache.get(weightsPath);
    if (cached) {
        rawWeightsCache.delete(weightsPath);
        rawWeightsCache.set(weightsPath, cached);
        return Promise.resolve(cached);
    }
    const inflight = inflightRawWeights.get(weightsPath);
    if (inflight) return inflight;
    const p = (async () => {
        let weightsBuffer;
        try {
            const response = await fetch(weightsPath);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            weightsBuffer = await response.arrayBuffer();
        } catch (error) {
            throw new Error(`Failed to load weights from '${weightsPath}': ${error.message}`);
        }
        const weights = new Uint8Array(weightsBuffer);
        rawWeightsCache.set(weightsPath, weights);
        while (rawWeightsCache.size > RAW_WEIGHTS_CACHE_MAX) {
            const oldestKey = rawWeightsCache.keys().next().value;
            rawWeightsCache.delete(oldestKey);
        }
        return weights;
    })().finally(() => {
        inflightRawWeights.delete(weightsPath);
    });
    inflightRawWeights.set(weightsPath, p);
    return p;
}

function prepareWeightsBytes(rawWeights, weightsPath, needsF16Cast, callbackUI) {
    if (!needsF16Cast) return rawWeights;
    const cached = weightsByteCache.get(weightsPath);
    if (cached) {
        weightsByteCache.delete(weightsPath);
        weightsByteCache.set(weightsPath, cached);
        return cached;
    }
    // fp16 runner: if the file holds fp32 master weights, cast to fp16 now
    // (no-op when the file is already fp16). Native/f32/V4 runners handle F32 directly.
    const weights = castSafetensorsToF16(rawWeights, callbackUI);
    weightsByteCache.set(weightsPath, weights);
    while (weightsByteCache.size > WEIGHTS_CACHE_MAX) {
        const oldestKey = weightsByteCache.keys().next().value;
        weightsByteCache.delete(oldestKey);
    }
    return weights;
}

async function runWithBufferTracking(device, fn) {
    const buffers = [];
    const origCreateBuffer = device.createBuffer.bind(device);
    device.createBuffer = (descriptor) => {
        const buffer = origCreateBuffer(descriptor);
        buffers.push(buffer);
        return buffer;
    };
    try {
        return { result: await fn(), buffers };
    } finally {
        device.createBuffer = origCreateBuffer;
    }
}

function sumBufferBytes(buffers) {
    let total = 0;
    for (const buf of buffers) {
        total += Number(buf?.size) || 0;
    }
    return total;
}

function destroyBuffers(buffers) {
    for (const buf of buffers) {
        try { buf.destroy(); } catch (_) {}
    }
}

async function setupNetwork(device, modelEntry, callbackUI) {
    const nativeReason = nativeWebGpuDisabledReason() ?? nativeUnsupportedReason(device, modelEntry);

    let runnerName = modelEntry.webgpu_runner;
    let weightsPath = modelEntry.webgpu_safetensor;

    // --- FP16 / FP32 SELECTION (capability-based) ---
    // Default WebGPU runners are fp16 (smaller weights, lower peak memory, faster).
    // The fp32 runner + weights are exported alongside as `<name>_f32`. We use fp32
    // when EITHER:
    //   1. the model entry forces it (forceFP32: true), an explicit manual override; OR
    //   2. the device does not support the `shader-f16` feature.
    const f16Supported = !!(device.features && device.features.has && device.features.has('shader-f16'));
    let useF32 = false;

    if (nativeReason) {
        if (modelEntry.forceFP32) {
            useF32 = true;
            console.log('[WebGPU] forceFP32: using fp32 runner and weights.');
        } else if (!f16Supported && runnerExists(`${runnerName}_f32`)) {
            useF32 = true;
            console.log('[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.');
        }

        if (useF32) {
            runnerName = `${runnerName}_f32`;
            weightsPath = weightsPath.replace('.safetensors', '_f32.safetensors');
        }

        // --- TTA SUPPORT LOGIC ---
        if (modelEntry.enableTTA && modelEntry.webgpuTTArunner) {
            console.log(`[WebGPU] TTA Enabled: Switching to TTA runner and weights.`);
            runnerName = `${runnerName}_tta`;
            weightsPath = weightsPath.replace('.safetensors', '_tta.safetensors');
        }
    }

    const kernelTier = nativeReason ? 'runner' : 'native';
    const runnerKey = buildRunnerKey(
        kernelTier,
        nativeReason ? runnerName : 'webgpu_native',
        weightsPath,
        modelEntry
    );
    const cached = activeRunnerByDevice.get(device);
    if (cached && cached.runnerKey === runnerKey) {
        return { ...cached, cacheHit: true };
    }

    const nextIsFastV4 = Boolean(nativeReason && isFastV4RunnerName(runnerName));
    callbackUI('Loading model\u2026', 0.1);

    // Dispose previous model's GPU buffers before allocating the next model so peak GPU memory never doubles.
    if (cached) {
        activeRunnerByDevice.delete(device);
        disposeRunnerEntry(cached, { keepSharedWorkspace: nextIsFastV4 });
    }
    if (!nextIsFastV4) {
        fastV4Runner.releaseV4Workspace(device);
    }

    logDeviceCapabilities(device, modelEntry);

    if (!nativeReason) {
        let nativeBuffers = [];
        try {
            const weights = await fetchRawWeightsBytes(weightsPath);
            const tracked = await runWithBufferTracking(
                device,
                () => setupNativeNet(device, weights, callbackUI, modelEntry)
            );
            nativeBuffers = tracked.buffers;
            const execute = tracked.result;
            execute.kernels = 'hand-written';
            const entry = {
                runnerKey,
                runnerName: 'webgpu_native',
                weightsPath,
                execute,
                supportsGpuNativeIO: false,
                ownedBuffers: nativeBuffers,
                gpuBytes: sumBufferBytes(nativeBuffers),
            };
            activeRunnerByDevice.set(device, entry);
            console.log('[WebGPU-native] Using hand-written WebGPU kernels.');
            return { ...entry, cacheHit: false };
        } catch (error) {
            destroyBuffers(nativeBuffers);
            console.warn('[WebGPU-native] falling back to the tinygrad runner:', error?.message || error);
        }
    } else {
        console.log(`[WebGPU-native] not used for ${modelEntry.modelName || modelEntry.webgpu_runner}: ${nativeReason}`);
    }

    const loadRunner = nextIsFastV4 ? async () => fastV4Runner : findRunnerModule(runnerName);

    if (!loadRunner) {
        const available = getAvailableRunners();
        throw new Error(
            `Runner '${runnerName}' not found. ` +
            `Available runners: ${available.join(', ') || 'none'}. ` +
            `Looking in: ./webgpu_runners/`
        );
    }

    const [runnerModule, rawWeights] = await Promise.all([
        loadRunner(),
        fetchRawWeightsBytes(weightsPath),
    ]);

    // Validate the module has the expected export
    if (!runnerModule.setupNet && !runnerModule.default?.setupNet) {
        throw new Error(
            `Runner module '${runnerName}' doesn't export 'setupNet'. ` +
            `Exported keys: ${Object.keys(runnerModule).join(', ')}`
        );
    }

    const supportsF32Fallback = !!(runnerModule.supportsF32Fallback ?? runnerModule.default?.supportsF32Fallback);
    const supportsGpuNativeIO = !!(runnerModule.supportsGpuNativeIO ?? runnerModule.default?.supportsGpuNativeIO);
    if (!useF32 && !f16Supported && !supportsF32Fallback) {
        console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${runnerName}_f32') available; ` +
            `the fp16 runner will likely fail and fall back to WebGL2.`);
    }

    const needsF16Cast = !useF32 && !supportsF32Fallback;
    const weights = prepareWeightsBytes(rawWeights, weightsPath, needsF16Cast, callbackUI);

    // Get setupNet function (handle both named and default exports)
    const setupNet = runnerModule.setupNet || runnerModule.default?.setupNet;

    let setupBuffers = [];
    try {
        // Generated runners ignore the fourth argument. Probability-map runners
        // use it for softmax temperature, tissue grouping, and display choice.
        const tracked = await runWithBufferTracking(
            device,
            () => setupNet(device, weights, callbackUI, modelEntry)
        );
        setupBuffers = tracked.buffers;
        const execute = tracked.result;
        if (typeof execute !== 'function') {
            destroyBuffers(setupBuffers);
            throw new Error(
                `setupNet for '${runnerName}' didn't return a function. ` +
                `Returned type: ${typeof execute}`
            );
        }
        const entry = {
            runnerKey,
            runnerName,
            weightsPath,
            execute,
            supportsGpuNativeIO,
            ownedBuffers: typeof execute.dispose === 'function' ? null : setupBuffers,
            gpuBytes: typeof execute.gpuBytes === 'function' ? execute.gpuBytes() : sumBufferBytes(setupBuffers),
        };
        activeRunnerByDevice.set(device, entry);
        return { ...entry, cacheHit: false };
    } catch (error) {
        if (nextIsFastV4) {
            fastV4Runner.releaseV4Workspace(device);
        }
        destroyBuffers(setupBuffers);
        const wrapped = new Error(
            `Failed to setup network for '${runnerName}': ${error.message}`,
            { cause: error }
        );
        if (error?.oomError) wrapped.oomError = error.oomError;
        throw wrapped;
    }
}

export async function runInferenceWebGpu(device, opts, modelEntry, niftiHeader, niftiImage, callbackImg, callbackUI) {
    const isProbabilityOutput = modelEntry.outputType === 'probability';
    console.log('Starting WebGPU inference...');
    callbackUI(isProbabilityOutput ? 'Starting tissue estimation\u2026' : 'Starting segmentation\u2026', 0);
    const statData = createStatData(modelEntry, ExecutionModes.WEBGPU);
    statData.isModelFullVol = true;

    let oomScopeOpen = false; // True while an 'out-of-memory' error scope is pushed
    let activeEntry = null;
    const catLite = isCatLite(modelEntry);

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
                throw new Error(msg); // propagates to main.js -> WebWorker fallback
            }
        }

        // --- OUT-OF-MEMORY ERROR SCOPE ---
        // Buffer allocation (in setupNetwork) and the compute passes (in execute)
        // are where a GPU OOM actually happens. Some backends (notably Firefox's
        // experimental WebGPU on macOS) report a generous maxBufferSize/
        // maxStorageBufferBindingSize yet still fail to allocate this model's
        // large full-volume activation buffers at runtime.
        device.pushErrorScope('out-of-memory');
        oomScopeOpen = true; // ensure the scope is balanced even if the steps below throw

        // --- NETWORK SETUP (with warm runner & weights cache) ---
        const setupStart = performance.now();
        activeEntry = await setupNetwork(device, modelEntry, callbackUI);
        const Setup_t = ((performance.now() - setupStart) / 1000).toFixed(4);

        // --- PRE-PROCESSING: FULL VOLUME ---
        const prepStart = performance.now();
        callbackUI('Preparing volume\u2026', 0.25);

        const CONFORMED_SHAPE = [256, 256, 256];
        const useGpuNativeInput =
            activeEntry.supportsGpuNativeIO && !!modelEntry.enableTranspose && !modelEntry.inputPermutation;
        const useGpuNativeOutput =
            activeEntry.supportsGpuNativeIO && !!modelEntry.enableTranspose && !modelEntry.outputPermutation;

        let normOffset;
        let normRange;
        if (modelEntry.enableQuantileNorm) {
            const { qmin, qmax } = computeQuantiles(niftiImage);
            normOffset = qmin;
            normRange = qmax - qmin;
        } else {
            const { min, max } = computeMinMax(niftiImage);
            normOffset = min;
            normRange = max - min;
        }
        const safeRange = normRange === 0 ? 1 : normRange;

        let catLiteIntensityData = null;
        let inputData;
        let finalShape = CONFORMED_SHAPE;
        if (useGpuNativeInput) {
            // Pass raw native volume straight to V4 GPU prep shader (skipping 64 MiB normalized + transposed CPU buffers).
            if (catLite) {
                catLiteIntensityData = linearScaleVolume(niftiImage, normOffset, safeRange);
            }
            inputData = niftiImage;
        } else {
            const normed = linearScaleVolume(niftiImage, normOffset, safeRange);
            if (catLite) {
                // CAT-lite combines three model tissue priors with the subject's T1 in native order.
                catLiteIntensityData = normed;
            }
            if (modelEntry.inputPermutation) {
                console.log(`[WebGPU] Permuting Input: ${modelEntry.inputPermutation}`);
                const p = modelEntry.inputPermutation;
                finalShape = [CONFORMED_SHAPE[p[0]], CONFORMED_SHAPE[p[1]], CONFORMED_SHAPE[p[2]]];
                inputData = transposeVolume3D(normed, CONFORMED_SHAPE, p);
            } else if (modelEntry.enableTranspose) {
                inputData = transposeVolume3D(normed, CONFORMED_SHAPE, [2, 1, 0]);
            } else {
                inputData = normed;
            }
        }
        const Preprocess_t = ((performance.now() - prepStart) / 1000).toFixed(4);
        callbackUI('', 0.3);

        // --- INFERENCE ---
        callbackUI(isProbabilityOutput ? 'Estimating tissue maps\u2026' : 'Segmenting\u2026', 0.3);
        await yieldForPaint();
        const inferStart = performance.now();
        const onInferProgress = activeEntry.supportsGpuNativeIO
            ? (frac, stage) => {
                const clamped = Math.max(0, Math.min(1, Number(frac) || 0));
                callbackUI(stage ? `Segmenting… · ${stage}` : '', 0.3 + 0.6 * clamped);
            }
            : undefined;
        const ioOpts = (useGpuNativeInput || useGpuNativeOutput || onInferProgress)
            ? {
                gpuNativeInput: useGpuNativeInput,
                gpuNativeOutput: useGpuNativeOutput,
                normOffset,
                normRange: safeRange,
                onProgress: onInferProgress,
            }
            : undefined;
        const execTracked = await runWithBufferTracking(device, () =>
            ioOpts ? activeEntry.execute(inputData, ioOpts) : activeEntry.execute(inputData)
        );
        const inferenceResultArray = execTracked.result;
        if (typeof activeEntry.execute.gpuBytes === 'function') {
            activeEntry.gpuBytes = activeEntry.execute.gpuBytes();
            const cachedEntry = activeRunnerByDevice.get(device);
            if (cachedEntry && cachedEntry.runnerKey === activeEntry.runnerKey) {
                cachedEntry.gpuBytes = activeEntry.gpuBytes;
            }
        } else if (execTracked.buffers.length > 0) {
            activeEntry.gpuBytes = (activeEntry.gpuBytes || 0) + sumBufferBytes(execTracked.buffers);
            if (activeEntry.ownedBuffers) {
                activeEntry.ownedBuffers.push(...execTracked.buffers);
            }
            const cachedEntry = activeRunnerByDevice.get(device);
            if (cachedEntry && cachedEntry.runnerKey === activeEntry.runnerKey) {
                cachedEntry.gpuBytes = activeEntry.gpuBytes;
            }
        }

        // Pop the scope once we've finished issuing GPU work. popErrorScope resolves
        // after the queued allocations/passes complete, so a non-null result means a
        // real OOM occurred during this model's run.
        oomScopeOpen = false;
        const oomError = await device.popErrorScope();
        if (oomError) {
            const err = new Error(
                `WebGPU out of memory (${oomError.message || 'allocation failed'})`
            );
            err.oomError = oomError;
            throw err;
        }

        if (!inferenceResultArray || !Array.isArray(inferenceResultArray)) {
            throw new Error(
                `Inference didn't return expected array format. ` +
                `Returned: ${typeof inferenceResultArray}`
            );
        }

        const Inference_t = ((performance.now() - inferStart) / 1000).toFixed(4);
        const gpuMiB = (activeEntry.gpuBytes || 0) / 1048576;
        statData.GPU_Memory_MiB = Math.round(gpuMiB);
        statData.WebGPU_Kernels = activeEntry.execute.kernels || 'tinygrad';
        if (typeof activeEntry.execute.__v4Plan === 'function') {
            const v4Plan = activeEntry.execute.__v4Plan();
            statData.WebGPU_V4_Layout = v4Plan.layout;
            statData.WebGPU_V4_Exec = v4Plan.execMode;
            statData.WebGPU_V4_Reason = v4Plan.reason;
            if (Number.isFinite(v4Plan.probeMs)) {
                statData.WebGPU_V4_Probe_ms = Number(v4Plan.probeMs.toFixed(1));
            }
            if (typeof window !== 'undefined' && window.webgpuDiagnostics) {
                window.webgpuDiagnostics.v4Plan = {
                    layout: v4Plan.layout,
                    execMode: v4Plan.execMode,
                    reason: v4Plan.reason,
                    tier: v4Plan.tier,
                    probeMs: v4Plan.probeMs,
                    estFullLayerMs: v4Plan.estFullLayerMs,
                    fromCache: v4Plan.fromCache,
                    safeMode: v4Plan.safeMode,
                };
            }
        }
        const gpuMemory = gpuMiB >= 1024 ? `${(gpuMiB / 1024).toFixed(2)} GiB` : `${Math.round(gpuMiB)} MiB`;
        console.log(
            `WebGPU inference took ${Inference_t}s (${statData.WebGPU_Kernels} kernels, ${gpuMemory} GPU memory).`
        );
        callbackUI('Finishing up\u2026', 0.9);

        // --- POST-PROCESSING ---
        console.log('Inference result shapes:', inferenceResultArray.map((result) => result?.length));

        const outPerm = modelEntry.outputPermutation || (modelEntry.enableTranspose ? [2, 1, 0] : null);

        const postStart = performance.now();
        let finalImage;
        const maskResult = {};
        if (catLite) {
            if (inferenceResultArray.length !== 3) {
                throw new Error(`CAT-lite expected three tissue maps; received ${inferenceResultArray.length}.`);
            }
            callbackUI('Refining tissue fractions\u2026', 0.92);
            const toNative = useGpuNativeOutput
                ? (prior) => prior
                : (prior) => (outPerm
                    ? transposeVolume3D(prior, finalShape, outPerm)
                    : (prior instanceof Float32Array ? prior : Float32Array.from(prior)));
            finalImage = await runCatLiteInWorker(
                inferenceResultArray,
                catLiteIntensityData,
                modelEntry,
                statData,
                toNative,
                CONFORMED_SHAPE
            );
            catLiteIntensityData = null;
        } else if (isProbabilityOutput) {
            const rawProb = inferenceResultArray[0];
            finalImage = useGpuNativeOutput
                ? rawProb
                : (outPerm
                    ? transposeVolume3D(rawProb, finalShape, outPerm)
                    : (rawProb instanceof Float32Array ? rawProb : Float32Array.from(rawProb)));
            validateVolumeStats(finalImage, true, 'probability');
        } else {
            const rawLabels = inferenceResultArray[0];
            inferenceResultArray[0] = null;
            let nativeLabels;
            if (useGpuNativeOutput) {
                nativeLabels = rawLabels instanceof Uint8Array ? rawLabels : new Uint8Array(rawLabels);
            } else if (outPerm) {
                nativeLabels = transposeVolume3DToU8(rawLabels, finalShape, outPerm);
            } else {
                nativeLabels = rawLabels instanceof Uint8Array ? rawLabels : new Uint8Array(rawLabels);
            }
            validateVolumeStats(nativeLabels, false, 'segmentation');
            finalImage = await processSegmentationInWorker(
                nativeLabels,
                niftiImage,
                modelEntry,
                opts,
                maskResult,
                CONFORMED_SHAPE,
                { transferLabels: true }
            );
        }
        const Postprocess_t = ((performance.now() - postStart) / 1000).toFixed(4);

        const displayStart = performance.now();
        await callbackImg(finalImage, opts, modelEntry, maskResult.mask);
        const Display_t = ((performance.now() - displayStart) / 1000).toFixed(4);

        if (!isProbabilityOutput) {
            const actualLabels = countUniqueLabelsU8(finalImage);
            const expectedLabels = modelEntry.numClasses || actualLabels;
            addLabelStats(statData, expectedLabels, actualLabels);
        } else if (!catLite) {
            statData.Output_Type = 'Continuous tissue probability';
            statData.Tissue = modelEntry.probabilityDisplay || 'grayMatter';
            statData.Softmax_Temperature = modelEntry.softmaxTemperature ?? 1;
        }

        markSuccess(statData, Inference_t, Postprocess_t, { Preprocess_t, Setup_t, Display_t });
        console.log(
            `[Timing] WebGPU | ${modelEntry.modelName} | setup=${(Number(Setup_t) * 1000).toFixed(1)}ms ` +
            `prep=${(Number(Preprocess_t) * 1000).toFixed(1)}ms infer=${(Number(Inference_t) * 1000).toFixed(1)}ms ` +
            `post=${(Number(Postprocess_t) * 1000).toFixed(1)}ms disp=${(Number(Display_t) * 1000).toFixed(1)}ms ` +
            `cache=${activeEntry.cacheHit ? 'hit' : 'miss'}`
        );

        const elapsedText = `${Number(Inference_t).toFixed(1)} s`;
        const finishLabel = isProbabilityOutput
            ? `Tissue maps finished (${elapsedText})`
            : `Segmentation finished (${elapsedText})`;
        const isolateHint = !isProbabilityOutput && (modelEntry.numClasses ?? 0) > 2
            ? (opts?.isTouchPrimary
                ? ' \u00b7 Open Stats to isolate a region'
                : ' \u00b7 Option/Alt-click a region to isolate')
            : '';
        callbackUI(
            `${finishLabel}${isolateHint}`,
            1,
            '',
            statData
        );

    } catch (error) {
        console.error("WebGPU Inference Error:", error);

        // Evict and release GPU resources for a failed/OOM run so stale buffers never persist.
        if (activeEntry) {
            if (activeRunnerByDevice.get(device) === activeEntry) {
                activeRunnerByDevice.delete(device);
            }
            disposeRunnerEntry(activeEntry);
            activeEntry = null;
        }

        // If we threw while an OOM error scope was still open (e.g. setupNetwork or
        // execute failed before we popped it), pop it now so the scope stays balanced
        // and any captured GPUOutOfMemoryError is preserved for Layer 3 safe-mode retry.
        if (oomScopeOpen && device) {
            oomScopeOpen = false;
            try {
                const scopedOom = await device.popErrorScope();
                if (scopedOom && error && typeof error === 'object' && !error.oomError) {
                    error.oomError = scopedOom;
                }
            } catch (_) { /* device may be lost */ }
        }

        // Provide more specific error messages
        let errorMessage = error?.message || String(error);
        if (error?.oomError && !/out[- ]of[- ]memory|\boom\b/i.test(errorMessage)) {
            errorMessage = `${errorMessage} (WebGPU out of memory: ${error.oomError.message || 'allocation failed'})`;
        }
        if (errorMessage.includes('not found')) {
            errorMessage += '. Check that the runner file exists and the name matches.';
        } else if (errorMessage.includes('fetch')) {
            errorMessage += '. Check network connection and file paths.';
        } else if (errorMessage.includes('binding size')) {
            errorMessage += '. GPU memory limit exceeded.';
        }

        markFailure(statData, errorMessage, 'WebGPU inference failed');

        const errPrefix = modelEntry?.__v4PlanReasonOverride === 'safe-mode-retry'
            ? 'WebGPU (low-memory retry) Error'
            : 'WebGPU Error';
        callbackUI('', -1, `${errPrefix}: ${errorMessage}`, statData);
        throw error; // Re-throw to trigger safe-mode retry / fallback in main.js
    }
}
