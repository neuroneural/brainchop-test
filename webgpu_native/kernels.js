// webgpu_native/kernels.js
// ---------------------------------------------------------------------------
// Hand-written WGSL for the MeshNet family, ported from brainchopC
// (src/webgpu_kernels.h). brainchopC specialises its kernels with the C
// preprocessor and only for 16- and 24-channel GroupNorm models; here the same
// kernels are generated in JS for whatever webgl2_runners/descriptors.js plus
// the safetensors describe:
//
//   - any channel count (CS = channels rounded up to 4; pad lanes stay zero),
//   - all three families: A conv+bias -> relu/elu, B conv -> GroupNorm -> gelu,
//     C conv -> GroupNorm -> per-channel affine -> gelu,
//   - every activation the WebGL2 path supports, selected by name, never
//     defaulted (brainchopC records a silently swapped GELU running on four
//     backends without an error),
//   - the launch shape as a preset: `localX` threads per workgroup and `vox`
//     voxels per thread in the convolution. Measured best: AMD RDNA3.5 256x1,
//     Apple M3 Pro 64x2 (brainchopC's default); see presets.js.
//
// LAYOUT, shared with brainchopC and webgl2_runners/weights.js packWeights():
// activations are channel-last at stride CS, voxel index (z*NY + y)*NX + x with
// axis 0 of the input array as z; conv weights are ((tap*inCS) + ic)*CS + oc,
// tap = (dz+1)*9 + (dy+1)*3 + (dx+1). Storage is f16, arithmetic f32.
//
// What the convolution does and why (vectorising over the output channel,
// named accumulators, select() padding, register blocking over `vox` voxels) is
// documented at length in brainchopC's header and is not repeated here.
// ---------------------------------------------------------------------------

const rep = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join('');
const QUAD = ['x', 'y', 'z', 'w'];

/** Scalar activation `act` plus a vec4 `act4`, by name. */
function activationWgsl(kind) {
  const lanes = 'fn act4(x : vec4<f32>) -> vec4<f32> {\n' +
    '  return vec4<f32>(act(x.x), act(x.y), act(x.z), act(x.w));\n}\n';
  switch (kind) {
    case 'gelu_tanh':
      // tinygrad's .gelu(), which the safetensors exports compute. The clamp is
      // required: tanh lowered as (e^2u-1)/(e^2u+1) is Inf/Inf = NaN past |u|~44,
      // and a NaN reaches the classifier as label 0 everywhere.
      return 'fn act(x : f32) -> f32 {\n' +
        '  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);\n' +
        '  return 0.5 * x * (1.0 + tanh(u));\n}\n' +
        'fn act4(x : vec4<f32>) -> vec4<f32> {\n' +
        '  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), vec4<f32>(-9.0), vec4<f32>(9.0));\n' +
        '  return 0.5 * x * (vec4<f32>(1.0) + tanh(u));\n}\n';
    case 'gelu_tanh_approx':
      return 'fn mn_tanh(x_in : f32) -> f32 {\n' +
        '  let x = clamp(x_in, -9.0, 9.0);\n  let u = x * x;\n' +
        '  var p = -8.29118133e-14;\n  p = p * u + 5.19263868e-11;\n  p = p * u - 2.00294448e-08;\n' +
        '  p = p * u + 1.11017944e-05;\n  p = p * u + 0.00309865153;\n  p = p * u + 0.130791619;\n' +
        '  p = p * u + 0.99999994;\n  var q = 0.000253859733;\n  q = q * u + 0.024473751;\n' +
        '  q = q * u + 0.464124829;\n  q = q * u + 1.0;\n  return x * p / q;\n}\n' +
        'fn act(x : f32) -> f32 {\n' +
        '  let u = 0.797884583 * (x + 0.044715 * (x * x * x));\n' +
        '  return (0.5 * x) * (1.0 + mn_tanh(u));\n}\n' + lanes;
    case 'gelu_exp2_approx':
      return 'fn mn_fast_exp2(x_in : f32) -> f32 {\n' +
        '  var x = x_in;\n  if (!(x > -126.0)) { x = -126.0; }\n  if (x > 126.0) { x = 126.0; }\n' +
        '  let f = floor(x);\n  let r = x - f;\n  var p = 0.000216128448;\n' +
        '  p = p * r + 0.00124678648;\n  p = p * r + 0.0096754498;\n  p = p * r + 0.0554852814;\n' +
        '  p = p * r + 0.240229305;\n  p = p * r + 0.693147044;\n  p = p * r + 1.0;\n' +
        '  return p * bitcast<f32>(u32((i32(f) + 127) << 23u));\n}\n' +
        'fn act(x : f32) -> f32 {\n' +
        '  let u = x + 0.044715 * x * x * x;\n' +
        '  return x / (1.0 + mn_fast_exp2(-2.302208198144325 * u));\n}\n' + lanes;
    case 'relu':
      return 'fn act(x : f32) -> f32 { return max(x, 0.0); }\n' +
        'fn act4(x : vec4<f32>) -> vec4<f32> { return max(x, vec4<f32>(0.0)); }\n';
    case 'elu':
      return 'fn act(x : f32) -> f32 { return select(exp(x) - 1.0, x, x > 0.0); }\n' +
        'fn act4(x : vec4<f32>) -> vec4<f32> {\n' +
        '  return select(exp(x) - vec4<f32>(1.0), x, x > vec4<f32>(0.0));\n}\n';
    default:
      throw new Error(`webgpu-native: unknown activation '${kind}'; add it deliberately`);
  }
}

/**
 * The convolution: one invocation computes all CS outputs of `vox` consecutive
 * voxels along x. Layer 0 (cin == 1) and the hidden layers share the pipeline;
 * in_channels/in_stride come from the per-layer uniform. Family A folds the
 * bias and activation into the store; a biased conv ahead of GroupNorm (no
 * shipped model, but cheap) adds the bias only.
 */
function convWgsl(d, localX, vox) {
  const P = d.cs / 4;
  const V = (f) => rep(vox, f);
  const N = (f) => rep(P, f);
  const loadW = N((n) => `          let w${n} = vec4<f32>(wts4[wq + ${n}u]);\n`);
  const quad = (k) =>
    `        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${k}u) * (CS / 4u);\n` + loadW +
    V((v) => N((n) => `          a${v}${n} = fma(w${n}, vec4<f32>(s${v}.${QUAD[k]}), a${v}${n});\n`)) +
    '        }\n';
  const epilogue =
    (d.convBias ? N((n) => `  let b${n} = vec4<f32>(wts4[params.bias_off / 4u + ${n}u]);\n`) +
      V((v) => N((n) => `  a${v}${n} = a${v}${n} + b${n};\n`)) : '') +
    (d.norm === 'none' ? V((v) => N((n) => `  a${v}${n} = act4(a${v}${n});\n`)) : '');
  return `@compute @workgroup_size(${localX}, 1, 1)
fn conv(@builtin(global_invocation_id) gid : vec3<u32>) {
  let y = i32(gid.y);
  let z = i32(gid.z);
  if (y >= NY || z >= NZ) { return; }
  let x0 = i32(gid.x) * ${vox};
  let d = params.dilation;
  let cin = params.in_channels;
  let st4 = params.in_stride / 4u;
  let cin4 = cin / 4u;
  let wq0 = params.weight_off / 4u;
` + V((v) => N((n) => `  var a${v}${n} = vec4<f32>(0.0);\n`)) +
    V((v) => `  var s${v} = vec4<f32>(0.0);\n`) + `  var tap : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
  for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
    let sz = z + dz * d;
    let sy = y + dy * d;
    let okyz = sz >= 0 && sz < NZ && sy >= 0 && sy < NY;
    let plane = (u32(clamp(sz, 0, NZ - 1)) * u32(NY) + u32(clamp(sy, 0, NY - 1))) * u32(NX);
  for (var dx : i32 = -1; dx <= 1; dx = dx + 1) {
    let dxd = dx * d;
    if (okyz) {
      if (cin == 1u) {
        let wq = wq0 + tap * (CS / 4u);
` + loadW.replace(/^ {10}/gm, '        ') + V((v) => `        { let sx = x0 + ${v} + dxd;
          let sv = f32(src[plane + u32(clamp(sx, 0, NX - 1))]);
          let s = vec4<f32>(select(0.0, sv, sx >= 0 && sx < NX));
` + N((n) => `          a${v}${n} = fma(w${n}, s, a${v}${n});\n`) + '        }\n') + `      } else {
      for (var ic4 : u32 = 0u; ic4 < cin4; ic4 = ic4 + 1u) {
` + V((v) => `        { let sx = x0 + ${v} + dxd;
          let q = vec4<f32>(src4[(plane + u32(clamp(sx, 0, NX - 1))) * st4 + ic4]);
          s${v} = select(vec4<f32>(0.0), q, sx >= 0 && sx < NX); }
`) + quad(0) + quad(1) + quad(2) + quad(3) + `      }
      }
    }
    tap = tap + 1u;
  }}}
` + epilogue + `  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
` + V((v) => `  { let o = (obase + ${v}u) * CS;\n` +
    N((n) => rep(4, (c) => `    dst[o + ${4 * n + c}u] = f16(a${v}${n}.${QUAD[c]});\n`)) + '  }\n') + '}\n';
}

/**
 * GroupNorm moments (one group per channel): per-workgroup partial sums, each
 * invocation in its own slot (WGSL has no float atomics), then a striped fold.
 * The workgroup size here is `momLX`, not the convolution's: its scratch is
 * momLX * CS * 8 bytes, and 256 x 24 channels (48 KiB) exceeds the 32 KiB
 * that many devices, Apple's included, allow.
 */
function momentsWgsl(momLX) {
  return `var<workgroup> wg_sum : array<f32, ${momLX} * CS>;
var<workgroup> wg_sq : array<f32, ${momLX} * CS>;
@compute @workgroup_size(${momLX}, 1, 1)
fn moments(@builtin(global_invocation_id) gid : vec3<u32>,
           @builtin(local_invocation_index) lid : u32,
           @builtin(workgroup_id) wid : vec3<u32>,
           @builtin(num_workgroups) nwg : vec3<u32>) {
  let slot = lid * CS;
  let base = ((gid.z * u32(NY) + gid.y) * u32(NX) + gid.x) * CS;
  for (var c : u32 = 0u; c < CS; c = c + 1u) {
    let v = f32(dst[base + c]);
    wg_sum[slot + c] = v;
    wg_sq[slot + c] = v * v;
  }
  workgroupBarrier();
  if (lid < CS) {
    var s : f32 = 0.0;
    var q : f32 = 0.0;
    for (var l : u32 = 0u; l < ${momLX}u; l = l + 1u) {
      s = s + wg_sum[l * CS + lid];
      q = q + wg_sq[l * CS + lid];
    }
    let g = (wid.z * nwg.y + wid.y) * nwg.x + wid.x;
    mom[(g * CS + lid) * 2u] = s;
    mom[(g * CS + lid) * 2u + 1u] = q;
  }
}
const STRIPES : u32 = 256u / CS;
var<workgroup> fs : array<f32, 256>;
var<workgroup> fq : array<f32, 256>;
@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32) {
  let channel = lid % CS;
  let stripe = lid / CS;
  let groups = params.partial_groups;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  if (stripe < STRIPES) {
    var g : u32 = stripe;
    loop {
      if (g >= groups) { break; }
      s = s + mom[(g * CS + channel) * 2u];
      q = q + mom[(g * CS + channel) * 2u + 1u];
      g = g + STRIPES;
    }
  }
  fs[lid] = s;
  fq[lid] = q;
  workgroupBarrier();
  if (lid < CS) {
    var ts : f32 = 0.0;
    var tq : f32 = 0.0;
    for (var k : u32 = 0u; k < STRIPES; k = k + 1u) {
      ts = ts + fs[k * CS + lid];
      tq = tq + fq[k * CS + lid];
    }
    let n = f32(NX) * f32(NY) * f32(NZ);
    let mean = ts / n;
    let varr = max(tq / n - mean * mean, 0.0);
    mom[groups * CS * 2u + lid * 2u] = mean;
    mom[groups * CS * 2u + lid * 2u + 1u] = inverseSqrt(varr + EPS);
  }
}
`;
}

/** Normalise, optional per-channel affine, activate; in place. */
function normWgsl(localX) {
  return `@compute @workgroup_size(${localX}, 1, 1)
fn norm(@builtin(global_invocation_id) gid : vec3<u32>) {
  let base = ((gid.z * u32(NY) + gid.y) * u32(NX) + gid.x) * CS;
  let mbase = params.partial_groups * CS * 2u;
  for (var c : u32 = 0u; c < CS; c = c + 1u) {
    var v = (f32(dst[base + c]) - mom[mbase + c * 2u]) * mom[mbase + c * 2u + 1u];
    if (HAS_AFFINE) {
      v = v * f32(wts[params.affine_off + c]) + f32(wts[params.bias_off + c]);
    }
    dst[base + c] = f16(act(v));
  }
}
`;
}

/**
 * 1x1 classifier + argmax, one u32 label per voxel. A tie keeps the lower
 * class (strict >). The channel loop runs to CHAN: classifier weights are
 * packed c * NCLASS + k with only CHAN channels.
 */
function classifyWgsl(localX) {
  return `@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
@compute @workgroup_size(${localX}, 1, 1)
fn classify(@builtin(global_invocation_id) gid : vec3<u32>) {
  let i = (gid.z * u32(NY) + gid.y) * u32(NX) + gid.x;
  let base = i * CS;
  var best : u32 = 0u;
  var best_v : f32 = -3.0e38;
  for (var k : u32 = 0u; k < NCLASS; k = k + 1u) {
    var acc : f32 = 0.0;
    if (CLASSIFIER_BIAS) { acc = f32(wts[params.bias_off + k]); }
    for (var c : u32 = 0u; c < CHAN; c = c + 1u) {
      acc = acc + f32(src[base + c]) * f32(wts[params.weight_off + c * NCLASS + k]);
    }
    if (acc > best_v) { best_v = acc; best = k; }
  }
  labels[i] = best;
}
`;
}

/**
 * The whole module. One source, five entry points, one explicit bind group
 * layout (see meshnet_gpu.js): bindings 2/6 and 0/7 alias the same read-only
 * buffers as scalar and vec4 views so the convolution can load quads.
 *
 * @param d       descriptor from webgl2_runners/weights.js deriveDescriptor()
 * @param preset  { localX, vox, momLX } from presets.js
 */
export function buildWgsl(d, preset) {
  const { localX, vox, momLX } = preset;
  if (d.cs % 4 !== 0 || d.cs > 256) throw new Error(`webgpu-native: channel stride ${d.cs} unsupported`);
  if (d.nx % (localX * vox) || d.nx % localX || d.nx % momLX) {
    throw new Error(`webgpu-native: preset ${localX}x${vox}/${momLX} does not tile a ${d.nx}-voxel row`);
  }
  if (momLX < d.cs) throw new Error(`webgpu-native: moments workgroup ${momLX} < ${d.cs} channels`);
  return `enable f16;
const NX : i32 = ${d.nx};
const NY : i32 = ${d.ny};
const NZ : i32 = ${d.nz};
const CS : u32 = ${d.cs}u;
const CHAN : u32 = ${d.chan}u;
const NCLASS : u32 = ${d.nclass}u;
const HAS_AFFINE : bool = ${!!d.affine};
const CLASSIFIER_BIAS : bool = ${!!d.classifierBias};
const EPS : f32 = ${Number(d.eps ?? 1e-5).toExponential()};
struct Params {
  dilation : i32,
  weight_off : u32,
  affine_off : u32,
  bias_off : u32,
  in_channels : u32,
  in_stride : u32,
  partial_groups : u32,
  pad : u32,
};
@group(0) @binding(0) var<storage, read> src : array<f16>;
@group(0) @binding(1) var<storage, read_write> dst : array<f16>;
@group(0) @binding(2) var<storage, read> wts : array<f16>;
@group(0) @binding(3) var<uniform> params : Params;
@group(0) @binding(4) var<storage, read_write> mom : array<f32>;
@group(0) @binding(6) var<storage, read> wts4 : array<vec4<f16>>;
@group(0) @binding(7) var<storage, read> src4 : array<vec4<f16>>;
` + activationWgsl(d.activation) + convWgsl(d, localX, vox) +
    (d.norm === 'gn' ? momentsWgsl(momLX) + normWgsl(localX) : '') + classifyWgsl(localX);
}
