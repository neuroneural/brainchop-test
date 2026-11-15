var fs=Object.defineProperty;var Et=Object.getOwnPropertySymbols;var ps=Object.prototype.hasOwnProperty,_s=Object.prototype.propertyIsEnumerable;var Qt=(t,e,s)=>e in t?fs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,It=(t,e)=>{for(var s in e||(e={}))ps.call(e,s)&&Qt(t,s,e[s]);if(Et)for(var s of Et(e))_s.call(e,s)&&Qt(t,s,e[s]);return t};var Ce=(t,e,s)=>new Promise((r,a)=>{var p=f=>{try{n(s.next(f))}catch(w){a(w)}},i=f=>{try{n(s.throw(f))}catch(w){a(w)}},n=f=>f.done?r(f.value):Promise.resolve(f.value).then(p,i);n((s=s.apply(t,e)).next())});import{p as ms,d as gs,b as vs,a as ds,t as Kt}from"./index-BvZRKbX9.js";const ws={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function xt(t,e,s,r,a){var i;const p=Number((i=t[e])!=null?i:s);if(!Number.isFinite(p)||p<r||p>a)throw new Error(`${e} must be between ${r} and ${a}, got ${t[e]}`);return p}function Nt(t,e,s){let r=0;for(const a of t||[]){if(!Number.isInteger(a)||a<0||a>=e||a>=32)throw new Error(`Invalid ${s} tissue label ${a} for ${e} classes`);r=(r|1<<a)>>>0}return r}function bs(t,e){if(!Number.isInteger(e)||e<2||e>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${e}`);const s=It(It({},ws),t.probabilityGroups||{});return{temperature:xt(t,"softmaxTemperature",1,1e-6,1e6),supportTemperature:xt(t,"brainSupportTemperature",1,1e-6,1e6),supportPower:xt(t,"brainSupportPower",1,1e-6,1e6),sigma:xt(t,"partialVolumeSigma",0,0,2),grayMask:Nt(s.grayMatter,e,"gray-matter"),whiteMask:Nt(s.whiteMatter,e,"white-matter"),csfMask:Nt(s.csf,e,"CSF")}}function Ht(t,e,s,r,a,p){const[i,n,f]=s,w=i*n,g=a.length-1>>1;for(let S=0;S<f;S++)for(let l=0;l<n;l++)for(let v=0;v<i;v++){const I=S*w+l*i+v,x=r===1?v:r===i?l:S,K=r===1?i:r===i?n:f;let q=0;for(let u=-g;u<=g;u++){const M=x+u;M<0||M>=K||(q+=a[u+g]*t[I+u*r])}e[I]=q/p}}function $s(t,e,s,r){const[a,p,i]=s,n=a*p*i;if(!Array.isArray(t)||t.length!==3||t.some(v=>v.length!==n)||e.length!==n)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=xt(r,"partialVolumeSigma",0,0,2),w=xt(r,"brainSupportPower",1,1e-6,1e6);let g=null,S=null,l=1;if(f>0){const v=Math.max(1,Math.round(3*f));S=new Float32Array(v*2+1),l=0;for(let I=-v;I<=v;I++){const x=Math.exp(-.5*I*I/(f*f));S[I+v]=x,l+=x}g=new Float32Array(n)}for(const v of t){let I=v;S&&(Ht(v,g,s,1,S,l),Ht(g,v,s,a,S,l),Ht(v,g,s,a*p,S,l),I=g);for(let x=0;x<n;x++){const K=Math.pow(Math.max(0,Math.min(1,e[x])),w);v[x]=Math.max(0,Math.min(1,I[x]*K))}}return t}const o=256,Me=64,Je=8,Be=Me+2*Je,dt=Be*4,me=o*64,qt=o*o*2,Rt=9216,rs=Rt*8,ys=[1,3,5,7,13,19,31,19,13,7,5,3,1],Ne=(t,e)=>Array.from({length:t},(s,r)=>e(r)).join(""),ns=new Float32Array(1),xs=new Uint32Array(ns.buffer);function Yt(t){ns[0]=t;const e=xs[0],s=e>>>16&32768,r=e>>>23&255;let a=e&8388607;if(r===255)return s|31744|(a?512:0);let p=r-127+15;return p<=0?p<-10?s:(a=(a|8388608)>>>1-p,s|a+4096>>>13):p>=31?s|31744:s|Math.min(31744,(p<<10)+(a+4096>>>13))}function hs(t){const e=new Uint16Array(t.length);for(let s=0;s<t.length;s++)e[s]=Yt(t[s]);return e}const gt=new Map,zs=12,as=new WeakMap,ks=new WeakMap;function Ps(t){let e=2166136261,s=2654435769;const r=t.byteLength>>>2;if((t.byteOffset&3)===0){const a=new Uint32Array(t.buffer,t.byteOffset,r);for(let p=0;p<a.length;p++){const i=a[p];e=Math.imul(e^i,16777619)>>>0,s=Math.imul(s^(i<<13|i>>>19),2246822507)>>>0}}else for(let a=0;a<r*4;a+=4){const p=t[a]|t[a+1]<<8|t[a+2]<<16|t[a+3]<<24;e=Math.imul(e^p,16777619)>>>0,s=Math.imul(s^(p<<13|p>>>19),2246822507)>>>0}for(let a=r*4;a<t.byteLength;a++)e=Math.imul(e^t[a],16777619)>>>0;return`${t.byteLength}_${e.toString(16)}_${s.toString(16)}`}function Bs(t,e,s,r){const a=r!=null&&r.classifierBias?JSON.stringify(r.classifierBias):"",p=`${Ps(t)}|${s.chan}|${s.cs}|${s.nclass}|${s.norm}|${s.eps}|${a}`;if(gt.has(p)){const n=gt.get(p);return gt.delete(p),gt.set(p,n),n}const i=Cs(e,s);if(gt.size>=zs){const n=gt.keys().next().value;gt.delete(n)}return gt.set(p,i),i}function Vt(t,e){let s=t.get(e);return s||(s=new Map,t.set(e,s)),s}function Dt(t,e,s,r,a){return Ce(this,null,function*(){const p=t.createBindGroupLayout({entries:a.map((n,f)=>typeof n=="string"?{binding:f,visibility:GPUShaderStage.COMPUTE,buffer:{type:n}}:{binding:f,visibility:GPUShaderStage.COMPUTE,buffer:n})}),i=yield t.createComputePipelineAsync({label:e,layout:t.createPipelineLayout({bindGroupLayouts:[p]}),compute:{module:s,entryPoint:r}});return{bgl:p,pipe:i}})}function Jt(t,e){const s=e?`enable f16;
`:"",r=e?"f16":"f32",a=`vec4<${r}>`;return t?`${s}
@group(0) @binding(0) var<storage, read> raw_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${a}>;
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
  let dstX4 = ${Je}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${Be}u + dstX4] =
      ${a}(${r}(sh[r]), ${r}(sh[r + 1u]), ${r}(sh[r + 2u]), ${r}(sh[r + 3u]));
  }
}`:`${s}
@group(0) @binding(0) var<storage, read> raw_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${a}>;
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
  let dstX4 = ${Je}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${Be}u + dstX4] =
      ${a}(${r}(sh[r]), ${r}(sh[r + 1u]), ${r}(sh[r + 2u]), ${r}(sh[r + 3u]));
  }
}`}function Ss(){return`
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
}`}function qs(){return`
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
}`}function Ms(){return`
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
}`}function jt(){return`
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
}`}function bt(t,e,s,r,a){return Ce(this,null,function*(){const p=Vt(ks,t);let i=p.get(e);return i||(i=Ce(null,null,function*(){const n=yield Qe(t,e,s());return Dt(t,e,n,r,a)}).catch(n=>{throw p.delete(e),n}),p.set(e,i)),i})}function es(t,e,s,r,a){e.fill(0);const p=o*o*o;if(!(a&&t[0]===r&&t[p-1]===r))return{hasBgSkip:!1};if(s.fill(0),(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&Number.isInteger(r)&&r>=0&&r<=255){const f=new Uint32Array(t.buffer,t.byteOffset,p>>>2),w=new Uint32Array(s.buffer,s.byteOffset,o*o>>>2),g=(r&255)*16843009>>>0;let S=0;for(let l=0;l<o;l++)for(let v=0;v<16384;v++)w[v]|=f[S++]^g}else{let f=0;const w=o*o;for(let g=0;g<o;g++)for(let S=0;S<w;S++,f++)t[f]!==r&&(s[S]=1)}let n=0;for(let f=0;f<o;f++){const w=f*o;for(let g=0;g<o;g++)s[w+g]!==0&&(e[g*o+f]=1,n++)}return n===0||n>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function os(t,e,s,r,a,p,i){const n=i?`${i.grayMask}_${i.whiteMask}_${i.csfMask}_${i.temperature}_${i.supportTemperature}`:"seg";return`${t}|${e.cs}|${e.chan}|${e.nclass}|${s.clsK4}|${e.dilations.join(",")}|${e.activation}|${e.norm}|${r?1:0}|${a?1:0}|${p?1:0}|${n}`}function As(t,e,s,r,a,p,i,n){return Ce(this,null,function*(){const f=Vt(as,t),w=os("128",e,s,r,a,!0,p);let g=f.get(w);return g||(g=Ce(null,null,function*(){const[S,l,v,I,x,K,...q]=yield Promise.all([Qe(t,"init_act8_128",i.initActWgsl),Qe(t,"conv0_128",i.conv0Wgsl),Qe(t,"prep_128",i.prepWgsl),Qe(t,"flush_128",i.flushWgsl),Qe(t,"norm_128",i.normWgsl),Qe(t,"cls_128",i.clsWgsl),...n.map(_=>Qe(t,`conv_128_d${_}`,i.convWgsls[_]))]),u=(_,z,H,Y)=>Dt(t,_,z,H,Y),M=["storage","storage","storage","storage"],A=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],G=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],d=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],k=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],b=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",i.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],c=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],[P,we,D,ne,V,T,$,le,F]=yield Promise.all([u("init_act8_128",S,"main",M),u("moments_finish_128",v,"moments_finish",G),u("prep_weff_128",v,"prep_weff",G),u("flush_stage_128",I,"main",d),u("norm_quant8_128",x,"main",k),u("norm_halo_fill_128",x,"norm_halo_fill",k),u("classify_v4_128",K,"main",c),Promise.all(i.halfPass0?[u("conv0_128_lo",l,"main_lo",A),u("conv0_128_hi",l,"main_hi",A),u("conv0_128_bg_lo",l,"main_bg_lo",A),u("conv0_128_bg_hi",l,"main_bg_hi",A)]:[u("conv0_128",l,"main",A),u("conv0_128_bg",l,"main_bg",A)]),Promise.all(q.flatMap((_,z)=>{const H=n[z];return i.halfPassConv?[u(`conv_128_d${H}_lo`,_,"main_lo",b),u(`conv_128_d${H}_hi`,_,"main_hi",b),u(`conv_128_d${H}_ext_lo`,_,"main_ext_lo",b),u(`conv_128_d${H}_ext_hi`,_,"main_ext_hi",b),u(`conv_128_d${H}_bg_lo`,_,"main_bg_lo",b),u(`conv_128_d${H}_bg_hi`,_,"main_bg_hi",b)]:[u(`conv_128_d${H}`,_,"main",b),u(`conv_128_d${H}_ext`,_,"main_ext",b),u(`conv_128_d${H}_bg`,_,"main_bg",b)]}))]),h=i.halfPass0?{lo:le[0],hi:le[1],bgLo:le[2],bgHi:le[3]}:{main:le[0],bg:le[1]},U={};return i.halfPassConv?n.forEach((_,z)=>{U[_]={lo:F[z*6],hi:F[z*6+1],extLo:F[z*6+2],extHi:F[z*6+3],bgLo:F[z*6+4],bgHi:F[z*6+5]}}):n.forEach((_,z)=>{U[_]={main:F[z*3],ext:F[z*3+1],bg:F[z*3+2]}}),{pInit:P,pMomFin:we,pPrepW:D,pFlush:ne,pNorm:V,pNormHalo:T,pCls:$,pConv0:h,convPipes:U}}).catch(S=>{throw f.delete(w),S}),f.set(w,g)),g})}function Fs(t,e,s,r,a,p,i,n,f){return Ce(this,null,function*(){const w=Vt(as,t),g=os("std",e,s,r,a,p,i);let S=w.get(g);return S||(S=Ce(null,null,function*(){const[l,v,I,x,K,...q]=yield Promise.all([Qe(t,"init_act8",n.initActWgsl),Qe(t,"conv0",n.conv0Wgsl),Qe(t,"prep",n.prepWgsl),Qe(t,"norm",n.normWgsl),Qe(t,"cls",n.clsWgsl),...f.map(h=>Qe(t,`conv_d${h}`,n.convWgsls[h]))]),u=(h,U,_,z)=>Dt(t,h,U,_,z),M=["storage","storage"],A=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],d=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],k=["read-only-storage","read-only-storage","storage","storage","storage","storage",n.useUniformWeff?"uniform":"read-only-storage","read-only-storage","uniform"],b=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],[c,P,we,D,ne,V,T,$]=yield Promise.all([u("init_act8",l,"main",M),u("moments_finish",I,"moments_finish",G),u("prep_weff",I,"prep_weff",G),u("norm_quant8",x,"main",d),u("norm_halo_fill",x,"norm_halo_fill",d),u("classify_v4",K,"main",b),Promise.all(n.halfPass0?[u("conv0_lo",v,"main_lo",A),u("conv0_hi",v,"main_hi",A),u("conv0_bg_lo",v,"main_bg_lo",A),u("conv0_bg_hi",v,"main_bg_hi",A)]:[u("conv0",v,"main",A),u("conv0_bg",v,"main_bg",A)]),Promise.all(q.flatMap((h,U)=>{const _=f[U];return n.halfPassConv?[u(`conv_d${_}_lo`,h,"main_lo",k),u(`conv_d${_}_hi`,h,"main_hi",k),u(`conv_d${_}_ext_lo`,h,"main_ext_lo",k),u(`conv_d${_}_ext_hi`,h,"main_ext_hi",k)]:[u(`conv_d${_}`,h,"main",k),u(`conv_d${_}_ext`,h,"main_ext",k)]}))]),le=n.halfPass0?{lo:T[0],hi:T[1],bgLo:T[2],bgHi:T[3]}:{main:T[0],bg:T[1]},F={};return n.halfPassConv?f.forEach((h,U)=>{F[h]={lo:$[U*4],hi:$[U*4+1],extLo:$[U*4+2],extHi:$[U*4+3]}}):f.forEach((h,U)=>{F[h]={main:$[U*2],ext:$[U*2+1]}}),{pInit:c,pMomFin:P,pPrepW:we,pNorm:D,pNormHalo:ne,pCls:V,pConv0:le,convPipes:F}}).catch(l=>{throw w.delete(g),l}),w.set(g,S)),S})}function ts(t,e,s,r,a){s.fill(0);const p=a&&t[0]===0&&t[t.length-1]===0;let i=0,n=0;if(!p){if(r)for(let f=0;f<o;f++){const w=f*o*dt;for(let g=0;g<o;g++){let S=w+g*dt+32;for(let l=0;l<o;l++,n++,S++){const v=t[n];e[S]=v===0?0:Yt(v)}}}else for(let f=0;f<o;f++){const w=f*o*dt;for(let g=0;g<o;g++){const S=f*o*o+g*o;e.set(t.subarray(S,S+o),w+g*dt+32)}}return{hasBgSkip:!1}}for(let f=0;f<o;f++){const w=f*o*dt;for(let g=0;g<o;g++){let S=!1,l=w+g*dt+32;for(let v=0;v<o;v++,n++,l++){const I=t[n];I!==0?(e[l]=r?Yt(I):I,S=!0):e[l]=0}S&&(s[f*o+g]=1,i++)}}return i===0||i>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function St(t,e){const s=new Uint8Array(o*o);for(let r=0;r<o;r++){const a=r*o,p=r-e,i=r+e;for(let n=0;n<o;n++){if(!t[a+n])continue;const f=n-e,w=n+e;if(p>=0){const g=p*o;f>=0&&(s[g+f]=1),s[g+n]=1,w<o&&(s[g+w]=1)}if(f>=0&&(s[a+f]=1),s[a+n]=1,w<o&&(s[a+w]=1),i>=0&&i<o){const g=i*o;f>=0&&(s[g+f]=1),s[g+n]=1,w<o&&(s[g+w]=1)}}}return s}function Us(t,e){const s=new Uint8Array(o*o),r=new Uint8Array(o*o),a=new Int32Array(o+1);for(let p=0;p<o;p++){const i=p*o;for(let n=0;n<o;n++)a[n+1]=a[n]+t[i+n];for(let n=0;n<o;n++)a[Math.min(o-1,n+e)+1]-a[Math.max(0,n-e)]>0&&(s[i+n]=1)}for(let p=0;p<o;p++){for(let i=0;i<o;i++)a[i+1]=a[i]+s[i*o+p];for(let i=0;i<o;i++)a[Math.min(o-1,i+e)+1]-a[Math.max(0,i-e)]>0&&(r[i*o+p]=1)}return r}function Zt(t){const e=new Uint8Array(me);for(let s=0;s<o;s++){const r=s*o,a=s*64;for(let p=0;p<64;p++){const i=r+(p<<2);t[i]|t[i+1]|t[i+2]|t[i+3]&&(e[a+p]=1)}}return e}function Wt(t){const e=new Uint8Array(o*o);for(let s=0;s<o;s++){const r=s*o,a=s*64;for(let p=0;p<64;p++)if(t[a+p]){const i=r+(p<<2);e[i]=1,e[i+1]=1,e[i+2]=1,e[i+3]=1}}return e}function Gt(t){let e=0;for(let a=0;a<me;a++)e+=t[a];const s=new Uint32Array(e);let r=0;for(let a=0;a<o;a++){const p=a*64;for(let i=0;i<64;i++)t[p+i]&&(s[r++]=a<<8|i)}return s}function vt(t){let e=0;for(let s=0;s<t.length;s++)e+=t[s];return e}function ss(t){const e=new Uint8Array(me);if(t===1024)for(let s=0;s<32;s++)for(let r=0;r<32;r++){const a=s*8+(s*3+r*5&7),p=r*2+(s+r&1);e[a*64+p]=1}else if(t===512)for(let s=0;s<32;s++)for(let r=0;r<16;r++){const a=s*8+(s*3+r*5&7),p=r*4+(s+r*3&3);e[a*64+p]=1}else for(let s=0;s<16;s++)for(let r=0;r<16;r++){const a=s*16+(s*7+r*3&15),p=r*4+(s+r*3&3);e[a*64+p]=1}return e}function is(t,e,s,r){const a=s.length,p=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!r||!e.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:a},p)};const i=Zt(Us(t,3)),n=vt(i)<15800,f=n?Gt(i):null,w=new Array(a);let g=null;for(let u=0;u<a;u++){const M=s[u],A=St(u===0?t:g,M);if(u>0)for(let d=0;d<o;d++){const k=d<M||d>=o-M,b=d*o;for(let c=0;c<o;c++)(k||c<M||c>=o-M)&&(A[b+c]=1)}g=A;const G=new Uint8Array(me);for(let d=0;d<o;d++){const k=d*o,b=d*64;for(let c=0;c<64;c++){const P=k+(c<<2);A[P]|A[P+1]|A[P+2]|A[P+3]||(G[b+c]=1)}}w[u]=G}const S=new Array(a);S[a-1]=i;for(let u=a-2;u>=0;u--)S[u]=Zt(St(Wt(S[u+1]),s[u+1]));const l=n&&a>=4&&s[a-1]<=2&&s[a-2]<=4&&s[a-3]<=6,v=Math.max(1,a-3),I=new Array(a).fill(null),x=new Array(a).fill(null),K=new Array(a).fill(null);if(l){const M=(me-vt(S[a-1]))/me>=.52?256:512,A=1024,G=ss(M),d=ss(A),k=S[a-1],b=new Uint8Array(me);let c=0;for(let P=0;P<me;P++)G[P]&&!k[P]&&(b[P]=1,c++);if(c>0&&c<=Rt&&vt(k)+c<=15360){I[a-1]=b,x[a-1]=new Uint8Array(me),K[a-1]=G;for(let P=a-2;P>=v;P--){const we=new Uint8Array(me),D=S[P+1],ne=I[P+1];for(let _=0;_<me;_++)we[_]=D[_]|ne[_];const V=Zt(St(Wt(we),s[P+1])),T=new Uint8Array(me),$=S[P];for(let _=0;_<me;_++)V[_]&&!$[_]&&(T[_]=1);const le=P===v?d:G,F=new Uint8Array(me);let h=0,U=0;for(let _=0;_<me;_++)(T[_]||le[_])&&!$[_]&&(F[_]=1,h++,le[_]&&U++);if(U===0||h>Rt||vt($)+h>15360){const _=P+1,z=S[_],H=x[_],Y=new Uint8Array(me);let oe=0;for(let ue=0;ue<me;ue++)(H[ue]||d[ue])&&!z[ue]&&(Y[ue]=1,oe++);oe<=Rt&&vt(z)+oe<=15360&&(I[_]=Y,K[_]=d);break}x[P]=T,I[P]=F,K[P]=le}}}const q=new Array(a);for(let u=0;u<a;u++){const M=vt(w[u]),A=me-M,G=I[u]!==null,d=G?vt(S[u])+vt(I[u]):1/0;if(M>=512&&A<=d){const k=new Uint8Array(me);let b=-1;for(let D=0;D<me;D++)w[u][D]?b<0&&(b=D):k[D]=1;const c=k.slice();c[b]=1;const P={z:b>>>6,yWg:b&63,packed:b>>>6<<8|b&63},we=Gt(k);q[u]={isFull:!1,mode:"rpure",writtenMask:k,computedMask:c,mainStrips:we,extStrips:u===0?null:new Uint32Array([P.packed]),nMomExt:u===0?0:1,normStrips:we,haloRows:null,bgStrip:P,extWeight:M}}else if(G&&d<=15360){const k=S[u],b=I[u],c=x[u],P=K[u],we=Gt(k),D=[],ne=[];for(let F=0;F<o;F++){const h=F*64;for(let U=0;U<64;U++){const _=h+U;if(!b[_])continue;const z=F<<8|U;P[_]?D.push(z):ne.push(z)}}const V=D.length;if(V===0){q[u]=p();continue}const T=new Uint32Array(D.length+ne.length);T.set(D,0),T.set(ne,D.length);const $=new Uint8Array(me),le=new Uint8Array(me);for(let F=0;F<me;F++)$[F]=k[F]|c[F],le[F]=k[F]|b[F];q[u]={isFull:!1,mode:"bwd",writtenMask:$,computedMask:le,mainStrips:we,extStrips:T,nMomExt:V,normStrips:u+1<a?Gt($):null,haloRows:null,bgStrip:null,extWeight:(me-we.length)/V}}else q[u]=p()}for(let u=a-2;u>=0;u--)q[u].mode==="bwd"&&q[u+1].mode!=="bwd"&&(q[u]=p());for(let u=0;u<a-1;u++){const M=q[u];if(M.mode!=="rpure")continue;const A=q[u+1],G=A.isFull?new Uint8Array(o*o).fill(1):St(Wt(A.computedMask),s[u+1]),d=Wt(M.writtenMask),k=[];for(let b=0;b<o;b++){const c=b*o;for(let P=0;P<o;P++)G[c+P]&&!d[c+P]&&k.push(b<<8|P)}k.length>0&&(M.haloRows=new Uint32Array(k))}return{clsSkipped:n,clsStrips:f,layers:q}}function Cs(t,e){const s=e.chan,r=e.cs,a=r/4,p=e.nclass,i=Math.ceil(p/4),{convs:n,affines:f,classifier:w}=t,g=n.length,S=27*a,l=9*r*3*a,v=r*i,I=(S+(g-1)*l+v)*4,x=new Float32Array(I),K=4*r,q=g*K,u=new Float32Array(q+i*4),M=(d,k,b)=>{if(e.norm!=="gn"||k>=s)return 1;const c=n[d],P=b*27,we=k*P;let D=0;for(let ne=0;ne<P;ne++)D+=Math.abs(c.w[we+ne]);return Math.max(D/16,1e-6)};for(let d=0;d<n[0].outC;d++){const k=M(0,d,n[0].inC),b=1/k;for(let c=0;c<27;c++)x[c*r+d]=n[0].w[d*27+c]*b;u[2*r+d]=e.eps/(k*k),n[0].bias&&(u[3*r+d]=n[0].bias[d])}for(let d=n[0].outC;d<r;d++)u[2*r+d]=e.eps;for(let d=1;d<g;d++){const k=n[d],b=(S+(d-1)*l)*4,c=d*K;for(let P=0;P<k.outC;P++){const we=M(d,P,k.inC),D=1/we,ne=P>>>2,V=P&3;for(let T=0;T<9;T++)for(let $=0;$<k.inC;$++)for(let le=0;le<3;le++){const F=T*3+le,h=b+(((T*r+$)*3+le)*a+ne)*4+V;x[h]=k.w[(P*k.inC+$)*27+F]*D}u[c+2*r+P]=e.eps/(we*we),k.bias&&(u[c+3*r+P]=k.bias[P])}for(let P=k.outC;P<r;P++)u[c+2*r+P]=e.eps}for(let d=0;d<g;d++){const k=d*K,b=f[d];for(let c=0;c<s;c++)e.norm==="gn"?(u[k+c]=b!=null&&b.scale?b.scale[c]:1,u[k+r+c]=b!=null&&b.bias?b.bias[c]:0):(u[k+c]=1,u[k+r+c]=0)}const A=S+(g-1)*l,G=A*4;for(let d=0;d<s;d++)for(let k=0;k<p;k++)x[G+d*i*4+k]=w.w[k*w.inC+d];for(let d=0;d<i*4;d++)u[q+d]=d<p?w.bias?w.bias[d]:0:-1e30;return{wF32:x,wF16:hs(x),qmetaF32:u,w0Vec4s:S,hiddenVec4PerLayer:l,clsVec4Off:A,clsBiasOff:q,metaStride:K,clsK4:i}}function ht(t){if(t==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(t==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(t==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${t}'`)}function us(t){return t==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:t==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function ls({chan:t,clsK4:e,nclass:s,V4:r,suf:a,readBiasStmt:p,biasExpr:i,probCfg:n}){const f=`    var acc0 = ${r}(0.0${a});
    var acc1 = ${r}(0.0${a});
    var acc2 = ${r}(0.0${a});
    var acc3 = ${r}(0.0${a});
    for (var c : u32 = 0u; c < ${t}u; c = c + 1u) {
      let wv = w16_4[w_cls + c * ${e}u + k4];
      let f = feat[c];
      acc0 = fma(f, ${r}(wv.x), acc0);
      acc1 = fma(f, ${r}(wv.y), acc1);
      acc2 = fma(f, ${r}(wv.z), acc2);
      acc3 = fma(f, ${r}(wv.w), acc3);
    }
    let k_base = k4 * 4u;
${p}`;if(!n)return`  var best_v = vec4<f32>(-1.0e29);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < ${e}u; k4 = k4 + 1u) {
${f}
${Ne(4,l=>`    let l${l} = vec4<f32>(acc${l}) + vec4<f32>(${i(l)});
    let m${l} = l${l} > best_v;
    best_v = select(best_v, l${l}, m${l});
    best_k = select(best_k, vec4<u32>(k_base + ${l}u), m${l});
`)}  }

  labels8[row_idx * ${Me}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const w=`f32(${(1/Math.max(n.temperature,1e-6)).toExponential(8)})`,g=`f32(${(1/Math.max(n.supportTemperature,1e-6)).toExponential(8)})`,S=n.temperature===n.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${e}u; k4 = k4 + 1u) {
${f}
${Ne(4,l=>`    if (k_base + ${l}u < ${s}u) {
      max_v = max(max_v, vec4<f32>(acc${l}) + vec4<f32>(${i(l)}));
    }
`)}  }

  var denom = vec4<f32>(0.0);
  var sup_denom = vec4<f32>(0.0);
  var bg_w = vec4<f32>(0.0);
  var gm_num = vec4<f32>(0.0);
  var wm_num = vec4<f32>(0.0);
  var csf_num = vec4<f32>(0.0);
  for (var k4 : u32 = 0u; k4 < ${e}u; k4 = k4 + 1u) {
${f}
${Ne(4,l=>`    let k${l} = k_base + ${l}u;
    if (k${l} < ${s}u) {
      let l${l} = vec4<f32>(acc${l}) + vec4<f32>(${i(l)});
      let v${l} = exp(clamp((l${l} - max_v) * ${w}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${l} = ${S?`v${l}`:`exp(clamp((l${l} - max_v) * ${g}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${l};
      sup_denom = sup_denom + s${l};
      if (k${l} == 0u) { bg_w = s${l}; }
      let bit${l} = 1u << k${l};
      if ((${n.grayMask}u & bit${l}) != 0u) { gm_num = gm_num + v${l}; }
      if ((${n.whiteMask}u & bit${l}) != 0u) { wm_num = wm_num + v${l}; }
      if ((${n.csfMask}u & bit${l}) != 0u) { csf_num = csf_num + v${l}; }
    }
`)}  }

  let inv_den = vec4<f32>(1.0) / max(denom, vec4<f32>(1.0e-20));
  let gm = clamp(gm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let wm = clamp(wm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let csf = clamp(csf_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let sup = clamp(vec4<f32>(1.0) - bg_w / max(sup_denom, vec4<f32>(1.0e-20)), vec4<f32>(0.0), vec4<f32>(1.0));
  let vox_base = row_idx * ${o}u + x4 * 4u;
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
  }`}function cs({device:t,hasF16:e,nvox:s,outBufBytes:r,inpBuf:a,act8_0:p,labels8Buf:i,readbackBuf:n,pInit:f,bgInit:w,pCls:g,bgCls:S,clsUbo:l,packed:v,modelEntry:I,probCfg:x,canGpuProb:K,probSlots:q,ownedBuffers:u,mkBuf:M}){let A=!1,G=!1,d=!1;const k=new Uint8Array(o*o);let b=null,c=null,P=null,we=null;const D=(h,U)=>t.createBindGroup({layout:h,entries:U.map((_,z)=>({binding:z,resource:_&&_.buffer?_:{buffer:_}}))});function ne(){return Ce(this,null,function*(){if(b)return b;const h=e?"prep_in_u8_f16":"prep_in_u8_f32",{bgl:U,pipe:_}=yield bt(t,h,()=>Jt(!0,e),"main",["read-only-storage","storage","uniform"]),z=M(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),H=new Float32Array(256),Y=D(U,[{buffer:i,offset:0,size:s},a,z]);return b={pipe:_,ubo:z,lutF32:H,bg:Y},b})}function V(){return Ce(this,null,function*(){if(c)return c;const h=e?"prep_in_f32_f16":"prep_in_f32_f32",{bgl:U,pipe:_}=yield bt(t,h,()=>Jt(!1,e),"main",["read-only-storage","storage","uniform"]),z=M(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),H=new Float32Array(4),Y=r>=s*4?D(U,[{buffer:i,offset:0,size:s*4},a,z]):null,oe=p.size>=s*4?D(U,[{buffer:p,offset:0,size:s*4},a,z]):null;return c={pipe:_,ubo:z,f32Tmp:H,bgLabels:Y,bgAct0:oe},c})}function T(){return Ce(this,null,function*(){if(P)return P;const{bgl:h,pipe:U}=yield bt(t,"transpose_u8_v4",Ss,"main",["read-only-storage","storage"]),_=D(h,[{buffer:i,offset:0,size:s},{buffer:a,offset:0,size:s}]);return P={pipe:U,bg:_},P})}function $(){return Ce(this,null,function*(){if(we)return we;const[h,U,_,z]=yield Promise.all([bt(t,"prob_unpack_two",Ms,"main",["read-only-storage","storage","storage"]),bt(t,"prob_blur_axis",jt,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),bt(t,"prob_blur_z_gate",jt,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),bt(t,"transpose_f32",qs,"main",["read-only-storage","storage"])]),H=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,Y=144,oe=M(Y,H),ue=M(Y,H),ce=M(Y,H),Z=be=>({buffer:be,offset:0,size:r}),ge=D(h.bgl,[Z(q.pass0HoldBuf),Z(q.y0),Z(q.y1)]),ae=D(h.bgl,[Z(i),Z(q.b),Z(q.sup)]),ye=[q.y0,q.y1,q.b].map(be=>({buf:be,bgBlurX:D(U.bgl,[Z(be),Z(i),Z(q.sup),oe]),bgBlurY:D(U.bgl,[Z(i),Z(be),Z(q.sup),ue]),bgBlurZ:D(_.bgl,[Z(be),Z(i),Z(q.sup),ce]),bgTranspose:D(z.bgl,[Z(i),Z(be)])}));return we={pUnpack:h.pipe,pBlurAxis:U.pipe,pBlurZGate:_.pipe,pTransposeF32:z.pipe,bgUnpack0:ge,bgUnpack1:ae,tissues:ye,uboX:oe,uboY:ue,uboZ:ce,uboScratch:new ArrayBuffer(Y),lastBlurKey:null},we})}function le(oe){return Ce(this,arguments,function*({volume:h,ioOpts:U,useCone:_,padInputHost:z,headRowHost:H,hasF16Flag:Y}){var ce;if(U!=null&&U.gpuNativeInput){const Z=(ce=U.normOffset)!=null?ce:0,ge=U.normRange||1,ae=h instanceof Uint8Array||h instanceof Uint8ClampedArray,ye=r>=s*4||p.size>=s*4;if(ae){const W=es(h,H,k,Z,_),m=yield ne();for(let E=0;E<256;E++)m.lutF32[E]=E===Z?0:(E-Z)/ge;return t.queue.writeBuffer(m.ubo,0,m.lutF32),t.queue.writeBuffer(i,0,h,0,s),{info:W,runPrePasses(E,L){(!G||d)&&(E.clearBuffer(a),G=!0,d=!1);const Q=E.beginComputePass();if(Q.setPipeline(m.pipe),Q.setBindGroup(0,m.bg),Q.dispatchWorkgroups(8,o,8),Q.end(),L.push("preprocess"),A){const J=E.beginComputePass();J.setPipeline(f.pipe),J.setBindGroup(0,w),J.dispatchWorkgroups(1,o,o),J.end(),L.push("preprocess"),A=!1}}}}if(ye){const W=es(h,H,k,Z,_),m=yield V(),E=!(r>=s*4),L=E?p:i,Q=E?m.bgAct0:m.bgLabels,J=h instanceof Float32Array?h:Float32Array.from(h);return m.f32Tmp[0]=Z,m.f32Tmp[1]=ge,m.f32Tmp[2]=0,m.f32Tmp[3]=0,t.queue.writeBuffer(m.ubo,0,m.f32Tmp),t.queue.writeBuffer(L,0,J,0,s),{info:W,runPrePasses(j,se){(!G||d)&&(j.clearBuffer(a),G=!0,d=!1);const Se=j.beginComputePass();if(Se.setPipeline(m.pipe),Se.setBindGroup(0,Q),Se.dispatchWorkgroups(8,o,8),Se.end(),se.push("preprocess"),A||E){const $e=j.beginComputePass();$e.setPipeline(f.pipe),$e.setBindGroup(0,w),$e.dispatchWorkgroups(1,o,o),$e.end(),se.push("preprocess"),A=!1}}}}const be=new Float32Array(s);for(let W=0;W<s;W++){const m=h[W];be[W]=m===Z?0:(m-Z)/ge}const B=Kt(be,[o,o,o],[2,1,0]),y=ts(B,z,H,Y,_);return t.queue.writeBuffer(a,0,z),G=!0,d=!1,{info:y,runPrePasses(W,m){if(A){const E=W.beginComputePass();E.setPipeline(f.pipe),E.setBindGroup(0,w),E.dispatchWorkgroups(1,o,o),E.end(),m.push("preprocess"),A=!1}}}}const ue=ts(h,z,H,Y,_);return t.queue.writeBuffer(a,0,z),G=!0,d=!1,{info:ue,runPrePasses(Z,ge){if(A){const ae=Z.beginComputePass();ae.setPipeline(f.pipe),ae.setBindGroup(0,w),ae.dispatchWorkgroups(1,o,o),ae.end(),ge.push("preprocess"),A=!1}}}})}function F(Y){return Ce(this,arguments,function*({enc:h,schedule:U,passCategories:_,u4Tmp:z,ioOpts:H}){const oe=U.clsSkipped?U.clsStrips.length:o;if(!x){z[0]=v.clsVec4Off,z[1]=v.clsBiasOff,z[2]=U.clsSkipped?0:1,z[3]=0,t.queue.writeBuffer(l,0,z);{const L=h.beginComputePass();L.setPipeline(g.pipe),L.setBindGroup(0,S),oe>0&&L.dispatchWorkgroups(1,U.clsSkipped?1:64,oe),L.end(),_.push("classify")}if(H!=null&&H.gpuNativeOutput){const L=yield T(),Q=h.beginComputePass();Q.setPipeline(L.pipe),Q.setBindGroup(0,L.bg),Q.dispatchWorkgroups(8,o,8),Q.end(),_.push("postprocess"),d=!0,h.copyBufferToBuffer(a,0,n,0,s),t.queue.submit([h.finish()]),yield n.mapAsync(GPUMapMode.READ);const J=new Uint8Array(n.getMappedRange()).slice();return n.unmap(),[J]}h.copyBufferToBuffer(i,0,n,0,r),t.queue.submit([h.finish()]),yield n.mapAsync(GPUMapMode.READ);const m=new Uint8Array(n.getMappedRange()),E=new Float32Array(s);for(let L=0;L<s;L++)E[L]=m[L];return n.unmap(),[E]}if(K){const m=yield $();z[0]=v.clsVec4Off,z[1]=v.clsBiasOff,z[2]=U.clsSkipped?0:1,z[3]=0,t.queue.writeBuffer(l,0,z),z[3]=1,t.queue.writeBuffer(q.clsUbo1,0,z);{const C=h.beginComputePass();C.setPipeline(g.pipe),C.setBindGroup(0,S),oe>0&&C.dispatchWorkgroups(1,U.clsSkipped?1:64,oe),C.end(),_.push("classify")}h.copyBufferToBuffer(i,0,q.pass0HoldBuf,0,r),U.clsSkipped&&h.clearBuffer(i,0,r);{const C=h.beginComputePass();C.setPipeline(g.pipe),C.setBindGroup(0,q.bgCls1),oe>0&&C.dispatchWorkgroups(1,U.clsSkipped?1:64,oe),C.end(),_.push("classify")}A=!0;const E=`${x.sigma}|${x.supportPower}`,L=x.sigma>0,Q=L?Math.max(1,Math.round(3*x.sigma)):0;if(m.lastBlurKey!==E){const C=new Uint32Array(m.uboScratch),ee=new Float32Array(m.uboScratch);ee.fill(0);let fe=1;if(L){fe=0;for(let re=-Q;re<=Q;re++){const xe=Math.exp(-.5*re*re/(x.sigma*x.sigma));ee[4+re+Q]=xe,fe+=xe}}else ee[4]=1;C[1]=Q,ee[2]=fe,C[0]=0,ee[3]=1,t.queue.writeBuffer(m.uboX,0,m.uboScratch),C[0]=1,t.queue.writeBuffer(m.uboY,0,m.uboScratch),C[0]=2,ee[3]=x.supportPower,t.queue.writeBuffer(m.uboZ,0,m.uboScratch),m.lastBlurKey=E}{const C=h.beginComputePass();C.setPipeline(m.pUnpack),C.setBindGroup(0,m.bgUnpack0),C.dispatchWorkgroups(256,256,1),C.end(),_.push("postprocess");const ee=h.beginComputePass();ee.setPipeline(m.pUnpack),ee.setBindGroup(0,m.bgUnpack1),ee.dispatchWorkgroups(256,256,1),ee.end(),_.push("postprocess")}const J=!!(H!=null&&H.gpuNativeOutput);for(let C=0;C<3;C++){const ee=m.tissues[C];if(L){const re=h.beginComputePass();re.setPipeline(m.pBlurAxis),re.setBindGroup(0,ee.bgBlurX),re.dispatchWorkgroups(4,64,o),re.end(),_.push("postprocess");const xe=h.beginComputePass();xe.setPipeline(m.pBlurAxis),xe.setBindGroup(0,ee.bgBlurY),xe.dispatchWorkgroups(4,64,o),xe.end(),_.push("postprocess")}const fe=h.beginComputePass();if(fe.setPipeline(m.pBlurZGate),fe.setBindGroup(0,ee.bgBlurZ),fe.dispatchWorkgroups(4,64,o),fe.end(),_.push("postprocess"),J){const re=h.beginComputePass();re.setPipeline(m.pTransposeF32),re.setBindGroup(0,ee.bgTranspose),re.dispatchWorkgroups(8,o,8),re.end(),_.push("postprocess")}else C<2&&h.copyBufferToBuffer(i,0,ee.buf,0,r)}const j=J?[q.y0,q.y1,q.b]:[q.y0,q.y1,i];h.copyBufferToBuffer(j[0],0,n,0,r),t.queue.submit([h.finish()]),yield n.mapAsync(GPUMapMode.READ);const se=new Float32Array(n.getMappedRange()).slice();n.unmap();const Se=C=>Ce(null,null,function*(){const ee=t.createCommandEncoder();ee.copyBufferToBuffer(C,0,n,0,r),t.queue.submit([ee.finish()]),yield n.mapAsync(GPUMapMode.READ);const fe=new Float32Array(n.getMappedRange()).slice();return n.unmap(),fe}),$e=yield Se(j[1]),O=yield Se(j[2]);return[se,$e,O]}z[0]=v.clsVec4Off,z[1]=v.clsBiasOff,z[2]=U.clsSkipped?0:1,z[3]=0,t.queue.writeBuffer(l,0,z);{const m=h.beginComputePass();m.setPipeline(g.pipe),m.setBindGroup(0,S),oe>0&&m.dispatchWorkgroups(1,U.clsSkipped?1:64,oe),m.end(),_.push("classify"),h.copyBufferToBuffer(i,0,n,0,r)}t.queue.submit([h.finish()]),yield n.mapAsync(GPUMapMode.READ);const ue=1/65535,ce=new Uint16Array(n.getMappedRange()),Z=new Float32Array(s),ge=new Float32Array(s);for(let m=0;m<s;m++)Z[m]=ce[m*2]*ue,ge[m]=ce[m*2+1]*ue;n.unmap(),z[3]=1,t.queue.writeBuffer(l,0,z);const ae=t.createCommandEncoder();U.clsSkipped&&ae.clearBuffer(i,0,r);const ye=ae.beginComputePass();ye.setPipeline(g.pipe),ye.setBindGroup(0,S),oe>0&&ye.dispatchWorkgroups(1,U.clsSkipped?1:64,oe),ye.end(),_.push("classify"),ae.copyBufferToBuffer(i,0,n,0,r),t.queue.submit([ae.finish()]),yield n.mapAsync(GPUMapMode.READ);const be=new Uint16Array(n.getMappedRange()),B=new Float32Array(s),y=new Float32Array(s);for(let m=0;m<s;m++)B[m]=be[m*2]*ue,y[m]=be[m*2+1]*ue;n.unmap();const W=$s([Z,ge,B],y,[o,o,o],I);return H!=null&&H.gpuNativeOutput?W.map(m=>Kt(m,[o,o,o],[2,1,0])):W})}return{prepareInput:le,finishAndReadback:F}}function Ls(t){const{cs:e,chan:s,nclass:r,clsK4:a,dilations:p,activation:i,norm:n,hasF16:f,hasSubgroups32:w,splitHalves:g,probCfg:S}=t,l=e/4,v=g?e/2:e,I=v*Be,x=v*Me,K=9*e*3*l,q=K,u=K+l,M=f&&l%2===0&&u*8<=65536,A=us(i),G=f?`enable f16;
`:"",d=w?`enable subgroups;
`:"",k=f?"f16":"f32",b=f?"h":"f",c=`vec4<${k}>`,P=f?256:255,we=({cStart:z,cEnd:H,hrExpr:Y,yRowExpr:oe,isPermuted:ue,momBinding:ce,alsoWriteMomMain:Z=!1,writeY8Expr:ge="true"})=>{const ae=ue?".xzyw":"",ye=(B,y)=>g&&B>=v?`y8_1[${oe} + ${(B-v)*Me}u] = ${y};`:`y8_0[${oe} + ${B*Me}u] = ${y};`;if(f&&w)return Ne(H-z,B=>{const y=z+B;return`  {
    let f = vec4<f32>(a_${y}${ae});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ge}) {
      ${ye(y,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${ce}[(${Y}) * ${e}u + ${y}u] = mv;
      ${Z?`mom_main[(row_idx * 2u + sg) * ${e}u + ${y}u] = mv;`:""}
    }
  }
`});let be="";for(let B=z;B<H;B+=2){const y=B,W=B+1;be+=`  {
    let f0 = vec4<f32>(a_${y}${ae});
    let f1 = vec4<f32>(a_${W}${ae});
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
        ${ce}[(${Y}) * ${e}u + ${y}u] = mv0;
        ${Z?`mom_main[(row_idx * 2u + sg) * ${e}u + ${y}u] = mv0;`:""}
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
        ${ce}[(${Y}) * ${e}u + ${W}u] = mv1;
        ${Z?`mom_main[(row_idx * 2u + sg) * ${e}u + ${W}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${ge}) {
      ${ye(y,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${ye(W,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return be},D=f&&w?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,ne=`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${Be}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${I}u + lid.x;
  let val = ${A.uZeroWord}u;
  for (var c : u32 = 0u; c < ${v}u; c = c + 1u) {
    let idx = row_base + c * ${Be}u;
    act0[idx] = val;
    ${g?"act1[idx] = val;":""}
  }
}`,V=p[0],T=(()=>{const z=!f&&g,H=(ge,ae)=>{const ye=ge/4,be=ae/4;return Ne(be-ye,B=>{const y=ye+B,W=y*4;return`          {
            let w0 = w16_4[wb + ${y}u];
            let w1 = w16_4[wb + ${l+y}u];
            let w2 = w16_4[wb + ${2*l+y}u];
            a_${W}     = fma(vn, ${c}(w0.x), fma(vc, ${c}(w1.x), fma(vp, ${c}(w2.x), a_${W})));
            a_${W+1} = fma(vn, ${c}(w0.y), fma(vc, ${c}(w1.y), fma(vp, ${c}(w2.y), a_${W+1})));
            a_${W+2} = fma(vn, ${c}(w0.z), fma(vc, ${c}(w1.z), fma(vp, ${c}(w2.z), a_${W+2})));
            a_${W+3} = fma(vn, ${c}(w0.w), fma(vc, ${c}(w1.w), fma(vp, ${c}(w2.w), a_${W+3})));
          }
`})},Y=Math.floor(V/4),oe=V%4;let ue="";oe===0?ue=`
        let vn = inp_4[base - ${Y}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${Y}u];`:Y===0&&oe===1?ue=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${c}(vL.w, vc.xyz);
        let vp = ${c}(vc.yzw, vR.x);`:oe===1?ue=`
        let vL = inp_4[base - ${Y+1}u];
        let vN = inp_4[base - ${Y}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${Y}u];
        let vR = inp_4[base + ${Y+1}u];
        let vn = ${c}(vL.w, vN.xyz);
        let vp = ${c}(vP.yzw, vR.x);`:oe===2?ue=`
        let vL = inp_4[base - ${Y+1}u];
        let vN = ${Y===0?"inp_4[base]":`inp_4[base - ${Y}u]`};
        let vc = ${Y===0?"vN":"inp_4[base]"};
        let vP = ${Y===0?"vN":`inp_4[base + ${Y}u]`};
        let vR = inp_4[base + ${Y+1}u];
        let vn = ${c}(vL.zw, vN.xy);
        let vp = ${c}(vP.zw, vR.xy);`:ue=`
        let vL = inp_4[base - ${Y+1}u];
        let vN = ${Y===0?"inp_4[base]":`inp_4[base - ${Y}u]`};
        let vc = ${Y===0?"vN":"inp_4[base]"};
        let vP = ${Y===0?"vN":`inp_4[base + ${Y}u]`};
        let vR = inp_4[base + ${Y+1}u];
        let vn = ${c}(vL.yzw, vN.x);
        let vp = ${c}(vP.w, vR.xyz);`;const ce=(ge,ae,ye,be)=>{const B=Ne(ye-ae,E=>{const L=ae+E;return n==="none"?`  var a_${L} = ${c}(${k}(qmeta[${3*e+L}u]));
`:`  var a_${L} = ${c}(0.0${b});
`}),y=be?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,W=be?"lid.y * 2u + sg":"row_idx * 2u + sg",m=be?"mom_ext":"mom_main";return`
@compute @workgroup_size(64, 4, 1)
fn ${ge}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${f&&w?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Je}u;
${y}
${B}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${V};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${V};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${Be}u + x_pad;
${ue}
        let wb = tap_yz * ${3*l}u;
${H(ae,ye)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${x}u + lid.x;
${we({cStart:ae,cEnd:ye,hrExpr:W,yRowExpr:"y_row_base",isPermuted:!1,momBinding:m})}}`},Z=z?ce("main_lo",0,v,!1)+ce("main_hi",v,e,!1)+ce("main_bg_lo",0,v,!0)+ce("main_bg_hi",v,e,!0):ce("main",0,e,!1)+ce("main_bg",0,e,!0);return`${G}${d}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${c}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${c}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${D}${Z}`})(),$=`${G}
${ht(i)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${c}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${c}>;
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
    for (var hr : u32 = lid; hr < ${qt}u; hr = hr + 256u) {
      let v = mom_main[hr * ${e}u + c];
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
        let v = mom_main[(base_hr + h) * ${e}u + c];
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
        let v = mom_ext[e * ${e}u + c];
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
    let beta  = qmeta[mbase + ${e}u + c];
    let eps_base = qmeta[mbase + ${2*e}u + c];
    let q_prev = select(mom_stats[${e*2}u].x, 1.0, pp.is_first != 0u);
    let eff_eps = eps_base / (q_prev * q_prev);
    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = ${n==="gn"?"total_s / 16777216.0":"0.0"};
    let varr = ${n==="gn"?"max(total_q / 16777216.0 - mean * mean, 0.0)":"1.0"};
    let inv_std = ${n==="gn"?"inverseSqrt(varr + eff_eps)":"1.0"};
    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${i==="gelu_tanh"?`
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${s}u);
    `:i==="relu"?`
    let qs = select(max(vmax / 255.0, 1e-6), 1.0, c >= ${s}u);
    `:`
    let qs = select(max(vmax / 223.0, 1.0 / 32.0), 1.0, c >= ${s}u);
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
  for (var ic : u32 = 0u; ic < ${s}u; ic = ic + 1u) {
    let qs = mom_stats[ic * 2u].z;
    q_ref = max(q_ref, ${P.toFixed(1)} * qs);
  }
  ${n==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${e*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${P.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${K}u; idx = idx + 256u) {
    let ic = (idx / ${3*l}u) % ${e}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${k}(qs * scale_num);
  }
  if (lid < ${l}u) {
    ${n==="none"?`
    let mb = pp.next_meta_off + ${3*e}u + lid * 4u;
    w_eff[${q}u + lid] = ${c}(${k}(qmeta[mb]), ${k}(qmeta[mb + 1u]), ${k}(qmeta[mb + 2u]), ${k}(qmeta[mb + 3u]));
    `:`
    w_eff[${q}u + lid] = ${c}(0.0${b});
    `}
  }
}`,le=`${ht(i)}
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
  let x_pad = x4 + ${Je}u;
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
  let y_base = row_idx * ${x}u + x4;
  let a_base = row_idx * ${I}u + x_pad;
  let mom_base = hr * ${e}u;

  for (var c : u32 = 0u; c < ${v}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${Me}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${Be}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${A.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${g?`
  for (var c : u32 = 0u; c < ${v}u; c = c + 1u) {
    let cg = ${v}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${Me}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${Be}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${A.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Je}u;
  let y_base = np.bg_row * ${x}u + x4;
  let mom_base = sg * ${e}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${I}u + x_pad;

  for (var c : u32 = 0u; c < ${v}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${Me}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${Be}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${A.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${g?`
  for (var c : u32 = 0u; c < ${v}u; c = c + 1u) {
    let cg = ${v}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${Me}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${Be}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${A.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,F=z=>{const H=Math.floor(z/4),oe=z%4*8,ue=!f&&g,ce=(B,y)=>f?`
          let ${B} = vec4<f16>(vec2<f16>(unpack2x16float(((${y} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${y} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${A.sterbenzSub});`:`
          let ${B} = unpack4x8unorm(${y}) - vec4<f32>(${A.uZeroFloat});`,Z=B=>{if(oe===0)return`
          let u_neg = ${B}[base - ${H}u];
          let uC    = ${B}[base];
          let u_pos = ${B}[base + ${H}u];`+ce("vn","u_neg")+ce("vc","uC")+ce("vp","u_pos");const y=32-oe;return H===0?`
          let uL = ${B}[base - 1u];
          let uC = ${B}[base];
          let uR = ${B}[base + 1u];
          let u_neg = (uL >> ${y}u) | (uC << ${oe}u);
          let u_pos = (uC >> ${oe}u) | (uR << ${y}u);`+ce("vn","u_neg")+ce("vc","uC")+ce("vp","u_pos"):`
          let uL = ${B}[base - ${H+1}u];
          let uN = ${B}[base - ${H}u];
          let uC = ${B}[base];
          let uP = ${B}[base + ${H}u];
          let uR = ${B}[base + ${H+1}u];
          let u_neg = (uL >> ${y}u) | (uN << ${oe}u);
          let u_pos = (uP >> ${oe}u) | (uR << ${y}u);`+ce("vn","u_neg")+ce("vc","uC")+ce("vp","u_pos")},ge=(B,y)=>{const W=B/4,m=y/4;if(M){const E=l/2,L=l;let Q="";for(let J=W;J<m;J+=2){const j=J*4,se=J/2;Q+=`          {
            let wp0 = w_eff_u[wbu + ${se}u];
            let wp1 = w_eff_u[wbu + ${E+se}u];
            let wp2 = w_eff_u[wbu + ${L+se}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${j}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${j})));
            a_${j+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${j+1})));
            a_${j+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${j+2})));
            a_${j+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${j+3})));
            a_${j+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${j+4})));
            a_${j+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${j+5})));
            a_${j+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${j+6})));
            a_${j+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${j+7})));
          }
`}return Q}return Ne(m-W,E=>{const L=W+E,Q=L*4;return`          {
            let w0 = w_eff[wb + ${L}u];
            let w1 = w_eff[wb + ${l+L}u];
            let w2 = w_eff[wb + ${2*l+L}u];
            a_${Q}     = fma(vn, ${c}(w0.x), fma(vc, ${c}(w1.x), fma(vp, ${c}(w2.x), a_${Q})));
            a_${Q+1} = fma(vn, ${c}(w0.y), fma(vc, ${c}(w1.y), fma(vp, ${c}(w2.y), a_${Q+1})));
            a_${Q+2} = fma(vn, ${c}(w0.z), fma(vc, ${c}(w1.z), fma(vp, ${c}(w2.z), a_${Q+2})));
            a_${Q+3} = fma(vn, ${c}(w0.w), fma(vc, ${c}(w1.w), fma(vp, ${c}(w2.w), a_${Q+3})));
          }
`})},ae=(B,y,W,m)=>{const E=Ne(W-y,O=>{const C=y+O;if(n==="none"){const ee=C>>>2,fe=["x","y","z","w"][C&3];if(M){const re=q+ee>>>1,xe=q+ee&1;return`  var a_${C} = ${c}(w_eff_u[${re}u][${xe}].${fe});
`}return`  var a_${C} = ${c}(w_eff[${q+ee}u].${fe});
`}return`  var a_${C} = ${c}(0.0${b});
`}),L=m?`
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Q=m?"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",J=m?"mom_ext":"mom_main",j=m?"(cp.write_ext_y8 != 0u)":"true",se=v<=8?`(${v}u + cp.pad0)`:`${v}u`,Se=M?`        let wbu_tap = tap_yz * ${e*3*l/2}u;
        for (var ic : u32 = 0u; ic < ${se}; ic = ic + 1u) {
          let base = row_off + ic * ${Be}u;
${Z("act8_0")}
          let wbu = wbu_tap + ic * ${3*l/2}u;
${ge(y,W)}
        }`:`        let wb_tap = tap_yz * ${e*3*l}u;
        for (var ic : u32 = 0u; ic < ${se}; ic = ic + 1u) {
          let base = row_off + ic * ${Be}u;
${Z("act8_0")}
          let wb = wb_tap + ic * ${3*l}u;
${ge(y,W)}
        }`,$e=M?`        for (var ic : u32 = 0u; ic < ${se}; ic = ic + 1u) {
          let base = row_off + ic * ${Be}u;
${Z("act8_1")}
          let wbu = wbu_tap + (${v}u + ic) * ${3*l/2}u;
${ge(y,W)}
        }`:`        for (var ic : u32 = 0u; ic < ${se}; ic = ic + 1u) {
          let base = row_off + ic * ${Be}u;
${Z("act8_1")}
          let wb = wb_tap + (${v}u + ic) * ${3*l}u;
${ge(y,W)}
        }`;return`
@compute @workgroup_size(64, 4, 1)
fn ${B}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${f&&w?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Je}u;
${L}
${E}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${z};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${z};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${I}u + x_pad;
${Se}
        ${g?$e:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${x}u + x4;
${we({cStart:y,cEnd:W,hrExpr:Q,yRowExpr:"y_row_base",isPermuted:f,momBinding:J,alsoWriteMomMain:m,writeY8Expr:j})}}`},ye=ue?ae("main_lo",0,v,!1)+ae("main_hi",v,e,!1)+ae("main_ext_lo",0,v,!0)+ae("main_ext_hi",v,e,!0):ae("main",0,e,!1)+ae("main_ext",0,e,!0),be=M?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(u/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${c}>;`;return`${G}${d}
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
${be}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${D}${ye}`},h=`${G}
${ht(i)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${c}>;
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
  let y_base = row_idx * ${x}u + x4;
  let mom_base = hr * ${e}u;

  var feat : array<${c}, ${s}>;
  for (var c : u32 = 0u; c < ${s}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${g?`
    let in_hi = c >= ${v}u;
    let c_loc = select(c, c - ${v}u, in_hi);
    let idx4 = y_base + c_loc * ${Me}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${Me}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${c}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${ls({chan:s,clsK4:a,nclass:r,V4:c,suf:b,readBiasStmt:"",biasExpr:z=>`qmeta[m_cls + k_base + ${z}u]`,probCfg:S})}
}`,U=Array.from(new Set(p.slice(1))),_=Object.fromEntries(U.map(z=>[z,F(z)]));return{initActWgsl:ne,conv0Wgsl:T,prepWgsl:$,normWgsl:le,convWgsls:_,clsWgsl:h,totalWEffVec4s:u,useUniformWeff:M,csHalf:v,halfPass0:!f&&g,halfPassConv:!f&&g}}function Qe(t,e,s){return Ce(this,null,function*(){const r=typeof t.pushErrorScope=="function"&&typeof t.popErrorScope=="function";let a,p=Promise.resolve(null);r&&t.pushErrorScope("validation");try{a=t.createShaderModule({label:e,code:s})}finally{r&&(p=t.popErrorScope().catch(g=>g))}const i=a.getCompilationInfo?a.getCompilationInfo():Promise.resolve(null),[n,f]=yield Promise.all([i,p]),w=n?n.messages.filter(g=>g.type==="error"):[];if(w.length)throw new Error(`meshnet_fast_v4 [${e}] WGSL error: `+w.map(g=>`L${g.lineNum}:${g.linePos} ${g.message}`).join(" | "));if(f)throw new Error(`meshnet_fast_v4 [${e}] WGSL error: ${f.message||f}`);return a})}function Ws(t){const{cs:e,chan:s,nclass:r,clsK4:a,dilations:p,activation:i,norm:n,hasF16:f,hasSubgroups32:w,numConvs:g,probCfg:S}=t,l=e/4,v=e/2,I=e/4,x=l*Be,K=16384,q=e*Me,M=e*2+4,A=M+qt*e,G=4*e,d=(g*G+a*4)/4,k=9*e*3*I,b=k,c=k+I,P=f&&I%2===0&&c*8<=65536,we=us(i),D=f?`enable f16;
`:"",ne=w?`enable subgroups;
`:"",V=f?"f16":"f32",T=f?"h":"f",$=`vec4<${V}>`,le=f?256:255,F=f&&w?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,h=({cStart:B,cEnd:y,hrExpr:W,storeMode:m,isPermuted:E,momOffExpr:L,alsoWriteMomMain:Q=!1,writeY8Expr:J="true"})=>{const j=E?".xzyw":"",se=($e,O)=>{if(m==="stage_bg")return`stage[s_bg_base + ${$e*Me}u] = ${O};`;if(m==="stage")return`stage[s_row_base + ${$e*Me}u] = ${O};`;const C=Math.floor($e/l),ee=$e%l;return`if (use_act) { act8_${C}[a_row_base + ${ee*Be}u] = ${O}; } else { stage[s_row_base + ${$e*Me}u] = ${O}; }`};if(f&&w)return Ne(y-B,$e=>{const O=B+$e;return`  {
    let f = vec4<f32>(a_${O}${j});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${J}) {
      ${se(O,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${L} + (${W}) * ${e}u + ${O}u] = mv;
      ${Q?`mom[${M}u + (row_idx * 2u + sg) * ${e}u + ${O}u] = mv;`:""}
    }
  }
`});let Se="";for(let $e=B;$e<y;$e+=2){const O=$e,C=$e+1;Se+=`  {
    let f0 = vec4<f32>(a_${O}${j});
    let f1 = vec4<f32>(a_${C}${j});
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
        mom[${L} + (${W}) * ${e}u + ${O}u] = mv0;
        ${Q?`mom[${M}u + (row_idx * 2u + sg) * ${e}u + ${O}u] = mv0;`:""}
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
        mom[${L} + (${W}) * ${e}u + ${C}u] = mv1;
        ${Q?`mom[${M}u + (row_idx * 2u + sg) * ${e}u + ${C}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${J}) {
      ${se(O,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${se(C,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return Se},U=`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${Be}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${x}u + lid.x;
  let val = ${we.uZeroWord}u;
  for (var c : u32 = 0u; c < ${l}u; c = c + 1u) {
    let idx = row_base + c * ${Be}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,_=p[0],z=!f&&e>=16,H=(()=>{const B=(Q,J)=>{const j=Q/4,se=J/4;return Ne(se-j,Se=>{const $e=j+Se,O=$e*4;return`          {
            let w0 = w16_4[wb + ${$e}u];
            let w1 = w16_4[wb + ${I+$e}u];
            let w2 = w16_4[wb + ${2*I+$e}u];
            a_${O}     = fma(vn, ${$}(w0.x), fma(vc, ${$}(w1.x), fma(vp, ${$}(w2.x), a_${O})));
            a_${O+1} = fma(vn, ${$}(w0.y), fma(vc, ${$}(w1.y), fma(vp, ${$}(w2.y), a_${O+1})));
            a_${O+2} = fma(vn, ${$}(w0.z), fma(vc, ${$}(w1.z), fma(vp, ${$}(w2.z), a_${O+2})));
            a_${O+3} = fma(vn, ${$}(w0.w), fma(vc, ${$}(w1.w), fma(vp, ${$}(w2.w), a_${O+3})));
          }
`})},y=Math.floor(_/4),W=_%4;let m="";W===0?m=`
        let vn = inp_4[base - ${y}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${y}u];`:y===0&&W===1?m=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${$}(vL.w, vc.xyz);
        let vp = ${$}(vc.yzw, vR.x);`:W===1?m=`
        let vL = inp_4[base - ${y+1}u];
        let vN = inp_4[base - ${y}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${y}u];
        let vR = inp_4[base + ${y+1}u];
        let vn = ${$}(vL.w, vN.xyz);
        let vp = ${$}(vP.yzw, vR.x);`:W===2?m=`
        let vL = inp_4[base - ${y+1}u];
        let vN = ${y===0?"inp_4[base]":`inp_4[base - ${y}u]`};
        let vc = ${y===0?"vN":"inp_4[base]"};
        let vP = ${y===0?"vN":`inp_4[base + ${y}u]`};
        let vR = inp_4[base + ${y+1}u];
        let vn = ${$}(vL.zw, vN.xy);
        let vp = ${$}(vP.zw, vR.xy);`:m=`
        let vL = inp_4[base - ${y+1}u];
        let vN = ${y===0?"inp_4[base]":`inp_4[base - ${y}u]`};
        let vc = ${y===0?"vN":"inp_4[base]"};
        let vP = ${y===0?"vN":`inp_4[base + ${y}u]`};
        let vR = inp_4[base + ${y+1}u];
        let vn = ${$}(vL.yzw, vN.x);
        let vp = ${$}(vP.w, vR.xyz);`;const E=(Q,J,j,se)=>{const Se=Ne(j-J,fe=>{const re=J+fe;if(n==="none"){const xe=3*e+re;return`  var a_${re} = ${$}(${V}(qmeta_u[${xe>>>2}u][${xe&3}u]));
`}return`  var a_${re} = ${$}(0.0${T});
`}),$e=se?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,O=se?"lid.y * 2u + sg":"row_idx * 2u + sg",C=se?`${A}u`:`${M}u`,ee=se?`  let s_bg_base = (${K}u + lid.y) * ${q}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${x}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${q}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${Q}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${f&&w?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Je}u;
${$e}
${Se}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${_};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${_};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${Be}u + x_pad;
${m}
        let wb = tap_yz * ${3*I}u;
${B(J,j)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${ee}
${h({cStart:J,cEnd:j,hrExpr:O,storeMode:se?"stage_bg":"conv0_split",isPermuted:!1,momOffExpr:C})}}`},L=z?E("main_lo",0,v,!1)+E("main_hi",v,e,!1)+E("main_bg_lo",0,v,!0)+E("main_bg_hi",v,e,!0):E("main",0,e,!1)+E("main_bg",0,e,!0);return`${D}${ne}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${$}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${$}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${d}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${F}${L}`})(),Y=`${D}
${ht(i)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${$}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${$}>;
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
    for (var hr : u32 = lid; hr < ${qt}u; hr = hr + 256u) {
      let v = mom[${M}u + hr * ${e}u + c];
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
        let v = mom[${M}u + (base_hr + h) * ${e}u + c];
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
        let v = mom[${A}u + e * ${e}u + c];
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
    let beta  = qmeta[mbase + ${e}u + c];
    let eps_base = qmeta[mbase + ${2*e}u + c];
    let q_prev = select(mom[${e*2}u].x, 1.0, pp.is_first != 0u);
    let eff_eps = eps_base / (q_prev * q_prev);
    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = ${n==="gn"?"total_s / 16777216.0":"0.0"};
    let varr = ${n==="gn"?"max(total_q / 16777216.0 - mean * mean, 0.0)":"1.0"};
    let inv_std = ${n==="gn"?"inverseSqrt(varr + eff_eps)":"1.0"};
    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${i==="gelu_tanh"?`
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${s}u);
    `:i==="relu"?`
    let qs = select(max(vmax / 255.0, 1e-6), 1.0, c >= ${s}u);
    `:`
    let qs = select(max(vmax / 223.0, 1.0 / 32.0), 1.0, c >= ${s}u);
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
  for (var ic : u32 = 0u; ic < ${s}u; ic = ic + 1u) {
    let qs = mom[ic * 2u].z;
    q_ref = max(q_ref, ${le.toFixed(1)} * qs);
  }
  ${n==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${e*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${le.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*I}u) % ${e}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${V}(qs * scale_num);
  }
  if (lid < ${I}u) {
    ${n==="none"?`
    let mb = pp.next_meta_off + ${3*e}u + lid * 4u;
    w_eff[${b}u + lid] = ${$}(${V}(qmeta[mb]), ${V}(qmeta[mb + 1u]), ${V}(qmeta[mb + 2u]), ${V}(qmeta[mb + 3u]));
    `:`
    w_eff[${b}u + lid] = ${$}(0.0${T});
    `}
  }
}`,oe=`
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
  let x_pad = x4 + ${Je}u;
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
  let a_base = (z * 256u + y) * ${x}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${q}u + x4;
  for (var c : u32 = 0u; c < ${l}u; c = c + 1u) {
    let a_off = a_base + c * ${Be}u;
    act8_0[a_off] = stage[s_base + c * ${Me}u];
    act8_1[a_off] = stage[s_base + (${l}u + c) * ${Me}u];
    act8_2[a_off] = stage[s_base + (${2*l}u + c) * ${Me}u];
    act8_3[a_off] = stage[s_base + (${3*l}u + c) * ${Me}u];
  }
}`,ue=(B,y)=>{const W=B*l;return`
  for (var cl : u32 = 0u; cl < ${l}u; cl = cl + 1u) {
    let c = ${W}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${y?`stage[s_bg_base + c * ${Me}u]`:`select(stage[s_base + c * ${Me}u], act8_${B}[a_base + cl * ${Be}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${B}[a_base + cl * ${Be}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${we.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},ce=`${ht(i)}
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
  let x_pad = x4 + ${Je}u;
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
  let a_base = row_idx * ${x}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${q}u + x4;
  let mom_base = ${M}u + (row_idx * 2u + sg) * ${e}u;
${Ne(4,B=>ue(B,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Je}u;
  let s_bg_base = ${K}u * ${q}u + x4;
  let mom_base = ${A}u + sg * ${e}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${x}u + x_pad;
${Ne(4,B=>ue(B,!0))}
}`,Z=B=>{const y=Math.floor(B/4),m=B%4*8,E=!f&&e>=16,L=(O,C)=>f?`
          let ${O} = vec4<f16>(vec2<f16>(unpack2x16float(((${C} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${C} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${we.sterbenzSub});`:`
          let ${O} = unpack4x8unorm(${C}) - vec4<f32>(${we.uZeroFloat});`,Q=O=>{if(m===0)return`
          let u_neg = ${O}[base - ${y}u];
          let uC    = ${O}[base];
          let u_pos = ${O}[base + ${y}u];`+L("vn","u_neg")+L("vc","uC")+L("vp","u_pos");const C=32-m;return y===0?`
          let uL = ${O}[base - 1u];
          let uC = ${O}[base];
          let uR = ${O}[base + 1u];
          let u_neg = (uL >> ${C}u) | (uC << ${m}u);
          let u_pos = (uC >> ${m}u) | (uR << ${C}u);`+L("vn","u_neg")+L("vc","uC")+L("vp","u_pos"):`
          let uL = ${O}[base - ${y+1}u];
          let uN = ${O}[base - ${y}u];
          let uC = ${O}[base];
          let uP = ${O}[base + ${y}u];
          let uR = ${O}[base + ${y+1}u];
          let u_neg = (uL >> ${C}u) | (uN << ${m}u);
          let u_pos = (uP >> ${m}u) | (uR << ${C}u);`+L("vn","u_neg")+L("vc","uC")+L("vp","u_pos")},J=(O,C)=>{const ee=O/4,fe=C/4;if(P){const re=I/2,xe=I;let qe="";for(let je=ee;je<fe;je+=2){const Fe=je*4,et=je/2;qe+=`          {
            let wp0 = w_eff_u[wbu + ${et}u];
            let wp1 = w_eff_u[wbu + ${re+et}u];
            let wp2 = w_eff_u[wbu + ${xe+et}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${Fe}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Fe})));
            a_${Fe+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Fe+1})));
            a_${Fe+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Fe+2})));
            a_${Fe+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Fe+3})));
            a_${Fe+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Fe+4})));
            a_${Fe+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Fe+5})));
            a_${Fe+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Fe+6})));
            a_${Fe+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Fe+7})));
          }
`}return qe}return Ne(fe-ee,re=>{const xe=ee+re,qe=xe*4;return`          {
            let w0 = w_eff[wb + ${xe}u];
            let w1 = w_eff[wb + ${I+xe}u];
            let w2 = w_eff[wb + ${2*I+xe}u];
            a_${qe}     = fma(vn, ${$}(w0.x), fma(vc, ${$}(w1.x), fma(vp, ${$}(w2.x), a_${qe})));
            a_${qe+1} = fma(vn, ${$}(w0.y), fma(vc, ${$}(w1.y), fma(vp, ${$}(w2.y), a_${qe+1})));
            a_${qe+2} = fma(vn, ${$}(w0.z), fma(vc, ${$}(w1.z), fma(vp, ${$}(w2.z), a_${qe+2})));
            a_${qe+3} = fma(vn, ${$}(w0.w), fma(vc, ${$}(w1.w), fma(vp, ${$}(w2.w), a_${qe+3})));
          }
`})},j=(O,C,ee)=>{const fe=O*l,re=`(${l}u + cp.pad0)`;return P?`        for (var ic : u32 = 0u; ic < ${re}; ic = ic + 1u) {
          let base = row_off + ic * ${Be}u;
${Q(`act8_${O}`)}
          let wbu = wbu_tap + ${fe?`(${fe}u + ic)`:"ic"} * ${3*I/2}u;
${J(C,ee)}
        }
`:`        for (var ic : u32 = 0u; ic < ${re}; ic = ic + 1u) {
          let base = row_off + ic * ${Be}u;
${Q(`act8_${O}`)}
          let wb = wb_tap + ${fe?`(${fe}u + ic)`:"ic"} * ${3*I}u;
${J(C,ee)}
        }
`},se=(O,C,ee,fe)=>{const re=Ne(ee-C,Ke=>{const st=C+Ke;if(n==="none"){const ct=st>>>2,ft=["x","y","z","w"][st&3];if(P){const yt=b+ct>>>1,pt=b+ct&1;return`  var a_${st} = ${$}(w_eff_u[${yt}u][${pt}].${ft});
`}return`  var a_${st} = ${$}(w_eff[${b+ct}u].${ft});
`}return`  var a_${st} = ${$}(0.0${T});
`});let xe="";fe==="bg"?xe=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:fe==="ext"?xe=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:xe=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const qe=fe==="bg"?"lid.y * 2u + sg":fe==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",je=fe==="main"?`${M}u`:`${A}u`,Fe=fe==="bg"?"stage_bg":"stage",et=fe==="main"?"true":"(cp.write_ext_y8 != 0u)",tt=fe==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${K}u + lid.y) * ${q}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${q}u + x4;`,lt=P?`        let wbu_tap = tap_yz * ${e*3*I/2}u;
`:`        let wb_tap = tap_yz * ${e*3*I}u;
`;return`
@compute @workgroup_size(64, 4, 1)
fn ${O}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${f&&w?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Je}u;
${xe}
${re}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${B};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${B};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${x}u + x_pad;
${lt}${Ne(4,Ke=>j(Ke,C,ee))}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${tt}
${h({cStart:C,cEnd:ee,hrExpr:qe,storeMode:Fe,isPermuted:f,momOffExpr:je,alsoWriteMomMain:fe!=="main",writeY8Expr:et})}}`},Se=E?se("main_lo",0,v,"main")+se("main_hi",v,e,"main")+se("main_ext_lo",0,v,"ext")+se("main_ext_hi",v,e,"ext")+se("main_bg_lo",0,v,"bg")+se("main_bg_hi",v,e,"bg"):se("main",0,e,"main")+se("main_ext",0,e,"ext")+se("main_bg",0,e,"bg"),$e=P?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(c/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${$}>;`;return`${D}${ne}
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
${$e}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${F}${Se}`},ge=B=>{const y=B*l;return`
  for (var cl : u32 = 0u; cl < ${l}u; cl = cl + 1u) {
    let c = ${y}u + cl;
    if (c < ${s}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${Me}u], act8_${B}[a_base + cl * ${Be}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${$}(fv);
    }
  }`},ae=`${D}
${ht(i)}
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
@group(0) @binding(5) var<storage, read> w16_4 : array<${$}>;
@group(0) @binding(6) var<storage, read> mom : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read_write> labels8 : array<u32>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${d}>;
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
  let a_base = row_idx * ${x}u + x4 + ${Je}u;
  let s_base = ((z & 63u) * 256u + y) * ${q}u + x4;
  let mom_base = ${M}u + (row_idx * 2u + sg) * ${e}u;

  var feat : array<${$}, ${s}>;
${Ne(4,B=>ge(B))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${ls({chan:s,clsK4:a,nclass:r,V4:$,suf:T,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:B=>`bv.${["x","y","z","w"][B]}`,probCfg:S})}
}`,ye=Array.from(new Set(p.slice(1))),be=Object.fromEntries(ye.map(B=>[B,Z(B)]));return{initActWgsl:U,conv0Wgsl:H,prepWgsl:Y,flushWgsl:oe,normWgsl:ce,convWgsls:be,clsWgsl:ae,totalWEffVec4s:c,useUniformWeff:P,csQ:l,halfPass0:z,halfPassConv:!f&&e>=16}}function Gs(t,e,s,r,a,p,i){return Ce(this,null,function*(){var He,Ft;const n=o*o*o,f=i?n*4:n,w=e.dilations.length,g=e.cs/4,S=o*o*g*Be*4,v=(64*o+4)*e.cs*Me*4,x=(e.cs*2+4+(qt+rs)*e.cs)*16,K=t.limits||{},q=Math.min((He=K.maxStorageBufferBindingSize)!=null?He:1/0,(Ft=K.maxBufferSize)!=null?Ft:1/0);if(S>q||v>q||x>q||f>q){const pe=Math.ceil(Math.max(S,v,x,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${pe} MiB) exceeds device limit (${q>>>20} MiB)`)}const u=Ws({cs:e.cs,chan:e.chan,nclass:e.nclass,clsK4:s.clsK4,dilations:e.dilations,activation:e.activation,norm:e.norm,hasF16:r,hasSubgroups32:a,numConvs:w,probCfg:i});console.log(`[WebGPU-V4-128M] ${e.chan}ch(cs=${e.cs})/${e.nclass}cls (${w} convs, ${e.activation}, norm=${e.norm}${i?", prob=3":""}) | ${r?"f16+sterbenz":"f32"} | ${a?"subgroups32":"shared-8KiB"} | ZYCX-4Q+64slice | maxBuf=${(Math.max(S,v,x,f)/1048576).toFixed(1)} MiB`);const M=GPUBufferUsage.STORAGE,A=GPUBufferUsage.UNIFORM,G=GPUBufferUsage.COPY_DST,d=GPUBufferUsage.COPY_SRC,k=[],b=(pe,he)=>{const Le=t.createBuffer({size:Math.max(16,Math.ceil(pe/16)*16),usage:he});return k.push(Le),Le},c=o*o*dt,P=c*(r?2:4),we=r?Math.ceil(u.totalWEffVec4s/2)*16:u.totalWEffVec4s*16,D=b(P,M|G|d),ne=b(S,M|G|d),V=b(S,M|G|d),T=b(S,M|G|d),$=b(S,M|G|d),le=b(v,M),F=b(r?s.wF16.byteLength:s.wF32.byteLength,M|G),h=b(s.qmetaF32.byteLength,M|A|G),U=b(x,M),_=b(we,u.useUniformWeff?M|A:M),z=b(f,M|G|d),H=b(f,GPUBufferUsage.MAP_READ|G),Y=!!(i&&S>=f),oe=Y?b(f,M|G|d):null,ue=e.norm==="gn"&&!(p!=null&&p.disableConeSkip),ce=b(me*4,A|G),Z=b(me*4,A|G),ge=Array.from({length:w},()=>b(ue?me*4:16,M|G)),ae=Array.from({length:w-1},()=>b(ue?(me+o*o)*4:16,M|G)),ye=b(16,A|G),be=b(16,A|G),B=Array.from({length:w},()=>b(48,A|G)),y=Array.from({length:w-1},()=>b(16,A|G)),W=Math.max(256,K.minUniformBufferOffsetAlignment||256),m=W>>>2,E=20,L=Math.max(1,(w-1)*E),Q=b(L*W,A|G),J=new Uint32Array(L*m);t.queue.writeBuffer(F,0,r?s.wF16:s.wF32),t.queue.writeBuffer(h,0,s.qmetaF32);const j=Object.keys(u.convWgsls).map(Number),{pInit:se,pMomFin:Se,pPrepW:$e,pFlush:O,pNorm:C,pNormHalo:ee,pCls:fe,pConv0:re,convPipes:xe}=yield As(t,e,s,r,a,i,u,j),qe=(pe,he)=>t.createBindGroup({layout:pe,entries:he.map((Le,rt)=>({binding:rt,resource:Le&&Le.buffer?Le:{buffer:Le}}))}),je=qe(se.bgl,[ne,V,T,$]);{const pe=t.createCommandEncoder(),he=pe.beginComputePass();he.setPipeline(se.pipe),he.setBindGroup(0,je),he.dispatchWorkgroups(1,o,o),he.end(),t.queue.submit([pe.finish()])}const Fe=(u.halfPass0?re.lo:re.main).bgl,et=qe(Fe,[D,ne,V,T,$,le,F,U,h,ce,ye]),tt=qe(fe.bgl,[ne,V,T,$,le,F,U,z,h,Z,be]),lt=Y?b(16,A|G):null,Ke=Y?qe(fe.bgl,[ne,V,T,$,le,F,U,z,h,Z,lt]):null,st=cs({device:t,hasF16:r,nvox:n,outBufBytes:f,inpBuf:D,act8_0:ne,labels8Buf:z,readbackBuf:H,pInit:se,bgInit:je,pCls:fe,bgCls:tt,clsUbo:be,packed:s,modelEntry:p,probCfg:i,canGpuProb:Y,probSlots:Y?{clsUbo1:lt,bgCls1:Ke,pass0HoldBuf:oe,y0:ne,y1:V,b:T,sup:$}:null,ownedBuffers:k,mkBuf:b}),ct=B.map((pe,he)=>qe(Se.bgl,[F,h,U,_,ge[he],pe])),ft=y.map((pe,he)=>qe(C.bgl,[ne,V,T,$,le,U,ae[he],pe])),yt={buffer:Q,offset:0,size:32},pt=Array.from({length:w},(pe,he)=>he===0?null:qe(O.bgl,[ne,V,T,$,le,ge[he],yt])),At=Array.from({length:w},(pe,he)=>{if(he===0)return null;const Le=e.dilations[he],rt=u.halfPassConv?xe[Le].lo:xe[Le].main;return qe(rt.bgl,[ne,V,T,$,le,U,_,ge[he],yt])}),Tt=r?new Uint16Array(c):new Float32Array(c),Pt=new Uint8Array(o*o),nt=new Uint32Array(me),Bt=new Uint32Array(me+o*o),Ye=new Uint32Array(12),Ot=new Float32Array(Ye.buffer),Ee=new Uint32Array(4),wt=(pe,he,Le,rt,_t,at,mt,Ze)=>{const ie=pe*m;J[ie]=he?1:0,J[ie+1]=Le,J[ie+2]=rt,J[ie+3]=_t,J[ie+4]=at?1:0,J[ie+5]=mt,J[ie+6]=Ze,J[ie+7]=0};function ut(pe,he){return Ce(this,null,function*(){if(pe.length!==n)throw new Error(`meshnet_fast_v4 expected ${n} voxels, got ${pe.length}`);const Le=e.norm==="gn"&&!(p!=null&&p.disableConeSkip),rt=yield st.prepareInput({volume:pe,ioOpts:he,useCone:Le,padInputHost:Tt,headRowHost:Pt,hasF16Flag:r}),_t=rt.info,at=is(Pt,_t,e.dilations,Le),mt=new Array(w);for(let X=0;X<w;X++){const ve=at.layers[X],N=ve.isFull?me:ve.mainStrips.length,ot=ve.isFull||!ve.extStrips?0:ve.extStrips.length,Ge=ve.haloRows?ve.haloRows.length:0;if(X===0){!ve.isFull&&N>0&&(nt.set(ve.mainStrips,0),t.queue.writeBuffer(ce,0,nt.subarray(0,N)),t.queue.writeBuffer(ge[0],0,nt.subarray(0,N))),mt[0]={L:ve,nMain:N,nExt:ot,nHalo:Ge};continue}const Re=new Uint32Array(8),Ue=new Uint32Array(8),ke=new Uint32Array(8),R=new Uint32Array(8);if(!ve.isFull){if(N>0){nt.set(ve.mainStrips,0);for(let Oe=0;Oe<N;Oe++)Ue[ve.mainStrips[Oe]>>>13]++;let _e=0;for(let Oe=0;Oe<8;Oe++)Re[Oe]=_e,_e+=Ue[Oe]}if(ve.mode==="bwd"&&ot>0){const _e=Array.from({length:8},()=>[]);for(let ze=0;ze<ot;ze++){const te=ve.extStrips[ze];_e[te>>>13].push((ze&65535)<<16|te)}let Oe=N;for(let ze=0;ze<8;ze++){ke[ze]=Oe;const te=_e[ze];R[ze]=te.length;for(let De=0;De<te.length;De++)nt[Oe++]=te[De]}t.queue.writeBuffer(ge[X],0,nt.subarray(0,N+ot))}else N>0&&t.queue.writeBuffer(ge[X],0,nt.subarray(0,N))}const de=ve.mode==="rpure"&&Ge>0||ve.mode==="bwd"&&X+1<w,We=(X-1)*E,Ve=ve.bgStrip?ve.bgStrip.yWg*4:0,Te=ve.bgStrip?ve.bgStrip.z:0;for(let _e=0;_e<8;_e++)wt(We+_e,ve.isFull,_e*32,Re[_e],ke[_e],de,Ve,Te);for(let _e=0;_e<6;_e++)wt(We+8+_e,ve.isFull,_e*32,Re[_e],0,!1,0,0),wt(We+14+_e,!1,_e*32,ke[_e],0,!1,0,0);mt[X]={L:ve,nMain:N,nExt:ot,nHalo:Ge,mainCount:Ue,extCount:R,layerBaseSlot:We}}w>1&&t.queue.writeBuffer(Q,0,J);const Ze=t.createCommandEncoder(),ie=[];rt.runPrePasses(Ze,ie),at.clsSkipped&&(Ze.clearBuffer(z,0,f),at.clsStrips.length>0&&t.queue.writeBuffer(Z,0,at.clsStrips));for(let X=0;X<w;X++){const ve=mt[X],{L:N,nMain:ot,nHalo:Ge}=ve,Re=N.nMomExt||0,Ue=N.isFull?me:N.normStrips?N.normStrips.length:0;if(X===0){const R=N.isFull?64:1,de=N.isFull?o:ot,We=!!(N.bgStrip&&Ge>0);if(Ee[0]=N.isFull?1:0,Ee[1]=N.bgStrip?N.bgStrip.yWg*4:0,Ee[2]=N.bgStrip?N.bgStrip.z:0,Ee[3]=0,t.queue.writeBuffer(ye,0,Ee),u.halfPass0)for(const[Ve,Te]of[[re.lo,re.bgLo],[re.hi,re.bgHi]]){const _e=Ze.beginComputePass();_e.setBindGroup(0,et),de>0&&(_e.setPipeline(Ve.pipe),_e.dispatchWorkgroups(1,R,de)),We&&(_e.setPipeline(Te.pipe),_e.dispatchWorkgroups(1,1,1)),_e.end(),ie.push("conv0")}else{const Ve=Ze.beginComputePass();Ve.setBindGroup(0,et),de>0&&(Ve.setPipeline(re.main.pipe),Ve.dispatchWorkgroups(1,R,de)),We&&(Ve.setPipeline(re.bg.pipe),Ve.dispatchWorkgroups(1,1,1)),Ve.end(),ie.push("conv0")}}else{const R=e.dilations[X],de=xe[R],We=At[X],Ve=pt[X],{mainCount:Te,extCount:_e,layerBaseSlot:Oe}=ve,ze=N.mode==="rpure"&&!!N.bgStrip;for(let te=0;te<8;te++){if(te>=2){const Ie=te-2,Ct=N.isFull||Te[Ie]>0,Lt=!N.isFull&&N.mode==="bwd"&&_e[Ie]>0;if(Ct||Lt){const Xe=Ze.beginComputePass();Xe.setPipeline(O.pipe),Ct&&(Xe.setBindGroup(0,Ve,[(Oe+8+Ie)*W]),Xe.dispatchWorkgroups(1,N.isFull?64:1,N.isFull?32:Te[Ie])),Lt&&(Xe.setBindGroup(0,Ve,[(Oe+14+Ie)*W]),Xe.dispatchWorkgroups(1,1,_e[Ie])),Xe.end(),ie.push("flushStage")}}const De=N.isFull||Te[te]>0,Pe=!N.isFull&&N.mode==="bwd"&&_e[te]>0,it=te===0&&ze;if(!De&&!Pe&&!it)continue;const Ut=[(Oe+te)*W],Ae=N.isFull?64:1,Xt=N.isFull?32:Te[te];if(u.halfPassConv)for(const[Ie,Ct,Lt]of[[de.lo,de.extLo,de.bgLo],[de.hi,de.extHi,de.bgHi]]){const Xe=Ze.beginComputePass();Xe.setBindGroup(0,We,Ut),De&&(Xe.setPipeline(Ie.pipe),Xe.dispatchWorkgroups(1,Ae,Xt)),Pe&&(Xe.setPipeline(Ct.pipe),Xe.dispatchWorkgroups(1,1,_e[te])),it&&(Xe.setPipeline(Lt.pipe),Xe.dispatchWorkgroups(1,1,1)),Xe.end(),ie.push("convHidden")}else{const Ie=Ze.beginComputePass();Ie.setBindGroup(0,We,Ut),De&&(Ie.setPipeline(de.main.pipe),Ie.dispatchWorkgroups(1,Ae,Xt)),Pe&&(Ie.setPipeline(de.ext.pipe),Ie.dispatchWorkgroups(1,1,_e[te])),it&&(Ie.setPipeline(de.bg.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ie.push("convHidden")}}}const ke=X+1<w?s.w0Vec4s+X*s.hiddenVec4PerLayer:0;Ye[0]=X*s.metaStride,Ye[1]=ke,Ye[2]=(X+1)*s.metaStride,Ye[3]=X+1<w?1:0,Ye[4]=X===0?1:0,Ye[5]=N.isFull?1:0,Ye[6]=ot,Ye[7]=Re*8,Ot[8]=N.extWeight||0,Ye[9]=0,Ye[10]=0,Ye[11]=0,t.queue.writeBuffer(B[X],0,Ye);{const R=Ze.beginComputePass();R.setBindGroup(0,ct[X]),R.setPipeline(Se.pipe),R.dispatchWorkgroups(e.cs,1,1),R.end(),ie.push("momentsPrep")}if(X+1<w){{const de=Ze.beginComputePass();de.setBindGroup(0,ct[X]),de.setPipeline($e.pipe),de.dispatchWorkgroups(1,1,1),de.end(),ie.push("momentsPrep")}const R=N.isFull?0:Ue;if((R>0||Ge>0)&&(R>0&&Bt.set(N.normStrips,0),Ge>0&&Bt.set(N.haloRows,R),t.queue.writeBuffer(ae[X],0,Bt.subarray(0,R+Ge))),Ee[0]=N.isFull?1:0,Ee[1]=N.bgStrip?N.bgStrip.z*o+N.bgStrip.yWg*4:0,Ee[2]=R,Ee[3]=Ge,t.queue.writeBuffer(y[X],0,Ee),N.isFull||Ue>0||Ge>0){const de=Ze.beginComputePass();de.setBindGroup(0,ft[X]),(N.isFull||Ue>0)&&(de.setPipeline(C.pipe),de.dispatchWorkgroups(1,N.isFull?64:1,N.isFull?o:Ue)),Ge>0&&(de.setPipeline(ee.pipe),de.dispatchWorkgroups(1,Math.ceil(Ge/4),1)),de.end(),ie.push("normHalo")}}}return ut.__passCategories=ie,st.finishAndReadback({enc:Ze,schedule:at,passCategories:ie,u4Tmp:Ee,ioOpts:he})})}return ut.dispose=()=>{for(const pe of k)pe.destroy();k.length=0},ut.__passCategories=[],ut.__coneInfo=()=>({paddedVox:c,actMiB:S/1048576,mode:"LowMem128"}),ut})}const zt=!0;function $t(a,p,i){return Ce(this,arguments,function*(t,e,s,r={}){var Le,rt,_t,at,mt,Ze;const n=e instanceof Uint8Array?e:new Uint8Array(e),f=ms(n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),w=gs(f);r!=null&&r.classifierBias&&w.classifier&&(w.classifier.bias=Float32Array.from(r.classifierBias));const g=vs(r),S=(r==null?void 0:r.dilations)||(g==null?void 0:g.dilations)||(w.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:w.convs.length===9?[1,2,4,8,16,8,4,2,1]:ys),l=(r==null?void 0:r.activation)||(g==null?void 0:g.activation)||(w.affines.length||w.convs.length>=13?"gelu_tanh":"relu"),v=w.convs[0].outC,I=v>8?Math.ceil(v/8)*8:Math.ceil(v/4)*4,x=ds(w,{nx:o,ny:o,nz:o,cs:I,activation:l,dilations:S}),K=Bs(n,w,x,r),q=(r==null?void 0:r.outputType)==="probability"?bs(r,x.nclass):null,u=!!((rt=(Le=t.features)==null?void 0:Le.has)!=null&&rt.call(Le,"shader-f16"))&&!(r!=null&&r.disableF16),M=t.__adapterInfo||t.adapterInfo||{},A=!!((at=(_t=t.features)==null?void 0:_t.has)!=null&&at.call(_t,"subgroups"))&&M.subgroupMinSize===32&&M.subgroupMaxSize===32&&!(r!=null&&r.disableSubgroups),G=o*o*o,d=q?G*4:G,k=x.cs>=16,b=k?x.cs/2:x.cs,c=o*o*b*Be*4,P=o*o*b*Me*4,we=t.limits||{},D=Math.min((mt=we.maxStorageBufferBindingSize)!=null?mt:1/0,(Ze=we.maxBufferSize)!=null?Ze:1/0);if((r!=null&&r.forceLowMem128||c>D||d>D)&&x.cs>=8&&x.cs%4===0)return Gs(t,x,K,u,A,r,q);if(c>D||d>D){const ie=Math.max(c,d)>>>20;throw new Error(`meshnet_fast_v4: buffer (${ie} MiB) exceeds device limit (${D>>>20} MiB)`)}const ne=Ls({cs:x.cs,chan:x.chan,nclass:x.nclass,clsK4:K.clsK4,dilations:x.dilations,activation:x.activation,norm:x.norm,hasF16:u,hasSubgroups32:A,splitHalves:k,probCfg:q});console.log(`[WebGPU-V4] ${x.chan}ch(cs=${x.cs})/${x.nclass}cls (${x.dilations.length} convs, ${x.activation}, norm=${x.norm}${q?", prob=3":""}) | ${u?"f16+sterbenz":"f32"} | ${A?"subgroups32":"shared-8KiB"} | ZYCX-pad80 | maxBuf=${(Math.max(c,d)/1048576).toFixed(1)} MiB`);const V=GPUBufferUsage.STORAGE,T=GPUBufferUsage.COPY_DST,$=GPUBufferUsage.COPY_SRC,le=[],F=(ie,X)=>{const ve=t.createBuffer({size:Math.max(16,Math.ceil(ie/16)*16),usage:X});return le.push(ve),ve},h=o*o*dt,U=h*(u?2:4),_=qt*x.cs*16,z=rs*x.cs*16,H=(x.cs*2+4)*16,Y=u?Math.ceil(ne.totalWEffVec4s/2)*16:ne.totalWEffVec4s*16,oe=F(U,V|T|$),ue=F(c,V|T|$),ce=F(k?c:16,V|T|$),Z=F(P,V|T|$),ge=F(k?P:16,V|T|$),ae=F(u?K.wF16.byteLength:K.wF32.byteLength,V|T),ye=F(K.qmetaF32.byteLength,V|T),be=F(_,V),B=F(z,V),y=F(H,V),W=F(Y,ne.useUniformWeff?V|GPUBufferUsage.UNIFORM:V),m=F(d,V|T|$),E=F(d,GPUBufferUsage.MAP_READ|T),L=x.dilations.length,Q=x.norm==="gn"&&!(r!=null&&r.disableConeSkip),J=Array.from({length:L},()=>F(Q?me*4:16,V|T)),j=Array.from({length:L-1},()=>F(Q?(me+o*o)*4:16,V|T)),se=F(Q?me*4:16,V|T),Se=F(16,GPUBufferUsage.UNIFORM|T),$e=F(16,GPUBufferUsage.UNIFORM|T),O=Array.from({length:L},()=>F(48,GPUBufferUsage.UNIFORM|T)),C=Array.from({length:L-1},()=>F(16,GPUBufferUsage.UNIFORM|T)),ee=Array.from({length:L},()=>F(16,GPUBufferUsage.UNIFORM|T));t.queue.writeBuffer(ae,0,u?K.wF16:K.wF32),t.queue.writeBuffer(ye,0,K.qmetaF32);const fe=Object.keys(ne.convWgsls).map(Number),{pInit:re,pMomFin:xe,pPrepW:qe,pNorm:je,pNormHalo:Fe,pCls:et,pConv0:tt,convPipes:lt}=yield Fs(t,x,K,u,A,k,q,ne,fe),Ke=(ie,X)=>t.createBindGroup({layout:ie,entries:X.map((ve,N)=>({binding:N,resource:{buffer:ve}}))}),st=Ke(re.bgl,[ue,ce]);{const ie=t.createCommandEncoder(),X=ie.beginComputePass();X.setPipeline(re.pipe),X.setBindGroup(0,st),X.dispatchWorkgroups(1,o,o),X.end(),t.queue.submit([ie.finish()])}const ct=(ne.halfPass0?tt.lo:tt.main).bgl,ft=Ke(ct,[oe,Z,ge,ae,ye,be,B,J[0],Se]),yt=Ke(et.bgl,[Z,ge,ae,ye,be,y,m,se,$e]),pt=!!(q&&k&&c>=d&&P>=d),At=pt?F(16,GPUBufferUsage.UNIFORM|T):null,Tt=pt?Ke(et.bgl,[Z,ge,ae,ye,be,y,m,se,At]):null,Pt=cs({device:t,hasF16:u,nvox:G,outBufBytes:d,inpBuf:oe,act8_0:ue,labels8Buf:m,readbackBuf:E,pInit:re,bgInit:st,pCls:et,bgCls:yt,clsUbo:$e,packed:K,modelEntry:r,probCfg:q,canGpuProb:pt,probSlots:pt?{clsUbo1:At,bgCls1:Tt,pass0HoldBuf:ue,y0:Z,y1:ge,b:ce,sup:ue}:null,ownedBuffers:le,mkBuf:F}),nt=O.map((ie,X)=>Ke(xe.bgl,[ae,ye,be,B,y,W,J[X],ie])),Bt=C.map((ie,X)=>Ke(je.bgl,[ue,ce,Z,ge,be,B,y,j[X],ie])),Ye=ee.map((ie,X)=>{if(X===0)return null;const ve=x.dilations[X],N=ne.halfPassConv?lt[ve].lo:lt[ve].main;return Ke(N.bgl,[ue,ce,Z,ge,be,B,W,J[X],ie])}),Ot=u?new Uint16Array(h):new Float32Array(h),Ee=new Uint8Array(o*o),wt=new Uint32Array(me),ut=new Uint32Array(me+o*o),He=new Uint32Array(12),Ft=new Float32Array(He.buffer),pe=new Uint32Array(4);function he(ie,X){return Ce(this,null,function*(){if(ie.length!==G)throw new Error(`meshnet_fast_v4 expected ${G} voxels, got ${ie.length}`);const ve=x.norm==="gn"&&!(r!=null&&r.disableConeSkip),N=yield Pt.prepareInput({volume:ie,ioOpts:X,useCone:ve,padInputHost:Ot,headRowHost:Ee,hasF16Flag:u}),ot=N.info,Ge=is(Ee,ot,x.dilations,ve),Re=t.createCommandEncoder(),Ue=[];N.runPrePasses(Re,Ue),Ge.clsSkipped&&(Re.clearBuffer(m,0,d),Ge.clsStrips.length>0&&t.queue.writeBuffer(se,0,Ge.clsStrips));for(let ke=0;ke<L;ke++){const R=Ge.layers[ke],de=R.isFull?me:R.mainStrips.length,We=R.isFull||!R.extStrips?0:R.extStrips.length,Ve=R.nMomExt||0,Te=R.haloRows?R.haloRows.length:0,_e=R.isFull?me:R.normStrips?R.normStrips.length:0;if(!R.isFull&&(de>0||We>0)&&(de>0&&wt.set(R.mainStrips,0),We>0&&wt.set(R.extStrips,de),t.queue.writeBuffer(J[ke],0,wt.subarray(0,de+We))),ke===0){const ze=R.isFull?64:1,te=R.isFull?o:de,De=!!(R.bgStrip&&Te>0);if(pe[0]=R.isFull?1:0,pe[1]=R.bgStrip?R.bgStrip.yWg*4:0,pe[2]=R.bgStrip?R.bgStrip.z:0,pe[3]=0,t.queue.writeBuffer(Se,0,pe),ne.halfPass0){{const Pe=Re.beginComputePass();Pe.setBindGroup(0,ft),te>0&&(Pe.setPipeline(tt.lo.pipe),Pe.dispatchWorkgroups(1,ze,te)),De&&(Pe.setPipeline(tt.bgLo.pipe),Pe.dispatchWorkgroups(1,1,1)),Pe.end(),Ue.push("conv0")}{const Pe=Re.beginComputePass();Pe.setBindGroup(0,ft),te>0&&(Pe.setPipeline(tt.hi.pipe),Pe.dispatchWorkgroups(1,ze,te)),De&&(Pe.setPipeline(tt.bgHi.pipe),Pe.dispatchWorkgroups(1,1,1)),Pe.end(),Ue.push("conv0")}}else{const Pe=Re.beginComputePass();Pe.setBindGroup(0,ft),te>0&&(Pe.setPipeline(tt.main.pipe),Pe.dispatchWorkgroups(1,ze,te)),De&&(Pe.setPipeline(tt.bg.pipe),Pe.dispatchWorkgroups(1,1,1)),Pe.end(),Ue.push("conv0")}}else{const ze=x.dilations[ke],te=lt[ze],De=Ye[ke],Pe=R.isFull?64:1,it=R.isFull?o:de,Ut=R.mode==="rpure"&&Te>0||R.mode==="bwd"&&ke+1<L;if(pe[0]=R.isFull?1:0,pe[1]=de,pe[2]=Ut?1:0,pe[3]=0,t.queue.writeBuffer(ee[ke],0,pe),ne.halfPassConv){{const Ae=Re.beginComputePass();Ae.setBindGroup(0,De),it>0&&(Ae.setPipeline(te.lo.pipe),Ae.dispatchWorkgroups(1,Pe,it)),We>0&&(Ae.setPipeline(te.extLo.pipe),Ae.dispatchWorkgroups(1,1,We)),Ae.end(),Ue.push("convHidden")}{const Ae=Re.beginComputePass();Ae.setBindGroup(0,De),it>0&&(Ae.setPipeline(te.hi.pipe),Ae.dispatchWorkgroups(1,Pe,it)),We>0&&(Ae.setPipeline(te.extHi.pipe),Ae.dispatchWorkgroups(1,1,We)),Ae.end(),Ue.push("convHidden")}}else{const Ae=Re.beginComputePass();Ae.setBindGroup(0,De),it>0&&(Ae.setPipeline(te.main.pipe),Ae.dispatchWorkgroups(1,Pe,it)),We>0&&(Ae.setPipeline(te.ext.pipe),Ae.dispatchWorkgroups(1,1,We)),Ae.end(),Ue.push("convHidden")}}const Oe=ke+1<L?K.w0Vec4s+ke*K.hiddenVec4PerLayer:0;He[0]=ke*K.metaStride,He[1]=Oe,He[2]=(ke+1)*K.metaStride,He[3]=ke+1<L?1:0,He[4]=ke===0?1:0,He[5]=R.isFull?1:0,He[6]=de,He[7]=Ve*8,Ft[8]=R.extWeight||0,He[9]=0,He[10]=0,He[11]=0,t.queue.writeBuffer(O[ke],0,He);{const ze=Re.beginComputePass();ze.setBindGroup(0,nt[ke]),ze.setPipeline(xe.pipe),ze.dispatchWorkgroups(x.cs,1,1),ze.end(),Ue.push("momentsPrep")}if(ke+1<L){{const te=Re.beginComputePass();te.setBindGroup(0,nt[ke]),te.setPipeline(qe.pipe),te.dispatchWorkgroups(1,1,1),te.end(),Ue.push("momentsPrep")}const ze=R.isFull?0:_e;if((ze>0||Te>0)&&(ze>0&&ut.set(R.normStrips,0),Te>0&&ut.set(R.haloRows,ze),t.queue.writeBuffer(j[ke],0,ut.subarray(0,ze+Te))),pe[0]=R.isFull?1:0,pe[1]=R.bgStrip?R.bgStrip.z*o+R.bgStrip.yWg*4:0,pe[2]=ze,pe[3]=Te,t.queue.writeBuffer(C[ke],0,pe),R.isFull||_e>0||Te>0){const te=Re.beginComputePass();te.setBindGroup(0,Bt[ke]),(R.isFull||_e>0)&&(te.setPipeline(je.pipe),te.dispatchWorkgroups(1,R.isFull?64:1,R.isFull?o:_e)),Te>0&&(te.setPipeline(Fe.pipe),te.dispatchWorkgroups(1,Math.ceil(Te/4),1)),te.end(),Ue.push("normHalo")}}}return he.__passCategories=Ue,Pt.finishAndReadback({enc:Re,schedule:Ge,passCategories:Ue,u4Tmp:pe,ioOpts:X})})}return he.dispose=()=>{for(const ie of le)ie.destroy();le.length=0},he.__passCategories=[],he.__coneInfo=()=>({paddedVox:h,actMiB:c/1048576}),he.kernels="v4-int8",he})}const Rs=(t,e)=>Ce(null,null,function*(){const s=yield fetch(e).then(r=>r.arrayBuffer());return $t(t,new Uint8Array(s))}),kt=!0,Mt={load:Rs,setupNet:$t,supportsF32Fallback:zt,supportsGpuNativeIO:kt},Is=Object.freeze(Object.defineProperty({__proto__:null,default:Mt,setupNet:$t,supportsF32Fallback:zt,supportsGpuNativeIO:kt},Symbol.toStringTag,{value:"Module"})),Ns=Object.freeze(Object.defineProperty({__proto__:null,default:Mt,setupNet:$t,supportsF32Fallback:zt,supportsGpuNativeIO:kt},Symbol.toStringTag,{value:"Module"})),Hs=Object.freeze(Object.defineProperty({__proto__:null,default:Mt,setupNet:$t,supportsF32Fallback:zt,supportsGpuNativeIO:kt},Symbol.toStringTag,{value:"Module"})),Zs=Object.freeze(Object.defineProperty({__proto__:null,default:Mt,setupNet:$t,supportsF32Fallback:zt,supportsGpuNativeIO:kt},Symbol.toStringTag,{value:"Module"})),Ys=Object.freeze(Object.defineProperty({__proto__:null,default:Mt,setupNet:$t,supportsF32Fallback:zt,supportsGpuNativeIO:kt},Symbol.toStringTag,{value:"Module"}));export{Hs as a,Zs as b,Ys as c,Ns as d,Is as m};
