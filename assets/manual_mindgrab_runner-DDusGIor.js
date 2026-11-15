var Pa=Object.defineProperty,Sa=Object.defineProperties;var pa=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Ga=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable;var R=(a,f,P)=>f in a?Pa(a,f,{enumerable:!0,configurable:!0,writable:!0,value:P}):a[f]=P,D=(a,f)=>{for(var P in f||(f={}))Ga.call(f,P)&&R(a,P,f[P]);if(A)for(var P of A(f))ca.call(f,P)&&R(a,P,f[P]);return a},W=(a,f)=>Sa(a,pa(f));var w=(a,f,P)=>new Promise((y,i)=>{var t=T=>{try{M(P.next(T))}catch(u){i(u)}},d=T=>{try{M(P.throw(T))}catch(u){i(u)}},M=T=>T.done?y(T.value):Promise.resolve(T.value).then(t,d);M((P=P.apply(a,f)).next())});const o=(a,f)=>a.subarray(...f.data_offsets),ha=a=>{const f=Number(new DataView(a.buffer).getBigUint64(0,!0)),P=JSON.parse(new TextDecoder("utf8").decode(a.subarray(8,8+f)));return Object.fromEntries(Object.entries(P).filter(([y,i])=>y!=="__metadata__").map(([y,i])=>[y,W(D({},i),{data_offsets:i.data_offsets.map(t=>8+f+t)})]))},C=(a,f)=>a.createBuffer({size:f,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),Ta=a=>{const P=a.createBuffer({mappedAtCreation:!0,size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return new Float32Array(P.getMappedRange())[0]=1/0,P.unmap(),P},U=(a,f,P)=>{const y=a.createBuffer({size:f,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0});return new Uint8Array(y.getMappedRange()).set(P),y.unmap(),y},l=(a,f,P,y,i,t,d)=>{const M=a.createBindGroup({layout:y,entries:[{binding:0,resource:{buffer:i}},...t.map((u,k)=>({binding:k+1,resource:{buffer:u}}))]}),T=f.beginComputePass();T.setPipeline(P),T.setBindGroup(0,M),T.dispatchWorkgroups(...d),T.end()},Ca=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
fn is_nan(v:f32) -> bool { return min(v, 1.0) == 1.0 && max(v, -1.0) == -1.0; }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 15 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (gidx0>>2);
  var alu1 = (gidx0&3);
  var alu2 = (gidx1<<16);
  var alu3 = (alu0<<11);
  var alu4 = (alu1<<6);
  var alu5 = (lidx0<<8);
  var alu6 = (lidx1<<2);
  var alu7 = (alu6+alu4);
  var alu8 = (lidx0+(alu0<<3));
  var alu9 = ((alu7<1)!=true);
  var alu10 = ((lidx1+(alu1<<4))<63);
  var acc0 = 0.0f;
  var acc1 = 0.0f;
  var acc2 = 0.0f;
  var acc3 = 0.0f;
  for (var ridx0 = 0; ridx0 < 15; ridx0++) {
    for (var ridx1 = 0; ridx1 < 3; ridx1++) {
      var alu11 = (gidx1+ridx1);
      var alu12 = ((alu11<257)&((alu11<1)!=true));
      var alu13 = (((alu8<1)!=true)&alu12);
      var alu14 = ((alu8<255)&alu12);
      var alu15 = ((gidx2*405)+(ridx0*27)+(ridx1*9));
      var val0 = data2[alu15];
      var val1 = data2[(alu15+1)];
      var val2 = data2[(alu15+2)];
      var val3 = data2[(alu15+3)];
      var val4 = data2[(alu15+4)];
      var val5 = data2[(alu15+5)];
      var val6 = data2[(alu15+6)];
      var val7 = data2[(alu15+7)];
      var val8 = data2[(alu15+8)];
      var alu16 = (alu2+(ridx1<<16)+(ridx0<<24)+alu5+alu3+alu7);
      var val9 = select(0.0f, data1[(alu16+-65793)], (alu9&alu13));
      var val10 = select(0.0f, data1[(alu16+-65792)], alu13);
      var val11 = select(0.0f, data1[(alu16+-65791)], alu13);
      var val12 = select(0.0f, data1[(alu16+-65790)], alu13);
      var val13 = select(0.0f, data1[(alu16+-65789)], alu13);
      var val14 = select(0.0f, data1[(alu16+-65788)], (alu10&alu13));
      var val15 = select(0.0f, data1[(alu16+-65537)], (alu9&alu12));
      var val16 = select(0.0f, data1[(alu16+-65536)], alu12);
      var val17 = select(0.0f, data1[(alu16+-65535)], alu12);
      var val18 = select(0.0f, data1[(alu16+-65534)], alu12);
      var val19 = select(0.0f, data1[(alu16+-65533)], alu12);
      var val20 = select(0.0f, data1[(alu16+-65532)], (alu10&alu12));
      var val21 = select(0.0f, data1[(alu16+-65281)], (alu9&alu14));
      var val22 = select(0.0f, data1[(alu16+-65280)], alu14);
      var val23 = select(0.0f, data1[(alu16+-65279)], alu14);
      var val24 = select(0.0f, data1[(alu16+-65278)], alu14);
      var val25 = select(0.0f, data1[(alu16+-65277)], alu14);
      var val26 = select(0.0f, data1[(alu16+-65276)], (alu10&alu14));
      acc0 = (acc0+(val3*val15)+(val0*val9)+(val6*val21)+(val1*val10)+(val4*val16)+(val7*val22)+(val2*val11)+(val5*val17)+(val8*val23));
      acc1 = (acc1+(val3*val16)+(val0*val10)+(val6*val22)+(val1*val11)+(val4*val17)+(val7*val23)+(val2*val12)+(val5*val18)+(val8*val24));
      acc2 = (acc2+(val3*val17)+(val0*val11)+(val6*val23)+(val1*val12)+(val4*val18)+(val7*val24)+(val2*val13)+(val5*val19)+(val8*val25));
      acc3 = (acc3+(val3*val18)+(val0*val12)+(val6*val24)+(val1*val13)+(val4*val19)+(val7*val25)+(val2*val14)+(val5*val20)+(val8*val26));
    }
  }
  var alu26 = (alu2+(gidx2<<24)+alu3+alu4+alu5+alu6);
  data0[alu26] = acc0;
  data0[(alu26+1)] = acc1;
  data0[(alu26+2)] = acc2;
  data0[(alu26+3)] = acc3;
}`,_=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
fn is_nan(v:f32) -> bool { return min(v, 1.0) == 1.0 && max(v, -1.0) == -1.0; }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 15 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (gidx0&3);
  var alu1 = (gidx1<<16);
  var alu2 = ((gidx0>>2)<<11);
  var alu3 = (alu0<<6);
  var alu4 = (lidx0<<8);
  var alu5 = (lidx1<<2);
  var alu6 = (lidx1+(alu0<<4));
  var alu7 = (alu6<60);
  var alu8 = ((alu6<4)!=true);
  var acc0 = 0.0f;
  var acc1 = 0.0f;
  var acc2 = 0.0f;
  var acc3 = 0.0f;
  for (var ridx0 = 0; ridx0 < 15; ridx0++) {
    for (var ridx1 = 0; ridx1 < 3; ridx1++) {
      var alu9 = (gidx1+(ridx1<<4));
      var alu10 = ((alu9<272)&((alu9<16)!=true));
      var alu11 = (((gidx0<8)!=true)&alu10);
      var alu12 = ((gidx0<120)&alu10);
      var alu13 = (alu7&alu12);
      var alu14 = (alu7&alu10);
      var alu15 = (alu7&alu11);
      var alu16 = (alu8&alu12);
      var alu17 = (alu8&alu10);
      var alu18 = (alu8&alu11);
      var alu19 = ((gidx2*405)+(ridx0*27)+(ridx1*9));
      var val0 = data2[alu19];
      var val1 = data2[(alu19+1)];
      var val2 = data2[(alu19+2)];
      var val3 = data2[(alu19+3)];
      var val4 = data2[(alu19+4)];
      var val5 = data2[(alu19+5)];
      var val6 = data2[(alu19+6)];
      var val7 = data2[(alu19+7)];
      var val8 = data2[(alu19+8)];
      var alu20 = (alu1+(ridx1<<20)+(ridx0<<24)+alu4+alu2+alu5+alu3);
      var val9 = select(0.0f, data1[(alu20+-1052688)], alu18);
      var val10 = select(0.0f, data1[(alu20+-1052687)], alu18);
      var val11 = select(0.0f, data1[(alu20+-1052686)], alu18);
      var val12 = select(0.0f, data1[(alu20+-1052685)], alu18);
      var val13 = select(0.0f, data1[(alu20+-1052672)], alu11);
      var val14 = select(0.0f, data1[(alu20+-1052671)], alu11);
      var val15 = select(0.0f, data1[(alu20+-1052670)], alu11);
      var val16 = select(0.0f, data1[(alu20+-1052669)], alu11);
      var val17 = select(0.0f, data1[(alu20+-1052656)], alu15);
      var val18 = select(0.0f, data1[(alu20+-1052655)], alu15);
      var val19 = select(0.0f, data1[(alu20+-1052654)], alu15);
      var val20 = select(0.0f, data1[(alu20+-1052653)], alu15);
      var val21 = select(0.0f, data1[(alu20+-1048592)], alu17);
      var val22 = select(0.0f, data1[(alu20+-1048591)], alu17);
      var val23 = select(0.0f, data1[(alu20+-1048590)], alu17);
      var val24 = select(0.0f, data1[(alu20+-1048589)], alu17);
      var val25 = select(0.0f, data1[(alu20+-1048576)], alu10);
      var val26 = select(0.0f, data1[(alu20+-1048575)], alu10);
      var val27 = select(0.0f, data1[(alu20+-1048574)], alu10);
      var val28 = select(0.0f, data1[(alu20+-1048573)], alu10);
      var val29 = select(0.0f, data1[(alu20+-1048560)], alu14);
      var val30 = select(0.0f, data1[(alu20+-1048559)], alu14);
      var val31 = select(0.0f, data1[(alu20+-1048558)], alu14);
      var val32 = select(0.0f, data1[(alu20+-1048557)], alu14);
      var val33 = select(0.0f, data1[(alu20+-1044496)], alu16);
      var val34 = select(0.0f, data1[(alu20+-1044495)], alu16);
      var val35 = select(0.0f, data1[(alu20+-1044494)], alu16);
      var val36 = select(0.0f, data1[(alu20+-1044493)], alu16);
      var val37 = select(0.0f, data1[(alu20+-1044480)], alu12);
      var val38 = select(0.0f, data1[(alu20+-1044479)], alu12);
      var val39 = select(0.0f, data1[(alu20+-1044478)], alu12);
      var val40 = select(0.0f, data1[(alu20+-1044477)], alu12);
      var val41 = select(0.0f, data1[(alu20+-1044464)], alu13);
      var val42 = select(0.0f, data1[(alu20+-1044463)], alu13);
      var val43 = select(0.0f, data1[(alu20+-1044462)], alu13);
      var val44 = select(0.0f, data1[(alu20+-1044461)], alu13);
      acc0 = (acc0+(val3*val21)+(val0*val9)+(val6*val33)+(val1*val13)+(val4*val25)+(val7*val37)+(val2*val17)+(val5*val29)+(val8*val41));
      acc1 = (acc1+(val3*val22)+(val0*val10)+(val6*val34)+(val1*val14)+(val4*val26)+(val7*val38)+(val2*val18)+(val5*val30)+(val8*val42));
      acc2 = (acc2+(val3*val23)+(val0*val11)+(val6*val35)+(val1*val15)+(val4*val27)+(val7*val39)+(val2*val19)+(val5*val31)+(val8*val43));
      acc3 = (acc3+(val3*val24)+(val0*val12)+(val6*val36)+(val1*val16)+(val4*val28)+(val7*val40)+(val2*val20)+(val5*val32)+(val8*val44));
    }
  }
  var alu31 = (alu1+(gidx2<<24)+alu2+alu3+alu4+alu5);
  data0[alu31] = acc0;
  data0[(alu31+1)] = acc1;
  data0[(alu31+2)] = acc2;
  data0[(alu31+3)] = acc3;
}`,S=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_983040:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 10240 */
  var lidx0 = i32(lindex.x); /* 32 */
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var ridx1003 = 0; ridx1003 < 64; ridx1003++) {
    var precast0 = ridx1003;
    var precast1 = (bitcast<u32>(precast0)<<2u);
    var alu3 = ((gidx0*24576)+(lidx0*768)+bitcast<i32>(precast1));
    var val0 = data1_251658240[alu3];
    var val1 = data1_251658240[(alu3+1)];
    var val2 = data1_251658240[(alu3+2)];
    var val3 = data1_251658240[(alu3+3)];
    var val4 = data1_251658240[(alu3+256)];
    var val5 = data1_251658240[(alu3+257)];
    var val6 = data1_251658240[(alu3+258)];
    var val7 = data1_251658240[(alu3+259)];
    var val8 = data1_251658240[(alu3+512)];
    var val9 = data1_251658240[(alu3+513)];
    var val10 = data1_251658240[(alu3+514)];
    var val11 = data1_251658240[(alu3+515)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
    acc0[1] = (acc0[1]+val4+val5+val6+val7);
    acc0[2] = (acc0[2]+val8+val9+val10+val11);
  }
  var alu8 = ((gidx0*96)+(lidx0*3));
  data0_983040[alu8] = acc0[0];
  data0_983040[(alu8+1)] = acc0[1];
  data0_983040[(alu8+2)] = acc0[2];
}`,s=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_3840:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_983040:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 40 */
  var lidx0 = i32(lindex.x); /* 32 */
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var ridx1003 = 0; ridx1003 < 64; ridx1003++) {
    var precast0 = ridx1003;
    var precast1 = (bitcast<u32>(precast0)<<2u);
    var alu3 = ((gidx0*24576)+(lidx0*768)+bitcast<i32>(precast1));
    var val0 = data1_983040[alu3];
    var val1 = data1_983040[(alu3+1)];
    var val2 = data1_983040[(alu3+2)];
    var val3 = data1_983040[(alu3+3)];
    var val4 = data1_983040[(alu3+256)];
    var val5 = data1_983040[(alu3+257)];
    var val6 = data1_983040[(alu3+258)];
    var val7 = data1_983040[(alu3+259)];
    var val8 = data1_983040[(alu3+512)];
    var val9 = data1_983040[(alu3+513)];
    var val10 = data1_983040[(alu3+514)];
    var val11 = data1_983040[(alu3+515)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
    acc0[1] = (acc0[1]+val4+val5+val6+val7);
    acc0[2] = (acc0[2]+val8+val9+val10+val11);
  }
  var alu8 = ((gidx0*96)+(lidx0*3));
  data0_3840[alu8] = acc0[0];
  data0_3840[(alu8+1)] = acc0[1];
  data0_3840[(alu8+2)] = acc0[2];
}`,p=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,16>;
@group(0) @binding(1)var<storage,read_write>data0_15:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_3840:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var acc1: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 15 */
  var lidx0 = i32(lindex.x); /* 16 */
  acc1[0] = 0.0f;
  acc0[0] = 0.0f;
  var precast0 = gidx0;
  var precast1 = lidx0;
  var precast2 = (bitcast<u32>(precast0)<<8u);
  var precast3 = (bitcast<u32>(precast1)<<4u);
  for (var ridx3002 = 0; ridx3002 < 16; ridx3002++) {
    var val0 = data1_3840[(bitcast<i32>(precast2)+bitcast<i32>(precast3)+ridx3002)];
    acc0[0] = (acc0[0]+val0);
  }
  temp0[lidx0] = acc0[0];
  workgroupBarrier();
  if (((bool(lidx0))!=true)) {
    for (var ridx1001 = 0; ridx1001 < 16; ridx1001++) {
      var val1 = temp0[ridx1001];
      acc1[0] = (acc1[0]+val1);
    }
    data0_15[gidx0] = (acc1[0]*5.960464477539063e-08f);
  }
}`,G=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_983040:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@compute @workgroup_size(3,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,4>;
  var gidx0 = i32(gindex.x); /* 1024 */
  var gidx1 = i32(gindex.y); /* 5 */
  var lidx0 = i32(lindex.x); /* 3 */
  var lidx1 = i32(lindex.y); /* 16 */
  var precast0 = lidx1;
  var cast0 = bitcast<u32>(precast0);
  var precast1 = lidx0;
  var cast1 = bitcast<u32>(precast1);
  var precast2 = gidx0;
  var cast2 = bitcast<u32>(precast2);
  var val0 = data2_15[(lidx0+(gidx1*3))];
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  var precast3 = (cast2<<14u);
  var precast4 = (cast1<<24u);
  var precast5 = (cast0<<10u);
  for (var ridx1005 = 0; ridx1005 < 64; ridx1005++) {
    var precast6 = ridx1005;
    var precast7 = (bitcast<u32>(precast6)<<2u);
    var alu4 = (bitcast<i32>(precast3)+(gidx1*50331648)+bitcast<i32>(precast4)+bitcast<i32>(precast5)+bitcast<i32>(precast7));
    var val1 = data1_251658240[alu4];
    var val2 = data1_251658240[(alu4+1)];
    var val3 = data1_251658240[(alu4+2)];
    var val4 = data1_251658240[(alu4+3)];
    var val5 = data1_251658240[(alu4+256)];
    var val6 = data1_251658240[(alu4+257)];
    var val7 = data1_251658240[(alu4+258)];
    var val8 = data1_251658240[(alu4+259)];
    var val9 = data1_251658240[(alu4+512)];
    var val10 = data1_251658240[(alu4+513)];
    var val11 = data1_251658240[(alu4+514)];
    var val12 = data1_251658240[(alu4+515)];
    var val13 = data1_251658240[(alu4+768)];
    var val14 = data1_251658240[(alu4+769)];
    var val15 = data1_251658240[(alu4+770)];
    var val16 = data1_251658240[(alu4+771)];
    var alu5 = (val1-val0);
    var alu6 = (val2-val0);
    var alu7 = (val3-val0);
    var alu8 = (val4-val0);
    acc0[0] = (acc0[0]+(alu5*alu5)+(alu6*alu6)+(alu7*alu7)+(alu8*alu8));
    var alu10 = (val5-val0);
    var alu11 = (val6-val0);
    var alu12 = (val7-val0);
    var alu13 = (val8-val0);
    acc0[1] = (acc0[1]+(alu10*alu10)+(alu11*alu11)+(alu12*alu12)+(alu13*alu13));
    var alu15 = (val9-val0);
    var alu16 = (val10-val0);
    var alu17 = (val11-val0);
    var alu18 = (val12-val0);
    acc0[2] = (acc0[2]+(alu15*alu15)+(alu16*alu16)+(alu17*alu17)+(alu18*alu18));
    var alu20 = (val13-val0);
    var alu21 = (val14-val0);
    var alu22 = (val15-val0);
    var alu23 = (val16-val0);
    acc0[3] = (acc0[3]+(alu20*alu20)+(alu21*alu21)+(alu22*alu22)+(alu23*alu23));
  }
  var precast8 = (cast2<<6u);
  var precast9 = (cast1<<16u);
  var precast10 = (cast0<<2u);
  var alu26 = (bitcast<i32>(precast8)+(gidx1*196608)+bitcast<i32>(precast9)+bitcast<i32>(precast10));
  data0_983040[alu26] = acc0[0];
  data0_983040[(alu26+1)] = acc0[1];
  data0_983040[(alu26+2)] = acc0[2];
  data0_983040[(alu26+3)] = acc0[3];
}`,c=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,16>;
@group(0) @binding(1)var<storage,read_write>data0_15:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_3840:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var acc1: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 15 */
  var lidx0 = i32(lindex.x); /* 16 */
  acc1[0] = 0.0f;
  acc0[0] = 0.0f;
  var precast0 = gidx0;
  var precast1 = lidx0;
  var precast2 = (bitcast<u32>(precast0)<<8u);
  var precast3 = (bitcast<u32>(precast1)<<4u);
  for (var ridx3002 = 0; ridx3002 < 16; ridx3002++) {
    var val0 = data1_3840[(bitcast<i32>(precast2)+bitcast<i32>(precast3)+ridx3002)];
    acc0[0] = (acc0[0]+val0);
  }
  temp0[lidx0] = acc0[0];
  workgroupBarrier();
  if (((bool(lidx0))!=true)) {
    for (var ridx1001 = 0; ridx1001 < 16; ridx1001++) {
      var val1 = temp0[ridx1001];
      acc1[0] = (acc1[0]+val1);
    }
    data0_15[gidx0] = (1/sqrt(((acc1[0]*5.960464477539063e-08f)+1e-05f)));
  }
}`,h=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@compute @workgroup_size(3,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 40 */
  var lidx0 = i32(lindex.x); /* 3 */
  var lidx1 = i32(lindex.y); /* 16 */
  var precast0 = gidx0;
  var precast1 = lidx0;
  var precast2 = lidx1;
  var alu0 = (lidx0+(gidx1*3));
  var val0 = data2_15[alu0];
  var val1 = data3_15[alu0];
  var precast3 = (bitcast<u32>(precast0)<<6u);
  var precast4 = (bitcast<u32>(precast1)<<24u);
  var precast5 = (bitcast<u32>(precast2)<<2u);
  var alu1 = (bitcast<i32>(precast3)+(gidx1*50331648)+bitcast<i32>(precast4)+bitcast<i32>(precast5));
  var val2 = data1_251658240[alu1];
  var alu2 = (alu1+1);
  var val3 = data1_251658240[alu2];
  var alu3 = (alu1+2);
  var val4 = data1_251658240[alu3];
  var alu4 = (alu1+3);
  var val5 = data1_251658240[alu4];
  var alu5 = ((val2-val0)*val1);
  data0_251658240[alu1] = ((1/(1.0f+exp2(((alu5+(0.044715f*alu5*alu5*alu5))*-2.302208198144325f))))*alu5);
  var alu7 = ((val3-val0)*val1);
  data0_251658240[alu2] = ((1/(1.0f+exp2(((alu7+(0.044715f*alu7*alu7*alu7))*-2.302208198144325f))))*alu7);
  var alu9 = ((val4-val0)*val1);
  data0_251658240[alu3] = ((1/(1.0f+exp2(((alu9+(0.044715f*alu9*alu9*alu9))*-2.302208198144325f))))*alu9);
  var alu11 = ((val5-val0)*val1);
  data0_251658240[alu4] = ((1/(1.0f+exp2(((alu11+(0.044715f*alu11*alu11*alu11))*-2.302208198144325f))))*alu11);
}`,x=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
fn is_nan(v:f32) -> bool { return min(v, 1.0) == 1.0 && max(v, -1.0) == -1.0; }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 5 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (gidx0&3);
  var alu1 = (gidx1<<16);
  var alu2 = ((gidx0>>2)<<11);
  var alu3 = (alu0<<6);
  var alu4 = (lidx0<<8);
  var alu5 = (lidx1<<2);
  var alu6 = (lidx1+(alu0<<4));
  var alu7 = (alu6<62);
  var alu8 = ((alu6<2)!=true);
  var acc0 = 0.0f;
  var acc1 = 0.0f;
  var acc2 = 0.0f;
  var acc3 = 0.0f;
  for (var ridx0 = 0; ridx0 < 15; ridx0++) {
    for (var ridx1 = 0; ridx1 < 3; ridx1++) {
      var alu9 = (gidx1+(ridx1<<3));
      var alu10 = ((alu9<264)&((alu9<8)!=true));
      var alu11 = (((gidx0<4)!=true)&alu10);
      var alu12 = ((gidx0<124)&alu10);
      var alu13 = (alu7&alu12);
      var alu14 = (alu7&alu10);
      var alu15 = (alu7&alu11);
      var alu16 = (alu8&alu12);
      var alu17 = (alu8&alu10);
      var alu18 = (alu8&alu11);
      var alu19 = ((gidx2*405)+(ridx0*27)+(ridx1*9));
      var val0 = data2[alu19];
      var val1 = data2[(alu19+1)];
      var val2 = data2[(alu19+2)];
      var val3 = data2[(alu19+3)];
      var val4 = data2[(alu19+4)];
      var val5 = data2[(alu19+5)];
      var val6 = data2[(alu19+6)];
      var val7 = data2[(alu19+7)];
      var val8 = data2[(alu19+8)];
      var alu20 = (alu1+(ridx1<<19)+(ridx0<<24)+alu4+alu2+alu5+alu3);
      var val9 = select(0.0f, data1[(alu20+-526344)], alu18);
      var val10 = select(0.0f, data1[(alu20+-526343)], alu18);
      var val11 = select(0.0f, data1[(alu20+-526342)], alu18);
      var val12 = select(0.0f, data1[(alu20+-526341)], alu18);
      var val13 = select(0.0f, data1[(alu20+-526336)], alu11);
      var val14 = select(0.0f, data1[(alu20+-526335)], alu11);
      var val15 = select(0.0f, data1[(alu20+-526334)], alu11);
      var val16 = select(0.0f, data1[(alu20+-526333)], alu11);
      var val17 = select(0.0f, data1[(alu20+-526328)], alu15);
      var val18 = select(0.0f, data1[(alu20+-526327)], alu15);
      var val19 = select(0.0f, data1[(alu20+-526326)], alu15);
      var val20 = select(0.0f, data1[(alu20+-526325)], alu15);
      var val21 = select(0.0f, data1[(alu20+-524296)], alu17);
      var val22 = select(0.0f, data1[(alu20+-524295)], alu17);
      var val23 = select(0.0f, data1[(alu20+-524294)], alu17);
      var val24 = select(0.0f, data1[(alu20+-524293)], alu17);
      var val25 = select(0.0f, data1[(alu20+-524288)], alu10);
      var val26 = select(0.0f, data1[(alu20+-524287)], alu10);
      var val27 = select(0.0f, data1[(alu20+-524286)], alu10);
      var val28 = select(0.0f, data1[(alu20+-524285)], alu10);
      var val29 = select(0.0f, data1[(alu20+-524280)], alu14);
      var val30 = select(0.0f, data1[(alu20+-524279)], alu14);
      var val31 = select(0.0f, data1[(alu20+-524278)], alu14);
      var val32 = select(0.0f, data1[(alu20+-524277)], alu14);
      var val33 = select(0.0f, data1[(alu20+-522248)], alu16);
      var val34 = select(0.0f, data1[(alu20+-522247)], alu16);
      var val35 = select(0.0f, data1[(alu20+-522246)], alu16);
      var val36 = select(0.0f, data1[(alu20+-522245)], alu16);
      var val37 = select(0.0f, data1[(alu20+-522240)], alu12);
      var val38 = select(0.0f, data1[(alu20+-522239)], alu12);
      var val39 = select(0.0f, data1[(alu20+-522238)], alu12);
      var val40 = select(0.0f, data1[(alu20+-522237)], alu12);
      var val41 = select(0.0f, data1[(alu20+-522232)], alu13);
      var val42 = select(0.0f, data1[(alu20+-522231)], alu13);
      var val43 = select(0.0f, data1[(alu20+-522230)], alu13);
      var val44 = select(0.0f, data1[(alu20+-522229)], alu13);
      acc0 = (acc0+(val3*val21)+(val0*val9)+(val6*val33)+(val1*val13)+(val4*val25)+(val7*val37)+(val2*val17)+(val5*val29)+(val8*val41));
      acc1 = (acc1+(val3*val22)+(val0*val10)+(val6*val34)+(val1*val14)+(val4*val26)+(val7*val38)+(val2*val18)+(val5*val30)+(val8*val42));
      acc2 = (acc2+(val3*val23)+(val0*val11)+(val6*val35)+(val1*val15)+(val4*val27)+(val7*val39)+(val2*val19)+(val5*val31)+(val8*val43));
      acc3 = (acc3+(val3*val24)+(val0*val12)+(val6*val36)+(val1*val16)+(val4*val28)+(val7*val40)+(val2*val20)+(val5*val32)+(val8*val44));
    }
  }
  var alu31 = (alu1+(gidx2<<24)+alu2+alu3+alu4+alu5);
  data0[alu31] = acc0;
  data0[(alu31+1)] = acc1;
  data0[(alu31+2)] = acc2;
  data0[(alu31+3)] = acc3;
}`,m=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
fn is_nan(v:f32) -> bool { return min(v, 1.0) == 1.0 && max(v, -1.0) == -1.0; }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 5 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (gidx0>>2);
  var alu1 = (gidx0&3);
  var alu2 = (gidx1<<16);
  var alu3 = (alu0<<11);
  var alu4 = (alu1<<6);
  var alu5 = (lidx0<<8);
  var alu6 = (lidx1<<2);
  var alu7 = (lidx0+(alu0<<3));
  var alu8 = (lidx1+(alu1<<4));
  var alu9 = (alu8<63);
  var alu10 = ((alu8<1)!=true);
  var acc0 = 0.0f;
  var acc1 = 0.0f;
  var acc2 = 0.0f;
  var acc3 = 0.0f;
  for (var ridx0 = 0; ridx0 < 15; ridx0++) {
    for (var ridx1 = 0; ridx1 < 3; ridx1++) {
      var alu11 = (gidx1+(ridx1<<2));
      var alu12 = ((alu11<260)&((alu11<4)!=true));
      var alu13 = (((alu7<4)!=true)&alu12);
      var alu14 = ((alu7<252)&alu12);
      var alu15 = (alu9&alu12);
      var alu16 = (alu9&alu14);
      var alu17 = (alu9&alu13);
      var alu18 = (alu10&alu12);
      var alu19 = (alu10&alu14);
      var alu20 = (alu10&alu13);
      var alu21 = ((gidx2*405)+(ridx0*27)+(ridx1*9));
      var val0 = data2[alu21];
      var val1 = data2[(alu21+1)];
      var val2 = data2[(alu21+2)];
      var val3 = data2[(alu21+3)];
      var val4 = data2[(alu21+4)];
      var val5 = data2[(alu21+5)];
      var val6 = data2[(alu21+6)];
      var val7 = data2[(alu21+7)];
      var val8 = data2[(alu21+8)];
      var alu22 = (alu2+(ridx1<<18)+(ridx0<<24)+alu5+alu3+alu6+alu4);
      var val9 = select(0.0f, data1[(alu22+-263172)], alu20);
      var val10 = select(0.0f, data1[(alu22+-263171)], alu20);
      var val11 = select(0.0f, data1[(alu22+-263170)], alu20);
      var val12 = select(0.0f, data1[(alu22+-263169)], alu20);
      var val13 = select(0.0f, data1[(alu22+-263168)], alu13);
      var val14 = select(0.0f, data1[(alu22+-263167)], alu13);
      var val15 = select(0.0f, data1[(alu22+-263166)], alu13);
      var val16 = select(0.0f, data1[(alu22+-263165)], alu13);
      var val17 = select(0.0f, data1[(alu22+-263164)], alu17);
      var val18 = select(0.0f, data1[(alu22+-263163)], alu17);
      var val19 = select(0.0f, data1[(alu22+-263162)], alu17);
      var val20 = select(0.0f, data1[(alu22+-263161)], alu17);
      var val21 = select(0.0f, data1[(alu22+-262148)], alu18);
      var val22 = select(0.0f, data1[(alu22+-262147)], alu18);
      var val23 = select(0.0f, data1[(alu22+-262146)], alu18);
      var val24 = select(0.0f, data1[(alu22+-262145)], alu18);
      var val25 = select(0.0f, data1[(alu22+-262144)], alu12);
      var val26 = select(0.0f, data1[(alu22+-262143)], alu12);
      var val27 = select(0.0f, data1[(alu22+-262142)], alu12);
      var val28 = select(0.0f, data1[(alu22+-262141)], alu12);
      var val29 = select(0.0f, data1[(alu22+-262140)], alu15);
      var val30 = select(0.0f, data1[(alu22+-262139)], alu15);
      var val31 = select(0.0f, data1[(alu22+-262138)], alu15);
      var val32 = select(0.0f, data1[(alu22+-262137)], alu15);
      var val33 = select(0.0f, data1[(alu22+-261124)], alu19);
      var val34 = select(0.0f, data1[(alu22+-261123)], alu19);
      var val35 = select(0.0f, data1[(alu22+-261122)], alu19);
      var val36 = select(0.0f, data1[(alu22+-261121)], alu19);
      var val37 = select(0.0f, data1[(alu22+-261120)], alu14);
      var val38 = select(0.0f, data1[(alu22+-261119)], alu14);
      var val39 = select(0.0f, data1[(alu22+-261118)], alu14);
      var val40 = select(0.0f, data1[(alu22+-261117)], alu14);
      var val41 = select(0.0f, data1[(alu22+-261116)], alu16);
      var val42 = select(0.0f, data1[(alu22+-261115)], alu16);
      var val43 = select(0.0f, data1[(alu22+-261114)], alu16);
      var val44 = select(0.0f, data1[(alu22+-261113)], alu16);
      acc0 = (acc0+(val3*val21)+(val0*val9)+(val6*val33)+(val1*val13)+(val4*val25)+(val7*val37)+(val2*val17)+(val5*val29)+(val8*val41));
      acc1 = (acc1+(val3*val22)+(val0*val10)+(val6*val34)+(val1*val14)+(val4*val26)+(val7*val38)+(val2*val18)+(val5*val30)+(val8*val42));
      acc2 = (acc2+(val3*val23)+(val0*val11)+(val6*val35)+(val1*val15)+(val4*val27)+(val7*val39)+(val2*val19)+(val5*val31)+(val8*val43));
      acc3 = (acc3+(val3*val24)+(val0*val12)+(val6*val36)+(val1*val16)+(val4*val28)+(val7*val40)+(val2*val20)+(val5*val32)+(val8*val44));
    }
  }
  var alu33 = (alu2+(gidx2<<24)+alu3+alu4+alu5+alu6);
  data0[alu33] = acc0;
  data0[(alu33+1)] = acc1;
  data0[(alu33+2)] = acc2;
  data0[(alu33+3)] = acc3;
}`,B=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
fn is_nan(v:f32) -> bool { return min(v, 1.0) == 1.0 && max(v, -1.0) == -1.0; }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 5 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (gidx0>>2);
  var alu1 = (gidx0&3);
  var alu2 = (gidx1<<16);
  var alu3 = (alu0<<11);
  var alu4 = (alu1<<6);
  var alu5 = (lidx0<<8);
  var alu6 = (lidx1<<2);
  var alu7 = (alu6+alu4);
  var alu8 = (lidx0+(alu0<<3));
  var alu9 = (alu7<251);
  var alu10 = ((alu7<1)!=true);
  var alu11 = ((lidx1+(alu1<<4))<63);
  var alu12 = ((((lidx1<<1)+(alu1<<5))<1)!=true);
  var acc0 = 0.0f;
  var acc1 = 0.0f;
  var acc2 = 0.0f;
  var acc3 = 0.0f;
  for (var ridx0 = 0; ridx0 < 15; ridx0++) {
    for (var ridx1 = 0; ridx1 < 3; ridx1++) {
      var alu13 = (gidx1+(ridx1<<1));
      var alu14 = ((alu13<258)&((alu13<2)!=true));
      var alu15 = (((alu8<2)!=true)&alu14);
      var alu16 = ((alu8<254)&alu14);
      var alu17 = ((gidx2*405)+(ridx0*27)+(ridx1*9));
      var val0 = data2[alu17];
      var val1 = data2[(alu17+1)];
      var val2 = data2[(alu17+2)];
      var val3 = data2[(alu17+3)];
      var val4 = data2[(alu17+4)];
      var val5 = data2[(alu17+5)];
      var val6 = data2[(alu17+6)];
      var val7 = data2[(alu17+7)];
      var val8 = data2[(alu17+8)];
      var alu18 = (alu2+(ridx1<<17)+(ridx0<<24)+alu5+alu3+alu7);
      var val9 = select(0.0f, data1[(alu18+-131586)], (alu12&alu15));
      var val10 = select(0.0f, data1[(alu18+-131585)], (alu10&alu15));
      var val11 = select(0.0f, data1[(alu18+-131584)], alu15);
      var val12 = select(0.0f, data1[(alu18+-131583)], alu15);
      var val13 = select(0.0f, data1[(alu18+-131582)], alu15);
      var val14 = select(0.0f, data1[(alu18+-131581)], alu15);
      var val15 = select(0.0f, data1[(alu18+-131580)], (alu11&alu15));
      var val16 = select(0.0f, data1[(alu18+-131579)], (alu9&alu15));
      var val17 = select(0.0f, data1[(alu18+-131074)], (alu12&alu14));
      var val18 = select(0.0f, data1[(alu18+-131073)], (alu10&alu14));
      var val19 = select(0.0f, data1[(alu18+-131072)], alu14);
      var val20 = select(0.0f, data1[(alu18+-131071)], alu14);
      var val21 = select(0.0f, data1[(alu18+-131070)], alu14);
      var val22 = select(0.0f, data1[(alu18+-131069)], alu14);
      var val23 = select(0.0f, data1[(alu18+-131068)], (alu11&alu14));
      var val24 = select(0.0f, data1[(alu18+-131067)], (alu9&alu14));
      var val25 = select(0.0f, data1[(alu18+-130562)], (alu12&alu16));
      var val26 = select(0.0f, data1[(alu18+-130561)], (alu10&alu16));
      var val27 = select(0.0f, data1[(alu18+-130560)], alu16);
      var val28 = select(0.0f, data1[(alu18+-130559)], alu16);
      var val29 = select(0.0f, data1[(alu18+-130558)], alu16);
      var val30 = select(0.0f, data1[(alu18+-130557)], alu16);
      var val31 = select(0.0f, data1[(alu18+-130556)], (alu11&alu16));
      var val32 = select(0.0f, data1[(alu18+-130555)], (alu9&alu16));
      acc0 = (acc0+(val3*val17)+(val0*val9)+(val6*val25)+(val1*val11)+(val4*val19)+(val7*val27)+(val2*val13)+(val5*val21)+(val8*val29));
      acc1 = (acc1+(val3*val18)+(val0*val10)+(val6*val26)+(val1*val12)+(val4*val20)+(val7*val28)+(val2*val14)+(val5*val22)+(val8*val30));
      acc2 = (acc2+(val3*val19)+(val0*val11)+(val6*val27)+(val1*val13)+(val4*val21)+(val7*val29)+(val2*val15)+(val5*val23)+(val8*val31));
      acc3 = (acc3+(val3*val20)+(val0*val12)+(val6*val28)+(val1*val14)+(val4*val22)+(val7*val30)+(val2*val16)+(val5*val24)+(val8*val32));
    }
  }
  var alu29 = (alu2+(gidx2<<24)+alu3+alu4+alu5+alu6);
  data0[alu29] = acc0;
  data0[(alu29+1)] = acc1;
  data0[(alu29+2)] = acc2;
  data0[(alu29+3)] = acc3;
}`,I=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6075:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 5 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (gidx0&3);
  var precast0 = alu0;
  var cast0 = bitcast<u32>(precast0);
  var alu1 = (gidx0>>2u);
  var precast1 = (cast0<<6u);
  var cast1 = bitcast<i32>(precast1);
  var precast2 = lidx1;
  var precast3 = (bitcast<u32>(precast2)<<2u);
  var cast2 = bitcast<i32>(precast3);
  var precast4 = alu1;
  var precast5 = (bitcast<u32>(precast4)<<11u);
  var cast3 = bitcast<i32>(precast5);
  var precast6 = lidx0;
  var precast7 = (bitcast<u32>(precast6)<<8u);
  var cast4 = bitcast<i32>(precast7);
  var precast8 = gidx1;
  var precast9 = (bitcast<u32>(precast8)<<16u);
  var cast5 = bitcast<i32>(precast9);
  var precast10 = (cast0<<4u);
  var alu2 = (lidx1+bitcast<i32>(precast10));
  var alu3 = (alu2<60);
  var alu4 = (3<alu2);
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  acc0[4] = 0.0f;
  acc0[5] = 0.0f;
  acc0[6] = 0.0f;
  acc0[7] = 0.0f;
  acc0[8] = 0.0f;
  acc0[9] = 0.0f;
  acc0[10] = 0.0f;
  acc0[11] = 0.0f;
  for (var ridx1008 = 0; ridx1008 < 15; ridx1008++) {
    var precast11 = ridx1008;
    var precast12 = (bitcast<u32>(precast11)<<24u);
    for (var ridx1009 = 0; ridx1009 < 3; ridx1009++) {
      var precast13 = ridx1009;
      var cast6 = bitcast<u32>(precast13);
      var precast14 = (cast6<<4u);
      var alu17 = (gidx1+bitcast<i32>(precast14));
      var alu18 = ((15<alu17)&(alu17<272));
      var alu19 = (alu18&(gidx0<120));
      var alu20 = (alu18&(7<gidx0));
      var precast15 = (cast6<<16u);
      var alu21 = (alu18&alu3);
      var alu22 = (alu18&alu4);
      var alu23 = (alu19&alu3);
      var alu24 = (alu19&alu4);
      var alu25 = (alu20&alu3);
      var alu26 = (alu20&alu4);
      var alu27 = (cast5+bitcast<i32>(precast15)+bitcast<i32>(precast12)+cast4+cast3+cast2+cast1);
      var val0 = select(0.0f, data1_251658240[(alu27+-1052688)], alu26);
      var val1 = select(0.0f, data1_251658240[(alu27+-1052687)], alu26);
      var val2 = select(0.0f, data1_251658240[(alu27+-1052686)], alu26);
      var val3 = select(0.0f, data1_251658240[(alu27+-1052685)], alu26);
      var val4 = select(0.0f, data1_251658240[(alu27+-1052672)], alu20);
      var val5 = select(0.0f, data1_251658240[(alu27+-1052671)], alu20);
      var val6 = select(0.0f, data1_251658240[(alu27+-1052670)], alu20);
      var val7 = select(0.0f, data1_251658240[(alu27+-1052669)], alu20);
      var val8 = select(0.0f, data1_251658240[(alu27+-1052656)], alu25);
      var val9 = select(0.0f, data1_251658240[(alu27+-1052655)], alu25);
      var val10 = select(0.0f, data1_251658240[(alu27+-1052654)], alu25);
      var val11 = select(0.0f, data1_251658240[(alu27+-1052653)], alu25);
      var val12 = select(0.0f, data1_251658240[(alu27+-1048592)], alu22);
      var val13 = select(0.0f, data1_251658240[(alu27+-1048591)], alu22);
      var val14 = select(0.0f, data1_251658240[(alu27+-1048590)], alu22);
      var val15 = select(0.0f, data1_251658240[(alu27+-1048589)], alu22);
      var val16 = select(0.0f, data1_251658240[(alu27+-1048576)], alu18);
      var val17 = select(0.0f, data1_251658240[(alu27+-1048575)], alu18);
      var val18 = select(0.0f, data1_251658240[(alu27+-1048574)], alu18);
      var val19 = select(0.0f, data1_251658240[(alu27+-1048573)], alu18);
      var val20 = select(0.0f, data1_251658240[(alu27+-1048560)], alu21);
      var val21 = select(0.0f, data1_251658240[(alu27+-1048559)], alu21);
      var val22 = select(0.0f, data1_251658240[(alu27+-1048558)], alu21);
      var val23 = select(0.0f, data1_251658240[(alu27+-1048557)], alu21);
      var val24 = select(0.0f, data1_251658240[(alu27+-1044496)], alu24);
      var val25 = select(0.0f, data1_251658240[(alu27+-1044495)], alu24);
      var val26 = select(0.0f, data1_251658240[(alu27+-1044494)], alu24);
      var val27 = select(0.0f, data1_251658240[(alu27+-1044493)], alu24);
      var val28 = select(0.0f, data1_251658240[(alu27+-1044480)], alu19);
      var val29 = select(0.0f, data1_251658240[(alu27+-1044479)], alu19);
      var val30 = select(0.0f, data1_251658240[(alu27+-1044478)], alu19);
      var val31 = select(0.0f, data1_251658240[(alu27+-1044477)], alu19);
      var val32 = select(0.0f, data1_251658240[(alu27+-1044464)], alu23);
      var val33 = select(0.0f, data1_251658240[(alu27+-1044463)], alu23);
      var val34 = select(0.0f, data1_251658240[(alu27+-1044462)], alu23);
      var val35 = select(0.0f, data1_251658240[(alu27+-1044461)], alu23);
      var alu28 = ((gidx2*1215)+(ridx1008*27)+(ridx1009*9));
      var val36 = data2_6075[alu28];
      var val37 = data2_6075[(alu28+1)];
      var val38 = data2_6075[(alu28+2)];
      var val39 = data2_6075[(alu28+3)];
      var val40 = data2_6075[(alu28+4)];
      var val41 = data2_6075[(alu28+5)];
      var val42 = data2_6075[(alu28+6)];
      var val43 = data2_6075[(alu28+7)];
      var val44 = data2_6075[(alu28+8)];
      var val45 = data2_6075[(alu28+405)];
      var val46 = data2_6075[(alu28+406)];
      var val47 = data2_6075[(alu28+407)];
      var val48 = data2_6075[(alu28+408)];
      var val49 = data2_6075[(alu28+409)];
      var val50 = data2_6075[(alu28+410)];
      var val51 = data2_6075[(alu28+411)];
      var val52 = data2_6075[(alu28+412)];
      var val53 = data2_6075[(alu28+413)];
      var val54 = data2_6075[(alu28+810)];
      var val55 = data2_6075[(alu28+811)];
      var val56 = data2_6075[(alu28+812)];
      var val57 = data2_6075[(alu28+813)];
      var val58 = data2_6075[(alu28+814)];
      var val59 = data2_6075[(alu28+815)];
      var val60 = data2_6075[(alu28+816)];
      var val61 = data2_6075[(alu28+817)];
      var val62 = data2_6075[(alu28+818)];
      acc0[0] = (acc0[0]+(val0*val36)+(val12*val39)+(val24*val42)+(val4*val37)+(val16*val40)+(val28*val43)+(val8*val38)+(val20*val41)+(val32*val44));
      acc0[1] = (acc0[1]+(val0*val45)+(val12*val48)+(val24*val51)+(val4*val46)+(val16*val49)+(val28*val52)+(val8*val47)+(val20*val50)+(val32*val53));
      acc0[2] = (acc0[2]+(val0*val54)+(val12*val57)+(val24*val60)+(val4*val55)+(val16*val58)+(val28*val61)+(val8*val56)+(val20*val59)+(val32*val62));
      acc0[3] = (acc0[3]+(val1*val36)+(val13*val39)+(val25*val42)+(val5*val37)+(val17*val40)+(val29*val43)+(val9*val38)+(val21*val41)+(val33*val44));
      acc0[4] = (acc0[4]+(val1*val45)+(val13*val48)+(val25*val51)+(val5*val46)+(val17*val49)+(val29*val52)+(val9*val47)+(val21*val50)+(val33*val53));
      acc0[5] = (acc0[5]+(val1*val54)+(val13*val57)+(val25*val60)+(val5*val55)+(val17*val58)+(val29*val61)+(val9*val56)+(val21*val59)+(val33*val62));
      acc0[6] = (acc0[6]+(val2*val36)+(val14*val39)+(val26*val42)+(val6*val37)+(val18*val40)+(val30*val43)+(val10*val38)+(val22*val41)+(val34*val44));
      acc0[7] = (acc0[7]+(val2*val45)+(val14*val48)+(val26*val51)+(val6*val46)+(val18*val49)+(val30*val52)+(val10*val47)+(val22*val50)+(val34*val53));
      acc0[8] = (acc0[8]+(val2*val54)+(val14*val57)+(val26*val60)+(val6*val55)+(val18*val58)+(val30*val61)+(val10*val56)+(val22*val59)+(val34*val62));
      acc0[9] = (acc0[9]+(val3*val36)+(val15*val39)+(val27*val42)+(val7*val37)+(val19*val40)+(val31*val43)+(val11*val38)+(val23*val41)+(val35*val44));
      acc0[10] = (acc0[10]+(val3*val45)+(val15*val48)+(val27*val51)+(val7*val46)+(val19*val49)+(val31*val52)+(val11*val47)+(val23*val50)+(val35*val53));
      acc0[11] = (acc0[11]+(val3*val54)+(val15*val57)+(val27*val60)+(val7*val55)+(val19*val58)+(val31*val61)+(val11*val56)+(val23*val59)+(val35*val62));
    }
  }
  var alu43 = (cast5+(gidx2*50331648)+cast3+cast1+cast4+cast2);
  data0_251658240[alu43] = acc0[0];
  data0_251658240[(alu43+1)] = acc0[3];
  data0_251658240[(alu43+2)] = acc0[6];
  data0_251658240[(alu43+3)] = acc0[9];
  data0_251658240[(alu43+16777216)] = acc0[1];
  data0_251658240[(alu43+16777217)] = acc0[4];
  data0_251658240[(alu43+16777218)] = acc0[7];
  data0_251658240[(alu43+16777219)] = acc0[10];
  data0_251658240[(alu43+33554432)] = acc0[2];
  data0_251658240[(alu43+33554433)] = acc0[5];
  data0_251658240[(alu43+33554434)] = acc0[8];
  data0_251658240[(alu43+33554435)] = acc0[11];
}`,Ma=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_33554432:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_30:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_2:array<f32>;
@compute @workgroup_size(2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 2 */
  var lidx1 = i32(lindex.y); /* 16 */
  var precast0 = gidx0;
  var precast1 = gidx1;
  var precast2 = lidx1;
  var cast0 = bitcast<u32>(precast0);
  var val0 = data3_2[lidx0];
  var alu0 = (lidx0*15);
  var val1 = data2_30[alu0];
  var val2 = data2_30[(alu0+1)];
  var val3 = data2_30[(alu0+2)];
  var val4 = data2_30[(alu0+3)];
  var val5 = data2_30[(alu0+4)];
  var val6 = data2_30[(alu0+5)];
  var val7 = data2_30[(alu0+6)];
  var val8 = data2_30[(alu0+7)];
  var val9 = data2_30[(alu0+8)];
  var val10 = data2_30[(alu0+9)];
  var val11 = data2_30[(alu0+10)];
  var val12 = data2_30[(alu0+11)];
  var val13 = data2_30[(alu0+12)];
  var val14 = data2_30[(alu0+13)];
  var val15 = data2_30[(alu0+14)];
  var precast3 = (cast0<<9u);
  var precast4 = (bitcast<u32>(precast1)<<6u);
  var alu1 = (bitcast<i32>(precast3)+bitcast<i32>(precast4));
  var precast5 = (bitcast<u32>(precast2)<<2u);
  var cast1 = bitcast<i32>(precast5);
  var alu2 = (alu1+cast1);
  var val16 = data1_251658240[alu2];
  var val17 = data1_251658240[(alu2+1)];
  var val18 = data1_251658240[(alu2+2)];
  var val19 = data1_251658240[(alu2+3)];
  var val20 = data1_251658240[(alu2+16777216)];
  var val21 = data1_251658240[(alu2+16777217)];
  var val22 = data1_251658240[(alu2+16777218)];
  var val23 = data1_251658240[(alu2+16777219)];
  var val24 = data1_251658240[(alu2+33554432)];
  var val25 = data1_251658240[(alu2+33554433)];
  var val26 = data1_251658240[(alu2+33554434)];
  var val27 = data1_251658240[(alu2+33554435)];
  var val28 = data1_251658240[(alu2+50331648)];
  var val29 = data1_251658240[(alu2+50331649)];
  var val30 = data1_251658240[(alu2+50331650)];
  var val31 = data1_251658240[(alu2+50331651)];
  var val32 = data1_251658240[(alu2+67108864)];
  var val33 = data1_251658240[(alu2+67108865)];
  var val34 = data1_251658240[(alu2+67108866)];
  var val35 = data1_251658240[(alu2+67108867)];
  var val36 = data1_251658240[(alu2+83886080)];
  var val37 = data1_251658240[(alu2+83886081)];
  var val38 = data1_251658240[(alu2+83886082)];
  var val39 = data1_251658240[(alu2+83886083)];
  var val40 = data1_251658240[(alu2+100663296)];
  var val41 = data1_251658240[(alu2+100663297)];
  var val42 = data1_251658240[(alu2+100663298)];
  var val43 = data1_251658240[(alu2+100663299)];
  var val44 = data1_251658240[(alu2+117440512)];
  var val45 = data1_251658240[(alu2+117440513)];
  var val46 = data1_251658240[(alu2+117440514)];
  var val47 = data1_251658240[(alu2+117440515)];
  var val48 = data1_251658240[(alu2+134217728)];
  var val49 = data1_251658240[(alu2+134217729)];
  var val50 = data1_251658240[(alu2+134217730)];
  var val51 = data1_251658240[(alu2+134217731)];
  var val52 = data1_251658240[(alu2+150994944)];
  var val53 = data1_251658240[(alu2+150994945)];
  var val54 = data1_251658240[(alu2+150994946)];
  var val55 = data1_251658240[(alu2+150994947)];
  var val56 = data1_251658240[(alu2+167772160)];
  var val57 = data1_251658240[(alu2+167772161)];
  var val58 = data1_251658240[(alu2+167772162)];
  var val59 = data1_251658240[(alu2+167772163)];
  var val60 = data1_251658240[(alu2+184549376)];
  var val61 = data1_251658240[(alu2+184549377)];
  var val62 = data1_251658240[(alu2+184549378)];
  var val63 = data1_251658240[(alu2+184549379)];
  var val64 = data1_251658240[(alu2+201326592)];
  var val65 = data1_251658240[(alu2+201326593)];
  var val66 = data1_251658240[(alu2+201326594)];
  var val67 = data1_251658240[(alu2+201326595)];
  var val68 = data1_251658240[(alu2+218103808)];
  var val69 = data1_251658240[(alu2+218103809)];
  var val70 = data1_251658240[(alu2+218103810)];
  var val71 = data1_251658240[(alu2+218103811)];
  var val72 = data1_251658240[(alu2+234881024)];
  var val73 = data1_251658240[(alu2+234881025)];
  var val74 = data1_251658240[(alu2+234881026)];
  var val75 = data1_251658240[(alu2+234881027)];
  var precast6 = lidx0;
  var precast7 = (cast0<<3u);
  var alu3 = (gidx1+bitcast<i32>(precast7));
  var precast8 = (bitcast<u32>(precast6)<<24u);
  var alu4 = (alu1+bitcast<i32>(precast8)+cast1);
  data0_33554432[alu4] = ((val16*val1)+(val20*val2)+(val24*val3)+(val28*val4)+(val32*val5)+(val36*val6)+(val40*val7)+(val44*val8)+(val48*val9)+(val52*val10)+(val56*val11)+(val60*val12)+(val64*val13)+(val68*val14)+(val72*val15)+val0);
  data0_33554432[(alu4+1)] = ((val17*val1)+(val21*val2)+(val25*val3)+(val29*val4)+(val33*val5)+(val37*val6)+(val41*val7)+(val45*val8)+(val49*val9)+(val53*val10)+(val57*val11)+(val61*val12)+(val65*val13)+(val69*val14)+(val73*val15)+val0);
  data0_33554432[(alu4+2)] = ((val18*val1)+(val22*val2)+(val26*val3)+(val30*val4)+(val34*val5)+(val38*val6)+(val42*val7)+(val46*val8)+(val50*val9)+(val54*val10)+(val58*val11)+(val62*val12)+(val66*val13)+(val70*val14)+(val74*val15)+val0);
  data0_33554432[(alu4+3)] = ((val19*val1)+(val23*val2)+(val27*val3)+(val31*val4)+(val35*val5)+(val39*val6)+(val43*val7)+(val47*val8)+(val51*val9)+(val55*val10)+(val59*val11)+(val63*val12)+(val67*val13)+(val71*val14)+(val75*val15)+val0);
}`,Ea=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_33554432:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 32 */
  var precast0 = gidx0;
  var precast1 = gidx1;
  var precast2 = lidx0;
  var cast0 = bitcast<u32>(precast0);
  var precast3 = (cast0<<9u);
  var precast4 = (bitcast<u32>(precast1)<<7u);
  var precast5 = (bitcast<u32>(precast2)<<2u);
  var alu0 = (bitcast<i32>(precast3)+bitcast<i32>(precast4)+bitcast<i32>(precast5));
  var val0 = data1_33554432[alu0];
  var alu1 = (alu0+1);
  var val1 = data1_33554432[alu1];
  var alu2 = (alu0+2);
  var val2 = data1_33554432[alu2];
  var alu3 = (alu0+3);
  var val3 = data1_33554432[alu3];
  var val4 = data1_33554432[(alu0+16777216)];
  var val5 = data1_33554432[(alu0+16777217)];
  var val6 = data1_33554432[(alu0+16777218)];
  var val7 = data1_33554432[(alu0+16777219)];
  var precast6 = (cast0<<2u);
  var alu4 = (gidx1+bitcast<i32>(precast6));
  var alu5 = select(val0,val4,(val0<val4));
  data0_16777216[alu0] = alu5;
  var alu7 = select(val1,val5,(val1<val5));
  data0_16777216[alu1] = alu7;
  var alu9 = select(val2,val6,(val2<val6));
  data0_16777216[alu2] = alu9;
  var alu11 = select(val3,val7,(val3<val7));
  data0_16777216[alu3] = alu11;
}`,Oa=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<i32>;
@group(0) @binding(2)var<storage,read_write>data1_33554432:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 32 */
  var precast0 = gidx0;
  var precast1 = gidx1;
  var precast2 = lidx0;
  var cast0 = bitcast<u32>(precast0);
  var precast3 = (cast0<<9u);
  var precast4 = (bitcast<u32>(precast1)<<7u);
  var precast5 = (bitcast<u32>(precast2)<<2u);
  var alu0 = (bitcast<i32>(precast3)+bitcast<i32>(precast4)+bitcast<i32>(precast5));
  var val0 = data1_33554432[alu0];
  var val1 = data2_16777216[alu0];
  var alu1 = (alu0+1);
  var val2 = data1_33554432[alu1];
  var val3 = data2_16777216[alu1];
  var alu2 = (alu0+2);
  var val4 = data1_33554432[alu2];
  var val5 = data2_16777216[alu2];
  var alu3 = (alu0+3);
  var val6 = data1_33554432[alu3];
  var val7 = data2_16777216[alu3];
  var val8 = data1_33554432[(alu0+16777216)];
  var val9 = data1_33554432[(alu0+16777217)];
  var val10 = data1_33554432[(alu0+16777218)];
  var val11 = data1_33554432[(alu0+16777219)];
  var precast6 = (cast0<<2u);
  var alu4 = (gidx1+bitcast<i32>(precast6));
  var precast7 = (i32((val0==val1)));
  var precast8 = (bitcast<u32>(precast7)<<1u);
  var cast1 = bitcast<i32>(precast8);
  var precast9 = (i32((val2==val3)));
  var precast10 = (bitcast<u32>(precast9)<<1u);
  var cast2 = bitcast<i32>(precast10);
  var precast11 = (i32((val4==val5)));
  var precast12 = (bitcast<u32>(precast11)<<1u);
  var cast3 = bitcast<i32>(precast12);
  var precast13 = (i32((val6==val7)));
  var precast14 = (bitcast<u32>(precast13)<<1u);
  var cast4 = bitcast<i32>(precast14);
  var cast5 = (i32((val8==val1)));
  var cast6 = (i32((val9==val3)));
  var cast7 = (i32((val10==val5)));
  var cast8 = (i32((val11==val7)));
  var alu5 = select(cast5,cast1,(cast5<cast1));
  data0_16777216[alu0] = (2-alu5);
  var alu7 = select(cast6,cast2,(cast6<cast2));
  data0_16777216[alu1] = (2-alu7);
  var alu9 = select(cast7,cast3,(cast7<cast3));
  data0_16777216[alu2] = (2-alu9);
  var alu11 = select(cast8,cast4,(cast8<cast4));
  data0_16777216[alu3] = (2-alu11);
}`;function xa(a,f,P=()=>{}){return w(this,null,function*(){const y=ha(f),i=Ta(a),t=[a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})],d=C(a,1006632960),M=C(a,67108864),T=U(a,1620,o(f,y["model.0.weight"])),u=C(a,1006632960),k=U(a,24300,o(f,y["model.2.weight"])),n=C(a,3932160),v=C(a,15360),b=C(a,60),g=C(a,60),j=U(a,24300,o(f,y["model.5.weight"])),q=U(a,24300,o(f,y["model.8.weight"])),J=U(a,24300,o(f,y["model.11.weight"])),V=U(a,24300,o(f,y["model.14.weight"])),H=U(a,24300,o(f,y["model.17.weight"])),K=U(a,24300,o(f,y["model.20.weight"])),Q=U(a,24300,o(f,y["model.23.weight"])),X=U(a,24300,o(f,y["model.26.weight"])),Z=U(a,24300,o(f,y["model.29.weight"])),$=U(a,24300,o(f,y["model.32.weight"])),aa=U(a,24300,o(f,y["model.35.weight"])),ia=U(a,24300,o(f,y["model.38.weight"])),ta=U(a,24300,o(f,y["model.41.weight"])),ra=U(a,24300,o(f,y["model.44.weight"])),ea=U(a,24300,o(f,y["model.47.weight"])),la=U(a,24300,o(f,y["model.50.weight"])),ua=U(a,24300,o(f,y["model.53.weight"])),na=U(a,24300,o(f,y["model.56.weight"])),va=U(a,24300,o(f,y["model.59.weight"])),ba=U(a,24300,o(f,y["model.62.weight"])),ga=U(a,24300,o(f,y["model.65.weight"])),fa=U(a,24300,o(f,y["model.68.weight"])),da=U(a,24300,o(f,y["model.71.weight"])),N=C(a,134217728),sa=U(a,120,o(f,y["model.74.weight"])),ya=U(a,8,o(f,y["model.74.bias"])),Y=C(a,67108864),L=C(a,67108864),E=a.createBuffer({size:M.size,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE}),O=a.createBuffer({size:L.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),oa=[Ca,_,S,s,p,G,s,c,h,x,S,s,p,G,s,c,h,m,S,s,p,G,s,c,h,B,S,s,p,G,s,c,h,I,S,s,p,G,s,c,h,_,S,s,p,G,s,c,h,x,S,s,p,G,s,c,h,m,S,s,p,G,s,c,h,B,S,s,p,G,s,c,h,I,S,s,p,G,s,c,h,_,S,s,p,G,s,c,h,x,S,s,p,G,s,c,h,m,S,s,p,G,s,c,h,B,S,s,p,G,s,c,h,I,S,s,p,G,s,c,h,_,S,s,p,G,s,c,h,x,S,s,p,G,s,c,h,m,S,s,p,G,s,c,h,B,S,s,p,G,s,c,h,I,S,s,p,G,s,c,h,_,S,s,p,G,s,c,h,x,S,s,p,G,s,c,h,m,S,s,p,G,s,c,h,B,S,s,p,G,s,c,h,Ma,Ea,Oa],e=yield Promise.all(oa.map((z,r)=>w(null,null,function*(){return yield a.createComputePipelineAsync({layout:a.createPipelineLayout({bindGroupLayouts:[t[r]]}),compute:{module:a.createShaderModule({code:z}),entryPoint:"main"}})})));return z=>w(null,null,function*(){const r=a.createCommandEncoder();yield E.mapAsync(GPUMapMode.WRITE),new Float32Array(E.getMappedRange()).set(z),E.unmap(),r.copyBufferToBuffer(E,0,M,0,E.size),l(a,r,e[0],t[0],i,[d,M,T],[128,256,5]),l(a,r,e[1],t[1],i,[u,d,k],[128,256,5]),l(a,r,e[2],t[2],i,[n,u],[10240,1,1]),l(a,r,e[3],t[3],i,[v,n],[40,1,1]),l(a,r,e[4],t[4],i,[b,v],[15,1,1]),l(a,r,e[5],t[5],i,[n,u,b],[1024,5,1]),l(a,r,e[6],t[6],i,[v,n],[40,1,1]),l(a,r,e[7],t[7],i,[g,v],[15,1,1]),l(a,r,e[8],t[8],i,[d,u,b,g],[32768,40,1]),l(a,r,e[9],t[9],i,[u,d,j],[128,256,5]),l(a,r,e[10],t[10],i,[n,u],[10240,1,1]),l(a,r,e[11],t[11],i,[v,n],[40,1,1]),l(a,r,e[12],t[12],i,[g,v],[15,1,1]),l(a,r,e[13],t[13],i,[n,u,g],[1024,5,1]),l(a,r,e[14],t[14],i,[v,n],[40,1,1]),l(a,r,e[15],t[15],i,[b,v],[15,1,1]),l(a,r,e[16],t[16],i,[d,u,g,b],[32768,40,1]),l(a,r,e[17],t[17],i,[u,d,q],[128,256,5]),l(a,r,e[18],t[18],i,[n,u],[10240,1,1]),l(a,r,e[19],t[19],i,[v,n],[40,1,1]),l(a,r,e[20],t[20],i,[b,v],[15,1,1]),l(a,r,e[21],t[21],i,[n,u,b],[1024,5,1]),l(a,r,e[22],t[22],i,[v,n],[40,1,1]),l(a,r,e[23],t[23],i,[g,v],[15,1,1]),l(a,r,e[24],t[24],i,[d,u,b,g],[32768,40,1]),l(a,r,e[25],t[25],i,[u,d,J],[128,256,5]),l(a,r,e[26],t[26],i,[n,u],[10240,1,1]),l(a,r,e[27],t[27],i,[v,n],[40,1,1]),l(a,r,e[28],t[28],i,[g,v],[15,1,1]),l(a,r,e[29],t[29],i,[n,u,g],[1024,5,1]),l(a,r,e[30],t[30],i,[v,n],[40,1,1]),l(a,r,e[31],t[31],i,[b,v],[15,1,1]),l(a,r,e[32],t[32],i,[d,u,g,b],[32768,40,1]),l(a,r,e[33],t[33],i,[u,d,V],[128,256,5]),l(a,r,e[34],t[34],i,[n,u],[10240,1,1]),l(a,r,e[35],t[35],i,[v,n],[40,1,1]),l(a,r,e[36],t[36],i,[b,v],[15,1,1]),l(a,r,e[37],t[37],i,[n,u,b],[1024,5,1]),l(a,r,e[38],t[38],i,[v,n],[40,1,1]),l(a,r,e[39],t[39],i,[g,v],[15,1,1]),l(a,r,e[40],t[40],i,[d,u,b,g],[32768,40,1]),l(a,r,e[41],t[41],i,[u,d,H],[128,256,5]),l(a,r,e[42],t[42],i,[n,u],[10240,1,1]),l(a,r,e[43],t[43],i,[v,n],[40,1,1]),l(a,r,e[44],t[44],i,[g,v],[15,1,1]),l(a,r,e[45],t[45],i,[n,u,g],[1024,5,1]),l(a,r,e[46],t[46],i,[v,n],[40,1,1]),l(a,r,e[47],t[47],i,[b,v],[15,1,1]),l(a,r,e[48],t[48],i,[d,u,g,b],[32768,40,1]),l(a,r,e[49],t[49],i,[u,d,K],[128,256,5]),l(a,r,e[50],t[50],i,[n,u],[10240,1,1]),l(a,r,e[51],t[51],i,[v,n],[40,1,1]),l(a,r,e[52],t[52],i,[b,v],[15,1,1]),l(a,r,e[53],t[53],i,[n,u,b],[1024,5,1]),l(a,r,e[54],t[54],i,[v,n],[40,1,1]),l(a,r,e[55],t[55],i,[g,v],[15,1,1]),l(a,r,e[56],t[56],i,[d,u,b,g],[32768,40,1]),l(a,r,e[57],t[57],i,[u,d,Q],[128,256,5]),l(a,r,e[58],t[58],i,[n,u],[10240,1,1]),l(a,r,e[59],t[59],i,[v,n],[40,1,1]),l(a,r,e[60],t[60],i,[g,v],[15,1,1]),l(a,r,e[61],t[61],i,[n,u,g],[1024,5,1]),l(a,r,e[62],t[62],i,[v,n],[40,1,1]),l(a,r,e[63],t[63],i,[b,v],[15,1,1]),l(a,r,e[64],t[64],i,[d,u,g,b],[32768,40,1]),l(a,r,e[65],t[65],i,[u,d,X],[128,256,5]),l(a,r,e[66],t[66],i,[n,u],[10240,1,1]),l(a,r,e[67],t[67],i,[v,n],[40,1,1]),l(a,r,e[68],t[68],i,[b,v],[15,1,1]),l(a,r,e[69],t[69],i,[n,u,b],[1024,5,1]),l(a,r,e[70],t[70],i,[v,n],[40,1,1]),l(a,r,e[71],t[71],i,[g,v],[15,1,1]),l(a,r,e[72],t[72],i,[d,u,b,g],[32768,40,1]),l(a,r,e[73],t[73],i,[u,d,Z],[128,256,5]),l(a,r,e[74],t[74],i,[n,u],[10240,1,1]),l(a,r,e[75],t[75],i,[v,n],[40,1,1]),l(a,r,e[76],t[76],i,[g,v],[15,1,1]),l(a,r,e[77],t[77],i,[n,u,g],[1024,5,1]),l(a,r,e[78],t[78],i,[v,n],[40,1,1]),l(a,r,e[79],t[79],i,[b,v],[15,1,1]),l(a,r,e[80],t[80],i,[d,u,g,b],[32768,40,1]),l(a,r,e[81],t[81],i,[u,d,$],[128,256,5]),l(a,r,e[82],t[82],i,[n,u],[10240,1,1]),l(a,r,e[83],t[83],i,[v,n],[40,1,1]),l(a,r,e[84],t[84],i,[b,v],[15,1,1]),l(a,r,e[85],t[85],i,[n,u,b],[1024,5,1]),l(a,r,e[86],t[86],i,[v,n],[40,1,1]),l(a,r,e[87],t[87],i,[g,v],[15,1,1]),l(a,r,e[88],t[88],i,[d,u,b,g],[32768,40,1]),l(a,r,e[89],t[89],i,[u,d,aa],[128,256,5]),l(a,r,e[90],t[90],i,[n,u],[10240,1,1]),l(a,r,e[91],t[91],i,[v,n],[40,1,1]),l(a,r,e[92],t[92],i,[g,v],[15,1,1]),l(a,r,e[93],t[93],i,[n,u,g],[1024,5,1]),l(a,r,e[94],t[94],i,[v,n],[40,1,1]),l(a,r,e[95],t[95],i,[b,v],[15,1,1]),l(a,r,e[96],t[96],i,[d,u,g,b],[32768,40,1]),l(a,r,e[97],t[97],i,[u,d,ia],[128,256,5]),l(a,r,e[98],t[98],i,[n,u],[10240,1,1]),l(a,r,e[99],t[99],i,[v,n],[40,1,1]),l(a,r,e[100],t[100],i,[b,v],[15,1,1]),l(a,r,e[101],t[101],i,[n,u,b],[1024,5,1]),l(a,r,e[102],t[102],i,[v,n],[40,1,1]),l(a,r,e[103],t[103],i,[g,v],[15,1,1]),l(a,r,e[104],t[104],i,[d,u,b,g],[32768,40,1]),l(a,r,e[105],t[105],i,[u,d,ta],[128,256,5]),l(a,r,e[106],t[106],i,[n,u],[10240,1,1]),l(a,r,e[107],t[107],i,[v,n],[40,1,1]),l(a,r,e[108],t[108],i,[g,v],[15,1,1]),l(a,r,e[109],t[109],i,[n,u,g],[1024,5,1]),l(a,r,e[110],t[110],i,[v,n],[40,1,1]),l(a,r,e[111],t[111],i,[b,v],[15,1,1]),l(a,r,e[112],t[112],i,[d,u,g,b],[32768,40,1]),l(a,r,e[113],t[113],i,[u,d,ra],[128,256,5]),l(a,r,e[114],t[114],i,[n,u],[10240,1,1]),l(a,r,e[115],t[115],i,[v,n],[40,1,1]),l(a,r,e[116],t[116],i,[b,v],[15,1,1]),l(a,r,e[117],t[117],i,[n,u,b],[1024,5,1]),l(a,r,e[118],t[118],i,[v,n],[40,1,1]),l(a,r,e[119],t[119],i,[g,v],[15,1,1]),l(a,r,e[120],t[120],i,[d,u,b,g],[32768,40,1]),l(a,r,e[121],t[121],i,[u,d,ea],[128,256,5]),l(a,r,e[122],t[122],i,[n,u],[10240,1,1]),l(a,r,e[123],t[123],i,[v,n],[40,1,1]),l(a,r,e[124],t[124],i,[g,v],[15,1,1]),l(a,r,e[125],t[125],i,[n,u,g],[1024,5,1]),l(a,r,e[126],t[126],i,[v,n],[40,1,1]),l(a,r,e[127],t[127],i,[b,v],[15,1,1]),l(a,r,e[128],t[128],i,[d,u,g,b],[32768,40,1]),l(a,r,e[129],t[129],i,[u,d,la],[128,256,5]),l(a,r,e[130],t[130],i,[n,u],[10240,1,1]),l(a,r,e[131],t[131],i,[v,n],[40,1,1]),l(a,r,e[132],t[132],i,[b,v],[15,1,1]),l(a,r,e[133],t[133],i,[n,u,b],[1024,5,1]),l(a,r,e[134],t[134],i,[v,n],[40,1,1]),l(a,r,e[135],t[135],i,[g,v],[15,1,1]),l(a,r,e[136],t[136],i,[d,u,b,g],[32768,40,1]),l(a,r,e[137],t[137],i,[u,d,ua],[128,256,5]),l(a,r,e[138],t[138],i,[n,u],[10240,1,1]),l(a,r,e[139],t[139],i,[v,n],[40,1,1]),l(a,r,e[140],t[140],i,[g,v],[15,1,1]),l(a,r,e[141],t[141],i,[n,u,g],[1024,5,1]),l(a,r,e[142],t[142],i,[v,n],[40,1,1]),l(a,r,e[143],t[143],i,[b,v],[15,1,1]),l(a,r,e[144],t[144],i,[d,u,g,b],[32768,40,1]),l(a,r,e[145],t[145],i,[u,d,na],[128,256,5]),l(a,r,e[146],t[146],i,[n,u],[10240,1,1]),l(a,r,e[147],t[147],i,[v,n],[40,1,1]),l(a,r,e[148],t[148],i,[b,v],[15,1,1]),l(a,r,e[149],t[149],i,[n,u,b],[1024,5,1]),l(a,r,e[150],t[150],i,[v,n],[40,1,1]),l(a,r,e[151],t[151],i,[g,v],[15,1,1]),l(a,r,e[152],t[152],i,[d,u,b,g],[32768,40,1]),l(a,r,e[153],t[153],i,[u,d,va],[128,256,5]),l(a,r,e[154],t[154],i,[n,u],[10240,1,1]),l(a,r,e[155],t[155],i,[v,n],[40,1,1]),l(a,r,e[156],t[156],i,[g,v],[15,1,1]),l(a,r,e[157],t[157],i,[n,u,g],[1024,5,1]),l(a,r,e[158],t[158],i,[v,n],[40,1,1]),l(a,r,e[159],t[159],i,[b,v],[15,1,1]),l(a,r,e[160],t[160],i,[d,u,g,b],[32768,40,1]),l(a,r,e[161],t[161],i,[u,d,ba],[128,256,5]),l(a,r,e[162],t[162],i,[n,u],[10240,1,1]),l(a,r,e[163],t[163],i,[v,n],[40,1,1]),l(a,r,e[164],t[164],i,[b,v],[15,1,1]),l(a,r,e[165],t[165],i,[n,u,b],[1024,5,1]),l(a,r,e[166],t[166],i,[v,n],[40,1,1]),l(a,r,e[167],t[167],i,[g,v],[15,1,1]),l(a,r,e[168],t[168],i,[d,u,b,g],[32768,40,1]),l(a,r,e[169],t[169],i,[u,d,ga],[128,256,5]),l(a,r,e[170],t[170],i,[n,u],[10240,1,1]),l(a,r,e[171],t[171],i,[v,n],[40,1,1]),l(a,r,e[172],t[172],i,[g,v],[15,1,1]),l(a,r,e[173],t[173],i,[n,u,g],[1024,5,1]),l(a,r,e[174],t[174],i,[v,n],[40,1,1]),l(a,r,e[175],t[175],i,[b,v],[15,1,1]),l(a,r,e[176],t[176],i,[d,u,g,b],[32768,40,1]),l(a,r,e[177],t[177],i,[u,d,fa],[128,256,5]),l(a,r,e[178],t[178],i,[n,u],[10240,1,1]),l(a,r,e[179],t[179],i,[v,n],[40,1,1]),l(a,r,e[180],t[180],i,[b,v],[15,1,1]),l(a,r,e[181],t[181],i,[n,u,b],[1024,5,1]),l(a,r,e[182],t[182],i,[v,n],[40,1,1]),l(a,r,e[183],t[183],i,[g,v],[15,1,1]),l(a,r,e[184],t[184],i,[d,u,b,g],[32768,40,1]),l(a,r,e[185],t[185],i,[u,d,da],[128,256,5]),l(a,r,e[186],t[186],i,[n,u],[10240,1,1]),l(a,r,e[187],t[187],i,[v,n],[40,1,1]),l(a,r,e[188],t[188],i,[g,v],[15,1,1]),l(a,r,e[189],t[189],i,[n,u,g],[1024,5,1]),l(a,r,e[190],t[190],i,[v,n],[40,1,1]),l(a,r,e[191],t[191],i,[b,v],[15,1,1]),l(a,r,e[192],t[192],i,[d,u,g,b],[32768,40,1]),l(a,r,e[193],t[193],i,[N,d,sa,ya],[32768,8,1]),l(a,r,e[194],t[194],i,[Y,N],[32768,4,1]),l(a,r,e[195],t[195],i,[L,N,Y],[32768,4,1]),r.copyBufferToBuffer(L,0,O,0,L.size);const Ua=r.finish();a.queue.submit([Ua]),yield O.mapAsync(GPUMapMode.READ);const F=new Int32Array(O.size/4);return F.set(new Int32Array(O.getMappedRange())),O.unmap(),[F]})})}export{xa as setupNet};
