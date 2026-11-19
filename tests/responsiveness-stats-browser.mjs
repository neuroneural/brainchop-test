// End-to-end verification for PR 5:
//   - Instant LUT-based label isolation (R=G=B=A=0 hidden entries, pristine ov.img, zero 3D bleed)
//   - Worker-offloaded BWLabeler + CAT-lite PVE + native-space reslicing
//   - CAT-lite single DT_RGBA32 overlay (fast opacity drag, 3-file Float32/native exports, GM/WM/CSF cm³ & % ICV stats)
//   - Click-to-jump centroid Locate button in Stats (discrete labels & CAT-lite tissues)
//   - Smooth busy progress bar, localStorage-cached GitHub stars, About DK50 icon, backend status badge
//
// Usage: node tests/responsiveness-stats-browser.mjs [--screenshots-dir=/path]
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { createServer } from "vite";
import { resliceVolumeData } from "../reslice-volume.js";
import {
  buildCatLiteRgbaComposite,
  updateCatLiteRgbaOpacity,
  computeCatLiteStats,
  buildCatLiteStatsCsv,
} from "../cat-lite-overlay.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shotArg = process.argv.find((a) => a.startsWith("--screenshots-dir="));
const shotsDir = shotArg ? shotArg.split("=")[1] : null;
if (shotsDir) fs.mkdirSync(shotsDir, { recursive: true });

function parseNiftiGz(filePath) {
  const raw = zlib.gunzipSync(fs.readFileSync(filePath));
  const dv = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
  assert.equal(dv.getInt32(0, true), 348, "Expected little-endian NIfTI-1 header");
  const dims = [
    dv.getInt16(40, true),
    dv.getInt16(42, true),
    dv.getInt16(44, true),
    dv.getInt16(46, true),
  ];
  const intentCode = dv.getInt16(68, true);
  const datatype = dv.getInt16(70, true);
  const bitpix = dv.getInt16(72, true);
  const voxOffset = Math.round(dv.getFloat32(108, true));
  const sclSlope = dv.getFloat32(112, true);
  const sclInter = dv.getFloat32(116, true);
  const nvox = dims[1] * dims[2] * dims[3];
  const body = raw.subarray(voxOffset);
  let voxels;
  if (datatype === 2) {
    voxels = new Uint8Array(body.buffer, body.byteOffset, nvox);
  } else if (datatype === 4) {
    const aligned = body.byteOffset % 2 === 0 ? body : Uint8Array.from(body);
    voxels = new Int16Array(aligned.buffer, aligned.byteOffset, nvox);
  } else if (datatype === 16) {
    const aligned = body.byteOffset % 4 === 0 ? body : Uint8Array.from(body);
    voxels = new Float32Array(aligned.buffer, aligned.byteOffset, nvox);
  } else {
    throw new Error(`Unexpected NIfTI datatype ${datatype}`);
  }
  return { dims, intentCode, datatype, bitpix, sclSlope, sclInter, voxels };
}

// --- Part 0: Pure Node unit checks for reslice-volume.js & cat-lite-overlay.js ---
{
  const idAffine = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
  const srcLbl = new Uint8Array(4 * 4 * 4);
  srcLbl[1 + 2 * 4 + 3 * 16] = 7;
  const lut = new Uint16Array(10);
  lut[7] = 1024;
  const resLbl = resliceVolumeData({
    srcImg: srcLbl,
    srcDims: [4, 4, 4],
    srcAffine: idAffine,
    dstDims: [4, 4, 4],
    dstAffine: idAffine,
    isLabel: true,
    labelLut: lut,
  });
  assert.equal(resLbl.hdrPatch.datatypeCode, 4);
  assert.equal(resLbl.hdrPatch.intent_code, 1002);
  assert.equal(resLbl.hdrPatch.cal_max, 1024);
  assert.equal(resLbl.img[1 + 2 * 4 + 3 * 16], 1024);
  assert.equal(resLbl.img[0], 0);

  const srcProb = new Float32Array(4 * 4 * 4);
  srcProb.fill(0.5);
  const resProb = resliceVolumeData({
    srcImg: srcProb,
    srcDims: [4, 4, 4],
    srcAffine: idAffine,
    dstDims: [4, 4, 4],
    dstAffine: idAffine,
    isLabel: false,
    isProbability: true,
  });
  assert.equal(resProb.hdrPatch.datatypeCode, 2);
  assert.ok(Math.abs(resProb.hdrPatch.scl_slope - 1 / 255) < 1e-7);
  assert.equal(resProb.img[1 + 1 * 4 + 1 * 16], 128);

  // CAT-lite compositor + opacity update + stats unit checks
  const n = 8;
  const gm = new Float32Array([0, 0.8, 0.2, 0, 0, 0, 0, 0]);
  const wm = new Float32Array([0, 0.2, 0.8, 0, 0, 0, 0, 0]);
  const csf = new Float32Array([0, 0, 0, 1.0, 0, 0, 0, 0]);
  const img = new Uint8Array([0, 100, 200, 40, 0, 0, 0, 0]);
  const comp = buildCatLiteRgbaComposite([gm, wm, csf], { probabilityDisplayMin: 0.03 }, null, 0.5);
  assert.equal(comp.rgba[3], 0, "Background voxel must have 0 alpha");
  assert.ok(comp.rgba[1 * 4 + 3] > 80 && comp.rgba[1 * 4 + 3] < 130, "Half-opacity alpha expected");
  updateCatLiteRgbaOpacity(comp.rgba, comp.activeAlphaOffsets, comp.activeBaseAlpha, 1.0);
  assert.ok(comp.rgba[3 * 4 + 3] === 255, "Full probability at opacity 1 should reach alpha 255");
  updateCatLiteRgbaOpacity(comp.rgba, comp.activeAlphaOffsets, comp.activeBaseAlpha, 0.0);
  assert.equal(comp.rgba[3 * 4 + 3], 0, "Zero opacity should clear alpha to 0");

  const isoGm = buildCatLiteRgbaComposite([gm, wm, csf], { probabilityDisplayMin: 0.03 }, 0, 1.0);
  assert.equal(isoGm.rgba[3 * 4 + 3], 0, "Isolated GM must zero pure-CSF voxel");
  assert.ok(isoGm.rgba[1 * 4] > 200 && isoGm.rgba[1 * 4 + 3] > 180, "Isolated GM retains GM voxel");

  // Verify RAS-ordered composite maps storage indices via img2RASstart/img2RASstep.
  const rasLayout = {
    dimsRAS: [3, 2, 2, 2],
    img2RASstart: [1, 0, 0],
    img2RASstep: [-1, 2, 4], // flipped X
  };
  const rasComp = buildCatLiteRgbaComposite([gm, wm, csf], { probabilityDisplayMin: 0.03 }, null, 1.0, rasLayout);
  assert.equal(rasComp.isRasOrdered, true);
  // rx=0,ry=0,rz=0 maps to storage srcIdx=1 (gm=0.8), whereas rx=1,ry=0,rz=0 maps to srcIdx=0 (bg)
  assert.ok(rasComp.rgba[0 * 4 + 3] > 180, "RAS voxel (0,0,0) should receive storage voxel 1");
  assert.equal(rasComp.rgba[1 * 4 + 3], 0, "RAS voxel (1,0,0) should receive background storage voxel 0");

  const { rows, icvMm3 } = computeCatLiteStats(img, [gm, wm, csf], 1, [2, 2, 2], {});
  assert.equal(rows.length, 3);
  assert.ok(Math.abs(icvMm3 - 3.0) < 1e-5, `Expected ICV=3.0 mm³, got ${icvMm3}`);
  const csv = buildCatLiteStatsCsv(rows, icvMm3);
  assert.ok(csv.startsWith("tissue,name,volume_mm3,volume_cm3,pct_icv,"));
  console.log("Node unit checks passed (reslice-volume + cat-lite-overlay).");
}

const server = await createServer({
  configFile: false,
  root,
  server: { host: "127.0.0.1", port: 0, hmr: false },
});
await server.listen();

let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--enable-gpu", "--use-angle=metal", "--ignore-gpu-blocklist"],
  });
  const baseUrl = server.resolvedUrls.local[0];

  // --- Part 1: Desktop — star cache, backend badge, About icon, progress .is-busy,
  //             LUT isolation + pristine export + Locate centroid jump ---
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 2,
      acceptDownloads: true,
    });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    let githubRequests = 0;
    await page.route("https://api.github.com/repos/neuroneural/brainchop", (route) => {
      githubRequests++;
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ stargazers_count: 424 }),
      });
    });

    // Pre-populate fresh localStorage cache and verify GitHub API is NOT fetched.
    await page.addInitScript(() => {
      window.localStorage.setItem(
        "brainchop:gh-stars:v1",
        JSON.stringify({ count: 555, ts: Date.now() })
      );
      window.__busySeen = false;
      window.addEventListener("DOMContentLoaded", () => {
        const bar = document.getElementById("modelProgress");
        if (!bar) return;
        const obs = new MutationObserver(() => {
          if (bar.classList.contains("is-busy")) window.__busySeen = true;
        });
        obs.observe(bar, { attributes: true, attributeFilter: ["class"] });
      });
    });

    await page.goto(`${baseUrl}?model=3`);
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
      undefined,
      { timeout: 60000 }
    );

    assert.equal(pageErrors.length, 0, `Unexpected page errors: ${pageErrors.join("; ")}`);
    assert.equal(githubRequests, 0, "Fresh localStorage star cache should skip GitHub API fetch");
    assert.equal(await page.locator("#star-count").textContent(), "555");
    assert.equal(await page.evaluate(() => window.__busySeen), true, "#modelProgress should enter .is-busy during inference");
    assert.equal(
      await page.locator("#modelProgress").evaluate((el) => el.classList.contains("is-busy")),
      false,
      "#modelProgress must clear .is-busy after inference completes"
    );
    assert.equal(
      await page.locator("#modelProgress").getAttribute("aria-label"),
      "Model progress"
    );

    // Backend badge should be visible and populated.
    const backendInfo = await page.evaluate(() => {
      const item = document.getElementById("backendStatusItem");
      const text = document.getElementById("backendStatus")?.textContent?.trim();
      const footer = document.querySelector("footer");
      return {
        hidden: item?.hidden,
        text,
        footerOverflow: footer ? footer.scrollWidth > footer.clientWidth + 1 : false,
      };
    });
    assert.equal(backendInfo.hidden, false, "#backendStatusItem should be unhidden");
    assert.ok(/WebGPU|WebGL/.test(backendInfo.text || ""), `Unexpected backend text: ${backendInfo.text}`);
    assert.equal(backendInfo.footerOverflow, false, "Footer must not overflow horizontally on desktop");

    // Verify About modal DK50 icon matches brainchop-parameters.js (no stale "/ 🔪").
    await page.click("#aboutBtn");
    await page.waitForSelector("#appDialog[open]");
    const aboutText = await page.locator("#dialogMessage").textContent();
    assert.ok(aboutText.includes("🪓🔪 Cortical + Subcortical Parcellation:"));
    assert.ok(!aboutText.includes("🪓🔪 / 🔪"));
    await page.click("#dialogCloseBtn");

    // Open Stats on MindSnap-104 and test Click-to-Jump Locate on Left-Hippocampus (label 77).
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    const locateAria = await page.locator('.stat-row[data-label="77"] .stat-locate').getAttribute("aria-label");
    assert.equal(locateAria, "Locate Left-Hippocampus");
    if (shotsDir) {
      await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "pr5-stats-104.png") });
    }

    await page.locator('.stat-row[data-label="77"] .stat-locate').click();
    await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
    await page.waitForTimeout(150);
    const locAfterJump = await page.locator("#location").textContent();
    assert.ok(
      locAfterJump.includes("Left-Hippocampus"),
      `Expected crosshair jump to land inside Left-Hippocampus, got location="${locAfterJump}"`
    );
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-after-locate-hipp.png") });
    }

    // Isolate Left-Hippocampus via Stats -> verify HUD, LUT-based isolation, zero bleed screenshot,
    // AND verify Save Conformed while isolated still exports all labels (pristine ov.img!).
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    await page.locator('.stat-row[data-label="77"] .stat-iso').click();
    await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
    await page.waitForTimeout(200);
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-isolated-hipp-lut.png") });
    }

    // Export Conformed while Left-Hippocampus is isolated -> must still contain full whole-brain segmentation!
    await page.click("#saveBtn");
    await page.waitForSelector("#appDialog[open].dialog-save");
    const [dlIsoSave] = await Promise.all([
      page.waitForEvent("download"),
      page.locator('.save-opt[data-i="0"]').click(),
    ]);
    const isoSaveNii = parseNiftiGz(await dlIsoSave.path());
    const uniq = new Set();
    for (let i = 0; i < isoSaveNii.voxels.length; i += 17) {
      if (isoSaveNii.voxels[i] !== 0) uniq.add(isoSaveNii.voxels[i]);
    }
    assert.ok(uniq.size > 50, `Expected full whole-brain export while isolated, got only ${uniq.size} distinct labels`);

    // Isolate a cortical region (e.g. label 27 = ctx-lh-superiorfrontal) to inspect zero-bleed 3D rendering.
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    await page.locator('.stat-row[data-label="27"] .stat-iso').click();
    await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
    await page.waitForTimeout(200);
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-isolated-cortex-lut.png") });
    }

    // Press Esc to restore all labels.
    await page.keyboard.press("Escape");
    await page.waitForTimeout(150);

    // --- Part 2: CAT-lite single DT_RGBA32 overlay, fast opacity drag, Stats, Locate, Isolate, 3-file exports ---
    await page.selectOption("#modelSelect", "2"); // CAT-lite
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Tissue maps finished"),
      undefined,
      { timeout: 60000 }
    );
    await page.waitForTimeout(200);
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-catlite-full.png") });
    }

    // Measure live opacity slider updates on CAT-lite single DT_RGBA32 overlay.
    const catOpacityTimes = [];
    for (const val of ["0.2", "0.8", "0.5", "0", "0.5"]) {
      const t0 = Date.now();
      await page.evaluate((v) => {
        const s = document.getElementById("opacitySlider1");
        s.value = v;
        s.oninput();
      }, val);
      await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      catOpacityTimes.push({ val, ms: Date.now() - t0 });
    }
    console.log("CAT-lite DT_RGBA32 opacity drag timings:", catOpacityTimes);
    const nonZeroDragMs = catOpacityTimes.filter((x) => x.val !== "0").map((x) => x.ms).sort((a, b) => a - b);
    const medianDragMs = nonZeroDragMs[Math.floor(nonZeroDragMs.length / 2)];
    assert.ok(medianDragMs < 150, `Expected fast RAS DT_RGBA32 opacity update (<150ms median), got ${medianDragMs}ms`);

    // Open CAT-lite Stats modal -> verify GM, WM, CSF cm³ + % of ICV + CSV + Locate + Isolate.
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    assert.equal(await page.locator("#dialogTitle").textContent(), "Tissue volumes");
    const catRows = await page.locator(".stat-row").count();
    assert.equal(catRows, 3, `Expected 3 CAT-lite tissue rows, got ${catRows}`);
    const unitSummary = await page.locator("#statsUnitLabel").textContent();
    assert.ok(unitSummary.includes("3 tissues") && unitSummary.includes("cm³ ICV"), `Unexpected CAT-lite summary: ${unitSummary}`);

    // Expand first row to verify partial-volume intensity details.
    await page.locator(".stat-trigger").first().click();
    if (shotsDir) {
      await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "pr5-catlite-stats.png") });
    }

    // Toggle % of ICV and verify percentages sum to ~100%.
    await page.locator('.stat-toggle button[data-mode="pct"]').click();
    const pctTexts = await page.locator(".stat-val").allTextContents();
    const pctSum = pctTexts.reduce((s, t) => s + parseFloat(t), 0);
    assert.ok(Math.abs(pctSum - 100) < 0.5, `Expected CAT-lite % ICV to sum to ~100%, got ${pctSum} (${pctTexts})`);

    // Download CAT-lite CSV.
    const [dlCatCsv] = await Promise.all([
      page.waitForEvent("download"),
      page.click("#statsDownloadBtn"),
    ]);
    assert.equal(dlCatCsv.suggestedFilename(), "tissue_stats.csv");
    const catCsvLines = fs.readFileSync(await dlCatCsv.path(), "utf8").trim().split("\n");
    assert.equal(catCsvLines.length, 4, "Header + 3 tissues expected in tissue_stats.csv");
    assert.ok(catCsvLines[0].startsWith("tissue,name,volume_mm3,volume_cm3,pct_icv,"));

    // Test Locate on Gray Matter (data-label="0") -> verify live GM/WM/CSF readout in #location!
    await page.locator('.stat-row[data-label="0"] .stat-locate').click();
    await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
    await page.waitForTimeout(150);
    const catLoc = await page.locator("#location").textContent();
    assert.ok(
      catLoc.includes("GM ") && catLoc.includes("WM ") && catLoc.includes("CSF "),
      `Expected GM/WM/CSF fraction readout in #location, got "${catLoc}"`
    );
    assert.ok(
      !/·\s*0\s*·\s*GM/.test(catLoc),
      `CAT-lite #location should not contain a dummy overlay "0" segment, got "${catLoc}"`
    );

    // Test Isolate on Gray Matter via Stats -> verify HUD and screenshot!
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    await page.locator('.stat-row[data-label="0"] .stat-iso').click();
    await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
    await page.waitForTimeout(200);
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-catlite-isolated-gm.png") });
    }
    await page.keyboard.press("Escape");
    await page.waitForTimeout(150);

    // Verify CAT-lite Save Conformed exports 3 Float32 NIfTI files.
    await page.click("#saveBtn");
    await page.waitForSelector("#appDialog[open].dialog-save");
    const catConfDownloads = [];
    const onConfDl = (d) => catConfDownloads.push(d);
    page.on("download", onConfDl);
    await page.locator('.save-opt[data-i="0"]').click();
    while (catConfDownloads.length < 3) await new Promise((r) => setTimeout(r, 50));
    page.off("download", onConfDl);
    assert.deepEqual(
      catConfDownloads.map((d) => d.suggestedFilename()),
      ["segmentation_gm.nii.gz", "segmentation_wm.nii.gz", "segmentation_csf.nii.gz"]
    );
    const gmConf = parseNiftiGz(await catConfDownloads[0].path());
    assert.equal(gmConf.datatype, 16, "Conformed CAT-lite export must remain DT_FLOAT32");

    // Verify CAT-lite Save Native exports 3 worker-resliced uint8 scaled NIfTI files.
    await page.click("#saveBtn");
    await page.waitForSelector("#appDialog[open].dialog-save");
    const catNatDownloads = [];
    const onNatDl = (d) => catNatDownloads.push(d);
    page.on("download", onNatDl);
    await page.locator('.save-opt[data-i="1"]').click();
    while (catNatDownloads.length < 3) await new Promise((r) => setTimeout(r, 50));
    page.off("download", onNatDl);
    assert.deepEqual(
      catNatDownloads.map((d) => d.suggestedFilename()),
      ["segmentation_gm_native.nii.gz", "segmentation_wm_native.nii.gz", "segmentation_csf_native.nii.gz"]
    );
    const gmNat = parseNiftiGz(await catNatDownloads[0].path());
    assert.equal(gmNat.datatype, 2, "Native CAT-lite export must remain DT_UINT8");
    assert.ok(Math.abs(gmNat.sclSlope - 1 / 255) < 1e-5, `Expected scl_slope=1/255, got ${gmNat.sclSlope}`);

    assert.equal(pageErrors.length, 0, `Unexpected page errors: ${pageErrors.join("; ")}`);
    await context.close();
  }

  // --- Part 3: Mobile 390×844 — footer fit, backend dot, Stats mobile touch targets ---
  {
    const mobileCtx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      hasTouch: true,
      isMobile: true,
    });
    const page = await mobileCtx.newPage();
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    await page.addInitScript(() => {
      window.localStorage.setItem(
        "brainchop:gh-stars:v1",
        JSON.stringify({ count: 555, ts: Date.now() })
      );
    });

    await page.goto(`${baseUrl}?model=6`); // fast 16ch Subcortical + Tissue
    await page.waitForFunction(
      () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
      undefined,
      { timeout: 60000 }
    );
    await page.waitForTimeout(150);

    const mobileLayout = await page.evaluate(() => {
      const footer = document.querySelector("footer");
      const loc = document.getElementById("location");
      const badge = document.getElementById("activeModelBadge");
      const backend = document.getElementById("backendStatus");
      return {
        narrow: document.body.classList.contains("nv-narrow"),
        footerOverflow: footer ? footer.scrollWidth > footer.clientWidth + 1 : false,
        locWidth: loc?.getBoundingClientRect().width || 0,
        badgeWidth: badge?.getBoundingClientRect().width || 0,
        backendWidth: backend?.getBoundingClientRect().width || 0,
      };
    });
    console.log("Mobile 390px layout:", mobileLayout);
    assert.equal(mobileLayout.narrow, true);
    assert.equal(mobileLayout.footerOverflow, false, "Mobile footer must not overflow horizontally");
    assert.ok(mobileLayout.locWidth >= 60, `Mobile #location too narrow: ${mobileLayout.locWidth}px`);
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-mobile-footer.png") });
    }

    // Open Stats on mobile and verify touch target sizes & zero horizontal overflow.
    await page.click("#saveStatsBtn");
    await page.waitForSelector("#appDialog[open].dialog-stats");
    const mobileStats = await page.evaluate(() => {
      const dlg = document.getElementById("appDialog");
      const rowsEl = document.getElementById("statsRows");
      const locBtn = document.querySelector(".stat-locate");
      const isoBtn = document.querySelector(".stat-iso");
      return {
        dlgOverflow: dlg.scrollWidth > dlg.clientWidth + 1,
        rowsOverflow: rowsEl.scrollWidth > rowsEl.clientWidth + 1,
        locateRect: locBtn.getBoundingClientRect(),
        isoRect: isoBtn.getBoundingClientRect(),
      };
    });
    console.log("Mobile Stats geometry:", {
      dlgOverflow: mobileStats.dlgOverflow,
      rowsOverflow: mobileStats.rowsOverflow,
      locateH: mobileStats.locateRect.height,
      locateW: mobileStats.locateRect.width,
      isoH: mobileStats.isoRect.height,
    });
    assert.equal(mobileStats.dlgOverflow, false, "Mobile Stats dialog must not overflow horizontally");
    assert.equal(mobileStats.rowsOverflow, false, "Mobile Stats rows must not overflow horizontally");
    assert.ok(mobileStats.locateRect.height >= 44 && mobileStats.locateRect.width >= 44, "Touch Locate target must be >=44x44");
    assert.ok(mobileStats.isoRect.height >= 44, "Touch Isolate target height must be >=44px");
    if (shotsDir) {
      await page.screenshot({ path: path.join(shotsDir, "pr5-mobile-stats.png") });
    }

    assert.equal(pageErrors.length, 0, `Unexpected mobile page errors: ${pageErrors.join("; ")}`);
    await mobileCtx.close();
  }

  console.log("ALL PR 5 RESPONSIVENESS, WORKERS, CAT-LITE & STATS CHECKS PASSED");
} finally {
  await browser?.close();
  await server.close();
}
