# CAT-lite CPU postprocessing: exact-output optimization

This records the CPU-only change. The accelerated backbone has subsequently
been ported to the probability runner; see [the runner port results](cat_lite_runner_port.md).

Measured on the local Apple M1 in system Chrome, using the bundled 256³
`public/t1_crop.nii.gz`, the app's TensorFlow.js quantile normalization and
transpose, and the existing CAT-lite probability runner and model settings.
Quantile sampling is seeded in the test harness. Each comparison gives the
original and optimized CPU implementations identical copies of the same priors.
Timing excludes model execution, native-order conversion, and overlay rendering.

Final isolated Chrome run:

| Pair | Original CPU tail | Optimized CPU tail | Output differences |
| --- | ---: | ---: | ---: |
| 1, original first | 1,267 ms | 680 ms | 0 |
| 2, optimized first | 1,528 ms | 667 ms | 0 |
| 3, original first | 1,512 ms | 829 ms | 0 |
| Median | 1,512 ms | 680 ms | 0 |

That is approximately **2.2× faster / 55% less CPU-tail time** in this run.
An earlier isolated run measured 1,333 → 691 ms (1.9×), so about 2× is a
reasonable description on this machine, not a cross-device guarantee.
The initial 256³ synthetic Node benchmark measured 2,899 → 1,748 ms (1.66×)
before the final cache-budget fallback and lifetime refinements.

## Changes

- Replace general multi-class component labelling/filtering with a binary
  six-connected flood fill. Preserve support threshold, component discovery
  order, last-component-wins size ties, and in-place removal of detached priors.
  This also removes the component filter's quadratic comparison loop.
- Cache supported, finite voxels in ascending index order. Compute the three
  powered tissue weights once and reuse them for both mean fits and variance.
- Omit the initial variance pass: only its means feed the bias estimator.
- Interpolate the bias and subtract it from intensity once per fitted voxel,
  reusing the corrected value for means, variances, and final likelihoods.
- Hoist the six constant Gaussian sigma logarithms out of the output loop.

All caches containing numerical results use Float64, preserving JavaScript
Number precision. Accumulation order, division, `Math.pow`, interpolation,
likelihood formulas, spatial neighbours, topology gate, and Float32 output
rounding are unchanged. No model settings, shaders, or weights were modified.

## Memory

The sample has 1,331,673 fitted voxels and uses 45.72 MiB of fit caches.
Support cleanup allocates a byte mask plus a Uint32 queue sized to supported
voxels (about 21 MiB here), replacing four full-volume Uint32 scratch arrays
and the byte mask (272 MiB allocated across the old cleanup).
These are buffer sizes, not measured total browser peak memory.

Fit caches are bounded to 192 MiB at 256³. If storing all weights would exceed
that budget, weights are recomputed and only indices/corrected values are
cached. Weight/index references are released before allocating the three
output maps. The dense fallback is covered by an exact regression test.

## Verification

`tests/fixtures/cat-lite-reference.js` freezes the original implementation.
Tests compare all three output buffers byte for byte, fitted statistics, and
input mutations. Coverage includes non-cubic shapes, custom powers and bias
settings, spatial smoothing disabled, non-finite values, negative priors,
empty support, component size ties, random disconnected components, fit
failures, and dense support that exceeds the weight-cache budget.

The Chrome benchmark compares all 50,331,648 Float32 output values per pair,
with three pairs and alternating execution order. All outputs and statistics
match exactly on the bundled MRI. This is one real scan plus synthetic
coverage, not testing of every subject or browser engine.

Commands:

```sh
node tests/cat-lite.mjs
node tests/cat-lite-exact.mjs
node tests/cat-lite-benchmark.mjs 256 3
node tests/cat-lite-browser.mjs
npm run build
```

All pass. The production build retains its existing missing-CSS, circular
vendor-chunk, and large-bundle warnings. Run performance benchmarks in isolation
from builds or other CPU/GPU tests.

## Remaining cost after the CPU-only change

At this stage, CAT-lite used `model24chan18cls_gdice_prio_probability_runner.js`, a separate
generated runner from the recently optimized
`model24chan18cls_gdice_prio_runner.js`. It did not automatically inherit
that runner's convolution changes or buffer aliases. The probability runner
took 12.27 seconds in the first isolated measurement and 14.29 seconds in the
final one, much longer than the
CPU tail. Label equality from the earlier optimization is insufficient to
establish equality of continuous tissue probabilities, so no convolution
changes were transferred here. Its buffer lifetimes also differ: probability
extraction must retain all logits while using scratch for each tissue.

The CPU improvement applies to both WebGPU and native WebGL2 through their
shared `cat-lite.js`. It does not imply an equivalent end-to-end speedup;
model inference, readback/transpose, and NiiVue's three-overlay rendering are
separate costs.
