# Shared CAT-lite fitting

Both WebGPU and WebGL2 call `runCatLite`. Its default fit uses the optimized C
implementation from brainchopC, compiled once to `public/wasm/cat-lite.wasm`.
GPU prior generation, blur and support gating remain in the respective runners.
The fitting stage still runs on CPU. A GPU prototype did not meet the unchanged
`2^-24` maximum absolute C/JS error gate, so it is not shipped here.

The JavaScript `applyCatLitePartialVolume` remains the synchronous reference.
Customized CAT-lite parameters or unavailable/failed wasm loading use that
implementation. A failed wasm call leaves the supplied priors intact before
fallback. The default fast path preserves fit-refusal diagnostics and support
component tie handling. The wasm module is cached for warm runs and reserves
768 MiB of growable linear memory; this is host memory, additional to GPU
allocations. Fit inputs and outputs are copied between JS and wasm memory.

In a six-round local Chrome comparison on identical prepared 256³ priors, warm
JavaScript fitting took a median 584 ms and C/wasm 332 ms, including wasm input
and output copies. First calls were 603 and 567 ms respectively. These are fit
times, not complete segmentation or universal GPU speed claims. Browser/GPU
inference, normalization, orientation and display costs are separate.

Repeating the comparison through the final adapter gives 590 ms JavaScript
versus 338 ms wasm warm medians (five paired warm rounds). Its first call,
including lazy module loading, takes 575 ms versus JavaScript's 620 ms. Every
round passes the same `2^-24` output gate.

Rebuild from the corresponding brainchopC change with Emscripten activated:

```sh
node scripts/update-cat-lite-wasm.mjs /path/to/brainchopC
node tests/cat-lite.mjs
node tests/cat-lite-wasm.mjs
node tests/cat-lite-wasm-browser.mjs
npm run build
```

The build manifest records source and artifact SHA-256 hashes, compiler version
and whether the source differs from its base commit. Commit the JS glue and
wasm together. The browser test verifies actual wasm execution in the page and
worker in development and a nested production deployment; fallback is a test
failure. No weights or scan data are embedded in this fitting module.
