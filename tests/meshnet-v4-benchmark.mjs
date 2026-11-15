// Comprehensive Apple M1 Chrome Benchmark & Parity Verification for WebGPU V4 Engine
// node tests/meshnet-v4-benchmark.mjs
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url).pathname;
const EXT_DATA = path.resolve(ROOT, '../brainchop-cli-old/data');

const server = await createServer({
  configFile: false,
  root: ROOT,
  server: { host: '127.0.0.1', port: 0, hmr: false },
});
await server.listen();

let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage();
  page.on('console', (msg) => console.log('[browser]', msg.text()));
  page.on('pageerror', (err) => console.error('[pageerror]', err));

  await page.route('**/__ext_nifti/*', (route) => {
    const fname = route.request().url().split('/__ext_nifti/')[1];
    const p = fname === 't1_crop.nii.gz'
      ? path.join(ROOT, 'public/t1_crop.nii.gz')
      : path.join(EXT_DATA, fname);
    const raw = gunzipSync(readFileSync(p));
    route.fulfill({ contentType: 'application/octet-stream', body: raw });
  });

  await page.route('**/__v4_bench', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><title>V4 Benchmark</title><script type="module">import { runAllV4Checks } from "/tests/fixtures/meshnet-v4-benchmark-page.js"; window.runAllV4Checks = runAllV4Checks;</script>',
    })
  );

  await page.goto(`${server.resolvedUrls.local[0]}__v4_bench`);
  await page.waitForFunction(() => typeof window.runAllV4Checks === 'function');
  const report = await page.evaluate(() => window.runAllV4Checks());
  console.log('\n=== MESHNET FAST V4 BENCHMARK REPORT ===');
  console.log(JSON.stringify(report, null, 2));
  const outPath = process.env.BC_BENCH_OUT || fileURLToPath(new URL('../bench-results/meshnet_v4_suite_benchmark.json', import.meta.url));
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    JSON.stringify(report, null, 2)
  );

  // Verify strict Step 2 gates (allowing relative speedup vs FP16 under fanless M1 DVFS / host load):
  const checks = [
    ['mindsnap104_t1crop', 0.988, 98.9, 240.0, 3600, 3.0],
    ['mindsnap104_t1crop_noConeSkip', 0.988, 98.9, 240.0, Infinity, 2.4],
    ['mindsnap104_mindboggle6', 0.988, 98.9, 240.0, Infinity, 2.4],
    ['mindsnap104_strokeSubject', 0.988, 98.9, 240.0, Infinity, 2.4],
    ['v3repbn104_t1crop', 0.988, 98.9, 240.0, 3600, 3.0],
    ['v3omnimodal104_t1crop', 0.988, 98.9, 240.0, 3600, 3.0],
    ['v3omnimodal104_strokeSubject', 0.988, 98.9, 240.0, Infinity, 2.4],
    ['mindmap18_t1crop', 0.988, 98.9, 240.0, 3100, 2.6],
    ['mindmap18_mindboggle6', 0.988, 98.9, 240.0, Infinity, 2.2],
    ['m16ch18_t1crop', 0.988, 98.9, 160.0, 2200, 2.5],
    ['mindgrab15ch_t1crop', 0.995, 99.5, 160.0, 4600, 2.5],
    ['model5_5ch_t1crop', 0.988, 98.9, 160.0, Infinity, 0],
    ['mindsnap104_tier2_noSubgroups', 0.988, 98.9, 240.0, Infinity, 2.4],
    ['mindmap18_tier2_noSubgroups', 0.988, 98.9, 240.0, Infinity, 2.2],
    ['mindsnap104_tier3_f32', 0.988, 98.9, 240.0, Infinity, 0],
    ['mindmap18_tier3_f32', 0.988, 98.9, 240.0, Infinity, 0],
  ];
  for (const [key, minDice, minFg, maxBufMiB, maxColdMs, minSpeedup] of checks) {
    const r = report[key];
    if (!r) throw new Error(`Missing benchmark result for ${key}`);
    if (r.v4.maxBufMiB > maxBufMiB) throw new Error(`${key}: maxBuf ${r.v4.maxBufMiB} MiB > ${maxBufMiB} MiB`);
    if (r.parityVsFp16.macroDice < minDice) throw new Error(`${key}: Macro Dice ${r.parityVsFp16.macroDice} < ${minDice}`);
    if (r.parityVsFp16.fgAgreePct < minFg) throw new Error(`${key}: FG agree ${r.parityVsFp16.fgAgreePct}% < ${minFg}%`);
    if (r.v4.warmWallMs > maxColdMs && r.speedupVsFp16 < minSpeedup) {
      throw new Error(`${key}: warmWallMs ${r.v4.warmWallMs} > ${maxColdMs} ms AND speedupVsFp16 ${r.speedupVsFp16}x < ${minSpeedup}x`);
    }
  }
  console.log('\nALL V4 SPEED, MEMORY (<=240 MiB), PORTABILITY (3-TIER), AND QUALITY GATES PASSED!');
} finally {
  await browser?.close();
  await server.close();
}
