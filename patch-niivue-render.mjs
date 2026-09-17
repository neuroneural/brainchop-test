// Two independent fixes to the shipped niivue 1.0.0-rc.13 WebGL2 render path.
//
//   node patch-niivue-render.mjs apply     # both fixes
//   node patch-niivue-render.mjs restore   # pristine
//   node patch-niivue-render.mjs status
//
// Then: restart the dev server with --force. Vite does NOT watch node_modules,
// so it keeps serving its cached transform and you will test stale code.
// (`npm run dev -- --port 5174 --strictPort --force`)
//
// ---------------------------------------------------------------------------
// FIX 1 - background opacity: fade by ACCUMULATED alpha, not per sample
// ---------------------------------------------------------------------------
// rc.13 does `colorSample.a *= backOpacity` inside the background fine-pass
// loop, making the slider an absorption coefficient instead of a fade: lowering
// it stops the surface occluding, so the ray integrates through the whole head
// and the render gets BRIGHTER and structureless. 0.62 scaled once, after the
// ray: `colAcc.a = (colAcc.a / earlyTermination) * backOpacity`.
//
// Mean luminance of lit pixels, background only, M1, 1800x1400:
//   BG opacity   1.0     0.8     0.5     0.3     0.1
//   0.62       155.9   127.9    80.3    47.7    16.1    <- fades
//   rc.13      153.6   156.7   157.6   156.0   151.9    <- flat
//   patched    153.6   118.2    75.3    46.6    18.0    <- fades
//
// Chunked draws keep per-sample behaviour (per-chunk scaling compounds
// non-linearly over OVER blending). brainchop-test loads no chunked volumes.
// Equivalent to upstream niivue/mono#187, which is not in rc.13.
//
// ---------------------------------------------------------------------------
// FIX 2 - the 3D ray-march must sample LINEAR, whatever 2D asked for
// ---------------------------------------------------------------------------
// The 2D slice renderer does, per draw:
//     const _ = isNearestInterpolation ? gl.NEAREST : gl.LINEAR
//     bind volume  texture -> texParameteri(MIN/MAG, _)
//     bind overlay texture -> texParameteri(MIN/MAG, _)
// That is sticky GL state on the shared texture objects, and the ray-march
// binds the overlay (TEXTURE3) and volume (TEXTURE0) WITHOUT setting a filter,
// so it inherits NEAREST. 0.62's draw3D rebound LINEAR explicitly -- which
// main.js already documents relying on ("nearest sampling makes big opaque
// regions accumulate into a flat, noisy glow with the folds washed out").
//
// Consequence: in the 4-pane layout the 2D tiles draw first and leave both
// textures NEAREST, so a label overlay -- solid regions, one colour, binary
// alpha -- returns a single constant colour per ray. The segmentation renders
// as a flat luminous silhouette with no gyri. The T1 alone survives it because
// continuous data still varies under NEAREST; labels do not.
//
// Verified on an M1: with this fix the folds come back WHILE
// volumeIsNearestInterpolation stays true, so 2D labels stay crisp. Flipping
// that flag to false also restores the folds, but blurs 2D -- this keeps both.
//
// ---------------------------------------------------------------------------
// FIX 3 - the overlay pass needs the same step-size correction as the background
// ---------------------------------------------------------------------------
// The background fine pass rescales per-sample alpha to a fixed reference
// density: 1 - pow(1-a, slab*refPerLen*lodOpacityScale). rayMarchPass (overlays
// and the drawing layer) does NOT. So at the 1.0 default sampleRate 2 an
// overlay accumulates alpha twice as fast per unit length as at sampleRate 1
// and saturates in half the distance. Its apparent opacity therefore depends on
// a rendering-quality knob, which is wrong on its face.
//
// Visible consequence: pushing OVL up dimmed the 3D render instead of
// brightening it, because a label stack (red cortex over WHITE white-matter)
// saturated on the cortex and the ray never reached the bright deep labels.
//
// Mean luminance of the whole render tile, BG 0.3, label overlay:
//   OVL          0     0.25    0.5    0.75   1.0    fall from peak
//   0.62       9.07   16.14   15.48  14.68  13.96      -13.5%
//   rc.13+F1  10.53   15.58   14.32  13.01  11.95      -23.3%
//   +this fix 10.53   15.75   15.59  14.83  13.97      -11.3%   <- matches 0.62
//
// For a non-chunked draw the reference factor is 1/rayVoxSampleRate. MIP is
// left alone: a max projection reads each sample independently.
//
// ---------------------------------------------------------------------------
// FIX 4 - render brightness belongs in the render, not in gamma
// ---------------------------------------------------------------------------
// 0.62's 3D render of a label overlay comes out brighter than 1.0's at
// identical hue and saturation. It is a pure amplitude difference: measured on
// the cortex label, eyedropper values converted to HSV,
//   3D  0.62  160,58,69  -> hue 353.5  sat 0.638  val 160
//   3D  1.0   144,51,61  -> hue 353.6  sat 0.646  val 144
// same hue to 0.1 degrees, same saturation to 1%, 10% less value. So it is not
// lighting (illumination, gradientOpacity and silhouette are all 0 in this app
// and there is no light model running), and it must not be "fixed" with gamma,
// which in 1.0 also recolours the 2D slices and drops their saturation.
//
// RENDER_GAIN scales the composited render RGB once, after all passes, in the
// WebGL2 render shader only. Verified 3D-only and hue-preserving: at gain 1.15
// the 2D modal label pixel stays exactly 205,62,78 while the 3D reddish mean
// goes 148.0,77.1,85.2 -> 168.8,88.7,97.9, i.e. per-channel 1.141/1.150/1.149.
// Uniform across channels means hue and saturation are untouched by
// construction. 1.0 = no-op.
//
// ---------------------------------------------------------------------------
// FIX 5 - the wheel: only "Pan / zoom" zooms, as in 0.62
// ---------------------------------------------------------------------------
// 0.62's wheelListener zoomed a 2D tile only for dragMode === pan and scrolled
// slices otherwise, so with the 3D-cube tool (slicer3D) selected -- which is
// this app's default -- the wheel moved through slices. rc.13 added slicer3D to
// that condition AND checks both buttons, so the wheel zooms instead. Since
// slicer3D is the default, it hits on first load, and slice scrolling is the
// gesture this viewer is used for.
//
// Measured with driven wheel events over a 2D tile, each version configured the
// way its own app configures it:
//   toolbar button   0.62     rc.13    with this fix
//   Pan / zoom       zoom     zoom     zoom
//   Brightness       slices   slices   slices
//   Measure          slices   slices   slices
//   Reslice in 3D    slices   ZOOM     slices   <- restored
//
// The fix keeps rc.13's two-button generality and only drops slicer3D from the
// zoom condition, leaving 0.62's rule: pan zooms, everything else scrolls.
//
// Ruled out by measurement before landing this, so don't re-chase them:
//   - depthAwareMix divisor /0.5 vs 0.62's /1.73  -> -24.2% vs -23.3%. No effect.
//   - disabling the depth-occlusion term entirely -> -26.0%. No effect.
//   - scaling only the background ALPHA by backOpacity (0.62-faithful) -> breaks
//     the FIX 1 fade outright (BG ladder goes flat again).
//
// Delete this file once the pin moves past releases carrying these fixes.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, 'node_modules/@niivue/niivue/dist');
const name = fs.readdirSync(dist).find(
  (f) => f.startsWith('fetchOmeZarrChunkedSource-') && f.endsWith('.js')
);
if (!name) throw new Error(`no niivue bundle found in ${dist}`);
const target = path.join(dist, name);
const backup = `${target}.orig`;

// 3D render brightness, applied to the composited render only (see FIX 4).
// 1 = untouched niivue. Re-run `apply` and restart vite with --force to change.
const RENDER_GAIN = 1.15;

const LINEAR = (unit) =>
  `e.texParameteri(e.TEXTURE_3D, e.TEXTURE_MIN_FILTER, e.LINEAR), ` +
  `e.texParameteri(e.TEXTURE_3D, e.TEXTURE_MAG_FILTER, e.LINEAR), ` +
  `/* PATCH(3d-linear ${unit}) */ `;

const EDITS = [
  {
    id: 'backOpacity once on accumulated alpha',
    from: `        colorSample.a *= backOpacity;\n        if (colorSample.a >= 0.01) {`,
    to:   `        if (chunkedDraw) { colorSample.a *= backOpacity; }\n        if (colorSample.a >= 0.01) {`,
  },
  {
    id: 'backOpacity scale after background compositing',
    from: `  // --- Optional passes. By default overlays ignore the clip plane (march the`,
    to:   `  // PATCH(mono#187): fade the background by its ACCUMULATED alpha, once.\n` +
          `  if (!chunkedDraw) { colAcc *= backOpacity; }\n` +
          `  // --- Optional passes. By default overlays ignore the clip plane (march the`,
  },
  {
    id: 'overlay pass: step-size (opacity) correction',
    from: `            vec4 premultiplied = vec4(rgb * colorSample.a, colorSample.a);`,
    to:   `            float aC = mip ? colorSample.a : (1.0 - pow(1.0 - colorSample.a, 1.0 / max(rayVoxSampleRate, 1.0))); // PATCH(overlay-stepsize)\n` +
          `            vec4 premultiplied = vec4(rgb * aC, aC);`,
  },
  {
    id: '3D ray-march: LINEAR on the overlay texture',
    from: `e.activeTexture(e.TEXTURE3), e.bindTexture(\n      e.TEXTURE_3D,\n      this.overlayTexture || this.placeholderOverlay\n    ), p.uniforms.overlay && e.uniform1i(p.uniforms.overlay, 3)`,
    to:   `e.activeTexture(e.TEXTURE3), e.bindTexture(\n      e.TEXTURE_3D,\n      this.overlayTexture || this.placeholderOverlay\n    ), ${LINEAR('overlay')}p.uniforms.overlay && e.uniform1i(p.uniforms.overlay, 3)`,
  },
  {
    id: '3D ray-march: LINEAR on the volume texture',
    from: `(e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_3D, this.volumeTexture), e.activeTexture(e.TEXTURE2)`,
    to:   `(e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_3D, this.volumeTexture), ${LINEAR('volume')}e.activeTexture(e.TEXTURE2)`,
  },
  {
    id: 'wheel: only pan zooms (slicer3D scrolls slices, as 0.62)',
    from: `if (t.model.interaction.primaryDragMode === we.pan || t.model.interaction.primaryDragMode === we.slicer3D || t.model.interaction.secondaryDragMode === we.pan || t.model.interaction.secondaryDragMode === we.slicer3D) {`,
    to:   `if (/* PATCH(wheel-pan-only) */ t.model.interaction.primaryDragMode === we.pan || t.model.interaction.secondaryDragMode === we.pan) {`,
  },
  {
    id: `3D render gain ${RENDER_GAIN}`,
    skip: RENDER_GAIN === 1,
    from: `  FragColor = FragColor * fadeAlpha;`,
    to:   `  FragColor.rgb *= ${RENDER_GAIN.toFixed(4)}; // PATCH(render-gain)\n  FragColor = FragColor * fadeAlpha;`,
  },
];

const cmd = process.argv[2] || 'status';

if (cmd === 'status') {
  const s = fs.readFileSync(target, 'utf8');
  console.log(`bundle     : ${name}`);
  console.log(`backup     : ${fs.existsSync(backup) ? 'present' : 'none'}`);
  console.log(`backOpacity: ${s.includes('PATCH(mono#187)') ? 'PATCHED' : 'pristine'}`);
  console.log(`3d-linear  : ${s.includes('PATCH(3d-linear') ? 'PATCHED' : 'pristine'}`);
  console.log(`ovl-stepsize: ${s.includes('PATCH(overlay-stepsize)') ? 'PATCHED' : 'pristine'}`);
  console.log(`render-gain: ${s.includes('PATCH(render-gain)') ? `PATCHED (${RENDER_GAIN})` : 'pristine'}`);
  console.log(`wheel-pan-only: ${s.includes('PATCH(wheel-pan-only)') ? 'PATCHED' : 'pristine'}`);
  process.exit(0);
}

if (cmd === 'restore') {
  if (!fs.existsSync(backup)) throw new Error('no backup to restore from');
  fs.copyFileSync(backup, target);
  console.log('restored pristine bundle (restart vite with --force)');
  process.exit(0);
}

if (cmd !== 'apply') throw new Error(`unknown command: ${cmd}`);

if (!fs.existsSync(backup)) fs.copyFileSync(target, backup);
let s = fs.readFileSync(backup, 'utf8'); // always patch from pristine

for (const e of EDITS) {
  if (e.skip) continue;
  const n = s.split(e.from).length - 1;
  if (n !== 1) {
    throw new Error(`"${e.id}": expected 1 anchor, found ${n} — the bundle changed, re-check before trusting this patch`);
  }
  s = s.replace(e.from, e.to);
}

fs.writeFileSync(target, s);
console.log(`applied ${EDITS.filter((e) => !e.skip).length} edits:`);
for (const e of EDITS) if (!e.skip) console.log(`  - ${e.id}`);
console.log('\nnow: restart the dev server with --force, or you will serve stale code');
