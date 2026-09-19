// Full-volume parity/timing on real model priors. Requires system Chrome WebGPU.
// node tests/cat-lite-browser.mjs
// node tests/cat-lite-browser.mjs --compare-runners [--reverse] [--variant=flip|gamma0.7|gamma1.4] [--no-repeat] [--sigma=0]
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { execFileSync } from 'node:child_process';
const compareRunners = process.argv.includes('--compare-runners');
const variant = process.argv.find(arg => arg.startsWith('--variant='))?.split('=')[1] || 'original';
const reverse = process.argv.includes('--reverse');
const repeat = !process.argv.includes('--no-repeat');
const sigmaArg = process.argv.find(arg => arg.startsWith('--sigma='));
const sigma = sigmaArg ? Number(sigmaArg.split('=')[1]) : undefined;
// Pin the pre-port probability runner; HEAD will change after this lands.
const referenceSource = compareRunners ? execFileSync('git', ['show', '6cb59a8070ff28d74e3cac036e1d66c96edf8f80:webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js'], { encoding: 'utf8', cwd: new URL('..', import.meta.url) }) : null;
const server = await createServer({ configFile: false, root: new URL('..', import.meta.url).pathname,
  plugins: referenceSource ? [{ name: 'cat-lite-reference-runner',
    resolveId(id) { if (id === '/__catlite-reference-runner.js') return id; },
    load(id) { if (id === '/__catlite-reference-runner.js') return referenceSource; },
  }] : [],
  server: { host: '127.0.0.1', port: 0, hmr: false } });
await server.listen();
let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage();
  page.on('console', msg => console.log('[browser]', msg.text()));
  page.on('pageerror', error => console.error(error));
  page.on('requestfailed', request => console.error('Request failed:', request.url(), request.failure()));
  page.on('response', response => { if (response.status() >= 400) console.error('HTTP', response.status(), response.url()); });
  const module = compareRunners ? 'cat-lite-runner-page.js' : 'cat-lite-browser-page.js';
  await page.route('**/__catlite', route => route.fulfill({ contentType: 'text/html', body: `<!doctype html><title>CAT-lite parity benchmark</title><script type="module">import { benchmark } from "/tests/fixtures/${module}"; window.benchmark = benchmark;</script>` }));
  await page.goto(`${server.resolvedUrls.local[0]}__catlite`);
  console.log('Benchmark URL:', page.url());
  await page.waitForFunction(() => typeof window.benchmark === 'function');
  const result = await page.evaluate(config => window.benchmark(config), { variant, reverse, repeat, sigma });
  console.log(JSON.stringify(result, null, 2));
  if (compareRunners && !result.byteExact) process.exitCode = 1;
} finally {
  await browser?.close();
  await server.close();
}
