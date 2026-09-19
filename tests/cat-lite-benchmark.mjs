// Run with: node tests/cat-lite-benchmark.mjs [axis-size=256] [repeats=3]
import assert from 'node:assert/strict';
import { applyCatLitePartialVolume as current } from '../cat-lite.js';
import { applyCatLitePartialVolume as reference } from './fixtures/cat-lite-reference.js';
import { makeInput } from './fixtures/cat-lite-input.mjs';

const size = Number(process.argv[2] || 256);
const repeats = Number(process.argv[3] || 3);
const input = makeInput([size, size, size]);
const times = { reference: [], current: [] };
for (let run = 0; run < repeats; run++) {
  const results = {};
  const versions = run % 2 ? [['current', current], ['reference', reference]] : [['reference', reference], ['current', current]];
  for (const [name, apply] of versions) {
    const volumes = input.volumes.map(v => v.slice());
    const start = performance.now();
    results[name] = apply(volumes, input.intensity, input.shape);
    times[name].push(performance.now() - start);
  }
  assert.deepEqual(results.current.stats, results.reference.stats);
  for (let t = 0; t < 3; t++) {
    assert.deepEqual(new Uint8Array(results.current.tissues[t].buffer), new Uint8Array(results.reference.tissues[t].buffer));
  }
}
const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
console.log(JSON.stringify({ shape: input.shape, repeats, milliseconds: times,
  speedup: median(times.reference) / median(times.current), byteExact: true }, null, 2));
