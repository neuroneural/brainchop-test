# CLAUDE.md

Guidance for AI sessions working on this repo: browser MRI segmentation app (Vite, NiiVue 1.0.0-rc.204, zero `@tensorflow/tfjs`, plus WebGPU V4 INT8 / native WebGPU WGSL & raw-GLSL WebGL2 runners).

## Layout

- `main.js` — app shell: UI wiring, `#modelSelect` auto-reset, `runInferenceChain` backend dispatch (`WebGPU V4 8-bit -> native WebGL2 RGBA16F/RGBA8 worker`), save/export, batched overlay rendering (`callbackImg`, `addProbabilityOverlay`, `removeOverlaysNoRender`, `cloneOverlayVolume`, `nv1.addColormap` + `makeLabelLut`), native-space reslice (`resliceLabelsToNative`), local `cloneVolume`/`downloadVolume` (module scope).
- `responsive-layout.js` — `nv-narrow` body class on phone-like viewports (CSS slims the toolbar) plus the single-plane pane switcher. 1.0 scores the multiplanar tiling itself and re-measures its canvas from a ResizeObserver, so the old layout-scoring override, draw hook and resize nudge are gone.
- `touch-view.js` — blocks document pinch-zoom, then implements canvas pinch zoom. 1.0 drives everything from pointer events and has no gesture concept, so two-finger pointer events are stopped in the capture phase before niivue reads them as a second drag; zoom is anchored on the crosshair by mirroring the unexported `zoomPan2DAbout`.
- `brainchop-parameters.js` — `inferenceModelsList` + `resolveModelEntry(entry, useV4)`: drives dispatch/postprocess/UI (`id: 5` MindSnap-104 v4.0, `id: 21` & `id: 23` MindMap-18 v4.0, `id: 2` MindGrab, `id: 3` MindMap-16ch v3.5 fast, `id: 4` MindSnap-50 v4.0 24ch 50cls, `id: 14` lesion scans).
- `inference-webgpu.js` — WebGPU runner, main thread, with warm runner + weights cache, GPU-folded input/output when supported (`supportsGpuNativeIO`), and per-stage timings + GPU memory reporting (`GPU_Memory_MiB`, `WebGPU_Kernels`). Unconditionally runs `meshnet_fast_v4_runner.js` (`v4-int8`) for all V4-equipped models unless `?precision=fp16` / `?precision=fp32` is passed for developer checks; for non-V4 FP16 label models, tries hand-written WGSL (`webgpu_native/`) first, then tinygrad `webgpu_runners/<name>`.
- `webgpu_native/` — hand-written WGSL MeshNet ported from brainchopC (`src/webgpu_kernels.h`, `src/backend_webgpu.c`): `kernels.js` generates the WGSL for any channel count and all three families, `meshnet_gpu.js` is the host (same `setupNet` → `execute(input)` interface as the tinygrad runners; weights via `webgl2_runners/weights.js`, descriptors via `webgl2_runners/descriptors.js`), `presets.js` picks threads × voxels per vendor (AMD 256×1, else 64×2; `?wgPreset=128x2` overrides). Not used for `quantize8Bit`, probability/CAT-lite output, TTA, or fp32.
- `inference-webgl2.js` — thin wrapper that spawns `brainchop-webgl2-worker.js` and normalizes its result to resolve/reject.
- `brainchop-webgl2-worker.js` — native WebGL2 path: raw GLSL via `webgl2_runners/` (descriptors, kernels, weights, MeshNet GL driver with RGBA8 quantized & RGBA16F paths, probability postprocess), pure typed-array `tensor-utils.js` (no `@tensorflow/tfjs`). Mirrors `inference-webgpu.js` pre/postprocessing exactly (load-bearing: same transpose convention as the safetensors export).
- `tensor-utils.js` / `bwlabels.js` — pure typed-array normalization, 3D transpose, `Uint32Array(256)` single-pass histograms (`countUniqueLabelsU8`), `Uint8Array`-native `BWLabeler` (`filter18ClassFromLabels`, linear component selection & neighbor voting).
- `freesurfer-labels.js` — `FreeSurferColorLUT.txt` label-ID lookup (`buildFreeSurferLut`, `remapLabelsToFreeSurfer`) for Freeview-ready `DT_INT16` NIfTI export across 18-, 50-, and 104-class parcellation models.
- `cat-lite.js` — CAT-lite partial-volume postprocess (`applyCatLitePartialVolume`, plus `isCatLite`/`runCatLite` shared by both backends), pure JS, used by both the WebGPU and native WebGL2 paths. WebGPU V4 computes CAT-lite separable 3D Gaussian prior smoothing on GPU before readback.
- `webgpu_runners/`, `webgl2_runners/` — per-model GPU kernels (`meshnet_fast_v4_runner.js` V4 8-bit `dp4a` engine with 3-tier `Subgroups f16 -> Shared-mem f16 -> f32` + `LowMem128` `<= 8` storage bindings) & WebGL2 descriptors.
- `public/models/` — model weights (`model.json`/`.safetensors`, colormaps). CAT-lite uses `model24chan18cls_gdice_prio`.
- `tests/` — `*.mjs` node scripts (`cat-lite.mjs`, `cortical_relabel.mjs`, `perclass_largest_wm.mjs`, `freesurfer-labels.mjs`, `save-modal-browser.mjs`, `webgl2-probability.mjs`, `mindgrab-bias.mjs`, `component-selection.mjs`, `model5-app-smoke.mjs`, `meshnet-v4-benchmark.mjs`, `*-int8-browser.mjs`, `webgl2_gate.mjs`, `webgpu_runner_bench.mjs`) plus `*.spec.cjs` playwright specs.
- `docs/model5_demo_speed_investigation.md` — non-inference bottleneck breakdown and before/after timings.

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
node tests/webgpu_runner_bench.mjs --model mindmap --native   # hand-written vs tinygrad, needs system Chrome + WebGPU
```

## Backend dispatch (`main.js: runInferenceChain`)

Order, each stage falling through on failure/refusal (never surfaced individually to the user):

1. **WebGPU** — if `isWebGpuAvailable && modelEntry.webgpu_safetensor` (skippable via `FORCE_WEBGL2_TESTING`, with automatic `gpuDevice.lost` recovery). Unconditionally runs the V4 8-bit runner (`meshnet_fast_v4_runner.js`, `80–240 MiB` max storage buffer, single unified `d_pack` hidden-conv shader module) for all V4-equipped models (`id: 2, 3, 5, 14, 21, 23`): single-encoder on Apple Silicon (`single`), zero-stall per-layer submissions on Linux & discrete Windows GPUs (`pipelined`), and self-calibrating 2-in-flight overlapping ~150 ms Z-chunked submissions with live `#modelProgress` updates on slow Windows WDDM iGPUs (`paced`, overridable via `?webgpuExec=single|pipelined|paced`). Developer query `?precision=fp16` / `?precision=fp32` switches to the FP16/FP32 reference runners (`webgpu_native/` when eligible, or tinygrad with `?webgpuKernels=tinygrad`).
2. **Native WebGL2** (`ENABLE_NATIVE_WEBGL2`) — dynamic import of `inference-webgl2.js`; also needs `baseModelEntry.webgpu_safetensor`, plus `nativeWebgl2Available()` (OffscreenCanvas + webgl2) and a `webgl2_runners/descriptors.js` entry for the model. Defaults to faster, higher-accuracy `RGBA16F` textures and automatically falls back inside `brainchop-webgl2-worker.js` to `RGBA8` quantized textures when `RGBA16F` exceeds device texture memory or on Windows ANGLE Direct3D11 Intel iGPUs (`?precision=int8` forces `RGBA8` directly). If WebGL2 refuses or fails, the chain surfaces the error directly (legacy `@tensorflow/tfjs` fallbacks have been removed).

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
- Native-space export: labels use adaptive center-outward midpoint-pair majority vote (exact center for ≤1.5 mm axes, symmetric 4/6/8-tap midpoint pairs with center-outward tie-breaking for coarser axes), probability maps trilinear, other intensity outputs nearest-neighbour.
- No `eslint.config.js` exists despite ESLint 9 + `eslint-plugin-vue`/`globals` in devDependencies; `npx eslint .` fails outright.
- `npm test` currently fails at browser launch: @playwright/test 1.57.0 wants `chromium_headless_shell-1200`, and only 1194/1228 are in `~/Library/Caches/ms-playwright`. Run `npx playwright install chromium` to fix.
- Even once installed, the bundled browsers do not expose WebGPU here; a test that needs it would have to use system Chrome (`channel: 'chrome'`, `--enable-unsafe-webgpu`). Nothing in `tests/` does — `webgl2_gate.mjs` drives bundled chromium/firefox for WebGL2 only.
- CAT-lite needs WebGPU or native WebGL2 (`120–240 MiB` max storage buffer in Turbo mode; `~1.5 GiB` in FP16 mode).
- **Never put `f16` matrices (e.g. `mat2x4<f16>`) inside WGSL `var<uniform>`**: Firefox on Windows uses `wgpu` + Naga's HLSL backend, which only decomposes `matCx2<f32>` (`naga/src/back/hlsl/writer.rs`) and emits raw `cbuffer { row_major half2x4 ... }` for `mat2x4<f16>`. DXC pads each 8-byte `half4` row to a 16-byte constant-buffer register (32-byte stride vs WGSL's 16-byte stride), corrupting/zeroing half of the weights. Always bind packed `f16` uniform arrays as `array<vec4<u32>, N>` and unpack with `unpack2x16float`.

## NiiVue 1.0 migration notes

Upgraded 0.62.0 → 1.0.0-rc.13 → 1.0.0-rc.204 (`@next`, with `@niivue/nv-ext-image-processing` `1.0.0-rc.206`, zero local `patch-package` patches). Why: 0.62's orient pass forced the opacity uniform to 1.0 whenever `modulateAlpha` was set, and `1.0.0-rc.204` upstreamed our wheel-pan, render-gain, background-opacity fade, and 3D filtering fixes natively.

- Backend is pinned: `new NiiVue({ backend: "webgl2" })`. 1.0 defaults to WebGPU; WebGL2 keeps the viewer aligned with the raw-GLSL runners and `localSystemDetails(nv1.view?.gl)`. `?viewer=webgpu` opts into WebGPU for local comparison.
- `NVImage` is plain data in 1.0 — no `clone`/`zeroImage`/`calMinMax`/`getValue`/`mm2vox`/`saveToDisk`/`setColormapLabel`. `cloneVolume`, `cloneOverlayVolume` (skipping redundant 16.77M-voxel min/max & quantile scans for discrete label / `[0,1]` probability overlays), and `downloadVolume` (`main.js`, module scope) replace them; `resliceLabelsToNative` inverts the overlay's own affine with `gl-matrix` instead of `mm2vox`/`toRASvox`.
- Label colormaps & 3D rendering: always register `nv1.addColormap(...)` AND assign `vol.colormapLabel = makeLabelLut(cmap)` **before** adding the volume, and batch overlay replacement/addition via `removeOverlaysNoRender` + `nv1.model.addVolume` + a single `nv1.updateGLVolume()` so 1–3 overlays upload/rebuild GL 3D textures only once. Avoid `nv1.setColormapLabel(idx, cmap)`, which scans all 16.7M voxels for label centroids and triggers a second `updateGLVolume`.
- `loadMatcap(name)` looks `name` up in `opts.matcaps` and, on a miss, treats the name itself as a URL; the failed fetch is swallowed, so the built-in default matcap silently stays in place. Pass the map to the constructor (`matcaps: { Shiny: shiny }` from `@niivue/niivue/assets/matcaps`). Bit us twice. The shading toolbar button toggles `volumeIllumination` 0 <-> 0.5 and loads the matcap on first enable.
- `cal_min`/`cal_max`/`robust_min`/`robust_max` → `calMin`/`calMax`/`robustMin`/`robustMax`. The NVImage type has an index signature, so the old snake_case names assign silently and do nothing.
- `conform()` left core: registered via `registerVolumeTransform(clinicalConform)` from `conform-transform.js` (wrapping `conform-volume.js` + `conform-worker.js`) and called as `nv1.volumeTransform.conform(vol, { toRAS: false })`. Unlike `@niivue/nv-ext-image-processing` (which omits negative flooring, fails on `NaN`/`Inf`, truncates float→uint8, allocates an extra 64 MiB float volume, and has a broken `isRobustMinMax` NaN path), `clinicalConform` combines FreeSurfer's `0–99.9%` upper clip (no bright white-matter saturation) with `brainchopC/src/conform.c`'s `<2%` negative floor, NaN sanitization, `same_grid` fast path, and direct `uint8` rounding. Easy to miss — `ensureConformed` short-circuits on the already-conformed default image, so a missing registration only fails on a real input.
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
- `registerVolumeTransform` is guarded by `nv1.volumeTransforms.includes(...)` so Vite HMR reloads cleanly.
- `createVolumeId()` in `main.js` falls back from `crypto.randomUUID()` to `crypto.getRandomValues()` RFC 4122 v4 so `vite dev --host` over plain HTTP on a LAN IP keeps every overlay working.
