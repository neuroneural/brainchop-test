// End-to-end Playwright test for PR 4: Mobile & Viewer UX Essentials
// - Deduplicated touch-view.js delegating canvas pinch zoom to NiiVue 1.0.0-rc.204
// - Desktop Reset View button (#resetViewBtn) + mobile ⟲ reset without duplication
// - Active-model badge (#activeModelBadge) persisting after crosshair moves
// - Touch-aware isolation hint ("Open Stats to isolate a region" vs "Option/Alt-click")
// - crypto.randomUUID() LAN-IP plain-HTTP fallback
// Run: node tests/mobile-viewer-ux-browser.mjs [--screenshots-dir=/path]
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const shotArg = process.argv.find((a) => a.startsWith('--screenshots-dir='));
const shotsDir = shotArg ? shotArg.split('=')[1] : null;
if (shotsDir) fs.mkdirSync(shotsDir, { recursive: true });

async function snapshotCanvasQuadrants(page) {
  const pngBuf = await page.locator('#gl1').screenshot();
  const dataUrl = `data:image/png;base64,${pngBuf.toString('base64')}`;
  return page.evaluate(async (url) => {
    const img = new Image();
    img.src = url;
    await img.decode();
    const tmp = document.createElement('canvas');
    tmp.width = 64;
    tmp.height = 64;
    const ctx = tmp.getContext('2d');
    ctx.drawImage(img, 0, 0, 64, 64);
    const data = ctx.getImageData(0, 0, 64, 64).data;
    const hashRect = (x0, y0, x1, y1) => {
      const vals = [];
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) {
          const i = (y * 64 + x) * 4;
          vals.push(data[i], data[i + 1], data[i + 2]);
        }
      }
      return vals;
    };
    return {
      tl: hashRect(2, 2, 30, 30),
      tr: hashRect(34, 2, 62, 30),
      bl: hashRect(2, 34, 30, 62),
      br: hashRect(34, 34, 62, 62),
    };
  }, dataUrl);
}

function meanAbsDiff(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += Math.abs(a[i] - b[i]);
  return sum / a.length;
}

function quadrantDiffs(q1, q2) {
  return {
    tl: meanAbsDiff(q1.tl, q2.tl),
    tr: meanAbsDiff(q1.tr, q2.tr),
    bl: meanAbsDiff(q1.bl, q2.bl),
    br: meanAbsDiff(q1.br, q2.br),
  };
}

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
  const baseUrl = server.resolvedUrls.local[0];

  // =========================================================================
  // 1. DESKTOP TESTS (1280x800, fine pointer)
  // =========================================================================
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));

    await page.goto(baseUrl);
    await page.waitForFunction(() => document.querySelectorAll('#modelSelect option').length > 2);
    await page.waitForTimeout(600);

    // Verify desktop toolbar layout, Reset View button, aria attributes, no Open File button
    const desktopInit = await page.evaluate(() => {
      const resetBtn = document.getElementById('resetViewBtn');
      const paneSwitcher = document.getElementById('paneSwitcher');
      const activeItem = document.getElementById('activeModelItem');
      const header = document.querySelector('header');
      const dragBtns = [...document.querySelectorAll('#dragSegmented button')];
      return {
        narrow: document.body.classList.contains('nv-narrow'),
        resetVisible: resetBtn && getComputedStyle(resetBtn).display !== 'none',
        resetAriaLabel: resetBtn?.getAttribute('aria-label'),
        resetHasAriaPressed: resetBtn?.hasAttribute('aria-pressed'),
        paneHidden: paneSwitcher && getComputedStyle(paneSwitcher).display === 'none',
        activeHidden: activeItem?.hidden === true,
        headerOverflow: header.scrollWidth > header.clientWidth + 1,
        fileInputs: document.querySelectorAll('input[type="file"]').length,
        dragPressedStates: dragBtns.map((b) => [b.dataset.drag, b.getAttribute('aria-pressed')]),
      };
    });
    assert.equal(desktopInit.narrow, false);
    assert.equal(desktopInit.resetVisible, true, 'Desktop Reset View button must be visible');
    assert.equal(desktopInit.resetAriaLabel, 'Reset view');
    assert.equal(desktopInit.resetHasAriaPressed, false, 'Action button must not carry aria-pressed');
    assert.equal(desktopInit.paneHidden, true, 'Mobile pane switcher must stay hidden on desktop');
    assert.equal(desktopInit.activeHidden, true, 'Active model badge must be hidden before segmentation');
    assert.equal(desktopInit.headerOverflow, false, 'Desktop header must not overflow horizontally');
    assert.equal(desktopInit.fileInputs, 0, 'No file input / Open File button should be present');
    assert.deepEqual(desktopInit.dragPressedStates, [
      ['3', 'false'],
      ['1', 'false'],
      ['2', 'false'],
      ['4', 'true'],
    ]);

    // Verify aria-pressed updates on drag mode toggle
    await page.click('#dragSegmented button[data-drag="3"]');
    const panPressed = await page.evaluate(() =>
      [...document.querySelectorAll('#dragSegmented button')].map((b) => b.getAttribute('aria-pressed')),
    );
    assert.deepEqual(panPressed, ['true', 'false', 'false', 'false']);

    // Capture baseline canvas before zooming 2D & 3D
    const baseQ = await snapshotCanvasQuadrants(page);
    const box = await page.locator('#gl1').boundingBox();

    // Zoom 3D render (bottom-right tile, centered at ~64% x, 75% y in 1280x800 2x2 grid)
    // + zoom 2D (top-left tile, centered at ~36% x, 28% y, in Pan/Zoom mode)
    await page.mouse.move(box.x + box.width * 0.64, box.y + box.height * 0.75);
    await page.mouse.wheel(0, -360);
    await page.mouse.move(box.x + box.width * 0.36, box.y + box.height * 0.28);
    await page.mouse.wheel(0, -360);
    await page.waitForTimeout(350);

    const zoomedQ = await snapshotCanvasQuadrants(page);
    const zoomDelta = quadrantDiffs(baseQ, zoomedQ);
    assert.ok(zoomDelta.br > 1.5, `Expected 3D tile to zoom (diff=${zoomDelta.br.toFixed(2)})`);
    assert.ok(zoomDelta.tl > 1.5, `Expected 2D tile to zoom (diff=${zoomDelta.tl.toFixed(2)})`);

    // Click desktop Reset View button -> both 2D & 3D restore cleanly
    await page.click('#resetViewBtn');
    await page.waitForTimeout(400);
    const resetQ = await snapshotCanvasQuadrants(page);
    const resetDelta = quadrantDiffs(baseQ, resetQ);
    assert.ok(
      resetDelta.tl < 0.8 && resetDelta.br < 0.8,
      `Expected Reset View to restore 2D & 3D (diffs=${JSON.stringify(resetDelta)})`,
    );

    // Restore default Reslice 3D drag mode and run fast MindMap-16ch (⚡)
    await page.click('#dragSegmented button[data-drag="4"]');
    await page.evaluate(() => {
      const sel = document.getElementById('modelSelect');
      const opt = [...sel.options].find((o) => o.textContent.includes('\u26A1'));
      sel.value = opt.value;
      sel.dispatchEvent(new Event('change'));
    });
    await page.waitForFunction(
      () => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
      null,
      { timeout: 120000 },
    );
    const finishText = await page.textContent('#location');
    assert.ok(
      finishText.includes('Option/Alt-click a region to isolate'),
      `Expected desktop isolation hint, got: ${finishText}`,
    );

    // Click inside top-left 2D slice so #location switches to coordinates, then check active-model badge persists!
    await page.mouse.click(box.x + box.width * 0.36, box.y + box.height * 0.28);
    await page.waitForTimeout(250);

    const postSegDesktop = await page.evaluate(() => {
      const badge = document.getElementById('activeModelBadge');
      const item = document.getElementById('activeModelItem');
      const loc = document.getElementById('location')?.textContent || '';
      const footer = document.querySelector('footer');
      return {
        badgeVisible: item && !item.hidden && getComputedStyle(badge).display !== 'none',
        badgeText: badge?.textContent || '',
        badgeTitle: badge?.title || '',
        locText: loc,
        footerOverflow: footer.scrollWidth > footer.clientWidth + 1,
      };
    });
    assert.equal(postSegDesktop.badgeVisible, true, 'Active model badge must be visible after segmentation');
    assert.ok(postSegDesktop.badgeText.includes('Subcortical + Tissue'), `Unexpected badge text: ${postSegDesktop.badgeText}`);
    assert.equal(postSegDesktop.footerOverflow, false, 'Desktop footer must not overflow');

    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, 'desktop-pr4.png') });
    }
    assert.equal(errs.length, 0, `Desktop page errors: ${errs.join('; ')}`);
    console.log(
      `Desktop PASS: resetDelta=${JSON.stringify(Object.fromEntries(Object.entries(resetDelta).map(([k, v]) => [k, +v.toFixed(2)])))}, ` +
      `badge="${postSegDesktop.badgeText}"`,
    );
    await context.close();
  }

  // =========================================================================
  // 2. MOBILE / TOUCH-PRIMARY TESTS (390x844, pointer: coarse, no pointer: fine)
  // =========================================================================
  {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await context.newPage();
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));

    // Emulate true touch-only phone media queries (pointer: coarse, no pointer: fine)
    await page.addInitScript(() => {
      const origMM = window.matchMedia.bind(window);
      window.matchMedia = (q) => {
        if (q === '(pointer: coarse)') return { matches: true, media: q, addEventListener() {}, removeEventListener() {} };
        if (q === '(pointer: fine)') return { matches: false, media: q, addEventListener() {}, removeEventListener() {} };
        return origMM(q);
      };
    });

    await page.goto(baseUrl);
    await page.waitForFunction(() => document.querySelectorAll('#modelSelect option').length > 2);
    await page.waitForTimeout(600);

    const mobileInit = await page.evaluate(() => {
      const resetBtn = document.getElementById('resetViewBtn');
      const switcher = document.getElementById('paneSwitcher');
      const paneReset = switcher?.querySelector('.pane-reset');
      const swRect = switcher?.getBoundingClientRect();
      return {
        narrow: document.body.classList.contains('nv-narrow'),
        headerResetHidden: resetBtn && getComputedStyle(resetBtn).display === 'none',
        switcherVisible: switcher && getComputedStyle(switcher).display !== 'none',
        switcherFits: swRect && swRect.left >= 0 && swRect.right <= window.innerWidth,
        paneResetVisible: paneReset && getComputedStyle(paneReset).display !== 'none',
      };
    });
    assert.equal(mobileInit.narrow, true, 'Phone viewport must enable body.nv-narrow');
    assert.equal(mobileInit.headerResetHidden, true, 'Desktop #resetViewBtn must be hidden on mobile (no duplicate ⟲)');
    assert.equal(mobileInit.switcherVisible, true, 'Pane switcher must be visible on mobile');
    assert.equal(mobileInit.switcherFits, true, 'Pane switcher must fit inside 390px phone viewport');
    assert.equal(mobileInit.paneResetVisible, true, 'Mobile ⟲ reset button must be visible');

    // Verify NiiVue 1.0.0-rc.204 native two-finger touch pinch on canvas via real CDP touch events
    // (exercises real touch-action: none, pointerId capture, and touch-view.js document guards with 0 errors).
    await page.click('#paneSwitcher button[data-pane="axial"]');
    await page.waitForTimeout(300);
    const cdp = await context.newCDPSession(page);
    const mBox = await page.locator('#gl1').boundingBox();
    const cx = Math.round(mBox.x + mBox.width * 0.5);
    const cy = Math.round(mBox.y + mBox.height * 0.5);
    // Tap once at finger-1 start so crosshair baseline matches before pinching
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: cx - 35, y: cy, id: 1 }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await page.waitForTimeout(200);
    const mobileBaseQ = await snapshotCanvasQuadrants(page);

    // Real 2-finger pinch out (spread from 70px to 210px)
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: cx - 35, y: cy, id: 1 }] });
    await cdp.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [{ x: cx - 35, y: cy, id: 1 }, { x: cx + 35, y: cy, id: 2 }],
    });
    for (let step = 1; step <= 4; step++) {
      const dx = 35 + step * 18;
      await cdp.send('Input.dispatchTouchEvent', {
        type: 'touchMove',
        touchPoints: [{ x: cx - dx, y: cy, id: 1 }, { x: cx + dx, y: cy, id: 2 }],
      });
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await page.waitForTimeout(350);
    const mobilePinchedQ = await snapshotCanvasQuadrants(page);
    const pinchDiff = meanAbsDiff(mobileBaseQ.tl, mobilePinchedQ.tl);
    assert.ok(pinchDiff > 2.0, `Expected native NiiVue 2-finger touch pinch to zoom slice (diff=${pinchDiff.toFixed(2)})`);

    // Tap mobile ⟲ reset -> restores baseline
    await page.click('#paneSwitcher .pane-reset');
    await page.waitForTimeout(350);
    const mobileResetQ = await snapshotCanvasQuadrants(page);
    const mobileResetDiff = meanAbsDiff(mobileBaseQ.tl, mobileResetQ.tl);
    assert.ok(mobileResetDiff < 0.8, `Expected mobile ⟲ to reset pinch zoom (diff=${mobileResetDiff.toFixed(2)})`);
    await cdp.detach();

    // Switch back to All panes and run fast MindMap-16ch -> verify touch-aware hint + footer fit
    await page.click('#paneSwitcher button[data-pane="multi"]');
    await page.evaluate(() => {
      const sel = document.getElementById('modelSelect');
      const opt = [...sel.options].find((o) => o.textContent.includes('\u26A1'));
      sel.value = opt.value;
      sel.dispatchEvent(new Event('change'));
    });
    await page.waitForFunction(
      () => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
      null,
      { timeout: 120000 },
    );
    const mobileFinish = await page.evaluate(() => {
      const loc = document.getElementById('location')?.textContent || '';
      const badge = document.getElementById('activeModelBadge');
      const badgeRect = badge?.getBoundingClientRect();
      const starRect = document.querySelector('.star-link')?.getBoundingClientRect();
      return {
        loc,
        badgeText: badge?.textContent || '',
        badgeVisible: !document.getElementById('activeModelItem')?.hidden,
        starFits: starRect && starRect.right <= window.innerWidth + 1,
        badgeWidth: badgeRect?.width || 0,
      };
    });
    assert.ok(
      mobileFinish.loc.includes('Open Stats to isolate a region'),
      `Expected touch-aware isolation hint on phone, got: ${mobileFinish.loc}`,
    );
    assert.equal(mobileFinish.loc.includes('Option/Alt-click'), false, 'Phone hint must not mention Option/Alt-click');
    assert.equal(mobileFinish.badgeVisible, true, 'Active model badge must be visible on phone');
    assert.equal(mobileFinish.starFits, true, 'Footer items must fit cleanly inside 390px phone width');

    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, 'mobile-pr4.png') });
    }
    assert.equal(errs.length, 0, `Mobile page errors: ${errs.join('; ')}`);
    console.log(
      `Mobile PASS: nativePinchDiff=${pinchDiff.toFixed(2)}, resetDiff=${mobileResetDiff.toFixed(2)}, ` +
      `hint="${mobileFinish.loc}", badge="${mobileFinish.badgeText}" (${mobileFinish.badgeWidth.toFixed(0)}px)`,
    );
    await context.close();
  }

  // =========================================================================
  // 3. NON-SECURE LAN-IP HTTP FALLBACK (crypto.randomUUID === undefined)
  // =========================================================================
  {
    const context = await browser.newContext({ viewport: { width: 1024, height: 768 } });
    const page = await context.newPage();
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));

    await page.addInitScript(() => {
      Object.defineProperty(crypto, 'randomUUID', { value: undefined, configurable: true });
    });

    await page.goto(baseUrl);
    await page.waitForFunction(() => document.querySelectorAll('#modelSelect option').length > 2);
    const hasRandomUUID = await page.evaluate(() => typeof crypto.randomUUID);
    assert.equal(hasRandomUUID, 'undefined', 'Test setup should simulate non-secure HTTP without randomUUID');

    await page.evaluate(() => {
      const sel = document.getElementById('modelSelect');
      const opt = [...sel.options].find((o) => o.textContent.includes('\u26A1'));
      sel.value = opt.value;
      sel.dispatchEvent(new Event('change'));
    });
    await page.waitForFunction(
      () => document.querySelector('#location')?.textContent?.includes('Segmentation finished'),
      null,
      { timeout: 120000 },
    );
    assert.equal(errs.length, 0, `LAN-IP fallback page errors: ${errs.join('; ')}`);
    console.log('LAN-IP HTTP (no crypto.randomUUID) PASS: overlay rendered with 0 errors');
    await context.close();
  }

  console.log('ALL MOBILE & VIEWER UX TESTS PASSED!');
} finally {
  if (browser) await browser.close();
  await server.close();
}
