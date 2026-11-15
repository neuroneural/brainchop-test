// webgpu_runners/mindmap24_int8_runner.js
// 8-bit WebGPU runner for 24-channel 18-class MindMap v2 (Subcortical + GWM, id: 218).
// Shares the V4 Universal MeshNet WebGPU Engine directly via meshnet_fast_v4_runner.js
// (<= 240 MiB max GPU buffer, 3-tier f16/subgroups/f32 portability, ~2.98s on Apple M1).
export { setupNet, supportsF32Fallback, supportsGpuNativeIO, default } from './meshnet_fast_v4_runner.js';
