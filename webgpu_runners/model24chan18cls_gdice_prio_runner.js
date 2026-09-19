
const m24c18_rescale_sched_b0 = (() => {
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

const r_8_256_32_4_8_16_4_3_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_648:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var alu0 = (gidx0>>2u);
  var cast1 = bitcast<u32>(alu0);
  var alu1 = (gidx0&3);
  var cast2 = bitcast<u32>(alu1);
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast1<<11u)));
  var alu3 = (bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast2<<6u)));
  var alu4 = ((lidx0+bitcast<i32>((cast1<<3u)))<255);
  var alu5 = ((lidx1+bitcast<i32>((cast2<<4u)))<63);
  var alu6 = (0<(lidx0+alu0));
  var alu7 = (0<(lidx1+alu1));
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
    var alu20 = (gidx1+Ridx0);
    var alu21 = (alu2+alu3+cast0+bitcast<i32>((bitcast<u32>(Ridx0)<<16u)));
    var alu22 = ((0<alu20)&(alu20<257));
    var val0 = select((f16(0.0f)), data1_16777216[(alu21+-65793)], (alu7&alu6&alu22));
    var alu23 = ((gidx2*81)+(Ridx0*9));
    var val1 = data2_648[(alu23+2)];
    var val2 = data2_648[alu23];
    var alu24 = (alu6&alu22);
    var val3 = select((f16(0.0f)), data1_16777216[(alu21+-65792)], alu24);
    var val4 = data2_648[(alu23+1)];
    var val5 = select((f16(0.0f)), data1_16777216[(alu21+-65791)], alu24);
    var val6 = select((f16(0.0f)), data1_16777216[(alu21+-65537)], (alu7&alu22));
    var val7 = data2_648[(alu23+3)];
    var val8 = select((f16(0.0f)), data1_16777216[(alu21+-65536)], alu22);
    var val9 = data2_648[(alu23+4)];
    var val10 = select((f16(0.0f)), data1_16777216[(alu21+-65535)], alu22);
    var val11 = data2_648[(alu23+5)];
    var val12 = select((f16(0.0f)), data1_16777216[(alu21+-65281)], (alu7&alu4&alu22));
    var val13 = data2_648[(alu23+6)];
    var alu25 = (alu4&alu22);
    var val14 = select((f16(0.0f)), data1_16777216[(alu21+-65280)], alu25);
    var val15 = data2_648[(alu23+7)];
    var val16 = select((f16(0.0f)), data1_16777216[(alu21+-65279)], alu25);
    var val17 = data2_648[(alu23+8)];
    var val18 = data2_648[(alu23+27)];
    var val19 = data2_648[(alu23+28)];
    var val20 = data2_648[(alu23+29)];
    var val21 = data2_648[(alu23+30)];
    var val22 = data2_648[(alu23+31)];
    var val23 = data2_648[(alu23+32)];
    var val24 = data2_648[(alu23+33)];
    var val25 = data2_648[(alu23+34)];
    var val26 = data2_648[(alu23+35)];
    var val27 = data2_648[(alu23+54)];
    var val28 = data2_648[(alu23+55)];
    var val29 = data2_648[(alu23+56)];
    var val30 = data2_648[(alu23+57)];
    var val31 = data2_648[(alu23+58)];
    var val32 = data2_648[(alu23+59)];
    var val33 = data2_648[(alu23+60)];
    var val34 = data2_648[(alu23+61)];
    var val35 = data2_648[(alu23+62)];
    var val36 = select((f16(0.0f)), data1_16777216[(alu21+-65790)], alu24);
    var val37 = select((f16(0.0f)), data1_16777216[(alu21+-65789)], alu24);
    var val38 = select((f16(0.0f)), data1_16777216[(alu21+-65788)], (alu5&alu6&alu22));
    var val39 = select((f16(0.0f)), data1_16777216[(alu21+-65534)], alu22);
    var val40 = select((f16(0.0f)), data1_16777216[(alu21+-65533)], alu22);
    var val41 = select((f16(0.0f)), data1_16777216[(alu21+-65532)], (alu5&alu22));
    var val42 = select((f16(0.0f)), data1_16777216[(alu21+-65278)], alu25);
    var val43 = select((f16(0.0f)), data1_16777216[(alu21+-65277)], alu25);
    var val44 = select((f16(0.0f)), data1_16777216[(alu21+-65276)], (alu5&alu4&alu22));
    acc0[0] = (acc0[0]+(f32((val0*val2)))+(f32((val3*val4)))+(f32((val5*val1)))+(f32((val6*val7)))+(f32((val8*val9)))+(f32((val10*val11)))+(f32((val12*val13)))+(f32((val14*val15)))+(f32((val16*val17))));
    acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val3*val19)))+(f32((val5*val20)))+(f32((val6*val21)))+(f32((val8*val22)))+(f32((val10*val23)))+(f32((val12*val24)))+(f32((val14*val25)))+(f32((val16*val26))));
    acc0[2] = (acc0[2]+(f32((val0*val27)))+(f32((val3*val28)))+(f32((val5*val29)))+(f32((val6*val30)))+(f32((val8*val31)))+(f32((val10*val32)))+(f32((val12*val33)))+(f32((val14*val34)))+(f32((val16*val35))));
    acc0[3] = (acc0[3]+(f32((val3*val2)))+(f32((val5*val4)))+(f32((val36*val1)))+(f32((val8*val7)))+(f32((val10*val9)))+(f32((val39*val11)))+(f32((val14*val13)))+(f32((val16*val15)))+(f32((val42*val17))));
    acc0[4] = (acc0[4]+(f32((val3*val18)))+(f32((val5*val19)))+(f32((val36*val20)))+(f32((val8*val21)))+(f32((val10*val22)))+(f32((val39*val23)))+(f32((val14*val24)))+(f32((val16*val25)))+(f32((val42*val26))));
    acc0[5] = (acc0[5]+(f32((val3*val27)))+(f32((val5*val28)))+(f32((val36*val29)))+(f32((val8*val30)))+(f32((val10*val31)))+(f32((val39*val32)))+(f32((val14*val33)))+(f32((val16*val34)))+(f32((val42*val35))));
    acc0[6] = (acc0[6]+(f32((val5*val2)))+(f32((val36*val4)))+(f32((val37*val1)))+(f32((val10*val7)))+(f32((val39*val9)))+(f32((val40*val11)))+(f32((val16*val13)))+(f32((val42*val15)))+(f32((val43*val17))));
    acc0[7] = (acc0[7]+(f32((val5*val18)))+(f32((val36*val19)))+(f32((val37*val20)))+(f32((val10*val21)))+(f32((val39*val22)))+(f32((val40*val23)))+(f32((val16*val24)))+(f32((val42*val25)))+(f32((val43*val26))));
    acc0[8] = (acc0[8]+(f32((val5*val27)))+(f32((val36*val28)))+(f32((val37*val29)))+(f32((val10*val30)))+(f32((val39*val31)))+(f32((val40*val32)))+(f32((val16*val33)))+(f32((val42*val34)))+(f32((val43*val35))));
    acc0[9] = (acc0[9]+(f32((val36*val2)))+(f32((val37*val4)))+(f32((val38*val1)))+(f32((val39*val7)))+(f32((val40*val9)))+(f32((val41*val11)))+(f32((val42*val13)))+(f32((val43*val15)))+(f32((val44*val17))));
    acc0[10] = (acc0[10]+(f32((val36*val18)))+(f32((val37*val19)))+(f32((val38*val20)))+(f32((val39*val21)))+(f32((val40*val22)))+(f32((val41*val23)))+(f32((val42*val24)))+(f32((val43*val25)))+(f32((val44*val26))));
    acc0[11] = (acc0[11]+(f32((val36*val27)))+(f32((val37*val28)))+(f32((val38*val29)))+(f32((val39*val30)))+(f32((val40*val31)))+(f32((val41*val32)))+(f32((val42*val33)))+(f32((val43*val34)))+(f32((val44*val35))));
  }
  var alu39 = (alu2+cast0+alu3+(gidx2*50331648));
  data0_402653184[alu39] = (f32((f16(acc0[0]))));
  data0_402653184[(alu39+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu39+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu39+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu39+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu39+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu39+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu39+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu39+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu39+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu39+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu39+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_16384_32_3_64_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 16384 */
  var lidx0 = i32(lindex.x); /* 32 */
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu3 = ((gidx0*24576)+(lidx0*768)+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_402653184[(alu3+1)];
    var val1 = data1_402653184[(alu3+2)];
    var val2 = data1_402653184[(alu3+3)];
    var val3 = data1_402653184[(alu3+256)];
    var val4 = data1_402653184[(alu3+257)];
    var val5 = data1_402653184[(alu3+258)];
    var val6 = data1_402653184[(alu3+259)];
    var val7 = data1_402653184[alu3];
    var val8 = data1_402653184[(alu3+512)];
    var val9 = data1_402653184[(alu3+513)];
    var val10 = data1_402653184[(alu3+514)];
    var val11 = data1_402653184[(alu3+515)];
    acc0[0] = (acc0[0]+val7+val0+val1+val2);
    acc0[1] = (acc0[1]+val3+val4+val5+val6);
    acc0[2] = (acc0[2]+val8+val9+val10+val11);
  }
  var alu8 = ((gidx0*96)+(lidx0*3));
  data0_1572864[(alu8+1)] = acc0[1];
  data0_1572864[(alu8+2)] = acc0[2];
  data0_1572864[alu8] = acc0[0];
}`;

const r_64_32_3_64_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_6144:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1572864:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 64 */
  var lidx0 = i32(lindex.x); /* 32 */
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu3 = ((gidx0*24576)+(lidx0*768)+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_1572864[(alu3+1)];
    var val1 = data1_1572864[(alu3+2)];
    var val2 = data1_1572864[(alu3+3)];
    var val3 = data1_1572864[(alu3+257)];
    var val4 = data1_1572864[(alu3+258)];
    var val5 = data1_1572864[(alu3+259)];
    var val6 = data1_1572864[(alu3+512)];
    var val7 = data1_1572864[(alu3+513)];
    var val8 = data1_1572864[(alu3+514)];
    var val9 = data1_1572864[(alu3+515)];
    var val10 = data1_1572864[alu3];
    var val11 = data1_1572864[(alu3+256)];
    acc0[0] = (acc0[0]+val10+val0+val1+val2);
    acc0[1] = (acc0[1]+val11+val3+val4+val5);
    acc0[2] = (acc0[2]+val6+val7+val8+val9);
  }
  var alu8 = ((gidx0*96)+(lidx0*3));
  data0_6144[(alu8+1)] = acc0[1];
  data0_6144[(alu8+2)] = acc0[2];
  data0_6144[alu8] = acc0[0];
}`;

const r_24_16_16 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,16>;
@group(0) @binding(1)var<storage,read_write>data0_24:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_6144:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var acc1: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 24 */
  var lidx0 = i32(lindex.x); /* 16 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    var val0 = data1_6144[(bitcast<i32>((bitcast<u32>(lidx0)<<4u))+Ridx0+bitcast<i32>((bitcast<u32>(gidx0)<<8u)))];
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
    data0_24[gidx0] = (f32((f16((acc1[0]*5.960464477539063e-08f)))));
  }
}`;

const r_3_1024_8_16_4_64_4 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,4>;
  var gidx1 = i32(gindex.y); /* 3 */
  var lidx0 = i32(lindex.x); /* 8 */
  var cast0 = bitcast<u32>(gidx1);
  var val0 = data2_24[(lidx0+bitcast<i32>((cast0<<3u)))];
  var gidx0 = i32(gindex.x); /* 1024 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast1 = (f16(val0));
  var cast2 = bitcast<u32>(gidx0);
  var cast3 = bitcast<u32>(lidx0);
  var cast4 = bitcast<u32>(lidx1);
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu4 = (bitcast<i32>((cast2<<14u))+bitcast<i32>((cast4<<10u))+bitcast<i32>((bitcast<u32>(Ridx0)<<2u))+bitcast<i32>((cast0<<27u))+bitcast<i32>((cast3<<24u)));
    var val1 = data1_402653184[alu4];
    var val2 = data1_402653184[(alu4+1)];
    var val3 = data1_402653184[(alu4+2)];
    var val4 = data1_402653184[(alu4+3)];
    var val5 = data1_402653184[(alu4+256)];
    var val6 = data1_402653184[(alu4+257)];
    var val7 = data1_402653184[(alu4+258)];
    var val8 = data1_402653184[(alu4+259)];
    var val9 = data1_402653184[(alu4+512)];
    var val10 = data1_402653184[(alu4+513)];
    var val11 = data1_402653184[(alu4+514)];
    var val12 = data1_402653184[(alu4+515)];
    var val13 = data1_402653184[(alu4+768)];
    var val14 = data1_402653184[(alu4+769)];
    var val15 = data1_402653184[(alu4+770)];
    var val16 = data1_402653184[(alu4+771)];
    var alu5 = ((f16(val1))-cast1);
    var alu6 = ((f16(val2))-cast1);
    var alu7 = ((f16(val3))-cast1);
    var alu8 = ((f16(val4))-cast1);
    var alu9 = ((f16(val5))-cast1);
    var alu10 = ((f16(val6))-cast1);
    var alu11 = ((f16(val7))-cast1);
    var alu12 = ((f16(val8))-cast1);
    var alu13 = ((f16(val9))-cast1);
    var alu14 = ((f16(val10))-cast1);
    var alu15 = ((f16(val11))-cast1);
    var alu16 = ((f16(val12))-cast1);
    var alu17 = ((f16(val13))-cast1);
    var alu18 = ((f16(val14))-cast1);
    var alu19 = ((f16(val15))-cast1);
    var alu20 = ((f16(val16))-cast1);
    acc0[0] = (acc0[0]+(f32((alu5*alu5)))+(f32((alu6*alu6)))+(f32((alu7*alu7)))+(f32((alu8*alu8))));
    acc0[1] = (acc0[1]+(f32((alu9*alu9)))+(f32((alu10*alu10)))+(f32((alu11*alu11)))+(f32((alu12*alu12))));
    acc0[2] = (acc0[2]+(f32((alu13*alu13)))+(f32((alu14*alu14)))+(f32((alu15*alu15)))+(f32((alu16*alu16))));
    acc0[3] = (acc0[3]+(f32((alu17*alu17)))+(f32((alu18*alu18)))+(f32((alu19*alu19)))+(f32((alu20*alu20))));
  }
  var alu26 = (bitcast<i32>((cast2<<6u))+bitcast<i32>((cast4<<2u))+bitcast<i32>((cast0<<19u))+bitcast<i32>((cast3<<16u)));
  data0_1572864[alu26] = acc0[0];
  data0_1572864[(alu26+1)] = acc0[1];
  data0_1572864[(alu26+2)] = acc0[2];
  data0_1572864[(alu26+3)] = acc0[3];
}`;

const r_24_16_16n1 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,16>;
@group(0) @binding(1)var<storage,read_write>data0_24:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_6144:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var acc1: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 24 */
  var lidx0 = i32(lindex.x); /* 16 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 16; Ridx0++) {
    var val0 = data1_6144[(bitcast<i32>((bitcast<u32>(lidx0)<<4u))+Ridx0+bitcast<i32>((bitcast<u32>(gidx0)<<8u)))];
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
    data0_24[gidx0] = (f32((1/sqrt(((f16((acc1[0]*5.960464477539063e-08f)))+(f16(1e-05f)))))));
  }
}`;

const E_3_262144_8_16_4 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_24:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_24:array<f16>;
@group(0) @binding(6)var<storage,read_write>data5_24:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx1 = i32(gindex.y); /* 24 */
  var lidx0 = i32(lindex.x); /* 8 */
  var alu0 = ((gidx1*11)>>5u);
  var cast0 = bitcast<u32>((gidx1-(3*alu0)));
  var alu1 = (lidx0+bitcast<i32>((cast0<<3u)));
  var val0 = data4_24[alu1];
  var val1 = data5_24[alu1];
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu2 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((bitcast<u32>(lidx0)<<24u))+bitcast<i32>((cast0<<27u)));
  var val2 = data1_402653184[alu2];
  var val3 = data2_24[alu1];
  var val4 = data3_24[alu1];
  var alu3 = (alu2+1);
  var val5 = data1_402653184[alu3];
  var alu4 = (alu2+2);
  var val6 = data1_402653184[alu4];
  var alu5 = (alu2+3);
  var val7 = data1_402653184[alu5];
  var cast1 = (f16(val3));
  var cast2 = (f16(val4));
  var alu6 = ((((f16(val2))-cast1)*cast2*val0)+val1);
  var alu7 = ((((f16(val5))-cast1)*cast2*val0)+val1);
  var alu8 = ((((f16(val6))-cast1)*cast2*val0)+val1);
  var alu9 = ((((f16(val7))-cast1)*cast2*val0)+val1);
  data0_402653184[alu2] = ((1/((f16(1.0f))+exp2(((alu6+((f16(0.044715f))*alu6*alu6*alu6))*(f16(-2.302208198144325f))))))*alu6);
  data0_402653184[alu3] = ((1/((f16(1.0f))+exp2(((alu7+((f16(0.044715f))*alu7*alu7*alu7))*(f16(-2.302208198144325f))))))*alu7);
  data0_402653184[alu4] = ((1/((f16(1.0f))+exp2(((alu8+((f16(0.044715f))*alu8*alu8*alu8))*(f16(-2.302208198144325f))))))*alu8);
  data0_402653184[alu5] = ((1/((f16(1.0f))+exp2(((alu9+((f16(0.044715f))*alu9*alu9*alu9))*(f16(-2.302208198144325f))))))*alu9);
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u)));
  var alu2 = (bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u)));
  var alu3 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu4 = (alu0<253);
  var alu5 = ((lidx1+bitcast<i32>((cast3<<4u)))<63);
  var alu6 = (alu2<125);
  var alu7 = (alu3<251);
  var alu8 = (0<alu2);
  var alu9 = (0<alu3);
  var alu10 = (2<alu0);
  var alu11 = (2<alu3);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu24 = (gidx1+(Ridx1*3));
      var alu25 = (alu1+alu3+cast0+(Ridx1*196608)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu26 = ((2<alu24)&(alu24<259));
      var val0 = select((f16(0.0f)), data1_402653184[(alu25+-197379)], (alu11&alu10&alu26));
      var alu27 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[alu27];
      var alu28 = (alu10&alu26);
      var val2 = select((f16(0.0f)), data1_402653184[(alu25+-197376)], alu28);
      var val3 = data2_15552[(alu27+1)];
      var val4 = select((f16(0.0f)), data1_402653184[(alu25+-197373)], alu28);
      var val5 = data2_15552[(alu27+2)];
      var val6 = select((f16(0.0f)), data1_402653184[(alu25+-196611)], (alu11&alu26));
      var val7 = data2_15552[(alu27+3)];
      var val8 = select((f16(0.0f)), data1_402653184[(alu25+-196608)], alu26);
      var val9 = data2_15552[(alu27+4)];
      var val10 = select((f16(0.0f)), data1_402653184[(alu25+-196605)], alu26);
      var val11 = data2_15552[(alu27+5)];
      var val12 = select((f16(0.0f)), data1_402653184[(alu25+-195843)], (alu11&alu4&alu26));
      var val13 = data2_15552[(alu27+6)];
      var alu29 = (alu4&alu26);
      var val14 = select((f16(0.0f)), data1_402653184[(alu25+-195840)], alu29);
      var val15 = data2_15552[(alu27+7)];
      var val16 = select((f16(0.0f)), data1_402653184[(alu25+-195837)], alu29);
      var val17 = data2_15552[(alu27+8)];
      var val18 = data2_15552[(alu27+648)];
      var val19 = data2_15552[(alu27+649)];
      var val20 = data2_15552[(alu27+650)];
      var val21 = data2_15552[(alu27+651)];
      var val22 = data2_15552[(alu27+652)];
      var val23 = data2_15552[(alu27+653)];
      var val24 = data2_15552[(alu27+654)];
      var val25 = data2_15552[(alu27+655)];
      var val26 = data2_15552[(alu27+656)];
      var val27 = data2_15552[(alu27+1296)];
      var val28 = data2_15552[(alu27+1297)];
      var val29 = data2_15552[(alu27+1298)];
      var val30 = data2_15552[(alu27+1299)];
      var val31 = data2_15552[(alu27+1300)];
      var val32 = data2_15552[(alu27+1301)];
      var val33 = data2_15552[(alu27+1302)];
      var val34 = data2_15552[(alu27+1303)];
      var val35 = data2_15552[(alu27+1304)];
      var val36 = select((f16(0.0f)), data1_402653184[(alu25+-197378)], (alu8&alu10&alu26));
      var val37 = select((f16(0.0f)), data1_402653184[(alu25+-197377)], (alu9&alu10&alu26));
      var val38 = select((f16(0.0f)), data1_402653184[(alu25+-197375)], alu28);
      var val39 = select((f16(0.0f)), data1_402653184[(alu25+-197374)], alu28);
      var val40 = select((f16(0.0f)), data1_402653184[(alu25+-197372)], (alu5&alu10&alu26));
      var val41 = select((f16(0.0f)), data1_402653184[(alu25+-197371)], (alu7&alu10&alu26));
      var val42 = select((f16(0.0f)), data1_402653184[(alu25+-197370)], (alu6&alu10&alu26));
      var val43 = select((f16(0.0f)), data1_402653184[(alu25+-196610)], (alu8&alu26));
      var val44 = select((f16(0.0f)), data1_402653184[(alu25+-196609)], (alu9&alu26));
      var val45 = select((f16(0.0f)), data1_402653184[(alu25+-196607)], alu26);
      var val46 = select((f16(0.0f)), data1_402653184[(alu25+-196606)], alu26);
      var val47 = select((f16(0.0f)), data1_402653184[(alu25+-196604)], (alu5&alu26));
      var val48 = select((f16(0.0f)), data1_402653184[(alu25+-196603)], (alu7&alu26));
      var val49 = select((f16(0.0f)), data1_402653184[(alu25+-196602)], (alu6&alu26));
      var val50 = select((f16(0.0f)), data1_402653184[(alu25+-195842)], (alu8&alu4&alu26));
      var val51 = select((f16(0.0f)), data1_402653184[(alu25+-195841)], (alu9&alu4&alu26));
      var val52 = select((f16(0.0f)), data1_402653184[(alu25+-195839)], alu29);
      var val53 = select((f16(0.0f)), data1_402653184[(alu25+-195838)], alu29);
      var val54 = select((f16(0.0f)), data1_402653184[(alu25+-195836)], (alu5&alu4&alu26));
      var val55 = select((f16(0.0f)), data1_402653184[(alu25+-195835)], (alu7&alu4&alu26));
      var val56 = select((f16(0.0f)), data1_402653184[(alu25+-195834)], (alu6&alu4&alu26));
      acc0[0] = (acc0[0]+(f32((val0*val1)))+(f32((val2*val3)))+(f32((val4*val5)))+(f32((val6*val7)))+(f32((val8*val9)))+(f32((val10*val11)))+(f32((val12*val13)))+(f32((val14*val15)))+(f32((val16*val17))));
      acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val2*val19)))+(f32((val4*val20)))+(f32((val6*val21)))+(f32((val8*val22)))+(f32((val10*val23)))+(f32((val12*val24)))+(f32((val14*val25)))+(f32((val16*val26))));
      acc0[2] = (acc0[2]+(f32((val0*val27)))+(f32((val2*val28)))+(f32((val4*val29)))+(f32((val6*val30)))+(f32((val8*val31)))+(f32((val10*val32)))+(f32((val12*val33)))+(f32((val14*val34)))+(f32((val16*val35))));
      acc0[3] = (acc0[3]+(f32((val36*val1)))+(f32((val38*val3)))+(f32((val40*val5)))+(f32((val43*val7)))+(f32((val45*val9)))+(f32((val47*val11)))+(f32((val50*val13)))+(f32((val52*val15)))+(f32((val54*val17))));
      acc0[4] = (acc0[4]+(f32((val36*val18)))+(f32((val38*val19)))+(f32((val40*val20)))+(f32((val43*val21)))+(f32((val45*val22)))+(f32((val47*val23)))+(f32((val50*val24)))+(f32((val52*val25)))+(f32((val54*val26))));
      acc0[5] = (acc0[5]+(f32((val36*val27)))+(f32((val38*val28)))+(f32((val40*val29)))+(f32((val43*val30)))+(f32((val45*val31)))+(f32((val47*val32)))+(f32((val50*val33)))+(f32((val52*val34)))+(f32((val54*val35))));
      acc0[6] = (acc0[6]+(f32((val37*val1)))+(f32((val39*val3)))+(f32((val41*val5)))+(f32((val44*val7)))+(f32((val46*val9)))+(f32((val48*val11)))+(f32((val51*val13)))+(f32((val53*val15)))+(f32((val55*val17))));
      acc0[7] = (acc0[7]+(f32((val37*val18)))+(f32((val39*val19)))+(f32((val41*val20)))+(f32((val44*val21)))+(f32((val46*val22)))+(f32((val48*val23)))+(f32((val51*val24)))+(f32((val53*val25)))+(f32((val55*val26))));
      acc0[8] = (acc0[8]+(f32((val37*val27)))+(f32((val39*val28)))+(f32((val41*val29)))+(f32((val44*val30)))+(f32((val46*val31)))+(f32((val48*val32)))+(f32((val51*val33)))+(f32((val53*val34)))+(f32((val55*val35))));
      acc0[9] = (acc0[9]+(f32((val2*val1)))+(f32((val4*val3)))+(f32((val42*val5)))+(f32((val8*val7)))+(f32((val10*val9)))+(f32((val49*val11)))+(f32((val14*val13)))+(f32((val16*val15)))+(f32((val56*val17))));
      acc0[10] = (acc0[10]+(f32((val2*val18)))+(f32((val4*val19)))+(f32((val42*val20)))+(f32((val8*val21)))+(f32((val10*val22)))+(f32((val49*val23)))+(f32((val14*val24)))+(f32((val16*val25)))+(f32((val56*val26))));
      acc0[11] = (acc0[11]+(f32((val2*val27)))+(f32((val4*val28)))+(f32((val42*val29)))+(f32((val8*val30)))+(f32((val10*val31)))+(f32((val49*val32)))+(f32((val14*val33)))+(f32((val16*val34)))+(f32((val56*val35))));
    }
  }
  var alu44 = (alu1+cast0+alu3+(gidx2*50331648));
  data0_402653184[alu44] = (f32((f16(acc0[0]))));
  data0_402653184[(alu44+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu44+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu44+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu44+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu44+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu44+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu44+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu44+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu44+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu44+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu44+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3n1 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (lidx1+bitcast<i32>((cast3<<4u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u)));
  var alu3 = (bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u)));
  var alu4 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu5 = (alu0<251);
  var alu6 = (alu1<62);
  var alu7 = (alu3<125);
  var alu8 = (alu4<249);
  var alu9 = (alu4<251);
  var alu10 = (0<alu1);
  var alu11 = (0<alu3);
  var alu12 = (2<alu4);
  var alu13 = (4<alu0);
  var alu14 = (4<alu4);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu27 = (gidx1+(Ridx1*5));
      var alu28 = (alu2+alu4+cast0+(Ridx1*327680)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu29 = ((4<alu27)&(alu27<261));
      var val0 = select((f16(0.0f)), data1_402653184[(alu28+-328965)], (alu14&alu13&alu29));
      var alu30 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[(alu30+1)];
      var val2 = data2_15552[alu30];
      var val3 = select((f16(0.0f)), data1_402653184[(alu28+-328963)], (alu12&alu13&alu29));
      var val4 = select((f16(0.0f)), data1_402653184[(alu28+-328962)], (alu11&alu13&alu29));
      var alu31 = (alu13&alu29);
      var val5 = select((f16(0.0f)), data1_402653184[(alu28+-328960)], alu31);
      var val6 = select((f16(0.0f)), data1_402653184[(alu28+-328958)], alu31);
      var val7 = select((f16(0.0f)), data1_402653184[(alu28+-328957)], alu31);
      var val8 = select((f16(0.0f)), data1_402653184[(alu28+-328955)], (alu9&alu13&alu29));
      var val9 = data2_15552[(alu30+2)];
      var val10 = select((f16(0.0f)), data1_402653184[(alu28+-328953)], (alu8&alu13&alu29));
      var val11 = select((f16(0.0f)), data1_402653184[(alu28+-328952)], (alu6&alu13&alu29));
      var val12 = select((f16(0.0f)), data1_402653184[(alu28+-327685)], (alu14&alu29));
      var val13 = data2_15552[(alu30+3)];
      var val14 = select((f16(0.0f)), data1_402653184[(alu28+-327683)], (alu12&alu29));
      var val15 = select((f16(0.0f)), data1_402653184[(alu28+-327682)], (alu11&alu29));
      var val16 = select((f16(0.0f)), data1_402653184[(alu28+-327680)], alu29);
      var val17 = data2_15552[(alu30+4)];
      var val18 = select((f16(0.0f)), data1_402653184[(alu28+-327678)], alu29);
      var val19 = select((f16(0.0f)), data1_402653184[(alu28+-327677)], alu29);
      var val20 = select((f16(0.0f)), data1_402653184[(alu28+-327675)], (alu9&alu29));
      var val21 = data2_15552[(alu30+5)];
      var val22 = select((f16(0.0f)), data1_402653184[(alu28+-327673)], (alu8&alu29));
      var val23 = select((f16(0.0f)), data1_402653184[(alu28+-327672)], (alu6&alu29));
      var val24 = select((f16(0.0f)), data1_402653184[(alu28+-326405)], (alu14&alu5&alu29));
      var val25 = data2_15552[(alu30+6)];
      var val26 = select((f16(0.0f)), data1_402653184[(alu28+-326403)], (alu12&alu5&alu29));
      var val27 = select((f16(0.0f)), data1_402653184[(alu28+-326402)], (alu11&alu5&alu29));
      var alu32 = (alu5&alu29);
      var val28 = select((f16(0.0f)), data1_402653184[(alu28+-326400)], alu32);
      var val29 = data2_15552[(alu30+7)];
      var val30 = select((f16(0.0f)), data1_402653184[(alu28+-326398)], alu32);
      var val31 = select((f16(0.0f)), data1_402653184[(alu28+-326397)], alu32);
      var val32 = select((f16(0.0f)), data1_402653184[(alu28+-326395)], (alu9&alu5&alu29));
      var val33 = data2_15552[(alu30+8)];
      var val34 = data2_15552[(alu30+648)];
      var val35 = data2_15552[(alu30+649)];
      var val36 = data2_15552[(alu30+650)];
      var val37 = data2_15552[(alu30+651)];
      var val38 = data2_15552[(alu30+652)];
      var val39 = data2_15552[(alu30+653)];
      var val40 = data2_15552[(alu30+654)];
      var val41 = data2_15552[(alu30+655)];
      var val42 = data2_15552[(alu30+656)];
      var val43 = data2_15552[(alu30+1296)];
      var val44 = data2_15552[(alu30+1297)];
      var val45 = data2_15552[(alu30+1298)];
      var val46 = data2_15552[(alu30+1299)];
      var val47 = data2_15552[(alu30+1300)];
      var val48 = data2_15552[(alu30+1301)];
      var val49 = data2_15552[(alu30+1302)];
      var val50 = data2_15552[(alu30+1303)];
      var val51 = data2_15552[(alu30+1304)];
      var val52 = select((f16(0.0f)), data1_402653184[(alu28+-328964)], (alu10&alu13&alu29));
      var val53 = select((f16(0.0f)), data1_402653184[(alu28+-328959)], alu31);
      var val54 = select((f16(0.0f)), data1_402653184[(alu28+-328954)], (alu7&alu13&alu29));
      var val55 = select((f16(0.0f)), data1_402653184[(alu28+-327684)], (alu10&alu29));
      var val56 = select((f16(0.0f)), data1_402653184[(alu28+-327679)], alu29);
      var val57 = select((f16(0.0f)), data1_402653184[(alu28+-327674)], (alu7&alu29));
      var val58 = select((f16(0.0f)), data1_402653184[(alu28+-326404)], (alu10&alu5&alu29));
      var val59 = select((f16(0.0f)), data1_402653184[(alu28+-326399)], alu32);
      var val60 = select((f16(0.0f)), data1_402653184[(alu28+-326394)], (alu7&alu5&alu29));
      var val61 = select((f16(0.0f)), data1_402653184[(alu28+-326393)], (alu8&alu5&alu29));
      var val62 = select((f16(0.0f)), data1_402653184[(alu28+-326392)], (alu6&alu5&alu29));
      acc0[0] = (acc0[0]+(f32((val0*val2)))+(f32((val5*val1)))+(f32((val8*val9)))+(f32((val12*val13)))+(f32((val16*val17)))+(f32((val20*val21)))+(f32((val24*val25)))+(f32((val28*val29)))+(f32((val32*val33))));
      acc0[1] = (acc0[1]+(f32((val0*val34)))+(f32((val5*val35)))+(f32((val8*val36)))+(f32((val12*val37)))+(f32((val16*val38)))+(f32((val20*val39)))+(f32((val24*val40)))+(f32((val28*val41)))+(f32((val32*val42))));
      acc0[2] = (acc0[2]+(f32((val0*val43)))+(f32((val5*val44)))+(f32((val8*val45)))+(f32((val12*val46)))+(f32((val16*val47)))+(f32((val20*val48)))+(f32((val24*val49)))+(f32((val28*val50)))+(f32((val32*val51))));
      acc0[3] = (acc0[3]+(f32((val52*val2)))+(f32((val53*val1)))+(f32((val54*val9)))+(f32((val55*val13)))+(f32((val56*val17)))+(f32((val57*val21)))+(f32((val58*val25)))+(f32((val59*val29)))+(f32((val60*val33))));
      acc0[4] = (acc0[4]+(f32((val52*val34)))+(f32((val53*val35)))+(f32((val54*val36)))+(f32((val55*val37)))+(f32((val56*val38)))+(f32((val57*val39)))+(f32((val58*val40)))+(f32((val59*val41)))+(f32((val60*val42))));
      acc0[5] = (acc0[5]+(f32((val52*val43)))+(f32((val53*val44)))+(f32((val54*val45)))+(f32((val55*val46)))+(f32((val56*val47)))+(f32((val57*val48)))+(f32((val58*val49)))+(f32((val59*val50)))+(f32((val60*val51))));
      acc0[6] = (acc0[6]+(f32((val3*val2)))+(f32((val6*val1)))+(f32((val10*val9)))+(f32((val14*val13)))+(f32((val18*val17)))+(f32((val22*val21)))+(f32((val26*val25)))+(f32((val30*val29)))+(f32((val61*val33))));
      acc0[7] = (acc0[7]+(f32((val3*val34)))+(f32((val6*val35)))+(f32((val10*val36)))+(f32((val14*val37)))+(f32((val18*val38)))+(f32((val22*val39)))+(f32((val26*val40)))+(f32((val30*val41)))+(f32((val61*val42))));
      acc0[8] = (acc0[8]+(f32((val3*val43)))+(f32((val6*val44)))+(f32((val10*val45)))+(f32((val14*val46)))+(f32((val18*val47)))+(f32((val22*val48)))+(f32((val26*val49)))+(f32((val30*val50)))+(f32((val61*val51))));
      acc0[9] = (acc0[9]+(f32((val4*val2)))+(f32((val7*val1)))+(f32((val11*val9)))+(f32((val15*val13)))+(f32((val19*val17)))+(f32((val23*val21)))+(f32((val27*val25)))+(f32((val31*val29)))+(f32((val62*val33))));
      acc0[10] = (acc0[10]+(f32((val4*val34)))+(f32((val7*val35)))+(f32((val11*val36)))+(f32((val15*val37)))+(f32((val19*val38)))+(f32((val23*val39)))+(f32((val27*val40)))+(f32((val31*val41)))+(f32((val62*val42))));
      acc0[11] = (acc0[11]+(f32((val4*val43)))+(f32((val7*val44)))+(f32((val11*val45)))+(f32((val15*val46)))+(f32((val19*val47)))+(f32((val23*val48)))+(f32((val27*val49)))+(f32((val31*val50)))+(f32((val62*val51))));
    }
  }
  var alu47 = (alu2+cast0+alu4+(gidx2*50331648));
  data0_402653184[alu47] = (f32((f16(acc0[0]))));
  data0_402653184[(alu47+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu47+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu47+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu47+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu47+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu47+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu47+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu47+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu47+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu47+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu47+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3n2 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (lidx1+bitcast<i32>((cast3<<4u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u)));
  var alu3 = (bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u)));
  var alu4 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu5 = (alu0<249);
  var alu6 = (alu1<62);
  var alu7 = (alu3<123);
  var alu8 = (alu4<247);
  var alu9 = (alu4<249);
  var alu10 = (0<alu1);
  var alu11 = (2<alu3);
  var alu12 = (4<alu4);
  var alu13 = (6<alu0);
  var alu14 = (6<alu4);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu27 = (gidx1+(Ridx1*7));
      var alu28 = (alu2+alu4+cast0+(Ridx1*458752)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu29 = ((6<alu27)&(alu27<263));
      var val0 = select((f16(0.0f)), data1_402653184[(alu28+-460551)], (alu14&alu13&alu29));
      var alu30 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[(alu30+1)];
      var val2 = data2_15552[alu30];
      var val3 = select((f16(0.0f)), data1_402653184[(alu28+-460549)], (alu12&alu13&alu29));
      var val4 = select((f16(0.0f)), data1_402653184[(alu28+-460548)], (alu10&alu13&alu29));
      var alu31 = (alu13&alu29);
      var val5 = select((f16(0.0f)), data1_402653184[(alu28+-460544)], alu31);
      var val6 = select((f16(0.0f)), data1_402653184[(alu28+-460542)], alu31);
      var val7 = select((f16(0.0f)), data1_402653184[(alu28+-460541)], alu31);
      var val8 = select((f16(0.0f)), data1_402653184[(alu28+-460537)], (alu9&alu13&alu29));
      var val9 = data2_15552[(alu30+2)];
      var val10 = select((f16(0.0f)), data1_402653184[(alu28+-460535)], (alu8&alu13&alu29));
      var val11 = select((f16(0.0f)), data1_402653184[(alu28+-460534)], (alu7&alu13&alu29));
      var val12 = select((f16(0.0f)), data1_402653184[(alu28+-458759)], (alu14&alu29));
      var val13 = data2_15552[(alu30+3)];
      var val14 = select((f16(0.0f)), data1_402653184[(alu28+-458757)], (alu12&alu29));
      var val15 = select((f16(0.0f)), data1_402653184[(alu28+-458756)], (alu10&alu29));
      var val16 = select((f16(0.0f)), data1_402653184[(alu28+-458752)], alu29);
      var val17 = data2_15552[(alu30+4)];
      var val18 = select((f16(0.0f)), data1_402653184[(alu28+-458750)], alu29);
      var val19 = select((f16(0.0f)), data1_402653184[(alu28+-458749)], alu29);
      var val20 = select((f16(0.0f)), data1_402653184[(alu28+-458745)], (alu9&alu29));
      var val21 = data2_15552[(alu30+5)];
      var val22 = select((f16(0.0f)), data1_402653184[(alu28+-458743)], (alu8&alu29));
      var val23 = select((f16(0.0f)), data1_402653184[(alu28+-458742)], (alu7&alu29));
      var val24 = select((f16(0.0f)), data1_402653184[(alu28+-456967)], (alu14&alu5&alu29));
      var val25 = data2_15552[(alu30+6)];
      var val26 = select((f16(0.0f)), data1_402653184[(alu28+-456965)], (alu12&alu5&alu29));
      var val27 = select((f16(0.0f)), data1_402653184[(alu28+-456964)], (alu10&alu5&alu29));
      var alu32 = (alu5&alu29);
      var val28 = select((f16(0.0f)), data1_402653184[(alu28+-456960)], alu32);
      var val29 = data2_15552[(alu30+7)];
      var val30 = select((f16(0.0f)), data1_402653184[(alu28+-456958)], alu32);
      var val31 = select((f16(0.0f)), data1_402653184[(alu28+-456957)], alu32);
      var val32 = select((f16(0.0f)), data1_402653184[(alu28+-456953)], (alu9&alu5&alu29));
      var val33 = data2_15552[(alu30+8)];
      var val34 = data2_15552[(alu30+648)];
      var val35 = data2_15552[(alu30+649)];
      var val36 = data2_15552[(alu30+650)];
      var val37 = data2_15552[(alu30+651)];
      var val38 = data2_15552[(alu30+652)];
      var val39 = data2_15552[(alu30+653)];
      var val40 = data2_15552[(alu30+654)];
      var val41 = data2_15552[(alu30+655)];
      var val42 = data2_15552[(alu30+656)];
      var val43 = data2_15552[(alu30+1296)];
      var val44 = data2_15552[(alu30+1297)];
      var val45 = data2_15552[(alu30+1298)];
      var val46 = data2_15552[(alu30+1299)];
      var val47 = data2_15552[(alu30+1300)];
      var val48 = data2_15552[(alu30+1301)];
      var val49 = data2_15552[(alu30+1302)];
      var val50 = data2_15552[(alu30+1303)];
      var val51 = data2_15552[(alu30+1304)];
      var val52 = select((f16(0.0f)), data1_402653184[(alu28+-460550)], (alu11&alu13&alu29));
      var val53 = select((f16(0.0f)), data1_402653184[(alu28+-460543)], alu31);
      var val54 = select((f16(0.0f)), data1_402653184[(alu28+-460536)], (alu6&alu13&alu29));
      var val55 = select((f16(0.0f)), data1_402653184[(alu28+-458758)], (alu11&alu29));
      var val56 = select((f16(0.0f)), data1_402653184[(alu28+-458751)], alu29);
      var val57 = select((f16(0.0f)), data1_402653184[(alu28+-458744)], (alu6&alu29));
      var val58 = select((f16(0.0f)), data1_402653184[(alu28+-456966)], (alu11&alu5&alu29));
      var val59 = select((f16(0.0f)), data1_402653184[(alu28+-456959)], alu32);
      var val60 = select((f16(0.0f)), data1_402653184[(alu28+-456952)], (alu6&alu5&alu29));
      var val61 = select((f16(0.0f)), data1_402653184[(alu28+-456951)], (alu8&alu5&alu29));
      var val62 = select((f16(0.0f)), data1_402653184[(alu28+-456950)], (alu7&alu5&alu29));
      acc0[0] = (acc0[0]+(f32((val0*val2)))+(f32((val5*val1)))+(f32((val8*val9)))+(f32((val12*val13)))+(f32((val16*val17)))+(f32((val20*val21)))+(f32((val24*val25)))+(f32((val28*val29)))+(f32((val32*val33))));
      acc0[1] = (acc0[1]+(f32((val0*val34)))+(f32((val5*val35)))+(f32((val8*val36)))+(f32((val12*val37)))+(f32((val16*val38)))+(f32((val20*val39)))+(f32((val24*val40)))+(f32((val28*val41)))+(f32((val32*val42))));
      acc0[2] = (acc0[2]+(f32((val0*val43)))+(f32((val5*val44)))+(f32((val8*val45)))+(f32((val12*val46)))+(f32((val16*val47)))+(f32((val20*val48)))+(f32((val24*val49)))+(f32((val28*val50)))+(f32((val32*val51))));
      acc0[3] = (acc0[3]+(f32((val52*val2)))+(f32((val53*val1)))+(f32((val54*val9)))+(f32((val55*val13)))+(f32((val56*val17)))+(f32((val57*val21)))+(f32((val58*val25)))+(f32((val59*val29)))+(f32((val60*val33))));
      acc0[4] = (acc0[4]+(f32((val52*val34)))+(f32((val53*val35)))+(f32((val54*val36)))+(f32((val55*val37)))+(f32((val56*val38)))+(f32((val57*val39)))+(f32((val58*val40)))+(f32((val59*val41)))+(f32((val60*val42))));
      acc0[5] = (acc0[5]+(f32((val52*val43)))+(f32((val53*val44)))+(f32((val54*val45)))+(f32((val55*val46)))+(f32((val56*val47)))+(f32((val57*val48)))+(f32((val58*val49)))+(f32((val59*val50)))+(f32((val60*val51))));
      acc0[6] = (acc0[6]+(f32((val3*val2)))+(f32((val6*val1)))+(f32((val10*val9)))+(f32((val14*val13)))+(f32((val18*val17)))+(f32((val22*val21)))+(f32((val26*val25)))+(f32((val30*val29)))+(f32((val61*val33))));
      acc0[7] = (acc0[7]+(f32((val3*val34)))+(f32((val6*val35)))+(f32((val10*val36)))+(f32((val14*val37)))+(f32((val18*val38)))+(f32((val22*val39)))+(f32((val26*val40)))+(f32((val30*val41)))+(f32((val61*val42))));
      acc0[8] = (acc0[8]+(f32((val3*val43)))+(f32((val6*val44)))+(f32((val10*val45)))+(f32((val14*val46)))+(f32((val18*val47)))+(f32((val22*val48)))+(f32((val26*val49)))+(f32((val30*val50)))+(f32((val61*val51))));
      acc0[9] = (acc0[9]+(f32((val4*val2)))+(f32((val7*val1)))+(f32((val11*val9)))+(f32((val15*val13)))+(f32((val19*val17)))+(f32((val23*val21)))+(f32((val27*val25)))+(f32((val31*val29)))+(f32((val62*val33))));
      acc0[10] = (acc0[10]+(f32((val4*val34)))+(f32((val7*val35)))+(f32((val11*val36)))+(f32((val15*val37)))+(f32((val19*val38)))+(f32((val23*val39)))+(f32((val27*val40)))+(f32((val31*val41)))+(f32((val62*val42))));
      acc0[11] = (acc0[11]+(f32((val4*val43)))+(f32((val7*val44)))+(f32((val11*val45)))+(f32((val15*val46)))+(f32((val19*val47)))+(f32((val23*val48)))+(f32((val27*val49)))+(f32((val31*val50)))+(f32((val62*val51))));
    }
  }
  var alu47 = (alu2+cast0+alu4+(gidx2*50331648));
  data0_402653184[alu47] = (f32((f16(acc0[0]))));
  data0_402653184[(alu47+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu47+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu47+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu47+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu47+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu47+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu47+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu47+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu47+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu47+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu47+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3n3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (lidx1+bitcast<i32>((cast3<<4u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u)));
  var alu3 = (bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u)));
  var alu4 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu5 = (alu0<243);
  var alu6 = (alu1<60);
  var alu7 = (alu3<121);
  var alu8 = (alu4<241);
  var alu9 = (alu4<243);
  var alu10 = (2<alu1);
  var alu11 = (4<alu3);
  var alu12 = (10<alu4);
  var alu13 = (12<alu0);
  var alu14 = (12<alu4);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu27 = (gidx1+(Ridx1*13));
      var alu28 = (alu2+alu4+cast0+(Ridx1*851968)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu29 = ((12<alu27)&(alu27<269));
      var val0 = select((f16(0.0f)), data1_402653184[(alu28+-855309)], (alu14&alu13&alu29));
      var alu30 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[(alu30+1)];
      var val2 = data2_15552[(alu30+4)];
      var val3 = data2_15552[alu30];
      var alu31 = (alu13&alu29);
      var val4 = select((f16(0.0f)), data1_402653184[(alu28+-855296)], alu31);
      var val5 = select((f16(0.0f)), data1_402653184[(alu28+-855283)], (alu9&alu13&alu29));
      var val6 = data2_15552[(alu30+2)];
      var val7 = select((f16(0.0f)), data1_402653184[(alu28+-851981)], (alu14&alu29));
      var val8 = data2_15552[(alu30+3)];
      var val9 = select((f16(0.0f)), data1_402653184[(alu28+-851968)], alu29);
      var val10 = select((f16(0.0f)), data1_402653184[(alu28+-851955)], (alu9&alu29));
      var val11 = data2_15552[(alu30+5)];
      var val12 = select((f16(0.0f)), data1_402653184[(alu28+-848653)], (alu14&alu5&alu29));
      var val13 = data2_15552[(alu30+6)];
      var alu32 = (alu5&alu29);
      var val14 = select((f16(0.0f)), data1_402653184[(alu28+-848640)], alu32);
      var val15 = data2_15552[(alu30+7)];
      var val16 = select((f16(0.0f)), data1_402653184[(alu28+-848627)], (alu9&alu5&alu29));
      var val17 = data2_15552[(alu30+8)];
      var val18 = data2_15552[(alu30+648)];
      var val19 = data2_15552[(alu30+649)];
      var val20 = data2_15552[(alu30+650)];
      var val21 = data2_15552[(alu30+651)];
      var val22 = data2_15552[(alu30+652)];
      var val23 = data2_15552[(alu30+653)];
      var val24 = data2_15552[(alu30+654)];
      var val25 = data2_15552[(alu30+655)];
      var val26 = data2_15552[(alu30+656)];
      var val27 = data2_15552[(alu30+1296)];
      var val28 = data2_15552[(alu30+1297)];
      var val29 = data2_15552[(alu30+1298)];
      var val30 = data2_15552[(alu30+1299)];
      var val31 = data2_15552[(alu30+1300)];
      var val32 = data2_15552[(alu30+1301)];
      var val33 = data2_15552[(alu30+1302)];
      var val34 = data2_15552[(alu30+1303)];
      var val35 = data2_15552[(alu30+1304)];
      var val36 = select((f16(0.0f)), data1_402653184[(alu28+-855308)], (alu10&alu13&alu29));
      var val37 = select((f16(0.0f)), data1_402653184[(alu28+-855307)], (alu12&alu13&alu29));
      var val38 = select((f16(0.0f)), data1_402653184[(alu28+-855306)], (alu11&alu13&alu29));
      var val39 = select((f16(0.0f)), data1_402653184[(alu28+-855295)], alu31);
      var val40 = select((f16(0.0f)), data1_402653184[(alu28+-855294)], alu31);
      var val41 = select((f16(0.0f)), data1_402653184[(alu28+-855293)], alu31);
      var val42 = select((f16(0.0f)), data1_402653184[(alu28+-855282)], (alu7&alu13&alu29));
      var val43 = select((f16(0.0f)), data1_402653184[(alu28+-855281)], (alu8&alu13&alu29));
      var val44 = select((f16(0.0f)), data1_402653184[(alu28+-855280)], (alu6&alu13&alu29));
      var val45 = select((f16(0.0f)), data1_402653184[(alu28+-851980)], (alu10&alu29));
      var val46 = select((f16(0.0f)), data1_402653184[(alu28+-851979)], (alu12&alu29));
      var val47 = select((f16(0.0f)), data1_402653184[(alu28+-851978)], (alu11&alu29));
      var val48 = select((f16(0.0f)), data1_402653184[(alu28+-851967)], alu29);
      var val49 = select((f16(0.0f)), data1_402653184[(alu28+-851966)], alu29);
      var val50 = select((f16(0.0f)), data1_402653184[(alu28+-851965)], alu29);
      var val51 = select((f16(0.0f)), data1_402653184[(alu28+-851954)], (alu7&alu29));
      var val52 = select((f16(0.0f)), data1_402653184[(alu28+-851953)], (alu8&alu29));
      var val53 = select((f16(0.0f)), data1_402653184[(alu28+-851952)], (alu6&alu29));
      var val54 = select((f16(0.0f)), data1_402653184[(alu28+-848652)], (alu10&alu5&alu29));
      var val55 = select((f16(0.0f)), data1_402653184[(alu28+-848651)], (alu12&alu5&alu29));
      var val56 = select((f16(0.0f)), data1_402653184[(alu28+-848650)], (alu11&alu5&alu29));
      var val57 = select((f16(0.0f)), data1_402653184[(alu28+-848639)], alu32);
      var val58 = select((f16(0.0f)), data1_402653184[(alu28+-848638)], alu32);
      var val59 = select((f16(0.0f)), data1_402653184[(alu28+-848637)], alu32);
      var val60 = select((f16(0.0f)), data1_402653184[(alu28+-848626)], (alu7&alu5&alu29));
      var val61 = select((f16(0.0f)), data1_402653184[(alu28+-848625)], (alu8&alu5&alu29));
      var val62 = select((f16(0.0f)), data1_402653184[(alu28+-848624)], (alu6&alu5&alu29));
      acc0[0] = (acc0[0]+(f32((val0*val3)))+(f32((val4*val1)))+(f32((val5*val6)))+(f32((val7*val8)))+(f32((val9*val2)))+(f32((val10*val11)))+(f32((val12*val13)))+(f32((val14*val15)))+(f32((val16*val17))));
      acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val4*val19)))+(f32((val5*val20)))+(f32((val7*val21)))+(f32((val9*val22)))+(f32((val10*val23)))+(f32((val12*val24)))+(f32((val14*val25)))+(f32((val16*val26))));
      acc0[2] = (acc0[2]+(f32((val0*val27)))+(f32((val4*val28)))+(f32((val5*val29)))+(f32((val7*val30)))+(f32((val9*val31)))+(f32((val10*val32)))+(f32((val12*val33)))+(f32((val14*val34)))+(f32((val16*val35))));
      acc0[3] = (acc0[3]+(f32((val36*val3)))+(f32((val39*val1)))+(f32((val42*val6)))+(f32((val45*val8)))+(f32((val48*val2)))+(f32((val51*val11)))+(f32((val54*val13)))+(f32((val57*val15)))+(f32((val60*val17))));
      acc0[4] = (acc0[4]+(f32((val36*val18)))+(f32((val39*val19)))+(f32((val42*val20)))+(f32((val45*val21)))+(f32((val48*val22)))+(f32((val51*val23)))+(f32((val54*val24)))+(f32((val57*val25)))+(f32((val60*val26))));
      acc0[5] = (acc0[5]+(f32((val36*val27)))+(f32((val39*val28)))+(f32((val42*val29)))+(f32((val45*val30)))+(f32((val48*val31)))+(f32((val51*val32)))+(f32((val54*val33)))+(f32((val57*val34)))+(f32((val60*val35))));
      acc0[6] = (acc0[6]+(f32((val37*val3)))+(f32((val40*val1)))+(f32((val43*val6)))+(f32((val46*val8)))+(f32((val49*val2)))+(f32((val52*val11)))+(f32((val55*val13)))+(f32((val58*val15)))+(f32((val61*val17))));
      acc0[7] = (acc0[7]+(f32((val37*val18)))+(f32((val40*val19)))+(f32((val43*val20)))+(f32((val46*val21)))+(f32((val49*val22)))+(f32((val52*val23)))+(f32((val55*val24)))+(f32((val58*val25)))+(f32((val61*val26))));
      acc0[8] = (acc0[8]+(f32((val37*val27)))+(f32((val40*val28)))+(f32((val43*val29)))+(f32((val46*val30)))+(f32((val49*val31)))+(f32((val52*val32)))+(f32((val55*val33)))+(f32((val58*val34)))+(f32((val61*val35))));
      acc0[9] = (acc0[9]+(f32((val38*val3)))+(f32((val41*val1)))+(f32((val44*val6)))+(f32((val47*val8)))+(f32((val50*val2)))+(f32((val53*val11)))+(f32((val56*val13)))+(f32((val59*val15)))+(f32((val62*val17))));
      acc0[10] = (acc0[10]+(f32((val38*val18)))+(f32((val41*val19)))+(f32((val44*val20)))+(f32((val47*val21)))+(f32((val50*val22)))+(f32((val53*val23)))+(f32((val56*val24)))+(f32((val59*val25)))+(f32((val62*val26))));
      acc0[11] = (acc0[11]+(f32((val38*val27)))+(f32((val41*val28)))+(f32((val44*val29)))+(f32((val47*val30)))+(f32((val50*val31)))+(f32((val53*val32)))+(f32((val56*val33)))+(f32((val59*val34)))+(f32((val62*val35))));
    }
  }
  var alu47 = (alu2+cast0+alu4+(gidx2*50331648));
  data0_402653184[alu47] = (f32((f16(acc0[0]))));
  data0_402653184[(alu47+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu47+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu47+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu47+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu47+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu47+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu47+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu47+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu47+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu47+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu47+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3n4 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (lidx1+bitcast<i32>((cast3<<4u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u)));
  var alu3 = (bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u)));
  var alu4 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu5 = (alu0<237);
  var alu6 = (alu1<59);
  var alu7 = (alu3<117);
  var alu8 = (alu4<235);
  var alu9 = (alu4<237);
  var alu10 = (3<alu1);
  var alu11 = (8<alu3);
  var alu12 = (16<alu4);
  var alu13 = (18<alu0);
  var alu14 = (18<alu4);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu27 = (gidx1+(Ridx1*19));
      var alu28 = (alu2+alu4+cast0+(Ridx1*1245184)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu29 = ((18<alu27)&(alu27<275));
      var val0 = select((f16(0.0f)), data1_402653184[(alu28+-1250067)], (alu14&alu13&alu29));
      var alu30 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[(alu30+1)];
      var val2 = data2_15552[(alu30+4)];
      var val3 = data2_15552[alu30];
      var alu31 = (alu13&alu29);
      var val4 = select((f16(0.0f)), data1_402653184[(alu28+-1250048)], alu31);
      var val5 = select((f16(0.0f)), data1_402653184[(alu28+-1250029)], (alu9&alu13&alu29));
      var val6 = data2_15552[(alu30+2)];
      var val7 = select((f16(0.0f)), data1_402653184[(alu28+-1245203)], (alu14&alu29));
      var val8 = data2_15552[(alu30+3)];
      var val9 = select((f16(0.0f)), data1_402653184[(alu28+-1245184)], alu29);
      var val10 = select((f16(0.0f)), data1_402653184[(alu28+-1245165)], (alu9&alu29));
      var val11 = data2_15552[(alu30+5)];
      var val12 = select((f16(0.0f)), data1_402653184[(alu28+-1240339)], (alu14&alu5&alu29));
      var val13 = data2_15552[(alu30+6)];
      var alu32 = (alu5&alu29);
      var val14 = select((f16(0.0f)), data1_402653184[(alu28+-1240320)], alu32);
      var val15 = data2_15552[(alu30+7)];
      var val16 = select((f16(0.0f)), data1_402653184[(alu28+-1240301)], (alu9&alu5&alu29));
      var val17 = data2_15552[(alu30+8)];
      var val18 = data2_15552[(alu30+648)];
      var val19 = data2_15552[(alu30+649)];
      var val20 = data2_15552[(alu30+650)];
      var val21 = data2_15552[(alu30+651)];
      var val22 = data2_15552[(alu30+652)];
      var val23 = data2_15552[(alu30+653)];
      var val24 = data2_15552[(alu30+654)];
      var val25 = data2_15552[(alu30+655)];
      var val26 = data2_15552[(alu30+656)];
      var val27 = data2_15552[(alu30+1296)];
      var val28 = data2_15552[(alu30+1297)];
      var val29 = data2_15552[(alu30+1298)];
      var val30 = data2_15552[(alu30+1299)];
      var val31 = data2_15552[(alu30+1300)];
      var val32 = data2_15552[(alu30+1301)];
      var val33 = data2_15552[(alu30+1302)];
      var val34 = data2_15552[(alu30+1303)];
      var val35 = data2_15552[(alu30+1304)];
      var val36 = select((f16(0.0f)), data1_402653184[(alu28+-1250066)], (alu11&alu13&alu29));
      var val37 = select((f16(0.0f)), data1_402653184[(alu28+-1250065)], (alu12&alu13&alu29));
      var val38 = select((f16(0.0f)), data1_402653184[(alu28+-1250064)], (alu10&alu13&alu29));
      var val39 = select((f16(0.0f)), data1_402653184[(alu28+-1250047)], alu31);
      var val40 = select((f16(0.0f)), data1_402653184[(alu28+-1250046)], alu31);
      var val41 = select((f16(0.0f)), data1_402653184[(alu28+-1250045)], alu31);
      var val42 = select((f16(0.0f)), data1_402653184[(alu28+-1250028)], (alu6&alu13&alu29));
      var val43 = select((f16(0.0f)), data1_402653184[(alu28+-1250027)], (alu8&alu13&alu29));
      var val44 = select((f16(0.0f)), data1_402653184[(alu28+-1250026)], (alu7&alu13&alu29));
      var val45 = select((f16(0.0f)), data1_402653184[(alu28+-1245202)], (alu11&alu29));
      var val46 = select((f16(0.0f)), data1_402653184[(alu28+-1245201)], (alu12&alu29));
      var val47 = select((f16(0.0f)), data1_402653184[(alu28+-1245200)], (alu10&alu29));
      var val48 = select((f16(0.0f)), data1_402653184[(alu28+-1245183)], alu29);
      var val49 = select((f16(0.0f)), data1_402653184[(alu28+-1245182)], alu29);
      var val50 = select((f16(0.0f)), data1_402653184[(alu28+-1245181)], alu29);
      var val51 = select((f16(0.0f)), data1_402653184[(alu28+-1245164)], (alu6&alu29));
      var val52 = select((f16(0.0f)), data1_402653184[(alu28+-1245163)], (alu8&alu29));
      var val53 = select((f16(0.0f)), data1_402653184[(alu28+-1245162)], (alu7&alu29));
      var val54 = select((f16(0.0f)), data1_402653184[(alu28+-1240338)], (alu11&alu5&alu29));
      var val55 = select((f16(0.0f)), data1_402653184[(alu28+-1240337)], (alu12&alu5&alu29));
      var val56 = select((f16(0.0f)), data1_402653184[(alu28+-1240336)], (alu10&alu5&alu29));
      var val57 = select((f16(0.0f)), data1_402653184[(alu28+-1240319)], alu32);
      var val58 = select((f16(0.0f)), data1_402653184[(alu28+-1240318)], alu32);
      var val59 = select((f16(0.0f)), data1_402653184[(alu28+-1240317)], alu32);
      var val60 = select((f16(0.0f)), data1_402653184[(alu28+-1240300)], (alu6&alu5&alu29));
      var val61 = select((f16(0.0f)), data1_402653184[(alu28+-1240299)], (alu8&alu5&alu29));
      var val62 = select((f16(0.0f)), data1_402653184[(alu28+-1240298)], (alu7&alu5&alu29));
      acc0[0] = (acc0[0]+(f32((val0*val3)))+(f32((val4*val1)))+(f32((val5*val6)))+(f32((val7*val8)))+(f32((val9*val2)))+(f32((val10*val11)))+(f32((val12*val13)))+(f32((val14*val15)))+(f32((val16*val17))));
      acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val4*val19)))+(f32((val5*val20)))+(f32((val7*val21)))+(f32((val9*val22)))+(f32((val10*val23)))+(f32((val12*val24)))+(f32((val14*val25)))+(f32((val16*val26))));
      acc0[2] = (acc0[2]+(f32((val0*val27)))+(f32((val4*val28)))+(f32((val5*val29)))+(f32((val7*val30)))+(f32((val9*val31)))+(f32((val10*val32)))+(f32((val12*val33)))+(f32((val14*val34)))+(f32((val16*val35))));
      acc0[3] = (acc0[3]+(f32((val36*val3)))+(f32((val39*val1)))+(f32((val42*val6)))+(f32((val45*val8)))+(f32((val48*val2)))+(f32((val51*val11)))+(f32((val54*val13)))+(f32((val57*val15)))+(f32((val60*val17))));
      acc0[4] = (acc0[4]+(f32((val36*val18)))+(f32((val39*val19)))+(f32((val42*val20)))+(f32((val45*val21)))+(f32((val48*val22)))+(f32((val51*val23)))+(f32((val54*val24)))+(f32((val57*val25)))+(f32((val60*val26))));
      acc0[5] = (acc0[5]+(f32((val36*val27)))+(f32((val39*val28)))+(f32((val42*val29)))+(f32((val45*val30)))+(f32((val48*val31)))+(f32((val51*val32)))+(f32((val54*val33)))+(f32((val57*val34)))+(f32((val60*val35))));
      acc0[6] = (acc0[6]+(f32((val37*val3)))+(f32((val40*val1)))+(f32((val43*val6)))+(f32((val46*val8)))+(f32((val49*val2)))+(f32((val52*val11)))+(f32((val55*val13)))+(f32((val58*val15)))+(f32((val61*val17))));
      acc0[7] = (acc0[7]+(f32((val37*val18)))+(f32((val40*val19)))+(f32((val43*val20)))+(f32((val46*val21)))+(f32((val49*val22)))+(f32((val52*val23)))+(f32((val55*val24)))+(f32((val58*val25)))+(f32((val61*val26))));
      acc0[8] = (acc0[8]+(f32((val37*val27)))+(f32((val40*val28)))+(f32((val43*val29)))+(f32((val46*val30)))+(f32((val49*val31)))+(f32((val52*val32)))+(f32((val55*val33)))+(f32((val58*val34)))+(f32((val61*val35))));
      acc0[9] = (acc0[9]+(f32((val38*val3)))+(f32((val41*val1)))+(f32((val44*val6)))+(f32((val47*val8)))+(f32((val50*val2)))+(f32((val53*val11)))+(f32((val56*val13)))+(f32((val59*val15)))+(f32((val62*val17))));
      acc0[10] = (acc0[10]+(f32((val38*val18)))+(f32((val41*val19)))+(f32((val44*val20)))+(f32((val47*val21)))+(f32((val50*val22)))+(f32((val53*val23)))+(f32((val56*val24)))+(f32((val59*val25)))+(f32((val62*val26))));
      acc0[11] = (acc0[11]+(f32((val38*val27)))+(f32((val41*val28)))+(f32((val44*val29)))+(f32((val47*val30)))+(f32((val50*val31)))+(f32((val53*val32)))+(f32((val56*val33)))+(f32((val59*val34)))+(f32((val62*val35))));
    }
  }
  var alu47 = (alu2+cast0+alu4+(gidx2*50331648));
  data0_402653184[alu47] = (f32((f16(acc0[0]))));
  data0_402653184[(alu47+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu47+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu47+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu47+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu47+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu47+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu47+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu47+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu47+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu47+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu47+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3n5 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>((gidx0>>2u));
  var cast3 = bitcast<u32>((gidx0&3));
  var alu0 = (lidx0+bitcast<i32>((cast2<<3u)));
  var alu1 = (lidx1+bitcast<i32>((cast3<<4u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast2<<11u)));
  var alu3 = (bitcast<i32>((cast1<<1u))+bitcast<i32>((cast3<<5u)));
  var alu4 = (bitcast<i32>((cast1<<2u))+bitcast<i32>((cast3<<6u)));
  var alu5 = (alu0<225);
  var alu6 = (alu1<56);
  var alu7 = (alu3<111);
  var alu8 = (alu4<223);
  var alu9 = (alu4<225);
  var alu10 = (6<alu1);
  var alu11 = (14<alu3);
  var alu12 = (28<alu4);
  var alu13 = (30<alu0);
  var alu14 = (30<alu4);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu27 = (gidx1+(Ridx1*31));
      var alu28 = (alu2+alu4+cast0+(Ridx1*2031616)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu29 = ((30<alu27)&(alu27<287));
      var val0 = select((f16(0.0f)), data1_402653184[(alu28+-2039583)], (alu14&alu13&alu29));
      var alu30 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[(alu30+1)];
      var val2 = data2_15552[(alu30+4)];
      var val3 = data2_15552[alu30];
      var alu31 = (alu13&alu29);
      var val4 = select((f16(0.0f)), data1_402653184[(alu28+-2039552)], alu31);
      var val5 = select((f16(0.0f)), data1_402653184[(alu28+-2039521)], (alu9&alu13&alu29));
      var val6 = data2_15552[(alu30+2)];
      var val7 = select((f16(0.0f)), data1_402653184[(alu28+-2031647)], (alu14&alu29));
      var val8 = data2_15552[(alu30+3)];
      var val9 = select((f16(0.0f)), data1_402653184[(alu28+-2031616)], alu29);
      var val10 = select((f16(0.0f)), data1_402653184[(alu28+-2031585)], (alu9&alu29));
      var val11 = data2_15552[(alu30+5)];
      var val12 = select((f16(0.0f)), data1_402653184[(alu28+-2023711)], (alu14&alu5&alu29));
      var val13 = data2_15552[(alu30+6)];
      var alu32 = (alu5&alu29);
      var val14 = select((f16(0.0f)), data1_402653184[(alu28+-2023680)], alu32);
      var val15 = data2_15552[(alu30+7)];
      var val16 = select((f16(0.0f)), data1_402653184[(alu28+-2023649)], (alu9&alu5&alu29));
      var val17 = data2_15552[(alu30+8)];
      var val18 = data2_15552[(alu30+648)];
      var val19 = data2_15552[(alu30+649)];
      var val20 = data2_15552[(alu30+650)];
      var val21 = data2_15552[(alu30+651)];
      var val22 = data2_15552[(alu30+652)];
      var val23 = data2_15552[(alu30+653)];
      var val24 = data2_15552[(alu30+654)];
      var val25 = data2_15552[(alu30+655)];
      var val26 = data2_15552[(alu30+656)];
      var val27 = data2_15552[(alu30+1296)];
      var val28 = data2_15552[(alu30+1297)];
      var val29 = data2_15552[(alu30+1298)];
      var val30 = data2_15552[(alu30+1299)];
      var val31 = data2_15552[(alu30+1300)];
      var val32 = data2_15552[(alu30+1301)];
      var val33 = data2_15552[(alu30+1302)];
      var val34 = data2_15552[(alu30+1303)];
      var val35 = data2_15552[(alu30+1304)];
      var val36 = select((f16(0.0f)), data1_402653184[(alu28+-2039582)], (alu11&alu13&alu29));
      var val37 = select((f16(0.0f)), data1_402653184[(alu28+-2039581)], (alu12&alu13&alu29));
      var val38 = select((f16(0.0f)), data1_402653184[(alu28+-2039580)], (alu10&alu13&alu29));
      var val39 = select((f16(0.0f)), data1_402653184[(alu28+-2039551)], alu31);
      var val40 = select((f16(0.0f)), data1_402653184[(alu28+-2039550)], alu31);
      var val41 = select((f16(0.0f)), data1_402653184[(alu28+-2039549)], alu31);
      var val42 = select((f16(0.0f)), data1_402653184[(alu28+-2039520)], (alu6&alu13&alu29));
      var val43 = select((f16(0.0f)), data1_402653184[(alu28+-2039519)], (alu8&alu13&alu29));
      var val44 = select((f16(0.0f)), data1_402653184[(alu28+-2039518)], (alu7&alu13&alu29));
      var val45 = select((f16(0.0f)), data1_402653184[(alu28+-2031646)], (alu11&alu29));
      var val46 = select((f16(0.0f)), data1_402653184[(alu28+-2031645)], (alu12&alu29));
      var val47 = select((f16(0.0f)), data1_402653184[(alu28+-2031644)], (alu10&alu29));
      var val48 = select((f16(0.0f)), data1_402653184[(alu28+-2031615)], alu29);
      var val49 = select((f16(0.0f)), data1_402653184[(alu28+-2031614)], alu29);
      var val50 = select((f16(0.0f)), data1_402653184[(alu28+-2031613)], alu29);
      var val51 = select((f16(0.0f)), data1_402653184[(alu28+-2031584)], (alu6&alu29));
      var val52 = select((f16(0.0f)), data1_402653184[(alu28+-2031583)], (alu8&alu29));
      var val53 = select((f16(0.0f)), data1_402653184[(alu28+-2031582)], (alu7&alu29));
      var val54 = select((f16(0.0f)), data1_402653184[(alu28+-2023710)], (alu11&alu5&alu29));
      var val55 = select((f16(0.0f)), data1_402653184[(alu28+-2023709)], (alu12&alu5&alu29));
      var val56 = select((f16(0.0f)), data1_402653184[(alu28+-2023708)], (alu10&alu5&alu29));
      var val57 = select((f16(0.0f)), data1_402653184[(alu28+-2023679)], alu32);
      var val58 = select((f16(0.0f)), data1_402653184[(alu28+-2023678)], alu32);
      var val59 = select((f16(0.0f)), data1_402653184[(alu28+-2023677)], alu32);
      var val60 = select((f16(0.0f)), data1_402653184[(alu28+-2023648)], (alu6&alu5&alu29));
      var val61 = select((f16(0.0f)), data1_402653184[(alu28+-2023647)], (alu8&alu5&alu29));
      var val62 = select((f16(0.0f)), data1_402653184[(alu28+-2023646)], (alu7&alu5&alu29));
      acc0[0] = (acc0[0]+(f32((val0*val3)))+(f32((val4*val1)))+(f32((val5*val6)))+(f32((val7*val8)))+(f32((val9*val2)))+(f32((val10*val11)))+(f32((val12*val13)))+(f32((val14*val15)))+(f32((val16*val17))));
      acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val4*val19)))+(f32((val5*val20)))+(f32((val7*val21)))+(f32((val9*val22)))+(f32((val10*val23)))+(f32((val12*val24)))+(f32((val14*val25)))+(f32((val16*val26))));
      acc0[2] = (acc0[2]+(f32((val0*val27)))+(f32((val4*val28)))+(f32((val5*val29)))+(f32((val7*val30)))+(f32((val9*val31)))+(f32((val10*val32)))+(f32((val12*val33)))+(f32((val14*val34)))+(f32((val16*val35))));
      acc0[3] = (acc0[3]+(f32((val36*val3)))+(f32((val39*val1)))+(f32((val42*val6)))+(f32((val45*val8)))+(f32((val48*val2)))+(f32((val51*val11)))+(f32((val54*val13)))+(f32((val57*val15)))+(f32((val60*val17))));
      acc0[4] = (acc0[4]+(f32((val36*val18)))+(f32((val39*val19)))+(f32((val42*val20)))+(f32((val45*val21)))+(f32((val48*val22)))+(f32((val51*val23)))+(f32((val54*val24)))+(f32((val57*val25)))+(f32((val60*val26))));
      acc0[5] = (acc0[5]+(f32((val36*val27)))+(f32((val39*val28)))+(f32((val42*val29)))+(f32((val45*val30)))+(f32((val48*val31)))+(f32((val51*val32)))+(f32((val54*val33)))+(f32((val57*val34)))+(f32((val60*val35))));
      acc0[6] = (acc0[6]+(f32((val37*val3)))+(f32((val40*val1)))+(f32((val43*val6)))+(f32((val46*val8)))+(f32((val49*val2)))+(f32((val52*val11)))+(f32((val55*val13)))+(f32((val58*val15)))+(f32((val61*val17))));
      acc0[7] = (acc0[7]+(f32((val37*val18)))+(f32((val40*val19)))+(f32((val43*val20)))+(f32((val46*val21)))+(f32((val49*val22)))+(f32((val52*val23)))+(f32((val55*val24)))+(f32((val58*val25)))+(f32((val61*val26))));
      acc0[8] = (acc0[8]+(f32((val37*val27)))+(f32((val40*val28)))+(f32((val43*val29)))+(f32((val46*val30)))+(f32((val49*val31)))+(f32((val52*val32)))+(f32((val55*val33)))+(f32((val58*val34)))+(f32((val61*val35))));
      acc0[9] = (acc0[9]+(f32((val38*val3)))+(f32((val41*val1)))+(f32((val44*val6)))+(f32((val47*val8)))+(f32((val50*val2)))+(f32((val53*val11)))+(f32((val56*val13)))+(f32((val59*val15)))+(f32((val62*val17))));
      acc0[10] = (acc0[10]+(f32((val38*val18)))+(f32((val41*val19)))+(f32((val44*val20)))+(f32((val47*val21)))+(f32((val50*val22)))+(f32((val53*val23)))+(f32((val56*val24)))+(f32((val59*val25)))+(f32((val62*val26))));
      acc0[11] = (acc0[11]+(f32((val38*val27)))+(f32((val41*val28)))+(f32((val44*val29)))+(f32((val47*val30)))+(f32((val50*val31)))+(f32((val53*val32)))+(f32((val56*val33)))+(f32((val59*val34)))+(f32((val62*val35))));
    }
  }
  var alu47 = (alu2+cast0+alu4+(gidx2*50331648));
  data0_402653184[alu47] = (f32((f16(acc0[0]))));
  data0_402653184[(alu47+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu47+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu47+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu47+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu47+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu47+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu47+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu47+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu47+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu47+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu47+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_8_256_32_4_8_16_4_3_24_3_3_3n6 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var alu0 = (gidx0>>2u);
  var cast1 = bitcast<u32>(alu0);
  var alu1 = (gidx0&3);
  var cast2 = bitcast<u32>(alu1);
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((cast1<<11u)));
  var alu3 = (bitcast<i32>((bitcast<u32>(lidx1)<<2u))+bitcast<i32>((cast2<<6u)));
  var alu4 = ((lidx0+bitcast<i32>((cast1<<3u)))<255);
  var alu5 = ((lidx1+bitcast<i32>((cast2<<4u)))<63);
  var alu6 = (0<(lidx0+alu0));
  var alu7 = (0<(lidx1+alu1));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu20 = (gidx1+Ridx1);
      var alu21 = (alu2+alu3+cast0+bitcast<i32>((bitcast<u32>(Ridx1)<<16u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
      var alu22 = ((0<alu20)&(alu20<257));
      var val0 = select((f16(0.0f)), data1_402653184[(alu21+-65793)], (alu7&alu6&alu22));
      var alu23 = ((Ridx0*27)+(Ridx1*9)+(gidx2*1944));
      var val1 = data2_15552[alu23];
      var alu24 = (alu6&alu22);
      var val2 = select((f16(0.0f)), data1_402653184[(alu21+-65792)], alu24);
      var val3 = data2_15552[(alu23+1)];
      var val4 = select((f16(0.0f)), data1_402653184[(alu21+-65791)], alu24);
      var val5 = data2_15552[(alu23+2)];
      var val6 = select((f16(0.0f)), data1_402653184[(alu21+-65537)], (alu7&alu22));
      var val7 = data2_15552[(alu23+3)];
      var val8 = select((f16(0.0f)), data1_402653184[(alu21+-65536)], alu22);
      var val9 = data2_15552[(alu23+4)];
      var val10 = select((f16(0.0f)), data1_402653184[(alu21+-65535)], alu22);
      var val11 = data2_15552[(alu23+5)];
      var val12 = select((f16(0.0f)), data1_402653184[(alu21+-65281)], (alu7&alu4&alu22));
      var val13 = data2_15552[(alu23+6)];
      var alu25 = (alu4&alu22);
      var val14 = select((f16(0.0f)), data1_402653184[(alu21+-65280)], alu25);
      var val15 = data2_15552[(alu23+7)];
      var val16 = select((f16(0.0f)), data1_402653184[(alu21+-65279)], alu25);
      var val17 = data2_15552[(alu23+8)];
      var val18 = data2_15552[(alu23+648)];
      var val19 = data2_15552[(alu23+649)];
      var val20 = data2_15552[(alu23+650)];
      var val21 = data2_15552[(alu23+651)];
      var val22 = data2_15552[(alu23+652)];
      var val23 = data2_15552[(alu23+653)];
      var val24 = data2_15552[(alu23+654)];
      var val25 = data2_15552[(alu23+655)];
      var val26 = data2_15552[(alu23+656)];
      var val27 = data2_15552[(alu23+1296)];
      var val28 = data2_15552[(alu23+1297)];
      var val29 = data2_15552[(alu23+1298)];
      var val30 = data2_15552[(alu23+1299)];
      var val31 = data2_15552[(alu23+1300)];
      var val32 = data2_15552[(alu23+1301)];
      var val33 = data2_15552[(alu23+1302)];
      var val34 = data2_15552[(alu23+1303)];
      var val35 = data2_15552[(alu23+1304)];
      var val36 = select((f16(0.0f)), data1_402653184[(alu21+-65790)], alu24);
      var val37 = select((f16(0.0f)), data1_402653184[(alu21+-65789)], alu24);
      var val38 = select((f16(0.0f)), data1_402653184[(alu21+-65788)], (alu5&alu6&alu22));
      var val39 = select((f16(0.0f)), data1_402653184[(alu21+-65534)], alu22);
      var val40 = select((f16(0.0f)), data1_402653184[(alu21+-65533)], alu22);
      var val41 = select((f16(0.0f)), data1_402653184[(alu21+-65532)], (alu5&alu22));
      var val42 = select((f16(0.0f)), data1_402653184[(alu21+-65278)], alu25);
      var val43 = select((f16(0.0f)), data1_402653184[(alu21+-65277)], alu25);
      var val44 = select((f16(0.0f)), data1_402653184[(alu21+-65276)], (alu5&alu4&alu22));
      acc0[0] = (acc0[0]+(f32((val0*val1)))+(f32((val2*val3)))+(f32((val4*val5)))+(f32((val6*val7)))+(f32((val8*val9)))+(f32((val10*val11)))+(f32((val12*val13)))+(f32((val14*val15)))+(f32((val16*val17))));
      acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val2*val19)))+(f32((val4*val20)))+(f32((val6*val21)))+(f32((val8*val22)))+(f32((val10*val23)))+(f32((val12*val24)))+(f32((val14*val25)))+(f32((val16*val26))));
      acc0[2] = (acc0[2]+(f32((val0*val27)))+(f32((val2*val28)))+(f32((val4*val29)))+(f32((val6*val30)))+(f32((val8*val31)))+(f32((val10*val32)))+(f32((val12*val33)))+(f32((val14*val34)))+(f32((val16*val35))));
      acc0[3] = (acc0[3]+(f32((val2*val1)))+(f32((val4*val3)))+(f32((val36*val5)))+(f32((val8*val7)))+(f32((val10*val9)))+(f32((val39*val11)))+(f32((val14*val13)))+(f32((val16*val15)))+(f32((val42*val17))));
      acc0[4] = (acc0[4]+(f32((val2*val18)))+(f32((val4*val19)))+(f32((val36*val20)))+(f32((val8*val21)))+(f32((val10*val22)))+(f32((val39*val23)))+(f32((val14*val24)))+(f32((val16*val25)))+(f32((val42*val26))));
      acc0[5] = (acc0[5]+(f32((val2*val27)))+(f32((val4*val28)))+(f32((val36*val29)))+(f32((val8*val30)))+(f32((val10*val31)))+(f32((val39*val32)))+(f32((val14*val33)))+(f32((val16*val34)))+(f32((val42*val35))));
      acc0[6] = (acc0[6]+(f32((val4*val1)))+(f32((val36*val3)))+(f32((val37*val5)))+(f32((val10*val7)))+(f32((val39*val9)))+(f32((val40*val11)))+(f32((val16*val13)))+(f32((val42*val15)))+(f32((val43*val17))));
      acc0[7] = (acc0[7]+(f32((val4*val18)))+(f32((val36*val19)))+(f32((val37*val20)))+(f32((val10*val21)))+(f32((val39*val22)))+(f32((val40*val23)))+(f32((val16*val24)))+(f32((val42*val25)))+(f32((val43*val26))));
      acc0[8] = (acc0[8]+(f32((val4*val27)))+(f32((val36*val28)))+(f32((val37*val29)))+(f32((val10*val30)))+(f32((val39*val31)))+(f32((val40*val32)))+(f32((val16*val33)))+(f32((val42*val34)))+(f32((val43*val35))));
      acc0[9] = (acc0[9]+(f32((val36*val1)))+(f32((val37*val3)))+(f32((val38*val5)))+(f32((val39*val7)))+(f32((val40*val9)))+(f32((val41*val11)))+(f32((val42*val13)))+(f32((val43*val15)))+(f32((val44*val17))));
      acc0[10] = (acc0[10]+(f32((val36*val18)))+(f32((val37*val19)))+(f32((val38*val20)))+(f32((val39*val21)))+(f32((val40*val22)))+(f32((val41*val23)))+(f32((val42*val24)))+(f32((val43*val25)))+(f32((val44*val26))));
      acc0[11] = (acc0[11]+(f32((val36*val27)))+(f32((val37*val28)))+(f32((val38*val29)))+(f32((val39*val30)))+(f32((val40*val31)))+(f32((val41*val32)))+(f32((val42*val33)))+(f32((val43*val34)))+(f32((val44*val35))));
    }
  }
  var alu40 = (alu2+cast0+alu3+(gidx2*50331648));
  data0_402653184[alu40] = (f32((f16(acc0[0]))));
  data0_402653184[(alu40+1)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu40+2)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu40+3)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu40+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu40+16777217)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu40+16777218)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu40+16777219)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu40+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu40+33554433)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu40+33554434)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu40+33554435)] = (f32((f16(acc0[11]))));
}`;

const r_2_262144_3_16_4_3_24 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_301989888:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_432:array<f16>;
@group(0) @binding(4)var<storage,read_write>data3_18:array<f16>;
@compute @workgroup_size(3,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>((gidx1>>1u))<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<2u)));
  var val0 = data1_402653184[alu0];
  var lidx0 = i32(lindex.x); /* 3 */
  var alu1 = (gidx1&1);
  var alu2 = ((lidx0*72)+(alu1*216));
  var val1 = data2_432[(alu2+1)];
  var val2 = data2_432[(alu2+6)];
  var val3 = data2_432[alu2];
  var val4 = data1_402653184[(alu0+1)];
  var val5 = data1_402653184[(alu0+2)];
  var val6 = data1_402653184[(alu0+3)];
  var val7 = data1_402653184[(alu0+16777216)];
  var val8 = data1_402653184[(alu0+16777217)];
  var val9 = data1_402653184[(alu0+16777218)];
  var val10 = data1_402653184[(alu0+16777219)];
  var val11 = data1_402653184[(alu0+33554432)];
  var val12 = data2_432[(alu2+2)];
  var val13 = data1_402653184[(alu0+33554433)];
  var val14 = data1_402653184[(alu0+33554434)];
  var val15 = data1_402653184[(alu0+33554435)];
  var val16 = data1_402653184[(alu0+50331648)];
  var val17 = data2_432[(alu2+3)];
  var val18 = data1_402653184[(alu0+50331649)];
  var val19 = data1_402653184[(alu0+50331650)];
  var val20 = data1_402653184[(alu0+50331651)];
  var val21 = data1_402653184[(alu0+67108864)];
  var val22 = data2_432[(alu2+4)];
  var val23 = data1_402653184[(alu0+67108865)];
  var val24 = data1_402653184[(alu0+67108866)];
  var val25 = data1_402653184[(alu0+67108867)];
  var val26 = data1_402653184[(alu0+83886080)];
  var val27 = data2_432[(alu2+5)];
  var val28 = data1_402653184[(alu0+83886081)];
  var val29 = data1_402653184[(alu0+83886082)];
  var val30 = data1_402653184[(alu0+83886083)];
  var val31 = data1_402653184[(alu0+100663296)];
  var val32 = data1_402653184[(alu0+100663297)];
  var val33 = data1_402653184[(alu0+100663298)];
  var val34 = data1_402653184[(alu0+100663299)];
  var val35 = data1_402653184[(alu0+117440512)];
  var val36 = data2_432[(alu2+7)];
  var val37 = data1_402653184[(alu0+117440513)];
  var val38 = data1_402653184[(alu0+117440514)];
  var val39 = data1_402653184[(alu0+117440515)];
  var val40 = data1_402653184[(alu0+134217728)];
  var val41 = data2_432[(alu2+8)];
  var val42 = data1_402653184[(alu0+134217729)];
  var val43 = data1_402653184[(alu0+134217730)];
  var val44 = data1_402653184[(alu0+134217731)];
  var val45 = data1_402653184[(alu0+150994944)];
  var val46 = data2_432[(alu2+9)];
  var val47 = data1_402653184[(alu0+150994945)];
  var val48 = data1_402653184[(alu0+150994946)];
  var val49 = data1_402653184[(alu0+150994947)];
  var val50 = data1_402653184[(alu0+167772160)];
  var val51 = data2_432[(alu2+10)];
  var val52 = data1_402653184[(alu0+167772161)];
  var val53 = data1_402653184[(alu0+167772162)];
  var val54 = data1_402653184[(alu0+167772163)];
  var val55 = data1_402653184[(alu0+184549376)];
  var val56 = data2_432[(alu2+11)];
  var val57 = data1_402653184[(alu0+184549377)];
  var val58 = data1_402653184[(alu0+184549378)];
  var val59 = data1_402653184[(alu0+184549379)];
  var val60 = data1_402653184[(alu0+201326592)];
  var val61 = data2_432[(alu2+12)];
  var val62 = data1_402653184[(alu0+201326593)];
  var val63 = data1_402653184[(alu0+201326594)];
  var val64 = data1_402653184[(alu0+201326595)];
  var val65 = data1_402653184[(alu0+218103808)];
  var val66 = data2_432[(alu2+13)];
  var val67 = data1_402653184[(alu0+218103809)];
  var val68 = data1_402653184[(alu0+218103810)];
  var val69 = data1_402653184[(alu0+218103811)];
  var val70 = data1_402653184[(alu0+234881024)];
  var val71 = data2_432[(alu2+14)];
  var val72 = data1_402653184[(alu0+234881025)];
  var val73 = data1_402653184[(alu0+234881026)];
  var val74 = data1_402653184[(alu0+234881027)];
  var val75 = data1_402653184[(alu0+251658240)];
  var val76 = data2_432[(alu2+15)];
  var val77 = data1_402653184[(alu0+251658241)];
  var val78 = data1_402653184[(alu0+251658242)];
  var val79 = data1_402653184[(alu0+251658243)];
  var val80 = data1_402653184[(alu0+268435456)];
  var val81 = data2_432[(alu2+16)];
  var val82 = data1_402653184[(alu0+268435457)];
  var val83 = data1_402653184[(alu0+268435458)];
  var val84 = data1_402653184[(alu0+268435459)];
  var val85 = data1_402653184[(alu0+285212672)];
  var val86 = data2_432[(alu2+17)];
  var val87 = data1_402653184[(alu0+285212673)];
  var val88 = data1_402653184[(alu0+285212674)];
  var val89 = data1_402653184[(alu0+285212675)];
  var val90 = data1_402653184[(alu0+301989888)];
  var val91 = data2_432[(alu2+18)];
  var val92 = data1_402653184[(alu0+301989889)];
  var val93 = data1_402653184[(alu0+301989890)];
  var val94 = data1_402653184[(alu0+301989891)];
  var val95 = data1_402653184[(alu0+318767104)];
  var val96 = data2_432[(alu2+19)];
  var val97 = data1_402653184[(alu0+318767105)];
  var val98 = data1_402653184[(alu0+318767106)];
  var val99 = data1_402653184[(alu0+318767107)];
  var val100 = data1_402653184[(alu0+335544320)];
  var val101 = data2_432[(alu2+20)];
  var val102 = data1_402653184[(alu0+335544321)];
  var val103 = data1_402653184[(alu0+335544322)];
  var val104 = data1_402653184[(alu0+335544323)];
  var val105 = data1_402653184[(alu0+352321536)];
  var val106 = data2_432[(alu2+21)];
  var val107 = data1_402653184[(alu0+352321537)];
  var val108 = data1_402653184[(alu0+352321538)];
  var val109 = data1_402653184[(alu0+352321539)];
  var val110 = data1_402653184[(alu0+369098752)];
  var val111 = data2_432[(alu2+22)];
  var val112 = data1_402653184[(alu0+369098753)];
  var val113 = data1_402653184[(alu0+369098754)];
  var val114 = data1_402653184[(alu0+369098755)];
  var val115 = data1_402653184[(alu0+385875968)];
  var val116 = data2_432[(alu2+23)];
  var alu3 = ((lidx0*3)+(alu1*9));
  var val117 = data3_18[alu3];
  var val118 = data1_402653184[(alu0+385875969)];
  var val119 = data1_402653184[(alu0+385875970)];
  var val120 = data1_402653184[(alu0+385875971)];
  var val121 = data2_432[(alu2+24)];
  var val122 = data2_432[(alu2+25)];
  var val123 = data2_432[(alu2+26)];
  var val124 = data2_432[(alu2+27)];
  var val125 = data2_432[(alu2+28)];
  var val126 = data2_432[(alu2+29)];
  var val127 = data2_432[(alu2+30)];
  var val128 = data2_432[(alu2+31)];
  var val129 = data2_432[(alu2+32)];
  var val130 = data2_432[(alu2+33)];
  var val131 = data2_432[(alu2+34)];
  var val132 = data2_432[(alu2+35)];
  var val133 = data2_432[(alu2+36)];
  var val134 = data2_432[(alu2+37)];
  var val135 = data2_432[(alu2+38)];
  var val136 = data2_432[(alu2+39)];
  var val137 = data2_432[(alu2+40)];
  var val138 = data2_432[(alu2+41)];
  var val139 = data2_432[(alu2+42)];
  var val140 = data2_432[(alu2+43)];
  var val141 = data2_432[(alu2+44)];
  var val142 = data2_432[(alu2+45)];
  var val143 = data2_432[(alu2+46)];
  var val144 = data2_432[(alu2+47)];
  var val145 = data3_18[(alu3+1)];
  var val146 = data2_432[(alu2+48)];
  var val147 = data2_432[(alu2+49)];
  var val148 = data2_432[(alu2+50)];
  var val149 = data2_432[(alu2+51)];
  var val150 = data2_432[(alu2+52)];
  var val151 = data2_432[(alu2+53)];
  var val152 = data2_432[(alu2+54)];
  var val153 = data2_432[(alu2+55)];
  var val154 = data2_432[(alu2+56)];
  var val155 = data2_432[(alu2+57)];
  var val156 = data2_432[(alu2+58)];
  var val157 = data2_432[(alu2+59)];
  var val158 = data2_432[(alu2+60)];
  var val159 = data2_432[(alu2+61)];
  var val160 = data2_432[(alu2+62)];
  var val161 = data2_432[(alu2+63)];
  var val162 = data2_432[(alu2+64)];
  var val163 = data2_432[(alu2+65)];
  var val164 = data2_432[(alu2+66)];
  var val165 = data2_432[(alu2+67)];
  var val166 = data2_432[(alu2+68)];
  var val167 = data2_432[(alu2+69)];
  var val168 = data2_432[(alu2+70)];
  var val169 = data2_432[(alu2+71)];
  var val170 = data3_18[(alu3+2)];
  var alu4 = (alu0+(lidx0*50331648)+(alu1*150994944));
  data0_301989888[alu4] = ((f16(((f32((val0*val3)))+(f32((val7*val1)))+(f32((val11*val12)))+(f32((val16*val17)))+(f32((val21*val22)))+(f32((val26*val27)))+(f32((val31*val2)))+(f32((val35*val36)))+(f32((val40*val41)))+(f32((val45*val46)))+(f32((val50*val51)))+(f32((val55*val56)))+(f32((val60*val61)))+(f32((val65*val66)))+(f32((val70*val71)))+(f32((val75*val76)))+(f32((val80*val81)))+(f32((val85*val86)))+(f32((val90*val91)))+(f32((val95*val96)))+(f32((val100*val101)))+(f32((val105*val106)))+(f32((val110*val111)))+(f32((val115*val116))))))+val117);
  data0_301989888[(alu4+1)] = ((f16(((f32((val4*val3)))+(f32((val8*val1)))+(f32((val13*val12)))+(f32((val18*val17)))+(f32((val23*val22)))+(f32((val28*val27)))+(f32((val32*val2)))+(f32((val37*val36)))+(f32((val42*val41)))+(f32((val47*val46)))+(f32((val52*val51)))+(f32((val57*val56)))+(f32((val62*val61)))+(f32((val67*val66)))+(f32((val72*val71)))+(f32((val77*val76)))+(f32((val82*val81)))+(f32((val87*val86)))+(f32((val92*val91)))+(f32((val97*val96)))+(f32((val102*val101)))+(f32((val107*val106)))+(f32((val112*val111)))+(f32((val118*val116))))))+val117);
  data0_301989888[(alu4+2)] = ((f16(((f32((val5*val3)))+(f32((val9*val1)))+(f32((val14*val12)))+(f32((val19*val17)))+(f32((val24*val22)))+(f32((val29*val27)))+(f32((val33*val2)))+(f32((val38*val36)))+(f32((val43*val41)))+(f32((val48*val46)))+(f32((val53*val51)))+(f32((val58*val56)))+(f32((val63*val61)))+(f32((val68*val66)))+(f32((val73*val71)))+(f32((val78*val76)))+(f32((val83*val81)))+(f32((val88*val86)))+(f32((val93*val91)))+(f32((val98*val96)))+(f32((val103*val101)))+(f32((val108*val106)))+(f32((val113*val111)))+(f32((val119*val116))))))+val117);
  data0_301989888[(alu4+3)] = ((f16(((f32((val6*val3)))+(f32((val10*val1)))+(f32((val15*val12)))+(f32((val20*val17)))+(f32((val25*val22)))+(f32((val30*val27)))+(f32((val34*val2)))+(f32((val39*val36)))+(f32((val44*val41)))+(f32((val49*val46)))+(f32((val54*val51)))+(f32((val59*val56)))+(f32((val64*val61)))+(f32((val69*val66)))+(f32((val74*val71)))+(f32((val79*val76)))+(f32((val84*val81)))+(f32((val89*val86)))+(f32((val94*val91)))+(f32((val99*val96)))+(f32((val104*val101)))+(f32((val109*val106)))+(f32((val114*val111)))+(f32((val120*val116))))))+val117);
  data0_301989888[(alu4+16777216)] = ((f16(((f32((val0*val121)))+(f32((val7*val122)))+(f32((val11*val123)))+(f32((val16*val124)))+(f32((val21*val125)))+(f32((val26*val126)))+(f32((val31*val127)))+(f32((val35*val128)))+(f32((val40*val129)))+(f32((val45*val130)))+(f32((val50*val131)))+(f32((val55*val132)))+(f32((val60*val133)))+(f32((val65*val134)))+(f32((val70*val135)))+(f32((val75*val136)))+(f32((val80*val137)))+(f32((val85*val138)))+(f32((val90*val139)))+(f32((val95*val140)))+(f32((val100*val141)))+(f32((val105*val142)))+(f32((val110*val143)))+(f32((val115*val144))))))+val145);
  data0_301989888[(alu4+16777217)] = ((f16(((f32((val4*val121)))+(f32((val8*val122)))+(f32((val13*val123)))+(f32((val18*val124)))+(f32((val23*val125)))+(f32((val28*val126)))+(f32((val32*val127)))+(f32((val37*val128)))+(f32((val42*val129)))+(f32((val47*val130)))+(f32((val52*val131)))+(f32((val57*val132)))+(f32((val62*val133)))+(f32((val67*val134)))+(f32((val72*val135)))+(f32((val77*val136)))+(f32((val82*val137)))+(f32((val87*val138)))+(f32((val92*val139)))+(f32((val97*val140)))+(f32((val102*val141)))+(f32((val107*val142)))+(f32((val112*val143)))+(f32((val118*val144))))))+val145);
  data0_301989888[(alu4+16777218)] = ((f16(((f32((val5*val121)))+(f32((val9*val122)))+(f32((val14*val123)))+(f32((val19*val124)))+(f32((val24*val125)))+(f32((val29*val126)))+(f32((val33*val127)))+(f32((val38*val128)))+(f32((val43*val129)))+(f32((val48*val130)))+(f32((val53*val131)))+(f32((val58*val132)))+(f32((val63*val133)))+(f32((val68*val134)))+(f32((val73*val135)))+(f32((val78*val136)))+(f32((val83*val137)))+(f32((val88*val138)))+(f32((val93*val139)))+(f32((val98*val140)))+(f32((val103*val141)))+(f32((val108*val142)))+(f32((val113*val143)))+(f32((val119*val144))))))+val145);
  data0_301989888[(alu4+16777219)] = ((f16(((f32((val6*val121)))+(f32((val10*val122)))+(f32((val15*val123)))+(f32((val20*val124)))+(f32((val25*val125)))+(f32((val30*val126)))+(f32((val34*val127)))+(f32((val39*val128)))+(f32((val44*val129)))+(f32((val49*val130)))+(f32((val54*val131)))+(f32((val59*val132)))+(f32((val64*val133)))+(f32((val69*val134)))+(f32((val74*val135)))+(f32((val79*val136)))+(f32((val84*val137)))+(f32((val89*val138)))+(f32((val94*val139)))+(f32((val99*val140)))+(f32((val104*val141)))+(f32((val109*val142)))+(f32((val114*val143)))+(f32((val120*val144))))))+val145);
  data0_301989888[(alu4+33554432)] = ((f16(((f32((val0*val146)))+(f32((val7*val147)))+(f32((val11*val148)))+(f32((val16*val149)))+(f32((val21*val150)))+(f32((val26*val151)))+(f32((val31*val152)))+(f32((val35*val153)))+(f32((val40*val154)))+(f32((val45*val155)))+(f32((val50*val156)))+(f32((val55*val157)))+(f32((val60*val158)))+(f32((val65*val159)))+(f32((val70*val160)))+(f32((val75*val161)))+(f32((val80*val162)))+(f32((val85*val163)))+(f32((val90*val164)))+(f32((val95*val165)))+(f32((val100*val166)))+(f32((val105*val167)))+(f32((val110*val168)))+(f32((val115*val169))))))+val170);
  data0_301989888[(alu4+33554433)] = ((f16(((f32((val4*val146)))+(f32((val8*val147)))+(f32((val13*val148)))+(f32((val18*val149)))+(f32((val23*val150)))+(f32((val28*val151)))+(f32((val32*val152)))+(f32((val37*val153)))+(f32((val42*val154)))+(f32((val47*val155)))+(f32((val52*val156)))+(f32((val57*val157)))+(f32((val62*val158)))+(f32((val67*val159)))+(f32((val72*val160)))+(f32((val77*val161)))+(f32((val82*val162)))+(f32((val87*val163)))+(f32((val92*val164)))+(f32((val97*val165)))+(f32((val102*val166)))+(f32((val107*val167)))+(f32((val112*val168)))+(f32((val118*val169))))))+val170);
  data0_301989888[(alu4+33554434)] = ((f16(((f32((val5*val146)))+(f32((val9*val147)))+(f32((val14*val148)))+(f32((val19*val149)))+(f32((val24*val150)))+(f32((val29*val151)))+(f32((val33*val152)))+(f32((val38*val153)))+(f32((val43*val154)))+(f32((val48*val155)))+(f32((val53*val156)))+(f32((val58*val157)))+(f32((val63*val158)))+(f32((val68*val159)))+(f32((val73*val160)))+(f32((val78*val161)))+(f32((val83*val162)))+(f32((val88*val163)))+(f32((val93*val164)))+(f32((val98*val165)))+(f32((val103*val166)))+(f32((val108*val167)))+(f32((val113*val168)))+(f32((val119*val169))))))+val170);
  data0_301989888[(alu4+33554435)] = ((f16(((f32((val6*val146)))+(f32((val10*val147)))+(f32((val15*val148)))+(f32((val20*val149)))+(f32((val25*val150)))+(f32((val30*val151)))+(f32((val34*val152)))+(f32((val39*val153)))+(f32((val44*val154)))+(f32((val49*val155)))+(f32((val54*val156)))+(f32((val59*val157)))+(f32((val64*val158)))+(f32((val69*val159)))+(f32((val74*val160)))+(f32((val79*val161)))+(f32((val84*val162)))+(f32((val89*val163)))+(f32((val94*val164)))+(f32((val99*val165)))+(f32((val104*val166)))+(f32((val109*val167)))+(f32((val114*val168)))+(f32((val120*val169))))))+val170);
}`;

const r_131072_32_4_18 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_301989888:array<f16>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<7u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
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
}`;

const r_131072_32_4_18n1 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_301989888:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f16>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<7u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
  var val0 = data1_301989888[alu0];
  var val1 = data2_16777216[alu0];
  var alu1 = (alu0+1);
  var val2 = data1_301989888[alu1];
  var val3 = data1_301989888[(alu0+16777216)];
  var val4 = data1_301989888[(alu0+16777217)];
  var val5 = data1_301989888[(alu0+33554432)];
  var val6 = data1_301989888[(alu0+33554433)];
  var val7 = data1_301989888[(alu0+50331648)];
  var val8 = data1_301989888[(alu0+50331649)];
  var val9 = data1_301989888[(alu0+67108864)];
  var val10 = data1_301989888[(alu0+67108865)];
  var val11 = data1_301989888[(alu0+83886080)];
  var val12 = data1_301989888[(alu0+83886081)];
  var val13 = data1_301989888[(alu0+100663296)];
  var val14 = data1_301989888[(alu0+100663297)];
  var val15 = data1_301989888[(alu0+117440512)];
  var val16 = data1_301989888[(alu0+117440513)];
  var val17 = data1_301989888[(alu0+134217728)];
  var val18 = data1_301989888[(alu0+134217729)];
  var val19 = data1_301989888[(alu0+150994944)];
  var val20 = data1_301989888[(alu0+150994945)];
  var val21 = data1_301989888[(alu0+167772160)];
  var val22 = data1_301989888[(alu0+167772161)];
  var val23 = data1_301989888[(alu0+184549376)];
  var val24 = data1_301989888[(alu0+184549377)];
  var val25 = data1_301989888[(alu0+201326592)];
  var val26 = data1_301989888[(alu0+201326593)];
  var val27 = data1_301989888[(alu0+218103808)];
  var val28 = data1_301989888[(alu0+218103809)];
  var val29 = data1_301989888[(alu0+234881024)];
  var val30 = data1_301989888[(alu0+234881025)];
  var val31 = data1_301989888[(alu0+251658240)];
  var val32 = data1_301989888[(alu0+251658241)];
  var val33 = data1_301989888[(alu0+268435456)];
  var val34 = data1_301989888[(alu0+268435457)];
  var val35 = data1_301989888[(alu0+285212672)];
  var val36 = data2_16777216[alu1];
  var alu2 = (alu0+2);
  var val37 = data1_301989888[alu2];
  var val38 = data1_301989888[(alu0+50331650)];
  var val39 = data1_301989888[(alu0+67108866)];
  var val40 = data1_301989888[(alu0+83886082)];
  var val41 = data1_301989888[(alu0+100663298)];
  var val42 = data1_301989888[(alu0+117440514)];
  var val43 = data1_301989888[(alu0+134217730)];
  var val44 = data1_301989888[(alu0+150994946)];
  var val45 = data1_301989888[(alu0+167772162)];
  var val46 = data1_301989888[(alu0+184549378)];
  var val47 = data1_301989888[(alu0+201326594)];
  var val48 = data1_301989888[(alu0+218103810)];
  var val49 = data1_301989888[(alu0+234881026)];
  var val50 = data1_301989888[(alu0+251658242)];
  var val51 = data1_301989888[(alu0+268435458)];
  var val52 = data1_301989888[(alu0+285212673)];
  var val53 = data2_16777216[alu2];
  var alu3 = (alu0+3);
  var val54 = data1_301989888[alu3];
  var val55 = data1_301989888[(alu0+16777218)];
  var val56 = data1_301989888[(alu0+33554434)];
  var val57 = data2_16777216[alu3];
  var val58 = data1_301989888[(alu0+16777219)];
  var val59 = data1_301989888[(alu0+33554435)];
  var val60 = data1_301989888[(alu0+50331651)];
  var val61 = data1_301989888[(alu0+67108867)];
  var val62 = data1_301989888[(alu0+83886083)];
  var val63 = data1_301989888[(alu0+100663299)];
  var val64 = data1_301989888[(alu0+117440515)];
  var val65 = data1_301989888[(alu0+134217731)];
  var val66 = data1_301989888[(alu0+150994947)];
  var val67 = data1_301989888[(alu0+167772163)];
  var val68 = data1_301989888[(alu0+184549379)];
  var val69 = data1_301989888[(alu0+201326595)];
  var val70 = data1_301989888[(alu0+218103811)];
  var val71 = data1_301989888[(alu0+234881027)];
  var val72 = data1_301989888[(alu0+251658243)];
  var val73 = data1_301989888[(alu0+268435459)];
  var val74 = data1_301989888[(alu0+285212674)];
  var val75 = data1_301989888[(alu0+285212675)];
  var cast0 = (i32((val35==val1)));
  var cast1 = (i32((val52==val36)));
  var cast2 = (i32((val74==val53)));
  var cast3 = (i32((val75==val57)));
  var cast4 = bitcast<i32>((bitcast<u32>((i32((val5==val1))))<<4u));
  var cast5 = bitcast<i32>((bitcast<u32>((i32((val21==val1))))<<3u));
  var cast6 = bitcast<i32>((bitcast<u32>((i32((val29==val1))))<<2u));
  var cast7 = bitcast<i32>((bitcast<u32>((i32((val33==val1))))<<1u));
  var alu4 = ((i32((val0==val1)))*18);
  var alu5 = ((i32((val3==val1)))*17);
  var alu6 = ((i32((val7==val1)))*15);
  var alu7 = ((i32((val9==val1)))*14);
  var alu8 = ((i32((val11==val1)))*13);
  var alu9 = ((i32((val13==val1)))*12);
  var alu10 = ((i32((val15==val1)))*11);
  var alu11 = ((i32((val17==val1)))*10);
  var alu12 = ((i32((val19==val1)))*9);
  var alu13 = ((i32((val23==val1)))*7);
  var alu14 = ((i32((val25==val1)))*6);
  var alu15 = ((i32((val27==val1)))*5);
  var alu16 = ((i32((val31==val1)))*3);
  var alu17 = select(alu4,alu5,(alu4<alu5));
  var alu18 = select(alu17,cast4,(alu17<cast4));
  var alu19 = select(alu18,alu6,(alu18<alu6));
  var alu20 = select(alu19,alu7,(alu19<alu7));
  var alu21 = select(alu20,alu8,(alu20<alu8));
  var alu22 = select(alu21,alu9,(alu21<alu9));
  var alu23 = select(alu22,alu10,(alu22<alu10));
  var alu24 = select(alu23,alu11,(alu23<alu11));
  var alu25 = select(alu24,alu12,(alu24<alu12));
  var alu26 = select(alu25,cast5,(alu25<cast5));
  var alu27 = select(alu26,alu13,(alu26<alu13));
  var alu28 = select(alu27,alu14,(alu27<alu14));
  var alu29 = select(alu28,alu15,(alu28<alu15));
  var alu30 = select(alu29,cast6,(alu29<cast6));
  var alu31 = select(alu30,alu16,(alu30<alu16));
  var alu32 = select(alu31,cast7,(alu31<cast7));
  var alu33 = select(alu32,cast0,(alu32<cast0));
  var cast8 = bitcast<i32>((bitcast<u32>((i32((val6==val36))))<<4u));
  var cast9 = bitcast<i32>((bitcast<u32>((i32((val22==val36))))<<3u));
  var cast10 = bitcast<i32>((bitcast<u32>((i32((val30==val36))))<<2u));
  var cast11 = bitcast<i32>((bitcast<u32>((i32((val34==val36))))<<1u));
  var alu34 = ((i32((val2==val36)))*18);
  var alu35 = ((i32((val4==val36)))*17);
  var alu36 = ((i32((val8==val36)))*15);
  var alu37 = ((i32((val10==val36)))*14);
  var alu38 = ((i32((val12==val36)))*13);
  var alu39 = ((i32((val14==val36)))*12);
  var alu40 = ((i32((val16==val36)))*11);
  var alu41 = ((i32((val18==val36)))*10);
  var alu42 = ((i32((val20==val36)))*9);
  var alu43 = ((i32((val24==val36)))*7);
  var alu44 = ((i32((val26==val36)))*6);
  var alu45 = ((i32((val28==val36)))*5);
  var alu46 = ((i32((val32==val36)))*3);
  var alu47 = select(alu34,alu35,(alu34<alu35));
  var alu48 = select(alu47,cast8,(alu47<cast8));
  var alu49 = select(alu48,alu36,(alu48<alu36));
  var alu50 = select(alu49,alu37,(alu49<alu37));
  var alu51 = select(alu50,alu38,(alu50<alu38));
  var alu52 = select(alu51,alu39,(alu51<alu39));
  var alu53 = select(alu52,alu40,(alu52<alu40));
  var alu54 = select(alu53,alu41,(alu53<alu41));
  var alu55 = select(alu54,alu42,(alu54<alu42));
  var alu56 = select(alu55,cast9,(alu55<cast9));
  var alu57 = select(alu56,alu43,(alu56<alu43));
  var alu58 = select(alu57,alu44,(alu57<alu44));
  var alu59 = select(alu58,alu45,(alu58<alu45));
  var alu60 = select(alu59,cast10,(alu59<cast10));
  var alu61 = select(alu60,alu46,(alu60<alu46));
  var alu62 = select(alu61,cast11,(alu61<cast11));
  var alu63 = select(alu62,cast1,(alu62<cast1));
  var cast12 = bitcast<i32>((bitcast<u32>((i32((val56==val53))))<<4u));
  var cast13 = bitcast<i32>((bitcast<u32>((i32((val45==val53))))<<3u));
  var cast14 = bitcast<i32>((bitcast<u32>((i32((val49==val53))))<<2u));
  var cast15 = bitcast<i32>((bitcast<u32>((i32((val51==val53))))<<1u));
  var alu64 = ((i32((val37==val53)))*18);
  var alu65 = ((i32((val55==val53)))*17);
  var alu66 = ((i32((val38==val53)))*15);
  var alu67 = ((i32((val39==val53)))*14);
  var alu68 = ((i32((val40==val53)))*13);
  var alu69 = ((i32((val41==val53)))*12);
  var alu70 = ((i32((val42==val53)))*11);
  var alu71 = ((i32((val43==val53)))*10);
  var alu72 = ((i32((val44==val53)))*9);
  var alu73 = ((i32((val46==val53)))*7);
  var alu74 = ((i32((val47==val53)))*6);
  var alu75 = ((i32((val48==val53)))*5);
  var alu76 = ((i32((val50==val53)))*3);
  var alu77 = select(alu64,alu65,(alu64<alu65));
  var alu78 = select(alu77,cast12,(alu77<cast12));
  var alu79 = select(alu78,alu66,(alu78<alu66));
  var alu80 = select(alu79,alu67,(alu79<alu67));
  var alu81 = select(alu80,alu68,(alu80<alu68));
  var alu82 = select(alu81,alu69,(alu81<alu69));
  var alu83 = select(alu82,alu70,(alu82<alu70));
  var alu84 = select(alu83,alu71,(alu83<alu71));
  var alu85 = select(alu84,alu72,(alu84<alu72));
  var alu86 = select(alu85,cast13,(alu85<cast13));
  var alu87 = select(alu86,alu73,(alu86<alu73));
  var alu88 = select(alu87,alu74,(alu87<alu74));
  var alu89 = select(alu88,alu75,(alu88<alu75));
  var alu90 = select(alu89,cast14,(alu89<cast14));
  var alu91 = select(alu90,alu76,(alu90<alu76));
  var alu92 = select(alu91,cast15,(alu91<cast15));
  var alu93 = select(alu92,cast2,(alu92<cast2));
  var cast16 = bitcast<i32>((bitcast<u32>((i32((val59==val57))))<<4u));
  var cast17 = bitcast<i32>((bitcast<u32>((i32((val67==val57))))<<3u));
  var cast18 = bitcast<i32>((bitcast<u32>((i32((val71==val57))))<<2u));
  var cast19 = bitcast<i32>((bitcast<u32>((i32((val73==val57))))<<1u));
  var alu94 = ((i32((val54==val57)))*18);
  var alu95 = ((i32((val58==val57)))*17);
  var alu96 = ((i32((val60==val57)))*15);
  var alu97 = ((i32((val61==val57)))*14);
  var alu98 = ((i32((val62==val57)))*13);
  var alu99 = ((i32((val63==val57)))*12);
  var alu100 = ((i32((val64==val57)))*11);
  var alu101 = ((i32((val65==val57)))*10);
  var alu102 = ((i32((val66==val57)))*9);
  var alu103 = ((i32((val68==val57)))*7);
  var alu104 = ((i32((val69==val57)))*6);
  var alu105 = ((i32((val70==val57)))*5);
  var alu106 = ((i32((val72==val57)))*3);
  var alu107 = select(alu94,alu95,(alu94<alu95));
  var alu108 = select(alu107,cast16,(alu107<cast16));
  var alu109 = select(alu108,alu96,(alu108<alu96));
  var alu110 = select(alu109,alu97,(alu109<alu97));
  var alu111 = select(alu110,alu98,(alu110<alu98));
  var alu112 = select(alu111,alu99,(alu111<alu99));
  var alu113 = select(alu112,alu100,(alu112<alu100));
  var alu114 = select(alu113,alu101,(alu113<alu101));
  var alu115 = select(alu114,alu102,(alu114<alu102));
  var alu116 = select(alu115,cast17,(alu115<cast17));
  var alu117 = select(alu116,alu103,(alu116<alu103));
  var alu118 = select(alu117,alu104,(alu117<alu104));
  var alu119 = select(alu118,alu105,(alu118<alu105));
  var alu120 = select(alu119,cast18,(alu119<cast18));
  var alu121 = select(alu120,alu106,(alu120<alu106));
  var alu122 = select(alu121,cast19,(alu121<cast19));
  var alu123 = select(alu122,cast3,(alu122<cast3));
  data0_16777216[alu0] = (f32((18-alu33)));
  data0_16777216[alu1] = (f32((18-alu63)));
  data0_16777216[alu2] = (f32((18-alu93)));
  data0_16777216[alu3] = (f32((18-alu123)));
}`;

const dk_backbone_0 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_648:array<f16>;
@compute @workgroup_size(16,8,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,64>;
  var gidx0 = i32(gindex.x); /* 32 */
  var gidx1 = i32(gindex.y); /* 64 */
  var gidx2 = i32(gindex.z); /* 6 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (bitcast<i32>((cast0<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
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
  acc0[60] = 0.0f;
  acc0[61] = 0.0f;
  acc0[62] = 0.0f;
  acc0[63] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    var alu66 = ((0<(gidx1+lidx2+Ridx0))&((lidx2+bitcast<i32>((cast1<<2u))+Ridx0)<257));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu67 = ((0<(gidx0+lidx1+Ridx1))&((lidx1+bitcast<i32>((cast0<<3u))+Ridx1)<257));
      var alu68 = (alu67&alu66);
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu69 = (lidx0+Ridx2);
        var alu70 = (alu69+alu0+bitcast<i32>((bitcast<u32>(Ridx1)<<8u))+alu1+bitcast<i32>((bitcast<u32>(Ridx0)<<16u)));
        var val0 = select((f16(0.0f)), data1_16777216[(alu70+-65793)], ((0<alu69)&alu67&alu66));
        var alu71 = ((Ridx1*3)+Ridx2+(Ridx0*9)+(gidx2*108));
        var val1 = data2_648[(alu71+27)];
        var val2 = data2_648[(alu71+54)];
        var val3 = data2_648[(alu71+81)];
        var val4 = data2_648[alu71];
        var val5 = select((f16(0.0f)), data1_16777216[(alu70+-65777)], alu68);
        var val6 = select((f16(0.0f)), data1_16777216[(alu70+-65761)], alu68);
        var val7 = select((f16(0.0f)), data1_16777216[(alu70+-65745)], alu68);
        var val8 = select((f16(0.0f)), data1_16777216[(alu70+-65729)], alu68);
        var val9 = select((f16(0.0f)), data1_16777216[(alu70+-65713)], alu68);
        var val10 = select((f16(0.0f)), data1_16777216[(alu70+-65697)], alu68);
        var val11 = select((f16(0.0f)), data1_16777216[(alu70+-65681)], alu68);
        var val12 = select((f16(0.0f)), data1_16777216[(alu70+-65665)], alu68);
        var val13 = select((f16(0.0f)), data1_16777216[(alu70+-65649)], alu68);
        var val14 = select((f16(0.0f)), data1_16777216[(alu70+-65633)], alu68);
        var val15 = select((f16(0.0f)), data1_16777216[(alu70+-65617)], alu68);
        var val16 = select((f16(0.0f)), data1_16777216[(alu70+-65601)], alu68);
        var val17 = select((f16(0.0f)), data1_16777216[(alu70+-65585)], alu68);
        var val18 = select((f16(0.0f)), data1_16777216[(alu70+-65569)], alu68);
        var val19 = select((f16(0.0f)), data1_16777216[(alu70+-65553)], ((alu69<17)&alu67&alu66));
        acc0[0] = (acc0[0]+(f32((val0*val4))));
        acc0[1] = (acc0[1]+(f32((val0*val1))));
        acc0[2] = (acc0[2]+(f32((val0*val2))));
        acc0[3] = (acc0[3]+(f32((val0*val3))));
        acc0[4] = (acc0[4]+(f32((val5*val4))));
        acc0[5] = (acc0[5]+(f32((val5*val1))));
        acc0[6] = (acc0[6]+(f32((val5*val2))));
        acc0[7] = (acc0[7]+(f32((val5*val3))));
        acc0[8] = (acc0[8]+(f32((val6*val4))));
        acc0[9] = (acc0[9]+(f32((val6*val1))));
        acc0[10] = (acc0[10]+(f32((val6*val2))));
        acc0[11] = (acc0[11]+(f32((val6*val3))));
        acc0[12] = (acc0[12]+(f32((val7*val4))));
        acc0[13] = (acc0[13]+(f32((val7*val1))));
        acc0[14] = (acc0[14]+(f32((val7*val2))));
        acc0[15] = (acc0[15]+(f32((val7*val3))));
        acc0[16] = (acc0[16]+(f32((val8*val4))));
        acc0[17] = (acc0[17]+(f32((val8*val1))));
        acc0[18] = (acc0[18]+(f32((val8*val2))));
        acc0[19] = (acc0[19]+(f32((val8*val3))));
        acc0[20] = (acc0[20]+(f32((val9*val4))));
        acc0[21] = (acc0[21]+(f32((val9*val1))));
        acc0[22] = (acc0[22]+(f32((val9*val2))));
        acc0[23] = (acc0[23]+(f32((val9*val3))));
        acc0[24] = (acc0[24]+(f32((val10*val4))));
        acc0[25] = (acc0[25]+(f32((val10*val1))));
        acc0[26] = (acc0[26]+(f32((val10*val2))));
        acc0[27] = (acc0[27]+(f32((val10*val3))));
        acc0[28] = (acc0[28]+(f32((val11*val4))));
        acc0[29] = (acc0[29]+(f32((val11*val1))));
        acc0[30] = (acc0[30]+(f32((val11*val2))));
        acc0[31] = (acc0[31]+(f32((val11*val3))));
        acc0[32] = (acc0[32]+(f32((val12*val4))));
        acc0[33] = (acc0[33]+(f32((val12*val1))));
        acc0[34] = (acc0[34]+(f32((val12*val2))));
        acc0[35] = (acc0[35]+(f32((val12*val3))));
        acc0[36] = (acc0[36]+(f32((val13*val4))));
        acc0[37] = (acc0[37]+(f32((val13*val1))));
        acc0[38] = (acc0[38]+(f32((val13*val2))));
        acc0[39] = (acc0[39]+(f32((val13*val3))));
        acc0[40] = (acc0[40]+(f32((val14*val4))));
        acc0[41] = (acc0[41]+(f32((val14*val1))));
        acc0[42] = (acc0[42]+(f32((val14*val2))));
        acc0[43] = (acc0[43]+(f32((val14*val3))));
        acc0[44] = (acc0[44]+(f32((val15*val4))));
        acc0[45] = (acc0[45]+(f32((val15*val1))));
        acc0[46] = (acc0[46]+(f32((val15*val2))));
        acc0[47] = (acc0[47]+(f32((val15*val3))));
        acc0[48] = (acc0[48]+(f32((val16*val4))));
        acc0[49] = (acc0[49]+(f32((val16*val1))));
        acc0[50] = (acc0[50]+(f32((val16*val2))));
        acc0[51] = (acc0[51]+(f32((val16*val3))));
        acc0[52] = (acc0[52]+(f32((val17*val4))));
        acc0[53] = (acc0[53]+(f32((val17*val1))));
        acc0[54] = (acc0[54]+(f32((val17*val2))));
        acc0[55] = (acc0[55]+(f32((val17*val3))));
        acc0[56] = (acc0[56]+(f32((val18*val4))));
        acc0[57] = (acc0[57]+(f32((val18*val1))));
        acc0[58] = (acc0[58]+(f32((val18*val2))));
        acc0[59] = (acc0[59]+(f32((val18*val3))));
        acc0[60] = (acc0[60]+(f32((val19*val4))));
        acc0[61] = (acc0[61]+(f32((val19*val1))));
        acc0[62] = (acc0[62]+(f32((val19*val2))));
        acc0[63] = (acc0[63]+(f32((val19*val3))));
      }
    }
  }
  var alu139 = (lidx0+alu0+alu1+bitcast<i32>((bitcast<u32>(gidx2)<<26u)));
  data0_402653184[alu139] = (f32((f16(acc0[0]))));
  data0_402653184[(alu139+16)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu139+32)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu139+48)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu139+64)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu139+80)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu139+96)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu139+112)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu139+128)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu139+144)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu139+160)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu139+176)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu139+192)] = (f32((f16(acc0[48]))));
  data0_402653184[(alu139+208)] = (f32((f16(acc0[52]))));
  data0_402653184[(alu139+224)] = (f32((f16(acc0[56]))));
  data0_402653184[(alu139+240)] = (f32((f16(acc0[60]))));
  data0_402653184[(alu139+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu139+16777232)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu139+16777248)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu139+16777264)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu139+16777280)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu139+16777296)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu139+16777312)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu139+16777328)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu139+16777344)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu139+16777360)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu139+16777376)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu139+16777392)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu139+16777408)] = (f32((f16(acc0[49]))));
  data0_402653184[(alu139+16777424)] = (f32((f16(acc0[53]))));
  data0_402653184[(alu139+16777440)] = (f32((f16(acc0[57]))));
  data0_402653184[(alu139+16777456)] = (f32((f16(acc0[61]))));
  data0_402653184[(alu139+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu139+33554448)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu139+33554464)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu139+33554480)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu139+33554496)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu139+33554512)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu139+33554528)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu139+33554544)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu139+33554560)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu139+33554576)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu139+33554592)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu139+33554608)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu139+33554624)] = (f32((f16(acc0[50]))));
  data0_402653184[(alu139+33554640)] = (f32((f16(acc0[54]))));
  data0_402653184[(alu139+33554656)] = (f32((f16(acc0[58]))));
  data0_402653184[(alu139+33554672)] = (f32((f16(acc0[62]))));
  data0_402653184[(alu139+50331648)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu139+50331664)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu139+50331680)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu139+50331696)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu139+50331712)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu139+50331728)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu139+50331744)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu139+50331760)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu139+50331776)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu139+50331792)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu139+50331808)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu139+50331824)] = (f32((f16(acc0[47]))));
  data0_402653184[(alu139+50331840)] = (f32((f16(acc0[51]))));
  data0_402653184[(alu139+50331856)] = (f32((f16(acc0[55]))));
  data0_402653184[(alu139+50331872)] = (f32((f16(acc0[59]))));
  data0_402653184[(alu139+50331888)] = (f32((f16(acc0[63]))));
}`;

const dk_backbone_1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,4096>;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@compute @workgroup_size(16,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,4>;
  var gidx0 = i32(gindex.x); /* 6144 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((cast0<<16u))+bitcast<i32>((cast2<<12u))+bitcast<i32>((cast1<<8u)));
  var val0 = data1_402653184[alu0];
  var val1 = data1_402653184[(alu0+16)];
  var val2 = data1_402653184[(alu0+32)];
  var val3 = data1_402653184[(alu0+48)];
  var val4 = data1_402653184[(alu0+64)];
  var val5 = data1_402653184[(alu0+80)];
  var val6 = data1_402653184[(alu0+96)];
  var val7 = data1_402653184[(alu0+112)];
  var val8 = data1_402653184[(alu0+128)];
  var val9 = data1_402653184[(alu0+144)];
  var val10 = data1_402653184[(alu0+160)];
  var val11 = data1_402653184[(alu0+176)];
  var val12 = data1_402653184[(alu0+192)];
  var val13 = data1_402653184[(alu0+208)];
  var val14 = data1_402653184[(alu0+224)];
  var val15 = data1_402653184[(alu0+240)];
  var val16 = data1_402653184[(alu0+16384)];
  var val17 = data1_402653184[(alu0+16400)];
  var val18 = data1_402653184[(alu0+16416)];
  var val19 = data1_402653184[(alu0+16432)];
  var val20 = data1_402653184[(alu0+16448)];
  var val21 = data1_402653184[(alu0+16464)];
  var val22 = data1_402653184[(alu0+16480)];
  var val23 = data1_402653184[(alu0+16496)];
  var val24 = data1_402653184[(alu0+16512)];
  var val25 = data1_402653184[(alu0+16528)];
  var val26 = data1_402653184[(alu0+16544)];
  var val27 = data1_402653184[(alu0+16560)];
  var val28 = data1_402653184[(alu0+16576)];
  var val29 = data1_402653184[(alu0+16592)];
  var val30 = data1_402653184[(alu0+16608)];
  var val31 = data1_402653184[(alu0+16624)];
  var val32 = data1_402653184[(alu0+32768)];
  var val33 = data1_402653184[(alu0+32784)];
  var val34 = data1_402653184[(alu0+32800)];
  var val35 = data1_402653184[(alu0+32816)];
  var val36 = data1_402653184[(alu0+32832)];
  var val37 = data1_402653184[(alu0+32848)];
  var val38 = data1_402653184[(alu0+32864)];
  var val39 = data1_402653184[(alu0+32880)];
  var val40 = data1_402653184[(alu0+32896)];
  var val41 = data1_402653184[(alu0+32912)];
  var val42 = data1_402653184[(alu0+32928)];
  var val43 = data1_402653184[(alu0+32944)];
  var val44 = data1_402653184[(alu0+32960)];
  var val45 = data1_402653184[(alu0+32976)];
  var val46 = data1_402653184[(alu0+32992)];
  var val47 = data1_402653184[(alu0+33008)];
  var val48 = data1_402653184[(alu0+49152)];
  var val49 = data1_402653184[(alu0+49168)];
  var val50 = data1_402653184[(alu0+49184)];
  var val51 = data1_402653184[(alu0+49200)];
  var val52 = data1_402653184[(alu0+49216)];
  var val53 = data1_402653184[(alu0+49232)];
  var val54 = data1_402653184[(alu0+49248)];
  var val55 = data1_402653184[(alu0+49264)];
  var val56 = data1_402653184[(alu0+49280)];
  var val57 = data1_402653184[(alu0+49296)];
  var val58 = data1_402653184[(alu0+49312)];
  var val59 = data1_402653184[(alu0+49328)];
  var val60 = data1_402653184[(alu0+49344)];
  var val61 = data1_402653184[(alu0+49360)];
  var val62 = data1_402653184[(alu0+49376)];
  var val63 = data1_402653184[(alu0+49392)];
  var cast3 = bitcast<i32>((cast1<<6u));
  var cast4 = bitcast<i32>((cast2<<10u));
  var alu1 = (bitcast<i32>((bitcast<u32>(lidx0)<<2u))+cast3+cast4);
  temp0[alu1] = (val0+val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15);
  temp0[(alu1+1)] = (val16+val17+val18+val19+val20+val21+val22+val23+val24+val25+val26+val27+val28+val29+val30+val31);
  temp0[(alu1+2)] = (val32+val33+val34+val35+val36+val37+val38+val39+val40+val41+val42+val43+val44+val45+val46+val47);
  temp0[(alu1+3)] = (val48+val49+val50+val51+val52+val53+val54+val55+val56+val57+val58+val59+val60+val61+val62+val63);
  workgroupBarrier();
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  for (var Ridx102 = 0; Ridx102 < 16; Ridx102++) {
    var alu11 = (cast3+bitcast<i32>((bitcast<u32>(Ridx102)<<2u))+cast4);
    var val64 = temp0[alu11];
    var val65 = temp0[(alu11+1)];
    var val66 = temp0[(alu11+2)];
    var val67 = temp0[(alu11+3)];
    acc0[0] = (acc0[0]+val64);
    acc0[1] = (acc0[1]+val65);
    acc0[2] = (acc0[2]+val66);
    acc0[3] = (acc0[3]+val67);
  }
  var alu17 = (lidx1+bitcast<i32>((cast0<<8u))+bitcast<i32>((cast2<<4u)));
  var alu18 = ((bool(lidx0))!=true);
  if (alu18) {
    data0_1572864[alu17] = acc0[0];
  }
  if (alu18) {
    data0_1572864[(alu17+64)] = acc0[1];
  }
  if (alu18) {
    data0_1572864[(alu17+128)] = acc0[2];
  }
  if (alu18) {
    data0_1572864[(alu17+192)] = acc0[3];
  }
}`;

const dk_backbone_2 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,96>;
@group(0) @binding(1)var<storage,read_write>data0_6144:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1572864:array<f32>;
@compute @workgroup_size(4,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var acc1: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 256 */
  var lidx0 = i32(lindex.x); /* 4 */
  var lidx1 = i32(lindex.y); /* 8 */
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu3 = (lidx0+bitcast<i32>((bitcast<u32>(Ridx0)<<2u))+(gidx0*6144)+(lidx1*768));
    var val0 = data1_1572864[alu3];
    var val1 = data1_1572864[(alu3+256)];
    var val2 = data1_1572864[(alu3+512)];
    acc0[0] = (acc0[0]+val0);
    acc0[1] = (acc0[1]+val1);
    acc0[2] = (acc0[2]+val2);
  }
  var alu8 = (lidx1*12);
  var alu9 = ((lidx0*3)+alu8);
  temp0[(alu9+1)] = acc0[1];
  temp0[(alu9+2)] = acc0[2];
  temp0[alu9] = acc0[0];
  workgroupBarrier();
  acc1[0] = 0.0f;
  acc1[1] = 0.0f;
  acc1[2] = 0.0f;
  for (var Ridx103 = 0; Ridx103 < 4; Ridx103++) {
    var alu17 = (alu8+(Ridx103*3));
    var val3 = temp0[alu17];
    var val4 = temp0[(alu17+1)];
    var val5 = temp0[(alu17+2)];
    acc1[0] = (acc1[0]+val3);
    acc1[1] = (acc1[1]+val4);
    acc1[2] = (acc1[2]+val5);
  }
  var alu22 = ((gidx0*24)+(lidx1*3));
  var alu23 = ((bool(lidx0))!=true);
  if (alu23) {
    data0_6144[(alu22+1)] = acc1[1];
  }
  if (alu23) {
    data0_6144[(alu22+2)] = acc1[2];
  }
  if (alu23) {
    data0_6144[alu22] = acc1[0];
  }
}`;

const dk_backbone_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_24:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_6144:array<f32>;
@compute @workgroup_size(3) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 8 */
  var lidx0 = i32(lindex.x); /* 3 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 256; Ridx0++) {
    var val0 = data1_6144[((gidx0*768)+bitcast<i32>((bitcast<u32>(lidx0)<<8u))+Ridx0)];
    acc0[0] = (acc0[0]+val0);
  }
  data0_24[(lidx0+(gidx0*3))] = (f32((f16((acc0[0]*5.960464477539063e-08f)))));
}`;

const dk_backbone_4 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,3072>;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@compute @workgroup_size(16,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<u32>(gidx0);
  var alu0 = (lidx0+bitcast<i32>((cast0<<12u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u))+(gidx1*201326592)+(lidx2*50331648));
  var val0 = data1_402653184[alu0];
  var alu1 = ((gidx1*12)+(lidx2*3));
  var val1 = data2_24[alu1];
  var val2 = data1_402653184[(alu0+16)];
  var val3 = data1_402653184[(alu0+32)];
  var val4 = data1_402653184[(alu0+48)];
  var val5 = data1_402653184[(alu0+64)];
  var val6 = data1_402653184[(alu0+80)];
  var val7 = data1_402653184[(alu0+96)];
  var val8 = data1_402653184[(alu0+112)];
  var val9 = data1_402653184[(alu0+128)];
  var val10 = data1_402653184[(alu0+144)];
  var val11 = data1_402653184[(alu0+160)];
  var val12 = data1_402653184[(alu0+176)];
  var val13 = data1_402653184[(alu0+192)];
  var val14 = data1_402653184[(alu0+208)];
  var val15 = data1_402653184[(alu0+224)];
  var val16 = data1_402653184[(alu0+240)];
  var val17 = data1_402653184[(alu0+16777216)];
  var val18 = data2_24[(alu1+1)];
  var val19 = data1_402653184[(alu0+16777232)];
  var val20 = data1_402653184[(alu0+16777248)];
  var val21 = data1_402653184[(alu0+16777264)];
  var val22 = data1_402653184[(alu0+16777280)];
  var val23 = data1_402653184[(alu0+16777296)];
  var val24 = data1_402653184[(alu0+16777312)];
  var val25 = data1_402653184[(alu0+16777328)];
  var val26 = data1_402653184[(alu0+16777344)];
  var val27 = data1_402653184[(alu0+16777360)];
  var val28 = data1_402653184[(alu0+16777376)];
  var val29 = data1_402653184[(alu0+16777392)];
  var val30 = data1_402653184[(alu0+16777408)];
  var val31 = data1_402653184[(alu0+16777424)];
  var val32 = data1_402653184[(alu0+16777440)];
  var val33 = data1_402653184[(alu0+16777456)];
  var val34 = data1_402653184[(alu0+33554432)];
  var val35 = data2_24[(alu1+2)];
  var val36 = data1_402653184[(alu0+33554448)];
  var val37 = data1_402653184[(alu0+33554464)];
  var val38 = data1_402653184[(alu0+33554480)];
  var val39 = data1_402653184[(alu0+33554496)];
  var val40 = data1_402653184[(alu0+33554512)];
  var val41 = data1_402653184[(alu0+33554528)];
  var val42 = data1_402653184[(alu0+33554544)];
  var val43 = data1_402653184[(alu0+33554560)];
  var val44 = data1_402653184[(alu0+33554576)];
  var val45 = data1_402653184[(alu0+33554592)];
  var val46 = data1_402653184[(alu0+33554608)];
  var val47 = data1_402653184[(alu0+33554624)];
  var val48 = data1_402653184[(alu0+33554640)];
  var val49 = data1_402653184[(alu0+33554656)];
  var val50 = data1_402653184[(alu0+33554672)];
  var alu2 = (lidx2*48);
  var alu3 = (lidx1*192);
  var alu4 = ((lidx0*3)+alu2+alu3);
  var cast1 = (f16(val1));
  var cast2 = (f16(val18));
  var cast3 = (f16(val35));
  var alu5 = ((f16(val0))-cast1);
  var alu6 = ((f16(val2))-cast1);
  var alu7 = ((f16(val3))-cast1);
  var alu8 = ((f16(val4))-cast1);
  var alu9 = ((f16(val5))-cast1);
  var alu10 = ((f16(val6))-cast1);
  var alu11 = ((f16(val7))-cast1);
  var alu12 = ((f16(val8))-cast1);
  var alu13 = ((f16(val9))-cast1);
  var alu14 = ((f16(val10))-cast1);
  var alu15 = ((f16(val11))-cast1);
  var alu16 = ((f16(val12))-cast1);
  var alu17 = ((f16(val13))-cast1);
  var alu18 = ((f16(val14))-cast1);
  var alu19 = ((f16(val15))-cast1);
  var alu20 = ((f16(val16))-cast1);
  var alu21 = ((f16(val17))-cast2);
  var alu22 = ((f16(val19))-cast2);
  var alu23 = ((f16(val20))-cast2);
  var alu24 = ((f16(val21))-cast2);
  var alu25 = ((f16(val22))-cast2);
  var alu26 = ((f16(val23))-cast2);
  var alu27 = ((f16(val24))-cast2);
  var alu28 = ((f16(val25))-cast2);
  var alu29 = ((f16(val26))-cast2);
  var alu30 = ((f16(val27))-cast2);
  var alu31 = ((f16(val28))-cast2);
  var alu32 = ((f16(val29))-cast2);
  var alu33 = ((f16(val30))-cast2);
  var alu34 = ((f16(val31))-cast2);
  var alu35 = ((f16(val32))-cast2);
  var alu36 = ((f16(val33))-cast2);
  var alu37 = ((f16(val34))-cast3);
  var alu38 = ((f16(val36))-cast3);
  var alu39 = ((f16(val37))-cast3);
  var alu40 = ((f16(val38))-cast3);
  var alu41 = ((f16(val39))-cast3);
  var alu42 = ((f16(val40))-cast3);
  var alu43 = ((f16(val41))-cast3);
  var alu44 = ((f16(val42))-cast3);
  var alu45 = ((f16(val43))-cast3);
  var alu46 = ((f16(val44))-cast3);
  var alu47 = ((f16(val45))-cast3);
  var alu48 = ((f16(val46))-cast3);
  var alu49 = ((f16(val47))-cast3);
  var alu50 = ((f16(val48))-cast3);
  var alu51 = ((f16(val49))-cast3);
  var alu52 = ((f16(val50))-cast3);
  temp0[(alu4+1)] = ((f32((alu21*alu21)))+(f32((alu22*alu22)))+(f32((alu23*alu23)))+(f32((alu24*alu24)))+(f32((alu25*alu25)))+(f32((alu26*alu26)))+(f32((alu27*alu27)))+(f32((alu28*alu28)))+(f32((alu29*alu29)))+(f32((alu30*alu30)))+(f32((alu31*alu31)))+(f32((alu32*alu32)))+(f32((alu33*alu33)))+(f32((alu34*alu34)))+(f32((alu35*alu35)))+(f32((alu36*alu36))));
  temp0[(alu4+2)] = ((f32((alu37*alu37)))+(f32((alu38*alu38)))+(f32((alu39*alu39)))+(f32((alu40*alu40)))+(f32((alu41*alu41)))+(f32((alu42*alu42)))+(f32((alu43*alu43)))+(f32((alu44*alu44)))+(f32((alu45*alu45)))+(f32((alu46*alu46)))+(f32((alu47*alu47)))+(f32((alu48*alu48)))+(f32((alu49*alu49)))+(f32((alu50*alu50)))+(f32((alu51*alu51)))+(f32((alu52*alu52))));
  temp0[alu4] = ((f32((alu5*alu5)))+(f32((alu6*alu6)))+(f32((alu7*alu7)))+(f32((alu8*alu8)))+(f32((alu9*alu9)))+(f32((alu10*alu10)))+(f32((alu11*alu11)))+(f32((alu12*alu12)))+(f32((alu13*alu13)))+(f32((alu14*alu14)))+(f32((alu15*alu15)))+(f32((alu16*alu16)))+(f32((alu17*alu17)))+(f32((alu18*alu18)))+(f32((alu19*alu19)))+(f32((alu20*alu20))));
  workgroupBarrier();
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var Ridx103 = 0; Ridx103 < 16; Ridx103++) {
    var alu60 = (alu2+(Ridx103*3)+alu3);
    var val51 = temp0[alu60];
    var val52 = temp0[(alu60+1)];
    var val53 = temp0[(alu60+2)];
    acc0[0] = (acc0[0]+val51);
    acc0[1] = (acc0[1]+val52);
    acc0[2] = (acc0[2]+val53);
  }
  var alu65 = (lidx1+bitcast<i32>((cast0<<4u))+(gidx1*786432)+(lidx2*196608));
  var alu66 = ((bool(lidx0))!=true);
  if (alu66) {
    data0_1572864[alu65] = acc0[0];
  }
  if (alu66) {
    data0_1572864[(alu65+65536)] = acc0[1];
  }
  if (alu66) {
    data0_1572864[(alu65+131072)] = acc0[2];
  }
}`;

const dk_backbone_5 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_24:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_6144:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 24 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu1 = (bitcast<i32>((bitcast<u32>(gidx0)<<8u))+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_6144[alu1];
    var val1 = data1_6144[(alu1+1)];
    var val2 = data1_6144[(alu1+2)];
    var val3 = data1_6144[(alu1+3)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
  }
  data0_24[gidx0] = (f32((1/sqrt(((f16((acc0[0]*5.960464477539063e-08f)))+(f16(1e-05f)))))));
}`;

const dk_backbone_6 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_24:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_24:array<f16>;
@group(0) @binding(6)var<storage,read_write>data5_24:array<f16>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx1 = i32(gindex.y); /* 24 */
  var val0 = data4_24[gidx1];
  var val1 = data5_24[gidx1];
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u))+bitcast<i32>((bitcast<u32>(gidx1)<<24u)));
  var val2 = data1_402653184[alu0];
  var val3 = data2_24[gidx1];
  var val4 = data3_24[gidx1];
  var alu1 = (alu0+256);
  var val5 = data1_402653184[alu1];
  var cast0 = (f16(val3));
  var cast1 = (f16(val4));
  var alu2 = ((((f16(val2))-cast0)*cast1*val0)+val1);
  var alu3 = ((((f16(val5))-cast0)*cast1*val0)+val1);
  data0_402653184[alu0] = ((1/((f16(1.0f))+exp2(((alu2+((f16(0.044715f))*alu2*alu2*alu2))*(f16(-2.302208198144325f))))))*alu2);
  data0_402653184[alu1] = ((1/((f16(1.0f))+exp2(((alu3+((f16(0.044715f))*alu3*alu3*alu3))*(f16(-2.302208198144325f))))))*alu3);
}`;

const dk_backbone_7 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 512 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx1);
  var alu0 = (gidx0>>1u);
  var cast1 = bitcast<i32>((bitcast<u32>(alu0)<<8u));
  var alu1 = (lidx0+bitcast<i32>((bitcast<u32>(lidx1)<<6u))+bitcast<i32>((bitcast<u32>((gidx0&1))<<7u)));
  var alu2 = (bitcast<i32>((cast0<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu51 = (lidx2+bitcast<i32>((cast0<<4u))+(Ridx1*3));
      var alu52 = ((2<alu51)&(alu51<259));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu53 = (alu1+cast1+(Ridx2*768)+alu2+(Ridx1*196608)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
        var alu54 = (Ridx2*3);
        var alu55 = (alu54+alu0);
        var alu56 = ((2<alu55)&(alu55<259));
        var val0 = select((f16(0.0f)), data1_402653184[(alu53+-197379)], ((2<alu1)&alu56&alu52));
        var alu57 = ((Ridx1*9)+alu54+(Ridx0*27)+(gidx2*7776));
        var val1 = data2_15552[(alu57+2)];
        var val2 = data2_15552[alu57];
        var alu58 = (alu56&alu52);
        var val3 = select((f16(0.0f)), data1_402653184[(alu53+-197376)], alu58);
        var val4 = data2_15552[(alu57+1)];
        var val5 = select((f16(0.0f)), data1_402653184[(alu53+-197373)], alu58);
        var val6 = data2_15552[(alu57+2592)];
        var val7 = data2_15552[(alu57+2593)];
        var val8 = data2_15552[(alu57+2594)];
        var val9 = data2_15552[(alu57+5184)];
        var val10 = data2_15552[(alu57+5185)];
        var val11 = data2_15552[(alu57+5186)];
        var val12 = select((f16(0.0f)), data1_402653184[(alu53+-197363)], alu58);
        var val13 = select((f16(0.0f)), data1_402653184[(alu53+-197360)], alu58);
        var val14 = select((f16(0.0f)), data1_402653184[(alu53+-197357)], alu58);
        var val15 = select((f16(0.0f)), data1_402653184[(alu53+-197347)], alu58);
        var val16 = select((f16(0.0f)), data1_402653184[(alu53+-197344)], alu58);
        var val17 = select((f16(0.0f)), data1_402653184[(alu53+-197341)], alu58);
        var val18 = select((f16(0.0f)), data1_402653184[(alu53+-197331)], alu58);
        var val19 = select((f16(0.0f)), data1_402653184[(alu53+-197328)], alu58);
        var val20 = select((f16(0.0f)), data1_402653184[(alu53+-197325)], ((alu1<205)&alu56&alu52));
        var val21 = data2_15552[(alu57+648)];
        var val22 = data2_15552[(alu57+649)];
        var val23 = data2_15552[(alu57+650)];
        var val24 = data2_15552[(alu57+1296)];
        var val25 = data2_15552[(alu57+1297)];
        var val26 = data2_15552[(alu57+1298)];
        var val27 = data2_15552[(alu57+1944)];
        var val28 = data2_15552[(alu57+1945)];
        var val29 = data2_15552[(alu57+1946)];
        var val30 = data2_15552[(alu57+3240)];
        var val31 = data2_15552[(alu57+3241)];
        var val32 = data2_15552[(alu57+3242)];
        var val33 = data2_15552[(alu57+3888)];
        var val34 = data2_15552[(alu57+3889)];
        var val35 = data2_15552[(alu57+3890)];
        var val36 = data2_15552[(alu57+4536)];
        var val37 = data2_15552[(alu57+4537)];
        var val38 = data2_15552[(alu57+4538)];
        var val39 = data2_15552[(alu57+5832)];
        var val40 = data2_15552[(alu57+5833)];
        var val41 = data2_15552[(alu57+5834)];
        var val42 = data2_15552[(alu57+6480)];
        var val43 = data2_15552[(alu57+6481)];
        var val44 = data2_15552[(alu57+6482)];
        var val45 = data2_15552[(alu57+7128)];
        var val46 = data2_15552[(alu57+7129)];
        var val47 = data2_15552[(alu57+7130)];
        acc0[0] = (acc0[0]+(f32((val0*val2)))+(f32((val3*val4)))+(f32((val5*val1))));
        acc0[1] = (acc0[1]+(f32((val0*val6)))+(f32((val3*val7)))+(f32((val5*val8))));
        acc0[2] = (acc0[2]+(f32((val0*val9)))+(f32((val3*val10)))+(f32((val5*val11))));
        acc0[3] = (acc0[3]+(f32((val12*val2)))+(f32((val13*val4)))+(f32((val14*val1))));
        acc0[4] = (acc0[4]+(f32((val12*val6)))+(f32((val13*val7)))+(f32((val14*val8))));
        acc0[5] = (acc0[5]+(f32((val12*val9)))+(f32((val13*val10)))+(f32((val14*val11))));
        acc0[6] = (acc0[6]+(f32((val15*val2)))+(f32((val16*val4)))+(f32((val17*val1))));
        acc0[7] = (acc0[7]+(f32((val15*val6)))+(f32((val16*val7)))+(f32((val17*val8))));
        acc0[8] = (acc0[8]+(f32((val15*val9)))+(f32((val16*val10)))+(f32((val17*val11))));
        acc0[9] = (acc0[9]+(f32((val18*val2)))+(f32((val19*val4)))+(f32((val20*val1))));
        acc0[10] = (acc0[10]+(f32((val18*val6)))+(f32((val19*val7)))+(f32((val20*val8))));
        acc0[11] = (acc0[11]+(f32((val18*val9)))+(f32((val19*val10)))+(f32((val20*val11))));
        acc0[12] = (acc0[12]+(f32((val0*val21)))+(f32((val3*val22)))+(f32((val5*val23))));
        acc0[13] = (acc0[13]+(f32((val0*val30)))+(f32((val3*val31)))+(f32((val5*val32))));
        acc0[14] = (acc0[14]+(f32((val0*val39)))+(f32((val3*val40)))+(f32((val5*val41))));
        acc0[15] = (acc0[15]+(f32((val12*val21)))+(f32((val13*val22)))+(f32((val14*val23))));
        acc0[16] = (acc0[16]+(f32((val12*val30)))+(f32((val13*val31)))+(f32((val14*val32))));
        acc0[17] = (acc0[17]+(f32((val12*val39)))+(f32((val13*val40)))+(f32((val14*val41))));
        acc0[18] = (acc0[18]+(f32((val15*val21)))+(f32((val16*val22)))+(f32((val17*val23))));
        acc0[19] = (acc0[19]+(f32((val15*val30)))+(f32((val16*val31)))+(f32((val17*val32))));
        acc0[20] = (acc0[20]+(f32((val15*val39)))+(f32((val16*val40)))+(f32((val17*val41))));
        acc0[21] = (acc0[21]+(f32((val18*val21)))+(f32((val19*val22)))+(f32((val20*val23))));
        acc0[22] = (acc0[22]+(f32((val18*val30)))+(f32((val19*val31)))+(f32((val20*val32))));
        acc0[23] = (acc0[23]+(f32((val18*val39)))+(f32((val19*val40)))+(f32((val20*val41))));
        acc0[24] = (acc0[24]+(f32((val0*val24)))+(f32((val3*val25)))+(f32((val5*val26))));
        acc0[25] = (acc0[25]+(f32((val0*val33)))+(f32((val3*val34)))+(f32((val5*val35))));
        acc0[26] = (acc0[26]+(f32((val0*val42)))+(f32((val3*val43)))+(f32((val5*val44))));
        acc0[27] = (acc0[27]+(f32((val12*val24)))+(f32((val13*val25)))+(f32((val14*val26))));
        acc0[28] = (acc0[28]+(f32((val12*val33)))+(f32((val13*val34)))+(f32((val14*val35))));
        acc0[29] = (acc0[29]+(f32((val12*val42)))+(f32((val13*val43)))+(f32((val14*val44))));
        acc0[30] = (acc0[30]+(f32((val15*val24)))+(f32((val16*val25)))+(f32((val17*val26))));
        acc0[31] = (acc0[31]+(f32((val15*val33)))+(f32((val16*val34)))+(f32((val17*val35))));
        acc0[32] = (acc0[32]+(f32((val15*val42)))+(f32((val16*val43)))+(f32((val17*val44))));
        acc0[33] = (acc0[33]+(f32((val18*val24)))+(f32((val19*val25)))+(f32((val20*val26))));
        acc0[34] = (acc0[34]+(f32((val18*val33)))+(f32((val19*val34)))+(f32((val20*val35))));
        acc0[35] = (acc0[35]+(f32((val18*val42)))+(f32((val19*val43)))+(f32((val20*val44))));
        acc0[36] = (acc0[36]+(f32((val0*val27)))+(f32((val3*val28)))+(f32((val5*val29))));
        acc0[37] = (acc0[37]+(f32((val0*val36)))+(f32((val3*val37)))+(f32((val5*val38))));
        acc0[38] = (acc0[38]+(f32((val0*val45)))+(f32((val3*val46)))+(f32((val5*val47))));
        acc0[39] = (acc0[39]+(f32((val12*val27)))+(f32((val13*val28)))+(f32((val14*val29))));
        acc0[40] = (acc0[40]+(f32((val12*val36)))+(f32((val13*val37)))+(f32((val14*val38))));
        acc0[41] = (acc0[41]+(f32((val12*val45)))+(f32((val13*val46)))+(f32((val14*val47))));
        acc0[42] = (acc0[42]+(f32((val15*val27)))+(f32((val16*val28)))+(f32((val17*val29))));
        acc0[43] = (acc0[43]+(f32((val15*val36)))+(f32((val16*val37)))+(f32((val17*val38))));
        acc0[44] = (acc0[44]+(f32((val15*val45)))+(f32((val16*val46)))+(f32((val17*val47))));
        acc0[45] = (acc0[45]+(f32((val18*val27)))+(f32((val19*val28)))+(f32((val20*val29))));
        acc0[46] = (acc0[46]+(f32((val18*val36)))+(f32((val19*val37)))+(f32((val20*val38))));
        acc0[47] = (acc0[47]+(f32((val18*val45)))+(f32((val19*val46)))+(f32((val20*val47))));
      }
    }
  }
  var alu110 = (alu1+alu2+cast1+(gidx2*201326592));
  data0_402653184[alu110] = (f32((f16(acc0[0]))));
  data0_402653184[(alu110+16)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu110+32)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu110+48)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu110+16777216)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu110+16777232)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu110+16777248)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu110+16777264)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu110+33554432)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu110+33554448)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu110+33554464)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu110+33554480)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu110+50331648)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu110+50331664)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu110+50331680)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu110+50331696)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu110+67108864)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu110+67108880)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu110+67108896)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu110+67108912)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu110+83886080)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu110+83886096)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu110+83886112)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu110+83886128)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu110+100663296)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu110+100663312)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu110+100663328)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu110+100663344)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu110+117440512)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu110+117440528)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu110+117440544)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu110+117440560)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu110+134217728)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu110+134217744)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu110+134217760)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu110+134217776)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu110+150994944)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu110+150994960)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu110+150994976)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu110+150994992)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu110+167772160)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu110+167772176)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu110+167772192)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu110+167772208)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu110+184549376)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu110+184549392)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu110+184549408)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu110+184549424)] = (f32((f16(acc0[47]))));
}`;

const dk_backbone_8 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu50 = (lidx2+bitcast<i32>((cast1<<4u))+(Ridx1*5));
      var alu51 = ((4<alu50)&(alu50<261));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu52 = (gidx1+(Ridx2*5));
        var alu53 = (alu0+cast0+(Ridx2*1280)+alu1+(Ridx1*327680)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
        var alu54 = ((4<alu52)&(alu52<261));
        var val0 = select((f16(0.0f)), data1_402653184[(alu53+-328965)], ((4<alu0)&alu54&alu51));
        var alu55 = ((Ridx1*9)+(Ridx2*3)+(Ridx0*27)+(lidx1*2592));
        var val1 = data2_15552[(alu55+1296)];
        var val2 = data2_15552[(alu55+1297)];
        var val3 = data2_15552[(alu55+1298)];
        var val4 = data2_15552[(alu55+1944)];
        var val5 = data2_15552[(alu55+1945)];
        var val6 = data2_15552[(alu55+1946)];
        var val7 = data2_15552[(alu55+6480)];
        var val8 = data2_15552[(alu55+6481)];
        var val9 = data2_15552[(alu55+6482)];
        var val10 = data2_15552[(alu55+7128)];
        var val11 = data2_15552[(alu55+7129)];
        var val12 = data2_15552[(alu55+7130)];
        var val13 = data2_15552[(alu55+11016)];
        var val14 = data2_15552[(alu55+11017)];
        var val15 = data2_15552[(alu55+11018)];
        var val16 = data2_15552[(alu55+11664)];
        var val17 = data2_15552[(alu55+11665)];
        var val18 = data2_15552[(alu55+11666)];
        var val19 = data2_15552[(alu55+12312)];
        var val20 = data2_15552[(alu55+12313)];
        var val21 = data2_15552[(alu55+12314)];
        var val22 = data2_15552[alu55];
        var alu56 = (alu54&alu51);
        var val23 = select((f16(0.0f)), data1_402653184[(alu53+-328960)], alu56);
        var val24 = data2_15552[(alu55+1)];
        var val25 = select((f16(0.0f)), data1_402653184[(alu53+-328955)], alu56);
        var val26 = data2_15552[(alu55+2)];
        var val27 = data2_15552[(alu55+648)];
        var val28 = data2_15552[(alu55+649)];
        var val29 = data2_15552[(alu55+650)];
        var val30 = data2_15552[(alu55+5184)];
        var val31 = data2_15552[(alu55+5185)];
        var val32 = data2_15552[(alu55+5186)];
        var val33 = data2_15552[(alu55+5832)];
        var val34 = data2_15552[(alu55+5833)];
        var val35 = data2_15552[(alu55+5834)];
        var val36 = data2_15552[(alu55+10368)];
        var val37 = data2_15552[(alu55+10369)];
        var val38 = data2_15552[(alu55+10370)];
        var val39 = select((f16(0.0f)), data1_402653184[(alu53+-328949)], alu56);
        var val40 = select((f16(0.0f)), data1_402653184[(alu53+-328944)], alu56);
        var val41 = select((f16(0.0f)), data1_402653184[(alu53+-328939)], alu56);
        var val42 = select((f16(0.0f)), data1_402653184[(alu53+-328933)], alu56);
        var val43 = select((f16(0.0f)), data1_402653184[(alu53+-328928)], alu56);
        var val44 = select((f16(0.0f)), data1_402653184[(alu53+-328923)], alu56);
        var val45 = select((f16(0.0f)), data1_402653184[(alu53+-328917)], alu56);
        var val46 = select((f16(0.0f)), data1_402653184[(alu53+-328912)], alu56);
        var val47 = select((f16(0.0f)), data1_402653184[(alu53+-328907)], ((alu0<203)&alu54&alu51));
        acc0[0] = (acc0[0]+(f32((val0*val22)))+(f32((val23*val24)))+(f32((val25*val26))));
        acc0[1] = (acc0[1]+(f32((val0*val30)))+(f32((val23*val31)))+(f32((val25*val32))));
        acc0[2] = (acc0[2]+(f32((val0*val36)))+(f32((val23*val37)))+(f32((val25*val38))));
        acc0[3] = (acc0[3]+(f32((val0*val27)))+(f32((val23*val28)))+(f32((val25*val29))));
        acc0[4] = (acc0[4]+(f32((val0*val33)))+(f32((val23*val34)))+(f32((val25*val35))));
        acc0[5] = (acc0[5]+(f32((val0*val13)))+(f32((val23*val14)))+(f32((val25*val15))));
        acc0[6] = (acc0[6]+(f32((val0*val1)))+(f32((val23*val2)))+(f32((val25*val3))));
        acc0[7] = (acc0[7]+(f32((val0*val7)))+(f32((val23*val8)))+(f32((val25*val9))));
        acc0[8] = (acc0[8]+(f32((val0*val16)))+(f32((val23*val17)))+(f32((val25*val18))));
        acc0[9] = (acc0[9]+(f32((val0*val4)))+(f32((val23*val5)))+(f32((val25*val6))));
        acc0[10] = (acc0[10]+(f32((val0*val10)))+(f32((val23*val11)))+(f32((val25*val12))));
        acc0[11] = (acc0[11]+(f32((val0*val19)))+(f32((val23*val20)))+(f32((val25*val21))));
        acc0[12] = (acc0[12]+(f32((val39*val22)))+(f32((val40*val24)))+(f32((val41*val26))));
        acc0[13] = (acc0[13]+(f32((val39*val30)))+(f32((val40*val31)))+(f32((val41*val32))));
        acc0[14] = (acc0[14]+(f32((val39*val36)))+(f32((val40*val37)))+(f32((val41*val38))));
        acc0[15] = (acc0[15]+(f32((val39*val27)))+(f32((val40*val28)))+(f32((val41*val29))));
        acc0[16] = (acc0[16]+(f32((val39*val33)))+(f32((val40*val34)))+(f32((val41*val35))));
        acc0[17] = (acc0[17]+(f32((val39*val13)))+(f32((val40*val14)))+(f32((val41*val15))));
        acc0[18] = (acc0[18]+(f32((val39*val1)))+(f32((val40*val2)))+(f32((val41*val3))));
        acc0[19] = (acc0[19]+(f32((val39*val7)))+(f32((val40*val8)))+(f32((val41*val9))));
        acc0[20] = (acc0[20]+(f32((val39*val16)))+(f32((val40*val17)))+(f32((val41*val18))));
        acc0[21] = (acc0[21]+(f32((val39*val4)))+(f32((val40*val5)))+(f32((val41*val6))));
        acc0[22] = (acc0[22]+(f32((val39*val10)))+(f32((val40*val11)))+(f32((val41*val12))));
        acc0[23] = (acc0[23]+(f32((val39*val19)))+(f32((val40*val20)))+(f32((val41*val21))));
        acc0[24] = (acc0[24]+(f32((val42*val22)))+(f32((val43*val24)))+(f32((val44*val26))));
        acc0[25] = (acc0[25]+(f32((val42*val30)))+(f32((val43*val31)))+(f32((val44*val32))));
        acc0[26] = (acc0[26]+(f32((val42*val36)))+(f32((val43*val37)))+(f32((val44*val38))));
        acc0[27] = (acc0[27]+(f32((val42*val27)))+(f32((val43*val28)))+(f32((val44*val29))));
        acc0[28] = (acc0[28]+(f32((val42*val33)))+(f32((val43*val34)))+(f32((val44*val35))));
        acc0[29] = (acc0[29]+(f32((val42*val13)))+(f32((val43*val14)))+(f32((val44*val15))));
        acc0[30] = (acc0[30]+(f32((val42*val1)))+(f32((val43*val2)))+(f32((val44*val3))));
        acc0[31] = (acc0[31]+(f32((val42*val7)))+(f32((val43*val8)))+(f32((val44*val9))));
        acc0[32] = (acc0[32]+(f32((val42*val16)))+(f32((val43*val17)))+(f32((val44*val18))));
        acc0[33] = (acc0[33]+(f32((val42*val4)))+(f32((val43*val5)))+(f32((val44*val6))));
        acc0[34] = (acc0[34]+(f32((val42*val10)))+(f32((val43*val11)))+(f32((val44*val12))));
        acc0[35] = (acc0[35]+(f32((val42*val19)))+(f32((val43*val20)))+(f32((val44*val21))));
        acc0[36] = (acc0[36]+(f32((val45*val22)))+(f32((val46*val24)))+(f32((val47*val26))));
        acc0[37] = (acc0[37]+(f32((val45*val30)))+(f32((val46*val31)))+(f32((val47*val32))));
        acc0[38] = (acc0[38]+(f32((val45*val36)))+(f32((val46*val37)))+(f32((val47*val38))));
        acc0[39] = (acc0[39]+(f32((val45*val27)))+(f32((val46*val28)))+(f32((val47*val29))));
        acc0[40] = (acc0[40]+(f32((val45*val33)))+(f32((val46*val34)))+(f32((val47*val35))));
        acc0[41] = (acc0[41]+(f32((val45*val13)))+(f32((val46*val14)))+(f32((val47*val15))));
        acc0[42] = (acc0[42]+(f32((val45*val1)))+(f32((val46*val2)))+(f32((val47*val3))));
        acc0[43] = (acc0[43]+(f32((val45*val7)))+(f32((val46*val8)))+(f32((val47*val9))));
        acc0[44] = (acc0[44]+(f32((val45*val16)))+(f32((val46*val17)))+(f32((val47*val18))));
        acc0[45] = (acc0[45]+(f32((val45*val4)))+(f32((val46*val5)))+(f32((val47*val6))));
        acc0[46] = (acc0[46]+(f32((val45*val10)))+(f32((val46*val11)))+(f32((val47*val12))));
        acc0[47] = (acc0[47]+(f32((val45*val19)))+(f32((val46*val20)))+(f32((val47*val21))));
      }
    }
  }
  var alu108 = (alu0+alu1+cast0+bitcast<i32>((bitcast<u32>(lidx1)<<26u)));
  data0_402653184[alu108] = (f32((f16(acc0[0]))));
  data0_402653184[(alu108+16)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu108+32)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu108+48)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu108+16777216)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu108+16777232)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu108+16777248)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu108+16777264)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu108+33554432)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu108+33554448)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu108+33554464)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu108+33554480)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu108+50331648)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu108+50331664)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu108+50331680)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu108+50331696)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu108+134217728)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu108+134217744)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu108+134217760)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu108+134217776)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu108+150994944)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu108+150994960)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu108+150994976)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu108+150994992)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu108+167772160)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu108+167772176)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu108+167772192)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu108+167772208)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu108+184549376)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu108+184549392)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu108+184549408)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu108+184549424)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu108+268435456)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu108+268435472)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu108+268435488)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu108+268435504)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu108+285212672)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu108+285212688)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu108+285212704)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu108+285212720)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu108+301989888)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu108+301989904)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu108+301989920)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu108+301989936)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu108+318767104)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu108+318767120)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu108+318767136)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu108+318767152)] = (f32((f16(acc0[47]))));
}`;

const dk_backbone_9 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 512 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx1);
  var alu0 = (gidx0>>1u);
  var cast1 = bitcast<i32>((bitcast<u32>(alu0)<<8u));
  var alu1 = (lidx0+bitcast<i32>((bitcast<u32>(lidx1)<<6u))+bitcast<i32>((bitcast<u32>((gidx0&1))<<7u)));
  var alu2 = (bitcast<i32>((cast0<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu51 = (lidx2+bitcast<i32>((cast0<<4u))+(Ridx1*7));
      var alu52 = ((6<alu51)&(alu51<263));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu53 = (alu1+cast1+(Ridx2*1792)+alu2+(Ridx1*458752)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
        var alu54 = ((Ridx2*7)+alu0);
        var alu55 = ((6<alu54)&(alu54<263));
        var val0 = select((f16(0.0f)), data1_402653184[(alu53+-460551)], ((6<alu1)&alu55&alu52));
        var alu56 = ((Ridx1*9)+(Ridx2*3)+(Ridx0*27)+(gidx2*7776));
        var val1 = data2_15552[(alu56+1)];
        var val2 = data2_15552[(alu56+2)];
        var val3 = data2_15552[alu56];
        var alu57 = (alu55&alu52);
        var val4 = select((f16(0.0f)), data1_402653184[(alu53+-460544)], alu57);
        var val5 = select((f16(0.0f)), data1_402653184[(alu53+-460537)], alu57);
        var val6 = data2_15552[(alu56+2592)];
        var val7 = data2_15552[(alu56+2593)];
        var val8 = data2_15552[(alu56+2594)];
        var val9 = data2_15552[(alu56+5184)];
        var val10 = data2_15552[(alu56+5185)];
        var val11 = data2_15552[(alu56+5186)];
        var val12 = select((f16(0.0f)), data1_402653184[(alu53+-460535)], alu57);
        var val13 = select((f16(0.0f)), data1_402653184[(alu53+-460528)], alu57);
        var val14 = select((f16(0.0f)), data1_402653184[(alu53+-460521)], alu57);
        var val15 = select((f16(0.0f)), data1_402653184[(alu53+-460519)], alu57);
        var val16 = select((f16(0.0f)), data1_402653184[(alu53+-460512)], alu57);
        var val17 = select((f16(0.0f)), data1_402653184[(alu53+-460505)], alu57);
        var val18 = select((f16(0.0f)), data1_402653184[(alu53+-460503)], alu57);
        var val19 = select((f16(0.0f)), data1_402653184[(alu53+-460496)], alu57);
        var val20 = select((f16(0.0f)), data1_402653184[(alu53+-460489)], ((alu1<201)&alu55&alu52));
        var val21 = data2_15552[(alu56+648)];
        var val22 = data2_15552[(alu56+649)];
        var val23 = data2_15552[(alu56+650)];
        var val24 = data2_15552[(alu56+1296)];
        var val25 = data2_15552[(alu56+1297)];
        var val26 = data2_15552[(alu56+1298)];
        var val27 = data2_15552[(alu56+1944)];
        var val28 = data2_15552[(alu56+1945)];
        var val29 = data2_15552[(alu56+1946)];
        var val30 = data2_15552[(alu56+3240)];
        var val31 = data2_15552[(alu56+3241)];
        var val32 = data2_15552[(alu56+3242)];
        var val33 = data2_15552[(alu56+3888)];
        var val34 = data2_15552[(alu56+3889)];
        var val35 = data2_15552[(alu56+3890)];
        var val36 = data2_15552[(alu56+4536)];
        var val37 = data2_15552[(alu56+4537)];
        var val38 = data2_15552[(alu56+4538)];
        var val39 = data2_15552[(alu56+5832)];
        var val40 = data2_15552[(alu56+5833)];
        var val41 = data2_15552[(alu56+5834)];
        var val42 = data2_15552[(alu56+6480)];
        var val43 = data2_15552[(alu56+6481)];
        var val44 = data2_15552[(alu56+6482)];
        var val45 = data2_15552[(alu56+7128)];
        var val46 = data2_15552[(alu56+7129)];
        var val47 = data2_15552[(alu56+7130)];
        acc0[0] = (acc0[0]+(f32((val0*val3)))+(f32((val4*val1)))+(f32((val5*val2))));
        acc0[1] = (acc0[1]+(f32((val0*val6)))+(f32((val4*val7)))+(f32((val5*val8))));
        acc0[2] = (acc0[2]+(f32((val0*val9)))+(f32((val4*val10)))+(f32((val5*val11))));
        acc0[3] = (acc0[3]+(f32((val12*val3)))+(f32((val13*val1)))+(f32((val14*val2))));
        acc0[4] = (acc0[4]+(f32((val12*val6)))+(f32((val13*val7)))+(f32((val14*val8))));
        acc0[5] = (acc0[5]+(f32((val12*val9)))+(f32((val13*val10)))+(f32((val14*val11))));
        acc0[6] = (acc0[6]+(f32((val15*val3)))+(f32((val16*val1)))+(f32((val17*val2))));
        acc0[7] = (acc0[7]+(f32((val15*val6)))+(f32((val16*val7)))+(f32((val17*val8))));
        acc0[8] = (acc0[8]+(f32((val15*val9)))+(f32((val16*val10)))+(f32((val17*val11))));
        acc0[9] = (acc0[9]+(f32((val18*val3)))+(f32((val19*val1)))+(f32((val20*val2))));
        acc0[10] = (acc0[10]+(f32((val18*val6)))+(f32((val19*val7)))+(f32((val20*val8))));
        acc0[11] = (acc0[11]+(f32((val18*val9)))+(f32((val19*val10)))+(f32((val20*val11))));
        acc0[12] = (acc0[12]+(f32((val0*val21)))+(f32((val4*val22)))+(f32((val5*val23))));
        acc0[13] = (acc0[13]+(f32((val0*val30)))+(f32((val4*val31)))+(f32((val5*val32))));
        acc0[14] = (acc0[14]+(f32((val0*val39)))+(f32((val4*val40)))+(f32((val5*val41))));
        acc0[15] = (acc0[15]+(f32((val12*val21)))+(f32((val13*val22)))+(f32((val14*val23))));
        acc0[16] = (acc0[16]+(f32((val12*val30)))+(f32((val13*val31)))+(f32((val14*val32))));
        acc0[17] = (acc0[17]+(f32((val12*val39)))+(f32((val13*val40)))+(f32((val14*val41))));
        acc0[18] = (acc0[18]+(f32((val15*val21)))+(f32((val16*val22)))+(f32((val17*val23))));
        acc0[19] = (acc0[19]+(f32((val15*val30)))+(f32((val16*val31)))+(f32((val17*val32))));
        acc0[20] = (acc0[20]+(f32((val15*val39)))+(f32((val16*val40)))+(f32((val17*val41))));
        acc0[21] = (acc0[21]+(f32((val18*val21)))+(f32((val19*val22)))+(f32((val20*val23))));
        acc0[22] = (acc0[22]+(f32((val18*val30)))+(f32((val19*val31)))+(f32((val20*val32))));
        acc0[23] = (acc0[23]+(f32((val18*val39)))+(f32((val19*val40)))+(f32((val20*val41))));
        acc0[24] = (acc0[24]+(f32((val0*val24)))+(f32((val4*val25)))+(f32((val5*val26))));
        acc0[25] = (acc0[25]+(f32((val0*val33)))+(f32((val4*val34)))+(f32((val5*val35))));
        acc0[26] = (acc0[26]+(f32((val0*val42)))+(f32((val4*val43)))+(f32((val5*val44))));
        acc0[27] = (acc0[27]+(f32((val12*val24)))+(f32((val13*val25)))+(f32((val14*val26))));
        acc0[28] = (acc0[28]+(f32((val12*val33)))+(f32((val13*val34)))+(f32((val14*val35))));
        acc0[29] = (acc0[29]+(f32((val12*val42)))+(f32((val13*val43)))+(f32((val14*val44))));
        acc0[30] = (acc0[30]+(f32((val15*val24)))+(f32((val16*val25)))+(f32((val17*val26))));
        acc0[31] = (acc0[31]+(f32((val15*val33)))+(f32((val16*val34)))+(f32((val17*val35))));
        acc0[32] = (acc0[32]+(f32((val15*val42)))+(f32((val16*val43)))+(f32((val17*val44))));
        acc0[33] = (acc0[33]+(f32((val18*val24)))+(f32((val19*val25)))+(f32((val20*val26))));
        acc0[34] = (acc0[34]+(f32((val18*val33)))+(f32((val19*val34)))+(f32((val20*val35))));
        acc0[35] = (acc0[35]+(f32((val18*val42)))+(f32((val19*val43)))+(f32((val20*val44))));
        acc0[36] = (acc0[36]+(f32((val0*val27)))+(f32((val4*val28)))+(f32((val5*val29))));
        acc0[37] = (acc0[37]+(f32((val0*val36)))+(f32((val4*val37)))+(f32((val5*val38))));
        acc0[38] = (acc0[38]+(f32((val0*val45)))+(f32((val4*val46)))+(f32((val5*val47))));
        acc0[39] = (acc0[39]+(f32((val12*val27)))+(f32((val13*val28)))+(f32((val14*val29))));
        acc0[40] = (acc0[40]+(f32((val12*val36)))+(f32((val13*val37)))+(f32((val14*val38))));
        acc0[41] = (acc0[41]+(f32((val12*val45)))+(f32((val13*val46)))+(f32((val14*val47))));
        acc0[42] = (acc0[42]+(f32((val15*val27)))+(f32((val16*val28)))+(f32((val17*val29))));
        acc0[43] = (acc0[43]+(f32((val15*val36)))+(f32((val16*val37)))+(f32((val17*val38))));
        acc0[44] = (acc0[44]+(f32((val15*val45)))+(f32((val16*val46)))+(f32((val17*val47))));
        acc0[45] = (acc0[45]+(f32((val18*val27)))+(f32((val19*val28)))+(f32((val20*val29))));
        acc0[46] = (acc0[46]+(f32((val18*val36)))+(f32((val19*val37)))+(f32((val20*val38))));
        acc0[47] = (acc0[47]+(f32((val18*val45)))+(f32((val19*val46)))+(f32((val20*val47))));
      }
    }
  }
  var alu109 = (alu1+alu2+cast1+(gidx2*201326592));
  data0_402653184[alu109] = (f32((f16(acc0[0]))));
  data0_402653184[(alu109+16)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu109+32)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu109+48)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu109+16777216)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu109+16777232)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu109+16777248)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu109+16777264)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu109+33554432)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu109+33554448)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu109+33554464)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu109+33554480)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu109+50331648)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu109+50331664)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu109+50331680)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu109+50331696)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu109+67108864)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu109+67108880)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu109+67108896)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu109+67108912)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu109+83886080)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu109+83886096)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu109+83886112)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu109+83886128)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu109+100663296)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu109+100663312)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu109+100663328)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu109+100663344)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu109+117440512)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu109+117440528)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu109+117440544)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu109+117440560)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu109+134217728)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu109+134217744)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu109+134217760)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu109+134217776)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu109+150994944)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu109+150994960)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu109+150994976)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu109+150994992)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu109+167772160)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu109+167772176)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu109+167772192)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu109+167772208)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu109+184549376)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu109+184549392)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu109+184549408)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu109+184549424)] = (f32((f16(acc0[47]))));
}`;

const dk_backbone_10 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,8,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 128 */
  var gidx1 = i32(gindex.y); /* 64 */
  var gidx2 = i32(gindex.z); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<u32>((gidx0>>2u));
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>((gidx0&3))<<6u)));
  var alu1 = (bitcast<i32>((cast0<<18u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
  var alu2 = (bitcast<i32>((bitcast<u32>(lidx1)<<8u))+bitcast<i32>((cast1<<11u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu51 = (lidx2+bitcast<i32>((cast0<<2u))+(Ridx1*13));
      var alu52 = ((12<alu51)&(alu51<269));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu53 = (lidx1+bitcast<i32>((cast1<<3u))+(Ridx2*13));
        var alu54 = (alu0+alu2+(Ridx2*3328)+alu1+(Ridx1*851968)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
        var alu55 = ((12<alu53)&(alu53<269));
        var val0 = select((f16(0.0f)), data1_402653184[(alu54+-855309)], ((12<alu0)&alu55&alu52));
        var alu56 = ((Ridx1*9)+(Ridx2*3)+(Ridx0*27)+(gidx2*7776));
        var val1 = data2_15552[(alu56+1944)];
        var val2 = data2_15552[(alu56+1945)];
        var val3 = data2_15552[(alu56+1946)];
        var val4 = data2_15552[(alu56+4536)];
        var val5 = data2_15552[(alu56+4537)];
        var val6 = data2_15552[(alu56+4538)];
        var val7 = data2_15552[(alu56+6481)];
        var val8 = data2_15552[(alu56+6482)];
        var val9 = data2_15552[(alu56+7128)];
        var val10 = data2_15552[(alu56+7129)];
        var val11 = data2_15552[(alu56+7130)];
        var val12 = data2_15552[alu56];
        var alu57 = (alu55&alu52);
        var val13 = select((f16(0.0f)), data1_402653184[(alu54+-855296)], alu57);
        var val14 = data2_15552[(alu56+1)];
        var val15 = select((f16(0.0f)), data1_402653184[(alu54+-855283)], alu57);
        var val16 = data2_15552[(alu56+2)];
        var val17 = data2_15552[(alu56+2592)];
        var val18 = data2_15552[(alu56+2593)];
        var val19 = data2_15552[(alu56+2594)];
        var val20 = data2_15552[(alu56+5184)];
        var val21 = data2_15552[(alu56+5185)];
        var val22 = data2_15552[(alu56+5186)];
        var val23 = select((f16(0.0f)), data1_402653184[(alu54+-855293)], alu57);
        var val24 = select((f16(0.0f)), data1_402653184[(alu54+-855280)], alu57);
        var val25 = select((f16(0.0f)), data1_402653184[(alu54+-855277)], alu57);
        var val26 = select((f16(0.0f)), data1_402653184[(alu54+-855267)], alu57);
        var val27 = select((f16(0.0f)), data1_402653184[(alu54+-855264)], alu57);
        var val28 = select((f16(0.0f)), data1_402653184[(alu54+-855261)], alu57);
        var val29 = select((f16(0.0f)), data1_402653184[(alu54+-855251)], alu57);
        var val30 = select((f16(0.0f)), data1_402653184[(alu54+-855248)], alu57);
        var val31 = select((f16(0.0f)), data1_402653184[(alu54+-855235)], ((alu0<195)&alu55&alu52));
        var val32 = data2_15552[(alu56+648)];
        var val33 = data2_15552[(alu56+649)];
        var val34 = data2_15552[(alu56+650)];
        var val35 = data2_15552[(alu56+1296)];
        var val36 = data2_15552[(alu56+1297)];
        var val37 = data2_15552[(alu56+1298)];
        var val38 = data2_15552[(alu56+3240)];
        var val39 = data2_15552[(alu56+3241)];
        var val40 = data2_15552[(alu56+3242)];
        var val41 = data2_15552[(alu56+3888)];
        var val42 = data2_15552[(alu56+3889)];
        var val43 = data2_15552[(alu56+3890)];
        var val44 = data2_15552[(alu56+5832)];
        var val45 = data2_15552[(alu56+5833)];
        var val46 = data2_15552[(alu56+5834)];
        var val47 = data2_15552[(alu56+6480)];
        acc0[0] = (acc0[0]+(f32((val0*val12)))+(f32((val13*val14)))+(f32((val15*val16))));
        acc0[1] = (acc0[1]+(f32((val0*val17)))+(f32((val13*val18)))+(f32((val15*val19))));
        acc0[2] = (acc0[2]+(f32((val0*val20)))+(f32((val13*val21)))+(f32((val15*val22))));
        acc0[3] = (acc0[3]+(f32((val23*val12)))+(f32((val24*val14)))+(f32((val26*val16))));
        acc0[4] = (acc0[4]+(f32((val23*val17)))+(f32((val24*val18)))+(f32((val26*val19))));
        acc0[5] = (acc0[5]+(f32((val23*val20)))+(f32((val24*val21)))+(f32((val26*val22))));
        acc0[6] = (acc0[6]+(f32((val25*val12)))+(f32((val27*val14)))+(f32((val29*val16))));
        acc0[7] = (acc0[7]+(f32((val25*val17)))+(f32((val27*val18)))+(f32((val29*val19))));
        acc0[8] = (acc0[8]+(f32((val25*val20)))+(f32((val27*val21)))+(f32((val29*val22))));
        acc0[9] = (acc0[9]+(f32((val28*val12)))+(f32((val30*val14)))+(f32((val31*val16))));
        acc0[10] = (acc0[10]+(f32((val28*val17)))+(f32((val30*val18)))+(f32((val31*val19))));
        acc0[11] = (acc0[11]+(f32((val28*val20)))+(f32((val30*val21)))+(f32((val31*val22))));
        acc0[12] = (acc0[12]+(f32((val0*val32)))+(f32((val13*val33)))+(f32((val15*val34))));
        acc0[13] = (acc0[13]+(f32((val0*val38)))+(f32((val13*val39)))+(f32((val15*val40))));
        acc0[14] = (acc0[14]+(f32((val0*val44)))+(f32((val13*val45)))+(f32((val15*val46))));
        acc0[15] = (acc0[15]+(f32((val23*val32)))+(f32((val24*val33)))+(f32((val26*val34))));
        acc0[16] = (acc0[16]+(f32((val23*val38)))+(f32((val24*val39)))+(f32((val26*val40))));
        acc0[17] = (acc0[17]+(f32((val23*val44)))+(f32((val24*val45)))+(f32((val26*val46))));
        acc0[18] = (acc0[18]+(f32((val25*val32)))+(f32((val27*val33)))+(f32((val29*val34))));
        acc0[19] = (acc0[19]+(f32((val25*val38)))+(f32((val27*val39)))+(f32((val29*val40))));
        acc0[20] = (acc0[20]+(f32((val25*val44)))+(f32((val27*val45)))+(f32((val29*val46))));
        acc0[21] = (acc0[21]+(f32((val28*val32)))+(f32((val30*val33)))+(f32((val31*val34))));
        acc0[22] = (acc0[22]+(f32((val28*val38)))+(f32((val30*val39)))+(f32((val31*val40))));
        acc0[23] = (acc0[23]+(f32((val28*val44)))+(f32((val30*val45)))+(f32((val31*val46))));
        acc0[24] = (acc0[24]+(f32((val0*val35)))+(f32((val13*val36)))+(f32((val15*val37))));
        acc0[25] = (acc0[25]+(f32((val0*val41)))+(f32((val13*val42)))+(f32((val15*val43))));
        acc0[26] = (acc0[26]+(f32((val0*val47)))+(f32((val13*val7)))+(f32((val15*val8))));
        acc0[27] = (acc0[27]+(f32((val23*val35)))+(f32((val24*val36)))+(f32((val26*val37))));
        acc0[28] = (acc0[28]+(f32((val23*val41)))+(f32((val24*val42)))+(f32((val26*val43))));
        acc0[29] = (acc0[29]+(f32((val23*val47)))+(f32((val24*val7)))+(f32((val26*val8))));
        acc0[30] = (acc0[30]+(f32((val25*val35)))+(f32((val27*val36)))+(f32((val29*val37))));
        acc0[31] = (acc0[31]+(f32((val25*val41)))+(f32((val27*val42)))+(f32((val29*val43))));
        acc0[32] = (acc0[32]+(f32((val25*val47)))+(f32((val27*val7)))+(f32((val29*val8))));
        acc0[33] = (acc0[33]+(f32((val28*val35)))+(f32((val30*val36)))+(f32((val31*val37))));
        acc0[34] = (acc0[34]+(f32((val28*val41)))+(f32((val30*val42)))+(f32((val31*val43))));
        acc0[35] = (acc0[35]+(f32((val28*val47)))+(f32((val30*val7)))+(f32((val31*val8))));
        acc0[36] = (acc0[36]+(f32((val0*val1)))+(f32((val13*val2)))+(f32((val15*val3))));
        acc0[37] = (acc0[37]+(f32((val0*val4)))+(f32((val13*val5)))+(f32((val15*val6))));
        acc0[38] = (acc0[38]+(f32((val0*val9)))+(f32((val13*val10)))+(f32((val15*val11))));
        acc0[39] = (acc0[39]+(f32((val23*val1)))+(f32((val24*val2)))+(f32((val26*val3))));
        acc0[40] = (acc0[40]+(f32((val23*val4)))+(f32((val24*val5)))+(f32((val26*val6))));
        acc0[41] = (acc0[41]+(f32((val23*val9)))+(f32((val24*val10)))+(f32((val26*val11))));
        acc0[42] = (acc0[42]+(f32((val25*val1)))+(f32((val27*val2)))+(f32((val29*val3))));
        acc0[43] = (acc0[43]+(f32((val25*val4)))+(f32((val27*val5)))+(f32((val29*val6))));
        acc0[44] = (acc0[44]+(f32((val25*val9)))+(f32((val27*val10)))+(f32((val29*val11))));
        acc0[45] = (acc0[45]+(f32((val28*val1)))+(f32((val30*val2)))+(f32((val31*val3))));
        acc0[46] = (acc0[46]+(f32((val28*val4)))+(f32((val30*val5)))+(f32((val31*val6))));
        acc0[47] = (acc0[47]+(f32((val28*val9)))+(f32((val30*val10)))+(f32((val31*val11))));
      }
    }
  }
  var alu109 = (alu0+alu1+alu2+(gidx2*201326592));
  data0_402653184[alu109] = (f32((f16(acc0[0]))));
  data0_402653184[(alu109+16)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu109+32)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu109+48)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu109+16777216)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu109+16777232)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu109+16777248)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu109+16777264)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu109+33554432)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu109+33554448)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu109+33554464)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu109+33554480)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu109+50331648)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu109+50331664)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu109+50331680)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu109+50331696)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu109+67108864)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu109+67108880)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu109+67108896)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu109+67108912)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu109+83886080)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu109+83886096)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu109+83886112)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu109+83886128)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu109+100663296)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu109+100663312)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu109+100663328)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu109+100663344)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu109+117440512)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu109+117440528)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu109+117440544)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu109+117440560)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu109+134217728)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu109+134217744)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu109+134217760)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu109+134217776)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu109+150994944)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu109+150994960)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu109+150994976)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu109+150994992)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu109+167772160)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu109+167772176)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu109+167772192)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu109+167772208)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu109+184549376)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu109+184549392)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu109+184549408)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu109+184549424)] = (f32((f16(acc0[47]))));
}`;

const dk_backbone_11 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,16,3) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,32>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 3 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast1<<20u))+bitcast<i32>((bitcast<u32>(lidx1)<<16u)));
  var alu2 = (gidx1<237);
  var alu3 = (18<gidx1);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu36 = (lidx1+bitcast<i32>((cast1<<4u))+(Ridx1*19));
      var alu37 = ((18<alu36)&(alu36<275));
      for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
        var alu38 = (alu0+(Ridx3*19));
        var alu39 = (alu38+cast0+alu1+(Ridx1*1245184)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
        var alu40 = (18<alu38);
        var val0 = select((f16(0.0f)), data1_402653184[(alu39+-1250067)], (alu40&alu3&alu37));
        var alu41 = ((Ridx1*9)+Ridx3+(Ridx0*27)+(lidx2*5184));
        var val1 = data2_15552[(alu41+1302)];
        var val2 = data2_15552[(alu41+1944)];
        var val3 = data2_15552[(alu41+1947)];
        var val4 = data2_15552[(alu41+1950)];
        var val5 = data2_15552[(alu41+3888)];
        var val6 = data2_15552[(alu41+3891)];
        var val7 = data2_15552[(alu41+3894)];
        var val8 = data2_15552[(alu41+4536)];
        var val9 = data2_15552[(alu41+4539)];
        var val10 = data2_15552[(alu41+4542)];
        var val11 = data2_15552[alu41];
        var val12 = select((f16(0.0f)), data1_402653184[(alu39+-1245203)], (alu40&alu37));
        var val13 = data2_15552[(alu41+3)];
        var val14 = select((f16(0.0f)), data1_402653184[(alu39+-1240339)], (alu40&alu2&alu37));
        var val15 = data2_15552[(alu41+6)];
        var val16 = data2_15552[(alu41+2592)];
        var val17 = data2_15552[(alu41+2595)];
        var val18 = data2_15552[(alu41+2598)];
        var alu42 = (2<alu38);
        var val19 = select((f16(0.0f)), data1_402653184[(alu39+-1250051)], (alu42&alu3&alu37));
        var alu43 = (alu38<243);
        var val20 = select((f16(0.0f)), data1_402653184[(alu39+-1250035)], (alu43&alu3&alu37));
        var alu44 = (alu38<227);
        var val21 = select((f16(0.0f)), data1_402653184[(alu39+-1250019)], (alu44&alu3&alu37));
        var val22 = select((f16(0.0f)), data1_402653184[(alu39+-1245187)], (alu42&alu37));
        var val23 = select((f16(0.0f)), data1_402653184[(alu39+-1245171)], (alu43&alu37));
        var val24 = select((f16(0.0f)), data1_402653184[(alu39+-1245155)], (alu44&alu37));
        var val25 = select((f16(0.0f)), data1_402653184[(alu39+-1240323)], (alu42&alu2&alu37));
        var val26 = select((f16(0.0f)), data1_402653184[(alu39+-1240307)], (alu43&alu2&alu37));
        var val27 = select((f16(0.0f)), data1_402653184[(alu39+-1240291)], (alu44&alu2&alu37));
        var val28 = data2_15552[(alu41+648)];
        var val29 = data2_15552[(alu41+651)];
        var val30 = data2_15552[(alu41+654)];
        var val31 = data2_15552[(alu41+1296)];
        var val32 = data2_15552[(alu41+1299)];
        var val33 = data2_15552[(alu41+3240)];
        var val34 = data2_15552[(alu41+3243)];
        var val35 = data2_15552[(alu41+3246)];
        acc0[0] = (acc0[0]+(f32((val0*val11)))+(f32((val12*val13)))+(f32((val14*val15))));
        acc0[1] = (acc0[1]+(f32((val0*val16)))+(f32((val12*val17)))+(f32((val14*val18))));
        acc0[2] = (acc0[2]+(f32((val19*val11)))+(f32((val22*val13)))+(f32((val25*val15))));
        acc0[3] = (acc0[3]+(f32((val19*val16)))+(f32((val22*val17)))+(f32((val25*val18))));
        acc0[4] = (acc0[4]+(f32((val20*val11)))+(f32((val23*val13)))+(f32((val26*val15))));
        acc0[5] = (acc0[5]+(f32((val20*val16)))+(f32((val23*val17)))+(f32((val26*val18))));
        acc0[6] = (acc0[6]+(f32((val21*val11)))+(f32((val24*val13)))+(f32((val27*val15))));
        acc0[7] = (acc0[7]+(f32((val21*val16)))+(f32((val24*val17)))+(f32((val27*val18))));
        acc0[8] = (acc0[8]+(f32((val0*val28)))+(f32((val12*val29)))+(f32((val14*val30))));
        acc0[9] = (acc0[9]+(f32((val0*val33)))+(f32((val12*val34)))+(f32((val14*val35))));
        acc0[10] = (acc0[10]+(f32((val19*val28)))+(f32((val22*val29)))+(f32((val25*val30))));
        acc0[11] = (acc0[11]+(f32((val19*val33)))+(f32((val22*val34)))+(f32((val25*val35))));
        acc0[12] = (acc0[12]+(f32((val20*val28)))+(f32((val23*val29)))+(f32((val26*val30))));
        acc0[13] = (acc0[13]+(f32((val20*val33)))+(f32((val23*val34)))+(f32((val26*val35))));
        acc0[14] = (acc0[14]+(f32((val21*val28)))+(f32((val24*val29)))+(f32((val27*val30))));
        acc0[15] = (acc0[15]+(f32((val21*val33)))+(f32((val24*val34)))+(f32((val27*val35))));
        acc0[16] = (acc0[16]+(f32((val0*val31)))+(f32((val12*val32)))+(f32((val14*val1))));
        acc0[17] = (acc0[17]+(f32((val0*val5)))+(f32((val12*val6)))+(f32((val14*val7))));
        acc0[18] = (acc0[18]+(f32((val19*val31)))+(f32((val22*val32)))+(f32((val25*val1))));
        acc0[19] = (acc0[19]+(f32((val19*val5)))+(f32((val22*val6)))+(f32((val25*val7))));
        acc0[20] = (acc0[20]+(f32((val20*val31)))+(f32((val23*val32)))+(f32((val26*val1))));
        acc0[21] = (acc0[21]+(f32((val20*val5)))+(f32((val23*val6)))+(f32((val26*val7))));
        acc0[22] = (acc0[22]+(f32((val21*val31)))+(f32((val24*val32)))+(f32((val27*val1))));
        acc0[23] = (acc0[23]+(f32((val21*val5)))+(f32((val24*val6)))+(f32((val27*val7))));
        acc0[24] = (acc0[24]+(f32((val0*val2)))+(f32((val12*val3)))+(f32((val14*val4))));
        acc0[25] = (acc0[25]+(f32((val0*val8)))+(f32((val12*val9)))+(f32((val14*val10))));
        acc0[26] = (acc0[26]+(f32((val19*val2)))+(f32((val22*val3)))+(f32((val25*val4))));
        acc0[27] = (acc0[27]+(f32((val19*val8)))+(f32((val22*val9)))+(f32((val25*val10))));
        acc0[28] = (acc0[28]+(f32((val20*val2)))+(f32((val23*val3)))+(f32((val26*val4))));
        acc0[29] = (acc0[29]+(f32((val20*val8)))+(f32((val23*val9)))+(f32((val26*val10))));
        acc0[30] = (acc0[30]+(f32((val21*val2)))+(f32((val24*val3)))+(f32((val27*val4))));
        acc0[31] = (acc0[31]+(f32((val21*val8)))+(f32((val24*val9)))+(f32((val27*val10))));
      }
    }
  }
  var alu80 = (alu0+alu1+cast0+bitcast<i32>((bitcast<u32>(lidx2)<<27u)));
  data0_402653184[alu80] = (f32((f16(acc0[0]))));
  data0_402653184[(alu80+16)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu80+32)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu80+48)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu80+16777216)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu80+16777232)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu80+16777248)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu80+16777264)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu80+33554432)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu80+33554448)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu80+33554464)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu80+33554480)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu80+50331648)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu80+50331664)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu80+50331680)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu80+50331696)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu80+67108864)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu80+67108880)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu80+67108896)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu80+67108912)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu80+83886080)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu80+83886096)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu80+83886112)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu80+83886128)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu80+100663296)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu80+100663312)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu80+100663328)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu80+100663344)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu80+117440512)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu80+117440528)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu80+117440544)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu80+117440560)] = (f32((f16(acc0[31]))));
}`;

const dk_backbone_12 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 512 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<i32>((bitcast<u32>((gidx0>>1u))<<8u));
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(lidx1)<<6u))+bitcast<i32>((bitcast<u32>((gidx0&1))<<7u)));
  var alu1 = (bitcast<i32>((cast0<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
  var alu2 = (gidx0<450);
  var alu3 = (61<gidx0);
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu52 = (lidx2+bitcast<i32>((cast0<<4u))+(Ridx1*31));
      var alu53 = ((30<alu52)&(alu52<287));
      for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
        var alu54 = (alu0+(Ridx3*31));
        var alu55 = (alu54+cast1+alu1+(Ridx1*2031616)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
        var alu56 = (30<alu54);
        var val0 = select((f16(0.0f)), data1_402653184[(alu55+-2039583)], (alu56&alu3&alu53));
        var alu57 = ((Ridx1*9)+Ridx3+(Ridx0*27)+(gidx2*7776));
        var val1 = data2_15552[(alu57+3)];
        var val2 = data2_15552[(alu57+1944)];
        var val3 = data2_15552[(alu57+1947)];
        var val4 = data2_15552[(alu57+1950)];
        var val5 = data2_15552[(alu57+4536)];
        var val6 = data2_15552[(alu57+4539)];
        var val7 = data2_15552[(alu57+4542)];
        var val8 = data2_15552[(alu57+6480)];
        var val9 = data2_15552[(alu57+6483)];
        var val10 = data2_15552[(alu57+6486)];
        var val11 = data2_15552[(alu57+7128)];
        var val12 = data2_15552[(alu57+7131)];
        var val13 = data2_15552[(alu57+7134)];
        var val14 = data2_15552[alu57];
        var val15 = select((f16(0.0f)), data1_402653184[(alu55+-2031647)], (alu56&alu53));
        var val16 = select((f16(0.0f)), data1_402653184[(alu55+-2023711)], (alu56&alu2&alu53));
        var val17 = data2_15552[(alu57+6)];
        var val18 = data2_15552[(alu57+2592)];
        var val19 = data2_15552[(alu57+2595)];
        var val20 = data2_15552[(alu57+2598)];
        var val21 = data2_15552[(alu57+5184)];
        var val22 = data2_15552[(alu57+5187)];
        var val23 = data2_15552[(alu57+5190)];
        var alu58 = (14<alu54);
        var val24 = select((f16(0.0f)), data1_402653184[(alu55+-2039567)], (alu58&alu3&alu53));
        var alu59 = (alu54<255);
        var val25 = select((f16(0.0f)), data1_402653184[(alu55+-2039551)], (alu59&alu3&alu53));
        var alu60 = (alu54<239);
        var val26 = select((f16(0.0f)), data1_402653184[(alu55+-2039535)], (alu60&alu3&alu53));
        var val27 = select((f16(0.0f)), data1_402653184[(alu55+-2031631)], (alu58&alu53));
        var val28 = select((f16(0.0f)), data1_402653184[(alu55+-2031615)], (alu59&alu53));
        var val29 = select((f16(0.0f)), data1_402653184[(alu55+-2031599)], (alu60&alu53));
        var val30 = select((f16(0.0f)), data1_402653184[(alu55+-2023695)], (alu58&alu2&alu53));
        var val31 = select((f16(0.0f)), data1_402653184[(alu55+-2023679)], (alu59&alu2&alu53));
        var val32 = select((f16(0.0f)), data1_402653184[(alu55+-2023663)], (alu60&alu2&alu53));
        var val33 = data2_15552[(alu57+648)];
        var val34 = data2_15552[(alu57+651)];
        var val35 = data2_15552[(alu57+654)];
        var val36 = data2_15552[(alu57+1296)];
        var val37 = data2_15552[(alu57+1299)];
        var val38 = data2_15552[(alu57+1302)];
        var val39 = data2_15552[(alu57+3240)];
        var val40 = data2_15552[(alu57+3243)];
        var val41 = data2_15552[(alu57+3246)];
        var val42 = data2_15552[(alu57+3888)];
        var val43 = data2_15552[(alu57+3891)];
        var val44 = data2_15552[(alu57+3894)];
        var val45 = data2_15552[(alu57+5832)];
        var val46 = data2_15552[(alu57+5835)];
        var val47 = data2_15552[(alu57+5838)];
        acc0[0] = (acc0[0]+(f32((val0*val14)))+(f32((val15*val1)))+(f32((val16*val17))));
        acc0[1] = (acc0[1]+(f32((val0*val18)))+(f32((val15*val19)))+(f32((val16*val20))));
        acc0[2] = (acc0[2]+(f32((val0*val21)))+(f32((val15*val22)))+(f32((val16*val23))));
        acc0[3] = (acc0[3]+(f32((val24*val14)))+(f32((val27*val1)))+(f32((val30*val17))));
        acc0[4] = (acc0[4]+(f32((val24*val18)))+(f32((val27*val19)))+(f32((val30*val20))));
        acc0[5] = (acc0[5]+(f32((val24*val21)))+(f32((val27*val22)))+(f32((val30*val23))));
        acc0[6] = (acc0[6]+(f32((val25*val14)))+(f32((val28*val1)))+(f32((val31*val17))));
        acc0[7] = (acc0[7]+(f32((val25*val18)))+(f32((val28*val19)))+(f32((val31*val20))));
        acc0[8] = (acc0[8]+(f32((val25*val21)))+(f32((val28*val22)))+(f32((val31*val23))));
        acc0[9] = (acc0[9]+(f32((val26*val14)))+(f32((val29*val1)))+(f32((val32*val17))));
        acc0[10] = (acc0[10]+(f32((val26*val18)))+(f32((val29*val19)))+(f32((val32*val20))));
        acc0[11] = (acc0[11]+(f32((val26*val21)))+(f32((val29*val22)))+(f32((val32*val23))));
        acc0[12] = (acc0[12]+(f32((val0*val33)))+(f32((val15*val34)))+(f32((val16*val35))));
        acc0[13] = (acc0[13]+(f32((val0*val39)))+(f32((val15*val40)))+(f32((val16*val41))));
        acc0[14] = (acc0[14]+(f32((val0*val45)))+(f32((val15*val46)))+(f32((val16*val47))));
        acc0[15] = (acc0[15]+(f32((val24*val33)))+(f32((val27*val34)))+(f32((val30*val35))));
        acc0[16] = (acc0[16]+(f32((val24*val39)))+(f32((val27*val40)))+(f32((val30*val41))));
        acc0[17] = (acc0[17]+(f32((val24*val45)))+(f32((val27*val46)))+(f32((val30*val47))));
        acc0[18] = (acc0[18]+(f32((val25*val33)))+(f32((val28*val34)))+(f32((val31*val35))));
        acc0[19] = (acc0[19]+(f32((val25*val39)))+(f32((val28*val40)))+(f32((val31*val41))));
        acc0[20] = (acc0[20]+(f32((val25*val45)))+(f32((val28*val46)))+(f32((val31*val47))));
        acc0[21] = (acc0[21]+(f32((val26*val33)))+(f32((val29*val34)))+(f32((val32*val35))));
        acc0[22] = (acc0[22]+(f32((val26*val39)))+(f32((val29*val40)))+(f32((val32*val41))));
        acc0[23] = (acc0[23]+(f32((val26*val45)))+(f32((val29*val46)))+(f32((val32*val47))));
        acc0[24] = (acc0[24]+(f32((val0*val36)))+(f32((val15*val37)))+(f32((val16*val38))));
        acc0[25] = (acc0[25]+(f32((val0*val42)))+(f32((val15*val43)))+(f32((val16*val44))));
        acc0[26] = (acc0[26]+(f32((val0*val8)))+(f32((val15*val9)))+(f32((val16*val10))));
        acc0[27] = (acc0[27]+(f32((val24*val36)))+(f32((val27*val37)))+(f32((val30*val38))));
        acc0[28] = (acc0[28]+(f32((val24*val42)))+(f32((val27*val43)))+(f32((val30*val44))));
        acc0[29] = (acc0[29]+(f32((val24*val8)))+(f32((val27*val9)))+(f32((val30*val10))));
        acc0[30] = (acc0[30]+(f32((val25*val36)))+(f32((val28*val37)))+(f32((val31*val38))));
        acc0[31] = (acc0[31]+(f32((val25*val42)))+(f32((val28*val43)))+(f32((val31*val44))));
        acc0[32] = (acc0[32]+(f32((val25*val8)))+(f32((val28*val9)))+(f32((val31*val10))));
        acc0[33] = (acc0[33]+(f32((val26*val36)))+(f32((val29*val37)))+(f32((val32*val38))));
        acc0[34] = (acc0[34]+(f32((val26*val42)))+(f32((val29*val43)))+(f32((val32*val44))));
        acc0[35] = (acc0[35]+(f32((val26*val8)))+(f32((val29*val9)))+(f32((val32*val10))));
        acc0[36] = (acc0[36]+(f32((val0*val2)))+(f32((val15*val3)))+(f32((val16*val4))));
        acc0[37] = (acc0[37]+(f32((val0*val5)))+(f32((val15*val6)))+(f32((val16*val7))));
        acc0[38] = (acc0[38]+(f32((val0*val11)))+(f32((val15*val12)))+(f32((val16*val13))));
        acc0[39] = (acc0[39]+(f32((val24*val2)))+(f32((val27*val3)))+(f32((val30*val4))));
        acc0[40] = (acc0[40]+(f32((val24*val5)))+(f32((val27*val6)))+(f32((val30*val7))));
        acc0[41] = (acc0[41]+(f32((val24*val11)))+(f32((val27*val12)))+(f32((val30*val13))));
        acc0[42] = (acc0[42]+(f32((val25*val2)))+(f32((val28*val3)))+(f32((val31*val4))));
        acc0[43] = (acc0[43]+(f32((val25*val5)))+(f32((val28*val6)))+(f32((val31*val7))));
        acc0[44] = (acc0[44]+(f32((val25*val11)))+(f32((val28*val12)))+(f32((val31*val13))));
        acc0[45] = (acc0[45]+(f32((val26*val2)))+(f32((val29*val3)))+(f32((val32*val4))));
        acc0[46] = (acc0[46]+(f32((val26*val5)))+(f32((val29*val6)))+(f32((val32*val7))));
        acc0[47] = (acc0[47]+(f32((val26*val11)))+(f32((val29*val12)))+(f32((val32*val13))));
      }
    }
  }
  var alu112 = (alu0+alu1+cast1+(gidx2*201326592));
  data0_402653184[alu112] = (f32((f16(acc0[0]))));
  data0_402653184[(alu112+16)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu112+32)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu112+48)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu112+16777216)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu112+16777232)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu112+16777248)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu112+16777264)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu112+33554432)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu112+33554448)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu112+33554464)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu112+33554480)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu112+50331648)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu112+50331664)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu112+50331680)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu112+50331696)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu112+67108864)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu112+67108880)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu112+67108896)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu112+67108912)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu112+83886080)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu112+83886096)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu112+83886112)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu112+83886128)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu112+100663296)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu112+100663312)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu112+100663328)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu112+100663344)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu112+117440512)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu112+117440528)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu112+117440544)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu112+117440560)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu112+134217728)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu112+134217744)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu112+134217760)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu112+134217776)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu112+150994944)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu112+150994960)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu112+150994976)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu112+150994992)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu112+167772160)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu112+167772176)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu112+167772192)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu112+167772208)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu112+184549376)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu112+184549392)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu112+184549408)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu112+184549424)] = (f32((f16(acc0[47]))));
}`;

const dk_backbone_13 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,64>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx0)<<8u));
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (bitcast<i32>((cast1<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  acc0[60] = 0.0f;
  acc0[61] = 0.0f;
  acc0[62] = 0.0f;
  acc0[63] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu65 = ((0<(gidx1+lidx2+Ridx1))&((lidx2+bitcast<i32>((cast1<<4u))+Ridx1)<257));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu66 = (gidx0+Ridx2);
        var alu67 = ((0<alu66)&(alu66<257));
        var alu68 = (alu67&alu65);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu69 = (lidx0+Ridx3);
          var alu70 = (alu69+cast0+bitcast<i32>((bitcast<u32>(Ridx2)<<8u))+alu0+bitcast<i32>((bitcast<u32>(Ridx1)<<16u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_402653184[(alu70+-65793)], ((0<alu69)&alu67&alu65));
          var alu71 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*2592));
          var val1 = data2_15552[(alu71+648)];
          var val2 = data2_15552[(alu71+1296)];
          var val3 = data2_15552[(alu71+1944)];
          var val4 = data2_15552[alu71];
          var val5 = select((f16(0.0f)), data1_402653184[(alu70+-65777)], alu68);
          var val6 = select((f16(0.0f)), data1_402653184[(alu70+-65761)], alu68);
          var val7 = select((f16(0.0f)), data1_402653184[(alu70+-65745)], alu68);
          var val8 = select((f16(0.0f)), data1_402653184[(alu70+-65729)], alu68);
          var val9 = select((f16(0.0f)), data1_402653184[(alu70+-65713)], alu68);
          var val10 = select((f16(0.0f)), data1_402653184[(alu70+-65697)], alu68);
          var val11 = select((f16(0.0f)), data1_402653184[(alu70+-65681)], alu68);
          var val12 = select((f16(0.0f)), data1_402653184[(alu70+-65665)], alu68);
          var val13 = select((f16(0.0f)), data1_402653184[(alu70+-65649)], alu68);
          var val14 = select((f16(0.0f)), data1_402653184[(alu70+-65633)], alu68);
          var val15 = select((f16(0.0f)), data1_402653184[(alu70+-65617)], alu68);
          var val16 = select((f16(0.0f)), data1_402653184[(alu70+-65601)], alu68);
          var val17 = select((f16(0.0f)), data1_402653184[(alu70+-65585)], alu68);
          var val18 = select((f16(0.0f)), data1_402653184[(alu70+-65569)], alu68);
          var val19 = select((f16(0.0f)), data1_402653184[(alu70+-65553)], ((alu69<17)&alu67&alu65));
          acc0[0] = (acc0[0]+(f32((val0*val4))));
          acc0[1] = (acc0[1]+(f32((val0*val1))));
          acc0[2] = (acc0[2]+(f32((val0*val2))));
          acc0[3] = (acc0[3]+(f32((val0*val3))));
          acc0[4] = (acc0[4]+(f32((val5*val4))));
          acc0[5] = (acc0[5]+(f32((val5*val1))));
          acc0[6] = (acc0[6]+(f32((val5*val2))));
          acc0[7] = (acc0[7]+(f32((val5*val3))));
          acc0[8] = (acc0[8]+(f32((val6*val4))));
          acc0[9] = (acc0[9]+(f32((val6*val1))));
          acc0[10] = (acc0[10]+(f32((val6*val2))));
          acc0[11] = (acc0[11]+(f32((val6*val3))));
          acc0[12] = (acc0[12]+(f32((val7*val4))));
          acc0[13] = (acc0[13]+(f32((val7*val1))));
          acc0[14] = (acc0[14]+(f32((val7*val2))));
          acc0[15] = (acc0[15]+(f32((val7*val3))));
          acc0[16] = (acc0[16]+(f32((val8*val4))));
          acc0[17] = (acc0[17]+(f32((val8*val1))));
          acc0[18] = (acc0[18]+(f32((val8*val2))));
          acc0[19] = (acc0[19]+(f32((val8*val3))));
          acc0[20] = (acc0[20]+(f32((val9*val4))));
          acc0[21] = (acc0[21]+(f32((val9*val1))));
          acc0[22] = (acc0[22]+(f32((val9*val2))));
          acc0[23] = (acc0[23]+(f32((val9*val3))));
          acc0[24] = (acc0[24]+(f32((val10*val4))));
          acc0[25] = (acc0[25]+(f32((val10*val1))));
          acc0[26] = (acc0[26]+(f32((val10*val2))));
          acc0[27] = (acc0[27]+(f32((val10*val3))));
          acc0[28] = (acc0[28]+(f32((val11*val4))));
          acc0[29] = (acc0[29]+(f32((val11*val1))));
          acc0[30] = (acc0[30]+(f32((val11*val2))));
          acc0[31] = (acc0[31]+(f32((val11*val3))));
          acc0[32] = (acc0[32]+(f32((val12*val4))));
          acc0[33] = (acc0[33]+(f32((val12*val1))));
          acc0[34] = (acc0[34]+(f32((val12*val2))));
          acc0[35] = (acc0[35]+(f32((val12*val3))));
          acc0[36] = (acc0[36]+(f32((val13*val4))));
          acc0[37] = (acc0[37]+(f32((val13*val1))));
          acc0[38] = (acc0[38]+(f32((val13*val2))));
          acc0[39] = (acc0[39]+(f32((val13*val3))));
          acc0[40] = (acc0[40]+(f32((val14*val4))));
          acc0[41] = (acc0[41]+(f32((val14*val1))));
          acc0[42] = (acc0[42]+(f32((val14*val2))));
          acc0[43] = (acc0[43]+(f32((val14*val3))));
          acc0[44] = (acc0[44]+(f32((val15*val4))));
          acc0[45] = (acc0[45]+(f32((val15*val1))));
          acc0[46] = (acc0[46]+(f32((val15*val2))));
          acc0[47] = (acc0[47]+(f32((val15*val3))));
          acc0[48] = (acc0[48]+(f32((val16*val4))));
          acc0[49] = (acc0[49]+(f32((val16*val1))));
          acc0[50] = (acc0[50]+(f32((val16*val2))));
          acc0[51] = (acc0[51]+(f32((val16*val3))));
          acc0[52] = (acc0[52]+(f32((val17*val4))));
          acc0[53] = (acc0[53]+(f32((val17*val1))));
          acc0[54] = (acc0[54]+(f32((val17*val2))));
          acc0[55] = (acc0[55]+(f32((val17*val3))));
          acc0[56] = (acc0[56]+(f32((val18*val4))));
          acc0[57] = (acc0[57]+(f32((val18*val1))));
          acc0[58] = (acc0[58]+(f32((val18*val2))));
          acc0[59] = (acc0[59]+(f32((val18*val3))));
          acc0[60] = (acc0[60]+(f32((val19*val4))));
          acc0[61] = (acc0[61]+(f32((val19*val1))));
          acc0[62] = (acc0[62]+(f32((val19*val2))));
          acc0[63] = (acc0[63]+(f32((val19*val3))));
        }
      }
    }
  }
  var alu140 = (lidx0+alu0+cast0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<26u)));
  data0_402653184[alu140] = (f32((f16(acc0[0]))));
  data0_402653184[(alu140+16)] = (f32((f16(acc0[4]))));
  data0_402653184[(alu140+32)] = (f32((f16(acc0[8]))));
  data0_402653184[(alu140+48)] = (f32((f16(acc0[12]))));
  data0_402653184[(alu140+64)] = (f32((f16(acc0[16]))));
  data0_402653184[(alu140+80)] = (f32((f16(acc0[20]))));
  data0_402653184[(alu140+96)] = (f32((f16(acc0[24]))));
  data0_402653184[(alu140+112)] = (f32((f16(acc0[28]))));
  data0_402653184[(alu140+128)] = (f32((f16(acc0[32]))));
  data0_402653184[(alu140+144)] = (f32((f16(acc0[36]))));
  data0_402653184[(alu140+160)] = (f32((f16(acc0[40]))));
  data0_402653184[(alu140+176)] = (f32((f16(acc0[44]))));
  data0_402653184[(alu140+192)] = (f32((f16(acc0[48]))));
  data0_402653184[(alu140+208)] = (f32((f16(acc0[52]))));
  data0_402653184[(alu140+224)] = (f32((f16(acc0[56]))));
  data0_402653184[(alu140+240)] = (f32((f16(acc0[60]))));
  data0_402653184[(alu140+16777216)] = (f32((f16(acc0[1]))));
  data0_402653184[(alu140+16777232)] = (f32((f16(acc0[5]))));
  data0_402653184[(alu140+16777248)] = (f32((f16(acc0[9]))));
  data0_402653184[(alu140+16777264)] = (f32((f16(acc0[13]))));
  data0_402653184[(alu140+16777280)] = (f32((f16(acc0[17]))));
  data0_402653184[(alu140+16777296)] = (f32((f16(acc0[21]))));
  data0_402653184[(alu140+16777312)] = (f32((f16(acc0[25]))));
  data0_402653184[(alu140+16777328)] = (f32((f16(acc0[29]))));
  data0_402653184[(alu140+16777344)] = (f32((f16(acc0[33]))));
  data0_402653184[(alu140+16777360)] = (f32((f16(acc0[37]))));
  data0_402653184[(alu140+16777376)] = (f32((f16(acc0[41]))));
  data0_402653184[(alu140+16777392)] = (f32((f16(acc0[45]))));
  data0_402653184[(alu140+16777408)] = (f32((f16(acc0[49]))));
  data0_402653184[(alu140+16777424)] = (f32((f16(acc0[53]))));
  data0_402653184[(alu140+16777440)] = (f32((f16(acc0[57]))));
  data0_402653184[(alu140+16777456)] = (f32((f16(acc0[61]))));
  data0_402653184[(alu140+33554432)] = (f32((f16(acc0[2]))));
  data0_402653184[(alu140+33554448)] = (f32((f16(acc0[6]))));
  data0_402653184[(alu140+33554464)] = (f32((f16(acc0[10]))));
  data0_402653184[(alu140+33554480)] = (f32((f16(acc0[14]))));
  data0_402653184[(alu140+33554496)] = (f32((f16(acc0[18]))));
  data0_402653184[(alu140+33554512)] = (f32((f16(acc0[22]))));
  data0_402653184[(alu140+33554528)] = (f32((f16(acc0[26]))));
  data0_402653184[(alu140+33554544)] = (f32((f16(acc0[30]))));
  data0_402653184[(alu140+33554560)] = (f32((f16(acc0[34]))));
  data0_402653184[(alu140+33554576)] = (f32((f16(acc0[38]))));
  data0_402653184[(alu140+33554592)] = (f32((f16(acc0[42]))));
  data0_402653184[(alu140+33554608)] = (f32((f16(acc0[46]))));
  data0_402653184[(alu140+33554624)] = (f32((f16(acc0[50]))));
  data0_402653184[(alu140+33554640)] = (f32((f16(acc0[54]))));
  data0_402653184[(alu140+33554656)] = (f32((f16(acc0[58]))));
  data0_402653184[(alu140+33554672)] = (f32((f16(acc0[62]))));
  data0_402653184[(alu140+50331648)] = (f32((f16(acc0[3]))));
  data0_402653184[(alu140+50331664)] = (f32((f16(acc0[7]))));
  data0_402653184[(alu140+50331680)] = (f32((f16(acc0[11]))));
  data0_402653184[(alu140+50331696)] = (f32((f16(acc0[15]))));
  data0_402653184[(alu140+50331712)] = (f32((f16(acc0[19]))));
  data0_402653184[(alu140+50331728)] = (f32((f16(acc0[23]))));
  data0_402653184[(alu140+50331744)] = (f32((f16(acc0[27]))));
  data0_402653184[(alu140+50331760)] = (f32((f16(acc0[31]))));
  data0_402653184[(alu140+50331776)] = (f32((f16(acc0[35]))));
  data0_402653184[(alu140+50331792)] = (f32((f16(acc0[39]))));
  data0_402653184[(alu140+50331808)] = (f32((f16(acc0[43]))));
  data0_402653184[(alu140+50331824)] = (f32((f16(acc0[47]))));
  data0_402653184[(alu140+50331840)] = (f32((f16(acc0[51]))));
  data0_402653184[(alu140+50331856)] = (f32((f16(acc0[55]))));
  data0_402653184[(alu140+50331872)] = (f32((f16(acc0[59]))));
  data0_402653184[(alu140+50331888)] = (f32((f16(acc0[63]))));
}`;

const setupNet = async (device, safetensor) => {
    const metadata = getTensorMetadata(safetensor);
    const infinityBuf = createInfinityUniformBuf(device);

    const layouts=[device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]})]

    const buf_0 = createEmptyBuf(device, 1610612736);;
    const input0 = createEmptyBuf(device, 33554432);;
    const buf_1 = createWeightBuf(device, 1296, getTensorBuffer(safetensor, metadata['m.model.0.weight']));
    const buf_2 = createEmptyBuf(device, 6291456);;
    const buf_3 = createEmptyBuf(device, 24576);;
    const buf_4 = createEmptyBuf(device, 96);;
    const buf_5 = createEmptyBuf(device, 96);;
    const buf_6 = createEmptyBuf(device, 805306368);;
    const buf_7 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.1.weight']));
    const buf_8 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.1.bias']));
    const buf_9 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.3.weight']));
    const buf_10 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.4.weight']));
    const buf_11 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.4.bias']));
    const buf_12 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.6.weight']));
    const buf_13 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.7.weight']));
    const buf_14 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.7.bias']));
    const buf_15 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.9.weight']));
    const buf_16 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.10.weight']));
    const buf_17 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.10.bias']));
    const buf_18 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.12.weight']));
    const buf_19 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.13.weight']));
    const buf_20 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.13.bias']));
    const buf_21 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.15.weight']));
    const buf_22 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.16.weight']));
    const buf_23 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.16.bias']));
    const buf_24 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.18.weight']));
    const buf_25 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.19.weight']));
    const buf_26 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.19.bias']));
    const buf_27 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.21.weight']));
    const buf_28 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.22.weight']));
    const buf_29 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.22.bias']));
    const buf_30 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.24.weight']));
    const buf_31 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.25.weight']));
    const buf_32 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.25.bias']));
    const buf_33 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.27.weight']));
    const buf_34 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.28.weight']));
    const buf_35 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.28.bias']));
    const buf_36 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.30.weight']));
    const buf_37 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.31.weight']));
    const buf_38 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.31.bias']));
    const buf_39 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.33.weight']));
    const buf_40 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.34.weight']));
    const buf_41 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.34.bias']));
    const buf_42 = createWeightBuf(device, 31104, getTensorBuffer(safetensor, metadata['m.model.36.weight']));
    // buf_6 is last used by pass 96; this classifier input starts at pass 103.
    const buf_43 = buf_6;
    const buf_44 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.37.weight']));
    const buf_45 = createWeightBuf(device, 48, getTensorBuffer(safetensor, metadata['m.model.37.bias']));
    // buf_0 is last used by pass 103; this classifier scratch starts at pass 104.
    const buf_46 = buf_0;
    const buf_47 = createWeightBuf(device, 864, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.weight']));
    const buf_48 = createWeightBuf(device, 36, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.bias']));
    const buf_49 = createEmptyBuf(device, 33554432);;
    const output0 = createEmptyBuf(device, 67108864);;

    const gpuWriteBuffer0 = device.createBuffer({size:input0.size, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE });

    const gpuReadBuffer0 = device.createBuffer({size:output0.size, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });

    const kernels = [dk_backbone_0, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_7, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_8, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_9, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_10, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_11, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_12, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_11, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_10, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_9, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_8, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_7, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, dk_backbone_13, dk_backbone_1, dk_backbone_2, dk_backbone_3, dk_backbone_4, dk_backbone_2, dk_backbone_5, dk_backbone_6, r_2_262144_3_16_4_3_24, r_131072_32_4_18, r_131072_32_4_18n1];
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
        new Float16Array(gpuWriteBuffer0.getMappedRange()).set(_input0);
        gpuWriteBuffer0.unmap();
        commandEncoder.copyBufferToBuffer(gpuWriteBuffer0, 0, input0, 0, gpuWriteBuffer0.size);
        addComputePass(device, commandEncoder, pipelines[0], layouts[0], infinityBuf, [buf_0, input0, buf_1], [32, 64, 6]);
        addComputePass(device, commandEncoder, pipelines[1], layouts[1], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[2], layouts[2], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[3], layouts[3], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[4], layouts[4], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[5], layouts[5], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[6], layouts[6], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[7], layouts[7], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_7, buf_8], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[8], layouts[8], infinityBuf, [buf_0, buf_6, buf_9], [512, 16, 2]);
        addComputePass(device, commandEncoder, pipelines[9], layouts[9], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[10], layouts[10], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[11], layouts[11], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[12], layouts[12], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[13], layouts[13], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[14], layouts[14], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[15], layouts[15], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_10, buf_11], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[16], layouts[16], infinityBuf, [buf_0, buf_6, buf_12], [4, 256, 16]);
        addComputePass(device, commandEncoder, pipelines[17], layouts[17], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[18], layouts[18], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[19], layouts[19], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[20], layouts[20], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[21], layouts[21], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[22], layouts[22], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[23], layouts[23], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_13, buf_14], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[24], layouts[24], infinityBuf, [buf_0, buf_6, buf_15], [512, 16, 2]);
        addComputePass(device, commandEncoder, pipelines[25], layouts[25], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[26], layouts[26], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[27], layouts[27], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[28], layouts[28], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[29], layouts[29], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[30], layouts[30], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[31], layouts[31], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_16, buf_17], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[32], layouts[32], infinityBuf, [buf_0, buf_6, buf_18], [128, 64, 2]);
        addComputePass(device, commandEncoder, pipelines[33], layouts[33], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[34], layouts[34], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[35], layouts[35], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[36], layouts[36], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[37], layouts[37], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[38], layouts[38], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[39], layouts[39], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_19, buf_20], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[40], layouts[40], infinityBuf, [buf_0, buf_6, buf_21], [4, 256, 16]);
        addComputePass(device, commandEncoder, pipelines[41], layouts[41], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[42], layouts[42], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[43], layouts[43], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[44], layouts[44], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[45], layouts[45], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[46], layouts[46], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[47], layouts[47], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_22, buf_23], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[48], layouts[48], infinityBuf, [buf_0, buf_6, buf_24], [512, 16, 2]);
        addComputePass(device, commandEncoder, pipelines[49], layouts[49], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[50], layouts[50], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[51], layouts[51], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[52], layouts[52], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[53], layouts[53], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[54], layouts[54], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[55], layouts[55], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_25, buf_26], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[56], layouts[56], infinityBuf, [buf_0, buf_6, buf_27], [4, 256, 16]);
        addComputePass(device, commandEncoder, pipelines[57], layouts[57], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[58], layouts[58], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[59], layouts[59], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[60], layouts[60], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[61], layouts[61], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[62], layouts[62], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[63], layouts[63], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_28, buf_29], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[64], layouts[64], infinityBuf, [buf_0, buf_6, buf_30], [128, 64, 2]);
        addComputePass(device, commandEncoder, pipelines[65], layouts[65], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[66], layouts[66], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[67], layouts[67], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[68], layouts[68], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[69], layouts[69], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[70], layouts[70], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[71], layouts[71], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_31, buf_32], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[72], layouts[72], infinityBuf, [buf_0, buf_6, buf_33], [512, 16, 2]);
        addComputePass(device, commandEncoder, pipelines[73], layouts[73], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[74], layouts[74], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[75], layouts[75], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[76], layouts[76], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[77], layouts[77], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[78], layouts[78], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[79], layouts[79], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_34, buf_35], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[80], layouts[80], infinityBuf, [buf_0, buf_6, buf_36], [4, 256, 16]);
        addComputePass(device, commandEncoder, pipelines[81], layouts[81], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[82], layouts[82], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[83], layouts[83], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[84], layouts[84], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[85], layouts[85], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[86], layouts[86], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[87], layouts[87], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_37, buf_38], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[88], layouts[88], infinityBuf, [buf_0, buf_6, buf_39], [512, 16, 2]);
        addComputePass(device, commandEncoder, pipelines[89], layouts[89], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[90], layouts[90], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[91], layouts[91], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[92], layouts[92], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[93], layouts[93], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[94], layouts[94], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[95], layouts[95], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_40, buf_41], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[96], layouts[96], infinityBuf, [buf_0, buf_6, buf_42], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[97], layouts[97], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[98], layouts[98], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[99], layouts[99], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[100], layouts[100], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[101], layouts[101], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[102], layouts[102], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[103], layouts[103], infinityBuf, [buf_43, buf_0, buf_4, buf_5, buf_44, buf_45], [32768, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[104], layouts[104], infinityBuf, [buf_46, buf_43, buf_47, buf_48], [32768, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[105], layouts[105], infinityBuf, [buf_49, buf_46], [32768, 4, 1]);
        addComputePass(device, commandEncoder, pipelines[106], layouts[106], infinityBuf, [output0, buf_46, buf_49], [32768, 4, 1]);
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
export default m24c18_rescale_sched_b0;
