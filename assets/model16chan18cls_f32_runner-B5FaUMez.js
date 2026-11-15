var Ya=Object.defineProperty,Fa=Object.defineProperties;var Aa=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Da=Object.prototype.hasOwnProperty,qa=Object.prototype.propertyIsEnumerable;var W=(b,S,y)=>S in b?Ya(b,S,{enumerable:!0,configurable:!0,writable:!0,value:y}):b[S]=y,j=(b,S)=>{for(var y in S||(S={}))Da.call(S,y)&&W(b,y,S[y]);if(q)for(var y of q(S))qa.call(S,y)&&W(b,y,S[y]);return b},J=(b,S)=>Fa(b,Aa(S));var M=(b,S,y)=>new Promise((O,f)=>{var l=s=>{try{U(y.next(s))}catch(P){f(P)}},m=s=>{try{U(y.throw(s))}catch(P){f(P)}},U=s=>s.done?O(s.value):Promise.resolve(s.value).then(l,m);U((y=y.apply(b,S)).next())});const Ja=(()=>{const b=(a,v)=>a.subarray(...v.data_offsets),S=a=>{const v=Number(new DataView(a.buffer).getBigUint64(0,!0)),c=JSON.parse(new TextDecoder("utf8").decode(a.subarray(8,8+v)));return Object.fromEntries(Object.entries(c).filter(([t,i])=>t!=="__metadata__").map(([t,i])=>[t,J(j({},i),{data_offsets:i.data_offsets.map(d=>8+v+d)})]))},y=(a,v)=>a.createBuffer({size:v,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),O=a=>{const c=a.createBuffer({mappedAtCreation:!0,size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return new Float32Array(c.getMappedRange())[0]=1/0,c.unmap(),c},f=(a,v,c)=>{const t=Math.ceil(v/4)*4,i=a.createBuffer({size:t,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0});return new Uint8Array(i.getMappedRange()).set(c),i.unmap(),i},l=(a,v,c,t,i,d,h)=>{const R=a.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:i}},...d.map((n,g)=>({binding:g+1,resource:{buffer:n}}))]}),u=v.beginComputePass();u.setPipeline(c),u.setBindGroup(0,R),u.dispatchWorkgroups(...h),u.end()},m=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_432:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 2 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 32 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (gidx1+Ridx1);
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (alu0+Ridx2);
        var val0 = select(0.0f, data1_16777216[(alu19+cast0+bitcast<i32>((bitcast<u32>(Ridx1)<<8u))+alu1+bitcast<i32>((bitcast<u32>(Ridx0)<<16u))+-65793)], ((0<(lidx0+gidx0+lidx1+Ridx2))&(alu19<257)&(0<alu18)&(alu18<257)&(0<(gidx2+lidx2+Ridx0))&((lidx2+bitcast<i32>((cast1<<3u))+Ridx0)<257)));
        var alu20 = ((Ridx1*3)+Ridx2+(Ridx0*9));
        var val1 = data2_432[(alu20+27)];
        var val2 = data2_432[(alu20+54)];
        var val3 = data2_432[(alu20+81)];
        var val4 = data2_432[(alu20+108)];
        var val5 = data2_432[(alu20+135)];
        var val6 = data2_432[(alu20+162)];
        var val7 = data2_432[alu20];
        var val8 = data2_432[(alu20+189)];
        var val9 = data2_432[(alu20+216)];
        var val10 = data2_432[(alu20+243)];
        var val11 = data2_432[(alu20+270)];
        var val12 = data2_432[(alu20+297)];
        var val13 = data2_432[(alu20+324)];
        var val14 = data2_432[(alu20+351)];
        var val15 = data2_432[(alu20+378)];
        var val16 = data2_432[(alu20+405)];
        acc0[0] = (acc0[0]+(val0*val7));
        acc0[1] = (acc0[1]+(val0*val1));
        acc0[2] = (acc0[2]+(val0*val2));
        acc0[3] = (acc0[3]+(val0*val3));
        acc0[4] = (acc0[4]+(val0*val4));
        acc0[5] = (acc0[5]+(val0*val5));
        acc0[6] = (acc0[6]+(val0*val6));
        acc0[7] = (acc0[7]+(val0*val8));
        acc0[8] = (acc0[8]+(val0*val9));
        acc0[9] = (acc0[9]+(val0*val10));
        acc0[10] = (acc0[10]+(val0*val11));
        acc0[11] = (acc0[11]+(val0*val12));
        acc0[12] = (acc0[12]+(val0*val13));
        acc0[13] = (acc0[13]+(val0*val14));
        acc0[14] = (acc0[14]+(val0*val15));
        acc0[15] = (acc0[15]+(val0*val16));
      }
    }
  }
  var alu40 = (alu0+cast0+alu1);
  data0_268435456[alu40] = acc0[0];
  data0_268435456[(alu40+16777216)] = acc0[1];
  data0_268435456[(alu40+33554432)] = acc0[2];
  data0_268435456[(alu40+50331648)] = acc0[3];
  data0_268435456[(alu40+67108864)] = acc0[4];
  data0_268435456[(alu40+83886080)] = acc0[5];
  data0_268435456[(alu40+100663296)] = acc0[6];
  data0_268435456[(alu40+117440512)] = acc0[7];
  data0_268435456[(alu40+134217728)] = acc0[8];
  data0_268435456[(alu40+150994944)] = acc0[9];
  data0_268435456[(alu40+167772160)] = acc0[10];
  data0_268435456[(alu40+184549376)] = acc0[11];
  data0_268435456[(alu40+201326592)] = acc0[12];
  data0_268435456[(alu40+218103808)] = acc0[13];
  data0_268435456[(alu40+234881024)] = acc0[14];
  data0_268435456[(alu40+251658240)] = acc0[15];
}`,U=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,64>;
@group(0) @binding(1)var<storage,read_write>data0_1048576:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@compute @workgroup_size(8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 8 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(gidx1);
  var cast2 = bitcast<u32>(lidx1);
  var alu0 = (lidx0+bitcast<i32>((cast0<<13u))+bitcast<i32>((cast1<<11u))+bitcast<i32>((cast2<<8u)));
  var val0 = data1_268435456[alu0];
  var val1 = data1_268435456[(alu0+8)];
  var val2 = data1_268435456[(alu0+16)];
  var val3 = data1_268435456[(alu0+24)];
  var val4 = data1_268435456[(alu0+32)];
  var val5 = data1_268435456[(alu0+40)];
  var val6 = data1_268435456[(alu0+48)];
  var val7 = data1_268435456[(alu0+56)];
  var val8 = data1_268435456[(alu0+64)];
  var val9 = data1_268435456[(alu0+72)];
  var val10 = data1_268435456[(alu0+80)];
  var val11 = data1_268435456[(alu0+88)];
  var val12 = data1_268435456[(alu0+96)];
  var val13 = data1_268435456[(alu0+104)];
  var val14 = data1_268435456[(alu0+112)];
  var val15 = data1_268435456[(alu0+120)];
  var val16 = data1_268435456[(alu0+128)];
  var val17 = data1_268435456[(alu0+136)];
  var val18 = data1_268435456[(alu0+144)];
  var val19 = data1_268435456[(alu0+152)];
  var val20 = data1_268435456[(alu0+160)];
  var val21 = data1_268435456[(alu0+168)];
  var val22 = data1_268435456[(alu0+176)];
  var val23 = data1_268435456[(alu0+184)];
  var val24 = data1_268435456[(alu0+192)];
  var val25 = data1_268435456[(alu0+200)];
  var val26 = data1_268435456[(alu0+208)];
  var val27 = data1_268435456[(alu0+216)];
  var val28 = data1_268435456[(alu0+224)];
  var val29 = data1_268435456[(alu0+232)];
  var val30 = data1_268435456[(alu0+240)];
  var val31 = data1_268435456[(alu0+248)];
  var cast3 = bitcast<i32>((cast2<<3u));
  temp0[(lidx0+cast3)] = (val0+val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15+val16+val17+val18+val19+val20+val21+val22+val23+val24+val25+val26+val27+val28+val29+val30+val31);
  workgroupBarrier();
  acc0[0] = 0.0f;
  for (var Ridx102 = 0; Ridx102 < 8; Ridx102++) {
    var val32 = temp0[(cast3+Ridx102)];
    acc0[0] = (acc0[0]+val32);
  }
  var alu6 = ((bool(lidx0))!=true);
  if (alu6) {
    data0_1048576[(lidx1+bitcast<i32>((cast0<<5u))+bitcast<i32>((cast1<<3u)))] = acc0[0];
  }
}`,s=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_4096:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1048576:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,4>;
  var gidx0 = i32(gindex.x); /* 1024 */
  var cast0 = bitcast<u32>(gidx0);
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 256; Ridx0++) {
    var alu4 = (bitcast<i32>((cast0<<10u))+Ridx0);
    var val0 = data1_1048576[alu4];
    var val1 = data1_1048576[(alu4+256)];
    var val2 = data1_1048576[(alu4+512)];
    var val3 = data1_1048576[(alu4+768)];
    acc0[0] = (acc0[0]+val0);
    acc0[1] = (acc0[1]+val1);
    acc0[2] = (acc0[2]+val2);
    acc0[3] = (acc0[3]+val3);
  }
  var cast1 = bitcast<i32>((cast0<<2u));
  data0_4096[cast1] = acc0[0];
  data0_4096[(cast1+1)] = acc0[1];
  data0_4096[(cast1+2)] = acc0[2];
  data0_4096[(cast1+3)] = acc0[3];
}`,P=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_4096:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,2>;
  var gidx0 = i32(gindex.x); /* 8 */
  var cast0 = bitcast<u32>(gidx0);
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 256; Ridx0++) {
    var alu2 = (bitcast<i32>((cast0<<9u))+Ridx0);
    var val0 = data1_4096[alu2];
    var val1 = data1_4096[(alu2+256)];
    acc0[0] = (acc0[0]+val0);
    acc0[1] = (acc0[1]+val1);
  }
  var cast1 = bitcast<i32>((cast0<<1u));
  data0_16[cast1] = (acc0[0]*5.960464477539063e-08f);
  data0_16[(cast1+1)] = (acc0[1]*5.960464477539063e-08f);
}`,p=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,128>;
@group(0) @binding(1)var<storage,read_write>data0_1048576:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16:array<f32>;
@compute @workgroup_size(16,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 8192 */
  var gidx1 = i32(gindex.y); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(gidx1);
  var cast2 = bitcast<u32>(lidx1);
  var alu0 = (lidx0+bitcast<i32>((cast0<<11u))+bitcast<i32>((cast2<<8u))+bitcast<i32>((cast1<<24u)));
  var val0 = data1_268435456[alu0];
  var val1 = data2_16[gidx1];
  var val2 = data1_268435456[(alu0+16)];
  var val3 = data1_268435456[(alu0+32)];
  var val4 = data1_268435456[(alu0+48)];
  var val5 = data1_268435456[(alu0+64)];
  var val6 = data1_268435456[(alu0+80)];
  var val7 = data1_268435456[(alu0+96)];
  var val8 = data1_268435456[(alu0+112)];
  var val9 = data1_268435456[(alu0+128)];
  var val10 = data1_268435456[(alu0+144)];
  var val11 = data1_268435456[(alu0+160)];
  var val12 = data1_268435456[(alu0+176)];
  var val13 = data1_268435456[(alu0+192)];
  var val14 = data1_268435456[(alu0+208)];
  var val15 = data1_268435456[(alu0+224)];
  var val16 = data1_268435456[(alu0+240)];
  var cast3 = bitcast<i32>((cast2<<4u));
  var alu1 = (val0-val1);
  var alu2 = (val2-val1);
  var alu3 = (val3-val1);
  var alu4 = (val4-val1);
  var alu5 = (val5-val1);
  var alu6 = (val6-val1);
  var alu7 = (val7-val1);
  var alu8 = (val8-val1);
  var alu9 = (val9-val1);
  var alu10 = (val10-val1);
  var alu11 = (val11-val1);
  var alu12 = (val12-val1);
  var alu13 = (val13-val1);
  var alu14 = (val14-val1);
  var alu15 = (val15-val1);
  var alu16 = (val16-val1);
  temp0[(lidx0+cast3)] = ((alu1*alu1)+(alu2*alu2)+(alu3*alu3)+(alu4*alu4)+(alu5*alu5)+(alu6*alu6)+(alu7*alu7)+(alu8*alu8)+(alu9*alu9)+(alu10*alu10)+(alu11*alu11)+(alu12*alu12)+(alu13*alu13)+(alu14*alu14)+(alu15*alu15)+(alu16*alu16));
  workgroupBarrier();
  acc0[0] = 0.0f;
  for (var Ridx103 = 0; Ridx103 < 16; Ridx103++) {
    var val17 = temp0[(cast3+Ridx103)];
    acc0[0] = (acc0[0]+val17);
  }
  var alu22 = ((bool(lidx0))!=true);
  if (alu22) {
    data0_1048576[(lidx1+bitcast<i32>((cast0<<3u))+bitcast<i32>((cast1<<16u)))] = acc0[0];
  }
}`,x=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_4096:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,2>;
  var gidx0 = i32(gindex.x); /* 8 */
  var cast0 = bitcast<u32>(gidx0);
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 256; Ridx0++) {
    var alu2 = (bitcast<i32>((cast0<<9u))+Ridx0);
    var val0 = data1_4096[alu2];
    var val1 = data1_4096[(alu2+256)];
    acc0[0] = (acc0[0]+val0);
    acc0[1] = (acc0[1]+val1);
  }
  var cast1 = bitcast<i32>((cast0<<1u));
  data0_16[cast1] = (1/sqrt(((acc0[0]*5.960464477539063e-08f)+1e-05f)));
  data0_16[(cast1+1)] = (1/sqrt(((acc0[1]*5.960464477539063e-08f)+1e-05f)));
}`,G=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_16:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16:array<f32>;
@group(0) @binding(6)var<storage,read_write>data5_16:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 256 */
  var lidx0 = i32(lindex.x); /* 16 */
  var alu0 = (gidx1&15);
  var alu1 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>((gidx1>>4u))<<5u))+bitcast<i32>((bitcast<u32>(alu0)<<24u)));
  var val0 = data1_268435456[alu1];
  var val1 = data2_16[alu0];
  var val2 = data3_16[alu0];
  var val3 = data4_16[alu0];
  var val4 = data5_16[alu0];
  var alu2 = (alu1+16);
  var val5 = data1_268435456[alu2];
  var alu3 = (((val0-val1)*val2*val3)+val4);
  var alu4 = (((val5-val1)*val2*val3)+val4);
  data0_268435456[alu1] = ((1/(1.0f+exp2(((alu3+(0.044715f*alu3*alu3*alu3))*-2.302208198144325f))))*alu3);
  data0_268435456[alu2] = ((1/(1.0f+exp2(((alu4+(0.044715f*alu4*alu4*alu4))*-2.302208198144325f))))*alu4);
}`,L=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 2 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 32 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*3));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (Ridx2*3);
        var alu20 = (gidx1+alu19);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu21 = (alu0+(Ridx3*3));
          var val0 = select(0.0f, data1_268435456[(alu21+cast0+(Ridx2*768)+alu1+(Ridx1*196608)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-197379)], ((2<alu21)&(alu21<259)&(2<alu20)&(alu20<259)&(2<alu18)&(alu18<259)));
          var alu22 = (alu19+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[alu22];
          var val2 = data2_6912[(alu22+432)];
          var val3 = data2_6912[(alu22+864)];
          var val4 = data2_6912[(alu22+1296)];
          var val5 = data2_6912[(alu22+1728)];
          var val6 = data2_6912[(alu22+2160)];
          var val7 = data2_6912[(alu22+2592)];
          var val8 = data2_6912[(alu22+3024)];
          var val9 = data2_6912[(alu22+3456)];
          var val10 = data2_6912[(alu22+3888)];
          var val11 = data2_6912[(alu22+4320)];
          var val12 = data2_6912[(alu22+4752)];
          var val13 = data2_6912[(alu22+5184)];
          var val14 = data2_6912[(alu22+5616)];
          var val15 = data2_6912[(alu22+6048)];
          var val16 = data2_6912[(alu22+6480)];
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val0*val2));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val0*val5));
          acc0[5] = (acc0[5]+(val0*val6));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu43 = (alu0+cast0+alu1);
  data0_268435456[alu43] = acc0[0];
  data0_268435456[(alu43+16777216)] = acc0[1];
  data0_268435456[(alu43+33554432)] = acc0[2];
  data0_268435456[(alu43+50331648)] = acc0[3];
  data0_268435456[(alu43+67108864)] = acc0[4];
  data0_268435456[(alu43+83886080)] = acc0[5];
  data0_268435456[(alu43+100663296)] = acc0[6];
  data0_268435456[(alu43+117440512)] = acc0[7];
  data0_268435456[(alu43+134217728)] = acc0[8];
  data0_268435456[(alu43+150994944)] = acc0[9];
  data0_268435456[(alu43+167772160)] = acc0[10];
  data0_268435456[(alu43+184549376)] = acc0[11];
  data0_268435456[(alu43+201326592)] = acc0[12];
  data0_268435456[(alu43+218103808)] = acc0[13];
  data0_268435456[(alu43+234881024)] = acc0[14];
  data0_268435456[(alu43+251658240)] = acc0[15];
}`,I=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 2 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 32 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*5));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx1+(Ridx2*5));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu20 = (alu0+(Ridx3*5));
          var val0 = select(0.0f, data1_268435456[(alu20+cast0+(Ridx2*1280)+alu1+(Ridx1*327680)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-328965)], ((4<alu20)&(alu20<261)&(4<alu19)&(alu19<261)&(4<alu18)&(alu18<261)));
          var alu21 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[alu21];
          var val2 = data2_6912[(alu21+432)];
          var val3 = data2_6912[(alu21+864)];
          var val4 = data2_6912[(alu21+1296)];
          var val5 = data2_6912[(alu21+1728)];
          var val6 = data2_6912[(alu21+2160)];
          var val7 = data2_6912[(alu21+2592)];
          var val8 = data2_6912[(alu21+3024)];
          var val9 = data2_6912[(alu21+3456)];
          var val10 = data2_6912[(alu21+3888)];
          var val11 = data2_6912[(alu21+4320)];
          var val12 = data2_6912[(alu21+4752)];
          var val13 = data2_6912[(alu21+5184)];
          var val14 = data2_6912[(alu21+5616)];
          var val15 = data2_6912[(alu21+6048)];
          var val16 = data2_6912[(alu21+6480)];
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val0*val2));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val0*val5));
          acc0[5] = (acc0[5]+(val0*val6));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu42 = (alu0+cast0+alu1);
  data0_268435456[alu42] = acc0[0];
  data0_268435456[(alu42+16777216)] = acc0[1];
  data0_268435456[(alu42+33554432)] = acc0[2];
  data0_268435456[(alu42+50331648)] = acc0[3];
  data0_268435456[(alu42+67108864)] = acc0[4];
  data0_268435456[(alu42+83886080)] = acc0[5];
  data0_268435456[(alu42+100663296)] = acc0[6];
  data0_268435456[(alu42+117440512)] = acc0[7];
  data0_268435456[(alu42+134217728)] = acc0[8];
  data0_268435456[(alu42+150994944)] = acc0[9];
  data0_268435456[(alu42+167772160)] = acc0[10];
  data0_268435456[(alu42+184549376)] = acc0[11];
  data0_268435456[(alu42+201326592)] = acc0[12];
  data0_268435456[(alu42+218103808)] = acc0[13];
  data0_268435456[(alu42+234881024)] = acc0[14];
  data0_268435456[(alu42+251658240)] = acc0[15];
}`,z=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 2 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 32 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*7));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx1+(Ridx2*7));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu20 = (alu0+(Ridx3*7));
          var val0 = select(0.0f, data1_268435456[(alu20+cast0+(Ridx2*1792)+alu1+(Ridx1*458752)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-460551)], ((6<alu20)&(alu20<263)&(6<alu19)&(alu19<263)&(6<alu18)&(alu18<263)));
          var alu21 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[alu21];
          var val2 = data2_6912[(alu21+432)];
          var val3 = data2_6912[(alu21+864)];
          var val4 = data2_6912[(alu21+1296)];
          var val5 = data2_6912[(alu21+1728)];
          var val6 = data2_6912[(alu21+2160)];
          var val7 = data2_6912[(alu21+2592)];
          var val8 = data2_6912[(alu21+3024)];
          var val9 = data2_6912[(alu21+3456)];
          var val10 = data2_6912[(alu21+3888)];
          var val11 = data2_6912[(alu21+4320)];
          var val12 = data2_6912[(alu21+4752)];
          var val13 = data2_6912[(alu21+5184)];
          var val14 = data2_6912[(alu21+5616)];
          var val15 = data2_6912[(alu21+6048)];
          var val16 = data2_6912[(alu21+6480)];
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val0*val2));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val0*val5));
          acc0[5] = (acc0[5]+(val0*val6));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu42 = (alu0+cast0+alu1);
  data0_268435456[alu42] = acc0[0];
  data0_268435456[(alu42+16777216)] = acc0[1];
  data0_268435456[(alu42+33554432)] = acc0[2];
  data0_268435456[(alu42+50331648)] = acc0[3];
  data0_268435456[(alu42+67108864)] = acc0[4];
  data0_268435456[(alu42+83886080)] = acc0[5];
  data0_268435456[(alu42+100663296)] = acc0[6];
  data0_268435456[(alu42+117440512)] = acc0[7];
  data0_268435456[(alu42+134217728)] = acc0[8];
  data0_268435456[(alu42+150994944)] = acc0[9];
  data0_268435456[(alu42+167772160)] = acc0[10];
  data0_268435456[(alu42+184549376)] = acc0[11];
  data0_268435456[(alu42+201326592)] = acc0[12];
  data0_268435456[(alu42+218103808)] = acc0[13];
  data0_268435456[(alu42+234881024)] = acc0[14];
  data0_268435456[(alu42+251658240)] = acc0[15];
}`,k=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 2 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 32 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*13));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx1+(Ridx2*13));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu20 = (alu0+(Ridx3*13));
          var val0 = select(0.0f, data1_268435456[(alu20+cast0+(Ridx2*3328)+alu1+(Ridx1*851968)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-855309)], ((12<alu20)&(alu20<269)&(12<alu19)&(alu19<269)&(12<alu18)&(alu18<269)));
          var alu21 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[alu21];
          var val2 = data2_6912[(alu21+432)];
          var val3 = data2_6912[(alu21+864)];
          var val4 = data2_6912[(alu21+1296)];
          var val5 = data2_6912[(alu21+1728)];
          var val6 = data2_6912[(alu21+2160)];
          var val7 = data2_6912[(alu21+2592)];
          var val8 = data2_6912[(alu21+3024)];
          var val9 = data2_6912[(alu21+3456)];
          var val10 = data2_6912[(alu21+3888)];
          var val11 = data2_6912[(alu21+4320)];
          var val12 = data2_6912[(alu21+4752)];
          var val13 = data2_6912[(alu21+5184)];
          var val14 = data2_6912[(alu21+5616)];
          var val15 = data2_6912[(alu21+6048)];
          var val16 = data2_6912[(alu21+6480)];
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val0*val2));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val0*val5));
          acc0[5] = (acc0[5]+(val0*val6));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu42 = (alu0+cast0+alu1);
  data0_268435456[alu42] = acc0[0];
  data0_268435456[(alu42+16777216)] = acc0[1];
  data0_268435456[(alu42+33554432)] = acc0[2];
  data0_268435456[(alu42+50331648)] = acc0[3];
  data0_268435456[(alu42+67108864)] = acc0[4];
  data0_268435456[(alu42+83886080)] = acc0[5];
  data0_268435456[(alu42+100663296)] = acc0[6];
  data0_268435456[(alu42+117440512)] = acc0[7];
  data0_268435456[(alu42+134217728)] = acc0[8];
  data0_268435456[(alu42+150994944)] = acc0[9];
  data0_268435456[(alu42+167772160)] = acc0[10];
  data0_268435456[(alu42+184549376)] = acc0[11];
  data0_268435456[(alu42+201326592)] = acc0[12];
  data0_268435456[(alu42+218103808)] = acc0[13];
  data0_268435456[(alu42+234881024)] = acc0[14];
  data0_268435456[(alu42+251658240)] = acc0[15];
}`,N=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 2 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 32 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*19));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx1+(Ridx2*19));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu20 = (alu0+(Ridx3*19));
          var val0 = select(0.0f, data1_268435456[(alu20+cast0+(Ridx2*4864)+alu1+(Ridx1*1245184)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-1250067)], ((18<alu20)&(alu20<275)&(18<alu19)&(alu19<275)&(18<alu18)&(alu18<275)));
          var alu21 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[alu21];
          var val2 = data2_6912[(alu21+432)];
          var val3 = data2_6912[(alu21+864)];
          var val4 = data2_6912[(alu21+1296)];
          var val5 = data2_6912[(alu21+1728)];
          var val6 = data2_6912[(alu21+2160)];
          var val7 = data2_6912[(alu21+2592)];
          var val8 = data2_6912[(alu21+3024)];
          var val9 = data2_6912[(alu21+3456)];
          var val10 = data2_6912[(alu21+3888)];
          var val11 = data2_6912[(alu21+4320)];
          var val12 = data2_6912[(alu21+4752)];
          var val13 = data2_6912[(alu21+5184)];
          var val14 = data2_6912[(alu21+5616)];
          var val15 = data2_6912[(alu21+6048)];
          var val16 = data2_6912[(alu21+6480)];
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val0*val2));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val0*val5));
          acc0[5] = (acc0[5]+(val0*val6));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu42 = (alu0+cast0+alu1);
  data0_268435456[alu42] = acc0[0];
  data0_268435456[(alu42+16777216)] = acc0[1];
  data0_268435456[(alu42+33554432)] = acc0[2];
  data0_268435456[(alu42+50331648)] = acc0[3];
  data0_268435456[(alu42+67108864)] = acc0[4];
  data0_268435456[(alu42+83886080)] = acc0[5];
  data0_268435456[(alu42+100663296)] = acc0[6];
  data0_268435456[(alu42+117440512)] = acc0[7];
  data0_268435456[(alu42+134217728)] = acc0[8];
  data0_268435456[(alu42+150994944)] = acc0[9];
  data0_268435456[(alu42+167772160)] = acc0[10];
  data0_268435456[(alu42+184549376)] = acc0[11];
  data0_268435456[(alu42+201326592)] = acc0[12];
  data0_268435456[(alu42+218103808)] = acc0[13];
  data0_268435456[(alu42+234881024)] = acc0[14];
  data0_268435456[(alu42+251658240)] = acc0[15];
}`,V=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 64 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx0)<<8u));
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<18u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast1<<2u))+(Ridx1*31));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx0+(Ridx2*31));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu20 = (alu0+(Ridx3*31));
          var val0 = select(0.0f, data1_268435456[(alu20+cast0+(Ridx2*7936)+alu1+(Ridx1*2031616)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-2039583)], ((30<alu20)&(alu20<287)&(30<alu19)&(alu19<287)&(30<alu18)&(alu18<287)));
          var alu21 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[(alu21+432)];
          var val2 = data2_6912[alu21];
          var val3 = data2_6912[(alu21+864)];
          var val4 = data2_6912[(alu21+1296)];
          var val5 = data2_6912[(alu21+1728)];
          var val6 = data2_6912[(alu21+2160)];
          var val7 = data2_6912[(alu21+2592)];
          var val8 = data2_6912[(alu21+3024)];
          var val9 = data2_6912[(alu21+3456)];
          var val10 = data2_6912[(alu21+3888)];
          var val11 = data2_6912[(alu21+4320)];
          var val12 = data2_6912[(alu21+4752)];
          var val13 = data2_6912[(alu21+5184)];
          var val14 = data2_6912[(alu21+5616)];
          var val15 = data2_6912[(alu21+6048)];
          var val16 = data2_6912[(alu21+6480)];
          acc0[0] = (acc0[0]+(val0*val2));
          acc0[1] = (acc0[1]+(val0*val1));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val0*val5));
          acc0[5] = (acc0[5]+(val0*val6));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu42 = (alu0+cast0+alu1);
  data0_268435456[alu42] = acc0[0];
  data0_268435456[(alu42+16777216)] = acc0[1];
  data0_268435456[(alu42+33554432)] = acc0[2];
  data0_268435456[(alu42+50331648)] = acc0[3];
  data0_268435456[(alu42+67108864)] = acc0[4];
  data0_268435456[(alu42+83886080)] = acc0[5];
  data0_268435456[(alu42+100663296)] = acc0[6];
  data0_268435456[(alu42+117440512)] = acc0[7];
  data0_268435456[(alu42+134217728)] = acc0[8];
  data0_268435456[(alu42+150994944)] = acc0[9];
  data0_268435456[(alu42+167772160)] = acc0[10];
  data0_268435456[(alu42+184549376)] = acc0[11];
  data0_268435456[(alu42+201326592)] = acc0[12];
  data0_268435456[(alu42+218103808)] = acc0[13];
  data0_268435456[(alu42+234881024)] = acc0[14];
  data0_268435456[(alu42+251658240)] = acc0[15];
}`,H=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_268435456:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6912:array<f32>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 8 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<5u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<21u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu18 = (gidx1+Ridx2);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu19 = (alu0+Ridx3);
          var val0 = select(0.0f, data1_268435456[(alu19+cast0+bitcast<i32>((bitcast<u32>(Ridx2)<<8u))+alu1+bitcast<i32>((bitcast<u32>(Ridx1)<<16u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-65793)], ((0<(lidx0+gidx0+lidx1+Ridx3))&(alu19<257)&(0<alu18)&(alu18<257)&(0<(gidx2+lidx2+Ridx1))&((lidx2+bitcast<i32>((cast1<<5u))+Ridx1)<257)));
          var alu20 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_6912[(alu20+432)];
          var val2 = data2_6912[(alu20+864)];
          var val3 = data2_6912[(alu20+1296)];
          var val4 = data2_6912[(alu20+1728)];
          var val5 = data2_6912[(alu20+2160)];
          var val6 = data2_6912[alu20];
          var val7 = data2_6912[(alu20+2592)];
          var val8 = data2_6912[(alu20+3024)];
          var val9 = data2_6912[(alu20+3456)];
          var val10 = data2_6912[(alu20+3888)];
          var val11 = data2_6912[(alu20+4320)];
          var val12 = data2_6912[(alu20+4752)];
          var val13 = data2_6912[(alu20+5184)];
          var val14 = data2_6912[(alu20+5616)];
          var val15 = data2_6912[(alu20+6048)];
          var val16 = data2_6912[(alu20+6480)];
          acc0[0] = (acc0[0]+(val0*val6));
          acc0[1] = (acc0[1]+(val0*val1));
          acc0[2] = (acc0[2]+(val0*val2));
          acc0[3] = (acc0[3]+(val0*val3));
          acc0[4] = (acc0[4]+(val0*val4));
          acc0[5] = (acc0[5]+(val0*val5));
          acc0[6] = (acc0[6]+(val0*val7));
          acc0[7] = (acc0[7]+(val0*val8));
          acc0[8] = (acc0[8]+(val0*val9));
          acc0[9] = (acc0[9]+(val0*val10));
          acc0[10] = (acc0[10]+(val0*val11));
          acc0[11] = (acc0[11]+(val0*val12));
          acc0[12] = (acc0[12]+(val0*val13));
          acc0[13] = (acc0[13]+(val0*val14));
          acc0[14] = (acc0[14]+(val0*val15));
          acc0[15] = (acc0[15]+(val0*val16));
        }
      }
    }
  }
  var alu41 = (alu0+cast0+alu1);
  data0_268435456[alu41] = acc0[0];
  data0_268435456[(alu41+16777216)] = acc0[1];
  data0_268435456[(alu41+33554432)] = acc0[2];
  data0_268435456[(alu41+50331648)] = acc0[3];
  data0_268435456[(alu41+67108864)] = acc0[4];
  data0_268435456[(alu41+83886080)] = acc0[5];
  data0_268435456[(alu41+100663296)] = acc0[6];
  data0_268435456[(alu41+117440512)] = acc0[7];
  data0_268435456[(alu41+134217728)] = acc0[8];
  data0_268435456[(alu41+150994944)] = acc0[9];
  data0_268435456[(alu41+167772160)] = acc0[10];
  data0_268435456[(alu41+184549376)] = acc0[11];
  data0_268435456[(alu41+201326592)] = acc0[12];
  data0_268435456[(alu41+218103808)] = acc0[13];
  data0_268435456[(alu41+234881024)] = acc0[14];
  data0_268435456[(alu41+251658240)] = acc0[15];
}`,K=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_301989888:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_268435456:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_288:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_18:array<f32>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,36>;
  var gidx0 = i32(gindex.x); /* 8192 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<11u))+bitcast<i32>((bitcast<u32>(lidx2)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
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
  acc0[12] = 0.0f;
  acc0[13] = 0.0f;
  acc0[14] = 0.0f;
  acc0[15] = 0.0f;
  acc0[16] = 0.0f;
  acc0[17] = 0.0f;
  acc0[18] = 0.0f;
  acc0[19] = 0.0f;
  acc0[20] = 0.0f;
  acc0[21] = 0.0f;
  acc0[22] = 0.0f;
  acc0[23] = 0.0f;
  acc0[24] = 0.0f;
  acc0[25] = 0.0f;
  acc0[26] = 0.0f;
  acc0[27] = 0.0f;
  acc0[28] = 0.0f;
  acc0[29] = 0.0f;
  acc0[30] = 0.0f;
  acc0[31] = 0.0f;
  acc0[32] = 0.0f;
  acc0[33] = 0.0f;
  acc0[34] = 0.0f;
  acc0[35] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    var alu37 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_268435456[alu37];
    var val1 = data2_288[(Ridx0+32)];
    var val2 = data2_288[Ridx0];
    var val3 = data1_268435456[(alu37+16)];
    var val4 = data2_288[(Ridx0+64)];
    var val5 = data2_288[(Ridx0+96)];
    var val6 = data2_288[(Ridx0+128)];
    var val7 = data2_288[(Ridx0+160)];
    var val8 = data2_288[(Ridx0+192)];
    var val9 = data2_288[(Ridx0+256)];
    var val10 = data2_288[(Ridx0+16)];
    var val11 = data2_288[(Ridx0+48)];
    var val12 = data2_288[(Ridx0+80)];
    var val13 = data2_288[(Ridx0+112)];
    var val14 = data2_288[(Ridx0+144)];
    var val15 = data2_288[(Ridx0+176)];
    var val16 = data2_288[(Ridx0+224)];
    var val17 = data2_288[(Ridx0+208)];
    var val18 = data2_288[(Ridx0+240)];
    var val19 = data2_288[(Ridx0+272)];
    acc0[0] = (acc0[0]+(val0*val2));
    acc0[1] = (acc0[1]+(val3*val2));
    acc0[2] = (acc0[2]+(val0*val1));
    acc0[3] = (acc0[3]+(val3*val1));
    acc0[4] = (acc0[4]+(val0*val4));
    acc0[5] = (acc0[5]+(val3*val4));
    acc0[6] = (acc0[6]+(val0*val5));
    acc0[7] = (acc0[7]+(val3*val5));
    acc0[8] = (acc0[8]+(val0*val6));
    acc0[9] = (acc0[9]+(val3*val6));
    acc0[10] = (acc0[10]+(val0*val7));
    acc0[11] = (acc0[11]+(val3*val7));
    acc0[12] = (acc0[12]+(val0*val8));
    acc0[13] = (acc0[13]+(val3*val8));
    acc0[14] = (acc0[14]+(val0*val16));
    acc0[15] = (acc0[15]+(val3*val16));
    acc0[16] = (acc0[16]+(val0*val9));
    acc0[17] = (acc0[17]+(val3*val9));
    acc0[18] = (acc0[18]+(val0*val10));
    acc0[19] = (acc0[19]+(val3*val10));
    acc0[20] = (acc0[20]+(val0*val11));
    acc0[21] = (acc0[21]+(val3*val11));
    acc0[22] = (acc0[22]+(val0*val12));
    acc0[23] = (acc0[23]+(val3*val12));
    acc0[24] = (acc0[24]+(val0*val13));
    acc0[25] = (acc0[25]+(val3*val13));
    acc0[26] = (acc0[26]+(val0*val14));
    acc0[27] = (acc0[27]+(val3*val14));
    acc0[28] = (acc0[28]+(val0*val15));
    acc0[29] = (acc0[29]+(val3*val15));
    acc0[30] = (acc0[30]+(val0*val17));
    acc0[31] = (acc0[31]+(val3*val17));
    acc0[32] = (acc0[32]+(val0*val18));
    acc0[33] = (acc0[33]+(val3*val18));
    acc0[34] = (acc0[34]+(val0*val19));
    acc0[35] = (acc0[35]+(val3*val19));
  }
  var val20 = data3_18[0];
  var val21 = data3_18[1];
  var val22 = data3_18[2];
  var val23 = data3_18[3];
  var val24 = data3_18[4];
  var val25 = data3_18[5];
  var val26 = data3_18[6];
  var val27 = data3_18[7];
  var val28 = data3_18[8];
  var val29 = data3_18[9];
  var val30 = data3_18[10];
  var val31 = data3_18[11];
  var val32 = data3_18[12];
  var val33 = data3_18[13];
  var val34 = data3_18[14];
  var val35 = data3_18[15];
  var val36 = data3_18[16];
  var val37 = data3_18[17];
  data0_301989888[alu0] = (acc0[0]+val20);
  data0_301989888[(alu0+16)] = (acc0[1]+val20);
  data0_301989888[(alu0+16777216)] = (acc0[18]+val21);
  data0_301989888[(alu0+16777232)] = (acc0[19]+val21);
  data0_301989888[(alu0+33554432)] = (acc0[2]+val22);
  data0_301989888[(alu0+33554448)] = (acc0[3]+val22);
  data0_301989888[(alu0+50331648)] = (acc0[20]+val23);
  data0_301989888[(alu0+50331664)] = (acc0[21]+val23);
  data0_301989888[(alu0+67108864)] = (acc0[4]+val24);
  data0_301989888[(alu0+67108880)] = (acc0[5]+val24);
  data0_301989888[(alu0+83886080)] = (acc0[22]+val25);
  data0_301989888[(alu0+83886096)] = (acc0[23]+val25);
  data0_301989888[(alu0+100663296)] = (acc0[6]+val26);
  data0_301989888[(alu0+100663312)] = (acc0[7]+val26);
  data0_301989888[(alu0+117440512)] = (acc0[24]+val27);
  data0_301989888[(alu0+117440528)] = (acc0[25]+val27);
  data0_301989888[(alu0+134217728)] = (acc0[8]+val28);
  data0_301989888[(alu0+134217744)] = (acc0[9]+val28);
  data0_301989888[(alu0+150994944)] = (acc0[26]+val29);
  data0_301989888[(alu0+150994960)] = (acc0[27]+val29);
  data0_301989888[(alu0+167772160)] = (acc0[10]+val30);
  data0_301989888[(alu0+167772176)] = (acc0[11]+val30);
  data0_301989888[(alu0+184549376)] = (acc0[28]+val31);
  data0_301989888[(alu0+184549392)] = (acc0[29]+val31);
  data0_301989888[(alu0+201326592)] = (acc0[12]+val32);
  data0_301989888[(alu0+201326608)] = (acc0[13]+val32);
  data0_301989888[(alu0+218103808)] = (acc0[30]+val33);
  data0_301989888[(alu0+218103824)] = (acc0[31]+val33);
  data0_301989888[(alu0+234881024)] = (acc0[14]+val34);
  data0_301989888[(alu0+234881040)] = (acc0[15]+val34);
  data0_301989888[(alu0+251658240)] = (acc0[32]+val35);
  data0_301989888[(alu0+251658256)] = (acc0[33]+val35);
  data0_301989888[(alu0+268435456)] = (acc0[16]+val36);
  data0_301989888[(alu0+268435472)] = (acc0[17]+val36);
  data0_301989888[(alu0+285212672)] = (acc0[34]+val37);
  data0_301989888[(alu0+285212688)] = (acc0[35]+val37);
}`,Q=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_301989888:array<f32>;
@compute @workgroup_size(8,16,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 4096 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 8 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<12u))+bitcast<i32>((bitcast<u32>(lidx2)<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
  var val0 = data1_301989888[alu0];
  var alu1 = (alu0+1);
  var val1 = data1_301989888[alu1];
  var alu2 = (alu0+2);
  var val2 = data1_301989888[alu2];
  var alu3 = (alu0+3);
  var val3 = data1_301989888[alu3];
  var val4 = data1_301989888[(alu0+16777216)];
  var val5 = data1_301989888[(alu0+16777217)];
  var val6 = data1_301989888[(alu0+16777218)];
  var val7 = data1_301989888[(alu0+16777219)];
  var val8 = data1_301989888[(alu0+33554432)];
  var val9 = data1_301989888[(alu0+33554433)];
  var val10 = data1_301989888[(alu0+33554434)];
  var val11 = data1_301989888[(alu0+33554435)];
  var val12 = data1_301989888[(alu0+50331648)];
  var val13 = data1_301989888[(alu0+50331649)];
  var val14 = data1_301989888[(alu0+50331650)];
  var val15 = data1_301989888[(alu0+50331651)];
  var val16 = data1_301989888[(alu0+67108864)];
  var val17 = data1_301989888[(alu0+67108865)];
  var val18 = data1_301989888[(alu0+67108866)];
  var val19 = data1_301989888[(alu0+67108867)];
  var val20 = data1_301989888[(alu0+83886080)];
  var val21 = data1_301989888[(alu0+83886081)];
  var val22 = data1_301989888[(alu0+83886082)];
  var val23 = data1_301989888[(alu0+83886083)];
  var val24 = data1_301989888[(alu0+100663296)];
  var val25 = data1_301989888[(alu0+100663297)];
  var val26 = data1_301989888[(alu0+100663298)];
  var val27 = data1_301989888[(alu0+100663299)];
  var val28 = data1_301989888[(alu0+117440512)];
  var val29 = data1_301989888[(alu0+117440513)];
  var val30 = data1_301989888[(alu0+117440514)];
  var val31 = data1_301989888[(alu0+117440515)];
  var val32 = data1_301989888[(alu0+134217728)];
  var val33 = data1_301989888[(alu0+134217729)];
  var val34 = data1_301989888[(alu0+134217730)];
  var val35 = data1_301989888[(alu0+134217731)];
  var val36 = data1_301989888[(alu0+150994944)];
  var val37 = data1_301989888[(alu0+150994945)];
  var val38 = data1_301989888[(alu0+150994946)];
  var val39 = data1_301989888[(alu0+150994947)];
  var val40 = data1_301989888[(alu0+167772160)];
  var val41 = data1_301989888[(alu0+167772161)];
  var val42 = data1_301989888[(alu0+167772162)];
  var val43 = data1_301989888[(alu0+167772163)];
  var val44 = data1_301989888[(alu0+184549376)];
  var val45 = data1_301989888[(alu0+184549377)];
  var val46 = data1_301989888[(alu0+184549378)];
  var val47 = data1_301989888[(alu0+184549379)];
  var val48 = data1_301989888[(alu0+201326592)];
  var val49 = data1_301989888[(alu0+201326593)];
  var val50 = data1_301989888[(alu0+201326594)];
  var val51 = data1_301989888[(alu0+201326595)];
  var val52 = data1_301989888[(alu0+218103808)];
  var val53 = data1_301989888[(alu0+218103809)];
  var val54 = data1_301989888[(alu0+218103810)];
  var val55 = data1_301989888[(alu0+218103811)];
  var val56 = data1_301989888[(alu0+234881024)];
  var val57 = data1_301989888[(alu0+234881025)];
  var val58 = data1_301989888[(alu0+234881026)];
  var val59 = data1_301989888[(alu0+234881027)];
  var val60 = data1_301989888[(alu0+251658240)];
  var val61 = data1_301989888[(alu0+251658241)];
  var val62 = data1_301989888[(alu0+251658242)];
  var val63 = data1_301989888[(alu0+251658243)];
  var val64 = data1_301989888[(alu0+268435456)];
  var val65 = data1_301989888[(alu0+268435457)];
  var val66 = data1_301989888[(alu0+268435458)];
  var val67 = data1_301989888[(alu0+268435459)];
  var val68 = data1_301989888[(alu0+285212672)];
  var val69 = data1_301989888[(alu0+285212673)];
  var val70 = data1_301989888[(alu0+285212674)];
  var val71 = data1_301989888[(alu0+285212675)];
  var alu4 = select(val0,val4,(val0<val4));
  var alu5 = select(val1,val5,(val1<val5));
  var alu6 = select(val2,val6,(val2<val6));
  var alu7 = select(val3,val7,(val3<val7));
  var alu8 = select(alu4,val8,(alu4<val8));
  var alu9 = select(alu5,val9,(alu5<val9));
  var alu10 = select(alu6,val10,(alu6<val10));
  var alu11 = select(alu7,val11,(alu7<val11));
  var alu12 = select(alu8,val12,(alu8<val12));
  var alu13 = select(alu9,val13,(alu9<val13));
  var alu14 = select(alu10,val14,(alu10<val14));
  var alu15 = select(alu11,val15,(alu11<val15));
  var alu16 = select(alu12,val16,(alu12<val16));
  var alu17 = select(alu13,val17,(alu13<val17));
  var alu18 = select(alu14,val18,(alu14<val18));
  var alu19 = select(alu15,val19,(alu15<val19));
  var alu20 = select(alu16,val20,(alu16<val20));
  var alu21 = select(alu17,val21,(alu17<val21));
  var alu22 = select(alu18,val22,(alu18<val22));
  var alu23 = select(alu19,val23,(alu19<val23));
  var alu24 = select(alu20,val24,(alu20<val24));
  var alu25 = select(alu21,val25,(alu21<val25));
  var alu26 = select(alu22,val26,(alu22<val26));
  var alu27 = select(alu23,val27,(alu23<val27));
  var alu28 = select(alu24,val28,(alu24<val28));
  var alu29 = select(alu25,val29,(alu25<val29));
  var alu30 = select(alu26,val30,(alu26<val30));
  var alu31 = select(alu27,val31,(alu27<val31));
  var alu32 = select(alu28,val32,(alu28<val32));
  var alu33 = select(alu29,val33,(alu29<val33));
  var alu34 = select(alu30,val34,(alu30<val34));
  var alu35 = select(alu31,val35,(alu31<val35));
  var alu36 = select(alu32,val36,(alu32<val36));
  var alu37 = select(alu33,val37,(alu33<val37));
  var alu38 = select(alu34,val38,(alu34<val38));
  var alu39 = select(alu35,val39,(alu35<val39));
  var alu40 = select(alu36,val40,(alu36<val40));
  var alu41 = select(alu37,val41,(alu37<val41));
  var alu42 = select(alu38,val42,(alu38<val42));
  var alu43 = select(alu39,val43,(alu39<val43));
  var alu44 = select(alu40,val44,(alu40<val44));
  var alu45 = select(alu41,val45,(alu41<val45));
  var alu46 = select(alu42,val46,(alu42<val46));
  var alu47 = select(alu43,val47,(alu43<val47));
  var alu48 = select(alu44,val48,(alu44<val48));
  var alu49 = select(alu45,val49,(alu45<val49));
  var alu50 = select(alu46,val50,(alu46<val50));
  var alu51 = select(alu47,val51,(alu47<val51));
  var alu52 = select(alu48,val52,(alu48<val52));
  var alu53 = select(alu49,val53,(alu49<val53));
  var alu54 = select(alu50,val54,(alu50<val54));
  var alu55 = select(alu51,val55,(alu51<val55));
  var alu56 = select(alu52,val56,(alu52<val56));
  var alu57 = select(alu53,val57,(alu53<val57));
  var alu58 = select(alu54,val58,(alu54<val58));
  var alu59 = select(alu55,val59,(alu55<val59));
  var alu60 = select(alu56,val60,(alu56<val60));
  var alu61 = select(alu57,val61,(alu57<val61));
  var alu62 = select(alu58,val62,(alu58<val62));
  var alu63 = select(alu59,val63,(alu59<val63));
  var alu64 = select(alu60,val64,(alu60<val64));
  var alu65 = select(alu61,val65,(alu61<val65));
  var alu66 = select(alu62,val66,(alu62<val66));
  var alu67 = select(alu63,val67,(alu63<val67));
  var alu68 = select(alu64,val68,(alu64<val68));
  var alu69 = select(alu65,val69,(alu65<val69));
  var alu70 = select(alu66,val70,(alu66<val70));
  var alu71 = select(alu67,val71,(alu67<val71));
  data0_16777216[alu0] = alu68;
  data0_16777216[alu1] = alu69;
  data0_16777216[alu2] = alu70;
  data0_16777216[alu3] = alu71;
}`,X=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_301989888:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u)));
  var val0 = data1_301989888[alu0];
  var val1 = data2_16777216[alu0];
  var alu1 = (alu0+32);
  var val2 = data1_301989888[alu1];
  var val3 = data1_301989888[(alu0+16777216)];
  var val4 = data1_301989888[(alu0+16777248)];
  var val5 = data1_301989888[(alu0+33554432)];
  var val6 = data1_301989888[(alu0+50331648)];
  var val7 = data1_301989888[(alu0+67108864)];
  var val8 = data1_301989888[(alu0+67108896)];
  var val9 = data1_301989888[(alu0+83886080)];
  var val10 = data1_301989888[(alu0+83886112)];
  var val11 = data1_301989888[(alu0+100663296)];
  var val12 = data1_301989888[(alu0+100663328)];
  var val13 = data1_301989888[(alu0+117440512)];
  var val14 = data1_301989888[(alu0+117440544)];
  var val15 = data1_301989888[(alu0+134217728)];
  var val16 = data1_301989888[(alu0+134217760)];
  var val17 = data1_301989888[(alu0+150994944)];
  var val18 = data1_301989888[(alu0+150994976)];
  var val19 = data1_301989888[(alu0+167772160)];
  var val20 = data1_301989888[(alu0+167772192)];
  var val21 = data1_301989888[(alu0+184549376)];
  var val22 = data1_301989888[(alu0+184549408)];
  var val23 = data1_301989888[(alu0+201326592)];
  var val24 = data1_301989888[(alu0+201326624)];
  var val25 = data1_301989888[(alu0+218103808)];
  var val26 = data1_301989888[(alu0+218103840)];
  var val27 = data1_301989888[(alu0+234881024)];
  var val28 = data1_301989888[(alu0+234881056)];
  var val29 = data1_301989888[(alu0+251658240)];
  var val30 = data1_301989888[(alu0+251658272)];
  var val31 = data1_301989888[(alu0+268435456)];
  var val32 = data1_301989888[(alu0+268435488)];
  var val33 = data1_301989888[(alu0+285212672)];
  var val34 = data2_16777216[alu1];
  var val35 = data1_301989888[(alu0+33554464)];
  var val36 = data1_301989888[(alu0+50331680)];
  var val37 = data1_301989888[(alu0+285212704)];
  var cast0 = (i32((val33==val1)));
  var cast1 = (i32((val37==val34)));
  var cast2 = bitcast<i32>((bitcast<u32>((i32((val5==val1))))<<4u));
  var cast3 = bitcast<i32>((bitcast<u32>((i32((val19==val1))))<<3u));
  var cast4 = bitcast<i32>((bitcast<u32>((i32((val27==val1))))<<2u));
  var cast5 = bitcast<i32>((bitcast<u32>((i32((val31==val1))))<<1u));
  var alu2 = ((i32((val0==val1)))*18);
  var alu3 = ((i32((val3==val1)))*17);
  var alu4 = ((i32((val6==val1)))*15);
  var alu5 = ((i32((val7==val1)))*14);
  var alu6 = ((i32((val9==val1)))*13);
  var alu7 = ((i32((val11==val1)))*12);
  var alu8 = ((i32((val13==val1)))*11);
  var alu9 = ((i32((val15==val1)))*10);
  var alu10 = ((i32((val17==val1)))*9);
  var alu11 = ((i32((val21==val1)))*7);
  var alu12 = ((i32((val23==val1)))*6);
  var alu13 = ((i32((val25==val1)))*5);
  var alu14 = ((i32((val29==val1)))*3);
  var alu15 = select(alu2,alu3,(alu2<alu3));
  var alu16 = select(alu15,cast2,(alu15<cast2));
  var alu17 = select(alu16,alu4,(alu16<alu4));
  var alu18 = select(alu17,alu5,(alu17<alu5));
  var alu19 = select(alu18,alu6,(alu18<alu6));
  var alu20 = select(alu19,alu7,(alu19<alu7));
  var alu21 = select(alu20,alu8,(alu20<alu8));
  var alu22 = select(alu21,alu9,(alu21<alu9));
  var alu23 = select(alu22,alu10,(alu22<alu10));
  var alu24 = select(alu23,cast3,(alu23<cast3));
  var alu25 = select(alu24,alu11,(alu24<alu11));
  var alu26 = select(alu25,alu12,(alu25<alu12));
  var alu27 = select(alu26,alu13,(alu26<alu13));
  var alu28 = select(alu27,cast4,(alu27<cast4));
  var alu29 = select(alu28,alu14,(alu28<alu14));
  var alu30 = select(alu29,cast5,(alu29<cast5));
  var alu31 = select(alu30,cast0,(alu30<cast0));
  var cast6 = bitcast<i32>((bitcast<u32>((i32((val35==val34))))<<4u));
  var cast7 = bitcast<i32>((bitcast<u32>((i32((val20==val34))))<<3u));
  var cast8 = bitcast<i32>((bitcast<u32>((i32((val28==val34))))<<2u));
  var cast9 = bitcast<i32>((bitcast<u32>((i32((val32==val34))))<<1u));
  var alu32 = ((i32((val2==val34)))*18);
  var alu33 = ((i32((val4==val34)))*17);
  var alu34 = ((i32((val36==val34)))*15);
  var alu35 = ((i32((val8==val34)))*14);
  var alu36 = ((i32((val10==val34)))*13);
  var alu37 = ((i32((val12==val34)))*12);
  var alu38 = ((i32((val14==val34)))*11);
  var alu39 = ((i32((val16==val34)))*10);
  var alu40 = ((i32((val18==val34)))*9);
  var alu41 = ((i32((val22==val34)))*7);
  var alu42 = ((i32((val24==val34)))*6);
  var alu43 = ((i32((val26==val34)))*5);
  var alu44 = ((i32((val30==val34)))*3);
  var alu45 = select(alu32,alu33,(alu32<alu33));
  var alu46 = select(alu45,cast6,(alu45<cast6));
  var alu47 = select(alu46,alu34,(alu46<alu34));
  var alu48 = select(alu47,alu35,(alu47<alu35));
  var alu49 = select(alu48,alu36,(alu48<alu36));
  var alu50 = select(alu49,alu37,(alu49<alu37));
  var alu51 = select(alu50,alu38,(alu50<alu38));
  var alu52 = select(alu51,alu39,(alu51<alu39));
  var alu53 = select(alu52,alu40,(alu52<alu40));
  var alu54 = select(alu53,cast7,(alu53<cast7));
  var alu55 = select(alu54,alu41,(alu54<alu41));
  var alu56 = select(alu55,alu42,(alu55<alu42));
  var alu57 = select(alu56,alu43,(alu56<alu43));
  var alu58 = select(alu57,cast8,(alu57<cast8));
  var alu59 = select(alu58,alu44,(alu58<alu44));
  var alu60 = select(alu59,cast9,(alu59<cast9));
  var alu61 = select(alu60,cast1,(alu60<cast1));
  data0_16777216[alu0] = (f32((18-alu31)));
  data0_16777216[alu1] = (f32((18-alu61)));
}`,Y=(a,v)=>M(null,null,function*(){const c=S(v),t=O(a),i=[a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})],d=y(a,1073741824),h=y(a,67108864),R=f(a,1728,b(v,c["m.model.0.weight"])),u=y(a,4194304),n=y(a,16384),g=y(a,64),o=y(a,64),_=y(a,1073741824),Z=f(a,64,b(v,c["m.model.1.weight"])),$=f(a,64,b(v,c["m.model.1.bias"])),aa=f(a,27648,b(v,c["m.model.3.weight"])),ia=f(a,64,b(v,c["m.model.4.weight"])),ta=f(a,64,b(v,c["m.model.4.bias"])),ra=f(a,27648,b(v,c["m.model.6.weight"])),la=f(a,64,b(v,c["m.model.7.weight"])),ea=f(a,64,b(v,c["m.model.7.bias"])),ua=f(a,27648,b(v,c["m.model.9.weight"])),va=f(a,64,b(v,c["m.model.10.weight"])),da=f(a,64,b(v,c["m.model.10.bias"])),ca=f(a,27648,b(v,c["m.model.12.weight"])),na=f(a,64,b(v,c["m.model.13.weight"])),ba=f(a,64,b(v,c["m.model.13.bias"])),fa=f(a,27648,b(v,c["m.model.15.weight"])),ga=f(a,64,b(v,c["m.model.16.weight"])),sa=f(a,64,b(v,c["m.model.16.bias"])),oa=f(a,27648,b(v,c["m.model.18.weight"])),ya=f(a,64,b(v,c["m.model.19.weight"])),_a=f(a,64,b(v,c["m.model.19.bias"])),Ua=f(a,27648,b(v,c["m.model.21.weight"])),Pa=f(a,64,b(v,c["m.model.22.weight"])),Sa=f(a,64,b(v,c["m.model.22.bias"])),pa=f(a,27648,b(v,c["m.model.24.weight"])),xa=f(a,64,b(v,c["m.model.25.weight"])),Ga=f(a,64,b(v,c["m.model.25.bias"])),ha=f(a,27648,b(v,c["m.model.27.weight"])),Ta=f(a,64,b(v,c["m.model.28.weight"])),Ca=f(a,64,b(v,c["m.model.28.bias"])),Ma=f(a,27648,b(v,c["m.model.30.weight"])),Ea=f(a,64,b(v,c["m.model.31.weight"])),Oa=f(a,64,b(v,c["m.model.31.bias"])),ma=f(a,27648,b(v,c["m.model.33.weight"])),Ra=f(a,64,b(v,c["m.model.34.weight"])),Ba=f(a,64,b(v,c["m.model.34.bias"])),wa=f(a,27648,b(v,c["m.model.36.weight"])),F=y(a,1073741824),La=f(a,64,b(v,c["m.model.37.weight"])),Ia=f(a,64,b(v,c["m.model.37.bias"])),B=y(a,1207959552),za=f(a,1152,b(v,c["m.seq_conv_argmax.weight"])),ka=f(a,72,b(v,c["m.seq_conv_argmax.bias"])),A=y(a,67108864),E=y(a,67108864),T=a.createBuffer({size:h.size,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE}),C=a.createBuffer({size:E.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),Na=[m,U,s,P,p,s,x,G,L,U,s,P,p,s,x,G,I,U,s,P,p,s,x,G,z,U,s,P,p,s,x,G,k,U,s,P,p,s,x,G,N,U,s,P,p,s,x,G,V,U,s,P,p,s,x,G,N,U,s,P,p,s,x,G,k,U,s,P,p,s,x,G,z,U,s,P,p,s,x,G,I,U,s,P,p,s,x,G,L,U,s,P,p,s,x,G,H,U,s,P,p,s,x,G,K,Q,X],e=yield Promise.all(Na.map((w,r)=>M(null,null,function*(){return yield a.createComputePipelineAsync({layout:a.createPipelineLayout({bindGroupLayouts:[i[r]]}),compute:{module:a.createShaderModule({code:w}),entryPoint:"main"}})})));return w=>M(null,null,function*(){let r=a.createCommandEncoder();yield T.mapAsync(GPUMapMode.WRITE),new Float32Array(T.getMappedRange()).set(w),T.unmap(),r.copyBufferToBuffer(T,0,h,0,T.size),l(a,r,e[0],i[0],t,[d,h,R],[2,256,32]),l(a,r,e[1],i[1],t,[u,d],[32768,4,1]),l(a,r,e[2],i[2],t,[n,u],[1024,1,1]),l(a,r,e[3],i[3],t,[g,n],[8,1,1]),l(a,r,e[4],i[4],t,[u,d,g],[8192,16,1]),l(a,r,e[5],i[5],t,[n,u],[1024,1,1]),l(a,r,e[6],i[6],t,[o,n],[8,1,1]),l(a,r,e[7],i[7],t,[_,d,g,o,Z,$],[32768,256,1]),l(a,r,e[8],i[8],t,[d,_,aa],[2,256,32]),l(a,r,e[9],i[9],t,[u,d],[32768,4,1]),l(a,r,e[10],i[10],t,[n,u],[1024,1,1]),l(a,r,e[11],i[11],t,[o,n],[8,1,1]),l(a,r,e[12],i[12],t,[u,d,o],[8192,16,1]),l(a,r,e[13],i[13],t,[n,u],[1024,1,1]),l(a,r,e[14],i[14],t,[g,n],[8,1,1]),l(a,r,e[15],i[15],t,[_,d,o,g,ia,ta],[32768,256,1]),l(a,r,e[16],i[16],t,[d,_,ra],[2,256,32]),l(a,r,e[17],i[17],t,[u,d],[32768,4,1]),l(a,r,e[18],i[18],t,[n,u],[1024,1,1]),l(a,r,e[19],i[19],t,[g,n],[8,1,1]),l(a,r,e[20],i[20],t,[u,d,g],[8192,16,1]),l(a,r,e[21],i[21],t,[n,u],[1024,1,1]),l(a,r,e[22],i[22],t,[o,n],[8,1,1]),l(a,r,e[23],i[23],t,[_,d,g,o,la,ea],[32768,256,1]),l(a,r,e[24],i[24],t,[d,_,ua],[2,256,32]),l(a,r,e[25],i[25],t,[u,d],[32768,4,1]),l(a,r,e[26],i[26],t,[n,u],[1024,1,1]),l(a,r,e[27],i[27],t,[o,n],[8,1,1]),l(a,r,e[28],i[28],t,[u,d,o],[8192,16,1]),l(a,r,e[29],i[29],t,[n,u],[1024,1,1]),l(a,r,e[30],i[30],t,[g,n],[8,1,1]),l(a,r,e[31],i[31],t,[_,d,o,g,va,da],[32768,256,1]),l(a,r,e[32],i[32],t,[d,_,ca],[2,256,32]),l(a,r,e[33],i[33],t,[u,d],[32768,4,1]),l(a,r,e[34],i[34],t,[n,u],[1024,1,1]),l(a,r,e[35],i[35],t,[g,n],[8,1,1]),l(a,r,e[36],i[36],t,[u,d,g],[8192,16,1]),l(a,r,e[37],i[37],t,[n,u],[1024,1,1]),l(a,r,e[38],i[38],t,[o,n],[8,1,1]),l(a,r,e[39],i[39],t,[_,d,g,o,na,ba],[32768,256,1]),l(a,r,e[40],i[40],t,[d,_,fa],[2,256,32]),l(a,r,e[41],i[41],t,[u,d],[32768,4,1]),l(a,r,e[42],i[42],t,[n,u],[1024,1,1]),l(a,r,e[43],i[43],t,[o,n],[8,1,1]),l(a,r,e[44],i[44],t,[u,d,o],[8192,16,1]),l(a,r,e[45],i[45],t,[n,u],[1024,1,1]),l(a,r,e[46],i[46],t,[g,n],[8,1,1]),l(a,r,e[47],i[47],t,[_,d,o,g,ga,sa],[32768,256,1]),l(a,r,e[48],i[48],t,[d,_,oa],[256,64,1]),l(a,r,e[49],i[49],t,[u,d],[32768,4,1]),l(a,r,e[50],i[50],t,[n,u],[1024,1,1]),l(a,r,e[51],i[51],t,[g,n],[8,1,1]),l(a,r,e[52],i[52],t,[u,d,g],[8192,16,1]),l(a,r,e[53],i[53],t,[n,u],[1024,1,1]),l(a,r,e[54],i[54],t,[o,n],[8,1,1]),l(a,r,e[55],i[55],t,[_,d,g,o,ya,_a],[32768,256,1]),l(a,r,e[56],i[56],t,[d,_,Ua],[2,256,32]),l(a,r,e[57],i[57],t,[u,d],[32768,4,1]),l(a,r,e[58],i[58],t,[n,u],[1024,1,1]),l(a,r,e[59],i[59],t,[o,n],[8,1,1]),l(a,r,e[60],i[60],t,[u,d,o],[8192,16,1]),l(a,r,e[61],i[61],t,[n,u],[1024,1,1]),l(a,r,e[62],i[62],t,[g,n],[8,1,1]),l(a,r,e[63],i[63],t,[_,d,o,g,Pa,Sa],[32768,256,1]),l(a,r,e[64],i[64],t,[d,_,pa],[2,256,32]),l(a,r,e[65],i[65],t,[u,d],[32768,4,1]),l(a,r,e[66],i[66],t,[n,u],[1024,1,1]),l(a,r,e[67],i[67],t,[g,n],[8,1,1]),l(a,r,e[68],i[68],t,[u,d,g],[8192,16,1]),l(a,r,e[69],i[69],t,[n,u],[1024,1,1]),l(a,r,e[70],i[70],t,[o,n],[8,1,1]),l(a,r,e[71],i[71],t,[_,d,g,o,xa,Ga],[32768,256,1]),l(a,r,e[72],i[72],t,[d,_,ha],[2,256,32]),l(a,r,e[73],i[73],t,[u,d],[32768,4,1]),l(a,r,e[74],i[74],t,[n,u],[1024,1,1]),l(a,r,e[75],i[75],t,[o,n],[8,1,1]),l(a,r,e[76],i[76],t,[u,d,o],[8192,16,1]),l(a,r,e[77],i[77],t,[n,u],[1024,1,1]),l(a,r,e[78],i[78],t,[g,n],[8,1,1]),l(a,r,e[79],i[79],t,[_,d,o,g,Ta,Ca],[32768,256,1]),l(a,r,e[80],i[80],t,[d,_,Ma],[2,256,32]),l(a,r,e[81],i[81],t,[u,d],[32768,4,1]),l(a,r,e[82],i[82],t,[n,u],[1024,1,1]),l(a,r,e[83],i[83],t,[g,n],[8,1,1]),l(a,r,e[84],i[84],t,[u,d,g],[8192,16,1]),l(a,r,e[85],i[85],t,[n,u],[1024,1,1]),l(a,r,e[86],i[86],t,[o,n],[8,1,1]),l(a,r,e[87],i[87],t,[_,d,g,o,Ea,Oa],[32768,256,1]),l(a,r,e[88],i[88],t,[d,_,ma],[2,256,32]),l(a,r,e[89],i[89],t,[u,d],[32768,4,1]),l(a,r,e[90],i[90],t,[n,u],[1024,1,1]),l(a,r,e[91],i[91],t,[o,n],[8,1,1]),l(a,r,e[92],i[92],t,[u,d,o],[8192,16,1]),l(a,r,e[93],i[93],t,[n,u],[1024,1,1]),l(a,r,e[94],i[94],t,[g,n],[8,1,1]),l(a,r,e[95],i[95],t,[_,d,o,g,Ra,Ba],[32768,256,1]),l(a,r,e[96],i[96],t,[d,_,wa],[8,256,8]),l(a,r,e[97],i[97],t,[u,d],[32768,4,1]),l(a,r,e[98],i[98],t,[n,u],[1024,1,1]),l(a,r,e[99],i[99],t,[g,n],[8,1,1]),l(a,r,e[100],i[100],t,[u,d,g],[8192,16,1]),l(a,r,e[101],i[101],t,[n,u],[1024,1,1]),l(a,r,e[102],i[102],t,[o,n],[8,1,1]),l(a,r,e[103],i[103],t,[F,d,g,o,La,Ia],[32768,256,1]),l(a,r,e[104],i[104],t,[B,F,za,ka],[8192,1,1]),l(a,r,e[105],i[105],t,[A,B],[4096,1,1]),l(a,r,e[106],i[106],t,[E,B,A],[32768,8,1]),r.copyBufferToBuffer(E,0,C,0,E.size),a.queue.submit([r.finish()]),yield C.mapAsync(GPUMapMode.READ);const D=new Float32Array(C.size/4);return D.set(new Float32Array(C.getMappedRange())),C.unmap(),[D]})});return{load:(a,v)=>M(null,null,function*(){return yield fetch(v).then(c=>c.arrayBuffer()).then(c=>Y(a,new Uint8Array(c)))}),setupNet:Y}})();export{Ja as default};
