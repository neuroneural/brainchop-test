var Ma=Object.defineProperty,Ca=Object.defineProperties;var Ea=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Oa=Object.prototype.hasOwnProperty,xa=Object.prototype.propertyIsEnumerable;var D=(g,p,S)=>p in g?Ma(g,p,{enumerable:!0,configurable:!0,writable:!0,value:S}):g[p]=S,W=(g,p)=>{for(var S in p||(p={}))Oa.call(p,S)&&D(g,S,p[S]);if(A)for(var S of A(p))xa.call(p,S)&&D(g,S,p[S]);return g},q=(g,p)=>Ca(g,Ea(p));var L=(g,p,S)=>new Promise((k,s)=>{var t=d=>{try{v(S.next(d))}catch(y){s(y)}},z=d=>{try{v(S.throw(d))}catch(y){s(y)}},v=d=>d.done?k(d.value):Promise.resolve(d.value).then(t,z);v((S=S.apply(g,p)).next())});const Ra=(()=>{const g=(a,b)=>a.subarray(...b.data_offsets),p=a=>{const b=Number(new DataView(a.buffer).getBigUint64(0,!0)),_=JSON.parse(new TextDecoder("utf8").decode(a.subarray(8,8+b)));return Object.fromEntries(Object.entries(_).filter(([G,h])=>G!=="__metadata__").map(([G,h])=>[G,q(W({},h),{data_offsets:h.data_offsets.map(N=>8+b+N)})]))},S=(a,b)=>a.createBuffer({size:b,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),k=a=>{const _=a.createBuffer({mappedAtCreation:!0,size:4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});return new Float32Array(_.getMappedRange())[0]=1/0,_.unmap(),_},s=(a,b,_)=>{const G=Math.ceil(b/4)*4,h=a.createBuffer({size:G,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0});return new Uint8Array(h.getMappedRange()).set(_),h.unmap(),h},t=(a,b,_,G,h,N,V)=>{const H=a.createBindGroup({layout:G,entries:[{binding:0,resource:{buffer:h}},...N.map((o,r)=>({binding:r+1,resource:{buffer:o}}))]}),T=b.beginComputePass();T.setPipeline(_),T.setBindGroup(0,H),T.dispatchWorkgroups(...V),T.end()},z=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_405:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,60>;
  var gidx0 = i32(gindex.x); /* 16 */
  var gidx1 = i32(gindex.y); /* 32 */
  var gidx2 = i32(gindex.z); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<4u)));
  var alu1 = (bitcast<i32>((bitcast<u32>(gidx1)<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<10u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(gidx2)<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[36] = 0.0f;
  acc0[37] = 0.0f;
  acc0[38] = 0.0f;
  acc0[39] = 0.0f;
  acc0[40] = 0.0f;
  acc0[41] = 0.0f;
  acc0[42] = 0.0f;
  acc0[43] = 0.0f;
  acc0[44] = 0.0f;
  acc0[45] = 0.0f;
  acc0[46] = 0.0f;
  acc0[47] = 0.0f;
  acc0[48] = 0.0f;
  acc0[49] = 0.0f;
  acc0[50] = 0.0f;
  acc0[51] = 0.0f;
  acc0[52] = 0.0f;
  acc0[53] = 0.0f;
  acc0[54] = 0.0f;
  acc0[55] = 0.0f;
  acc0[56] = 0.0f;
  acc0[57] = 0.0f;
  acc0[58] = 0.0f;
  acc0[59] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    var alu63 = (gidx2+Ridx0);
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast0 = bitcast<u32>(Ridx1);
      var alu64 = (gidx1+bitcast<i32>((cast0<<1u)));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu65 = (gidx0+Ridx2);
        var alu66 = (alu0+bitcast<i32>((bitcast<u32>(Ridx2)<<4u))+alu1+bitcast<i32>((cast0<<12u))+alu2+bitcast<i32>((bitcast<u32>(Ridx0)<<20u)));
        var alu67 = ((0<alu65)&(alu65<17)&(1<alu64)&(alu64<34)&(0<alu63)&(alu63<17));
        var val0 = select((f16(0.0f)), data1_16777216[(alu66+-1052688)], alu67);
        var alu68 = ((Ridx1*3)+Ridx2+(Ridx0*9));
        var val1 = data2_405[alu68];
        var val2 = select((f16(0.0f)), data1_16777216[(alu66+-1052432)], alu67);
        var val3 = select((f16(0.0f)), data1_16777216[(alu66+-1052176)], alu67);
        var val4 = select((f16(0.0f)), data1_16777216[(alu66+-1051920)], alu67);
        var val5 = data2_405[(alu68+27)];
        var val6 = data2_405[(alu68+54)];
        var val7 = data2_405[(alu68+81)];
        var val8 = data2_405[(alu68+108)];
        var val9 = data2_405[(alu68+135)];
        var val10 = data2_405[(alu68+162)];
        var val11 = data2_405[(alu68+189)];
        var val12 = data2_405[(alu68+216)];
        var val13 = data2_405[(alu68+243)];
        var val14 = data2_405[(alu68+270)];
        var val15 = data2_405[(alu68+297)];
        var val16 = data2_405[(alu68+324)];
        var val17 = data2_405[(alu68+351)];
        var val18 = data2_405[(alu68+378)];
        acc0[0] = (acc0[0]+(f32((val0*val1))));
        acc0[1] = (acc0[1]+(f32((val2*val1))));
        acc0[2] = (acc0[2]+(f32((val3*val1))));
        acc0[3] = (acc0[3]+(f32((val4*val1))));
        acc0[4] = (acc0[4]+(f32((val0*val5))));
        acc0[5] = (acc0[5]+(f32((val2*val5))));
        acc0[6] = (acc0[6]+(f32((val3*val5))));
        acc0[7] = (acc0[7]+(f32((val4*val5))));
        acc0[8] = (acc0[8]+(f32((val0*val6))));
        acc0[9] = (acc0[9]+(f32((val2*val6))));
        acc0[10] = (acc0[10]+(f32((val3*val6))));
        acc0[11] = (acc0[11]+(f32((val4*val6))));
        acc0[12] = (acc0[12]+(f32((val0*val7))));
        acc0[13] = (acc0[13]+(f32((val2*val7))));
        acc0[14] = (acc0[14]+(f32((val3*val7))));
        acc0[15] = (acc0[15]+(f32((val4*val7))));
        acc0[16] = (acc0[16]+(f32((val0*val8))));
        acc0[17] = (acc0[17]+(f32((val2*val8))));
        acc0[18] = (acc0[18]+(f32((val3*val8))));
        acc0[19] = (acc0[19]+(f32((val4*val8))));
        acc0[20] = (acc0[20]+(f32((val0*val9))));
        acc0[21] = (acc0[21]+(f32((val2*val9))));
        acc0[22] = (acc0[22]+(f32((val3*val9))));
        acc0[23] = (acc0[23]+(f32((val4*val9))));
        acc0[24] = (acc0[24]+(f32((val0*val10))));
        acc0[25] = (acc0[25]+(f32((val2*val10))));
        acc0[26] = (acc0[26]+(f32((val3*val10))));
        acc0[27] = (acc0[27]+(f32((val4*val10))));
        acc0[28] = (acc0[28]+(f32((val0*val11))));
        acc0[29] = (acc0[29]+(f32((val2*val11))));
        acc0[30] = (acc0[30]+(f32((val3*val11))));
        acc0[31] = (acc0[31]+(f32((val4*val11))));
        acc0[32] = (acc0[32]+(f32((val0*val12))));
        acc0[33] = (acc0[33]+(f32((val2*val12))));
        acc0[34] = (acc0[34]+(f32((val3*val12))));
        acc0[35] = (acc0[35]+(f32((val4*val12))));
        acc0[36] = (acc0[36]+(f32((val0*val13))));
        acc0[37] = (acc0[37]+(f32((val2*val13))));
        acc0[38] = (acc0[38]+(f32((val3*val13))));
        acc0[39] = (acc0[39]+(f32((val4*val13))));
        acc0[40] = (acc0[40]+(f32((val0*val14))));
        acc0[41] = (acc0[41]+(f32((val2*val14))));
        acc0[42] = (acc0[42]+(f32((val3*val14))));
        acc0[43] = (acc0[43]+(f32((val4*val14))));
        acc0[44] = (acc0[44]+(f32((val0*val15))));
        acc0[45] = (acc0[45]+(f32((val2*val15))));
        acc0[46] = (acc0[46]+(f32((val3*val15))));
        acc0[47] = (acc0[47]+(f32((val4*val15))));
        acc0[48] = (acc0[48]+(f32((val0*val16))));
        acc0[49] = (acc0[49]+(f32((val2*val16))));
        acc0[50] = (acc0[50]+(f32((val3*val16))));
        acc0[51] = (acc0[51]+(f32((val4*val16))));
        acc0[52] = (acc0[52]+(f32((val0*val17))));
        acc0[53] = (acc0[53]+(f32((val2*val17))));
        acc0[54] = (acc0[54]+(f32((val3*val17))));
        acc0[55] = (acc0[55]+(f32((val4*val17))));
        acc0[56] = (acc0[56]+(f32((val0*val18))));
        acc0[57] = (acc0[57]+(f32((val2*val18))));
        acc0[58] = (acc0[58]+(f32((val3*val18))));
        acc0[59] = (acc0[59]+(f32((val4*val18))));
      }
    }
  }
  var alu132 = (alu0+alu1+alu2);
  data0_251658240[alu132] = (f16(acc0[0]));
  data0_251658240[(alu132+256)] = (f16(acc0[1]));
  data0_251658240[(alu132+512)] = (f16(acc0[2]));
  data0_251658240[(alu132+768)] = (f16(acc0[3]));
  data0_251658240[(alu132+16777216)] = (f16(acc0[4]));
  data0_251658240[(alu132+16777472)] = (f16(acc0[5]));
  data0_251658240[(alu132+16777728)] = (f16(acc0[6]));
  data0_251658240[(alu132+16777984)] = (f16(acc0[7]));
  data0_251658240[(alu132+33554432)] = (f16(acc0[8]));
  data0_251658240[(alu132+33554688)] = (f16(acc0[9]));
  data0_251658240[(alu132+33554944)] = (f16(acc0[10]));
  data0_251658240[(alu132+33555200)] = (f16(acc0[11]));
  data0_251658240[(alu132+50331648)] = (f16(acc0[12]));
  data0_251658240[(alu132+50331904)] = (f16(acc0[13]));
  data0_251658240[(alu132+50332160)] = (f16(acc0[14]));
  data0_251658240[(alu132+50332416)] = (f16(acc0[15]));
  data0_251658240[(alu132+67108864)] = (f16(acc0[16]));
  data0_251658240[(alu132+67109120)] = (f16(acc0[17]));
  data0_251658240[(alu132+67109376)] = (f16(acc0[18]));
  data0_251658240[(alu132+67109632)] = (f16(acc0[19]));
  data0_251658240[(alu132+83886080)] = (f16(acc0[20]));
  data0_251658240[(alu132+83886336)] = (f16(acc0[21]));
  data0_251658240[(alu132+83886592)] = (f16(acc0[22]));
  data0_251658240[(alu132+83886848)] = (f16(acc0[23]));
  data0_251658240[(alu132+100663296)] = (f16(acc0[24]));
  data0_251658240[(alu132+100663552)] = (f16(acc0[25]));
  data0_251658240[(alu132+100663808)] = (f16(acc0[26]));
  data0_251658240[(alu132+100664064)] = (f16(acc0[27]));
  data0_251658240[(alu132+117440512)] = (f16(acc0[28]));
  data0_251658240[(alu132+117440768)] = (f16(acc0[29]));
  data0_251658240[(alu132+117441024)] = (f16(acc0[30]));
  data0_251658240[(alu132+117441280)] = (f16(acc0[31]));
  data0_251658240[(alu132+134217728)] = (f16(acc0[32]));
  data0_251658240[(alu132+134217984)] = (f16(acc0[33]));
  data0_251658240[(alu132+134218240)] = (f16(acc0[34]));
  data0_251658240[(alu132+134218496)] = (f16(acc0[35]));
  data0_251658240[(alu132+150994944)] = (f16(acc0[36]));
  data0_251658240[(alu132+150995200)] = (f16(acc0[37]));
  data0_251658240[(alu132+150995456)] = (f16(acc0[38]));
  data0_251658240[(alu132+150995712)] = (f16(acc0[39]));
  data0_251658240[(alu132+167772160)] = (f16(acc0[40]));
  data0_251658240[(alu132+167772416)] = (f16(acc0[41]));
  data0_251658240[(alu132+167772672)] = (f16(acc0[42]));
  data0_251658240[(alu132+167772928)] = (f16(acc0[43]));
  data0_251658240[(alu132+184549376)] = (f16(acc0[44]));
  data0_251658240[(alu132+184549632)] = (f16(acc0[45]));
  data0_251658240[(alu132+184549888)] = (f16(acc0[46]));
  data0_251658240[(alu132+184550144)] = (f16(acc0[47]));
  data0_251658240[(alu132+201326592)] = (f16(acc0[48]));
  data0_251658240[(alu132+201326848)] = (f16(acc0[49]));
  data0_251658240[(alu132+201327104)] = (f16(acc0[50]));
  data0_251658240[(alu132+201327360)] = (f16(acc0[51]));
  data0_251658240[(alu132+218103808)] = (f16(acc0[52]));
  data0_251658240[(alu132+218104064)] = (f16(acc0[53]));
  data0_251658240[(alu132+218104320)] = (f16(acc0[54]));
  data0_251658240[(alu132+218104576)] = (f16(acc0[55]));
  data0_251658240[(alu132+234881024)] = (f16(acc0[56]));
  data0_251658240[(alu132+234881280)] = (f16(acc0[57]));
  data0_251658240[(alu132+234881536)] = (f16(acc0[58]));
  data0_251658240[(alu132+234881792)] = (f16(acc0[59]));
}`,v=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,2048>;
@group(0) @binding(1)var<storage,read_write>data0_983040:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@compute @workgroup_size(8,8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,2>;
  var gidx0 = i32(gindex.x); /* 3840 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((cast0<<16u))+bitcast<i32>((cast2<<12u))+bitcast<i32>((cast1<<8u)));
  var val0 = data1_251658240[alu0];
  var val1 = data1_251658240[(alu0+8)];
  var val2 = data1_251658240[(alu0+16)];
  var val3 = data1_251658240[(alu0+24)];
  var val4 = data1_251658240[(alu0+32)];
  var val5 = data1_251658240[(alu0+40)];
  var val6 = data1_251658240[(alu0+48)];
  var val7 = data1_251658240[(alu0+56)];
  var val8 = data1_251658240[(alu0+64)];
  var val9 = data1_251658240[(alu0+72)];
  var val10 = data1_251658240[(alu0+80)];
  var val11 = data1_251658240[(alu0+88)];
  var val12 = data1_251658240[(alu0+96)];
  var val13 = data1_251658240[(alu0+104)];
  var val14 = data1_251658240[(alu0+112)];
  var val15 = data1_251658240[(alu0+120)];
  var val16 = data1_251658240[(alu0+128)];
  var val17 = data1_251658240[(alu0+136)];
  var val18 = data1_251658240[(alu0+144)];
  var val19 = data1_251658240[(alu0+152)];
  var val20 = data1_251658240[(alu0+160)];
  var val21 = data1_251658240[(alu0+168)];
  var val22 = data1_251658240[(alu0+176)];
  var val23 = data1_251658240[(alu0+184)];
  var val24 = data1_251658240[(alu0+192)];
  var val25 = data1_251658240[(alu0+200)];
  var val26 = data1_251658240[(alu0+208)];
  var val27 = data1_251658240[(alu0+216)];
  var val28 = data1_251658240[(alu0+224)];
  var val29 = data1_251658240[(alu0+232)];
  var val30 = data1_251658240[(alu0+240)];
  var val31 = data1_251658240[(alu0+248)];
  var val32 = data1_251658240[(alu0+2048)];
  var val33 = data1_251658240[(alu0+2056)];
  var val34 = data1_251658240[(alu0+2064)];
  var val35 = data1_251658240[(alu0+2072)];
  var val36 = data1_251658240[(alu0+2080)];
  var val37 = data1_251658240[(alu0+2088)];
  var val38 = data1_251658240[(alu0+2096)];
  var val39 = data1_251658240[(alu0+2104)];
  var val40 = data1_251658240[(alu0+2112)];
  var val41 = data1_251658240[(alu0+2120)];
  var val42 = data1_251658240[(alu0+2128)];
  var val43 = data1_251658240[(alu0+2136)];
  var val44 = data1_251658240[(alu0+2144)];
  var val45 = data1_251658240[(alu0+2152)];
  var val46 = data1_251658240[(alu0+2160)];
  var val47 = data1_251658240[(alu0+2168)];
  var val48 = data1_251658240[(alu0+2176)];
  var val49 = data1_251658240[(alu0+2184)];
  var val50 = data1_251658240[(alu0+2192)];
  var val51 = data1_251658240[(alu0+2200)];
  var val52 = data1_251658240[(alu0+2208)];
  var val53 = data1_251658240[(alu0+2216)];
  var val54 = data1_251658240[(alu0+2224)];
  var val55 = data1_251658240[(alu0+2232)];
  var val56 = data1_251658240[(alu0+2240)];
  var val57 = data1_251658240[(alu0+2248)];
  var val58 = data1_251658240[(alu0+2256)];
  var val59 = data1_251658240[(alu0+2264)];
  var val60 = data1_251658240[(alu0+2272)];
  var val61 = data1_251658240[(alu0+2280)];
  var val62 = data1_251658240[(alu0+2288)];
  var val63 = data1_251658240[(alu0+2296)];
  var cast3 = bitcast<i32>((cast1<<4u));
  var cast4 = bitcast<i32>((cast2<<7u));
  var alu1 = (bitcast<i32>((bitcast<u32>(lidx0)<<1u))+cast3+cast4);
  temp0[alu1] = ((f32(val0))+(f32(val1))+(f32(val2))+(f32(val3))+(f32(val4))+(f32(val5))+(f32(val6))+(f32(val7))+(f32(val8))+(f32(val9))+(f32(val10))+(f32(val11))+(f32(val12))+(f32(val13))+(f32(val14))+(f32(val15))+(f32(val16))+(f32(val17))+(f32(val18))+(f32(val19))+(f32(val20))+(f32(val21))+(f32(val22))+(f32(val23))+(f32(val24))+(f32(val25))+(f32(val26))+(f32(val27))+(f32(val28))+(f32(val29))+(f32(val30))+(f32(val31)));
  temp0[(alu1+1)] = ((f32(val32))+(f32(val33))+(f32(val34))+(f32(val35))+(f32(val36))+(f32(val37))+(f32(val38))+(f32(val39))+(f32(val40))+(f32(val41))+(f32(val42))+(f32(val43))+(f32(val44))+(f32(val45))+(f32(val46))+(f32(val47))+(f32(val48))+(f32(val49))+(f32(val50))+(f32(val51))+(f32(val52))+(f32(val53))+(f32(val54))+(f32(val55))+(f32(val56))+(f32(val57))+(f32(val58))+(f32(val59))+(f32(val60))+(f32(val61))+(f32(val62))+(f32(val63)));
  workgroupBarrier();
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  for (var Ridx102 = 0; Ridx102 < 8; Ridx102++) {
    var alu7 = (cast3+bitcast<i32>((bitcast<u32>(Ridx102)<<1u))+cast4);
    var val64 = temp0[alu7];
    var val65 = temp0[(alu7+1)];
    acc0[0] = (acc0[0]+val64);
    acc0[1] = (acc0[1]+val65);
  }
  var alu11 = (lidx1+bitcast<i32>((cast0<<8u))+bitcast<i32>((cast2<<4u)));
  var alu12 = ((bool(lidx0))!=true);
  if (alu12) {
    data0_983040[alu11] = acc0[0];
  }
  if (alu12) {
    data0_983040[(alu11+8)] = acc0[1];
  }
}`,d=`fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,4>;
@group(0) @binding(1)var<storage,read_write>data0_3840:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_983040:array<f32>;
@compute @workgroup_size(4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var acc1: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 3840 */
  var lidx0 = i32(lindex.x); /* 4 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var val0 = data1_983040[(lidx0+bitcast<i32>((bitcast<u32>(Ridx0)<<2u))+bitcast<i32>((bitcast<u32>(gidx0)<<8u)))];
    acc0[0] = (acc0[0]+val0);
  }
  temp0[lidx0] = acc0[0];
  workgroupBarrier();
  acc1[0] = 0.0f;
  for (var Ridx102 = 0; Ridx102 < 4; Ridx102++) {
    var val1 = temp0[Ridx102];
    acc1[0] = (acc1[0]+val1);
  }
  var alu8 = ((bool(lidx0))!=true);
  if (alu8) {
    data0_3840[gidx0] = acc1[0];
  }
}`,y=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_15:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_3840:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 15 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu1 = (bitcast<i32>((bitcast<u32>(gidx0)<<8u))+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_3840[alu1];
    var val1 = data1_3840[(alu1+1)];
    var val2 = data1_3840[(alu1+2)];
    var val3 = data1_3840[(alu1+3)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
  }
  data0_15[gidx0] = (f32((f16((acc0[0]*5.960464477539063e-08f)))));
}`,U=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,512>;
@group(0) @binding(1)var<storage,read_write>data0_983040:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@compute @workgroup_size(16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,8>;
  var acc1: array<f32,8>;
  var gidx1 = i32(gindex.y); /* 15 */
  var val0 = data2_15[gidx1];
  var gidx0 = i32(gindex.x); /* 2048 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 4 */
  var cast0 = (f16(val0));
  var cast1 = bitcast<u32>(gidx0);
  var cast2 = bitcast<u32>(gidx1);
  var cast3 = bitcast<u32>(lidx1);
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  acc0[4] = 0.0f;
  acc0[5] = 0.0f;
  acc0[6] = 0.0f;
  acc0[7] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 4; Ridx0++) {
    var alu8 = (lidx0+bitcast<i32>((bitcast<u32>(Ridx0)<<6u))+bitcast<i32>((cast1<<13u))+bitcast<i32>((cast3<<11u))+bitcast<i32>((cast2<<24u)));
    var val1 = data1_251658240[alu8];
    var val2 = data1_251658240[(alu8+16)];
    var val3 = data1_251658240[(alu8+32)];
    var val4 = data1_251658240[(alu8+48)];
    var val5 = data1_251658240[(alu8+256)];
    var val6 = data1_251658240[(alu8+272)];
    var val7 = data1_251658240[(alu8+288)];
    var val8 = data1_251658240[(alu8+304)];
    var val9 = data1_251658240[(alu8+512)];
    var val10 = data1_251658240[(alu8+528)];
    var val11 = data1_251658240[(alu8+544)];
    var val12 = data1_251658240[(alu8+560)];
    var val13 = data1_251658240[(alu8+768)];
    var val14 = data1_251658240[(alu8+784)];
    var val15 = data1_251658240[(alu8+800)];
    var val16 = data1_251658240[(alu8+816)];
    var val17 = data1_251658240[(alu8+1024)];
    var val18 = data1_251658240[(alu8+1040)];
    var val19 = data1_251658240[(alu8+1056)];
    var val20 = data1_251658240[(alu8+1072)];
    var val21 = data1_251658240[(alu8+1280)];
    var val22 = data1_251658240[(alu8+1296)];
    var val23 = data1_251658240[(alu8+1312)];
    var val24 = data1_251658240[(alu8+1328)];
    var val25 = data1_251658240[(alu8+1536)];
    var val26 = data1_251658240[(alu8+1552)];
    var val27 = data1_251658240[(alu8+1568)];
    var val28 = data1_251658240[(alu8+1584)];
    var val29 = data1_251658240[(alu8+1792)];
    var val30 = data1_251658240[(alu8+1808)];
    var val31 = data1_251658240[(alu8+1824)];
    var val32 = data1_251658240[(alu8+1840)];
    var alu9 = (val1-cast0);
    var alu10 = (val2-cast0);
    var alu11 = (val3-cast0);
    var alu12 = (val4-cast0);
    var alu13 = (val5-cast0);
    var alu14 = (val6-cast0);
    var alu15 = (val7-cast0);
    var alu16 = (val8-cast0);
    var alu17 = (val9-cast0);
    var alu18 = (val10-cast0);
    var alu19 = (val11-cast0);
    var alu20 = (val12-cast0);
    var alu21 = (val13-cast0);
    var alu22 = (val14-cast0);
    var alu23 = (val15-cast0);
    var alu24 = (val16-cast0);
    var alu25 = (val17-cast0);
    var alu26 = (val18-cast0);
    var alu27 = (val19-cast0);
    var alu28 = (val20-cast0);
    var alu29 = (val21-cast0);
    var alu30 = (val22-cast0);
    var alu31 = (val23-cast0);
    var alu32 = (val24-cast0);
    var alu33 = (val25-cast0);
    var alu34 = (val26-cast0);
    var alu35 = (val27-cast0);
    var alu36 = (val28-cast0);
    var alu37 = (val29-cast0);
    var alu38 = (val30-cast0);
    var alu39 = (val31-cast0);
    var alu40 = (val32-cast0);
    acc0[0] = (acc0[0]+(f32((alu9*alu9)))+(f32((alu10*alu10)))+(f32((alu11*alu11)))+(f32((alu12*alu12))));
    acc0[1] = (acc0[1]+(f32((alu13*alu13)))+(f32((alu14*alu14)))+(f32((alu15*alu15)))+(f32((alu16*alu16))));
    acc0[2] = (acc0[2]+(f32((alu17*alu17)))+(f32((alu18*alu18)))+(f32((alu19*alu19)))+(f32((alu20*alu20))));
    acc0[3] = (acc0[3]+(f32((alu21*alu21)))+(f32((alu22*alu22)))+(f32((alu23*alu23)))+(f32((alu24*alu24))));
    acc0[4] = (acc0[4]+(f32((alu25*alu25)))+(f32((alu26*alu26)))+(f32((alu27*alu27)))+(f32((alu28*alu28))));
    acc0[5] = (acc0[5]+(f32((alu29*alu29)))+(f32((alu30*alu30)))+(f32((alu31*alu31)))+(f32((alu32*alu32))));
    acc0[6] = (acc0[6]+(f32((alu33*alu33)))+(f32((alu34*alu34)))+(f32((alu35*alu35)))+(f32((alu36*alu36))));
    acc0[7] = (acc0[7]+(f32((alu37*alu37)))+(f32((alu38*alu38)))+(f32((alu39*alu39)))+(f32((alu40*alu40))));
  }
  var cast4 = bitcast<i32>((cast3<<7u));
  var alu50 = (bitcast<i32>((bitcast<u32>(lidx0)<<3u))+cast4);
  temp0[alu50] = acc0[0];
  temp0[(alu50+1)] = acc0[1];
  temp0[(alu50+2)] = acc0[2];
  temp0[(alu50+3)] = acc0[3];
  temp0[(alu50+4)] = acc0[4];
  temp0[(alu50+5)] = acc0[5];
  temp0[(alu50+6)] = acc0[6];
  temp0[(alu50+7)] = acc0[7];
  workgroupBarrier();
  acc1[0] = 0.0f;
  acc1[1] = 0.0f;
  acc1[2] = 0.0f;
  acc1[3] = 0.0f;
  acc1[4] = 0.0f;
  acc1[5] = 0.0f;
  acc1[6] = 0.0f;
  acc1[7] = 0.0f;
  for (var Ridx103 = 0; Ridx103 < 16; Ridx103++) {
    var alu68 = (cast4+bitcast<i32>((bitcast<u32>(Ridx103)<<3u)));
    var val33 = temp0[alu68];
    var val34 = temp0[(alu68+1)];
    var val35 = temp0[(alu68+2)];
    var val36 = temp0[(alu68+3)];
    var val37 = temp0[(alu68+4)];
    var val38 = temp0[(alu68+5)];
    var val39 = temp0[(alu68+6)];
    var val40 = temp0[(alu68+7)];
    acc1[0] = (acc1[0]+val33);
    acc1[1] = (acc1[1]+val34);
    acc1[2] = (acc1[2]+val35);
    acc1[3] = (acc1[3]+val36);
    acc1[4] = (acc1[4]+val37);
    acc1[5] = (acc1[5]+val38);
    acc1[6] = (acc1[6]+val39);
    acc1[7] = (acc1[7]+val40);
  }
  var alu78 = (bitcast<i32>((cast1<<5u))+bitcast<i32>((cast3<<3u))+bitcast<i32>((cast2<<16u)));
  var alu79 = ((bool(lidx0))!=true);
  if (alu79) {
    data0_983040[alu78] = acc1[0];
  }
  if (alu79) {
    data0_983040[(alu78+1)] = acc1[1];
  }
  if (alu79) {
    data0_983040[(alu78+2)] = acc1[2];
  }
  if (alu79) {
    data0_983040[(alu78+3)] = acc1[3];
  }
  if (alu79) {
    data0_983040[(alu78+4)] = acc1[4];
  }
  if (alu79) {
    data0_983040[(alu78+5)] = acc1[5];
  }
  if (alu79) {
    data0_983040[(alu78+6)] = acc1[6];
  }
  if (alu79) {
    data0_983040[(alu78+7)] = acc1[7];
  }
}`,P=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    var val0 = data1_3840[(bitcast<i32>((bitcast<u32>(lidx0)<<4u))+Ridx0+bitcast<i32>((bitcast<u32>(gidx0)<<8u)))];
    acc0[0] = (acc0[0]+val0);
  }
  temp0[lidx0] = acc0[0];
  workgroupBarrier();
  acc1[0] = 0.0f;
  for (var Ridx102 = 0; Ridx102 < 16; Ridx102++) {
    var val1 = temp0[Ridx102];
    acc1[0] = (acc1[0]+val1);
  }
  var alu8 = ((bool(lidx0))!=true);
  if (alu8) {
    data0_15[gidx0] = (f32((1/sqrt(((f16((acc1[0]*5.960464477539063e-08f)))+(f16(1e-05f)))))));
  }
}`,C=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_6075:array<f16>;
@compute @workgroup_size(8,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,60>;
  var gidx0 = i32(gindex.x); /* 8 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 64 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (lidx0+bitcast<i32>((cast0<<5u)));
  var alu1 = (bitcast<i32>((cast1<<12u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(gidx2)<<18u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[36] = 0.0f;
  acc0[37] = 0.0f;
  acc0[38] = 0.0f;
  acc0[39] = 0.0f;
  acc0[40] = 0.0f;
  acc0[41] = 0.0f;
  acc0[42] = 0.0f;
  acc0[43] = 0.0f;
  acc0[44] = 0.0f;
  acc0[45] = 0.0f;
  acc0[46] = 0.0f;
  acc0[47] = 0.0f;
  acc0[48] = 0.0f;
  acc0[49] = 0.0f;
  acc0[50] = 0.0f;
  acc0[51] = 0.0f;
  acc0[52] = 0.0f;
  acc0[53] = 0.0f;
  acc0[54] = 0.0f;
  acc0[55] = 0.0f;
  acc0[56] = 0.0f;
  acc0[57] = 0.0f;
  acc0[58] = 0.0f;
  acc0[59] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 15; Ridx0++) {
    var val0 = data2_15[Ridx0];
    var val1 = data3_15[Ridx0];
    var cast2 = (f16(val0));
    var cast3 = (f16(val1));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast4 = bitcast<u32>(Ridx1);
      var alu63 = (gidx2+bitcast<i32>((cast4<<1u)));
      var alu64 = ((1<alu63)&(alu63<66));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var cast5 = bitcast<u32>(Ridx2);
        var alu65 = (lidx1+bitcast<i32>((cast1<<4u))+bitcast<i32>((cast5<<3u)));
        var alu66 = ((7<alu65)&(alu65<264));
        var alu67 = (alu64&alu66);
        var alu68 = (alu66&alu64);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu69 = (alu0+bitcast<i32>((bitcast<u32>(Ridx3)<<3u))+alu1+bitcast<i32>((cast5<<11u))+alu2+bitcast<i32>((cast4<<19u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var alu70 = (0<(gidx0+Ridx3));
          var val2 = select((f16(0.0f)), data1_251658240[(alu69+-526344)], (alu70&alu66&alu64));
          var alu71 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val3 = data4_6075[alu71];
          var val4 = select((f16(0.0f)), data1_251658240[(alu69+-526336)], alu68);
          var val5 = select((f16(0.0f)), data1_251658240[(alu69+-526328)], alu68);
          var alu72 = ((bitcast<i32>((cast0<<2u))+Ridx3)<30);
          var val6 = select((f16(0.0f)), data1_251658240[(alu69+-526320)], (alu72&alu66&alu64));
          var val7 = data4_6075[(alu71+405)];
          var val8 = data4_6075[(alu71+810)];
          var val9 = data4_6075[(alu71+1215)];
          var val10 = data4_6075[(alu71+1620)];
          var val11 = data4_6075[(alu71+2025)];
          var val12 = data4_6075[(alu71+2430)];
          var val13 = data4_6075[(alu71+2835)];
          var val14 = data4_6075[(alu71+3240)];
          var val15 = data4_6075[(alu71+3645)];
          var val16 = data4_6075[(alu71+4050)];
          var val17 = data4_6075[(alu71+4455)];
          var val18 = data4_6075[(alu71+4860)];
          var val19 = data4_6075[(alu71+5265)];
          var val20 = data4_6075[(alu71+5670)];
          var alu73 = ((val4-cast2)*cast3);
          var alu74 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu73+((f16(0.044715f))*alu73*alu73*alu73))*(f16(-2.302208198144325f))))))*alu73),alu67);
          var alu75 = ((val5-cast2)*cast3);
          var alu76 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu75+((f16(0.044715f))*alu75*alu75*alu75))*(f16(-2.302208198144325f))))))*alu75),alu67);
          var alu77 = ((val6-cast2)*cast3);
          var alu78 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu77+((f16(0.044715f))*alu77*alu77*alu77))*(f16(-2.302208198144325f))))))*alu77),(alu67&alu72));
          var alu79 = ((val2-cast2)*cast3);
          var alu80 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu79+((f16(0.044715f))*alu79*alu79*alu79))*(f16(-2.302208198144325f))))))*alu79),(alu67&alu70));
          acc0[0] = (acc0[0]+(f32((alu80*val3))));
          acc0[1] = (acc0[1]+(f32((alu74*val3))));
          acc0[2] = (acc0[2]+(f32((alu76*val3))));
          acc0[3] = (acc0[3]+(f32((alu78*val3))));
          acc0[4] = (acc0[4]+(f32((alu80*val7))));
          acc0[5] = (acc0[5]+(f32((alu74*val7))));
          acc0[6] = (acc0[6]+(f32((alu76*val7))));
          acc0[7] = (acc0[7]+(f32((alu78*val7))));
          acc0[8] = (acc0[8]+(f32((alu80*val8))));
          acc0[9] = (acc0[9]+(f32((alu74*val8))));
          acc0[10] = (acc0[10]+(f32((alu76*val8))));
          acc0[11] = (acc0[11]+(f32((alu78*val8))));
          acc0[12] = (acc0[12]+(f32((alu80*val9))));
          acc0[13] = (acc0[13]+(f32((alu74*val9))));
          acc0[14] = (acc0[14]+(f32((alu76*val9))));
          acc0[15] = (acc0[15]+(f32((alu78*val9))));
          acc0[16] = (acc0[16]+(f32((alu80*val10))));
          acc0[17] = (acc0[17]+(f32((alu74*val10))));
          acc0[18] = (acc0[18]+(f32((alu76*val10))));
          acc0[19] = (acc0[19]+(f32((alu78*val10))));
          acc0[20] = (acc0[20]+(f32((alu80*val11))));
          acc0[21] = (acc0[21]+(f32((alu74*val11))));
          acc0[22] = (acc0[22]+(f32((alu76*val11))));
          acc0[23] = (acc0[23]+(f32((alu78*val11))));
          acc0[24] = (acc0[24]+(f32((alu80*val12))));
          acc0[25] = (acc0[25]+(f32((alu74*val12))));
          acc0[26] = (acc0[26]+(f32((alu76*val12))));
          acc0[27] = (acc0[27]+(f32((alu78*val12))));
          acc0[28] = (acc0[28]+(f32((alu80*val13))));
          acc0[29] = (acc0[29]+(f32((alu74*val13))));
          acc0[30] = (acc0[30]+(f32((alu76*val13))));
          acc0[31] = (acc0[31]+(f32((alu78*val13))));
          acc0[32] = (acc0[32]+(f32((alu80*val14))));
          acc0[33] = (acc0[33]+(f32((alu74*val14))));
          acc0[34] = (acc0[34]+(f32((alu76*val14))));
          acc0[35] = (acc0[35]+(f32((alu78*val14))));
          acc0[36] = (acc0[36]+(f32((alu80*val15))));
          acc0[37] = (acc0[37]+(f32((alu74*val15))));
          acc0[38] = (acc0[38]+(f32((alu76*val15))));
          acc0[39] = (acc0[39]+(f32((alu78*val15))));
          acc0[40] = (acc0[40]+(f32((alu80*val16))));
          acc0[41] = (acc0[41]+(f32((alu74*val16))));
          acc0[42] = (acc0[42]+(f32((alu76*val16))));
          acc0[43] = (acc0[43]+(f32((alu78*val16))));
          acc0[44] = (acc0[44]+(f32((alu80*val17))));
          acc0[45] = (acc0[45]+(f32((alu74*val17))));
          acc0[46] = (acc0[46]+(f32((alu76*val17))));
          acc0[47] = (acc0[47]+(f32((alu78*val17))));
          acc0[48] = (acc0[48]+(f32((alu80*val18))));
          acc0[49] = (acc0[49]+(f32((alu74*val18))));
          acc0[50] = (acc0[50]+(f32((alu76*val18))));
          acc0[51] = (acc0[51]+(f32((alu78*val18))));
          acc0[52] = (acc0[52]+(f32((alu80*val19))));
          acc0[53] = (acc0[53]+(f32((alu74*val19))));
          acc0[54] = (acc0[54]+(f32((alu76*val19))));
          acc0[55] = (acc0[55]+(f32((alu78*val19))));
          acc0[56] = (acc0[56]+(f32((alu80*val20))));
          acc0[57] = (acc0[57]+(f32((alu74*val20))));
          acc0[58] = (acc0[58]+(f32((alu76*val20))));
          acc0[59] = (acc0[59]+(f32((alu78*val20))));
        }
      }
    }
  }
  var alu145 = (alu0+alu1+alu2);
  data0_251658240[alu145] = (f16(acc0[0]));
  data0_251658240[(alu145+8)] = (f16(acc0[1]));
  data0_251658240[(alu145+16)] = (f16(acc0[2]));
  data0_251658240[(alu145+24)] = (f16(acc0[3]));
  data0_251658240[(alu145+16777216)] = (f16(acc0[4]));
  data0_251658240[(alu145+16777224)] = (f16(acc0[5]));
  data0_251658240[(alu145+16777232)] = (f16(acc0[6]));
  data0_251658240[(alu145+16777240)] = (f16(acc0[7]));
  data0_251658240[(alu145+33554432)] = (f16(acc0[8]));
  data0_251658240[(alu145+33554440)] = (f16(acc0[9]));
  data0_251658240[(alu145+33554448)] = (f16(acc0[10]));
  data0_251658240[(alu145+33554456)] = (f16(acc0[11]));
  data0_251658240[(alu145+50331648)] = (f16(acc0[12]));
  data0_251658240[(alu145+50331656)] = (f16(acc0[13]));
  data0_251658240[(alu145+50331664)] = (f16(acc0[14]));
  data0_251658240[(alu145+50331672)] = (f16(acc0[15]));
  data0_251658240[(alu145+67108864)] = (f16(acc0[16]));
  data0_251658240[(alu145+67108872)] = (f16(acc0[17]));
  data0_251658240[(alu145+67108880)] = (f16(acc0[18]));
  data0_251658240[(alu145+67108888)] = (f16(acc0[19]));
  data0_251658240[(alu145+83886080)] = (f16(acc0[20]));
  data0_251658240[(alu145+83886088)] = (f16(acc0[21]));
  data0_251658240[(alu145+83886096)] = (f16(acc0[22]));
  data0_251658240[(alu145+83886104)] = (f16(acc0[23]));
  data0_251658240[(alu145+100663296)] = (f16(acc0[24]));
  data0_251658240[(alu145+100663304)] = (f16(acc0[25]));
  data0_251658240[(alu145+100663312)] = (f16(acc0[26]));
  data0_251658240[(alu145+100663320)] = (f16(acc0[27]));
  data0_251658240[(alu145+117440512)] = (f16(acc0[28]));
  data0_251658240[(alu145+117440520)] = (f16(acc0[29]));
  data0_251658240[(alu145+117440528)] = (f16(acc0[30]));
  data0_251658240[(alu145+117440536)] = (f16(acc0[31]));
  data0_251658240[(alu145+134217728)] = (f16(acc0[32]));
  data0_251658240[(alu145+134217736)] = (f16(acc0[33]));
  data0_251658240[(alu145+134217744)] = (f16(acc0[34]));
  data0_251658240[(alu145+134217752)] = (f16(acc0[35]));
  data0_251658240[(alu145+150994944)] = (f16(acc0[36]));
  data0_251658240[(alu145+150994952)] = (f16(acc0[37]));
  data0_251658240[(alu145+150994960)] = (f16(acc0[38]));
  data0_251658240[(alu145+150994968)] = (f16(acc0[39]));
  data0_251658240[(alu145+167772160)] = (f16(acc0[40]));
  data0_251658240[(alu145+167772168)] = (f16(acc0[41]));
  data0_251658240[(alu145+167772176)] = (f16(acc0[42]));
  data0_251658240[(alu145+167772184)] = (f16(acc0[43]));
  data0_251658240[(alu145+184549376)] = (f16(acc0[44]));
  data0_251658240[(alu145+184549384)] = (f16(acc0[45]));
  data0_251658240[(alu145+184549392)] = (f16(acc0[46]));
  data0_251658240[(alu145+184549400)] = (f16(acc0[47]));
  data0_251658240[(alu145+201326592)] = (f16(acc0[48]));
  data0_251658240[(alu145+201326600)] = (f16(acc0[49]));
  data0_251658240[(alu145+201326608)] = (f16(acc0[50]));
  data0_251658240[(alu145+201326616)] = (f16(acc0[51]));
  data0_251658240[(alu145+218103808)] = (f16(acc0[52]));
  data0_251658240[(alu145+218103816)] = (f16(acc0[53]));
  data0_251658240[(alu145+218103824)] = (f16(acc0[54]));
  data0_251658240[(alu145+218103832)] = (f16(acc0[55]));
  data0_251658240[(alu145+234881024)] = (f16(acc0[56]));
  data0_251658240[(alu145+234881032)] = (f16(acc0[57]));
  data0_251658240[(alu145+234881040)] = (f16(acc0[58]));
  data0_251658240[(alu145+234881048)] = (f16(acc0[59]));
}`,E=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_6075:array<f16>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,15>;
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
  for (var Ridx0 = 0; Ridx0 < 15; Ridx0++) {
    var val0 = data2_15[Ridx0];
    var val1 = data3_15[Ridx0];
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast2 = bitcast<u32>(Ridx1);
      var alu17 = (lidx2+bitcast<i32>((cast1<<3u))+bitcast<i32>((cast2<<2u)));
      var alu18 = ((3<alu17)&(alu17<260));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var cast3 = bitcast<u32>(Ridx2);
        var alu19 = (gidx1+bitcast<i32>((cast3<<2u)));
        var alu20 = ((3<alu19)&(alu19<260));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu21 = (alu0+bitcast<i32>((bitcast<u32>(Ridx3)<<2u)));
          var alu22 = ((3<alu21)&(alu21<260));
          var val2 = select((f16(0.0f)), data1_251658240[(alu21+cast0+bitcast<i32>((cast3<<10u))+alu1+bitcast<i32>((cast2<<18u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-263172)], (alu22&alu20&alu18));
          var alu23 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val3 = data4_6075[(alu23+405)];
          var val4 = data4_6075[(alu23+810)];
          var val5 = data4_6075[(alu23+1215)];
          var val6 = data4_6075[(alu23+1620)];
          var val7 = data4_6075[(alu23+2025)];
          var val8 = data4_6075[(alu23+2430)];
          var val9 = data4_6075[(alu23+2835)];
          var val10 = data4_6075[(alu23+3240)];
          var val11 = data4_6075[(alu23+3645)];
          var val12 = data4_6075[(alu23+4050)];
          var val13 = data4_6075[(alu23+4455)];
          var val14 = data4_6075[(alu23+4860)];
          var val15 = data4_6075[(alu23+5265)];
          var val16 = data4_6075[(alu23+5670)];
          var val17 = data4_6075[alu23];
          var alu24 = ((val2-(f16(val0)))*(f16(val1)));
          var alu25 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu24+((f16(0.044715f))*alu24*alu24*alu24))*(f16(-2.302208198144325f))))))*alu24),(alu18&alu20&alu22));
          acc0[0] = (acc0[0]+(f32((alu25*val17))));
          acc0[1] = (acc0[1]+(f32((alu25*val3))));
          acc0[2] = (acc0[2]+(f32((alu25*val4))));
          acc0[3] = (acc0[3]+(f32((alu25*val5))));
          acc0[4] = (acc0[4]+(f32((alu25*val6))));
          acc0[5] = (acc0[5]+(f32((alu25*val7))));
          acc0[6] = (acc0[6]+(f32((alu25*val8))));
          acc0[7] = (acc0[7]+(f32((alu25*val9))));
          acc0[8] = (acc0[8]+(f32((alu25*val10))));
          acc0[9] = (acc0[9]+(f32((alu25*val11))));
          acc0[10] = (acc0[10]+(f32((alu25*val12))));
          acc0[11] = (acc0[11]+(f32((alu25*val13))));
          acc0[12] = (acc0[12]+(f32((alu25*val14))));
          acc0[13] = (acc0[13]+(f32((alu25*val15))));
          acc0[14] = (acc0[14]+(f32((alu25*val16))));
        }
      }
    }
  }
  var alu45 = (alu0+cast0+alu1);
  data0_251658240[alu45] = (f16(acc0[0]));
  data0_251658240[(alu45+16777216)] = (f16(acc0[1]));
  data0_251658240[(alu45+33554432)] = (f16(acc0[2]));
  data0_251658240[(alu45+50331648)] = (f16(acc0[3]));
  data0_251658240[(alu45+67108864)] = (f16(acc0[4]));
  data0_251658240[(alu45+83886080)] = (f16(acc0[5]));
  data0_251658240[(alu45+100663296)] = (f16(acc0[6]));
  data0_251658240[(alu45+117440512)] = (f16(acc0[7]));
  data0_251658240[(alu45+134217728)] = (f16(acc0[8]));
  data0_251658240[(alu45+150994944)] = (f16(acc0[9]));
  data0_251658240[(alu45+167772160)] = (f16(acc0[10]));
  data0_251658240[(alu45+184549376)] = (f16(acc0[11]));
  data0_251658240[(alu45+201326592)] = (f16(acc0[12]));
  data0_251658240[(alu45+218103808)] = (f16(acc0[13]));
  data0_251658240[(alu45+234881024)] = (f16(acc0[14]));
}`,O=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_6075:array<f16>;
@compute @workgroup_size(16,4,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,15>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 4 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var alu1 = (bitcast<i32>((cast1<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 15; Ridx0++) {
    var val0 = data2_15[Ridx0];
    var val1 = data3_15[Ridx0];
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast2 = bitcast<u32>(Ridx1);
      var alu17 = (lidx2+bitcast<i32>((cast1<<4u))+bitcast<i32>((cast2<<1u)));
      var alu18 = ((1<alu17)&(alu17<258));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var cast3 = bitcast<u32>(Ridx2);
        var alu19 = (gidx1+bitcast<i32>((cast3<<1u)));
        var alu20 = ((1<alu19)&(alu19<258));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu21 = (alu0+bitcast<i32>((bitcast<u32>(Ridx3)<<1u)));
          var alu22 = ((1<alu21)&(alu21<258));
          var val2 = select((f16(0.0f)), data1_251658240[(alu21+cast0+bitcast<i32>((cast3<<9u))+alu1+bitcast<i32>((cast2<<17u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u))+-131586)], (alu22&alu20&alu18));
          var alu23 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val3 = data4_6075[(alu23+405)];
          var val4 = data4_6075[(alu23+810)];
          var val5 = data4_6075[(alu23+1215)];
          var val6 = data4_6075[(alu23+1620)];
          var val7 = data4_6075[(alu23+2025)];
          var val8 = data4_6075[(alu23+2430)];
          var val9 = data4_6075[(alu23+2835)];
          var val10 = data4_6075[(alu23+3240)];
          var val11 = data4_6075[(alu23+3645)];
          var val12 = data4_6075[(alu23+4050)];
          var val13 = data4_6075[(alu23+4455)];
          var val14 = data4_6075[(alu23+4860)];
          var val15 = data4_6075[(alu23+5265)];
          var val16 = data4_6075[(alu23+5670)];
          var val17 = data4_6075[alu23];
          var alu24 = ((val2-(f16(val0)))*(f16(val1)));
          var alu25 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu24+((f16(0.044715f))*alu24*alu24*alu24))*(f16(-2.302208198144325f))))))*alu24),(alu18&alu20&alu22));
          acc0[0] = (acc0[0]+(f32((alu25*val17))));
          acc0[1] = (acc0[1]+(f32((alu25*val3))));
          acc0[2] = (acc0[2]+(f32((alu25*val4))));
          acc0[3] = (acc0[3]+(f32((alu25*val5))));
          acc0[4] = (acc0[4]+(f32((alu25*val6))));
          acc0[5] = (acc0[5]+(f32((alu25*val7))));
          acc0[6] = (acc0[6]+(f32((alu25*val8))));
          acc0[7] = (acc0[7]+(f32((alu25*val9))));
          acc0[8] = (acc0[8]+(f32((alu25*val10))));
          acc0[9] = (acc0[9]+(f32((alu25*val11))));
          acc0[10] = (acc0[10]+(f32((alu25*val12))));
          acc0[11] = (acc0[11]+(f32((alu25*val13))));
          acc0[12] = (acc0[12]+(f32((alu25*val14))));
          acc0[13] = (acc0[13]+(f32((alu25*val15))));
          acc0[14] = (acc0[14]+(f32((alu25*val16))));
        }
      }
    }
  }
  var alu45 = (alu0+cast0+alu1);
  data0_251658240[alu45] = (f16(acc0[0]));
  data0_251658240[(alu45+16777216)] = (f16(acc0[1]));
  data0_251658240[(alu45+33554432)] = (f16(acc0[2]));
  data0_251658240[(alu45+50331648)] = (f16(acc0[3]));
  data0_251658240[(alu45+67108864)] = (f16(acc0[4]));
  data0_251658240[(alu45+83886080)] = (f16(acc0[5]));
  data0_251658240[(alu45+100663296)] = (f16(acc0[6]));
  data0_251658240[(alu45+117440512)] = (f16(acc0[7]));
  data0_251658240[(alu45+134217728)] = (f16(acc0[8]));
  data0_251658240[(alu45+150994944)] = (f16(acc0[9]));
  data0_251658240[(alu45+167772160)] = (f16(acc0[10]));
  data0_251658240[(alu45+184549376)] = (f16(acc0[11]));
  data0_251658240[(alu45+201326592)] = (f16(acc0[12]));
  data0_251658240[(alu45+218103808)] = (f16(acc0[13]));
  data0_251658240[(alu45+234881024)] = (f16(acc0[14]));
}`,x=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_6075:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,60>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 128 */
  var gidx2 = i32(gindex.z); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast0<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
  var alu2 = (bitcast<i32>((cast1<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[36] = 0.0f;
  acc0[37] = 0.0f;
  acc0[38] = 0.0f;
  acc0[39] = 0.0f;
  acc0[40] = 0.0f;
  acc0[41] = 0.0f;
  acc0[42] = 0.0f;
  acc0[43] = 0.0f;
  acc0[44] = 0.0f;
  acc0[45] = 0.0f;
  acc0[46] = 0.0f;
  acc0[47] = 0.0f;
  acc0[48] = 0.0f;
  acc0[49] = 0.0f;
  acc0[50] = 0.0f;
  acc0[51] = 0.0f;
  acc0[52] = 0.0f;
  acc0[53] = 0.0f;
  acc0[54] = 0.0f;
  acc0[55] = 0.0f;
  acc0[56] = 0.0f;
  acc0[57] = 0.0f;
  acc0[58] = 0.0f;
  acc0[59] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 15; Ridx0++) {
    var val0 = data2_15[Ridx0];
    var val1 = data3_15[Ridx0];
    var cast2 = (f16(val0));
    var cast3 = (f16(val1));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu63 = ((0<(gidx2+lidx2+Ridx1))&((lidx2+bitcast<i32>((cast1<<4u))+Ridx1)<257));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu64 = ((0<(gidx1+lidx1+Ridx2))&((lidx1+bitcast<i32>((cast0<<1u))+Ridx2)<257));
        var alu65 = (alu64&alu63);
        var alu66 = (alu63&alu64);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu67 = (alu0+Ridx3);
          var alu68 = (alu67+alu1+bitcast<i32>((bitcast<u32>(Ridx2)<<8u))+alu2+bitcast<i32>((bitcast<u32>(Ridx1)<<16u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var alu69 = (0<(gidx0+lidx0+Ridx3));
          var val2 = select((f16(0.0f)), data1_251658240[(alu68+-65793)], (alu69&alu64&alu63));
          var alu70 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val3 = data4_6075[alu70];
          var val4 = select((f16(0.0f)), data1_251658240[(alu68+-65777)], alu65);
          var val5 = select((f16(0.0f)), data1_251658240[(alu68+-65761)], alu65);
          var alu71 = (alu67<209);
          var val6 = select((f16(0.0f)), data1_251658240[(alu68+-65745)], (alu71&alu64&alu63));
          var val7 = data4_6075[(alu70+405)];
          var val8 = data4_6075[(alu70+810)];
          var val9 = data4_6075[(alu70+1215)];
          var val10 = data4_6075[(alu70+1620)];
          var val11 = data4_6075[(alu70+2025)];
          var val12 = data4_6075[(alu70+2430)];
          var val13 = data4_6075[(alu70+2835)];
          var val14 = data4_6075[(alu70+3240)];
          var val15 = data4_6075[(alu70+3645)];
          var val16 = data4_6075[(alu70+4050)];
          var val17 = data4_6075[(alu70+4455)];
          var val18 = data4_6075[(alu70+4860)];
          var val19 = data4_6075[(alu70+5265)];
          var val20 = data4_6075[(alu70+5670)];
          var alu72 = ((val4-cast2)*cast3);
          var alu73 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu72+((f16(0.044715f))*alu72*alu72*alu72))*(f16(-2.302208198144325f))))))*alu72),alu66);
          var alu74 = ((val5-cast2)*cast3);
          var alu75 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu74+((f16(0.044715f))*alu74*alu74*alu74))*(f16(-2.302208198144325f))))))*alu74),alu66);
          var alu76 = ((val6-cast2)*cast3);
          var alu77 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu76+((f16(0.044715f))*alu76*alu76*alu76))*(f16(-2.302208198144325f))))))*alu76),(alu66&alu71));
          var alu78 = ((val2-cast2)*cast3);
          var alu79 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu78+((f16(0.044715f))*alu78*alu78*alu78))*(f16(-2.302208198144325f))))))*alu78),(alu66&alu69));
          acc0[0] = (acc0[0]+(f32((alu79*val3))));
          acc0[1] = (acc0[1]+(f32((alu73*val3))));
          acc0[2] = (acc0[2]+(f32((alu75*val3))));
          acc0[3] = (acc0[3]+(f32((alu77*val3))));
          acc0[4] = (acc0[4]+(f32((alu79*val7))));
          acc0[5] = (acc0[5]+(f32((alu73*val7))));
          acc0[6] = (acc0[6]+(f32((alu75*val7))));
          acc0[7] = (acc0[7]+(f32((alu77*val7))));
          acc0[8] = (acc0[8]+(f32((alu79*val8))));
          acc0[9] = (acc0[9]+(f32((alu73*val8))));
          acc0[10] = (acc0[10]+(f32((alu75*val8))));
          acc0[11] = (acc0[11]+(f32((alu77*val8))));
          acc0[12] = (acc0[12]+(f32((alu79*val9))));
          acc0[13] = (acc0[13]+(f32((alu73*val9))));
          acc0[14] = (acc0[14]+(f32((alu75*val9))));
          acc0[15] = (acc0[15]+(f32((alu77*val9))));
          acc0[16] = (acc0[16]+(f32((alu79*val10))));
          acc0[17] = (acc0[17]+(f32((alu73*val10))));
          acc0[18] = (acc0[18]+(f32((alu75*val10))));
          acc0[19] = (acc0[19]+(f32((alu77*val10))));
          acc0[20] = (acc0[20]+(f32((alu79*val11))));
          acc0[21] = (acc0[21]+(f32((alu73*val11))));
          acc0[22] = (acc0[22]+(f32((alu75*val11))));
          acc0[23] = (acc0[23]+(f32((alu77*val11))));
          acc0[24] = (acc0[24]+(f32((alu79*val12))));
          acc0[25] = (acc0[25]+(f32((alu73*val12))));
          acc0[26] = (acc0[26]+(f32((alu75*val12))));
          acc0[27] = (acc0[27]+(f32((alu77*val12))));
          acc0[28] = (acc0[28]+(f32((alu79*val13))));
          acc0[29] = (acc0[29]+(f32((alu73*val13))));
          acc0[30] = (acc0[30]+(f32((alu75*val13))));
          acc0[31] = (acc0[31]+(f32((alu77*val13))));
          acc0[32] = (acc0[32]+(f32((alu79*val14))));
          acc0[33] = (acc0[33]+(f32((alu73*val14))));
          acc0[34] = (acc0[34]+(f32((alu75*val14))));
          acc0[35] = (acc0[35]+(f32((alu77*val14))));
          acc0[36] = (acc0[36]+(f32((alu79*val15))));
          acc0[37] = (acc0[37]+(f32((alu73*val15))));
          acc0[38] = (acc0[38]+(f32((alu75*val15))));
          acc0[39] = (acc0[39]+(f32((alu77*val15))));
          acc0[40] = (acc0[40]+(f32((alu79*val16))));
          acc0[41] = (acc0[41]+(f32((alu73*val16))));
          acc0[42] = (acc0[42]+(f32((alu75*val16))));
          acc0[43] = (acc0[43]+(f32((alu77*val16))));
          acc0[44] = (acc0[44]+(f32((alu79*val17))));
          acc0[45] = (acc0[45]+(f32((alu73*val17))));
          acc0[46] = (acc0[46]+(f32((alu75*val17))));
          acc0[47] = (acc0[47]+(f32((alu77*val17))));
          acc0[48] = (acc0[48]+(f32((alu79*val18))));
          acc0[49] = (acc0[49]+(f32((alu73*val18))));
          acc0[50] = (acc0[50]+(f32((alu75*val18))));
          acc0[51] = (acc0[51]+(f32((alu77*val18))));
          acc0[52] = (acc0[52]+(f32((alu79*val19))));
          acc0[53] = (acc0[53]+(f32((alu73*val19))));
          acc0[54] = (acc0[54]+(f32((alu75*val19))));
          acc0[55] = (acc0[55]+(f32((alu77*val19))));
          acc0[56] = (acc0[56]+(f32((alu79*val20))));
          acc0[57] = (acc0[57]+(f32((alu73*val20))));
          acc0[58] = (acc0[58]+(f32((alu75*val20))));
          acc0[59] = (acc0[59]+(f32((alu77*val20))));
        }
      }
    }
  }
  var alu144 = (alu0+alu1+alu2);
  data0_251658240[alu144] = (f16(acc0[0]));
  data0_251658240[(alu144+16)] = (f16(acc0[1]));
  data0_251658240[(alu144+32)] = (f16(acc0[2]));
  data0_251658240[(alu144+48)] = (f16(acc0[3]));
  data0_251658240[(alu144+16777216)] = (f16(acc0[4]));
  data0_251658240[(alu144+16777232)] = (f16(acc0[5]));
  data0_251658240[(alu144+16777248)] = (f16(acc0[6]));
  data0_251658240[(alu144+16777264)] = (f16(acc0[7]));
  data0_251658240[(alu144+33554432)] = (f16(acc0[8]));
  data0_251658240[(alu144+33554448)] = (f16(acc0[9]));
  data0_251658240[(alu144+33554464)] = (f16(acc0[10]));
  data0_251658240[(alu144+33554480)] = (f16(acc0[11]));
  data0_251658240[(alu144+50331648)] = (f16(acc0[12]));
  data0_251658240[(alu144+50331664)] = (f16(acc0[13]));
  data0_251658240[(alu144+50331680)] = (f16(acc0[14]));
  data0_251658240[(alu144+50331696)] = (f16(acc0[15]));
  data0_251658240[(alu144+67108864)] = (f16(acc0[16]));
  data0_251658240[(alu144+67108880)] = (f16(acc0[17]));
  data0_251658240[(alu144+67108896)] = (f16(acc0[18]));
  data0_251658240[(alu144+67108912)] = (f16(acc0[19]));
  data0_251658240[(alu144+83886080)] = (f16(acc0[20]));
  data0_251658240[(alu144+83886096)] = (f16(acc0[21]));
  data0_251658240[(alu144+83886112)] = (f16(acc0[22]));
  data0_251658240[(alu144+83886128)] = (f16(acc0[23]));
  data0_251658240[(alu144+100663296)] = (f16(acc0[24]));
  data0_251658240[(alu144+100663312)] = (f16(acc0[25]));
  data0_251658240[(alu144+100663328)] = (f16(acc0[26]));
  data0_251658240[(alu144+100663344)] = (f16(acc0[27]));
  data0_251658240[(alu144+117440512)] = (f16(acc0[28]));
  data0_251658240[(alu144+117440528)] = (f16(acc0[29]));
  data0_251658240[(alu144+117440544)] = (f16(acc0[30]));
  data0_251658240[(alu144+117440560)] = (f16(acc0[31]));
  data0_251658240[(alu144+134217728)] = (f16(acc0[32]));
  data0_251658240[(alu144+134217744)] = (f16(acc0[33]));
  data0_251658240[(alu144+134217760)] = (f16(acc0[34]));
  data0_251658240[(alu144+134217776)] = (f16(acc0[35]));
  data0_251658240[(alu144+150994944)] = (f16(acc0[36]));
  data0_251658240[(alu144+150994960)] = (f16(acc0[37]));
  data0_251658240[(alu144+150994976)] = (f16(acc0[38]));
  data0_251658240[(alu144+150994992)] = (f16(acc0[39]));
  data0_251658240[(alu144+167772160)] = (f16(acc0[40]));
  data0_251658240[(alu144+167772176)] = (f16(acc0[41]));
  data0_251658240[(alu144+167772192)] = (f16(acc0[42]));
  data0_251658240[(alu144+167772208)] = (f16(acc0[43]));
  data0_251658240[(alu144+184549376)] = (f16(acc0[44]));
  data0_251658240[(alu144+184549392)] = (f16(acc0[45]));
  data0_251658240[(alu144+184549408)] = (f16(acc0[46]));
  data0_251658240[(alu144+184549424)] = (f16(acc0[47]));
  data0_251658240[(alu144+201326592)] = (f16(acc0[48]));
  data0_251658240[(alu144+201326608)] = (f16(acc0[49]));
  data0_251658240[(alu144+201326624)] = (f16(acc0[50]));
  data0_251658240[(alu144+201326640)] = (f16(acc0[51]));
  data0_251658240[(alu144+218103808)] = (f16(acc0[52]));
  data0_251658240[(alu144+218103824)] = (f16(acc0[53]));
  data0_251658240[(alu144+218103840)] = (f16(acc0[54]));
  data0_251658240[(alu144+218103856)] = (f16(acc0[55]));
  data0_251658240[(alu144+234881024)] = (f16(acc0[56]));
  data0_251658240[(alu144+234881040)] = (f16(acc0[57]));
  data0_251658240[(alu144+234881056)] = (f16(acc0[58]));
  data0_251658240[(alu144+234881072)] = (f16(acc0[59]));
}`,w=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_6075:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,60>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 128 */
  var gidx2 = i32(gindex.z); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx0);
  var alu0 = (lidx0+bitcast<i32>((cast0<<6u)));
  var alu1 = (bitcast<i32>((bitcast<u32>(gidx1)<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(gidx2)<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[36] = 0.0f;
  acc0[37] = 0.0f;
  acc0[38] = 0.0f;
  acc0[39] = 0.0f;
  acc0[40] = 0.0f;
  acc0[41] = 0.0f;
  acc0[42] = 0.0f;
  acc0[43] = 0.0f;
  acc0[44] = 0.0f;
  acc0[45] = 0.0f;
  acc0[46] = 0.0f;
  acc0[47] = 0.0f;
  acc0[48] = 0.0f;
  acc0[49] = 0.0f;
  acc0[50] = 0.0f;
  acc0[51] = 0.0f;
  acc0[52] = 0.0f;
  acc0[53] = 0.0f;
  acc0[54] = 0.0f;
  acc0[55] = 0.0f;
  acc0[56] = 0.0f;
  acc0[57] = 0.0f;
  acc0[58] = 0.0f;
  acc0[59] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 15; Ridx0++) {
    var val0 = data2_15[Ridx0];
    var val1 = data3_15[Ridx0];
    var cast1 = (f16(val0));
    var cast2 = (f16(val1));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu63 = (gidx2+Ridx1);
      var alu64 = ((0<alu63)&(alu63<17));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var cast3 = bitcast<u32>(Ridx2);
        var alu65 = (gidx1+bitcast<i32>((cast3<<3u)));
        var alu66 = ((7<alu65)&(alu65<136));
        var alu67 = (alu64&alu66);
        var alu68 = (alu66&alu64);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu69 = (alu0+bitcast<i32>((bitcast<u32>(Ridx3)<<4u))+alu1+bitcast<i32>((cast3<<12u))+alu2+bitcast<i32>((bitcast<u32>(Ridx1)<<20u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var alu70 = (0<(gidx0+Ridx3));
          var val2 = select((f16(0.0f)), data1_251658240[(alu69+-1052688)], (alu70&alu66&alu64));
          var alu71 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val3 = data4_6075[alu71];
          var val4 = select((f16(0.0f)), data1_251658240[(alu69+-1052672)], alu68);
          var val5 = select((f16(0.0f)), data1_251658240[(alu69+-1052656)], alu68);
          var alu72 = ((bitcast<i32>((cast0<<2u))+Ridx3)<14);
          var val6 = select((f16(0.0f)), data1_251658240[(alu69+-1052640)], (alu72&alu66&alu64));
          var val7 = data4_6075[(alu71+405)];
          var val8 = data4_6075[(alu71+810)];
          var val9 = data4_6075[(alu71+1215)];
          var val10 = data4_6075[(alu71+1620)];
          var val11 = data4_6075[(alu71+2025)];
          var val12 = data4_6075[(alu71+2430)];
          var val13 = data4_6075[(alu71+2835)];
          var val14 = data4_6075[(alu71+3240)];
          var val15 = data4_6075[(alu71+3645)];
          var val16 = data4_6075[(alu71+4050)];
          var val17 = data4_6075[(alu71+4455)];
          var val18 = data4_6075[(alu71+4860)];
          var val19 = data4_6075[(alu71+5265)];
          var val20 = data4_6075[(alu71+5670)];
          var alu73 = ((val4-cast1)*cast2);
          var alu74 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu73+((f16(0.044715f))*alu73*alu73*alu73))*(f16(-2.302208198144325f))))))*alu73),alu67);
          var alu75 = ((val5-cast1)*cast2);
          var alu76 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu75+((f16(0.044715f))*alu75*alu75*alu75))*(f16(-2.302208198144325f))))))*alu75),alu67);
          var alu77 = ((val6-cast1)*cast2);
          var alu78 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu77+((f16(0.044715f))*alu77*alu77*alu77))*(f16(-2.302208198144325f))))))*alu77),(alu67&alu72));
          var alu79 = ((val2-cast1)*cast2);
          var alu80 = select((f16(0.0f)),((1/((f16(1.0f))+exp2(((alu79+((f16(0.044715f))*alu79*alu79*alu79))*(f16(-2.302208198144325f))))))*alu79),(alu67&alu70));
          acc0[0] = (acc0[0]+(f32((alu80*val3))));
          acc0[1] = (acc0[1]+(f32((alu74*val3))));
          acc0[2] = (acc0[2]+(f32((alu76*val3))));
          acc0[3] = (acc0[3]+(f32((alu78*val3))));
          acc0[4] = (acc0[4]+(f32((alu80*val7))));
          acc0[5] = (acc0[5]+(f32((alu74*val7))));
          acc0[6] = (acc0[6]+(f32((alu76*val7))));
          acc0[7] = (acc0[7]+(f32((alu78*val7))));
          acc0[8] = (acc0[8]+(f32((alu80*val8))));
          acc0[9] = (acc0[9]+(f32((alu74*val8))));
          acc0[10] = (acc0[10]+(f32((alu76*val8))));
          acc0[11] = (acc0[11]+(f32((alu78*val8))));
          acc0[12] = (acc0[12]+(f32((alu80*val9))));
          acc0[13] = (acc0[13]+(f32((alu74*val9))));
          acc0[14] = (acc0[14]+(f32((alu76*val9))));
          acc0[15] = (acc0[15]+(f32((alu78*val9))));
          acc0[16] = (acc0[16]+(f32((alu80*val10))));
          acc0[17] = (acc0[17]+(f32((alu74*val10))));
          acc0[18] = (acc0[18]+(f32((alu76*val10))));
          acc0[19] = (acc0[19]+(f32((alu78*val10))));
          acc0[20] = (acc0[20]+(f32((alu80*val11))));
          acc0[21] = (acc0[21]+(f32((alu74*val11))));
          acc0[22] = (acc0[22]+(f32((alu76*val11))));
          acc0[23] = (acc0[23]+(f32((alu78*val11))));
          acc0[24] = (acc0[24]+(f32((alu80*val12))));
          acc0[25] = (acc0[25]+(f32((alu74*val12))));
          acc0[26] = (acc0[26]+(f32((alu76*val12))));
          acc0[27] = (acc0[27]+(f32((alu78*val12))));
          acc0[28] = (acc0[28]+(f32((alu80*val13))));
          acc0[29] = (acc0[29]+(f32((alu74*val13))));
          acc0[30] = (acc0[30]+(f32((alu76*val13))));
          acc0[31] = (acc0[31]+(f32((alu78*val13))));
          acc0[32] = (acc0[32]+(f32((alu80*val14))));
          acc0[33] = (acc0[33]+(f32((alu74*val14))));
          acc0[34] = (acc0[34]+(f32((alu76*val14))));
          acc0[35] = (acc0[35]+(f32((alu78*val14))));
          acc0[36] = (acc0[36]+(f32((alu80*val15))));
          acc0[37] = (acc0[37]+(f32((alu74*val15))));
          acc0[38] = (acc0[38]+(f32((alu76*val15))));
          acc0[39] = (acc0[39]+(f32((alu78*val15))));
          acc0[40] = (acc0[40]+(f32((alu80*val16))));
          acc0[41] = (acc0[41]+(f32((alu74*val16))));
          acc0[42] = (acc0[42]+(f32((alu76*val16))));
          acc0[43] = (acc0[43]+(f32((alu78*val16))));
          acc0[44] = (acc0[44]+(f32((alu80*val17))));
          acc0[45] = (acc0[45]+(f32((alu74*val17))));
          acc0[46] = (acc0[46]+(f32((alu76*val17))));
          acc0[47] = (acc0[47]+(f32((alu78*val17))));
          acc0[48] = (acc0[48]+(f32((alu80*val18))));
          acc0[49] = (acc0[49]+(f32((alu74*val18))));
          acc0[50] = (acc0[50]+(f32((alu76*val18))));
          acc0[51] = (acc0[51]+(f32((alu78*val18))));
          acc0[52] = (acc0[52]+(f32((alu80*val19))));
          acc0[53] = (acc0[53]+(f32((alu74*val19))));
          acc0[54] = (acc0[54]+(f32((alu76*val19))));
          acc0[55] = (acc0[55]+(f32((alu78*val19))));
          acc0[56] = (acc0[56]+(f32((alu80*val20))));
          acc0[57] = (acc0[57]+(f32((alu74*val20))));
          acc0[58] = (acc0[58]+(f32((alu76*val20))));
          acc0[59] = (acc0[59]+(f32((alu78*val20))));
        }
      }
    }
  }
  var alu145 = (alu0+alu1+alu2);
  data0_251658240[alu145] = (f16(acc0[0]));
  data0_251658240[(alu145+16)] = (f16(acc0[1]));
  data0_251658240[(alu145+32)] = (f16(acc0[2]));
  data0_251658240[(alu145+48)] = (f16(acc0[3]));
  data0_251658240[(alu145+16777216)] = (f16(acc0[4]));
  data0_251658240[(alu145+16777232)] = (f16(acc0[5]));
  data0_251658240[(alu145+16777248)] = (f16(acc0[6]));
  data0_251658240[(alu145+16777264)] = (f16(acc0[7]));
  data0_251658240[(alu145+33554432)] = (f16(acc0[8]));
  data0_251658240[(alu145+33554448)] = (f16(acc0[9]));
  data0_251658240[(alu145+33554464)] = (f16(acc0[10]));
  data0_251658240[(alu145+33554480)] = (f16(acc0[11]));
  data0_251658240[(alu145+50331648)] = (f16(acc0[12]));
  data0_251658240[(alu145+50331664)] = (f16(acc0[13]));
  data0_251658240[(alu145+50331680)] = (f16(acc0[14]));
  data0_251658240[(alu145+50331696)] = (f16(acc0[15]));
  data0_251658240[(alu145+67108864)] = (f16(acc0[16]));
  data0_251658240[(alu145+67108880)] = (f16(acc0[17]));
  data0_251658240[(alu145+67108896)] = (f16(acc0[18]));
  data0_251658240[(alu145+67108912)] = (f16(acc0[19]));
  data0_251658240[(alu145+83886080)] = (f16(acc0[20]));
  data0_251658240[(alu145+83886096)] = (f16(acc0[21]));
  data0_251658240[(alu145+83886112)] = (f16(acc0[22]));
  data0_251658240[(alu145+83886128)] = (f16(acc0[23]));
  data0_251658240[(alu145+100663296)] = (f16(acc0[24]));
  data0_251658240[(alu145+100663312)] = (f16(acc0[25]));
  data0_251658240[(alu145+100663328)] = (f16(acc0[26]));
  data0_251658240[(alu145+100663344)] = (f16(acc0[27]));
  data0_251658240[(alu145+117440512)] = (f16(acc0[28]));
  data0_251658240[(alu145+117440528)] = (f16(acc0[29]));
  data0_251658240[(alu145+117440544)] = (f16(acc0[30]));
  data0_251658240[(alu145+117440560)] = (f16(acc0[31]));
  data0_251658240[(alu145+134217728)] = (f16(acc0[32]));
  data0_251658240[(alu145+134217744)] = (f16(acc0[33]));
  data0_251658240[(alu145+134217760)] = (f16(acc0[34]));
  data0_251658240[(alu145+134217776)] = (f16(acc0[35]));
  data0_251658240[(alu145+150994944)] = (f16(acc0[36]));
  data0_251658240[(alu145+150994960)] = (f16(acc0[37]));
  data0_251658240[(alu145+150994976)] = (f16(acc0[38]));
  data0_251658240[(alu145+150994992)] = (f16(acc0[39]));
  data0_251658240[(alu145+167772160)] = (f16(acc0[40]));
  data0_251658240[(alu145+167772176)] = (f16(acc0[41]));
  data0_251658240[(alu145+167772192)] = (f16(acc0[42]));
  data0_251658240[(alu145+167772208)] = (f16(acc0[43]));
  data0_251658240[(alu145+184549376)] = (f16(acc0[44]));
  data0_251658240[(alu145+184549392)] = (f16(acc0[45]));
  data0_251658240[(alu145+184549408)] = (f16(acc0[46]));
  data0_251658240[(alu145+184549424)] = (f16(acc0[47]));
  data0_251658240[(alu145+201326592)] = (f16(acc0[48]));
  data0_251658240[(alu145+201326608)] = (f16(acc0[49]));
  data0_251658240[(alu145+201326624)] = (f16(acc0[50]));
  data0_251658240[(alu145+201326640)] = (f16(acc0[51]));
  data0_251658240[(alu145+218103808)] = (f16(acc0[52]));
  data0_251658240[(alu145+218103824)] = (f16(acc0[53]));
  data0_251658240[(alu145+218103840)] = (f16(acc0[54]));
  data0_251658240[(alu145+218103856)] = (f16(acc0[55]));
  data0_251658240[(alu145+234881024)] = (f16(acc0[56]));
  data0_251658240[(alu145+234881040)] = (f16(acc0[57]));
  data0_251658240[(alu145+234881056)] = (f16(acc0[58]));
  data0_251658240[(alu145+234881072)] = (f16(acc0[59]));
}`,j=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_251658240:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_15:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 60 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = ((gidx1*69)>>10u);
  var alu1 = (gidx1-(15*alu0));
  var alu2 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<7u))+bitcast<i32>((bitcast<u32>(lidx1)<<3u))+bitcast<i32>((bitcast<u32>(alu1)<<24u)));
  var val0 = data1_251658240[alu2];
  var val1 = data2_15[alu1];
  var val2 = data3_15[alu1];
  var alu3 = ((val0-(f16(val1)))*(f16(val2)));
  data0_251658240[alu2] = ((1/((f16(1.0f))+exp2(((alu3+((f16(0.044715f))*alu3*alu3*alu3))*(f16(-2.302208198144325f))))))*alu3);
}`,$=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_33554432:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_251658240:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_30:array<f16>;
@compute @workgroup_size(4,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,32>;
  var gidx0 = i32(gindex.x); /* 16384 */
  var lidx0 = i32(lindex.x); /* 4 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<10u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
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
  for (var Ridx0 = 0; Ridx0 < 15; Ridx0++) {
    var alu33 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_251658240[alu33];
    var val1 = data2_30[Ridx0];
    var val2 = data1_251658240[(alu33+1)];
    var val3 = data1_251658240[(alu33+2)];
    var val4 = data1_251658240[(alu33+3)];
    var val5 = data1_251658240[(alu33+256)];
    var val6 = data1_251658240[(alu33+257)];
    var val7 = data1_251658240[(alu33+258)];
    var val8 = data1_251658240[(alu33+259)];
    var val9 = data1_251658240[(alu33+512)];
    var val10 = data1_251658240[(alu33+513)];
    var val11 = data1_251658240[(alu33+514)];
    var val12 = data1_251658240[(alu33+515)];
    var val13 = data1_251658240[(alu33+768)];
    var val14 = data1_251658240[(alu33+769)];
    var val15 = data1_251658240[(alu33+770)];
    var val16 = data1_251658240[(alu33+771)];
    var val17 = data2_30[(Ridx0+15)];
    acc0[0] = (acc0[0]+(f32((val0*val1))));
    acc0[1] = (acc0[1]+(f32((val5*val1))));
    acc0[2] = (acc0[2]+(f32((val9*val1))));
    acc0[3] = (acc0[3]+(f32((val13*val1))));
    acc0[4] = (acc0[4]+(f32((val2*val1))));
    acc0[5] = (acc0[5]+(f32((val6*val1))));
    acc0[6] = (acc0[6]+(f32((val10*val1))));
    acc0[7] = (acc0[7]+(f32((val14*val1))));
    acc0[8] = (acc0[8]+(f32((val3*val1))));
    acc0[9] = (acc0[9]+(f32((val7*val1))));
    acc0[10] = (acc0[10]+(f32((val11*val1))));
    acc0[11] = (acc0[11]+(f32((val15*val1))));
    acc0[12] = (acc0[12]+(f32((val4*val1))));
    acc0[13] = (acc0[13]+(f32((val8*val1))));
    acc0[14] = (acc0[14]+(f32((val12*val1))));
    acc0[15] = (acc0[15]+(f32((val16*val1))));
    acc0[16] = (acc0[16]+(f32((val0*val17))));
    acc0[17] = (acc0[17]+(f32((val5*val17))));
    acc0[18] = (acc0[18]+(f32((val9*val17))));
    acc0[19] = (acc0[19]+(f32((val13*val17))));
    acc0[20] = (acc0[20]+(f32((val2*val17))));
    acc0[21] = (acc0[21]+(f32((val6*val17))));
    acc0[22] = (acc0[22]+(f32((val10*val17))));
    acc0[23] = (acc0[23]+(f32((val14*val17))));
    acc0[24] = (acc0[24]+(f32((val3*val17))));
    acc0[25] = (acc0[25]+(f32((val7*val17))));
    acc0[26] = (acc0[26]+(f32((val11*val17))));
    acc0[27] = (acc0[27]+(f32((val15*val17))));
    acc0[28] = (acc0[28]+(f32((val4*val17))));
    acc0[29] = (acc0[29]+(f32((val8*val17))));
    acc0[30] = (acc0[30]+(f32((val12*val17))));
    acc0[31] = (acc0[31]+(f32((val16*val17))));
  }
  data0_33554432[alu0] = (f16(acc0[0]));
  data0_33554432[(alu0+1)] = (f16(acc0[4]));
  data0_33554432[(alu0+2)] = (f16(acc0[8]));
  data0_33554432[(alu0+3)] = (f16(acc0[12]));
  data0_33554432[(alu0+256)] = (f16(acc0[1]));
  data0_33554432[(alu0+257)] = (f16(acc0[5]));
  data0_33554432[(alu0+258)] = (f16(acc0[9]));
  data0_33554432[(alu0+259)] = (f16(acc0[13]));
  data0_33554432[(alu0+512)] = (f16(acc0[2]));
  data0_33554432[(alu0+513)] = (f16(acc0[6]));
  data0_33554432[(alu0+514)] = (f16(acc0[10]));
  data0_33554432[(alu0+515)] = (f16(acc0[14]));
  data0_33554432[(alu0+768)] = (f16(acc0[3]));
  data0_33554432[(alu0+769)] = (f16(acc0[7]));
  data0_33554432[(alu0+770)] = (f16(acc0[11]));
  data0_33554432[(alu0+771)] = (f16(acc0[15]));
  data0_33554432[(alu0+16777216)] = (f16(acc0[16]));
  data0_33554432[(alu0+16777217)] = (f16(acc0[20]));
  data0_33554432[(alu0+16777218)] = (f16(acc0[24]));
  data0_33554432[(alu0+16777219)] = (f16(acc0[28]));
  data0_33554432[(alu0+16777472)] = (f16(acc0[17]));
  data0_33554432[(alu0+16777473)] = (f16(acc0[21]));
  data0_33554432[(alu0+16777474)] = (f16(acc0[25]));
  data0_33554432[(alu0+16777475)] = (f16(acc0[29]));
  data0_33554432[(alu0+16777728)] = (f16(acc0[18]));
  data0_33554432[(alu0+16777729)] = (f16(acc0[22]));
  data0_33554432[(alu0+16777730)] = (f16(acc0[26]));
  data0_33554432[(alu0+16777731)] = (f16(acc0[30]));
  data0_33554432[(alu0+16777984)] = (f16(acc0[19]));
  data0_33554432[(alu0+16777985)] = (f16(acc0[23]));
  data0_33554432[(alu0+16777986)] = (f16(acc0[27]));
  data0_33554432[(alu0+16777987)] = (f16(acc0[31]));
}`,J=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_33554432:array<f16>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u))+bitcast<i32>((bitcast<u32>(lidx0)<<1u)));
  var val0 = data1_33554432[alu0];
  var alu1 = (alu0+1);
  var val1 = data1_33554432[alu1];
  var val2 = data1_33554432[(alu0+16777216)];
  var val3 = data1_33554432[(alu0+16777217)];
  var alu2 = select(val0,val2,(val0<val2));
  var alu3 = select(val1,val3,(val1<val3));
  data0_16777216[alu0] = alu2;
  data0_16777216[alu1] = alu3;
}`,K=`enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_33554432:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f16>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var val0 = data1_33554432[alu0];
  var val1 = data2_16777216[alu0];
  var val2 = data1_33554432[(alu0+16777216)];
  var cast0 = (i32((val2==val1)));
  var cast1 = bitcast<i32>((bitcast<u32>((i32((val0==val1))))<<1u));
  var alu1 = select(cast1,cast0,(cast1<cast0));
  data0_16777216[alu0] = (f32((2-alu1)));
}`,Y=(h,N,V,...H)=>L(null,[h,N,V,...H],function*(a,b,_,{classifierBias:G=null}={}){let T=$;if(G!==null){if(G.length!==2||!G.every(Number.isFinite))throw new Error("MindGrab classifier bias must contain two finite numbers");let M=0;if(T=T.replace(/\(f16\(acc0\[(\d+)\]\)\)/g,(i,R)=>{M++;const Ta=G[Number(R)<16?0:1];return`(f16(acc0[${R}] + ${Math.fround(Ta)}f))`}),M!==32)throw new Error("MindGrab classifier layout changed; update bias application")}const o=p(b),r=k(a),e=[a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),a.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})],F=S(a,33554432),Q=s(a,810,g(b,o["m.model.0.weight"])),X=s(a,12150,g(b,o["m.model.3.weight"])),Z=s(a,12150,g(b,o["m.model.6.weight"])),aa=s(a,12150,g(b,o["m.model.9.weight"])),ia=s(a,12150,g(b,o["m.model.12.weight"])),ta=s(a,12150,g(b,o["m.model.15.weight"])),ra=s(a,12150,g(b,o["m.model.18.weight"])),ea=s(a,12150,g(b,o["m.model.21.weight"])),fa=s(a,12150,g(b,o["m.model.24.weight"])),ca=s(a,12150,g(b,o["m.model.27.weight"])),la=s(a,12150,g(b,o["m.model.30.weight"])),ua=s(a,12150,g(b,o["m.model.33.weight"])),na=s(a,12150,g(b,o["m.model.36.weight"])),da=s(a,12150,g(b,o["m.model.39.weight"])),ba=s(a,12150,g(b,o["m.model.42.weight"])),ga=s(a,12150,g(b,o["m.model.45.weight"])),sa=s(a,12150,g(b,o["m.model.48.weight"])),va=s(a,12150,g(b,o["m.model.51.weight"])),ya=s(a,12150,g(b,o["m.model.54.weight"])),oa=s(a,12150,g(b,o["m.model.57.weight"])),Ua=s(a,12150,g(b,o["m.model.60.weight"])),Pa=s(a,12150,g(b,o["m.model.63.weight"])),Sa=s(a,12150,g(b,o["m.model.66.weight"])),pa=s(a,12150,g(b,o["m.model.69.weight"])),_a=s(a,12150,g(b,o["m.model.72.weight"])),Ga=s(a,60,g(b,o["m.seq_conv_argmax.weight"])),I=S(a,67108864),l=S(a,503316480),c=S(a,3932160),u=S(a,503316480),n=S(a,503316480),m=a.createBuffer({size:F.size,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE}),B=a.createBuffer({size:I.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),ha=[z,v,d,y,U,d,P,C,v,d,y,U,d,P,E,v,d,y,U,d,P,O,v,d,y,U,d,P,x,v,d,y,U,d,P,w,v,d,y,U,d,P,C,v,d,y,U,d,P,E,v,d,y,U,d,P,O,v,d,y,U,d,P,x,v,d,y,U,d,P,w,v,d,y,U,d,P,C,v,d,y,U,d,P,E,v,d,y,U,d,P,O,v,d,y,U,d,P,x,v,d,y,U,d,P,w,v,d,y,U,d,P,C,v,d,y,U,d,P,E,v,d,y,U,d,P,O,v,d,y,U,d,P,x,v,d,y,U,d,P,w,v,d,y,U,d,P,C,v,d,y,U,d,P,E,v,d,y,U,d,P,O,v,d,y,U,d,P,x,v,d,y,U,d,P,j,T,J,K],f=yield Promise.all(ha.map((M,i)=>L(null,null,function*(){return yield a.createComputePipelineAsync({layout:a.createPipelineLayout({bindGroupLayouts:[e[i]]}),compute:{module:a.createShaderModule({code:M}),entryPoint:"main"}})})));return M=>L(null,null,function*(){let i=a.createCommandEncoder();yield m.mapAsync(GPUMapMode.WRITE),new Float16Array(m.getMappedRange()).set(M),m.unmap(),i.copyBufferToBuffer(m,0,F,0,m.size),t(a,i,f[0],e[0],r,[l,F,Q],[16,32,16]),t(a,i,f[1],e[1],r,[c,l],[3840,1,1]),t(a,i,f[2],e[2],r,[u,c],[3840,1,1]),t(a,i,f[3],e[3],r,[c,u],[15,1,1]),t(a,i,f[4],e[4],r,[u,l,c],[2048,15,1]),t(a,i,f[5],e[5],r,[n,u],[3840,1,1]),t(a,i,f[6],e[6],r,[u,n],[15,1,1]),t(a,i,f[7],e[7],r,[n,l,c,u,X],[8,16,64]),t(a,i,f[8],e[8],r,[l,n],[3840,1,1]),t(a,i,f[9],e[9],r,[c,l],[3840,1,1]),t(a,i,f[10],e[10],r,[l,c],[15,1,1]),t(a,i,f[11],e[11],r,[c,n,l],[2048,15,1]),t(a,i,f[12],e[12],r,[u,c],[3840,1,1]),t(a,i,f[13],e[13],r,[c,u],[15,1,1]),t(a,i,f[14],e[14],r,[u,n,l,c,Z],[2,256,32]),t(a,i,f[15],e[15],r,[l,u],[3840,1,1]),t(a,i,f[16],e[16],r,[c,l],[3840,1,1]),t(a,i,f[17],e[17],r,[l,c],[15,1,1]),t(a,i,f[18],e[18],r,[c,u,l],[2048,15,1]),t(a,i,f[19],e[19],r,[n,c],[3840,1,1]),t(a,i,f[20],e[20],r,[c,n],[15,1,1]),t(a,i,f[21],e[21],r,[n,u,l,c,aa],[4,256,16]),t(a,i,f[22],e[22],r,[l,n],[3840,1,1]),t(a,i,f[23],e[23],r,[c,l],[3840,1,1]),t(a,i,f[24],e[24],r,[l,c],[15,1,1]),t(a,i,f[25],e[25],r,[c,n,l],[2048,15,1]),t(a,i,f[26],e[26],r,[u,c],[3840,1,1]),t(a,i,f[27],e[27],r,[c,u],[15,1,1]),t(a,i,f[28],e[28],r,[u,n,l,c,ia],[4,128,16]),t(a,i,f[29],e[29],r,[l,u],[3840,1,1]),t(a,i,f[30],e[30],r,[c,l],[3840,1,1]),t(a,i,f[31],e[31],r,[l,c],[15,1,1]),t(a,i,f[32],e[32],r,[c,u,l],[2048,15,1]),t(a,i,f[33],e[33],r,[n,c],[3840,1,1]),t(a,i,f[34],e[34],r,[c,n],[15,1,1]),t(a,i,f[35],e[35],r,[n,u,l,c,ta],[4,128,16]),t(a,i,f[36],e[36],r,[l,n],[3840,1,1]),t(a,i,f[37],e[37],r,[c,l],[3840,1,1]),t(a,i,f[38],e[38],r,[l,c],[15,1,1]),t(a,i,f[39],e[39],r,[c,n,l],[2048,15,1]),t(a,i,f[40],e[40],r,[u,c],[3840,1,1]),t(a,i,f[41],e[41],r,[c,u],[15,1,1]),t(a,i,f[42],e[42],r,[u,n,l,c,ra],[8,16,64]),t(a,i,f[43],e[43],r,[l,u],[3840,1,1]),t(a,i,f[44],e[44],r,[c,l],[3840,1,1]),t(a,i,f[45],e[45],r,[l,c],[15,1,1]),t(a,i,f[46],e[46],r,[c,u,l],[2048,15,1]),t(a,i,f[47],e[47],r,[n,c],[3840,1,1]),t(a,i,f[48],e[48],r,[c,n],[15,1,1]),t(a,i,f[49],e[49],r,[n,u,l,c,ea],[2,256,32]),t(a,i,f[50],e[50],r,[l,n],[3840,1,1]),t(a,i,f[51],e[51],r,[c,l],[3840,1,1]),t(a,i,f[52],e[52],r,[l,c],[15,1,1]),t(a,i,f[53],e[53],r,[c,n,l],[2048,15,1]),t(a,i,f[54],e[54],r,[u,c],[3840,1,1]),t(a,i,f[55],e[55],r,[c,u],[15,1,1]),t(a,i,f[56],e[56],r,[u,n,l,c,fa],[4,256,16]),t(a,i,f[57],e[57],r,[l,u],[3840,1,1]),t(a,i,f[58],e[58],r,[c,l],[3840,1,1]),t(a,i,f[59],e[59],r,[l,c],[15,1,1]),t(a,i,f[60],e[60],r,[c,u,l],[2048,15,1]),t(a,i,f[61],e[61],r,[n,c],[3840,1,1]),t(a,i,f[62],e[62],r,[c,n],[15,1,1]),t(a,i,f[63],e[63],r,[n,u,l,c,ca],[4,128,16]),t(a,i,f[64],e[64],r,[l,n],[3840,1,1]),t(a,i,f[65],e[65],r,[c,l],[3840,1,1]),t(a,i,f[66],e[66],r,[l,c],[15,1,1]),t(a,i,f[67],e[67],r,[c,n,l],[2048,15,1]),t(a,i,f[68],e[68],r,[u,c],[3840,1,1]),t(a,i,f[69],e[69],r,[c,u],[15,1,1]),t(a,i,f[70],e[70],r,[u,n,l,c,la],[4,128,16]),t(a,i,f[71],e[71],r,[l,u],[3840,1,1]),t(a,i,f[72],e[72],r,[c,l],[3840,1,1]),t(a,i,f[73],e[73],r,[l,c],[15,1,1]),t(a,i,f[74],e[74],r,[c,u,l],[2048,15,1]),t(a,i,f[75],e[75],r,[n,c],[3840,1,1]),t(a,i,f[76],e[76],r,[c,n],[15,1,1]),t(a,i,f[77],e[77],r,[n,u,l,c,ua],[8,16,64]),t(a,i,f[78],e[78],r,[l,n],[3840,1,1]),t(a,i,f[79],e[79],r,[c,l],[3840,1,1]),t(a,i,f[80],e[80],r,[l,c],[15,1,1]),t(a,i,f[81],e[81],r,[c,n,l],[2048,15,1]),t(a,i,f[82],e[82],r,[u,c],[3840,1,1]),t(a,i,f[83],e[83],r,[c,u],[15,1,1]),t(a,i,f[84],e[84],r,[u,n,l,c,na],[2,256,32]),t(a,i,f[85],e[85],r,[l,u],[3840,1,1]),t(a,i,f[86],e[86],r,[c,l],[3840,1,1]),t(a,i,f[87],e[87],r,[l,c],[15,1,1]),t(a,i,f[88],e[88],r,[c,u,l],[2048,15,1]),t(a,i,f[89],e[89],r,[n,c],[3840,1,1]),t(a,i,f[90],e[90],r,[c,n],[15,1,1]),t(a,i,f[91],e[91],r,[n,u,l,c,da],[4,256,16]),t(a,i,f[92],e[92],r,[l,n],[3840,1,1]),t(a,i,f[93],e[93],r,[c,l],[3840,1,1]),t(a,i,f[94],e[94],r,[l,c],[15,1,1]),t(a,i,f[95],e[95],r,[c,n,l],[2048,15,1]),t(a,i,f[96],e[96],r,[u,c],[3840,1,1]),t(a,i,f[97],e[97],r,[c,u],[15,1,1]),t(a,i,f[98],e[98],r,[u,n,l,c,ba],[4,128,16]),t(a,i,f[99],e[99],r,[l,u],[3840,1,1]),t(a,i,f[100],e[100],r,[c,l],[3840,1,1]),t(a,i,f[101],e[101],r,[l,c],[15,1,1]),t(a,i,f[102],e[102],r,[c,u,l],[2048,15,1]),t(a,i,f[103],e[103],r,[n,c],[3840,1,1]),t(a,i,f[104],e[104],r,[c,n],[15,1,1]),t(a,i,f[105],e[105],r,[n,u,l,c,ga],[4,128,16]),t(a,i,f[106],e[106],r,[l,n],[3840,1,1]),t(a,i,f[107],e[107],r,[c,l],[3840,1,1]),t(a,i,f[108],e[108],r,[l,c],[15,1,1]),t(a,i,f[109],e[109],r,[c,n,l],[2048,15,1]),t(a,i,f[110],e[110],r,[u,c],[3840,1,1]),t(a,i,f[111],e[111],r,[c,u],[15,1,1]),t(a,i,f[112],e[112],r,[u,n,l,c,sa],[8,16,64]),t(a,i,f[113],e[113],r,[l,u],[3840,1,1]),t(a,i,f[114],e[114],r,[c,l],[3840,1,1]),t(a,i,f[115],e[115],r,[l,c],[15,1,1]),t(a,i,f[116],e[116],r,[c,u,l],[2048,15,1]),t(a,i,f[117],e[117],r,[n,c],[3840,1,1]),t(a,i,f[118],e[118],r,[c,n],[15,1,1]),t(a,i,f[119],e[119],r,[n,u,l,c,va],[2,256,32]),t(a,i,f[120],e[120],r,[l,n],[3840,1,1]),t(a,i,f[121],e[121],r,[c,l],[3840,1,1]),t(a,i,f[122],e[122],r,[l,c],[15,1,1]),t(a,i,f[123],e[123],r,[c,n,l],[2048,15,1]),t(a,i,f[124],e[124],r,[u,c],[3840,1,1]),t(a,i,f[125],e[125],r,[c,u],[15,1,1]),t(a,i,f[126],e[126],r,[u,n,l,c,ya],[4,256,16]),t(a,i,f[127],e[127],r,[l,u],[3840,1,1]),t(a,i,f[128],e[128],r,[c,l],[3840,1,1]),t(a,i,f[129],e[129],r,[l,c],[15,1,1]),t(a,i,f[130],e[130],r,[c,u,l],[2048,15,1]),t(a,i,f[131],e[131],r,[n,c],[3840,1,1]),t(a,i,f[132],e[132],r,[c,n],[15,1,1]),t(a,i,f[133],e[133],r,[n,u,l,c,oa],[4,128,16]),t(a,i,f[134],e[134],r,[l,n],[3840,1,1]),t(a,i,f[135],e[135],r,[c,l],[3840,1,1]),t(a,i,f[136],e[136],r,[l,c],[15,1,1]),t(a,i,f[137],e[137],r,[c,n,l],[2048,15,1]),t(a,i,f[138],e[138],r,[u,c],[3840,1,1]),t(a,i,f[139],e[139],r,[c,u],[15,1,1]),t(a,i,f[140],e[140],r,[u,n,l,c,Ua],[4,128,16]),t(a,i,f[141],e[141],r,[l,u],[3840,1,1]),t(a,i,f[142],e[142],r,[c,l],[3840,1,1]),t(a,i,f[143],e[143],r,[l,c],[15,1,1]),t(a,i,f[144],e[144],r,[c,u,l],[2048,15,1]),t(a,i,f[145],e[145],r,[n,c],[3840,1,1]),t(a,i,f[146],e[146],r,[c,n],[15,1,1]),t(a,i,f[147],e[147],r,[n,u,l,c,Pa],[8,16,64]),t(a,i,f[148],e[148],r,[l,n],[3840,1,1]),t(a,i,f[149],e[149],r,[c,l],[3840,1,1]),t(a,i,f[150],e[150],r,[l,c],[15,1,1]),t(a,i,f[151],e[151],r,[c,n,l],[2048,15,1]),t(a,i,f[152],e[152],r,[u,c],[3840,1,1]),t(a,i,f[153],e[153],r,[c,u],[15,1,1]),t(a,i,f[154],e[154],r,[u,n,l,c,Sa],[2,256,32]),t(a,i,f[155],e[155],r,[l,u],[3840,1,1]),t(a,i,f[156],e[156],r,[c,l],[3840,1,1]),t(a,i,f[157],e[157],r,[l,c],[15,1,1]),t(a,i,f[158],e[158],r,[c,u,l],[2048,15,1]),t(a,i,f[159],e[159],r,[n,c],[3840,1,1]),t(a,i,f[160],e[160],r,[c,n],[15,1,1]),t(a,i,f[161],e[161],r,[n,u,l,c,pa],[4,256,16]),t(a,i,f[162],e[162],r,[l,n],[3840,1,1]),t(a,i,f[163],e[163],r,[c,l],[3840,1,1]),t(a,i,f[164],e[164],r,[l,c],[15,1,1]),t(a,i,f[165],e[165],r,[c,n,l],[2048,15,1]),t(a,i,f[166],e[166],r,[u,c],[3840,1,1]),t(a,i,f[167],e[167],r,[c,u],[15,1,1]),t(a,i,f[168],e[168],r,[u,n,l,c,_a],[4,128,16]),t(a,i,f[169],e[169],r,[l,u],[3840,1,1]),t(a,i,f[170],e[170],r,[c,l],[3840,1,1]),t(a,i,f[171],e[171],r,[l,c],[15,1,1]),t(a,i,f[172],e[172],r,[c,u,l],[2048,15,1]),t(a,i,f[173],e[173],r,[n,c],[3840,1,1]),t(a,i,f[174],e[174],r,[c,n],[15,1,1]),t(a,i,f[175],e[175],r,[n,u,l,c],[32768,60,1]),t(a,i,f[176],e[176],r,[l,n,Ga],[16384,1,1]),t(a,i,f[177],e[177],r,[u,l],[32768,1,1]),t(a,i,f[178],e[178],r,[I,l,u],[32768,2,1]),i.copyBufferToBuffer(I,0,B,0,I.size),a.queue.submit([i.finish()]),yield B.mapAsync(GPUMapMode.READ);const R=new Float32Array(B.size/4);return R.set(new Float32Array(B.getMappedRange())),B.unmap(),[R]})});return{load:(a,b)=>L(null,null,function*(){return yield fetch(b).then(_=>_.arrayBuffer()).then(_=>Y(a,new Uint8Array(_)))}),setupNet:Y}})();export{Ra as default};
