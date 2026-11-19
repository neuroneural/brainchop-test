// webgpu_runners/meshnet_fast_v4_runner.js
// ---------------------------------------------------------------------------
// V4 Ultra-Fast Portable WebGPU Engine for Dilated 3D MeshNet (24ch/16ch/15ch/5ch)
//
// Core Innovations:
//   1. ZYCX Row-Interleaved Split-Plane U8x4 Buffers with X-Row Halo Padding:
//      - `act8` shape `[Z=256, Y=256, C_half, X4_PAD=80]` (`<= 240.0 MiB` max
//        single storage buffer for 24ch, `160 MiB` for 15/16/5ch) + permanent
//        `32`-byte zero halos `[0..7]` and `[72..79]` (`>= d_max = 31`).
//      - Zero SIMD warp divergence and zero `subgroupShuffle` horizontal overhead.
//   2. IEEE-754 `0x3C00` Zero-Swizzle Bitcast Unpack + Exact Sterbenz Subtraction:
//      - `(b - b_zero) / 256` in `.xzyw` lane order with `0 ulp` error, eliminating
//        `unpack4x8unorm` FP32 conversions and `pad_yz` out-of-bounds branches.
//   3. Fused Conv Epilogue Moments + 128-Voxel Contiguous `mom_v4`:
//      - Eliminates all 13 standalone `moments` passes and the `768 MiB` `y16` buffer.
//      - Eliminates final `norm_quant8` (fused into `classify_v4` + 16 MiB readback).
//   4. Exact Forward + Backward Receptive-Field Cone Skipping + Stratified Exterior
//      GroupNorm Sampling + Border-Shell Exactness Rule.
//   5. Universal 3-Tier WebGPU Support:
//      - Tier 1: `shader-f16` + flexible `subgroups` (`32` direct on Apple/NVIDIA,
//        `32–64`/`64` half-row `subgroupShuffleXor` butterfly on AMD RDNA/Adreno,
//        `8–32` 2 KiB subgroup-assisted combine on Intel Xe/Arc & ARM Mali)
//      - Tier 2: `shader-f16` without `subgroups` (`8–12 KiB` loop-free shared-memory reduction)
//      - Tier 3: `f32` fallback when `shader-f16` is absent (`supportsF32Fallback = true`)
// ---------------------------------------------------------------------------

import {
  parseSafetensors,
  describeSafetensors,
  deriveDescriptor,
} from '../webgl2_runners/weights.js';
import { descriptorFor } from '../webgl2_runners/descriptors.js';
import {
  tissueProbabilityConfig,
  smoothAndGateTissuePriors,
} from '../webgl2_runners/probability.js';
import { transposeVolume3D } from '../tensor-utils.js';

const DIM = 256;
const X4_VALID = 64;
const X4_HALO = 8;
const X4_PAD = X4_VALID + 2 * X4_HALO; // 80 u32/vec4 words per X row
const ROW_SCALARS_PAD = X4_PAD * 4; // 320 scalars per padded X row
const TOTAL_STRIPS = DIM * 64; // 16,384 (Z x Y_wg) strips
const TOTAL_HALF_ROWS = DIM * DIM * 2; // 131,072
const MAX_EXT_STRIPS = 9216;
const MAX_EXT_HALF_ROWS = MAX_EXT_STRIPS * 8;
const DEEP13 = [1, 3, 5, 7, 13, 19, 31, 19, 13, 7, 5, 3, 1];
const rep = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');

// Windows WDDM enforces a hard 2.0s TDR per GPU execution quantum, and shared-RAM
// integrated GPUs (e.g. Intel UHD 630) share all EUs + DDR4 bandwidth with dwm.exe.
// Apple Silicon stays on the untouched single-encoder fast path; Linux & discrete
// Windows GPUs run unthrottled pipelined per-layer queue.submit; slow Windows GPUs
// self-calibrate into ~180ms Z-chunked submissions with live progress updates.
const WINDOWS_FAST_LAYER_MAX_MS = 280;
const PACED_TARGET_CHUNK_MS = 150;
const PACED_UI_YIELD_MS = 55;
const STD_SLOTS_PER_LAYER = 112; // <=64 main chunks (down to 256 strips) + <=48 ext chunks
let activeUserSetups = 0;

function packConvDilFlags(D, writeExtY8) {
  const q = Math.floor(D / 4);
  const r = D % 4;
  const off0 = r === 0 ? q : q + 1;
  const off1 = q;
  const shR = r * 8;
  const shL = r === 0 ? 0 : 32 - shR;
  return (
    (D & 63) |
    ((off0 & 15) << 6) |
    ((off1 & 15) << 10) |
    ((shR & 31) << 14) |
    ((shL & 31) << 19) |
    ((writeExtY8 ? 1 : 0) << 24)
  ) >>> 0;
}

function getV4ExecOverride(modelEntry) {
  if (modelEntry?.webgpuExecMode) return String(modelEntry.webgpuExecMode).toLowerCase();
  try {
    const q = new URLSearchParams(globalThis.location?.search || '').get('webgpuExec');
    if (q) return q.toLowerCase();
  } catch { /* worker or non-DOM context */ }
  return '';
}

function probeGlRendererHint(device) {
  if (!device) return '';
  if (typeof device.__glRenderer === 'string') return device.__glRenderer;
  let renderer = '';
  try {
    const isFirefox = typeof navigator !== 'undefined' && /Firefox/i.test(navigator.userAgent || '');
    const canvas = typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(1, 1)
      : (typeof document !== 'undefined' ? document.createElement('canvas') : null);
    const gl = canvas?.getContext?.('webgl2', { powerPreference: 'high-performance' });
    if (gl) {
      if (isFirefox) {
        renderer = String(gl.getParameter(gl.RENDERER) || '');
      } else {
        const dbg = gl.getExtension('WEBGL_debug_renderer_info');
        renderer = String((dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) || '');
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  } catch { /* ignore fallback probe failure */ }
  device.__glRenderer = renderer;
  return renderer;
}

function detectV4Platform(device) {
  const adInfo = device?.__adapterInfo || device?.adapterInfo || {};
  const vendor = String(adInfo.vendor || '').toLowerCase();
  const arch = String(adInfo.architecture || '').toLowerCase();
  const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
  const plat = (typeof navigator !== 'undefined' && (navigator.userAgentData?.platform || navigator.platform || '')) || '';
  const isApple = vendor === 'apple' ||
    (/Mac|iPhone|iPad|iPod/i.test(`${plat} ${ua}`) && !['intel', 'amd', 'nvidia', 'microsoft'].includes(vendor));
  const isWindows = !isApple && (/Win/i.test(plat) || /Windows/i.test(ua));
  // Firefox redacts GPUAdapterInfo strings to ""; consult WebGL2 RENDERER on Windows
  // so shared-RAM Intel UHD/HD/Iris iGPUs still select the 678 MiB LowMem128 workspace.
  const glRenderer = isWindows && !vendor ? probeGlRendererHint(device) : String(device?.__glRenderer || '');
  const desc = `${adInfo.device || ''} ${adInfo.description || ''} ${glRenderer}`;
  const effVendor = vendor || (
    /\bintel\b/i.test(glRenderer) ? 'intel' :
    /\bmicrosoft\b|\bbasic render\b/i.test(glRenderer) ? 'microsoft' : ''
  );
  const isWindowsSharedIgpu = isWindows && (
    effVendor === 'microsoft' ||
    (effVendor === 'intel' && !/\bArc\b/i.test(desc) && (
      /^gen-(9|11|12lp)/i.test(arch) ||
      /(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(desc)
    ))
  );
  return { vendor: effVendor, arch, desc, isApple, isWindows, isWindowsSharedIgpu };
}

function resolveV4InitialExecMode(device, modelEntry) {
  const ov = getV4ExecOverride(modelEntry);
  if (ov === 'single' || ov === 'pipelined' || ov === 'paced' || ov === 'calibrate') return ov;
  if (ov === 'chunked') return 'paced';
  const plat = detectV4Platform(device);
  if (plat.isApple) return 'single';
  if (plat.isWindows) {
    if (device?.__v4WinCalibrated) {
      return device.__v4WinFast ? 'pipelined' : 'paced';
    }
    return 'calibrate';
  }
  return 'pipelined';
}

function shouldUseStdChunking(device, modelEntry) {
  const ov = getV4ExecOverride(modelEntry);
  if (ov === 'single') return false;
  if (ov === 'paced' || ov === 'chunked' || ov === 'calibrate') return true;
  if (ov === 'pipelined') return false;
  return detectV4Platform(device).isWindows;
}

function shouldPreferLowMem128OnWindows(device, d, modelEntry) {
  if (modelEntry?.forceLowMem128 === false) return false;
  const plat = detectV4Platform(device);
  return plat.isWindowsSharedIgpu && d.cs >= 24 && d.cs % 4 === 0;
}

// Select Tier 1 subgroup reduction strategy based on adapter subgroup range:
//   - 'sg32'     : fixed 32-wide subgroups (Apple Silicon, NVIDIA) -> direct subgroupAdd/Min/Max (0 shared mem)
//   - 'sg64'     : fixed 64-wide subgroups (Qualcomm Adreno, GCN)  -> 5-step subgroupShuffleXor(16..1) half-row butterfly (0 shared mem)
//   - 'sg32_64'  : dynamic 32/64 subgroups (AMD RDNA, Adreno)      -> runtime sg_size==32 fast path else 5-step butterfly (0 shared mem)
//   - 'sg_small' : 8..32 subgroups (Intel Xe/Arc/UHD, ARM Mali)    -> runtime sg_size==32 fast path else 2 KiB 2/4-slot combine
//   - 'none'     : fallback loop-free shared-memory epilogue
function resolveSubgroupMode(device, modelEntry) {
  if (!device?.features?.has?.('subgroups') || modelEntry?.disableSubgroups) {
    return 'none';
  }
  if (modelEntry?.forceSubgroupMode) {
    return modelEntry.forceSubgroupMode;
  }
  const adInfo = device.__adapterInfo || device.adapterInfo || {};
  const sgMin = adInfo.subgroupMinSize | 0;
  const sgMax = adInfo.subgroupMaxSize | 0;
  if (sgMin === 32 && sgMax === 32) return 'sg32';
  if (sgMin === 64 && sgMax === 64) return 'sg64';
  if (sgMin >= 32 && sgMax <= 64) return 'sg32_64';
  if (sgMin >= 8 && sgMax <= 32) return 'sg_small';
  return 'none';
}

function subgroupModeLabel(subgroupMode) {
  switch (subgroupMode) {
    case 'sg32': return 'subgroups32';
    case 'sg64': return 'subgroups64-bf';
    case 'sg32_64': return 'subgroups32-64';
    case 'sg_small': return 'subgroups8-32';
    default: return 'shared-8KiB';
  }
}

function yieldAfterPacedChunk() {
  if (typeof requestAnimationFrame !== 'function') {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };
    const timer = setTimeout(finish, 16);
    requestAnimationFrame(() => {
      clearTimeout(timer);
      setTimeout(finish, 0);
    });
  });
}

// 2-in-flight overlapping chunk pacer for Windows WDDM TDR safety + responsive UI:
// keeps at most 2 ~150ms submissions in the GPU hardware queue at once so the GPU
// never drains to 0% idle while the browser paints #modelProgress / dwm.exe composes.
function createPacedQueueController(device, initialMsPerStrip, onUiTick) {
  let msPerStrip = initialMsPerStrip;
  let prevDone = null;
  let currDone = null;
  let lastGpuDoneAt = performance.now();
  let lastUiYieldAt = performance.now();

  async function submitChunk(enc, strips, li, { forceUiYield = false, emitTick = true } = {}) {
    if (prevDone) {
      await prevDone;
      prevDone = null;
    }
    const tSub = performance.now();
    device.queue.submit([enc.finish()]);
    const nextEnc = device.createCommandEncoder();

    const pDone = device.queue.onSubmittedWorkDone().then(() => {
      const tNow = performance.now();
      const gpuStart = Math.max(tSub, lastGpuDoneAt);
      const gpuDt = Math.max(0, tNow - gpuStart);
      if (tNow > lastGpuDoneAt) lastGpuDoneAt = tNow;
      if (strips >= 256 && gpuDt > 0.2) {
        msPerStrip = Math.max(0.005, Math.min(2.0, 0.7 * msPerStrip + 0.3 * (gpuDt / strips)));
        device.__v4MsPerStrip = msPerStrip;
      }
    });
    prevDone = currDone;
    currDone = pDone;

    if (emitTick && onUiTick) onUiTick(li);
    const now = performance.now();
    if (forceUiYield || now - lastUiYieldAt >= PACED_UI_YIELD_MS) {
      await yieldAfterPacedChunk();
      lastUiYieldAt = performance.now();
    }
    return nextEnc;
  }

  async function waitBeforeFinalSubmit() {
    if (prevDone) {
      await prevDone;
      prevDone = null;
    }
  }

  return {
    submitChunk,
    waitBeforeFinalSubmit,
    getMsPerStrip: () => msPerStrip,
    setMsPerStrip: (v) => {
      msPerStrip = Math.max(0.005, Math.min(2.0, v));
      device.__v4MsPerStrip = msPerStrip;
      lastGpuDoneAt = performance.now();
    },
  };
}

function estimateScheduleLayerWork(L, li, numConvs) {
  const nMain = L.isFull ? TOTAL_STRIPS : L.mainStrips.length;
  const nExt = L.isFull || !L.extStrips ? 0 : L.extStrips.length;
  const nNorm = li + 1 < numConvs ? (L.isFull ? TOTAL_STRIPS : (L.normStrips ? L.normStrips.length : 0)) : 0;
  const normWork = Math.max(16, Math.round(nNorm * 0.12));
  if (li === 0) {
    return { convWork: Math.max(64, Math.round(nMain * 0.12)), normWork };
  }
  return { convWork: nMain + nExt, normWork };
}

function estimateScheduleTotalWork(schedule, numConvs) {
  let total = 0;
  for (let li = 0; li < numConvs; li++) {
    const w = estimateScheduleLayerWork(schedule.layers[li], li, numConvs);
    total += w.convWork + w.normWork;
  }
  const nCls = schedule.clsSkipped ? schedule.clsStrips.length : TOTAL_STRIPS;
  total += Math.max(64, Math.round(nCls * 0.2));
  return Math.max(1, total);
}

const _f32 = new Float32Array(1);
const _u32 = new Uint32Array(_f32.buffer);
function f32ToF16Bits(val) {
  _f32[0] = val;
  const x = _u32[0];
  const sign = (x >>> 16) & 0x8000;
  const e8 = (x >>> 23) & 0xff;
  let mant = x & 0x7fffff;
  if (e8 === 0xff) return sign | 0x7c00 | (mant ? 0x0200 : 0);
  let exp = e8 - 127 + 15;
  if (exp <= 0) {
    if (exp < -10) return sign;
    mant = (mant | 0x800000) >>> (1 - exp);
    return sign | ((mant + 0x1000) >>> 13);
  }
  if (exp >= 31) return sign | 0x7c00;
  return sign | Math.min(0x7c00, (exp << 10) + ((mant + 0x1000) >>> 13));
}

function toF16Array(src) {
  const out = new Uint16Array(src.length);
  for (let i = 0; i < src.length; i++) out[i] = f32ToF16Bits(src[i]);
  return out;
}

const packCache = new Map();
const MAX_PACK_CACHE = 12;
const netPipeCache = new WeakMap();
const ioPipeCache = new WeakMap();

function hashBytesU32(bytes) {
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;
  const u32Len = bytes.byteLength >>> 2;
  if ((bytes.byteOffset & 3) === 0) {
    const u32 = new Uint32Array(bytes.buffer, bytes.byteOffset, u32Len);
    for (let i = 0; i < u32.length; i++) {
      const v = u32[i];
      h1 = Math.imul(h1 ^ v, 0x01000193) >>> 0;
      h2 = Math.imul(h2 ^ ((v << 13) | (v >>> 19)), 0x85ebca6b) >>> 0;
    }
  } else {
    for (let i = 0; i < u32Len * 4; i += 4) {
      const v = bytes[i] | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24);
      h1 = Math.imul(h1 ^ v, 0x01000193) >>> 0;
      h2 = Math.imul(h2 ^ ((v << 13) | (v >>> 19)), 0x85ebca6b) >>> 0;
    }
  }
  for (let i = u32Len * 4; i < bytes.byteLength; i++) {
    h1 = Math.imul(h1 ^ bytes[i], 0x01000193) >>> 0;
  }
  return `${bytes.byteLength}_${h1.toString(16)}_${h2.toString(16)}`;
}

function getPackedWeightsCached(bytes, desc, d, modelEntry) {
  const biasKey = modelEntry?.classifierBias ? JSON.stringify(modelEntry.classifierBias) : '';
  const key = `${hashBytesU32(bytes)}|${d.chan}|${d.cs}|${d.nclass}|${d.norm}|${d.eps}|${biasKey}`;
  if (packCache.has(key)) {
    const val = packCache.get(key);
    packCache.delete(key);
    packCache.set(key, val);
    return val;
  }
  const packed = packWeightsV4(desc, d);
  if (packCache.size >= MAX_PACK_CACHE) {
    const oldest = packCache.keys().next().value;
    packCache.delete(oldest);
  }
  packCache.set(key, packed);
  return packed;
}

function getDeviceMap(wm, device) {
  let m = wm.get(device);
  if (!m) {
    m = new Map();
    wm.set(device, m);
  }
  return m;
}

function getCachedKernelGroup(cache, key, factoryFn) {
  let p = cache.get(key);
  if (!p) {
    p = factoryFn().catch((err) => {
      cache.delete(key);
      throw err;
    });
    cache.set(key, p);
  }
  return p;
}

function createBufAllocator(device, list) {
  let bytes = 0;
  const alloc = (size, usage) => {
    const alignedSize = Math.max(16, Math.ceil(size / 16) * 16);
    const buf = device.createBuffer({ size: alignedSize, usage });
    list.push(buf);
    bytes += alignedSize;
    return buf;
  };
  return { alloc, getBytes: () => bytes, resetBytes: () => { bytes = 0; } };
}

const v4WorkspacePool = new WeakMap();

export function releaseV4Workspace(device) {
  const ws = device ? v4WorkspacePool.get(device) : null;
  if (!ws) return;
  v4WorkspacePool.delete(device);
  ws.inUse = false;
  for (const b of ws.buffers) b.destroy();
  ws.buffers.length = 0;
}

function acquireV4Workspace(device, key, allocFn) {
  const existing = v4WorkspacePool.get(device);
  if (existing) {
    if (existing.key === key && !existing.inUse) {
      existing.inUse = true;
      return existing;
    }
    if (existing.inUse) {
      const fresh = allocFn();
      return { key, ...fresh, inUse: true, pooled: false };
    }
    v4WorkspacePool.delete(device);
    for (const b of existing.buffers) b.destroy();
    existing.buffers.length = 0;
  }
  const fresh = allocFn();
  const entry = { key, ...fresh, inUse: true, pooled: true };
  v4WorkspacePool.set(device, entry);
  return entry;
}

function createShaderModuleFast(device, label, code) {
  return device.createShaderModule({ label, code });
}

async function createLayoutAndPipe(device, label, module, entryPoint, entriesSpec) {
  const bgl = device.createBindGroupLayout({
    entries: entriesSpec.map((spec, binding) => (
      typeof spec === 'string'
        ? { binding, visibility: GPUShaderStage.COMPUTE, buffer: { type: spec } }
        : { binding, visibility: GPUShaderStage.COMPUTE, buffer: spec }
    )),
  });
  try {
    const pipe = await device.createComputePipelineAsync({
      label,
      layout: device.createPipelineLayout({ bindGroupLayouts: [bgl] }),
      compute: { module, entryPoint },
    });
    return { bgl, pipe };
  } catch (err) {
    if (module?.getCompilationInfo) {
      const info = await module.getCompilationInfo().catch(() => null);
      const errs = info ? info.messages.filter((m) => m.type === 'error') : [];
      if (errs.length) {
        throw new Error(
          `meshnet_fast_v4 [${label}] WGSL error: ` +
            errs.map((e) => `L${e.lineNum}:${e.linePos} ${e.message}`).join(' | ')
        );
      }
    }
    throw err;
  }
}

function buildPrepInWgsl(isU8, hasF16) {
  const f16Enable = hasF16 ? 'enable f16;\n' : '';
  const T = hasF16 ? 'f16' : 'f32';
  const V4 = `vec4<${T}>`;
  if (isU8) {
    return `${f16Enable}
@group(0) @binding(0) var<storage, read> raw_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${V4}>;
@group(0) @binding(2) var<uniform> lut : array<vec4<f32>, 64>;

var<workgroup> sh : array<f32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let z4 = t & 7u;
  let xOff = t >> 3u;
  let zBase = z4 * 4u;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let xLoc = s * 8u + xOff;
    let w = raw_u32[((X0 + xLoc) * 256u + Y) * 64u + wid.z * 8u + z4];
    let b0 = w & 0xffu;
    let b1 = (w >> 8u) & 0xffu;
    let b2 = (w >> 16u) & 0xffu;
    let b3 = (w >> 24u) & 0xffu;
    sh[(zBase + 0u) * 33u + xLoc] = lut[b0 >> 2u][b0 & 3u];
    sh[(zBase + 1u) * 33u + xLoc] = lut[b1 >> 2u][b1 & 3u];
    sh[(zBase + 2u) * 33u + xLoc] = lut[b2 >> 2u][b2 & 3u];
    sh[(zBase + 3u) * 33u + xLoc] = lut[b3 >> 2u][b3 & 3u];
  }
  workgroupBarrier();

  let x4Loc = t & 7u;
  let zOff = t >> 3u;
  let xBase = x4Loc * 4u;
  let dstX4 = ${X4_HALO}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${X4_PAD}u + dstX4] =
      ${V4}(${T}(sh[r]), ${T}(sh[r + 1u]), ${T}(sh[r + 2u]), ${T}(sh[r + 3u]));
  }
}`;
  }
  return `${f16Enable}
@group(0) @binding(0) var<storage, read> raw_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${V4}>;
@group(0) @binding(2) var<uniform> params : vec4<f32>;

var<workgroup> sh : array<f32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let zLoc = t & 31u;
  let xOff = t >> 5u;
  for (var s : u32 = 0u; s < 16u; s = s + 1u) {
    let xLoc = s * 2u + xOff;
    let v = raw_f32[((X0 + xLoc) * 256u + Y) * 256u + (Z0 + zLoc)];
    sh[zLoc * 33u + xLoc] = select((v - params.x) / params.y, 0.0, v == params.x);
  }
  workgroupBarrier();

  let x4Loc = t & 7u;
  let zOff = t >> 3u;
  let xBase = x4Loc * 4u;
  let dstX4 = ${X4_HALO}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${X4_PAD}u + dstX4] =
      ${V4}(${T}(sh[r]), ${T}(sh[r + 1u]), ${T}(sh[r + 2u]), ${T}(sh[r + 3u]));
  }
}`;
}

function buildTransposeU8Wgsl() {
  return `
@group(0) @binding(0) var<storage, read> src_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> dst_u32 : array<u32>;

var<workgroup> sh : array<u32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let x4Loc = t & 7u;
  let zOff = t >> 3u;
  let xBase = x4Loc * 4u;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let w = src_u32[((Z0 + zLoc) * 256u + Y) * 64u + wid.x * 8u + x4Loc];
    let r = zLoc * 33u + xBase;
    sh[r + 0u] = w & 0xffu;
    sh[r + 1u] = (w >> 8u) & 0xffu;
    sh[r + 2u] = (w >> 16u) & 0xffu;
    sh[r + 3u] = (w >> 24u) & 0xffu;
  }
  workgroupBarrier();

  let z4Loc = t & 7u;
  let xOff = t >> 3u;
  let zBase = z4Loc * 4u;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let xLoc = s * 8u + xOff;
    let b0 = sh[(zBase + 0u) * 33u + xLoc];
    let b1 = sh[(zBase + 1u) * 33u + xLoc];
    let b2 = sh[(zBase + 2u) * 33u + xLoc];
    let b3 = sh[(zBase + 3u) * 33u + xLoc];
    dst_u32[((X0 + xLoc) * 256u + Y) * 64u + wid.z * 8u + z4Loc] =
      b0 | (b1 << 8u) | (b2 << 16u) | (b3 << 24u);
  }
}`;
}

function buildTransposeF32Wgsl() {
  return `
@group(0) @binding(0) var<storage, read> src_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> dst_f32 : array<f32>;

var<workgroup> sh : array<f32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let xLoc = t & 31u;
  let zOff = t >> 5u;
  for (var s : u32 = 0u; s < 16u; s = s + 1u) {
    let zLoc = s * 2u + zOff;
    sh[zLoc * 33u + xLoc] = src_f32[((Z0 + zLoc) * 256u + Y) * 256u + (X0 + xLoc)];
  }
  workgroupBarrier();

  let zLoc = t & 31u;
  let xOff = t >> 5u;
  for (var s : u32 = 0u; s < 16u; s = s + 1u) {
    let xl = s * 2u + xOff;
    dst_f32[((X0 + xl) * 256u + Y) * 256u + (Z0 + zLoc)] = sh[zLoc * 33u + xl];
  }
}`;
}

function buildProbUnpackTwoWgsl() {
  return `
@group(0) @binding(0) var<storage, read> packedSrc : array<u32>;
@group(0) @binding(1) var<storage, read_write> outA : array<f32>;
@group(0) @binding(2) var<storage, read_write> outB : array<f32>;

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 65536u + wid.x * 256u + lid.x;
  let w = packedSrc[idx];
  let inv = 1.0 / 65535.0;
  outA[idx] = f32(w & 0xffffu) * inv;
  outB[idx] = f32(w >> 16u) * inv;
}`;
}

function buildProbBlurWgsl() {
  return `
struct BlurParams {
  axis : u32,
  radius : u32,
  weightSum : f32,
  supPow : f32,
  k : array<vec4<f32>, 8>,
};
@group(0) @binding(0) var<storage, read> src : array<f32>;
@group(0) @binding(1) var<storage, read_write> dst : array<f32>;
@group(0) @binding(2) var<storage, read> sup : array<f32>;
@group(0) @binding(3) var<uniform> p : BlurParams;

fn blurSample(idx : u32, x : u32, y : u32, z : u32) -> f32 {
  var coord : i32 = i32(x);
  var stride : i32 = 1;
  if (p.axis == 1u) {
    coord = i32(y);
    stride = 256;
  } else if (p.axis == 2u) {
    coord = i32(z);
    stride = 65536;
  }
  let rad = i32(p.radius);
  var sum : f32 = 0.0;
  for (var o : i32 = -rad; o <= rad; o = o + 1) {
    let c = coord + o;
    if (c >= 0 && c < 256) {
      let kIdx = u32(o + rad);
      let w = p.k[kIdx >> 2u][kIdx & 3u];
      sum = sum + src[u32(i32(idx) + o * stride)] * w;
    }
  }
  return sum / p.weightSum;
}

@compute @workgroup_size(64, 4, 1)
fn blur_axis(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x = wid.x * 64u + lid.x;
  let y = wid.y * 4u + lid.y;
  let z = wid.z;
  let idx = (z * 256u + y) * 256u + x;
  dst[idx] = blurSample(idx, x, y, z);
}

@compute @workgroup_size(64, 4, 1)
fn blur_z_gate(@builtin(local_invocation_id) lid : vec3<u32>,
               @builtin(workgroup_id) wid : vec3<u32>) {
  let x = wid.x * 64u + lid.x;
  let y = wid.y * 4u + lid.y;
  let z = wid.z;
  let idx = (z * 256u + y) * 256u + x;
  let blurred = blurSample(idx, x, y, z);
  let sv = clamp(sup[idx], 0.0, 1.0);
  var gate : f32 = 0.0;
  if (sv > 0.0) {
    gate = select(pow(sv, p.supPow), sv, p.supPow == 1.0);
  }
  dst[idx] = clamp(blurred * gate, 0.0, 1.0);
}`;
}

async function getIoPipe(device, key, wgslFn, entryPoint, entriesSpec) {
  const cache = getDeviceMap(ioPipeCache, device);
  let p = cache.get(key);
  if (!p) {
    p = (async () => {
      const mod = createShaderModuleFast(device, key, wgslFn());
      return createLayoutAndPipe(device, key, mod, entryPoint, entriesSpec);
    })().catch((err) => {
      cache.delete(key);
      throw err;
    });
    cache.set(key, p);
  }
  return p;
}

function prepareHeadMaskFromNativeInput(raw, headRow, yzActive, normOffset, detectBbox) {
  headRow.fill(0);
  const nvox = DIM * DIM * DIM;
  const hasBgZero = detectBbox && raw[0] === normOffset && raw[nvox - 1] === normOffset;
  if (!hasBgZero) return { hasBgSkip: false };
  yzActive.fill(0);
  if (
    (raw instanceof Uint8Array || raw instanceof Uint8ClampedArray) &&
    (raw.byteOffset & 3) === 0 &&
    Number.isInteger(normOffset) &&
    normOffset >= 0 &&
    normOffset <= 255
  ) {
    const rawU32 = new Uint32Array(raw.buffer, raw.byteOffset, nvox >>> 2);
    const yzU32 = new Uint32Array(yzActive.buffer, yzActive.byteOffset, (DIM * DIM) >>> 2);
    const off4 = ((normOffset & 0xff) * 0x01010101) >>> 0;
    let p = 0;
    for (let x = 0; x < DIM; x++) {
      for (let i = 0; i < 16384; i++) {
        yzU32[i] |= (rawU32[p++] ^ off4);
      }
    }
  } else {
    let p = 0;
    const totalYZ = DIM * DIM;
    for (let x = 0; x < DIM; x++) {
      for (let yz = 0; yz < totalYZ; yz++, p++) {
        if (raw[p] !== normOffset) yzActive[yz] = 1;
      }
    }
  }
  let activeRows = 0;
  for (let y = 0; y < DIM; y++) {
    const yOff = y * DIM;
    for (let z = 0; z < DIM; z++) {
      if (yzActive[yOff + z] !== 0) {
        headRow[z * DIM + y] = 1;
        activeRows++;
      }
    }
  }
  if (activeRows === 0 || activeRows >= 60000) return { hasBgSkip: false };
  return { hasBgSkip: true };
}

function getProbCacheKey(probCfg) {
  return probCfg
    ? `${probCfg.grayMask}_${probCfg.whiteMask}_${probCfg.csfMask}_${probCfg.temperature}_${probCfg.supportTemperature}`
    : 'seg';
}

async function getNetPipes128(
  device, d, packed, hasF16, subgroupMode, probCfg, shaders,
  { includeCls = true, sequential = false, shouldAbort = null } = {}
) {
  const cache = getDeviceMap(netPipeCache, device);
  const f16Tag = hasF16 ? 1 : 0;
  const sgTag = subgroupMode || 'none';
  const uWeffTag = shaders.useUniformWeff ? 1 : 0;
  const mk = (label, mod, ep, spec) => createLayoutAndPipe(device, label, mod, ep, spec);

  const initTypes = ['storage', 'storage', 'storage', 'storage'];
  const conv0Types = ['read-only-storage', 'storage', 'storage', 'storage', 'storage', 'storage', 'read-only-storage', 'storage', 'uniform', 'uniform', 'uniform'];
  const prepTypes = ['read-only-storage', 'read-only-storage', 'storage', 'storage', 'read-only-storage', 'uniform'];
  const flushTypes = ['storage', 'storage', 'storage', 'storage', 'read-only-storage', 'read-only-storage', { type: 'uniform', hasDynamicOffset: true, minBindingSize: 32 }];
  const normTypes = ['storage', 'storage', 'storage', 'storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'uniform'];
  const convTypes = ['read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'storage', 'storage', shaders.useUniformWeff ? 'uniform' : 'read-only-storage', 'read-only-storage', { type: 'uniform', hasDynamicOffset: true, minBindingSize: 32 }];
  const clsTypes = ['read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'storage', 'uniform', 'uniform', 'uniform'];

  const initKey = `128|init|${d.cs}|${d.activation}|${f16Tag}`;
  const conv0Key = `128|conv0|${d.cs}|${d.dilations[0]}|${d.norm}|${f16Tag}|${sgTag}`;
  const prepKey = `128|prep|${d.chan}|${d.cs}|${d.activation}|${d.norm}|${f16Tag}`;
  const flushKey = `128|flush|${d.cs}|${f16Tag}`;
  const normKey = `128|norm|${d.cs}|${d.activation}|${d.norm}|${f16Tag}`;
  const convKey = `128|conv|${d.chan}|${d.cs}|${d.activation}|${d.norm}|${uWeffTag}|${f16Tag}|${sgTag}`;
  const clsKey = `128|cls|${d.chan}|${d.cs}|${d.nclass}|${packed?.clsK4 ?? 0}|${shaders.numConvs}|${d.activation}|${d.norm}|${f16Tag}|${getProbCacheKey(probCfg)}`;

  const mkInit = () => getCachedKernelGroup(cache, initKey, () => {
    const mInit = createShaderModuleFast(device, 'init_act8_128', shaders.initActWgsl());
    return mk('init_act8_128', mInit, 'main', initTypes);
  });
  const mkConv0 = () => getCachedKernelGroup(cache, conv0Key, async () => {
    const mConv0 = createShaderModuleFast(device, 'conv0_128', shaders.conv0Wgsl());
    const list = await Promise.all(
      shaders.halfPass0
        ? [
            mk('conv0_128_lo', mConv0, 'main_lo', conv0Types),
            mk('conv0_128_hi', mConv0, 'main_hi', conv0Types),
            mk('conv0_128_bg_lo', mConv0, 'main_bg_lo', conv0Types),
            mk('conv0_128_bg_hi', mConv0, 'main_bg_hi', conv0Types),
          ]
        : [
            mk('conv0_128', mConv0, 'main', conv0Types),
            mk('conv0_128_bg', mConv0, 'main_bg', conv0Types),
          ]
    );
    return shaders.halfPass0
      ? { lo: list[0], hi: list[1], bgLo: list[2], bgHi: list[3] }
      : { main: list[0], bg: list[1] };
  });
  const mkPrep = () => getCachedKernelGroup(cache, prepKey, async () => {
    const mPrep = createShaderModuleFast(device, 'prep_128', shaders.prepWgsl());
    const [pMomFin, pPrepW] = await Promise.all([
      mk('moments_finish_128', mPrep, 'moments_finish', prepTypes),
      mk('prep_weff_128', mPrep, 'prep_weff', prepTypes),
    ]);
    return { pMomFin, pPrepW };
  });
  const mkFlush = () => getCachedKernelGroup(cache, flushKey, () => {
    const mFlush = createShaderModuleFast(device, 'flush_128', shaders.flushWgsl());
    return mk('flush_stage_128', mFlush, 'main', flushTypes);
  });
  const mkNorm = () => getCachedKernelGroup(cache, normKey, async () => {
    const mNorm = createShaderModuleFast(device, 'norm_128', shaders.normWgsl());
    const [pNorm, pNormHalo] = await Promise.all([
      mk('norm_quant8_128', mNorm, 'main', normTypes),
      mk('norm_halo_fill_128', mNorm, 'norm_halo_fill', normTypes),
    ]);
    return { pNorm, pNormHalo };
  });
  const mkCls = () => (includeCls
    ? getCachedKernelGroup(cache, clsKey, () => {
        const mCls = createShaderModuleFast(device, 'cls_128', shaders.clsWgsl());
        return mk('classify_v4_128', mCls, 'main', clsTypes);
      })
    : Promise.resolve(null));
  const mkConv = () => getCachedKernelGroup(cache, convKey, async () => {
    const mod = createShaderModuleFast(device, 'conv_128', shaders.convWgsl());
    if (shaders.halfPassConv) {
      const [lo, hi, extLo, extHi, bgLo, bgHi] = await Promise.all([
        mk('conv_128_lo', mod, 'main_lo', convTypes),
        mk('conv_128_hi', mod, 'main_hi', convTypes),
        mk('conv_128_ext_lo', mod, 'main_ext_lo', convTypes),
        mk('conv_128_ext_hi', mod, 'main_ext_hi', convTypes),
        mk('conv_128_bg_lo', mod, 'main_bg_lo', convTypes),
        mk('conv_128_bg_hi', mod, 'main_bg_hi', convTypes),
      ]);
      return { lo, hi, extLo, extHi, bgLo, bgHi };
    }
    const [main, ext, bg] = await Promise.all([
      mk('conv_128', mod, 'main', convTypes),
      mk('conv_128_ext', mod, 'main_ext', convTypes),
      mk('conv_128_bg', mod, 'main_bg', convTypes),
    ]);
    return { main, ext, bg };
  });

  if (sequential) {
    for (const step of [mkInit, mkPrep, mkFlush, mkNorm, mkConv0, mkConv, mkCls]) {
      if (shouldAbort?.()) return null;
      await step();
    }
    return null;
  }

  const [pInit, pConv0, prepPair, pFlush, normPair, pCls, pConv] = await Promise.all([
    mkInit(),
    mkConv0(),
    mkPrep(),
    mkFlush(),
    mkNorm(),
    mkCls(),
    mkConv(),
  ]);
  return {
    pInit,
    pMomFin: prepPair.pMomFin,
    pPrepW: prepPair.pPrepW,
    pFlush,
    pNorm: normPair.pNorm,
    pNormHalo: normPair.pNormHalo,
    pCls,
    pConv0,
    pConv,
  };
}

async function getNetPipesStd(
  device, d, packed, hasF16, subgroupMode, splitHalves, probCfg, shaders,
  { includeCls = true, sequential = false, shouldAbort = null } = {}
) {
  const cache = getDeviceMap(netPipeCache, device);
  const f16Tag = hasF16 ? 1 : 0;
  const sgTag = subgroupMode || 'none';
  const splitTag = splitHalves ? 1 : 0;
  const uWeffTag = shaders.useUniformWeff ? 1 : 0;
  const chunkTag = shaders.chunkableStd ? 1 : 0;
  const mk = (label, mod, ep, types) => createLayoutAndPipe(device, label, mod, ep, types);

  const initTypes = ['storage', 'storage'];
  const conv0Types = ['read-only-storage', 'storage', 'storage', 'read-only-storage', 'read-only-storage', 'storage', 'storage', 'read-only-storage', 'uniform'];
  const prepTypes = ['read-only-storage', 'read-only-storage', 'storage', 'storage', 'storage', 'storage', 'read-only-storage', 'uniform'];
  const normTypes = ['storage', 'storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'uniform'];
  const convTypes = [
    'read-only-storage',
    'read-only-storage',
    'storage',
    'storage',
    'storage',
    'storage',
    shaders.useUniformWeff ? 'uniform' : 'read-only-storage',
    'read-only-storage',
    shaders.chunkableStd ? { type: 'uniform', hasDynamicOffset: true, minBindingSize: 32 } : 'uniform',
  ];
  const clsTypes = ['read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'storage', 'read-only-storage', 'uniform'];

  const initKey = `std|init|${d.cs}|${d.activation}|${f16Tag}|${splitTag}`;
  const conv0Key = `std|conv0|${d.cs}|${d.dilations[0]}|${d.norm}|${f16Tag}|${sgTag}|${splitTag}`;
  const prepKey = `std|prep|${d.chan}|${d.cs}|${d.activation}|${d.norm}|${f16Tag}|${splitTag}`;
  const normKey = `std|norm|${d.cs}|${d.activation}|${d.norm}|${f16Tag}|${splitTag}`;
  const convKey = `std|conv|${d.chan}|${d.cs}|${d.activation}|${d.norm}|${uWeffTag}|${f16Tag}|${sgTag}|${splitTag}${chunkTag ? '|chk1' : ''}`;
  const clsKey = `std|cls|${d.chan}|${d.cs}|${d.nclass}|${packed?.clsK4 ?? 0}|${d.activation}|${d.norm}|${f16Tag}|${splitTag}|${getProbCacheKey(probCfg)}`;

  const mkInit = () => getCachedKernelGroup(cache, initKey, () => {
    const mInit = createShaderModuleFast(device, 'init_act8', shaders.initActWgsl());
    return mk('init_act8', mInit, 'main', initTypes);
  });
  const mkConv0 = () => getCachedKernelGroup(cache, conv0Key, async () => {
    const mConv0 = createShaderModuleFast(device, 'conv0', shaders.conv0Wgsl());
    const list = await Promise.all(
      shaders.halfPass0
        ? [
            mk('conv0_lo', mConv0, 'main_lo', conv0Types),
            mk('conv0_hi', mConv0, 'main_hi', conv0Types),
            mk('conv0_bg_lo', mConv0, 'main_bg_lo', conv0Types),
            mk('conv0_bg_hi', mConv0, 'main_bg_hi', conv0Types),
          ]
        : [
            mk('conv0', mConv0, 'main', conv0Types),
            mk('conv0_bg', mConv0, 'main_bg', conv0Types),
          ]
    );
    return shaders.halfPass0
      ? { lo: list[0], hi: list[1], bgLo: list[2], bgHi: list[3] }
      : { main: list[0], bg: list[1] };
  });
  const mkPrep = () => getCachedKernelGroup(cache, prepKey, async () => {
    const mPrep = createShaderModuleFast(device, 'prep', shaders.prepWgsl());
    const [pMomFin, pPrepW] = await Promise.all([
      mk('moments_finish', mPrep, 'moments_finish', prepTypes),
      mk('prep_weff', mPrep, 'prep_weff', prepTypes),
    ]);
    return { pMomFin, pPrepW };
  });
  const mkNorm = () => getCachedKernelGroup(cache, normKey, async () => {
    const mNorm = createShaderModuleFast(device, 'norm', shaders.normWgsl());
    const [pNorm, pNormHalo] = await Promise.all([
      mk('norm_quant8', mNorm, 'main', normTypes),
      mk('norm_halo_fill', mNorm, 'norm_halo_fill', normTypes),
    ]);
    return { pNorm, pNormHalo };
  });
  const mkCls = () => (includeCls
    ? getCachedKernelGroup(cache, clsKey, () => {
        const mCls = createShaderModuleFast(device, 'cls', shaders.clsWgsl());
        return mk('classify_v4', mCls, 'main', clsTypes);
      })
    : Promise.resolve(null));
  const mkConv = () => getCachedKernelGroup(cache, convKey, async () => {
    const mod = createShaderModuleFast(device, 'conv', shaders.convWgsl());
    if (shaders.halfPassConv) {
      const [lo, hi, extLo, extHi] = await Promise.all([
        mk('conv_lo', mod, 'main_lo', convTypes),
        mk('conv_hi', mod, 'main_hi', convTypes),
        mk('conv_ext_lo', mod, 'main_ext_lo', convTypes),
        mk('conv_ext_hi', mod, 'main_ext_hi', convTypes),
      ]);
      return { lo, hi, extLo, extHi };
    }
    const [main, ext] = await Promise.all([
      mk('conv', mod, 'main', convTypes),
      mk('conv_ext', mod, 'main_ext', convTypes),
    ]);
    return { main, ext };
  });

  if (sequential) {
    for (const step of [mkInit, mkPrep, mkNorm, mkConv0, mkConv, mkCls]) {
      if (shouldAbort?.()) return null;
      await step();
    }
    return null;
  }

  const [pInit, pConv0, prepPair, normPair, pCls, pConv] = await Promise.all([
    mkInit(),
    mkConv0(),
    mkPrep(),
    mkNorm(),
    mkCls(),
    mkConv(),
  ]);
  return {
    pInit,
    pMomFin: prepPair.pMomFin,
    pPrepW: prepPair.pPrepW,
    pNorm: normPair.pNorm,
    pNormHalo: normPair.pNormHalo,
    pCls,
    pConv0,
    pConv,
  };
}

/**
 * Convert input volume [Z, Y, X] (`256^3`) into X-padded `[Z, Y, 32+256+32]`
 * buffer while computing the exact non-zero `(z, y)` row mask `headRow`.
 */
function preparePaddedInputAndHeadMask(src, padOut, headRow, hasF16, detectBbox) {
  headRow.fill(0);
  const hasBgZero = detectBbox && src[0] === 0 && src[src.length - 1] === 0;
  let activeRows = 0;
  let sIdx = 0;
  if (!hasBgZero) {
    if (hasF16) {
      for (let z = 0; z < DIM; z++) {
        const zBase = z * DIM * ROW_SCALARS_PAD;
        for (let y = 0; y < DIM; y++) {
          let dst = zBase + y * ROW_SCALARS_PAD + 32;
          for (let x = 0; x < DIM; x++, sIdx++, dst++) {
            const v = src[sIdx];
            padOut[dst] = v === 0 ? 0 : f32ToF16Bits(v);
          }
        }
      }
    } else {
      for (let z = 0; z < DIM; z++) {
        const zBase = z * DIM * ROW_SCALARS_PAD;
        for (let y = 0; y < DIM; y++) {
          const rowStart = z * DIM * DIM + y * DIM;
          padOut.set(src.subarray(rowStart, rowStart + DIM), zBase + y * ROW_SCALARS_PAD + 32);
        }
      }
    }
    return { hasBgSkip: false };
  }

  for (let z = 0; z < DIM; z++) {
    const zBase = z * DIM * ROW_SCALARS_PAD;
    for (let y = 0; y < DIM; y++) {
      let rowActive = false;
      let dst = zBase + y * ROW_SCALARS_PAD + 32;
      for (let x = 0; x < DIM; x++, sIdx++, dst++) {
        const v = src[sIdx];
        if (v !== 0) {
          padOut[dst] = hasF16 ? f32ToF16Bits(v) : v;
          rowActive = true;
        } else {
          padOut[dst] = 0;
        }
      }
      if (rowActive) {
        headRow[z * DIM + y] = 1;
        activeRows++;
      }
    }
  }
  if (activeRows === 0 || activeRows >= 60000) return { hasBgSkip: false };
  return { hasBgSkip: true };
}

function stencilExpandRows(rowMask, D) {
  const out = new Uint8Array(DIM * DIM);
  for (let z = 0; z < DIM; z++) {
    const zOff = z * DIM;
    const z0 = z - D;
    const z2 = z + D;
    for (let y = 0; y < DIM; y++) {
      if (!rowMask[zOff + y]) continue;
      const y0 = y - D;
      const y2 = y + D;
      if (z0 >= 0) {
        const b = z0 * DIM;
        if (y0 >= 0) out[b + y0] = 1;
        out[b + y] = 1;
        if (y2 < DIM) out[b + y2] = 1;
      }
      if (y0 >= 0) out[zOff + y0] = 1;
      out[zOff + y] = 1;
      if (y2 < DIM) out[zOff + y2] = 1;
      if (z2 >= 0 && z2 < DIM) {
        const b = z2 * DIM;
        if (y0 >= 0) out[b + y0] = 1;
        out[b + y] = 1;
        if (y2 < DIM) out[b + y2] = 1;
      }
    }
  }
  return out;
}

function dilateBoxRows(rowMask, R) {
  if (R <= 0) return rowMask.slice();
  const tmp = new Uint8Array(DIM * DIM);
  const out = new Uint8Array(DIM * DIM);
  const pref = new Int32Array(DIM + 1);
  for (let z = 0; z < DIM; z++) {
    const b = z * DIM;
    for (let y = 0; y < DIM; y++) pref[y + 1] = pref[y] + rowMask[b + y];
    for (let y = 0; y < DIM; y++) {
      if (pref[Math.min(DIM - 1, y + R) + 1] - pref[Math.max(0, y - R)] > 0) tmp[b + y] = 1;
    }
  }
  for (let y = 0; y < DIM; y++) {
    for (let z = 0; z < DIM; z++) pref[z + 1] = pref[z] + tmp[z * DIM + y];
    for (let z = 0; z < DIM; z++) {
      if (pref[Math.min(DIM - 1, z + R) + 1] - pref[Math.max(0, z - R)] > 0) out[z * DIM + y] = 1;
    }
  }
  return out;
}

function rowsToStripMask(rm) {
  const sm = new Uint8Array(TOTAL_STRIPS);
  for (let z = 0; z < DIM; z++) {
    const rb = z * DIM;
    const sb = z * 64;
    for (let yw = 0; yw < 64; yw++) {
      const y = rb + (yw << 2);
      if (rm[y] | rm[y + 1] | rm[y + 2] | rm[y + 3]) sm[sb + yw] = 1;
    }
  }
  return sm;
}

function stripMaskToRows(sm) {
  const rm = new Uint8Array(DIM * DIM);
  for (let z = 0; z < DIM; z++) {
    const rb = z * DIM;
    const sb = z * 64;
    for (let yw = 0; yw < 64; yw++) {
      if (sm[sb + yw]) {
        const y = rb + (yw << 2);
        rm[y] = 1;
        rm[y + 1] = 1;
        rm[y + 2] = 1;
        rm[y + 3] = 1;
      }
    }
  }
  return rm;
}

function stripMaskToList(sm) {
  let n = 0;
  for (let i = 0; i < TOTAL_STRIPS; i++) n += sm[i];
  const arr = new Uint32Array(n);
  let k = 0;
  for (let z = 0; z < DIM; z++) {
    const sb = z * 64;
    for (let yw = 0; yw < 64; yw++) {
      if (sm[sb + yw]) arr[k++] = (z << 8) | yw;
    }
  }
  return arr;
}

function countMask(m) {
  let s = 0;
  for (let i = 0; i < m.length; i++) s += m[i];
  return s;
}

function buildKorobovMask(nPts) {
  const m = new Uint8Array(TOTAL_STRIPS);
  if (nPts === 1024) {
    for (let tz = 0; tz < 32; tz++) {
      for (let ty = 0; ty < 32; ty++) {
        const z = tz * 8 + ((tz * 3 + ty * 5) & 7);
        const yw = ty * 2 + ((tz + ty) & 1);
        m[z * 64 + yw] = 1;
      }
    }
  } else if (nPts === 512) {
    for (let tz = 0; tz < 32; tz++) {
      for (let ty = 0; ty < 16; ty++) {
        const z = tz * 8 + ((tz * 3 + ty * 5) & 7);
        const yw = ty * 4 + ((tz + ty * 3) & 3);
        m[z * 64 + yw] = 1;
      }
    }
  } else {
    for (let tz = 0; tz < 16; tz++) {
      for (let ty = 0; ty < 16; ty++) {
        const z = tz * 16 + ((tz * 7 + ty * 3) & 15);
        const yw = ty * 4 + ((tz + ty * 3) & 3);
        m[z * 64 + yw] = 1;
      }
    }
  }
  return m;
}

/**
 * Compute exact per-layer 2D-contour `R_pure` strip schedule and backward
 * unsnapped support-cone schedule with decoupled 2D Korobov exterior sampling.
 */
function computeConeSchedule(headRow, info, dilations, canConeSkip) {
  const numConvs = dilations.length;
  const makeFull = () => ({
    isFull: true,
    mode: 'full',
    writtenMask: null,
    computedMask: null,
    mainStrips: null,
    extStrips: null,
    nMomExt: 0,
    normStrips: null,
    haloRows: null,
    bgStrip: null,
    extWeight: 0,
  });

  if (!canConeSkip || !info.hasBgSkip) {
    return {
      clsSkipped: false,
      clsStrips: null,
      layers: Array.from({ length: numConvs }, makeFull),
    };
  }

  const clsStripMask = rowsToStripMask(dilateBoxRows(headRow, 3));
  const clsSkipped = countMask(clsStripMask) < 15800;
  const clsStrips = clsSkipped ? stripMaskToList(clsStripMask) : null;

  const pureStripMasks = new Array(numConvs);
  let prevNonPure = null;
  for (let li = 0; li < numConvs; li++) {
    const D = dilations[li];
    const nonPure = li === 0 ? stencilExpandRows(headRow, D) : stencilExpandRows(prevNonPure, D);
    if (li > 0) {
      for (let z = 0; z < DIM; z++) {
        const zb = z < D || z >= DIM - D;
        const r = z * DIM;
        for (let y = 0; y < DIM; y++) {
          if (zb || y < D || y >= DIM - D) nonPure[r + y] = 1;
        }
      }
    }
    prevNonPure = nonPure;
    const pm = new Uint8Array(TOTAL_STRIPS);
    for (let z = 0; z < DIM; z++) {
      const rb = z * DIM;
      const sb = z * 64;
      for (let yw = 0; yw < 64; yw++) {
        const y = rb + (yw << 2);
        if (!(nonPure[y] | nonPure[y + 1] | nonPure[y + 2] | nonPure[y + 3])) pm[sb + yw] = 1;
      }
    }
    pureStripMasks[li] = pm;
  }

  const bwdStripMasks = new Array(numConvs);
  bwdStripMasks[numConvs - 1] = clsStripMask;
  for (let li = numConvs - 2; li >= 0; li--) {
    bwdStripMasks[li] = rowsToStripMask(stencilExpandRows(stripMaskToRows(bwdStripMasks[li + 1]), dilations[li + 1]));
  }

  const canBwd = clsSkipped &&
    numConvs >= 4 &&
    dilations[numConvs - 1] <= 2 &&
    dilations[numConvs - 2] <= 4 &&
    dilations[numConvs - 3] <= 6;
  const bwdFloor = Math.max(1, numConvs - 3);
  const bwdExtMasks = new Array(numConvs).fill(null);
  const bwdWriteExtMasks = new Array(numConvs).fill(null);
  const bwdLattices = new Array(numConvs).fill(null);

  if (canBwd) {
    const extFrac = (TOTAL_STRIPS - countMask(bwdStripMasks[numConvs - 1])) / TOTAL_STRIPS;
    const seedGrid = extFrac >= 0.52 ? 256 : 512;
    const entryMomGrid = 1024;
    const seedLat = buildKorobovMask(seedGrid);
    const entryMomLat = buildKorobovMask(entryMomGrid);

    const bmLast = bwdStripMasks[numConvs - 1];
    const emLast = new Uint8Array(TOTAL_STRIPS);
    let cntLast = 0;
    for (let i = 0; i < TOTAL_STRIPS; i++) {
      if (seedLat[i] && !bmLast[i]) {
        emLast[i] = 1;
        cntLast++;
      }
    }
    if (cntLast > 0 && cntLast <= MAX_EXT_STRIPS && countMask(bmLast) + cntLast <= 15360) {
      bwdExtMasks[numConvs - 1] = emLast;
      bwdWriteExtMasks[numConvs - 1] = new Uint8Array(TOTAL_STRIPS);
      bwdLattices[numConvs - 1] = seedLat;

      for (let li = numConvs - 2; li >= bwdFloor; li--) {
        const unionNext = new Uint8Array(TOTAL_STRIPS);
        const bmNext = bwdStripMasks[li + 1];
        const emNext = bwdExtMasks[li + 1];
        for (let i = 0; i < TOTAL_STRIPS; i++) unionNext[i] = bmNext[i] | emNext[i];

        const needSm = rowsToStripMask(stencilExpandRows(stripMaskToRows(unionNext), dilations[li + 1]));
        const writeEm = new Uint8Array(TOTAL_STRIPS);
        const bm = bwdStripMasks[li];
        for (let i = 0; i < TOTAL_STRIPS; i++) if (needSm[i] && !bm[i]) writeEm[i] = 1;

        const lat = li === bwdFloor ? entryMomLat : seedLat;
        const em = new Uint8Array(TOTAL_STRIPS);
        let cnt = 0;
        let momCnt = 0;
        for (let i = 0; i < TOTAL_STRIPS; i++) {
          if ((writeEm[i] || lat[i]) && !bm[i]) {
            em[i] = 1;
            cnt++;
            if (lat[i]) momCnt++;
          }
        }
        if (momCnt === 0 || cnt > MAX_EXT_STRIPS || countMask(bm) + cnt > 15360) {
          const liUp = li + 1;
          const bmUp = bwdStripMasks[liUp];
          const wUp = bwdWriteExtMasks[liUp];
          const emUp = new Uint8Array(TOTAL_STRIPS);
          let cntUp = 0;
          for (let i = 0; i < TOTAL_STRIPS; i++) {
            if ((wUp[i] || entryMomLat[i]) && !bmUp[i]) {
              emUp[i] = 1;
              cntUp++;
            }
          }
          if (cntUp <= MAX_EXT_STRIPS && countMask(bmUp) + cntUp <= 15360) {
            bwdExtMasks[liUp] = emUp;
            bwdLattices[liUp] = entryMomLat;
          }
          break;
        }
        bwdWriteExtMasks[li] = writeEm;
        bwdExtMasks[li] = em;
        bwdLattices[li] = lat;
      }
    }
  }

  const layers = new Array(numConvs);
  for (let li = 0; li < numConvs; li++) {
    const pureCnt = countMask(pureStripMasks[li]);
    const rpureWork = TOTAL_STRIPS - pureCnt;
    const hasBwd = bwdExtMasks[li] !== null;
    const bwdWork = hasBwd ? countMask(bwdStripMasks[li]) + countMask(bwdExtMasks[li]) : Infinity;

    if (pureCnt >= 512 && rpureWork <= bwdWork) {
      const mm = new Uint8Array(TOTAL_STRIPS);
      let bgIdx = -1;
      for (let i = 0; i < TOTAL_STRIPS; i++) {
        if (pureStripMasks[li][i]) {
          if (bgIdx < 0) bgIdx = i;
        } else {
          mm[i] = 1;
        }
      }
      const computedMask = mm.slice();
      computedMask[bgIdx] = 1;
      const bgStrip = { z: bgIdx >>> 6, yWg: bgIdx & 63, packed: ((bgIdx >>> 6) << 8) | (bgIdx & 63) };
      const mainStrips = stripMaskToList(mm);
      layers[li] = {
        isFull: false,
        mode: 'rpure',
        writtenMask: mm,
        computedMask,
        mainStrips,
        extStrips: li === 0 ? null : new Uint32Array([bgStrip.packed]),
        nMomExt: li === 0 ? 0 : 1,
        normStrips: mainStrips,
        haloRows: null,
        bgStrip,
        extWeight: pureCnt,
      };
    } else if (hasBwd && bwdWork <= 15360) {
      const bm = bwdStripMasks[li];
      const em = bwdExtMasks[li];
      const wEm = bwdWriteExtMasks[li];
      const lat = bwdLattices[li];
      const mainStrips = stripMaskToList(bm);
      const uList = [];
      const supList = [];
      for (let z = 0; z < DIM; z++) {
        const sb = z * 64;
        for (let yw = 0; yw < 64; yw++) {
          const i = sb + yw;
          if (!em[i]) continue;
          const pk = (z << 8) | yw;
          if (lat[i]) uList.push(pk);
          else supList.push(pk);
        }
      }
      const nMomExt = uList.length;
      if (nMomExt === 0) {
        layers[li] = makeFull();
        continue;
      }
      const extStrips = new Uint32Array(uList.length + supList.length);
      extStrips.set(uList, 0);
      extStrips.set(supList, uList.length);
      const writtenMask = new Uint8Array(TOTAL_STRIPS);
      const computedMask = new Uint8Array(TOTAL_STRIPS);
      for (let i = 0; i < TOTAL_STRIPS; i++) {
        writtenMask[i] = bm[i] | wEm[i];
        computedMask[i] = bm[i] | em[i];
      }
      layers[li] = {
        isFull: false,
        mode: 'bwd',
        writtenMask,
        computedMask,
        mainStrips,
        extStrips,
        nMomExt,
        normStrips: li + 1 < numConvs ? stripMaskToList(writtenMask) : null,
        haloRows: null,
        bgStrip: null,
        extWeight: (TOTAL_STRIPS - mainStrips.length) / nMomExt,
      };
    } else {
      layers[li] = makeFull();
    }
  }

  for (let li = numConvs - 2; li >= 0; li--) {
    if (layers[li].mode === 'bwd' && layers[li + 1].mode !== 'bwd') {
      layers[li] = makeFull();
    }
  }

  for (let li = 0; li < numConvs - 1; li++) {
    const L = layers[li];
    if (L.mode !== 'rpure') continue;
    const Lnext = layers[li + 1];
    const nextReadRows = Lnext.isFull
      ? new Uint8Array(DIM * DIM).fill(1)
      : stencilExpandRows(stripMaskToRows(Lnext.computedMask), dilations[li + 1]);
    const writtenRows = stripMaskToRows(L.writtenMask);
    const list = [];
    for (let z = 0; z < DIM; z++) {
      const rb = z * DIM;
      for (let y = 0; y < DIM; y++) {
        if (nextReadRows[rb + y] && !writtenRows[rb + y]) list.push((z << 8) | y);
      }
    }
    if (list.length > 0) L.haloRows = new Uint32Array(list);
  }

  return { clsSkipped, clsStrips, layers };
}

/**
 * Pack weights into V4 ZYCX-aligned layout:
 *   - Layer 0: [tap = 0..26, g = 0..OC4-1] of vec4
 *   - Hidden 1..L-1: [tap_yz = 0..8, ic = 0..CS-1, dx = 0..2, g = 0..OC4-1] of vec4
 *   - Classifier: [c = 0..CS-1, k4 = 0..clsK4-1] of vec4
 */
function packWeightsV4(desc, d) {
  const CHAN = d.chan;
  const CS = d.cs;
  const OC4 = CS / 4;
  const NCLASS = d.nclass;
  const clsK4 = Math.ceil(NCLASS / 4);
  const { convs, affines, classifier } = desc;
  const numConvs = convs.length;

  const w0Vec4s = 27 * OC4;
  const hiddenVec4PerLayer = 9 * CS * 3 * OC4;
  const clsVec4s = CS * clsK4;
  const totalF32 = (w0Vec4s + (numConvs - 1) * hiddenVec4PerLayer + clsVec4s) * 4;
  const wF32 = new Float32Array(totalF32);

  // Per-layer per-channel metadata (`4 * CS` floats per layer):
  //   [0..CS-1]      : gamma
  //   [CS..2*CS-1]   : beta
  //   [2*CS..3*CS-1] : eps_tilde = eps / s^2
  //   [3*CS..4*CS-1] : convBias (only used when norm === 'none')
  // Followed by clsBias (`clsK4 * 4` floats, padded with -1e30)
  const metaStride = 4 * CS;
  const clsBiasOff = numConvs * metaStride;
  const qmetaF32 = new Float32Array(clsBiasOff + clsK4 * 4);

  const layerScale = (li, oc, inC) => {
    if (d.norm !== 'gn' || oc >= CHAN) return 1.0;
    const c = convs[li];
    const stride = inC * 27;
    const base = oc * stride;
    let l1 = 0;
    for (let i = 0; i < stride; i++) l1 += Math.abs(c.w[base + i]);
    return Math.max(l1 / 16.0, 1e-6);
  };

  // Layer 0: [tap=0..26, oc=0..CS-1]
  for (let oc = 0; oc < convs[0].outC; oc++) {
    const s = layerScale(0, oc, convs[0].inC);
    const invS = 1.0 / s;
    for (let tap = 0; tap < 27; tap++) {
      wF32[tap * CS + oc] = convs[0].w[oc * 27 + tap] * invS;
    }
    qmetaF32[2 * CS + oc] = d.eps / (s * s);
    if (convs[0].bias) qmetaF32[3 * CS + oc] = convs[0].bias[oc];
  }
  for (let oc = convs[0].outC; oc < CS; oc++) {
    qmetaF32[2 * CS + oc] = d.eps;
  }

  // Hidden layers 1..numConvs-1: [tap_yz=0..8, ic=0..CS-1, dx=0..2, g=0..OC4-1]
  for (let li = 1; li < numConvs; li++) {
    const c = convs[li];
    const base = (w0Vec4s + (li - 1) * hiddenVec4PerLayer) * 4;
    const m = li * metaStride;
    for (let oc = 0; oc < c.outC; oc++) {
      const s = layerScale(li, oc, c.inC);
      const invS = 1.0 / s;
      const g = oc >>> 2;
      const lane = oc & 3;
      for (let tapYz = 0; tapYz < 9; tapYz++) {
        for (let ic = 0; ic < c.inC; ic++) {
          for (let dx = 0; dx < 3; dx++) {
            const tap = tapYz * 3 + dx;
            const dstIdx = base + (((tapYz * CS + ic) * 3 + dx) * OC4 + g) * 4 + lane;
            wF32[dstIdx] = c.w[(oc * c.inC + ic) * 27 + tap] * invS;
          }
        }
      }
      qmetaF32[m + 2 * CS + oc] = d.eps / (s * s);
      if (c.bias) qmetaF32[m + 3 * CS + oc] = c.bias[oc];
    }
    for (let oc = c.outC; oc < CS; oc++) {
      qmetaF32[m + 2 * CS + oc] = d.eps;
    }
  }

  // Affines
  for (let li = 0; li < numConvs; li++) {
    const m = li * metaStride;
    const aff = affines[li];
    for (let oc = 0; oc < CHAN; oc++) {
      if (d.norm === 'gn') {
        qmetaF32[m + oc] = aff?.scale ? aff.scale[oc] : 1.0;
        qmetaF32[m + CS + oc] = aff?.bias ? aff.bias[oc] : 0.0;
      } else {
        qmetaF32[m + oc] = 1.0;
        qmetaF32[m + CS + oc] = 0.0;
      }
    }
  }

  // Classifier: [c=0..CS-1, k=0..clsK4*4-1]
  const clsVec4Off = w0Vec4s + (numConvs - 1) * hiddenVec4PerLayer;
  const clsBase = clsVec4Off * 4;
  for (let c = 0; c < CHAN; c++) {
    for (let k = 0; k < NCLASS; k++) {
      wF32[clsBase + c * clsK4 * 4 + k] = classifier.w[k * classifier.inC + c];
    }
  }
  for (let k = 0; k < clsK4 * 4; k++) {
    qmetaF32[clsBiasOff + k] = k < NCLASS ? (classifier.bias ? classifier.bias[k] : 0.0) : -1.0e30;
  }

  return {
    wF32,
    wF16: toF16Array(wF32),
    qmetaF32,
    w0Vec4s,
    hiddenVec4PerLayer,
    clsVec4Off,
    clsBiasOff,
    metaStride,
    clsK4,
  };
}

function getActivationWgsl(activation) {
  if (activation === 'gelu_tanh') {
    return `fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;
  }
  if (activation === 'relu') {
    return `fn act(x : f32) -> f32 { return max(x, 0.0); }`;
  }
  if (activation === 'elu') {
    return `fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }`;
  }
  throw new Error(`meshnet_fast_v4: unsupported activation '${activation}'`);
}

function getQuantConstants(activation) {
  if (activation === 'gelu_tanh') {
    return {
      uZeroInt: 7,
      uZeroFloat: 7.0 / 255.0,
      uZeroWord: 0x07070707,
      sterbenzSub: '1.02734375h',
      zeroBin: 7.0,
    };
  }
  if (activation === 'relu') {
    return {
      uZeroInt: 0,
      uZeroFloat: 0.0,
      uZeroWord: 0x00000000,
      sterbenzSub: '1.0h',
      zeroBin: 0.0,
    };
  }
  return {
    uZeroInt: 32,
    uZeroFloat: 32.0 / 255.0,
    uZeroWord: 0x20202020,
    sterbenzSub: '1.125h',
    zeroBin: 32.0,
  };
}

function buildClassifierLoopsWgsl({
  chan, clsK4, nclass, V4, suf, readBiasStmt, biasExpr, probCfg,
}) {
  const matmulBlock = `    var acc0 = ${V4}(0.0${suf});
    var acc1 = ${V4}(0.0${suf});
    var acc2 = ${V4}(0.0${suf});
    var acc3 = ${V4}(0.0${suf});
    for (var c : u32 = 0u; c < ${chan}u; c = c + 1u) {
      let wv = w16_4[w_cls + c * ${clsK4}u + k4];
      let f = feat[c];
      acc0 = fma(f, ${V4}(wv.x), acc0);
      acc1 = fma(f, ${V4}(wv.y), acc1);
      acc2 = fma(f, ${V4}(wv.z), acc2);
      acc3 = fma(f, ${V4}(wv.w), acc3);
    }
    let k_base = k4 * 4u;
${readBiasStmt}`;

  if (!probCfg) {
    return `  var best_v = vec4<f32>(-1.0e29);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < ${clsK4}u; k4 = k4 + 1u) {
${matmulBlock}
${rep(4, (j) => `    let l${j} = vec4<f32>(acc${j}) + vec4<f32>(${biasExpr(j)});
    let m${j} = l${j} > best_v;
    best_v = select(best_v, l${j}, m${j});
    best_k = select(best_k, vec4<u32>(k_base + ${j}u), m${j});\n`)}  }

  labels8[row_idx * ${X4_VALID}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;
  }

  const invTempExpr = `f32(${(1.0 / Math.max(probCfg.temperature, 1e-6)).toExponential(8)})`;
  const invSupTempExpr = `f32(${(1.0 / Math.max(probCfg.supportTemperature, 1e-6)).toExponential(8)})`;
  const sameTemp = probCfg.temperature === probCfg.supportTemperature;

  return `  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${clsK4}u; k4 = k4 + 1u) {
${matmulBlock}
${rep(4, (j) => `    if (k_base + ${j}u < ${nclass}u) {
      max_v = max(max_v, vec4<f32>(acc${j}) + vec4<f32>(${biasExpr(j)}));
    }\n`)}  }

  var denom = vec4<f32>(0.0);
  var sup_denom = vec4<f32>(0.0);
  var bg_w = vec4<f32>(0.0);
  var gm_num = vec4<f32>(0.0);
  var wm_num = vec4<f32>(0.0);
  var csf_num = vec4<f32>(0.0);
  for (var k4 : u32 = 0u; k4 < ${clsK4}u; k4 = k4 + 1u) {
${matmulBlock}
${rep(4, (j) => `    let k${j} = k_base + ${j}u;
    if (k${j} < ${nclass}u) {
      let l${j} = vec4<f32>(acc${j}) + vec4<f32>(${biasExpr(j)});
      let v${j} = exp(clamp((l${j} - max_v) * ${invTempExpr}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${j} = ${sameTemp ? `v${j}` : `exp(clamp((l${j} - max_v) * ${invSupTempExpr}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${j};
      sup_denom = sup_denom + s${j};
      if (k${j} == 0u) { bg_w = s${j}; }
      let bit${j} = 1u << k${j};
      if ((${probCfg.grayMask}u & bit${j}) != 0u) { gm_num = gm_num + v${j}; }
      if ((${probCfg.whiteMask}u & bit${j}) != 0u) { wm_num = wm_num + v${j}; }
      if ((${probCfg.csfMask}u & bit${j}) != 0u) { csf_num = csf_num + v${j}; }
    }\n`)}  }

  let inv_den = vec4<f32>(1.0) / max(denom, vec4<f32>(1.0e-20));
  let gm = clamp(gm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let wm = clamp(wm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let csf = clamp(csf_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let sup = clamp(vec4<f32>(1.0) - bg_w / max(sup_denom, vec4<f32>(1.0e-20)), vec4<f32>(0.0), vec4<f32>(1.0));
  let vox_base = row_idx * ${DIM}u + x4 * 4u;
  if (cp.pad0 == 0u) {
    labels8[vox_base]      = pack2x16unorm(vec2<f32>(gm.x, wm.x));
    labels8[vox_base + 1u] = pack2x16unorm(vec2<f32>(gm.y, wm.y));
    labels8[vox_base + 2u] = pack2x16unorm(vec2<f32>(gm.z, wm.z));
    labels8[vox_base + 3u] = pack2x16unorm(vec2<f32>(gm.w, wm.w));
  } else {
    labels8[vox_base]      = pack2x16unorm(vec2<f32>(csf.x, sup.x));
    labels8[vox_base + 1u] = pack2x16unorm(vec2<f32>(csf.y, sup.y));
    labels8[vox_base + 2u] = pack2x16unorm(vec2<f32>(csf.z, sup.z));
    labels8[vox_base + 3u] = pack2x16unorm(vec2<f32>(csf.w, sup.w));
  }`;
}

function createGpuIoController({
  device,
  hasF16,
  nvox,
  outBufBytes,
  inpBuf,
  act8_0,
  labels8Buf,
  readbackBuf,
  pInit,
  bgInit,
  pCls,
  bgCls,
  clsUbo,
  packed,
  modelEntry,
  probCfg,
  canGpuProb,
  probSlots,
  ownedBuffers,
  mkBuf,
}) {
  let actDirty = false;
  let inpHalosInitialized = false;
  let inpHalosDirty = false;
  let disposed = false;
  const yzActive = new Uint8Array(DIM * DIM);

  let prepU8Promise = null;
  let prepF32Promise = null;
  let transposeU8Promise = null;
  let probGpuPromise = null;

  const mkBgEntries = (bgl, entries) =>
    device.createBindGroup({
      layout: bgl,
      entries: entries.map((resource, binding) => ({
        binding,
        resource: resource && resource.buffer ? resource : { buffer: resource },
      })),
    });

  function ensurePrepU8() {
    if (!prepU8Promise) {
      const key = hasF16 ? 'prep_in_u8_f16' : 'prep_in_u8_f32';
      prepU8Promise = (async () => {
        const { bgl, pipe } = await getIoPipe(
          device,
          key,
          () => buildPrepInWgsl(true, hasF16),
          'main',
          ['read-only-storage', 'storage', 'uniform']
        );
        if (disposed) return null;
        const ubo = mkBuf(256 * 4, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST);
        const lutF32 = new Float32Array(256);
        const bg = mkBgEntries(bgl, [{ buffer: labels8Buf, offset: 0, size: nvox }, inpBuf, ubo]);
        return { pipe, ubo, lutF32, bg };
      })().catch((err) => {
        prepU8Promise = null;
        throw err;
      });
    }
    return prepU8Promise;
  }

  function ensurePrepF32() {
    if (!prepF32Promise) {
      const key = hasF16 ? 'prep_in_f32_f16' : 'prep_in_f32_f32';
      prepF32Promise = (async () => {
        const { bgl, pipe } = await getIoPipe(
          device,
          key,
          () => buildPrepInWgsl(false, hasF16),
          'main',
          ['read-only-storage', 'storage', 'uniform']
        );
        if (disposed) return null;
        const ubo = mkBuf(16, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST);
        const f32Tmp = new Float32Array(4);
        const bgLabels = outBufBytes >= nvox * 4
          ? mkBgEntries(bgl, [{ buffer: labels8Buf, offset: 0, size: nvox * 4 }, inpBuf, ubo])
          : null;
        const bgAct0 = act8_0.size >= nvox * 4
          ? mkBgEntries(bgl, [{ buffer: act8_0, offset: 0, size: nvox * 4 }, inpBuf, ubo])
          : null;
        return { pipe, ubo, f32Tmp, bgLabels, bgAct0 };
      })().catch((err) => {
        prepF32Promise = null;
        throw err;
      });
    }
    return prepF32Promise;
  }

  function ensureTransposeU8() {
    if (!transposeU8Promise) {
      transposeU8Promise = (async () => {
        const { bgl, pipe } = await getIoPipe(
          device,
          'transpose_u8_v4',
          buildTransposeU8Wgsl,
          'main',
          ['read-only-storage', 'storage']
        );
        if (disposed) return null;
        const bg = mkBgEntries(bgl, [
          { buffer: labels8Buf, offset: 0, size: nvox },
          { buffer: inpBuf, offset: 0, size: nvox },
        ]);
        return { pipe, bg };
      })().catch((err) => {
        transposeU8Promise = null;
        throw err;
      });
    }
    return transposeU8Promise;
  }

  function ensureProbGpu() {
    if (!probGpuPromise) {
      probGpuPromise = (async () => {
        const [pUnpack, pBlurAxis, pBlurZGate, pTransposeF32] = await Promise.all([
          getIoPipe(device, 'prob_unpack_two', buildProbUnpackTwoWgsl, 'main', ['read-only-storage', 'storage', 'storage']),
          getIoPipe(device, 'prob_blur_axis', buildProbBlurWgsl, 'blur_axis', ['read-only-storage', 'storage', 'read-only-storage', 'uniform']),
          getIoPipe(device, 'prob_blur_z_gate', buildProbBlurWgsl, 'blur_z_gate', ['read-only-storage', 'storage', 'read-only-storage', 'uniform']),
          getIoPipe(device, 'transpose_f32', buildTransposeF32Wgsl, 'main', ['read-only-storage', 'storage']),
        ]);
        if (disposed) return null;
        const UCD = GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST;
        const uboBytes = (4 + 32) * 4;
        const uboX = mkBuf(uboBytes, UCD);
        const uboY = mkBuf(uboBytes, UCD);
        const uboZ = mkBuf(uboBytes, UCD);
        const s64 = (buf) => ({ buffer: buf, offset: 0, size: outBufBytes });
        const bgUnpack0 = mkBgEntries(pUnpack.bgl, [s64(probSlots.pass0HoldBuf), s64(probSlots.y0), s64(probSlots.y1)]);
        const bgUnpack1 = mkBgEntries(pUnpack.bgl, [s64(labels8Buf), s64(probSlots.b), s64(probSlots.sup)]);
        const tissues = [probSlots.y0, probSlots.y1, probSlots.b].map((tBuf) => ({
          buf: tBuf,
          bgBlurX: mkBgEntries(pBlurAxis.bgl, [s64(tBuf), s64(labels8Buf), s64(probSlots.sup), uboX]),
          bgBlurY: mkBgEntries(pBlurAxis.bgl, [s64(labels8Buf), s64(tBuf), s64(probSlots.sup), uboY]),
          bgBlurZ: mkBgEntries(pBlurZGate.bgl, [s64(tBuf), s64(labels8Buf), s64(probSlots.sup), uboZ]),
          bgTranspose: mkBgEntries(pTransposeF32.bgl, [s64(labels8Buf), s64(tBuf)]),
        }));
        return {
          pUnpack: pUnpack.pipe,
          pBlurAxis: pBlurAxis.pipe,
          pBlurZGate: pBlurZGate.pipe,
          pTransposeF32: pTransposeF32.pipe,
          bgUnpack0,
          bgUnpack1,
          tissues,
          uboX,
          uboY,
          uboZ,
          uboScratch: new ArrayBuffer(uboBytes),
          lastBlurKey: null,
        };
      })().catch((err) => {
        probGpuPromise = null;
        throw err;
      });
    }
    return probGpuPromise;
  }

  function warmupIoPipelines() {
    if (probCfg) {
      if (canGpuProb) ensureProbGpu().catch(() => {});
    } else {
      ensurePrepU8().catch(() => {});
      ensureTransposeU8().catch(() => {});
    }
  }

  function dispose() {
    disposed = true;
  }

  async function prepareInput({ volume, ioOpts, useCone, padInputHost, headRowHost, hasF16Flag }) {
    if (ioOpts?.gpuNativeInput) {
      const normOffset = ioOpts.normOffset ?? 0;
      const normRange = ioOpts.normRange || 1;
      const isU8 = volume instanceof Uint8Array || volume instanceof Uint8ClampedArray;
      const canStageF32 = outBufBytes >= nvox * 4 || act8_0.size >= nvox * 4;
      if (isU8) {
        const info = prepareHeadMaskFromNativeInput(volume, headRowHost, yzActive, normOffset, useCone);
        const st = await ensurePrepU8();
        for (let v = 0; v < 256; v++) {
          st.lutF32[v] = v === normOffset ? 0 : (v - normOffset) / normRange;
        }
        device.queue.writeBuffer(st.ubo, 0, st.lutF32);
        device.queue.writeBuffer(labels8Buf, 0, volume, 0, nvox);
        return {
          info,
          runPrePasses(enc, passCategories) {
            if (!inpHalosInitialized || inpHalosDirty) {
              enc.clearBuffer(inpBuf);
              inpHalosInitialized = true;
              inpHalosDirty = false;
            }
            const pass = enc.beginComputePass();
            pass.setPipeline(st.pipe);
            pass.setBindGroup(0, st.bg);
            pass.dispatchWorkgroups(8, DIM, 8);
            pass.end();
            passCategories.push('preprocess');
            if (actDirty) {
              const ip = enc.beginComputePass();
              ip.setPipeline(pInit.pipe);
              ip.setBindGroup(0, bgInit);
              ip.dispatchWorkgroups(1, DIM, DIM);
              ip.end();
              passCategories.push('preprocess');
              actDirty = false;
            }
          },
        };
      }
      if (canStageF32) {
        const info = prepareHeadMaskFromNativeInput(volume, headRowHost, yzActive, normOffset, useCone);
        const st = await ensurePrepF32();
        const stagedInAct0 = !(outBufBytes >= nvox * 4);
        const stageTarget = stagedInAct0 ? act8_0 : labels8Buf;
        const stageBg = stagedInAct0 ? st.bgAct0 : st.bgLabels;
        const f32Vol = volume instanceof Float32Array ? volume : Float32Array.from(volume);
        st.f32Tmp[0] = normOffset;
        st.f32Tmp[1] = normRange;
        st.f32Tmp[2] = 0;
        st.f32Tmp[3] = 0;
        device.queue.writeBuffer(st.ubo, 0, st.f32Tmp);
        device.queue.writeBuffer(stageTarget, 0, f32Vol, 0, nvox);
        return {
          info,
          runPrePasses(enc, passCategories) {
            if (!inpHalosInitialized || inpHalosDirty) {
              enc.clearBuffer(inpBuf);
              inpHalosInitialized = true;
              inpHalosDirty = false;
            }
            const pass = enc.beginComputePass();
            pass.setPipeline(st.pipe);
            pass.setBindGroup(0, stageBg);
            pass.dispatchWorkgroups(8, DIM, 8);
            pass.end();
            passCategories.push('preprocess');
            if (actDirty || stagedInAct0) {
              const ip = enc.beginComputePass();
              ip.setPipeline(pInit.pipe);
              ip.setBindGroup(0, bgInit);
              ip.dispatchWorkgroups(1, DIM, DIM);
              ip.end();
              passCategories.push('preprocess');
              actDirty = false;
            }
          },
        };
      }
      // Rare fallback (e.g. cs=8 LowMem128 + Float32 native input): normalize & transpose on CPU into padInputHost
      const normed = new Float32Array(nvox);
      for (let i = 0; i < nvox; i++) {
        const v = volume[i];
        normed[i] = v === normOffset ? 0 : (v - normOffset) / normRange;
      }
      const transposed = transposeVolume3D(normed, [DIM, DIM, DIM], [2, 1, 0]);
      const info = preparePaddedInputAndHeadMask(transposed, padInputHost, headRowHost, hasF16Flag, useCone);
      device.queue.writeBuffer(inpBuf, 0, padInputHost);
      inpHalosInitialized = true;
      inpHalosDirty = false;
      return {
        info,
        runPrePasses(enc, passCategories) {
          if (actDirty) {
            const ip = enc.beginComputePass();
            ip.setPipeline(pInit.pipe);
            ip.setBindGroup(0, bgInit);
            ip.dispatchWorkgroups(1, DIM, DIM);
            ip.end();
            passCategories.push('preprocess');
            actDirty = false;
          }
        },
      };
    }

    const info = preparePaddedInputAndHeadMask(volume, padInputHost, headRowHost, hasF16Flag, useCone);
    device.queue.writeBuffer(inpBuf, 0, padInputHost);
    inpHalosInitialized = true;
    inpHalosDirty = false;
    return {
      info,
      runPrePasses(enc, passCategories) {
        if (actDirty) {
          const ip = enc.beginComputePass();
          ip.setPipeline(pInit.pipe);
          ip.setBindGroup(0, bgInit);
          ip.dispatchWorkgroups(1, DIM, DIM);
          ip.end();
          passCategories.push('preprocess');
          actDirty = false;
        }
      },
    };
  }

  async function finishAndReadback({ enc, schedule, passCategories, u4Tmp, ioOpts, paced = false, onProgress = null }) {
    const nCls = schedule.clsSkipped ? schedule.clsStrips.length : DIM;
    if (!probCfg) {
      u4Tmp[0] = packed.clsVec4Off;
      u4Tmp[1] = packed.clsBiasOff;
      u4Tmp[2] = schedule.clsSkipped ? 0 : 1;
      u4Tmp[3] = 0;
      device.queue.writeBuffer(clsUbo, 0, u4Tmp);

      {
        const pass = enc.beginComputePass();
        pass.setPipeline(pCls.pipe);
        pass.setBindGroup(0, bgCls);
        if (nCls > 0) pass.dispatchWorkgroups(1, schedule.clsSkipped ? 1 : 64, nCls);
        pass.end();
        passCategories.push('classify');
      }

      if (ioOpts?.gpuNativeOutput) {
        const tU8 = await ensureTransposeU8();
        const tp = enc.beginComputePass();
        tp.setPipeline(tU8.pipe);
        tp.setBindGroup(0, tU8.bg);
        tp.dispatchWorkgroups(8, DIM, 8);
        tp.end();
        passCategories.push('postprocess');
        inpHalosDirty = true;
        enc.copyBufferToBuffer(inpBuf, 0, readbackBuf, 0, nvox);
        device.queue.submit([enc.finish()]);
        await readbackBuf.mapAsync(GPUMapMode.READ);
        const out = new Uint8Array(readbackBuf.getMappedRange()).slice();
        readbackBuf.unmap();
        if (paced && onProgress) onProgress(1.0, '');
        return [out];
      }

      enc.copyBufferToBuffer(labels8Buf, 0, readbackBuf, 0, outBufBytes);
      device.queue.submit([enc.finish()]);
      await readbackBuf.mapAsync(GPUMapMode.READ);
      const u8 = new Uint8Array(readbackBuf.getMappedRange());
      const out = new Float32Array(nvox);
      for (let i = 0; i < nvox; i++) out[i] = u8[i];
      readbackBuf.unmap();
      if (paced && onProgress) onProgress(1.0, '');
      return [out];
    }

    if (canGpuProb) {
      const ps = await ensureProbGpu();
      u4Tmp[0] = packed.clsVec4Off;
      u4Tmp[1] = packed.clsBiasOff;
      u4Tmp[2] = schedule.clsSkipped ? 0 : 1;
      u4Tmp[3] = 0;
      device.queue.writeBuffer(clsUbo, 0, u4Tmp);
      u4Tmp[3] = 1;
      device.queue.writeBuffer(probSlots.clsUbo1, 0, u4Tmp);

      {
        const pass0 = enc.beginComputePass();
        pass0.setPipeline(pCls.pipe);
        pass0.setBindGroup(0, bgCls);
        if (nCls > 0) pass0.dispatchWorkgroups(1, schedule.clsSkipped ? 1 : 64, nCls);
        pass0.end();
        passCategories.push('classify');
      }
      enc.copyBufferToBuffer(labels8Buf, 0, probSlots.pass0HoldBuf, 0, outBufBytes);
      if (schedule.clsSkipped) enc.clearBuffer(labels8Buf, 0, outBufBytes);
      {
        const pass1 = enc.beginComputePass();
        pass1.setPipeline(pCls.pipe);
        pass1.setBindGroup(0, probSlots.bgCls1);
        if (nCls > 0) pass1.dispatchWorkgroups(1, schedule.clsSkipped ? 1 : 64, nCls);
        pass1.end();
        passCategories.push('classify');
      }
      actDirty = true;

      const blurKey = `${probCfg.sigma}|${probCfg.supportPower}`;
      const hasBlur = probCfg.sigma > 0;
      const radius = hasBlur ? Math.max(1, Math.round(3 * probCfg.sigma)) : 0;
      if (ps.lastBlurKey !== blurKey) {
        const u32 = new Uint32Array(ps.uboScratch);
        const f32 = new Float32Array(ps.uboScratch);
        f32.fill(0);
        let weightSum = 1;
        if (hasBlur) {
          weightSum = 0;
          for (let offset = -radius; offset <= radius; offset++) {
            const w = Math.exp(-0.5 * offset * offset / (probCfg.sigma * probCfg.sigma));
            f32[4 + offset + radius] = w;
            weightSum += w;
          }
        } else {
          f32[4] = 1.0;
        }
        u32[1] = radius;
        f32[2] = weightSum;

        u32[0] = 0;
        f32[3] = 1.0;
        device.queue.writeBuffer(ps.uboX, 0, ps.uboScratch);
        u32[0] = 1;
        device.queue.writeBuffer(ps.uboY, 0, ps.uboScratch);
        u32[0] = 2;
        f32[3] = probCfg.supportPower;
        device.queue.writeBuffer(ps.uboZ, 0, ps.uboScratch);
        ps.lastBlurKey = blurKey;
      }

      {
        const up0 = enc.beginComputePass();
        up0.setPipeline(ps.pUnpack);
        up0.setBindGroup(0, ps.bgUnpack0);
        up0.dispatchWorkgroups(256, 256, 1);
        up0.end();
        passCategories.push('postprocess');

        const up1 = enc.beginComputePass();
        up1.setPipeline(ps.pUnpack);
        up1.setBindGroup(0, ps.bgUnpack1);
        up1.dispatchWorkgroups(256, 256, 1);
        up1.end();
        passCategories.push('postprocess');
      }

      if (paced) {
        device.queue.submit([enc.finish()]);
        await device.queue.onSubmittedWorkDone();
        if (onProgress) onProgress(0.992, '');
        await yieldAfterPacedChunk();
        enc = device.createCommandEncoder();
      }

      const nativeOut = !!ioOpts?.gpuNativeOutput;
      for (let ti = 0; ti < 3; ti++) {
        const ts = ps.tissues[ti];
        if (hasBlur) {
          const px = enc.beginComputePass();
          px.setPipeline(ps.pBlurAxis);
          px.setBindGroup(0, ts.bgBlurX);
          px.dispatchWorkgroups(4, 64, DIM);
          px.end();
          passCategories.push('postprocess');

          const py = enc.beginComputePass();
          py.setPipeline(ps.pBlurAxis);
          py.setBindGroup(0, ts.bgBlurY);
          py.dispatchWorkgroups(4, 64, DIM);
          py.end();
          passCategories.push('postprocess');
        }
        const pz = enc.beginComputePass();
        pz.setPipeline(ps.pBlurZGate);
        pz.setBindGroup(0, ts.bgBlurZ);
        pz.dispatchWorkgroups(4, 64, DIM);
        pz.end();
        passCategories.push('postprocess');

        if (nativeOut) {
          const pt = enc.beginComputePass();
          pt.setPipeline(ps.pTransposeF32);
          pt.setBindGroup(0, ts.bgTranspose);
          pt.dispatchWorkgroups(8, DIM, 8);
          pt.end();
          passCategories.push('postprocess');
        } else if (ti < 2) {
          enc.copyBufferToBuffer(labels8Buf, 0, ts.buf, 0, outBufBytes);
        }
      }

      const resBufs = nativeOut
        ? [probSlots.y0, probSlots.y1, probSlots.b]
        : [probSlots.y0, probSlots.y1, labels8Buf];

      enc.copyBufferToBuffer(resBufs[0], 0, readbackBuf, 0, outBufBytes);
      device.queue.submit([enc.finish()]);
      await readbackBuf.mapAsync(GPUMapMode.READ);
      const gm = new Float32Array(readbackBuf.getMappedRange()).slice();
      readbackBuf.unmap();

      const readOne = async (buf) => {
        const ce = device.createCommandEncoder();
        ce.copyBufferToBuffer(buf, 0, readbackBuf, 0, outBufBytes);
        device.queue.submit([ce.finish()]);
        await readbackBuf.mapAsync(GPUMapMode.READ);
        const arr = new Float32Array(readbackBuf.getMappedRange()).slice();
        readbackBuf.unmap();
        return arr;
      };
      const wm = await readOne(resBufs[1]);
      const csf = await readOne(resBufs[2]);
      if (paced && onProgress) onProgress(1.0, '');
      return [gm, wm, csf];
    }

    // Fallback path when scratch buffers are too small (hypothetical small-channel LowMem128 probCfg)
    u4Tmp[0] = packed.clsVec4Off;
    u4Tmp[1] = packed.clsBiasOff;
    u4Tmp[2] = schedule.clsSkipped ? 0 : 1;
    u4Tmp[3] = 0;
    device.queue.writeBuffer(clsUbo, 0, u4Tmp);
    {
      const pass0 = enc.beginComputePass();
      pass0.setPipeline(pCls.pipe);
      pass0.setBindGroup(0, bgCls);
      if (nCls > 0) pass0.dispatchWorkgroups(1, schedule.clsSkipped ? 1 : 64, nCls);
      pass0.end();
      passCategories.push('classify');
      enc.copyBufferToBuffer(labels8Buf, 0, readbackBuf, 0, outBufBytes);
    }
    device.queue.submit([enc.finish()]);
    await readbackBuf.mapAsync(GPUMapMode.READ);
    const inv65535 = 1.0 / 65535.0;
    const u16Pass0 = new Uint16Array(readbackBuf.getMappedRange());
    const gm = new Float32Array(nvox);
    const wm = new Float32Array(nvox);
    for (let i = 0; i < nvox; i++) {
      gm[i] = u16Pass0[i * 2] * inv65535;
      wm[i] = u16Pass0[i * 2 + 1] * inv65535;
    }
    readbackBuf.unmap();

    u4Tmp[3] = 1;
    device.queue.writeBuffer(clsUbo, 0, u4Tmp);
    const enc2 = device.createCommandEncoder();
    if (schedule.clsSkipped) enc2.clearBuffer(labels8Buf, 0, outBufBytes);
    const pass2 = enc2.beginComputePass();
    pass2.setPipeline(pCls.pipe);
    pass2.setBindGroup(0, bgCls);
    if (nCls > 0) pass2.dispatchWorkgroups(1, schedule.clsSkipped ? 1 : 64, nCls);
    pass2.end();
    passCategories.push('classify');
    enc2.copyBufferToBuffer(labels8Buf, 0, readbackBuf, 0, outBufBytes);
    device.queue.submit([enc2.finish()]);

    await readbackBuf.mapAsync(GPUMapMode.READ);
    const u16Pass1 = new Uint16Array(readbackBuf.getMappedRange());
    const csf = new Float32Array(nvox);
    const support = new Float32Array(nvox);
    for (let i = 0; i < nvox; i++) {
      csf[i] = u16Pass1[i * 2] * inv65535;
      support[i] = u16Pass1[i * 2 + 1] * inv65535;
    }
    readbackBuf.unmap();

    const maps = smoothAndGateTissuePriors([gm, wm, csf], support, [DIM, DIM, DIM], modelEntry);
    if (ioOpts?.gpuNativeOutput) {
      return maps.map((m) => transposeVolume3D(m, [DIM, DIM, DIM], [2, 1, 0]));
    }
    return maps;
  }

  return { prepareInput, finishAndReadback, warmupIoPipelines, dispose };
}

function buildSubgroupOps(subgroupMode, norm) {
  if (subgroupMode === 'sg32') {
    return {
      decls: '',
      entryArgs: '',
      add: (e) => `subgroupAdd(${e})`,
      min: (e) => `subgroupMin(${e})`,
      max: (e) => `subgroupMax(${e})`,
    };
  }
  const bfOps = (op, fnName) => {
    const step = (m) => (op === '+'
      ? `  x = x + subgroupShuffleXor(x, ${m}u);`
      : `  x = ${op}(x, subgroupShuffleXor(x, ${m}u));`);
    if (subgroupMode === 'sg64') {
      return `fn ${fnName}(v : f32) -> f32 {
  var x = v;
${step(16)}
${step(8)}
${step(4)}
${step(2)}
${step(1)}
  return x;
}\n`;
    }
    const direct = op === '+' ? 'subgroupAdd' : op === 'min' ? 'subgroupMin' : 'subgroupMax';
    return `fn ${fnName}(v : f32, sg_size : u32) -> f32 {
  if (sg_size == 32u) { return ${direct}(v); }
  var x = v;
${step(16)}
${step(8)}
${step(4)}
${step(2)}
${step(1)}
  return x;
}\n`;
  };
  const decls = (norm === 'none' ? '' : bfOps('+', 'sg32_add')) +
    bfOps('min', 'sg32_min') +
    bfOps('max', 'sg32_max');
  if (subgroupMode === 'sg64') {
    return {
      decls,
      entryArgs: '',
      add: (e) => `sg32_add(${e})`,
      min: (e) => `sg32_min(${e})`,
      max: (e) => `sg32_max(${e})`,
    };
  }
  return {
    decls,
    entryArgs: ',\n             @builtin(subgroup_size) sg_size : u32',
    add: (e) => `sg32_add(${e}, sg_size)`,
    min: (e) => `sg32_min(${e}, sg_size)`,
    max: (e) => `sg32_max(${e}, sg_size)`,
  };
}

function buildSgSmallDecls({ V4, sw, norm, writeMomFn, momParams, momArgs }) {
  const isNone = norm === 'none';
  const shType = isNone ? 'vec2<f32>' : 'vec4<f32>';
  const sgPack1Fn = isNone
    ? `fn sg32_pack1(a : ${V4}, slane : u32, c_out : u32, ${momParams}) -> u32 {
  let f = vec4<f32>(a${sw});
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  let sp = mx - mn;
  if (slane == 0u) {
    write_mom(c_out, vec4<f32>(0.0, 0.0, mn, sp), ${momArgs});
  }
  return pack4x8unorm((f - vec4<f32>(mn)) * select(0.0, 1.0 / sp, sp > 1e-7));
}\n`
    : `fn sg32_pack1(a : ${V4}, slane : u32, c_out : u32, ${momParams}) -> u32 {
  let f = vec4<f32>(a${sw});
  let s = subgroupAdd(f.x + f.y + f.z + f.w);
  let q = subgroupAdd(dot(f, f));
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  let sp = mx - mn;
  if (slane == 0u) {
    write_mom(c_out, vec4<f32>(s, q, mn, sp), ${momArgs});
  }
  return pack4x8unorm((f - vec4<f32>(mn)) * select(0.0, 1.0 / sp, sp > 1e-7));
}\n`;
  const sgSubStoreFn = isNone
    ? `fn sg_sub_store(a : ${V4}, slot : u32, sg_id : u32) {
  let f = vec4<f32>(a${sw});
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  if (sg_id == 0u) { sh_sg[slot] = vec2<f32>(mn, mx); }
}\n`
    : `fn sg_sub_store(a : ${V4}, slot : u32, sg_id : u32) {
  let f = vec4<f32>(a${sw});
  let s = subgroupAdd(f.x + f.y + f.z + f.w);
  let q = subgroupAdd(dot(f, f));
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  if (sg_id == 0u) { sh_sg[slot] = vec4<f32>(s, q, mn, mx); }
}\n`;
  const combineBody = isNone
    ? `      let p0 = sh_sg[rb];
      let p1 = sh_sg[rb + 1u];
      var rmn = min(p0.x, p1.x);
      var rmx = max(p0.y, p1.y);
      if (sg_size == 8u) {
        let p2 = sh_sg[rb + 2u];
        let p3 = sh_sg[rb + 3u];
        rmn = min(rmn, min(p2.x, p3.x));
        rmx = max(rmx, max(p2.y, p3.y));
      }
      let sp = rmx - rmn;
      sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
      write_mom(c_base + slane, vec4<f32>(0.0, 0.0, rmn, sp), ${momArgs});`
    : `      let p0 = sh_sg[rb];
      let p1 = sh_sg[rb + 1u];
      var rs = p0.x + p1.x;
      var rq = p0.y + p1.y;
      var rmn = min(p0.z, p1.z);
      var rmx = max(p0.w, p1.w);
      if (sg_size == 8u) {
        let p2 = sh_sg[rb + 2u];
        let p3 = sh_sg[rb + 3u];
        rs += p2.x + p3.x;
        rq += p2.y + p3.y;
        rmn = min(rmn, min(p2.z, p3.z));
        rmx = max(rmx, max(p2.w, p3.w));
      }
      let sp = rmx - rmn;
      sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
      write_mom(c_base + slane, vec4<f32>(rs, rq, rmn, sp), ${momArgs});`;
  return `var<workgroup> sh_sg  : array<${shType}, 128>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
${writeMomFn}${sgPack1Fn}${sgSubStoreFn}fn reduce_pack4_sg(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, sg_size : u32, sg_id : u32,
  c_base : u32, ${momParams}
) -> vec4<u32> {
  var out_q : vec4<u32>;
  if (sg_size == 32u) {
    out_q = vec4<u32>(
      sg32_pack1(a0, slane, c_base + 0u, ${momArgs}),
      sg32_pack1(a1, slane, c_base + 1u, ${momArgs}),
      sg32_pack1(a2, slane, c_base + 2u, ${momArgs}),
      sg32_pack1(a3, slane, c_base + 3u, ${momArgs})
    );
  } else {
    let b0 = (h * 4u) * 4u + (slane / sg_size);
    sg_sub_store(a0, b0 + 0u, sg_id);
    sg_sub_store(a1, b0 + 4u, sg_id);
    sg_sub_store(a2, b0 + 8u, sg_id);
    sg_sub_store(a3, b0 + 12u, sg_id);
    workgroupBarrier();
    if (slane < 4u) {
      let rb = (h * 4u + slane) * 4u;
${combineBody}
    }
    workgroupBarrier();
    let r0 = sh_res[h * 4u + 0u];
    let r1 = sh_res[h * 4u + 1u];
    let r2 = sh_res[h * 4u + 2u];
    let r3 = sh_res[h * 4u + 3u];
    out_q = vec4<u32>(
      pack4x8unorm((vec4<f32>(a0${sw}) - vec4<f32>(r0.x)) * r0.y),
      pack4x8unorm((vec4<f32>(a1${sw}) - vec4<f32>(r1.x)) * r1.y),
      pack4x8unorm((vec4<f32>(a2${sw}) - vec4<f32>(r2.x)) * r2.y),
      pack4x8unorm((vec4<f32>(a3${sw}) - vec4<f32>(r3.x)) * r3.y)
    );
  }
  return out_q;
}\n`;
}

function buildShaders(cfg) {
  const {
    cs, chan, nclass, clsK4, dilations, activation, norm,
    hasF16, subgroupMode = 'none', splitHalves, probCfg, chunkableStd = false,
  } = cfg;
  const oc4 = cs / 4;
  const csHalf = splitHalves ? cs / 2 : cs;
  const rowStrideAct = csHalf * X4_PAD;
  const rowStrideY = csHalf * X4_VALID;

  const wEffVec4Total = 9 * cs * 3 * oc4;
  const biasEffVec4Off = wEffVec4Total;
  const totalWEffVec4s = wEffVec4Total + oc4;
  const useUniformWeff = hasF16 && oc4 % 2 === 0 && totalWEffVec4s * 8 <= 65536;

  const qConst = getQuantConstants(activation);
  const f16Enable = hasF16 ? 'enable f16;\n' : '';
  const useSg = hasF16 && subgroupMode !== 'none';
  const sgEnable = useSg ? 'enable subgroups;\n' : '';
  const T = hasF16 ? 'f16' : 'f32';
  const suf = hasF16 ? 'h' : 'f';
  const V4 = `vec4<${T}>`;
  const byteScale = hasF16 ? 256.0 : 255.0;

  const buildStdEpilogue = (isPermuted) => {
    const sw = isPermuted ? '.xzyw' : '';
    const storeY = (yRowExpr, c, wordExpr) => (
      splitHalves && c >= csHalf
        ? `y8_1[${yRowExpr} + ${(c - csHalf) * X4_VALID}u] = ${wordExpr};`
        : `y8_0[${yRowExpr} + ${c * X4_VALID}u] = ${wordExpr};`
    );

    if (useSg && (subgroupMode === 'sg32' || subgroupMode === 'sg64' || subgroupMode === 'sg32_64')) {
      const sgOps = buildSubgroupOps(subgroupMode, norm);
      return {
        decls: sgOps.decls,
        entryArgs: sgOps.entryArgs,
        localHeader: '',
        emit: ({ accVar, cStart, cEnd, hrExpr, yRowExpr, momMode, writeY8Expr = 'true' }) =>
          rep(cEnd - cStart, (idx) => {
            const c = cStart + idx;
            const momWrite = momMode === 'ext_and_main'
              ? `mom_ext[(${hrExpr}) * ${cs}u + ${c}u] = mv;\n      mom_main[(row_idx * 2u + sg) * ${cs}u + ${c}u] = mv;`
              : momMode === 'ext_only'
                ? `mom_ext[(${hrExpr}) * ${cs}u + ${c}u] = mv;`
                : `mom_main[(${hrExpr}) * ${cs}u + ${c}u] = mv;`;
            if (norm === 'none') {
              return `  {
    let f = vec4<f32>(${accVar}.v_${idx}${sw});
    let lmn = ${sgOps.min('min(min(f.x, f.y), min(f.z, f.w))')};
    let lmx = ${sgOps.max('max(max(f.x, f.y), max(f.z, f.w))')};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'pack4x8unorm((f - vec4<f32>(lmn)) * inv)')}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${momWrite}
    }
  }\n`;
            }
            return `  {
    let f = vec4<f32>(${accVar}.v_${idx}${sw});
    let ls = ${sgOps.add('f.x + f.y + f.z + f.w')};
    let lq = ${sgOps.add('dot(f, f)')};
    let lmn = ${sgOps.min('min(min(f.x, f.y), min(f.z, f.w))')};
    let lmx = ${sgOps.max('max(max(f.x, f.y), max(f.z, f.w))')};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'pack4x8unorm((f - vec4<f32>(lmn)) * inv)')}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${momWrite}
    }
  }\n`;
          }),
      };
    }

    if (useSg && subgroupMode === 'sg_small') {
      const writeMomFn = `fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
  if (mom_mode == 0u) {
    mom_main[main_off + c_out] = mv;
  } else if (mom_mode == 1u) {
    mom_ext[ext_off + c_out] = mv;
    mom_main[main_off + c_out] = mv;
  } else {
    mom_ext[ext_off + c_out] = mv;
  }
}\n`;
      const decls = buildSgSmallDecls({
        V4, sw, norm, writeMomFn,
        momParams: 'ext_off : u32, main_off : u32, mom_mode : u32',
        momArgs: 'ext_off, main_off, mom_mode',
      });
      return {
        decls,
        entryArgs: ',\n             @builtin(subgroup_size) sg_size : u32,\n             @builtin(subgroup_invocation_id) sg_id : u32',
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, yRowExpr, momMode, writeY8Expr = 'true' }) => {
          const modeCode = momMode === 'ext_and_main' ? '1u' : momMode === 'ext_only' ? '2u' : '0u';
          const extOff = momMode === 'main' ? '0u' : `(${hrExpr}) * ${cs}u`;
          const mainOff = momMode === 'ext_only' ? '0u' : `(row_idx * 2u + sg) * ${cs}u`;
          let out = `  let ep_ext_off = ${extOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4_sg(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, sg_size, sg_id, ${c}u, ep_ext_off, ep_main_off, ${modeCode});
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'qw.x')}
      ${storeY(yRowExpr, c + 1, 'qw.y')}
      ${storeY(yRowExpr, c + 2, 'qw.z')}
      ${storeY(yRowExpr, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    const momSwitchStmt = `    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;

    // Loop-free shared-memory epilogue: 2 barriers per 4-channel batch (12 total for 24ch vs 36,
    // 8 total for 16ch MindGrab), zero inner loops (avoiding Naga's 64-bit loop_bound wrapper),
    // native vec2<f16> min/max shared storage when shader-f16 is enabled (zero pack/unpack ops),
    // and 1 shared helper function per module instead of duplicating unrolled blocks per entry.
    if (norm === 'none' && hasF16) {
      const unroll31 = rep(31, (i) => {
        const k = i + 1;
        return `    {
      let m = sh_mm[rb + ${k}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`;
      });
      const decls = `var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let m0 = sh_mm[rb];
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${unroll31}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${momSwitchStmt}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let f2 = vec4<f32>(a2${sw});
  let f3 = vec4<f32>(a3${sw});
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}\n`;
      return {
        decls,
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, yRowExpr, momMode, writeY8Expr = 'true' }) => {
          const modeCode = momMode === 'ext_and_main' ? '1u' : momMode === 'ext_only' ? '2u' : '0u';
          const extOff = momMode === 'main' ? '0u' : `(${hrExpr}) * ${cs}u`;
          const mainOff = momMode === 'ext_only' ? '0u' : `(row_idx * 2u + sg) * ${cs}u`;
          let out = `  let ep_ext_off = ${extOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, ${c}u, ep_ext_off, ep_main_off, ${modeCode});
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'qw.x')}
      ${storeY(yRowExpr, c + 1, 'qw.y')}
      ${storeY(yRowExpr, c + 2, 'qw.z')}
      ${storeY(yRowExpr, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    if (norm === 'none') {
      const unroll32 = rep(32, (k) => `    {
      let m = sh_mm[rb + ${k}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`);
      const decls = `var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let f2 = vec4<f32>(a2${sw});
  let f3 = vec4<f32>(a3${sw});
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  sh_mm[b0 + 64u] = vec_mm(f2);
  sh_mm[b0 + 96u] = vec_mm(f3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${unroll32}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${momSwitchStmt}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}\n`;
      return {
        decls,
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, yRowExpr, momMode, writeY8Expr = 'true' }) => {
          const modeCode = momMode === 'ext_and_main' ? '1u' : momMode === 'ext_only' ? '2u' : '0u';
          const extOff = momMode === 'main' ? '0u' : `(${hrExpr}) * ${cs}u`;
          const mainOff = momMode === 'ext_only' ? '0u' : `(row_idx * 2u + sg) * ${cs}u`;
          let out = `  let ep_ext_off = ${extOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, ${c}u, ep_ext_off, ep_main_off, ${modeCode});
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'qw.x')}
      ${storeY(yRowExpr, c + 1, 'qw.y')}
      ${storeY(yRowExpr, c + 2, 'qw.z')}
      ${storeY(yRowExpr, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    if (hasF16) {
      // 4-channel batch in 12.25 KiB shared memory (<= 16 KiB baseline limit, 12 barriers for 24ch,
      // native vec2<f16> min/max shared storage with zero pack2x16float/unpack2x16float overhead)
      const unroll31 = rep(31, (i) => {
        const k = i + 1;
        return `    {
      let s = sh_sq[rb + ${k}u];
      let m = sh_mm[rb + ${k}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`;
      });
      const decls = `var<workgroup> sh_sq  : array<vec2<f32>, 1024>;
var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let f2 = vec4<f32>(a2${sw});
  let f3 = vec4<f32>(a3${sw});
  let b0 = (h * 4u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_sq[b0 + 64u] = vec2<f32>(f2.x + f2.y + f2.z + f2.w, dot(f2, f2));
  sh_sq[b0 + 96u] = vec2<f32>(f3.x + f3.y + f3.z + f3.w, dot(f3, f3));
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let s0 = sh_sq[rb];
    let m0 = sh_mm[rb];
    var rs : f32 = s0.x;
    var rq : f32 = s0.y;
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${unroll31}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${momSwitchStmt}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}\n`;
      return {
        decls,
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, yRowExpr, momMode, writeY8Expr = 'true' }) => {
          const modeCode = momMode === 'ext_and_main' ? '1u' : momMode === 'ext_only' ? '2u' : '0u';
          const extOff = momMode === 'main' ? '0u' : `(${hrExpr}) * ${cs}u`;
          const mainOff = momMode === 'ext_only' ? '0u' : `(row_idx * 2u + sg) * ${cs}u`;
          let out = `  let ep_ext_off = ${extOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, ${c}u, ep_ext_off, ep_main_off, ${modeCode});
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'qw.x')}
      ${storeY(yRowExpr, c + 1, 'qw.y')}
      ${storeY(yRowExpr, c + 2, 'qw.z')}
      ${storeY(yRowExpr, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    // f32 fallback + GroupNorm: 2-channel batch in full f32 (8.125 KiB <= 16 KiB limit)
    const unroll32 = rep(32, (k) => `    {
      let s = sh_sq[rb + ${k}u];
      let m = sh_mm[rb + ${k}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`);
    const decls = `var<workgroup> sh_sq  : array<vec2<f32>, 512>;
var<workgroup> sh_mm  : array<vec2<f32>, 512>;
var<workgroup> sh_res : array<vec2<f32>, 16>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack2(
  a0 : ${V4}, a1 : ${V4},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let b0 = (h * 2u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  workgroupBarrier();
  if (slane < 2u) {
    let rb = (h * 2u + slane) * 32u;
    var rs : f32 = 0.0;
    var rq : f32 = 0.0;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${unroll32}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${momSwitchStmt}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 2u + 0u];
  let r1 = sh_res[h * 2u + 1u];
  return vec2<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y)
  );
}\n`;
    return {
      decls,
      localHeader: '  let h = lid.y * 2u + sg;\n',
      emit: ({ accVar, cStart, cEnd, hrExpr, yRowExpr, momMode, writeY8Expr = 'true' }) => {
        const modeCode = momMode === 'ext_and_main' ? '1u' : momMode === 'ext_only' ? '2u' : '0u';
        const extOff = momMode === 'main' ? '0u' : `(${hrExpr}) * ${cs}u`;
        const mainOff = momMode === 'ext_only' ? '0u' : `(row_idx * 2u + sg) * ${cs}u`;
        let out = `  let ep_ext_off = ${extOff};\n  let ep_main_off = ${mainOff};\n`;
        for (let idx = 0; idx < cEnd - cStart; idx += 2) {
          const c = cStart + idx;
          out += `  {
    let qw = reduce_pack2(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, h, slane, ${c}u, ep_ext_off, ep_main_off, ${modeCode});
    if (${writeY8Expr}) {
      ${storeY(yRowExpr, c, 'qw.x')}
      ${storeY(yRowExpr, c + 1, 'qw.y')}
    }
  }\n`;
        }
        return out;
      },
    };
  };

  // --- 0. INIT_ACT8 SHADER ---
  const initActWgsl = () => `
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${X4_PAD}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${rowStrideAct}u + lid.x;
  let val = ${qConst.uZeroWord}u;
  for (var c : u32 = 0u; c < ${csHalf}u; c = c + 1u) {
    let idx = row_base + c * ${X4_PAD}u;
    act0[idx] = val;
    ${splitHalves ? 'act1[idx] = val;' : ''}
  }
}`;

  // --- 1. CONV0 SHADER (@workgroup_size(64, 4, 1)) ---
  const d0 = dilations[0];
  const conv0Wgsl = () => {
    const halfPass0 = !hasF16 && splitHalves;
    const ep0 = buildStdEpilogue(false);
    const fmaRange = (cStart, cEnd) => {
      const gStart = cStart / 4;
      const gEnd = cEnd / 4;
      return rep(gEnd - gStart, (gi) => {
        const g = gStart + gi;
        const o = g * 4;
        return `          {
            let w0 = w16_4[wb + ${g}u];
            let w1 = w16_4[wb + ${oc4 + g}u];
            let w2 = w16_4[wb + ${2 * oc4 + g}u];
            a_${o}     = fma(vn, ${V4}(w0.x), fma(vc, ${V4}(w1.x), fma(vp, ${V4}(w2.x), a_${o})));
            a_${o + 1} = fma(vn, ${V4}(w0.y), fma(vc, ${V4}(w1.y), fma(vp, ${V4}(w2.y), a_${o + 1})));
            a_${o + 2} = fma(vn, ${V4}(w0.z), fma(vc, ${V4}(w1.z), fma(vp, ${V4}(w2.z), a_${o + 2})));
            a_${o + 3} = fma(vn, ${V4}(w0.w), fma(vc, ${V4}(w1.w), fma(vp, ${V4}(w2.w), a_${o + 3})));
          }\n`;
      });
    };

    const q0 = Math.floor(d0 / 4);
    const r0 = d0 % 4;
    let loadInp0 = '';
    if (r0 === 0) {
      loadInp0 = `
        let vn = inp_4[base - ${q0}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${q0}u];`;
    } else if (q0 === 0 && r0 === 1) {
      loadInp0 = `
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${V4}(vL.w, vc.xyz);
        let vp = ${V4}(vc.yzw, vR.x);`;
    } else if (r0 === 1) {
      loadInp0 = `
        let vL = inp_4[base - ${q0 + 1}u];
        let vN = inp_4[base - ${q0}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${q0}u];
        let vR = inp_4[base + ${q0 + 1}u];
        let vn = ${V4}(vL.w, vN.xyz);
        let vp = ${V4}(vP.yzw, vR.x);`;
    } else if (r0 === 2) {
      loadInp0 = `
        let vL = inp_4[base - ${q0 + 1}u];
        let vN = ${q0 === 0 ? 'inp_4[base]' : `inp_4[base - ${q0}u]`};
        let vc = ${q0 === 0 ? 'vN' : 'inp_4[base]'};
        let vP = ${q0 === 0 ? 'vN' : `inp_4[base + ${q0}u]`};
        let vR = inp_4[base + ${q0 + 1}u];
        let vn = ${V4}(vL.zw, vN.xy);
        let vp = ${V4}(vP.zw, vR.xy);`;
    } else {
      loadInp0 = `
        let vL = inp_4[base - ${q0 + 1}u];
        let vN = ${q0 === 0 ? 'inp_4[base]' : `inp_4[base - ${q0}u]`};
        let vc = ${q0 === 0 ? 'vN' : 'inp_4[base]'};
        let vP = ${q0 === 0 ? 'vN' : `inp_4[base + ${q0}u]`};
        let vR = inp_4[base + ${q0 + 1}u];
        let vn = ${V4}(vL.yzw, vN.x);
        let vp = ${V4}(vP.w, vR.xyz);`;
    }

    const emitConv0Compute = (fnName, structName, cStart, cEnd) => {
      const nCh = cEnd - cStart;
      const fields = rep(nCh, (i) => `  v_${i} : ${V4},\n`);
      const accInit = rep(nCh, (i) => {
        const c = cStart + i;
        return norm === 'none'
          ? `  var a_${c} = ${V4}(${T}(qmeta[${3 * cs + c}u]));\n`
          : `  var a_${c} = ${V4}(0.0${suf});\n`;
      });
      const retArgs = Array.from({ length: nCh }, (_, i) => `a_${cStart + i}`).join(', ');
      return `struct ${structName} {
${fields}};
fn ${fnName}(y : i32, z : i32, x_pad : u32) -> ${structName} {
${accInit}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${d0};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${d0};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${X4_PAD}u + x_pad;
${loadInp0}
        let wb = tap_yz * ${3 * oc4}u;
${fmaRange(cStart, cEnd)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${structName}(${retArgs});
}\n`;
    };

    const emitConv0Entry = (fnName, computeFn, cStart, cEnd, isBgEntry) => {
      const coords = isBgEntry
        ? '  let y = i32(p0.bg_y0 + lid.y);\n  let z = i32(p0.bg_z0);'
        : `  var y : i32;\n  var z : i32;\n  if (p0.is_full != 0u) {\n    y = i32(wid.y * 4u + lid.y);\n    z = i32(wid.z);\n  } else {\n    let pk = strips0[wid.z];\n    y = i32((pk & 255u) * 4u + lid.y);\n    z = i32(pk >> 8u);\n  }`;
      const hrExpr = isBgEntry ? 'lid.y * 2u + sg' : 'row_idx * 2u + sg';
      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ep0.entryArgs || ''}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${ep0.localHeader}  let x_pad = lid.x + ${X4_HALO}u;
${coords}
  let acc = ${computeFn}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${rowStrideY}u + lid.x;
${ep0.emit({
  accVar: 'acc',
  cStart,
  cEnd,
  hrExpr,
  yRowExpr: 'y_row_base',
  momMode: isBgEntry ? 'ext_only' : 'main',
})}}`;
    };

    const helpersAndEntries = halfPass0
      ? emitConv0Compute('run_conv0_lo', 'Conv0AccLo', 0, csHalf) +
        emitConv0Compute('run_conv0_hi', 'Conv0AccHi', csHalf, cs) +
        emitConv0Entry('main_lo', 'run_conv0_lo', 0, csHalf, false) +
        emitConv0Entry('main_hi', 'run_conv0_hi', csHalf, cs, false) +
        emitConv0Entry('main_bg_lo', 'run_conv0_lo', 0, csHalf, true) +
        emitConv0Entry('main_bg_hi', 'run_conv0_hi', csHalf, cs, true)
      : emitConv0Compute('run_conv0', 'Conv0Acc', 0, cs) +
        emitConv0Entry('main', 'run_conv0', 0, cs, false) +
        emitConv0Entry('main_bg', 'run_conv0', 0, cs, true);

    return `${f16Enable}${sgEnable}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${V4}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${V4}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${ep0.decls}${helpersAndEntries}`;
  };

  // --- 2. MOMENTS_FINISH + PREP_WEFF SHADER ---
  const prepWgsl = () => `${f16Enable}
${getActivationWgsl(activation)}
struct PrepParams {
  meta_off : u32,
  next_w_vec4_off : u32,
  next_meta_off : u32,
  has_next : u32,
  is_first : u32,
  is_full : u32,
  n_main_strips : u32,
  n_ext_hr : u32,
  ext_weight : f32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
};
@group(0) @binding(0) var<storage, read> w16_4 : array<${V4}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${V4}>;
@group(0) @binding(6) var<storage, read> main_strips : array<u32>;
@group(0) @binding(7) var<uniform> pp : PrepParams;

${norm === 'gn' ? `var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
` : ''}var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
${norm === 'gn' ? `  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
` : ''}  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${TOTAL_HALF_ROWS}u; hr = hr + 256u) {
      let v = mom_main[hr * ${cs}u + c];
${norm === 'gn' ? '      s  += v.x;\n      q  += v.y;\n' : ''}      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom_main[(base_hr + h) * ${cs}u + c];
${norm === 'gn' ? '        s  += v.x;\n        q  += v.y;\n' : ''}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom_ext[e * ${cs}u + c];
${norm === 'gn' ? '        es += v.x;\n        eq += v.y;\n' : ''}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
${norm === 'gn' ? `  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
` : ''}  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
${norm === 'gn' ? `      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
` : ''}      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
      fin_mx[lid]  = max(fin_mx[lid], fin_mx[lid + stride]);
    }
    workgroupBarrier();
  }
  if (lid == 0u) {
    let mbase = pp.meta_off;
    let gamma = qmeta[mbase + c];
    let beta  = qmeta[mbase + ${cs}u + c];
    let eps_base = qmeta[mbase + ${2 * cs}u + c];
    let q_prev = select(mom_stats[${cs * 2}u].x, 1.0, pp.is_first != 0u);
    let eff_eps = eps_base / (q_prev * q_prev);
${norm === 'gn' ? `    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = total_s / 16777216.0;
    let varr = max(total_q / 16777216.0 - mean * mean, 0.0);
    let inv_std = inverseSqrt(varr + eff_eps);
` : `    let mean : f32 = 0.0;
    let inv_std : f32 = 1.0;
`}    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${activation === 'gelu_tanh' ? `
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${chan}u);
    ` : activation === 'relu' ? `
    let qs = select(max(vmax / 255.0, 1e-6), 1.0, c >= ${chan}u);
    ` : `
    let qs = select(max(vmax / 223.0, 1.0 / 32.0), 1.0, c >= ${chan}u);
    `}
    let sb = c * 2u;
    mom_stats[sb]      = vec4<f32>(mean, inv_std, qs, 1.0 / qs);
    mom_stats[sb + 1u] = vec4<f32>(scale, shift, 0.0, 0.0);
  }
}

@compute @workgroup_size(256, 1, 1)
fn prep_weff(@builtin(local_invocation_index) lid : u32) {
  if (pp.has_next == 0u) { return; }
  var q_ref : f32 = 1e-6;
  for (var ic : u32 = 0u; ic < ${chan}u; ic = ic + 1u) {
    let qs = mom_stats[ic * 2u].z;
    q_ref = max(q_ref, ${byteScale.toFixed(1)} * qs);
  }
  ${norm === 'none' ? 'q_ref = 1.0;' : ''}
  if (lid == 0u) {
    mom_stats[${cs * 2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${byteScale.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${wEffVec4Total}u; idx = idx + 256u) {
    let ic = (idx / ${3 * oc4}u) % ${cs}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${T}(qs * scale_num);
  }
  if (lid < ${oc4}u) {
    ${norm === 'none' ? `
    let mb = pp.next_meta_off + ${3 * cs}u + lid * 4u;
    w_eff[${biasEffVec4Off}u + lid] = ${V4}(${T}(qmeta[mb]), ${T}(qmeta[mb + 1u]), ${T}(qmeta[mb + 2u]), ${T}(qmeta[mb + 3u]));
    ` : `
    w_eff[${biasEffVec4Off}u + lid] = ${V4}(0.0${suf});
    `}
  }
}`;

  // --- 3. NORM_QUANT8 + HALO FILL SHADER (@workgroup_size(64, 4, 1)) ---
  const normWgsl = () => `${getActivationWgsl(activation)}
struct NormParams {
  is_full : u32,
  bg_row : u32,
  halo_off : u32,
  n_halo : u32,
};
@group(0) @binding(0) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read> mom_ext : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read> mom_stats : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> norm_aux : array<u32>;
@group(0) @binding(8) var<uniform> np : NormParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${X4_HALO}u;
  var y : u32;
  var z : u32;
  if (np.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = norm_aux[wid.z];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let hr = row_idx * 2u + sg;
  let y_base = row_idx * ${rowStrideY}u + x4;
  let a_base = row_idx * ${rowStrideAct}u + x_pad;
  let mom_base = hr * ${cs}u;

  for (var c : u32 = 0u; c < ${csHalf}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${X4_VALID}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${X4_PAD}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${qConst.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${splitHalves ? `
  for (var c : u32 = 0u; c < ${csHalf}u; c = c + 1u) {
    let cg = ${csHalf}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${X4_VALID}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${X4_PAD}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${qConst.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }` : ''}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${X4_HALO}u;
  let y_base = np.bg_row * ${rowStrideY}u + x4;
  let mom_base = sg * ${cs}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${rowStrideAct}u + x_pad;

  for (var c : u32 = 0u; c < ${csHalf}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${X4_VALID}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${X4_PAD}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${qConst.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${splitHalves ? `
  for (var c : u32 = 0u; c < ${csHalf}u; c = c + 1u) {
    let cg = ${csHalf}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${X4_VALID}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${X4_PAD}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${qConst.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }` : ''}
}`;

  // --- 4. CONV_INT8 UNIFIED DILATION SHADER (@workgroup_size(64, 4, 1)) ---
  // Single shader module for all hidden dilations (encoded in cp.d_pack), with
  // shared run_conv() and epilogue helpers so Naga/DXC/Metal compile 1 compact
  // module instead of 7 duplicated dilation-specialized modules.
  const convWgsl = () => {
    const halfPass = !hasF16 && splitHalves;
    const epC = buildStdEpilogue(hasF16);

    const emitUnpack = (vName, uExpr) => {
      if (hasF16) {
        // Keep vec2<f16>(unpack2x16float(...)): Firefox Naga mis-types bitcast<vec2<f16>>(u32) as f32,
        // while Dawn/Metal LLVM already folds this to a zero-cost half2 reinterpret.
        return `
          let ${vName} = vec4<f16>(vec2<f16>(unpack2x16float(((${uExpr} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${uExpr} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${qConst.sterbenzSub});`;
      }
      return `
          let ${vName} = unpack4x8unorm(${uExpr}) - vec4<f32>(${qConst.uZeroFloat});`;
    };

    const emitLoads = (arrName) => `
          let uL = ${arrName}[base - off0];
          let uN = ${arrName}[base - off1];
          let uC = ${arrName}[base];
          let uP = ${arrName}[base + off1];
          let uR = ${arrName}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);` +
      emitUnpack('vn', 'u_neg') +
      emitUnpack('vc', 'uC') +
      emitUnpack('vp', 'u_pos');

    const emitFmas = (cStart, cEnd) => {
      const gStart = cStart / 4;
      const gEnd = cEnd / 4;
      if (useUniformWeff) {
        const hp1 = oc4 / 2;
        const hp2 = oc4;
        let s = '';
        for (let g = gStart; g < gEnd; g += 2) {
          const o = g * 4;
          const hp = g / 2;
          s += `          {
            let wp0 = w_eff_u[wbu + ${hp}u];
            let wp1 = w_eff_u[wbu + ${hp1 + hp}u];
            let wp2 = w_eff_u[wbu + ${hp2 + hp}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${o}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${o})));
            a_${o + 1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${o + 1})));
            a_${o + 2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${o + 2})));
            a_${o + 3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${o + 3})));
            a_${o + 4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${o + 4})));
            a_${o + 5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${o + 5})));
            a_${o + 6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${o + 6})));
            a_${o + 7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${o + 7})));
          }\n`;
        }
        return s;
      }
      return rep(gEnd - gStart, (gi) => {
        const g = gStart + gi;
        const o = g * 4;
        return `          {
            let w0 = w_eff[wb + ${g}u];
            let w1 = w_eff[wb + ${oc4 + g}u];
            let w2 = w_eff[wb + ${2 * oc4 + g}u];
            a_${o}     = fma(vn, ${V4}(w0.x), fma(vc, ${V4}(w1.x), fma(vp, ${V4}(w2.x), a_${o})));
            a_${o + 1} = fma(vn, ${V4}(w0.y), fma(vc, ${V4}(w1.y), fma(vp, ${V4}(w2.y), a_${o + 1})));
            a_${o + 2} = fma(vn, ${V4}(w0.z), fma(vc, ${V4}(w1.z), fma(vp, ${V4}(w2.z), a_${o + 2})));
            a_${o + 3} = fma(vn, ${V4}(w0.w), fma(vc, ${V4}(w1.w), fma(vp, ${V4}(w2.w), a_${o + 3})));
          }\n`;
      });
    };

    const emitConvCompute = (fnName, structName, cStart, cEnd) => {
      const nCh = cEnd - cStart;
      const fields = rep(nCh, (i) => `  v_${i} : ${V4},\n`);
      const accInit = rep(nCh, (i) => {
        const c = cStart + i;
        if (norm === 'none') {
          const g = c >>> 2;
          const sw = ['x', 'y', 'z', 'w'][c & 3];
          if (useUniformWeff) {
            const uVecIdx = (biasEffVec4Off + g) >>> 1;
            const ufn = ((biasEffVec4Off + g) & 1) ? 'u4_hi' : 'u4_lo';
            return `  var a_${c} = ${V4}(${ufn}(w_eff_u[${uVecIdx}u]).${sw});\n`;
          }
          return `  var a_${c} = ${V4}(w_eff[${biasEffVec4Off + g}u].${sw});\n`;
        }
        return `  var a_${c} = ${V4}(0.0${suf});\n`;
      });
      // Keep `ic` loop runtime-opaque (`+ cp.pad0`, where `cp.pad0 == 0u`) when
      // `csHalf <= 8` so Apple Metal's compiler does not fully unroll 9x8 inner
      // loops and thrash the instruction cache on 16ch / 15ch / 5ch models.
      const icLim = csHalf <= 8 ? `(${csHalf}u + cp.pad0)` : `${csHalf}u`;
      const wLoopLo = useUniformWeff
        ? `        let wbu_tap = tap_yz * ${(cs * 3 * oc4) / 2}u;
        for (var ic : u32 = 0u; ic < ${icLim}; ic = ic + 1u) {
          let base = row_off + ic * ${X4_PAD}u;
${emitLoads('act8_0')}
          let wbu = wbu_tap + ic * ${(3 * oc4) / 2}u;
${emitFmas(cStart, cEnd)}
        }`
        : `        let wb_tap = tap_yz * ${cs * 3 * oc4}u;
        for (var ic : u32 = 0u; ic < ${icLim}; ic = ic + 1u) {
          let base = row_off + ic * ${X4_PAD}u;
${emitLoads('act8_0')}
          let wb = wb_tap + ic * ${3 * oc4}u;
${emitFmas(cStart, cEnd)}
        }`;
      const wLoopHi = useUniformWeff
        ? `        for (var ic : u32 = 0u; ic < ${icLim}; ic = ic + 1u) {
          let base = row_off + ic * ${X4_PAD}u;
${emitLoads('act8_1')}
          let wbu = wbu_tap + (${csHalf}u + ic) * ${(3 * oc4) / 2}u;
${emitFmas(cStart, cEnd)}
        }`
        : `        for (var ic : u32 = 0u; ic < ${icLim}; ic = ic + 1u) {
          let base = row_off + ic * ${X4_PAD}u;
${emitLoads('act8_1')}
          let wb = wb_tap + (${csHalf}u + ic) * ${3 * oc4}u;
${emitFmas(cStart, cEnd)}
        }`;
      const retArgs = Array.from({ length: nCh }, (_, i) => `a_${cStart + i}`).join(', ');
      return `struct ${structName} {
${fields}};
fn ${fnName}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${structName} {
${accInit}  let d_step = i32(dp & 63u);
  let off0 = (dp >> 6u) & 15u;
  let off1 = (dp >> 10u) & 15u;
  let sh_r = (dp >> 14u) & 31u;
  let sh_l = (dp >> 19u) & 31u;
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * d_step;
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * d_step;
      if ((u32(sz) | u32(sy)) < 256u) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${rowStrideAct}u + x_pad;
${wLoopLo}
        ${splitHalves ? wLoopHi : ''}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${structName}(${retArgs});
}\n`;
    };

    const emitConvEntry = (fnName, computeFn, cStart, cEnd, isExtEntry) => {
      const coords = isExtEntry
        ? (chunkableStd
          ? `
  let ext_i = cp.ext_base + wid.z;
  let pk = strips[cp.ext_off + ext_i];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`
          : `
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`)
        : (chunkableStd
          ? `
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.main_off + wid.z);
  } else {
    let pk = strips[cp.main_off + wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`
          : `
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`);

      const hrExpr = isExtEntry
        ? (chunkableStd ? 'ext_i * 8u + lid.y * 2u + sg' : 'wid.z * 8u + lid.y * 2u + sg')
        : 'row_idx * 2u + sg';
      const writeY8Expr = isExtEntry ? '(((dp >> 24u) & 1u) != 0u)' : 'true';
      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${epC.entryArgs || ''}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${epC.localHeader}  let x_pad = x4 + ${X4_HALO}u;
${coords}
  let dp = cp.d_pack;
  let acc = ${computeFn}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${rowStrideY}u + x4;
${epC.emit({
  accVar: 'acc',
  cStart,
  cEnd,
  hrExpr,
  yRowExpr: 'y_row_base',
  momMode: isExtEntry ? 'ext_and_main' : 'main',
  writeY8Expr,
})}}`;
    };

    const helpersAndEntries = halfPass
      ? emitConvCompute('run_conv_lo', 'ConvAccLo', 0, csHalf) +
        emitConvCompute('run_conv_hi', 'ConvAccHi', csHalf, cs) +
        emitConvEntry('main_lo', 'run_conv_lo', 0, csHalf, false) +
        emitConvEntry('main_hi', 'run_conv_hi', csHalf, cs, false) +
        emitConvEntry('main_ext_lo', 'run_conv_lo', 0, csHalf, true) +
        emitConvEntry('main_ext_hi', 'run_conv_hi', csHalf, cs, true)
      : emitConvCompute('run_conv', 'ConvAcc', 0, cs) +
        emitConvEntry('main', 'run_conv', 0, cs, false) +
        emitConvEntry('main_ext', 'run_conv', 0, cs, true);

    // Pack paired vec4<f16> weights as vec4<u32> (never mat2x4<f16>): Naga's HLSL
    // backend emits `cbuffer { row_major half2x4 w_eff_u[N]; }` without decomposing
    // 8-byte half4 rows, so DXC aligns every row to 16 bytes (32-byte stride vs WGSL's
    // 16-byte stride) and misreads/zeros half the convolution taps on Windows Firefox.
    const wEffDecl = useUniformWeff
      ? `fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(totalWEffVec4s / 2)}>;`
      : `@group(0) @binding(6) var<storage, read> w_eff : array<${V4}>;`;

    const convParamsDecl = chunkableStd
      ? `struct ConvParams {
  is_full : u32,
  ext_off : u32,
  d_pack : u32,
  pad0 : u32,
  main_off : u32,
  ext_base : u32,
  pad1 : u32,
  pad2 : u32,
};`
      : `struct ConvParams {
  is_full : u32,
  ext_off : u32,
  d_pack : u32,
  pad0 : u32,
};`;

    return `${f16Enable}${sgEnable}
${convParamsDecl}
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> mom_ext : array<vec4<f32>>;
${wEffDecl}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${epC.decls}${helpersAndEntries}`;
  };

  // --- 5. CLASSIFY_V4 SHADER ---
  const clsWgsl = () => `${f16Enable}
${getActivationWgsl(activation)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${V4}>;
@group(0) @binding(3) var<storage, read> qmeta : array<f32>;
@group(0) @binding(4) var<storage, read> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read> mom_stats : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> labels8 : array<u32>;
@group(0) @binding(7) var<storage, read> cls_strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ClsParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  var y : u32;
  var z : u32;
  if (cp.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = cls_strips[wid.z];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let hr = row_idx * 2u + sg;
  let y_base = row_idx * ${rowStrideY}u + x4;
  let mom_base = hr * ${cs}u;

  var feat : array<${V4}, ${chan}>;
  for (var c : u32 = 0u; c < ${chan}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${splitHalves ? `
    let in_hi = c >= ${csHalf}u;
    let c_loc = select(c, c - ${csHalf}u, in_hi);
    let idx4 = y_base + c_loc * ${X4_VALID}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    ` : `
    let q_word = y8_0[y_base + c * ${X4_VALID}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${V4}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${buildClassifierLoopsWgsl({
  chan,
  clsK4,
  nclass,
  V4,
  suf,
  readBiasStmt: '',
  biasExpr: (j) => `qmeta[m_cls + k_base + ${j}u]`,
  probCfg,
})}
}`;

  return {
    initActWgsl,
    conv0Wgsl,
    prepWgsl,
    normWgsl,
    convWgsl,
    clsWgsl,
    totalWEffVec4s,
    useUniformWeff,
    csHalf,
    chunkableStd,
    halfPass0: !hasF16 && splitHalves,
    halfPassConv: !hasF16 && splitHalves,
  };
}

/**
 * Build WGSL shaders for the <=128 MiB maxStorageBufferBindingSize mode
 * (Android Adreno/Mali WebGPU baseline):
 *   - 4-quarter `act8_0..3` buffers (`<= 120 MiB` max binding for 24ch, `<= 80 MiB` for 16ch/15ch)
 *   - Single 64-slice rolling `stageBuf` (`<= 96 MiB` for 24ch) eliminating full-volume `y8`
 *   - Combined `mom` buffer (`stats` + `mom_main` + `mom_ext`, `<= 75 MiB`)
 *   - Strictly `<= 8` storage buffers and `<= 64 KiB` uniform buffers per shader stage
 */
function buildShadersLowMem128(cfg) {
  const {
    cs, chan, nclass, clsK4, dilations, activation, norm,
    hasF16, subgroupMode = 'none', numConvs, probCfg,
  } = cfg;
  const csQ = cs / 4;
  const csHalf = cs / 2;
  const oc4 = cs / 4;
  const rowStrideAct = csQ * X4_PAD;
  const STAGE_BG_ROW = 16384; // Rows 0..16383 hold rolling 64 Z-slices; 16384..16387 hold bgStrip
  const rowStrideStage = cs * X4_VALID;

  const MOM_STATS_VEC4 = cs * 2 + 4;
  const MOM_MAIN_OFF = MOM_STATS_VEC4;
  const MOM_EXT_OFF = MOM_MAIN_OFF + TOTAL_HALF_ROWS * cs;
  const metaStride = 4 * cs;
  const qmetaVec4Len = (numConvs * metaStride + clsK4 * 4) / 4;

  const wEffVec4Total = 9 * cs * 3 * oc4;
  const biasEffVec4Off = wEffVec4Total;
  const totalWEffVec4s = wEffVec4Total + oc4;
  const useUniformWeff = hasF16 && oc4 % 2 === 0 && totalWEffVec4s * 8 <= 65536;

  const qConst = getQuantConstants(activation);
  const f16Enable = hasF16 ? 'enable f16;\n' : '';
  const useSg = hasF16 && subgroupMode !== 'none';
  const sgEnable = useSg ? 'enable subgroups;\n' : '';
  const T = hasF16 ? 'f16' : 'f32';
  const suf = hasF16 ? 'h' : 'f';
  const V4 = `vec4<${T}>`;
  const byteScale = hasF16 ? 256.0 : 255.0;

  const build128Epilogue = (isPermuted) => {
    const sw = isPermuted ? '.xzyw' : '';
    const storeY = (storeMode, c, wordExpr) => {
      if (storeMode === 'stage_bg') {
        return `stage[s_bg_base + ${c * X4_VALID}u] = ${wordExpr};`;
      }
      if (storeMode === 'stage') {
        return `stage[s_row_base + ${c * X4_VALID}u] = ${wordExpr};`;
      }
      const q = Math.floor(c / csQ);
      const cl = c % csQ;
      return `if (use_act) { act8_${q}[a_row_base + ${cl * X4_PAD}u] = ${wordExpr}; } else { stage[s_row_base + ${c * X4_VALID}u] = ${wordExpr}; }`;
    };

    if (useSg && (subgroupMode === 'sg32' || subgroupMode === 'sg64' || subgroupMode === 'sg32_64')) {
      const sgOps = buildSubgroupOps(subgroupMode, norm);
      return {
        decls: sgOps.decls,
        entryArgs: sgOps.entryArgs,
        localHeader: '',
        emit: ({ accVar, cStart, cEnd, hrExpr, storeMode, momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true' }) =>
          rep(cEnd - cStart, (idx) => {
            const c = cStart + idx;
            if (norm === 'none') {
              return `  {
    let f = vec4<f32>(${accVar}.v_${idx}${sw});
    let lmn = ${sgOps.min('min(min(f.x, f.y), min(f.z, f.w))')};
    let lmx = ${sgOps.max('max(max(f.x, f.y), max(f.z, f.w))')};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'pack4x8unorm((f - vec4<f32>(lmn)) * inv)')}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${momOffExpr} + (${hrExpr}) * ${cs}u + ${c}u] = mv;
      ${alsoWriteMomMain ? `mom[${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u + ${c}u] = mv;` : ''}
    }
  }\n`;
            }
            return `  {
    let f = vec4<f32>(${accVar}.v_${idx}${sw});
    let ls = ${sgOps.add('f.x + f.y + f.z + f.w')};
    let lq = ${sgOps.add('dot(f, f)')};
    let lmn = ${sgOps.min('min(min(f.x, f.y), min(f.z, f.w))')};
    let lmx = ${sgOps.max('max(max(f.x, f.y), max(f.z, f.w))')};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'pack4x8unorm((f - vec4<f32>(lmn)) * inv)')}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${momOffExpr} + (${hrExpr}) * ${cs}u + ${c}u] = mv;
      ${alsoWriteMomMain ? `mom[${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u + ${c}u] = mv;` : ''}
    }
  }\n`;
          }),
      };
    }

    if (useSg && subgroupMode === 'sg_small') {
      const writeMomFn = `fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}\n`;
      const decls = buildSgSmallDecls({
        V4, sw, norm, writeMomFn,
        momParams: 'mom_off : u32, main_off : u32, also_main : bool',
        momArgs: 'mom_off, main_off, also_main',
      });
      return {
        decls,
        entryArgs: ',\n             @builtin(subgroup_size) sg_size : u32,\n             @builtin(subgroup_invocation_id) sg_id : u32',
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, storeMode, momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true' }) => {
          const momOff = `${momOffExpr} + (${hrExpr}) * ${cs}u`;
          const mainOff = alsoWriteMomMain ? `${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u` : '0u';
          let out = `  let ep_mom_off = ${momOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4_sg(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, sg_size, sg_id, ${c}u, ep_mom_off, ep_main_off, ${alsoWriteMomMain});
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'qw.x')}
      ${storeY(storeMode, c + 1, 'qw.y')}
      ${storeY(storeMode, c + 2, 'qw.z')}
      ${storeY(storeMode, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    const momWriteStmt = `    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;

    if (norm === 'none' && hasF16) {
      const unroll31 = rep(31, (i) => {
        const k = i + 1;
        return `    {
      let m = sh_mm[rb + ${k}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`;
      });
      const decls = `var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let m0 = sh_mm[rb];
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${unroll31}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${momWriteStmt}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let f2 = vec4<f32>(a2${sw});
  let f3 = vec4<f32>(a3${sw});
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}\n`;
      return {
        decls,
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, storeMode, momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true' }) => {
          const momOff = `${momOffExpr} + (${hrExpr}) * ${cs}u`;
          const mainOff = alsoWriteMomMain ? `${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u` : '0u';
          let out = `  let ep_mom_off = ${momOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, ${c}u, ep_mom_off, ep_main_off, ${alsoWriteMomMain});
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'qw.x')}
      ${storeY(storeMode, c + 1, 'qw.y')}
      ${storeY(storeMode, c + 2, 'qw.z')}
      ${storeY(storeMode, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    if (norm === 'none') {
      const unroll32 = rep(32, (k) => `    {
      let m = sh_mm[rb + ${k}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`);
      const decls = `var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let f2 = vec4<f32>(a2${sw});
  let f3 = vec4<f32>(a3${sw});
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  sh_mm[b0 + 64u] = vec_mm(f2);
  sh_mm[b0 + 96u] = vec_mm(f3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${unroll32}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${momWriteStmt}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}\n`;
      return {
        decls,
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, storeMode, momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true' }) => {
          const momOff = `${momOffExpr} + (${hrExpr}) * ${cs}u`;
          const mainOff = alsoWriteMomMain ? `${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u` : '0u';
          let out = `  let ep_mom_off = ${momOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, ${c}u, ep_mom_off, ep_main_off, ${alsoWriteMomMain});
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'qw.x')}
      ${storeY(storeMode, c + 1, 'qw.y')}
      ${storeY(storeMode, c + 2, 'qw.z')}
      ${storeY(storeMode, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    if (hasF16) {
      const unroll31 = rep(31, (i) => {
        const k = i + 1;
        return `    {
      let s = sh_sq[rb + ${k}u];
      let m = sh_mm[rb + ${k}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`;
      });
      const decls = `var<workgroup> sh_sq  : array<vec2<f32>, 1024>;
var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${V4}, a1 : ${V4}, a2 : ${V4}, a3 : ${V4},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let f2 = vec4<f32>(a2${sw});
  let f3 = vec4<f32>(a3${sw});
  let b0 = (h * 4u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_sq[b0 + 64u] = vec2<f32>(f2.x + f2.y + f2.z + f2.w, dot(f2, f2));
  sh_sq[b0 + 96u] = vec2<f32>(f3.x + f3.y + f3.z + f3.w, dot(f3, f3));
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let s0 = sh_sq[rb];
    let m0 = sh_mm[rb];
    var rs : f32 = s0.x;
    var rq : f32 = s0.y;
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${unroll31}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${momWriteStmt}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}\n`;
      return {
        decls,
        localHeader: '  let h = lid.y * 2u + sg;\n',
        emit: ({ accVar, cStart, cEnd, hrExpr, storeMode, momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true' }) => {
          const momOff = `${momOffExpr} + (${hrExpr}) * ${cs}u`;
          const mainOff = alsoWriteMomMain ? `${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u` : '0u';
          let out = `  let ep_mom_off = ${momOff};\n  let ep_main_off = ${mainOff};\n`;
          for (let idx = 0; idx < cEnd - cStart; idx += 4) {
            const c = cStart + idx;
            out += `  {
    let qw = reduce_pack4(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, ${accVar}.v_${idx + 2}, ${accVar}.v_${idx + 3}, h, slane, ${c}u, ep_mom_off, ep_main_off, ${alsoWriteMomMain});
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'qw.x')}
      ${storeY(storeMode, c + 1, 'qw.y')}
      ${storeY(storeMode, c + 2, 'qw.z')}
      ${storeY(storeMode, c + 3, 'qw.w')}
    }
  }\n`;
          }
          return out;
        },
      };
    }

    // f32 fallback + GroupNorm: 2-channel batch in full f32 (8.125 KiB <= 16 KiB limit)
    const unroll32 = rep(32, (k) => `    {
      let s = sh_sq[rb + ${k}u];
      let m = sh_mm[rb + ${k}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }\n`);
    const decls = `var<workgroup> sh_sq  : array<vec2<f32>, 512>;
var<workgroup> sh_mm  : array<vec2<f32>, 512>;
var<workgroup> sh_res : array<vec2<f32>, 16>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack2(
  a0 : ${V4}, a1 : ${V4},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${sw});
  let f1 = vec4<f32>(a1${sw});
  let b0 = (h * 2u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  workgroupBarrier();
  if (slane < 2u) {
    let rb = (h * 2u + slane) * 32u;
    var rs : f32 = 0.0;
    var rq : f32 = 0.0;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${unroll32}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${momWriteStmt}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 2u + 0u];
  let r1 = sh_res[h * 2u + 1u];
  return vec2<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y)
  );
}\n`;
    return {
      decls,
      localHeader: '  let h = lid.y * 2u + sg;\n',
      emit: ({ accVar, cStart, cEnd, hrExpr, storeMode, momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true' }) => {
        const momOff = `${momOffExpr} + (${hrExpr}) * ${cs}u`;
        const mainOff = alsoWriteMomMain ? `${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u` : '0u';
        let out = `  let ep_mom_off = ${momOff};\n  let ep_main_off = ${mainOff};\n`;
        for (let idx = 0; idx < cEnd - cStart; idx += 2) {
          const c = cStart + idx;
          out += `  {
    let qw = reduce_pack2(${accVar}.v_${idx}, ${accVar}.v_${idx + 1}, h, slane, ${c}u, ep_mom_off, ep_main_off, ${alsoWriteMomMain});
    if (${writeY8Expr}) {
      ${storeY(storeMode, c, 'qw.x')}
      ${storeY(storeMode, c + 1, 'qw.y')}
    }
  }\n`;
        }
        return out;
      },
    };
  };

  // --- 0. INIT_ACT8 (4 storage bindings) ---
  const initActWgsl = () => `
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${X4_PAD}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${rowStrideAct}u + lid.x;
  let val = ${qConst.uZeroWord}u;
  for (var c : u32 = 0u; c < ${csQ}u; c = c + 1u) {
    let idx = row_base + c * ${X4_PAD}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`;

  // --- 1. CONV0 (8 storage + 3 uniform bindings) ---
  const d0 = dilations[0];
  const halfPass0 = !hasF16 && cs >= 16;
  const conv0Wgsl = () => {
    const ep0 = build128Epilogue(false);
    const fmaRange = (cStart, cEnd) => {
      const gStart = cStart / 4;
      const gEnd = cEnd / 4;
      return rep(gEnd - gStart, (gi) => {
        const g = gStart + gi;
        const o = g * 4;
        return `          {
            let w0 = w16_4[wb + ${g}u];
            let w1 = w16_4[wb + ${oc4 + g}u];
            let w2 = w16_4[wb + ${2 * oc4 + g}u];
            a_${o}     = fma(vn, ${V4}(w0.x), fma(vc, ${V4}(w1.x), fma(vp, ${V4}(w2.x), a_${o})));
            a_${o + 1} = fma(vn, ${V4}(w0.y), fma(vc, ${V4}(w1.y), fma(vp, ${V4}(w2.y), a_${o + 1})));
            a_${o + 2} = fma(vn, ${V4}(w0.z), fma(vc, ${V4}(w1.z), fma(vp, ${V4}(w2.z), a_${o + 2})));
            a_${o + 3} = fma(vn, ${V4}(w0.w), fma(vc, ${V4}(w1.w), fma(vp, ${V4}(w2.w), a_${o + 3})));
          }\n`;
      });
    };

    const q0 = Math.floor(d0 / 4);
    const r0 = d0 % 4;
    let loadInp0 = '';
    if (r0 === 0) {
      loadInp0 = `
        let vn = inp_4[base - ${q0}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${q0}u];`;
    } else if (q0 === 0 && r0 === 1) {
      loadInp0 = `
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${V4}(vL.w, vc.xyz);
        let vp = ${V4}(vc.yzw, vR.x);`;
    } else if (r0 === 1) {
      loadInp0 = `
        let vL = inp_4[base - ${q0 + 1}u];
        let vN = inp_4[base - ${q0}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${q0}u];
        let vR = inp_4[base + ${q0 + 1}u];
        let vn = ${V4}(vL.w, vN.xyz);
        let vp = ${V4}(vP.yzw, vR.x);`;
    } else if (r0 === 2) {
      loadInp0 = `
        let vL = inp_4[base - ${q0 + 1}u];
        let vN = ${q0 === 0 ? 'inp_4[base]' : `inp_4[base - ${q0}u]`};
        let vc = ${q0 === 0 ? 'vN' : 'inp_4[base]'};
        let vP = ${q0 === 0 ? 'vN' : `inp_4[base + ${q0}u]`};
        let vR = inp_4[base + ${q0 + 1}u];
        let vn = ${V4}(vL.zw, vN.xy);
        let vp = ${V4}(vP.zw, vR.xy);`;
    } else {
      loadInp0 = `
        let vL = inp_4[base - ${q0 + 1}u];
        let vN = ${q0 === 0 ? 'inp_4[base]' : `inp_4[base - ${q0}u]`};
        let vc = ${q0 === 0 ? 'vN' : 'inp_4[base]'};
        let vP = ${q0 === 0 ? 'vN' : `inp_4[base + ${q0}u]`};
        let vR = inp_4[base + ${q0 + 1}u];
        let vn = ${V4}(vL.yzw, vN.x);
        let vp = ${V4}(vP.w, vR.xyz);`;
    }

    const emitConv0Compute = (fnName, structName, cStart, cEnd) => {
      const nCh = cEnd - cStart;
      const fields = rep(nCh, (i) => `  v_${i} : ${V4},\n`);
      const accInit = rep(nCh, (i) => {
        const c = cStart + i;
        if (norm === 'none') {
          const qi = 3 * cs + c;
          return `  var a_${c} = ${V4}(${T}(qmeta_u[${qi >>> 2}u][${qi & 3}u]));\n`;
        }
        return `  var a_${c} = ${V4}(0.0${suf});\n`;
      });
      const retArgs = Array.from({ length: nCh }, (_, i) => `a_${cStart + i}`).join(', ');
      return `struct ${structName} {
${fields}};
fn ${fnName}(y : i32, z : i32, x_pad : u32) -> ${structName} {
${accInit}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${d0};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${d0};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${X4_PAD}u + x_pad;
${loadInp0}
        let wb = tap_yz * ${3 * oc4}u;
${fmaRange(cStart, cEnd)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${structName}(${retArgs});
}\n`;
    };

    const emitConv0Entry = (fnName, computeFn, cStart, cEnd, isBgEntry) => {
      const coords = isBgEntry
        ? '  let y = i32(p0.bg_y0 + lid.y);\n  let z = i32(p0.bg_z0);'
        : `  var y : i32;\n  var z : i32;\n  if (p0.is_full != 0u) {\n    y = i32(wid.y * 4u + lid.y);\n    z = i32(wid.z);\n  } else {\n    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];\n    y = i32((pk & 255u) * 4u + lid.y);\n    z = i32(pk >> 8u);\n  }`;
      const hrExpr = isBgEntry ? 'lid.y * 2u + sg' : 'row_idx * 2u + sg';
      const momOffExpr = isBgEntry ? `${MOM_EXT_OFF}u` : `${MOM_MAIN_OFF}u`;
      const rowLocals = isBgEntry
        ? `  let s_bg_base = (${STAGE_BG_ROW}u + lid.y) * ${rowStrideStage}u + lid.x;`
        : `  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${rowStrideAct}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${rowStrideStage}u + lid.x;`;
      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ep0.entryArgs || ''}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${ep0.localHeader}  let x_pad = lid.x + ${X4_HALO}u;
${coords}
  let acc = ${computeFn}(y, z, x_pad);
${rowLocals}
${ep0.emit({
  accVar: 'acc',
  cStart,
  cEnd,
  hrExpr,
  storeMode: isBgEntry ? 'stage_bg' : 'conv0_split',
  momOffExpr,
})}}`;
    };

    const helpersAndEntries = halfPass0
      ? emitConv0Compute('run_conv0_lo', 'Conv0AccLo', 0, csHalf) +
        emitConv0Compute('run_conv0_hi', 'Conv0AccHi', csHalf, cs) +
        emitConv0Entry('main_lo', 'run_conv0_lo', 0, csHalf, false) +
        emitConv0Entry('main_hi', 'run_conv0_hi', csHalf, cs, false) +
        emitConv0Entry('main_bg_lo', 'run_conv0_lo', 0, csHalf, true) +
        emitConv0Entry('main_bg_hi', 'run_conv0_hi', csHalf, cs, true)
      : emitConv0Compute('run_conv0', 'Conv0Acc', 0, cs) +
        emitConv0Entry('main', 'run_conv0', 0, cs, false) +
        emitConv0Entry('main_bg', 'run_conv0', 0, cs, true);

    return `${f16Enable}${sgEnable}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${V4}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${V4}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${cs}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${ep0.decls}${helpersAndEntries}`;
  };

  // --- 2. MOMENTS_FINISH + PREP_WEFF (5 storage + 1 uniform) ---
  const prepWgsl = () => `${f16Enable}
${getActivationWgsl(activation)}
struct PrepParams {
  meta_off : u32,
  next_w_vec4_off : u32,
  next_meta_off : u32,
  has_next : u32,
  is_first : u32,
  is_full : u32,
  n_main_strips : u32,
  n_ext_hr : u32,
  ext_weight : f32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
};
@group(0) @binding(0) var<storage, read> w16_4 : array<${V4}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${V4}>;
@group(0) @binding(4) var<storage, read> main_strips : array<u32>;
@group(0) @binding(5) var<uniform> pp : PrepParams;

${norm === 'gn' ? `var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
` : ''}var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
${norm === 'gn' ? `  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
` : ''}  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${TOTAL_HALF_ROWS}u; hr = hr + 256u) {
      let v = mom[${MOM_MAIN_OFF}u + hr * ${cs}u + c];
${norm === 'gn' ? '      s  += v.x;\n      q  += v.y;\n' : ''}      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom[${MOM_MAIN_OFF}u + (base_hr + h) * ${cs}u + c];
${norm === 'gn' ? '        s  += v.x;\n        q  += v.y;\n' : ''}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom[${MOM_EXT_OFF}u + e * ${cs}u + c];
${norm === 'gn' ? '        es += v.x;\n        eq += v.y;\n' : ''}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
${norm === 'gn' ? `  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
` : ''}  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
${norm === 'gn' ? `      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
` : ''}      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
      fin_mx[lid]  = max(fin_mx[lid], fin_mx[lid + stride]);
    }
    workgroupBarrier();
  }
  if (lid == 0u) {
    let mbase = pp.meta_off;
    let gamma = qmeta[mbase + c];
    let beta  = qmeta[mbase + ${cs}u + c];
    let eps_base = qmeta[mbase + ${2 * cs}u + c];
    let q_prev = select(mom[${cs * 2}u].x, 1.0, pp.is_first != 0u);
    let eff_eps = eps_base / (q_prev * q_prev);
${norm === 'gn' ? `    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = total_s / 16777216.0;
    let varr = max(total_q / 16777216.0 - mean * mean, 0.0);
    let inv_std = inverseSqrt(varr + eff_eps);
` : `    let mean : f32 = 0.0;
    let inv_std : f32 = 1.0;
`}    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${activation === 'gelu_tanh' ? `
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${chan}u);
    ` : activation === 'relu' ? `
    let qs = select(max(vmax / 255.0, 1e-6), 1.0, c >= ${chan}u);
    ` : `
    let qs = select(max(vmax / 223.0, 1.0 / 32.0), 1.0, c >= ${chan}u);
    `}
    let sb = c * 2u;
    mom[sb]      = vec4<f32>(mean, inv_std, qs, 1.0 / qs);
    mom[sb + 1u] = vec4<f32>(scale, shift, 0.0, 0.0);
  }
}

@compute @workgroup_size(256, 1, 1)
fn prep_weff(@builtin(local_invocation_index) lid : u32) {
  if (pp.has_next == 0u) { return; }
  var q_ref : f32 = 1e-6;
  for (var ic : u32 = 0u; ic < ${chan}u; ic = ic + 1u) {
    let qs = mom[ic * 2u].z;
    q_ref = max(q_ref, ${byteScale.toFixed(1)} * qs);
  }
  ${norm === 'none' ? 'q_ref = 1.0;' : ''}
  if (lid == 0u) {
    mom[${cs * 2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${byteScale.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${wEffVec4Total}u; idx = idx + 256u) {
    let ic = (idx / ${3 * oc4}u) % ${cs}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${T}(qs * scale_num);
  }
  if (lid < ${oc4}u) {
    ${norm === 'none' ? `
    let mb = pp.next_meta_off + ${3 * cs}u + lid * 4u;
    w_eff[${biasEffVec4Off}u + lid] = ${V4}(${T}(qmeta[mb]), ${T}(qmeta[mb + 1u]), ${T}(qmeta[mb + 2u]), ${T}(qmeta[mb + 3u]));
    ` : `
    w_eff[${biasEffVec4Off}u + lid] = ${V4}(0.0${suf});
    `}
  }
}`;

  // --- 3. FLUSH_STAGE SHADER (6 storage + 1 dynamic uniform) ---
  const flushWgsl = () => `
struct BandFlushParams {
  is_full : u32,
  z_start : u32,
  strip_off : u32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
  pad3 : u32,
  pad4 : u32,
};
@group(0) @binding(0) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read> stage : array<u32>;
@group(0) @binding(5) var<storage, read> strips : array<u32>;
@group(0) @binding(6) var<uniform> fp : BandFlushParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${X4_HALO}u;
  var y : u32;
  var z : u32;
  if (fp.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = fp.z_start + wid.z;
  } else {
    let pk = strips[fp.strip_off + wid.z] & 0xFFFFu;
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let a_base = (z * 256u + y) * ${rowStrideAct}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${rowStrideStage}u + x4;
  for (var c : u32 = 0u; c < ${csQ}u; c = c + 1u) {
    let a_off = a_base + c * ${X4_PAD}u;
    act8_0[a_off] = stage[s_base + c * ${X4_VALID}u];
    act8_1[a_off] = stage[s_base + (${csQ}u + c) * ${X4_VALID}u];
    act8_2[a_off] = stage[s_base + (${2 * csQ}u + c) * ${X4_VALID}u];
    act8_3[a_off] = stage[s_base + (${3 * csQ}u + c) * ${X4_VALID}u];
  }
}`;

  // --- 4. NORM_QUANT8 + HALO FILL SHADER (7 storage + 1 uniform) ---
  const emitNormQuarter = (q, isHalo) => {
    const cgBase = q * csQ;
    return `
  for (var cl : u32 = 0u; cl < ${csQ}u; cl = cl + 1u) {
    let c = ${cgBase}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${isHalo
      ? `stage[s_bg_base + c * ${X4_VALID}u]`
      : `select(stage[s_base + c * ${X4_VALID}u], act8_${q}[a_base + cl * ${X4_PAD}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${q}[a_base + cl * ${X4_PAD}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${qConst.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`;
  };

  const normWgsl = () => `${getActivationWgsl(activation)}
struct NormParams {
  is_full : u32,
  bg_row : u32,
  halo_off : u32,
  n_halo : u32,
};
@group(0) @binding(0) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read> stage : array<u32>;
@group(0) @binding(5) var<storage, read> mom : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read> norm_aux : array<u32>;
@group(0) @binding(7) var<uniform> np : NormParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${X4_HALO}u;
  var y : u32;
  var z : u32;
  if (np.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = norm_aux[wid.z];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let use_act = z < 192u;
  let a_base = row_idx * ${rowStrideAct}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${rowStrideStage}u + x4;
  let mom_base = ${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u;
${rep(4, (q) => emitNormQuarter(q, false))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${X4_HALO}u;
  let s_bg_base = ${STAGE_BG_ROW}u * ${rowStrideStage}u + x4;
  let mom_base = ${MOM_EXT_OFF}u + sg * ${cs}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${rowStrideAct}u + x_pad;
${rep(4, (q) => emitNormQuarter(q, true))}
}`;

  // --- 5. CONV_INT8 UNIFIED DILATION SHADER (7/8 storage + dynamic uniform) ---
  const convWgsl = () => {
    const halfPass = !hasF16 && cs >= 16;
    const epC = build128Epilogue(hasF16);

    const emitUnpack = (vName, uExpr) => {
      if (hasF16) {
        // Keep vec2<f16>(unpack2x16float(...)): Firefox Naga mis-types bitcast<vec2<f16>>(u32) as f32,
        // while Dawn/Metal LLVM already folds this to a zero-cost half2 reinterpret.
        return `
          let ${vName} = vec4<f16>(vec2<f16>(unpack2x16float(((${uExpr} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${uExpr} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${qConst.sterbenzSub});`;
      }
      return `
          let ${vName} = unpack4x8unorm(${uExpr}) - vec4<f32>(${qConst.uZeroFloat});`;
    };

    const emitLoads = (arrName) => `
          let uL = ${arrName}[base - off0];
          let uN = ${arrName}[base - off1];
          let uC = ${arrName}[base];
          let uP = ${arrName}[base + off1];
          let uR = ${arrName}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);` +
      emitUnpack('vn', 'u_neg') +
      emitUnpack('vc', 'uC') +
      emitUnpack('vp', 'u_pos');

    const emitFmas = (cStart, cEnd) => {
      const gStart = cStart / 4;
      const gEnd = cEnd / 4;
      if (useUniformWeff) {
        const hp1 = oc4 / 2;
        const hp2 = oc4;
        let s = '';
        for (let g = gStart; g < gEnd; g += 2) {
          const o = g * 4;
          const hp = g / 2;
          s += `          {
            let wp0 = w_eff_u[wbu + ${hp}u];
            let wp1 = w_eff_u[wbu + ${hp1 + hp}u];
            let wp2 = w_eff_u[wbu + ${hp2 + hp}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${o}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${o})));
            a_${o + 1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${o + 1})));
            a_${o + 2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${o + 2})));
            a_${o + 3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${o + 3})));
            a_${o + 4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${o + 4})));
            a_${o + 5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${o + 5})));
            a_${o + 6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${o + 6})));
            a_${o + 7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${o + 7})));
          }\n`;
        }
        return s;
      }
      return rep(gEnd - gStart, (gi) => {
        const g = gStart + gi;
        const o = g * 4;
        return `          {
            let w0 = w_eff[wb + ${g}u];
            let w1 = w_eff[wb + ${oc4 + g}u];
            let w2 = w_eff[wb + ${2 * oc4 + g}u];
            a_${o}     = fma(vn, ${V4}(w0.x), fma(vc, ${V4}(w1.x), fma(vp, ${V4}(w2.x), a_${o})));
            a_${o + 1} = fma(vn, ${V4}(w0.y), fma(vc, ${V4}(w1.y), fma(vp, ${V4}(w2.y), a_${o + 1})));
            a_${o + 2} = fma(vn, ${V4}(w0.z), fma(vc, ${V4}(w1.z), fma(vp, ${V4}(w2.z), a_${o + 2})));
            a_${o + 3} = fma(vn, ${V4}(w0.w), fma(vc, ${V4}(w1.w), fma(vp, ${V4}(w2.w), a_${o + 3})));
          }\n`;
      });
    };

    const emitQuarterLoop = (q, cStart, cEnd) => {
      const cOff = q * csQ;
      const icLim = `(${csQ}u + cp.pad0)`;
      if (useUniformWeff) {
        return `        for (var ic : u32 = 0u; ic < ${icLim}; ic = ic + 1u) {
          let base = row_off + ic * ${X4_PAD}u;
${emitLoads(`act8_${q}`)}
          let wbu = wbu_tap + ${cOff ? `(${cOff}u + ic)` : 'ic'} * ${(3 * oc4) / 2}u;
${emitFmas(cStart, cEnd)}
        }\n`;
      }
      return `        for (var ic : u32 = 0u; ic < ${icLim}; ic = ic + 1u) {
          let base = row_off + ic * ${X4_PAD}u;
${emitLoads(`act8_${q}`)}
          let wb = wb_tap + ${cOff ? `(${cOff}u + ic)` : 'ic'} * ${3 * oc4}u;
${emitFmas(cStart, cEnd)}
        }\n`;
    };

    const emitConvCompute = (fnName, structName, cStart, cEnd) => {
      const nCh = cEnd - cStart;
      const fields = rep(nCh, (i) => `  v_${i} : ${V4},\n`);
      const accInit = rep(nCh, (i) => {
        const c = cStart + i;
        if (norm === 'none') {
          const g = c >>> 2;
          const sw = ['x', 'y', 'z', 'w'][c & 3];
          if (useUniformWeff) {
            const uVecIdx = (biasEffVec4Off + g) >>> 1;
            const ufn = ((biasEffVec4Off + g) & 1) ? 'u4_hi' : 'u4_lo';
            return `  var a_${c} = ${V4}(${ufn}(w_eff_u[${uVecIdx}u]).${sw});\n`;
          }
          return `  var a_${c} = ${V4}(w_eff[${biasEffVec4Off + g}u].${sw});\n`;
        }
        return `  var a_${c} = ${V4}(0.0${suf});\n`;
      });
      const tapHeader = useUniformWeff
        ? `        let wbu_tap = tap_yz * ${(cs * 3 * oc4) / 2}u;\n`
        : `        let wb_tap = tap_yz * ${cs * 3 * oc4}u;\n`;
      const retArgs = Array.from({ length: nCh }, (_, i) => `a_${cStart + i}`).join(', ');
      return `struct ${structName} {
${fields}};
fn ${fnName}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${structName} {
${accInit}  let d_step = i32(dp & 63u);
  let off0 = (dp >> 6u) & 15u;
  let off1 = (dp >> 10u) & 15u;
  let sh_r = (dp >> 14u) & 31u;
  let sh_l = (dp >> 19u) & 31u;
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * d_step;
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * d_step;
      if ((u32(sz) | u32(sy)) < 256u) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${rowStrideAct}u + x_pad;
${tapHeader}${rep(4, (q) => emitQuarterLoop(q, cStart, cEnd))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${structName}(${retArgs});
}\n`;
    };

    const emitConvEntry = (fnName, computeFn, cStart, cEnd, entryKind) => {
      let coords = '';
      if (entryKind === 'bg') {
        coords = `
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`;
      } else if (entryKind === 'ext') {
        coords = `
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`;
      } else {
        coords = `
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;
      }

      const hrExpr = entryKind === 'bg'
        ? 'lid.y * 2u + sg'
        : entryKind === 'ext'
          ? 'ext_orig * 8u + lid.y * 2u + sg'
          : 'row_idx * 2u + sg';
      const momOffExpr = entryKind === 'main' ? `${MOM_MAIN_OFF}u` : `${MOM_EXT_OFF}u`;
      const storeMode = entryKind === 'bg' ? 'stage_bg' : 'stage';
      const writeY8Expr = entryKind === 'main' ? 'true' : '(((dp >> 24u) & 1u) != 0u)';
      const rowLocals = entryKind === 'bg'
        ? `  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${STAGE_BG_ROW}u + lid.y) * ${rowStrideStage}u + x4;`
        : `  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${rowStrideStage}u + x4;`;

      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${epC.entryArgs || ''}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${epC.localHeader}  let x_pad = x4 + ${X4_HALO}u;
${coords}
  let dp = cp.d_pack;
  let acc = ${computeFn}(y, z, x_pad, dp);
${rowLocals}
${epC.emit({
  accVar: 'acc',
  cStart,
  cEnd,
  hrExpr,
  storeMode,
  momOffExpr,
  alsoWriteMomMain: entryKind !== 'main',
  writeY8Expr,
})}}`;
    };

    const helpersAndEntries = halfPass
      ? emitConvCompute('run_conv_lo', 'ConvAccLo', 0, csHalf) +
        emitConvCompute('run_conv_hi', 'ConvAccHi', csHalf, cs) +
        emitConvEntry('main_lo', 'run_conv_lo', 0, csHalf, 'main') +
        emitConvEntry('main_hi', 'run_conv_hi', csHalf, cs, 'main') +
        emitConvEntry('main_ext_lo', 'run_conv_lo', 0, csHalf, 'ext') +
        emitConvEntry('main_ext_hi', 'run_conv_hi', csHalf, cs, 'ext') +
        emitConvEntry('main_bg_lo', 'run_conv_lo', 0, csHalf, 'bg') +
        emitConvEntry('main_bg_hi', 'run_conv_hi', csHalf, cs, 'bg')
      : emitConvCompute('run_conv', 'ConvAcc', 0, cs) +
        emitConvEntry('main', 'run_conv', 0, cs, 'main') +
        emitConvEntry('main_ext', 'run_conv', 0, cs, 'ext') +
        emitConvEntry('main_bg', 'run_conv', 0, cs, 'bg');

    // Pack paired vec4<f16> weights as vec4<u32> (never mat2x4<f16>): Naga's HLSL
    // backend emits `cbuffer { row_major half2x4 w_eff_u[N]; }` without decomposing
    // 8-byte half4 rows, so DXC aligns every row to 16 bytes (32-byte stride vs WGSL's
    // 16-byte stride) and misreads/zeros half the convolution taps on Windows Firefox.
    const wEffDecl = useUniformWeff
      ? `fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(totalWEffVec4s / 2)}>;`
      : `@group(0) @binding(6) var<storage, read> w_eff : array<${V4}>;`;

    return `${f16Enable}${sgEnable}
struct BandConvParams {
  is_full : u32,
  z_start : u32,
  strip_off : u32,
  ext_off : u32,
  d_pack : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read_write> stage : array<u32>;
@group(0) @binding(5) var<storage, read_write> mom : array<vec4<f32>>;
${wEffDecl}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${epC.decls}${helpersAndEntries}`;
  };

  // --- 6. CLASSIFY_V4 SHADER (8 storage + 3 uniform) ---
  const emitClsQuarter = (q) => {
    const cgBase = q * csQ;
    return `
  for (var cl : u32 = 0u; cl < ${csQ}u; cl = cl + 1u) {
    let c = ${cgBase}u + cl;
    if (c < ${chan}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${X4_VALID}u], act8_${q}[a_base + cl * ${X4_PAD}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${V4}(fv);
    }
  }`;
  };

  const clsWgsl = () => `${f16Enable}
${getActivationWgsl(activation)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read> stage : array<u32>;
@group(0) @binding(5) var<storage, read> w16_4 : array<${V4}>;
@group(0) @binding(6) var<storage, read> mom : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read_write> labels8 : array<u32>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${qmetaVec4Len}>;
@group(0) @binding(9) var<uniform> cls_strips_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> cp : ClsParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  var y : u32;
  var z : u32;
  if (cp.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = cls_strips_u[wid.z >> 2u][wid.z & 3u];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let use_act = z < 192u;
  let a_base = row_idx * ${rowStrideAct}u + x4 + ${X4_HALO}u;
  let s_base = ((z & 63u) * 256u + y) * ${rowStrideStage}u + x4;
  let mom_base = ${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u;

  var feat : array<${V4}, ${chan}>;
${rep(4, (q) => emitClsQuarter(q))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${buildClassifierLoopsWgsl({
  chan,
  clsK4,
  nclass,
  V4,
  suf,
  readBiasStmt: '    let bv = qmeta_u[b_vec4 + k4];',
  biasExpr: (j) => `bv.${['x', 'y', 'z', 'w'][j]}`,
  probCfg,
})}
}`;

  return {
    initActWgsl,
    conv0Wgsl,
    prepWgsl,
    flushWgsl,
    normWgsl,
    convWgsl,
    clsWgsl,
    qmetaVec4Len,
    numConvs,
    totalWEffVec4s,
    useUniformWeff,
    csQ,
    halfPass0,
    halfPassConv: !hasF16 && cs >= 16,
  };
}

async function setupNetLowMem128(device, d, packed, hasF16, subgroupMode, modelEntry, probCfg) {
  const nvox = DIM * DIM * DIM;
  const outBufBytes = probCfg ? nvox * 4 : nvox;
  const numConvs = d.dilations.length;
  const csQ = d.cs / 4;
  const actQBytes = DIM * DIM * csQ * X4_PAD * 4;
  const stageRows = 64 * DIM + 4;
  const stageBytes = stageRows * d.cs * X4_VALID * 4;
  const momVec4Count = d.cs * 2 + 4 + (TOTAL_HALF_ROWS + MAX_EXT_HALF_ROWS) * d.cs;
  const momBytes = momVec4Count * 16;

  const lim = device.limits || {};
  const maxAllowed = Math.min(lim.maxStorageBufferBindingSize ?? Infinity, lim.maxBufferSize ?? Infinity);
  if (actQBytes > maxAllowed || stageBytes > maxAllowed || momBytes > maxAllowed || outBufBytes > maxAllowed) {
    const needMiB = Math.ceil(Math.max(actQBytes, stageBytes, momBytes, outBufBytes) / 1048576);
    throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${needMiB} MiB) exceeds device limit (${maxAllowed >>> 20} MiB)`);
  }

  const shaders = buildShadersLowMem128({
    cs: d.cs,
    chan: d.chan,
    nclass: d.nclass,
    clsK4: packed.clsK4,
    dilations: d.dilations,
    activation: d.activation,
    norm: d.norm,
    hasF16,
    subgroupMode,
    numConvs,
    probCfg,
  });

  console.log(
    `[WebGPU-V4-128M] ${d.chan}ch(cs=${d.cs})/${d.nclass}cls (${numConvs} convs, ${d.activation}, norm=${d.norm}` +
    `${probCfg ? ', prob=3' : ''}) | ${hasF16 ? 'f16+sterbenz' : 'f32'} | ${subgroupModeLabel(subgroupMode)} ` +
    `| ZYCX-4Q+64slice | maxBuf=${(Math.max(actQBytes, stageBytes, momBytes, outBufBytes) / 1048576).toFixed(1)} MiB`
  );

  const S = GPUBufferUsage.STORAGE;
  const U = GPUBufferUsage.UNIFORM;
  const CD = GPUBufferUsage.COPY_DST;
  const CS = GPUBufferUsage.COPY_SRC;

  const paddedVox = DIM * DIM * ROW_SCALARS_PAD;
  const inpBytes = paddedVox * (hasF16 ? 2 : 4);
  const wEffBytes = hasF16 ? Math.ceil(shaders.totalWEffVec4s / 2) * 16 : shaders.totalWEffVec4s * 16;
  const canGpuProb = Boolean(probCfg && actQBytes >= outBufBytes);

  const wsKey = `128|${d.cs}|${hasF16 ? 1 : 0}|${outBufBytes}|${canGpuProb ? 1 : 0}`;
  const ws = acquireV4Workspace(device, wsKey, () => {
    const buffers = [];
    const wsAlloc = createBufAllocator(device, buffers);
    const mkWs = wsAlloc.alloc;
    const named = {
      inpBuf: mkWs(inpBytes, S | CD | CS),
      act8_0: mkWs(actQBytes, S | CD | CS),
      act8_1: mkWs(actQBytes, S | CD | CS),
      act8_2: mkWs(actQBytes, S | CD | CS),
      act8_3: mkWs(actQBytes, S | CD | CS),
      stageBuf: mkWs(stageBytes, S),
      momBuf: mkWs(momBytes, S),
      labels8Buf: mkWs(outBufBytes, S | CD | CS),
      readbackBuf: mkWs(outBufBytes, GPUBufferUsage.MAP_READ | CD),
      probPackTmpBuf: canGpuProb ? mkWs(outBufBytes, S | CD | CS) : null,
    };
    return { buffers, named, bytes: wsAlloc.getBytes() };
  });
  const {
    inpBuf,
    act8_0,
    act8_1,
    act8_2,
    act8_3,
    stageBuf,
    momBuf,
    labels8Buf,
    readbackBuf,
    probPackTmpBuf,
  } = ws.named;

  const ownedBuffers = [];
  const ownedAlloc = createBufAllocator(device, ownedBuffers);
  const mkBuf = ownedAlloc.alloc;

  const wRawBuf = mkBuf(hasF16 ? packed.wF16.byteLength : packed.wF32.byteLength, S | CD);
  const qmetaBuf = mkBuf(packed.qmetaF32.byteLength, S | U | CD);
  const wEffBuf = mkBuf(wEffBytes, shaders.useUniformWeff ? (S | U) : S);

  const canCone = d.norm === 'gn' && !modelEntry?.disableConeSkip;
  const strips0Ubo = mkBuf(TOTAL_STRIPS * 4, U | CD);
  const clsStripsUbo = mkBuf(TOTAL_STRIPS * 4, U | CD);
  const stripsBufs = Array.from({ length: numConvs }, () => mkBuf(canCone ? TOTAL_STRIPS * 4 : 16, S | CD));
  const normAuxBufs = Array.from({ length: numConvs - 1 }, () => mkBuf(canCone ? (TOTAL_STRIPS + DIM * DIM) * 4 : 16, S | CD));

  const conv0Ubo = mkBuf(16, U | CD);
  const clsUbo = mkBuf(16, U | CD);
  const prepUbos = Array.from({ length: numConvs }, () => mkBuf(48, U | CD));
  const normUbos = Array.from({ length: numConvs - 1 }, () => mkBuf(16, U | CD));

  const uboAlign = Math.max(256, lim.minUniformBufferOffsetAlignment || 256);
  const uboAlignU32 = uboAlign >>> 2;
  const SLOTS_PER_LAYER = 20; // 8 conv bands (0..7) + 6 main flush (8..13) + 6 ext flush (14..19)
  const totalBandSlots = Math.max(1, (numConvs - 1) * SLOTS_PER_LAYER);
  const bandUboBuf = mkBuf(totalBandSlots * uboAlign, U | CD);
  const bandUboHost = new Uint32Array(totalBandSlots * uboAlignU32);

  device.queue.writeBuffer(wRawBuf, 0, hasF16 ? packed.wF16 : packed.wF32);
  device.queue.writeBuffer(qmetaBuf, 0, packed.qmetaF32);

  let pipes;
  try {
    pipes = await getNetPipes128(
      device,
      d,
      packed,
      hasF16,
      subgroupMode,
      probCfg,
      shaders
    );
  } catch (err) {
    for (const b of ownedBuffers) b.destroy();
    ownedBuffers.length = 0;
    if (!ws.pooled) {
      for (const b of ws.buffers) b.destroy();
      ws.buffers.length = 0;
    } else if (v4WorkspacePool.get(device) === ws) {
      releaseV4Workspace(device);
    }
    throw err;
  }
  const { pInit, pMomFin, pPrepW, pFlush, pNorm, pNormHalo, pCls, pConv0, pConv } = pipes;

  const mkBg = (bgl, resources) => device.createBindGroup({
    layout: bgl,
    entries: resources.map((res, binding) => ({
      binding,
      resource: res && res.buffer ? res : { buffer: res },
    })),
  });

  const bgInit = mkBg(pInit.bgl, [act8_0, act8_1, act8_2, act8_3]);
  // Initialize permanent X-row zero halos [0..7] and [72..79] in act8_0..3 ONCE
  {
    const enc = device.createCommandEncoder();
    const pass = enc.beginComputePass();
    pass.setPipeline(pInit.pipe);
    pass.setBindGroup(0, bgInit);
    pass.dispatchWorkgroups(1, DIM, DIM);
    pass.end();
    device.queue.submit([enc.finish()]);
  }

  const p0Bgl = (shaders.halfPass0 ? pConv0.lo : pConv0.main).bgl;
  const bgConv0 = mkBg(p0Bgl, [
    inpBuf,
    act8_0,
    act8_1,
    act8_2,
    act8_3,
    stageBuf,
    wRawBuf,
    momBuf,
    { buffer: qmetaBuf, offset: 0, size: d.cs * 16 },
    strips0Ubo,
    conv0Ubo,
  ]);
  const bgCls = mkBg(pCls.bgl, [act8_0, act8_1, act8_2, act8_3, stageBuf, wRawBuf, momBuf, labels8Buf, qmetaBuf, clsStripsUbo, clsUbo]);
  const clsUbo1 = canGpuProb ? mkBuf(16, U | CD) : null;
  const bgCls1 = canGpuProb
    ? mkBg(pCls.bgl, [act8_0, act8_1, act8_2, act8_3, stageBuf, wRawBuf, momBuf, labels8Buf, qmetaBuf, clsStripsUbo, clsUbo1])
    : null;
  const ioCtl = createGpuIoController({
    device,
    hasF16,
    nvox,
    outBufBytes,
    inpBuf,
    act8_0,
    labels8Buf,
    readbackBuf,
    pInit,
    bgInit,
    pCls,
    bgCls,
    clsUbo,
    packed,
    modelEntry,
    probCfg,
    canGpuProb,
    probSlots: canGpuProb
      ? {
          clsUbo1,
          bgCls1,
          pass0HoldBuf: probPackTmpBuf,
          y0: act8_0,
          y1: act8_1,
          b: act8_2,
          sup: act8_3,
        }
      : null,
    ownedBuffers,
    mkBuf,
  });

  const prepBgs = prepUbos.map((ubo, li) =>
    mkBg(pMomFin.bgl, [wRawBuf, qmetaBuf, momBuf, wEffBuf, stripsBufs[li], ubo])
  );
  const normBgs = normUbos.map((ubo, li) =>
    mkBg(pNorm.bgl, [act8_0, act8_1, act8_2, act8_3, stageBuf, momBuf, normAuxBufs[li], ubo])
  );
  const bandDynRes = { buffer: bandUboBuf, offset: 0, size: 32 };
  const flushBgs = Array.from({ length: numConvs }, (_, li) =>
    li === 0 ? null : mkBg(pFlush.bgl, [act8_0, act8_1, act8_2, act8_3, stageBuf, stripsBufs[li], bandDynRes])
  );
  const convP0 = shaders.halfPassConv ? pConv.lo : pConv.main;
  const convBgs = Array.from({ length: numConvs }, (_, li) =>
    li === 0 ? null : mkBg(convP0.bgl, [act8_0, act8_1, act8_2, act8_3, stageBuf, momBuf, wEffBuf, stripsBufs[li], bandDynRes])
  );

  const padInputHost = hasF16 ? new Uint16Array(paddedVox) : new Float32Array(paddedVox);
  const headRowHost = new Uint8Array(DIM * DIM);
  const stripsHost = new Uint32Array(TOTAL_STRIPS);
  const normAuxHost = new Uint32Array(TOTAL_STRIPS + DIM * DIM);
  const prepTmpU32 = new Uint32Array(12);
  const prepTmpF32 = new Float32Array(prepTmpU32.buffer);
  const u4Tmp = new Uint32Array(4);

  const setBandSlot = (slotIdx, isFull, zStart, stripOff, extOff, dPack, bgY0, bgZ0) => {
    const o = slotIdx * uboAlignU32;
    bandUboHost[o] = isFull ? 1 : 0;
    bandUboHost[o + 1] = zStart;
    bandUboHost[o + 2] = stripOff;
    bandUboHost[o + 3] = extOff;
    bandUboHost[o + 4] = dPack;
    bandUboHost[o + 5] = bgY0;
    bandUboHost[o + 6] = bgZ0;
    bandUboHost[o + 7] = 0;
  };

  async function execute(volume, ioOpts) {
    if (volume.length !== nvox) {
      throw new Error(`meshnet_fast_v4 expected ${nvox} voxels, got ${volume.length}`);
    }
    const useCone = d.norm === 'gn' && !modelEntry?.disableConeSkip;
    const prepRes = await ioCtl.prepareInput({
      volume,
      ioOpts,
      useCone,
      padInputHost,
      headRowHost,
      hasF16Flag: hasF16,
    });
    const info = prepRes.info;

    const schedule = computeConeSchedule(headRowHost, info, d.dilations, useCone);

    // Pre-bucket per-layer strip schedules into 32-slice Z-bands and populate bandUboHost ONCE
    const bandPlans = new Array(numConvs);
    for (let li = 0; li < numConvs; li++) {
      const L = schedule.layers[li];
      const nMain = L.isFull ? TOTAL_STRIPS : L.mainStrips.length;
      const nExt = L.isFull || !L.extStrips ? 0 : L.extStrips.length;
      const nHalo = L.haloRows ? L.haloRows.length : 0;

      if (li === 0) {
        if (!L.isFull && nMain > 0) {
          stripsHost.set(L.mainStrips, 0);
          device.queue.writeBuffer(strips0Ubo, 0, stripsHost.subarray(0, nMain));
          device.queue.writeBuffer(stripsBufs[0], 0, stripsHost.subarray(0, nMain));
        }
        bandPlans[0] = { L, nMain, nExt, nHalo };
        continue;
      }

      const mainStart = new Uint32Array(8);
      const mainCount = new Uint32Array(8);
      const extStart = new Uint32Array(8);
      const extCount = new Uint32Array(8);

      if (!L.isFull) {
        if (nMain > 0) {
          stripsHost.set(L.mainStrips, 0);
          for (let i = 0; i < nMain; i++) {
            mainCount[L.mainStrips[i] >>> 13]++;
          }
          let cur = 0;
          for (let b = 0; b < 8; b++) {
            mainStart[b] = cur;
            cur += mainCount[b];
          }
        }
        if (L.mode === 'bwd' && nExt > 0) {
          const buckets = Array.from({ length: 8 }, () => []);
          for (let j = 0; j < nExt; j++) {
            const pk = L.extStrips[j];
            buckets[pk >>> 13].push(((j & 0xFFFF) << 16) | pk);
          }
          let cur = nMain;
          for (let b = 0; b < 8; b++) {
            extStart[b] = cur;
            const bArr = buckets[b];
            extCount[b] = bArr.length;
            for (let k = 0; k < bArr.length; k++) stripsHost[cur++] = bArr[k];
          }
          device.queue.writeBuffer(stripsBufs[li], 0, stripsHost.subarray(0, nMain + nExt));
        } else if (nMain > 0) {
          device.queue.writeBuffer(stripsBufs[li], 0, stripsHost.subarray(0, nMain));
        }
      }

      const writeExtY8 = (L.mode === 'rpure' && nHalo > 0) || (L.mode === 'bwd' && li + 1 < numConvs);
      const dPack = packConvDilFlags(d.dilations[li], writeExtY8);
      const layerBaseSlot = (li - 1) * SLOTS_PER_LAYER;
      const bgY0 = L.bgStrip ? L.bgStrip.yWg * 4 : 0;
      const bgZ0 = L.bgStrip ? L.bgStrip.z : 0;
      for (let b = 0; b < 8; b++) {
        setBandSlot(layerBaseSlot + b, L.isFull, b * 32, mainStart[b], extStart[b], dPack, bgY0, bgZ0);
      }
      for (let fb = 0; fb < 6; fb++) {
        setBandSlot(layerBaseSlot + 8 + fb, L.isFull, fb * 32, mainStart[fb], 0, 0, 0, 0);
        setBandSlot(layerBaseSlot + 14 + fb, false, fb * 32, extStart[fb], 0, 0, 0, 0);
      }
      bandPlans[li] = { L, nMain, nExt, nHalo, mainCount, extCount, layerBaseSlot };
    }
    if (numConvs > 1) {
      device.queue.writeBuffer(bandUboBuf, 0, bandUboHost);
    }

    let execMode = resolveV4InitialExecMode(device, modelEntry);
    const passCategories = [];

    if (execMode === 'single') {
      const enc = device.createCommandEncoder();
      prepRes.runPrePasses(enc, passCategories);

      if (schedule.clsSkipped) {
        enc.clearBuffer(labels8Buf, 0, outBufBytes);
        if (schedule.clsStrips.length > 0) {
          device.queue.writeBuffer(clsStripsUbo, 0, schedule.clsStrips);
        }
      }

      for (let li = 0; li < numConvs; li++) {
        const bp = bandPlans[li];
        const { L, nMain, nHalo } = bp;
        const nMomExt = L.nMomExt || 0;
        const nNorm = L.isFull ? TOTAL_STRIPS : (L.normStrips ? L.normStrips.length : 0);

        if (li === 0) {
          const mainY = L.isFull ? 64 : 1;
          const mainZ = L.isFull ? DIM : nMain;
          const runBg = !!(L.bgStrip && nHalo > 0);
          u4Tmp[0] = L.isFull ? 1 : 0;
          u4Tmp[1] = L.bgStrip ? L.bgStrip.yWg * 4 : 0;
          u4Tmp[2] = L.bgStrip ? L.bgStrip.z : 0;
          u4Tmp[3] = 0;
          device.queue.writeBuffer(conv0Ubo, 0, u4Tmp);

          if (shaders.halfPass0) {
            for (const [pM, pB] of [[pConv0.lo, pConv0.bgLo], [pConv0.hi, pConv0.bgHi]]) {
              const pass = enc.beginComputePass();
              pass.setBindGroup(0, bgConv0);
              if (mainZ > 0) {
                pass.setPipeline(pM.pipe);
                pass.dispatchWorkgroups(1, mainY, mainZ);
              }
              if (runBg) {
                pass.setPipeline(pB.pipe);
                pass.dispatchWorkgroups(1, 1, 1);
              }
              pass.end();
              passCategories.push('conv0');
            }
          } else {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bgConv0);
            if (mainZ > 0) {
              pass.setPipeline(pConv0.main.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (runBg) {
              pass.setPipeline(pConv0.bg.pipe);
              pass.dispatchWorkgroups(1, 1, 1);
            }
            pass.end();
            passCategories.push('conv0');
          }
        } else {
          const pipes = pConv;
          const bgC = convBgs[li];
          const bgF = flushBgs[li];
          const { mainCount, extCount, layerBaseSlot } = bp;
          const runBg = L.mode === 'rpure' && !!L.bgStrip;

          for (let b = 0; b < 8; b++) {
            if (b >= 2) {
              const fb = b - 2;
              const doFlushMain = L.isFull || mainCount[fb] > 0;
              const doFlushExt = !L.isFull && L.mode === 'bwd' && extCount[fb] > 0;
              if (doFlushMain || doFlushExt) {
                const fPass = enc.beginComputePass();
                fPass.setPipeline(pFlush.pipe);
                if (doFlushMain) {
                  fPass.setBindGroup(0, bgF, [(layerBaseSlot + 8 + fb) * uboAlign]);
                  fPass.dispatchWorkgroups(1, L.isFull ? 64 : 1, L.isFull ? 32 : mainCount[fb]);
                }
                if (doFlushExt) {
                  fPass.setBindGroup(0, bgF, [(layerBaseSlot + 14 + fb) * uboAlign]);
                  fPass.dispatchWorkgroups(1, 1, extCount[fb]);
                }
                fPass.end();
                passCategories.push('flushStage');
              }
            }

            const doMain = L.isFull || mainCount[b] > 0;
            const doExt = !L.isFull && L.mode === 'bwd' && extCount[b] > 0;
            const doBg = b === 0 && runBg;
            if (!doMain && !doExt && !doBg) continue;

            const cDyn = [(layerBaseSlot + b) * uboAlign];
            const mainY = L.isFull ? 64 : 1;
            const mainZ = L.isFull ? 32 : mainCount[b];

            if (shaders.halfPassConv) {
              for (const [pM, pE, pB] of [[pipes.lo, pipes.extLo, pipes.bgLo], [pipes.hi, pipes.extHi, pipes.bgHi]]) {
                const pass = enc.beginComputePass();
                pass.setBindGroup(0, bgC, cDyn);
                if (doMain) {
                  pass.setPipeline(pM.pipe);
                  pass.dispatchWorkgroups(1, mainY, mainZ);
                }
                if (doExt) {
                  pass.setPipeline(pE.pipe);
                  pass.dispatchWorkgroups(1, 1, extCount[b]);
                }
                if (doBg) {
                  pass.setPipeline(pB.pipe);
                  pass.dispatchWorkgroups(1, 1, 1);
                }
                pass.end();
                passCategories.push('convHidden');
              }
            } else {
              const pass = enc.beginComputePass();
              pass.setBindGroup(0, bgC, cDyn);
              if (doMain) {
                pass.setPipeline(pipes.main.pipe);
                pass.dispatchWorkgroups(1, mainY, mainZ);
              }
              if (doExt) {
                pass.setPipeline(pipes.ext.pipe);
                pass.dispatchWorkgroups(1, 1, extCount[b]);
              }
              if (doBg) {
                pass.setPipeline(pipes.bg.pipe);
                pass.dispatchWorkgroups(1, 1, 1);
              }
              pass.end();
              passCategories.push('convHidden');
            }
          }
        }

        const nextWOff = li + 1 < numConvs ? packed.w0Vec4s + li * packed.hiddenVec4PerLayer : 0;
        prepTmpU32[0] = li * packed.metaStride;
        prepTmpU32[1] = nextWOff;
        prepTmpU32[2] = (li + 1) * packed.metaStride;
        prepTmpU32[3] = li + 1 < numConvs ? 1 : 0;
        prepTmpU32[4] = li === 0 ? 1 : 0;
        prepTmpU32[5] = L.isFull ? 1 : 0;
        prepTmpU32[6] = nMain;
        prepTmpU32[7] = nMomExt * 8;
        prepTmpF32[8] = L.extWeight || 0.0;
        prepTmpU32[9] = 0;
        prepTmpU32[10] = 0;
        prepTmpU32[11] = 0;
        device.queue.writeBuffer(prepUbos[li], 0, prepTmpU32);

        {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, prepBgs[li]);
          pass.setPipeline(pMomFin.pipe);
          pass.dispatchWorkgroups(d.cs, 1, 1);
          pass.end();
          passCategories.push('momentsPrep');
        }

        if (li + 1 < numConvs) {
          {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, prepBgs[li]);
            pass.setPipeline(pPrepW.pipe);
            pass.dispatchWorkgroups(1, 1, 1);
            pass.end();
            passCategories.push('momentsPrep');
          }

          const uploadNorm = !L.isFull ? nNorm : 0;
          if (uploadNorm > 0 || nHalo > 0) {
            if (uploadNorm > 0) normAuxHost.set(L.normStrips, 0);
            if (nHalo > 0) normAuxHost.set(L.haloRows, uploadNorm);
            device.queue.writeBuffer(normAuxBufs[li], 0, normAuxHost.subarray(0, uploadNorm + nHalo));
          }

          u4Tmp[0] = L.isFull ? 1 : 0;
          u4Tmp[1] = L.bgStrip ? L.bgStrip.z * DIM + L.bgStrip.yWg * 4 : 0;
          u4Tmp[2] = uploadNorm;
          u4Tmp[3] = nHalo;
          device.queue.writeBuffer(normUbos[li], 0, u4Tmp);

          if (L.isFull || nNorm > 0 || nHalo > 0) {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, normBgs[li]);
            if (L.isFull || nNorm > 0) {
              pass.setPipeline(pNorm.pipe);
              pass.dispatchWorkgroups(1, L.isFull ? 64 : 1, L.isFull ? DIM : nNorm);
            }
            if (nHalo > 0) {
              pass.setPipeline(pNormHalo.pipe);
              pass.dispatchWorkgroups(1, Math.ceil(nHalo / 4), 1);
            }
            pass.end();
            passCategories.push('normHalo');
          }
        }
      }

      execute.__passCategories = passCategories;
      return ioCtl.finishAndReadback({ enc, schedule, passCategories, u4Tmp, ioOpts });
    }

    // Pipelined (Linux / fast discrete Windows) or Paced/Calibrating (Windows TDR-safe Z-bands)
    const plat = detectV4Platform(device);
    const onProgress = typeof ioOpts?.onProgress === 'function' ? ioOpts.onProgress : null;
    const totalWork = estimateScheduleTotalWork(schedule, numConvs);
    let doneWork = 0;
    let lastLayerReported = -1;
    const emitProgress = (li) => {
      if (!onProgress) return;
      const frac = Math.min(0.99, doneWork / totalWork);
      let msg = '';
      if (li >= 0 && li !== lastLayerReported) {
        lastLayerReported = li;
        msg = `Layer ${li + 1}/${numConvs}`;
      }
      onProgress(frac, msg);
    };
    const pacer = createPacedQueueController(device, device.__v4MsPerStrip || 0.12, emitProgress);

    let enc = device.createCommandEncoder();
    prepRes.runPrePasses(enc, passCategories);

    if (schedule.clsSkipped) {
      enc.clearBuffer(labels8Buf, 0, outBufBytes);
      if (schedule.clsStrips.length > 0) {
        device.queue.writeBuffer(clsStripsUbo, 0, schedule.clsStrips);
      }
    }

    for (let li = 0; li < numConvs; li++) {
      const bp = bandPlans[li];
      const { L, nMain, nHalo } = bp;
      const nMomExt = L.nMomExt || 0;
      const nNorm = L.isFull ? TOTAL_STRIPS : (L.normStrips ? L.normStrips.length : 0);
      const lw = estimateScheduleLayerWork(L, li, numConvs);

      if (li === 0) {
        const mainY = L.isFull ? 64 : 1;
        const mainZ = L.isFull ? DIM : nMain;
        const runBg = !!(L.bgStrip && nHalo > 0);
        u4Tmp[0] = L.isFull ? 1 : 0;
        u4Tmp[1] = L.bgStrip ? L.bgStrip.yWg * 4 : 0;
        u4Tmp[2] = L.bgStrip ? L.bgStrip.z : 0;
        u4Tmp[3] = 0;
        device.queue.writeBuffer(conv0Ubo, 0, u4Tmp);

        if (shaders.halfPass0) {
          for (const [pM, pB] of [[pConv0.lo, pConv0.bgLo], [pConv0.hi, pConv0.bgHi]]) {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bgConv0);
            if (mainZ > 0) {
              pass.setPipeline(pM.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (runBg) {
              pass.setPipeline(pB.pipe);
              pass.dispatchWorkgroups(1, 1, 1);
            }
            pass.end();
            passCategories.push('conv0');
          }
        } else {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, bgConv0);
          if (mainZ > 0) {
            pass.setPipeline(pConv0.main.pipe);
            pass.dispatchWorkgroups(1, mainY, mainZ);
          }
          if (runBg) {
            pass.setPipeline(pConv0.bg.pipe);
            pass.dispatchWorkgroups(1, 1, 1);
          }
          pass.end();
          passCategories.push('conv0');
        }
        if (execMode === 'calibrate') {
          device.queue.submit([enc.finish()]);
          enc = device.createCommandEncoder();
        } else if (execMode === 'paced') {
          doneWork += lw.convWork;
          enc = await pacer.submitChunk(enc, lw.convWork, 0, { forceUiYield: true });
        }
      } else {
        const pipes = pConv;
        const bgC = convBgs[li];
        const bgF = flushBgs[li];
        const { mainCount, extCount, layerBaseSlot } = bp;
        const runBg = L.mode === 'rpure' && !!L.bgStrip;
        let pendingStrips = 0;

        for (let b = 0; b < 8; b++) {
          if (b >= 2) {
            const fb = b - 2;
            const doFlushMain = L.isFull || mainCount[fb] > 0;
            const doFlushExt = !L.isFull && L.mode === 'bwd' && extCount[fb] > 0;
            if (doFlushMain || doFlushExt) {
              const fPass = enc.beginComputePass();
              fPass.setPipeline(pFlush.pipe);
              if (doFlushMain) {
                fPass.setBindGroup(0, bgF, [(layerBaseSlot + 8 + fb) * uboAlign]);
                fPass.dispatchWorkgroups(1, L.isFull ? 64 : 1, L.isFull ? 32 : mainCount[fb]);
              }
              if (doFlushExt) {
                fPass.setBindGroup(0, bgF, [(layerBaseSlot + 14 + fb) * uboAlign]);
                fPass.dispatchWorkgroups(1, 1, extCount[fb]);
              }
              fPass.end();
              passCategories.push('flushStage');
            }
          }

          const doMain = L.isFull || mainCount[b] > 0;
          const doExt = !L.isFull && L.mode === 'bwd' && extCount[b] > 0;
          const doBg = b === 0 && runBg;
          if (doMain || doExt || doBg) {
            const cDyn = [(layerBaseSlot + b) * uboAlign];
            const mainY = L.isFull ? 64 : 1;
            const mainZ = L.isFull ? 32 : mainCount[b];

            if (shaders.halfPassConv) {
              for (const [pM, pE, pB] of [[pipes.lo, pipes.extLo, pipes.bgLo], [pipes.hi, pipes.extHi, pipes.bgHi]]) {
                const pass = enc.beginComputePass();
                pass.setBindGroup(0, bgC, cDyn);
                if (doMain) {
                  pass.setPipeline(pM.pipe);
                  pass.dispatchWorkgroups(1, mainY, mainZ);
                }
                if (doExt) {
                  pass.setPipeline(pE.pipe);
                  pass.dispatchWorkgroups(1, 1, extCount[b]);
                }
                if (doBg) {
                  pass.setPipeline(pB.pipe);
                  pass.dispatchWorkgroups(1, 1, 1);
                }
                pass.end();
                passCategories.push('convHidden');
              }
            } else {
              const pass = enc.beginComputePass();
              pass.setBindGroup(0, bgC, cDyn);
              if (doMain) {
                pass.setPipeline(pipes.main.pipe);
                pass.dispatchWorkgroups(1, mainY, mainZ);
              }
              if (doExt) {
                pass.setPipeline(pipes.ext.pipe);
                pass.dispatchWorkgroups(1, 1, extCount[b]);
              }
              if (doBg) {
                pass.setPipeline(pipes.bg.pipe);
                pass.dispatchWorkgroups(1, 1, 1);
              }
              pass.end();
              passCategories.push('convHidden');
            }

            pendingStrips += (doMain ? (L.isFull ? 2048 : mainCount[b]) : 0) + (doExt ? extCount[b] : 0);
          }

          if (execMode === 'calibrate' && (pendingStrips >= 512 || (b === 7 && pendingStrips > 0))) {
            const tSub = performance.now();
            device.queue.submit([enc.finish()]);
            await device.queue.onSubmittedWorkDone();
            const dt = performance.now() - tSub;
            enc = device.createCommandEncoder();
            doneWork += pendingStrips;
            if (pendingStrips >= 512) {
              const msPerStrip = dt / pendingStrips;
              const estFullLayerMs = msPerStrip * TOTAL_STRIPS;
              device.__v4WinCalibrated = true;
              pacer.setMsPerStrip(msPerStrip);
              if (!plat.isWindowsSharedIgpu && estFullLayerMs < WINDOWS_FAST_LAYER_MAX_MS) {
                device.__v4WinFast = true;
                execMode = 'pipelined';
                console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${estFullLayerMs.toFixed(1)}ms -> unthrottled pipelined mode`);
              } else {
                device.__v4WinFast = false;
                execMode = 'paced';
                console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${estFullLayerMs.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`);
                emitProgress(li);
              }
            }
            pendingStrips = 0;
          } else if (
            execMode === 'paced' &&
            pendingStrips > 0 &&
            (pendingStrips * pacer.getMsPerStrip() >= PACED_TARGET_CHUNK_MS * 0.75 || b === 7)
          ) {
            doneWork += pendingStrips;
            enc = await pacer.submitChunk(enc, pendingStrips, li);
            pendingStrips = 0;
          }
        }
      }

      const nextWOff = li + 1 < numConvs ? packed.w0Vec4s + li * packed.hiddenVec4PerLayer : 0;
      prepTmpU32[0] = li * packed.metaStride;
      prepTmpU32[1] = nextWOff;
      prepTmpU32[2] = (li + 1) * packed.metaStride;
      prepTmpU32[3] = li + 1 < numConvs ? 1 : 0;
      prepTmpU32[4] = li === 0 ? 1 : 0;
      prepTmpU32[5] = L.isFull ? 1 : 0;
      prepTmpU32[6] = nMain;
      prepTmpU32[7] = nMomExt * 8;
      prepTmpF32[8] = L.extWeight || 0.0;
      prepTmpU32[9] = 0;
      prepTmpU32[10] = 0;
      prepTmpU32[11] = 0;
      device.queue.writeBuffer(prepUbos[li], 0, prepTmpU32);

      {
        const pass = enc.beginComputePass();
        pass.setBindGroup(0, prepBgs[li]);
        pass.setPipeline(pMomFin.pipe);
        pass.dispatchWorkgroups(d.cs, 1, 1);
        pass.end();
        passCategories.push('momentsPrep');
      }

      if (li + 1 < numConvs) {
        {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, prepBgs[li]);
          pass.setPipeline(pPrepW.pipe);
          pass.dispatchWorkgroups(1, 1, 1);
          pass.end();
          passCategories.push('momentsPrep');
        }

        const uploadNorm = !L.isFull ? nNorm : 0;
        if (uploadNorm > 0 || nHalo > 0) {
          if (uploadNorm > 0) normAuxHost.set(L.normStrips, 0);
          if (nHalo > 0) normAuxHost.set(L.haloRows, uploadNorm);
          device.queue.writeBuffer(normAuxBufs[li], 0, normAuxHost.subarray(0, uploadNorm + nHalo));
        }

        u4Tmp[0] = L.isFull ? 1 : 0;
        u4Tmp[1] = L.bgStrip ? L.bgStrip.z * DIM + L.bgStrip.yWg * 4 : 0;
        u4Tmp[2] = uploadNorm;
        u4Tmp[3] = nHalo;
        device.queue.writeBuffer(normUbos[li], 0, u4Tmp);

        if (L.isFull || nNorm > 0 || nHalo > 0) {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, normBgs[li]);
          if (L.isFull || nNorm > 0) {
            pass.setPipeline(pNorm.pipe);
            pass.dispatchWorkgroups(1, L.isFull ? 64 : 1, L.isFull ? DIM : nNorm);
          }
          if (nHalo > 0) {
            pass.setPipeline(pNormHalo.pipe);
            pass.dispatchWorkgroups(1, Math.ceil(nHalo / 4), 1);
          }
          pass.end();
          passCategories.push('normHalo');
        }
      }

      if (execMode === 'pipelined') {
        device.queue.submit([enc.finish()]);
        enc = device.createCommandEncoder();
      } else if (execMode === 'calibrate') {
        // Flush Layer 0 residency page-in cleanly so Layer 1 calibrates steady-state GPU speed
        device.queue.submit([enc.finish()]);
        await device.queue.onSubmittedWorkDone();
        enc = device.createCommandEncoder();
        doneWork += (li === 0 ? lw.convWork : 0) + lw.normWork;
        if (li === numConvs - 1 && !device.__v4WinCalibrated) {
          device.__v4WinCalibrated = true;
          device.__v4WinFast = !plat.isWindowsSharedIgpu;
        }
      } else {
        doneWork += lw.normWork;
        enc = await pacer.submitChunk(enc, lw.normWork, li);
      }
    }

    if (execMode === 'paced') {
      await pacer.waitBeforeFinalSubmit();
    }
    execute.__passCategories = passCategories;
    return ioCtl.finishAndReadback({
      enc,
      schedule,
      passCategories,
      u4Tmp,
      ioOpts,
      paced: execMode === 'paced',
      onProgress,
    });
  }

  ioCtl.warmupIoPipelines();

  execute.dispose = ({ keepSharedWorkspace = false } = {}) => {
    ioCtl.dispose();
    for (const b of ownedBuffers) b.destroy();
    ownedBuffers.length = 0;
    ownedAlloc.resetBytes();
    if (!ws.pooled) {
      for (const b of ws.buffers) b.destroy();
      ws.buffers.length = 0;
    } else if (keepSharedWorkspace) {
      ws.inUse = false;
    } else if (v4WorkspacePool.get(device) === ws) {
      releaseV4Workspace(device);
    }
  };
  execute.gpuBytes = () => ws.bytes + ownedAlloc.getBytes();
  execute.__passCategories = [];
  execute.__coneInfo = () => ({ paddedVox, actMiB: actQBytes / 1048576, mode: 'LowMem128' });
  execute.kernels = 'v4-int8';
  return execute;
}

export const supportsF32Fallback = true;

export async function setupNet(device, safetensorBytes, callbackUI, modelEntry = {}) {
  activeUserSetups++;
  try {
    return await setupNetInner(device, safetensorBytes, callbackUI, modelEntry);
  } finally {
    activeUserSetups--;
  }
}

async function setupNetInner(device, safetensorBytes, callbackUI, modelEntry = {}) {
  const bytes = safetensorBytes instanceof Uint8Array ? safetensorBytes : new Uint8Array(safetensorBytes);
  const parsed = parseSafetensors(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
  const desc = describeSafetensors(parsed);
  if (modelEntry?.classifierBias && desc.classifier) {
    desc.classifier.bias = Float32Array.from(modelEntry.classifierBias);
  }
  const modelDesc = descriptorFor(modelEntry);
  const dilations = modelEntry?.dilations || modelDesc?.dilations || (desc.convs.length === 25
    ? [16, 8, 4, 2, 1, 16, 8, 4, 2, 1, 16, 8, 4, 2, 1, 16, 8, 4, 2, 1, 16, 8, 4, 2, 1]
    : desc.convs.length === 9
      ? [1, 2, 4, 8, 16, 8, 4, 2, 1]
      : DEEP13);
  const activation = modelEntry?.activation || modelDesc?.activation || (desc.affines.length || desc.convs.length >= 13 ? 'gelu_tanh' : 'relu');

  const rawChan = desc.convs[0].outC;
  const cs = rawChan > 8 ? Math.ceil(rawChan / 8) * 8 : Math.ceil(rawChan / 4) * 4;
  const d = deriveDescriptor(desc, { nx: DIM, ny: DIM, nz: DIM, cs, activation, dilations });
  const packed = getPackedWeightsCached(bytes, desc, d, modelEntry);
  const probCfg = modelEntry?.outputType === 'probability' ? tissueProbabilityConfig(modelEntry, d.nclass) : null;

  const hasF16 = !!device.features?.has?.('shader-f16') && !modelEntry?.disableF16;
  const subgroupMode = resolveSubgroupMode(device, modelEntry);

  const nvox = DIM * DIM * DIM;
  const outBufBytes = probCfg ? nvox * 4 : nvox;
  const splitHalves = d.cs >= 16;
  const csHalf = splitHalves ? d.cs / 2 : d.cs;
  const actBytes = DIM * DIM * csHalf * X4_PAD * 4;
  const y8Bytes = DIM * DIM * csHalf * X4_VALID * 4;

  const lim = device.limits || {};
  const maxAllowed = Math.min(lim.maxStorageBufferBindingSize ?? Infinity, lim.maxBufferSize ?? Infinity);
  const preferWin128 = shouldPreferLowMem128OnWindows(device, d, modelEntry);
  if ((modelEntry?.forceLowMem128 || preferWin128 || actBytes > maxAllowed || outBufBytes > maxAllowed) && d.cs >= 8 && d.cs % 4 === 0) {
    return setupNetLowMem128(device, d, packed, hasF16, subgroupMode, modelEntry, probCfg);
  }
  if (actBytes > maxAllowed || outBufBytes > maxAllowed) {
    const needMiB = Math.max(actBytes, outBufBytes) >>> 20;
    throw new Error(`meshnet_fast_v4: buffer (${needMiB} MiB) exceeds device limit (${maxAllowed >>> 20} MiB)`);
  }

  const chunkableStd = shouldUseStdChunking(device, modelEntry);
  const shaders = buildShaders({
    cs: d.cs,
    chan: d.chan,
    nclass: d.nclass,
    clsK4: packed.clsK4,
    dilations: d.dilations,
    activation: d.activation,
    norm: d.norm,
    hasF16,
    subgroupMode,
    splitHalves,
    probCfg,
    chunkableStd,
  });

  console.log(
    `[WebGPU-V4] ${d.chan}ch(cs=${d.cs})/${d.nclass}cls (${d.dilations.length} convs, ${d.activation}, norm=${d.norm}` +
    `${probCfg ? ', prob=3' : ''}) | ${hasF16 ? 'f16+sterbenz' : 'f32'} | ${subgroupModeLabel(subgroupMode)} ` +
    `| ZYCX-pad80 | maxBuf=${(Math.max(actBytes, outBufBytes) / 1048576).toFixed(1)} MiB`
  );

  const S = GPUBufferUsage.STORAGE;
  const CD = GPUBufferUsage.COPY_DST;
  const CS = GPUBufferUsage.COPY_SRC;

  const paddedVox = DIM * DIM * ROW_SCALARS_PAD;
  const inpBytes = paddedVox * (hasF16 ? 2 : 4);
  const momMainBytes = TOTAL_HALF_ROWS * d.cs * 16;
  const momExtBytes = MAX_EXT_HALF_ROWS * d.cs * 16;
  const momStatsBytes = (d.cs * 2 + 4) * 16;
  const wEffBytes = hasF16 ? Math.ceil(shaders.totalWEffVec4s / 2) * 16 : shaders.totalWEffVec4s * 16;

  const wsKey = `std|${d.cs}|${splitHalves ? 1 : 0}|${hasF16 ? 1 : 0}|${outBufBytes}`;
  const ws = acquireV4Workspace(device, wsKey, () => {
    const buffers = [];
    const wsAlloc = createBufAllocator(device, buffers);
    const mkWs = wsAlloc.alloc;
    const named = {
      inpBuf: mkWs(inpBytes, S | CD | CS),
      act8_0: mkWs(actBytes, S | CD | CS),
      act8_1: mkWs(splitHalves ? actBytes : 16, S | CD | CS),
      y8_0: mkWs(y8Bytes, S | CD | CS),
      y8_1: mkWs(splitHalves ? y8Bytes : 16, S | CD | CS),
      momMainBuf: mkWs(momMainBytes, S),
      momExtBuf: mkWs(momExtBytes, S),
      momStatsBuf: mkWs(momStatsBytes, S),
      labels8Buf: mkWs(outBufBytes, S | CD | CS),
      readbackBuf: mkWs(outBufBytes, GPUBufferUsage.MAP_READ | CD),
    };
    return { buffers, named, bytes: wsAlloc.getBytes() };
  });
  const {
    inpBuf,
    act8_0,
    act8_1,
    y8_0,
    y8_1,
    momMainBuf,
    momExtBuf,
    momStatsBuf,
    labels8Buf,
    readbackBuf,
  } = ws.named;

  const ownedBuffers = [];
  const ownedAlloc = createBufAllocator(device, ownedBuffers);
  const mkBuf = ownedAlloc.alloc;

  const wRawBuf = mkBuf(hasF16 ? packed.wF16.byteLength : packed.wF32.byteLength, S | CD);
  const qmetaBuf = mkBuf(packed.qmetaF32.byteLength, S | CD);
  const wEffBuf = mkBuf(wEffBytes, shaders.useUniformWeff ? (S | GPUBufferUsage.UNIFORM) : S);

  const numConvs = d.dilations.length;
  const canCone = d.norm === 'gn' && !modelEntry?.disableConeSkip;
  const stripsBufs = Array.from({ length: numConvs }, () => mkBuf(canCone ? TOTAL_STRIPS * 4 : 16, S | CD));
  const normAuxBufs = Array.from({ length: numConvs - 1 }, () => mkBuf(canCone ? (TOTAL_STRIPS + DIM * DIM) * 4 : 16, S | CD));
  const clsStripsBuf = mkBuf(canCone ? TOTAL_STRIPS * 4 : 16, S | CD);

  const conv0Ubo = mkBuf(16, GPUBufferUsage.UNIFORM | CD);
  const clsUbo = mkBuf(16, GPUBufferUsage.UNIFORM | CD);
  const prepUbos = Array.from({ length: numConvs }, () => mkBuf(48, GPUBufferUsage.UNIFORM | CD));
  const normUbos = Array.from({ length: numConvs - 1 }, () => mkBuf(16, GPUBufferUsage.UNIFORM | CD));

  const uboAlign = Math.max(256, lim.minUniformBufferOffsetAlignment || 256);
  const uboAlignU32 = uboAlign >>> 2;
  const totalStdSlots = shaders.chunkableStd ? Math.max(1, (numConvs - 1) * STD_SLOTS_PER_LAYER) : 0;
  const stdChunkUboBuf = shaders.chunkableStd ? mkBuf(totalStdSlots * uboAlign, GPUBufferUsage.UNIFORM | CD) : null;
  const stdChunkUboHost = shaders.chunkableStd ? new Uint32Array(totalStdSlots * uboAlignU32) : null;
  const convUbos = shaders.chunkableStd ? null : Array.from({ length: numConvs }, () => mkBuf(16, GPUBufferUsage.UNIFORM | CD));

  device.queue.writeBuffer(wRawBuf, 0, hasF16 ? packed.wF16 : packed.wF32);
  device.queue.writeBuffer(qmetaBuf, 0, packed.qmetaF32);

  // Compile/cache shader modules and pipelines per kernel group per device
  let pipes;
  try {
    pipes = await getNetPipesStd(
      device,
      d,
      packed,
      hasF16,
      subgroupMode,
      splitHalves,
      probCfg,
      shaders
    );
  } catch (err) {
    for (const b of ownedBuffers) b.destroy();
    ownedBuffers.length = 0;
    if (!ws.pooled) {
      for (const b of ws.buffers) b.destroy();
      ws.buffers.length = 0;
    } else if (v4WorkspacePool.get(device) === ws) {
      releaseV4Workspace(device);
    }
    throw err;
  }
  const { pInit, pMomFin, pPrepW, pNorm, pNormHalo, pCls, pConv0, pConv } = pipes;

  const mkBg = (bgl, bufs) => device.createBindGroup({
    layout: bgl,
    entries: bufs.map((res, binding) => ({
      binding,
      resource: res && res.buffer ? res : { buffer: res },
    })),
  });

  const bgInit = mkBg(pInit.bgl, [act8_0, act8_1]);
  // Initialize permanent left/right X-row zero halos [0..7] and [72..79] in act8_0/1 ONCE
  {
    const enc = device.createCommandEncoder();
    const pass = enc.beginComputePass();
    pass.setPipeline(pInit.pipe);
    pass.setBindGroup(0, bgInit);
    pass.dispatchWorkgroups(1, DIM, DIM);
    pass.end();
    device.queue.submit([enc.finish()]);
  }

  const p0Bgl = (shaders.halfPass0 ? pConv0.lo : pConv0.main).bgl;
  const bgConv0 = mkBg(p0Bgl, [inpBuf, y8_0, y8_1, wRawBuf, qmetaBuf, momMainBuf, momExtBuf, stripsBufs[0], conv0Ubo]);
  const bgCls = mkBg(pCls.bgl, [y8_0, y8_1, wRawBuf, qmetaBuf, momMainBuf, momStatsBuf, labels8Buf, clsStripsBuf, clsUbo]);
  const canGpuProb = !!(probCfg && splitHalves && actBytes >= outBufBytes && y8Bytes >= outBufBytes);
  const clsUbo1 = canGpuProb ? mkBuf(16, GPUBufferUsage.UNIFORM | CD) : null;
  const bgCls1 = canGpuProb
    ? mkBg(pCls.bgl, [y8_0, y8_1, wRawBuf, qmetaBuf, momMainBuf, momStatsBuf, labels8Buf, clsStripsBuf, clsUbo1])
    : null;
  const ioCtl = createGpuIoController({
    device,
    hasF16,
    nvox,
    outBufBytes,
    inpBuf,
    act8_0,
    labels8Buf,
    readbackBuf,
    pInit,
    bgInit,
    pCls,
    bgCls,
    clsUbo,
    packed,
    modelEntry,
    probCfg,
    canGpuProb,
    probSlots: canGpuProb
      ? {
          clsUbo1,
          bgCls1,
          pass0HoldBuf: act8_0,
          y0: y8_0,
          y1: y8_1,
          b: act8_1,
          sup: act8_0,
        }
      : null,
    ownedBuffers,
    mkBuf,
  });

  const prepBgs = prepUbos.map((ubo, li) =>
    mkBg(pMomFin.bgl, [wRawBuf, qmetaBuf, momMainBuf, momExtBuf, momStatsBuf, wEffBuf, stripsBufs[li], ubo])
  );
  const normBgs = normUbos.map((ubo, li) =>
    mkBg(pNorm.bgl, [act8_0, act8_1, y8_0, y8_1, momMainBuf, momExtBuf, momStatsBuf, normAuxBufs[li], ubo])
  );
  const stdDynRes = shaders.chunkableStd ? { buffer: stdChunkUboBuf, offset: 0, size: 32 } : null;
  const convP0 = shaders.halfPassConv ? pConv.lo : pConv.main;
  const convBgs = Array.from({ length: numConvs }, (_, li) =>
    li === 0
      ? null
      : mkBg(convP0.bgl, [
          act8_0, act8_1, y8_0, y8_1, momMainBuf, momExtBuf, wEffBuf, stripsBufs[li],
          shaders.chunkableStd ? stdDynRes : convUbos[li],
        ])
  );

  const setStdSlot = (slotIdx, isFull, nMain, dPack, mainOff, extBase) => {
    const o = slotIdx * uboAlignU32;
    stdChunkUboHost[o] = isFull ? 1 : 0;
    stdChunkUboHost[o + 1] = nMain;
    stdChunkUboHost[o + 2] = dPack;
    stdChunkUboHost[o + 3] = 0; // Must remain 0u for icLim unroll barrier
    stdChunkUboHost[o + 4] = mainOff;
    stdChunkUboHost[o + 5] = extBase;
    stdChunkUboHost[o + 6] = 0;
    stdChunkUboHost[o + 7] = 0;
  };

  const dispatchStdConv = (enc, pipes, bg, dynOffsets, mainY, mainCountZ, extCountZ, passCategories) => {
    if (mainCountZ <= 0 && extCountZ <= 0) return;
    if (shaders.halfPassConv) {
      {
        const pass = enc.beginComputePass();
        if (dynOffsets) pass.setBindGroup(0, bg, dynOffsets);
        else pass.setBindGroup(0, bg);
        if (mainCountZ > 0) {
          pass.setPipeline(pipes.lo.pipe);
          pass.dispatchWorkgroups(1, mainY, mainCountZ);
        }
        if (extCountZ > 0) {
          pass.setPipeline(pipes.extLo.pipe);
          pass.dispatchWorkgroups(1, 1, extCountZ);
        }
        pass.end();
        passCategories.push('convHidden');
      }
      {
        const pass = enc.beginComputePass();
        if (dynOffsets) pass.setBindGroup(0, bg, dynOffsets);
        else pass.setBindGroup(0, bg);
        if (mainCountZ > 0) {
          pass.setPipeline(pipes.hi.pipe);
          pass.dispatchWorkgroups(1, mainY, mainCountZ);
        }
        if (extCountZ > 0) {
          pass.setPipeline(pipes.extHi.pipe);
          pass.dispatchWorkgroups(1, 1, extCountZ);
        }
        pass.end();
        passCategories.push('convHidden');
      }
    } else {
      const pass = enc.beginComputePass();
      if (dynOffsets) pass.setBindGroup(0, bg, dynOffsets);
      else pass.setBindGroup(0, bg);
      if (mainCountZ > 0) {
        pass.setPipeline(pipes.main.pipe);
        pass.dispatchWorkgroups(1, mainY, mainCountZ);
      }
      if (extCountZ > 0) {
        pass.setPipeline(pipes.ext.pipe);
        pass.dispatchWorkgroups(1, 1, extCountZ);
      }
      pass.end();
      passCategories.push('convHidden');
    }
  };

  const padInputHost = hasF16 ? new Uint16Array(paddedVox) : new Float32Array(paddedVox);
  const headRowHost = new Uint8Array(DIM * DIM);
  const stripsHost = new Uint32Array(TOTAL_STRIPS);
  const normAuxHost = new Uint32Array(TOTAL_STRIPS + DIM * DIM);
  const prepTmpU32 = new Uint32Array(12);
  const prepTmpF32 = new Float32Array(prepTmpU32.buffer);
  const u4Tmp = new Uint32Array(4);

  async function execute(volume, ioOpts) {
    if (volume.length !== nvox) {
      throw new Error(`meshnet_fast_v4 expected ${nvox} voxels, got ${volume.length}`);
    }
    const useCone = d.norm === 'gn' && !modelEntry?.disableConeSkip;
    const prepRes = await ioCtl.prepareInput({
      volume,
      ioOpts,
      useCone,
      padInputHost,
      headRowHost,
      hasF16Flag: hasF16,
    });
    const info = prepRes.info;

    const schedule = computeConeSchedule(headRowHost, info, d.dilations, useCone);
    let execMode = resolveV4InitialExecMode(device, modelEntry);
    const passCategories = [];

    if (execMode === 'single' && !shaders.chunkableStd) {
      const enc = device.createCommandEncoder();
      prepRes.runPrePasses(enc, passCategories);

      if (schedule.clsSkipped) {
        enc.clearBuffer(labels8Buf, 0, outBufBytes);
        if (schedule.clsStrips.length > 0) {
          device.queue.writeBuffer(clsStripsBuf, 0, schedule.clsStrips);
        }
      }

      for (let li = 0; li < numConvs; li++) {
        const L = schedule.layers[li];
        const nMain = L.isFull ? TOTAL_STRIPS : L.mainStrips.length;
        const nExt = L.isFull || !L.extStrips ? 0 : L.extStrips.length;
        const nMomExt = L.nMomExt || 0;
        const nHalo = L.haloRows ? L.haloRows.length : 0;
        const nNorm = L.isFull ? TOTAL_STRIPS : (L.normStrips ? L.normStrips.length : 0);

        if (!L.isFull && (nMain > 0 || nExt > 0)) {
          if (nMain > 0) stripsHost.set(L.mainStrips, 0);
          if (nExt > 0) stripsHost.set(L.extStrips, nMain);
          device.queue.writeBuffer(stripsBufs[li], 0, stripsHost.subarray(0, nMain + nExt));
        }

        if (li === 0) {
          const mainY = L.isFull ? 64 : 1;
          const mainZ = L.isFull ? DIM : nMain;
          const runBg = !!(L.bgStrip && nHalo > 0);
          u4Tmp[0] = L.isFull ? 1 : 0;
          u4Tmp[1] = L.bgStrip ? L.bgStrip.yWg * 4 : 0;
          u4Tmp[2] = L.bgStrip ? L.bgStrip.z : 0;
          u4Tmp[3] = 0;
          device.queue.writeBuffer(conv0Ubo, 0, u4Tmp);

          if (shaders.halfPass0) {
            {
              const pass = enc.beginComputePass();
              pass.setBindGroup(0, bgConv0);
              if (mainZ > 0) {
                pass.setPipeline(pConv0.lo.pipe);
                pass.dispatchWorkgroups(1, mainY, mainZ);
              }
              if (runBg) {
                pass.setPipeline(pConv0.bgLo.pipe);
                pass.dispatchWorkgroups(1, 1, 1);
              }
              pass.end();
              passCategories.push('conv0');
            }
            {
              const pass = enc.beginComputePass();
              pass.setBindGroup(0, bgConv0);
              if (mainZ > 0) {
                pass.setPipeline(pConv0.hi.pipe);
                pass.dispatchWorkgroups(1, mainY, mainZ);
              }
              if (runBg) {
                pass.setPipeline(pConv0.bgHi.pipe);
                pass.dispatchWorkgroups(1, 1, 1);
              }
              pass.end();
              passCategories.push('conv0');
            }
          } else {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bgConv0);
            if (mainZ > 0) {
              pass.setPipeline(pConv0.main.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (runBg) {
              pass.setPipeline(pConv0.bg.pipe);
              pass.dispatchWorkgroups(1, 1, 1);
            }
            pass.end();
            passCategories.push('conv0');
          }
        } else {
          const dil = d.dilations[li];
          const bg = convBgs[li];
          const mainY = L.isFull ? 64 : 1;
          const mainZ = L.isFull ? DIM : nMain;
          const writeExtY8 = (L.mode === 'rpure' && nHalo > 0) || (L.mode === 'bwd' && li + 1 < numConvs);
          u4Tmp[0] = L.isFull ? 1 : 0;
          u4Tmp[1] = nMain;
          u4Tmp[2] = packConvDilFlags(dil, writeExtY8);
          u4Tmp[3] = 0;
          device.queue.writeBuffer(convUbos[li], 0, u4Tmp);
          dispatchStdConv(enc, pConv, bg, null, mainY, mainZ, nExt, passCategories);
        }

        // Upload prepUbo
        const nextWOff = li + 1 < numConvs ? packed.w0Vec4s + li * packed.hiddenVec4PerLayer : 0;
        prepTmpU32[0] = li * packed.metaStride;
        prepTmpU32[1] = nextWOff;
        prepTmpU32[2] = (li + 1) * packed.metaStride;
        prepTmpU32[3] = li + 1 < numConvs ? 1 : 0;
        prepTmpU32[4] = li === 0 ? 1 : 0;
        prepTmpU32[5] = L.isFull ? 1 : 0;
        prepTmpU32[6] = nMain;
        prepTmpU32[7] = nMomExt * 8;
        prepTmpF32[8] = L.extWeight || 0.0;
        prepTmpU32[9] = 0;
        prepTmpU32[10] = 0;
        prepTmpU32[11] = 0;
        device.queue.writeBuffer(prepUbos[li], 0, prepTmpU32);

        // Explicit pass boundary: moments_finish -> prep_weff -> norm_quant8
        {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, prepBgs[li]);
          pass.setPipeline(pMomFin.pipe);
          pass.dispatchWorkgroups(d.cs, 1, 1);
          pass.end();
          passCategories.push('momentsPrep');
        }

        if (li + 1 < numConvs) {
          {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, prepBgs[li]);
            pass.setPipeline(pPrepW.pipe);
            pass.dispatchWorkgroups(1, 1, 1);
            pass.end();
            passCategories.push('momentsPrep');
          }

          const uploadNorm = !L.isFull ? nNorm : 0;
          if (uploadNorm > 0 || nHalo > 0) {
            if (uploadNorm > 0) normAuxHost.set(L.normStrips, 0);
            if (nHalo > 0) normAuxHost.set(L.haloRows, uploadNorm);
            device.queue.writeBuffer(normAuxBufs[li], 0, normAuxHost.subarray(0, uploadNorm + nHalo));
          }

          u4Tmp[0] = L.isFull ? 1 : 0;
          u4Tmp[1] = L.bgStrip ? L.bgStrip.z * DIM + L.bgStrip.yWg * 4 : 0;
          u4Tmp[2] = uploadNorm;
          u4Tmp[3] = nHalo;
          device.queue.writeBuffer(normUbos[li], 0, u4Tmp);

          if (L.isFull || nNorm > 0 || nHalo > 0) {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, normBgs[li]);
            if (L.isFull || nNorm > 0) {
              pass.setPipeline(pNorm.pipe);
              pass.dispatchWorkgroups(1, L.isFull ? 64 : 1, L.isFull ? DIM : nNorm);
            }
            if (nHalo > 0) {
              pass.setPipeline(pNormHalo.pipe);
              pass.dispatchWorkgroups(1, Math.ceil(nHalo / 4), 1);
            }
            pass.end();
            passCategories.push('normHalo');
          }
        }
      }

      execute.__passCategories = passCategories;
      return ioCtl.finishAndReadback({ enc, schedule, passCategories, u4Tmp, ioOpts });
    }

    // Pipelined (Linux / calibrated fast Windows GPUs) or Paced/Calibrating (Windows TDR-safe Z-chunks)
    const plat = detectV4Platform(device);
    const onProgress = typeof ioOpts?.onProgress === 'function' ? ioOpts.onProgress : null;
    const totalWork = estimateScheduleTotalWork(schedule, numConvs);
    let doneWork = 0;
    let lastLayerReported = -1;
    const emitProgress = (li) => {
      if (!onProgress) return;
      const frac = Math.min(0.99, doneWork / totalWork);
      let msg = '';
      if (li >= 0 && li !== lastLayerReported) {
        lastLayerReported = li;
        msg = `Layer ${li + 1}/${numConvs}`;
      }
      onProgress(frac, msg);
    };
    const pacer = createPacedQueueController(device, device.__v4MsPerStrip || 0.12, emitProgress);

    let enc = device.createCommandEncoder();
    prepRes.runPrePasses(enc, passCategories);

    if (schedule.clsSkipped) {
      enc.clearBuffer(labels8Buf, 0, outBufBytes);
      if (schedule.clsStrips.length > 0) {
        device.queue.writeBuffer(clsStripsBuf, 0, schedule.clsStrips);
      }
    }

    for (let li = 0; li < numConvs; li++) {
      const L = schedule.layers[li];
      const nMain = L.isFull ? TOTAL_STRIPS : L.mainStrips.length;
      const nExt = L.isFull || !L.extStrips ? 0 : L.extStrips.length;
      const nMomExt = L.nMomExt || 0;
      const nHalo = L.haloRows ? L.haloRows.length : 0;
      const nNorm = L.isFull ? TOTAL_STRIPS : (L.normStrips ? L.normStrips.length : 0);
      const lw = estimateScheduleLayerWork(L, li, numConvs);

      if (!L.isFull && (nMain > 0 || nExt > 0)) {
        if (nMain > 0) stripsHost.set(L.mainStrips, 0);
        if (nExt > 0) stripsHost.set(L.extStrips, nMain);
        device.queue.writeBuffer(stripsBufs[li], 0, stripsHost.subarray(0, nMain + nExt));
      }

      if (li === 0) {
        const mainY = L.isFull ? 64 : 1;
        const mainZ = L.isFull ? DIM : nMain;
        const runBg = !!(L.bgStrip && nHalo > 0);
        u4Tmp[0] = L.isFull ? 1 : 0;
        u4Tmp[1] = L.bgStrip ? L.bgStrip.yWg * 4 : 0;
        u4Tmp[2] = L.bgStrip ? L.bgStrip.z : 0;
        u4Tmp[3] = 0;
        device.queue.writeBuffer(conv0Ubo, 0, u4Tmp);

        if (shaders.halfPass0) {
          {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bgConv0);
            if (mainZ > 0) {
              pass.setPipeline(pConv0.lo.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (runBg) {
              pass.setPipeline(pConv0.bgLo.pipe);
              pass.dispatchWorkgroups(1, 1, 1);
            }
            pass.end();
            passCategories.push('conv0');
          }
          {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bgConv0);
            if (mainZ > 0) {
              pass.setPipeline(pConv0.hi.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (runBg) {
              pass.setPipeline(pConv0.bgHi.pipe);
              pass.dispatchWorkgroups(1, 1, 1);
            }
            pass.end();
            passCategories.push('conv0');
          }
        } else {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, bgConv0);
          if (mainZ > 0) {
            pass.setPipeline(pConv0.main.pipe);
            pass.dispatchWorkgroups(1, mainY, mainZ);
          }
          if (runBg) {
            pass.setPipeline(pConv0.bg.pipe);
            pass.dispatchWorkgroups(1, 1, 1);
          }
          pass.end();
          passCategories.push('conv0');
        }
        if (execMode === 'calibrate') {
          device.queue.submit([enc.finish()]);
          enc = device.createCommandEncoder();
        } else if (execMode === 'paced') {
          doneWork += lw.convWork;
          enc = await pacer.submitChunk(enc, lw.convWork, 0, { forceUiYield: true });
        }
      } else {
        const dil = d.dilations[li];
        const bg = convBgs[li];
        const mainY = L.isFull ? 64 : 1;
        const mainZ = L.isFull ? DIM : nMain;
        const writeExtY8 = (L.mode === 'rpure' && nHalo > 0) || (L.mode === 'bwd' && li + 1 < numConvs);
        const dPack = packConvDilFlags(dil, writeExtY8);

        if (!shaders.chunkableStd) {
          u4Tmp[0] = L.isFull ? 1 : 0;
          u4Tmp[1] = nMain;
          u4Tmp[2] = dPack;
          u4Tmp[3] = 0;
          device.queue.writeBuffer(convUbos[li], 0, u4Tmp);
          dispatchStdConv(enc, pConv, bg, null, mainY, mainZ, nExt, passCategories);
        } else if (execMode === 'pipelined' || execMode === 'single') {
          const slot = (li - 1) * STD_SLOTS_PER_LAYER;
          setStdSlot(slot, L.isFull, nMain, dPack, 0, 0);
          device.queue.writeBuffer(
            stdChunkUboBuf,
            slot * uboAlign,
            stdChunkUboHost.subarray(slot * uboAlignU32, (slot + 1) * uboAlignU32)
          );
          dispatchStdConv(enc, pConv, bg, [slot * uboAlign], mainY, mainZ, nExt, passCategories);
        } else {
          const layerSlotBase = (li - 1) * STD_SLOTS_PER_LAYER;
          const maxStrips = execMode === 'calibrate'
            ? 1024
            : Math.max(256, Math.min(4096, Math.round(PACED_TARGET_CHUNK_MS / Math.max(0.005, pacer.getMsPerStrip()))));
          const chunks = [];
          let slotCursor = 0;
          if (L.isFull) {
            const zStep = Math.max(4, Math.min(64, Math.round(maxStrips / 64)));
            for (let z0 = 0; z0 < DIM; z0 += zStep) {
              const zCnt = Math.min(zStep, DIM - z0);
              const sIdx = layerSlotBase + slotCursor++;
              setStdSlot(sIdx, true, nMain, dPack, z0, 0);
              chunks.push({ slotIdx: sIdx, mainY: 64, mainCountZ: zCnt, extCountZ: 0, strips: zCnt * 64 });
            }
          } else {
            const mainStep = Math.max(256, maxStrips);
            for (let m0 = 0; m0 < nMain; m0 += mainStep) {
              const mCnt = Math.min(mainStep, nMain - m0);
              const sIdx = layerSlotBase + slotCursor++;
              setStdSlot(sIdx, false, nMain, dPack, m0, 0);
              chunks.push({ slotIdx: sIdx, mainY: 1, mainCountZ: mCnt, extCountZ: 0, strips: mCnt });
            }
            const extStep = Math.max(256, maxStrips);
            for (let e0 = 0; e0 < nExt; e0 += extStep) {
              const eCnt = Math.min(extStep, nExt - e0);
              const sIdx = layerSlotBase + slotCursor++;
              setStdSlot(sIdx, false, nMain, dPack, 0, e0);
              chunks.push({ slotIdx: sIdx, mainY: 1, mainCountZ: 0, extCountZ: eCnt, strips: eCnt });
            }
          }
          if (slotCursor > 0) {
            device.queue.writeBuffer(
              stdChunkUboBuf,
              layerSlotBase * uboAlign,
              stdChunkUboHost.subarray(layerSlotBase * uboAlignU32, (layerSlotBase + slotCursor) * uboAlignU32)
            );
          }

          let pendingStrips = 0;
          for (let ci = 0; ci < chunks.length; ci++) {
            const ch = chunks[ci];
            dispatchStdConv(enc, pConv, bg, [ch.slotIdx * uboAlign], ch.mainY, ch.mainCountZ, ch.extCountZ, passCategories);
            if (execMode === 'pipelined') continue;

            pendingStrips += ch.strips;
            const isLast = ci === chunks.length - 1;
            if (execMode === 'calibrate' && (pendingStrips >= 512 || (isLast && pendingStrips > 0))) {
              const tSub = performance.now();
              device.queue.submit([enc.finish()]);
              await device.queue.onSubmittedWorkDone();
              const dt = performance.now() - tSub;
              enc = device.createCommandEncoder();
              doneWork += pendingStrips;
              if (pendingStrips >= 512) {
                const msPerStrip = dt / pendingStrips;
                const estFullLayerMs = msPerStrip * TOTAL_STRIPS;
                device.__v4WinCalibrated = true;
                pacer.setMsPerStrip(msPerStrip);
                if (!plat.isWindowsSharedIgpu && estFullLayerMs < WINDOWS_FAST_LAYER_MAX_MS) {
                  device.__v4WinFast = true;
                  execMode = 'pipelined';
                  console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${estFullLayerMs.toFixed(1)}ms -> unthrottled pipelined mode`);
                } else {
                  device.__v4WinFast = false;
                  execMode = 'paced';
                  console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${estFullLayerMs.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`);
                  emitProgress(li);
                }
              }
              pendingStrips = 0;
            } else if (execMode === 'paced') {
              doneWork += pendingStrips;
              enc = await pacer.submitChunk(enc, pendingStrips, li);
              pendingStrips = 0;
            }
          }
        }
      }

      // Upload prepUbo
      const nextWOff = li + 1 < numConvs ? packed.w0Vec4s + li * packed.hiddenVec4PerLayer : 0;
      prepTmpU32[0] = li * packed.metaStride;
      prepTmpU32[1] = nextWOff;
      prepTmpU32[2] = (li + 1) * packed.metaStride;
      prepTmpU32[3] = li + 1 < numConvs ? 1 : 0;
      prepTmpU32[4] = li === 0 ? 1 : 0;
      prepTmpU32[5] = L.isFull ? 1 : 0;
      prepTmpU32[6] = nMain;
      prepTmpU32[7] = nMomExt * 8;
      prepTmpF32[8] = L.extWeight || 0.0;
      prepTmpU32[9] = 0;
      prepTmpU32[10] = 0;
      prepTmpU32[11] = 0;
      device.queue.writeBuffer(prepUbos[li], 0, prepTmpU32);

      // Explicit pass boundary: moments_finish -> prep_weff -> norm_quant8
      {
        const pass = enc.beginComputePass();
        pass.setBindGroup(0, prepBgs[li]);
        pass.setPipeline(pMomFin.pipe);
        pass.dispatchWorkgroups(d.cs, 1, 1);
        pass.end();
        passCategories.push('momentsPrep');
      }

      if (li + 1 < numConvs) {
        {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, prepBgs[li]);
          pass.setPipeline(pPrepW.pipe);
          pass.dispatchWorkgroups(1, 1, 1);
          pass.end();
          passCategories.push('momentsPrep');
        }

        const uploadNorm = !L.isFull ? nNorm : 0;
        if (uploadNorm > 0 || nHalo > 0) {
          if (uploadNorm > 0) normAuxHost.set(L.normStrips, 0);
          if (nHalo > 0) normAuxHost.set(L.haloRows, uploadNorm);
          device.queue.writeBuffer(normAuxBufs[li], 0, normAuxHost.subarray(0, uploadNorm + nHalo));
        }

        u4Tmp[0] = L.isFull ? 1 : 0;
        u4Tmp[1] = L.bgStrip ? L.bgStrip.z * DIM + L.bgStrip.yWg * 4 : 0;
        u4Tmp[2] = uploadNorm;
        u4Tmp[3] = nHalo;
        device.queue.writeBuffer(normUbos[li], 0, u4Tmp);

        if (L.isFull || nNorm > 0 || nHalo > 0) {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, normBgs[li]);
          if (L.isFull || nNorm > 0) {
            pass.setPipeline(pNorm.pipe);
            pass.dispatchWorkgroups(1, L.isFull ? 64 : 1, L.isFull ? DIM : nNorm);
          }
          if (nHalo > 0) {
            pass.setPipeline(pNormHalo.pipe);
            pass.dispatchWorkgroups(1, Math.ceil(nHalo / 4), 1);
          }
          pass.end();
          passCategories.push('normHalo');
        }
      }

      if (execMode === 'pipelined') {
        device.queue.submit([enc.finish()]);
        enc = device.createCommandEncoder();
      } else if (execMode === 'calibrate') {
        // Flush Layer 0 residency page-in cleanly so Layer 1 calibrates steady-state GPU speed
        device.queue.submit([enc.finish()]);
        await device.queue.onSubmittedWorkDone();
        enc = device.createCommandEncoder();
        doneWork += (li === 0 || !shaders.chunkableStd ? lw.convWork : 0) + lw.normWork;
        if (li === numConvs - 1 && !device.__v4WinCalibrated) {
          device.__v4WinCalibrated = true;
          device.__v4WinFast = !plat.isWindowsSharedIgpu;
        }
      } else if (execMode !== 'single') {
        const tailWork = (!shaders.chunkableStd && li > 0 ? lw.convWork : 0) + lw.normWork;
        doneWork += tailWork;
        enc = await pacer.submitChunk(enc, tailWork, li);
      }
    }

    if (execMode === 'paced') {
      await pacer.waitBeforeFinalSubmit();
    }
    execute.__passCategories = passCategories;
    return ioCtl.finishAndReadback({
      enc,
      schedule,
      passCategories,
      u4Tmp,
      ioOpts,
      paced: execMode === 'paced',
      onProgress,
    });
  }

  ioCtl.warmupIoPipelines();

  execute.dispose = ({ keepSharedWorkspace = false } = {}) => {
    ioCtl.dispose();
    for (const b of ownedBuffers) b.destroy();
    ownedBuffers.length = 0;
    ownedAlloc.resetBytes();
    if (!ws.pooled) {
      for (const b of ws.buffers) b.destroy();
      ws.buffers.length = 0;
    } else if (keepSharedWorkspace) {
      ws.inUse = false;
    } else if (v4WorkspacePool.get(device) === ws) {
      releaseV4Workspace(device);
    }
  };
  execute.gpuBytes = () => ws.bytes + ownedAlloc.getBytes();
  execute.__passCategories = [];
  execute.__coneInfo = () => ({ paddedVox, actMiB: actBytes / 1048576 });
  execute.kernels = 'v4-int8';
  return execute;
}

export async function warmupV4CorePipelines(device) {
  if (!device) return;
  const shouldAbort = () => activeUserSetups > 0 || !!device.__isLost;
  if (shouldAbort()) return;

  const hasF16 = !!device.features?.has?.('shader-f16');
  const subgroupMode = resolveSubgroupMode(device, null);
  const lim = device.limits || {};
  const maxAllowed = Math.min(lim.maxStorageBufferBindingSize ?? Infinity, lim.maxBufferSize ?? Infinity);

  await getIoPipe(device, hasF16 ? 'prep_in_u8_f16' : 'prep_in_u8_f32', () => buildPrepInWgsl(true, hasF16), 'main', ['read-only-storage', 'storage', 'uniform']);
  if (shouldAbort()) return;
  await getIoPipe(device, 'transpose_u8_v4', buildTransposeU8Wgsl, 'main', ['read-only-storage', 'storage']);
  if (shouldAbort()) return;

  // Incrementally warm all 3 GroupNorm+GELU backbones used across all 7 UI models:
  //   - 24ch DEEP13 (models 4, 5, 14, 21, 23)
  //   - 15ch MindGrab skull stripping (model 2)
  //   - 16ch DEEP13 fast subcortical+tissue (model 3; shares init/norm/flush with 15ch)
  // Yields/aborts immediately if the user selects a model so setupNet never contends.
  const warmSpecs = [
    { chan: 24, cs: 24, nclass: 0, dilations: DEEP13, activation: 'gelu_tanh', norm: 'gn' },
    { chan: 15, cs: 16, nclass: 0, dilations: [16, 8, 4, 2, 1], activation: 'gelu_tanh', norm: 'gn' },
    { chan: 16, cs: 16, nclass: 0, dilations: DEEP13, activation: 'gelu_tanh', norm: 'gn' },
  ];
  for (const d of warmSpecs) {
    if (shouldAbort()) return;
    const splitHalves = d.cs >= 16;
    const csHalf = splitHalves ? d.cs / 2 : d.cs;
    const actBytes = DIM * DIM * csHalf * X4_PAD * 4;
    const use128 = actBytes > maxAllowed || shouldPreferLowMem128OnWindows(device, d, null);
    if (use128) {
      const shaders = buildShadersLowMem128({
        cs: d.cs,
        chan: d.chan,
        nclass: 0,
        clsK4: 0,
        dilations: d.dilations,
        activation: d.activation,
        norm: d.norm,
        hasF16,
        subgroupMode,
        numConvs: d.dilations.length,
        probCfg: null,
      });
      await getNetPipes128(device, d, null, hasF16, subgroupMode, null, shaders, {
        includeCls: false,
        sequential: true,
        shouldAbort,
      });
    } else {
      const chunkableStd = shouldUseStdChunking(device, null);
      const shaders = buildShaders({
        cs: d.cs,
        chan: d.chan,
        nclass: 0,
        clsK4: 0,
        dilations: d.dilations,
        activation: d.activation,
        norm: d.norm,
        hasF16,
        subgroupMode,
        splitHalves,
        probCfg: null,
        chunkableStd,
      });
      await getNetPipesStd(device, d, null, hasF16, subgroupMode, splitHalves, null, shaders, {
        includeCls: false,
        sequential: true,
        shouldAbort,
      });
    }
  }
}

const load = async (device, weightPath) => {
  const buf = await fetch(weightPath).then((r) => r.arrayBuffer());
  return setupNet(device, new Uint8Array(buf));
};

export const supportsGpuNativeIO = true;
export default { load, setupNet, warmupV4CorePipelines, supportsF32Fallback, supportsGpuNativeIO };
