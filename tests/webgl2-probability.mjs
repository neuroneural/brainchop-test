import assert from 'node:assert/strict';
import {
  tissueProbabilityConfig,
  smoothAndGateTissuePriors,
} from '../webgl2_runners/probability.js';

const cfg = tissueProbabilityConfig({
  softmaxTemperature: 2,
  brainSupportTemperature: 0.75,
  brainSupportPower: 2,
  partialVolumeSigma: 0,
  probabilityGroups: {
    grayMatter: [2, 6],
    whiteMatter: [1, 5],
    csf: [3, 4],
  },
}, 18);
assert.equal(cfg.grayMask, (1 << 2) | (1 << 6));
assert.equal(cfg.whiteMask, (1 << 1) | (1 << 5));
assert.equal(cfg.csfMask, (1 << 3) | (1 << 4));
assert.equal(cfg.temperature, 2);
assert.equal(cfg.supportTemperature, 0.75);

const volumes = [
  new Float32Array([0.2, 0.4, 0.6]),
  new Float32Array([0.3, 0.5, 0.7]),
  new Float32Array([0.4, 0.6, 0.8]),
];
smoothAndGateTissuePriors(
  volumes,
  new Float32Array([0, 0.5, 1]),
  [3, 1, 1],
  { partialVolumeSigma: 0, brainSupportPower: 2 },
);
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-6);
[[0, 0.1, 0.6], [0, 0.125, 0.7], [0, 0.15, 0.8]].forEach((expected, tissue) =>
  expected.forEach((value, voxel) => close(volumes[tissue][voxel], value))
);

// A unit impulse must become a smooth, symmetric profile. The WebGPU kernel
// includes out-of-volume weights in the denominator, so the same implementation
// is also checked at the boundary rather than only in the interior.
const impulse = new Float32Array(7);
impulse[3] = 1;
const blurred = [impulse, new Float32Array(7), new Float32Array(7)];
smoothAndGateTissuePriors(
  blurred,
  new Float32Array(7).fill(1),
  [7, 1, 1],
  { partialVolumeSigma: 0.65, brainSupportPower: 1 },
);
assert.ok(blurred[0][3] > blurred[0][2]);
assert.ok(blurred[0][2] > blurred[0][1]);
assert.ok(Math.abs(blurred[0][2] - blurred[0][4]) < 1e-7);
assert.ok(Math.abs(blurred[0][1] - blurred[0][5]) < 1e-7);
assert.ok(blurred[0][0] < blurred[0][1]);

assert.throws(
  () => tissueProbabilityConfig({ probabilityGroups: { grayMatter: [33] } }, 18),
  /Invalid gray-matter tissue label/,
);

console.log('native WebGL2 probability helpers: ok');
