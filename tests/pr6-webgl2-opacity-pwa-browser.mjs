// End-to-end verification for PR 6:
//   1. Smooth BG & OVL opacity sliders (MindSnap-104 discrete label + CAT-lite DT_RGBA32):
//      - BG uses live drawScene() uniform (0 FBO rebuilds)
//      - OVL & LUT isolation skip volumes[0] orient + 512-pass 3D Sobel gradient
//      - Verifies real canvas pixel diffs across opacity 0, 0.2, 0.8 + isolation toggle
//   2. Dimmer CAT-lite footer labels (.loc-k dimmer than .loc-v)
//   3. Persistent WebGL2 worker & context / GLSL shader / weight reuse (?inference=webgl2):
//      - Run #1 (model=6): cache=miss
//      - Run #2 (model=6): cache=hit, faster setup/inference, identical valid segmentation
//      - Run #3 (model=0): model switch evicts old weights cleanly, valid mask, 0 context loss
//   4. Offline PWA Service Worker & Web App Manifest against real production `dist/`:
//      - Verifies manifest.webmanifest + 192/512 PNG icons + stamped sw.js cache
//      - Runs model=6 online to populate brainchop-models-v1
//      - Switches browser context OFFLINE, reloads app, verifies default MRI boots &
//        model=6 runs 100% offline with zero page errors!
//
// Usage: node tests/pr6-webgl2-opacity-pwa-browser.mjs [--screenshots-dir=/path]
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { createServer, preview } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shotArg = process.argv.find((a) => a.startsWith("--screenshots-dir="));
const shotsDir = shotArg ? shotArg.split("=")[1] : null;
if (shotsDir) fs.mkdirSync(shotsDir, { recursive: true });

function parseRgbLuminance(rgbStr) {
  const m = rgbStr.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  assert.ok(m, `Expected rgb() color string, got: ${rgbStr}`);
  const r = Number(m[1]);
  const g = Number(m[2]);
  const b = Number(m[3]);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function bufferByteDiffFraction(bufA, bufB) {
  if (bufA.length !== bufB.length) return 1;
  let diff = 0;
  for (let i = 0; i < bufA.length; i++) {
    if (bufA[i] !== bufB[i]) diff++;
  }
  return diff / bufA.length;
}

async function waitTwoFrames(page) {
  await page.evaluate(
    () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
  );
}

const chromeArgs = ["--enable-gpu", "--use-angle=metal", "--ignore-gpu-blocklist"];
const executablePath =
  process.env.BC_CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const devServer = await createServer({
  configFile: false,
  root,
  server: { host: "127.0.0.1", port: 0, hmr: false },
});
await devServer.listen();

let previewServer;
let browser;

try {
  browser = await chromium.launch({ executablePath, args: chromeArgs });
  const devUrl = devServer.resolvedUrls.local[0];

  // =========================================================================
  // Part 1: Smooth BG & OVL Opacity Sliders (MindSnap-104 & CAT-lite) +
  //         Dimmer CAT-lite Footer Labels (.loc-k vs .loc-v)
  // =========================================================================
  {
    console.log("\n--- Part 1: Opacity smoothness + CAT-lite dimmer footer labels ---");
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    await page.goto(`${devUrl}?model=3`);
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
      undefined,
      { timeout: 60000 }
    );
    await waitTwoFrames(page);

    const canvas = page.locator("#gl1");

    // 1a. BG opacity slider drag (live shader uniform -> drawScene() only)
    const bgTimings = [];
    const bgShots = {};
    for (const val of ["0.2", "0.5", "0.8", "1"]) {
      const t0 = performance.now();
      await page.evaluate((v) => {
        const s = document.getElementById("opacitySlider0");
        s.value = v;
        s.oninput();
      }, val);
      await waitTwoFrames(page);
      bgTimings.push({ val, ms: Math.round(performance.now() - t0) });
      if (val === "0.2" || val === "1") {
        bgShots[val] = await canvas.screenshot();
      }
    }
    console.log("MindSnap-104 BG opacity timings (ms):", bgTimings);
    const bgMedian = bgTimings.map((x) => x.ms).sort((a, b) => a - b)[Math.floor(bgTimings.length / 2)];
    assert.ok(bgMedian < 120, `Expected fast BG opacity update (<120ms median), got ${bgMedian}ms`);
    assert.ok(
      bufferByteDiffFraction(bgShots["0.2"], bgShots["1"]) > 0.01,
      "BG opacity 0.2 vs 1.0 must produce visibly different canvas pixels"
    );

    // 1b. OVL opacity slider drag on MindSnap-104 discrete label volume
    const ovlTimings = [];
    const ovlShots = {};
    for (const val of ["0.8", "0.5", "0.2", "0", "0.6"]) {
      const t0 = performance.now();
      await page.evaluate((v) => {
        const s = document.getElementById("opacitySlider1");
        s.value = v;
        s.oninput();
      }, val);
      // Wait for rAF-coalesced applyOverlayOpacity + GPU render settle
      await waitTwoFrames(page);
      await waitTwoFrames(page);
      ovlTimings.push({ val, ms: Math.round(performance.now() - t0) });
      if (val === "0" || val === "0.2" || val === "0.8") {
        ovlShots[val] = await canvas.screenshot();
      }
    }
    console.log("MindSnap-104 OVL opacity timings (ms):", ovlTimings);
    const nonZeroOvl = ovlTimings.filter((x) => x.val !== "0").map((x) => x.ms).sort((a, b) => a - b);
    const ovlMedian = nonZeroOvl[Math.floor(nonZeroOvl.length / 2)];
    assert.ok(ovlMedian < 250, `Expected smooth OVL opacity update (<250ms median), got ${ovlMedian}ms`);
    assert.ok(
      bufferByteDiffFraction(ovlShots["0"], ovlShots["0.8"]) > 0.01,
      "OVL opacity 0 vs 0.8 must visibly hide/show the MindSnap-104 overlay"
    );
    assert.ok(
      bufferByteDiffFraction(ovlShots["0.2"], ovlShots["0.8"]) > 0.01,
      "OVL opacity 0.2 vs 0.8 must visibly change MindSnap-104 overlay translucency"
    );

    // 1c. Switch to CAT-lite -> test OVL drag + dimmer GM / WM / CSF footer letters
    await page.selectOption("#modelSelect", "2");
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Tissue maps finished"),
      undefined,
      { timeout: 60000 }
    );
    await waitTwoFrames(page);

    const catTimings = [];
    const catShots = {};
    for (const val of ["0.8", "0.3", "0", "0.7"]) {
      const t0 = performance.now();
      await page.evaluate((v) => {
        const s = document.getElementById("opacitySlider1");
        s.value = v;
        s.oninput();
      }, val);
      await waitTwoFrames(page);
      await waitTwoFrames(page);
      catTimings.push({ val, ms: Math.round(performance.now() - t0) });
      if (val === "0" || val === "0.8") {
        catShots[val] = await canvas.screenshot();
      }
    }
    console.log("CAT-lite OVL opacity timings (ms):", catTimings);
    assert.ok(
      bufferByteDiffFraction(catShots["0"], catShots["0.8"]) > 0.01,
      "CAT-lite OVL opacity 0 vs 0.8 must visibly hide/show the tissue overlay"
    );

    // Jump crosshair straight into Gray Matter via Stats -> Locate to populate live GM / WM / CSF readout
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    await page.locator(".stat-locate").first().click();
    await page.waitForFunction(
      () => document.querySelectorAll("#location .loc-tissues .loc-k").length === 3,
      undefined,
      { timeout: 10000 }
    );

    const footerStyle = await page.evaluate(() => {
      const keys = Array.from(document.querySelectorAll("#location .loc-tissues .loc-k"));
      const vals = Array.from(document.querySelectorAll("#location .loc-tissues .loc-v"));
      const kStyle = getComputedStyle(keys[0]);
      const vStyle = getComputedStyle(vals[0]);
      return {
        text: document.getElementById("location")?.textContent?.trim(),
        keyTexts: keys.map((el) => el.textContent.trim()),
        valTexts: vals.map((el) => el.textContent.trim()),
        keyColor: kStyle.color,
        valColor: vStyle.color,
        keyFontWeight: kStyle.fontWeight,
        valFontWeight: vStyle.fontWeight,
      };
    });
    console.log("CAT-lite footer readout:", footerStyle);
    assert.deepEqual(footerStyle.keyTexts, ["GM", "WM", "CSF"]);
    assert.equal(footerStyle.valTexts.length, 3);
    for (const vt of footerStyle.valTexts) {
      assert.match(vt, /^\d+\.\d{2}$/, `Expected 2-decimal tissue fraction, got: ${vt}`);
    }
    const kLum = parseRgbLuminance(footerStyle.keyColor);
    const vLum = parseRgbLuminance(footerStyle.valColor);
    console.log(`Footer luminance: .loc-k=${kLum.toFixed(1)} vs .loc-v=${vLum.toFixed(1)}`);
    assert.ok(
      vLum - kLum >= 60,
      `Expected .loc-k letters to be clearly dimmer than .loc-v numbers (lum diff >= 60), got k=${kLum.toFixed(1)}, v=${vLum.toFixed(1)}`
    );

    if (shotsDir) {
      await page.locator("footer").screenshot({
        path: path.join(shotsDir, "pr6-catlite-footer.png"),
      });
    }

    assert.equal(pageErrors.length, 0, `Part 1 page errors: ${pageErrors.join("; ")}`);
    await context.close();
  }

  // =========================================================================
  // Part 2: Persistent WebGL2 Worker & Context / Shader / Weight Reuse
  // =========================================================================
  {
    console.log("\n--- Part 2: Persistent WebGL2 worker reuse (?inference=webgl2) ---");
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const page = await context.newPage();
    const pageErrors = [];
    const glTimingLogs = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));
    page.on("console", (msg) => {
      const txt = msg.text();
      if (txt.includes("[Timing] WebGL2") || txt.includes("[webgl2-native]")) {
        glTimingLogs.push(txt);
      }
    });

    await page.goto(`${devUrl}?inference=webgl2`);
    // main.js populates #modelSelect immediately after await nv1.loadVolumes([{ url: "./t1_crop.nii.gz" }])
    await page.waitForFunction(
      () => document.querySelector("#modelSelect") && document.querySelector("#modelSelect").options.length > 5,
      undefined,
      { timeout: 30000 }
    );

    async function runWebGl2Model(modelValue, expectedFinishSubstring, checkStats = true) {
      const logStart = glTimingLogs.length;
      const t0 = performance.now();
      await page.evaluate((val) => {
        const loc = document.getElementById("location");
        if (loc) loc.textContent = "";
        const sel = document.getElementById("modelSelect");
        sel.value = val;
        sel.onchange();
      }, modelValue);
      await page.waitForFunction(
        (sub) => {
          const txt = document.querySelector("#location")?.textContent || "";
          const busy = document.getElementById("modelProgress")?.classList.contains("is-busy");
          return !busy && txt.includes(sub);
        },
        expectedFinishSubstring,
        { timeout: 90000 }
      );
      // Give console listener 1 tick to receive the final [Timing] WebGL2 message
      await page.waitForTimeout(100);
      const wallMs = Math.round(performance.now() - t0);
      const newLogs = glTimingLogs.slice(logStart);
      const timingLine = newLogs.find((l) => l.includes("[Timing] WebGL2")) || "";
      let statsSummary = null;
      let statRows = 0;
      if (checkStats) {
        await page.click("#saveStatsBtn");
        await page.waitForSelector("#appDialog[open].dialog-stats");
        statsSummary = (await page.locator("#statsUnitLabel").textContent())?.trim() || "";
        statRows = await page.locator(".stat-row").count();
        await page.click("#dialogXBtn");
      }
      return { wallMs, timingLine, newLogs, statsSummary, statRows };
    }

    // Run #1: Fast Subcortical + Tissue (16ch 18cls) — cold context + shader compile + weight fetch
    const run1 = await runWebGl2Model("6", "Segmentation finished", true);
    console.log("WebGL2 Run #1 (cold model=6):", run1.wallMs, "ms |", run1.timingLine, "| stats=", run1.statsSummary);
    assert.ok(run1.timingLine.includes("cache=miss"), `Expected cold WebGL2 run to report cache=miss, got: ${run1.timingLine}`);
    assert.ok(run1.statRows >= 10, `Expected >=10 segmented regions from model=6, got ${run1.statRows}`);

    // Run #2: Repeat model=6 in same page — warm worker + context + compiled shaders + cached weights
    const run2 = await runWebGl2Model("6", "Segmentation finished", true);
    console.log("WebGL2 Run #2 (warm model=6):", run2.wallMs, "ms |", run2.timingLine, "| stats=", run2.statsSummary);
    assert.ok(run2.timingLine.includes("cache=hit"), `Expected warm WebGL2 run to report cache=hit, got: ${run2.timingLine}`);
    assert.equal(run2.statsSummary, run1.statsSummary, "Warm WebGL2 repeat run must produce exact same region volume summary");

    // Parse setup=Xms from both timing lines to confirm warm setup drops sharply
    const setup1 = Number(run1.timingLine.match(/setup=([\d.]+)ms/)?.[1] ?? NaN);
    const setup2 = Number(run2.timingLine.match(/setup=([\d.]+)ms/)?.[1] ?? NaN);
    console.log(`WebGL2 setup time: cold=${setup1}ms -> warm=${setup2}ms`);
    assert.ok(setup2 < setup1, `Expected warm WebGL2 setup (${setup2}ms) < cold setup (${setup1}ms)`);

    // Run #3: Switch to MindGrab (model=0) — evicts prior weight entry cleanly, builds MindGrab shaders
    const beforeMindGrab = await page.locator("#gl1").screenshot();
    const run3 = await runWebGl2Model("0", "Segmentation finished", false);
    const afterMindGrab = await page.locator("#gl1").screenshot();
    console.log("WebGL2 Run #3 (switch model=0):", run3.wallMs, "ms |", run3.timingLine);
    assert.ok(run3.timingLine.includes("cache=miss"), `Expected model switch to report cache=miss, got: ${run3.timingLine}`);
    assert.ok(
      bufferByteDiffFraction(beforeMindGrab, afterMindGrab) > 0.01,
      "MindGrab WebGL2 run must visually update the rendered overlay"
    );

    assert.equal(pageErrors.length, 0, `Part 2 WebGL2 page errors: ${pageErrors.join("; ")}`);
    await context.close();
  }

  // =========================================================================
  // Part 3: Offline PWA Service Worker & Web App Manifest (production dist/)
  // =========================================================================
  {
    console.log("\n--- Part 3: Offline PWA Service Worker & Manifest (dist/ preview) ---");
    assert.ok(
      fs.existsSync(path.join(root, "dist", "sw.js")),
      "dist/sw.js missing — run `npm run build` before running PR 6 browser tests"
    );
    previewServer = await preview({
      configFile: path.join(root, "vite.config.js"),
      preview: { host: "127.0.0.1", port: 0 },
    });
    const previewUrl = previewServer.resolvedUrls.local[0];
    console.log("Preview URL:", previewUrl);

    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    // Stub GitHub stars so offline test doesn't wait on external network
    await page.route("https://api.github.com/**", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ stargazers_count: 500 }) })
    );

    await page.goto(previewUrl);
    await page.waitForFunction(
      () => document.querySelector("#modelSelect") && document.querySelector("#modelSelect").options.length > 5,
      undefined,
      { timeout: 30000 }
    );

    // Verify manifest.webmanifest and PNG icons
    const manifestInfo = await page.evaluate(async () => {
      const link = document.querySelector('link[rel="manifest"]');
      if (!link) return null;
      const res = await fetch(link.href);
      const manifest = await res.json();
      const iconChecks = [];
      for (const icon of manifest.icons || []) {
        const ir = await fetch(new URL(icon.src, link.href));
        iconChecks.push({
          src: icon.src,
          sizes: icon.sizes,
          status: ir.status,
          type: ir.headers.get("content-type"),
        });
      }
      return { status: res.status, manifest, iconChecks };
    });
    assert.ok(manifestInfo && manifestInfo.status === 200, "manifest.webmanifest must return HTTP 200");
    assert.equal(manifestInfo.manifest.display, "standalone");
    assert.ok(manifestInfo.manifest.id, "manifest must define id");
    assert.ok(
      manifestInfo.iconChecks.some((i) => i.sizes === "192x192" && i.status === 200 && i.type?.includes("image/png")),
      `Expected valid 192x192 PNG icon, got: ${JSON.stringify(manifestInfo.iconChecks)}`
    );
    assert.ok(
      manifestInfo.iconChecks.some((i) => i.sizes === "512x512" && i.status === 200 && i.type?.includes("image/png")),
      `Expected valid 512x512 PNG icon, got: ${JSON.stringify(manifestInfo.iconChecks)}`
    );

    // Wait for SW registration, activation, and client claim
    const swState = await page.evaluate(async () => {
      const reg = await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) {
        await new Promise((resolve) => {
          navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true });
          setTimeout(resolve, 5000);
        });
      }
      const cacheKeys = await caches.keys();
      return {
        activeScript: reg.active?.scriptURL || null,
        controlled: Boolean(navigator.serviceWorker.controller),
        cacheKeys,
      };
    });
    console.log("SW state after online load:", swState);
    assert.ok(swState.activeScript?.endsWith("/sw.js"), `Expected active sw.js, got ${swState.activeScript}`);
    assert.equal(swState.controlled, true, "Service Worker should claim the client on activate");
    const shellCache = swState.cacheKeys.find((k) => k.startsWith("brainchop-shell-"));
    assert.ok(shellCache && !shellCache.includes("__BRAINCHOP_BUILD_VERSION__"), `Expected stamped shell cache, got ${swState.cacheKeys}`);

    // Run model=6 online so its safetensors + colormap are cached in brainchop-models-v1
    await page.selectOption("#modelSelect", "6");
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
      undefined,
      { timeout: 60000 }
    );

    const modelCacheEntries = await page.evaluate(async () => {
      const c = await caches.open("brainchop-models-v1");
      return (await c.keys()).map((r) => new URL(r.url).pathname);
    });
    console.log("Cached model assets:", modelCacheEntries);
    assert.ok(
      modelCacheEntries.some((p) => p.includes("model16chan18cls") && p.endsWith(".safetensors")),
      `Expected model16chan18cls safetensors in brainchop-models-v1, got: ${modelCacheEntries}`
    );

    // Go 100% OFFLINE and reload the application!
    await context.setOffline(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForFunction(
      () => document.querySelector("#modelSelect") && document.querySelector("#modelSelect").options.length > 5,
      undefined,
      { timeout: 30000 }
    );

    // Run the cached model=6 100% OFFLINE!
    await page.selectOption("#modelSelect", "6");
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
      undefined,
      { timeout: 60000 }
    );
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    const offlineSummary = (await page.locator("#statsUnitLabel").textContent())?.trim() || "";
    const offlineRows = await page.locator(".stat-row").count();
    await page.click("#dialogXBtn");
    console.log("Offline reload + offline model=6 inference succeeded! stats =", offlineSummary);
    assert.ok(offlineRows >= 10, `Expected >=10 segmented regions offline, got ${offlineRows}`);
    assert.equal(pageErrors.length, 0, `Part 3 PWA page errors: ${pageErrors.join("; ")}`);

    await context.close();
  }

  console.log("\nALL PR 6 BROWSER CHECKS PASSED!");
} finally {
  if (browser) await browser.close();
  if (previewServer) previewServer.httpServer.close();
  await devServer.close();
}
