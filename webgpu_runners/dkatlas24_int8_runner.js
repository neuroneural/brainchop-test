// webgpu_runners/dkatlas24_int8_runner.js
// Production 8-bit WebGPU runner for 24-channel 104-class MindSnap (id: 58, id: 598).
// Powered by the V4 Universal MeshNet WebGPU Engine (`meshnet_fast_v4_runner.js`):
//   - <= 240 MiB max storage buffer binding (split-plane ZYCX + X4_PAD=80 zero-divergence halo)
//   - Zero-cost IEEE-754 0x3C00 Sterbenz bitcast unpack + algebraic zero-point cancellation
//   - Fused conv epilogue moments + 8-bit pre-norm y8 buffer + uniform constant-cache weights
//   - Exact 2D-contour + backward receptive-field cone skipping (~3.03s on Apple M1 Chrome)
//   - 3-tier WebGPU portability: shader-f16 + subgroups, shader-f16 shared-mem, and f32 fallback
// (Standalone V3 baseline is preserved in `./dkatlas24_int8_v3_runner.js`.)
export { setupNet, supportsF32Fallback, supportsGpuNativeIO, default } from './meshnet_fast_v4_runner.js';
