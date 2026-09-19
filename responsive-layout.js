// Responsive niivue layout.
//
// Four panes on a phone are small no matter how they are packed, so on narrow /
// touch viewports we expose a pane switcher that drops to a single plane
// filling the whole canvas (measured on a 1078px-wide phone canvas: 1078px
// against the multiplanar column's 408px, 2.6x linear and ~7x the area).
//
// niivue 1.0 picks the multiplanar tiling itself, scoring the three- and
// four-tile variants of each family, so the layout override this file used to
// carry is gone. It also resizes its canvas from a device-pixel-content-box
// ResizeObserver, so toggling `nv-narrow` (which resizes the toolbar) needs no
// nudge from us.

import { SLICE_TYPE } from "@niivue/niivue";
import { resetView } from "./touch-view.js";

// A viewport is treated as "narrow" (phone-like) when either the CSS width is
// small, or it is a touch screen whose short side is small. Checking the real
// viewport instead of the user agent means desktop window resizing and tablet
// rotation behave sensibly too.
const NARROW_WIDTH_CSS_PX = 720;
const COARSE_SHORT_SIDE_CSS_PX = 860;

export function isNarrowViewport() {
  const vv = window.visualViewport;
  const w = Math.round(vv?.width ?? window.innerWidth ?? 0);
  const h = Math.round(vv?.height ?? window.innerHeight ?? 0);
  if (w > 0 && w <= NARROW_WIDTH_CSS_PX) return true;
  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches;
  return !!coarse && Math.min(w, h) <= COARSE_SHORT_SIDE_CSS_PX;
}

const PANES = [
  { id: "multi", label: "All", title: "All planes", type: SLICE_TYPE.MULTIPLANAR },
  { id: "axial", label: "A", title: "Axial only", type: SLICE_TYPE.AXIAL },
  { id: "coronal", label: "C", title: "Coronal only", type: SLICE_TYPE.CORONAL },
  { id: "sagittal", label: "S", title: "Sagittal only", type: SLICE_TYPE.SAGITTAL },
  { id: "render", label: "3D", title: "3D render only", type: SLICE_TYPE.RENDER },
];

function setPane(nv, bar, id) {
  const pane = PANES.find((p) => p.id === id) || PANES[0];
  nv.sliceType = pane.type; // setter redraws
  bar.querySelectorAll("button").forEach((b) =>
    b.classList.toggle("active", b.dataset.pane === pane.id));
}

function buildSwitcher(nv, container) {
  const bar = document.createElement("div");
  bar.id = "paneSwitcher";
  bar.className = "pane-switcher";
  bar.setAttribute("role", "group");
  bar.setAttribute("aria-label", "Visible planes");
  // Visibility is CSS-only (see .pane-switcher / body.nv-narrow .pane-switcher).
  // Do NOT set an inline display here: it would win over the `display: none`
  // base rule and leak the switcher onto desktop. Both class rules already
  // outrank niivue.css's global `div { display: table-row }` on specificity.

  for (const pane of PANES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.pane = pane.id;
    btn.textContent = pane.label;
    btn.title = pane.title;
    btn.setAttribute("aria-label", pane.title);
    btn.addEventListener("click", () => setPane(nv, bar, pane.id));
    bar.appendChild(btn);
  }

  // Reset view: zoom/pan back to default. Not a pane, so it never takes the
  // active highlight -- it is an action, and the current pane stays selected.
  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "pane-reset";
  reset.textContent = "⟲";
  reset.title = "Reset zoom and pan";
  reset.setAttribute("aria-label", "Reset zoom and pan");
  reset.addEventListener("click", () => resetView(nv));
  bar.appendChild(reset);

  container.appendChild(bar);
  return bar;
}

/**
 * Mark the body as `nv-narrow` on phone-like viewports (CSS uses this to slim
 * the toolbar and reveal the pane switcher) and wire up the single-plane
 * switcher.
 */
export function installResponsiveLayout(nv) {
  const container = document.getElementById("canvas-container") || document.body;
  const bar = buildSwitcher(nv, container);
  bar.querySelector('button[data-pane="multi"]').classList.add("active");

  // NiiVue 1.0 uses V to log its version; restore the view shortcut from 0.62.
  // Capture the key before NiiVue's window listener so it cannot handle V too.
  window.addEventListener("keydown", (e) => {
    if (e.key !== "v" && e.key !== "V") return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.repeat) return;
    const target = e.target;
    if (target instanceof HTMLElement &&
        (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const index = PANES.findIndex((pane) => pane.type === nv.sliceType);
    setPane(nv, bar, PANES[(index + 1) % PANES.length].id);
  }, true);

  const refresh = () =>
    document.body.classList.toggle("nv-narrow", isNarrowViewport());
  window.addEventListener("resize", refresh);
  window.addEventListener("orientationchange", refresh);
  window.visualViewport?.addEventListener("resize", refresh);
  refresh();
}
