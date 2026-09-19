# Accelerated 24-channel backbone port to CAT-lite

CAT-lite's WebGPU probability runner now uses the accelerated experimental
24-channel backbone, alongside the [exact CPU-tail optimizations](cat_lite_speed_investigation.md).
The model weights, probability settings, Gaussian blur, brain-support scaling,
and final CAT-lite formulas are unchanged. Native WebGL2 is unchanged.

## Port and buffer lifetimes

Copied `dk_backbone_7`, `dk_backbone_8`, and `dk_backbone_9`, together with the
dispatch dimensions for passes 8/88, 16/80, and 24/72, from
`model24chan18cls_gdice_prio_runner.js`. All 106 shared backbone/classifier
shader entries and dispatch calls now match the accelerated label runner.
Pass 106 remains the existing grouped tissue-probability extraction.

The label runner's two storage aliases are safe with one CAT-lite adaptation:

- `buf_43 = buf_6`: pass 96 finishes reading the old activation; pass 103
  writes the classifier input into that storage.
- `buf_46 = buf_0`: pass 103 finishes reading the old activation; pass 104
  writes the logits into that storage.
- CAT-lite's three sequential tissue extractions must retain `buf_46`.
  Their blur/support scratch therefore moves from `buf_0` to `buf_6`, whose
  classifier input is dead after pass 104. This applies with blur enabled
  and disabled. The logits are never overwritten between tissues.

Measured runner allocations fall from **3,878.38 to 2,534.38 MiB**, a
**1,344 MiB reduction**. These totals include weights, uniforms, and staging
buffers, but not TensorFlow.js or viewer allocations. The largest storage
binding remains 1,536 MiB, so device-limit requirements are unchanged.

## Chrome measurements

Local Apple M1, system Chrome, bundled 256³ MRI, existing TensorFlow.js
quantile normalization (seeded sampling), and the normal CAT-lite model
settings. Each pair uses identical input, weights, and postprocessing options.
Inference timings include the probability extraction and three readbacks;
they exclude setup, native-order conversion, CPU CAT-lite, and rendering.

| Execution order | Original first / warm | Accelerated first / warm | Prior / final-map changes |
| --- | ---: | ---: | ---: |
| Original then accelerated | 11.85 / 11.89 s | 9.68 / 9.55 s | 0 / 0 |
| Accelerated then original | 11.99 / 11.87 s | 10.26 / 10.31 s | 0 / 0 |

This is approximately **13–20% less runner time** in these pairs, in addition
to the earlier roughly 2× CPU-tail improvement. GPU load and execution order
affect timings; these are local measurements, not a cross-device guarantee.
The two repeated executions of each runner also produce identical priors and
final maps, checking that reused buffers do not retain harmful stale state.

Additional transformed-input checks (original runner first, one execution each):

| Input | Original | Accelerated | Prior / final-map changes |
| --- | ---: | ---: | ---: |
| Gamma 0.7 | 12.78 s | 10.43 s | 0 / 0 |
| Gamma 1.4 | 11.91 s | 9.79 s | 0 / 0 |
| Spatial flip | 16.25 s | 12.49 s | 0 / 0 |
| Original, prior blur disabled | 12.08 s | 9.91 s | 0 / 0 |

Fitted statistics also match exactly in all of these checks, and no non-finite
values or GPU validation/OOM errors were reported.

## Reproduction

The browser gate compares all 50,331,648 Float32 prior values and all
50,331,648 final tissue values by their underlying bits, checks for non-finite
values, compares fitted statistics, and captures GPU validation/OOM errors.
The original probability runner is loaded from commit
`6cb59a8070ff28d74e3cac036e1d66c96edf8f80`; it is not duplicated in a fixture.

```sh
node tests/cat-lite-browser.mjs --compare-runners
node tests/cat-lite-browser.mjs --compare-runners --reverse
node tests/cat-lite-browser.mjs --compare-runners --no-repeat --variant=gamma0.7
node tests/cat-lite-browser.mjs --compare-runners --no-repeat --variant=gamma1.4
node tests/cat-lite-browser.mjs --compare-runners --no-repeat --variant=flip
node tests/cat-lite-browser.mjs --compare-runners --no-repeat --sigma=0
npm run build
```

Run performance comparisons sequentially, without a build or other GPU work
in progress. The transformed inputs come from one bundled scan; they are
useful numerical regression coverage, not independent subject validation.

All listed browser gates and the production build pass. The build retains
its existing missing-CSS, circular vendor-chunk, and large-bundle warnings.
