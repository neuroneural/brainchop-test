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
//      - Tier 1: `shader-f16` + 32-wide `subgroups` (`subgroupAdd/Min/Max`)
//      - Tier 2: `shader-f16` without `subgroups` (`8 KiB` shared-memory reduction)
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

async function createLayoutAndPipe(device, label, module, entryPoint, entriesSpec) {
  const bgl = device.createBindGroupLayout({
    entries: entriesSpec.map((spec, binding) => (
      typeof spec === 'string'
        ? { binding, visibility: GPUShaderStage.COMPUTE, buffer: { type: spec } }
        : { binding, visibility: GPUShaderStage.COMPUTE, buffer: spec }
    )),
  });
  const pipe = await device.createComputePipelineAsync({
    label,
    layout: device.createPipelineLayout({ bindGroupLayouts: [bgl] }),
    compute: { module, entryPoint },
  });
  return { bgl, pipe };
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
      const mod = await compileModule(device, key, wgslFn());
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

function getNetPipeKey(mode, d, packed, hasF16, hasSubgroups32, splitHalves, probCfg) {
  const probKey = probCfg
    ? `${probCfg.grayMask}_${probCfg.whiteMask}_${probCfg.csfMask}_${probCfg.temperature}_${probCfg.supportTemperature}`
    : 'seg';
  return `${mode}|${d.cs}|${d.chan}|${d.nclass}|${packed.clsK4}|${d.dilations.join(',')}|${d.activation}|${d.norm}|${hasF16 ? 1 : 0}|${hasSubgroups32 ? 1 : 0}|${splitHalves ? 1 : 0}|${probKey}`;
}

async function getNetPipes128(device, d, packed, hasF16, hasSubgroups32, probCfg, shaders, dilKeys) {
  const cache = getDeviceMap(netPipeCache, device);
  const key = getNetPipeKey('128', d, packed, hasF16, hasSubgroups32, true, probCfg);
  let p = cache.get(key);
  if (!p) {
    p = (async () => {
      const [mInit, mConv0, mPrep, mFlush, mNorm, mCls, ...mConvs] = await Promise.all([
        compileModule(device, 'init_act8_128', shaders.initActWgsl),
        compileModule(device, 'conv0_128', shaders.conv0Wgsl),
        compileModule(device, 'prep_128', shaders.prepWgsl),
        compileModule(device, 'flush_128', shaders.flushWgsl),
        compileModule(device, 'norm_128', shaders.normWgsl),
        compileModule(device, 'cls_128', shaders.clsWgsl),
        ...dilKeys.map((dil) => compileModule(device, `conv_128_d${dil}`, shaders.convWgsls[dil])),
      ]);
      const mk = (label, mod, ep, spec) => createLayoutAndPipe(device, label, mod, ep, spec);
      const initTypes = ['storage', 'storage', 'storage', 'storage'];
      const conv0Types = ['read-only-storage', 'storage', 'storage', 'storage', 'storage', 'storage', 'read-only-storage', 'storage', 'uniform', 'uniform', 'uniform'];
      const prepTypes = ['read-only-storage', 'read-only-storage', 'storage', 'storage', 'read-only-storage', 'uniform'];
      const flushTypes = ['storage', 'storage', 'storage', 'storage', 'read-only-storage', 'read-only-storage', { type: 'uniform', hasDynamicOffset: true, minBindingSize: 32 }];
      const normTypes = ['storage', 'storage', 'storage', 'storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'uniform'];
      const convTypes = ['read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'storage', 'storage', shaders.useUniformWeff ? 'uniform' : 'read-only-storage', 'read-only-storage', { type: 'uniform', hasDynamicOffset: true, minBindingSize: 32 }];
      const clsTypes = ['read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'storage', 'uniform', 'uniform', 'uniform'];

      const [pInit, pMomFin, pPrepW, pFlush, pNorm, pNormHalo, pCls, pConv0List, pConvList] = await Promise.all([
        mk('init_act8_128', mInit, 'main', initTypes),
        mk('moments_finish_128', mPrep, 'moments_finish', prepTypes),
        mk('prep_weff_128', mPrep, 'prep_weff', prepTypes),
        mk('flush_stage_128', mFlush, 'main', flushTypes),
        mk('norm_quant8_128', mNorm, 'main', normTypes),
        mk('norm_halo_fill_128', mNorm, 'norm_halo_fill', normTypes),
        mk('classify_v4_128', mCls, 'main', clsTypes),
        Promise.all(
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
        ),
        Promise.all(
          mConvs.flatMap((mod, idx) => {
            const dil = dilKeys[idx];
            if (shaders.halfPassConv) {
              return [
                mk(`conv_128_d${dil}_lo`, mod, 'main_lo', convTypes),
                mk(`conv_128_d${dil}_hi`, mod, 'main_hi', convTypes),
                mk(`conv_128_d${dil}_ext_lo`, mod, 'main_ext_lo', convTypes),
                mk(`conv_128_d${dil}_ext_hi`, mod, 'main_ext_hi', convTypes),
                mk(`conv_128_d${dil}_bg_lo`, mod, 'main_bg_lo', convTypes),
                mk(`conv_128_d${dil}_bg_hi`, mod, 'main_bg_hi', convTypes),
              ];
            }
            return [
              mk(`conv_128_d${dil}`, mod, 'main', convTypes),
              mk(`conv_128_d${dil}_ext`, mod, 'main_ext', convTypes),
              mk(`conv_128_d${dil}_bg`, mod, 'main_bg', convTypes),
            ];
          })
        ),
      ]);
      const pConv0 = shaders.halfPass0
        ? { lo: pConv0List[0], hi: pConv0List[1], bgLo: pConv0List[2], bgHi: pConv0List[3] }
        : { main: pConv0List[0], bg: pConv0List[1] };
      const convPipes = {};
      if (shaders.halfPassConv) {
        dilKeys.forEach((dil, i) => {
          convPipes[dil] = {
            lo: pConvList[i * 6],
            hi: pConvList[i * 6 + 1],
            extLo: pConvList[i * 6 + 2],
            extHi: pConvList[i * 6 + 3],
            bgLo: pConvList[i * 6 + 4],
            bgHi: pConvList[i * 6 + 5],
          };
        });
      } else {
        dilKeys.forEach((dil, i) => {
          convPipes[dil] = { main: pConvList[i * 3], ext: pConvList[i * 3 + 1], bg: pConvList[i * 3 + 2] };
        });
      }
      return { pInit, pMomFin, pPrepW, pFlush, pNorm, pNormHalo, pCls, pConv0, convPipes };
    })().catch((err) => {
      cache.delete(key);
      throw err;
    });
    cache.set(key, p);
  }
  return p;
}

async function getNetPipesStd(device, d, packed, hasF16, hasSubgroups32, splitHalves, probCfg, shaders, dilKeys) {
  const cache = getDeviceMap(netPipeCache, device);
  const key = getNetPipeKey('std', d, packed, hasF16, hasSubgroups32, splitHalves, probCfg);
  let p = cache.get(key);
  if (!p) {
    p = (async () => {
      const [mInit, mConv0, mPrep, mNorm, mCls, ...mConvs] = await Promise.all([
        compileModule(device, 'init_act8', shaders.initActWgsl),
        compileModule(device, 'conv0', shaders.conv0Wgsl),
        compileModule(device, 'prep', shaders.prepWgsl),
        compileModule(device, 'norm', shaders.normWgsl),
        compileModule(device, 'cls', shaders.clsWgsl),
        ...dilKeys.map((dil) => compileModule(device, `conv_d${dil}`, shaders.convWgsls[dil])),
      ]);
      const mk = (label, mod, ep, types) => createLayoutAndPipe(device, label, mod, ep, types);
      const initTypes = ['storage', 'storage'];
      const conv0Types = ['read-only-storage', 'storage', 'storage', 'read-only-storage', 'read-only-storage', 'storage', 'storage', 'read-only-storage', 'uniform'];
      const prepTypes = ['read-only-storage', 'read-only-storage', 'storage', 'storage', 'storage', 'storage', 'read-only-storage', 'uniform'];
      const normTypes = ['storage', 'storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'uniform'];
      const convTypes = ['read-only-storage', 'read-only-storage', 'storage', 'storage', 'storage', 'storage', shaders.useUniformWeff ? 'uniform' : 'read-only-storage', 'read-only-storage', 'uniform'];
      const clsTypes = ['read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'read-only-storage', 'storage', 'read-only-storage', 'uniform'];

      const [pInit, pMomFin, pPrepW, pNorm, pNormHalo, pCls, pConv0List, pConvList] = await Promise.all([
        mk('init_act8', mInit, 'main', initTypes),
        mk('moments_finish', mPrep, 'moments_finish', prepTypes),
        mk('prep_weff', mPrep, 'prep_weff', prepTypes),
        mk('norm_quant8', mNorm, 'main', normTypes),
        mk('norm_halo_fill', mNorm, 'norm_halo_fill', normTypes),
        mk('classify_v4', mCls, 'main', clsTypes),
        Promise.all(
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
        ),
        Promise.all(
          mConvs.flatMap((mod, idx) => {
            const dil = dilKeys[idx];
            if (shaders.halfPassConv) {
              return [
                mk(`conv_d${dil}_lo`, mod, 'main_lo', convTypes),
                mk(`conv_d${dil}_hi`, mod, 'main_hi', convTypes),
                mk(`conv_d${dil}_ext_lo`, mod, 'main_ext_lo', convTypes),
                mk(`conv_d${dil}_ext_hi`, mod, 'main_ext_hi', convTypes),
              ];
            }
            return [
              mk(`conv_d${dil}`, mod, 'main', convTypes),
              mk(`conv_d${dil}_ext`, mod, 'main_ext', convTypes),
            ];
          })
        ),
      ]);
      const pConv0 = shaders.halfPass0
        ? { lo: pConv0List[0], hi: pConv0List[1], bgLo: pConv0List[2], bgHi: pConv0List[3] }
        : { main: pConv0List[0], bg: pConv0List[1] };
      const convPipes = {};
      if (shaders.halfPassConv) {
        dilKeys.forEach((dil, i) => {
          convPipes[dil] = {
            lo: pConvList[i * 4],
            hi: pConvList[i * 4 + 1],
            extLo: pConvList[i * 4 + 2],
            extHi: pConvList[i * 4 + 3],
          };
        });
      } else {
        dilKeys.forEach((dil, i) => {
          convPipes[dil] = { main: pConvList[i * 2], ext: pConvList[i * 2 + 1] };
        });
      }
      return { pInit, pMomFin, pPrepW, pNorm, pNormHalo, pCls, pConv0, convPipes };
    })().catch((err) => {
      cache.delete(key);
      throw err;
    });
    cache.set(key, p);
  }
  return p;
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
  const yzActive = new Uint8Array(DIM * DIM);

  let prepU8State = null;
  let prepF32State = null;
  let transposeU8State = null;
  let probGpuState = null;

  const mkBgEntries = (bgl, entries) =>
    device.createBindGroup({
      layout: bgl,
      entries: entries.map((resource, binding) => ({
        binding,
        resource: resource && resource.buffer ? resource : { buffer: resource },
      })),
    });

  async function ensurePrepU8() {
    if (prepU8State) return prepU8State;
    const key = hasF16 ? 'prep_in_u8_f16' : 'prep_in_u8_f32';
    const { bgl, pipe } = await getIoPipe(
      device,
      key,
      () => buildPrepInWgsl(true, hasF16),
      'main',
      ['read-only-storage', 'storage', 'uniform']
    );
    const ubo = mkBuf(256 * 4, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST);
    const lutF32 = new Float32Array(256);
    const bg = mkBgEntries(bgl, [{ buffer: labels8Buf, offset: 0, size: nvox }, inpBuf, ubo]);
    prepU8State = { pipe, ubo, lutF32, bg };
    return prepU8State;
  }

  async function ensurePrepF32() {
    if (prepF32State) return prepF32State;
    const key = hasF16 ? 'prep_in_f32_f16' : 'prep_in_f32_f32';
    const { bgl, pipe } = await getIoPipe(
      device,
      key,
      () => buildPrepInWgsl(false, hasF16),
      'main',
      ['read-only-storage', 'storage', 'uniform']
    );
    const ubo = mkBuf(16, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST);
    const f32Tmp = new Float32Array(4);
    const bgLabels = outBufBytes >= nvox * 4
      ? mkBgEntries(bgl, [{ buffer: labels8Buf, offset: 0, size: nvox * 4 }, inpBuf, ubo])
      : null;
    const bgAct0 = act8_0.size >= nvox * 4
      ? mkBgEntries(bgl, [{ buffer: act8_0, offset: 0, size: nvox * 4 }, inpBuf, ubo])
      : null;
    prepF32State = { pipe, ubo, f32Tmp, bgLabels, bgAct0 };
    return prepF32State;
  }

  async function ensureTransposeU8() {
    if (transposeU8State) return transposeU8State;
    const { bgl, pipe } = await getIoPipe(
      device,
      'transpose_u8_v4',
      buildTransposeU8Wgsl,
      'main',
      ['read-only-storage', 'storage']
    );
    const bg = mkBgEntries(bgl, [
      { buffer: labels8Buf, offset: 0, size: nvox },
      { buffer: inpBuf, offset: 0, size: nvox },
    ]);
    transposeU8State = { pipe, bg };
    return transposeU8State;
  }

  async function ensureProbGpu() {
    if (probGpuState) return probGpuState;
    const [pUnpack, pBlurAxis, pBlurZGate, pTransposeF32] = await Promise.all([
      getIoPipe(device, 'prob_unpack_two', buildProbUnpackTwoWgsl, 'main', ['read-only-storage', 'storage', 'storage']),
      getIoPipe(device, 'prob_blur_axis', buildProbBlurWgsl, 'blur_axis', ['read-only-storage', 'storage', 'read-only-storage', 'uniform']),
      getIoPipe(device, 'prob_blur_z_gate', buildProbBlurWgsl, 'blur_z_gate', ['read-only-storage', 'storage', 'read-only-storage', 'uniform']),
      getIoPipe(device, 'transpose_f32', buildTransposeF32Wgsl, 'main', ['read-only-storage', 'storage']),
    ]);
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
    probGpuState = {
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
    return probGpuState;
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

  async function finishAndReadback({ enc, schedule, passCategories, u4Tmp, ioOpts }) {
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
        return [out];
      }

      enc.copyBufferToBuffer(labels8Buf, 0, readbackBuf, 0, outBufBytes);
      device.queue.submit([enc.finish()]);
      await readbackBuf.mapAsync(GPUMapMode.READ);
      const u8 = new Uint8Array(readbackBuf.getMappedRange());
      const out = new Float32Array(nvox);
      for (let i = 0; i < nvox; i++) out[i] = u8[i];
      readbackBuf.unmap();
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

  return { prepareInput, finishAndReadback };
}

function buildShaders(cfg) {
  const {
    cs, chan, nclass, clsK4, dilations, activation, norm,
    hasF16, hasSubgroups32, splitHalves, probCfg,
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
  const sgEnable = hasSubgroups32 ? 'enable subgroups;\n' : '';
  const T = hasF16 ? 'f16' : 'f32';
  const suf = hasF16 ? 'h' : 'f';
  const V4 = `vec4<${T}>`;
  const byteScale = hasF16 ? 256.0 : 255.0;

  const emitEpilogue = ({
    cStart, cEnd, hrExpr, yRowExpr, isPermuted,
    momBinding, alsoWriteMomMain = false, writeY8Expr = 'true',
  }) => {
    const sw = isPermuted ? '.xzyw' : '';
    const storeY = (c, wordExpr) => {
      if (splitHalves && c >= csHalf) {
        return `y8_1[${yRowExpr} + ${(c - csHalf) * X4_VALID}u] = ${wordExpr};`;
      }
      return `y8_0[${yRowExpr} + ${c * X4_VALID}u] = ${wordExpr};`;
    };

    if (hasF16 && hasSubgroups32) {
      return rep(cEnd - cStart, (idx) => {
        const c = cStart + idx;
        return `  {
    let f = vec4<f32>(a_${c}${sw});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${writeY8Expr}) {
      ${storeY(c, 'pack4x8unorm((f - vec4<f32>(lmn)) * inv)')}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${momBinding}[(${hrExpr}) * ${cs}u + ${c}u] = mv;
      ${alsoWriteMomMain ? `mom_main[(row_idx * 2u + sg) * ${cs}u + ${c}u] = mv;` : ''}
    }
  }\n`;
      });
    }

    let out = '';
    for (let c = cStart; c < cEnd; c += 2) {
      const c0 = c;
      const c1 = c + 1;
      out += `  {
    let f0 = vec4<f32>(a_${c0}${sw});
    let f1 = vec4<f32>(a_${c1}${sw});
    sh_s[tid]  = vec2<f32>(f0.x + f0.y + f0.z + f0.w, f1.x + f1.y + f1.z + f1.w);
    sh_q[tid]  = vec2<f32>(dot(f0, f0), dot(f1, f1));
    sh_mn[tid] = vec2<f32>(min(min(f0.x, f0.y), min(f0.z, f0.w)), min(min(f1.x, f1.y), min(f1.z, f1.w)));
    sh_mx[tid] = vec2<f32>(max(max(f0.x, f0.y), max(f0.z, f0.w)), max(max(f1.x, f1.y), max(f1.z, f1.w)));
    workgroupBarrier();
    if (slane < 2u) {
      var rs : f32 = 0.0;
      var rq : f32 = 0.0;
      var rmn : f32 = 3.0e38;
      var rmx : f32 = -3.0e38;
      if (slane == 0u) {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].x;
          rq  += sh_q[hbase + k].x;
          rmn  = min(rmn, sh_mn[hbase + k].x);
          rmx  = max(rmx, sh_mx[hbase + k].x);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot]  = rmn;
        sh_res_inv[hslot] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv0 = vec4<f32>(rs, rq, rmn, sp);
        ${momBinding}[(${hrExpr}) * ${cs}u + ${c0}u] = mv0;
        ${alsoWriteMomMain ? `mom_main[(row_idx * 2u + sg) * ${cs}u + ${c0}u] = mv0;` : ''}
      } else {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].y;
          rq  += sh_q[hbase + k].y;
          rmn  = min(rmn, sh_mn[hbase + k].y);
          rmx  = max(rmx, sh_mx[hbase + k].y);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot + 1u]  = rmn;
        sh_res_inv[hslot + 1u] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv1 = vec4<f32>(rs, rq, rmn, sp);
        ${momBinding}[(${hrExpr}) * ${cs}u + ${c1}u] = mv1;
        ${alsoWriteMomMain ? `mom_main[(row_idx * 2u + sg) * ${cs}u + ${c1}u] = mv1;` : ''}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${writeY8Expr}) {
      ${storeY(c0, 'pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)')}
      ${storeY(c1, 'pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)')}
    }
    workgroupBarrier();
  }\n`;
    }
    return out;
  };

  const sharedReductionDecls = hasF16 && hasSubgroups32
    ? ''
    : `var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;\n`;

  // --- 0. INIT_ACT8 SHADER ---
  const initActWgsl = `
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
  const conv0Wgsl = (() => {
    const halfPass0 = !hasF16 && splitHalves;
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

    const emitConv0Entry = (fnName, cStart, cEnd, isBgEntry) => {
      const accInit = rep(cEnd - cStart, (i) => {
        const c = cStart + i;
        return norm === 'none'
          ? `  var a_${c} = ${V4}(${T}(qmeta[${3 * cs + c}u]));\n`
          : `  var a_${c} = ${V4}(0.0${suf});\n`;
      });
      const coords = isBgEntry
        ? '  let y = i32(p0.bg_y0 + lid.y);\n  let z = i32(p0.bg_z0);'
        : `  var y : i32;\n  var z : i32;\n  if (p0.is_full != 0u) {\n    y = i32(wid.y * 4u + lid.y);\n    z = i32(wid.z);\n  } else {\n    let pk = strips0[wid.z];\n    y = i32((pk & 255u) * 4u + lid.y);\n    z = i32(pk >> 8u);\n  }`;
      const hrExpr = isBgEntry ? 'lid.y * 2u + sg' : 'row_idx * 2u + sg';
      const momBind = isBgEntry ? 'mom_ext' : 'mom_main';
      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${hasF16 && hasSubgroups32 ? '' : '  let hbase = (lid.y * 2u + sg) * 32u;\n  let tid = hbase + slane;\n  let hslot = (lid.y * 2u + sg) * 2u;\n'}
  let x_pad = lid.x + ${X4_HALO}u;
${coords}
${accInit}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${d0};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${d0};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${X4_PAD}u + x_pad;
${loadInp0}
        let wb = tap_yz * ${3 * oc4}u;
${fmaRange(cStart, cEnd)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${rowStrideY}u + lid.x;
${emitEpilogue({
  cStart,
  cEnd,
  hrExpr,
  yRowExpr: 'y_row_base',
  isPermuted: false,
  momBinding: momBind,
})}}`;
    };

    const entries = halfPass0
      ? emitConv0Entry('main_lo', 0, csHalf, false) +
        emitConv0Entry('main_hi', csHalf, cs, false) +
        emitConv0Entry('main_bg_lo', 0, csHalf, true) +
        emitConv0Entry('main_bg_hi', csHalf, cs, true)
      : emitConv0Entry('main', 0, cs, false) +
        emitConv0Entry('main_bg', 0, cs, true);

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
${sharedReductionDecls}${entries}`;
  })();

  // --- 2. MOMENTS_FINISH + PREP_WEFF SHADER ---
  const prepWgsl = `${f16Enable}
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

var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${TOTAL_HALF_ROWS}u; hr = hr + 256u) {
      let v = mom_main[hr * ${cs}u + c];
      s  += v.x;
      q  += v.y;
      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom_main[(base_hr + h) * ${cs}u + c];
        s  += v.x;
        q  += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom_ext[e * ${cs}u + c];
        es += v.x;
        eq += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
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
    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = ${norm === 'gn' ? 'total_s / 16777216.0' : '0.0'};
    let varr = ${norm === 'gn' ? 'max(total_q / 16777216.0 - mean * mean, 0.0)' : '1.0'};
    let inv_std = ${norm === 'gn' ? 'inverseSqrt(varr + eff_eps)' : '1.0'};
    let scale = inv_std * gamma;
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
  const normWgsl = `${getActivationWgsl(activation)}
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

  // --- 4. CONV_INT8 DILATION-SPECIALIZED SHADERS (@workgroup_size(64, 4, 1)) ---
  const buildConvForDilation = (D) => {
    const qStep = Math.floor(D / 4);
    const rBytes = D % 4;
    const rBits = rBytes * 8;
    const halfPass = !hasF16 && splitHalves;

    const emitUnpack = (vName, uExpr) => {
      if (hasF16) {
        return `
          let ${vName} = vec4<f16>(vec2<f16>(unpack2x16float(((${uExpr} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${uExpr} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${qConst.sterbenzSub});`;
      }
      return `
          let ${vName} = unpack4x8unorm(${uExpr}) - vec4<f32>(${qConst.uZeroFloat});`;
    };

    const emitLoads = (arrName) => {
      if (rBits === 0) {
        return `
          let u_neg = ${arrName}[base - ${qStep}u];
          let uC    = ${arrName}[base];
          let u_pos = ${arrName}[base + ${qStep}u];` +
          emitUnpack('vn', 'u_neg') +
          emitUnpack('vc', 'uC') +
          emitUnpack('vp', 'u_pos');
      }
      const loShift = 32 - rBits;
      if (qStep === 0) {
        return `
          let uL = ${arrName}[base - 1u];
          let uC = ${arrName}[base];
          let uR = ${arrName}[base + 1u];
          let u_neg = (uL >> ${loShift}u) | (uC << ${rBits}u);
          let u_pos = (uC >> ${rBits}u) | (uR << ${loShift}u);` +
          emitUnpack('vn', 'u_neg') +
          emitUnpack('vc', 'uC') +
          emitUnpack('vp', 'u_pos');
      }
      return `
          let uL = ${arrName}[base - ${qStep + 1}u];
          let uN = ${arrName}[base - ${qStep}u];
          let uC = ${arrName}[base];
          let uP = ${arrName}[base + ${qStep}u];
          let uR = ${arrName}[base + ${qStep + 1}u];
          let u_neg = (uL >> ${loShift}u) | (uN << ${rBits}u);
          let u_pos = (uP >> ${rBits}u) | (uR << ${loShift}u);` +
        emitUnpack('vn', 'u_neg') +
        emitUnpack('vc', 'uC') +
        emitUnpack('vp', 'u_pos');
    };

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
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
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

    const emitConvEntry = (fnName, cStart, cEnd, isExtEntry) => {
      const accInit = rep(cEnd - cStart, (i) => {
        const c = cStart + i;
        if (norm === 'none') {
          const g = c >>> 2;
          const sw = ['x', 'y', 'z', 'w'][c & 3];
          if (useUniformWeff) {
            const uVecIdx = (biasEffVec4Off + g) >>> 1;
            const colIdx = (biasEffVec4Off + g) & 1;
            return `  var a_${c} = ${V4}(w_eff_u[${uVecIdx}u][${colIdx}].${sw});\n`;
          }
          return `  var a_${c} = ${V4}(w_eff[${biasEffVec4Off + g}u].${sw});\n`;
        }
        return `  var a_${c} = ${V4}(0.0${suf});\n`;
      });

      const coords = isExtEntry
        ? `
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`
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
  }`;

      const hrExpr = isExtEntry ? 'wid.z * 8u + lid.y * 2u + sg' : 'row_idx * 2u + sg';
      const momBind = isExtEntry ? 'mom_ext' : 'mom_main';
      const writeY8Expr = isExtEntry ? '(cp.write_ext_y8 != 0u)' : 'true';
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

      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${hasF16 && hasSubgroups32 ? '' : '  let hbase = (lid.y * 2u + sg) * 32u;\n  let tid = hbase + slane;\n  let hslot = (lid.y * 2u + sg) * 2u;\n'}
  let x_pad = x4 + ${X4_HALO}u;
${coords}
${accInit}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${D};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${D};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${rowStrideAct}u + x_pad;
${wLoopLo}
        ${splitHalves ? wLoopHi : ''}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${rowStrideY}u + x4;
${emitEpilogue({
  cStart,
  cEnd,
  hrExpr,
  yRowExpr: 'y_row_base',
  isPermuted: hasF16,
  momBinding: momBind,
  alsoWriteMomMain: isExtEntry,
  writeY8Expr,
})}}`;
    };

    const entries = halfPass
      ? emitConvEntry('main_lo', 0, csHalf, false) +
        emitConvEntry('main_hi', csHalf, cs, false) +
        emitConvEntry('main_ext_lo', 0, csHalf, true) +
        emitConvEntry('main_ext_hi', csHalf, cs, true)
      : emitConvEntry('main', 0, cs, false) +
        emitConvEntry('main_ext', 0, cs, true);

    const wEffDecl = useUniformWeff
      ? `@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(totalWEffVec4s / 2)}>;`
      : `@group(0) @binding(6) var<storage, read> w_eff : array<${V4}>;`;

    return `${f16Enable}${sgEnable}
struct ConvParams {
  is_full : u32,
  ext_off : u32,
  write_ext_y8 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> mom_ext : array<vec4<f32>>;
${wEffDecl}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${sharedReductionDecls}${entries}`;
  };

  // --- 5. CLASSIFY_V4 SHADER ---
  const clsWgsl = `${f16Enable}
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

  const uniqueDilations = Array.from(new Set(dilations.slice(1)));
  const convWgsls = Object.fromEntries(uniqueDilations.map((d) => [d, buildConvForDilation(d)]));

  return {
    initActWgsl,
    conv0Wgsl,
    prepWgsl,
    normWgsl,
    convWgsls,
    clsWgsl,
    totalWEffVec4s,
    useUniformWeff,
    csHalf,
    halfPass0: !hasF16 && splitHalves,
    halfPassConv: !hasF16 && splitHalves,
  };
}

async function compileModule(device, label, code) {
  const hasScope = typeof device.pushErrorScope === 'function' && typeof device.popErrorScope === 'function';
  let mod;
  let scopePromise = Promise.resolve(null);
  if (hasScope) device.pushErrorScope('validation');
  try {
    mod = device.createShaderModule({ label, code });
  } finally {
    if (hasScope) scopePromise = device.popErrorScope().catch((e) => e);
  }
  const infoPromise = mod.getCompilationInfo ? mod.getCompilationInfo() : Promise.resolve(null);
  const [info, scopeErr] = await Promise.all([infoPromise, scopePromise]);
  const errs = info ? info.messages.filter((m) => m.type === 'error') : [];
  if (errs.length) {
    throw new Error(`meshnet_fast_v4 [${label}] WGSL error: ` + errs.map((e) => `L${e.lineNum}:${e.linePos} ${e.message}`).join(' | '));
  }
  if (scopeErr) {
    throw new Error(`meshnet_fast_v4 [${label}] WGSL error: ${scopeErr.message || scopeErr}`);
  }
  return mod;
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
    hasF16, hasSubgroups32, numConvs, probCfg,
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
  const sgEnable = hasSubgroups32 ? 'enable subgroups;\n' : '';
  const T = hasF16 ? 'f16' : 'f32';
  const suf = hasF16 ? 'h' : 'f';
  const V4 = `vec4<${T}>`;
  const byteScale = hasF16 ? 256.0 : 255.0;

  const sharedReductionDecls = hasF16 && hasSubgroups32
    ? ''
    : `var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;\n`;

  const emitEpilogue128 = ({
    cStart, cEnd, hrExpr, storeMode, isPermuted,
    momOffExpr, alsoWriteMomMain = false, writeY8Expr = 'true',
  }) => {
    const sw = isPermuted ? '.xzyw' : '';
    const storeY = (c, wordExpr) => {
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

    if (hasF16 && hasSubgroups32) {
      return rep(cEnd - cStart, (idx) => {
        const c = cStart + idx;
        return `  {
    let f = vec4<f32>(a_${c}${sw});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${writeY8Expr}) {
      ${storeY(c, 'pack4x8unorm((f - vec4<f32>(lmn)) * inv)')}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${momOffExpr} + (${hrExpr}) * ${cs}u + ${c}u] = mv;
      ${alsoWriteMomMain ? `mom[${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u + ${c}u] = mv;` : ''}
    }
  }\n`;
      });
    }

    let out = '';
    for (let c = cStart; c < cEnd; c += 2) {
      const c0 = c;
      const c1 = c + 1;
      out += `  {
    let f0 = vec4<f32>(a_${c0}${sw});
    let f1 = vec4<f32>(a_${c1}${sw});
    sh_s[tid]  = vec2<f32>(f0.x + f0.y + f0.z + f0.w, f1.x + f1.y + f1.z + f1.w);
    sh_q[tid]  = vec2<f32>(dot(f0, f0), dot(f1, f1));
    sh_mn[tid] = vec2<f32>(min(min(f0.x, f0.y), min(f0.z, f0.w)), min(min(f1.x, f1.y), min(f1.z, f1.w)));
    sh_mx[tid] = vec2<f32>(max(max(f0.x, f0.y), max(f0.z, f0.w)), max(max(f1.x, f1.y), max(f1.z, f1.w)));
    workgroupBarrier();
    if (slane < 2u) {
      var rs : f32 = 0.0;
      var rq : f32 = 0.0;
      var rmn : f32 = 3.0e38;
      var rmx : f32 = -3.0e38;
      if (slane == 0u) {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].x;
          rq  += sh_q[hbase + k].x;
          rmn  = min(rmn, sh_mn[hbase + k].x);
          rmx  = max(rmx, sh_mx[hbase + k].x);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot]  = rmn;
        sh_res_inv[hslot] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv0 = vec4<f32>(rs, rq, rmn, sp);
        mom[${momOffExpr} + (${hrExpr}) * ${cs}u + ${c0}u] = mv0;
        ${alsoWriteMomMain ? `mom[${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u + ${c0}u] = mv0;` : ''}
      } else {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].y;
          rq  += sh_q[hbase + k].y;
          rmn  = min(rmn, sh_mn[hbase + k].y);
          rmx  = max(rmx, sh_mx[hbase + k].y);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot + 1u]  = rmn;
        sh_res_inv[hslot + 1u] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv1 = vec4<f32>(rs, rq, rmn, sp);
        mom[${momOffExpr} + (${hrExpr}) * ${cs}u + ${c1}u] = mv1;
        ${alsoWriteMomMain ? `mom[${MOM_MAIN_OFF}u + (row_idx * 2u + sg) * ${cs}u + ${c1}u] = mv1;` : ''}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${writeY8Expr}) {
      ${storeY(c0, 'pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)')}
      ${storeY(c1, 'pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)')}
    }
    workgroupBarrier();
  }\n`;
    }
    return out;
  };

  // --- 0. INIT_ACT8 (4 storage bindings) ---
  const initActWgsl = `
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
  const conv0Wgsl = (() => {
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

    const emitConv0Entry = (fnName, cStart, cEnd, isBgEntry) => {
      const accInit = rep(cEnd - cStart, (i) => {
        const c = cStart + i;
        if (norm === 'none') {
          const qi = 3 * cs + c;
          return `  var a_${c} = ${V4}(${T}(qmeta_u[${qi >>> 2}u][${qi & 3}u]));\n`;
        }
        return `  var a_${c} = ${V4}(0.0${suf});\n`;
      });
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
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${hasF16 && hasSubgroups32 ? '' : '  let hbase = (lid.y * 2u + sg) * 32u;\n  let tid = hbase + slane;\n  let hslot = (lid.y * 2u + sg) * 2u;\n'}
  let x_pad = lid.x + ${X4_HALO}u;
${coords}
${accInit}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${d0};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${d0};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${X4_PAD}u + x_pad;
${loadInp0}
        let wb = tap_yz * ${3 * oc4}u;
${fmaRange(cStart, cEnd)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${rowLocals}
${emitEpilogue128({
  cStart,
  cEnd,
  hrExpr,
  storeMode: isBgEntry ? 'stage_bg' : 'conv0_split',
  isPermuted: false,
  momOffExpr,
})}}`;
    };

    const entries = halfPass0
      ? emitConv0Entry('main_lo', 0, csHalf, false) +
        emitConv0Entry('main_hi', csHalf, cs, false) +
        emitConv0Entry('main_bg_lo', 0, csHalf, true) +
        emitConv0Entry('main_bg_hi', csHalf, cs, true)
      : emitConv0Entry('main', 0, cs, false) +
        emitConv0Entry('main_bg', 0, cs, true);

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
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${qmetaVec4Len}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${sharedReductionDecls}${entries}`;
  })();

  // --- 2. MOMENTS_FINISH + PREP_WEFF (5 storage + 1 uniform) ---
  const prepWgsl = `${f16Enable}
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

var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${TOTAL_HALF_ROWS}u; hr = hr + 256u) {
      let v = mom[${MOM_MAIN_OFF}u + hr * ${cs}u + c];
      s  += v.x;
      q  += v.y;
      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom[${MOM_MAIN_OFF}u + (base_hr + h) * ${cs}u + c];
        s  += v.x;
        q  += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom[${MOM_EXT_OFF}u + e * ${cs}u + c];
        es += v.x;
        eq += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
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
    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = ${norm === 'gn' ? 'total_s / 16777216.0' : '0.0'};
    let varr = ${norm === 'gn' ? 'max(total_q / 16777216.0 - mean * mean, 0.0)' : '1.0'};
    let inv_std = ${norm === 'gn' ? 'inverseSqrt(varr + eff_eps)' : '1.0'};
    let scale = inv_std * gamma;
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
  const flushWgsl = `
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

  const normWgsl = `${getActivationWgsl(activation)}
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

  // --- 5. CONV_INT8 DILATION-SPECIALIZED SHADERS (7/8 storage + dynamic uniform) ---
  const buildConvForDilation = (D) => {
    const qStep = Math.floor(D / 4);
    const rBytes = D % 4;
    const rBits = rBytes * 8;
    const halfPass = !hasF16 && cs >= 16;

    const emitUnpack = (vName, uExpr) => {
      if (hasF16) {
        return `
          let ${vName} = vec4<f16>(vec2<f16>(unpack2x16float(((${uExpr} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${uExpr} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${qConst.sterbenzSub});`;
      }
      return `
          let ${vName} = unpack4x8unorm(${uExpr}) - vec4<f32>(${qConst.uZeroFloat});`;
    };

    const emitLoads = (arrName) => {
      if (rBits === 0) {
        return `
          let u_neg = ${arrName}[base - ${qStep}u];
          let uC    = ${arrName}[base];
          let u_pos = ${arrName}[base + ${qStep}u];` +
          emitUnpack('vn', 'u_neg') +
          emitUnpack('vc', 'uC') +
          emitUnpack('vp', 'u_pos');
      }
      const loShift = 32 - rBits;
      if (qStep === 0) {
        return `
          let uL = ${arrName}[base - 1u];
          let uC = ${arrName}[base];
          let uR = ${arrName}[base + 1u];
          let u_neg = (uL >> ${loShift}u) | (uC << ${rBits}u);
          let u_pos = (uC >> ${rBits}u) | (uR << ${loShift}u);` +
          emitUnpack('vn', 'u_neg') +
          emitUnpack('vc', 'uC') +
          emitUnpack('vp', 'u_pos');
      }
      return `
          let uL = ${arrName}[base - ${qStep + 1}u];
          let uN = ${arrName}[base - ${qStep}u];
          let uC = ${arrName}[base];
          let uP = ${arrName}[base + ${qStep}u];
          let uR = ${arrName}[base + ${qStep + 1}u];
          let u_neg = (uL >> ${loShift}u) | (uN << ${rBits}u);
          let u_pos = (uP >> ${rBits}u) | (uR << ${loShift}u);` +
        emitUnpack('vn', 'u_neg') +
        emitUnpack('vc', 'uC') +
        emitUnpack('vp', 'u_pos');
    };

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
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
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

    const emitConvEntry = (fnName, cStart, cEnd, entryKind) => {
      const accInit = rep(cEnd - cStart, (i) => {
        const c = cStart + i;
        if (norm === 'none') {
          const g = c >>> 2;
          const sw = ['x', 'y', 'z', 'w'][c & 3];
          if (useUniformWeff) {
            const uVecIdx = (biasEffVec4Off + g) >>> 1;
            const colIdx = (biasEffVec4Off + g) & 1;
            return `  var a_${c} = ${V4}(w_eff_u[${uVecIdx}u][${colIdx}].${sw});\n`;
          }
          return `  var a_${c} = ${V4}(w_eff[${biasEffVec4Off + g}u].${sw});\n`;
        }
        return `  var a_${c} = ${V4}(0.0${suf});\n`;
      });

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
      const writeY8Expr = entryKind === 'main' ? 'true' : '(cp.write_ext_y8 != 0u)';
      const rowLocals = entryKind === 'bg'
        ? `  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${STAGE_BG_ROW}u + lid.y) * ${rowStrideStage}u + x4;`
        : `  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${rowStrideStage}u + x4;`;

      const tapHeader = useUniformWeff
        ? `        let wbu_tap = tap_yz * ${(cs * 3 * oc4) / 2}u;\n`
        : `        let wb_tap = tap_yz * ${cs * 3 * oc4}u;\n`;

      return `
@compute @workgroup_size(64, 4, 1)
fn ${fnName}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${hasF16 && hasSubgroups32 ? '' : '  let hbase = (lid.y * 2u + sg) * 32u;\n  let tid = hbase + slane;\n  let hslot = (lid.y * 2u + sg) * 2u;\n'}
  let x_pad = x4 + ${X4_HALO}u;
${coords}
${accInit}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${D};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${D};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${rowStrideAct}u + x_pad;
${tapHeader}${rep(4, (q) => emitQuarterLoop(q, cStart, cEnd))}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${rowLocals}
${emitEpilogue128({
  cStart,
  cEnd,
  hrExpr,
  storeMode,
  isPermuted: hasF16,
  momOffExpr,
  alsoWriteMomMain: entryKind !== 'main',
  writeY8Expr,
})}}`;
    };

    const entries = halfPass
      ? emitConvEntry('main_lo', 0, csHalf, 'main') +
        emitConvEntry('main_hi', csHalf, cs, 'main') +
        emitConvEntry('main_ext_lo', 0, csHalf, 'ext') +
        emitConvEntry('main_ext_hi', csHalf, cs, 'ext') +
        emitConvEntry('main_bg_lo', 0, csHalf, 'bg') +
        emitConvEntry('main_bg_hi', csHalf, cs, 'bg')
      : emitConvEntry('main', 0, cs, 'main') +
        emitConvEntry('main_ext', 0, cs, 'ext') +
        emitConvEntry('main_bg', 0, cs, 'bg');

    const wEffDecl = useUniformWeff
      ? `@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(totalWEffVec4s / 2)}>;`
      : `@group(0) @binding(6) var<storage, read> w_eff : array<${V4}>;`;

    return `${f16Enable}${sgEnable}
struct BandConvParams {
  is_full : u32,
  z_start : u32,
  strip_off : u32,
  ext_off : u32,
  write_ext_y8 : u32,
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
${sharedReductionDecls}${entries}`;
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

  const clsWgsl = `${f16Enable}
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

  const uniqueDilations = Array.from(new Set(dilations.slice(1)));
  const convWgsls = Object.fromEntries(uniqueDilations.map((d) => [d, buildConvForDilation(d)]));

  return {
    initActWgsl,
    conv0Wgsl,
    prepWgsl,
    flushWgsl,
    normWgsl,
    convWgsls,
    clsWgsl,
    totalWEffVec4s,
    useUniformWeff,
    csQ,
    halfPass0,
    halfPassConv: !hasF16 && cs >= 16,
  };
}

async function setupNetLowMem128(device, d, packed, hasF16, hasSubgroups32, modelEntry, probCfg) {
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
    hasSubgroups32,
    numConvs,
    probCfg,
  });

  console.log(
    `[WebGPU-V4-128M] ${d.chan}ch(cs=${d.cs})/${d.nclass}cls (${numConvs} convs, ${d.activation}, norm=${d.norm}` +
    `${probCfg ? ', prob=3' : ''}) | ${hasF16 ? 'f16+sterbenz' : 'f32'} | ${hasSubgroups32 ? 'subgroups32' : 'shared-8KiB'} ` +
    `| ZYCX-4Q+64slice | maxBuf=${(Math.max(actQBytes, stageBytes, momBytes, outBufBytes) / 1048576).toFixed(1)} MiB`
  );

  const S = GPUBufferUsage.STORAGE;
  const U = GPUBufferUsage.UNIFORM;
  const CD = GPUBufferUsage.COPY_DST;
  const CS = GPUBufferUsage.COPY_SRC;
  const ownedBuffers = [];
  const mkBuf = (size, usage) => {
    const buf = device.createBuffer({ size: Math.max(16, Math.ceil(size / 16) * 16), usage });
    ownedBuffers.push(buf);
    return buf;
  };

  const paddedVox = DIM * DIM * ROW_SCALARS_PAD;
  const inpBytes = paddedVox * (hasF16 ? 2 : 4);
  const wEffBytes = hasF16 ? Math.ceil(shaders.totalWEffVec4s / 2) * 16 : shaders.totalWEffVec4s * 16;

  const inpBuf = mkBuf(inpBytes, S | CD | CS);
  const act8_0 = mkBuf(actQBytes, S | CD | CS);
  const act8_1 = mkBuf(actQBytes, S | CD | CS);
  const act8_2 = mkBuf(actQBytes, S | CD | CS);
  const act8_3 = mkBuf(actQBytes, S | CD | CS);
  const stageBuf = mkBuf(stageBytes, S);
  const wRawBuf = mkBuf(hasF16 ? packed.wF16.byteLength : packed.wF32.byteLength, S | CD);
  const qmetaBuf = mkBuf(packed.qmetaF32.byteLength, S | U | CD);
  const momBuf = mkBuf(momBytes, S);
  const wEffBuf = mkBuf(wEffBytes, shaders.useUniformWeff ? (S | U) : S);
  const labels8Buf = mkBuf(outBufBytes, S | CD | CS);
  const readbackBuf = mkBuf(outBufBytes, GPUBufferUsage.MAP_READ | CD);
  const canGpuProb = !!(probCfg && actQBytes >= outBufBytes);
  const probPackTmpBuf = canGpuProb ? mkBuf(outBufBytes, S | CD | CS) : null;

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

  const dilKeys = Object.keys(shaders.convWgsls).map(Number);
  const { pInit, pMomFin, pPrepW, pFlush, pNorm, pNormHalo, pCls, pConv0, convPipes } = await getNetPipes128(
    device,
    d,
    packed,
    hasF16,
    hasSubgroups32,
    probCfg,
    shaders,
    dilKeys
  );

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
  const bgConv0 = mkBg(p0Bgl, [inpBuf, act8_0, act8_1, act8_2, act8_3, stageBuf, wRawBuf, momBuf, qmetaBuf, strips0Ubo, conv0Ubo]);
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
  const convBgs = Array.from({ length: numConvs }, (_, li) => {
    if (li === 0) return null;
    const dil = d.dilations[li];
    const pObj = shaders.halfPassConv ? convPipes[dil].lo : convPipes[dil].main;
    return mkBg(pObj.bgl, [act8_0, act8_1, act8_2, act8_3, stageBuf, momBuf, wEffBuf, stripsBufs[li], bandDynRes]);
  });

  const padInputHost = hasF16 ? new Uint16Array(paddedVox) : new Float32Array(paddedVox);
  const headRowHost = new Uint8Array(DIM * DIM);
  const stripsHost = new Uint32Array(TOTAL_STRIPS);
  const normAuxHost = new Uint32Array(TOTAL_STRIPS + DIM * DIM);
  const prepTmpU32 = new Uint32Array(12);
  const prepTmpF32 = new Float32Array(prepTmpU32.buffer);
  const u4Tmp = new Uint32Array(4);

  const setBandSlot = (slotIdx, isFull, zStart, stripOff, extOff, writeExtY8, bgY0, bgZ0) => {
    const o = slotIdx * uboAlignU32;
    bandUboHost[o] = isFull ? 1 : 0;
    bandUboHost[o + 1] = zStart;
    bandUboHost[o + 2] = stripOff;
    bandUboHost[o + 3] = extOff;
    bandUboHost[o + 4] = writeExtY8 ? 1 : 0;
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
      const layerBaseSlot = (li - 1) * SLOTS_PER_LAYER;
      const bgY0 = L.bgStrip ? L.bgStrip.yWg * 4 : 0;
      const bgZ0 = L.bgStrip ? L.bgStrip.z : 0;
      for (let b = 0; b < 8; b++) {
        setBandSlot(layerBaseSlot + b, L.isFull, b * 32, mainStart[b], extStart[b], writeExtY8, bgY0, bgZ0);
      }
      for (let fb = 0; fb < 6; fb++) {
        setBandSlot(layerBaseSlot + 8 + fb, L.isFull, fb * 32, mainStart[fb], 0, false, 0, 0);
        setBandSlot(layerBaseSlot + 14 + fb, false, fb * 32, extStart[fb], 0, false, 0, 0);
      }
      bandPlans[li] = { L, nMain, nExt, nHalo, mainCount, extCount, layerBaseSlot };
    }
    if (numConvs > 1) {
      device.queue.writeBuffer(bandUboBuf, 0, bandUboHost);
    }

    const enc = device.createCommandEncoder();
    const passCategories = [];
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
        const dil = d.dilations[li];
        const pipes = convPipes[dil];
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

  execute.dispose = () => {
    for (const b of ownedBuffers) b.destroy();
    ownedBuffers.length = 0;
  };
  execute.__passCategories = [];
  execute.__coneInfo = () => ({ paddedVox, actMiB: actQBytes / 1048576, mode: 'LowMem128' });
  return execute;
}

export const supportsF32Fallback = true;

export async function setupNet(device, safetensorBytes, callbackUI, modelEntry = {}) {
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
  const adInfo = device.__adapterInfo || device.adapterInfo || {};
  const hasSubgroups32 = !!device.features?.has?.('subgroups') &&
    adInfo.subgroupMinSize === 32 && adInfo.subgroupMaxSize === 32 &&
    !modelEntry?.disableSubgroups;

  const nvox = DIM * DIM * DIM;
  const outBufBytes = probCfg ? nvox * 4 : nvox;
  const splitHalves = d.cs >= 16;
  const csHalf = splitHalves ? d.cs / 2 : d.cs;
  const actBytes = DIM * DIM * csHalf * X4_PAD * 4;
  const y8Bytes = DIM * DIM * csHalf * X4_VALID * 4;

  const lim = device.limits || {};
  const maxAllowed = Math.min(lim.maxStorageBufferBindingSize ?? Infinity, lim.maxBufferSize ?? Infinity);
  if ((modelEntry?.forceLowMem128 || actBytes > maxAllowed || outBufBytes > maxAllowed) && d.cs >= 8 && d.cs % 4 === 0) {
    return setupNetLowMem128(device, d, packed, hasF16, hasSubgroups32, modelEntry, probCfg);
  }
  if (actBytes > maxAllowed || outBufBytes > maxAllowed) {
    const needMiB = Math.max(actBytes, outBufBytes) >>> 20;
    throw new Error(`meshnet_fast_v4: buffer (${needMiB} MiB) exceeds device limit (${maxAllowed >>> 20} MiB)`);
  }

  const shaders = buildShaders({
    cs: d.cs,
    chan: d.chan,
    nclass: d.nclass,
    clsK4: packed.clsK4,
    dilations: d.dilations,
    activation: d.activation,
    norm: d.norm,
    hasF16,
    hasSubgroups32,
    splitHalves,
    probCfg,
  });

  console.log(
    `[WebGPU-V4] ${d.chan}ch(cs=${d.cs})/${d.nclass}cls (${d.dilations.length} convs, ${d.activation}, norm=${d.norm}` +
    `${probCfg ? ', prob=3' : ''}) | ${hasF16 ? 'f16+sterbenz' : 'f32'} | ${hasSubgroups32 ? 'subgroups32' : 'shared-8KiB'} ` +
    `| ZYCX-pad80 | maxBuf=${(Math.max(actBytes, outBufBytes) / 1048576).toFixed(1)} MiB`
  );

  const S = GPUBufferUsage.STORAGE;
  const CD = GPUBufferUsage.COPY_DST;
  const CS = GPUBufferUsage.COPY_SRC;
  const ownedBuffers = [];
  const mkBuf = (size, usage) => {
    const buf = device.createBuffer({ size: Math.max(16, Math.ceil(size / 16) * 16), usage });
    ownedBuffers.push(buf);
    return buf;
  };

  const paddedVox = DIM * DIM * ROW_SCALARS_PAD;
  const inpBytes = paddedVox * (hasF16 ? 2 : 4);
  const momMainBytes = TOTAL_HALF_ROWS * d.cs * 16;
  const momExtBytes = MAX_EXT_HALF_ROWS * d.cs * 16;
  const momStatsBytes = (d.cs * 2 + 4) * 16;
  const wEffBytes = hasF16 ? Math.ceil(shaders.totalWEffVec4s / 2) * 16 : shaders.totalWEffVec4s * 16;

  const inpBuf = mkBuf(inpBytes, S | CD | CS);
  const act8_0 = mkBuf(actBytes, S | CD | CS);
  const act8_1 = mkBuf(splitHalves ? actBytes : 16, S | CD | CS);
  const y8_0 = mkBuf(y8Bytes, S | CD | CS);
  const y8_1 = mkBuf(splitHalves ? y8Bytes : 16, S | CD | CS);
  const wRawBuf = mkBuf(hasF16 ? packed.wF16.byteLength : packed.wF32.byteLength, S | CD);
  const qmetaBuf = mkBuf(packed.qmetaF32.byteLength, S | CD);
  const momMainBuf = mkBuf(momMainBytes, S);
  const momExtBuf = mkBuf(momExtBytes, S);
  const momStatsBuf = mkBuf(momStatsBytes, S);
  const wEffBuf = mkBuf(wEffBytes, shaders.useUniformWeff ? (S | GPUBufferUsage.UNIFORM) : S);
  const labels8Buf = mkBuf(outBufBytes, S | CD | CS);
  const readbackBuf = mkBuf(outBufBytes, GPUBufferUsage.MAP_READ | CD);

  const numConvs = d.dilations.length;
  const canCone = d.norm === 'gn' && !modelEntry?.disableConeSkip;
  const stripsBufs = Array.from({ length: numConvs }, () => mkBuf(canCone ? TOTAL_STRIPS * 4 : 16, S | CD));
  const normAuxBufs = Array.from({ length: numConvs - 1 }, () => mkBuf(canCone ? (TOTAL_STRIPS + DIM * DIM) * 4 : 16, S | CD));
  const clsStripsBuf = mkBuf(canCone ? TOTAL_STRIPS * 4 : 16, S | CD);

  const conv0Ubo = mkBuf(16, GPUBufferUsage.UNIFORM | CD);
  const clsUbo = mkBuf(16, GPUBufferUsage.UNIFORM | CD);
  const prepUbos = Array.from({ length: numConvs }, () => mkBuf(48, GPUBufferUsage.UNIFORM | CD));
  const normUbos = Array.from({ length: numConvs - 1 }, () => mkBuf(16, GPUBufferUsage.UNIFORM | CD));
  const convUbos = Array.from({ length: numConvs }, () => mkBuf(16, GPUBufferUsage.UNIFORM | CD));

  device.queue.writeBuffer(wRawBuf, 0, hasF16 ? packed.wF16 : packed.wF32);
  device.queue.writeBuffer(qmetaBuf, 0, packed.qmetaF32);

  // Compile/cache all shader modules and pipelines in parallel per device
  const dilKeys = Object.keys(shaders.convWgsls).map(Number);
  const { pInit, pMomFin, pPrepW, pNorm, pNormHalo, pCls, pConv0, convPipes } = await getNetPipesStd(
    device,
    d,
    packed,
    hasF16,
    hasSubgroups32,
    splitHalves,
    probCfg,
    shaders,
    dilKeys
  );

  const mkBg = (bgl, bufs) => device.createBindGroup({
    layout: bgl,
    entries: bufs.map((buffer, binding) => ({ binding, resource: { buffer } })),
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
  const convBgs = convUbos.map((ubo, li) => {
    if (li === 0) return null;
    const dil = d.dilations[li];
    const pObj = shaders.halfPassConv ? convPipes[dil].lo : convPipes[dil].main;
    return mkBg(pObj.bgl, [
      act8_0, act8_1, y8_0, y8_1, momMainBuf, momExtBuf, wEffBuf, stripsBufs[li], ubo,
    ]);
  });

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
    const enc = device.createCommandEncoder();
    const passCategories = [];
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
        const pipes = convPipes[dil];
        const bg = convBgs[li];
        const mainY = L.isFull ? 64 : 1;
        const mainZ = L.isFull ? DIM : nMain;
        const writeExtY8 = (L.mode === 'rpure' && nHalo > 0) || (L.mode === 'bwd' && li + 1 < numConvs);
        u4Tmp[0] = L.isFull ? 1 : 0;
        u4Tmp[1] = nMain;
        u4Tmp[2] = writeExtY8 ? 1 : 0;
        u4Tmp[3] = 0;
        device.queue.writeBuffer(convUbos[li], 0, u4Tmp);

        if (shaders.halfPassConv) {
          {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bg);
            if (mainZ > 0) {
              pass.setPipeline(pipes.lo.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (nExt > 0) {
              pass.setPipeline(pipes.extLo.pipe);
              pass.dispatchWorkgroups(1, 1, nExt);
            }
            pass.end();
            passCategories.push('convHidden');
          }
          {
            const pass = enc.beginComputePass();
            pass.setBindGroup(0, bg);
            if (mainZ > 0) {
              pass.setPipeline(pipes.hi.pipe);
              pass.dispatchWorkgroups(1, mainY, mainZ);
            }
            if (nExt > 0) {
              pass.setPipeline(pipes.extHi.pipe);
              pass.dispatchWorkgroups(1, 1, nExt);
            }
            pass.end();
            passCategories.push('convHidden');
          }
        } else {
          const pass = enc.beginComputePass();
          pass.setBindGroup(0, bg);
          if (mainZ > 0) {
            pass.setPipeline(pipes.main.pipe);
            pass.dispatchWorkgroups(1, mainY, mainZ);
          }
          if (nExt > 0) {
            pass.setPipeline(pipes.ext.pipe);
            pass.dispatchWorkgroups(1, 1, nExt);
          }
          pass.end();
          passCategories.push('convHidden');
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
    }

    execute.__passCategories = passCategories;
    return ioCtl.finishAndReadback({ enc, schedule, passCategories, u4Tmp, ioOpts });
  }

  execute.dispose = () => {
    for (const b of ownedBuffers) b.destroy();
    ownedBuffers.length = 0;
  };
  execute.__passCategories = [];
  execute.__coneInfo = () => ({ paddedVox, actMiB: actBytes / 1048576 });
  execute.kernels = 'v4-int8';
  return execute;
}

const load = async (device, weightPath) => {
  const buf = await fetch(weightPath).then((r) => r.arrayBuffer());
  return setupNet(device, new Uint8Array(buf));
};

export const supportsGpuNativeIO = true;
export default { load, setupNet, supportsF32Fallback, supportsGpuNativeIO };
