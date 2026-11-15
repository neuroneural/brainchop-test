import runner from '../../webgpu_runners/model5_runner.js';
import reference from '/__model5-reference.js';
import { minMaxNormalizeVolumeData, processSegmentationVolume, transposeVolume3D, transposeVolume3DToU8 } from '../../tensor-utils.js';
import { inferenceModelsList, brainChopOpts } from '../../brainchop-parameters.js';
import { createDevice } from './cat-lite-browser-page.js';

function profilePasses(device) {
  if (!device.features.has('timestamp-query')) return { read: async () => null };
  const queries = device.createQuerySet({ type: 'timestamp', count: 32 });
  const resolve = device.createBuffer({ size: 256, usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC });
  const readback = device.createBuffer({ size: 256, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });
  const createEncoder = device.createCommandEncoder.bind(device);
  let count = 0;
  device.createCommandEncoder = (...args) => {
    const encoder = createEncoder(...args);
    const begin = encoder.beginComputePass.bind(encoder), finish = encoder.finish.bind(encoder);
    count = 0;
    encoder.beginComputePass = (descriptor = {}) => {
      const first = count++ * 2;
      return begin({ ...descriptor, timestampWrites: {
        querySet: queries, beginningOfPassWriteIndex: first, endOfPassWriteIndex: first + 1,
      } });
    };
    encoder.finish = (...args) => {
      encoder.resolveQuerySet(queries, 0, count * 2, resolve, 0);
      encoder.copyBufferToBuffer(resolve, 0, readback, 0, count * 16);
      return finish(...args);
    };
    return encoder;
  };
  return { read: async () => {
    await readback.mapAsync(GPUMapMode.READ);
    const ticks = new BigUint64Array(readback.getMappedRange());
    const times = Array.from({ length: count }, (_, i) => Number(ticks[2 * i + 1] - ticks[2 * i]) / 1e6);
    readback.unmap();
    return times;
  } };
}

const LEGACY_MODEL5_ENTRY = {
  id: 1,
  type: 'Segmentation',
  path: '/models/model5_gw_ae/model.json',
  webgpu_safetensor: './models/model5_gw_ae/model.safetensors',
  webgpu_runner: 'model5',
  enableQuantileNorm: false,
  enableTranspose: true,
  numClasses: 3,
};

export async function benchmark({ reverse = false, repeat = true, variant = 'original' } = {}) {
  const entry = inferenceModelsList.find(model => model.id === 1) || LEGACY_MODEL5_ENTRY;
  if (entry.webgpu_runner !== 'model5' || entry.enableQuantileNorm || !entry.enableTranspose) {
    throw new Error('Benchmark preparation no longer matches model 1');
  }
  const compressed = await (await fetch('/t1_crop.nii.gz')).arrayBuffer();
  const nii = new Uint8Array(compressed)[0] === 31
    ? await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer()
    : compressed;
  const header = new DataView(nii);
  const length = 256 ** 3;
  if (header.getInt16(70, true) !== 2 || [42, 44, 46].some(offset => header.getInt16(offset, true) !== 256)) {
    throw new Error('Expected a bundled uint8 256³ sample');
  }
  const niftiImage = new Uint8Array(nii, header.getFloat32(108, true), length);
  const prepStart = performance.now();
  const normalized = minMaxNormalizeVolumeData(niftiImage);
  let input = transposeVolume3D(normalized, [256, 256, 256], [2, 1, 0]);
  const prepMs = performance.now() - prepStart;
  if (variant !== 'original') {
    const transformed = new Float32Array(length);
    if (variant === 'flip') {
      for (let i = 0; i < length; i++) transformed[i] = input[i - (i & 255) + 255 - (i & 255)];
    } else if (variant === 'gamma0.7' || variant === 'gamma1.4') {
      const gamma = Number(variant.slice(5));
      for (let i = 0; i < length; i++) transformed[i] = Math.pow(input[i], gamma);
    } else throw new Error(`Unknown variant ${variant}`);
    input = transformed;
  }
  const weights = new Uint8Array(await (await fetch('/models/model5_gw_ae/model.safetensors')).arrayBuffer());
  const results = {};
  for (const [name, module] of (reverse ? [['current', runner], ['reference', reference]] : [['reference', reference], ['current', runner]])) {
    const device = await createDevice({ timestampQuery: true });
    const profiler = profilePasses(device);
    let allocationBytes = 0;
    const createBuffer = device.createBuffer.bind(device);
    device.createBuffer = descriptor => { allocationBytes += descriptor.size; return createBuffer(descriptor); };
    const result = { inferenceMs: [], passMs: [] };
    try {
      device.pushErrorScope('validation');
      device.pushErrorScope('out-of-memory');
      const setupStart = performance.now();
      const execute = await module.setupNet(device, weights);
      result.setupMs = performance.now() - setupStart;
      result.allocationMiB = allocationBytes / 2 ** 20;
      for (let run = 0; run < (repeat ? 2 : 1); run++) {
        const start = performance.now();
        const [output] = await execute(input);
        result.inferenceMs.push(performance.now() - start);
        result.passMs.push(await profiler.read());
        if (output.length !== length) throw new Error('Wrong output length');
        if (run === 0) {
          result.output = output;
          result.labelCounts = Array.from(output.reduce((counts, label) => { counts[label]++; return counts; }, new Uint32Array(3)));
        } else {
          result.repeatDifferences = output.reduce((n, label, i) => n + (label !== result.output[i]), 0);
        }
      }
      const oom = await device.popErrorScope(), validation = await device.popErrorScope();
      if (oom || validation) throw new Error((oom || validation).message);
    } finally { device.destroy(); }
    results[name] = result;
  }
  let changed = 0;
  for (let i = 0; i < length; i++) changed += results.current.output[i] !== results.reference.output[i];
  const postStart = performance.now();
  const raw = transposeVolume3DToU8(results.current.output, [256, 256, 256], [2, 1, 0]);
  const transposeMs = performance.now() - postStart;
  const rawCopy = raw.slice();
  const postprocessStart = performance.now();
  const processed = await processSegmentationVolume(raw, niftiImage, entry, brainChopOpts);
  const postprocessMs = performance.now() - postprocessStart;
  if (processed.length !== length) throw new Error('Wrong postprocessed length');
  let cleanupChanged = 0;
  for (let i = 0; i < length; i++) cleanupChanged += rawCopy[i] !== processed[i];
  const byteExact = changed === 0 && Object.values(results).every(result => !result.repeatDifferences);
  for (const result of Object.values(results)) delete result.output;
  return { byteExact, changed, reverse, variant, prepMs, transposeMs,
    postprocessMs, cleanupChanged, results };
}
