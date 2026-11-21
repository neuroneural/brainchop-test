// Standalone unit tests for reslice-volume.js:
//   - Adaptive center-outward midpoint-pair majority vote (n = 1, 4, 6, 8)
//   - Bit-exact floor(v + 0.5) rounding (matching brainchopC conform.c)
//   - Zero directional bias at BOTH integer (C) and half-integer (C + 0.5) centers
//     for 2 mm, 3 mm, 5 mm, and 7 mm anisotropic scans (incl. odd-dim scans)
//   - Center-outward tie breaking, OOB background votes, FreeSurfer LUT & hdrPatch
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
// 1. 1 mm identity, 1.5 mm fast path (n = 1), +0.5 shift, and negative
//    half-integer exact floor(v + 0.5) rounding
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
  assert.deepEqual(Array.from(resNegQuarter.img), [10, 20, 30]);

  const resNegHalf = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [3, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, -0.5, 0, 0),
    isLabel: true,
  });
  assert.deepEqual(Array.from(resNegHalf.img), [10, 20, 30]);

  const resNegPastHalf = resliceVolumeData({
    srcImg: src1d,
    srcDims: [7, 1, 1],
    srcAffine: ID_AFFINE,
    dstDims: [3, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 1, -0.5001, 0, 0),
    isLabel: true,
  });
  assert.deepEqual(Array.from(resNegPastHalf.img), [0, 10, 20]);
}

// ---------------------------------------------------------------------------
// 2. 2 mm anisotropic grid (n = 4, offsets ±0.125, ±0.375):
//    ZERO directional shift & symmetry at BOTH integer C and half-integer C+0.5
// ---------------------------------------------------------------------------
{
  const sny = 21; // y = 0..20, center at y = 10
  const ny = 11;  // native j = 0..10 maps to conformed y = 0, 2, ..., 20

  // 2a. Integer centers C: probes {C, C, C-1, C+1} -> zero centroid shift
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
  const expectedSym = [0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0];
  assert.deepEqual(Array.from(pos2.img), expectedSym);
  assert.deepEqual(Array.from(neg2.img), expectedSym);

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
  //     for BOTH ey = +2.0 and ey = -2.0 at integer centers C.
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

  // 2d. Half-integer centers C + 0.5 (y = 0.5, 2.5, ..., 20.5, exact center 10.5):
  //     probes {C, C+1, C, C+1} — exact 50/50 split, zero half-integers, zero shift.
  const halfSrc = new Uint8Array(22);
  for (let y = 8; y <= 13; y++) halfSrc[y] = 4; // 6 voxels centered at 10.5
  const res2Half = resliceVolumeData({
    srcImg: halfSrc,
    srcDims: [1, 22, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, 11, 1],
    dstAffine: makeDiagAffine(1, 2, 1, 0, 0.5, 0),
    isLabel: true,
  });
  assert.deepEqual(Array.from(res2Half.img), [0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0]);
  let sumHalfMm = 0;
  let cntHalf = 0;
  for (let j = 0; j < 11; j++) {
    if (res2Half.img[j] === 4) {
      sumHalfMm += 0.5 + 2 * j;
      cntHalf++;
    }
  }
  assert.equal(sumHalfMm / cntHalf, 10.5);
}

// ---------------------------------------------------------------------------
// 3. 3 mm anisotropic grid (n = 4, offsets ±0.125, ±0.375):
//    Integer centers C ({C, C, C-1, C+1}) AND odd-dim half-integer C + 0.5
//    ({C, C+1, C-1, C+2}) — zero +0.5 shift!
// ---------------------------------------------------------------------------
{
  // 3a. Integer center C (z = 1, probes {1, 1, 0, 2}):
  //     center label gets 2 votes & appears first; 3-way ties & 2-vs-2 center ties pick center.
  for (const step of [2, -2, 3, -3]) {
    for (const [triplet, expected] of [
      [[4, 4, 9], 4],
      [[9, 4, 4], 4],
      [[4, 9, 4], 9],
      [[7, 2, 9], 2],
      [[9, 2, 7], 2],
    ]) {
      const res = resliceVolumeData({
        srcImg: Uint8Array.from(triplet),
        srcDims: [1, 1, 3],
        srcAffine: ID_AFFINE,
        dstDims: [1, 1, 1],
        dstAffine: makeDiagAffine(1, 1, step, 0, 0, 1),
        isLabel: true,
      });
      assert.equal(
        res.img[0],
        expected,
        `step=${step} integer center [${triplet}] -> expected ${expected}, got ${res.img[0]}`
      );
    }
  }

  // 3b. Odd-dimension 3 mm half-integer center C + 0.5 (c0 = 1.5, probes {1, 2, 0, 3}):
  //     - [8, 2, 3, 8] -> 8 proves BOTH z=0 (C-1) and z=3 (C+2) are sampled!
  //       (Odd-3 shifted +0.5 here, skipped z=0, and returned 3.)
  //     - [9, 2, 2, 9] -> 2 (centermost pair {1, 2} beats outer {0, 3} on 2-vs-2 tie)
  //     - [1, 2, 3, 4] -> 2 (centermost probe -0.125 -> C wins 4-way tie)
  for (const [quad, expected] of [
    [[8, 2, 3, 8], 8],
    [[8, 8, 8, 1], 8],
    [[1, 8, 8, 8], 8],
    [[8, 1, 8, 8], 8],
    [[8, 8, 1, 8], 8],
    [[9, 2, 2, 9], 2],
    [[1, 2, 3, 4], 2],
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(quad),
      srcDims: [1, 1, 4],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 1.5),
      isLabel: true,
    });
    assert.equal(
      res.img[0],
      expected,
      `3 mm half-integer c0=1.5 [${quad}] -> expected ${expected}, got ${res.img[0]}`
    );
  }

  // 3c. Odd-dim 3 mm slab centered at 13.5 (nz = 9, z(k) = 1.5 + 3k):
  //     zero centroid shift for both 4-voxel [12..15] and 8-voxel [10..17] slabs.
  for (const [lo, hi, expected] of [
    [12, 15, [0, 0, 0, 0, 4, 0, 0, 0, 0]],
    [10, 17, [0, 0, 0, 4, 4, 4, 0, 0, 0]],
  ]) {
    const slab = new Uint8Array(30);
    for (let z = lo; z <= hi; z++) slab[z] = 4;
    const res = resliceVolumeData({
      srcImg: slab,
      srcDims: [1, 1, 30],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 9],
      dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 1.5),
      isLabel: true,
    });
    assert.deepEqual(Array.from(res.img), expected);
    let sMm = 0;
    let cnt = 0;
    for (let k = 0; k < 9; k++) {
      if (res.img[k] === 4) {
        sMm += 1.5 + 3 * k;
        cnt++;
      }
    }
    assert.equal(sMm / cnt, 13.5, `3 mm odd-dim slab [${lo}..${hi}] must have exact 13.5 mm centroid`);
  }
}

// ---------------------------------------------------------------------------
// 4. 5 mm anisotropic grid (n = 6, offsets ±0.5/6, ±1.5/6, ±2.5/6):
//    Integer centers C ({C, C, C-1, C+1, C-2, C+2}) AND odd-dim half-integer
//    C + 0.5 ({C, C+1, C-1, C+2, C-2, C+3}) — zero +0.5 shift!
// ---------------------------------------------------------------------------
{
  // 4a. Integer center C = 2 (probes {2, 2, 1, 3, 0, 4}):
  for (const [quint, expected] of [
    [[8, 1, 8, 1, 8], 8],      // 4 vs 2
    [[8, 8, 3, 4, 8], 8],      // 3 vs 2 (proves both outer C-2 and C+2 are hit)
    [[8, 2, 3, 4, 8], 3],      // center 3 gets 2 votes & appears first, beats outer 8 (2-vs-2)
    [[11, 12, 13, 14, 15], 13],// center 13 gets 2 votes vs 1 each
    [[11, 12, 13, 12, 11], 13],// 2-vs-2-vs-2 tie -> center 13 wins
    [[1, 9, 9, 9, 1], 9],      // 4 vs 2
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(quint),
      srcDims: [1, 1, 5],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 5, 0, 0, 2),
      isLabel: true,
    });
    assert.equal(res.img[0], expected, `5 mm integer center [${quint}] -> expected ${expected}`);
  }

  // 4b. Odd-dimension 5 mm half-integer center C + 0.5 (c0 = 2.5, probes {2, 3, 1, 4, 0, 5}):
  //     - [8, 2, 3, 4, 5, 8] -> 8 proves BOTH z=0 (C-2) and z=5 (C+3) are sampled!
  //       (Odd-5 shifted +0.5 here, skipped z=0, and returned 3.)
  //     - [1, 9, 2, 2, 9, 1] -> 2 (centermost pair {2, 3} wins 2-vs-2-vs-2 tie)
  //     - [11, 12, 13, 14, 15, 16] -> 13 (centermost probe -0.5/6 -> C wins 6-way tie)
  for (const [sext, expected] of [
    [[8, 2, 3, 4, 5, 8], 8],
    [[8, 8, 8, 8, 1, 1], 8],
    [[1, 1, 8, 8, 8, 8], 8],
    [[9, 9, 2, 2, 9, 9], 9],
    [[1, 9, 2, 2, 9, 1], 2],
    [[11, 12, 13, 14, 15, 16], 13],
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(sext),
      srcDims: [1, 1, 6],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 5, 0, 0, 2.5),
      isLabel: true,
    });
    assert.equal(
      res.img[0],
      expected,
      `5 mm half-integer c0=2.5 [${sext}] -> expected ${expected}, got ${res.img[0]}`
    );
  }

  // 4c. Odd-dim 5 mm slabs centered at 17.5 (nz = 7, z(k) = 2.5 + 5k):
  //     zero centroid shift for 6-voxel [15..20], 12-voxel [12..23], and 16-voxel [10..25] slabs.
  for (const [lo, hi, expected] of [
    [15, 20, [0, 0, 0, 4, 0, 0, 0]],
    [12, 23, [0, 0, 4, 4, 4, 0, 0]],
    [10, 25, [0, 0, 4, 4, 4, 0, 0]],
  ]) {
    const slab = new Uint8Array(35);
    for (let z = lo; z <= hi; z++) slab[z] = 4;
    const res = resliceVolumeData({
      srcImg: slab,
      srcDims: [1, 1, 35],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 7],
      dstAffine: makeDiagAffine(1, 1, 5, 0, 0, 2.5),
      isLabel: true,
    });
    assert.deepEqual(Array.from(res.img), expected);
    let sMm = 0;
    let cnt = 0;
    for (let k = 0; k < 7; k++) {
      if (res.img[k] === 4) {
        sMm += 2.5 + 5 * k;
        cnt++;
      }
    }
    assert.equal(sMm / cnt, 17.5, `5 mm odd-dim slab [${lo}..${hi}] must have exact 17.5 mm centroid`);
  }
}

// ---------------------------------------------------------------------------
// 5. 7 mm anisotropic grid (n = 8, offsets ±0.0625, ±0.1875, ±0.3125, ±0.4375),
//    multi-axis anisotropic (96 taps & max 512 taps), and oblique/rotated axes
// ---------------------------------------------------------------------------
{
  // 5a. 7 mm integer center C = 3 (probes {3, 3, 2, 4, 1, 5, 0, 6}):
  for (const [sept, expected] of [
    [[9, 9, 3, 4, 5, 6, 9], 9], // 3 vs 2 for center 4 -> proves outer ±3 are hit
    [[1, 2, 3, 4, 5, 6, 7], 4], // center 4 gets 2 votes vs 1 each
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(sept),
      srcDims: [1, 1, 7],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 7, 0, 0, 3),
      isLabel: true,
    });
    assert.equal(res.img[0], expected, `7 mm integer center [${sept}] -> expected ${expected}`);
  }

  // 5b. 7 mm half-integer center C + 0.5 = 3.5 (probes {3, 4, 2, 5, 1, 6, 0, 7}):
  for (const [oct, expected] of [
    [[9, 2, 3, 4, 5, 6, 7, 9], 9], // 2 vs 1 each -> proves BOTH z=0 (C-3) and z=7 (C+4) are hit
    [[9, 1, 2, 8, 8, 3, 4, 9], 8], // centermost pair {3, 4} beats outer {0, 7} on 2-vs-2 tie
    [[1, 2, 3, 4, 5, 6, 7, 8], 4], // centermost probe -0.0625 -> C wins 8-way tie
  ]) {
    const res = resliceVolumeData({
      srcImg: Uint8Array.from(oct),
      srcDims: [1, 1, 8],
      srcAffine: ID_AFFINE,
      dstDims: [1, 1, 1],
      dstAffine: makeDiagAffine(1, 1, 7, 0, 0, 3.5),
      isLabel: true,
    });
    assert.equal(res.img[0], expected, `7 mm half-integer c0=3.5 [${oct}] -> expected ${expected}`);
  }

  // 5c. Multi-axis anisotropic (3 x 3 x 5 mm => 4 * 4 * 6 = 96 taps at half-integer center):
  //     Every one of the 96 voxels in [0..3] x [0..3] x [0..5] is sampled once.
  const src96 = new Uint8Array(4 * 4 * 6);
  src96.fill(3);
  for (let i = 0; i < 49; i++) src96[i] = 11; // 49 > 47
  const res96 = resliceVolumeData({
    srcImg: src96,
    srcDims: [4, 4, 6],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(3, 3, 5, 1.5, 1.5, 2.5),
    isLabel: true,
  });
  assert.equal(res96.img[0], 11);

  // 5d. Maximum 3D probe count (7 x 7 x 7 mm => 8 * 8 * 8 = 512 taps at half-integer center):
  const src512 = new Uint8Array(8 * 8 * 8);
  src512.fill(5);
  for (let i = 0; i < 257; i++) src512[i] = 14; // 257 > 255
  const res512 = resliceVolumeData({
    srcImg: src512,
    srcDims: [8, 8, 8],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(7, 7, 7, 3.5, 3.5, 3.5),
    isLabel: true,
  });
  assert.equal(res512.img[0], 14);

  // 5e. Oblique/rotated 2.05 mm axes: every affine entry is ±1.45 (< 1.5001 individually),
  //     but Euclidean step length is sqrt(1.45^2 + 1.45^2) = 2.0506 > 1.5001 -> 4x4 = 16 taps:
  //     4 inner taps hit center (2,2)=5, 12 outer taps hit neighbors=9 -> 9 wins (12 vs 4).
  const rotSrc = new Uint8Array(5 * 5);
  rotSrc.fill(9);
  rotSrc[2 + 2 * 5] = 5;
  const resRot = resliceVolumeData({
    srcImg: rotSrc,
    srcDims: [5, 5, 1],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: [
      [1.45, -1.45, 0, 2.0],
      [1.45, 1.45, 0, 2.0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    isLabel: true,
  });
  assert.equal(resRot.img[0], 9);
}

// ---------------------------------------------------------------------------
// 6. Out-of-bounds background counting, FreeSurfer labelLut & hdrPatch
// ---------------------------------------------------------------------------
{
  // 6a. OOB samples vote as background (0):
  //     At z = 0.5 with 3 mm step (n = 4), taps hit z in {0, 1, -1 (OOB->0), 2}.
  const oobMajority = resliceVolumeData({
    srcImg: Uint8Array.from([5, 6, 0]),
    srcDims: [1, 1, 3],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 0.5),
    isLabel: true,
  });
  // Votes: 5, 6, 0 (OOB), 0 -> background 0 wins (2 vs 1 vs 1).
  assert.equal(oobMajority.img[0], 0);

  const oobTie = resliceVolumeData({
    srcImg: Uint8Array.from([5, 6, 7]),
    srcDims: [1, 1, 3],
    srcAffine: ID_AFFINE,
    dstDims: [1, 1, 1],
    dstAffine: makeDiagAffine(1, 1, 3, 0, 0, 0.5),
    isLabel: true,
  });
  // Votes: 5, 6, 0 (OOB), 7 -> 4-way tie resolves to centermost probe 5.
  assert.equal(oobTie.img[0], 5);

  // 6b. FreeSurfer labelLut remapping & NIFTI_INTENT_LABEL hdrPatch on both
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
  // i=0 -> x=1 ({1,1,0,2} -> center 1 gets 2 votes -> lut 2)
  // i=1 -> x=4 ({4,4,3,5} -> [3,3,3,3] -> 3 -> lut 2035)
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
// 7. Probability (trilinear) & intensity (nearest-neighbor) paths unchanged
// ---------------------------------------------------------------------------
{
  const srcProb = new Float32Array([0, 1, 0, 1, 0, 1, 0, 1]);
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
  assert.equal(resProb.img[0], 128);
  assert.equal(resProb.hdrPatch.datatypeCode, 2);
  assert.equal(resProb.hdrPatch.numBitsPerVoxel, 8);
  assert.equal(resProb.hdrPatch.cal_min, 0);
  assert.equal(resProb.hdrPatch.cal_max, 1);
  assert.ok(Math.abs(resProb.hdrPatch.scl_slope - 1 / 255) < 1e-12);
  assert.equal(resProb.hdrPatch.scl_inter, 0);

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
  assert.deepEqual(Array.from(resInt.img), [100, 300]);
  assert.deepEqual(resInt.hdrPatch, { scl_slope: 1, scl_inter: 0 });
}

console.log(
  "reslice-volume OK (all 1/1.5/2/3/5/7 mm integer & half-integer center, symmetry, tie, OOB, LUT, probability & intensity checks passed)."
);
