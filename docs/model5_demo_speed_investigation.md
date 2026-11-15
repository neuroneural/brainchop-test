# Five-channel demo speed investigation

Tested on the bundled 256³ `t1_crop.nii.gz` in system Chrome on an Apple M1.
The model is menu id 1, ⚡ Tissue GWM (light). Its WebGPU runner uses nine
full-resolution convolutions and a three-class head. Times vary with GPU load;
paired measurements and GPU timestamps are in `tests/model5-browser.mjs`.

## Retained change: load WebGPU runners on demand

The app previously included every generated WebGPU runner in its initial
JavaScript chunk. Runners now load when their model is selected. The built
main chunk dropped from 5,470.53 kB (679.02 kB gzip) to 118.59 kB
(40.58 kB gzip); `model5_runner` became a 105.64 kB (8.74 kB gzip) chunk.
Production Chrome smoke testing confirms the split runner loads and finishes.
The model weights, kernels, preprocessing, and connected-component cleanup
are unchanged.

The runner itself measured roughly 0.42–0.48 s in later M1 browser runs.
Its nine convolutions dominate that time. On the bundled scan, normal
connected-component cleanup took about 0.31–0.34 s, or 0.36–0.38 s including
other postprocessing. The cleanup remains enabled for WebGPU and WebGL2.

## Trials not retained

- One- and four-voxel-per-invocation WebGPU convolution kernels produced
  identical labels on the sample but did not show a consistent speed gain.
- A 128³ network with interpolated 256³ scores ran about 0.15 s versus 0.48 s
  for the full-resolution runner in one pair, but changed 12.24 million labels
  and lost the third class entirely.
- Direct CPU normalization plus transpose was slower than the existing tfjs
  path and changed approximately 1.88 million normalized input values by
  small rounding amounts. A direct CPU output transpose also took about
  0.16 s versus roughly 0.05 s for the tfjs transpose.
- Omitting connected-component cleanup saved about 0.31–0.33 s on the bundled
  MRI, but changed the result. It was restored at the user's request.

Native WebGL2 completed the same model in about 2.55 s from dispatch to
display in one Chrome check, with about 1.47 s in its own inference timer.
No WebGL2 change was retained.

Run `node tests/model5-browser.mjs --no-repeat` for raw WebGPU parity and
cleanup timing, or `node tests/model5-app-smoke.mjs --production` after
`npm run build` for the built-site check. Both require system Chrome with
WebGPU; set `BC_CHROME_PATH` if Chrome is installed elsewhere.
