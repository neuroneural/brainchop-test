// Real-browser WebGPU verification of 3-layer V4 auto-detection on t1_crop.nii.gz:
//   1. Default Apple Silicon path (std + single, reason=apple, zero probe)
//   2. ?webgpuMode=low-memory (LowMem128 + paced, reason=url-override)
//   3. ?webgpuMode=probe (live micro-probe on Apple Silicon, real GPU timing)
//   4. Simulated masked Linux Brave ("Brave") -> live probe -> cached-probe -> ?webgpuMode=recalibrate
//   5. Direct WebGPU validation+OOM check of both f16 and f32 micro-probe shaders
//
// Usage: node tests/webgpu-v4-autodetect-browser.mjs
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

  const baseUrl = server.resolvedUrls.local[0];

  // Part A: Direct WebGPU validation + OOM + timing check of both f16 and f32 micro-probe shaders
  {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    page.on('pageerror', (e) => { throw e; });
    await page.route('**/__probe_check', (route) =>
      route.fulfill({
        contentType: 'text/html',
        body: `<!doctype html><script type="module">
          import { runV4GpuMicroProbe } from '/gpu-compatibility.js';
          window.runProbeCheck = async () => {
            const adapter = await navigator.gpu.requestAdapter();
            const hasF16 = adapter.features.has('shader-f16');
            const device = await adapter.requestDevice({
              requiredFeatures: hasF16 ? ['shader-f16'] : [],
              requiredLimits: {
                maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
                maxBufferSize: adapter.limits.maxBufferSize,
              },
            });
            try {
              device.pushErrorScope('validation');
              device.pushErrorScope('out-of-memory');
              const f16Res = hasF16 ? await runV4GpuMicroProbe(device, { hasF16: true }) : null;
              const f32Res = await runV4GpuMicroProbe(device, { hasF16: false });
              const oom = await device.popErrorScope();
              const val = await device.popErrorScope();
              return { hasF16, f16Res, f32Res, oom: oom?.message || null, val: val?.message || null };
            } finally {
              device.destroy();
            }
          };
        </script>`,
      })
    );
    await page.goto(`${baseUrl}__probe_check`);
    await page.waitForFunction(() => typeof window.runProbeCheck === 'function');
    const probeReport = await page.evaluate(() => window.runProbeCheck());
    console.log('Micro-probe direct GPU check:', JSON.stringify(probeReport, null, 2));
    assert.equal(probeReport.oom, null, `micro-probe OOM: ${probeReport.oom}`);
    assert.equal(probeReport.val, null, `micro-probe validation error: ${probeReport.val}`);
    if (probeReport.hasF16) {
      assert.ok(probeReport.f16Res.probeMs > 0 && probeReport.f16Res.probeMs < 500, 'f16 probeMs must be fast & valid');
      assert.ok(['fast', 'moderate', 'very-slow'].includes(probeReport.f16Res.tier));
    }
    assert.ok(probeReport.f32Res.probeMs > 0 && probeReport.f32Res.probeMs < 1000, 'f32 probeMs must be fast & valid');
    await ctx.close();
  }

  async function runAppCase(urlPath, { initScript = null, existingContext = null } = {}) {
    const ownCtx = !existingContext;
    const ctx = existingContext || await browser.newContext();
    const page = await ctx.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    const v4Logs = [];
    page.on('pageerror', (e) => pageErrors.push(e.message));
    page.on('console', (msg) => {
      const txt = msg.text();
      if (msg.type() === 'error') consoleErrors.push(txt);
      if (txt.includes('[WebGPU-V4]')) v4Logs.push(txt);
    });
    if (initScript) await page.addInitScript(initScript);

    await page.goto(`${baseUrl}${urlPath}`);
    await page.waitForFunction(
      () => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
      undefined,
      { timeout: 60000 }
    );
    const result = await page.evaluate(() => {
      const statusText = document.querySelector('#location')?.textContent || '';
      const diag = window.webgpuDiagnostics || null;
      const profileKeys = Object.keys(window.localStorage).filter((k) =>
        k.startsWith('brainchop:webgpu-v4-profile:')
      );
      return {
        statusText,
        v4Plan: diag?.v4Plan || null,
        profileKeys,
      };
    });
    await page.close();
    if (ownCtx) await ctx.close();
    assert.equal(pageErrors.length, 0, `${urlPath} page errors: ${pageErrors.join('; ')}`);
    assert.equal(consoleErrors.length, 0, `${urlPath} console errors: ${consoleErrors.join('; ')}`);
    return { ...result, v4Logs };
  }

  // Part B: Default Apple Silicon path on t1_crop.nii.gz (model=1 -> 24ch MindMap-18)
  const defRes = await runAppCase('?model=1');
  console.log('Default Apple Silicon run:', JSON.stringify(defRes, null, 2));
  assert.equal(defRes.v4Plan?.layout, 'std');
  assert.equal(defRes.v4Plan?.execMode, 'single');
  assert.equal(defRes.v4Plan?.reason, 'apple');
  assert.equal(defRes.profileKeys.length, 0, 'Apple Silicon default must skip micro-probe and write zero cache entries');
  assert.ok(defRes.v4Logs.some((l) => l.includes('layout=std exec=single reason=apple')));

  // Part C: ?webgpuMode=low-memory on t1_crop.nii.gz
  const lowRes = await runAppCase('?model=1&webgpuMode=low-memory');
  console.log('?webgpuMode=low-memory run:', JSON.stringify(lowRes, null, 2));
  assert.equal(lowRes.v4Plan?.layout, 'LowMem128');
  assert.equal(lowRes.v4Plan?.execMode, 'paced');
  assert.equal(lowRes.v4Plan?.reason, 'url-override');
  assert.ok(lowRes.v4Logs.some((l) => l.includes('layout=LowMem128 exec=paced reason=url-override')));

  // Part D: Forced micro-probe path (?webgpuMode=probe) on Apple Silicon
  const probeAppRes = await runAppCase('?model=1&webgpuMode=probe');
  console.log('?webgpuMode=probe run:', JSON.stringify(probeAppRes, null, 2));
  assert.match(probeAppRes.v4Plan?.reason || '', /^probe:\d+\.\d+ms$/);
  assert.ok(probeAppRes.v4Plan?.probeMs > 0);
  assert.equal(probeAppRes.profileKeys.length, 1, 'forced probe must persist profile to localStorage');

  // Part E: Simulated masked Linux Brave ("Brave") -> live probe -> cached-probe -> recalibrate
  const braveCtx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const maskLinuxBraveScript = () => {
    Object.defineProperty(navigator, 'platform', { get: () => 'Linux x86_64' });
    Object.defineProperty(navigator, 'userAgentData', { get: () => ({ platform: 'Linux' }) });
    const origRequestAdapter = navigator.gpu?.requestAdapter?.bind(navigator.gpu);
    if (origRequestAdapter) {
      navigator.gpu.requestAdapter = async (...args) => {
        const adapter = await origRequestAdapter(...args);
        if (adapter) {
          Object.defineProperty(adapter, 'info', {
            get: () => ({ vendor: '', architecture: '', device: '', description: '' }),
          });
        }
        return adapter;
      };
    }
    const origGetParameter = WebGL2RenderingContext.prototype.getParameter;
    WebGL2RenderingContext.prototype.getParameter = function (pname) {
      if (pname === this.RENDERER || pname === 0x9246 /* UNMASKED_RENDERER_WEBGL */) {
        return 'Brave';
      }
      return origGetParameter.call(this, pname);
    };
  };

  const braveRun1 = await runAppCase('?model=6', { existingContext: braveCtx, initScript: maskLinuxBraveScript });
  console.log('Masked Linux Brave run 1 (live probe):', JSON.stringify(braveRun1, null, 2));
  assert.match(braveRun1.v4Plan?.reason || '', /^probe:\d+\.\d+ms$/);
  assert.equal(braveRun1.v4Plan?.fromCache, false);
  assert.equal(braveRun1.profileKeys.length, 1);

  const braveRun2 = await runAppCase('?model=6', { existingContext: braveCtx, initScript: maskLinuxBraveScript });
  console.log('Masked Linux Brave run 2 (cached probe):', JSON.stringify(braveRun2, null, 2));
  assert.equal(braveRun2.v4Plan?.reason, 'cached-probe');
  assert.equal(braveRun2.v4Plan?.fromCache, true);

  const braveRun3 = await runAppCase('?model=6&webgpuMode=recalibrate', {
    existingContext: braveCtx,
    initScript: maskLinuxBraveScript,
  });
  console.log('Masked Linux Brave run 3 (?webgpuMode=recalibrate):', JSON.stringify(braveRun3, null, 2));
  assert.match(braveRun3.v4Plan?.reason || '', /^probe:\d+\.\d+ms$/);
  assert.equal(braveRun3.v4Plan?.fromCache, false);
  await braveCtx.close();

  console.log('ALL REAL-BROWSER WEBGPU V4 AUTO-DETECTION CHECKS PASSED');
} finally {
  await browser?.close();
  await server.close();
}
