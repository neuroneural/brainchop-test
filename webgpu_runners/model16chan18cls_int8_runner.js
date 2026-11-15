// webgpu_runners/model16chan18cls_int8_runner.js
// Production 8-bit V4 WebGPU runner for 16-channel 18-class Subcortical + GWM (id: 38).
// Uses split-plane csHalf=8 ZYCX + X4_PAD=80 (160 MiB max buffer) and 3-tier WebGPU portability.
export { setupNet, supportsF32Fallback, supportsGpuNativeIO, default } from './meshnet_fast_v4_runner.js';
