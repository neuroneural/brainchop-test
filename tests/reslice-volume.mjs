// Standalone unit tests for reslice-volume.js:
//   - Adaptive center-anchored odd-count majority vote for categorical labels
//   - Bit-exact floor(v + 0.5) rounding (matching brainchopC conform.c)
//   - Zero directional bias & exact reflection symmetry on 2 mm anisotropic grids
//   - Full symmetric slice coverage on 3 mm, 5 mm, and 7 mm thick-slice grids
//   - Center-anchored tie breaking, OOB background votes, FreeSurfer LUT & hdrPatch
//   - Unchanged probability (trilinear) and intensity (nearest-neighbor) paths
//
// Run: node tests/reslice-volume.mjs
import assert from "node:assert/strict";
import { resliceVolumeData } from "../reslice-volume.js";

const ID_AFFINE = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

function makeDiagAffine(sx, sy, sz, tx = 0, ty = 0, tz = 0) {
  return [
    [sx, 0, 0, tx],
    [0, sy, 0, ty],
    [0, 0, sz, tz],
    [0, 0, 0, 1],
  ];
}

// ---------------------------------------------------------------------------
// 1. 1 mm identity, 1.5 mm fast path, +0.5 shift, and negative half-integer
//    exact floor(v + 0.5) rounding
// ---------------------------------------------------------------------------
{
  const dims = [5, 5, 5];
  const src = new Uint8Array(5 * 5 * 5);
  for (let i = 0; i < src.length; i++) src[i] = (i * 13 + 1) % 29;

  // 1a. Exact 1 mm identity preserves every single voxel without erosion/blur.
  const idRes = resliceVolumeData({
    srcImg: src,
    srcDims: dims,
    srcAffine: ID_AFFINE,
    dstDims: dims,
    dstAffine: ID_AFFINE,
    isLabel: true,
  });
  assert.ok(idRes.img instanceof Int16Array);
  assert.deepEqual(Array.from(idRes.img), Array.from(src));

  // 1b. 1.5 mm spacing (<= 1.5001) uses n = 1 exact-center fast path (no blur).
  const src1d = Uint8Array.from([10, 20, 30, 40, 50, 60, 70]);
  const res15 = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [4, 1, 1],
    dstAffine: makeDiagAffine(1.5, 1, 1, 0, 0, 0),
    isLabel: true,
  });
  // bx = 0, 1.5, 3.0, 4.5 -> floor(bx + 0.5) = 0, 2, 3, 5
  assert.deepEqual(Array.from(res15.img), [10, 30, 40, 60]);

  // 1c. Shifted by +0.5 on 1 mm grid: floor((i + 0.5) + 0.5) = i + 1 (last is OOB -> 0).
  const resHalf = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [7, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, 0.5, 0, 0),
    isLabel: true,
  });
  assert.deepEqual(Array.from(resHalf.img), [20, 30, 40, 50, 60, 70, 0]);

  // 1d. Negative fractional offsets: -0.25 and exact -0.5 match floor(v + 0.5) === 0,
  //     whereas -0.5001 rounds to -1 (out of bounds -> 0).
  const resNegQuarter = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [3, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, -0.25, 0, 0),
    isLabel: true,
  });
  // bx = -0.25, 0.75, 1.75 -> floor(bx + 0.5) = 0, 1, 2
  assert.deepEqual(Array.from(resNegQuarter.img), [10, 20, 30]);

  const resNegHalf = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [3, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, -0.5, 0, 0),
    isLabel: true,
  });
  // bx = -0.5, 0.5, 1.5 -> floor(bx + 0.5) = 0, 1, 2 (C floor(-0.5 + 0.5) == 0)
  assert.deepEqual(Array.from(resNegHalf.img), [10, 20, 30]);

  const resNegPastHalf = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [3, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, -0.5001, 0, 0),
    isLabel: true,
  });
  // bx = -0.5001, 0.4999, 1.4999 -> floor(bx + 0.5) = -1 (OOB->0), 0, 1
  assert.deepEqual(Array.from(resNegPastHalf.img), [0, 10, 20]);
}

// ---------------------------------------------------------------------------
// 2. 2 mm anisotropic grid (ey = +2.0 and ey = -2.0, integer conformed centers):
//    ZERO directional shift & exact reflection symmetry
// ---------------------------------------------------------------------------
{
  const sny = 21; // y = 0..20, center at y = 10
  const ny = 11;  // native j = 0..10 maps to conformed y = 0, 2, 4, ..., 20

  // 2a. Symmetric block centered at y = 10 (y in [6..14]) -> zero centroid shift
  //     for both ey = +2.0 and ey = -2.0.
  const symSrc = new Uint8Array(sny);
  for (let y = 6; y <= 14; y++) symSrc[y] = 4;

  const pos2 = resliceVolumeData({
    srcImg: symSrc,
    srcDims: [1, sny, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, ny, 1],
    dstAffine: makeDiagAffine(1, 2, 1, 0, 0, 0),
    isLabel: true,
  });
  const neg2 = resliceVolumeData({
    srcImg: symSrc,
    srcDims: [1, sny, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, ny, 1],
    dstAffine: makeDiagAffine(1, -2, 1, 0, 20, 0),
    isLabel: true,
  });
  // j = 3 (y=6: {5,6,7} -> 0,4,4 -> 4) .. j = 7 (y=14: {13,14,15} -> 4,4,0 -> 4)
  // j = 2 (y=4: {3,4,5} -> 0,0,0 -> 0), j = 8 (y=16: {15,16,17} -> 0,0,0 -> 0)
  const expectedSym = [0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0];
  assert.deepEqual(Array.from(pos2.img), expectedSym);
  assert.deepEqual(Array.from(neg2.img), expectedSym);

  // Check exact center of mass = 10.0 mm (zero bias).
  let sumMm = 0;
  let count = 0;
  for (let j = 0; j < ny; j++) {
    if (pos2.img[j] === 4) {
      sumMm += j * 2;
      count++;
    }
  }
  assert.equal(sumMm / count, 10.0);

  // 2b. Narrow symmetric 3-voxel slab around y = 10 ([9, 10, 11] = 7):
  //     only j = 5 (y = 10) gets 7; neighbors j = 4 ({7,8,9}) and j = 6 ({11,12,13}) get 0.
  const narrow = new Uint8Array(sny);
  narrow[9] = 7;
  narrow[10] = 7;
  narrow[11] = 7;
  const resNarrow = resliceVolumeData({
    srcImg: narrow,
    srcDims: [1, sny, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, ny, 1],
    dstAffine: makeDiagAffine(1, 2, 1, 0, 0, 0),
    isLabel: true,
  });
  assert.deepEqual(Array.from(resNarrow.img), [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0]);

  // 2c. Exact reflection symmetry across an arbitrary multi-label volume
  //     (including 3-way ties!) for BOTH ey = +2.0 and ey = -2.0.
  const randSrc = new Uint8Array(sny);
  let seed = 1337;
  for (let y = 0; y < sny; y++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    randSrc[y] = seed % 6;
  }
  const randRev = Uint8Array.from(randSrc).reverse();

  const fwd = resliceVolumeData({
    srcImg: randSrc,
    srcDims: [1, sny, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, ny, 1],
    dstAffine: makeDiagAffine(1, 2, 1, 0, 0, 0),
    isLabel: true,
  }).img;
  const revFwd = resliceVolumeData({
    srcImg: randRev,
    srcDims: [1, sny, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, ny, 1],
    dstAffine: makeDiagAffine(1, 2, 1, 0, 0, 0),
    isLabel: true,
  }).img;
  const negDir = resliceVolumeData({
    srcImg: randSrc,
    srcDims: [1, sny, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, ny, 1],
    dstAffine: makeDiagAffine(1, -2, 1, 0, 20, 0),
    isLabel: true,
  }).img;

  assert.deepEqual(Array.from(revFwd), Array.from(fwd).reverse());
  assert.deepEqual(Array.from(negDir), Array.from(fwd).reverse());
}

// ---------------------------------------------------------------------------
// 3. Equal-count 3-way ties on 2 mm and 3 mm ([7, 2, 9] -> center label 2)
// ---------------------------------------------------------------------------
{
  const srcTie = Uint8Array.from([0, 7, 2, 9, 0]); // center at index 2 -> [7, 2, 9]
  const srcTieRev = Uint8Array.from([0, 9, 2, 7, 0]);

  for (const step of [2, -2, 3, -3]) {
    for (const vol of [srcTie, srcTieRev]) {
      const resY = resliceVolumeData({
        srcImg: vol,
        srcDims: [1, 5, 1],
        srcAffine: ID_AFFINE,
        dstDims: [1, 1, 1],
        dstAffine: makeDiagAffine(1, step, 1, 0, 2, 0),
        isLabel: true,
      });
      assert.equal(
        resY.img[0],
        2,
        `3-way tie on step=${step} must pick center label 2, got ${resY.img[0]}`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// 4. 3 mm, 5 mm, and 7 mm anisotropic grids: center slice included and
//    all 3 / 5 / 7 sub-slices covered symmetrically
// ---------------------------------------------------------------------------
{
  // 4a. 3 mm (n = 3, offsets [0, -1/3, +1/3] -> {C-1, C, C+1}):
  //     Every pair of 2 matching labels beats the 3rd regardless of position.
  for (const [triplet, expected] of [
    [[4, 4, 9], 4],
    [[9, 4, 4], 4],
    [[4, 9, 4], 4],
    [[7, 2, 9], 2],
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(triplet),
      srcDims: [1, 1, 3],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 1),
      isLabel: true,
    });
    assert.equal(res.img[0], expected, `3 mm triplet [${triplet}] -> expected ${expected}`);
  }

  // 4b. 5 mm (n = 5, offsets [0, -1/5, +1/5, -2/5, +2/5] -> {C-2, C-1, C, C+1, C+2}):
  //     - Outer + center [8, 1, 8, 1, 8] -> 8 (3 vs 2; proves center & outer ±2 are hit)
  //     - Outer-only majority [8, 2, 3, 4, 8] -> 8 (2 vs 1,1,1; proves BOTH ±2 are hit)
  //     - 5-way tie [11, 12, 13, 14, 15] -> 13 (center wins)
  //     - Inner-vs-outer tie [11, 12, 13, 12, 11] -> 12 (closer-to-center ±1/5 beats ±2/5)
  for (const [quint, expected] of [
    [[8, 1, 8, 1, 8], 8],
    [[8, 2, 3, 4, 8], 8],
    [[11, 12, 13, 14, 15], 13],
    [[11, 12, 13, 12, 11], 12],
    [[1, 9, 9, 9, 1], 9],
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(quint),
      srcDims: [1, 1, 5],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 5, 0, 0, 2),
      isLabel: true,
    });
    assert.equal(res.img[0], expected, `5 mm quint [${quint}] -> expected ${expected}`);
  }

  // 4c. 7 mm (n = 7, offsets [0, ±1/7, ±2/7, ±3/7] -> {C-3..C+3}):
  //     - Outer-only [9, 2, 3, 4, 5, 6, 9] -> 9 (proves ±3 are hit)
  //     - 7-way tie [1, 2, 3, 4, 5, 6, 7] -> 4 (center wins)
  for (const [sept, expected] of [
    [[9, 2, 3, 4, 5, 6, 9], 9],
    [[1, 2, 3, 4, 5, 6, 7], 4],
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(sept),
      srcDims: [1, 1, 7],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 7, 0, 0, 3),
      isLabel: true,
    });
    assert.equal(res.img[0], expected, `7 mm sept [${sept}] -> expected ${expected}`);
  }

  // 4d. Multi-axis anisotropic (2 x 2 x 5 mm => 3 * 3 * 5 = 45 taps, > 8):
  //     Ensure dynamic Int32Array(nDeltas) tally handles 45 taps cleanly.
  const src45 = new Uint8Array(3 * 3 * 5);
  src45.fill(3);
  // Set 23 voxels to label 11 (> half of 45)
  for (let i = 0; i < 23; i++) src45[i] = 11;
  const res45 = resliceVolumeData({
    srcImg: src45,
    srcDims: [3, 3, 5],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(2, 2, 5, 1, 1, 2),
    isLabel: true,
  });
  assert.equal(res45.img[0], 11);

  // 4e. Oblique/rotated axes:
  //     - 45° rotated 3 mm step [3/sqrt(2), 3/sqrt(2), 0] (len = 3.0 -> n = 3)
  //       hits diagonal neighbors (1,1) and (3,3) around center (2,2).
  //     - 45° rotated 2.05 mm axes with all entries ±1.45 (< 1.5001 individually,
  //       but Euclidean len = 2.0506 > 1.5001 -> 3x3 = 9 taps) picks surrounding
  //       label 9 (6 votes) over center label 5 (3 votes).
  const s3 = 3 / Math.SQRT2;
  const rotSrc = new Uint8Array(5 * 5); // x in 0..4, y in 0..4, z=0
  rotSrc[2 + 2 * 5] = 5;
  rotSrc[1 + 1 * 5] = 9;
  rotSrc[3 + 3 * 5] = 9;
  const resRot3 = resliceVolumeData({
    srcImg: rotSrc,
    srcDims: [5, 5, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: [
      [s3, -1 / Math.SQRT2, 0, 2],
      [s3, 1 / Math.SQRT2, 0, 2],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    isLabel: true,
  });
  assert.equal(resRot3.img[0], 9);

  const rotSrc2 = new Uint8Array(5 * 5);
  rotSrc2.fill(9);
  rotSrc2[2 + 2 * 5] = 5;
  const resRot2 = resliceVolumeData({
    srcImg: rotSrc2,
    srcDims: [5, 5, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: [
      [1.45, -1.45, 0, 2.1],
      [1.45, 1.45, 0, 2.0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    isLabel: true,
  });
  assert.equal(resRot2.img[0], 9);
}

// ---------------------------------------------------------------------------
// 5. Out-of-bounds background counting, FreeSurfer labelLut & hdrPatch
// ---------------------------------------------------------------------------
{
  // 5a. OOB samples vote as background (0):
  //     At z = 0 with 3 mm step, taps hit z in {-1 (OOB->0), 0, +1}.
  const oobMajority = resliceVolumeData({
    srcImg: Uint8Array.from([5, 0]),
    srcDims: [1, 1, 2],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 0),
    isLabel: true,
  });
  // Votes: center=5, -1=0(OOB), +1=0 -> background 0 wins (2 vs 1).
  assert.equal(oobMajority.img[0], 0);

  const oobTie = resliceVolumeData({
    srcImg: Uint8Array.from([5, 6]),
    srcDims: [1, 1, 2],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 0),
    isLabel: true,
  });
  // Votes: center=5, -1=0(OOB), +1=6 -> 3-way tie resolves to center 5.
  assert.equal(oobTie.img[0], 5);

  // 5b. FreeSurfer labelLut remapping & NIFTI_INTENT_LABEL hdrPatch on both
  //     fast path (nDeltas === 1) and majority-vote path (nDeltas > 1).
  const lut = new Int16Array([0, 2, 1001, 2035]);
  const srcLut = Uint8Array.from([0, 1, 2, 3, 3, 3]);
  const resFast = resliceVolumeData({
    srcImg: srcLut,
    srcDims: [6, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [6, 1, 1],
    dstAffine: ID_AFFINE,
    isLabel: true,
    labelLut: lut,
  });
  assert.deepEqual(Array.from(resFast.img), [0, 2, 1001, 2035, 2035, 2035]);
  assert.deepEqual(resFast.hdrPatch, {
    datatypeCode: 4,
    numBitsPerVoxel: 16,
    scl_slope: 1,
    scl_inter: 0,
    cal_min: 0,
    cal_max: 2035,
    intent_code: 1002,
  });

  const resMulti = resliceVolumeData({
    srcImg: srcLut,
    srcDims: [6, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [2, 1, 1],
    dstAffine: makeDiagAffine(3, 1, 1, 1, 0, 0),
    isLabel: true,
    labelLut: lut,
  });
  // i=0 -> x=1 ({0,1,2} -> tie -> center 1 -> lut 2)
  // i=1 -> x=4 ({3,4,5} -> [3,3,3] -> 3 -> lut 2035)
  assert.deepEqual(Array.from(resMulti.img), [2, 2035]);
  assert.deepEqual(resMulti.hdrPatch, {
    datatypeCode: 4,
    numBitsPerVoxel: 16,
    scl_slope: 1,
    scl_inter: 0,
    cal_min: 0,
    cal_max: 2035,
    intent_code: 1002,
  });
}

// ---------------------------------------------------------------------------
// 6. Probability (trilinear) & intensity (nearest-neighbor) paths unchanged
// ---------------------------------------------------------------------------
{
  // 6a. Probability map: trilinear interpolation & uint8 0..255 with scl_slope=1/255.
  const srcProb = new Float32Array([0, 1, 0, 1, 0, 1, 0, 1]); // 2x2x2: x=0 -> 0, x=1 -> 1
  const resProb = resliceVolumeData({
    srcImg: srcProb,
    srcDims: [2, 2, 2],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, 0.5, 0.5, 0.5),
    isLabel: false,
    isProbability: true,
  });
  assert.ok(resProb.img instanceof Uint8Array);
  assert.equal(resProb.img[0], 128); // Math.trunc(0.5 * 255 + 0.5) = 128
  assert.equal(resProb.hdrPatch.datatypeCode, 2);
  assert.equal(resProb.hdrPatch.numBitsPerVoxel, 8);
  assert.equal(resProb.hdrPatch.cal_min, 0);
  assert.equal(resProb.hdrPatch.cal_max, 1);
  assert.ok(Math.abs(resProb.hdrPatch.scl_slope - 1 / 255) < 1e-12);
  assert.equal(resProb.hdrPatch.scl_inter, 0);

  // 6b. Intensity output: nearest-neighbor preserving native TypedArray kind,
  //     NOT tagged with NIFTI_INTENT_LABEL.
  const srcInt = new Int16Array([100, 200, 300, 400]);
  const resInt = resliceVolumeData({
    srcImg: srcInt,
    srcDims: [4, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [2, 1, 1],
    dstAffine: makeDiagAffine(2, 1, 1, 0.4, 0, 0),
    isLabel: false,
    isProbability: false,
    dstTypedArrayKind: "Int16Array",
  });
  assert.ok(resInt.img instanceof Int16Array);
  assert.deepEqual(Array.from(resInt.img), [100, 300]); // round(0.4)=0, round(2.4)=2
  assert.deepEqual(resInt.hdrPatch, { scl_slope: 1, scl_inter: 0 });
}

console.log("reslice-volume OK (all 1/1.5/2/3/5/7 mm label, symmetry, tie, OOB, LUT, probability & intensity checks passed).");
