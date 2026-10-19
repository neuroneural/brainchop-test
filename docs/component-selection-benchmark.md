# Linear component selection

Measured 2026-10-19 against `webgpu` baseline `b5b3d5e`, on Apple M1,
hardware Chrome 155.0.8059.80 (Metal WebGPU / ANGLE Metal WebGL2).

The two largest-component selectors now use a class-to-winner Map: expected
O(V + K) total work for V voxels and K components, including counting and
reconstruction. Strict-largest keeps the **last** component on equal sizes;
the targeted filter keeps the **first**. Neighbor contact voting, class-family
preference/fallback, connectivity, the noise guard and rank/ratio filters are
unchanged. The same CPU postprocessor is called by WebGPU, native WebGL2 and
TensorFlow.js inference.

## Actual 104-class checkpoints

Both menu entries were inferred at 256³ on the bundled `public/t1_crop.nii.gz`.
Preparation uses the app's quantile normalization (sampling seeded with 123)
and input/output transposes. Each checkpoint/backend is inferred once; the old
and new cleanup receive identical raw labels from that run. Hardware inference
is used to obtain realistic component maps, not included in cleanup timings.

One warm-up pair is discarded, followed by nine alternating before/after pairs.
Medians in milliseconds:

| Menu model | Backend | Components | Selection + refill, before → after | Full postprocess, before → after |
| --- | --- | ---: | ---: | ---: |
| 5: Aparc+Aseg 104 (`infant_refit_synth`) | Native WebGPU | 2,387 | 100.3 → 94.7 | 279.6 → 273.8 |
| 5: Aparc+Aseg 104 (`infant_refit_synth`) | Native WebGL2 | 2,374 | 86.9 → 81.2 | 267.6 → 263.4 |
| 14: Aparc+Aseg 104, lesion scans (`synth`) | Native WebGPU | 1,315 | 95.7 → 95.6 | 277.7 → 275.4 |
| 14: Aparc+Aseg 104, lesion scans (`synth`) | Native WebGL2 | 1,325 | 80.9 → 80.3 | 262.6 → 260.7 |

Selection + refill includes component class/size counting, selection, neighbor
voting and reconstruction, with labeling already completed. Full postprocess
also includes categorical validation, guard labeling, copying the cleaned
labels back and the final uint8 conversion. Input cloning and output comparison
are outside both timers. All paired outputs are byte-identical: **zero differing
voxels** in both scopes, including warm-ups.

These healthy scans have relatively few components; their small timing changes
should not be treated as a guaranteed speedup. Browser JIT/GC outliers remain
even after warm-up. Most of their cleanup time is in volume scans, labeling and
neighbor refill. This measures one scan on one machine, not a clinical dataset
or a cross-device performance claim. GPU kernels/weights are unchanged.

## Fragmentation scaling

Direct selector benchmarks use isolated components spread over 103 foreground
classes. Equal-sized components exercise ties. Increasing sizes within each
class prevent the targeted quadratic selector from exiting early on an older,
equal/larger component. These are synthetic component maps, not model outputs;
neighbor refill is disabled. Counting and reconstruction are included.

| Pattern | K | Voxels | Strict-largest, before → after (ms) | Targeted-all, before → after (ms) |
| --- | ---: | ---: | ---: | ---: |
| Ties | 1,000 | 2,000 | 1.2 → 0.1 | 0.3 → 0.1 |
| Ties | 5,000 | 10,000 | 25.3 → 0.2 | 0.9 → 0.1 |
| Ties | 20,000 | 40,000 | 392.7 → 0.5 | 3.4 → 0.3 |
| Increasing | 1,000 | 6,365 | 1.0 → 0.1 | 0.7 → <0.1 |
| Increasing | 5,000 | 128,872 | 24.9 → 0.7 | 13.7 → 0.6 |
| Increasing | 20,000 | 1,971,755 | 398.2 → 8.1 | 211.9 → 8.5 |

Nine alternating measured pairs after one discarded warm-up; exact output and
max-class parity in every pair. Sub-0.1 ms results reach browser timer resolution.
The increasing pattern also increases V, so its new total time grows with both
V and K, not K alone.

## Reproduce and verify

```sh
node tests/component-selection.mjs
node tests/cortical_relabel.mjs
node tests/perclass_largest_wm.mjs
npm run build -- --configLoader native
node tests/component-selection-bench.mjs --out /tmp/component-models
node tests/component-selection-bench.mjs --models none --out /tmp/component-stress
```

The regression suite performs 12,020 exact comparisons against the frozen
pre-change selectors, including 6/18/26-connectivity, empty/full volumes,
sparse class IDs, both tie rules, targeted/non-target classes, immutable input
maps, contact ties, immutable kept-neighbor voting and family preference/fallback.
Integration covers model IDs 1/3/4/5/7/8/9/14/15/21 with neighbor fill on/off.
The two existing cortical-refill / white-matter cleanup regressions and the
production build pass. The native config loader avoids writing Vite's temporary
config into a shared dependency directory; no build configuration is changed.

Benchmark dependencies are the existing Playwright/esbuild installation and
system Chrome with hardware acceleration. `CHROME` and `HEADLESS` override its
executable and launch mode. `--backend generated` can additionally exercise the
generated WebGPU runner; that optional inference arm was not measured here.
The harness writes full paired timing arrays, hashes and component counts to
`report.json` in the requested output directory.

SHA-256 of the decompressed sample:
`a7a80d9e3f9d66bb12545b8d64ca5f84f08b02338b7c6b1e57e617b1d3689267`.

Checkpoint SHA-256:

```text
model24chan104cls_infant_refit_synth/model.safetensors
a5f8b4a9cb470d4cce50e9a4b28d98eadf90d8ac04d1db6ab97f5344c5421c50
model24chan104cls_synth/model.safetensors
2fd6e73d77a978862419c89f9faf56e0d1758c287f55d0b7082b6b6ad0be21f4
```

Final uint8 output SHA-256 (identical before/after within each row; inference
precision differences between backends are outside this comparison):

```text
5  Native WebGPU b1f090d76dd22ecbb773a608a363d03b8943f42c99b20d40da1dca84f93c877e
5  Native WebGL2 17e34319accf8e3a2abfd29d4f03d685c9b935c87b2592374595852d29e38bea
14 Native WebGPU bf782f32c73a46104984f476c981b0523fa61e4c46970b011075f92c18c7a42b
14 Native WebGL2 b6eb9723ad8337f8d1071b3068bd1d6d3647db444fc724550d0b749186054cba
```
