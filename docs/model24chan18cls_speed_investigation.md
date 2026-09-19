# 24-channel experimental MeshNet: speed and fp16 investigation

Investigated on an 8-core Apple M1 with local Chrome WebGPU, using the full
256³ `public/t1_crop.nii.gz` image. The subject was normalized by the existing
browser comparison harness (`validate_webgpu_candidate.mjs`, `quantile` mode).
Numbers below time the generated runner and its readback; they exclude the app's
NiiVue rendering and CAT-lite postprocessing. The paired harness runs two
models in one browser session, so its second run is sensitive to GPU load and
memory pressure. Treat timings as diagnostic, not a stable cross-device claim.

## Why 1.5× channels can cost about 2× time

Both `model16chan18cls` and `model24chan18cls_gdice_prio` have thirteen 3³
convolutions, per-channel affine GroupNorm, GELU, the same dilation schedule,
and an 18-class 1³ head. Twelve hidden convolutions dominate runtime. Their
work is proportional to `Cin × Cout`, so increasing 16 → 24 channels multiplies
the work in those layers by `(24 / 16)² = 2.25`, not 1.5. Summing the exact
layer configurations at 256³ gives 2.807 versus 6.298 trillion FLOPs, a
**2.244×** ratio. The head does not explain the difference.

The WebGPU exports amplify the memory difference:

| Runner | Compute passes | Fixed GPU buffers | Largest buffer | Convolution storage |
| --- | ---: | ---: | ---: | --- |
| 16-channel shipped | 111 | 1,312 MiB | 512 MiB | fp16 |
| 24-channel original export | 107 | 3,782 MiB | 1,536 MiB | fp32 buffer containing fp16-rounded values |
| 24-channel with safe buffer reuse | 107 | 2,438 MiB | 1,536 MiB | same shaders and storage as original |
| 24-channel contiguous fp16 trial | 107 | 1,644 MiB | 768 MiB | fp16 |
| 24-channel scheduled BEAM-3 trial | 107 | 2,412 MiB | 1,536 MiB | shipped graph, retuned and buffer-reused |

The original 24-channel graph stores a rounded fp16 convolution result back in
an fp32 array. That is extra bandwidth and a 1.5 GiB storage binding. The app
destroys runner-created buffers after each inference, and it checks the
1.5 GiB device binding limit before starting. The footprint can still cause
large run-to-run variation on a unified-memory GPU. In one paired test the
24-channel warm run, executed second, took 21.96 s; in subsequent paired tests
where it executed first, it took 10.95 and 10.94 s. An isolated fresh-browser
run took 11.11 s warm, and a later isolated recheck took 11.62 s. The
16-channel warm run was 7.24 s in the first pair;
an isolated later run was 14.46 s under continued GPU load. Setup took less
than 0.6 s in all these measurements, so the runner itself dominates.

On native WebGL2, another layout boundary matters. The 16-channel model uses
four RGBA output planes and can enable the two-voxel shader when eight draw
buffers are available. The 24-channel model uses six planes and would need
twelve draw buffers for that shader, so it cannot use the measured 1.41×
two-voxel optimization on the current M1 WebGL2 path. This does not affect
WebGPU when its runner succeeds.

## Candidates tested

### Exact buffer reuse: accepted

The original graph's `buf_6` is last used by pass 96, while `buf_43` starts at
pass 103; both require 768 MiB. `buf_0` is last used at pass 103, while
`buf_46` starts at pass 104; the latter's 576 MiB fits in the former's
1,536 MiB. Aliasing these two pairs changes no shader, dispatch, weight,
or arithmetic operation. It reduces fixed runner buffers by 1,344 MiB and
the measured total allocation from 3,878 to 2,534 MiB. On the sample MRI,
all 16,777,216 output labels matched the original export. A second execution
with the reused buffers also matched its first execution exactly. Isolated
warm time was 11.33 s, within the original runner's 11.11–11.62 s range.
The change is installed in the 24-channel WebGPU runner. Its largest storage
binding remains 1.5 GiB, so it does not broaden device-limit compatibility.

### Targeted convolution schedule: accepted for WebGPU

Chrome GPU timestamp queries put 9.62 s of an 11.17 s GPU run in the thirteen
convolutions. The BEAM-3 scheduled export was slower overall, but its shader
for passes 16 and 80 was faster than the corresponding shipped shader. I moved
only that shader and its two dispatch dimensions into the existing runner.
The remaining 105 passes, weights, buffer aliases, and fp16 GroupNorm path are
unchanged. Both versions use fp16 inputs and weights, f32 convolution
accumulators, and an explicit fp16 round before storing each output in the
fp32 convolution buffer. The swap retains the 2,534 MiB measured allocation
and 1,536 MiB largest binding.

| Paired Chrome WebGPU check | Previous runner | Targeted runner | Changed output labels |
| --- | ---: | ---: | ---: |
| Original MRI, warm inference | 11.43 s | 10.74 s | 0 / 16,777,216 |
| Original MRI, first inference | 11.87 s | 11.09 s | 0 / 16,777,216 |
| MRI contrast transform, gamma 0.7 | 12.72 s | 12.10 s | 0 / 16,777,216 |
| MRI contrast transform, gamma 1.4 | 14.04 s | 12.70 s | 0 / 16,777,216 |
| Spatially flipped MRI | 14.30 s | 13.06 s | 0 / 16,777,216 |

These were sequential paired runs on one Apple M1; the candidate ran second,
so the wall-clock percentages are indicative. Direct GPU timestamps for the
two modified passes fell from 0.91/0.91 s to 0.58/0.62 s. The three altered
images are derived from the same one available scan, so exact labels here do
not prove parity for every subject or device. The faster runner has no change
to WebGL2, which uses separate shaders.

I also reversed the runner order on the original scan after installation.
With the optimized runner first, it took 11.06 s warm versus 13.47 s for the
previous runner second, again with zero changed labels. The large spread
between paired timings confirms that GPU load and execution order prevent a
precise speedup percentage from these wall-clock runs.

Changing the other two BEAM-3 convolution passes (24 and 72) changed 349
labels on the original MRI and had inconsistent timing. Those shaders were
not installed. Changing all four passes was around 10% faster in one warm
comparison but had the same 349-label difference, so it was also rejected.

### Additional BEAM-2 convolution pair: accepted for WebGPU

A separate fp16 BEAM-2 search on the scheduled graph produced another shader
for passes 24 and 72. The full BEAM-2 graph took 22.29 s in one isolated
profile, largely because passes 32 and 64 each took about 4.54 s. I therefore
moved only the pass-24/72 shader and dispatch into the existing runner. The
Metal-lowered export's weight file was byte-for-byte identical to the shipped
fp16 weights; the direct WebGPU capture's weight file was not, so it was not
used. The selected shader keeps fp16 inputs and weights, an f32 accumulator,
and explicit fp16 rounding on output. Buffer allocation stays at 2,534 MiB
with a 1,536 MiB largest binding.

Passes 24 and 72 each preserved all labels when substituted alone. Together
they preserved all 16,777,216 labels on the original MRI, two contrast
transforms, and a spatial flip. GPU timestamps showed about 0.07-0.10 s less
for each selected pass in the compared runs. Whole-run timings varied too
much with GPU load to assign a reliable percentage: with the pair second it
was 11.54 versus 11.69 s first inference on the original MRI; with order
reversed and the GPU much slower overall, it was 17.38 versus 16.82 s warm.
These transformed images remain derivatives of one scan, not independent
accuracy validation.

### Transferred fp16 schedule for passes 8 and 88: accepted for WebGPU

The BEAM-2 pass-24 tiling also compiled legally for the pass-8/88 convolution
AST when its optimization choices were transferred by key and the correct
WGSL was regenerated. The Metal-lowered weight file again matched the shipped
fp16 file byte-for-byte. Only those two convolution shaders and dispatches
were moved into the runner. They retain fp16 weights and inputs, f32
accumulation, and the existing fp16-rounded output. GPU timestamps for the
selected passes fell from about 0.91/0.90 s to 0.63/0.80 s on the M1.

The pair changed zero labels on the original MRI, both contrast transforms,
and the spatial flip. Reverting either pass alone also changed zero labels
on the original scan, so the pair's parity was not caused by the two changes
canceling at the output. In one warm paired run it took 14.88 s versus
16.34 s for the previous runner. Reverse-order and other paired runs showed
large GPU-load effects, including cases where the second runner took roughly
five seconds longer, so this is not a reliable whole-run speedup percentage.
Allocation remains 2,534 MiB with a 1,536 MiB largest binding.

Transferring the same tiling to pass 96 preserved labels on the four tested
inputs but improved its measured pass only slightly (about 0.87 to 0.83 s in
the compared profiles), while one setup incurred roughly 0.3 s more shader
compilation. That variant was not installed. A BEAM-4 search was stopped
after several minutes spent on one kernel candidate without a usable export.

The WebGPU path's TensorFlow.js quantile normalization and transpose took
0.24 s on the sample image. A direct CPU prototype took 0.15 s but changed
about 1.99 million float32 input values by tiny rounding amounts (maximum
absolute difference 2.4e-7). It was not installed because that 0.09 s gain
does not justify changing the model's numerical input.

After all three convolution pairs were installed, a direct comparison against
the pre-tuning runner with the same buffer aliases changed zero of 16,777,216
labels on the original scan. The final runner also produced identical labels
on consecutive executions in a fresh browser. Its standalone warm time in
that late session was 15.96 s, illustrating the GPU-load variation; no stable
whole-run percentage is claimed. `npm run build` passed.

### Re-exported graphs: rejected

The CLI exporter's `--fp16-conv-store contiguous` option materializes the
convolution result directly as fp16. Both the untuned and BEAM-2 WebGPU-tuned
variants were exported into `/tmp`, using the current model's fp16 GroupNorm
weight rescaling. The generated weight tensors were byte-for-byte equal to the
shipped fp16 tensors. The tuned export used the CLI's two-stage native-WebGPU
schedule capture followed by Metal capture with lifetime-reused arenas; 107
AST keys matched the tuning catalog without fallback.

The shipped scheduled graph was also retuned at BEAM-3 and lowered with the
same buffer-reuse process. It kept the 1.5 GiB largest binding but lowered
fixed buffer allocation to 2.41 GiB. Its isolated warm time was 12.12 s,
versus 11.11–11.62 s for the shipped runner, and it changed 386 labels.

| Candidate or reference | Warm runtime | Labels changed vs shipped, out of 16,777,216 |
| --- | ---: | ---: |
| Shipped 24-channel in same pair (untuned trial) | 10.95 s | reference |
| Contiguous fp16, untuned | 21.60 s | 412 |
| Shipped 24-channel in same pair (BEAM-2 trial) | 10.94 s | reference |
| Contiguous fp16, BEAM-2 | 24.76 s | 326 |
| Contiguous fp16, BEAM-3 (isolated) | 57.34 s | 313 (separate parity run) |
| Scheduled fp16, BEAM-3 (isolated) | 12.12 s | 386 (separate parity run) |

The paired wall-clock comparisons are confounded because the candidate always
ran second. An isolated fresh-browser run of the BEAM-2 contiguous variant was
23.83 s; the shipped runner was 11.11–11.62 s in two isolated fresh-browser
runs. **None of the tested candidates was faster in isolated runs, and none
preserved exact labels.** They are not installed. A
different convolution schedule can change rounding even with identical fp16
weights, so buffer size alone is not a correctness argument.

The contiguous BEAM-3 export was run later at the user's suggestion with
`DEBUG=2` and the same two-stage schedule capture/Metal lowering. It retained
the 768 MiB maximum buffer and used the identical shipped fp16 weight file
(SHA-256 matched). In fresh Chrome, its first inference took 36.73 s and its
warm inference 57.34 s; a current-runner recheck immediately afterward took
11.83 s warm. The BEAM-3 candidate was deterministic across two runs, but
changed 313 labels against the current runner. No inference change was made.

## fp16 constraints for further work

The current exporter rescales each hidden convolution's weights before fp16
GroupNorm. Without rescaling, `x²` can overflow fp16 when `|x| > ~256`, before
the f32 reduction accumulator sees it. The rescaling and its corresponding
weights must remain paired with the runner. Do not switch to an unconditioned
weight file or force fp16 reduction accumulators. The exporter's `target=128`
uses a six-sigma estimate of post-GroupNorm activations, so it is a practical
headroom strategy rather than an all-input mathematical guarantee. The browser's
quantile normalization does not clip to `[0,1]`; on the sample MRI its normalized
maximum is 2.28. The first convolution's maximum output-channel L1 norm is
12.50, giving a conservative sample first-layer bound of about 28.5, below
the fp16 squaring threshold. Other subjects and later layers still need
non-finite checks in validation.

The receptive field is 255 voxels, nearly the whole 256³ image. Cropping,
lowering resolution, reducing channels, changing depth/dilation, pruning, or
altering GroupNorm would change predictions and needs a separate clinical
accuracy evaluation. The classifier is a small fraction of work, and the
runner already computes the backbone once and uses a single GPU submission.

## Recommendation

Keep the two buffer aliases and the three targeted convolution pairs in the
WebGPU runner. Validate on independent representative MRIs and other GPUs
before claiming that its numerical outputs are invariant for all inputs.
Require equal or clinically non-inferior per-class metrics, including the
priority structures, before promoting any future variant with changed labels.
A WebGL2-specific kernel could process two voxels with fewer attachments by
splitting outputs, but it needs a measured speed gain and real-weight parity
first. The model weights and inference settings are unchanged.
