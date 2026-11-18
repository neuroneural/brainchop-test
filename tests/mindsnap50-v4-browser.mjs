// Real Chrome Apple M1 end-to-end verification for MindSnap-50 (`id: 4`, `model24chan50cls`):
// WebGPU V4 (8-bit) + WebGPU Native FP16 + WebGL2 (RGBA16F & RGBA8) + Bilateral Postprocessing + Python FP32 Parity
// Run: node tests/mindsnap50-v4-browser.mjs
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url).pathname;
const PY_REF_PATH = process.env.BC_PY_FP32_REF || '';
const hasPyRef = Boolean(PY_REF_PATH && existsSync(PY_REF_PATH));

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

  if (hasPyRef) {
    const refBytes = readFileSync(PY_REF_PATH);
    await page.route('**/__py_fp32_ref_t1crop.u8', (route) =>
      route.fulfill({ contentType: 'application/octet-stream', body: refBytes })
    );
  }

  await page.route('**/__mindsnap50_v4_verify', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><title>MindSnap-50 Browser Verify</title><script type="module">import { runMindSnap50BrowserVerification } from "/tests/fixtures/mindsnap50-v4-browser-page.js"; window.runMindSnap50BrowserVerification = runMindSnap50BrowserVerification;</script>',
    })
  );

  await page.goto(`${server.resolvedUrls.local[0]}__mindsnap50_v4_verify`);
  await page.waitForFunction(() => typeof window.runMindSnap50BrowserVerification === 'function');
  const result = await page.evaluate(
    (opts) => window.runMindSnap50BrowserVerification(opts),
    { iterations: 5, hasPyFp32Ref: hasPyRef }
  );

  console.log('\n=== APPLE M1 CHROME MINDSNAP-50 (24CH 50-CLS) VERIFICATION ===');
  console.log(JSON.stringify(result, null, 2));

  const outPath =
    process.env.BC_BENCH_OUT ||
    fileURLToPath(new URL('../bench-results/mindsnap50_v4_browser_benchmark.json', import.meta.url));
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(result, null, 2));

  if (result.webgpu_v4_8bit.maxBufferMiB > 240.0) {
    throw new Error(`V4 maxBufferMiB ${result.webgpu_v4_8bit.maxBufferMiB} > 240 MiB!`);
  }
  if (result.webgpu_v4_8bit.warmMedianMs > 3500.0) {
    throw new Error(`M1 WebGPU V4 warm latency ${result.webgpu_v4_8bit.warmMedianMs} ms > 3500 ms!`);
  }
  if (!result.postprocess_bilateral_check.exteriorSpeckleRemoved) {
    throw new Error('Exterior disconnected speckle was NOT removed by postprocessing!');
  }
  if (
    result.postprocess_bilateral_check.leftCorticalVoxels < 50000 ||
    result.postprocess_bilateral_check.rightCorticalVoxels < 50000 ||
    result.postprocess_bilateral_check.leftHippocampusVoxels < 500 ||
    result.postprocess_bilateral_check.rightHippocampusVoxels < 500
  ) {
    throw new Error(`Bilateral hemisphere deletion detected: ${JSON.stringify(result.postprocess_bilateral_check)}`);
  }
  if (result.parity.webgpu_v4_vs_webgpu_fp16.allAgreePct < 99.85 || result.parity.webgpu_v4_vs_webgpu_fp16.fgAgreePct < 98.90) {
    throw new Error(`WebGPU V4 vs WebGPU FP16 parity below gate: ${JSON.stringify(result.parity.webgpu_v4_vs_webgpu_fp16)}`);
  }
  if (result.parity.webgl2_rgba16f_vs_webgpu_fp16.allAgreePct < 99.90) {
    throw new Error(`WebGL2 RGBA16F vs WebGPU FP16 parity ${result.parity.webgl2_rgba16f_vs_webgpu_fp16.allAgreePct}% < 99.90%!`);
  }
  if (result.parity.webgl2_rgba8_vs_webgpu_fp16.macroDice < 0.985) {
    throw new Error(`WebGL2 RGBA8 vs WebGPU FP16 Macro Dice ${result.parity.webgl2_rgba8_vs_webgpu_fp16.macroDice} < 0.985!`);
  }
  if (
    hasPyRef &&
    (result.parity.webgpu_v4_vs_python_fp32.allAgreePct < 99.85 ||
      result.parity.webgpu_v4_vs_python_fp32.fgAgreePct < 98.90)
  ) {
    throw new Error(`WebGPU V4 vs Python FP32 parity below gate: ${JSON.stringify(result.parity.webgpu_v4_vs_python_fp32)}`);
  }
  console.log('\nALL MINDSNAP-50 BROWSER WEBGPU V4, FP16, WEBGL2, AND BILATERAL POSTPROCESS GATES PASSED!');
} finally {
  await browser?.close();
  await server.close();
}
