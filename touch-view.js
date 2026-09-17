// Touch view controls: keep pinch gestures inside the app, and give the user a
// way back when a view has been zoomed into a corner.
//
// Two separate problems, easy to confuse:
//
// 1. The browser was pinch-zooming the DOCUMENT. Nothing on the page set
//    `touch-action` and the viewport meta allows user scaling, so a two-finger
//    pinch scaled the whole app -- toolbar, canvas and status bar together --
//    and no in-app control can undo that, which is why only a reload helped.
//    niivue sets `touch-action: none` on its own canvas, but not on the rest of
//    the page. We block document scaling: `touch-action` in CSS for
//    Chromium/modern Safari, plus gesture* preventDefault for older iOS Safari
//    which ignores it.
//
// 2. niivue 1.0 drives all interaction from pointer events and has no notion of
//    a gesture, so a two-finger pinch is just a second drag: it scrubs the
//    crosshair (or windows the image) and never zooms. We keep touch pointer
//    events away from its canvas listeners while two fingers are down, and zoom
//    from the distance ratio since the gesture started, clamped, anchored on the
//    crosshair the same way niivue anchors its own wheel zoom.

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 8;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const touchDistance = (t) =>
  Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);

/**
 * Restore the default view: image zoom/pan back to 1x centred, and -- as a
 * belt-and-braces measure -- undo any document scaling that slipped past the
 * guards below.
 */
export function resetView(nv) {
  if (nv) {
    nv.pan2Dxyzmm = Float32Array.from([0, 0, 0, 1]);
    nv.scaleMultiplier = 1; // setter redraws
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

function blockDocumentPinchZoom() {
  // Older iOS Safari ignores touch-action for pinch and fires gesture* instead.
  // These listeners must be non-passive to be allowed to cancel the gesture.
  const stop = (e) => e.preventDefault();
  for (const type of ["gesturestart", "gesturechange", "gestureend"]) {
    document.addEventListener(type, stop, { passive: false });
  }
  // Multi-touch that reaches the document (toolbar, status bar, padding) would
  // still scale the page on some engines. Single-finger touches pass through
  // untouched, so scrolling inside dialogs keeps working.
  document.addEventListener(
    "touchmove",
    (e) => { if (e.touches.length > 1) e.preventDefault(); },
    { passive: false }
  );
}

/**
 * Stop niivue seeing the pinch as a drag. Capture phase on window runs before
 * its canvas listeners, so the second finger never starts a second drag.
 * pointerup is let through, so a drag interrupted by the second finger ends as a
 * zero-length one instead of leaving niivue mid-drag.
 */
function hideMultiTouchFromNiivue(canvas) {
  const fingers = new Set();
  const swallow = (e) => { if (fingers.size > 1) e.stopPropagation(); };
  const forget = (e) => fingers.delete(e.pointerId);
  window.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch" && e.target === canvas) fingers.add(e.pointerId);
    swallow(e);
  }, true);
  window.addEventListener("pointermove", swallow, true);
  window.addEventListener("pointerup", forget, true);
  window.addEventListener("pointercancel", forget, true);
}

// niivue's 2D zoom holds a mm anchor by rescaling the pan about the extent
// centre (NVTransforms.zoomPan2DAbout, not exported); mirror it so a pinch and a
// wheel zoom land in the same place.
function panAbout(pan, zoom, mm, extentsMin, extentsMax) {
  const ratio = pan[3] / zoom;
  return [0, 1, 2].map((i) => {
    const offset = mm[i] - (extentsMin[i] + extentsMax[i]) / 2;
    return ratio * (offset + pan[i]) - offset;
  });
}

function installPinchZoom(nv) {
  const canvas = nv.canvas;
  if (!canvas) return;
  hideMultiTouchFromNiivue(canvas);
  let start = null;

  const begin = (e) => {
    if (e.touches.length !== 2) { start = null; return; }
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const cx = ((e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left) * dpr;
    const cy = ((e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top) * dpr;
    start = {
      dist: Math.max(1, touchDistance(e.touches)),
      pan: Array.from(nv.pan2Dxyzmm),
      scale3d: nv.scaleMultiplier || 1,
      // Pinching the 3D tile should scale the render, not the slices.
      inRender: nv.view?.hitTest(cx, cy)?.isRender ?? false,
    };
  };
  const end = () => { start = null; };

  const move = (e) => {
    if (!start || e.touches.length !== 2) return;
    const ratio = touchDistance(e.touches) / start.dist;
    if (!isFinite(ratio) || ratio <= 0) return;

    if (start.inRender) {
      nv.scaleMultiplier = clamp(start.scale3d * ratio, MIN_ZOOM, MAX_ZOOM);
      return;
    }
    // Computed from the gesture's starting state rather than accumulated per
    // event, so the zoom tracks the fingers without drifting.
    const zoom = clamp(start.pan[3] * ratio, MIN_ZOOM, MAX_ZOOM);
    const p = panAbout(start.pan, zoom, nv.getCrosshairPos(),
      nv.model.extentsMin, nv.model.extentsMax);
    nv.pan2Dxyzmm = Float32Array.from([p[0], p[1], p[2], zoom]);
    if (nv.isYoked3DTo2DZoom) nv.scaleMultiplier = zoom; // setter redraws
    else nv.drawScene();
  };

  canvas.addEventListener("touchstart", begin, { passive: true });
  canvas.addEventListener("touchmove", move, { passive: true });
  canvas.addEventListener("touchend", end, { passive: true });
  canvas.addEventListener("touchcancel", end, { passive: true });
}

/**
 * Install both guards. Safe to call once, after the canvas is attached.
 */
export function installTouchViewControls(nv) {
  blockDocumentPinchZoom();
  installPinchZoom(nv);
  return { resetView: () => resetView(nv) };
}
