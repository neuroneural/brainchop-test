// Run with: node tests/model5-browser.mjs [--reverse] [--no-repeat]
// Compares the working WebGPU runner with the committed version on the sample MRI.
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { execFileSync } from 'node:child_process';

const referenceSource = execFileSync('git', ['show', 'HEAD:webgpu_runners/model5_runner.js'],
  { encoding: 'utf8', cwd: new URL('..', import.meta.url) });
const server = await createServer({
  configFile: false, root: new URL('..', import.meta.url).pathname,
  plugins: [{
    name: 'model5-reference-runner', enforce: 'pre',
    resolveId(id) { if (id === '/__model5-reference.js') return id; },
    load(id) { if (id === '/__model5-reference.js') return referenceSource; },
  }],
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
  page.on('console', message => console.log('[browser]', message.text()));
  page.on('pageerror', error => console.error(error));
  await page.route('**/__model5', route => route.fulfill({
    contentType: 'text/html',
    body: '<!doctype html><title>5-channel WebGPU benchmark</title><script type="module">import { benchmark } from "/tests/fixtures/model5-browser-page.js"; window.benchmark = benchmark;</script>',
  }));
  await page.goto(`${server.resolvedUrls.local[0]}__model5`);
  await page.waitForFunction(() => typeof window.benchmark === 'function');
  const result = await page.evaluate(options => window.benchmark(options), {
    reverse: process.argv.includes('--reverse'), repeat: !process.argv.includes('--no-repeat'),
    variant: process.argv.find(arg => arg.startsWith('--variant='))?.split('=')[1] || 'original',
  });
  console.log(JSON.stringify(result, null, 2));
  if (!result.byteExact) process.exitCode = 1;
} finally {
  await browser?.close();
  await server.close();
}
