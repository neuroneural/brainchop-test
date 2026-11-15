import { quantileNormalizeVolumeData, transposeVolume3D } from '../../tensor-utils.js';
import { inferenceModelsList } from '../../brainchop-parameters.js';
import runner from '../../webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js';
import { applyCatLitePartialVolume as current } from '../../cat-lite.js';
import { applyCatLitePartialVolume as reference } from './cat-lite-reference.js';

export async function prepareInput(variant = 'original') {
  const shape = [256, 256, 256], length = 256 ** 3;
  const options = inferenceModelsList.find(entry => entry.probabilityPostprocess === 'cat-lite');
  const compressed = await (await fetch('/t1_crop.nii.gz')).arrayBuffer();
  // Vite may serve .gz with Content-Encoding, so fetch may already decode it.
  const nii = new Uint8Array(compressed)[0] === 31
    ? await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer()
    : compressed;
  const header = new DataView(nii);
  if (header.getInt16(70, true) !== 2 || header.getInt16(42, true) !== 256
      || header.getInt16(44, true) !== 256 || header.getInt16(46, true) !== 256) {
    throw new Error('This benchmark expects the bundled uint8 256³ sample.');
  }
  const rawU8 = new Uint8Array(nii, header.getFloat32(108, true), length);
  // Reproducible sampling while using the app's actual normalization code.
  const random = Math.random;
  let seed = 123;
  Math.random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  let intensity;
  try { intensity = quantileNormalizeVolumeData(rawU8); }
  finally { Math.random = random; }
  if (variant !== 'original') {
    const transformed = new Float32Array(length);
    if (variant === 'flip') {
      for (let i = 0; i < length; i++) transformed[i] = intensity[i - i % 256 + 255 - i % 256];
    } else if (variant === 'gamma0.7' || variant === 'gamma1.4') {
      const gamma = Number(variant.slice(5));
      for (let i = 0; i < length; i++) transformed[i] = Math.pow(Math.max(0, intensity[i]), gamma);
    } else throw new Error(`Unknown input variant: ${variant}`);
    intensity = transformed;
  }
  const input = transposeVolume3D(intensity, shape, [2, 1, 0]);
  return { shape, length, options, intensity, input };
}

export async function createDevice({ timestampQuery = false, disableSubgroups = false, disableF16 = false } = {}) {
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) throw new Error('Chrome has no WebGPU adapter');
  const requiredLimits = {};
  for (const key of ['maxBufferSize', 'maxStorageBufferBindingSize', 'maxComputeInvocationsPerWorkgroup',
    'maxComputeWorkgroupSizeX', 'maxComputeWorkgroupSizeY', 'maxComputeWorkgroupSizeZ',
    'maxComputeWorkgroupStorageSize', 'maxComputeWorkgroupsPerDimension']) requiredLimits[key] = adapter.limits[key];
  const requiredFeatures = [];
  if (!disableF16 && adapter.features.has('shader-f16')) requiredFeatures.push('shader-f16');
  if (!disableSubgroups && adapter.features.has('subgroups')) requiredFeatures.push('subgroups');
  if (timestampQuery && adapter.features.has('timestamp-query')) requiredFeatures.push('timestamp-query');
  const device = await adapter.requestDevice({ requiredLimits, requiredFeatures });
  device.__adapterInfo = adapter.info || null;
  return device;
}

export async function benchmark() {
  const { shape, length, options, intensity, input } = await prepareInput();
  const device = await createDevice();
  const volumes = [];
  try {
    device.pushErrorScope('validation');
    device.pushErrorScope('out-of-memory');
    const weights = new Uint8Array(await (await fetch('/models/model24chan18cls_gdice_prio/model.safetensors')).arrayBuffer());
    const execute = await runner.setupNet(device, weights, () => {}, options);
    const start = performance.now();
    const priors = await execute(input);
    console.log(`Probability runner: ${((performance.now() - start) / 1000).toFixed(2)} s`);
    const oom = await device.popErrorScope(), validation = await device.popErrorScope();
    if (oom || validation) throw new Error((oom || validation).message);
    for (const prior of priors) {
      volumes.push(transposeVolume3D(prior, shape, [2, 1, 0]));
    }
  } finally { device.destroy(); }
  const times = { reference: [], current: [] };
  let stats, cleaned;
  for (let run = 0; run < 3; run++) {
    const results = {};
    const versions = run % 2 ? [['current', current], ['reference', reference]] : [['reference', reference], ['current', current]];
    for (const [name, apply] of versions) {
      const copy = volumes.map(v => v.slice());
      const start = performance.now();
      results[name] = apply(copy, intensity, shape, options);
      times[name].push(performance.now() - start);
      if (name === 'current') cleaned = copy;
    }
    if (JSON.stringify(results.current.stats) !== JSON.stringify(results.reference.stats)) throw new Error('Statistics differ');
    if (!results.current.stats.applied) throw new Error(`Fit failed: ${results.current.stats.reason}`);
    stats = results.current.stats;
    for (let t = 0; t < 3; t++) {
      const a = new Uint32Array(results.current.tissues[t].buffer), b = new Uint32Array(results.reference.tissues[t].buffer);
      for (let i = 0; i < length; i++) if (a[i] !== b[i]) throw new Error(`Output differs: tissue ${t}, voxel ${i}`);
    }
    console.log(`Pair ${run + 1}: reference ${times.reference.at(-1).toFixed(0)} ms, current ${times.current.at(-1).toFixed(0)} ms; byte-exact`);
  }
  let fittedVoxels = 0;
  // Count after cleanup, which is intentionally an observable in-place mutation.
  for (let i = 0; i < length; i++) {
    const support = Math.min(Math.max(0, cleaned[0][i]) + Math.max(0, cleaned[1][i]) + Math.max(0, cleaned[2][i]), 1);
    if (support >= options.catLiteMinSupport && Number.isFinite(intensity[i])) fittedVoxels++;
  }
  return { milliseconds: times, byteExact: true, fittedVoxels, fitCacheMiB: fittedVoxels * 36 / 2 ** 20, stats };
}
