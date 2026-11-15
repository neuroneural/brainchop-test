// webgpu_runners/mindgrab_int8_runner.js
// Production 8-bit V4 WebGPU runner for 15-channel 25-layer omnimodal MindGrab (id: 28).
// Pads 15 -> cs=16 (splitHalves=true, csHalf=8) with X4_PAD=80 zero-divergence halo (160 MiB max buffer),
// injects trained modelEntry.classifierBias, and supports 3-tier WebGPU portability (f16+subgroups, f16 shared-mem, f32).
export { setupNet, supportsF32Fallback, supportsGpuNativeIO, default } from './meshnet_fast_v4_runner.js';
