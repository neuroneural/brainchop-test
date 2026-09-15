import assert from 'node:assert/strict';
import { applyCatLitePartialVolume } from '../cat-lite.js';

const shape = [30, 7, 4];
const length = shape.reduce((a, b) => a * b, 1);
const gm = new Float32Array(length);
const wm = new Float32Array(length);
const csf = new Float32Array(length);
const t1 = new Float32Array(length);

for (let z = 0; z < shape[2]; z++) {
  for (let y = 0; y < shape[1]; y++) {
    for (let x = 0; x < shape[0]; x++) {
      const i = (z * shape[1] + y) * shape[0] + x;
      if (y >= 5) continue; // leave a gap for a detached false-positive test
      if (x === 0 || x === shape[0] - 1) continue; // outside-brain support
      if (x < 9) {
        csf[i] = 0.96; gm[i] = 0.03; wm[i] = 0.01; t1[i] = 0.2;
      } else if (x < 13) {
        const fraction = (x - 8) / 5;
        csf[i] = 1 - fraction; gm[i] = fraction; wm[i] = 0.01;
        t1[i] = 0.2 + 0.3 * fraction;
      } else if (x < 19) {
        csf[i] = 0.02; gm[i] = 0.96; wm[i] = 0.02; t1[i] = 0.5;
      } else if (x < 23) {
        const wmFraction = (x - 18) / 5;
        csf[i] = 0.01; gm[i] = 1 - wmFraction; wm[i] = wmFraction;
        t1[i] = 0.5 + 0.3 * wmFraction;
      } else {
        csf[i] = 0.01; gm[i] = 0.03; wm[i] = 0.96; t1[i] = 0.8;
      }
    }
  }
}

// Eye/neck-like false positive: confident GM, but separated from the brain by
// an empty row. Principal-support cleanup must remove it before tissue fitting.
for (let z = 0; z < shape[2]; z++) {
  for (let x = 11; x <= 18; x++) {
    const i = (z * shape[1] + 6) * shape[0] + x;
    gm[i] = 0.98; wm[i] = 0.01; csf[i] = 0.01; t1[i] = 0.5;
  }
}

const result = applyCatLitePartialVolume([gm, wm, csf], t1, shape, {
  catLiteBiasBlockSize: 4,
  catLiteBiasSmoothPasses: 1,
  catLiteSigmaFloor: 0.02,
});
assert.equal(result.stats.applied, true);
assert.ok(result.stats.supportCleanup.componentCount > 1);
assert.ok(result.stats.supportCleanup.removedVoxels > 0);
assert.equal(result.tissues[0][(6 * shape[0]) + 14], 0);

const at = (x) => result.tissues[0][x + shape[0]]; // y=1, z=0
assert.equal(at(0), 0);
assert.ok(at(4) < 0.2, `pure CSF should have little GM, got ${at(4)}`);
assert.ok(at(15) > 0.7, `pure GM should remain predominantly GM, got ${at(15)}`);
assert.ok(at(26) < 0.2, `pure WM should have little GM, got ${at(26)}`);
assert.ok(at(10) < at(11), 'GM fraction should rise continuously across CSF-GM mixels');
assert.ok(at(20) > at(21), 'GM fraction should fall continuously across GM-WM mixels');
for (let x = 2; x < 28; x++) {
  assert.ok(Math.abs(at(x) - at(x - 1)) < 0.5, `unexpected hard jump at x=${x}`);
}
const [, wmAt, csfAt] = result.tissues.map((tissue) => (x) => tissue[x + shape[0]]);
assert.ok(wmAt(26) > 0.7, `pure WM should be predominantly WM, got ${wmAt(26)}`);
assert.ok(csfAt(4) > 0.7, `pure CSF should be predominantly CSF, got ${csfAt(4)}`);
for (let x = 1; x < shape[0] - 1; x++) {
  const sum = at(x) + wmAt(x) + csfAt(x);
  assert.ok(Math.abs(sum - 1) < 1e-4, `GM+WM+CSF should equal support at x=${x}, got ${sum}`);
}

// A ventricle meets white matter directly. The interface may be fractional,
// but a gray-matter output must not manufacture a bright GM rim merely because
// its intensity lies between CSF and WM.
const ventricleGm = Float32Array.from(gm);
const ventricleWm = Float32Array.from(wm);
const ventricleCsf = Float32Array.from(csf);
const ventricleT1 = Float32Array.from(t1);
for (let z = 0; z < shape[2]; z++) {
  for (let x = 7; x <= 24; x++) {
    const fraction = (x - 7) / 17;
    const i = (z * shape[1] + 3) * shape[0] + x;
    ventricleGm[i] = 0.001;
    ventricleCsf[i] = 1 - fraction;
    ventricleWm[i] = fraction;
    ventricleT1[i] = 0.2 + 0.6 * fraction;
  }
}
const ventricleResult = applyCatLitePartialVolume(
  [ventricleGm, ventricleWm, ventricleCsf], ventricleT1, shape,
  { catLiteBiasBlockSize: 4, catLiteBiasSmoothPasses: 1, catLiteSigmaFloor: 0.02 }
);
const ventricleProfile = Array.from(
  { length: 18 }, (_, offset) => ventricleResult.tissues[0][(3 * shape[0]) + offset + 7]
);
assert.ok(
  Math.max(...ventricleProfile) < 0.2,
  `direct CSF-WM interface should not become GM, got ${Math.max(...ventricleProfile)}`
);

console.log(JSON.stringify({
  means: result.stats.tissueMeans,
  sigmas: result.stats.tissueSigmas,
  profile: Array.from({ length: shape[0] }, (_, x) => Number(at(x).toFixed(3))),
  ventricleProfile: ventricleProfile.map((value) => Number(value.toFixed(3))),
}, null, 2));
