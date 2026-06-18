
const aparc50 = (() => {
const getTensorBuffer = (safetensorBuffer, tensorMetadata) => {
  return safetensorBuffer.subarray(...tensorMetadata.data_offsets);
};

const getTensorMetadata = (safetensorBuffer) => {
    const metadataLength = Number(new DataView(safetensorBuffer.buffer).getBigUint64(0, true));
    const metadata = JSON.parse(new TextDecoder("utf8").decode(safetensorBuffer.subarray(8, 8 + metadataLength)));
    return Object.fromEntries(Object.entries(metadata).filter(([k, v]) => k !== "__metadata__").map(([k, v]) => [k, {...v, data_offsets: v.data_offsets.map(x => 8 + metadataLength + x)}]));
};

const createEmptyBuf = (device, size) => {
    return device.createBuffer({size, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST });
};

const createUniformBuf = (device, size) => {
  return device.createBuffer({size, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST})
}

const createInfinityUniformBuf = (device) => {
  const size = 4;
  const buf = device.createBuffer({
    mappedAtCreation: true,
    size,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST
  });
  new Float32Array(buf.getMappedRange())[0] = Infinity;
  buf.unmap();
  return buf;
};

const createWeightBuf = (device, size, data) => {
  // WebGPU requires buffer size to be multiple of 4 when mappedAtCreation is true
  const paddedSize = Math.ceil(size / 4) * 4;
  const buf = device.createBuffer({ size: paddedSize, usage: GPUBufferUsage.STORAGE, mappedAtCreation: true });
  new Uint8Array(buf.getMappedRange()).set(data); buf.unmap();
  return buf;
};

const addComputePass = (device, commandEncoder, pipeline, layout, infinityUniformBuf, bufs, workgroup) => {
  const bindGroup = device.createBindGroup({
    layout: layout,
    entries: [
      { binding: 0, resource: { buffer: infinityUniformBuf } },
      ...bufs.map((buffer, index) => ({ binding: index + 1, resource: { buffer } }))
    ]
  });

  const passEncoder = commandEncoder.beginComputePass();
  passEncoder.setPipeline(pipeline);
  passEncoder.setBindGroup(0, bindGroup);
  passEncoder.dispatchWorkgroups(...workgroup);
  passEncoder.end();
};

const r_10_256_32_4_8_16_4_3_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_503316480:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_810:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_30:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 10 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var alu0 = (gidx0>>2u);
  var cast1 = bitcast<u32>(alu0);
  var alu1 = (gidx0&3);
  var cast2 = bitcast<u32>(alu1);
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast1<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast2<<6u)));
  var alu3 = ((lidx0+bitcast<i32>((cast1<<3u)))<255);
  var alu4 = ((lidx1+bitcast<i32>((cast2<<4u)))<63);
  var alu5 = (0<(lidx0+alu0));
  var alu6 = (0<(lidx1+alu1));
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
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    var alu19 = (gidx1+Ridx0);
    var alu20 = (alu2+cast0+bitcast<i32>((bitcast<u32>(Ridx0)<<16u)));
    var alu21 = ((0<alu19)&(alu19<257));
    var val0 = select(0.0f, data1_16777216[(alu20+-65793)], (alu6&alu5&alu21));
    var alu22 = ((gidx2*81)+(Ridx0*9));
    var val1 = data2_810[(alu22+1)];
    var val2 = data2_810[(alu22+2)];
    var val3 = data2_810[(alu22+3)];
    var val4 = data2_810[alu22];
    var alu23 = (alu5&alu21);
    var val5 = select(0.0f, data1_16777216[(alu20+-65792)], alu23);
    var val6 = select(0.0f, data1_16777216[(alu20+-65791)], alu23);
    var val7 = select(0.0f, data1_16777216[(alu20+-65537)], (alu6&alu21));
    var val8 = select(0.0f, data1_16777216[(alu20+-65536)], alu21);
    var val9 = data2_810[(alu22+4)];
    var val10 = select(0.0f, data1_16777216[(alu20+-65535)], alu21);
    var val11 = data2_810[(alu22+5)];
    var val12 = select(0.0f, data1_16777216[(alu20+-65281)], (alu6&alu3&alu21));
    var val13 = data2_810[(alu22+6)];
    var alu24 = (alu3&alu21);
    var val14 = select(0.0f, data1_16777216[(alu20+-65280)], alu24);
    var val15 = data2_810[(alu22+7)];
    var val16 = select(0.0f, data1_16777216[(alu20+-65279)], alu24);
    var val17 = data2_810[(alu22+8)];
    var val18 = data2_810[(alu22+27)];
    var val19 = data2_810[(alu22+28)];
    var val20 = data2_810[(alu22+29)];
    var val21 = data2_810[(alu22+30)];
    var val22 = data2_810[(alu22+31)];
    var val23 = data2_810[(alu22+32)];
    var val24 = data2_810[(alu22+33)];
    var val25 = data2_810[(alu22+34)];
    var val26 = data2_810[(alu22+35)];
    var val27 = data2_810[(alu22+54)];
    var val28 = data2_810[(alu22+55)];
    var val29 = data2_810[(alu22+56)];
    var val30 = data2_810[(alu22+57)];
    var val31 = data2_810[(alu22+58)];
    var val32 = data2_810[(alu22+59)];
    var val33 = data2_810[(alu22+60)];
    var val34 = data2_810[(alu22+61)];
    var val35 = data2_810[(alu22+62)];
    var val36 = select(0.0f, data1_16777216[(alu20+-65790)], alu23);
    var val37 = select(0.0f, data1_16777216[(alu20+-65534)], alu21);
    var val38 = select(0.0f, data1_16777216[(alu20+-65278)], alu24);
    var val39 = select(0.0f, data1_16777216[(alu20+-65789)], alu23);
    var val40 = select(0.0f, data1_16777216[(alu20+-65533)], alu21);
    var val41 = select(0.0f, data1_16777216[(alu20+-65277)], alu24);
    var val42 = select(0.0f, data1_16777216[(alu20+-65788)], (alu4&alu5&alu21));
    var val43 = select(0.0f, data1_16777216[(alu20+-65532)], (alu4&alu21));
    var val44 = select(0.0f, data1_16777216[(alu20+-65276)], (alu4&alu3&alu21));
    acc0[0] = (acc0[0]+(val0*val4)+(val5*val1)+(val6*val2)+(val7*val3)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
    acc0[1] = (acc0[1]+(val0*val18)+(val5*val19)+(val6*val20)+(val7*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
    acc0[2] = (acc0[2]+(val0*val27)+(val5*val28)+(val6*val29)+(val7*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
    acc0[3] = (acc0[3]+(val5*val4)+(val6*val1)+(val36*val2)+(val8*val3)+(val10*val9)+(val37*val11)+(val14*val13)+(val16*val15)+(val38*val17));
    acc0[4] = (acc0[4]+(val5*val18)+(val6*val19)+(val36*val20)+(val8*val21)+(val10*val22)+(val37*val23)+(val14*val24)+(val16*val25)+(val38*val26));
    acc0[5] = (acc0[5]+(val5*val27)+(val6*val28)+(val36*val29)+(val8*val30)+(val10*val31)+(val37*val32)+(val14*val33)+(val16*val34)+(val38*val35));
    acc0[6] = (acc0[6]+(val6*val4)+(val36*val1)+(val39*val2)+(val10*val3)+(val37*val9)+(val40*val11)+(val16*val13)+(val38*val15)+(val41*val17));
    acc0[7] = (acc0[7]+(val6*val18)+(val36*val19)+(val39*val20)+(val10*val21)+(val37*val22)+(val40*val23)+(val16*val24)+(val38*val25)+(val41*val26));
    acc0[8] = (acc0[8]+(val6*val27)+(val36*val28)+(val39*val29)+(val10*val30)+(val37*val31)+(val40*val32)+(val16*val33)+(val38*val34)+(val41*val35));
    acc0[9] = (acc0[9]+(val36*val4)+(val39*val1)+(val42*val2)+(val37*val3)+(val40*val9)+(val43*val11)+(val38*val13)+(val41*val15)+(val44*val17));
    acc0[10] = (acc0[10]+(val36*val18)+(val39*val19)+(val42*val20)+(val37*val21)+(val40*val22)+(val43*val23)+(val38*val24)+(val41*val25)+(val44*val26));
    acc0[11] = (acc0[11]+(val36*val27)+(val39*val28)+(val42*val29)+(val37*val30)+(val40*val31)+(val43*val32)+(val38*val33)+(val41*val34)+(val44*val35));
  }
  var alu38 = (gidx2*3);
  var val45 = data3_30[alu38];
  var val46 = data3_30[(alu38+1)];
  var val47 = data3_30[(alu38+2)];
  var alu39 = (alu2+cast0+(gidx2*50331648));
  var alu40 = (acc0[0]+val45);
  var alu41 = (acc0[3]+val45);
  var alu42 = (acc0[6]+val45);
  var alu43 = (acc0[9]+val45);
  var alu44 = (1.0f-exp2((alu40*1.4426950408889634f)));
  var alu45 = (1.0f-exp2((alu41*1.4426950408889634f)));
  var alu46 = (1.0f-exp2((alu42*1.4426950408889634f)));
  var alu47 = (1.0f-exp2((alu43*1.4426950408889634f)));
  var alu48 = select(0.0f,alu40,(0.0f<alu40));
  var alu49 = select(0.0f,alu44,(0.0f<alu44));
  var alu50 = select(0.0f,alu41,(0.0f<alu41));
  var alu51 = select(0.0f,alu45,(0.0f<alu45));
  var alu52 = select(0.0f,alu42,(0.0f<alu42));
  var alu53 = select(0.0f,alu46,(0.0f<alu46));
  var alu54 = select(0.0f,alu43,(0.0f<alu43));
  var alu55 = select(0.0f,alu47,(0.0f<alu47));
  data0_503316480[alu39] = (alu48-alu49);
  data0_503316480[(alu39+1)] = (alu50-alu51);
  data0_503316480[(alu39+2)] = (alu52-alu53);
  data0_503316480[(alu39+3)] = (alu54-alu55);
  var alu60 = (acc0[1]+val46);
  var alu61 = (acc0[4]+val46);
  var alu62 = (acc0[7]+val46);
  var alu63 = (acc0[10]+val46);
  var alu64 = (1.0f-exp2((alu60*1.4426950408889634f)));
  var alu65 = (1.0f-exp2((alu61*1.4426950408889634f)));
  var alu66 = (1.0f-exp2((alu62*1.4426950408889634f)));
  var alu67 = (1.0f-exp2((alu63*1.4426950408889634f)));
  var alu68 = select(0.0f,alu60,(0.0f<alu60));
  var alu69 = select(0.0f,alu64,(0.0f<alu64));
  var alu70 = select(0.0f,alu61,(0.0f<alu61));
  var alu71 = select(0.0f,alu65,(0.0f<alu65));
  var alu72 = select(0.0f,alu62,(0.0f<alu62));
  var alu73 = select(0.0f,alu66,(0.0f<alu66));
  var alu74 = select(0.0f,alu63,(0.0f<alu63));
  var alu75 = select(0.0f,alu67,(0.0f<alu67));
  data0_503316480[(alu39+16777216)] = (alu68-alu69);
  data0_503316480[(alu39+16777217)] = (alu70-alu71);
  data0_503316480[(alu39+16777218)] = (alu72-alu73);
  data0_503316480[(alu39+16777219)] = (alu74-alu75);
  var alu80 = (acc0[2]+val47);
  var alu81 = (acc0[5]+val47);
  var alu82 = (acc0[8]+val47);
  var alu83 = (acc0[11]+val47);
  var alu84 = (1.0f-exp2((alu80*1.4426950408889634f)));
  var alu85 = (1.0f-exp2((alu81*1.4426950408889634f)));
  var alu86 = (1.0f-exp2((alu82*1.4426950408889634f)));
  var alu87 = (1.0f-exp2((alu83*1.4426950408889634f)));
  var alu88 = select(0.0f,alu80,(0.0f<alu80));
  var alu89 = select(0.0f,alu84,(0.0f<alu84));
  var alu90 = select(0.0f,alu81,(0.0f<alu81));
  var alu91 = select(0.0f,alu85,(0.0f<alu85));
  var alu92 = select(0.0f,alu82,(0.0f<alu82));
  var alu93 = select(0.0f,alu86,(0.0f<alu86));
  var alu94 = select(0.0f,alu83,(0.0f<alu83));
  var alu95 = select(0.0f,alu87,(0.0f<alu87));
  data0_503316480[(alu39+33554432)] = (alu88-alu89);
  data0_503316480[(alu39+33554433)] = (alu90-alu91);
  data0_503316480[(alu39+33554434)] = (alu92-alu93);
  data0_503316480[(alu39+33554435)] = (alu94-alu95);
}`;

const r_10_256_32_4_8_16_4_3_30_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_503316480:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_503316480:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24300:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_30:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 10 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u))+alu1);
  var alu3 = (alu0<254);
  var alu4 = ((lidx1+bitcast<i32>((cast3<<4u)))<63);
  var alu5 = (alu1<251);
  var alu6 = (0<(bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u))));
  var alu7 = (0<alu1);
  var alu8 = (1<alu0);
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
  for (var Ridx0 = 0; Ridx0 < 30; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast4 = bitcast<u32>(Ridx1);
      var alu21 = (gidx1+bitcast<i32>((cast4<<1u)));
      var alu22 = (alu2+cast0+bitcast<i32>((cast4<<17u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu23 = ((1<alu21)&(alu21<258));
      var val0 = select(0.0f, data1_503316480[(alu22+-131586)], (alu6&alu8&alu23));
      var alu24 = ((Ridx0*27)+(Ridx1*9)+(gidx2*2430));
      var val1 = data2_24300[alu24];
      var alu25 = (alu8&alu23);
      var val2 = select(0.0f, data1_503316480[(alu22+-131584)], alu25);
      var val3 = data2_24300[(alu24+1)];
      var val4 = select(0.0f, data1_503316480[(alu22+-131582)], alu25);
      var val5 = data2_24300[(alu24+2)];
      var val6 = select(0.0f, data1_503316480[(alu22+-131074)], (alu6&alu23));
      var val7 = data2_24300[(alu24+3)];
      var val8 = select(0.0f, data1_503316480[(alu22+-131072)], alu23);
      var val9 = data2_24300[(alu24+4)];
      var val10 = select(0.0f, data1_503316480[(alu22+-131070)], alu23);
      var val11 = data2_24300[(alu24+5)];
      var val12 = select(0.0f, data1_503316480[(alu22+-130562)], (alu6&alu3&alu23));
      var val13 = data2_24300[(alu24+6)];
      var alu26 = (alu3&alu23);
      var val14 = select(0.0f, data1_503316480[(alu22+-130560)], alu26);
      var val15 = data2_24300[(alu24+7)];
      var val16 = select(0.0f, data1_503316480[(alu22+-130558)], alu26);
      var val17 = data2_24300[(alu24+8)];
      var val18 = data2_24300[(alu24+810)];
      var val19 = data2_24300[(alu24+811)];
      var val20 = data2_24300[(alu24+812)];
      var val21 = data2_24300[(alu24+813)];
      var val22 = data2_24300[(alu24+814)];
      var val23 = data2_24300[(alu24+815)];
      var val24 = data2_24300[(alu24+816)];
      var val25 = data2_24300[(alu24+817)];
      var val26 = data2_24300[(alu24+818)];
      var val27 = data2_24300[(alu24+1620)];
      var val28 = data2_24300[(alu24+1621)];
      var val29 = data2_24300[(alu24+1622)];
      var val30 = data2_24300[(alu24+1623)];
      var val31 = data2_24300[(alu24+1624)];
      var val32 = data2_24300[(alu24+1625)];
      var val33 = data2_24300[(alu24+1626)];
      var val34 = data2_24300[(alu24+1627)];
      var val35 = data2_24300[(alu24+1628)];
      var val36 = select(0.0f, data1_503316480[(alu22+-131585)], (alu7&alu8&alu23));
      var val37 = select(0.0f, data1_503316480[(alu22+-131583)], alu25);
      var val38 = select(0.0f, data1_503316480[(alu22+-131581)], alu25);
      var val39 = select(0.0f, data1_503316480[(alu22+-131073)], (alu7&alu23));
      var val40 = select(0.0f, data1_503316480[(alu22+-131071)], alu23);
      var val41 = select(0.0f, data1_503316480[(alu22+-131069)], alu23);
      var val42 = select(0.0f, data1_503316480[(alu22+-130561)], (alu7&alu3&alu23));
      var val43 = select(0.0f, data1_503316480[(alu22+-130559)], alu26);
      var val44 = select(0.0f, data1_503316480[(alu22+-130557)], alu26);
      var val45 = select(0.0f, data1_503316480[(alu22+-131580)], (alu4&alu8&alu23));
      var val46 = select(0.0f, data1_503316480[(alu22+-131068)], (alu4&alu23));
      var val47 = select(0.0f, data1_503316480[(alu22+-130556)], (alu4&alu3&alu23));
      var val48 = select(0.0f, data1_503316480[(alu22+-131579)], (alu5&alu8&alu23));
      var val49 = select(0.0f, data1_503316480[(alu22+-131067)], (alu5&alu23));
      var val50 = select(0.0f, data1_503316480[(alu22+-130555)], (alu5&alu3&alu23));
      acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val2*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val2*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val1)+(val37*val3)+(val38*val5)+(val39*val7)+(val40*val9)+(val41*val11)+(val42*val13)+(val43*val15)+(val44*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val37*val19)+(val38*val20)+(val39*val21)+(val40*val22)+(val41*val23)+(val42*val24)+(val43*val25)+(val44*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val37*val28)+(val38*val29)+(val39*val30)+(val40*val31)+(val41*val32)+(val42*val33)+(val43*val34)+(val44*val35));
      acc0[6] = (acc0[6]+(val2*val1)+(val4*val3)+(val45*val5)+(val8*val7)+(val10*val9)+(val46*val11)+(val14*val13)+(val16*val15)+(val47*val17));
      acc0[7] = (acc0[7]+(val2*val18)+(val4*val19)+(val45*val20)+(val8*val21)+(val10*val22)+(val46*val23)+(val14*val24)+(val16*val25)+(val47*val26));
      acc0[8] = (acc0[8]+(val2*val27)+(val4*val28)+(val45*val29)+(val8*val30)+(val10*val31)+(val46*val32)+(val14*val33)+(val16*val34)+(val47*val35));
      acc0[9] = (acc0[9]+(val37*val1)+(val38*val3)+(val48*val5)+(val40*val7)+(val41*val9)+(val49*val11)+(val43*val13)+(val44*val15)+(val50*val17));
      acc0[10] = (acc0[10]+(val37*val18)+(val38*val19)+(val48*val20)+(val40*val21)+(val41*val22)+(val49*val23)+(val43*val24)+(val44*val25)+(val50*val26));
      acc0[11] = (acc0[11]+(val37*val27)+(val38*val28)+(val48*val29)+(val40*val30)+(val41*val31)+(val49*val32)+(val43*val33)+(val44*val34)+(val50*val35));
    }
  }
  var alu41 = (gidx2*3);
  var val51 = data3_30[alu41];
  var val52 = data3_30[(alu41+1)];
  var val53 = data3_30[(alu41+2)];
  var alu42 = (alu2+cast0+(gidx2*50331648));
  var alu43 = (acc0[0]+val51);
  var alu44 = (acc0[3]+val51);
  var alu45 = (acc0[6]+val51);
  var alu46 = (acc0[9]+val51);
  var alu47 = (1.0f-exp2((alu43*1.4426950408889634f)));
  var alu48 = (1.0f-exp2((alu44*1.4426950408889634f)));
  var alu49 = (1.0f-exp2((alu45*1.4426950408889634f)));
  var alu50 = (1.0f-exp2((alu46*1.4426950408889634f)));
  var alu51 = select(0.0f,alu43,(0.0f<alu43));
  var alu52 = select(0.0f,alu47,(0.0f<alu47));
  var alu53 = select(0.0f,alu44,(0.0f<alu44));
  var alu54 = select(0.0f,alu48,(0.0f<alu48));
  var alu55 = select(0.0f,alu45,(0.0f<alu45));
  var alu56 = select(0.0f,alu49,(0.0f<alu49));
  var alu57 = select(0.0f,alu46,(0.0f<alu46));
  var alu58 = select(0.0f,alu50,(0.0f<alu50));
  data0_503316480[alu42] = (alu51-alu52);
  data0_503316480[(alu42+1)] = (alu53-alu54);
  data0_503316480[(alu42+2)] = (alu55-alu56);
  data0_503316480[(alu42+3)] = (alu57-alu58);
  var alu63 = (acc0[1]+val52);
  var alu64 = (acc0[4]+val52);
  var alu65 = (acc0[7]+val52);
  var alu66 = (acc0[10]+val52);
  var alu67 = (1.0f-exp2((alu63*1.4426950408889634f)));
  var alu68 = (1.0f-exp2((alu64*1.4426950408889634f)));
  var alu69 = (1.0f-exp2((alu65*1.4426950408889634f)));
  var alu70 = (1.0f-exp2((alu66*1.4426950408889634f)));
  var alu71 = select(0.0f,alu63,(0.0f<alu63));
  var alu72 = select(0.0f,alu67,(0.0f<alu67));
  var alu73 = select(0.0f,alu64,(0.0f<alu64));
  var alu74 = select(0.0f,alu68,(0.0f<alu68));
  var alu75 = select(0.0f,alu65,(0.0f<alu65));
  var alu76 = select(0.0f,alu69,(0.0f<alu69));
  var alu77 = select(0.0f,alu66,(0.0f<alu66));
  var alu78 = select(0.0f,alu70,(0.0f<alu70));
  data0_503316480[(alu42+16777216)] = (alu71-alu72);
  data0_503316480[(alu42+16777217)] = (alu73-alu74);
  data0_503316480[(alu42+16777218)] = (alu75-alu76);
  data0_503316480[(alu42+16777219)] = (alu77-alu78);
  var alu83 = (acc0[2]+val53);
  var alu84 = (acc0[5]+val53);
  var alu85 = (acc0[8]+val53);
  var alu86 = (acc0[11]+val53);
  var alu87 = (1.0f-exp2((alu83*1.4426950408889634f)));
  var alu88 = (1.0f-exp2((alu84*1.4426950408889634f)));
  var alu89 = (1.0f-exp2((alu85*1.4426950408889634f)));
  var alu90 = (1.0f-exp2((alu86*1.4426950408889634f)));
  var alu91 = select(0.0f,alu83,(0.0f<alu83));
  var alu92 = select(0.0f,alu87,(0.0f<alu87));
  var alu93 = select(0.0f,alu84,(0.0f<alu84));
  var alu94 = select(0.0f,alu88,(0.0f<alu88));
  var alu95 = select(0.0f,alu85,(0.0f<alu85));
  var alu96 = select(0.0f,alu89,(0.0f<alu89));
  var alu97 = select(0.0f,alu86,(0.0f<alu86));
  var alu98 = select(0.0f,alu90,(0.0f<alu90));
  data0_503316480[(alu42+33554432)] = (alu91-alu92);
  data0_503316480[(alu42+33554433)] = (alu93-alu94);
  data0_503316480[(alu42+33554434)] = (alu95-alu96);
  data0_503316480[(alu42+33554435)] = (alu97-alu98);
}`;

const r_10_256_32_4_8_16_4_3_30_3_3_3n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_503316480:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_503316480:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24300:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_30:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 10 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>((gidx0>>2u));
  var alu0 = (gidx0&3);
  var cast2 = bitcast<u32>(alu0);
  var alu1 = (lidx0+bitcast<i32>((cast1<<3u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast1<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast2<<6u)));
  var alu3 = (alu1<252);
  var alu4 = ((lidx1+bitcast<i32>((cast2<<4u)))<63);
  var alu5 = (0<(lidx1+alu0));
  var alu6 = (3<alu1);
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
  for (var Ridx0 = 0; Ridx0 < 30; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast3 = bitcast<u32>(Ridx1);
      var alu19 = (gidx1+bitcast<i32>((cast3<<2u)));
      var alu20 = (alu2+cast0+bitcast<i32>((cast3<<18u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu21 = ((3<alu19)&(alu19<260));
      var alu22 = (alu5&alu6&alu21);
      var val0 = select(0.0f, data1_503316480[(alu20+-263172)], alu22);
      var alu23 = ((Ridx0*27)+(Ridx1*9)+(gidx2*2430));
      var val1 = data2_24300[(alu23+1)];
      var val2 = data2_24300[alu23];
      var alu24 = (alu6&alu21);
      var val3 = select(0.0f, data1_503316480[(alu20+-263168)], alu24);
      var alu25 = (alu4&alu6&alu21);
      var val4 = select(0.0f, data1_503316480[(alu20+-263164)], alu25);
      var val5 = data2_24300[(alu23+2)];
      var alu26 = (alu5&alu21);
      var val6 = select(0.0f, data1_503316480[(alu20+-262148)], alu26);
      var val7 = data2_24300[(alu23+3)];
      var val8 = select(0.0f, data1_503316480[(alu20+-262144)], alu21);
      var val9 = data2_24300[(alu23+4)];
      var alu27 = (alu4&alu21);
      var val10 = select(0.0f, data1_503316480[(alu20+-262140)], alu27);
      var val11 = data2_24300[(alu23+5)];
      var alu28 = (alu5&alu3&alu21);
      var val12 = select(0.0f, data1_503316480[(alu20+-261124)], alu28);
      var val13 = data2_24300[(alu23+6)];
      var alu29 = (alu3&alu21);
      var val14 = select(0.0f, data1_503316480[(alu20+-261120)], alu29);
      var val15 = data2_24300[(alu23+7)];
      var alu30 = (alu4&alu3&alu21);
      var val16 = select(0.0f, data1_503316480[(alu20+-261116)], alu30);
      var val17 = data2_24300[(alu23+8)];
      var val18 = data2_24300[(alu23+810)];
      var val19 = data2_24300[(alu23+811)];
      var val20 = data2_24300[(alu23+812)];
      var val21 = data2_24300[(alu23+813)];
      var val22 = data2_24300[(alu23+814)];
      var val23 = data2_24300[(alu23+815)];
      var val24 = data2_24300[(alu23+816)];
      var val25 = data2_24300[(alu23+817)];
      var val26 = data2_24300[(alu23+818)];
      var val27 = data2_24300[(alu23+1620)];
      var val28 = data2_24300[(alu23+1621)];
      var val29 = data2_24300[(alu23+1622)];
      var val30 = data2_24300[(alu23+1623)];
      var val31 = data2_24300[(alu23+1624)];
      var val32 = data2_24300[(alu23+1625)];
      var val33 = data2_24300[(alu23+1626)];
      var val34 = data2_24300[(alu23+1627)];
      var val35 = data2_24300[(alu23+1628)];
      var val36 = select(0.0f, data1_503316480[(alu20+-263171)], alu22);
      var val37 = select(0.0f, data1_503316480[(alu20+-263167)], alu24);
      var val38 = select(0.0f, data1_503316480[(alu20+-263163)], alu25);
      var val39 = select(0.0f, data1_503316480[(alu20+-262147)], alu26);
      var val40 = select(0.0f, data1_503316480[(alu20+-262143)], alu21);
      var val41 = select(0.0f, data1_503316480[(alu20+-262139)], alu27);
      var val42 = select(0.0f, data1_503316480[(alu20+-261123)], alu28);
      var val43 = select(0.0f, data1_503316480[(alu20+-261119)], alu29);
      var val44 = select(0.0f, data1_503316480[(alu20+-261115)], alu30);
      var val45 = select(0.0f, data1_503316480[(alu20+-263170)], alu22);
      var val46 = select(0.0f, data1_503316480[(alu20+-263166)], alu24);
      var val47 = select(0.0f, data1_503316480[(alu20+-263162)], alu25);
      var val48 = select(0.0f, data1_503316480[(alu20+-262146)], alu26);
      var val49 = select(0.0f, data1_503316480[(alu20+-262142)], alu21);
      var val50 = select(0.0f, data1_503316480[(alu20+-262138)], alu27);
      var val51 = select(0.0f, data1_503316480[(alu20+-261122)], alu28);
      var val52 = select(0.0f, data1_503316480[(alu20+-261118)], alu29);
      var val53 = select(0.0f, data1_503316480[(alu20+-261114)], alu30);
      var val54 = select(0.0f, data1_503316480[(alu20+-263169)], alu22);
      var val55 = select(0.0f, data1_503316480[(alu20+-263165)], alu24);
      var val56 = select(0.0f, data1_503316480[(alu20+-263161)], alu25);
      var val57 = select(0.0f, data1_503316480[(alu20+-262145)], alu26);
      var val58 = select(0.0f, data1_503316480[(alu20+-262141)], alu21);
      var val59 = select(0.0f, data1_503316480[(alu20+-262137)], alu27);
      var val60 = select(0.0f, data1_503316480[(alu20+-261121)], alu28);
      var val61 = select(0.0f, data1_503316480[(alu20+-261117)], alu29);
      var val62 = select(0.0f, data1_503316480[(alu20+-261113)], alu30);
      acc0[0] = (acc0[0]+(val0*val2)+(val3*val1)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val3*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val3*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val2)+(val37*val1)+(val38*val5)+(val39*val7)+(val40*val9)+(val41*val11)+(val42*val13)+(val43*val15)+(val44*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val37*val19)+(val38*val20)+(val39*val21)+(val40*val22)+(val41*val23)+(val42*val24)+(val43*val25)+(val44*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val37*val28)+(val38*val29)+(val39*val30)+(val40*val31)+(val41*val32)+(val42*val33)+(val43*val34)+(val44*val35));
      acc0[6] = (acc0[6]+(val45*val2)+(val46*val1)+(val47*val5)+(val48*val7)+(val49*val9)+(val50*val11)+(val51*val13)+(val52*val15)+(val53*val17));
      acc0[7] = (acc0[7]+(val45*val18)+(val46*val19)+(val47*val20)+(val48*val21)+(val49*val22)+(val50*val23)+(val51*val24)+(val52*val25)+(val53*val26));
      acc0[8] = (acc0[8]+(val45*val27)+(val46*val28)+(val47*val29)+(val48*val30)+(val49*val31)+(val50*val32)+(val51*val33)+(val52*val34)+(val53*val35));
      acc0[9] = (acc0[9]+(val54*val2)+(val55*val1)+(val56*val5)+(val57*val7)+(val58*val9)+(val59*val11)+(val60*val13)+(val61*val15)+(val62*val17));
      acc0[10] = (acc0[10]+(val54*val18)+(val55*val19)+(val56*val20)+(val57*val21)+(val58*val22)+(val59*val23)+(val60*val24)+(val61*val25)+(val62*val26));
      acc0[11] = (acc0[11]+(val54*val27)+(val55*val28)+(val56*val29)+(val57*val30)+(val58*val31)+(val59*val32)+(val60*val33)+(val61*val34)+(val62*val35));
    }
  }
  var alu45 = (gidx2*3);
  var val63 = data3_30[alu45];
  var val64 = data3_30[(alu45+1)];
  var val65 = data3_30[(alu45+2)];
  var alu46 = (alu2+cast0+(gidx2*50331648));
  var alu47 = (acc0[0]+val63);
  var alu48 = (acc0[3]+val63);
  var alu49 = (acc0[6]+val63);
  var alu50 = (acc0[9]+val63);
  var alu51 = (1.0f-exp2((alu47*1.4426950408889634f)));
  var alu52 = (1.0f-exp2((alu48*1.4426950408889634f)));
  var alu53 = (1.0f-exp2((alu49*1.4426950408889634f)));
  var alu54 = (1.0f-exp2((alu50*1.4426950408889634f)));
  var alu55 = select(0.0f,alu47,(0.0f<alu47));
  var alu56 = select(0.0f,alu51,(0.0f<alu51));
  var alu57 = select(0.0f,alu48,(0.0f<alu48));
  var alu58 = select(0.0f,alu52,(0.0f<alu52));
  var alu59 = select(0.0f,alu49,(0.0f<alu49));
  var alu60 = select(0.0f,alu53,(0.0f<alu53));
  var alu61 = select(0.0f,alu50,(0.0f<alu50));
  var alu62 = select(0.0f,alu54,(0.0f<alu54));
  data0_503316480[alu46] = (alu55-alu56);
  data0_503316480[(alu46+1)] = (alu57-alu58);
  data0_503316480[(alu46+2)] = (alu59-alu60);
  data0_503316480[(alu46+3)] = (alu61-alu62);
  var alu67 = (acc0[1]+val64);
  var alu68 = (acc0[4]+val64);
  var alu69 = (acc0[7]+val64);
  var alu70 = (acc0[10]+val64);
  var alu71 = (1.0f-exp2((alu67*1.4426950408889634f)));
  var alu72 = (1.0f-exp2((alu68*1.4426950408889634f)));
  var alu73 = (1.0f-exp2((alu69*1.4426950408889634f)));
  var alu74 = (1.0f-exp2((alu70*1.4426950408889634f)));
  var alu75 = select(0.0f,alu67,(0.0f<alu67));
  var alu76 = select(0.0f,alu71,(0.0f<alu71));
  var alu77 = select(0.0f,alu68,(0.0f<alu68));
  var alu78 = select(0.0f,alu72,(0.0f<alu72));
  var alu79 = select(0.0f,alu69,(0.0f<alu69));
  var alu80 = select(0.0f,alu73,(0.0f<alu73));
  var alu81 = select(0.0f,alu70,(0.0f<alu70));
  var alu82 = select(0.0f,alu74,(0.0f<alu74));
  data0_503316480[(alu46+16777216)] = (alu75-alu76);
  data0_503316480[(alu46+16777217)] = (alu77-alu78);
  data0_503316480[(alu46+16777218)] = (alu79-alu80);
  data0_503316480[(alu46+16777219)] = (alu81-alu82);
  var alu87 = (acc0[2]+val65);
  var alu88 = (acc0[5]+val65);
  var alu89 = (acc0[8]+val65);
  var alu90 = (acc0[11]+val65);
  var alu91 = (1.0f-exp2((alu87*1.4426950408889634f)));
  var alu92 = (1.0f-exp2((alu88*1.4426950408889634f)));
  var alu93 = (1.0f-exp2((alu89*1.4426950408889634f)));
  var alu94 = (1.0f-exp2((alu90*1.4426950408889634f)));
  var alu95 = select(0.0f,alu87,(0.0f<alu87));
  var alu96 = select(0.0f,alu91,(0.0f<alu91));
  var alu97 = select(0.0f,alu88,(0.0f<alu88));
  var alu98 = select(0.0f,alu92,(0.0f<alu92));
  var alu99 = select(0.0f,alu89,(0.0f<alu89));
  var alu100 = select(0.0f,alu93,(0.0f<alu93));
  var alu101 = select(0.0f,alu90,(0.0f<alu90));
  var alu102 = select(0.0f,alu94,(0.0f<alu94));
  data0_503316480[(alu46+33554432)] = (alu95-alu96);
  data0_503316480[(alu46+33554433)] = (alu97-alu98);
  data0_503316480[(alu46+33554434)] = (alu99-alu100);
  data0_503316480[(alu46+33554435)] = (alu101-alu102);
}`;

const r_10_256_32_4_8_16_4_3_30_3_3_3n2 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_503316480:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_503316480:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24300:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_30:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 10 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx1+bitcast<i32>((cast1<<4u)));
  var alu1 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((bitcast<u32>((gidx0>>2u))<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast1<<6u)));
  var alu2 = (gidx0<124);
  var alu3 = (alu0<62);
  var alu4 = (1<alu0);
  var alu5 = (3<gidx0);
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
  for (var Ridx0 = 0; Ridx0 < 30; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast2 = bitcast<u32>(Ridx1);
      var alu18 = (gidx1+bitcast<i32>((cast2<<3u)));
      var alu19 = (alu1+cast0+bitcast<i32>((cast2<<19u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu20 = ((7<alu18)&(alu18<264));
      var alu21 = (alu4&alu5&alu20);
      var val0 = select(0.0f, data1_503316480[(alu19+-526344)], alu21);
      var alu22 = ((Ridx0*27)+(Ridx1*9)+(gidx2*2430));
      var val1 = data2_24300[(alu22+1)];
      var val2 = data2_24300[(alu22+3)];
      var val3 = data2_24300[alu22];
      var alu23 = (alu5&alu20);
      var val4 = select(0.0f, data1_503316480[(alu19+-526336)], alu23);
      var alu24 = (alu3&alu5&alu20);
      var val5 = select(0.0f, data1_503316480[(alu19+-526328)], alu24);
      var val6 = data2_24300[(alu22+2)];
      var alu25 = (alu4&alu20);
      var val7 = select(0.0f, data1_503316480[(alu19+-524296)], alu25);
      var val8 = select(0.0f, data1_503316480[(alu19+-524288)], alu20);
      var val9 = data2_24300[(alu22+4)];
      var alu26 = (alu3&alu20);
      var val10 = select(0.0f, data1_503316480[(alu19+-524280)], alu26);
      var val11 = data2_24300[(alu22+5)];
      var alu27 = (alu4&alu2&alu20);
      var val12 = select(0.0f, data1_503316480[(alu19+-522248)], alu27);
      var val13 = data2_24300[(alu22+6)];
      var alu28 = (alu2&alu20);
      var val14 = select(0.0f, data1_503316480[(alu19+-522240)], alu28);
      var val15 = data2_24300[(alu22+7)];
      var alu29 = (alu3&alu2&alu20);
      var val16 = select(0.0f, data1_503316480[(alu19+-522232)], alu29);
      var val17 = data2_24300[(alu22+8)];
      var val18 = data2_24300[(alu22+810)];
      var val19 = data2_24300[(alu22+811)];
      var val20 = data2_24300[(alu22+812)];
      var val21 = data2_24300[(alu22+813)];
      var val22 = data2_24300[(alu22+814)];
      var val23 = data2_24300[(alu22+815)];
      var val24 = data2_24300[(alu22+816)];
      var val25 = data2_24300[(alu22+817)];
      var val26 = data2_24300[(alu22+818)];
      var val27 = data2_24300[(alu22+1620)];
      var val28 = data2_24300[(alu22+1621)];
      var val29 = data2_24300[(alu22+1622)];
      var val30 = data2_24300[(alu22+1623)];
      var val31 = data2_24300[(alu22+1624)];
      var val32 = data2_24300[(alu22+1625)];
      var val33 = data2_24300[(alu22+1626)];
      var val34 = data2_24300[(alu22+1627)];
      var val35 = data2_24300[(alu22+1628)];
      var val36 = select(0.0f, data1_503316480[(alu19+-526343)], alu21);
      var val37 = select(0.0f, data1_503316480[(alu19+-526335)], alu23);
      var val38 = select(0.0f, data1_503316480[(alu19+-526327)], alu24);
      var val39 = select(0.0f, data1_503316480[(alu19+-524295)], alu25);
      var val40 = select(0.0f, data1_503316480[(alu19+-524287)], alu20);
      var val41 = select(0.0f, data1_503316480[(alu19+-524279)], alu26);
      var val42 = select(0.0f, data1_503316480[(alu19+-522247)], alu27);
      var val43 = select(0.0f, data1_503316480[(alu19+-522239)], alu28);
      var val44 = select(0.0f, data1_503316480[(alu19+-522231)], alu29);
      var val45 = select(0.0f, data1_503316480[(alu19+-526342)], alu21);
      var val46 = select(0.0f, data1_503316480[(alu19+-526334)], alu23);
      var val47 = select(0.0f, data1_503316480[(alu19+-526326)], alu24);
      var val48 = select(0.0f, data1_503316480[(alu19+-524294)], alu25);
      var val49 = select(0.0f, data1_503316480[(alu19+-524286)], alu20);
      var val50 = select(0.0f, data1_503316480[(alu19+-524278)], alu26);
      var val51 = select(0.0f, data1_503316480[(alu19+-522246)], alu27);
      var val52 = select(0.0f, data1_503316480[(alu19+-522238)], alu28);
      var val53 = select(0.0f, data1_503316480[(alu19+-522230)], alu29);
      var val54 = select(0.0f, data1_503316480[(alu19+-526341)], alu21);
      var val55 = select(0.0f, data1_503316480[(alu19+-526333)], alu23);
      var val56 = select(0.0f, data1_503316480[(alu19+-526325)], alu24);
      var val57 = select(0.0f, data1_503316480[(alu19+-524293)], alu25);
      var val58 = select(0.0f, data1_503316480[(alu19+-524285)], alu20);
      var val59 = select(0.0f, data1_503316480[(alu19+-524277)], alu26);
      var val60 = select(0.0f, data1_503316480[(alu19+-522245)], alu27);
      var val61 = select(0.0f, data1_503316480[(alu19+-522237)], alu28);
      var val62 = select(0.0f, data1_503316480[(alu19+-522229)], alu29);
      acc0[0] = (acc0[0]+(val0*val3)+(val4*val1)+(val5*val6)+(val7*val2)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val4*val19)+(val5*val20)+(val7*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val4*val28)+(val5*val29)+(val7*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val3)+(val37*val1)+(val38*val6)+(val39*val2)+(val40*val9)+(val41*val11)+(val42*val13)+(val43*val15)+(val44*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val37*val19)+(val38*val20)+(val39*val21)+(val40*val22)+(val41*val23)+(val42*val24)+(val43*val25)+(val44*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val37*val28)+(val38*val29)+(val39*val30)+(val40*val31)+(val41*val32)+(val42*val33)+(val43*val34)+(val44*val35));
      acc0[6] = (acc0[6]+(val45*val3)+(val46*val1)+(val47*val6)+(val48*val2)+(val49*val9)+(val50*val11)+(val51*val13)+(val52*val15)+(val53*val17));
      acc0[7] = (acc0[7]+(val45*val18)+(val46*val19)+(val47*val20)+(val48*val21)+(val49*val22)+(val50*val23)+(val51*val24)+(val52*val25)+(val53*val26));
      acc0[8] = (acc0[8]+(val45*val27)+(val46*val28)+(val47*val29)+(val48*val30)+(val49*val31)+(val50*val32)+(val51*val33)+(val52*val34)+(val53*val35));
      acc0[9] = (acc0[9]+(val54*val3)+(val55*val1)+(val56*val6)+(val57*val2)+(val58*val9)+(val59*val11)+(val60*val13)+(val61*val15)+(val62*val17));
      acc0[10] = (acc0[10]+(val54*val18)+(val55*val19)+(val56*val20)+(val57*val21)+(val58*val22)+(val59*val23)+(val60*val24)+(val61*val25)+(val62*val26));
      acc0[11] = (acc0[11]+(val54*val27)+(val55*val28)+(val56*val29)+(val57*val30)+(val58*val31)+(val59*val32)+(val60*val33)+(val61*val34)+(val62*val35));
    }
  }
  var alu44 = (gidx2*3);
  var val63 = data3_30[alu44];
  var val64 = data3_30[(alu44+1)];
  var val65 = data3_30[(alu44+2)];
  var alu45 = (alu1+cast0+(gidx2*50331648));
  var alu46 = (acc0[0]+val63);
  var alu47 = (acc0[3]+val63);
  var alu48 = (acc0[6]+val63);
  var alu49 = (acc0[9]+val63);
  var alu50 = (1.0f-exp2((alu46*1.4426950408889634f)));
  var alu51 = (1.0f-exp2((alu47*1.4426950408889634f)));
  var alu52 = (1.0f-exp2((alu48*1.4426950408889634f)));
  var alu53 = (1.0f-exp2((alu49*1.4426950408889634f)));
  var alu54 = select(0.0f,alu46,(0.0f<alu46));
  var alu55 = select(0.0f,alu50,(0.0f<alu50));
  var alu56 = select(0.0f,alu47,(0.0f<alu47));
  var alu57 = select(0.0f,alu51,(0.0f<alu51));
  var alu58 = select(0.0f,alu48,(0.0f<alu48));
  var alu59 = select(0.0f,alu52,(0.0f<alu52));
  var alu60 = select(0.0f,alu49,(0.0f<alu49));
  var alu61 = select(0.0f,alu53,(0.0f<alu53));
  data0_503316480[alu45] = (alu54-alu55);
  data0_503316480[(alu45+1)] = (alu56-alu57);
  data0_503316480[(alu45+2)] = (alu58-alu59);
  data0_503316480[(alu45+3)] = (alu60-alu61);
  var alu66 = (acc0[1]+val64);
  var alu67 = (acc0[4]+val64);
  var alu68 = (acc0[7]+val64);
  var alu69 = (acc0[10]+val64);
  var alu70 = (1.0f-exp2((alu66*1.4426950408889634f)));
  var alu71 = (1.0f-exp2((alu67*1.4426950408889634f)));
  var alu72 = (1.0f-exp2((alu68*1.4426950408889634f)));
  var alu73 = (1.0f-exp2((alu69*1.4426950408889634f)));
  var alu74 = select(0.0f,alu66,(0.0f<alu66));
  var alu75 = select(0.0f,alu70,(0.0f<alu70));
  var alu76 = select(0.0f,alu67,(0.0f<alu67));
  var alu77 = select(0.0f,alu71,(0.0f<alu71));
  var alu78 = select(0.0f,alu68,(0.0f<alu68));
  var alu79 = select(0.0f,alu72,(0.0f<alu72));
  var alu80 = select(0.0f,alu69,(0.0f<alu69));
  var alu81 = select(0.0f,alu73,(0.0f<alu73));
  data0_503316480[(alu45+16777216)] = (alu74-alu75);
  data0_503316480[(alu45+16777217)] = (alu76-alu77);
  data0_503316480[(alu45+16777218)] = (alu78-alu79);
  data0_503316480[(alu45+16777219)] = (alu80-alu81);
  var alu86 = (acc0[2]+val65);
  var alu87 = (acc0[5]+val65);
  var alu88 = (acc0[8]+val65);
  var alu89 = (acc0[11]+val65);
  var alu90 = (1.0f-exp2((alu86*1.4426950408889634f)));
  var alu91 = (1.0f-exp2((alu87*1.4426950408889634f)));
  var alu92 = (1.0f-exp2((alu88*1.4426950408889634f)));
  var alu93 = (1.0f-exp2((alu89*1.4426950408889634f)));
  var alu94 = select(0.0f,alu86,(0.0f<alu86));
  var alu95 = select(0.0f,alu90,(0.0f<alu90));
  var alu96 = select(0.0f,alu87,(0.0f<alu87));
  var alu97 = select(0.0f,alu91,(0.0f<alu91));
  var alu98 = select(0.0f,alu88,(0.0f<alu88));
  var alu99 = select(0.0f,alu92,(0.0f<alu92));
  var alu100 = select(0.0f,alu89,(0.0f<alu89));
  var alu101 = select(0.0f,alu93,(0.0f<alu93));
  data0_503316480[(alu45+33554432)] = (alu94-alu95);
  data0_503316480[(alu45+33554433)] = (alu96-alu97);
  data0_503316480[(alu45+33554434)] = (alu98-alu99);
  data0_503316480[(alu45+33554435)] = (alu100-alu101);
}`;

const r_10_256_32_4_8_16_4_3_30_3_3_3n3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_503316480:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_503316480:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24300:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_30:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 10 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx1+bitcast<i32>((cast1<<4u)));
  var alu1 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((bitcast<u32>((gidx0>>2u))<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast1<<6u)));
  var alu2 = (gidx0<120);
  var alu3 = (alu0<60);
  var alu4 = (3<alu0);
  var alu5 = (7<gidx0);
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
  for (var Ridx0 = 0; Ridx0 < 30; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast2 = bitcast<u32>(Ridx1);
      var alu18 = (gidx1+bitcast<i32>((cast2<<4u)));
      var alu19 = (alu1+cast0+bitcast<i32>((cast2<<20u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu20 = ((15<alu18)&(alu18<272));
      var alu21 = (alu4&alu5&alu20);
      var val0 = select(0.0f, data1_503316480[(alu19+-1052688)], alu21);
      var alu22 = ((Ridx0*27)+(Ridx1*9)+(gidx2*2430));
      var val1 = data2_24300[(alu22+1)];
      var val2 = data2_24300[(alu22+3)];
      var val3 = data2_24300[alu22];
      var alu23 = (alu5&alu20);
      var val4 = select(0.0f, data1_503316480[(alu19+-1052672)], alu23);
      var alu24 = (alu3&alu5&alu20);
      var val5 = select(0.0f, data1_503316480[(alu19+-1052656)], alu24);
      var val6 = data2_24300[(alu22+2)];
      var alu25 = (alu4&alu20);
      var val7 = select(0.0f, data1_503316480[(alu19+-1048592)], alu25);
      var val8 = select(0.0f, data1_503316480[(alu19+-1048576)], alu20);
      var val9 = data2_24300[(alu22+4)];
      var alu26 = (alu3&alu20);
      var val10 = select(0.0f, data1_503316480[(alu19+-1048560)], alu26);
      var val11 = data2_24300[(alu22+5)];
      var alu27 = (alu4&alu2&alu20);
      var val12 = select(0.0f, data1_503316480[(alu19+-1044496)], alu27);
      var val13 = data2_24300[(alu22+6)];
      var alu28 = (alu2&alu20);
      var val14 = select(0.0f, data1_503316480[(alu19+-1044480)], alu28);
      var val15 = data2_24300[(alu22+7)];
      var alu29 = (alu3&alu2&alu20);
      var val16 = select(0.0f, data1_503316480[(alu19+-1044464)], alu29);
      var val17 = data2_24300[(alu22+8)];
      var val18 = data2_24300[(alu22+810)];
      var val19 = data2_24300[(alu22+811)];
      var val20 = data2_24300[(alu22+812)];
      var val21 = data2_24300[(alu22+813)];
      var val22 = data2_24300[(alu22+814)];
      var val23 = data2_24300[(alu22+815)];
      var val24 = data2_24300[(alu22+816)];
      var val25 = data2_24300[(alu22+817)];
      var val26 = data2_24300[(alu22+818)];
      var val27 = data2_24300[(alu22+1620)];
      var val28 = data2_24300[(alu22+1621)];
      var val29 = data2_24300[(alu22+1622)];
      var val30 = data2_24300[(alu22+1623)];
      var val31 = data2_24300[(alu22+1624)];
      var val32 = data2_24300[(alu22+1625)];
      var val33 = data2_24300[(alu22+1626)];
      var val34 = data2_24300[(alu22+1627)];
      var val35 = data2_24300[(alu22+1628)];
      var val36 = select(0.0f, data1_503316480[(alu19+-1052687)], alu21);
      var val37 = select(0.0f, data1_503316480[(alu19+-1052671)], alu23);
      var val38 = select(0.0f, data1_503316480[(alu19+-1052655)], alu24);
      var val39 = select(0.0f, data1_503316480[(alu19+-1048591)], alu25);
      var val40 = select(0.0f, data1_503316480[(alu19+-1048575)], alu20);
      var val41 = select(0.0f, data1_503316480[(alu19+-1048559)], alu26);
      var val42 = select(0.0f, data1_503316480[(alu19+-1044495)], alu27);
      var val43 = select(0.0f, data1_503316480[(alu19+-1044479)], alu28);
      var val44 = select(0.0f, data1_503316480[(alu19+-1044463)], alu29);
      var val45 = select(0.0f, data1_503316480[(alu19+-1052686)], alu21);
      var val46 = select(0.0f, data1_503316480[(alu19+-1052670)], alu23);
      var val47 = select(0.0f, data1_503316480[(alu19+-1052654)], alu24);
      var val48 = select(0.0f, data1_503316480[(alu19+-1048590)], alu25);
      var val49 = select(0.0f, data1_503316480[(alu19+-1048574)], alu20);
      var val50 = select(0.0f, data1_503316480[(alu19+-1048558)], alu26);
      var val51 = select(0.0f, data1_503316480[(alu19+-1044494)], alu27);
      var val52 = select(0.0f, data1_503316480[(alu19+-1044478)], alu28);
      var val53 = select(0.0f, data1_503316480[(alu19+-1044462)], alu29);
      var val54 = select(0.0f, data1_503316480[(alu19+-1052685)], alu21);
      var val55 = select(0.0f, data1_503316480[(alu19+-1052669)], alu23);
      var val56 = select(0.0f, data1_503316480[(alu19+-1052653)], alu24);
      var val57 = select(0.0f, data1_503316480[(alu19+-1048589)], alu25);
      var val58 = select(0.0f, data1_503316480[(alu19+-1048573)], alu20);
      var val59 = select(0.0f, data1_503316480[(alu19+-1048557)], alu26);
      var val60 = select(0.0f, data1_503316480[(alu19+-1044493)], alu27);
      var val61 = select(0.0f, data1_503316480[(alu19+-1044477)], alu28);
      var val62 = select(0.0f, data1_503316480[(alu19+-1044461)], alu29);
      acc0[0] = (acc0[0]+(val0*val3)+(val4*val1)+(val5*val6)+(val7*val2)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val4*val19)+(val5*val20)+(val7*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val4*val28)+(val5*val29)+(val7*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val3)+(val37*val1)+(val38*val6)+(val39*val2)+(val40*val9)+(val41*val11)+(val42*val13)+(val43*val15)+(val44*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val37*val19)+(val38*val20)+(val39*val21)+(val40*val22)+(val41*val23)+(val42*val24)+(val43*val25)+(val44*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val37*val28)+(val38*val29)+(val39*val30)+(val40*val31)+(val41*val32)+(val42*val33)+(val43*val34)+(val44*val35));
      acc0[6] = (acc0[6]+(val45*val3)+(val46*val1)+(val47*val6)+(val48*val2)+(val49*val9)+(val50*val11)+(val51*val13)+(val52*val15)+(val53*val17));
      acc0[7] = (acc0[7]+(val45*val18)+(val46*val19)+(val47*val20)+(val48*val21)+(val49*val22)+(val50*val23)+(val51*val24)+(val52*val25)+(val53*val26));
      acc0[8] = (acc0[8]+(val45*val27)+(val46*val28)+(val47*val29)+(val48*val30)+(val49*val31)+(val50*val32)+(val51*val33)+(val52*val34)+(val53*val35));
      acc0[9] = (acc0[9]+(val54*val3)+(val55*val1)+(val56*val6)+(val57*val2)+(val58*val9)+(val59*val11)+(val60*val13)+(val61*val15)+(val62*val17));
      acc0[10] = (acc0[10]+(val54*val18)+(val55*val19)+(val56*val20)+(val57*val21)+(val58*val22)+(val59*val23)+(val60*val24)+(val61*val25)+(val62*val26));
      acc0[11] = (acc0[11]+(val54*val27)+(val55*val28)+(val56*val29)+(val57*val30)+(val58*val31)+(val59*val32)+(val60*val33)+(val61*val34)+(val62*val35));
    }
  }
  var alu44 = (gidx2*3);
  var val63 = data3_30[alu44];
  var val64 = data3_30[(alu44+1)];
  var val65 = data3_30[(alu44+2)];
  var alu45 = (alu1+cast0+(gidx2*50331648));
  var alu46 = (acc0[0]+val63);
  var alu47 = (acc0[3]+val63);
  var alu48 = (acc0[6]+val63);
  var alu49 = (acc0[9]+val63);
  var alu50 = (1.0f-exp2((alu46*1.4426950408889634f)));
  var alu51 = (1.0f-exp2((alu47*1.4426950408889634f)));
  var alu52 = (1.0f-exp2((alu48*1.4426950408889634f)));
  var alu53 = (1.0f-exp2((alu49*1.4426950408889634f)));
  var alu54 = select(0.0f,alu46,(0.0f<alu46));
  var alu55 = select(0.0f,alu50,(0.0f<alu50));
  var alu56 = select(0.0f,alu47,(0.0f<alu47));
  var alu57 = select(0.0f,alu51,(0.0f<alu51));
  var alu58 = select(0.0f,alu48,(0.0f<alu48));
  var alu59 = select(0.0f,alu52,(0.0f<alu52));
  var alu60 = select(0.0f,alu49,(0.0f<alu49));
  var alu61 = select(0.0f,alu53,(0.0f<alu53));
  data0_503316480[alu45] = (alu54-alu55);
  data0_503316480[(alu45+1)] = (alu56-alu57);
  data0_503316480[(alu45+2)] = (alu58-alu59);
  data0_503316480[(alu45+3)] = (alu60-alu61);
  var alu66 = (acc0[1]+val64);
  var alu67 = (acc0[4]+val64);
  var alu68 = (acc0[7]+val64);
  var alu69 = (acc0[10]+val64);
  var alu70 = (1.0f-exp2((alu66*1.4426950408889634f)));
  var alu71 = (1.0f-exp2((alu67*1.4426950408889634f)));
  var alu72 = (1.0f-exp2((alu68*1.4426950408889634f)));
  var alu73 = (1.0f-exp2((alu69*1.4426950408889634f)));
  var alu74 = select(0.0f,alu66,(0.0f<alu66));
  var alu75 = select(0.0f,alu70,(0.0f<alu70));
  var alu76 = select(0.0f,alu67,(0.0f<alu67));
  var alu77 = select(0.0f,alu71,(0.0f<alu71));
  var alu78 = select(0.0f,alu68,(0.0f<alu68));
  var alu79 = select(0.0f,alu72,(0.0f<alu72));
  var alu80 = select(0.0f,alu69,(0.0f<alu69));
  var alu81 = select(0.0f,alu73,(0.0f<alu73));
  data0_503316480[(alu45+16777216)] = (alu74-alu75);
  data0_503316480[(alu45+16777217)] = (alu76-alu77);
  data0_503316480[(alu45+16777218)] = (alu78-alu79);
  data0_503316480[(alu45+16777219)] = (alu80-alu81);
  var alu86 = (acc0[2]+val65);
  var alu87 = (acc0[5]+val65);
  var alu88 = (acc0[8]+val65);
  var alu89 = (acc0[11]+val65);
  var alu90 = (1.0f-exp2((alu86*1.4426950408889634f)));
  var alu91 = (1.0f-exp2((alu87*1.4426950408889634f)));
  var alu92 = (1.0f-exp2((alu88*1.4426950408889634f)));
  var alu93 = (1.0f-exp2((alu89*1.4426950408889634f)));
  var alu94 = select(0.0f,alu86,(0.0f<alu86));
  var alu95 = select(0.0f,alu90,(0.0f<alu90));
  var alu96 = select(0.0f,alu87,(0.0f<alu87));
  var alu97 = select(0.0f,alu91,(0.0f<alu91));
  var alu98 = select(0.0f,alu88,(0.0f<alu88));
  var alu99 = select(0.0f,alu92,(0.0f<alu92));
  var alu100 = select(0.0f,alu89,(0.0f<alu89));
  var alu101 = select(0.0f,alu93,(0.0f<alu93));
  data0_503316480[(alu45+33554432)] = (alu94-alu95);
  data0_503316480[(alu45+33554433)] = (alu96-alu97);
  data0_503316480[(alu45+33554434)] = (alu98-alu99);
  data0_503316480[(alu45+33554435)] = (alu100-alu101);
}`;

const r_10_256_32_4_8_16_4_3_30_3_3_3n4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_503316480:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_503316480:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24300:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_30:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 10 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var alu0 = (gidx0>>2u);
  var cast1 = bitcast<u32>(alu0);
  var alu1 = (gidx0&3);
  var cast2 = bitcast<u32>(alu1);
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast1<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast2<<6u)));
  var alu3 = ((lidx0+bitcast<i32>((cast1<<3u)))<255);
  var alu4 = ((lidx1+bitcast<i32>((cast2<<4u)))<63);
  var alu5 = (0<(lidx0+alu0));
  var alu6 = (0<(lidx1+alu1));
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
  for (var Ridx0 = 0; Ridx0 < 30; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu19 = (gidx1+Ridx1);
      var alu20 = (alu2+cast0+bitcast<i32>((bitcast<u32>(Ridx1)<<16u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu21 = ((0<alu19)&(alu19<257));
      var val0 = select(0.0f, data1_503316480[(alu20+-65793)], (alu6&alu5&alu21));
      var alu22 = ((Ridx0*27)+(Ridx1*9)+(gidx2*2430));
      var val1 = data2_24300[alu22];
      var alu23 = (alu5&alu21);
      var val2 = select(0.0f, data1_503316480[(alu20+-65792)], alu23);
      var val3 = data2_24300[(alu22+1)];
      var val4 = select(0.0f, data1_503316480[(alu20+-65791)], alu23);
      var val5 = data2_24300[(alu22+2)];
      var val6 = select(0.0f, data1_503316480[(alu20+-65537)], (alu6&alu21));
      var val7 = data2_24300[(alu22+3)];
      var val8 = select(0.0f, data1_503316480[(alu20+-65536)], alu21);
      var val9 = data2_24300[(alu22+4)];
      var val10 = select(0.0f, data1_503316480[(alu20+-65535)], alu21);
      var val11 = data2_24300[(alu22+5)];
      var val12 = select(0.0f, data1_503316480[(alu20+-65281)], (alu6&alu3&alu21));
      var val13 = data2_24300[(alu22+6)];
      var alu24 = (alu3&alu21);
      var val14 = select(0.0f, data1_503316480[(alu20+-65280)], alu24);
      var val15 = data2_24300[(alu22+7)];
      var val16 = select(0.0f, data1_503316480[(alu20+-65279)], alu24);
      var val17 = data2_24300[(alu22+8)];
      var val18 = data2_24300[(alu22+810)];
      var val19 = data2_24300[(alu22+811)];
      var val20 = data2_24300[(alu22+812)];
      var val21 = data2_24300[(alu22+813)];
      var val22 = data2_24300[(alu22+814)];
      var val23 = data2_24300[(alu22+815)];
      var val24 = data2_24300[(alu22+816)];
      var val25 = data2_24300[(alu22+817)];
      var val26 = data2_24300[(alu22+818)];
      var val27 = data2_24300[(alu22+1620)];
      var val28 = data2_24300[(alu22+1621)];
      var val29 = data2_24300[(alu22+1622)];
      var val30 = data2_24300[(alu22+1623)];
      var val31 = data2_24300[(alu22+1624)];
      var val32 = data2_24300[(alu22+1625)];
      var val33 = data2_24300[(alu22+1626)];
      var val34 = data2_24300[(alu22+1627)];
      var val35 = data2_24300[(alu22+1628)];
      var val36 = select(0.0f, data1_503316480[(alu20+-65790)], alu23);
      var val37 = select(0.0f, data1_503316480[(alu20+-65534)], alu21);
      var val38 = select(0.0f, data1_503316480[(alu20+-65278)], alu24);
      var val39 = select(0.0f, data1_503316480[(alu20+-65789)], alu23);
      var val40 = select(0.0f, data1_503316480[(alu20+-65533)], alu21);
      var val41 = select(0.0f, data1_503316480[(alu20+-65277)], alu24);
      var val42 = select(0.0f, data1_503316480[(alu20+-65788)], (alu4&alu5&alu21));
      var val43 = select(0.0f, data1_503316480[(alu20+-65532)], (alu4&alu21));
      var val44 = select(0.0f, data1_503316480[(alu20+-65276)], (alu4&alu3&alu21));
      acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val2*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val2*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val2*val1)+(val4*val3)+(val36*val5)+(val8*val7)+(val10*val9)+(val37*val11)+(val14*val13)+(val16*val15)+(val38*val17));
      acc0[4] = (acc0[4]+(val2*val18)+(val4*val19)+(val36*val20)+(val8*val21)+(val10*val22)+(val37*val23)+(val14*val24)+(val16*val25)+(val38*val26));
      acc0[5] = (acc0[5]+(val2*val27)+(val4*val28)+(val36*val29)+(val8*val30)+(val10*val31)+(val37*val32)+(val14*val33)+(val16*val34)+(val38*val35));
      acc0[6] = (acc0[6]+(val4*val1)+(val36*val3)+(val39*val5)+(val10*val7)+(val37*val9)+(val40*val11)+(val16*val13)+(val38*val15)+(val41*val17));
      acc0[7] = (acc0[7]+(val4*val18)+(val36*val19)+(val39*val20)+(val10*val21)+(val37*val22)+(val40*val23)+(val16*val24)+(val38*val25)+(val41*val26));
      acc0[8] = (acc0[8]+(val4*val27)+(val36*val28)+(val39*val29)+(val10*val30)+(val37*val31)+(val40*val32)+(val16*val33)+(val38*val34)+(val41*val35));
      acc0[9] = (acc0[9]+(val36*val1)+(val39*val3)+(val42*val5)+(val37*val7)+(val40*val9)+(val43*val11)+(val38*val13)+(val41*val15)+(val44*val17));
      acc0[10] = (acc0[10]+(val36*val18)+(val39*val19)+(val42*val20)+(val37*val21)+(val40*val22)+(val43*val23)+(val38*val24)+(val41*val25)+(val44*val26));
      acc0[11] = (acc0[11]+(val36*val27)+(val39*val28)+(val42*val29)+(val37*val30)+(val40*val31)+(val43*val32)+(val38*val33)+(val41*val34)+(val44*val35));
    }
  }
  var alu39 = (gidx2*3);
  var val45 = data3_30[alu39];
  var val46 = data3_30[(alu39+1)];
  var val47 = data3_30[(alu39+2)];
  var alu40 = (alu2+cast0+(gidx2*50331648));
  var alu41 = (acc0[0]+val45);
  var alu42 = (acc0[3]+val45);
  var alu43 = (acc0[6]+val45);
  var alu44 = (acc0[9]+val45);
  var alu45 = (1.0f-exp2((alu41*1.4426950408889634f)));
  var alu46 = (1.0f-exp2((alu42*1.4426950408889634f)));
  var alu47 = (1.0f-exp2((alu43*1.4426950408889634f)));
  var alu48 = (1.0f-exp2((alu44*1.4426950408889634f)));
  var alu49 = select(0.0f,alu41,(0.0f<alu41));
  var alu50 = select(0.0f,alu45,(0.0f<alu45));
  var alu51 = select(0.0f,alu42,(0.0f<alu42));
  var alu52 = select(0.0f,alu46,(0.0f<alu46));
  var alu53 = select(0.0f,alu43,(0.0f<alu43));
  var alu54 = select(0.0f,alu47,(0.0f<alu47));
  var alu55 = select(0.0f,alu44,(0.0f<alu44));
  var alu56 = select(0.0f,alu48,(0.0f<alu48));
  data0_503316480[alu40] = (alu49-alu50);
  data0_503316480[(alu40+1)] = (alu51-alu52);
  data0_503316480[(alu40+2)] = (alu53-alu54);
  data0_503316480[(alu40+3)] = (alu55-alu56);
  var alu61 = (acc0[1]+val46);
  var alu62 = (acc0[4]+val46);
  var alu63 = (acc0[7]+val46);
  var alu64 = (acc0[10]+val46);
  var alu65 = (1.0f-exp2((alu61*1.4426950408889634f)));
  var alu66 = (1.0f-exp2((alu62*1.4426950408889634f)));
  var alu67 = (1.0f-exp2((alu63*1.4426950408889634f)));
  var alu68 = (1.0f-exp2((alu64*1.4426950408889634f)));
  var alu69 = select(0.0f,alu61,(0.0f<alu61));
  var alu70 = select(0.0f,alu65,(0.0f<alu65));
  var alu71 = select(0.0f,alu62,(0.0f<alu62));
  var alu72 = select(0.0f,alu66,(0.0f<alu66));
  var alu73 = select(0.0f,alu63,(0.0f<alu63));
  var alu74 = select(0.0f,alu67,(0.0f<alu67));
  var alu75 = select(0.0f,alu64,(0.0f<alu64));
  var alu76 = select(0.0f,alu68,(0.0f<alu68));
  data0_503316480[(alu40+16777216)] = (alu69-alu70);
  data0_503316480[(alu40+16777217)] = (alu71-alu72);
  data0_503316480[(alu40+16777218)] = (alu73-alu74);
  data0_503316480[(alu40+16777219)] = (alu75-alu76);
  var alu81 = (acc0[2]+val47);
  var alu82 = (acc0[5]+val47);
  var alu83 = (acc0[8]+val47);
  var alu84 = (acc0[11]+val47);
  var alu85 = (1.0f-exp2((alu81*1.4426950408889634f)));
  var alu86 = (1.0f-exp2((alu82*1.4426950408889634f)));
  var alu87 = (1.0f-exp2((alu83*1.4426950408889634f)));
  var alu88 = (1.0f-exp2((alu84*1.4426950408889634f)));
  var alu89 = select(0.0f,alu81,(0.0f<alu81));
  var alu90 = select(0.0f,alu85,(0.0f<alu85));
  var alu91 = select(0.0f,alu82,(0.0f<alu82));
  var alu92 = select(0.0f,alu86,(0.0f<alu86));
  var alu93 = select(0.0f,alu83,(0.0f<alu83));
  var alu94 = select(0.0f,alu87,(0.0f<alu87));
  var alu95 = select(0.0f,alu84,(0.0f<alu84));
  var alu96 = select(0.0f,alu88,(0.0f<alu88));
  data0_503316480[(alu40+33554432)] = (alu89-alu90);
  data0_503316480[(alu40+33554433)] = (alu91-alu92);
  data0_503316480[(alu40+33554434)] = (alu93-alu94);
  data0_503316480[(alu40+33554435)] = (alu95-alu96);
}`;

const r_25_262144_2_16_4_30 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_838860800:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_503316480:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_1500:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_50:array<f32>;
@compute @workgroup_size(2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 200 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = ((gidx1*41)>>10u);
  var alu1 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u)));
  var val0 = data1_503316480[alu1];
  var lidx0 = i32(lindex.x); /* 2 */
  var alu2 = (gidx1-(25*alu0));
  var alu3 = ((lidx0*30)+(alu2*60));
  var val1 = data2_1500[(alu3+1)];
  var val2 = data2_1500[(alu3+18)];
  var val3 = data2_1500[alu3];
  var val4 = data1_503316480[(alu1+2)];
  var val5 = data1_503316480[(alu1+3)];
  var val6 = data1_503316480[(alu1+16777216)];
  var val7 = data1_503316480[(alu1+16777218)];
  var val8 = data1_503316480[(alu1+16777219)];
  var val9 = data1_503316480[(alu1+33554432)];
  var val10 = data2_1500[(alu3+2)];
  var val11 = data1_503316480[(alu1+33554434)];
  var val12 = data1_503316480[(alu1+33554435)];
  var val13 = data1_503316480[(alu1+50331648)];
  var val14 = data2_1500[(alu3+3)];
  var val15 = data1_503316480[(alu1+50331650)];
  var val16 = data1_503316480[(alu1+50331651)];
  var val17 = data1_503316480[(alu1+67108864)];
  var val18 = data2_1500[(alu3+4)];
  var val19 = data1_503316480[(alu1+67108866)];
  var val20 = data1_503316480[(alu1+67108867)];
  var val21 = data1_503316480[(alu1+83886080)];
  var val22 = data2_1500[(alu3+5)];
  var val23 = data1_503316480[(alu1+83886082)];
  var val24 = data1_503316480[(alu1+83886083)];
  var val25 = data1_503316480[(alu1+100663296)];
  var val26 = data2_1500[(alu3+6)];
  var val27 = data1_503316480[(alu1+100663298)];
  var val28 = data1_503316480[(alu1+100663299)];
  var val29 = data1_503316480[(alu1+117440512)];
  var val30 = data2_1500[(alu3+7)];
  var val31 = data1_503316480[(alu1+117440514)];
  var val32 = data1_503316480[(alu1+117440515)];
  var val33 = data1_503316480[(alu1+134217728)];
  var val34 = data2_1500[(alu3+8)];
  var val35 = data1_503316480[(alu1+134217730)];
  var val36 = data1_503316480[(alu1+134217731)];
  var val37 = data1_503316480[(alu1+150994944)];
  var val38 = data2_1500[(alu3+9)];
  var val39 = data1_503316480[(alu1+150994946)];
  var val40 = data1_503316480[(alu1+150994947)];
  var val41 = data1_503316480[(alu1+167772160)];
  var val42 = data2_1500[(alu3+10)];
  var val43 = data1_503316480[(alu1+167772162)];
  var val44 = data1_503316480[(alu1+167772163)];
  var val45 = data1_503316480[(alu1+184549376)];
  var val46 = data2_1500[(alu3+11)];
  var val47 = data1_503316480[(alu1+184549378)];
  var val48 = data1_503316480[(alu1+184549379)];
  var val49 = data1_503316480[(alu1+201326592)];
  var val50 = data2_1500[(alu3+12)];
  var val51 = data1_503316480[(alu1+201326594)];
  var val52 = data1_503316480[(alu1+201326595)];
  var val53 = data1_503316480[(alu1+218103808)];
  var val54 = data2_1500[(alu3+13)];
  var val55 = data1_503316480[(alu1+218103810)];
  var val56 = data1_503316480[(alu1+218103811)];
  var val57 = data1_503316480[(alu1+234881024)];
  var val58 = data2_1500[(alu3+14)];
  var val59 = data1_503316480[(alu1+234881026)];
  var val60 = data1_503316480[(alu1+234881027)];
  var val61 = data1_503316480[(alu1+251658240)];
  var val62 = data2_1500[(alu3+15)];
  var val63 = data1_503316480[(alu1+251658242)];
  var val64 = data1_503316480[(alu1+251658243)];
  var val65 = data1_503316480[(alu1+268435456)];
  var val66 = data2_1500[(alu3+16)];
  var val67 = data1_503316480[(alu1+268435458)];
  var val68 = data1_503316480[(alu1+268435459)];
  var val69 = data1_503316480[(alu1+285212672)];
  var val70 = data2_1500[(alu3+17)];
  var val71 = data1_503316480[(alu1+285212674)];
  var val72 = data1_503316480[(alu1+285212675)];
  var val73 = data1_503316480[(alu1+301989888)];
  var val74 = data1_503316480[(alu1+301989889)];
  var val75 = data1_503316480[(alu1+301989890)];
  var val76 = data1_503316480[(alu1+301989891)];
  var val77 = data1_503316480[(alu1+318767104)];
  var val78 = data2_1500[(alu3+19)];
  var val79 = data1_503316480[(alu1+318767105)];
  var val80 = data1_503316480[(alu1+318767106)];
  var val81 = data1_503316480[(alu1+318767107)];
  var val82 = data1_503316480[(alu1+335544320)];
  var val83 = data2_1500[(alu3+20)];
  var val84 = data1_503316480[(alu1+335544321)];
  var val85 = data1_503316480[(alu1+335544322)];
  var val86 = data1_503316480[(alu1+335544323)];
  var val87 = data1_503316480[(alu1+352321536)];
  var val88 = data2_1500[(alu3+21)];
  var val89 = data1_503316480[(alu1+352321537)];
  var val90 = data1_503316480[(alu1+352321538)];
  var val91 = data1_503316480[(alu1+352321539)];
  var val92 = data1_503316480[(alu1+369098752)];
  var val93 = data2_1500[(alu3+22)];
  var val94 = data1_503316480[(alu1+369098753)];
  var val95 = data1_503316480[(alu1+369098754)];
  var val96 = data1_503316480[(alu1+369098755)];
  var val97 = data1_503316480[(alu1+385875968)];
  var val98 = data2_1500[(alu3+23)];
  var val99 = data1_503316480[(alu1+385875969)];
  var val100 = data1_503316480[(alu1+385875970)];
  var val101 = data1_503316480[(alu1+385875971)];
  var val102 = data1_503316480[(alu1+402653184)];
  var val103 = data2_1500[(alu3+24)];
  var val104 = data1_503316480[(alu1+402653185)];
  var val105 = data1_503316480[(alu1+402653186)];
  var val106 = data1_503316480[(alu1+402653187)];
  var val107 = data1_503316480[(alu1+419430400)];
  var val108 = data2_1500[(alu3+25)];
  var val109 = data1_503316480[(alu1+419430401)];
  var val110 = data1_503316480[(alu1+419430402)];
  var val111 = data1_503316480[(alu1+419430403)];
  var val112 = data1_503316480[(alu1+436207616)];
  var val113 = data2_1500[(alu3+26)];
  var val114 = data1_503316480[(alu1+436207617)];
  var val115 = data1_503316480[(alu1+436207618)];
  var val116 = data1_503316480[(alu1+436207619)];
  var val117 = data1_503316480[(alu1+452984832)];
  var val118 = data2_1500[(alu3+27)];
  var val119 = data1_503316480[(alu1+452984833)];
  var val120 = data1_503316480[(alu1+452984834)];
  var val121 = data1_503316480[(alu1+452984835)];
  var val122 = data1_503316480[(alu1+469762048)];
  var val123 = data2_1500[(alu3+28)];
  var val124 = data1_503316480[(alu1+469762049)];
  var val125 = data1_503316480[(alu1+469762050)];
  var val126 = data1_503316480[(alu1+469762051)];
  var val127 = data1_503316480[(alu1+486539264)];
  var val128 = data2_1500[(alu3+29)];
  var cast0 = bitcast<u32>(alu2);
  var val129 = data3_50[(lidx0+bitcast<i32>((cast0<<1u)))];
  var val130 = data1_503316480[(alu1+1)];
  var val131 = data1_503316480[(alu1+16777217)];
  var val132 = data1_503316480[(alu1+33554433)];
  var val133 = data1_503316480[(alu1+50331649)];
  var val134 = data1_503316480[(alu1+67108865)];
  var val135 = data1_503316480[(alu1+83886081)];
  var val136 = data1_503316480[(alu1+100663297)];
  var val137 = data1_503316480[(alu1+117440513)];
  var val138 = data1_503316480[(alu1+134217729)];
  var val139 = data1_503316480[(alu1+150994945)];
  var val140 = data1_503316480[(alu1+167772161)];
  var val141 = data1_503316480[(alu1+184549377)];
  var val142 = data1_503316480[(alu1+201326593)];
  var val143 = data1_503316480[(alu1+218103809)];
  var val144 = data1_503316480[(alu1+234881025)];
  var val145 = data1_503316480[(alu1+251658241)];
  var val146 = data1_503316480[(alu1+268435457)];
  var val147 = data1_503316480[(alu1+285212673)];
  var val148 = data1_503316480[(alu1+486539265)];
  var val149 = data1_503316480[(alu1+486539266)];
  var val150 = data1_503316480[(alu1+486539267)];
  var alu4 = (alu1+bitcast<i32>((bitcast<u32>(lidx0)<<24u))+bitcast<i32>((cast0<<25u)));
  data0_838860800[alu4] = ((val0*val3)+(val6*val1)+(val9*val10)+(val13*val14)+(val17*val18)+(val21*val22)+(val25*val26)+(val29*val30)+(val33*val34)+(val37*val38)+(val41*val42)+(val45*val46)+(val49*val50)+(val53*val54)+(val57*val58)+(val61*val62)+(val65*val66)+(val69*val70)+(val73*val2)+(val77*val78)+(val82*val83)+(val87*val88)+(val92*val93)+(val97*val98)+(val102*val103)+(val107*val108)+(val112*val113)+(val117*val118)+(val122*val123)+(val127*val128)+val129);
  data0_838860800[(alu4+1)] = ((val130*val3)+(val131*val1)+(val132*val10)+(val133*val14)+(val134*val18)+(val135*val22)+(val136*val26)+(val137*val30)+(val138*val34)+(val139*val38)+(val140*val42)+(val141*val46)+(val142*val50)+(val143*val54)+(val144*val58)+(val145*val62)+(val146*val66)+(val147*val70)+(val74*val2)+(val79*val78)+(val84*val83)+(val89*val88)+(val94*val93)+(val99*val98)+(val104*val103)+(val109*val108)+(val114*val113)+(val119*val118)+(val124*val123)+(val148*val128)+val129);
  data0_838860800[(alu4+2)] = ((val4*val3)+(val7*val1)+(val11*val10)+(val15*val14)+(val19*val18)+(val23*val22)+(val27*val26)+(val31*val30)+(val35*val34)+(val39*val38)+(val43*val42)+(val47*val46)+(val51*val50)+(val55*val54)+(val59*val58)+(val63*val62)+(val67*val66)+(val71*val70)+(val75*val2)+(val80*val78)+(val85*val83)+(val90*val88)+(val95*val93)+(val100*val98)+(val105*val103)+(val110*val108)+(val115*val113)+(val120*val118)+(val125*val123)+(val149*val128)+val129);
  data0_838860800[(alu4+3)] = ((val5*val3)+(val8*val1)+(val12*val10)+(val16*val14)+(val20*val18)+(val24*val22)+(val28*val26)+(val32*val30)+(val36*val34)+(val40*val38)+(val44*val42)+(val48*val46)+(val52*val50)+(val56*val54)+(val60*val58)+(val64*val62)+(val68*val66)+(val72*val70)+(val76*val2)+(val81*val78)+(val86*val83)+(val91*val88)+(val96*val93)+(val101*val98)+(val106*val103)+(val111*val108)+(val116*val113)+(val121*val118)+(val126*val123)+(val150*val128)+val129);
}`;

const r_131072_32_4_50 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_838860800:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,4>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<7u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
  acc0[0] = (f32(-INFINITY));
  acc0[1] = (f32(-INFINITY));
  acc0[2] = (f32(-INFINITY));
  acc0[3] = (f32(-INFINITY));
  for (var Ridx0 = 0; Ridx0 < 50; Ridx0++) {
    var alu5 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_838860800[alu5];
    var val1 = data1_838860800[(alu5+1)];
    var val2 = data1_838860800[(alu5+2)];
    var val3 = data1_838860800[(alu5+3)];
    var alu6 = select(acc0[0],val0,(acc0[0]<val0));
    var alu7 = select(acc0[1],val1,(acc0[1]<val1));
    var alu8 = select(acc0[2],val2,(acc0[2]<val2));
    var alu9 = select(acc0[3],val3,(acc0[3]<val3));
    acc0[0] = alu6;
    acc0[1] = alu7;
    acc0[2] = alu8;
    acc0[3] = alu9;
  }
  data0_16777216[alu0] = acc0[0];
  data0_16777216[(alu0+1)] = acc0[1];
  data0_16777216[(alu0+2)] = acc0[2];
  data0_16777216[(alu0+3)] = acc0[3];
}`;

const r_131072_32_4_50n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_838860800:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,4>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<7u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
  var val0 = data2_16777216[alu0];
  var alu1 = (alu0+1);
  var val1 = data2_16777216[alu1];
  var alu2 = (alu0+2);
  var val2 = data2_16777216[alu2];
  var alu3 = (alu0+3);
  var val3 = data2_16777216[alu3];
  acc0[0] = -2147483648;
  acc0[1] = -2147483648;
  acc0[2] = -2147483648;
  acc0[3] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 50; Ridx0++) {
    var alu8 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val4 = data1_838860800[alu8];
    var val5 = data1_838860800[(alu8+1)];
    var val6 = data1_838860800[(alu8+2)];
    var val7 = data1_838860800[(alu8+3)];
    var alu9 = (50-Ridx0);
    var alu10 = ((i32((val4==val0)))*alu9);
    var alu11 = ((i32((val5==val1)))*alu9);
    var alu12 = ((i32((val6==val2)))*alu9);
    var alu13 = ((i32((val7==val3)))*alu9);
    var alu14 = select(acc0[0],alu10,(acc0[0]<alu10));
    var alu15 = select(acc0[1],alu11,(acc0[1]<alu11));
    var alu16 = select(acc0[2],alu12,(acc0[2]<alu12));
    var alu17 = select(acc0[3],alu13,(acc0[3]<alu13));
    acc0[0] = alu14;
    acc0[1] = alu15;
    acc0[2] = alu16;
    acc0[3] = alu17;
  }
  data0_16777216[alu0] = (f32((50-acc0[0])));
  data0_16777216[alu1] = (f32((50-acc0[1])));
  data0_16777216[alu2] = (f32((50-acc0[2])));
  data0_16777216[alu3] = (f32((50-acc0[3])));
}`;

const setupNet = async (device, safetensor) => {
    const metadata = getTensorMetadata(safetensor);
    const infinityBuf = createInfinityUniformBuf(device);

    const layouts=[device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]})]

    const buf_0 = createEmptyBuf(device, 2013265920);;
    const input0 = createEmptyBuf(device, 67108864);;
    const buf_1 = createWeightBuf(device, 3240, getTensorBuffer(safetensor, metadata['model.0.weight']));
    const buf_2 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.0.bias']));
    const buf_3 = createEmptyBuf(device, 2013265920);;
    const buf_4 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.2.weight']));
    const buf_5 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.2.bias']));
    const buf_6 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.4.weight']));
    const buf_7 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.4.bias']));
    const buf_8 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.6.weight']));
    const buf_9 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.6.bias']));
    const buf_10 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.8.weight']));
    const buf_11 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.8.bias']));
    const buf_12 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.10.weight']));
    const buf_13 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.10.bias']));
    const buf_14 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.12.weight']));
    const buf_15 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.12.bias']));
    const buf_16 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.14.weight']));
    const buf_17 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.14.bias']));
    const buf_18 = createWeightBuf(device, 97200, getTensorBuffer(safetensor, metadata['model.16.weight']));
    const buf_19 = createWeightBuf(device, 120, getTensorBuffer(safetensor, metadata['model.16.bias']));
    const buf_20 = createEmptyBuf(device, 3355443200);;
    const buf_21 = createWeightBuf(device, 6000, getTensorBuffer(safetensor, metadata['seq_conv_argmax.weight']));
    const buf_22 = createWeightBuf(device, 200, getTensorBuffer(safetensor, metadata['seq_conv_argmax.bias']));
    const buf_23 = createEmptyBuf(device, 67108864);;
    const output0 = createEmptyBuf(device, 67108864);;

    const gpuWriteBuffer0 = device.createBuffer({size:input0.size, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE });

    const gpuReadBuffer0 = device.createBuffer({size:output0.size, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });

    const kernels = [r_10_256_32_4_8_16_4_3_3_3_3, r_10_256_32_4_8_16_4_3_30_3_3_3, r_10_256_32_4_8_16_4_3_30_3_3_3n1, r_10_256_32_4_8_16_4_3_30_3_3_3n2, r_10_256_32_4_8_16_4_3_30_3_3_3n3, r_10_256_32_4_8_16_4_3_30_3_3_3n2, r_10_256_32_4_8_16_4_3_30_3_3_3n1, r_10_256_32_4_8_16_4_3_30_3_3_3, r_10_256_32_4_8_16_4_3_30_3_3_3n4, r_25_262144_2_16_4_30, r_131072_32_4_50, r_131072_32_4_50n1];
    const pipelines = await Promise.all(kernels.map(async (name, i) => {
      return await device.createComputePipelineAsync({
          layout: device.createPipelineLayout({
              bindGroupLayouts: [layouts[i]],
          }),
          compute: {
              module: device.createShaderModule({
                  code: name,
              }),
              entryPoint: "main",
          },
      });
  }))

    return async (_input0) => {
        let commandEncoder = device.createCommandEncoder();
        await gpuWriteBuffer0.mapAsync(GPUMapMode.WRITE);
        new Float32Array(gpuWriteBuffer0.getMappedRange()).set(_input0);
        gpuWriteBuffer0.unmap();
        commandEncoder.copyBufferToBuffer(gpuWriteBuffer0, 0, input0, 0, gpuWriteBuffer0.size);
        addComputePass(device, commandEncoder, pipelines[0], layouts[0], infinityBuf, [buf_0, input0, buf_1, buf_2], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[1], layouts[1], infinityBuf, [buf_3, buf_0, buf_4, buf_5], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[2], layouts[2], infinityBuf, [buf_0, buf_3, buf_6, buf_7], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[3], layouts[3], infinityBuf, [buf_3, buf_0, buf_8, buf_9], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[4], layouts[4], infinityBuf, [buf_0, buf_3, buf_10, buf_11], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[5], layouts[5], infinityBuf, [buf_3, buf_0, buf_12, buf_13], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[6], layouts[6], infinityBuf, [buf_0, buf_3, buf_14, buf_15], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[7], layouts[7], infinityBuf, [buf_3, buf_0, buf_16, buf_17], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[8], layouts[8], infinityBuf, [buf_0, buf_3, buf_18, buf_19], [128, 256, 10]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[9], layouts[9], infinityBuf, [buf_20, buf_0, buf_21, buf_22], [32768, 200, 1]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[10], layouts[10], infinityBuf, [buf_23, buf_20], [32768, 4, 1]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[11], layouts[11], infinityBuf, [output0, buf_20, buf_23], [32768, 4, 1]);
        commandEncoder.copyBufferToBuffer(output0, 0, gpuReadBuffer0, 0, output0.size);
        device.queue.submit([commandEncoder.finish()]);

        await gpuReadBuffer0.mapAsync(GPUMapMode.READ);
        const resultBuffer0 = new Float32Array(gpuReadBuffer0.size/4);
        resultBuffer0.set(new Float32Array(gpuReadBuffer0.getMappedRange()));
        gpuReadBuffer0.unmap();
        return [resultBuffer0];
    }
}
const load = async (device, weight_path) => { return await fetch(weight_path).then(x => x.arrayBuffer()).then(x => setupNet(device, new Uint8Array(x))); }
return { load, setupNet };
})();
export default aparc50;
