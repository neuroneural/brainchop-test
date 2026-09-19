import * as tf from '@tensorflow/tfjs';
import runner from '../../webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js';
import { prepareInput, createDevice } from './cat-lite-browser-page.js';
import { applyCatLitePartialVolume } from '../../cat-lite.js';
import reference from '/__catlite-reference-runner.js';

function differences(a, b) {
  const aa = new Uint32Array(a.buffer, a.byteOffset, a.length);
  const bb = new Uint32Array(b.buffer, b.byteOffset, b.length);
  let changed = 0, maxAbsolute = 0, nonFinite = 0;
  for (let i = 0; i < a.length; i++) {
    if (!Number.isFinite(a[i]) || !Number.isFinite(b[i])) nonFinite++;
    if (aa[i] !== bb[i]) { changed++; maxAbsolute = Math.max(maxAbsolute, Math.abs(a[i] - b[i])); }
  }
  return { changed, maxAbsolute, nonFinite };
}

export async function benchmark({ variant = 'original', reverse = false, repeat = true, sigma } = {}) {
  const { shape, options: modelOptions, intensity, input } = await prepareInput(variant);
  const options = { ...modelOptions, ...(sigma === undefined ? {} : { partialVolumeSigma: sigma }) };
  const weights = new Uint8Array(await (await fetch('/models/model24chan18cls_gdice_prio/model.safetensors')).arrayBuffer());
  async function run(name, model) {
    const device = await createDevice();
    let allocationBytes = 0;
    const createBuffer = device.createBuffer.bind(device);
    device.createBuffer = descriptor => { allocationBytes += descriptor.size; return createBuffer(descriptor); };
    const result = { allocationMiB: 0, inferenceMs: [], cpuMs: [], repeatDifferences: [] };
    try {
      device.pushErrorScope('validation');
      device.pushErrorScope('out-of-memory');
      const start = performance.now();
      const execute = await model.setupNet(device, weights, () => {}, options);
      result.setupMs = performance.now() - start;
      result.allocationMiB = allocationBytes / 2 ** 20;
      for (let iteration = 0; iteration < (repeat ? 2 : 1); iteration++) {
        const inferenceStart = performance.now();
        const priors = await execute(input);
        result.inferenceMs.push(performance.now() - inferenceStart);
        const volumes = [];
        for (const prior of priors) {
          const native = tf.tidy(() => tf.tensor(prior, shape, 'float32').transpose());
          volumes.push(await native.data());
          native.dispose();
        }
        const cpuStart = performance.now();
        const { tissues, stats } = applyCatLitePartialVolume(volumes, intensity, shape, options);
        result.cpuMs.push(performance.now() - cpuStart);
        if (!stats.applied) throw new Error(`${name} fit failed: ${stats.reason}`);
        if (iteration === 0) { result.priors = priors; result.tissues = tissues; result.stats = stats; }
        else {
          for (let t = 0; t < 3; t++) {
            result.repeatDifferences.push({ prior: differences(result.priors[t], priors[t]), tissue: differences(result.tissues[t], tissues[t]) });
          }
        }
        console.log(`${name} ${iteration ? 'warm' : 'first'}: inference ${result.inferenceMs.at(-1).toFixed(0)} ms, CPU ${result.cpuMs.at(-1).toFixed(0)} ms`);
      }
      const oom = await device.popErrorScope(), validation = await device.popErrorScope();
      if (oom || validation) throw new Error((oom || validation).message);
    } finally { device.destroy(); }
    return result;
  }
  const models = reverse ? [['current', runner], ['reference', reference]] : [['reference', reference], ['current', runner]];
  const results = {};
  for (const [name, model] of models) results[name] = await run(name, model);
  const priorDifferences = [], tissueDifferences = [];
  for (let t = 0; t < 3; t++) {
    priorDifferences.push(differences(results.reference.priors[t], results.current.priors[t]));
    tissueDifferences.push(differences(results.reference.tissues[t], results.current.tissues[t]));
  }
  const statsEqual = JSON.stringify(results.reference.stats) === JSON.stringify(results.current.stats);
  const repeats = Object.values(results).flatMap(r => r.repeatDifferences.flatMap(d => [d.prior, d.tissue]));
  const byteExact = statsEqual && [...priorDifferences, ...tissueDifferences, ...repeats].every(d => d.changed === 0 && d.nonFinite === 0);
  for (const r of Object.values(results)) { delete r.priors; delete r.tissues; }
  return { variant, reverse, sigma: options.partialVolumeSigma, byteExact, statsEqual, priorDifferences, tissueDifferences, results };
}
