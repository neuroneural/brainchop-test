// Touch & view controls: keep pinch gestures from scaling the whole page,
// and give desktop + mobile users a one-tap Reset View back to defaults.
//
// Why this file still exists after NiiVue 1.0.0-rc.204 upstreamed native
// pinch-zoom (`src/control/pinchZoom.ts`):
//   1. NiiVue sets `touch-action: none` on its own canvas only, NOT on the
//      toolbar, footer, or padding. A two-finger pinch starting on chrome (or on
//      older iOS Safari, which ignores `touch-action` and fires `gesture*`)
//      would still zoom the entire document, which no canvas API can undo.
//   2. Canvas pinch zoom itself is now owned exclusively by NiiVue 1.0.0-rc.204
//      (anchored on the pinch midpoint, canceling in-flight drags, and honoring
//      `isYoked3DTo2DZoom`), so we deliberately do NOT intercept multi-touch
//      pointer events on `#gl1`.

const DEFAULT_AZIMUTH = 110;
const DEFAULT_ELEVATION = 10;

/**
 * Restore the default view: 2D zoom/pan, 3D camera zoom/pan/orientation,
 * contrast windowing (if shifted), and any accidental document zoom.
 */
export function resetView(nv) {
  if (nv) {
    nv.pan2Dxyzmm = Float32Array.from([0, 0, 0, 1]);
    nv.renderPan = [0, 0];
    nv.azimuth = DEFAULT_AZIMUTH;
    nv.elevation = DEFAULT_ELEVATION;
    nv.scaleMultiplier = 1; // setter triggers redraw

    const base = nv.volumes?.[0];
    if (
      base &&
      Number.isFinite(base.robustMin) &&
      Number.isFinite(base.robustMax) &&
      base.robustMax > base.robustMin &&
      (base.calMin !== base.robustMin || base.calMax !== base.robustMax)
    ) {
      base.calMin = base.robustMin;
      base.calMax = base.robustMax;
      nv.updateGLVolume();
    }
  }
  unzoomDocument();
}

/**
 * JS cannot set the visual viewport scale directly, but rewriting the viewport
 * meta with `maximum-scale=1` forces the engine to clamp the current pinch zoom
 * back to 1. The original content is restored two frames later so deliberate
 * zooming (browser menu, accessibility settings) keeps working afterwards.
 */
function unzoomDocument() {
  const meta = document.querySelector('meta[name="viewport"]');
  if (!meta) return;
  const original = meta.getAttribute("content") || "width=device-width, initial-scale=1.0";
  if (/maximum-scale/.test(original)) return; // already pinned; nothing to undo
  meta.setAttribute("content", `${original}, maximum-scale=1, user-scalable=no`);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => meta.setAttribute("content", original)));
}

function blockDocumentPinchZoom(canvas) {
  // Older iOS Safari ignores touch-action for pinch and fires gesture* instead.
  // These listeners must be non-passive to be allowed to cancel the gesture.
  const stop = (e) => e.preventDefault();
  for (const type of ["gesturestart", "gesturechange", "gestureend"]) {
    document.addEventListener(type, stop, { passive: false });
  }
  // Multi-touch outside the canvas (toolbar, status bar, padding) would still
  // scale the page on some engines. Canvas touches are left untouched so
  // NiiVue's native pointer-based pinchZoom.ts receives the full stream.
  document.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 1 && e.target !== canvas) e.preventDefault();
    },
    { passive: false }
  );
}

/**
 * Install document-zoom guards and return a resetView helper.
 * Safe to call once, after the canvas is attached.
 */
export function installTouchViewControls(nv) {
  blockDocumentPinchZoom(nv?.canvas || null);
  return { resetView: () => resetView(nv) };
}
