
const DKatlas = (() => {
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

const r_7_256_32_4_8_16_4_3_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_352321536:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_567:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_21:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 7 */
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
    var val1 = data2_567[(alu22+2)];
    var val2 = data2_567[alu22];
    var alu23 = (alu5&alu21);
    var val3 = select(0.0f, data1_16777216[(alu20+-65792)], alu23);
    var val4 = data2_567[(alu22+1)];
    var val5 = select(0.0f, data1_16777216[(alu20+-65791)], alu23);
    var val6 = select(0.0f, data1_16777216[(alu20+-65537)], (alu6&alu21));
    var val7 = data2_567[(alu22+3)];
    var val8 = select(0.0f, data1_16777216[(alu20+-65536)], alu21);
    var val9 = data2_567[(alu22+4)];
    var val10 = select(0.0f, data1_16777216[(alu20+-65535)], alu21);
    var val11 = data2_567[(alu22+5)];
    var val12 = select(0.0f, data1_16777216[(alu20+-65281)], (alu6&alu3&alu21));
    var val13 = data2_567[(alu22+6)];
    var alu24 = (alu3&alu21);
    var val14 = select(0.0f, data1_16777216[(alu20+-65280)], alu24);
    var val15 = data2_567[(alu22+7)];
    var val16 = select(0.0f, data1_16777216[(alu20+-65279)], alu24);
    var val17 = data2_567[(alu22+8)];
    var val18 = data2_567[(alu22+27)];
    var val19 = data2_567[(alu22+28)];
    var val20 = data2_567[(alu22+29)];
    var val21 = data2_567[(alu22+30)];
    var val22 = data2_567[(alu22+31)];
    var val23 = data2_567[(alu22+32)];
    var val24 = data2_567[(alu22+33)];
    var val25 = data2_567[(alu22+34)];
    var val26 = data2_567[(alu22+35)];
    var val27 = data2_567[(alu22+54)];
    var val28 = data2_567[(alu22+55)];
    var val29 = data2_567[(alu22+56)];
    var val30 = data2_567[(alu22+57)];
    var val31 = data2_567[(alu22+58)];
    var val32 = data2_567[(alu22+59)];
    var val33 = data2_567[(alu22+60)];
    var val34 = data2_567[(alu22+61)];
    var val35 = data2_567[(alu22+62)];
    var val36 = select(0.0f, data1_16777216[(alu20+-65790)], alu23);
    var val37 = select(0.0f, data1_16777216[(alu20+-65278)], alu24);
    var val38 = select(0.0f, data1_16777216[(alu20+-65789)], alu23);
    var val39 = select(0.0f, data1_16777216[(alu20+-65533)], alu21);
    var val40 = select(0.0f, data1_16777216[(alu20+-65277)], alu24);
    var val41 = select(0.0f, data1_16777216[(alu20+-65788)], (alu4&alu5&alu21));
    var val42 = select(0.0f, data1_16777216[(alu20+-65534)], alu21);
    var val43 = select(0.0f, data1_16777216[(alu20+-65532)], (alu4&alu21));
    var val44 = select(0.0f, data1_16777216[(alu20+-65276)], (alu4&alu3&alu21));
    acc0[0] = (acc0[0]+(val0*val2)+(val3*val4)+(val5*val1)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
    acc0[1] = (acc0[1]+(val0*val18)+(val3*val19)+(val5*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
    acc0[2] = (acc0[2]+(val0*val27)+(val3*val28)+(val5*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
    acc0[3] = (acc0[3]+(val3*val2)+(val5*val4)+(val36*val1)+(val8*val7)+(val10*val9)+(val42*val11)+(val14*val13)+(val16*val15)+(val37*val17));
    acc0[4] = (acc0[4]+(val3*val18)+(val5*val19)+(val36*val20)+(val8*val21)+(val10*val22)+(val42*val23)+(val14*val24)+(val16*val25)+(val37*val26));
    acc0[5] = (acc0[5]+(val3*val27)+(val5*val28)+(val36*val29)+(val8*val30)+(val10*val31)+(val42*val32)+(val14*val33)+(val16*val34)+(val37*val35));
    acc0[6] = (acc0[6]+(val5*val2)+(val36*val4)+(val38*val1)+(val10*val7)+(val42*val9)+(val39*val11)+(val16*val13)+(val37*val15)+(val40*val17));
    acc0[7] = (acc0[7]+(val5*val18)+(val36*val19)+(val38*val20)+(val10*val21)+(val42*val22)+(val39*val23)+(val16*val24)+(val37*val25)+(val40*val26));
    acc0[8] = (acc0[8]+(val5*val27)+(val36*val28)+(val38*val29)+(val10*val30)+(val42*val31)+(val39*val32)+(val16*val33)+(val37*val34)+(val40*val35));
    acc0[9] = (acc0[9]+(val36*val2)+(val38*val4)+(val41*val1)+(val42*val7)+(val39*val9)+(val43*val11)+(val37*val13)+(val40*val15)+(val44*val17));
    acc0[10] = (acc0[10]+(val36*val18)+(val38*val19)+(val41*val20)+(val42*val21)+(val39*val22)+(val43*val23)+(val37*val24)+(val40*val25)+(val44*val26));
    acc0[11] = (acc0[11]+(val36*val27)+(val38*val28)+(val41*val29)+(val42*val30)+(val39*val31)+(val43*val32)+(val37*val33)+(val40*val34)+(val44*val35));
  }
  var alu38 = (gidx2*3);
  var val45 = data3_21[alu38];
  var val46 = data3_21[(alu38+1)];
  var val47 = data3_21[(alu38+2)];
  var alu39 = (alu2+cast0+(gidx2*50331648));
  var alu40 = (acc0[0]+val45);
  var alu41 = (acc0[3]+val45);
  var alu42 = (acc0[6]+val45);
  var alu43 = (acc0[9]+val45);
  var alu44 = select(0.0f,alu40,(0.0f<alu40));
  var alu45 = select(0.0f,alu41,(0.0f<alu41));
  var alu46 = select(0.0f,alu42,(0.0f<alu42));
  var alu47 = select(0.0f,alu43,(0.0f<alu43));
  data0_352321536[alu39] = alu44;
  data0_352321536[(alu39+1)] = alu45;
  data0_352321536[(alu39+2)] = alu46;
  data0_352321536[(alu39+3)] = alu47;
  var alu52 = (acc0[1]+val46);
  var alu53 = (acc0[4]+val46);
  var alu54 = (acc0[7]+val46);
  var alu55 = (acc0[10]+val46);
  var alu56 = select(0.0f,alu52,(0.0f<alu52));
  var alu57 = select(0.0f,alu53,(0.0f<alu53));
  var alu58 = select(0.0f,alu54,(0.0f<alu54));
  var alu59 = select(0.0f,alu55,(0.0f<alu55));
  data0_352321536[(alu39+16777216)] = alu56;
  data0_352321536[(alu39+16777217)] = alu57;
  data0_352321536[(alu39+16777218)] = alu58;
  data0_352321536[(alu39+16777219)] = alu59;
  var alu64 = (acc0[2]+val47);
  var alu65 = (acc0[5]+val47);
  var alu66 = (acc0[8]+val47);
  var alu67 = (acc0[11]+val47);
  var alu68 = select(0.0f,alu64,(0.0f<alu64));
  var alu69 = select(0.0f,alu65,(0.0f<alu65));
  var alu70 = select(0.0f,alu66,(0.0f<alu66));
  var alu71 = select(0.0f,alu67,(0.0f<alu67));
  data0_352321536[(alu39+33554432)] = alu68;
  data0_352321536[(alu39+33554433)] = alu69;
  data0_352321536[(alu39+33554434)] = alu70;
  data0_352321536[(alu39+33554435)] = alu71;
}`;

const r_7_256_32_4_8_16_4_3_21_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_352321536:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_352321536:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_11907:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_21:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 7 */
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
  for (var Ridx0 = 0; Ridx0 < 21; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast4 = bitcast<u32>(Ridx1);
      var alu21 = (gidx1+bitcast<i32>((cast4<<1u)));
      var alu22 = (alu2+cast0+bitcast<i32>((cast4<<17u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu23 = ((1<alu21)&(alu21<258));
      var val0 = select(0.0f, data1_352321536[(alu22+-131586)], (alu6&alu8&alu23));
      var alu24 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1701));
      var val1 = data2_11907[(alu24+1)];
      var val2 = data2_11907[alu24];
      var alu25 = (alu8&alu23);
      var val3 = select(0.0f, data1_352321536[(alu22+-131584)], alu25);
      var val4 = select(0.0f, data1_352321536[(alu22+-131582)], alu25);
      var val5 = data2_11907[(alu24+2)];
      var val6 = select(0.0f, data1_352321536[(alu22+-131074)], (alu6&alu23));
      var val7 = data2_11907[(alu24+3)];
      var val8 = select(0.0f, data1_352321536[(alu22+-131072)], alu23);
      var val9 = data2_11907[(alu24+4)];
      var val10 = select(0.0f, data1_352321536[(alu22+-131070)], alu23);
      var val11 = data2_11907[(alu24+5)];
      var val12 = select(0.0f, data1_352321536[(alu22+-130562)], (alu6&alu3&alu23));
      var val13 = data2_11907[(alu24+6)];
      var alu26 = (alu3&alu23);
      var val14 = select(0.0f, data1_352321536[(alu22+-130560)], alu26);
      var val15 = data2_11907[(alu24+7)];
      var val16 = select(0.0f, data1_352321536[(alu22+-130558)], alu26);
      var val17 = data2_11907[(alu24+8)];
      var val18 = data2_11907[(alu24+567)];
      var val19 = data2_11907[(alu24+568)];
      var val20 = data2_11907[(alu24+569)];
      var val21 = data2_11907[(alu24+570)];
      var val22 = data2_11907[(alu24+571)];
      var val23 = data2_11907[(alu24+572)];
      var val24 = data2_11907[(alu24+573)];
      var val25 = data2_11907[(alu24+574)];
      var val26 = data2_11907[(alu24+575)];
      var val27 = data2_11907[(alu24+1134)];
      var val28 = data2_11907[(alu24+1135)];
      var val29 = data2_11907[(alu24+1136)];
      var val30 = data2_11907[(alu24+1137)];
      var val31 = data2_11907[(alu24+1138)];
      var val32 = data2_11907[(alu24+1139)];
      var val33 = data2_11907[(alu24+1140)];
      var val34 = data2_11907[(alu24+1141)];
      var val35 = data2_11907[(alu24+1142)];
      var val36 = select(0.0f, data1_352321536[(alu22+-131585)], (alu7&alu8&alu23));
      var val37 = select(0.0f, data1_352321536[(alu22+-131583)], alu25);
      var val38 = select(0.0f, data1_352321536[(alu22+-131581)], alu25);
      var val39 = select(0.0f, data1_352321536[(alu22+-130561)], (alu7&alu3&alu23));
      var val40 = select(0.0f, data1_352321536[(alu22+-130559)], alu26);
      var val41 = select(0.0f, data1_352321536[(alu22+-130557)], alu26);
      var val42 = select(0.0f, data1_352321536[(alu22+-131580)], (alu4&alu8&alu23));
      var val43 = select(0.0f, data1_352321536[(alu22+-131068)], (alu4&alu23));
      var val44 = select(0.0f, data1_352321536[(alu22+-130556)], (alu4&alu3&alu23));
      var val45 = select(0.0f, data1_352321536[(alu22+-131579)], (alu5&alu8&alu23));
      var val46 = select(0.0f, data1_352321536[(alu22+-131073)], (alu7&alu23));
      var val47 = select(0.0f, data1_352321536[(alu22+-131071)], alu23);
      var val48 = select(0.0f, data1_352321536[(alu22+-131069)], alu23);
      var val49 = select(0.0f, data1_352321536[(alu22+-131067)], (alu5&alu23));
      var val50 = select(0.0f, data1_352321536[(alu22+-130555)], (alu5&alu3&alu23));
      acc0[0] = (acc0[0]+(val0*val2)+(val3*val1)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val3*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val3*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val2)+(val37*val1)+(val38*val5)+(val46*val7)+(val47*val9)+(val48*val11)+(val39*val13)+(val40*val15)+(val41*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val37*val19)+(val38*val20)+(val46*val21)+(val47*val22)+(val48*val23)+(val39*val24)+(val40*val25)+(val41*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val37*val28)+(val38*val29)+(val46*val30)+(val47*val31)+(val48*val32)+(val39*val33)+(val40*val34)+(val41*val35));
      acc0[6] = (acc0[6]+(val3*val2)+(val4*val1)+(val42*val5)+(val8*val7)+(val10*val9)+(val43*val11)+(val14*val13)+(val16*val15)+(val44*val17));
      acc0[7] = (acc0[7]+(val3*val18)+(val4*val19)+(val42*val20)+(val8*val21)+(val10*val22)+(val43*val23)+(val14*val24)+(val16*val25)+(val44*val26));
      acc0[8] = (acc0[8]+(val3*val27)+(val4*val28)+(val42*val29)+(val8*val30)+(val10*val31)+(val43*val32)+(val14*val33)+(val16*val34)+(val44*val35));
      acc0[9] = (acc0[9]+(val37*val2)+(val38*val1)+(val45*val5)+(val47*val7)+(val48*val9)+(val49*val11)+(val40*val13)+(val41*val15)+(val50*val17));
      acc0[10] = (acc0[10]+(val37*val18)+(val38*val19)+(val45*val20)+(val47*val21)+(val48*val22)+(val49*val23)+(val40*val24)+(val41*val25)+(val50*val26));
      acc0[11] = (acc0[11]+(val37*val27)+(val38*val28)+(val45*val29)+(val47*val30)+(val48*val31)+(val49*val32)+(val40*val33)+(val41*val34)+(val50*val35));
    }
  }
  var alu41 = (gidx2*3);
  var val51 = data3_21[alu41];
  var val52 = data3_21[(alu41+1)];
  var val53 = data3_21[(alu41+2)];
  var alu42 = (alu2+cast0+(gidx2*50331648));
  var alu43 = (acc0[0]+val51);
  var alu44 = (acc0[3]+val51);
  var alu45 = (acc0[6]+val51);
  var alu46 = (acc0[9]+val51);
  var alu47 = select(0.0f,alu43,(0.0f<alu43));
  var alu48 = select(0.0f,alu44,(0.0f<alu44));
  var alu49 = select(0.0f,alu45,(0.0f<alu45));
  var alu50 = select(0.0f,alu46,(0.0f<alu46));
  data0_352321536[alu42] = alu47;
  data0_352321536[(alu42+1)] = alu48;
  data0_352321536[(alu42+2)] = alu49;
  data0_352321536[(alu42+3)] = alu50;
  var alu55 = (acc0[1]+val52);
  var alu56 = (acc0[4]+val52);
  var alu57 = (acc0[7]+val52);
  var alu58 = (acc0[10]+val52);
  var alu59 = select(0.0f,alu55,(0.0f<alu55));
  var alu60 = select(0.0f,alu56,(0.0f<alu56));
  var alu61 = select(0.0f,alu57,(0.0f<alu57));
  var alu62 = select(0.0f,alu58,(0.0f<alu58));
  data0_352321536[(alu42+16777216)] = alu59;
  data0_352321536[(alu42+16777217)] = alu60;
  data0_352321536[(alu42+16777218)] = alu61;
  data0_352321536[(alu42+16777219)] = alu62;
  var alu67 = (acc0[2]+val53);
  var alu68 = (acc0[5]+val53);
  var alu69 = (acc0[8]+val53);
  var alu70 = (acc0[11]+val53);
  var alu71 = select(0.0f,alu67,(0.0f<alu67));
  var alu72 = select(0.0f,alu68,(0.0f<alu68));
  var alu73 = select(0.0f,alu69,(0.0f<alu69));
  var alu74 = select(0.0f,alu70,(0.0f<alu70));
  data0_352321536[(alu42+33554432)] = alu71;
  data0_352321536[(alu42+33554433)] = alu72;
  data0_352321536[(alu42+33554434)] = alu73;
  data0_352321536[(alu42+33554435)] = alu74;
}`;

const r_7_256_32_4_8_16_4_3_21_3_3_3n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_352321536:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_352321536:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_11907:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_21:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 7 */
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
  for (var Ridx0 = 0; Ridx0 < 21; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast3 = bitcast<u32>(Ridx1);
      var alu19 = (gidx1+bitcast<i32>((cast3<<2u)));
      var alu20 = (alu2+cast0+bitcast<i32>((cast3<<18u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu21 = ((3<alu19)&(alu19<260));
      var alu22 = (alu5&alu6&alu21);
      var val0 = select(0.0f, data1_352321536[(alu20+-263172)], alu22);
      var alu23 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1701));
      var val1 = data2_11907[alu23];
      var alu24 = (alu6&alu21);
      var val2 = select(0.0f, data1_352321536[(alu20+-263168)], alu24);
      var val3 = data2_11907[(alu23+1)];
      var alu25 = (alu4&alu6&alu21);
      var val4 = select(0.0f, data1_352321536[(alu20+-263164)], alu25);
      var val5 = data2_11907[(alu23+2)];
      var alu26 = (alu5&alu21);
      var val6 = select(0.0f, data1_352321536[(alu20+-262148)], alu26);
      var val7 = data2_11907[(alu23+3)];
      var val8 = select(0.0f, data1_352321536[(alu20+-262144)], alu21);
      var val9 = data2_11907[(alu23+4)];
      var alu27 = (alu4&alu21);
      var val10 = select(0.0f, data1_352321536[(alu20+-262140)], alu27);
      var val11 = data2_11907[(alu23+5)];
      var alu28 = (alu5&alu3&alu21);
      var val12 = select(0.0f, data1_352321536[(alu20+-261124)], alu28);
      var val13 = data2_11907[(alu23+6)];
      var alu29 = (alu3&alu21);
      var val14 = select(0.0f, data1_352321536[(alu20+-261120)], alu29);
      var val15 = data2_11907[(alu23+7)];
      var alu30 = (alu4&alu3&alu21);
      var val16 = select(0.0f, data1_352321536[(alu20+-261116)], alu30);
      var val17 = data2_11907[(alu23+8)];
      var val18 = data2_11907[(alu23+567)];
      var val19 = data2_11907[(alu23+568)];
      var val20 = data2_11907[(alu23+569)];
      var val21 = data2_11907[(alu23+570)];
      var val22 = data2_11907[(alu23+571)];
      var val23 = data2_11907[(alu23+572)];
      var val24 = data2_11907[(alu23+573)];
      var val25 = data2_11907[(alu23+574)];
      var val26 = data2_11907[(alu23+575)];
      var val27 = data2_11907[(alu23+1134)];
      var val28 = data2_11907[(alu23+1135)];
      var val29 = data2_11907[(alu23+1136)];
      var val30 = data2_11907[(alu23+1137)];
      var val31 = data2_11907[(alu23+1138)];
      var val32 = data2_11907[(alu23+1139)];
      var val33 = data2_11907[(alu23+1140)];
      var val34 = data2_11907[(alu23+1141)];
      var val35 = data2_11907[(alu23+1142)];
      var val36 = select(0.0f, data1_352321536[(alu20+-263171)], alu22);
      var val37 = select(0.0f, data1_352321536[(alu20+-263167)], alu24);
      var val38 = select(0.0f, data1_352321536[(alu20+-263163)], alu25);
      var val39 = select(0.0f, data1_352321536[(alu20+-262147)], alu26);
      var val40 = select(0.0f, data1_352321536[(alu20+-262143)], alu21);
      var val41 = select(0.0f, data1_352321536[(alu20+-262139)], alu27);
      var val42 = select(0.0f, data1_352321536[(alu20+-261123)], alu28);
      var val43 = select(0.0f, data1_352321536[(alu20+-261119)], alu29);
      var val44 = select(0.0f, data1_352321536[(alu20+-261115)], alu30);
      var val45 = select(0.0f, data1_352321536[(alu20+-263170)], alu22);
      var val46 = select(0.0f, data1_352321536[(alu20+-263169)], alu22);
      var val47 = select(0.0f, data1_352321536[(alu20+-263166)], alu24);
      var val48 = select(0.0f, data1_352321536[(alu20+-263165)], alu24);
      var val49 = select(0.0f, data1_352321536[(alu20+-263162)], alu25);
      var val50 = select(0.0f, data1_352321536[(alu20+-263161)], alu25);
      var val51 = select(0.0f, data1_352321536[(alu20+-262146)], alu26);
      var val52 = select(0.0f, data1_352321536[(alu20+-262145)], alu26);
      var val53 = select(0.0f, data1_352321536[(alu20+-262142)], alu21);
      var val54 = select(0.0f, data1_352321536[(alu20+-262141)], alu21);
      var val55 = select(0.0f, data1_352321536[(alu20+-262138)], alu27);
      var val56 = select(0.0f, data1_352321536[(alu20+-261122)], alu28);
      var val57 = select(0.0f, data1_352321536[(alu20+-261118)], alu29);
      var val58 = select(0.0f, data1_352321536[(alu20+-261114)], alu30);
      var val59 = select(0.0f, data1_352321536[(alu20+-262137)], alu27);
      var val60 = select(0.0f, data1_352321536[(alu20+-261121)], alu28);
      var val61 = select(0.0f, data1_352321536[(alu20+-261117)], alu29);
      var val62 = select(0.0f, data1_352321536[(alu20+-261113)], alu30);
      acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val2*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val2*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val1)+(val37*val3)+(val38*val5)+(val39*val7)+(val40*val9)+(val41*val11)+(val42*val13)+(val43*val15)+(val44*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val37*val19)+(val38*val20)+(val39*val21)+(val40*val22)+(val41*val23)+(val42*val24)+(val43*val25)+(val44*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val37*val28)+(val38*val29)+(val39*val30)+(val40*val31)+(val41*val32)+(val42*val33)+(val43*val34)+(val44*val35));
      acc0[6] = (acc0[6]+(val45*val1)+(val47*val3)+(val49*val5)+(val51*val7)+(val53*val9)+(val55*val11)+(val56*val13)+(val57*val15)+(val58*val17));
      acc0[7] = (acc0[7]+(val45*val18)+(val47*val19)+(val49*val20)+(val51*val21)+(val53*val22)+(val55*val23)+(val56*val24)+(val57*val25)+(val58*val26));
      acc0[8] = (acc0[8]+(val45*val27)+(val47*val28)+(val49*val29)+(val51*val30)+(val53*val31)+(val55*val32)+(val56*val33)+(val57*val34)+(val58*val35));
      acc0[9] = (acc0[9]+(val46*val1)+(val48*val3)+(val50*val5)+(val52*val7)+(val54*val9)+(val59*val11)+(val60*val13)+(val61*val15)+(val62*val17));
      acc0[10] = (acc0[10]+(val46*val18)+(val48*val19)+(val50*val20)+(val52*val21)+(val54*val22)+(val59*val23)+(val60*val24)+(val61*val25)+(val62*val26));
      acc0[11] = (acc0[11]+(val46*val27)+(val48*val28)+(val50*val29)+(val52*val30)+(val54*val31)+(val59*val32)+(val60*val33)+(val61*val34)+(val62*val35));
    }
  }
  var alu45 = (gidx2*3);
  var val63 = data3_21[alu45];
  var val64 = data3_21[(alu45+1)];
  var val65 = data3_21[(alu45+2)];
  var alu46 = (alu2+cast0+(gidx2*50331648));
  var alu47 = (acc0[0]+val63);
  var alu48 = (acc0[3]+val63);
  var alu49 = (acc0[6]+val63);
  var alu50 = (acc0[9]+val63);
  var alu51 = select(0.0f,alu47,(0.0f<alu47));
  var alu52 = select(0.0f,alu48,(0.0f<alu48));
  var alu53 = select(0.0f,alu49,(0.0f<alu49));
  var alu54 = select(0.0f,alu50,(0.0f<alu50));
  data0_352321536[alu46] = alu51;
  data0_352321536[(alu46+1)] = alu52;
  data0_352321536[(alu46+2)] = alu53;
  data0_352321536[(alu46+3)] = alu54;
  var alu59 = (acc0[1]+val64);
  var alu60 = (acc0[4]+val64);
  var alu61 = (acc0[7]+val64);
  var alu62 = (acc0[10]+val64);
  var alu63 = select(0.0f,alu59,(0.0f<alu59));
  var alu64 = select(0.0f,alu60,(0.0f<alu60));
  var alu65 = select(0.0f,alu61,(0.0f<alu61));
  var alu66 = select(0.0f,alu62,(0.0f<alu62));
  data0_352321536[(alu46+16777216)] = alu63;
  data0_352321536[(alu46+16777217)] = alu64;
  data0_352321536[(alu46+16777218)] = alu65;
  data0_352321536[(alu46+16777219)] = alu66;
  var alu71 = (acc0[2]+val65);
  var alu72 = (acc0[5]+val65);
  var alu73 = (acc0[8]+val65);
  var alu74 = (acc0[11]+val65);
  var alu75 = select(0.0f,alu71,(0.0f<alu71));
  var alu76 = select(0.0f,alu72,(0.0f<alu72));
  var alu77 = select(0.0f,alu73,(0.0f<alu73));
  var alu78 = select(0.0f,alu74,(0.0f<alu74));
  data0_352321536[(alu46+33554432)] = alu75;
  data0_352321536[(alu46+33554433)] = alu76;
  data0_352321536[(alu46+33554434)] = alu77;
  data0_352321536[(alu46+33554435)] = alu78;
}`;

const r_7_256_32_4_8_16_4_3_21_3_3_3n2 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_352321536:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_352321536:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_11907:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_21:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 7 */
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
  for (var Ridx0 = 0; Ridx0 < 21; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast2 = bitcast<u32>(Ridx1);
      var alu18 = (gidx1+bitcast<i32>((cast2<<3u)));
      var alu19 = (alu1+cast0+bitcast<i32>((cast2<<19u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu20 = ((7<alu18)&(alu18<264));
      var alu21 = (alu4&alu5&alu20);
      var val0 = select(0.0f, data1_352321536[(alu19+-526344)], alu21);
      var alu22 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1701));
      var val1 = data2_11907[alu22];
      var alu23 = (alu5&alu20);
      var val2 = select(0.0f, data1_352321536[(alu19+-526336)], alu23);
      var val3 = data2_11907[(alu22+1)];
      var alu24 = (alu3&alu5&alu20);
      var val4 = select(0.0f, data1_352321536[(alu19+-526328)], alu24);
      var val5 = data2_11907[(alu22+2)];
      var alu25 = (alu4&alu20);
      var val6 = select(0.0f, data1_352321536[(alu19+-524296)], alu25);
      var val7 = data2_11907[(alu22+3)];
      var val8 = select(0.0f, data1_352321536[(alu19+-524288)], alu20);
      var val9 = data2_11907[(alu22+4)];
      var alu26 = (alu3&alu20);
      var val10 = select(0.0f, data1_352321536[(alu19+-524280)], alu26);
      var val11 = data2_11907[(alu22+5)];
      var alu27 = (alu4&alu2&alu20);
      var val12 = select(0.0f, data1_352321536[(alu19+-522248)], alu27);
      var val13 = data2_11907[(alu22+6)];
      var alu28 = (alu2&alu20);
      var val14 = select(0.0f, data1_352321536[(alu19+-522240)], alu28);
      var val15 = data2_11907[(alu22+7)];
      var alu29 = (alu3&alu2&alu20);
      var val16 = select(0.0f, data1_352321536[(alu19+-522232)], alu29);
      var val17 = data2_11907[(alu22+8)];
      var val18 = data2_11907[(alu22+567)];
      var val19 = data2_11907[(alu22+568)];
      var val20 = data2_11907[(alu22+569)];
      var val21 = data2_11907[(alu22+570)];
      var val22 = data2_11907[(alu22+571)];
      var val23 = data2_11907[(alu22+572)];
      var val24 = data2_11907[(alu22+573)];
      var val25 = data2_11907[(alu22+574)];
      var val26 = data2_11907[(alu22+575)];
      var val27 = data2_11907[(alu22+1134)];
      var val28 = data2_11907[(alu22+1135)];
      var val29 = data2_11907[(alu22+1136)];
      var val30 = data2_11907[(alu22+1137)];
      var val31 = data2_11907[(alu22+1138)];
      var val32 = data2_11907[(alu22+1139)];
      var val33 = data2_11907[(alu22+1140)];
      var val34 = data2_11907[(alu22+1141)];
      var val35 = data2_11907[(alu22+1142)];
      var val36 = select(0.0f, data1_352321536[(alu19+-526343)], alu21);
      var val37 = select(0.0f, data1_352321536[(alu19+-522231)], alu29);
      var val38 = select(0.0f, data1_352321536[(alu19+-526342)], alu21);
      var val39 = select(0.0f, data1_352321536[(alu19+-522238)], alu28);
      var val40 = select(0.0f, data1_352321536[(alu19+-522230)], alu29);
      var val41 = select(0.0f, data1_352321536[(alu19+-526341)], alu21);
      var val42 = select(0.0f, data1_352321536[(alu19+-526335)], alu23);
      var val43 = select(0.0f, data1_352321536[(alu19+-526334)], alu23);
      var val44 = select(0.0f, data1_352321536[(alu19+-526333)], alu23);
      var val45 = select(0.0f, data1_352321536[(alu19+-526327)], alu24);
      var val46 = select(0.0f, data1_352321536[(alu19+-526326)], alu24);
      var val47 = select(0.0f, data1_352321536[(alu19+-526325)], alu24);
      var val48 = select(0.0f, data1_352321536[(alu19+-524295)], alu25);
      var val49 = select(0.0f, data1_352321536[(alu19+-524294)], alu25);
      var val50 = select(0.0f, data1_352321536[(alu19+-524293)], alu25);
      var val51 = select(0.0f, data1_352321536[(alu19+-524287)], alu20);
      var val52 = select(0.0f, data1_352321536[(alu19+-524286)], alu20);
      var val53 = select(0.0f, data1_352321536[(alu19+-524285)], alu20);
      var val54 = select(0.0f, data1_352321536[(alu19+-524279)], alu26);
      var val55 = select(0.0f, data1_352321536[(alu19+-524278)], alu26);
      var val56 = select(0.0f, data1_352321536[(alu19+-524277)], alu26);
      var val57 = select(0.0f, data1_352321536[(alu19+-522247)], alu27);
      var val58 = select(0.0f, data1_352321536[(alu19+-522246)], alu27);
      var val59 = select(0.0f, data1_352321536[(alu19+-522245)], alu27);
      var val60 = select(0.0f, data1_352321536[(alu19+-522239)], alu28);
      var val61 = select(0.0f, data1_352321536[(alu19+-522237)], alu28);
      var val62 = select(0.0f, data1_352321536[(alu19+-522229)], alu29);
      acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val2*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val2*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val1)+(val42*val3)+(val45*val5)+(val48*val7)+(val51*val9)+(val54*val11)+(val57*val13)+(val60*val15)+(val37*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val42*val19)+(val45*val20)+(val48*val21)+(val51*val22)+(val54*val23)+(val57*val24)+(val60*val25)+(val37*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val42*val28)+(val45*val29)+(val48*val30)+(val51*val31)+(val54*val32)+(val57*val33)+(val60*val34)+(val37*val35));
      acc0[6] = (acc0[6]+(val38*val1)+(val43*val3)+(val46*val5)+(val49*val7)+(val52*val9)+(val55*val11)+(val58*val13)+(val39*val15)+(val40*val17));
      acc0[7] = (acc0[7]+(val38*val18)+(val43*val19)+(val46*val20)+(val49*val21)+(val52*val22)+(val55*val23)+(val58*val24)+(val39*val25)+(val40*val26));
      acc0[8] = (acc0[8]+(val38*val27)+(val43*val28)+(val46*val29)+(val49*val30)+(val52*val31)+(val55*val32)+(val58*val33)+(val39*val34)+(val40*val35));
      acc0[9] = (acc0[9]+(val41*val1)+(val44*val3)+(val47*val5)+(val50*val7)+(val53*val9)+(val56*val11)+(val59*val13)+(val61*val15)+(val62*val17));
      acc0[10] = (acc0[10]+(val41*val18)+(val44*val19)+(val47*val20)+(val50*val21)+(val53*val22)+(val56*val23)+(val59*val24)+(val61*val25)+(val62*val26));
      acc0[11] = (acc0[11]+(val41*val27)+(val44*val28)+(val47*val29)+(val50*val30)+(val53*val31)+(val56*val32)+(val59*val33)+(val61*val34)+(val62*val35));
    }
  }
  var alu44 = (gidx2*3);
  var val63 = data3_21[(alu44+1)];
  var val64 = data3_21[alu44];
  var val65 = data3_21[(alu44+2)];
  var alu45 = (alu1+cast0+(gidx2*50331648));
  var alu46 = (acc0[0]+val64);
  var alu47 = (acc0[3]+val64);
  var alu48 = (acc0[6]+val64);
  var alu49 = (acc0[9]+val64);
  var alu50 = select(0.0f,alu46,(0.0f<alu46));
  var alu51 = select(0.0f,alu47,(0.0f<alu47));
  var alu52 = select(0.0f,alu48,(0.0f<alu48));
  var alu53 = select(0.0f,alu49,(0.0f<alu49));
  data0_352321536[alu45] = alu50;
  data0_352321536[(alu45+1)] = alu51;
  data0_352321536[(alu45+2)] = alu52;
  data0_352321536[(alu45+3)] = alu53;
  var alu58 = (acc0[1]+val63);
  var alu59 = (acc0[4]+val63);
  var alu60 = (acc0[7]+val63);
  var alu61 = (acc0[10]+val63);
  var alu62 = select(0.0f,alu58,(0.0f<alu58));
  var alu63 = select(0.0f,alu59,(0.0f<alu59));
  var alu64 = select(0.0f,alu60,(0.0f<alu60));
  var alu65 = select(0.0f,alu61,(0.0f<alu61));
  data0_352321536[(alu45+16777216)] = alu62;
  data0_352321536[(alu45+16777217)] = alu63;
  data0_352321536[(alu45+16777218)] = alu64;
  data0_352321536[(alu45+16777219)] = alu65;
  var alu70 = (acc0[2]+val65);
  var alu71 = (acc0[5]+val65);
  var alu72 = (acc0[8]+val65);
  var alu73 = (acc0[11]+val65);
  var alu74 = select(0.0f,alu70,(0.0f<alu70));
  var alu75 = select(0.0f,alu71,(0.0f<alu71));
  var alu76 = select(0.0f,alu72,(0.0f<alu72));
  var alu77 = select(0.0f,alu73,(0.0f<alu73));
  data0_352321536[(alu45+33554432)] = alu74;
  data0_352321536[(alu45+33554433)] = alu75;
  data0_352321536[(alu45+33554434)] = alu76;
  data0_352321536[(alu45+33554435)] = alu77;
}`;

const r_7_256_32_4_8_16_4_3_21_3_3_3n3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_352321536:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_352321536:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_11907:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_21:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 7 */
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
  for (var Ridx0 = 0; Ridx0 < 21; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var cast2 = bitcast<u32>(Ridx1);
      var alu18 = (gidx1+bitcast<i32>((cast2<<4u)));
      var alu19 = (alu1+cast0+bitcast<i32>((cast2<<20u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu20 = ((15<alu18)&(alu18<272));
      var alu21 = (alu4&alu5&alu20);
      var val0 = select(0.0f, data1_352321536[(alu19+-1052688)], alu21);
      var alu22 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1701));
      var val1 = data2_11907[alu22];
      var alu23 = (alu5&alu20);
      var val2 = select(0.0f, data1_352321536[(alu19+-1052672)], alu23);
      var val3 = data2_11907[(alu22+1)];
      var alu24 = (alu3&alu5&alu20);
      var val4 = select(0.0f, data1_352321536[(alu19+-1052656)], alu24);
      var val5 = data2_11907[(alu22+2)];
      var alu25 = (alu4&alu20);
      var val6 = select(0.0f, data1_352321536[(alu19+-1048592)], alu25);
      var val7 = data2_11907[(alu22+3)];
      var val8 = select(0.0f, data1_352321536[(alu19+-1048576)], alu20);
      var val9 = data2_11907[(alu22+4)];
      var alu26 = (alu3&alu20);
      var val10 = select(0.0f, data1_352321536[(alu19+-1048560)], alu26);
      var val11 = data2_11907[(alu22+5)];
      var alu27 = (alu4&alu2&alu20);
      var val12 = select(0.0f, data1_352321536[(alu19+-1044496)], alu27);
      var val13 = data2_11907[(alu22+6)];
      var alu28 = (alu2&alu20);
      var val14 = select(0.0f, data1_352321536[(alu19+-1044480)], alu28);
      var val15 = data2_11907[(alu22+7)];
      var alu29 = (alu3&alu2&alu20);
      var val16 = select(0.0f, data1_352321536[(alu19+-1044464)], alu29);
      var val17 = data2_11907[(alu22+8)];
      var val18 = data2_11907[(alu22+567)];
      var val19 = data2_11907[(alu22+568)];
      var val20 = data2_11907[(alu22+569)];
      var val21 = data2_11907[(alu22+570)];
      var val22 = data2_11907[(alu22+571)];
      var val23 = data2_11907[(alu22+572)];
      var val24 = data2_11907[(alu22+573)];
      var val25 = data2_11907[(alu22+574)];
      var val26 = data2_11907[(alu22+575)];
      var val27 = data2_11907[(alu22+1134)];
      var val28 = data2_11907[(alu22+1135)];
      var val29 = data2_11907[(alu22+1136)];
      var val30 = data2_11907[(alu22+1137)];
      var val31 = data2_11907[(alu22+1138)];
      var val32 = data2_11907[(alu22+1139)];
      var val33 = data2_11907[(alu22+1140)];
      var val34 = data2_11907[(alu22+1141)];
      var val35 = data2_11907[(alu22+1142)];
      var val36 = select(0.0f, data1_352321536[(alu19+-1052687)], alu21);
      var val37 = select(0.0f, data1_352321536[(alu19+-1044463)], alu29);
      var val38 = select(0.0f, data1_352321536[(alu19+-1052686)], alu21);
      var val39 = select(0.0f, data1_352321536[(alu19+-1044478)], alu28);
      var val40 = select(0.0f, data1_352321536[(alu19+-1044462)], alu29);
      var val41 = select(0.0f, data1_352321536[(alu19+-1052685)], alu21);
      var val42 = select(0.0f, data1_352321536[(alu19+-1052671)], alu23);
      var val43 = select(0.0f, data1_352321536[(alu19+-1052670)], alu23);
      var val44 = select(0.0f, data1_352321536[(alu19+-1052669)], alu23);
      var val45 = select(0.0f, data1_352321536[(alu19+-1052655)], alu24);
      var val46 = select(0.0f, data1_352321536[(alu19+-1052654)], alu24);
      var val47 = select(0.0f, data1_352321536[(alu19+-1052653)], alu24);
      var val48 = select(0.0f, data1_352321536[(alu19+-1048591)], alu25);
      var val49 = select(0.0f, data1_352321536[(alu19+-1048590)], alu25);
      var val50 = select(0.0f, data1_352321536[(alu19+-1048589)], alu25);
      var val51 = select(0.0f, data1_352321536[(alu19+-1048575)], alu20);
      var val52 = select(0.0f, data1_352321536[(alu19+-1048574)], alu20);
      var val53 = select(0.0f, data1_352321536[(alu19+-1048573)], alu20);
      var val54 = select(0.0f, data1_352321536[(alu19+-1048559)], alu26);
      var val55 = select(0.0f, data1_352321536[(alu19+-1048558)], alu26);
      var val56 = select(0.0f, data1_352321536[(alu19+-1048557)], alu26);
      var val57 = select(0.0f, data1_352321536[(alu19+-1044495)], alu27);
      var val58 = select(0.0f, data1_352321536[(alu19+-1044494)], alu27);
      var val59 = select(0.0f, data1_352321536[(alu19+-1044493)], alu27);
      var val60 = select(0.0f, data1_352321536[(alu19+-1044479)], alu28);
      var val61 = select(0.0f, data1_352321536[(alu19+-1044477)], alu28);
      var val62 = select(0.0f, data1_352321536[(alu19+-1044461)], alu29);
      acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val6*val7)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17));
      acc0[1] = (acc0[1]+(val0*val18)+(val2*val19)+(val4*val20)+(val6*val21)+(val8*val22)+(val10*val23)+(val12*val24)+(val14*val25)+(val16*val26));
      acc0[2] = (acc0[2]+(val0*val27)+(val2*val28)+(val4*val29)+(val6*val30)+(val8*val31)+(val10*val32)+(val12*val33)+(val14*val34)+(val16*val35));
      acc0[3] = (acc0[3]+(val36*val1)+(val42*val3)+(val45*val5)+(val48*val7)+(val51*val9)+(val54*val11)+(val57*val13)+(val60*val15)+(val37*val17));
      acc0[4] = (acc0[4]+(val36*val18)+(val42*val19)+(val45*val20)+(val48*val21)+(val51*val22)+(val54*val23)+(val57*val24)+(val60*val25)+(val37*val26));
      acc0[5] = (acc0[5]+(val36*val27)+(val42*val28)+(val45*val29)+(val48*val30)+(val51*val31)+(val54*val32)+(val57*val33)+(val60*val34)+(val37*val35));
      acc0[6] = (acc0[6]+(val38*val1)+(val43*val3)+(val46*val5)+(val49*val7)+(val52*val9)+(val55*val11)+(val58*val13)+(val39*val15)+(val40*val17));
      acc0[7] = (acc0[7]+(val38*val18)+(val43*val19)+(val46*val20)+(val49*val21)+(val52*val22)+(val55*val23)+(val58*val24)+(val39*val25)+(val40*val26));
      acc0[8] = (acc0[8]+(val38*val27)+(val43*val28)+(val46*val29)+(val49*val30)+(val52*val31)+(val55*val32)+(val58*val33)+(val39*val34)+(val40*val35));
      acc0[9] = (acc0[9]+(val41*val1)+(val44*val3)+(val47*val5)+(val50*val7)+(val53*val9)+(val56*val11)+(val59*val13)+(val61*val15)+(val62*val17));
      acc0[10] = (acc0[10]+(val41*val18)+(val44*val19)+(val47*val20)+(val50*val21)+(val53*val22)+(val56*val23)+(val59*val24)+(val61*val25)+(val62*val26));
      acc0[11] = (acc0[11]+(val41*val27)+(val44*val28)+(val47*val29)+(val50*val30)+(val53*val31)+(val56*val32)+(val59*val33)+(val61*val34)+(val62*val35));
    }
  }
  var alu44 = (gidx2*3);
  var val63 = data3_21[(alu44+1)];
  var val64 = data3_21[alu44];
  var val65 = data3_21[(alu44+2)];
  var alu45 = (alu1+cast0+(gidx2*50331648));
  var alu46 = (acc0[0]+val64);
  var alu47 = (acc0[3]+val64);
  var alu48 = (acc0[6]+val64);
  var alu49 = (acc0[9]+val64);
  var alu50 = select(0.0f,alu46,(0.0f<alu46));
  var alu51 = select(0.0f,alu47,(0.0f<alu47));
  var alu52 = select(0.0f,alu48,(0.0f<alu48));
  var alu53 = select(0.0f,alu49,(0.0f<alu49));
  data0_352321536[alu45] = alu50;
  data0_352321536[(alu45+1)] = alu51;
  data0_352321536[(alu45+2)] = alu52;
  data0_352321536[(alu45+3)] = alu53;
  var alu58 = (acc0[1]+val63);
  var alu59 = (acc0[4]+val63);
  var alu60 = (acc0[7]+val63);
  var alu61 = (acc0[10]+val63);
  var alu62 = select(0.0f,alu58,(0.0f<alu58));
  var alu63 = select(0.0f,alu59,(0.0f<alu59));
  var alu64 = select(0.0f,alu60,(0.0f<alu60));
  var alu65 = select(0.0f,alu61,(0.0f<alu61));
  data0_352321536[(alu45+16777216)] = alu62;
  data0_352321536[(alu45+16777217)] = alu63;
  data0_352321536[(alu45+16777218)] = alu64;
  data0_352321536[(alu45+16777219)] = alu65;
  var alu70 = (acc0[2]+val65);
  var alu71 = (acc0[5]+val65);
  var alu72 = (acc0[8]+val65);
  var alu73 = (acc0[11]+val65);
  var alu74 = select(0.0f,alu70,(0.0f<alu70));
  var alu75 = select(0.0f,alu71,(0.0f<alu71));
  var alu76 = select(0.0f,alu72,(0.0f<alu72));
  var alu77 = select(0.0f,alu73,(0.0f<alu73));
  data0_352321536[(alu45+33554432)] = alu74;
  data0_352321536[(alu45+33554433)] = alu75;
  data0_352321536[(alu45+33554434)] = alu76;
  data0_352321536[(alu45+33554435)] = alu77;
}`;

const r_13_262144_2_16_4_4_21 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_1744830464:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_352321536:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2184:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 104 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = ((gidx1*79)>>10u);
  var alu1 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u)));
  var val0 = data1_352321536[alu1];
  var lidx0 = i32(lindex.x); /* 2 */
  var alu2 = (gidx1-(13*alu0));
  var alu3 = ((lidx0*84)+(alu2*168));
  var val1 = data2_2184[(alu3+1)];
  var val2 = data2_2184[(alu3+2)];
  var val3 = data2_2184[(alu3+3)];
  var val4 = data2_2184[alu3];
  var val5 = data1_352321536[(alu1+2)];
  var val6 = data1_352321536[(alu1+3)];
  var val7 = data1_352321536[(alu1+16777216)];
  var val8 = data1_352321536[(alu1+16777218)];
  var val9 = data1_352321536[(alu1+16777219)];
  var val10 = data1_352321536[(alu1+33554432)];
  var val11 = data1_352321536[(alu1+33554433)];
  var val12 = data1_352321536[(alu1+33554434)];
  var val13 = data1_352321536[(alu1+33554435)];
  var val14 = data1_352321536[(alu1+50331648)];
  var val15 = data1_352321536[(alu1+50331649)];
  var val16 = data1_352321536[(alu1+50331650)];
  var val17 = data1_352321536[(alu1+50331651)];
  var val18 = data1_352321536[(alu1+67108864)];
  var val19 = data2_2184[(alu3+4)];
  var val20 = data1_352321536[(alu1+67108865)];
  var val21 = data1_352321536[(alu1+67108866)];
  var val22 = data1_352321536[(alu1+67108867)];
  var val23 = data1_352321536[(alu1+83886080)];
  var val24 = data2_2184[(alu3+5)];
  var val25 = data1_352321536[(alu1+83886081)];
  var val26 = data1_352321536[(alu1+83886082)];
  var val27 = data1_352321536[(alu1+83886083)];
  var val28 = data1_352321536[(alu1+100663296)];
  var val29 = data2_2184[(alu3+6)];
  var val30 = data1_352321536[(alu1+100663297)];
  var val31 = data1_352321536[(alu1+100663298)];
  var val32 = data1_352321536[(alu1+100663299)];
  var val33 = data1_352321536[(alu1+117440512)];
  var val34 = data2_2184[(alu3+7)];
  var val35 = data1_352321536[(alu1+117440513)];
  var val36 = data1_352321536[(alu1+117440514)];
  var val37 = data1_352321536[(alu1+117440515)];
  var val38 = data1_352321536[(alu1+134217728)];
  var val39 = data2_2184[(alu3+8)];
  var val40 = data1_352321536[(alu1+134217729)];
  var val41 = data1_352321536[(alu1+134217730)];
  var val42 = data1_352321536[(alu1+134217731)];
  var val43 = data1_352321536[(alu1+150994944)];
  var val44 = data2_2184[(alu3+9)];
  var val45 = data1_352321536[(alu1+150994945)];
  var val46 = data1_352321536[(alu1+150994946)];
  var val47 = data1_352321536[(alu1+150994947)];
  var val48 = data1_352321536[(alu1+167772160)];
  var val49 = data2_2184[(alu3+10)];
  var val50 = data1_352321536[(alu1+167772161)];
  var val51 = data1_352321536[(alu1+167772162)];
  var val52 = data1_352321536[(alu1+167772163)];
  var val53 = data1_352321536[(alu1+184549376)];
  var val54 = data2_2184[(alu3+11)];
  var val55 = data1_352321536[(alu1+184549377)];
  var val56 = data1_352321536[(alu1+184549378)];
  var val57 = data1_352321536[(alu1+184549379)];
  var val58 = data1_352321536[(alu1+201326592)];
  var val59 = data2_2184[(alu3+12)];
  var val60 = data1_352321536[(alu1+201326593)];
  var val61 = data1_352321536[(alu1+201326594)];
  var val62 = data1_352321536[(alu1+201326595)];
  var val63 = data1_352321536[(alu1+218103808)];
  var val64 = data2_2184[(alu3+13)];
  var val65 = data1_352321536[(alu1+218103809)];
  var val66 = data1_352321536[(alu1+218103810)];
  var val67 = data1_352321536[(alu1+218103811)];
  var val68 = data1_352321536[(alu1+234881024)];
  var val69 = data2_2184[(alu3+14)];
  var val70 = data1_352321536[(alu1+234881025)];
  var val71 = data1_352321536[(alu1+234881026)];
  var val72 = data1_352321536[(alu1+234881027)];
  var val73 = data1_352321536[(alu1+251658240)];
  var val74 = data2_2184[(alu3+15)];
  var val75 = data1_352321536[(alu1+251658241)];
  var val76 = data1_352321536[(alu1+251658242)];
  var val77 = data1_352321536[(alu1+251658243)];
  var val78 = data1_352321536[(alu1+268435456)];
  var val79 = data2_2184[(alu3+16)];
  var val80 = data1_352321536[(alu1+268435457)];
  var val81 = data1_352321536[(alu1+268435458)];
  var val82 = data1_352321536[(alu1+268435459)];
  var val83 = data1_352321536[(alu1+285212672)];
  var val84 = data2_2184[(alu3+17)];
  var val85 = data1_352321536[(alu1+285212673)];
  var val86 = data1_352321536[(alu1+285212674)];
  var val87 = data1_352321536[(alu1+285212675)];
  var val88 = data1_352321536[(alu1+301989888)];
  var val89 = data2_2184[(alu3+18)];
  var val90 = data1_352321536[(alu1+1)];
  var val91 = data1_352321536[(alu1+16777217)];
  var val92 = data1_352321536[(alu1+301989889)];
  var val93 = data1_352321536[(alu1+301989890)];
  var val94 = data1_352321536[(alu1+301989891)];
  var val95 = data1_352321536[(alu1+318767104)];
  var val96 = data2_2184[(alu3+19)];
  var val97 = data1_352321536[(alu1+318767105)];
  var val98 = data1_352321536[(alu1+318767106)];
  var val99 = data1_352321536[(alu1+318767107)];
  var val100 = data1_352321536[(alu1+335544320)];
  var val101 = data2_2184[(alu3+20)];
  var cast0 = bitcast<u32>(lidx0);
  var cast1 = bitcast<u32>(alu2);
  var alu4 = (bitcast<i32>((cast0<<2u))+bitcast<i32>((cast1<<3u)));
  var val102 = data3_104[alu4];
  var val103 = data1_352321536[(alu1+335544321)];
  var val104 = data1_352321536[(alu1+335544322)];
  var val105 = data1_352321536[(alu1+335544323)];
  var val106 = data2_2184[(alu3+21)];
  var val107 = data2_2184[(alu3+22)];
  var val108 = data2_2184[(alu3+23)];
  var val109 = data2_2184[(alu3+24)];
  var val110 = data2_2184[(alu3+25)];
  var val111 = data2_2184[(alu3+26)];
  var val112 = data2_2184[(alu3+27)];
  var val113 = data2_2184[(alu3+28)];
  var val114 = data2_2184[(alu3+29)];
  var val115 = data2_2184[(alu3+30)];
  var val116 = data2_2184[(alu3+31)];
  var val117 = data2_2184[(alu3+32)];
  var val118 = data2_2184[(alu3+33)];
  var val119 = data2_2184[(alu3+34)];
  var val120 = data2_2184[(alu3+35)];
  var val121 = data2_2184[(alu3+36)];
  var val122 = data2_2184[(alu3+37)];
  var val123 = data2_2184[(alu3+38)];
  var val124 = data2_2184[(alu3+39)];
  var val125 = data2_2184[(alu3+40)];
  var val126 = data2_2184[(alu3+41)];
  var val127 = data3_104[(alu4+1)];
  var val128 = data2_2184[(alu3+42)];
  var val129 = data2_2184[(alu3+43)];
  var val130 = data2_2184[(alu3+44)];
  var val131 = data2_2184[(alu3+45)];
  var val132 = data2_2184[(alu3+46)];
  var val133 = data2_2184[(alu3+47)];
  var val134 = data2_2184[(alu3+48)];
  var val135 = data2_2184[(alu3+49)];
  var val136 = data2_2184[(alu3+50)];
  var val137 = data2_2184[(alu3+51)];
  var val138 = data2_2184[(alu3+52)];
  var val139 = data2_2184[(alu3+53)];
  var val140 = data2_2184[(alu3+54)];
  var val141 = data2_2184[(alu3+55)];
  var val142 = data2_2184[(alu3+56)];
  var val143 = data2_2184[(alu3+57)];
  var val144 = data2_2184[(alu3+58)];
  var val145 = data2_2184[(alu3+59)];
  var val146 = data2_2184[(alu3+60)];
  var val147 = data2_2184[(alu3+61)];
  var val148 = data2_2184[(alu3+62)];
  var val149 = data3_104[(alu4+2)];
  var val150 = data2_2184[(alu3+63)];
  var val151 = data2_2184[(alu3+64)];
  var val152 = data2_2184[(alu3+65)];
  var val153 = data2_2184[(alu3+66)];
  var val154 = data2_2184[(alu3+67)];
  var val155 = data2_2184[(alu3+68)];
  var val156 = data2_2184[(alu3+69)];
  var val157 = data2_2184[(alu3+70)];
  var val158 = data2_2184[(alu3+71)];
  var val159 = data2_2184[(alu3+72)];
  var val160 = data2_2184[(alu3+73)];
  var val161 = data2_2184[(alu3+74)];
  var val162 = data2_2184[(alu3+75)];
  var val163 = data2_2184[(alu3+76)];
  var val164 = data2_2184[(alu3+77)];
  var val165 = data2_2184[(alu3+78)];
  var val166 = data2_2184[(alu3+79)];
  var val167 = data2_2184[(alu3+80)];
  var val168 = data2_2184[(alu3+81)];
  var val169 = data2_2184[(alu3+82)];
  var val170 = data2_2184[(alu3+83)];
  var val171 = data3_104[(alu4+3)];
  var alu5 = (alu1+bitcast<i32>((cast0<<26u))+bitcast<i32>((cast1<<27u)));
  data0_1744830464[alu5] = ((val0*val4)+(val7*val1)+(val10*val2)+(val14*val3)+(val18*val19)+(val23*val24)+(val28*val29)+(val33*val34)+(val38*val39)+(val43*val44)+(val48*val49)+(val53*val54)+(val58*val59)+(val63*val64)+(val68*val69)+(val73*val74)+(val78*val79)+(val83*val84)+(val88*val89)+(val95*val96)+(val100*val101)+val102);
  data0_1744830464[(alu5+1)] = ((val90*val4)+(val91*val1)+(val11*val2)+(val15*val3)+(val20*val19)+(val25*val24)+(val30*val29)+(val35*val34)+(val40*val39)+(val45*val44)+(val50*val49)+(val55*val54)+(val60*val59)+(val65*val64)+(val70*val69)+(val75*val74)+(val80*val79)+(val85*val84)+(val92*val89)+(val97*val96)+(val103*val101)+val102);
  data0_1744830464[(alu5+2)] = ((val5*val4)+(val8*val1)+(val12*val2)+(val16*val3)+(val21*val19)+(val26*val24)+(val31*val29)+(val36*val34)+(val41*val39)+(val46*val44)+(val51*val49)+(val56*val54)+(val61*val59)+(val66*val64)+(val71*val69)+(val76*val74)+(val81*val79)+(val86*val84)+(val93*val89)+(val98*val96)+(val104*val101)+val102);
  data0_1744830464[(alu5+3)] = ((val6*val4)+(val9*val1)+(val13*val2)+(val17*val3)+(val22*val19)+(val27*val24)+(val32*val29)+(val37*val34)+(val42*val39)+(val47*val44)+(val52*val49)+(val57*val54)+(val62*val59)+(val67*val64)+(val72*val69)+(val77*val74)+(val82*val79)+(val87*val84)+(val94*val89)+(val99*val96)+(val105*val101)+val102);
  data0_1744830464[(alu5+16777216)] = ((val0*val106)+(val7*val107)+(val10*val108)+(val14*val109)+(val18*val110)+(val23*val111)+(val28*val112)+(val33*val113)+(val38*val114)+(val43*val115)+(val48*val116)+(val53*val117)+(val58*val118)+(val63*val119)+(val68*val120)+(val73*val121)+(val78*val122)+(val83*val123)+(val88*val124)+(val95*val125)+(val100*val126)+val127);
  data0_1744830464[(alu5+16777217)] = ((val90*val106)+(val91*val107)+(val11*val108)+(val15*val109)+(val20*val110)+(val25*val111)+(val30*val112)+(val35*val113)+(val40*val114)+(val45*val115)+(val50*val116)+(val55*val117)+(val60*val118)+(val65*val119)+(val70*val120)+(val75*val121)+(val80*val122)+(val85*val123)+(val92*val124)+(val97*val125)+(val103*val126)+val127);
  data0_1744830464[(alu5+16777218)] = ((val5*val106)+(val8*val107)+(val12*val108)+(val16*val109)+(val21*val110)+(val26*val111)+(val31*val112)+(val36*val113)+(val41*val114)+(val46*val115)+(val51*val116)+(val56*val117)+(val61*val118)+(val66*val119)+(val71*val120)+(val76*val121)+(val81*val122)+(val86*val123)+(val93*val124)+(val98*val125)+(val104*val126)+val127);
  data0_1744830464[(alu5+16777219)] = ((val6*val106)+(val9*val107)+(val13*val108)+(val17*val109)+(val22*val110)+(val27*val111)+(val32*val112)+(val37*val113)+(val42*val114)+(val47*val115)+(val52*val116)+(val57*val117)+(val62*val118)+(val67*val119)+(val72*val120)+(val77*val121)+(val82*val122)+(val87*val123)+(val94*val124)+(val99*val125)+(val105*val126)+val127);
  data0_1744830464[(alu5+33554432)] = ((val0*val128)+(val7*val129)+(val10*val130)+(val14*val131)+(val18*val132)+(val23*val133)+(val28*val134)+(val33*val135)+(val38*val136)+(val43*val137)+(val48*val138)+(val53*val139)+(val58*val140)+(val63*val141)+(val68*val142)+(val73*val143)+(val78*val144)+(val83*val145)+(val88*val146)+(val95*val147)+(val100*val148)+val149);
  data0_1744830464[(alu5+33554433)] = ((val90*val128)+(val91*val129)+(val11*val130)+(val15*val131)+(val20*val132)+(val25*val133)+(val30*val134)+(val35*val135)+(val40*val136)+(val45*val137)+(val50*val138)+(val55*val139)+(val60*val140)+(val65*val141)+(val70*val142)+(val75*val143)+(val80*val144)+(val85*val145)+(val92*val146)+(val97*val147)+(val103*val148)+val149);
  data0_1744830464[(alu5+33554434)] = ((val5*val128)+(val8*val129)+(val12*val130)+(val16*val131)+(val21*val132)+(val26*val133)+(val31*val134)+(val36*val135)+(val41*val136)+(val46*val137)+(val51*val138)+(val56*val139)+(val61*val140)+(val66*val141)+(val71*val142)+(val76*val143)+(val81*val144)+(val86*val145)+(val93*val146)+(val98*val147)+(val104*val148)+val149);
  data0_1744830464[(alu5+33554435)] = ((val6*val128)+(val9*val129)+(val13*val130)+(val17*val131)+(val22*val132)+(val27*val133)+(val32*val134)+(val37*val135)+(val42*val136)+(val47*val137)+(val52*val138)+(val57*val139)+(val62*val140)+(val67*val141)+(val72*val142)+(val77*val143)+(val82*val144)+(val87*val145)+(val94*val146)+(val99*val147)+(val105*val148)+val149);
  data0_1744830464[(alu5+50331648)] = ((val0*val150)+(val7*val151)+(val10*val152)+(val14*val153)+(val18*val154)+(val23*val155)+(val28*val156)+(val33*val157)+(val38*val158)+(val43*val159)+(val48*val160)+(val53*val161)+(val58*val162)+(val63*val163)+(val68*val164)+(val73*val165)+(val78*val166)+(val83*val167)+(val88*val168)+(val95*val169)+(val100*val170)+val171);
  data0_1744830464[(alu5+50331649)] = ((val90*val150)+(val91*val151)+(val11*val152)+(val15*val153)+(val20*val154)+(val25*val155)+(val30*val156)+(val35*val157)+(val40*val158)+(val45*val159)+(val50*val160)+(val55*val161)+(val60*val162)+(val65*val163)+(val70*val164)+(val75*val165)+(val80*val166)+(val85*val167)+(val92*val168)+(val97*val169)+(val103*val170)+val171);
  data0_1744830464[(alu5+50331650)] = ((val5*val150)+(val8*val151)+(val12*val152)+(val16*val153)+(val21*val154)+(val26*val155)+(val31*val156)+(val36*val157)+(val41*val158)+(val46*val159)+(val51*val160)+(val56*val161)+(val61*val162)+(val66*val163)+(val71*val164)+(val76*val165)+(val81*val166)+(val86*val167)+(val93*val168)+(val98*val169)+(val104*val170)+val171);
  data0_1744830464[(alu5+50331651)] = ((val6*val150)+(val9*val151)+(val13*val152)+(val17*val153)+(val22*val154)+(val27*val155)+(val32*val156)+(val37*val157)+(val42*val158)+(val47*val159)+(val52*val160)+(val57*val161)+(val62*val162)+(val67*val163)+(val72*val164)+(val77*val165)+(val82*val166)+(val87*val167)+(val94*val168)+(val99*val169)+(val105*val170)+val171);
}`;

const r_131072_32_4_26_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1744830464:array<f32>;
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
  for (var Ridx0 = 0; Ridx0 < 26; Ridx0++) {
    var alu5 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<26u)));
    var val0 = data1_1744830464[alu5];
    var val1 = data1_1744830464[(alu5+1)];
    var val2 = data1_1744830464[(alu5+3)];
    var val3 = data1_1744830464[(alu5+16777216)];
    var val4 = data1_1744830464[(alu5+16777217)];
    var val5 = data1_1744830464[(alu5+33554432)];
    var val6 = data1_1744830464[(alu5+33554433)];
    var val7 = data1_1744830464[(alu5+50331648)];
    var val8 = data1_1744830464[(alu5+50331649)];
    var val9 = data1_1744830464[(alu5+2)];
    var val10 = data1_1744830464[(alu5+16777218)];
    var val11 = data1_1744830464[(alu5+33554434)];
    var val12 = data1_1744830464[(alu5+50331650)];
    var val13 = data1_1744830464[(alu5+16777219)];
    var val14 = data1_1744830464[(alu5+33554435)];
    var val15 = data1_1744830464[(alu5+50331651)];
    var alu6 = select(acc0[0],val0,(acc0[0]<val0));
    var alu7 = select(acc0[1],val1,(acc0[1]<val1));
    var alu8 = select(acc0[2],val9,(acc0[2]<val9));
    var alu9 = select(acc0[3],val2,(acc0[3]<val2));
    var alu10 = select(alu6,val3,(alu6<val3));
    var alu11 = select(alu7,val4,(alu7<val4));
    var alu12 = select(alu8,val10,(alu8<val10));
    var alu13 = select(alu9,val13,(alu9<val13));
    var alu14 = select(alu10,val5,(alu10<val5));
    var alu15 = select(alu11,val6,(alu11<val6));
    var alu16 = select(alu12,val11,(alu12<val11));
    var alu17 = select(alu13,val14,(alu13<val14));
    var alu18 = select(alu14,val7,(alu14<val7));
    var alu19 = select(alu15,val8,(alu15<val8));
    var alu20 = select(alu16,val12,(alu16<val12));
    var alu21 = select(alu17,val15,(alu17<val15));
    acc0[0] = alu18;
    acc0[1] = alu19;
    acc0[2] = alu20;
    acc0[3] = alu21;
  }
  data0_16777216[alu0] = acc0[0];
  data0_16777216[(alu0+1)] = acc0[1];
  data0_16777216[(alu0+2)] = acc0[2];
  data0_16777216[(alu0+3)] = acc0[3];
}`;

const r_131072_32_4_26_4n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1744830464:array<f32>;
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
  for (var Ridx0 = 0; Ridx0 < 26; Ridx0++) {
    var alu8 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<26u)));
    var val4 = data1_1744830464[alu8];
    var val5 = data1_1744830464[(alu8+1)];
    var val6 = data1_1744830464[(alu8+2)];
    var val7 = data1_1744830464[(alu8+3)];
    var val8 = data1_1744830464[(alu8+16777216)];
    var val9 = data1_1744830464[(alu8+16777217)];
    var val10 = data1_1744830464[(alu8+16777218)];
    var val11 = data1_1744830464[(alu8+16777219)];
    var val12 = data1_1744830464[(alu8+33554432)];
    var val13 = data1_1744830464[(alu8+33554433)];
    var val14 = data1_1744830464[(alu8+33554434)];
    var val15 = data1_1744830464[(alu8+33554435)];
    var val16 = data1_1744830464[(alu8+50331648)];
    var val17 = data1_1744830464[(alu8+50331649)];
    var val18 = data1_1744830464[(alu8+50331650)];
    var val19 = data1_1744830464[(alu8+50331651)];
    var alu9 = (Ridx0*-4);
    var alu10 = (alu9+101);
    var alu11 = (alu9+102);
    var alu12 = (alu9+103);
    var alu13 = (alu9+104);
    var alu14 = ((i32((val4==val0)))*alu13);
    var alu15 = ((i32((val5==val1)))*alu13);
    var alu16 = ((i32((val6==val2)))*alu13);
    var alu17 = ((i32((val7==val3)))*alu13);
    var alu18 = ((i32((val8==val0)))*alu12);
    var alu19 = ((i32((val9==val1)))*alu12);
    var alu20 = ((i32((val10==val2)))*alu12);
    var alu21 = ((i32((val11==val3)))*alu12);
    var alu22 = ((i32((val12==val0)))*alu11);
    var alu23 = ((i32((val13==val1)))*alu11);
    var alu24 = ((i32((val14==val2)))*alu11);
    var alu25 = ((i32((val15==val3)))*alu11);
    var alu26 = ((i32((val16==val0)))*alu10);
    var alu27 = ((i32((val17==val1)))*alu10);
    var alu28 = ((i32((val18==val2)))*alu10);
    var alu29 = ((i32((val19==val3)))*alu10);
    var alu30 = select(acc0[0],alu14,(acc0[0]<alu14));
    var alu31 = select(acc0[1],alu15,(acc0[1]<alu15));
    var alu32 = select(acc0[2],alu16,(acc0[2]<alu16));
    var alu33 = select(acc0[3],alu17,(acc0[3]<alu17));
    var alu34 = select(alu30,alu18,(alu30<alu18));
    var alu35 = select(alu31,alu19,(alu31<alu19));
    var alu36 = select(alu32,alu20,(alu32<alu20));
    var alu37 = select(alu33,alu21,(alu33<alu21));
    var alu38 = select(alu34,alu22,(alu34<alu22));
    var alu39 = select(alu35,alu23,(alu35<alu23));
    var alu40 = select(alu36,alu24,(alu36<alu24));
    var alu41 = select(alu37,alu25,(alu37<alu25));
    var alu42 = select(alu38,alu26,(alu38<alu26));
    var alu43 = select(alu39,alu27,(alu39<alu27));
    var alu44 = select(alu40,alu28,(alu40<alu28));
    var alu45 = select(alu41,alu29,(alu41<alu29));
    acc0[0] = alu42;
    acc0[1] = alu43;
    acc0[2] = alu44;
    acc0[3] = alu45;
  }
  data0_16777216[alu0] = (f32((104-acc0[0])));
  data0_16777216[alu1] = (f32((104-acc0[1])));
  data0_16777216[alu2] = (f32((104-acc0[2])));
  data0_16777216[alu3] = (f32((104-acc0[3])));
}`;

const setupNet = async (device, safetensor) => {
    const metadata = getTensorMetadata(safetensor);
    const infinityBuf = createInfinityUniformBuf(device);

    const layouts=[device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]})]

    const buf_0 = createEmptyBuf(device, 1409286144);;
    const input0 = createEmptyBuf(device, 67108864);;
    const buf_1 = createWeightBuf(device, 2268, getTensorBuffer(safetensor, metadata['model.0.weight']));
    const buf_2 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.0.bias']));
    const buf_3 = createEmptyBuf(device, 1409286144);;
    const buf_4 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.2.weight']));
    const buf_5 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.2.bias']));
    const buf_6 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.4.weight']));
    const buf_7 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.4.bias']));
    const buf_8 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.6.weight']));
    const buf_9 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.6.bias']));
    const buf_10 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.8.weight']));
    const buf_11 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.8.bias']));
    const buf_12 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.10.weight']));
    const buf_13 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.10.bias']));
    const buf_14 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.12.weight']));
    const buf_15 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.12.bias']));
    const buf_16 = createWeightBuf(device, 47628, getTensorBuffer(safetensor, metadata['model.14.weight']));
    const buf_17 = createWeightBuf(device, 84, getTensorBuffer(safetensor, metadata['model.14.bias']));
    const buf_18 = createEmptyBuf(device, 6979321856);;
    const buf_19 = createWeightBuf(device, 8736, getTensorBuffer(safetensor, metadata['seq_conv_argmax.weight']));
    const buf_20 = createWeightBuf(device, 416, getTensorBuffer(safetensor, metadata['seq_conv_argmax.bias']));
    const buf_21 = createEmptyBuf(device, 67108864);;
    const output0 = createEmptyBuf(device, 67108864);;

    const gpuWriteBuffer0 = device.createBuffer({size:input0.size, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE });

    const gpuReadBuffer0 = device.createBuffer({size:output0.size, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });

    const kernels = [r_7_256_32_4_8_16_4_3_3_3_3, r_7_256_32_4_8_16_4_3_21_3_3_3, r_7_256_32_4_8_16_4_3_21_3_3_3, r_7_256_32_4_8_16_4_3_21_3_3_3n1, r_7_256_32_4_8_16_4_3_21_3_3_3n1, r_7_256_32_4_8_16_4_3_21_3_3_3n2, r_7_256_32_4_8_16_4_3_21_3_3_3n2, r_7_256_32_4_8_16_4_3_21_3_3_3n3, r_13_262144_2_16_4_4_21, r_131072_32_4_26_4, r_131072_32_4_26_4n1];
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
        addComputePass(device, commandEncoder, pipelines[0], layouts[0], infinityBuf, [buf_0, input0, buf_1, buf_2], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[1], layouts[1], infinityBuf, [buf_3, buf_0, buf_4, buf_5], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[2], layouts[2], infinityBuf, [buf_0, buf_3, buf_6, buf_7], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[3], layouts[3], infinityBuf, [buf_3, buf_0, buf_8, buf_9], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[4], layouts[4], infinityBuf, [buf_0, buf_3, buf_10, buf_11], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[5], layouts[5], infinityBuf, [buf_3, buf_0, buf_12, buf_13], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[6], layouts[6], infinityBuf, [buf_0, buf_3, buf_14, buf_15], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[7], layouts[7], infinityBuf, [buf_3, buf_0, buf_16, buf_17], [128, 256, 7]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[8], layouts[8], infinityBuf, [buf_18, buf_3, buf_19, buf_20], [32768, 104, 1]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[9], layouts[9], infinityBuf, [buf_21, buf_18], [32768, 4, 1]);
        device.queue.submit([commandEncoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        commandEncoder = device.createCommandEncoder();
        addComputePass(device, commandEncoder, pipelines[10], layouts[10], infinityBuf, [output0, buf_18, buf_21], [32768, 4, 1]);
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
export default DKatlas;
