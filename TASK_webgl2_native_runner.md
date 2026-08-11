# Native WebGL2 runner for brainchop-test (Option A)

**Status:** working, wired and **live**. Measured **8.03 s** for `model16chan18cls` on Firefox / M1
at full 256³ with VOX=2 — against brainchopC's own 8943 ms on Chrome / M1 at the same volume, so
roughly brainchopC parity. Every `fullVolume` model also runs on a phone. Backend order is
**WebGPU → native WebGL2 → tfjs worker**, in dev and in production alike, because the whole value of
this path is being the fast route on the devices that have no WebGPU.
Label parity against the WebGPU runner has not been diffed systematically — tracked in §7, not a
reason to withhold the path, since every failure mode declines to the tfjs worker.
Nothing in `brainchopC` was modified; it was read only.

---

## 1. Why, in one paragraph

`tf.conv3d` on tfjs-webgl uses `Conv3DProgram`, which computes **one output element per
fragment**, unpacked (1 float per RGBA texel), addressing every fetch through a flat-index →
2D-texcoord div/mod. For a 16→16 layer that is ~13.8k scalar fetches per voxel. brainchopC's
kernel emits **all CS output channels from one fragment** through multiple render targets, so
the 27·CS input window is read once, activations live in `RGBA16F` 3D textures addressed by
`texelFetch(sampler3D, ivec3)`, and weights arrive four at a time: ~1.0–1.8k vec4 fetches.

This is not reachable inside tfjs. `tfjs-backend-webgl` only ever attaches
`COLOR_ATTACHMENT0` with `TEXTURE_2D` — there is no `TEXTURE_3D`, no `drawBuffers` and no
`framebufferTextureLayer` anywhere in the package — so even a custom `tf.registerKernel`
cannot do MRT or 3D textures. Hence a runner outside tfjs, as a sibling to `webgpu_runners/`.

### Measured, on the first live run

**model16chan18cls, Firefox, M1, full 256³, VOX=2 active: 8.03 s.** brainchopC's own suite reports
8943 ms for the same model on Chrome / M1 at the same volume, so this is at rough parity with the C
backend it was ported from.

The comparison that matters is against the tfjs path *on Firefox*, where — see §2b — the dense path
is unreachable for **every** GN model, so the alternative is the channel-list crawl rather than the
~78 s dense figure the estimate below was built from.

### Estimated payoff beforehand, kept for the record

brainchopC's own suite on the M1: model16chan18cls **8943 ms** module time, mindgrab
**16580 ms**, three back-to-back runs at 8600/8617/8586 ms with no growth. Backing out the
CPU-wasm stages (conform, preprocess, `bwlabel`, gzip — about 0.6 s of the M4 Pro's 2443 ms,
so ~0.9 s here) puts GPU time near **8.0 s**, i.e. ~535 ms per conv layer at 16 channels on a
full 256³.

Normalising today's brainchop-test figure (~6 s/layer for 24ch on 256×204×204, M1, memory
`webgl2-dkatlas24-slowdown`) to the same shape gives ~4.2 s/layer. So **≈8×**, and the
fetch-count argument above independently predicts 8–15×. Two estimates agreeing on the order
is the finding; the cross-model scaling is the weak link, so treat it as "order 10×", not 8.0.

For id 3 specifically the real gain is larger, because that model has `enableSeqConv: true`
and so takes the **channel-list** path today — 96 full-volume conv passes plus 80 adds per
layer — not the dense one the 4.2 s/layer figure came from.

---

## 2. Three topology families, not one

Dumped from every `public/models/*/model.json` rather than assumed. This corrects the earlier
note that scoped the work to ids 2, 3, 5, 8, 9:

| family | topology | models (menu ids) |
|---|---|---|
| **A. plain MeshNet** | `Conv3D(bias) → relu/elu`, **no norm at all** | `model5_gw_ae` (1, 10, 12 — the ⚡), `model11_gw_ae` (11, 13), `model30chan50cls` (4), `model30chan18cls` |
| **B. gn, no affine** | `conv_gn(no bias) → gelu` | `mindgrab` (2) |
| **C. gn + affine** | `conv_gn → affine 1×1 → gelu` | `model6chan3cls` (9), `model16chan18cls` (3), `model24chan104cls_synth` (5), `model32chan18cls` (8) |

brainchopC only ever built B and C (its `mindgrab` and `model16chan18cls`). **Family A is new
here and is strictly simpler**: no moments passes, no norm pass, the bias and activation fold
into the convolution's output write. `relu` and `elu` are one line each.

Note `model5_gw_ae` serves three menu entries and `model11_gw_ae` two — they differ only in
post-processing — so one descriptor covers each group.

## 2b. Two bugs fixed in the tfjs path along the way

These are in `tensor-utils.js` / `inference-logic.js`, not in the runner, and they are why Firefox
looked so much worse than Chrome.

1. **`estimateMaxIntermediateTensorSize` summed input+output channels and then treated the sum as
   one texture.** `MAX_TEXTURE_SIZE` is a *per-texture* limit and the input and output activations
   are separate tensors, so summing inflates the required dimension by √2. Fixed by returning
   `maxSingle = spatialVol * max(in, out)` and checking that.

2. **The estimator had no notion that some intermediates get UNPACKED.** `LayerNormInPlace` does
   `x.transpose([0,4,1,2,3]).reshape([C, N])`, materializing the whole activation flat at 1 element
   per texel, which tfjs squarifies. Measured, not assumed: the thrown
   `Requested texture size [12481x12481]` is exactly `ceil(sqrt(15 · 204·202·252))` for mindgrab,
   where the packed check had computed 6241. Fixed by returning `hasUnpackedIntermediate` (any layer
   name ending `_gn`) and dividing by 1 instead of 4 in that case.

**Fix 1 alone made things worse** and both are needed together: it let mindgrab past a check that
had been rejecting it (9232 > 8192) *for the wrong reason*, straight into the real wall, where it
throws mid-run and `main.js` waits 1 s for context cleanup before re-running the whole model slowly.

The resulting truth table (unpacked dim = `ceil(sqrt(chan · V))`) is the real finding:

| model | unpacked dim | Firefox (8192) | Chrome (16384) |
|---|---|---|---|
| mindgrab, 15ch | 12481 | SeqConv | dense |
| id 3, 16ch | 13056 | SeqConv | dense |
| id 5, 24ch | 15991 | SeqConv | dense (barely) |
| id 8, 32ch | 18464 | SeqConv | SeqConv |

So **on Firefox the tfjs dense path is unreachable for the whole GN family**, at any crop that keeps
a usable receptive field. Not tunable. Firefox needs the native runner; the estimator fix only buys
a clean routing decision instead of a throw-and-retry.

Unexplored and **unmeasured**: `[1,D,H,W,C] → [N,C]` is a free reshape (inner dim preserved), so a
per-channel reduction over axis 0 might avoid the transpose and stay packed. The transpose exists
because `tf.moments(x,[1,2,3])` cost ~965 ms/layer; whether an axis-0 reduction is better on WebGL
is a guess. Measure before believing it.

### Channel stride is now a parameter, and the draw-buffer limit bites

brainchopC hardcodes `CS = 16` (exactly four RGBA planes). These models need 5, 6, 11, 15, 16,
24, 30 and 32 channels, so `P = ceil(CS/4)` is a descriptor field and every per-plane statement
in the GLSL is generated. `P` output attachments are required, and **VOX=2 needs 2P**:

| channels | P | needs draw buffers | VOX=2 needs |
|---|---|---|---|
| 5, 6 | 2 | 2 | 4 |
| 11, 15, 16 | 3–4 | 4 | 8 |
| 24 | 6 | 6 | 12 ✗ |
| 30, 32 | 8 | 8 | 16 ✗ |

**A real finding from the gate run: SwiftShader reports 6 draw buffers, not 8.** Your M1 and
brainchopC's M4 Pro both report 8, so P=8 covers everything there — but on a software or weak
Mesa stack the 30- and 32-channel models cannot run this path at all and must fall back.
`probeWebgl2()` reports that by name and `buildSources()` refuses rather than emitting a
shader with an output location past the device limit.

Also: 32ch at full 256³ wants **2.1 GiB** of activations (2 × 8 planes × 134 MiB) and 24ch
wants 1.6 GiB. Those two keep today's crop, which is why they are `fullVolume: false` and
currently refused by the worker (see §5).

---

## 3. What was written

```
webgl2_runners/kernels.js     GLSL ES 3.00, generated over the descriptor
webgl2_runners/weights.js     safetensors parse + topology sniff + weight packing
webgl2_runners/meshnet_gl.js  the runner: capability probe, textures, FBOs, layer loop
webgl2_runners/descriptors.js per-model dilations + activation (the only hand-written residue)
webgl2_runners/reference.js   scalar CPU forward pass + synthetic models, for the gate only
brainchop-webgl2-worker.js    the worker: pre/post identical to inference-webgpu.js
inference-webgl2.js           main-thread wrapper; rejects to mean "fall back"
tests/webgl2_gate.mjs         the gate (+ tests/webgl2_gate_page.js)
```

Everything `tf.conv3d`-based is untouched. `inference-logic.js`, `tensor-utils.js` and
`brainchop-webworker.js` are the fallback and were not edited.

### What carried over from brainchopC, and what had to change

Carried over unchanged in substance: four-plus `RGBA16F` 3D activation textures ping-ponged;
MRT so one fragment emits every output channel; weights in one `RGBA16F` 2D texture fetched as
vec4 and **vectorised over the output channel** (`((tap·in)+ic)·CS + oc`); padding as a clamped
fetch times a mask rather than a branch; the three-pass moment reduction with no readback; the
GPU argmax into an `RGBA8` texture packing four x-voxels per texel, so the only transfer off
the device is one byte per voxel; 2·nz pre-created framebuffers so a slice costs
bind + uniform + draw; VOX=2 along z via `framebufferTextureLayer`; one exit that deletes
everything.

Changed: `P` is a parameter, not 4. Dimensions are three independent constants, not a `DIM³`
cube, because these models get cropped. Family A exists. `EXT_color_buffer_float` is the hard
dependency and `EXT_color_buffer_half_float` is deliberately **not** substituted (Firefox
exposes the former and not the latter, and half_float would not cover the `RGBA32F` moment
targets).

Deliberately **not** ported: the centered-variance moments form. `E[x²] − E[x]²` is safe here
in a way it is not in tfjs — memory `webgl-fp16-centered-variance` records that path needing a
centered form, but that failure was reducing *inside* fp16 textures, whereas here storage is
f16 and every fetch is widened to `highp float` with partials in `RGBA32F`. The escape hatch is
documented at the point the variance is formed; it is not written, because untested code is
worse than absent code.

### The GELU trap, stated because it fails silently

The descriptor names the activation and `deriveDescriptor()` **throws** if it is missing. Three
GELU flavours are implemented: `gelu_tanh` (tinygrad's `.gelu()` verbatim, using GLSL ES 3.00's
`tanh`) and brainchopC's two rational/exp2 approximations. `gelu_tanh` is the default for
safetensors weights because that is what the WebGPU runner computes. brainchopC records that
its two models both declare the string `"gelu"` while computing **different,
non-interchangeable** functions, and that CUDA and OpenCL once hardcoded one and silently ran
the wrong one. **If label parity against the WebGPU runner fails, this is the first knob to
try** — a wrong flavour moves labels without erroring.

---

## 4. Gate results (software rendering, this session)

`node tests/webgl2_gate.mjs chromium` — no dev server, no weights, no GPU needed:

```
 ok   ANGLE/SwiftShader | draw buffers 6 | 3D<=2048 | EXT_color_buffer_float=true
 ok   link model16chan18cls (16ch P=4 18cls gn) -- 7 programs link
 ok   link model6chan3cls (6ch P=2 3cls gn) -- 8 programs link
 ok   link model24chan104cls_synth (24ch P=6 104cls gn) -- 7 programs link
skip  link model32chan18cls -- needs 8 draw buffers, device has 6 -> tfjs fallback
 ok   link mindgrab (15ch P=4 2cls gn) -- 7 programs link
 ok   link model5_gw_ae (5ch P=2 3cls none) -- 3 programs link
skip  link model30chan50cls -- needs 8 draw buffers, device has 6 -> tfjs fallback
 ok   numerics family C (gn + affine, gelu) -- 2/8000 differ (0.025%, budget 16)
 ok   numerics family B (gn, no affine, gelu) -- 1/8000 differ (0.013%)
 ok   numerics family A (bias + relu, no norm) -- 6/8000 differ (0.075%)
 ok   numerics family A (bias + elu, no norm) -- 0/5832 differ
 ok   numerics padding: dilation 11 on 16^3 -- 0/4096 differ
 ok   repeat <each of the above> -- second run identical (0 differ)
 ok   vox2 moves no voxel -- 0 differ
 ok   probe returns a verdict with reasons -- supported=true vox2=false 1024 MB
```

**What this does and does not establish.** It establishes that every shipped model's programs
link at its real shape on a real GLSL translator; that tap order, packed weight indexing, MRT
channel mapping, the moments shape, the affine, all four activations and the GPU argmax are
right, because the CPU reference reads the **original** tensors and not the packed array (so
`packWeights()` is under test, not sharing a formula with its own checker); that zero padding
at a dilation larger than the volume is right; that VOX=2 moves no voxel; and that a second run
is bit-identical, so nothing leaks or is left bound.

It does **not** establish anything about speed (SwiftShader), about real weights, or about a
real GPU's driver contracting `a*b+c` differently. The few-voxel diffs are fp16 storage on
near-tied classes; a structural error moves values by order 1 and would fail by orders of
magnitude, which is what makes a budget legitimate here rather than a fudge.

Worth running locally: `node tests/webgl2_gate.mjs firefox`. Firefox has its own GLSL
translator, and brainchopC treats the two agreeing exactly as stronger evidence than either
alone.

### A blind spot the gate has, found by the first live run

The first real run produced an **all-zero volume** after a healthy-looking full 8 s, and the gate had
been green throughout. Cause: `gelu_tanh` used GLSL's builtin `tanh`, which is commonly lowered to
`(exp(2x)-1)/(exp(2x)+1)`, so a large argument gives `Inf/Inf` = **NaN**. The GELU cubic reaches
|u| > 9 at |x| ≈ 5.6, which real quantile-normalized activations do hit. The NaN then reaches the
classifier, where `acc > bestv` is false for *every* class, so `best` stays 0 at every voxel.
brainchopC's `mn_tanh` clamps to [-9, 9] for exactly this reason; `tanh(9) = 0.999999997`, so the
clamp is numerically free. Now applied.

**Why the gate could never have caught it:** `syntheticModel()` scales weights by `1/sqrt(fan_in)`
deliberately, to keep activations O(1) so fp16 storage cannot overflow and muddy a numerics
comparison. That same choice guarantees the tanh argument never approaches 9. The gate needs a case
with deliberately large activations — this is a real hole, not a fluke.

Two things were added in response, and they are the reusable part:

- **`sampleActivation()`** reads 64 texels from the middle of layer 1 and throws on NaN/Inf or an
  all-zero centre. Nothing else in the layer loop inspects a *value* — `checkGl` catches GL errors,
  and a shader that faithfully computes NaN 16 million times is a legal GL program. This turns a
  silent 8-second wrong answer into a named failure in under a second.
- A log line before `loseContext()`, because Firefox prints *"WebGL context was lost."* at whatever
  line calls it, which reads like a crash in a console dump. It is deliberate teardown of a context
  we created and it fires on the success path too.

---

## 5. Scope of the first cut

Runs on the native path: **model16chan18cls (3), model6chan3cls (9), mindgrab (2),
model5_gw_ae (1, 10, 12), model30chan18cls, model30chan50cls (4)** — every `fullVolume: true`
descriptor, and full volume is itself a win, since 3D textures have no 8192 limit so these stop
needing the crop.

Falls back to the existing tfjs path, by design and with a logged reason:

- **model24chan104cls_synth (5)** and **model32chan18cls (8)** — need cropping on this path,
  which is not written. They are also the 1.6/2.1 GiB cases.
- **model11_gw_ae (11, 13)** — no `model.safetensors` export exists. Listed in
  `descriptors.js` with `noSafetensors: true` so the omission is visible.
- **Tissue GWM (7)** and the SAE models — `Conv3DTranspose`, no kernel for it.
- Any device short of draw buffers, `EXT_color_buffer_float`, or the memory.

---

## 6. Wiring (applied, live)

`main.js` dispatches **WebGPU → native WebGL2 → tfjs worker**, with `1b` inserted between the
existing `1.` and `2.` blocks, in dev and in production alike.

`const ENABLE_NATIVE_WEBGL2 = true;` — it ships. Withholding it would defeat the point: WebGPU is
absent on Firefox, older Safari, most Linux browsers and many phones, and those are exactly the
devices where the alternative is a several-minute crawl (§2b: on Firefox the tfjs dense path is
unreachable for the entire GroupNorm family).

**It is safe to ship because it declines rather than breaks.** `runInferenceWebGl2` rejects on an
unsupported device, a missing descriptor or safetensors, a GL error, a lost context, non-finite
layer-1 activations, or an all-zero volume — and every rejection falls through to the tfjs worker,
which still runs every model. Worst case is the old behaviour plus a console line.

The import is **dynamic**, and not to hide the feature: the WebGPU block returns on success, so a
WebGPU user never fetches this chunk or the second tfjs copy its worker pulls in. Same reasoning as
brainchopC probing before it fetches its WebGL2 module.

Two debug toggles alongside it, both `false` in normal operation:

| `FORCE_WEBGL2_TESTING` | `FORCE_TFJS_WEBGL_TESTING` | what runs |
|---|---|---|
| `false` | `false` | WebGPU → native WebGL2 → tfjs ← **normal, shipped** |
| `true` | `false` | native WebGL2 (skips WebGPU) |
| `true` | `true` | old tfjs WebGL2 — the A/B control |

Both must be `false` before pushing; they are debug aids, not configuration.

The middle two rows on one machine and one model are the comparison that settles whether the port
earns its keep. Note the worker does **not** hot-reload on Vite HMR — hard-refresh.

---

## 7. What is left

1. **Label parity against the WebGPU runner**, which is the whole reason the weights come from
   safetensors: same input pipeline, same weights, same output pipeline, so any difference is the
   kernels. Expect a small number of voxels, in the spirit of brainchopC's 737/1024 budget on this
   model. ← the one genuinely unverified thing
2. If labels are wrong: GELU flavour first (`gelu_tanh_approx`, `gelu_exp2_approx`); then whether
   the fp16 safetensors export applied a conv-weight rescale (harmless under GroupNorm, fatal for
   family A); then the centered-variance moments form.
3. A gate case with deliberately large activations, per §4's blind spot.
4. `node tests/webgl2_gate.mjs firefox` for the second GLSL translator.
5. The same 8.03 s measurement on Chrome, and the `FORCE_TFJS_WEBGL_TESTING=true` A/B beside it.
6. Then id 5 / id 8 — likely by trying `fullVolume: true` (1.6 / 2.1 GiB) rather than writing crop,
   since full volume is both simpler and more accurate on an RF=255 model. Needs a
   `webglcontextlost` handler first; there isn't one.
7. A `model11_gw_ae` safetensors export, for ids 11 and 13.

## 8. Open, deliberately

- **Label parity is unverified.** Speed is measured; correctness on real weights is not.
- **No `webglcontextlost` handler.** brainchopC registers one under its rule that a lost context
  must fail the run rather than return a blank volume. Required before attempting the 1.6/2.1 GiB
  models, where allocation failure may surface as context loss rather than a clean GL error.
  (The *expected* "context was lost" notice from our own teardown is a different thing — see §4.)
- 30/32-channel models are unrunnable on 6-draw-buffer devices. Accepted: they fall back.
- Family A gets no VOX=2. It needs the convolution's target set to be fixed, which the gn
  schedule guarantees (conv P→Q, norm Q→P) and family A does not, so it would need a second
  array of 2P framebuffers. Those are the small models; not worth it yet.
- The runner has no raw-activation readback path, so a model with no classifier would throw.
  Every shipped model has one — `mindgrab`'s is `[2, 15, 1, 1, 1]` in safetensors even though
  its tfjs graph stops at `conv3d_24_gn`.
