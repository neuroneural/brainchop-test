# CLAUDE.md

Guidance for AI sessions working on this repo: browser MRI segmentation app (Vite, NiiVue 1.0.0-rc.13, tfjs, plus raw-GLSL/WebGPU runners).

## Layout

- `main.js` — app shell: UI wiring, `runInferenceChain` backend dispatch, save/export, overlay rendering (`callbackImg`, `addProbabilityOverlay`), native-space reslice (`resliceLabelsToNative`), local `cloneVolume`/`downloadVolume` (module scope, replacing NVImage methods 1.0 dropped).
- `responsive-layout.js` — `nv-narrow` body class on phone-like viewports (CSS slims the toolbar) plus the single-plane pane switcher. 1.0 scores the multiplanar tiling itself and re-measures its canvas from a ResizeObserver, so the old layout-scoring override, draw hook and resize nudge are gone.
- `touch-view.js` — blocks document pinch-zoom, then implements canvas pinch zoom. 1.0 drives everything from pointer events and has no gesture concept, so two-finger pointer events are stopped in the capture phase before niivue reads them as a second drag; zoom is anchored on the crosshair by mirroring the unexported `zoomPan2DAbout`.
- `brainchop-parameters.js` — `inferenceModelsList`: one entry per model, drives dispatch/postprocess/UI (see below).
- `inference-webgpu.js` — WebGPU runner, main thread. Loads `webgpu_runners/<name>`, runs `model.safetensors`.
- `inference-webgl2.js` — thin wrapper that spawns `brainchop-webgl2-worker.js` and normalizes its result to resolve/reject.
- `brainchop-webgl2-worker.js` — native WebGL2 path: raw GLSL via `webgl2_runners/` (descriptors, kernels, weights, MeshNet GL driver, probability postprocess), no tfjs inference (tfjs used only for pre/post tensor ops). Mirrors `inference-webgpu.js` pre/postprocessing exactly (load-bearing: same transpose convention as the safetensors export).
- `brainchop-webworker.js` / `brainchop-mainthread.js` — legacy tfjs paths (`inference-logic.js`, `tensor-utils.js`), fallback when WebGPU and native WebGL2 both decline/fail.
- `cat-lite.js` — CAT-lite partial-volume postprocess (`applyCatLitePartialVolume`, plus `isCatLite`/`runCatLite` shared by both backends), pure JS, used by both the WebGPU and native WebGL2 paths.
- `webgpu_runners/`, `webgl2_runners/` — per-model GPU kernels/descriptors for the two fast paths.
- `public/models/` — model weights (`model.json`/`.safetensors`, colormaps). CAT-lite uses `model24chan18cls_gdice_prio`.
- `tests/` — `*.mjs` node scripts (pure node except `webgl2_gate.mjs`, which drives a real browser) plus `*.spec.cjs` playwright specs.
- `audit_response.md` — responses to the last external review (`audit_temp.md` is consumed and deleted).

## Build / run / test

```
npm install             # bun install also works; bun.lock is gitignored, package-lock.json is the committed one
npm run dev             # vite dev server on :5173, or the next free port; bun run dev is equivalent
npm run build           # production build
npm test                # `pretest` builds, then playwright against `npm run preview` on :8088
node tests/cat-lite.mjs
node tests/cortical_relabel.mjs
node tests/webgl2-probability.mjs
node tests/webgl2_gate.mjs [chromium|firefox]
```

## Backend dispatch (`main.js: runInferenceChain`)

Order, each stage falling through on failure/refusal (never surfaced individually to the user):

1. **WebGPU** — if `isWebGpuAvailable && modelEntry.webgpu_safetensor` (skippable via `FORCE_WEBGL2_TESTING`).
2. **Native WebGL2** (`ENABLE_NATIVE_WEBGL2`, skippable via `FORCE_TFJS_WEBGL_TESTING`) — dynamic import of `inference-webgl2.js`; also needs `modelEntry.webgpu_safetensor`, plus `nativeWebgl2Available()` (OffscreenCanvas + webgl2) and a `webgl2_runners/descriptors.js` entry for the model.
3. `outputType: 'probability'` models stop here with an error: the legacy tfjs paths only return argmax labels.
4. **tfjs WebWorker** (`brainchop-webworker.js`) — tried fast, then retried with `enableSeqConv: true` on failure.
5. **tfjs main thread** (`brainchop-mainthread.js`) — last resort.

## Model entries (`brainchop-parameters.js`)

Each entry in `inferenceModelsList` is a plain object read by `runInferenceChain`/`callbackImg`. Notable fields:

- `outputType: 'probability'` — output is continuous map(s), not label argmax; `callbackImg` builds one `addProbabilityOverlay` per map instead of a single label overlay. Stats and Draw refuse Float32 probability overlays.
- `probabilityPostprocess: 'cat-lite'` — after the runner produces grouped GM/WM/CSF priors, route them through `cat-lite.js`.
- `probabilityTissues: [{name, tint}, ...]` — one entry per output map in `[GM, WM, CSF]` order; `name` suffixes saved filenames, `tint` colors the light overlay ramp (`probabilityOverlayFloor`..tint, alpha `probabilityOverlayAlpha`).
- `probabilityGroups` — maps the model's raw class indices into GM/WM/CSF priors (runner + WebGL2 probability kernel).
- `probabilityDisplay` — still read internally by the WebGPU probability runner; not a UI setting.
- `catLite*` fields — tunables for the partial-volume fit (bias field, spatial smoothing, mixel priors); read by `cat-lite.js`, safe to tune without touching the runner. `catLiteMinSupport` also thresholds largest-component cleanup.

## CAT-lite data flow

1. Runner (WebGPU or native WebGL2) outputs 3 grouped tissue-probability volumes (GM/WM/CSF) in the model's internal (transposed) orientation, plus the quantile-normalized T1 intensity captured before transpose.
2. Each tissue volume is transposed back to native voxel order (`modelEntry.outputPermutation` or `.enableTranspose`) by the backend's `toNative` callback passed to `runCatLite` (which also fills `statData` and logs means/sigmas).
3. `applyCatLitePartialVolume(volumes, intensity, shape, modelEntry)` fits a 6-class Gaussian model (pure CSF/GM/WM + GM-CSF, GM-WM mixels, zero-GM CSF-WM nuisance) with a coarse trilinear bias field, spatial prior smoothing and largest-component cleanup. Returns `{ tissues: [gm, wm, csf], stats }`; GM+WM+CSF = brain support (GM removed by the ventricle topology gate is redistributed to WM/CSF). If stats can't be fitted, `tissues` are the raw priors (not summing to support).
4. `tissues` is passed as `img` to `callbackImg` (worker transfers the buffers), which adds three overlays (reddish GM, gray WM, blue CSF). Each overlay alpha-modulates itself via `setModulationImage(id, id, 1)` — ids, not indices, so removal order does not matter.
5. Save: "Segmentation: conformed" writes `segmentation_{gm,wm,csf}.nii.gz` serially (float32, 256³); "native space" writes `segmentation_{gm,wm,csf}_native.nii.gz` via `resliceLabelsToNative` (uint8, `scl_slope 1/255`, trilinear). Chrome asks once to allow multiple downloads.

## Known caveats

- `nv1.addVolume` always fires `volumeLoaded` (= `doLoadImage`). `doLoadImage` only captures `nativeInputNV` for single-volume scenes, `ensureConformed` restores it after swapping in the conformed copy, and startup calls `doLoadImage()` once because the default `t1_crop.nii.gz` loads before the hook is installed. Keep all three or native export silently becomes 256³ (or refuses with "Original input grid is unavailable").
- Native-space export: labels use 2x-supersampled majority vote, probability maps trilinear, other intensity outputs nearest-neighbour.
- No `eslint.config.js` exists despite ESLint 9 + `eslint-plugin-vue`/`globals` in devDependencies; `npx eslint .` fails outright.
- `npm test` currently fails at browser launch: @playwright/test 1.57.0 wants `chromium_headless_shell-1200`, and only 1194/1228 are in `~/Library/Caches/ms-playwright`. Run `npx playwright install chromium` to fix.
- Even once installed, the bundled browsers do not expose WebGPU here; a test that needs it would have to use system Chrome (`channel: 'chrome'`, `--enable-unsafe-webgpu`). Nothing in `tests/` does — `webgl2_gate.mjs` drives bundled chromium/firefox for WebGL2 only.
- CAT-lite needs WebGPU or native WebGL2 and ~1.5 GiB of GPU memory.

## NiiVue 1.0 migration notes

Upgraded 0.62.0 → 1.0.0-rc.13. Why: 0.62's orient pass forced the opacity uniform to 1.0 whenever `modulateAlpha` was set, so the overlay slider could not affect a self-modulated overlay at all. 1.0 applies modulation and opacity independently.

- Backend is pinned: `new NiiVue({ backend: "webgl2" })`. 1.0 defaults to WebGPU; WebGL2 keeps the viewer aligned with the raw-GLSL runners and `localSystemDetails(nv1.view?.gl)`. Switching to WebGPU is a one-line change; it is the faster backend for the CAT-lite overlay slider (see Deferred).
- `NVImage` is plain data in 1.0 — no `clone`/`zeroImage`/`calMinMax`/`getValue`/`mm2vox`/`saveToDisk`/`setColormapLabel`. `cloneVolume` and `downloadVolume` (main.js, module scope) replace the ones we used; `resliceLabelsToNative` now inverts the overlay's own affine with `gl-matrix` instead of `mm2vox`/`toRASvox`.
- Label colormaps: assign `vol.colormapLabel = makeLabelLut(cmap)` **before** `addVolume`. 1.0's replacement `nv1.setColormapLabel(idx, cmap)` builds the same LUT but also scans all 16.7M voxels for label centroids (only the legend reads them, and it is off) and runs a second `updateGLVolume` over the volume just uploaded — ~0.8 s per displayed segmentation.
- `loadMatcap(name)` looks `name` up in `opts.matcaps` and, on a miss, treats the name itself as a URL; the failed fetch is swallowed, so the built-in default matcap silently stays in place. Pass the map to the constructor (`matcaps: { Shiny: shiny }` from `@niivue/niivue/assets/matcaps`). Bit us twice. The shading toolbar button toggles `volumeIllumination` 0 <-> 0.5 and loads the matcap on first enable.
- `cal_min`/`cal_max`/`robust_min`/`robust_max` → `calMin`/`calMax`/`robustMin`/`robustMax`. The NVImage type has an index signature, so the old snake_case names assign silently and do nothing.
- `conform()` left core: `@niivue/nv-ext-image-processing`, registered via `registerVolumeTransform(conform)` and called as `nv1.volumeTransform.conform(vol, { toRAS: false })`. Easy to miss — `ensureConformed` short-circuits on the already-conformed default image, so a missing registration only fails on a real input.
- `drawIsEnabled = true` does NOT create the drawing bitmap (0.62's `setDrawingEnabled` did); call `createEmptyDrawing()`. `setPenValue(v, isFilled)` split into `drawPenValue` + `drawPenFilled`; `drawIsFillOverwriting` survives but is a different setting (flood-fill overwrite).
- Deleted, not ported: the `gl.uniform4fv`/`orientShaderAtlasI/U` crisp-label-isolation hack (1.0's label path is a hard LUT lookup with no alpha feather, so the blur it worked around is gone) and the `drawSceneCore` override (the HUD is a DOM element now — 1.0 has no text API).
- `isLegendVisible` defaults on in 1.0 and costs ~25% of the canvas width; set false to match 0.62.
- Opacity sliders are 0..1 step 0.1 (were 0..255). `probabilityUnderlayOpacity` must land on a step.

## Voxel order: RAS vs storage (the easiest bug to reintroduce)

Niivue addresses voxels in **RAS** order; `NVImage.img` is in the file's **storage** order. The conformed volume is deliberately not RAS (`ensureConformed` asserts `permRAS [-1, 3, -2]`, and `conform` runs with `toRAS: false`), so the two differ by an axis permutation plus two flips on every inference result.

RAS-indexed: `locationChange.vox`, the drawing bitmap (`nv.drawingVolume.img`), anything from `mm2vox`. Storage-indexed: `vol.img`, and therefore every hand-written `i + j*nx + k*nx*ny`.

Use `rasToNativeIndex(vol, [rx, ry, rz])` (`main.js`, module scope) to cross over — it mirrors niivue's `getVoxelValue`. 0.62 hid this because `mm2vox` + `getValue` were a matching pair; 1.0 exposes neither. Measured cost of getting it wrong: 7/40 labelled voxels correct. It fails silently — a 256³ grid keeps the bogus index in range, so nothing throws.

## Drag modes and the location readout

- `setDragMode()` writes **only** `secondaryDragMode` (the right button). Button 0 reads `primaryDragMode` (`control/dragModes.ts`). Set `nv1.primaryDragMode` directly, or the toolbar silently controls right-click and does nothing on touch.
- 1.0 has one mode per button with **no click/drag split**, and only `DRAG_MODE.crosshair` moves the crosshair on a 2D tile. 0.62 moved it on any click and ran `opts.dragMode` only on drag. So a non-crosshair `primaryDragMode` makes the app un-navigable and freezes the location readout. Startup sets `crosshair` (8) and the toolbar's Navigate button (`data-drag="8"`, active by default) is the way back; the other four buttons (1-4) replace it.
- `locationChange` fires on crosshair *change*, not on hover (0.62 updated on mouse move). `e.detail` carries the payload.

## Testing gotchas

- Playwright's `mouse.click(x, y, { modifiers: ['Alt'] })` does **not** set `altKey` on the resulting click event. Use `keyboard.down('Alt')` / `keyboard.up('Alt')` around the click, or Alt-click isolation appears broken when it is not.
- `vite dev`/`preview` silently fall through to the next free port. A stale server elsewhere (including one whose cwd has been deleted) will hold :5173 and serve old code — check the cwd of the listening process before believing a UI bug.

## Open items / audit notes

Fixed in the 2026-09-15 audits: native export grid (`nativeInputNV` overwritten by conformed copy — affected every model), Stats/Draw on probability maps, overlay removal order, serial conformed saves, worker buffer transfer, CAT-lite CPU hot-loop allocations (~5x faster), duplicated WebGPU/WebGL2 CAT-lite post-processing, unused stats/options/validation layers, `[object Object]` in diagnostics, trilinear native export of probability maps, WebGPU CAT-lite readback validation skipped (softmax priors).

Deferred (not done; candidates for a follow-up):
- Opacity-slider latency scales with the OVERLAY COUNT, not with modulation (1.0 caches the modulation weights). Measured on this machine, per `updateGLVolume` with 256³ float overlays: 1 overlay 33 ms (frame-locked); 2/3 overlays ~320/~445 ms on WebGL2, ~134/~175 ms on WebGPU. The flat jump at 2 overlays is the multi-layer blend chain. `updateGLVolume` coalesces (one call in flight, newest pending value re-runs on completion) so a drag never queues a backlog, but CAT-lite's three overlays still cannot be dragged smoothly. Real fix if it matters: composite GM/WM/CSF into ONE RGB overlay, or show one tissue at a time.
- `.nvd` scene save: 1.0's `NVDocumentVolume` schema does carry `modulationImage`/`modulateAlpha`/`colormapType`/`colormapLabel` (0.62 did not, so probability overlays reloaded opaque), but it has no field for colormaps registered with `addColormap` — a reloaded scene should lose the `probability-light-*` ramps. Round-trip not actually run.
- Dead single-display probability path: WebGPU runner `probabilityDisplay`/`tissue` uniform/`selected_mask` and non-CAT-lite blur/support passes; `isProbabilityOutput` non-CAT-lite branch in `inference-webgpu.js`; `Array.isArray(img)` fallback in `callbackImg`. Model 23 is the only probability model.
- Validation stacked 3-4 deep in the WebGL2 probability path (`probability.js` `finiteOption`/`maskFor`/nclass checks, `kernels.js`, `meshnet_gl.js`, runner uniform buffer); the default GM/WM/CSF group lists are spelled out three times (`brainchop-parameters.js`, the WebGPU runner, `webgl2_runners/probability.js`); `tissueProbabilityConfig` returns unused `supportPower`/`sigma`.
- `blurAxis` (`webgl2_runners/probability.js`) recomputes axis ternaries per voxel.
- **Isolate labels via the label LUT, not by mutating `.img`.** `applyLabelIsolation` zeroes non-selected voxels only because 0.62's atlas shader feathered alpha from the 6 neighbours; 1.0's label path is a hard LUT lookup with no feather (same reason the `uniform4fv` hack was deleted). Setting `R=G=B=A=0` for the hidden labels in a fresh `makeLabelLut(cmap)` (never `setColormapLabel`, see the migration notes) deletes `originalSegImg`, `withPristineLabels` and its 3 call sites (~38 lines) and makes every export pristine by construction. Two details are load-bearing: zero **RGB as well as A** (the baked RGBA8 texture is non-premultiplied and sampled LINEAR in 3D, so an alpha-0 entry still bleeds colour), and pass a **new** ColorMap object (the GPU cache key is WeakMap object identity). Afterwards `labelUnderCursor` can just read `locationChange.values[1].value`.
- **Dependency pinning.** `package.json` allows `^1.0.0-rc.13`, but `@niivue/nv-ext-image-processing@1.0.0-rc.13` declares an **exact** peer on the core. A lockfile-free `npm install` can pair a mismatched core with the extension. Pin both exactly while on release candidates.
- The isolation HUD reads `view.screenSlices` from the *previous* frame (`drawScene` schedules a rAF rather than rendering), so it lags one frame after a resize or pane switch.
- `registerVolumeTransform` throws on a duplicate name — fine for one `main()`, fatal under HMR.
- `crypto.randomUUID()` in `cloneVolume` is secure-context-only: `vite dev --host` over plain http on a LAN IP would break every overlay.
