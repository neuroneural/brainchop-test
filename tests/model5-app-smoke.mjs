// End-to-end smoke test for the five-channel model in system Chrome.
// node tests/model5-app-smoke.mjs [--webgl2|--production]
import { chromium } from '@playwright/test';
import { createServer, preview } from 'vite';

const webgl2 = process.argv.includes('--webgl2');
const production = process.argv.includes('--production');
if (production && webgl2) throw new Error('Production smoke test uses the built WebGPU path');
const root = new URL('..', import.meta.url).pathname;
const host = '127.0.0.1';
const server = production ? await preview({ root, preview: { host, port: 0 } }) : await createServer({ configFile: false,
  root,
  plugins: webgl2 ? [{ name: 'webgl2-comparison', enforce: 'pre',
    transform(source, id) {
      if (id.endsWith('/main.js')) {
        return source.replace(/^const FORCE_WEBGL2_TESTING = .*;$/m, 'const FORCE_WEBGL2_TESTING = true;');
      }
    } }] : [],
  server: { host, port: 0, hmr: false } });
if (!production) await server.listen();
let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage();
  const messages = [];
  page.on('console', message => messages.push({ text: message.text(), time: Date.now() }));
  page.on('pageerror', error => messages.push({ text: `PAGE ERROR: ${error.message}`, time: Date.now() }));
  const start = Date.now();
  await page.goto(`${server.resolvedUrls.local[0]}?model=0`);
  try {
    await page.waitForFunction(() => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
      undefined, { timeout: webgl2 ? 20000 : 60000 });
  } catch (error) {
    console.log(JSON.stringify({ timedOut: true, recentMessages: messages.slice(-20).map(message => message.text) }, null, 2));
    throw error;
  }
  const find = phrase => messages.find(message => message.text.includes(phrase));
  const webgpu = !!find('Attempting WebGPU backend');
  const nativeWebgl2 = !!find('Attempting native WebGL2 runner');
  const failed = !!find('WebGPU inference failed');
  const cleanup = !!find('Applying CPU-based connected-component labeling');
  console.log(JSON.stringify({ webgl2, production, pageElapsedMs: Date.now() - start,
    inferenceElapsedMs: find('Segmentation finished')?.time -
      (webgl2 ? find('Attempting native WebGL2 runner')?.time : find('Starting WebGPU inference')?.time),
    webgpu, nativeWebgl2, failed, cleanup, inference: find('WebGPU inference took')?.text,
    errors: messages.filter(message => message.text.includes('PAGE ERROR:')).map(message => message.text) }, null, 2));
  if ((!webgl2 && !webgpu) || (webgl2 && (webgpu || !nativeWebgl2)) || failed || !cleanup) process.exitCode = 1;
} finally {
  await browser?.close();
  await server.close();
}
