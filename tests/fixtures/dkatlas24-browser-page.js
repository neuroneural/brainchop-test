import runner from '../../webgpu_runners/dkatlas24_synth_runner.js';
import reference from '/__dkatlas-reference.js';
import { inferenceModelsList } from '../../brainchop-parameters.js';
import { prepareInput, createDevice } from './cat-lite-browser-page.js';

function differences(a, b) {
  const aa = new Uint32Array(a.buffer, a.byteOffset, a.length), bb = new Uint32Array(b.buffer, b.byteOffset, b.length);
  let changed = 0, invalid = 0;
  for (let i = 0; i < a.length; i++) {
    if (aa[i] !== bb[i]) changed++;
    if (!Number.isInteger(a[i]) || a[i] < 0 || a[i] > 103 || !Number.isInteger(b[i]) || b[i] < 0 || b[i] > 103) invalid++;
  }
  return { changed, invalid };
}

// One command encoder: 123 production passes, or 125 with paired-kernel probes.
function profilePasses(device) {
  if (!device.features.has('timestamp-query')) return { read: async () => null };
  const queries = device.createQuerySet({ type: 'timestamp', count: 256 });
  const resolve = device.createBuffer({ size: 2048, usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC });
  const readback = device.createBuffer({ size: 2048, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });
  const createEncoder = device.createCommandEncoder.bind(device);
  let count = 0;
  device.createCommandEncoder = (...args) => {
    const encoder = createEncoder(...args);
    const begin = encoder.beginComputePass.bind(encoder), finish = encoder.finish.bind(encoder);
    count = 0;
    encoder.beginComputePass = (descriptor = {}) => {
      const first = count++ * 2;
      return begin({ ...descriptor, timestampWrites: { querySet: queries, beginningOfPassWriteIndex: first, endOfPassWriteIndex: first + 1 } });
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
    const times = Array.from({ length: count }, (_, i) => Number(ticks[i * 2 + 1] - ticks[i * 2]) / 1e6);
    readback.unmap();
    return times;
  } };
}

export async function benchmark({ model = 'both', variant = 'original', reverse = false, repeat = true } = {}) {
  const { input, length } = await prepareInput(variant);
  const directories = { infant: 'model24chan104cls_infant_refit_synth', lesion: 'model24chan104cls_synth' };
  const models = model === 'both' ? Object.keys(directories) : [model];
  const comparisons = {};
  for (const name of models) {
    if (!directories[name]) throw new Error(`Unknown model: ${name}`);
    const entry = inferenceModelsList.find(m => m.path?.includes(`/${directories[name]}/`));
    if (!entry || !entry.enableTranspose || !entry.enableQuantileNorm || entry.forceFP32 || entry.webgpu_runner !== 'dkatlas24_synth') {
      throw new Error('Benchmark input preparation must match the model settings');
    }
    const weights = new Uint8Array(await (await fetch(`/models/${directories[name]}/model.safetensors`)).arrayBuffer());
    async function run(label, module) {
      const device = await createDevice({ timestampQuery: true });
      const profiler = profilePasses(device);
      let allocationBytes = 0;
      const createBuffer = device.createBuffer.bind(device);
      device.createBuffer = descriptor => { allocationBytes += descriptor.size; return createBuffer(descriptor); };
      const result = { inferenceMs: [], passMs: [], repeatDifferences: null };
      try {
        device.pushErrorScope('validation');
        device.pushErrorScope('out-of-memory');
        const setupStart = performance.now();
        const execute = await module.setupNet(device, weights);
        result.setupMs = performance.now() - setupStart;
        result.allocationMiB = allocationBytes / 2 ** 20;
        for (let iteration = 0; iteration < (repeat ? 2 : 1); iteration++) {
          const start = performance.now();
          const [output] = await execute(input);
          result.inferenceMs.push(performance.now() - start);
          result.passMs.push(await profiler.read());
          if (output.length !== length) throw new Error('Wrong output length');
          if (iteration === 0) {
            result.output = output;
            const counts = new Uint32Array(104);
            for (const value of output) if (Number.isInteger(value) && value >= 0 && value < 104) counts[value]++;
            result.labelCounts = Array.from(counts);
            if (counts.filter(n => n > 0).length < 2) throw new Error('Empty or single-label segmentation');
          }
          else result.repeatDifferences = differences(result.output, output);
          console.log(`${name} ${label} ${iteration ? 'warm' : 'first'}: ${result.inferenceMs.at(-1).toFixed(0)} ms; ${result.allocationMiB.toFixed(1)} MiB`);
        }
        const oom = await device.popErrorScope(), validation = await device.popErrorScope();
        if (oom || validation) throw new Error((oom || validation).message);
      } finally { device.destroy(); }
      return result;
    }
    const results = {};
    const versions = reverse ? [['current', runner], ['reference', reference]] : [['reference', reference], ['current', runner]];
    for (const [label, module] of versions) results[label] = await run(label, module);
    const diff = differences(results.reference.output, results.current.output);
    const byteExact = [diff, results.reference.repeatDifferences, results.current.repeatDifferences].filter(Boolean)
      .every(d => d.changed === 0 && d.invalid === 0);
    for (const r of Object.values(results)) delete r.output;
    comparisons[name] = { byteExact, differences: diff, results };
    console.log(`${name}: ${diff.changed} changed labels, ${diff.invalid} invalid`);
  }
  return { variant, reverse, byteExact: Object.values(comparisons).every(c => c.byteExact), comparisons };
}
