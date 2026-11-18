// End-to-end verification of Windows TDR-safe chunked WebGPU execution,
// Linux/discrete-GPU pipelined execution, Mac untouched single-encoder parity,
// and live chunk-by-chunk <progress id="modelProgress"> updates.
//
// Usage: node tests/windows-tdr-paced-browser.mjs
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { createServer } from 'vite';

const root = new URL('..', import.meta.url).pathname;
const server = await createServer({
  configFile: false,
  root,
  server: { host: '127.0.0.1', port: 0, hmr: false },
});
await server.listen();

let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
  });

  // Part 1: Bit-exactness across single / pipelined / paced (std & LowMem128 & CAT-lite)
  {
    const winContext = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    });
    const page = await winContext.newPage();
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
      Object.defineProperty(navigator, 'userAgentData', { get: () => ({ platform: 'Windows' }) });
    });
    page.on('pageerror', (err) => { throw err; });
    await page.route('**/__win_paced_suite', (route) =>
      route.fulfill({
        contentType: 'text/html',
        body: '<!doctype html><script type="module">import { runWindowsPacedSuite } from "/tests/fixtures/windows-tdr-paced-page.js"; window.runWindowsPacedSuite = runWindowsPacedSuite;</script>',
      })
    );
    await page.goto(`${server.resolvedUrls.local[0]}__win_paced_suite`);
    await page.waitForFunction(() => typeof window.runWindowsPacedSuite === 'function');
    const suite = await page.evaluate(() => window.runWindowsPacedSuite());
    console.log('Kernel parity & pacing suite:', JSON.stringify(suite, null, 2));

    assert.equal(suite.m16.diffPipeVsSingle, 0, '16ch pipelined must be bit-identical to single');
    assert.equal(suite.m16.diffCalibrateVsSingle, 0, '16ch Windows auto-calibration must be bit-identical to single');
    assert.equal(suite.m16.calibratedFlag, true, 'Windows auto-calibration must set __v4WinCalibrated');
    assert.equal(suite.m16.diffPacedVsSingle, 0, '16ch paced Z-chunks must be bit-identical to single');
    assert.ok(suite.m16.progressTicks >= 20, `expected >=20 progress ticks on 16ch paced, got ${suite.m16.progressTicks}`);
    assert.equal(suite.m16.layerMessages, 13, 'expected 13 per-layer status messages');
    assert.ok(suite.m16.monotonic, '16ch progress fractions must be strictly non-decreasing');

    assert.equal(suite.m24LowMem128.coneInfo?.mode, 'LowMem128', 'Windows Intel Gen9 UHD 630 must auto-select LowMem128 for 24ch');
    assert.equal(suite.m24LowMem128.diffPacedVsSingle128, 0, '24ch LowMem128 paced must be bit-identical to single');
    assert.ok(suite.m24LowMem128.progressTicks >= 20, `expected >=20 progress ticks on 24ch LowMem128, got ${suite.m24LowMem128.progressTicks}`);
    assert.equal(suite.m24LowMem128.layerMessages, 13, 'expected 13 per-layer status messages on 24ch');
    assert.ok(suite.m24LowMem128.monotonic, '24ch progress fractions must be strictly non-decreasing');

    assert.equal(suite.catLite.maxDiffGm, 0, 'CAT-lite GM prior must be bit-identical in paced mode');
    assert.equal(suite.catLite.maxDiffWm, 0, 'CAT-lite WM prior must be bit-identical in paced mode');
    assert.equal(suite.catLite.maxDiffCsf, 0, 'CAT-lite CSF prior must be bit-identical in paced mode');
    assert.ok(suite.catLite.progressTicks >= 20, 'CAT-lite paced mode must emit smooth progress ticks');
    assert.ok(suite.catLite.monotonic, 'CAT-lite progress fractions must be monotonic');

    assert.equal(suite.windowsFirefox.uniformMatShaderCount, 0, 'no V4 WGSL shader may declare matCxR inside var<uniform> (breaks Naga HLSL on Windows Firefox)');
    assert.equal(suite.windowsFirefox.ffWin24Mode, 'LowMem128', 'Windows Firefox redacted adapterInfo + Intel WebGL renderer must auto-select LowMem128');
    assert.equal(suite.windowsFirefox.diff24FfWinVsSingle128, 0, 'Windows Firefox 24ch LowMem128 paced output must be bit-identical to single');
    assert.ok(suite.windowsFirefox.mgF16VsF32AgreePct >= 99.95, `MindGrab f16 vec4<u32> uniform must match f32 >=99.95%, got ${suite.windowsFirefox.mgF16VsF32AgreePct}%`);
    await winContext.close();
  }

  // Part 2: Full UI DOM <progress id="modelProgress"> live chunk-by-chunk verification
  // using Windows User-Agent + ?webgpuExec=paced on 16ch Subcortical + Tissue (index 6)
  {
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
      Object.defineProperty(navigator, 'userAgentData', { get: () => ({ platform: 'Windows' }) });
      window.__progressHistory = [];
      window.addEventListener('DOMContentLoaded', () => {
        const bar = document.getElementById('modelProgress');
        if (!bar) return;
        const record = () => {
          const v = Number(bar.value);
          if (window.__progressHistory.length === 0 || window.__progressHistory.at(-1) !== v) {
            window.__progressHistory.push(v);
          }
        };
        const obs = new MutationObserver(record);
        obs.observe(bar, { attributes: true, attributeFilter: ['value'] });
        const desc = Object.getOwnPropertyDescriptor(HTMLProgressElement.prototype, 'value');
        if (desc?.set) {
          Object.defineProperty(bar, 'value', {
            get() { return desc.get.call(this); },
            set(v) {
              desc.set.call(this, v);
              record();
            },
          });
        }
      });
    });

    await page.goto(`${server.resolvedUrls.local[0]}?model=6&webgpuExec=paced`);
    await page.waitForFunction(
      () => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
      undefined,
      { timeout: 60000 }
    );
    const history = await page.evaluate(() => window.__progressHistory);
    const inferSteps = history.filter((v) => v > 30 && v < 90);
    console.log('Live DOM #modelProgress history count:', history.length, '| mid-inference (30..90) steps:', inferSteps.length);
    console.log('Sample mid-inference values:', inferSteps.slice(0, 12).map((v) => +v.toFixed(1)));

    assert.equal(errors.length, 0, `unexpected page errors: ${errors.join('; ')}`);
    assert.ok(inferSteps.length >= 15, `expected >=15 distinct mid-inference progress bar updates, got ${inferSteps.length}`);
    for (let i = 1; i < inferSteps.length; i++) {
      assert.ok(inferSteps[i] >= inferSteps[i - 1] - 1e-6, `non-monotonic progress bar step: ${inferSteps[i - 1]} -> ${inferSteps[i]}`);
    }
    assert.equal(history.at(-1), 100, 'final progress bar value should be 100');
    await context.close();
  }

  console.log('ALL WINDOWS TDR & PROGRESS BAR VERIFICATION CHECKS PASSED');
} finally {
  await browser?.close();
  await server.close();
}
