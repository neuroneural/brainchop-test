# CLAUDE.md

Guidance for AI sessions working on this repo: browser MRI segmentation app (Vite, NiiVue 0.62, tfjs, plus raw-GLSL/WebGPU runners).

## Layout

- `main.js` — app shell: UI wiring, `runInferenceChain` backend dispatch, save/export, overlay rendering (`callbackImg`, `addProbabilityOverlay`), native-space reslice (`resliceLabelsToNative`).
- `brainchop-parameters.js` — `inferenceModelsList`: one entry per model, drives dispatch/postprocess/UI (see below).
- `inference-webgpu.js` — WebGPU runner, main thread. Loads `webgpu_runners/<name>`, runs `model.safetensors`.
- `inference-webgl2.js` — thin wrapper that spawns `brainchop-webgl2-worker.js` and normalizes its result to resolve/reject.
- `brainchop-webgl2-worker.js` — native WebGL2 path: raw GLSL via `webgl2_runners/` (descriptors, kernels, weights, MeshNet GL driver, probability postprocess), no tfjs inference (tfjs used only for pre/post tensor ops). Mirrors `inference-webgpu.js` pre/postprocessing exactly (load-bearing: same transpose convention as the safetensors export).
- `brainchop-webworker.js` / `brainchop-mainthread.js` — legacy tfjs paths (`inference-logic.js`, `tensor-utils.js`), fallback when WebGPU and native WebGL2 both decline/fail.
- `cat-lite.js` — CAT-lite partial-volume postprocess (`applyCatLitePartialVolume`, plus `isCatLite`/`runCatLite` shared by both backends), pure JS, used by both the WebGPU and native WebGL2 paths.
- `webgpu_runners/`, `webgl2_runners/` — per-model GPU kernels/descriptors for the two fast paths.
- `public/models/` — model weights (`model.json`/`.safetensors`, colormaps). CAT-lite uses `model24chan18cls_gdice_prio`.
- `tests/` — `*.mjs` node scripts (no browser needed except `webgl2_gate.mjs`/`webgl2-probability.mjs`, which drive a real browser) plus `*.spec.cjs` playwright specs.
- `audit_response.md` — responses to the last external review (`audit_temp.md` is consumed and deleted).

## Build / run / test

```
npm install
npm run dev            # vite dev server
npm run build           # production build
npm test                # `pretest` builds, then runs playwright specs
node tests/cat-lite.mjs
node tests/webgl2-probability.mjs
node tests/webgl2_gate.mjs [chromium|firefox]
```

## Backend dispatch (`main.js: runInferenceChain`)

Order, each stage falling through on failure/refusal (never surfaced individually to the user):

1. **WebGPU** — if `isWebGpuAvailable && modelEntry.webgpu_safetensor` (skippable via `FORCE_WEBGL2_TESTING`).
2. **Native WebGL2** (`ENABLE_NATIVE_WEBGL2`, skippable via `FORCE_TFJS_WEBGL_TESTING`) — dynamic import of `inference-webgl2.js`; requires `nativeWebgl2Available()` (OffscreenCanvas + webgl2) and a `webgl2_runners/descriptors.js` entry for the model.
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
4. `tissues` is passed as `img` to `callbackImg` (worker transfers the buffers), which adds three overlays (reddish GM, gray WM, blue CSF). Each overlay alpha-modulates itself: `modulationImage` = its own volume index, so `closeAllOverlays` removes from the end.
5. Save: "Segmentation: conformed" writes `segmentation_{gm,wm,csf}.nii.gz` serially (float32, 256³); "native space" writes `segmentation_{gm,wm,csf}_native.nii.gz` via `resliceLabelsToNative` (uint8, `scl_slope 1/255`, trilinear). Chrome asks once to allow multiple downloads.

## Known caveats

- `nv1.addVolume` always fires `onImageLoaded` (= `doLoadImage`). `doLoadImage` only captures `nativeInputNV` for single-volume scenes, `ensureConformed` restores it after swapping in the conformed copy, and startup calls `doLoadImage()` once because the default `t1_crop.nii.gz` loads before the hook is installed. Keep all three or native export silently becomes 256³ (or refuses with "Original input grid is unavailable").
- Native-space export: labels use 2x-supersampled majority vote, probability maps trilinear, other intensity outputs nearest-neighbour.
- No `eslint.config.js` exists despite ESLint 9 + `eslint-plugin-vue`/`globals` in devDependencies; `npx eslint .` fails outright.
- Playwright's bundled Chromium may not be installed; system Chrome via `channel: 'chrome'` with `--enable-unsafe-webgpu` runs WebGPU on Apple Silicon.
- CAT-lite needs WebGPU or native WebGL2 and ~1.5 GiB of GPU memory.

## Open items / audit notes (2026-09-15 audit)

Fixed in this audit: native export grid (`nativeInputNV` overwritten by conformed copy — affected every model), Stats/Draw on probability maps, overlay removal order, serial conformed saves, worker buffer transfer, CAT-lite CPU hot-loop allocations (~5x faster), duplicated WebGPU/WebGL2 CAT-lite post-processing, unused stats/options/validation layers, `[object Object]` in diagnostics, trilinear native export of probability maps, WebGPU CAT-lite readback validation skipped (softmax priors).

Deferred (not done; candidates for a follow-up):
- Self-modulated overlays: every `updateGLVolume` rebuilds each on the CPU (16.7M-voxel loop + 16 MiB buffer per overlay; 3x for CAT-lite; 6 rebuilds when adding the overlays). Not a GPU leak (NiiVue deletes the texture). The overlay slider is coalesced to one redraw per animation frame; if still slow, drop `modulationImage` for a colormap alpha ramp if `colormapType` alone keeps zero transparent in 3D.
- `.nvd` scene save loses `modulationImage`/`modulateAlpha`/`colormapType` and custom colormaps: probability overlays reload opaque.
- Dead single-display probability path: WebGPU runner `probabilityDisplay`/`tissue` uniform/`selected_mask` and non-CAT-lite blur/support passes; `isProbabilityOutput` non-CAT-lite branch in `inference-webgpu.js`; `Array.isArray(img)` fallback in `callbackImg`. Model 23 is the only probability model.
- Validation stacked 3-4 deep in the WebGL2 probability path (`probability.js` `finiteOption`/`maskFor`/nclass checks, `kernels.js`, `meshnet_gl.js`, runner uniform buffer); `DEFAULT_GROUPS` copied 3x; `tissueProbabilityConfig` returns unused `supportPower`/`sigma`.
- `blurAxis` (`webgl2_runners/probability.js`) recomputes axis ternaries per voxel.
