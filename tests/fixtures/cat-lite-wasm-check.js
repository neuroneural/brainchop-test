import { tryCatLiteWasm } from '../../cat-lite-wasm.js';
import { applyCatLitePartialVolume } from '../../cat-lite.js';

export async function check() {
  const shape = [32, 32, 32], count = 32 ** 3;
  const priors = Array.from({ length: 3 }, () => new Float32Array(count));
  const intensity = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const x = i % 32, tissue = x < 11 ? 2 : x < 22 ? 0 : 1;
    for (let t = 0; t < 3; t++) priors[t][i] = t === tissue ? .82 : .06;
    intensity[i] = [.5, .8, .2][tissue] + .03 * Math.sin(i * .1);
  }
  const expected = applyCatLitePartialVolume(priors.map(v => v.slice()), intensity, shape);
  const actual = await tryCatLiteWasm(priors, intensity, shape);
  if (!actual) throw new Error('wasm adapter fell back to JavaScript');
  if (!actual.stats.applied) throw new Error(actual.stats.reason);
  let worst = 0;
  for (let t = 0; t < 3; t++) for (let i = 0; i < count; i++) {
    const error = Math.abs(actual.tissues[t][i] - expected.tissues[t][i]);
    if (!Number.isFinite(error)) throw new Error('nonfinite output');
    worst = Math.max(worst, error);
  }
  if (worst > 2 ** -24) throw new Error(`numerical error ${worst}`);
  return { applied: true, worst };
}

export async function checkUnavailable() {
  const shape = [4, 4, 4], intensity = new Float32Array(64).fill(.5);
  const priors = Array.from({ length: 3 }, () => new Float32Array(64).fill(.1));
  const result = await tryCatLiteWasm(priors, intensity, shape);
  if (result !== null) throw new Error('unavailable module must use fallback');
  for (const volume of priors) if (!volume.every(v => v === Math.fround(.1)))
    throw new Error('failed load modified input priors');
  return true;
}
