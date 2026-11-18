// End-to-end browser test for the Save modal layout and FreeSurfer NIfTI export.
// node tests/save-modal-browser.mjs [--screenshots-dir=/path]
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { createServer } from "vite";
import { buildFreeSurferLut } from "../freesurfer-labels.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shotArg = process.argv.find((a) => a.startsWith("--screenshots-dir="));
const shotsDir = shotArg ? shotArg.split("=")[1] : null;
if (shotsDir) fs.mkdirSync(shotsDir, { recursive: true });

function parseNiftiGz(filePath) {
  const raw = zlib.gunzipSync(fs.readFileSync(filePath));
  const dv = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
  const sizeofHdr = dv.getInt32(0, true);
  assert.equal(sizeofHdr, 348, "Expected little-endian NIfTI-1 header");
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
  const calMax = dv.getFloat32(124, true);
  const calMin = dv.getFloat32(128, true);
  const nvox = dims[1] * dims[2] * dims[3];
  const body = raw.subarray(voxOffset);
  let voxels;
  if (datatype === 2) {
    voxels = new Uint8Array(body.buffer, body.byteOffset, nvox);
  } else if (datatype === 4) {
    const aligned = body.byteOffset % 2 === 0 ? body : Uint8Array.from(body);
    voxels = new Int16Array(aligned.buffer, aligned.byteOffset, nvox);
  } else {
    throw new Error(`Unexpected NIfTI datatype ${datatype}`);
  }
  return { dims, intentCode, datatype, bitpix, sclSlope, sclInter, calMin, calMax, voxels };
}

async function assertNoDialogOverlaps(page) {
  const geom = await page.evaluate(() => {
    const rect = (el) => {
      const r = el.getBoundingClientRect();
      return { top: r.top, bottom: r.bottom, left: r.left, right: r.right, width: r.width, height: r.height };
    };
    const dlg = document.getElementById("appDialog");
    const h3 = document.getElementById("dialogTitle");
    const xBtn = document.getElementById("dialogXBtn");
    const sections = [...dlg.querySelectorAll(".save-section")].map(rect);
    const cards = [...dlg.querySelectorAll(".save-opt")].map(rect);
    const modifiers = dlg.querySelector(".save-modifiers") ? rect(dlg.querySelector(".save-modifiers")) : null;
    const checkRows = [...dlg.querySelectorAll(".save-check-row")].map(rect);
    return { dlg: rect(dlg), h3: rect(h3), xBtn: rect(xBtn), sections, cards, modifiers, checkRows };
  });

  // Close button must sit above the header's bottom divider, never straddling it.
  assert.ok(
    geom.xBtn.bottom <= geom.h3.bottom + 1,
    `Close button overlaps header divider: xBtn.bottom=${geom.xBtn.bottom}, h3.bottom=${geom.h3.bottom}`,
  );
  // Section 1 and Section 2 must not overlap vertically.
  assert.equal(geom.sections.length, 2);
  assert.ok(
    geom.sections[0].bottom <= geom.sections[1].top + 0.5,
    `Save sections overlap: ${geom.sections[0].bottom} > ${geom.sections[1].top}`,
  );
  // Segmentation cards must sit strictly above the modifiers tray.
  if (geom.modifiers) {
    assert.ok(
      geom.cards[0].bottom <= geom.modifiers.top - 4,
      `Segmentation card overlaps modifiers tray: card.bottom=${geom.cards[0].bottom}, modifiers.top=${geom.modifiers.top}`,
    );
    assert.ok(
      geom.modifiers.bottom <= geom.sections[1].top - 8,
      `Modifiers tray overlaps Volume & Scene section: modifiers.bottom=${geom.modifiers.bottom}, sec2.top=${geom.sections[1].top}`,
    );
  }
  for (const row of geom.checkRows) {
    assert.ok(row.height >= 44, `Checkbox row hit target height ${row.height}px < 44px`);
  }
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
  const context = await browser.newContext({
    viewport: { width: 1200, height: 820 },
    deviceScaleFactor: 2,
    acceptDownloads: true,
  });
  const page = await context.newPage();
  const baseUrl = server.resolvedUrls.local[0];

  // 1. Pre-inference state: segmentation cards disabled, Volume & Scene cards enabled.
  await page.goto(baseUrl);
  await page.waitForFunction(() => document.querySelectorAll("#modelSelect option").length > 2);
  await page.click("#saveBtn");
  await page.waitForSelector("#appDialog[open]");
  await assertNoDialogOverlaps(page);
  assert.equal(await page.locator(".save-opt[disabled]").count(), 2);
  assert.equal(await page.locator("#saveFreeSurfer").count(), 0);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "save-pre-inference.png") });
  }
  await page.click("#dialogXBtn");

  // 2. Run 104-class Desikan-Killiany Atlas (index 3 in inferenceModelsList -> id: 5).
  await page.goto(`${baseUrl}?model=3`);
  await page.waitForFunction(
    () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
    undefined,
    { timeout: 60000 },
  );

  // Open Save modal (parcellation ready: both FreeSurfer and Binary Mask options visible).
  await page.click("#saveBtn");
  await page.waitForSelector("#appDialog[open]");
  await assertNoDialogOverlaps(page);
  assert.equal(await page.locator("#saveFreeSurfer").count(), 1);
  assert.equal(await page.locator("#saveBinaryMask").count(), 1);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "save-parcellation-default.png") });
  }

  // Export standard contiguous conformed segmentation first.
  const [dlStd] = await Promise.all([
    page.waitForEvent("download"),
    page.locator('.save-opt[data-i="0"]').click(),
  ]);
  assert.equal(dlStd.suggestedFilename(), "segmentation.nii.gz");
  const stdPath = await dlStd.path();
  const stdNii = parseNiftiGz(stdPath);
  assert.equal(stdNii.datatype, 2); // DT_UINT8
  assert.equal(stdNii.intentCode, 1002);

  // Reopen Save modal, toggle FreeSurfer label IDs + Binary mask, capture screenshot, and export conformed.
  await page.click("#saveBtn");
  await page.waitForSelector("#appDialog[open]");
  await page.click('label[for="saveFreeSurfer"]');
  await page.click('label[for="saveBinaryMask"]');
  assert.equal(await page.locator("#saveFreeSurfer").isChecked(), true);
  assert.equal(await page.locator("#saveBinaryMask").isChecked(), true);
  await assertNoDialogOverlaps(page);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "save-parcellation-checked.png") });
  }

  const downloads = [];
  const onDownload = (d) => downloads.push(d);
  page.on("download", onDownload);
  await page.locator('.save-opt[data-i="0"]').click();
  await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
  while (downloads.length < 2) await new Promise((r) => setTimeout(r, 50));
  page.off("download", onDownload);

  assert.deepEqual(
    downloads.map((d) => d.suggestedFilename()),
    ["segmentation_fs.nii.gz", "binary_mask.nii.gz"],
  );
  const fsNii = parseNiftiGz(await downloads[0].path());
  const maskNii = parseNiftiGz(await downloads[1].path());

  assert.equal(fsNii.datatype, 4);     // DT_INT16
  assert.equal(fsNii.bitpix, 16);
  assert.equal(fsNii.intentCode, 1002);
  assert.equal(fsNii.sclSlope, 1);
  assert.equal(fsNii.sclInter, 0);
  assert.equal(fsNii.calMax, 2035);

  const cmap104 = JSON.parse(
    fs.readFileSync(path.join(root, "public/models/model24chan104cls_v3_repbn/colormap.json"), "utf8"),
  );
  const lut104 = buildFreeSurferLut(cmap104.labels);
  assert.equal(fsNii.voxels.length, stdNii.voxels.length);

  let nonZeroCount = 0;
  let gt255Count = 0;
  for (let i = 0; i < stdNii.voxels.length; i++) {
    const rawLbl = stdNii.voxels[i];
    const expectedFs = lut104[rawLbl];
    if (fsNii.voxels[i] !== expectedFs) {
      assert.fail(`Voxel ${i} mismatch: got ${fsNii.voxels[i]}, expected ${expectedFs} (raw=${rawLbl})`);
    }
    const expectedMask = rawLbl !== 0 ? 1 : 0;
    if (maskNii.voxels[i] !== expectedMask) {
      assert.fail(`Mask voxel ${i} mismatch: got ${maskNii.voxels[i]}, expected ${expectedMask}`);
    }
    if (rawLbl !== 0) nonZeroCount++;
    if (expectedFs > 255) gt255Count++;
  }
  assert.ok(nonZeroCount > 500000, `Expected >500k segmented voxels, got ${nonZeroCount}`);
  assert.ok(gt255Count > 100000, `Expected >100k cortical voxels with FreeSurfer ID > 255, got ${gt255Count}`);

  // Reopen Save modal: preferences remain checked; uncheck mask and test FreeSurfer native-space export.
  await page.click("#saveBtn");
  await page.waitForSelector("#appDialog[open]");
  assert.equal(await page.locator("#saveFreeSurfer").isChecked(), true);
  assert.equal(await page.locator("#saveBinaryMask").isChecked(), true);
  await page.click('label[for="saveBinaryMask"]');

  const [dlFsNative] = await Promise.all([
    page.waitForEvent("download"),
    page.locator('.save-opt[data-i="1"]').click(),
  ]);
  assert.equal(dlFsNative.suggestedFilename(), "segmentation_fs_native.nii.gz");
  const fsNativeNii = parseNiftiGz(await dlFsNative.path());
  assert.equal(fsNativeNii.datatype, 4);
  assert.equal(fsNativeNii.bitpix, 16);
  assert.equal(fsNativeNii.intentCode, 1002);
  assert.equal(fsNativeNii.calMax, 2035);

  // Verify harmonized Region volumes (Stats) dialog on 104-class segmentation.
  await page.click("#saveStatsBtn");
  await page.waitForSelector("#appDialog[open].dialog-stats");
  // Bottom legacy Close button must be hidden in statsMode, and X button must sit cleanly above header divider.
  const statsGeom = await page.evaluate(() => {
    const r = (el) => el.getBoundingClientRect();
    const h3 = r(document.getElementById("dialogTitle"));
    const xBtn = r(document.getElementById("dialogXBtn"));
    const toolbar = r(document.querySelector(".stat-toolbar"));
    const rows = r(document.getElementById("statsRows"));
    const footer = r(document.querySelector(".stat-footer"));
    const closeHidden = getComputedStyle(document.getElementById("dialogCloseBtn")).display === "none";
    return {
      closeHidden,
      xAboveDivider: xBtn.bottom <= h3.bottom + 1,
      toolbarAboveRows: toolbar.bottom <= rows.top + 1,
      rowsAboveFooter: rows.bottom <= footer.top + 1,
    };
  });
  assert.equal(statsGeom.closeHidden, true);
  assert.equal(statsGeom.xAboveDivider, true);
  assert.equal(statsGeom.toolbarAboveRows, true);
  assert.equal(statsGeom.rowsAboveFooter, true);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "stats-after-104.png") });
  }

  // Expand first row, verify aria-expanded + FS badge, then capture expanded screenshot.
  const firstTrigger = page.locator(".stat-trigger").first();
  assert.equal(await firstTrigger.getAttribute("aria-expanded"), "false");
  await firstTrigger.click();
  assert.equal(await firstTrigger.getAttribute("aria-expanded"), "true");
  assert.equal(await page.locator(".stat-detail:not([hidden]) .save-badge").count(), 1);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "stats-after-104-expanded.png") });
  }

  // Filter regions with search box, verify Escape clears filter without closing modal.
  await page.fill("#statsFilterInput", "hippocampus");
  assert.equal(await page.locator(".stat-row:not([hidden])").count(), 2);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "stats-after-104-filtered.png") });
  }
  await page.locator("#statsFilterInput").press("Escape");
  assert.equal(await page.locator("#appDialog").evaluate((el) => el.open), true);
  assert.equal(await page.locator("#statsFilterInput").inputValue(), "");
  assert.ok((await page.locator(".stat-row:not([hidden])").count()) > 50);

  // Download CSV and verify fs_label column matches buildFreeSurferLut.
  const [dlCsv] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#statsDownloadBtn"),
  ]);
  assert.equal(dlCsv.suggestedFilename(), "mask_stats.csv");
  const csvLines = fs.readFileSync(await dlCsv.path(), "utf8").trim().split("\n");
  assert.ok(csvLines[0].startsWith("label,fs_label,name,voxels,volume_mm3,"));
  const sampleRowCols = csvLines[1].split(",");
  assert.equal(Number(sampleRowCols[1]), lut104[Number(sampleRowCols[0])]);

  // Click isolate on Left-Hippocampus, reopen Stats, and verify active isolated state.
  await page.locator('.stat-row[data-label="77"] .stat-iso').click();
  await page.waitForFunction(() => !document.querySelector("#appDialog")?.open);
  await page.click("#saveStatsBtn");
  await page.waitForSelector("#appDialog[open].dialog-stats");
  assert.equal(await page.locator('.stat-row[data-label="77"] .stat-iso').getAttribute("aria-pressed"), "true");
  await page.click("#dialogXBtn");

  // Also verify unified base modal styling on About dialog.
  await page.click("#aboutBtn");
  await page.waitForSelector("#appDialog[open]");
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "about-after.png") });
  }
  await page.click("#dialogCloseBtn");

  // 3. Skull Stripping (model=0): binary mask option visible, FreeSurfer option hidden.
  await page.goto(`${baseUrl}?model=0`);
  await page.waitForFunction(
    () => document.querySelector("#location")?.textContent?.includes("Segmentation finished"),
    undefined,
    { timeout: 60000 },
  );
  await page.click("#saveBtn");
  await page.waitForSelector("#appDialog[open]");
  await assertNoDialogOverlaps(page);
  assert.equal(await page.locator("#saveFreeSurfer").count(), 0);
  assert.equal(await page.locator("#saveBinaryMask").count(), 1);
  if (shotsDir) {
    await page.locator("#appDialog").screenshot({ path: path.join(shotsDir, "save-skullstrip.png") });
  }

  console.log(JSON.stringify({
    ok: true,
    segmentedVoxels: nonZeroCount,
    corticalFsVoxelsGt255: gt255Count,
    conformedDims: fsNii.dims.slice(1),
    nativeDims: fsNativeNii.dims.slice(1),
  }, null, 2));
} finally {
  await browser?.close();
  await server.close();
}
