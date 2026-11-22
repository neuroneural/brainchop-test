// Unit + end-to-end browser verification for clinical-parity conform() (0-99.9%
// display + 0-98% coil-flare-safe inference + <2% negative floor) and
// deterministic computeQuantiles().
// Run: node tests/conform-and-quantiles.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import {
  conformVolumeData,
  scaleIntensityConform,
  computeConformAffine,
  isVolumeConformed,
  createInferenceInputCache,
  DISPLAY_CONFORM_FHIGH,
  INFERENCE_CONFORM_FHIGH,
} from '../conform-volume.js';
import {
  computeQuantiles,
  quantileNormalizeVolumeData,
  minMaxNormalizeVolumeData,
} from '../tensor-utils.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseNiftiGz(filePath) {
  const buf = fs.readFileSync(filePath);
  const raw = buf[0] === 0x1f && buf[1] === 0x8b ? zlib.gunzipSync(buf) : buf;
  const dv = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
  const dims = [
    dv.getInt16(40, true),
    dv.getInt16(42, true),
    dv.getInt16(44, true),
    dv.getInt16(46, true),
  ];
  const datatype = dv.getInt16(70, true);
  const voxOffset = Math.round(dv.getFloat32(108, true));
  const nvox = dims[1] * dims[2] * dims[3];
  const body = raw.subarray(voxOffset);
  let voxels;
  if (datatype === 2) {
    voxels = new Uint8Array(body.buffer, body.byteOffset, nvox);
  } else if (datatype === 4) {
    const aligned = body.byteOffset % 2 === 0 ? body : Uint8Array.from(body);
    voxels = new Int16Array(aligned.buffer, aligned.byteOffset, nvox);
  } else {
    throw new Error(`Unexpected NIfTI datatype ${datatype}`);
  }
  return { dims, datatype, voxels, raw };
}

function foregroundDice(a, b) {
  let inter = 0;
  let ca = 0;
  let cb = 0;
  for (let i = 0; i < a.length; i++) {
    const fa = a[i] > 0;
    const fb = b[i] > 0;
    if (fa) ca++;
    if (fb) cb++;
    if (fa && fb) inter++;
  }
  return ca + cb > 0 ? (2 * inter) / (ca + cb) : 1;
}

function multiclassForegroundDice(a, b) {
  let match = 0;
  let ca = 0;
  let cb = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) ca++;
    if (b[i] > 0) cb++;
    if (a[i] > 0 && a[i] === b[i]) match++;
  }
  return ca + cb > 0 ? (2 * match) / (ca + cb) : 1;
}

/**
 * Exact JS mirror of brainchopC/src/conform.c:scale_intensity (f_high = 0.98)
 * for parity verification.
 */
function referenceBrainchopCScaleIntensity(vol) {
  const n = vol.length;
  let srcMin = vol[0];
  let srcMax = vol[0];
  let nz = 0;
  let nltz = 0;
  for (let i = 0; i < n; i++) {
    if (vol[i] < srcMin) srcMin = vol[i];
    if (vol[i] > srcMax) srcMax = vol[i];
    if (Math.abs(vol[i]) >= 1e-15) nz++;
    if (vol[i] < 0) nltz++;
  }
  if (srcMin < 0 && (100.0 * nltz) / n < 2.0) srcMin = 0;
  const binSize = Math.fround((srcMax - srcMin) / 1000.0);
  if (!(binSize > 0)) return;
  const hist = new Uint32Array(1000);
  for (let i = 0; i < n; i++) {
    let bin = Math.trunc(Math.fround((vol[i] - srcMin) / binSize));
    if (bin < 0) bin = 0;
    if (bin > 999) bin = 999;
    hist[bin]++;
  }
  const nth = n - Math.floor(0.02 * nz);
  let cumulative = 0;
  let idx = 0;
  for (; idx < 999; idx++) {
    cumulative += hist[idx];
    if (cumulative + hist[idx + 1] >= nth) break;
  }
  srcMax = Math.fround(idx * binSize + srcMin);
  const scale = srcMin !== srcMax ? Math.fround(255.0 / (srcMax - srcMin)) : 1.0;
  for (let i = 0; i < n; i++) {
    const v = scale * (vol[i] - srcMin);
    vol[i] = v <= 0 ? 0 : v >= 255 ? 255 : v;
  }
}

/**
 * Build a realistic 16-bit 96x128x128 synthetic brain + exterior fat/coil-flare phantom.
 * Brain GM/WM occupies an ellipsoid in [200..500]; flare voxels occupy a specified
 * fraction of non-zero voxels at `flareMultiplier * 500` in an exterior shell.
 */
function makeClinicalFlarePhantom({ flareFracOfNz, flareMultiplier, nx = 96, ny = 128, nz = 128 }) {
  const voxels = new Int16Array(nx * ny * nz);
  // 0.5% negative Gibbs ringing at corners
  for (let i = 0; i < Math.floor(voxels.length * 0.005); i++) voxels[i] = -600;
  let brainCount = 0;
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        const dx = (x - nx / 2) / 30;
        const dy = (y - ny / 2) / 42;
        const dz = (z - nz / 2) / 38;
        const r2 = dx * dx + dy * dy + dz * dz;
        const idx = x + y * nx + z * nx * ny;
        if (r2 < 1.0) {
          // WM core (~450..500), GM rim (~200..350)
          voxels[idx] = Math.round(200 + 300 * (1 - r2));
          brainCount++;
        }
      }
    }
  }
  // Choose exact flare count so flare / (brain + neg + flare) ~= flareFracOfNz
  const negCount = Math.floor(voxels.length * 0.005);
  const flareCount = Math.round((flareFracOfNz * (brainCount + negCount)) / (1 - flareFracOfNz));
  const flareVal = Math.round(500 * flareMultiplier);
  let placed = 0;
  for (let z = 2; z < nz - 2 && placed < flareCount; z++) {
    for (let y = 2; y < ny - 2 && placed < flareCount; y++) {
      for (let x = 2; x < nx - 2 && placed < flareCount; x++) {
        const idx = x + y * nx + z * nx * ny;
        if (voxels[idx] === 0) {
          voxels[idx] = flareVal;
          placed++;
        }
      }
    }
  }
  const affine = [2, 0, 0, -nx, 0, 2, 0, -ny, 0, 0, 2, -nz, 0, 0, 0, 1];
  const dims = [3, nx, ny, nz, 1, 1, 1, 1];
  return { nx, ny, nz, dims, affine, voxels, brainCount, flareCount, flareVal };
}

/**
 * Derive a 256³ 1mm LIA Int16 clinical coil-flare scan directly from bundled
 * t1_crop.nii.gz (scaled ×4 into [0..1020] + 1.48% exterior flare at 8× = 8160,
 * leaving every brain voxel untouched). Also supports a 2× downsampled 128³ 2mm
 * non-conformed version for verifying native-grid reslice preservation.
 */
function makeT1CropCoilFlareInt16Buffer({ downsample2x = false } = {}) {
  const t1Path = path.join(root, 'public', 't1_crop.nii.gz');
  const raw = zlib.gunzipSync(fs.readFileSync(t1Path));
  const dvIn = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
  const voxOff = Math.round(dvIn.getFloat32(108, true));
  const t1U8 = new Uint8Array(raw.buffer, raw.byteOffset + voxOff, 256 ** 3);

  const dim = downsample2x ? 128 : 256;
  const pix = downsample2x ? 2 : 1;
  const voxels = new Int16Array(dim ** 3);
  let headNz = 0;
  if (downsample2x) {
    for (let z = 0; z < 128; z++) {
      for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
          let sum = 0;
          for (let dz = 0; dz < 2; dz++) {
            for (let dy = 0; dy < 2; dy++) {
              const row = ((z * 2 + dz) * 256 + (y * 2 + dy)) * 256 + x * 2;
              sum += t1U8[row] + t1U8[row + 1];
            }
          }
          const v = Math.round((sum / 8) * 4);
          const idx = x + y * 128 + z * 128 * 128;
          voxels[idx] = v;
          if (v > 0) headNz++;
        }
      }
    }
  } else {
    for (let i = 0; i < t1U8.length; i++) {
      const v = t1U8[i] * 4;
      voxels[i] = v;
      if (v > 0) headNz++;
    }
  }

  // Inject ~1.48% of non-zero voxels as 8× coil flare (8160) in exterior air slices (z = 0..3)
  const flareCount = Math.round(0.015 * headNz);
  let placed = 0;
  for (let i = 0; i < voxels.length && placed < flareCount; i++) {
    if (voxels[i] === 0) {
      voxels[i] = 8160;
      placed++;
    }
  }

  // Copy original header and update dims/pixDims/datatype/sform cleanly.
  const headerBytes = 352;
  const out = new ArrayBuffer(headerBytes + voxels.byteLength);
  new Uint8Array(out, 0, 348).set(raw.subarray(0, 348));
  const dv = new DataView(out);
  dv.setInt16(42, dim, true);
  dv.setInt16(44, dim, true);
  dv.setInt16(46, dim, true);
  dv.setInt16(70, 4, true); // DT_INT16
  dv.setInt16(72, 16, true);
  dv.setFloat32(80, pix, true);
  dv.setFloat32(84, pix, true);
  dv.setFloat32(88, pix, true);
  dv.setFloat32(108, headerBytes, true);
  dv.setFloat32(112, 1, true);
  dv.setFloat32(116, 0, true);
  dv.setFloat32(124, 0, true);
  dv.setFloat32(128, 0, true);
  if (downsample2x) {
    // Scale sform linear columns by 2 while keeping the same anatomical center
    for (const off of [280, 284, 288, 296, 300, 304, 312, 316, 320]) {
      dv.setFloat32(off, dvIn.getFloat32(off, true) * 2, true);
    }
    dv.setInt16(252, 0, true); // use sform cleanly
    dv.setInt16(254, 1, true);
  }
  new Int16Array(out, headerBytes, voxels.length).set(voxels);
  return { buffer: out, dim, pix, headNz, flareCount, t1U8 };
}

function makeNifti1Int16Buffer({ nx, ny, nz, pix = [2, 2, 2], slope = 1, inter = 0, voxels }) {
  const headerBytes = 352;
  const buf = new ArrayBuffer(headerBytes + voxels.byteLength);
  const dv = new DataView(buf);
  dv.setInt32(0, 348, true);
  dv.setInt16(40, 3, true);
  dv.setInt16(42, nx, true);
  dv.setInt16(44, ny, true);
  dv.setInt16(46, nz, true);
  dv.setInt16(48, 1, true);
  dv.setInt16(70, 4, true); // DT_INT16
  dv.setInt16(72, 16, true);
  dv.setFloat32(76, 1, true);
  dv.setFloat32(80, pix[0], true);
  dv.setFloat32(84, pix[1], true);
  dv.setFloat32(88, pix[2], true);
  dv.setFloat32(108, headerBytes, true);
  dv.setFloat32(112, slope, true);
  dv.setFloat32(116, inter, true);
  dv.setInt16(252, 1, true); // qform_code
  dv.setInt16(254, 1, true); // sform_code
  // RAS affine centered at origin
  dv.setFloat32(280, pix[0], true);
  dv.setFloat32(292, -0.5 * nx * pix[0], true);
  dv.setFloat32(300, pix[1], true);
  dv.setFloat32(308, -0.5 * ny * pix[1], true);
  dv.setFloat32(320, pix[2], true);
  dv.setFloat32(324, -0.5 * nz * pix[2], true);
  // magic "n+1\0"
  dv.setUint8(344, 0x6e);
  dv.setUint8(345, 0x2b);
  dv.setUint8(346, 0x31);
  dv.setUint8(347, 0x00);
  new Int16Array(buf, headerBytes, voxels.length).set(voxels);
  return buf;
}

// =========================================================================
// PART 1: Pure JS Unit Tests (conform-volume.js + tensor-utils.js)
// =========================================================================
function runUnitTests() {
  console.log('--- Part 1: Unit tests (conform-volume.js & tensor-utils.js) ---');

  // 1a. Default 0-99.9% clip: clips extreme hot-pixel spikes (<0.1%) WITHOUT saturating bright WM.
  {
    const n = 100000;
    const vol = new Float32Array(n);
    // 50% air (0), 49.97% brain tissue in [100..500], 0.03% hot-pixel spikes at 10,000.
    // Non-zero = 50,000; top 0.1% of non-zero = 50 voxels (> 30 hot pixels).
    for (let i = 50000; i < 99970; i++) {
      vol[i] = 100 + ((i - 50000) / 49970) * 400;
    }
    for (let i = 99970; i < 100000; i++) {
      vol[i] = 10000;
    }
    const info = scaleIntensityConform(vol);
    assert.equal(info.flooredNegative, false);
    assert.equal(info.srcMin, 0);
    assert.ok(info.srcMax < 600, `Expected 99.9% clip below 600, got ${info.srcMax}`);
    assert.ok(vol[99969] >= 220, `Expected bright brain tissue >= 220/255, got ${vol[99969]}`);
    assert.equal(vol[0], 0, 'Air voxel must remain 0');
    assert.equal(vol[99999], 255, 'Clipped hot pixel must clamp to 255');

    // Clean brain without hot pixels must saturate far fewer bright WM voxels under default 0.999 than 0.98
    const clean = new Float32Array(n);
    const clean98 = new Float32Array(n);
    for (let i = 50000; i < n; i++) clean[i] = clean98[i] = 100 + ((i - 50000) / 50000) * 400;
    scaleIntensityConform(clean);
    scaleIntensityConform(clean98, 0.98);
    let satClean = 0;
    let satClean98 = 0;
    for (let i = 50000; i < n; i++) {
      if (clean[i] >= 254.5) satClean++;
      if (clean98[i] >= 254.5) satClean98++;
    }
    assert.ok(satClean / 50000 < 0.007, `Default 0.999 must barely clip clean WM, got ${(100 * satClean / 50000).toFixed(2)}%`);
    assert.ok(satClean * 3 < satClean98, `Expected 0.999 (${satClean}) to saturate >3x fewer bright voxels than 0.98 (${satClean98})`);

    // Explicit fHigh = 0.98 option (brainchopC/niimath mode) clips top 2% outliers cleanly
    const vol98 = new Float32Array(n);
    for (let i = 50000; i < 99000; i++) vol98[i] = 100 + ((i - 50000) / 49000) * 400;
    for (let i = 99000; i < 100000; i++) vol98[i] = 10000;
    const info98 = scaleIntensityConform(vol98, 0.98);
    assert.ok(info98.srcMax < 600, `Expected optional 98% clip below 600, got ${info98.srcMax}`);
  }

  // 1b. Rare negative Gibbs ringing (< 2% negative voxels) floored to 0.
  {
    const n = 100000;
    const vol = new Float32Array(n);
    // 0.5% negative ringing voxels at -800, 49.5% air at 0, 50% brain in [100..500]
    for (let i = 0; i < 500; i++) vol[i] = -800;
    for (let i = 50000; i < n; i++) vol[i] = 100 + ((i - 50000) / 50000) * 400;
    const info = scaleIntensityConform(vol);
    assert.equal(info.flooredNegative, true, 'Expected <2% negative voxels to be floored');
    assert.equal(info.srcMin, 0);
    assert.equal(vol[0], 0, 'Negative ringing must clamp to 0');
    assert.equal(vol[1000], 0, 'Zero background must stay 0 (not shifted gray)');
    assert.ok(vol[95000] > 200, `Expected brain dynamic range preserved, got ${vol[95000]}`);
  }

  // 1c. >= 2% genuinely negative voxels preserve srcMin (e.g. CT or zero-centered scan).
  {
    const n = 10000;
    const vol = new Float32Array(n);
    for (let i = 0; i < 3000; i++) vol[i] = -1000; // 30% negative
    for (let i = 3000; i < n; i++) vol[i] = -1000 + ((i - 3000) / 7000) * 2000;
    const info = scaleIntensityConform(vol);
    assert.equal(info.flooredNegative, false, 'Expected >=2% negative voxels NOT to floor srcMin');
    assert.equal(info.srcMin, -1000);
    assert.equal(vol[0], 0, 'Minimum value maps to 0');
    assert.ok(vol[9500] > 230, `Upper tissue maps near 255, got ${vol[9500]}`);
  }

  // 1d. NaN / Inf sanitization & all-NaN rejection.
  {
    const dims = [3, 4, 4, 4, 1, 1, 1, 1];
    const affine = [2, 0, 0, -4, 0, 2, 0, -4, 0, 0, 2, -4, 0, 0, 0, 1];
    const f32 = new Float32Array(64).fill(100);
    f32[0] = Number.NaN;
    f32[1] = Number.POSITIVE_INFINITY;
    f32[2] = Number.NEGATIVE_INFINITY;
    const res = conformVolumeData({ img: f32, datatypeCode: 16, dims, affine });
    assert.equal(res.img.length, 256 ** 3);
    assert.ok(res.img instanceof Uint8Array);
    // Input array was NOT mutated!
    assert.ok(Number.isNaN(f32[0]), 'conformVolumeData must not mutate caller input');

    const allNan = new Float32Array(64).fill(Number.NaN);
    assert.throws(
      () => conformVolumeData({ img: allNan, datatypeCode: 16, dims, affine }),
      /no finite voxel/i,
    );
    const singular = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    assert.throws(
      () => conformVolumeData({ img: new Float32Array(64).fill(1), datatypeCode: 16, dims, affine: singular }),
      /singular|invalid/i,
    );
  }

  // 1e. same_grid fast path (256³ 1mm LIA float32) + sclSlope/sclInter + toRAS option.
  {
    const dims = [3, 256, 256, 256, 1, 1, 1, 1];
    const liaAffine = computeConformAffine(256, 256, 256, [
      -1, 0, 0, 128,
      0, 0, 1, -128,
      0, -1, 0, 128,
      0, 0, 0, 1,
    ], false);
    const vol = new Int16Array(256 ** 3);
    // Fill center cube with 1000..2000 (after slope=0.5, inter=100 -> 600..1100), plus 100 negative ringing voxels
    for (let i = 0; i < 100; i++) vol[i] = -2000; // -900 after slope+inter (<2% negative!)
    for (let z = 64; z < 192; z++) {
      for (let y = 64; y < 192; y++) {
        const base = z * 65536 + y * 256;
        for (let x = 64; x < 192; x++) {
          vol[base + x] = 1000 + ((x + y + z) % 1000);
        }
      }
    }
    const t0 = performance.now();
    const res = conformVolumeData({
      img: vol,
      datatypeCode: 4,
      dims,
      affine: liaAffine,
      sclSlope: 0.5,
      sclInter: 100,
      toRAS: false,
    });
    const sameGridMs = performance.now() - t0;
    assert.equal(res.img[0], 0, 'Negative ringing voxel floored to 0 on same_grid');
    assert.ok(res.img[128 * 65536 + 128 * 256 + 128] > 100, 'Center brain voxel scaled into uint8 range');
    // Verify input Int16Array was untouched
    assert.equal(vol[0], -2000);
    console.log(`  same_grid 256³ int16 conform: ${sameGridMs.toFixed(1)} ms (PASS)`);

    // Check RAS affine output orientation
    const rasAffine = computeConformAffine(96, 128, 128, [2, 0, 0, -96, 0, 2, 0, -128, 0, 0, 2, -128, 0, 0, 0, 1], true);
    assert.deepEqual(rasAffine.slice(0, 3), [1, 0, 0]);
    assert.deepEqual(rasAffine.slice(4, 7), [0, 1, 0]);
    assert.deepEqual(rasAffine.slice(8, 11), [0, 0, 1]);
  }

  // 1f. computeQuantiles: exact Uint8 256-bin histogram & zero dependence on Math.random.
  {
    const n = 256 ** 3;
    const u8 = new Uint8Array(n);
    // Construct known distribution: 50% zeros, 45% values in [1..180], 5% values in [181..255]
    const expectedHist = new Uint32Array(256);
    for (let i = 0; i < n; i++) {
      let v;
      if (i < n * 0.5) v = 0;
      else if (i < n * 0.95) v = 1 + (i % 180);
      else v = 181 + (i % 75);
      u8[i] = v;
      expectedHist[v]++;
    }
    const exactRank = (idx) => {
      let c = 0;
      for (let b = 0; b < 256; b++) {
        c += expectedHist[b];
        if (c > idx) return b;
      }
      return 255;
    };
    const expectedQmin = exactRank(Math.floor(n * 0.05));
    const expectedQmax = exactRank(Math.ceil(n * 0.95) - 1);

    // Sabotage Math.random to throw if computeQuantiles ever touches it!
    const origRand = Math.random;
    Math.random = () => { throw new Error('computeQuantiles must NOT call Math.random()'); };
    try {
      const t0 = performance.now();
      const q1 = computeQuantiles(u8, 0.05, 0.95);
      const u8Ms = performance.now() - t0;
      const q2 = computeQuantiles(u8, 0.05, 0.95);
      assert.deepEqual(q1, { qmin: expectedQmin, qmax: expectedQmax });
      assert.deepEqual(q2, q1);
      console.log(`  Uint8 exact 256³ computeQuantiles: ${u8Ms.toFixed(2)} ms -> qmin=${q1.qmin}, qmax=${q1.qmax} (PASS)`);

      // Non-Uint8 (Float32Array) with 256-periodic pattern (catches naive stride aliasing!)
      const f32 = new Float32Array(n);
      for (let i = 0; i < n; i++) f32[i] = i & 255;
      const fq1 = computeQuantiles(f32, 0.05, 0.95);
      const fq2 = computeQuantiles(f32, 0.05, 0.95);
      assert.deepEqual(fq1, fq2, 'Float32 quantiles must be deterministic');
      // True 5% of uniform [0..255] is ~12-13, true 95% is ~242-243
      assert.ok(Math.abs(fq1.qmin - 12.75) <= 2, `Float32 qmin anti-aliasing check failed: ${fq1.qmin}`);
      assert.ok(Math.abs(fq1.qmax - 242.25) <= 2, `Float32 qmax anti-aliasing check failed: ${fq1.qmax}`);
      console.log(`  Float32 256³ deterministic computeQuantiles (256-periodic): qmin=${fq1.qmin}, qmax=${fq1.qmax} (PASS)`);

      // Edge cases: empty, constant, inverted bounds
      assert.deepEqual(computeQuantiles(new Uint8Array(0)), { qmin: 0, qmax: 0 });
      assert.deepEqual(computeQuantiles(new Uint8Array([42])), { qmin: 42, qmax: 42 });
      const flat = new Uint8Array(1000).fill(77);
      const flatNorm = quantileNormalizeVolumeData(flat);
      assert.ok(flatNorm.every((v) => Number.isFinite(v) && v === 0), 'Flat quantile norm must not produce NaN');
      const flatMinMax = minMaxNormalizeVolumeData(flat);
      assert.ok(flatMinMax.every((v) => Number.isFinite(v) && v === 0), 'Flat min-max norm must not produce NaN');
      const inv = computeQuantiles(new Uint8Array([10, 20, 30, 40, 50]), 0.9, 0.1);
      assert.ok(inv.qmin >= inv.qmax && inv.qmin > 0 && inv.qmax > 0, 'Inverted quantile args handled cleanly');
    } finally {
      Math.random = origRand;
    }
  }

  // 1g. fHigh = 0.98 exact parity with brainchopC/src/conform.c + dual-pass bit-for-bit identity.
  {
    assert.equal(DISPLAY_CONFORM_FHIGH, 0.999);
    assert.equal(INFERENCE_CONFORM_FHIGH, 0.98);

    // Exact parity against brainchopC/src/conform.c:scale_intensity
    const n = 120000;
    const jsVol = new Float32Array(n);
    const refVol = new Float32Array(n);
    for (let i = 0; i < 600; i++) jsVol[i] = refVol[i] = -750; // 0.5% negative ringing
    for (let i = 60000; i < 119100; i++) {
      const v = 120 + ((i - 60000) / 59100) * 380;
      jsVol[i] = refVol[i] = v;
    }
    for (let i = 119100; i < n; i++) jsVol[i] = refVol[i] = 4000; // 1.5% of non-zero @ 8x
    scaleIntensityConform(jsVol, INFERENCE_CONFORM_FHIGH);
    referenceBrainchopCScaleIntensity(refVol);
    let scaleDiffs = 0;
    for (let i = 0; i < n; i++) {
      if (jsVol[i] !== refVol[i]) scaleDiffs++;
    }
    assert.equal(scaleDiffs, 0, `Expected 0 diffs vs brainchopC scale_intensity, got ${scaleDiffs}`);

    // Dual-pass bit-for-bit identity across trilinear (!sameGrid), nearest (!sameGrid), and sameGrid paths
    const phantom = makeClinicalFlarePhantom({ flareFracOfNz: 0.015, flareMultiplier: 8 });
    const tDual0 = performance.now();
    const dualLin = conformVolumeData({
      img: phantom.voxels,
      datatypeCode: 4,
      dims: phantom.dims,
      affine: phantom.affine,
      toRAS: false,
      isLinear: true,
      fHigh: DISPLAY_CONFORM_FHIGH,
      inferenceFHigh: INFERENCE_CONFORM_FHIGH,
    });
    const dualLinMs = performance.now() - tDual0;
    const soloDisplayLin = conformVolumeData({
      img: phantom.voxels,
      datatypeCode: 4,
      dims: phantom.dims,
      affine: phantom.affine,
      toRAS: false,
      isLinear: true,
      fHigh: DISPLAY_CONFORM_FHIGH,
    });
    const soloInferLin = conformVolumeData({
      img: phantom.voxels,
      datatypeCode: 4,
      dims: phantom.dims,
      affine: phantom.affine,
      toRAS: false,
      isLinear: true,
      fHigh: INFERENCE_CONFORM_FHIGH,
    });
    assert.ok(dualLin.inferenceImg instanceof Uint8Array);
    assert.notEqual(dualLin.inferenceImg, dualLin.img);
    let dispDiffs = 0;
    let infDiffs = 0;
    for (let i = 0; i < dualLin.img.length; i++) {
      if (dualLin.img[i] !== soloDisplayLin.img[i]) dispDiffs++;
      if (dualLin.inferenceImg[i] !== soloInferLin.img[i]) infDiffs++;
    }
    assert.equal(dispDiffs, 0, `Dual trilinear display diverged from solo 0.999 on ${dispDiffs} voxels`);
    assert.equal(infDiffs, 0, `Dual trilinear inference diverged from solo 0.98 on ${infDiffs} voxels`);
    console.log(`  Dual 0.999/0.98 trilinear conform bit-exact parity: ${dualLinMs.toFixed(1)} ms (0/16777216 diffs) (PASS)`);

    // Nearest-neighbor dual-pass bit-identity
    const dualNN = conformVolumeData({
      img: phantom.voxels,
      datatypeCode: 4,
      dims: phantom.dims,
      affine: phantom.affine,
      toRAS: false,
      isLinear: false,
      fHigh: DISPLAY_CONFORM_FHIGH,
      inferenceFHigh: INFERENCE_CONFORM_FHIGH,
    });
    const soloInferNN = conformVolumeData({
      img: phantom.voxels,
      datatypeCode: 4,
      dims: phantom.dims,
      affine: phantom.affine,
      toRAS: false,
      isLinear: false,
      fHigh: INFERENCE_CONFORM_FHIGH,
    });
    for (let i = 0; i < dualNN.inferenceImg.length; i++) {
      if (dualNN.inferenceImg[i] !== soloInferNN.img[i]) {
        assert.fail(`Dual nearest-neighbor mismatch at voxel ${i}`);
      }
    }

    // sameGrid dual-pass bit-identity (256³ 1mm LIA int16 with slope/inter + 1.5% flare)
    const liaAffine = computeConformAffine(256, 256, 256, [
      -1, 0, 0, 128,
      0, 0, 1, -128,
      0, -1, 0, 128,
      0, 0, 0, 1,
    ], false);
    const sgVol = new Int16Array(256 ** 3);
    for (let i = 0; i < 2000; i++) sgVol[i] = -500;
    for (let z = 64; z < 192; z++) {
      for (let y = 64; y < 192; y++) {
        const base = z * 65536 + y * 256;
        for (let x = 64; x < 192; x++) {
          sgVol[base + x] = 400 + ((x + y + z) % 600);
        }
      }
    }
    // 1.5% of ~2.1M brain voxels = ~31,500 flare voxels at 8x (8000)
    for (let i = 2000; i < 33500; i++) sgVol[i] = 8000;
    const sgDims = [3, 256, 256, 256, 1, 1, 1, 1];
    const sgDual = conformVolumeData({
      img: sgVol,
      datatypeCode: 4,
      dims: sgDims,
      affine: liaAffine,
      sclSlope: 0.5,
      sclInter: 0,
      fHigh: DISPLAY_CONFORM_FHIGH,
      inferenceFHigh: INFERENCE_CONFORM_FHIGH,
    });
    const sgSoloInfer = conformVolumeData({
      img: sgVol,
      datatypeCode: 4,
      dims: sgDims,
      affine: liaAffine,
      sclSlope: 0.5,
      sclInter: 0,
      fHigh: INFERENCE_CONFORM_FHIGH,
    });
    for (let i = 0; i < sgDual.inferenceImg.length; i++) {
      if (sgDual.inferenceImg[i] !== sgSoloInfer.img[i]) {
        assert.fail(`Dual sameGrid inference mismatch at voxel ${i}`);
      }
    }

    // Deduplication: when display & inference scales match, no duplicate 16 MiB buffer is allocated
    const dedup = conformVolumeData({
      img: phantom.voxels,
      datatypeCode: 4,
      dims: phantom.dims,
      affine: phantom.affine,
      fHigh: INFERENCE_CONFORM_FHIGH,
      inferenceFHigh: INFERENCE_CONFORM_FHIGH,
    });
    assert.equal(dedup.inferenceImg, null, 'Identical fHigh and inferenceFHigh must deduplicate (inferenceImg === null)');
  }

  // 1h. Bright fat (1% @ 4x) & coil-flare (1.5% @ 8x) clinical stress tests:
  //     verify inference (fHigh = 0.98) prevents brain contrast crush and GroupNorm-exploding spikes.
  {
    const scenarios = [
      { name: 'bright fat (1% @ 4x)', flareFracOfNz: 0.01, flareMultiplier: 4, minDisplaySpike: 3.0 },
      { name: 'coil flare (1.5% @ 8x)', flareFracOfNz: 0.015, flareMultiplier: 8, minDisplaySpike: 6.0 },
    ];
    for (const sc of scenarios) {
      const ph = makeClinicalFlarePhantom(sc);
      const res = conformVolumeData({
        img: ph.voxels,
        datatypeCode: 4,
        dims: ph.dims,
        affine: ph.affine,
        toRAS: false,
        fHigh: DISPLAY_CONFORM_FHIGH,
        inferenceFHigh: INFERENCE_CONFORM_FHIGH,
      });
      const centerIdx = 128 * 65536 + 128 * 256 + 128;
      const edgeBrainIdx = 128 * 65536 + 128 * 256 + 165;
      const qDisp = computeQuantiles(res.img, 0.05, 0.95);
      const qInf = computeQuantiles(res.inferenceImg, 0.05, 0.95);
      const dispSpike = (255 - qDisp.qmin) / Math.max(1, qDisp.qmax - qDisp.qmin);
      const infSpike = (255 - qInf.qmin) / Math.max(1, qInf.qmax - qInf.qmin);

      // Confirm the synthetic stress test actually triggers the 0.999 failure mode
      assert.ok(
        dispSpike >= sc.minDisplaySpike,
        `${sc.name}: expected 0.999 display max quantile-norm spike >= ${sc.minDisplaySpike}, got ${dispSpike.toFixed(2)}`,
      );
      // Confirm 0.98 inference completely eliminates contrast crush and GroupNorm spike explosion
      assert.ok(
        res.inferenceImg[centerIdx] >= 220,
        `${sc.name}: expected 0.98 inference brain center >= 220/255, got ${res.inferenceImg[centerIdx]}`,
      );
      assert.ok(
        res.inferenceImg[centerIdx] - res.inferenceImg[edgeBrainIdx] >= 40,
        `${sc.name}: expected rich WM/GM gradient in 0.98 inference input, got center=${res.inferenceImg[centerIdx]} edge=${res.inferenceImg[edgeBrainIdx]}`,
      );
      assert.ok(
        infSpike <= 1.75,
        `${sc.name}: expected bounded 0.98 inference max quantile-norm <= 1.75, got ${infSpike.toFixed(2)} (q=${qInf.qmin}..${qInf.qmax})`,
      );
      console.log(
        `  Clinical ${sc.name}: 0.999 spike=${dispSpike.toFixed(2)}x (center=${res.img[centerIdx]}/255) -> ` +
        `0.98 inference spike=${infSpike.toFixed(2)}x (center=${res.inferenceImg[centerIdx]}/255, q95=${qInf.qmax}) (PASS)`,
      );
    }
  }

  // 1i. Already-conformed short-circuit & identity-bound inference cache invalidation.
  {
    const u8 = new Uint8Array(256 ** 3);
    const validConformed = {
      dims: [3, 256, 256, 256],
      img: u8,
      permRAS: [-1, 3, -2],
      hdr: { pixDims: [1, 1, 1, 1], scl_slope: 1, scl_inter: 0 },
    };
    assert.equal(isVolumeConformed(validConformed), true);
    assert.equal(isVolumeConformed({ ...validConformed, hdr: { pixDims: [1, 1, 1, 1], scl_slope: 0, scl_inter: 0 } }), true);
    assert.equal(isVolumeConformed({ ...validConformed, dims: [3, 192, 256, 256] }), false);
    assert.equal(isVolumeConformed({ ...validConformed, img: new Int16Array(256 ** 3) }), false);
    assert.equal(isVolumeConformed({ ...validConformed, permRAS: [1, 2, 3] }), false);
    assert.equal(isVolumeConformed({ ...validConformed, hdr: { pixDims: [1, 1, 1, 2], scl_slope: 1, scl_inter: 0 } }), false);
    assert.equal(isVolumeConformed({ ...validConformed, hdr: { pixDims: [1, 1, 1, 1], scl_slope: 0.5, scl_inter: 0 } }), false);
    assert.equal(isVolumeConformed({ ...validConformed, hdr: { pixDims: [1, 1, 1, 1], scl_slope: 1, scl_inter: 10 } }), false);

    const cache = createInferenceInputCache();
    const volA = { id: 'volA', img: new Uint8Array(16).fill(10) };
    const inferA = new Uint8Array(16).fill(200);
    const volB = { id: 'volB', img: new Uint8Array(16).fill(50) };

    // Empty cache returns vol.img directly (zero overhead for already-conformed scans)
    assert.equal(cache.get(volA), volA.img);
    assert.equal(cache.hasDistinctBuffer(), false);

    // Same-buffer set stays deduplicated
    cache.set(volA, volA.img);
    assert.equal(cache.hasDistinctBuffer(volA), false);
    assert.equal(cache.get(volA), volA.img);

    // Distinct 0.98 buffer bound by identity to volA
    cache.set(volA, inferA);
    assert.equal(cache.hasDistinctBuffer(volA), true);
    assert.equal(cache.get(volA), inferA);
    // Asking with a different volume NEVER returns stale inferA
    assert.equal(cache.get(volB), volB.img);
    assert.equal(cache.hasDistinctBuffer(volB), false);

    // sync(volB) immediately drops stale inferA (volume drop/reload)
    cache.sync(volB);
    assert.equal(cache.hasDistinctBuffer(), false);
    assert.equal(cache.get(volA), volA.img);

    // clear() resets state cleanly
    cache.set(volA, inferA);
    assert.equal(cache.hasDistinctBuffer(volA), true);
    cache.clear();
    assert.equal(cache.hasDistinctBuffer(), false);
    assert.equal(cache.get(volA), volA.img);
  }

  console.log('  All unit tests PASSED!');
}

// =========================================================================
// PART 2: End-to-End Browser Verification (Chrome WebGPU + Conform Worker)
// =========================================================================
async function runBrowserTests() {
  console.log('--- Part 2: End-to-end browser verification ---');
  const server = await createServer({
    configFile: false,
    root,
    server: { host: '127.0.0.1', port: 0, hmr: false },
  });
  await server.listen();

  let browser;
  try {
    browser = await chromium.launch({
      executablePath:
        process.env.BC_CHROME_PATH ||
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
    });
    const context = await browser.newContext({
      viewport: { width: 1200, height: 820 },
      acceptDownloads: true,
    });
    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (e) => pageErrors.push(e.message));

    const baseUrl = server.resolvedUrls.local[0];
    await page.goto(baseUrl);
    await page.waitForFunction(() => document.querySelectorAll('#modelSelect option').length > 2);

    const runModelByText = async (targetPage, matchText, finishText = 'Segmentation finished') => {
      await targetPage.evaluate(() => {
        const loc = document.getElementById('location');
        if (loc) loc.textContent = '';
      });
      await targetPage.evaluate((needle) => {
        const sel = document.getElementById('modelSelect');
        const opt = [...sel.options].find((o) => o.textContent.includes(needle));
        if (!opt) throw new Error(`Model option containing "${needle}" not found`);
        sel.value = opt.value;
        sel.dispatchEvent(new Event('change'));
      }, matchText);
      await targetPage.waitForFunction(
        (needle) => document.querySelector('#location')?.textContent?.includes(needle),
        finishText,
        { timeout: 120000 },
      );
      return await targetPage.evaluate(() => document.querySelector('#location')?.textContent || '');
    };

    const downloadFromSaveModal = async (targetPage, optionIndex) => {
      await targetPage.click('#saveBtn');
      await targetPage.waitForSelector('#appDialog[open]');
      const [dl] = await Promise.all([
        targetPage.waitForEvent('download'),
        targetPage.locator(`.save-opt[data-i="${optionIndex}"]`).click(),
      ]);
      const dlPath = await dl.path();
      return { filename: dl.suggestedFilename(), nii: parseNiftiGz(dlPath) };
    };

    const dropNiftiOnCanvas = async (targetPage, buffer, filename) => {
      const b64 = Buffer.from(buffer).toString('base64');
      await targetPage.evaluate(async ({ base64, name }) => {
        const bin = atob(base64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const file = new File([bytes], name, { type: 'application/octet-stream' });
        const dt = new DataTransfer();
        dt.items.add(file);
        const canvas = document.getElementById('gl1');
        canvas.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer: dt }));
      }, { base64: b64, name: filename });
      // Wait for NiiVue to finish loading the dropped volume and reset the active model badge.
      await targetPage.waitForFunction(
        () => document.getElementById('activeModelItem')?.hidden === true,
        null,
        { timeout: 30000 },
      );
      await targetPage.waitForTimeout(400);
    };

    // 2a. Baseline clean t1_crop.nii.gz run (already-conformed short-circuit).
    const status1 = await runModelByText(page, '\u26A1');
    assert.ok(status1.includes('Segmentation finished'), `Run 1 failed: ${status1}`);
    const baselineSeg = await downloadFromSaveModal(page, 0);
    assert.equal(baselineSeg.filename, 'segmentation.nii.gz');
    assert.deepEqual(baselineSeg.nii.dims.slice(1, 4), [256, 256, 256]);

    // 2b. Verify clinicalConform Web Worker transform (both solo 0.999 and dual 0.999/0.98
    //     on 1.5% @ 8x coil-flare) + exact determinism directly in real browser context.
    const nx = 96, ny = 128, nz = 128;
    const voxels = new Int16Array(nx * ny * nz);
    for (let i = 0; i < Math.floor(voxels.length * 0.005); i++) voxels[i] = -800;
    for (let z = 0; z < nz; z++) {
      for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
          const dx = (x - nx / 2) / 30;
          const dy = (y - ny / 2) / 42;
          const dz = (z - nz / 2) / 38;
          const r2 = dx * dx + dy * dy + dz * dz;
          const idx = x + y * nx + z * nx * ny;
          if (r2 < 1.0) {
            voxels[idx] = Math.round(350 + 500 * (1 - r2));
          }
        }
      }
    }
    for (let k = 0; k < 100; k++) {
      voxels[(10 + k) + 10 * nx + 10 * nx * ny] = 12000;
    }
    const niiBuf = makeNifti1Int16Buffer({ nx, ny, nz, pix: [2, 2, 2], voxels });
    const niiBytes = Array.from(new Uint8Array(niiBuf));

    const flarePh = makeClinicalFlarePhantom({ flareFracOfNz: 0.015, flareMultiplier: 8 });
    const flareNiiBuf = makeNifti1Int16Buffer({
      nx: flarePh.nx,
      ny: flarePh.ny,
      nz: flarePh.nz,
      pix: [2, 2, 2],
      voxels: flarePh.voxels,
    });
    const flareBytes = Array.from(new Uint8Array(flareNiiBuf));

    const browserCheck = await page.evaluate(async ({ cleanArr, flareArr }) => {
      const { verifyConformAndDeterminism } = await import(
        '/tests/fixtures/conform-quantiles-browser-page.js'
      );
      return verifyConformAndDeterminism(cleanArr, flareArr);
    }, { cleanArr: niiBytes, flareArr: flareBytes });

    assert.equal(pageErrors.length, 0, `Unexpected page errors: ${pageErrors.join('; ')}`);
    assert.deepEqual(browserCheck.conformedDims, [256, 256, 256]);
    assert.equal(browserCheck.conformedIsU8, true);
    assert.deepEqual(browserCheck.conformedPermRAS, [-1, 3, -2]);
    assert.deepEqual(browserCheck.conformedPixDims, [1, 1, 1]);
    assert.equal(browserCheck.nativeIntact, true, 'nativeInputNV.img must remain intact after conform worker');
    assert.equal(browserCheck.cornerVal, 0, 'Air/corner must stay 0 despite -800 negative ringing');
    assert.ok(browserCheck.centerVal >= 200, `Expected brain center >= 200/255 (clipped 12000 spikes), got ${browserCheck.centerVal}`);
    assert.ok(browserCheck.nonZero > 100000, 'Expected substantial conformed brain foreground');
    assert.deepEqual(browserCheck.qA, browserCheck.qB);
    assert.equal(browserCheck.repeatDiffs, 0, `Expected 0 voxel diffs across two unseeded WebGPU runs, got ${browserCheck.repeatDiffs}`);
    assert.ok(browserCheck.fgCount > 500000, `Expected plausible brain segmentation foreground, got ${browserCheck.fgCount}`);

    // Dual-output coil-flare worker assertions
    assert.ok(browserCheck.flareCheck, 'Expected flareCheck result');
    assert.equal(browserCheck.flareCheck.nativeIntact, true);
    assert.equal(browserCheck.flareCheck.distinctBuffers, true);
    assert.equal(browserCheck.flareCheck.displayMatchesSolo, true);
    assert.ok(
      browserCheck.flareCheck.displayMaxNormSpike >= 6.0,
      `Expected display 0.999 flare spike >= 6.0, got ${browserCheck.flareCheck.displayMaxNormSpike.toFixed(2)}`,
    );
    assert.ok(
      browserCheck.flareCheck.inferCenter >= 220,
      `Expected worker 0.98 inference brain center >= 220/255, got ${browserCheck.flareCheck.inferCenter}`,
    );
    assert.ok(
      browserCheck.flareCheck.inferMaxNormSpike <= 1.75,
      `Expected worker 0.98 inference max quantile-norm <= 1.75, got ${browserCheck.flareCheck.inferMaxNormSpike.toFixed(2)}`,
    );

    console.log(
      `  Browser worker conform (96x128x128 int16 -> 256³ LIA uint8): solo=${browserCheck.conformMs.toFixed(0)} ms, ` +
      `dual(0.999+0.98)=${browserCheck.flareCheck.dualMs.toFixed(0)} ms, ` +
      `flare center: display=${browserCheck.flareCheck.displayCenter}/255 vs infer=${browserCheck.flareCheck.inferCenter}/255 (PASS)`,
    );
    console.log(
      `  Unseeded repeat-run MindMap-16ch WebGPU on t1_crop: q=(${browserCheck.qA.qmin}, ${browserCheck.qA.qmax}), ` +
      `diffs=${browserCheck.repeatDiffs}/16777216, fg=${browserCheck.fgCount} (PASS)`,
    );

    // 2c. Live app (main.js) end-to-end coil-flare protection + MindGrab + CAT-lite +
    //     Save Conformed/Native + volume drop/reload cache invalidation + WebGL2 parity.
    const flareT1 = makeT1CropCoilFlareInt16Buffer({ downsample2x: true });
    await dropNiftiOnCanvas(page, flareT1.buffer, 't1_crop_coilflare_128_int16.nii');

    // Run MindMap-16ch on the dropped 1.5% @ 8x coil-flare scan (WebGPU)
    const flareStatus = await runModelByText(page, '\u26A1');
    assert.ok(flareStatus.includes('Segmentation finished'), `Coil-flare WebGPU run failed: ${flareStatus}`);

    const flareSeg = await downloadFromSaveModal(page, 0);
    const flareNative = await downloadFromSaveModal(page, 1);
    const flareConformed = await downloadFromSaveModal(page, 2);

    const diceWebGpu = multiclassForegroundDice(baselineSeg.nii.voxels, flareSeg.nii.voxels);
    const fgDiceWebGpu = foregroundDice(baselineSeg.nii.voxels, flareSeg.nii.voxels);
    assert.ok(
      fgDiceWebGpu >= 0.92 && diceWebGpu >= 0.85,
      `Expected coil-flare WebGPU MindMap-16ch to hold steady (fgDice=${fgDiceWebGpu.toFixed(4)}, labelDice=${diceWebGpu.toFixed(4)})`,
    );
    // Native-space reslice must land back on the dropped 128³ native grid
    assert.deepEqual(flareNative.nii.dims.slice(1, 4), [128, 128, 128]);
    let nativeFg = 0;
    for (let i = 0; i < flareNative.nii.voxels.length; i++) if (flareNative.nii.voxels[i] > 0) nativeFg++;
    assert.ok(nativeFg > 50000, `Expected populated native-space 128³ segmentation, got ${nativeFg} fg voxels`);

    // Conformed input saved from viewer must be the 0-99.9% display volume (256³ uint8)
    assert.deepEqual(flareConformed.nii.dims.slice(1, 4), [256, 256, 256]);
    assert.equal(flareConformed.nii.datatype, 2);
    const qSavedDisp = computeQuantiles(flareConformed.nii.voxels, 0.05, 0.95);
    assert.ok(
      qSavedDisp.qmax <= 60,
      `Expected saved conformed_input.nii.gz to retain display 0.999 volume (q95 <= 60 under 8x flare), got q95=${qSavedDisp.qmax}`,
    );

    // Run MindGrab (id: 2) on the SAME conformed coil-flare scan (reuses cached 0.98 buffer)
    const mindgrabStatus = await runModelByText(page, 'Omnimodal Skull Stripping');
    assert.ok(mindgrabStatus.includes('Segmentation finished'), `MindGrab on coil-flare failed: ${mindgrabStatus}`);
    const mindgrabOut = await downloadFromSaveModal(page, 0);
    let mgFg = 0;
    let mgHigh = 0;
    for (let i = 0; i < mindgrabOut.nii.voxels.length; i++) {
      const v = mindgrabOut.nii.voxels[i];
      if (v > 0) mgFg++;
      if (v >= 80) mgHigh++;
    }
    assert.ok(mgFg > 800000, `Expected MindGrab brain extraction foreground > 800k, got ${mgFg}`);
    assert.ok(mgHigh > 200000, `Expected MindGrab skull-stripped brain to preserve full 0.98 contrast (v>=80 count=${mgHigh})`);

    // Run CAT-lite (id: 23) on the SAME conformed coil-flare scan
    const catStatus = await runModelByText(page, 'Tissue fraction maps', 'Tissue maps finished');
    assert.ok(catStatus.includes('Tissue maps finished'), `CAT-lite on coil-flare failed: ${catStatus}`);

    // Drop a brand-new already-conformed t1_crop.nii.gz onto the canvas:
    // must clear the cached 0.98 buffer and short-circuit cleanly with 0 diffs vs baseline!
    const cleanT1Gz = fs.readFileSync(path.join(root, 'public', 't1_crop.nii.gz'));
    await dropNiftiOnCanvas(page, cleanT1Gz, 't1_crop.nii.gz');
    const reloadStatus = await runModelByText(page, '\u26A1');
    assert.ok(reloadStatus.includes('Segmentation finished'), `Post-drop reload run failed: ${reloadStatus}`);
    const reloadSeg = await downloadFromSaveModal(page, 0);
    const reloadConformed = await downloadFromSaveModal(page, 2);

    let reloadSegDiffs = 0;
    for (let i = 0; i < baselineSeg.nii.voxels.length; i++) {
      if (baselineSeg.nii.voxels[i] !== reloadSeg.nii.voxels[i]) reloadSegDiffs++;
    }
    assert.equal(reloadSegDiffs, 0, `Expected 0 voxel diffs after dropping clean t1_crop (stale cache check), got ${reloadSegDiffs}`);
    let reloadInputDiffs = 0;
    for (let i = 0; i < flareT1.t1U8.length; i++) {
      if (flareT1.t1U8[i] !== reloadConformed.nii.voxels[i]) reloadInputDiffs++;
    }
    assert.equal(reloadInputDiffs, 0, `Expected short-circuited t1_crop input to stay bit-exact, got ${reloadInputDiffs} diffs`);

    // Verify native WebGL2 path (?inference=webgl2) ALSO receives the 0.98 inference buffer!
    const gl2Page = await context.newPage();
    gl2Page.on('pageerror', (e) => pageErrors.push(`webgl2: ${e.message}`));
    await gl2Page.goto(`${baseUrl}?inference=webgl2`);
    await gl2Page.waitForFunction(() => document.querySelectorAll('#modelSelect option').length > 2);
    await dropNiftiOnCanvas(gl2Page, flareT1.buffer, 't1_crop_coilflare_128_int16.nii');
    const gl2Status = await runModelByText(gl2Page, '\u26A1');
    assert.ok(gl2Status.includes('Segmentation finished'), `Coil-flare WebGL2 run failed: ${gl2Status}`);
    const gl2Seg = await downloadFromSaveModal(gl2Page, 0);
    const diceWebGl2 = multiclassForegroundDice(baselineSeg.nii.voxels, gl2Seg.nii.voxels);
    const fgDiceWebGl2 = foregroundDice(baselineSeg.nii.voxels, gl2Seg.nii.voxels);
    assert.ok(
      fgDiceWebGl2 >= 0.92 && diceWebGl2 >= 0.85,
      `Expected coil-flare WebGL2 MindMap-16ch to hold steady (fgDice=${fgDiceWebGl2.toFixed(4)}, labelDice=${diceWebGl2.toFixed(4)})`,
    );
    await gl2Page.close();

    assert.equal(pageErrors.length, 0, `Unexpected page errors: ${pageErrors.join('; ')}`);
    console.log(
      `  Live app 1.5% @ 8x coil-flare (128³ int16): WebGPU fgDice=${fgDiceWebGpu.toFixed(4)} labelDice=${diceWebGpu.toFixed(4)}, ` +
      `WebGL2 fgDice=${fgDiceWebGl2.toFixed(4)} labelDice=${diceWebGl2.toFixed(4)}, MindGrab fg=${mgFg}, CAT-lite PASS, ` +
      `post-drop reload diffs=${reloadSegDiffs}/16777216 (PASS)`,
    );
  } finally {
    if (browser) await browser.close();
    await server.close();
  }
}

runUnitTests();
await runBrowserTests();
console.log('ALL CONFORM & QUANTILES TESTS PASSED!');
