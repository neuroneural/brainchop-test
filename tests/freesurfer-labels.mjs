import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inferenceModelsList } from "../brainchop-parameters.js";
import { buildFreeSurferLut, remapLabelsToFreeSurfer, resolveFreeSurferLabelId } from "../freesurfer-labels.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Reference FreeSurfer aparc+aseg -> 104-class table (mirrors prepare_104_gt.py).
const FS_TO_104 = new Map([[0, 0], [1001, 1], [1002, 2], [1003, 3], [2001, 35], [2002, 36], [2003, 37]]);
for (let fsId = 1005; fsId <= 1035; fsId++) FS_TO_104.set(fsId, fsId - 1001);
for (let fsId = 2005; fsId <= 2035; fsId++) FS_TO_104.set(fsId, fsId - 2001 + 34);
for (const [fsId, c104] of [
  [10, 69], [49, 70], [11, 71], [50, 72], [12, 73], [51, 74], [13, 75], [52, 76],
  [17, 77], [53, 78], [18, 79], [54, 80], [26, 81], [58, 82], [28, 83], [60, 84],
  [2, 85], [41, 86], [4, 87], [5, 88], [43, 89], [44, 90], [14, 91], [15, 92],
  [24, 93], [16, 94], [7, 95], [46, 96], [8, 97], [47, 98],
  [251, 99], [252, 100], [253, 101], [254, 102], [255, 103],
]) {
  FS_TO_104.set(fsId, c104);
}

// 1. Every Atlas model in inferenceModelsList must produce a complete, duplicate-free FreeSurfer LUT.
const atlasModels = inferenceModelsList.filter((m) => m.type === "Atlas" && m.colormapPath);
assert.ok(atlasModels.length >= 5, "Expected at least 5 Atlas models in inferenceModelsList");

for (const model of atlasModels) {
  const cmapFile = path.join(root, "public", model.colormapPath.replace(/^\.\//, ""));
  const cmap = JSON.parse(fs.readFileSync(cmapFile, "utf8"));
  const lut = buildFreeSurferLut(cmap.labels);
  assert.ok(lut instanceof Int16Array, `LUT missing for ${model.modelName}`);
  assert.equal(lut.length, cmap.labels.length);
  assert.equal(lut[0], 0);

  const seen = new Set([0]);
  for (let i = 1; i < lut.length; i++) {
    assert.ok(lut[i] > 0, `Non-positive FreeSurfer ID at ${i} (${cmap.labels[i]}) in ${model.modelName}`);
    assert.ok(!seen.has(lut[i]), `Duplicate FreeSurfer ID ${lut[i]} at ${i} (${cmap.labels[i]}) in ${model.modelName}`);
    seen.add(lut[i]);
  }

  if (cmap.labels.length === 104) {
    assert.equal(FS_TO_104.size, 104);
    for (const [fsId, c104] of FS_TO_104.entries()) {
      assert.equal(lut[c104], fsId, `104-class mismatch at class ${c104} (${cmap.labels[c104]}): got ${lut[c104]}, expected ${fsId}`);
    }
  }

  if (cmap.labels.length === 18) {
    assert.deepEqual(
      Array.from(lut),
      [0, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 26, 28],
      `18-class FreeSurfer LUT mismatch for ${model.modelName}`,
    );
  }

  if (cmap.labels.length === 50) {
    assert.equal(lut[1], 2);     // Cerebral-White-Matter
    assert.equal(lut[2], 4);     // Ventricle
    assert.equal(lut[15], 253);  // Corpus callosum -> CC_Central
    assert.equal(lut[16], 1001); // ctx-bankssts
    assert.equal(lut[18], 1003); // ctx-caudalmiddlefrontal
    assert.equal(lut[19], 1005); // ctx-cuneus (1004 = corpuscallosum skipped)
    assert.equal(lut[49], 1035); // ctx-insula
  }
}

// 2. Binary masks and invalid inputs must return null (not parcellations).
assert.equal(buildFreeSurferLut(["background", "brain mask"]), null);
assert.equal(buildFreeSurferLut(["Background", "Brain Mask"]), null);
assert.equal(buildFreeSurferLut(["BG", "UnknownRegionXYZ", "AnotherUnknown"]), null);
assert.equal(buildFreeSurferLut(null), null);
assert.equal(resolveFreeSurferLabelId("ctx-lh-corpuscallosum"), null);

// 3. Buffer remapping writes Int16Array and tracks exact maxLabel.
const cmap104 = JSON.parse(
  fs.readFileSync(path.join(root, "public/models/model24chan104cls_v3_repbn/colormap.json"), "utf8"),
);
const lut104 = buildFreeSurferLut(cmap104.labels);
const sample = Uint8Array.from([0, 1, 34, 35, 68, 77, 85, 99, 103]);
const { img: remapped, maxLabel } = remapLabelsToFreeSurfer(sample, lut104);
assert.ok(remapped instanceof Int16Array);
assert.deepEqual(Array.from(remapped), [0, 1001, 1035, 2001, 2035, 17, 2, 251, 255]);
assert.equal(maxLabel, 2035);

console.log(`freesurfer-labels OK (${atlasModels.length} Atlas models verified: 18-, 50-, and 104-class).`);
