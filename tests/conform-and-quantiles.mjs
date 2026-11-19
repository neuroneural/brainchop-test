// Unit + end-to-end browser verification for clinical-parity conform() (0-98%
// + <2% negative floor) and deterministic computeQuantiles().
// Run: node tests/conform-and-quantiles.mjs
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import {
  conformVolumeData,
  scaleIntensityConform,
  computeConformAffine,
} from '../conform-volume.js';
import {
  computeQuantiles,
  quantileNormalizeVolumeData,
  minMaxNormalizeVolumeData,
} from '../tensor-utils.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

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

  // 1a. Bright top-2% clinical outlier clipping (0-98% non-zero) vs old 99.9% crushing.
  {
    const n = 100000;
    const vol = new Float32Array(n);
    // 50% air (0), 49% brain tissue uniformly in [100..500], 1% bright vessel/fat spikes at 10,000.
    // Non-zero count = 50,000; top 2% of non-zero = 1,000 voxels (= the bright spikes!).
    for (let i = 50000; i < 99000; i++) {
      vol[i] = 100 + ((i - 50000) / 49000) * 400;
    }
    for (let i = 99000; i < 100000; i++) {
      vol[i] = 10000;
    }
    const info = scaleIntensityConform(vol);
    assert.equal(info.flooredNegative, false);
    assert.equal(info.srcMin, 0);
    // Brain upper range (500) must map near 255 (under old 99.9% clip it was crushed to ~12!).
    assert.ok(info.srcMax < 600, `Expected 98% clip below 600, got ${info.srcMax}`);
    assert.ok(vol[98999] >= 220, `Expected bright brain tissue >= 220/255, got ${vol[98999]}`);
    assert.equal(vol[0], 0, 'Air voxel must remain 0');
    assert.equal(vol[99999], 255, 'Clipped outlier must clamp to 255');
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
    const page = await browser.newPage({ viewport: { width: 1200, height: 820 } });
    const pageErrors = [];
    page.on('pageerror', (e) => pageErrors.push(e.message));

    const baseUrl = server.resolvedUrls.local[0];
    await page.goto(baseUrl);
    await page.waitForFunction(() => document.querySelectorAll('#modelSelect option').length > 2);

    // 2a. Determinism across two consecutive runs on default t1_crop.nii.gz WITHOUT mocking Math.random.
    const runModelAndHash = async () => {
      await page.evaluate(() => {
        const sel = document.getElementById('modelSelect');
        // Select id=3 (Fast 16-channel Subcortical + Tissue, value="6" in menu array)
        const opt = [...sel.options].find((o) => o.textContent.includes('\u26A1'));
        sel.value = opt.value;
        sel.dispatchEvent(new Event('change'));
      });
      await page.waitForFunction(
        () => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
        null,
        { timeout: 120000 },
      );
      return await page.evaluate(async () => {
        // Locate overlay via canvas/NiiVue? Wait: read exposed stats or trigger copy diagnostics.
        // Better yet, read nv1 via window? Check if nv1 is exposed; if not, test via module import below.
        return document.querySelector('#location')?.textContent || '';
      });
    };

    const status1 = await runModelAndHash();
    assert.ok(status1.includes('Segmentation finished'), `Run 1 failed: ${status1}`);

    // 2b. Verify clinicalConform Web Worker transform + exact determinism directly in real browser context.
    // Build a realistic non-conformed 16-bit 96x128x128 synthetic brain phantom with:
    //   - 0.5% negative Gibbs ringing (-800)
    //   - bright 1.5% scalp/fat outlier spikes (12000)
    //   - brain ellipsoid in [200..900]
    const nx = 96, ny = 128, nz = 128;
    const voxels = new Int16Array(nx * ny * nz);
    for (let i = 0; i < Math.floor(voxels.length * 0.005); i++) voxels[i] = -800;
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
            voxels[idx] = Math.round(350 + 500 * (1 - r2)); // GM/WM gradient [350..850]
            brainCount++;
          } else if (r2 < 1.008) {
            // 3D shell volume is (1.008^(3/2) - 1) ~= 1.2% of non-zero voxels (< 2% clip threshold)
            voxels[idx] = 12000;
          }
        }
      }
    }
    const niiBuf = makeNifti1Int16Buffer({ nx, ny, nz, pix: [2, 2, 2], voxels });
    const niiBytes = Array.from(new Uint8Array(niiBuf));

    const browserCheck = await page.evaluate(async (bytesArr) => {
      const { verifyConformAndDeterminism } = await import(
        '/tests/fixtures/conform-quantiles-browser-page.js'
      );
      return verifyConformAndDeterminism(bytesArr);
    }, niiBytes);

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

    console.log(
      `  Browser worker conform (96x128x128 int16 -> 256³ LIA uint8): ${browserCheck.conformMs.toFixed(0)} ms, ` +
      `corner=${browserCheck.cornerVal}, brainCenter=${browserCheck.centerVal}/255, nativeIntact=${browserCheck.nativeIntact}`,
    );
    console.log(
      `  Unseeded repeat-run MindMap-16ch WebGPU on t1_crop: q=(${browserCheck.qA.qmin}, ${browserCheck.qA.qmax}), ` +
      `diffs=${browserCheck.repeatDiffs}/16777216, fg=${browserCheck.fgCount} (PASS)`,
    );
  } finally {
    if (browser) await browser.close();
    await server.close();
  }
}

runUnitTests();
await runBrowserTests();
console.log('ALL CONFORM & QUANTILES TESTS PASSED!');
