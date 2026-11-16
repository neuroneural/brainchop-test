var L=(t,n,a)=>new Promise((s,p)=>{var c=i=>{try{l(a.next(i))}catch(x){p(x)}},y=i=>{try{l(a.throw(i))}catch(x){p(x)}},l=i=>i.done?s(i.value):Promise.resolve(i.value).then(c,y);l((a=a.apply(t,n)).next())});import{p as ee,d as te,a as se}from"./index-CAUpP_IM.js";import"./vendor-niivue-BztUWqGV.js";import"./vendor-CKvLRpOF.js";import"./vendor-math-oqRZD8Fx.js";const d=256,D=[1,3,5,7,13,19,31,19,13,7,5,3,1],R=(t,n)=>Array.from({length:t},(a,s)=>n(s)).join(""),V=new Float32Array(1),re=new Uint32Array(V.buffer);function ae(t){V[0]=t;const n=re[0],a=n>>>16&32768;let s=(n>>>23&255)-127+15,p=n&8388607;return s<=0?s<-10?a:(p=(p|8388608)>>>1-s,a|p+4096>>>13):s>=31?a|31744:a|s<<10|p+4096>>>13}function Y(t){const n=new Uint16Array(t.length);for(let a=0;a<t.length;a++)n[a]=ae(t[a]);return n}function ie(t,n){var O,w;const a=n.nclass,s=Math.ceil(a/4),{convs:p,affines:c,classifier:y}=t,l=162,i=648*6,x=24*s,h=(l+12*i+x)*4,_=new Float32Array(h);for(let e=0;e<27;e++)for(let u=0;u<24;u++)_[e*24+u]=p[0].w[u*27+e];for(let e=1;e<13;e++){const u=p[e],g=(l+(e-1)*i)*4;for(let S=0;S<24;S++)for(let z=0;z<27;z++){const F=g+(S*27+z)*24;for(let q=0;q<24;q++)_[F+q]=u.w[(q*24+S)*27+z]}}const v=l+12*i,P=v*4;for(let e=0;e<24;e++)for(let u=0;u<a;u++)_[P+e*s*4+u]=y.w[u*24+e];const k=new Float32Array(624+s*4);for(let e=0;e<13;e++){const u=e*48;for(let g=0;g<24;g++)k[u+g]=(O=c[e])!=null&&O.scale?c[e].scale[g]:1,k[u+24+g]=(w=c[e])!=null&&w.bias?c[e].bias[g]:0}const U=624;if(y.bias)for(let e=0;e<a;e++)k[U+e]=y.bias[e];return{wF16:Y(_),qmetaF32:k,w0Vec4s:l,hiddenVec4PerLayer:i,clsVec4Off:v,clsBiasOff:U,clsK4:s}}function ne(t,n){const a=R(24,c=>`  var a${c} = vec4<f16>(0.0h);
`),s=(c,y)=>R(6,l=>{const i=l*4;return`          {
            let wv = w16_4[${y} + ${l}u];
            a${i}     = fma(${c}, vec4<f16>(wv.x), a${i});
            a${i+1} = fma(${c}, vec4<f16>(wv.y), a${i+1});
            a${i+2} = fma(${c}, vec4<f16>(wv.z), a${i+2});
            a${i+3} = fma(${c}, vec4<f16>(wv.w), a${i+3});
          }
`}),p=R(24,c=>`  y16_4[${c*4194304}u + out_idx4] = a${c};
`);return`enable f16;
const PLANE_X4 : u32 = 4194304u; // 256 * 256 * 64
const ROW_X4 : u32 = 64u;
const PARTIAL_ROWS : u32 = 65536u;
const MOM_STATS_OFF : u32 = 24u * 65536u * 4u;
const NVOX : f32 = 16777216.0;
const NCLASS : u32 = ${t}u;
const CLS_K4 : u32 = ${n}u;
const EPS : f32 = 1e-5;

struct Params {
  dilation : i32,
  w_vec4_off : u32,
  meta_off : u32,
  sh_neg : u32,
  sh_pos : u32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
};

@group(0) @binding(0) var<storage, read> inp16 : array<f16>;
@group(0) @binding(1) var<storage, read_write> act8 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y16_4 : array<vec4<f16>>;
@group(0) @binding(3) var<storage, read> w16_4 : array<vec4<f16>>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom : array<f32>;
@group(0) @binding(6) var<storage, read_write> labels_4 : array<vec4<f32>>;
@group(0) @binding(7) var<uniform> params : Params;

fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}

fn load_u8x4_slow(row_ptr : u32, sx : i32, mul : f16, bias : f16) -> vec4<f16> {
  var r = vec4<f16>(0.0h);
  let s0 = sx;
  if (s0 >= 0 && s0 < 256) {
    let u = act8[row_ptr + (u32(s0) >> 2u)];
    let b = (u >> ((u32(s0) & 3u) * 8u)) & 255u;
    r.x = fma(f16(b), mul / 255.0h, bias);
  }
  let s1 = sx + 1;
  if (s1 >= 0 && s1 < 256) {
    let u = act8[row_ptr + (u32(s1) >> 2u)];
    let b = (u >> ((u32(s1) & 3u) * 8u)) & 255u;
    r.y = fma(f16(b), mul / 255.0h, bias);
  }
  let s2 = sx + 2;
  if (s2 >= 0 && s2 < 256) {
    let u = act8[row_ptr + (u32(s2) >> 2u)];
    let b = (u >> ((u32(s2) & 3u) * 8u)) & 255u;
    r.z = fma(f16(b), mul / 255.0h, bias);
  }
  let s3 = sx + 3;
  if (s3 >= 0 && s3 < 256) {
    let u = act8[row_ptr + (u32(s3) >> 2u)];
    let b = (u >> ((u32(s3) & 3u) * 8u)) & 255u;
    r.w = fma(f16(b), mul / 255.0h, bias);
  }
  return r;
}

// Fast 1-cycle hardware unpack4x8unorm + funnel shift for interior warps!
fn load_u8x4(row_ptr : u32, sx : i32, sh : u32, mul : f16, bias : f16) -> vec4<f16> {
  if (sx >= 0 && sx <= 252) {
    let idx = u32(sx) >> 2u;
    let lo = act8[row_ptr + idx];
    let hi = act8[row_ptr + idx + 1u];
    let u = (lo >> sh) | (hi << (32u - sh));
    return fma(vec4<f16>(unpack4x8unorm(u)), vec4<f16>(mul), vec4<f16>(bias));
  }
  return load_u8x4_slow(row_ptr, sx, mul, bias);
}

@compute @workgroup_size(64, 1, 1)
fn conv0(@builtin(global_invocation_id) gid : vec3<u32>) {
  let x4 = gid.x;
  let y = i32(gid.y);
  let z = i32(gid.z);
  let x0 = i32(x4) * 4;
  let d = params.dilation;
${a}
  var tap : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * d;
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * d;
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_base = (u32(sz) * 256u + u32(sy)) * 256u;
        for (var dx : i32 = -1; dx <= 1; dx = dx + 1) {
          let sx = x0 + dx * d;
          let v = vec4<f16>(
            select(0.0h, inp16[row_base + u32(clamp(sx,     0, 255))], sx     >= 0 && sx     < 256),
            select(0.0h, inp16[row_base + u32(clamp(sx + 1, 0, 255))], sx + 1 >= 0 && sx + 1 < 256),
            select(0.0h, inp16[row_base + u32(clamp(sx + 2, 0, 255))], sx + 2 >= 0 && sx + 2 < 256),
            select(0.0h, inp16[row_base + u32(clamp(sx + 3, 0, 255))], sx + 3 >= 0 && sx + 3 < 256)
          );
          let wb = (tap + u32(dx + 1)) * 6u;
${s("v","wb")}        }
      }
      tap = tap + 3u;
    }
  }
  let out_idx4 = (u32(z) * 256u + u32(y)) * ROW_X4 + x4;
${p}
}

// ZERO-BARRIER 8-Bit Planar Conv: 64 threads cover X=256 (4 voxels/thread), ALL 24 channels in 1 pass!
@compute @workgroup_size(64, 4, 1)
fn conv_int8(@builtin(global_invocation_id) gid : vec3<u32>) {
  let x4 = gid.x;
  let y = i32(gid.y);
  let z = i32(gid.z);
  let x0 = i32(x4) * 4;
  let d = params.dilation;
  let sx_neg = x0 - d;
  let sx_pos = x0 + d;
  let sh_neg = params.sh_neg;
  let sh_pos = params.sh_pos;
  let w_layer = params.w_vec4_off;
${a}
  for (var ic : u32 = 0u; ic < 24u; ic = ic + 1u) {
    let qs = mom[MOM_STATS_OFF + ic * 4u + 2u];
    let mul = f16(qs * 255.0);
    let bias = f16(-7.0 * qs);
    let ic_plane = ic * PLANE_X4;
    let w_ic = w_layer + ic * 162u; // 27 * 6 vec4<f16>
    var tap_yz : u32 = 0u;
    for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
      let sz = z + dz * d;
      if (sz >= 0 && sz < 256) {
        let z_off = ic_plane + u32(sz) * 16384u; // 256 * 64
        for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
          let sy = y + dy * d;
          if (sy >= 0 && sy < 256) {
            let row_ptr = z_off + u32(sy) * ROW_X4;
            let wb = w_ic + tap_yz * 18u;

            // dx = -1
            let v_neg = load_u8x4(row_ptr, sx_neg, sh_neg, mul, bias);
${s("v_neg","wb")}
            // dx = 0 (always 4-byte aligned! Single u32 load + hardware unpack4x8unorm!)
            let v_mid = fma(vec4<f16>(unpack4x8unorm(act8[row_ptr + x4])), vec4<f16>(mul), vec4<f16>(bias));
${s("v_mid","wb + 6u")}
            // dx = +1
            let v_pos = load_u8x4(row_ptr, sx_pos, sh_pos, mul, bias);
${s("v_pos","wb + 12u")}          }
          tap_yz = tap_yz + 1u;
        }
      } else {
        tap_yz = tap_yz + 3u;
      }
    }
  }
  let out_idx4 = (u32(z) * 256u + u32(y)) * ROW_X4 + x4;
${p}
}

var<workgroup> red_s  : array<f32, 64>;
var<workgroup> red_q  : array<f32, 64>;
var<workgroup> red_mn : array<f32, 64>;
var<workgroup> red_mx : array<f32, 64>;

@compute @workgroup_size(64, 1, 1)
fn moments(@builtin(local_invocation_index) lid : u32,
           @builtin(workgroup_id) wid : vec3<u32>) {
  let y = wid.x;
  let z = wid.y;
  let c = wid.z;
  let row_idx = z * 256u + y;
  let v = vec4<f32>(y16_4[c * PLANE_X4 + row_idx * ROW_X4 + lid]);
  red_s[lid]  = v.x + v.y + v.z + v.w;
  red_q[lid]  = dot(v, v);
  red_mn[lid] = min(min(v.x, v.y), min(v.z, v.w));
  red_mx[lid] = max(max(v.x, v.y), max(v.z, v.w));
  workgroupBarrier();
  for (var stride : u32 = 32u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
      red_s[lid]  = red_s[lid]  + red_s[lid + stride];
      red_q[lid]  = red_q[lid]  + red_q[lid + stride];
      red_mn[lid] = min(red_mn[lid], red_mn[lid + stride]);
      red_mx[lid] = max(red_mx[lid], red_mx[lid + stride]);
    }
    workgroupBarrier();
  }
  if (lid == 0u) {
    let dst = (c * PARTIAL_ROWS + row_idx) * 4u;
    mom[dst]      = red_s[0];
    mom[dst + 1u] = red_q[0];
    mom[dst + 2u] = red_mn[0];
    mom[dst + 3u] = red_mx[0];
  }
}

var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
  let base = c * PARTIAL_ROWS * 4u;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  for (var r : u32 = lid; r < PARTIAL_ROWS; r = r + 256u) {
    let idx = base + r * 4u;
    s  = s + mom[idx];
    q  = q + mom[idx + 1u];
    mn = min(mn, mom[idx + 2u]);
    mx = max(mx, mom[idx + 3u]);
  }
  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
      fin_s[lid]  = fin_s[lid]  + fin_s[lid + stride];
      fin_q[lid]  = fin_q[lid]  + fin_q[lid + stride];
      fin_mn[lid] = min(fin_mn[lid], fin_mn[lid + stride]);
      fin_mx[lid] = max(fin_mx[lid], fin_mx[lid + stride]);
    }
    workgroupBarrier();
  }
  if (lid == 0u) {
    let mean = fin_s[0] / NVOX;
    let varr = max(fin_q[0] / NVOX - mean * mean, 0.0);
    let inv_std = inverseSqrt(varr + EPS);
    let mbase = params.meta_off;
    let gamma = qmeta[mbase + c];
    let beta  = qmeta[mbase + 24u + c];
    let u_lo = (fin_mn[0] - mean) * inv_std * gamma + beta;
    let u_hi = (fin_mx[0] - mean) * inv_std * gamma + beta;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    let qs = max(vmax / 248.0, 0.1705 / 7.0);
    let st = MOM_STATS_OFF + c * 4u;
    mom[st]      = mean;
    mom[st + 1u] = inv_std;
    mom[st + 2u] = qs;
    mom[st + 3u] = 1.0 / qs;
  }
}

// Hardware pack4x8unorm GroupNorm + GELU + 8-bit Quantize!
@compute @workgroup_size(64, 1, 1)
fn norm_quant8(@builtin(local_invocation_index) lid : u32,
               @builtin(workgroup_id) wid : vec3<u32>) {
  let y = wid.x;
  let z = wid.y;
  let c = wid.z;
  let mbase = params.meta_off;
  let st = MOM_STATS_OFF + c * 4u;
  let mean    = mom[st];
  let inv_std = mom[st + 1u];
  let inv_qs  = mom[st + 3u];
  let scale   = inv_std * qmeta[mbase + c];
  let shift   = qmeta[mbase + 24u + c] - mean * scale;

  let idx4 = c * PLANE_X4 + (z * 256u + y) * ROW_X4 + lid;
  let yv = vec4<f32>(y16_4[idx4]);
  let a = vec4<f32>(
    act(yv.x * scale + shift),
    act(yv.y * scale + shift),
    act(yv.z * scale + shift),
    act(yv.w * scale + shift)
  );
  act8[idx4] = pack4x8unorm((a * inv_qs + vec4<f32>(7.0)) * (1.0 / 255.0));
}

// Fast vec4<f16> 104-class streaming classifier (4 X-voxels per thread!)
@compute @workgroup_size(64, 4, 1)
fn classify_int8(@builtin(global_invocation_id) gid : vec3<u32>) {
  let x4 = gid.x;
  let y = gid.y;
  let z = gid.z;
  let row_idx = z * 256u + y;
  let w_cls = params.w_vec4_off;
  let m_cls = params.meta_off;

  var feat : array<vec4<f16>, 24>;
  for (var c : u32 = 0u; c < 24u; c = c + 1u) {
    let qs = mom[MOM_STATS_OFF + c * 4u + 2u];
    let u = act8[c * PLANE_X4 + row_idx * ROW_X4 + x4];
    feat[c] = fma(vec4<f16>(unpack4x8unorm(u)), vec4<f16>(f16(qs * 255.0)), vec4<f16>(f16(-7.0 * qs)));
  }

  var best_v = vec4<f32>(-3.0e38);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < CLS_K4; k4 = k4 + 1u) {
    var acc0 = vec4<f16>(0.0h);
    var acc1 = vec4<f16>(0.0h);
    var acc2 = vec4<f16>(0.0h);
    var acc3 = vec4<f16>(0.0h);
    for (var c : u32 = 0u; c < 24u; c = c + 1u) {
      let wv = w16_4[w_cls + c * CLS_K4 + k4];
      let f = feat[c];
      acc0 = fma(f, vec4<f16>(wv.x), acc0);
      acc1 = fma(f, vec4<f16>(wv.y), acc1);
      acc2 = fma(f, vec4<f16>(wv.z), acc2);
      acc3 = fma(f, vec4<f16>(wv.w), acc3);
    }
    let k_base = k4 * 4u;
    if (k_base < NCLASS) {
      let l0 = vec4<f32>(acc0) + vec4<f32>(qmeta[m_cls + k_base]);
      let m0 = l0 > best_v;
      best_v = select(best_v, l0, m0);
      best_k = select(best_k, vec4<u32>(k_base), m0);
    }
    if (k_base + 1u < NCLASS) {
      let k1 = k_base + 1u;
      let l1 = vec4<f32>(acc1) + vec4<f32>(qmeta[m_cls + k1]);
      let m1 = l1 > best_v;
      best_v = select(best_v, l1, m1);
      best_k = select(best_k, vec4<u32>(k1), m1);
    }
    if (k_base + 2u < NCLASS) {
      let k2 = k_base + 2u;
      let l2 = vec4<f32>(acc2) + vec4<f32>(qmeta[m_cls + k2]);
      let m2 = l2 > best_v;
      best_v = select(best_v, l2, m2);
      best_k = select(best_k, vec4<u32>(k2), m2);
    }
    if (k_base + 3u < NCLASS) {
      let k3 = k_base + 3u;
      let l3 = vec4<f32>(acc3) + vec4<f32>(qmeta[m_cls + k3]);
      let m3 = l3 > best_v;
      best_v = select(best_v, l3, m3);
      best_k = select(best_k, vec4<u32>(k3), m3);
    }
  }

  labels_4[row_idx * ROW_X4 + x4] = vec4<f32>(best_k);
}
`}function K(p,c,y){return L(this,arguments,function*(t,n,a,s={}){var X,I,E;if(!((X=t.features)!=null&&X.has("shader-f16")))throw new Error("dkatlas24_int8 requires WebGPU shader-f16 support");const l=n instanceof Uint8Array?n:new Uint8Array(n),i=ee(l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)),x=te(i);s!=null&&s.classifierBias&&x.classifier&&(x.classifier.bias=Float32Array.from(s.classifierBias));const h=se(x,{nx:d,ny:d,nz:d,activation:"gelu_tanh",dilations:D});if(h.chan!==24)throw new Error(`dkatlas24_int8 expected 24 channels, got ${h.chan}`);const _=ie(x,h),v=d*d*d,P=v*24*2,k=v*24*1,U=(24*65536*4+256)*4,O=t.limits||{};if(P>((I=O.maxStorageBufferBindingSize)!=null?I:1/0)||P>((E=O.maxBufferSize)!=null?E:1/0))throw new Error("dkatlas24_int8: 768 MiB buffer exceeds device limit");console.log(`[WebGPU-8bit] MindSnap 24ch/${h.nclass}cls Zero-Barrier U8x4 + vec4<f16> SIMD | act8=${k>>>20} MiB + y16=${P>>>20} MiB (-50% VRAM)`);const w=GPUBufferUsage.STORAGE,e=(o,m)=>t.createBuffer({size:Math.ceil(o/16)*16,usage:m}),u=e(v*2,w|GPUBufferUsage.COPY_DST),g=e(k,w),S=e(P,w),z=e(_.wF16.byteLength,w|GPUBufferUsage.COPY_DST),F=e(_.qmetaF32.byteLength,w|GPUBufferUsage.COPY_DST),q=e(U,w),M=e(v*4,w|GPUBufferUsage.COPY_SRC),C=e(v*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);t.queue.writeBuffer(z,0,_.wF16),t.queue.writeBuffer(F,0,_.qmetaF32);const j=ne(h.nclass,_.clsK4),G=t.createShaderModule({code:j});if(G.getCompilationInfo){const m=(yield G.getCompilationInfo()).messages.filter(f=>f.type==="error");if(m.length)throw new Error("dkatlas24_int8 WGSL error: "+m.map(f=>`L${f.lineNum}:${f.linePos} ${f.message}`).join(" | "))}const Z=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","uniform"],T=t.createBindGroupLayout({entries:Z.map((o,m)=>({binding:m,visibility:GPUShaderStage.COMPUTE,buffer:{type:o}}))}),H=t.createPipelineLayout({bindGroupLayouts:[T]}),Q=["conv0","conv_int8","moments","moments_finish","norm_quant8","classify_int8"],A=Object.fromEntries(yield Promise.all(Q.map(o=>L(null,null,function*(){return[o,yield t.createComputePipelineAsync({layout:H,compute:{module:G,entryPoint:o}})]})))),W=(o,m,f)=>{const $=e(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),b=(-o&3)*8>>>0,B=(o&3)*8>>>0,r=new Uint32Array([o|0,m>>>0,f>>>0,b,B,0,0,0]);return t.queue.writeBuffer($,0,r),t.createBindGroup({layout:T,entries:[{binding:0,resource:{buffer:u}},{binding:1,resource:{buffer:g}},{binding:2,resource:{buffer:S}},{binding:3,resource:{buffer:z}},{binding:4,resource:{buffer:F}},{binding:5,resource:{buffer:q}},{binding:6,resource:{buffer:M}},{binding:7,resource:{buffer:$}}]})},N=[];for(let o=0;o<13;o++){const m=o===0?0:_.w0Vec4s+(o-1)*_.hiddenVec4PerLayer;N.push(W(D[o],m,o*48))}const J=W(1,_.clsVec4Off,_.clsBiasOff);return function(m){return L(this,null,function*(){if(m.length!==v)throw new Error(`dkatlas24_int8 expected ${v} voxels, got ${m.length}`);t.queue.writeBuffer(u,0,Y(m));const f=t.createCommandEncoder();for(let b=0;b<13;b++){const B=N[b];if(b===0){const r=f.beginComputePass();r.setBindGroup(0,B),r.setPipeline(A.conv0),r.dispatchWorkgroups(1,d,d),r.end()}else{const r=f.beginComputePass();r.setBindGroup(0,B),r.setPipeline(A.conv_int8),r.dispatchWorkgroups(1,d/4,d),r.end()}{const r=f.beginComputePass();r.setBindGroup(0,B),r.setPipeline(A.moments),r.dispatchWorkgroups(d,d,24),r.end()}{const r=f.beginComputePass();r.setBindGroup(0,B),r.setPipeline(A.moments_finish),r.dispatchWorkgroups(24,1,1),r.end()}{const r=f.beginComputePass();r.setBindGroup(0,B),r.setPipeline(A.norm_quant8),r.dispatchWorkgroups(d,d,24),r.end()}}{const b=f.beginComputePass();b.setBindGroup(0,J),b.setPipeline(A.classify_int8),b.dispatchWorkgroups(1,d/4,d),b.end(),f.copyBufferToBuffer(M,0,C,0,v*4)}t.queue.submit([f.finish()]),yield C.mapAsync(GPUMapMode.READ);const $=new Float32Array(v);return $.set(new Float32Array(C.getMappedRange())),C.unmap(),[$]})}})}const oe=(t,n)=>L(null,null,function*(){const a=yield fetch(n).then(s=>s.arrayBuffer());return K(t,new Uint8Array(a))}),_e={load:oe,setupNet:K};export{_e as default,K as setupNet};
