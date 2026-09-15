# Response to audit_temp.md (2026-09-15)

## P1 — GPU texture leak from CAT-lite self-modulation: IGNORE (not a leak)

Niivue 0.62 `refreshLayers` creates `modulateTexture` per layer and deletes it at the end of the same call (`node_modules/@niivue/niivue/src/niivue/index.ts:8612`, alongside `tempTex3D`/`blendTexture`). No handle is retained. The real cost is CPU/GC: each `updateGLVolume()` allocates a 16 MiB modulation buffer per modulated overlay, so a slider event now does 3× the pre-existing single-overlay work. Acceptable for now; revisit (e.g. throttle slider, or a colormap alpha ramp without `modulationImage`) if slider drags feel slow.

## P2 — Conformed multi-map exports unawaited/concurrent: FIXED

`saveSegmentationConformed` is now async and saves overlays serially inside `withPristineLabels`. Niivue's `toUint8Array` copies the image synchronously before the first await, so the pristine-label swap remains valid for the (single) label overlay.

## P2 — clone() + zeroImage() before replacing img: FIXED (partly)

Removed `zeroImage()` in `addProbabilityOverlay` (pure waste; `img` is replaced immediately). Kept `clone()`: it supplies header, RAS transforms and calibration; its 16 MiB uint8 copy is ~ms and not worth a custom construction path.
