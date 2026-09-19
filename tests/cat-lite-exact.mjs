import assert from 'node:assert/strict';
import { applyCatLitePartialVolume as current } from '../cat-lite.js';
import { applyCatLitePartialVolume as reference } from './fixtures/cat-lite-reference.js';
import { makeInput } from './fixtures/cat-lite-input.mjs';

function compare(input, options = {}) {
  const originalVolumes = input.volumes.map(v => v.slice());
  const expected = reference(originalVolumes, input.intensity, input.shape, options);
  const actual = current(input.volumes, input.intensity, input.shape, options);
  assert.deepEqual(actual.stats, expected.stats);
  for (let t = 0; t < 3; t++) {
    assert.deepEqual(new Uint8Array(actual.tissues[t].buffer), new Uint8Array(expected.tissues[t].buffer), `tissue ${t}`);
    assert.deepEqual(input.volumes[t], originalVolumes[t], `in-place cleanup ${t}`);
  }
  return actual;
}

assert.equal(compare(makeInput()).stats.applied, true);
for (const options of [
  { catLitePurePriorPower: 2.7, catLiteBiasBlockSize: 7, catLiteBiasSmoothPasses: 2 },
  { catLiteSpatialWeight: 0, catLiteBiasSmoothPasses: 0 },
  { catLiteSpatialWeight: 0.6, catLiteMinSupport: 0.2, catLiteSigmaFloor: 0.001 },
  { catLiteMinMeanSeparation: 1 },
]) compare(makeInput([43, 39, 37], 91), options);

const unusual = makeInput();
for (let i = 0; i < unusual.intensity.length; i += 107) {
  unusual.intensity[i] = i % 2 ? NaN : Infinity;
  unusual.volumes[i % 3][i] = i % 5 ? -0.1 : NaN;
}
compare(unusual);

// Dense 180³ support exceeds the weight-cache budget: exercise recomputation.
const dense = makeInput([180, 180, 180]);
for (let i = 0; i < dense.intensity.length; i++) {
  const sum = dense.volumes[0][i] + dense.volumes[1][i] + dense.volumes[2][i];
  for (const v of dense.volumes) v[i] /= sum;
}
assert.equal(compare(dense, { catLitePurePriorPower: 2.7 }).stats.applied, true);

// Lots of tiny components, ties, a diagonal-only contact, and empty support.
for (const shape of [[12, 10, 8], [2, 2, 1], [1, 4, 3]]) {
  const input = makeInput(shape);
  for (const v of input.volumes) v.fill(0);
  compare(structuredClone(input));
  for (let i = 0; i < input.intensity.length; i++) {
    const x = i % shape[0], y = Math.floor(i / shape[0]) % shape[1], z = Math.floor(i / (shape[0] * shape[1]));
    if ((x + y + z) % 2 === 0) input.volumes[0][i] = 1;
  }
  compare(input);
}

// Larger random components exercise bridges and component discovery order.
for (let seed = 1; seed <= 12; seed++) {
  const input = makeInput([19, 17, 13], seed);
  let state = seed;
  for (let i = 0; i < input.intensity.length; i++) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    if (state / 2 ** 32 > seed / 15) for (const v of input.volumes) v[i] = 0;
  }
  compare(input);
}
console.log('CAT-lite outputs, fitted statistics, and input mutations match the reference exactly.');
