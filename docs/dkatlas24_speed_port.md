# 24-channel optimization transfer to the 104-class models

Both **Aparc+Aseg 104** and **Aparc+Aseg 104 (lesion scans)** use
`webgpu_runners/dkatlas24_synth_runner.js` by default, with separate weights:

- `model24chan104cls_infant_refit_synth/model.safetensors`
- `model24chan104cls_synth/model.safetensors`

The accepted change applies to both through that shared fp16 WebGPU runner.
It preserves the weights, normalization, 104-class streaming classifier,
argmax, preprocessing, and segmentation postprocessing. The fp32 alternative
and native WebGL2 runners are unchanged.

## What transfers

The original 104-class runner already had arena-based buffer reuse and the
same accelerated pass-16/80 shader used by the optimized 18-class runner.
It therefore did not need the complete set of changes made to the latter.

Its pass-8/88 shader was byte-for-byte identical to the old 18-class shader.
That pair now uses the accelerated 18-class `dk_backbone_7` implementation
and `[512, 16, 2]` dispatch. All other compute shaders and dispatches remain
unchanged. There are still 123 passes, including the original 104-class head.

Two additional lifetime aliases reduce runner allocations by **96 MiB**:

- Input uses `arena_1` (32 MiB). Pass 0 consumes it before pass 1 starts using
  that arena as reduction scratch. Each execution uploads the input again.
- Output uses `arena_2` (64 MiB). Its previous contents are last read by
  pass 118, before pass 122 writes the final labels.

Measured allocations, excluding the test profiler and TensorFlow.js/viewer
resources, fall from **2,752.36 to 2,656.36 MiB**. The largest storage binding
remains 1,536 MiB, so compatibility requirements do not change.

## Rejected transfer

Transferring the 18-class pass-24/72 shader as well changed **388 labels**
on the primary model's bundled MRI. Restoring the original 104-class
pass-24/72 shader while keeping pass 8/88 and the aliases restored exact
label equality. The rejected pair is not installed. Equal channel counts
alone are insufficient to establish numerical equivalence of different
convolution schedules.

## Validation and timing method

`tests/dkatlas24-browser.mjs` loads the original runner from commit
`18206847562c8c326049c22da93bda12555725e7` and compares it with the working
runner in system Chrome. Both get identical copies of the bundled 256³ MRI,
using the app's TensorFlow.js quantile normalization (seeded sampling) and
transpose. Every one of the 16,777,216 output values is compared by its
underlying Float32 bits. The gate rejects invalid class values and empty
segmentations, checks repeated executions, and captures GPU validation/OOM
errors. GPU timestamps provide per-pass measurements when supported.

Performance runs must be sequential and isolated from builds or other GPU
benchmarks. Whole-run timings on this M1 vary strongly with GPU load; a
single especially slow baseline must not be treated as the speedup estimate.
The original scan and its contrast/flip derivatives cover one subject,
not independent clinical validation.

```sh
node tests/dkatlas24-browser.mjs --no-repeat
node tests/dkatlas24-browser.mjs --reverse
node tests/dkatlas24-browser.mjs --no-repeat --variant=gamma0.7
node tests/dkatlas24-browser.mjs --no-repeat --variant=gamma1.4
node tests/dkatlas24-browser.mjs --no-repeat --variant=flip
npm run build
```

Use `--model=infant` or `--model=lesion` to test just one weight set.

## Results (Apple M1, system Chrome)

Both weight sets produced **zero changed labels and zero invalid values**
for the original scan, gamma 0.7, gamma 1.4, and spatial-flip inputs. Reversed
runner order and two executions of each runner also passed on the original
scan, including exact repeatability. All 104 classes were represented in
the original-scan outputs. No GPU validation or out-of-memory errors occurred.

For a more controlled timing check, `--paired-kernels` adds the original
convolution immediately before each accelerated convolution in the candidate
runner. Each pair uses identical input/weight/output buffers; the accelerated
pass writes last. This diagnostic uses 125 passes and is never installed in
the production runner. The harness requires timestamps and verifies the
instrumented pass count.

```sh
node tests/dkatlas24-browser.mjs --model=lesion --no-repeat --paired-kernels
```

| Convolution | Original GPU time | Accelerated GPU time | Time reduction |
| --- | ---: | ---: | ---: |
| Pass 8 | 965.74 ms | 702.09 ms | 27.3% |
| Pass 88 | 1,357.77 ms | 846.73 ms | 37.6% |
| Combined | 2,323.51 ms | 1,548.81 ms | **33.3%** |

That instrumented result also matched the reference labels exactly. This
is a measurement of the two convolution passes, not a 33% end-to-end gain.
For example, one ordinary lesion-model comparison fell from 11.90 s to
11.44 s, while other runs varied substantially, including a slower candidate
run with the primary model's gamma-0.7 input. Unchanged passes also slowed
in that comparison. The available measurements do not establish a stable
whole-model speedup percentage.

`npm run build` passed. Existing warnings remain for runtime resolution of
`niivue.css`, circular vendor chunks, and bundle size. JavaScript syntax
checks and whitespace checks on the changed runner/test files passed.
