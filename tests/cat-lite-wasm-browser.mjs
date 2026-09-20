// Verify actual wasm loading in the page and bundled worker, including a
// production deployment below a URL path. A silent JS fallback fails this test.
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, extname } from 'node:path';
import { createServer as httpServer } from 'node:http';
import { build, createServer } from 'vite';
import { chromium } from '@playwright/test';

const root = new URL('..', import.meta.url).pathname;
const outDir = await mkdtemp(join(tmpdir(), 'cat-lite-browser-'));
let dev, production, browser;
try {
  await build({ configFile: false, root, base: './', logLevel: 'warn',
    build: { outDir, emptyOutDir: true,
      rollupOptions: { input: resolve(root, 'tests/fixtures/cat-lite-wasm-page.html') } } });
  production = httpServer(async (req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = resolve(outDir, '.' + pathname.replace(/^\/nested\/app/, ''));
    if (!pathname.startsWith('/nested/app/') || !file.startsWith(outDir + '/')) {
      res.writeHead(404).end(); return;
    }
    try {
      const bytes = await readFile(file);
      res.setHeader('Content-Type', { '.js': 'text/javascript', '.wasm': 'application/wasm',
        '.html': 'text/html' }[extname(file)] || 'application/octet-stream');
      res.end(bytes);
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => production.listen(0, '127.0.0.1', resolve));
  dev = await createServer({ configFile: false, root, server: { host: '127.0.0.1', port: 0, hmr: false } });
  await dev.listen();
  browser = await chromium.launch({ channel: process.env.BC_CHROME_CHANNEL || 'chrome' });
  for (const [name, origin] of [
    ['development', dev.resolvedUrls.local[0]],
    ['production nested path', `http://127.0.0.1:${production.address().port}/nested/app/`],
  ]) {
    const page = await browser.newPage(), fetched = [];
    page.on('response', response => { if (response.url().includes('/wasm/')) fetched.push([response.url(), response.status()]); });
    page.on('console', msg => { if (msg.type() === 'warning' || msg.type() === 'error') console.log(name, msg.text()); });
    await page.goto(origin + 'tests/fixtures/cat-lite-wasm-page.html');
    await page.waitForFunction(() => typeof window.checkCatLite === 'function');
    const result = await page.evaluate(() => window.checkCatLite());
    assert(fetched.filter(([url, status]) => url.endsWith('.wasm') && status === 200).length >= 2,
      `${name}: main and worker must each fetch wasm`);
    assert(fetched.every(([, status]) => status === 200), JSON.stringify(fetched));
    console.log(name, JSON.stringify(result));
    await page.close();
    const unavailable = await browser.newPage();
    await unavailable.route('**/wasm/cat-lite.js', route => route.abort());
    await unavailable.goto(origin + 'tests/fixtures/cat-lite-wasm-page.html');
    await unavailable.waitForFunction(() => typeof window.checkUnavailable === 'function');
    assert.equal(await unavailable.evaluate(() => window.checkUnavailable()), true);
    console.log(name, 'unavailable wasm preserves priors for JS fallback');
    await unavailable.close();
  }
} finally {
  await browser?.close(); await dev?.close();
  await new Promise(resolve => production ? production.close(resolve) : resolve());
  await rm(outDir, { recursive: true, force: true });
}
