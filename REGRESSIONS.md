# Regressions found on `pr-12-niivue-1.0`, and the fixes

This branch migrates brainchop-test from NiiVue 0.62 to 1.0.0-rc.13. The
migration is the right move and this PR does not argue with it. While testing
the branch against a 0.62 build side by side we found eight behaviour changes,
five of them in the shipped library and three in our own migration code. Every
one is fixed here.

Each entry below says how the problem showed up to a user, what caused it, what
the fix does, and how it was measured. Where a number is quoted it came from a
driven A/B run on the same volume, same layout, same machine (Apple M1), not
from an impression.

Nothing in this PR changes inference. The segmentation output is byte identical
before and after, by design; see **Verification** at the end.

---

## A. Regressions in NiiVue 1.0.0-rc.13 itself

These five are fixed by patching the installed package. The patch is checked in
at `patches/@niivue+niivue+1.0.0-rc.13.patch` and applied by `patch-package`
from a `postinstall` hook, so a clean `npm install` on CI produces a correct
build. The generated patch is a diff against the shipped bundle and is not
meant to be read. The reasoning, the anchors and the measurements live in
`patch-niivue-render.mjs`, which stays in the tree as the documented source of
truth and can still `apply`, `restore` and `status` against a dev install.

### A1. The background opacity slider does nothing

**Symptom.** Lowering background opacity in the 3D render made the image
brighter and structureless instead of fading it.

**Cause.** rc.13 does `colorSample.a *= backOpacity` inside the background fine
pass loop, which turns the slider into an absorption coefficient. Lowering it
stops the surface occluding, so the ray integrates through the whole head. 0.62
scaled once, after the ray: `colAcc.a = (colAcc.a / earlyTermination) * backOpacity`.

**Fix.** Fade by accumulated alpha, once, for non-chunked draws. Chunked draws
keep per-sample behaviour, because per-chunk scaling compounds non-linearly over
OVER blending. brainchop-test loads no chunked volumes.

**Measured.** Mean luminance of lit pixels, background only, 1800x1400:

| BG opacity | 1.0 | 0.8 | 0.5 | 0.3 | 0.1 | |
|---|---|---|---|---|---|---|
| 0.62 | 155.9 | 127.9 | 80.3 | 47.7 | 16.1 | fades |
| rc.13 | 153.6 | 156.7 | 157.6 | 156.0 | 151.9 | flat |
| patched | 153.6 | 118.2 | 75.3 | 46.6 | 18.0 | fades |

**Upstream.** Equivalent to `niivue/mono#187`, which did not make rc.13. No new
report needed; this patch can be dropped when the pin moves past a release
carrying it.

### A2. Segmentations render in 3D as a flat luminous silhouette

**Symptom.** With a label overlay loaded, the 3D render lost all gyral detail
and became a single glowing shape. The T1 alone looked fine.

**Cause.** The 2D slice renderer sets `TEXTURE_MIN_FILTER` and
`TEXTURE_MAG_FILTER` on the shared 3D texture objects according to
`isNearestInterpolation`. That is sticky GL state. The ray-march then binds the
overlay (TEXTURE3) and the volume (TEXTURE0) without setting a filter, so it
inherits NEAREST. 0.62's `draw3D` rebound LINEAR explicitly. In the four-pane
layout the 2D tiles draw first, so the render always inherited NEAREST. Labels
are solid regions of one colour with binary alpha, so under NEAREST a ray
returns one constant colour. Continuous T1 data still varies, which is why only
the segmentation looked broken.

**Fix.** Rebind LINEAR on both textures in the ray-march, two lines, next to the
existing `bindTexture` calls.

**Measured.** The folds return while `volumeIsNearestInterpolation` stays
`true`, so 2D labels stay crisp. Setting that flag to `false` also restores the
folds but blurs 2D; this keeps both.

**Upstream.** Worth reporting. The general defect is that 2D draw state silently
changes 3D output through shared texture objects.

### A3. Raising overlay opacity dims the render

**Symptom.** Pushing the OVL slider up made the 3D render darker rather than
brighter.

**Cause.** The background fine pass rescales per-sample alpha to a fixed
reference density, `1 - pow(1-a, slab*refPerLen*lodOpacityScale)`. The overlay
and drawing pass, `rayMarchPass`, does not. At rc.13's default `sampleRate` of 2
an overlay accumulates alpha twice as fast per unit length as at `sampleRate` 1
and saturates in half the distance, so apparent overlay opacity depends on a
rendering-quality knob. In practice a red cortex over white white-matter
saturated on the cortex and the ray never reached the bright deep labels.

**Fix.** Apply the same step-size correction in the overlay pass. For a
non-chunked draw the reference factor is `1/rayVoxSampleRate`. MIP is left
alone, since a max projection reads each sample independently.

**Measured.** Mean luminance of the whole render tile, BG 0.3, label overlay:

| OVL | 0 | 0.25 | 0.5 | 0.75 | 1.0 | fall from peak |
|---|---|---|---|---|---|---|
| 0.62 | 9.07 | 16.14 | 15.48 | 14.68 | 13.96 | -13.5% |
| rc.13 + A1 | 10.53 | 15.58 | 14.32 | 13.01 | 11.95 | -23.3% |
| + this fix | 10.53 | 15.75 | 15.59 | 14.83 | 13.97 | -11.3% |

**Upstream.** The strongest candidate for a PR. The argument does not depend on
0.62: overlay opacity should not vary with `sampleRate`, and the background pass
in the same shader already does this correction.

### A4. The mouse wheel zooms where it used to scroll slices

**Symptom.** On first load, scrolling over a 2D pane zoomed instead of moving
through slices.

**Cause.** 0.62's wheel listener zoomed a 2D tile only when the drag mode was
`pan`, and scrolled slices otherwise. rc.13 added `slicer3D` to that condition.
`slicer3D` is this app's default tool, so the change hits on first load, and
slice scrolling is the gesture this viewer exists for.

**Fix.** Drop `slicer3D` from the zoom condition, keeping rc.13's two-button
generality. The rule becomes 0.62's: pan zooms, everything else scrolls.

**Measured.** Driven wheel events over a 2D tile, each version configured the
way its own app configures it:

| toolbar button | 0.62 | rc.13 | with this fix |
|---|---|---|---|
| Pan / zoom | zoom | zoom | zoom |
| Brightness | slices | slices | slices |
| Measure | slices | slices | slices |
| Reslice in 3D | slices | **zoom** | slices |

**Upstream.** Probably intended behaviour rather than a bug. Better raised as a
request to make the wheel action configurable. Until then it stays patched here.

### A5. The 3D render is about 10% darker than 0.62 at identical hue

**Not a bug, a preference.** Listed for completeness because it is the fifth
hunk in the patch.

Measured on the cortex label, eyedropper values converted to HSV:

| view | R,G,B | hue | sat | val |
|---|---|---|---|---|
| 3D, 0.62 | 160,58,69 | 353.5 | 0.638 | 160 |
| 3D, 1.0 | 144,51,61 | 353.6 | 0.646 | 144 |

Same hue to 0.1 degrees, same saturation to 1%, 10% less value. So it is pure
amplitude, not lighting: illumination, gradient opacity and silhouette are all 0
in this app and no light model runs. `RENDER_GAIN` (1.15) scales the composited
render RGB once, after all passes, in the WebGL2 render shader only. Verified
hue-preserving: at gain 1.15 the 2D modal label pixel stays exactly 205,62,78
while the 3D reddish mean goes 148.0,77.1,85.2 to 168.8,88.7,97.9, per-channel
1.141 / 1.150 / 1.149. Uniform across channels means hue and saturation are
untouched by construction. Set `RENDER_GAIN = 1` in `patch-niivue-render.mjs` to
disable.

Ruled out by measurement before landing this, recorded so nobody re-chases them:
`depthAwareMix` divisor 0.5 vs 0.62's 1.73 (no effect, -24.2% vs -23.3%);
disabling the depth-occlusion term entirely (no effect, -26.0%); scaling only
the background alpha by `backOpacity` in a 0.62-faithful way (breaks the A1 fade
outright).

---

## B. Regressions in our own migration code

These three are in `main.js` and `index.html` on this branch.

### B1. The toolbar drove the wrong mouse button

**Symptom.** The app could no longer be navigated by clicking, and "Drag to
reslice in 3D" zoomed on a plain left drag.

**Cause.** 0.62's `opts.dragMode` governed the **right** button; left click and
left drag always moved the crosshair. 1.0 split this into `primaryDragMode`
(left) and `secondaryDragMode` (right), and 1.0's own `setDragMode()` sets the
secondary one. So `secondaryDragMode` is 0.62's `opts.dragMode`. This branch
pointed the toolbar at `primaryDragMode`, which moved all four tools onto the
left button.

**Fix.** The toolbar sets `secondaryDragMode`. `primaryDragMode` is pinned to
`DRAG_MODE.crosshair`, which is what 0.62 did for every toolbar selection. The
extra "Navigate" button added by this branch is removed, since left-click
navigation is now unconditional again, and the default returns to "Reslice in
3D" (`slicer3D`), matching 0.62.

**Measured.** Right-button drags, mode by mode, 0.62 vs 1.0: contrast gives
cal_min/cal_max in both; measurement draws a line in both; pan gives
`pan2Dxyzmm` in both; slicer3D gives pan plus zoom in both. 12 of 12 gestures
match after the fix.

### B2. The clip plane surface reads dimmer

**Cause.** 1.0 lowered the clip-plane alpha default from 0.62's 0.5 to 0.4.

**Fix.** `nv1.clipPlaneColor = [0.7, 0, 0.7, 0.5]`.

**Measured.** Same T1, same plane: mean plane brightness 89.3 (0.62) against
72.2 (1.0), and 72.2 / 89.3 = 0.808, which is 0.4 / 0.5.

### B3. `gamma` must stay neutral

**Symptom.** Raising `gamma` to brighten the 3D render desaturated the labels in
the 2D slice views, which reads as "the red is the wrong colour".

**Cause.** In 0.62 `gamma` applied to the render alone. In 1.0 it rebuilds the
colormap texture, so it also recolours the 2D slices.

**Fix.** `nv1.gamma = 1`. Render brightness is handled by `RENDER_GAIN`
(see A5), which cannot reach 2D.

**Measured.** Modal pixel of a flat cortex-label region in the axial pane, LUT
RGB 205,62,78:

| gamma | 1.0 | 1.1 | 1.2 | 1.3 | |
|---|---|---|---|---|---|
| 0.62 | 205,62,78 | 205,62,78 | 205,62,78 | 205,62,78 | 3D only |
| 1.0 | 205,62,78 | 209,71,87 | 213,78,95 | 216,86,103 | 2D too |

HSV saturation falls 0.698 to 0.634 at gamma 1.2, at constant hue.

---

## C. One unrelated fix, found while testing

### C1. Model id 21 was skipped by the per-class largest-component filter

Not caused by this PR. It is included because it invalidates any visual A/B of
the 24-channel model, which is what we were using to test the render fixes.

`processSegmentationVolume` in `tensor-utils.js` selects its post-processing
strategy from a hard-coded model-id list, and that list appears twice. Model id
21, the 24-channel Subcortical + GWM candidate, was in neither. A missing id
fails silently: the model falls through to the legacy branch, which binarizes
and keeps one blob for the whole brain and never runs the per-class filter at
all. So cerebral white matter and cerebellar white matter kept every stray
island.

Fixed by adding 21 to both lists. It shares `model16chan18cls`'s colormap and
label layout exactly, so it belongs on the same path as id 3. The filter's
target classes are unchanged: 1 Cerebral-White-Matter, 2 Cerebral-Cortex,
5 Cerebellum-White-Matter, 6 Cerebellum-Cortex, 13 Brain-Stem.

A regression test is added at `tests/perclass_largest_wm.mjs`. It builds a 40^3
single-blob phantom where cerebral WM and cerebellar WM each get a main body
plus a nine-voxel stray island separated from it by a layer of cortex, so only
the per-class filter can remove the strays. It asserts that ids 3, 8 and 21
remove them and prints id 4 as an unfiltered control. It exits non-zero on
failure.

---

## Verification

```bash
# the library patch is present in the installed package
node patch-niivue-render.mjs status

# post-processing and probability paths
node tests/perclass_largest_wm.mjs
node tests/cortical_relabel.mjs
node tests/cat-lite.mjs
node tests/webgl2-probability.mjs
node tests/webgl2_gate.mjs

# browser suite against its snapshots
npm test
```

Inference is untouched. Running the same volume through the same model before
and after this PR gives an identical label volume, voxel for voxel. Any
difference would mean a fix leaked out of the viewer and into the segmentation
path, which is the one thing this PR must not do.
