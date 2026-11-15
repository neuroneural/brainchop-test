// Real Chrome Apple M1 benchmark & parity verification for 8-bit MindGrab omnimodal (id: 2 vs id: 28)
// node tests/mindgrab-int8-browser.mjs
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const server = await createServer({
  configFile: false,
  root: new URL('..', import.meta.url).pathname,
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
  await page.route('**/__mindgrab_int8', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><title>8-bit MindGrab Benchmark</title><script type="module">import { benchmarkInt8 } from "/tests/fixtures/dkatlas24-int8-browser-page.js"; window.benchmarkInt8 = benchmarkInt8;</script>',
    })
  );
  await page.goto(`${server.resolvedUrls.local[0]}__mindgrab_int8`);
  await page.waitForFunction(() => typeof window.benchmarkInt8 === 'function');
  const result = await page.evaluate(() =>
    window.benchmarkInt8({
      variant: 'original',
      iterations: 6,
      modelFamily: 'mindgrab15',
    })
  );
  console.log('\n=== APPLE M1 CHROME 8-BIT MINDGRAB (15-CH OMNIMODAL) BENCHMARK SUMMARY ===');
  console.log(JSON.stringify(result, null, 2));
  const outPath = process.env.BC_BENCH_OUT || fileURLToPath(new URL('../bench-results/mindgrab_int8_browser_benchmark.json', import.meta.url));
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    JSON.stringify(result, null, 2)
  );
  if (result.webgpu_int8.maxBufferMiB > 160.0) {
    throw new Error(`MindGrab 8-bit maxBufferMiB ${result.webgpu_int8.maxBufferMiB} > 160 MiB!`);
  }
  if (
    result.parity.webgpu_int8_vs_fp16.macroDice < 0.995 ||
    result.parity.webgpu_int8_vs_fp16.fgAgreePct < 99.5 ||
    result.parity.webgl2_rgba8_vs_webgpu_fp16.macroDice < 0.99
  ) {
    throw new Error('MindGrab 8-bit parity below threshold vs fp16 oracle!');
  }
} finally {
  await browser?.close();
  await server.close();
}
