
const model6chan3cls = (() => {
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

const r_256_16_16_16_2_16_3_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_162:array<f16>;
@compute @workgroup_size(16,16,2) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 16 */
  var gidx1 = i32(gindex.y); /* 256 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 2 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<i32>((bitcast<u32>(gidx1)<<16u));
  var alu0 = (bitcast<i32>((cast0<<12u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
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
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    var alu49 = (gidx1+Ridx0);
    var alu50 = ((0<alu49)&(alu49<257));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu51 = ((0<(gidx0+lidx1+Ridx1))&((lidx1+bitcast<i32>((cast0<<4u))+Ridx1)<257));
      var alu52 = (alu51&alu50);
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu53 = (lidx0+Ridx2);
        var alu54 = (alu53+alu0+bitcast<i32>((bitcast<u32>(Ridx1)<<8u))+cast1+bitcast<i32>((bitcast<u32>(Ridx0)<<16u)));
        var val0 = select((f16(0.0f)), data1_16777216[(alu54+-65793)], ((0<alu53)&alu51&alu50));
        var alu55 = ((Ridx1*3)+Ridx2+(Ridx0*9)+(lidx2*81));
        var val1 = data2_162[(alu55+27)];
        var val2 = data2_162[(alu55+54)];
        var val3 = data2_162[alu55];
        var val4 = select((f16(0.0f)), data1_16777216[(alu54+-65777)], alu52);
        var val5 = select((f16(0.0f)), data1_16777216[(alu54+-65761)], alu52);
        var val6 = select((f16(0.0f)), data1_16777216[(alu54+-65745)], alu52);
        var val7 = select((f16(0.0f)), data1_16777216[(alu54+-65729)], alu52);
        var val8 = select((f16(0.0f)), data1_16777216[(alu54+-65713)], alu52);
        var val9 = select((f16(0.0f)), data1_16777216[(alu54+-65697)], alu52);
        var val10 = select((f16(0.0f)), data1_16777216[(alu54+-65681)], alu52);
        var val11 = select((f16(0.0f)), data1_16777216[(alu54+-65665)], alu52);
        var val12 = select((f16(0.0f)), data1_16777216[(alu54+-65649)], alu52);
        var val13 = select((f16(0.0f)), data1_16777216[(alu54+-65633)], alu52);
        var val14 = select((f16(0.0f)), data1_16777216[(alu54+-65617)], alu52);
        var val15 = select((f16(0.0f)), data1_16777216[(alu54+-65601)], alu52);
        var val16 = select((f16(0.0f)), data1_16777216[(alu54+-65585)], alu52);
        var val17 = select((f16(0.0f)), data1_16777216[(alu54+-65569)], alu52);
        var val18 = select((f16(0.0f)), data1_16777216[(alu54+-65553)], ((alu53<17)&alu51&alu50));
        acc0[0] = (acc0[0]+(f32((val0*val3))));
        acc0[1] = (acc0[1]+(f32((val0*val1))));
        acc0[2] = (acc0[2]+(f32((val0*val2))));
        acc0[3] = (acc0[3]+(f32((val4*val3))));
        acc0[4] = (acc0[4]+(f32((val4*val1))));
        acc0[5] = (acc0[5]+(f32((val4*val2))));
        acc0[6] = (acc0[6]+(f32((val5*val3))));
        acc0[7] = (acc0[7]+(f32((val5*val1))));
        acc0[8] = (acc0[8]+(f32((val5*val2))));
        acc0[9] = (acc0[9]+(f32((val6*val3))));
        acc0[10] = (acc0[10]+(f32((val6*val1))));
        acc0[11] = (acc0[11]+(f32((val6*val2))));
        acc0[12] = (acc0[12]+(f32((val7*val3))));
        acc0[13] = (acc0[13]+(f32((val7*val1))));
        acc0[14] = (acc0[14]+(f32((val7*val2))));
        acc0[15] = (acc0[15]+(f32((val8*val3))));
        acc0[16] = (acc0[16]+(f32((val8*val1))));
        acc0[17] = (acc0[17]+(f32((val8*val2))));
        acc0[18] = (acc0[18]+(f32((val9*val3))));
        acc0[19] = (acc0[19]+(f32((val9*val1))));
        acc0[20] = (acc0[20]+(f32((val9*val2))));
        acc0[21] = (acc0[21]+(f32((val10*val3))));
        acc0[22] = (acc0[22]+(f32((val10*val1))));
        acc0[23] = (acc0[23]+(f32((val10*val2))));
        acc0[24] = (acc0[24]+(f32((val11*val3))));
        acc0[25] = (acc0[25]+(f32((val11*val1))));
        acc0[26] = (acc0[26]+(f32((val11*val2))));
        acc0[27] = (acc0[27]+(f32((val12*val3))));
        acc0[28] = (acc0[28]+(f32((val12*val1))));
        acc0[29] = (acc0[29]+(f32((val12*val2))));
        acc0[30] = (acc0[30]+(f32((val13*val3))));
        acc0[31] = (acc0[31]+(f32((val13*val1))));
        acc0[32] = (acc0[32]+(f32((val13*val2))));
        acc0[33] = (acc0[33]+(f32((val14*val3))));
        acc0[34] = (acc0[34]+(f32((val14*val1))));
        acc0[35] = (acc0[35]+(f32((val14*val2))));
        acc0[36] = (acc0[36]+(f32((val15*val3))));
        acc0[37] = (acc0[37]+(f32((val15*val1))));
        acc0[38] = (acc0[38]+(f32((val15*val2))));
        acc0[39] = (acc0[39]+(f32((val16*val3))));
        acc0[40] = (acc0[40]+(f32((val16*val1))));
        acc0[41] = (acc0[41]+(f32((val16*val2))));
        acc0[42] = (acc0[42]+(f32((val17*val3))));
        acc0[43] = (acc0[43]+(f32((val17*val1))));
        acc0[44] = (acc0[44]+(f32((val17*val2))));
        acc0[45] = (acc0[45]+(f32((val18*val3))));
        acc0[46] = (acc0[46]+(f32((val18*val1))));
        acc0[47] = (acc0[47]+(f32((val18*val2))));
      }
    }
  }
  var alu107 = (lidx0+alu0+cast1+(lidx2*50331648));
  data0_100663296[alu107] = (f32((f16(acc0[0]))));
  data0_100663296[(alu107+16)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu107+32)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu107+48)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu107+64)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu107+80)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu107+96)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu107+112)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu107+128)] = (f32((f16(acc0[24]))));
  data0_100663296[(alu107+144)] = (f32((f16(acc0[27]))));
  data0_100663296[(alu107+160)] = (f32((f16(acc0[30]))));
  data0_100663296[(alu107+176)] = (f32((f16(acc0[33]))));
  data0_100663296[(alu107+192)] = (f32((f16(acc0[36]))));
  data0_100663296[(alu107+208)] = (f32((f16(acc0[39]))));
  data0_100663296[(alu107+224)] = (f32((f16(acc0[42]))));
  data0_100663296[(alu107+240)] = (f32((f16(acc0[45]))));
  data0_100663296[(alu107+16777216)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu107+16777232)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu107+16777248)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu107+16777264)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu107+16777280)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu107+16777296)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu107+16777312)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu107+16777328)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu107+16777344)] = (f32((f16(acc0[25]))));
  data0_100663296[(alu107+16777360)] = (f32((f16(acc0[28]))));
  data0_100663296[(alu107+16777376)] = (f32((f16(acc0[31]))));
  data0_100663296[(alu107+16777392)] = (f32((f16(acc0[34]))));
  data0_100663296[(alu107+16777408)] = (f32((f16(acc0[37]))));
  data0_100663296[(alu107+16777424)] = (f32((f16(acc0[40]))));
  data0_100663296[(alu107+16777440)] = (f32((f16(acc0[43]))));
  data0_100663296[(alu107+16777456)] = (f32((f16(acc0[46]))));
  data0_100663296[(alu107+33554432)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu107+33554448)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu107+33554464)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu107+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu107+33554496)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu107+33554512)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu107+33554528)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu107+33554544)] = (f32((f16(acc0[23]))));
  data0_100663296[(alu107+33554560)] = (f32((f16(acc0[26]))));
  data0_100663296[(alu107+33554576)] = (f32((f16(acc0[29]))));
  data0_100663296[(alu107+33554592)] = (f32((f16(acc0[32]))));
  data0_100663296[(alu107+33554608)] = (f32((f16(acc0[35]))));
  data0_100663296[(alu107+33554624)] = (f32((f16(acc0[38]))));
  data0_100663296[(alu107+33554640)] = (f32((f16(acc0[41]))));
  data0_100663296[(alu107+33554656)] = (f32((f16(acc0[44]))));
  data0_100663296[(alu107+33554672)] = (f32((f16(acc0[47]))));
}`;

const r_1536_8_8_16_2_32 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,2048>;
@group(0) @binding(1)var<storage,read_write>data0_393216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f32>;
@compute @workgroup_size(8,8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,2>;
  var gidx0 = i32(gindex.x); /* 1536 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((cast0<<16u))+bitcast<i32>((cast2<<12u))+bitcast<i32>((cast1<<9u)));
  var val0 = data1_100663296[alu0];
  var val1 = data1_100663296[(alu0+8)];
  var val2 = data1_100663296[(alu0+16)];
  var val3 = data1_100663296[(alu0+24)];
  var val4 = data1_100663296[(alu0+32)];
  var val5 = data1_100663296[(alu0+40)];
  var val6 = data1_100663296[(alu0+48)];
  var val7 = data1_100663296[(alu0+56)];
  var val8 = data1_100663296[(alu0+64)];
  var val9 = data1_100663296[(alu0+72)];
  var val10 = data1_100663296[(alu0+80)];
  var val11 = data1_100663296[(alu0+88)];
  var val12 = data1_100663296[(alu0+96)];
  var val13 = data1_100663296[(alu0+104)];
  var val14 = data1_100663296[(alu0+112)];
  var val15 = data1_100663296[(alu0+120)];
  var val16 = data1_100663296[(alu0+128)];
  var val17 = data1_100663296[(alu0+136)];
  var val18 = data1_100663296[(alu0+144)];
  var val19 = data1_100663296[(alu0+152)];
  var val20 = data1_100663296[(alu0+160)];
  var val21 = data1_100663296[(alu0+168)];
  var val22 = data1_100663296[(alu0+176)];
  var val23 = data1_100663296[(alu0+184)];
  var val24 = data1_100663296[(alu0+192)];
  var val25 = data1_100663296[(alu0+200)];
  var val26 = data1_100663296[(alu0+208)];
  var val27 = data1_100663296[(alu0+216)];
  var val28 = data1_100663296[(alu0+224)];
  var val29 = data1_100663296[(alu0+232)];
  var val30 = data1_100663296[(alu0+240)];
  var val31 = data1_100663296[(alu0+248)];
  var val32 = data1_100663296[(alu0+256)];
  var val33 = data1_100663296[(alu0+264)];
  var val34 = data1_100663296[(alu0+272)];
  var val35 = data1_100663296[(alu0+280)];
  var val36 = data1_100663296[(alu0+288)];
  var val37 = data1_100663296[(alu0+296)];
  var val38 = data1_100663296[(alu0+304)];
  var val39 = data1_100663296[(alu0+312)];
  var val40 = data1_100663296[(alu0+320)];
  var val41 = data1_100663296[(alu0+328)];
  var val42 = data1_100663296[(alu0+336)];
  var val43 = data1_100663296[(alu0+344)];
  var val44 = data1_100663296[(alu0+352)];
  var val45 = data1_100663296[(alu0+360)];
  var val46 = data1_100663296[(alu0+368)];
  var val47 = data1_100663296[(alu0+376)];
  var val48 = data1_100663296[(alu0+384)];
  var val49 = data1_100663296[(alu0+392)];
  var val50 = data1_100663296[(alu0+400)];
  var val51 = data1_100663296[(alu0+408)];
  var val52 = data1_100663296[(alu0+416)];
  var val53 = data1_100663296[(alu0+424)];
  var val54 = data1_100663296[(alu0+432)];
  var val55 = data1_100663296[(alu0+440)];
  var val56 = data1_100663296[(alu0+448)];
  var val57 = data1_100663296[(alu0+456)];
  var val58 = data1_100663296[(alu0+464)];
  var val59 = data1_100663296[(alu0+472)];
  var val60 = data1_100663296[(alu0+480)];
  var val61 = data1_100663296[(alu0+488)];
  var val62 = data1_100663296[(alu0+496)];
  var val63 = data1_100663296[(alu0+504)];
  var cast3 = bitcast<i32>((cast1<<4u));
  var cast4 = bitcast<i32>((cast2<<7u));
  var alu1 = (bitcast<i32>((bitcast<u32>(lidx0)<<1u))+cast3+cast4);
  temp0[alu1] = (val0+val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15+val16+val17+val18+val19+val20+val21+val22+val23+val24+val25+val26+val27+val28+val29+val30+val31);
  temp0[(alu1+1)] = (val32+val33+val34+val35+val36+val37+val38+val39+val40+val41+val42+val43+val44+val45+val46+val47+val48+val49+val50+val51+val52+val53+val54+val55+val56+val57+val58+val59+val60+val61+val62+val63);
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
  var alu11 = (bitcast<i32>((cast0<<8u))+bitcast<i32>((cast2<<4u))+bitcast<i32>((cast1<<1u)));
  var alu12 = ((bool(lidx0))!=true);
  if (alu12) {
    data0_393216[alu11] = acc0[0];
  }
  if (alu12) {
    data0_393216[(alu11+1)] = acc0[1];
  }
}`;

const r_96_16_64_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_1536:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_393216:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 96 */
  var lidx0 = i32(lindex.x); /* 16 */
  var cast0 = bitcast<u32>(gidx0);
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu1 = (bitcast<i32>((cast0<<12u))+bitcast<i32>((bitcast<u32>(lidx0)<<8u))+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_393216[alu1];
    var val1 = data1_393216[(alu1+1)];
    var val2 = data1_393216[(alu1+2)];
    var val3 = data1_393216[(alu1+3)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
  }
  data0_1536[(lidx0+bitcast<i32>((cast0<<4u)))] = acc0[0];
}`;

const r_6_64_4 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_6:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1536:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 6 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu1 = (bitcast<i32>((bitcast<u32>(gidx0)<<8u))+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_1536[alu1];
    var val1 = data1_1536[(alu1+1)];
    var val2 = data1_1536[(alu1+2)];
    var val3 = data1_1536[(alu1+3)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
  }
  data0_6[gidx0] = (f32((f16((acc0[0]*5.960464477539063e-08f)))));
}`;

const r_2048_16_8_4_6_16 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,3072>;
@group(0) @binding(1)var<storage,read_write>data0_393216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6:array<f32>;
@compute @workgroup_size(16,8,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,6>;
  var gidx0 = i32(gindex.x); /* 2048 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 4 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((cast0<<13u))+bitcast<i32>((cast1<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
  var val0 = data1_100663296[alu0];
  var val1 = data2_6[0];
  var val2 = data1_100663296[(alu0+16)];
  var val3 = data1_100663296[(alu0+32)];
  var val4 = data1_100663296[(alu0+48)];
  var val5 = data1_100663296[(alu0+64)];
  var val6 = data1_100663296[(alu0+80)];
  var val7 = data1_100663296[(alu0+96)];
  var val8 = data1_100663296[(alu0+112)];
  var val9 = data1_100663296[(alu0+128)];
  var val10 = data1_100663296[(alu0+144)];
  var val11 = data1_100663296[(alu0+160)];
  var val12 = data1_100663296[(alu0+176)];
  var val13 = data1_100663296[(alu0+192)];
  var val14 = data1_100663296[(alu0+208)];
  var val15 = data1_100663296[(alu0+224)];
  var val16 = data1_100663296[(alu0+240)];
  var val17 = data1_100663296[(alu0+16777216)];
  var val18 = data2_6[1];
  var val19 = data1_100663296[(alu0+16777232)];
  var val20 = data1_100663296[(alu0+16777248)];
  var val21 = data1_100663296[(alu0+16777264)];
  var val22 = data1_100663296[(alu0+16777280)];
  var val23 = data1_100663296[(alu0+16777296)];
  var val24 = data1_100663296[(alu0+16777312)];
  var val25 = data1_100663296[(alu0+16777328)];
  var val26 = data1_100663296[(alu0+16777344)];
  var val27 = data1_100663296[(alu0+16777360)];
  var val28 = data1_100663296[(alu0+16777376)];
  var val29 = data1_100663296[(alu0+16777392)];
  var val30 = data1_100663296[(alu0+16777408)];
  var val31 = data1_100663296[(alu0+16777424)];
  var val32 = data1_100663296[(alu0+16777440)];
  var val33 = data1_100663296[(alu0+16777456)];
  var val34 = data1_100663296[(alu0+33554432)];
  var val35 = data2_6[2];
  var val36 = data1_100663296[(alu0+33554448)];
  var val37 = data1_100663296[(alu0+33554464)];
  var val38 = data1_100663296[(alu0+33554480)];
  var val39 = data1_100663296[(alu0+33554496)];
  var val40 = data1_100663296[(alu0+33554512)];
  var val41 = data1_100663296[(alu0+33554528)];
  var val42 = data1_100663296[(alu0+33554544)];
  var val43 = data1_100663296[(alu0+33554560)];
  var val44 = data1_100663296[(alu0+33554576)];
  var val45 = data1_100663296[(alu0+33554592)];
  var val46 = data1_100663296[(alu0+33554608)];
  var val47 = data1_100663296[(alu0+33554624)];
  var val48 = data1_100663296[(alu0+33554640)];
  var val49 = data1_100663296[(alu0+33554656)];
  var val50 = data1_100663296[(alu0+33554672)];
  var val51 = data1_100663296[(alu0+50331648)];
  var val52 = data2_6[3];
  var val53 = data1_100663296[(alu0+50331664)];
  var val54 = data1_100663296[(alu0+50331680)];
  var val55 = data1_100663296[(alu0+50331696)];
  var val56 = data1_100663296[(alu0+50331712)];
  var val57 = data1_100663296[(alu0+50331728)];
  var val58 = data1_100663296[(alu0+50331744)];
  var val59 = data1_100663296[(alu0+50331760)];
  var val60 = data1_100663296[(alu0+50331776)];
  var val61 = data1_100663296[(alu0+50331792)];
  var val62 = data1_100663296[(alu0+50331808)];
  var val63 = data1_100663296[(alu0+50331824)];
  var val64 = data1_100663296[(alu0+50331840)];
  var val65 = data1_100663296[(alu0+50331856)];
  var val66 = data1_100663296[(alu0+50331872)];
  var val67 = data1_100663296[(alu0+50331888)];
  var val68 = data1_100663296[(alu0+67108864)];
  var val69 = data2_6[4];
  var val70 = data1_100663296[(alu0+67108880)];
  var val71 = data1_100663296[(alu0+67108896)];
  var val72 = data1_100663296[(alu0+67108912)];
  var val73 = data1_100663296[(alu0+67108928)];
  var val74 = data1_100663296[(alu0+67108944)];
  var val75 = data1_100663296[(alu0+67108960)];
  var val76 = data1_100663296[(alu0+67108976)];
  var val77 = data1_100663296[(alu0+67108992)];
  var val78 = data1_100663296[(alu0+67109008)];
  var val79 = data1_100663296[(alu0+67109024)];
  var val80 = data1_100663296[(alu0+67109040)];
  var val81 = data1_100663296[(alu0+67109056)];
  var val82 = data1_100663296[(alu0+67109072)];
  var val83 = data1_100663296[(alu0+67109088)];
  var val84 = data1_100663296[(alu0+67109104)];
  var val85 = data1_100663296[(alu0+83886080)];
  var val86 = data2_6[5];
  var val87 = data1_100663296[(alu0+83886096)];
  var val88 = data1_100663296[(alu0+83886112)];
  var val89 = data1_100663296[(alu0+83886128)];
  var val90 = data1_100663296[(alu0+83886144)];
  var val91 = data1_100663296[(alu0+83886160)];
  var val92 = data1_100663296[(alu0+83886176)];
  var val93 = data1_100663296[(alu0+83886192)];
  var val94 = data1_100663296[(alu0+83886208)];
  var val95 = data1_100663296[(alu0+83886224)];
  var val96 = data1_100663296[(alu0+83886240)];
  var val97 = data1_100663296[(alu0+83886256)];
  var val98 = data1_100663296[(alu0+83886272)];
  var val99 = data1_100663296[(alu0+83886288)];
  var val100 = data1_100663296[(alu0+83886304)];
  var val101 = data1_100663296[(alu0+83886320)];
  var alu1 = (lidx1*96);
  var alu2 = (lidx2*768);
  var alu3 = ((lidx0*6)+alu1+alu2);
  var cast2 = (f16(val1));
  var cast3 = (f16(val18));
  var cast4 = (f16(val35));
  var cast5 = (f16(val52));
  var cast6 = (f16(val69));
  var cast7 = (f16(val86));
  var alu4 = ((f16(val0))-cast2);
  var alu5 = ((f16(val2))-cast2);
  var alu6 = ((f16(val3))-cast2);
  var alu7 = ((f16(val4))-cast2);
  var alu8 = ((f16(val5))-cast2);
  var alu9 = ((f16(val6))-cast2);
  var alu10 = ((f16(val7))-cast2);
  var alu11 = ((f16(val8))-cast2);
  var alu12 = ((f16(val9))-cast2);
  var alu13 = ((f16(val10))-cast2);
  var alu14 = ((f16(val11))-cast2);
  var alu15 = ((f16(val12))-cast2);
  var alu16 = ((f16(val13))-cast2);
  var alu17 = ((f16(val14))-cast2);
  var alu18 = ((f16(val15))-cast2);
  var alu19 = ((f16(val16))-cast2);
  var alu20 = ((f16(val17))-cast3);
  var alu21 = ((f16(val19))-cast3);
  var alu22 = ((f16(val20))-cast3);
  var alu23 = ((f16(val21))-cast3);
  var alu24 = ((f16(val22))-cast3);
  var alu25 = ((f16(val23))-cast3);
  var alu26 = ((f16(val24))-cast3);
  var alu27 = ((f16(val25))-cast3);
  var alu28 = ((f16(val26))-cast3);
  var alu29 = ((f16(val27))-cast3);
  var alu30 = ((f16(val28))-cast3);
  var alu31 = ((f16(val29))-cast3);
  var alu32 = ((f16(val30))-cast3);
  var alu33 = ((f16(val31))-cast3);
  var alu34 = ((f16(val32))-cast3);
  var alu35 = ((f16(val33))-cast3);
  var alu36 = ((f16(val34))-cast4);
  var alu37 = ((f16(val36))-cast4);
  var alu38 = ((f16(val37))-cast4);
  var alu39 = ((f16(val38))-cast4);
  var alu40 = ((f16(val39))-cast4);
  var alu41 = ((f16(val40))-cast4);
  var alu42 = ((f16(val41))-cast4);
  var alu43 = ((f16(val42))-cast4);
  var alu44 = ((f16(val43))-cast4);
  var alu45 = ((f16(val44))-cast4);
  var alu46 = ((f16(val45))-cast4);
  var alu47 = ((f16(val46))-cast4);
  var alu48 = ((f16(val47))-cast4);
  var alu49 = ((f16(val48))-cast4);
  var alu50 = ((f16(val49))-cast4);
  var alu51 = ((f16(val50))-cast4);
  var alu52 = ((f16(val51))-cast5);
  var alu53 = ((f16(val53))-cast5);
  var alu54 = ((f16(val54))-cast5);
  var alu55 = ((f16(val55))-cast5);
  var alu56 = ((f16(val56))-cast5);
  var alu57 = ((f16(val57))-cast5);
  var alu58 = ((f16(val58))-cast5);
  var alu59 = ((f16(val59))-cast5);
  var alu60 = ((f16(val60))-cast5);
  var alu61 = ((f16(val61))-cast5);
  var alu62 = ((f16(val62))-cast5);
  var alu63 = ((f16(val63))-cast5);
  var alu64 = ((f16(val64))-cast5);
  var alu65 = ((f16(val65))-cast5);
  var alu66 = ((f16(val66))-cast5);
  var alu67 = ((f16(val67))-cast5);
  var alu68 = ((f16(val68))-cast6);
  var alu69 = ((f16(val70))-cast6);
  var alu70 = ((f16(val71))-cast6);
  var alu71 = ((f16(val72))-cast6);
  var alu72 = ((f16(val73))-cast6);
  var alu73 = ((f16(val74))-cast6);
  var alu74 = ((f16(val75))-cast6);
  var alu75 = ((f16(val76))-cast6);
  var alu76 = ((f16(val77))-cast6);
  var alu77 = ((f16(val78))-cast6);
  var alu78 = ((f16(val79))-cast6);
  var alu79 = ((f16(val80))-cast6);
  var alu80 = ((f16(val81))-cast6);
  var alu81 = ((f16(val82))-cast6);
  var alu82 = ((f16(val83))-cast6);
  var alu83 = ((f16(val84))-cast6);
  var alu84 = ((f16(val85))-cast7);
  var alu85 = ((f16(val87))-cast7);
  var alu86 = ((f16(val88))-cast7);
  var alu87 = ((f16(val89))-cast7);
  var alu88 = ((f16(val90))-cast7);
  var alu89 = ((f16(val91))-cast7);
  var alu90 = ((f16(val92))-cast7);
  var alu91 = ((f16(val93))-cast7);
  var alu92 = ((f16(val94))-cast7);
  var alu93 = ((f16(val95))-cast7);
  var alu94 = ((f16(val96))-cast7);
  var alu95 = ((f16(val97))-cast7);
  var alu96 = ((f16(val98))-cast7);
  var alu97 = ((f16(val99))-cast7);
  var alu98 = ((f16(val100))-cast7);
  var alu99 = ((f16(val101))-cast7);
  temp0[(alu3+1)] = ((f32((alu20*alu20)))+(f32((alu21*alu21)))+(f32((alu22*alu22)))+(f32((alu23*alu23)))+(f32((alu24*alu24)))+(f32((alu25*alu25)))+(f32((alu26*alu26)))+(f32((alu27*alu27)))+(f32((alu28*alu28)))+(f32((alu29*alu29)))+(f32((alu30*alu30)))+(f32((alu31*alu31)))+(f32((alu32*alu32)))+(f32((alu33*alu33)))+(f32((alu34*alu34)))+(f32((alu35*alu35))));
  temp0[(alu3+2)] = ((f32((alu36*alu36)))+(f32((alu37*alu37)))+(f32((alu38*alu38)))+(f32((alu39*alu39)))+(f32((alu40*alu40)))+(f32((alu41*alu41)))+(f32((alu42*alu42)))+(f32((alu43*alu43)))+(f32((alu44*alu44)))+(f32((alu45*alu45)))+(f32((alu46*alu46)))+(f32((alu47*alu47)))+(f32((alu48*alu48)))+(f32((alu49*alu49)))+(f32((alu50*alu50)))+(f32((alu51*alu51))));
  temp0[(alu3+3)] = ((f32((alu52*alu52)))+(f32((alu53*alu53)))+(f32((alu54*alu54)))+(f32((alu55*alu55)))+(f32((alu56*alu56)))+(f32((alu57*alu57)))+(f32((alu58*alu58)))+(f32((alu59*alu59)))+(f32((alu60*alu60)))+(f32((alu61*alu61)))+(f32((alu62*alu62)))+(f32((alu63*alu63)))+(f32((alu64*alu64)))+(f32((alu65*alu65)))+(f32((alu66*alu66)))+(f32((alu67*alu67))));
  temp0[(alu3+4)] = ((f32((alu68*alu68)))+(f32((alu69*alu69)))+(f32((alu70*alu70)))+(f32((alu71*alu71)))+(f32((alu72*alu72)))+(f32((alu73*alu73)))+(f32((alu74*alu74)))+(f32((alu75*alu75)))+(f32((alu76*alu76)))+(f32((alu77*alu77)))+(f32((alu78*alu78)))+(f32((alu79*alu79)))+(f32((alu80*alu80)))+(f32((alu81*alu81)))+(f32((alu82*alu82)))+(f32((alu83*alu83))));
  temp0[(alu3+5)] = ((f32((alu84*alu84)))+(f32((alu85*alu85)))+(f32((alu86*alu86)))+(f32((alu87*alu87)))+(f32((alu88*alu88)))+(f32((alu89*alu89)))+(f32((alu90*alu90)))+(f32((alu91*alu91)))+(f32((alu92*alu92)))+(f32((alu93*alu93)))+(f32((alu94*alu94)))+(f32((alu95*alu95)))+(f32((alu96*alu96)))+(f32((alu97*alu97)))+(f32((alu98*alu98)))+(f32((alu99*alu99))));
  temp0[alu3] = ((f32((alu4*alu4)))+(f32((alu5*alu5)))+(f32((alu6*alu6)))+(f32((alu7*alu7)))+(f32((alu8*alu8)))+(f32((alu9*alu9)))+(f32((alu10*alu10)))+(f32((alu11*alu11)))+(f32((alu12*alu12)))+(f32((alu13*alu13)))+(f32((alu14*alu14)))+(f32((alu15*alu15)))+(f32((alu16*alu16)))+(f32((alu17*alu17)))+(f32((alu18*alu18)))+(f32((alu19*alu19))));
  workgroupBarrier();
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  acc0[4] = 0.0f;
  acc0[5] = 0.0f;
  for (var Ridx103 = 0; Ridx103 < 16; Ridx103++) {
    var alu113 = (alu1+(Ridx103*6)+alu2);
    var val102 = temp0[(alu113+2)];
    var val103 = temp0[alu113];
    var val104 = temp0[(alu113+1)];
    var val105 = temp0[(alu113+3)];
    var val106 = temp0[(alu113+4)];
    var val107 = temp0[(alu113+5)];
    acc0[0] = (acc0[0]+val103);
    acc0[1] = (acc0[1]+val104);
    acc0[2] = (acc0[2]+val102);
    acc0[3] = (acc0[3]+val105);
    acc0[4] = (acc0[4]+val106);
    acc0[5] = (acc0[5]+val107);
  }
  var alu121 = (lidx1+bitcast<i32>((cast0<<5u))+bitcast<i32>((cast1<<3u)));
  var alu122 = ((bool(lidx0))!=true);
  if (alu122) {
    data0_393216[alu121] = acc0[0];
  }
  if (alu122) {
    data0_393216[(alu121+65536)] = acc0[1];
  }
  if (alu122) {
    data0_393216[(alu121+131072)] = acc0[2];
  }
  if (alu122) {
    data0_393216[(alu121+196608)] = acc0[3];
  }
  if (alu122) {
    data0_393216[(alu121+262144)] = acc0[4];
  }
  if (alu122) {
    data0_393216[(alu121+327680)] = acc0[5];
  }
}`;

const r_6_64_4n1 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_6:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1536:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 6 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var alu1 = (bitcast<i32>((bitcast<u32>(gidx0)<<8u))+bitcast<i32>((bitcast<u32>(Ridx0)<<2u)));
    var val0 = data1_1536[alu1];
    var val1 = data1_1536[(alu1+1)];
    var val2 = data1_1536[(alu1+2)];
    var val3 = data1_1536[(alu1+3)];
    acc0[0] = (acc0[0]+val0+val1+val2+val3);
  }
  data0_6[gidx0] = (f32((1/sqrt(((f16((acc0[0]*5.960464477539063e-08f)))+(f16(1e-05f)))))));
}`;

const E_6_524288_16_2 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_6:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_6:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_6:array<f16>;
@group(0) @binding(6)var<storage,read_write>data5_6:array<f16>;
@compute @workgroup_size(16,2) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx1 = i32(gindex.y); /* 96 */
  var alu0 = ((gidx1*43)>>8u);
  var alu1 = (gidx1-(6*alu0));
  var val0 = data4_6[alu1];
  var val1 = data5_6[alu1];
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var alu2 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<5u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u))+bitcast<i32>((bitcast<u32>(alu1)<<24u)));
  var val2 = data1_100663296[alu2];
  var val3 = data2_6[alu1];
  var val4 = data3_6[alu1];
  var alu3 = ((((f16(val2))-(f16(val3)))*(f16(val4))*val0)+val1);
  data0_100663296[alu2] = ((1/((f16(1.0f))+exp2(((alu3+((f16(0.044715f))*alu3*alu3*alu3))*(f16(-2.302208198144325f))))))*alu3);
}`;

const r_2_8_256_16_2_16_16_3_6_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 8 */
  var gidx2 = i32(gindex.z); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx0)<<8u));
  var cast1 = bitcast<u32>(gidx1);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (bitcast<i32>((cast1<<21u))+bitcast<i32>((cast2<<17u))+bitcast<i32>((bitcast<u32>(lidx1)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu49 = (lidx1+bitcast<i32>((cast1<<5u))+bitcast<i32>((cast2<<1u))+(Ridx1*3));
      var alu50 = ((2<alu49)&(alu49<259));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu51 = (Ridx2*3);
        var alu52 = (gidx0+alu51);
        var alu53 = ((2<alu52)&(alu52<259));
        var alu54 = (alu53&alu50);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu55 = (lidx0+(Ridx3*3));
          var alu56 = (alu55+cast0+(Ridx2*768)+alu0+(Ridx1*196608)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu56+-197379)], ((2<alu55)&alu53&alu50));
          var alu57 = (alu51+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*486));
          var val1 = data2_972[(alu57+162)];
          var val2 = data2_972[(alu57+324)];
          var val3 = data2_972[alu57];
          var val4 = select((f16(0.0f)), data1_100663296[(alu56+-197363)], alu54);
          var val5 = select((f16(0.0f)), data1_100663296[(alu56+-197347)], alu54);
          var val6 = select((f16(0.0f)), data1_100663296[(alu56+-197331)], alu54);
          var val7 = select((f16(0.0f)), data1_100663296[(alu56+-197315)], alu54);
          var val8 = select((f16(0.0f)), data1_100663296[(alu56+-197299)], alu54);
          var val9 = select((f16(0.0f)), data1_100663296[(alu56+-197283)], alu54);
          var val10 = select((f16(0.0f)), data1_100663296[(alu56+-197267)], alu54);
          var val11 = select((f16(0.0f)), data1_100663296[(alu56+-197251)], alu54);
          var val12 = select((f16(0.0f)), data1_100663296[(alu56+-197235)], alu54);
          var val13 = select((f16(0.0f)), data1_100663296[(alu56+-197219)], alu54);
          var val14 = select((f16(0.0f)), data1_100663296[(alu56+-197203)], alu54);
          var val15 = select((f16(0.0f)), data1_100663296[(alu56+-197187)], alu54);
          var val16 = select((f16(0.0f)), data1_100663296[(alu56+-197171)], alu54);
          var val17 = select((f16(0.0f)), data1_100663296[(alu56+-197155)], alu54);
          var val18 = select((f16(0.0f)), data1_100663296[(alu56+-197139)], ((alu55<19)&alu53&alu50));
          acc0[0] = (acc0[0]+(f32((val0*val3))));
          acc0[1] = (acc0[1]+(f32((val0*val1))));
          acc0[2] = (acc0[2]+(f32((val0*val2))));
          acc0[3] = (acc0[3]+(f32((val4*val3))));
          acc0[4] = (acc0[4]+(f32((val4*val1))));
          acc0[5] = (acc0[5]+(f32((val4*val2))));
          acc0[6] = (acc0[6]+(f32((val5*val3))));
          acc0[7] = (acc0[7]+(f32((val5*val1))));
          acc0[8] = (acc0[8]+(f32((val5*val2))));
          acc0[9] = (acc0[9]+(f32((val6*val3))));
          acc0[10] = (acc0[10]+(f32((val6*val1))));
          acc0[11] = (acc0[11]+(f32((val6*val2))));
          acc0[12] = (acc0[12]+(f32((val7*val3))));
          acc0[13] = (acc0[13]+(f32((val7*val1))));
          acc0[14] = (acc0[14]+(f32((val7*val2))));
          acc0[15] = (acc0[15]+(f32((val8*val3))));
          acc0[16] = (acc0[16]+(f32((val8*val1))));
          acc0[17] = (acc0[17]+(f32((val8*val2))));
          acc0[18] = (acc0[18]+(f32((val9*val3))));
          acc0[19] = (acc0[19]+(f32((val9*val1))));
          acc0[20] = (acc0[20]+(f32((val9*val2))));
          acc0[21] = (acc0[21]+(f32((val10*val3))));
          acc0[22] = (acc0[22]+(f32((val10*val1))));
          acc0[23] = (acc0[23]+(f32((val10*val2))));
          acc0[24] = (acc0[24]+(f32((val11*val3))));
          acc0[25] = (acc0[25]+(f32((val11*val1))));
          acc0[26] = (acc0[26]+(f32((val11*val2))));
          acc0[27] = (acc0[27]+(f32((val12*val3))));
          acc0[28] = (acc0[28]+(f32((val12*val1))));
          acc0[29] = (acc0[29]+(f32((val12*val2))));
          acc0[30] = (acc0[30]+(f32((val13*val3))));
          acc0[31] = (acc0[31]+(f32((val13*val1))));
          acc0[32] = (acc0[32]+(f32((val13*val2))));
          acc0[33] = (acc0[33]+(f32((val14*val3))));
          acc0[34] = (acc0[34]+(f32((val14*val1))));
          acc0[35] = (acc0[35]+(f32((val14*val2))));
          acc0[36] = (acc0[36]+(f32((val15*val3))));
          acc0[37] = (acc0[37]+(f32((val15*val1))));
          acc0[38] = (acc0[38]+(f32((val15*val2))));
          acc0[39] = (acc0[39]+(f32((val16*val3))));
          acc0[40] = (acc0[40]+(f32((val16*val1))));
          acc0[41] = (acc0[41]+(f32((val16*val2))));
          acc0[42] = (acc0[42]+(f32((val17*val3))));
          acc0[43] = (acc0[43]+(f32((val17*val1))));
          acc0[44] = (acc0[44]+(f32((val17*val2))));
          acc0[45] = (acc0[45]+(f32((val18*val3))));
          acc0[46] = (acc0[46]+(f32((val18*val1))));
          acc0[47] = (acc0[47]+(f32((val18*val2))));
        }
      }
    }
  }
  var alu110 = (lidx0+alu0+cast0+(gidx2*50331648));
  data0_100663296[alu110] = (f32((f16(acc0[0]))));
  data0_100663296[(alu110+16)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu110+32)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu110+48)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu110+64)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu110+80)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu110+96)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu110+112)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu110+128)] = (f32((f16(acc0[24]))));
  data0_100663296[(alu110+144)] = (f32((f16(acc0[27]))));
  data0_100663296[(alu110+160)] = (f32((f16(acc0[30]))));
  data0_100663296[(alu110+176)] = (f32((f16(acc0[33]))));
  data0_100663296[(alu110+192)] = (f32((f16(acc0[36]))));
  data0_100663296[(alu110+208)] = (f32((f16(acc0[39]))));
  data0_100663296[(alu110+224)] = (f32((f16(acc0[42]))));
  data0_100663296[(alu110+240)] = (f32((f16(acc0[45]))));
  data0_100663296[(alu110+16777216)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu110+16777232)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu110+16777248)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu110+16777264)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu110+16777280)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu110+16777296)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu110+16777312)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu110+16777328)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu110+16777344)] = (f32((f16(acc0[25]))));
  data0_100663296[(alu110+16777360)] = (f32((f16(acc0[28]))));
  data0_100663296[(alu110+16777376)] = (f32((f16(acc0[31]))));
  data0_100663296[(alu110+16777392)] = (f32((f16(acc0[34]))));
  data0_100663296[(alu110+16777408)] = (f32((f16(acc0[37]))));
  data0_100663296[(alu110+16777424)] = (f32((f16(acc0[40]))));
  data0_100663296[(alu110+16777440)] = (f32((f16(acc0[43]))));
  data0_100663296[(alu110+16777456)] = (f32((f16(acc0[46]))));
  data0_100663296[(alu110+33554432)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu110+33554448)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu110+33554464)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu110+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu110+33554496)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu110+33554512)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu110+33554528)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu110+33554544)] = (f32((f16(acc0[23]))));
  data0_100663296[(alu110+33554560)] = (f32((f16(acc0[26]))));
  data0_100663296[(alu110+33554576)] = (f32((f16(acc0[29]))));
  data0_100663296[(alu110+33554592)] = (f32((f16(acc0[32]))));
  data0_100663296[(alu110+33554608)] = (f32((f16(acc0[35]))));
  data0_100663296[(alu110+33554624)] = (f32((f16(acc0[38]))));
  data0_100663296[(alu110+33554640)] = (f32((f16(acc0[41]))));
  data0_100663296[(alu110+33554656)] = (f32((f16(acc0[44]))));
  data0_100663296[(alu110+33554672)] = (f32((f16(acc0[47]))));
}`;

const r_4_256_4_16_2_32_6_4_6_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 4 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast1<<22u))+bitcast<i32>((cast2<<17u))+bitcast<i32>((bitcast<u32>(lidx1)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu26 = (lidx1+bitcast<i32>((cast1<<6u))+bitcast<i32>((cast2<<1u))+(Ridx1*5));
      var alu27 = ((4<alu26)&(alu26<261));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu28 = (gidx1+(Ridx2*5));
        var alu29 = ((4<alu28)&(alu28<261));
        var alu30 = (alu29&alu27);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu31 = (alu0+(Ridx3*5));
          var alu32 = (alu31+cast0+(Ridx2*1280)+alu1+(Ridx1*327680)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu32+-328965)], ((4<alu31)&alu29&alu27));
          var alu33 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_972[alu33];
          var val2 = select((f16(0.0f)), data1_100663296[(alu32+-328949)], alu30);
          var val3 = select((f16(0.0f)), data1_100663296[(alu32+-328933)], alu30);
          var val4 = select((f16(0.0f)), data1_100663296[(alu32+-328917)], ((alu31<213)&alu29&alu27));
          var val5 = data2_972[(alu33+162)];
          var val6 = data2_972[(alu33+324)];
          var val7 = data2_972[(alu33+486)];
          var val8 = data2_972[(alu33+648)];
          var val9 = data2_972[(alu33+810)];
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
        }
      }
    }
  }
  var alu62 = (alu0+alu1+cast0);
  data0_100663296[alu62] = (f32((f16(acc0[0]))));
  data0_100663296[(alu62+16)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu62+32)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu62+48)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu62+16777216)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu62+16777232)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu62+16777248)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu62+16777264)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu62+33554432)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu62+33554448)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu62+33554464)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu62+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu62+50331648)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu62+50331664)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu62+50331680)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu62+50331696)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu62+67108864)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu62+67108880)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu62+67108896)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu62+67108912)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu62+83886080)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu62+83886096)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu62+83886112)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu62+83886128)] = (f32((f16(acc0[23]))));
}`;

const r_4_256_4_16_2_32_6_4_6_3_3_3n1 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 4 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast1<<22u))+bitcast<i32>((cast2<<17u))+bitcast<i32>((bitcast<u32>(lidx1)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu26 = (lidx1+bitcast<i32>((cast1<<6u))+bitcast<i32>((cast2<<1u))+(Ridx1*7));
      var alu27 = ((6<alu26)&(alu26<263));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu28 = (gidx1+(Ridx2*7));
        var alu29 = ((6<alu28)&(alu28<263));
        var alu30 = (alu29&alu27);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu31 = (alu0+(Ridx3*7));
          var alu32 = (alu31+cast0+(Ridx2*1792)+alu1+(Ridx1*458752)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu32+-460551)], ((6<alu31)&alu29&alu27));
          var alu33 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_972[alu33];
          var val2 = select((f16(0.0f)), data1_100663296[(alu32+-460535)], alu30);
          var val3 = select((f16(0.0f)), data1_100663296[(alu32+-460519)], alu30);
          var val4 = select((f16(0.0f)), data1_100663296[(alu32+-460503)], ((alu31<215)&alu29&alu27));
          var val5 = data2_972[(alu33+162)];
          var val6 = data2_972[(alu33+324)];
          var val7 = data2_972[(alu33+486)];
          var val8 = data2_972[(alu33+648)];
          var val9 = data2_972[(alu33+810)];
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
        }
      }
    }
  }
  var alu62 = (alu0+alu1+cast0);
  data0_100663296[alu62] = (f32((f16(acc0[0]))));
  data0_100663296[(alu62+16)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu62+32)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu62+48)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu62+16777216)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu62+16777232)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu62+16777248)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu62+16777264)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu62+33554432)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu62+33554448)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu62+33554464)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu62+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu62+50331648)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu62+50331664)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu62+50331680)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu62+50331696)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu62+67108864)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu62+67108880)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu62+67108896)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu62+67108912)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu62+83886080)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu62+83886096)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu62+83886112)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu62+83886128)] = (f32((f16(acc0[23]))));
}`;

const r_4_256_4_16_2_32_6_4_6_3_3_3n2 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 4 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast1<<22u))+bitcast<i32>((cast2<<17u))+bitcast<i32>((bitcast<u32>(lidx1)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu26 = (lidx1+bitcast<i32>((cast1<<6u))+bitcast<i32>((cast2<<1u))+(Ridx1*13));
      var alu27 = ((12<alu26)&(alu26<269));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu28 = (gidx1+(Ridx2*13));
        var alu29 = ((12<alu28)&(alu28<269));
        var alu30 = (alu29&alu27);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu31 = (alu0+(Ridx3*13));
          var alu32 = (alu31+cast0+(Ridx2*3328)+alu1+(Ridx1*851968)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu32+-855309)], ((12<alu31)&alu29&alu27));
          var alu33 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_972[alu33];
          var val2 = select((f16(0.0f)), data1_100663296[(alu32+-855293)], alu30);
          var val3 = select((f16(0.0f)), data1_100663296[(alu32+-855277)], alu30);
          var val4 = select((f16(0.0f)), data1_100663296[(alu32+-855261)], ((alu31<221)&alu29&alu27));
          var val5 = data2_972[(alu33+162)];
          var val6 = data2_972[(alu33+324)];
          var val7 = data2_972[(alu33+486)];
          var val8 = data2_972[(alu33+648)];
          var val9 = data2_972[(alu33+810)];
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
        }
      }
    }
  }
  var alu62 = (alu0+alu1+cast0);
  data0_100663296[alu62] = (f32((f16(acc0[0]))));
  data0_100663296[(alu62+16)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu62+32)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu62+48)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu62+16777216)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu62+16777232)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu62+16777248)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu62+16777264)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu62+33554432)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu62+33554448)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu62+33554464)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu62+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu62+50331648)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu62+50331664)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu62+50331680)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu62+50331696)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu62+67108864)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu62+67108880)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu62+67108896)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu62+67108912)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu62+83886080)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu62+83886096)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu62+83886112)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu62+83886128)] = (f32((f16(acc0[23]))));
}`;

const r_8_128_4_16_2_32_6_4_6_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 128 */
  var gidx2 = i32(gindex.z); /* 8 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<u32>(gidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast0<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u)));
  var alu2 = (bitcast<i32>((cast1<<21u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu27 = (lidx2+bitcast<i32>((cast1<<5u))+(Ridx1*19));
      var alu28 = ((18<alu27)&(alu27<275));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu29 = (lidx1+bitcast<i32>((cast0<<1u))+(Ridx2*19));
        var alu30 = ((18<alu29)&(alu29<275));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu31 = (alu0+(Ridx3*19));
          var alu32 = (alu31+alu1+(Ridx2*4864)+alu2+(Ridx1*1245184)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu32+-1250067)], ((18<alu31)&alu30&alu28));
          var alu33 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_972[alu33];
          var val2 = select((f16(0.0f)), data1_100663296[(alu32+-1250051)], ((2<alu31)&alu30&alu28));
          var val3 = select((f16(0.0f)), data1_100663296[(alu32+-1250035)], ((alu31<243)&alu30&alu28));
          var val4 = select((f16(0.0f)), data1_100663296[(alu32+-1250019)], ((alu31<227)&alu30&alu28));
          var val5 = data2_972[(alu33+162)];
          var val6 = data2_972[(alu33+324)];
          var val7 = data2_972[(alu33+486)];
          var val8 = data2_972[(alu33+648)];
          var val9 = data2_972[(alu33+810)];
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
        }
      }
    }
  }
  var alu62 = (alu0+alu1+alu2);
  data0_100663296[alu62] = (f32((f16(acc0[0]))));
  data0_100663296[(alu62+16)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu62+32)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu62+48)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu62+16777216)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu62+16777232)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu62+16777248)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu62+16777264)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu62+33554432)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu62+33554448)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu62+33554464)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu62+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu62+50331648)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu62+50331664)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu62+50331680)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu62+50331696)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu62+67108864)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu62+67108880)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu62+67108896)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu62+67108912)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu62+83886080)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu62+83886096)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu62+83886112)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu62+83886128)] = (f32((f16(acc0[23]))));
}`;

const r_4_256_4_16_2_32_6_4_6_3_3_3n3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 4 */
  var gidx1 = i32(gindex.y); /* 256 */
  var gidx2 = i32(gindex.z); /* 4 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 32 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx1)<<8u));
  var cast1 = bitcast<u32>(gidx2);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<6u)));
  var alu1 = (bitcast<i32>((cast1<<22u))+bitcast<i32>((cast2<<17u))+bitcast<i32>((bitcast<u32>(lidx1)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu26 = (lidx1+bitcast<i32>((cast1<<6u))+bitcast<i32>((cast2<<1u))+(Ridx1*31));
      var alu27 = ((30<alu26)&(alu26<287));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu28 = (gidx1+(Ridx2*31));
        var alu29 = ((30<alu28)&(alu28<287));
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu30 = (alu0+(Ridx3*31));
          var alu31 = (alu30+cast0+(Ridx2*7936)+alu1+(Ridx1*2031616)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu31+-2039583)], ((30<alu30)&alu29&alu27));
          var alu32 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27));
          var val1 = data2_972[alu32];
          var val2 = select((f16(0.0f)), data1_100663296[(alu31+-2039567)], ((14<alu30)&alu29&alu27));
          var val3 = select((f16(0.0f)), data1_100663296[(alu31+-2039551)], ((alu30<255)&alu29&alu27));
          var val4 = select((f16(0.0f)), data1_100663296[(alu31+-2039535)], ((alu30<239)&alu29&alu27));
          var val5 = data2_972[(alu32+162)];
          var val6 = data2_972[(alu32+324)];
          var val7 = data2_972[(alu32+486)];
          var val8 = data2_972[(alu32+648)];
          var val9 = data2_972[(alu32+810)];
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
        }
      }
    }
  }
  var alu61 = (alu0+alu1+cast0);
  data0_100663296[alu61] = (f32((f16(acc0[0]))));
  data0_100663296[(alu61+16)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu61+32)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu61+48)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu61+16777216)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu61+16777232)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu61+16777248)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu61+16777264)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu61+33554432)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu61+33554448)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu61+33554464)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu61+33554480)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu61+50331648)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu61+50331664)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu61+50331680)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu61+50331696)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu61+67108864)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu61+67108880)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu61+67108896)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu61+67108912)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu61+83886080)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu61+83886096)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu61+83886112)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu61+83886128)] = (f32((f16(acc0[23]))));
}`;

const r_16_256_16_2_16_16_3_6_3_3_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_100663296:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_972:array<f16>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,48>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 16 */
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu49 = ((0<(gidx1+lidx2+Ridx1))&((lidx2+bitcast<i32>((cast1<<4u))+Ridx1)<257));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu50 = (gidx0+Ridx2);
        var alu51 = ((0<alu50)&(alu50<257));
        var alu52 = (alu51&alu49);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu53 = (lidx0+Ridx3);
          var alu54 = (alu53+cast0+bitcast<i32>((bitcast<u32>(Ridx2)<<8u))+alu0+bitcast<i32>((bitcast<u32>(Ridx1)<<16u))+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select((f16(0.0f)), data1_100663296[(alu54+-65793)], ((0<alu53)&alu51&alu49));
          var alu55 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(lidx1*162));
          var val1 = data2_972[(alu55+324)];
          var val2 = data2_972[(alu55+648)];
          var val3 = data2_972[alu55];
          var val4 = select((f16(0.0f)), data1_100663296[(alu54+-65777)], alu52);
          var val5 = select((f16(0.0f)), data1_100663296[(alu54+-65761)], alu52);
          var val6 = select((f16(0.0f)), data1_100663296[(alu54+-65745)], alu52);
          var val7 = select((f16(0.0f)), data1_100663296[(alu54+-65729)], alu52);
          var val8 = select((f16(0.0f)), data1_100663296[(alu54+-65713)], alu52);
          var val9 = select((f16(0.0f)), data1_100663296[(alu54+-65697)], alu52);
          var val10 = select((f16(0.0f)), data1_100663296[(alu54+-65681)], alu52);
          var val11 = select((f16(0.0f)), data1_100663296[(alu54+-65665)], alu52);
          var val12 = select((f16(0.0f)), data1_100663296[(alu54+-65649)], alu52);
          var val13 = select((f16(0.0f)), data1_100663296[(alu54+-65633)], alu52);
          var val14 = select((f16(0.0f)), data1_100663296[(alu54+-65617)], alu52);
          var val15 = select((f16(0.0f)), data1_100663296[(alu54+-65601)], alu52);
          var val16 = select((f16(0.0f)), data1_100663296[(alu54+-65585)], alu52);
          var val17 = select((f16(0.0f)), data1_100663296[(alu54+-65569)], alu52);
          var val18 = select((f16(0.0f)), data1_100663296[(alu54+-65553)], ((alu53<17)&alu51&alu49));
          acc0[0] = (acc0[0]+(f32((val0*val3))));
          acc0[1] = (acc0[1]+(f32((val0*val1))));
          acc0[2] = (acc0[2]+(f32((val0*val2))));
          acc0[3] = (acc0[3]+(f32((val4*val3))));
          acc0[4] = (acc0[4]+(f32((val4*val1))));
          acc0[5] = (acc0[5]+(f32((val4*val2))));
          acc0[6] = (acc0[6]+(f32((val5*val3))));
          acc0[7] = (acc0[7]+(f32((val5*val1))));
          acc0[8] = (acc0[8]+(f32((val5*val2))));
          acc0[9] = (acc0[9]+(f32((val6*val3))));
          acc0[10] = (acc0[10]+(f32((val6*val1))));
          acc0[11] = (acc0[11]+(f32((val6*val2))));
          acc0[12] = (acc0[12]+(f32((val7*val3))));
          acc0[13] = (acc0[13]+(f32((val7*val1))));
          acc0[14] = (acc0[14]+(f32((val7*val2))));
          acc0[15] = (acc0[15]+(f32((val8*val3))));
          acc0[16] = (acc0[16]+(f32((val8*val1))));
          acc0[17] = (acc0[17]+(f32((val8*val2))));
          acc0[18] = (acc0[18]+(f32((val9*val3))));
          acc0[19] = (acc0[19]+(f32((val9*val1))));
          acc0[20] = (acc0[20]+(f32((val9*val2))));
          acc0[21] = (acc0[21]+(f32((val10*val3))));
          acc0[22] = (acc0[22]+(f32((val10*val1))));
          acc0[23] = (acc0[23]+(f32((val10*val2))));
          acc0[24] = (acc0[24]+(f32((val11*val3))));
          acc0[25] = (acc0[25]+(f32((val11*val1))));
          acc0[26] = (acc0[26]+(f32((val11*val2))));
          acc0[27] = (acc0[27]+(f32((val12*val3))));
          acc0[28] = (acc0[28]+(f32((val12*val1))));
          acc0[29] = (acc0[29]+(f32((val12*val2))));
          acc0[30] = (acc0[30]+(f32((val13*val3))));
          acc0[31] = (acc0[31]+(f32((val13*val1))));
          acc0[32] = (acc0[32]+(f32((val13*val2))));
          acc0[33] = (acc0[33]+(f32((val14*val3))));
          acc0[34] = (acc0[34]+(f32((val14*val1))));
          acc0[35] = (acc0[35]+(f32((val14*val2))));
          acc0[36] = (acc0[36]+(f32((val15*val3))));
          acc0[37] = (acc0[37]+(f32((val15*val1))));
          acc0[38] = (acc0[38]+(f32((val15*val2))));
          acc0[39] = (acc0[39]+(f32((val16*val3))));
          acc0[40] = (acc0[40]+(f32((val16*val1))));
          acc0[41] = (acc0[41]+(f32((val16*val2))));
          acc0[42] = (acc0[42]+(f32((val17*val3))));
          acc0[43] = (acc0[43]+(f32((val17*val1))));
          acc0[44] = (acc0[44]+(f32((val17*val2))));
          acc0[45] = (acc0[45]+(f32((val18*val3))));
          acc0[46] = (acc0[46]+(f32((val18*val1))));
          acc0[47] = (acc0[47]+(f32((val18*val2))));
        }
      }
    }
  }
  var alu108 = (lidx0+alu0+cast0+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_100663296[alu108] = (f32((f16(acc0[0]))));
  data0_100663296[(alu108+16)] = (f32((f16(acc0[3]))));
  data0_100663296[(alu108+32)] = (f32((f16(acc0[6]))));
  data0_100663296[(alu108+48)] = (f32((f16(acc0[9]))));
  data0_100663296[(alu108+64)] = (f32((f16(acc0[12]))));
  data0_100663296[(alu108+80)] = (f32((f16(acc0[15]))));
  data0_100663296[(alu108+96)] = (f32((f16(acc0[18]))));
  data0_100663296[(alu108+112)] = (f32((f16(acc0[21]))));
  data0_100663296[(alu108+128)] = (f32((f16(acc0[24]))));
  data0_100663296[(alu108+144)] = (f32((f16(acc0[27]))));
  data0_100663296[(alu108+160)] = (f32((f16(acc0[30]))));
  data0_100663296[(alu108+176)] = (f32((f16(acc0[33]))));
  data0_100663296[(alu108+192)] = (f32((f16(acc0[36]))));
  data0_100663296[(alu108+208)] = (f32((f16(acc0[39]))));
  data0_100663296[(alu108+224)] = (f32((f16(acc0[42]))));
  data0_100663296[(alu108+240)] = (f32((f16(acc0[45]))));
  data0_100663296[(alu108+33554432)] = (f32((f16(acc0[1]))));
  data0_100663296[(alu108+33554448)] = (f32((f16(acc0[4]))));
  data0_100663296[(alu108+33554464)] = (f32((f16(acc0[7]))));
  data0_100663296[(alu108+33554480)] = (f32((f16(acc0[10]))));
  data0_100663296[(alu108+33554496)] = (f32((f16(acc0[13]))));
  data0_100663296[(alu108+33554512)] = (f32((f16(acc0[16]))));
  data0_100663296[(alu108+33554528)] = (f32((f16(acc0[19]))));
  data0_100663296[(alu108+33554544)] = (f32((f16(acc0[22]))));
  data0_100663296[(alu108+33554560)] = (f32((f16(acc0[25]))));
  data0_100663296[(alu108+33554576)] = (f32((f16(acc0[28]))));
  data0_100663296[(alu108+33554592)] = (f32((f16(acc0[31]))));
  data0_100663296[(alu108+33554608)] = (f32((f16(acc0[34]))));
  data0_100663296[(alu108+33554624)] = (f32((f16(acc0[37]))));
  data0_100663296[(alu108+33554640)] = (f32((f16(acc0[40]))));
  data0_100663296[(alu108+33554656)] = (f32((f16(acc0[43]))));
  data0_100663296[(alu108+33554672)] = (f32((f16(acc0[46]))));
  data0_100663296[(alu108+67108864)] = (f32((f16(acc0[2]))));
  data0_100663296[(alu108+67108880)] = (f32((f16(acc0[5]))));
  data0_100663296[(alu108+67108896)] = (f32((f16(acc0[8]))));
  data0_100663296[(alu108+67108912)] = (f32((f16(acc0[11]))));
  data0_100663296[(alu108+67108928)] = (f32((f16(acc0[14]))));
  data0_100663296[(alu108+67108944)] = (f32((f16(acc0[17]))));
  data0_100663296[(alu108+67108960)] = (f32((f16(acc0[20]))));
  data0_100663296[(alu108+67108976)] = (f32((f16(acc0[23]))));
  data0_100663296[(alu108+67108992)] = (f32((f16(acc0[26]))));
  data0_100663296[(alu108+67109008)] = (f32((f16(acc0[29]))));
  data0_100663296[(alu108+67109024)] = (f32((f16(acc0[32]))));
  data0_100663296[(alu108+67109040)] = (f32((f16(acc0[35]))));
  data0_100663296[(alu108+67109056)] = (f32((f16(acc0[38]))));
  data0_100663296[(alu108+67109072)] = (f32((f16(acc0[41]))));
  data0_100663296[(alu108+67109088)] = (f32((f16(acc0[44]))));
  data0_100663296[(alu108+67109104)] = (f32((f16(acc0[47]))));
}`;

const r_65536_16_16_3_6 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_50331648:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_100663296:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_18:array<f16>;
@group(0) @binding(4)var<storage,read_write>data3_3:array<f16>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var val0 = data1_100663296[alu0];
  var val1 = data2_18[0];
  var alu1 = (alu0+16777216);
  var val2 = data1_100663296[alu1];
  var val3 = data2_18[1];
  var alu2 = (alu0+33554432);
  var val4 = data1_100663296[alu2];
  var val5 = data2_18[2];
  var val6 = data1_100663296[(alu0+50331648)];
  var val7 = data2_18[3];
  var val8 = data1_100663296[(alu0+67108864)];
  var val9 = data2_18[4];
  var val10 = data1_100663296[(alu0+83886080)];
  var val11 = data2_18[5];
  var val12 = data3_3[0];
  var val13 = data2_18[6];
  var val14 = data2_18[7];
  var val15 = data2_18[8];
  var val16 = data2_18[9];
  var val17 = data2_18[10];
  var val18 = data2_18[11];
  var val19 = data3_3[1];
  var val20 = data2_18[12];
  var val21 = data2_18[13];
  var val22 = data2_18[14];
  var val23 = data2_18[15];
  var val24 = data2_18[16];
  var val25 = data2_18[17];
  var val26 = data3_3[2];
  data0_50331648[alu0] = ((f16(((f32((val0*val1)))+(f32((val2*val3)))+(f32((val4*val5)))+(f32((val6*val7)))+(f32((val8*val9)))+(f32((val10*val11))))))+val12);
  data0_50331648[alu1] = ((f16(((f32((val0*val13)))+(f32((val2*val14)))+(f32((val4*val15)))+(f32((val6*val16)))+(f32((val8*val17)))+(f32((val10*val18))))))+val19);
  data0_50331648[alu2] = ((f16(((f32((val0*val20)))+(f32((val2*val21)))+(f32((val4*val22)))+(f32((val6*val23)))+(f32((val8*val24)))+(f32((val10*val25))))))+val26);
}`;

const r_32768_32_16_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f16>;
@group(0) @binding(2)var<storage,read_write>data1_50331648:array<f16>;
@compute @workgroup_size(32,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
  var val0 = data1_50331648[alu0];
  var val1 = data1_50331648[(alu0+16777216)];
  var val2 = data1_50331648[(alu0+33554432)];
  var alu1 = select(val0,val1,(val0<val1));
  var alu2 = select(alu1,val2,(alu1<val2));
  data0_16777216[alu0] = alu2;
}`;

const r_65536_16_16_3 = `enable f16;
fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_50331648:array<f16>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f16>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var val0 = data1_50331648[alu0];
  var val1 = data2_16777216[alu0];
  var val2 = data1_50331648[(alu0+16777216)];
  var val3 = data1_50331648[(alu0+33554432)];
  var cast0 = (i32((val3==val1)));
  var cast1 = bitcast<i32>((bitcast<u32>((i32((val2==val1))))<<1u));
  var alu1 = ((i32((val0==val1)))*3);
  var alu2 = select(alu1,cast1,(alu1<cast1));
  var alu3 = select(alu2,cast0,(alu2<cast0));
  data0_16777216[alu0] = (f32((3-alu3)));
}`;

const setupNet = async (device, safetensor) => {
    const metadata = getTensorMetadata(safetensor);
    const infinityBuf = createInfinityUniformBuf(device);

    const layouts=[device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]})]

    const arena_0 = createEmptyBuf(device, 402653184);

    const arena_1 = createEmptyBuf(device, 1572864);

    const arena_2 = createEmptyBuf(device, 6144);

    const arena_3 = createEmptyBuf(device, 24);

    const arena_4 = createEmptyBuf(device, 24);

    const arena_5 = createEmptyBuf(device, 201326592);
    const input0 = createEmptyBuf(device, 33554432);;
    const buf_1 = createWeightBuf(device, 324, getTensorBuffer(safetensor, metadata['m.model.0.weight']));





    const buf_7 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.1.weight']));
    const buf_8 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.1.bias']));
    const buf_9 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.3.weight']));
    const buf_10 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.4.weight']));
    const buf_11 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.4.bias']));
    const buf_12 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.6.weight']));
    const buf_13 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.7.weight']));
    const buf_14 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.7.bias']));
    const buf_15 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.9.weight']));
    const buf_16 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.10.weight']));
    const buf_17 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.10.bias']));
    const buf_18 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.12.weight']));
    const buf_19 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.13.weight']));
    const buf_20 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.13.bias']));
    const buf_21 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.15.weight']));
    const buf_22 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.16.weight']));
    const buf_23 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.16.bias']));
    const buf_24 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.18.weight']));
    const buf_25 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.19.weight']));
    const buf_26 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.19.bias']));
    const buf_27 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.21.weight']));
    const buf_28 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.22.weight']));
    const buf_29 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.22.bias']));
    const buf_30 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.24.weight']));
    const buf_31 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.25.weight']));
    const buf_32 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.25.bias']));
    const buf_33 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.27.weight']));
    const buf_34 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.28.weight']));
    const buf_35 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.28.bias']));
    const buf_36 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.30.weight']));
    const buf_37 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.31.weight']));
    const buf_38 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.31.bias']));
    const buf_39 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.33.weight']));
    const buf_40 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.34.weight']));
    const buf_41 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.34.bias']));
    const buf_42 = createWeightBuf(device, 1944, getTensorBuffer(safetensor, metadata['m.model.36.weight']));

    const buf_44 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.37.weight']));
    const buf_45 = createWeightBuf(device, 12, getTensorBuffer(safetensor, metadata['m.model.37.bias']));

    const buf_47 = createWeightBuf(device, 36, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.weight']));
    const buf_48 = createWeightBuf(device, 6, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.bias']));

    const output0 = createEmptyBuf(device, 67108864);;

    const gpuWriteBuffer0 = device.createBuffer({size:input0.size, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE });

    const gpuReadBuffer0 = device.createBuffer({size:output0.size, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });

    const kernels = [r_256_16_16_16_2_16_3_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_2_8_256_16_2_16_16_3_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3n1, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3n2, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_8_128_4_16_2_32_6_4_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3n3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_8_128_4_16_2_32_6_4_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3n2, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3n1, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_4_256_4_16_2_32_6_4_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_2_8_256_16_2_16_16_3_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_16_256_16_2_16_16_3_6_3_3_3, r_1536_8_8_16_2_32, r_96_16_64_4, r_6_64_4, r_2048_16_8_4_6_16, r_96_16_64_4, r_6_64_4n1, E_6_524288_16_2, r_65536_16_16_3_6, r_32768_32_16_3, r_65536_16_16_3];
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
        addComputePass(device, commandEncoder, pipelines[0], layouts[0], infinityBuf, [arena_0, input0, buf_1], [16, 256, 1]);
        addComputePass(device, commandEncoder, pipelines[1], layouts[1], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[2], layouts[2], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[3], layouts[3], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[4], layouts[4], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[5], layouts[5], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[6], layouts[6], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[7], layouts[7], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_7, buf_8], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[8], layouts[8], infinityBuf, [arena_0, arena_5, buf_9], [256, 8, 2]);
        addComputePass(device, commandEncoder, pipelines[9], layouts[9], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[10], layouts[10], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[11], layouts[11], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[12], layouts[12], infinityBuf, [arena_1, arena_0, arena_4], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[13], layouts[13], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[14], layouts[14], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[15], layouts[15], infinityBuf, [arena_5, arena_0, arena_4, arena_3, buf_10, buf_11], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[16], layouts[16], infinityBuf, [arena_0, arena_5, buf_12], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[17], layouts[17], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[18], layouts[18], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[19], layouts[19], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[20], layouts[20], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[21], layouts[21], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[22], layouts[22], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[23], layouts[23], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_13, buf_14], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[24], layouts[24], infinityBuf, [arena_0, arena_5, buf_15], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[25], layouts[25], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[26], layouts[26], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[27], layouts[27], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[28], layouts[28], infinityBuf, [arena_1, arena_0, arena_4], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[29], layouts[29], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[30], layouts[30], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[31], layouts[31], infinityBuf, [arena_5, arena_0, arena_4, arena_3, buf_16, buf_17], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[32], layouts[32], infinityBuf, [arena_0, arena_5, buf_18], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[33], layouts[33], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[34], layouts[34], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[35], layouts[35], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[36], layouts[36], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[37], layouts[37], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[38], layouts[38], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[39], layouts[39], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_19, buf_20], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[40], layouts[40], infinityBuf, [arena_0, arena_5, buf_21], [4, 128, 8]);
        addComputePass(device, commandEncoder, pipelines[41], layouts[41], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[42], layouts[42], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[43], layouts[43], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[44], layouts[44], infinityBuf, [arena_1, arena_0, arena_4], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[45], layouts[45], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[46], layouts[46], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[47], layouts[47], infinityBuf, [arena_5, arena_0, arena_4, arena_3, buf_22, buf_23], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[48], layouts[48], infinityBuf, [arena_0, arena_5, buf_24], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[49], layouts[49], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[50], layouts[50], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[51], layouts[51], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[52], layouts[52], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[53], layouts[53], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[54], layouts[54], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[55], layouts[55], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_25, buf_26], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[56], layouts[56], infinityBuf, [arena_0, arena_5, buf_27], [4, 128, 8]);
        addComputePass(device, commandEncoder, pipelines[57], layouts[57], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[58], layouts[58], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[59], layouts[59], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[60], layouts[60], infinityBuf, [arena_1, arena_0, arena_4], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[61], layouts[61], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[62], layouts[62], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[63], layouts[63], infinityBuf, [arena_5, arena_0, arena_4, arena_3, buf_28, buf_29], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[64], layouts[64], infinityBuf, [arena_0, arena_5, buf_30], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[65], layouts[65], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[66], layouts[66], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[67], layouts[67], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[68], layouts[68], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[69], layouts[69], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[70], layouts[70], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[71], layouts[71], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_31, buf_32], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[72], layouts[72], infinityBuf, [arena_0, arena_5, buf_33], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[73], layouts[73], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[74], layouts[74], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[75], layouts[75], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[76], layouts[76], infinityBuf, [arena_1, arena_0, arena_4], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[77], layouts[77], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[78], layouts[78], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[79], layouts[79], infinityBuf, [arena_5, arena_0, arena_4, arena_3, buf_34, buf_35], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[80], layouts[80], infinityBuf, [arena_0, arena_5, buf_36], [4, 256, 4]);
        addComputePass(device, commandEncoder, pipelines[81], layouts[81], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[82], layouts[82], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[83], layouts[83], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[84], layouts[84], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[85], layouts[85], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[86], layouts[86], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[87], layouts[87], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_37, buf_38], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[88], layouts[88], infinityBuf, [arena_0, arena_5, buf_39], [256, 8, 2]);
        addComputePass(device, commandEncoder, pipelines[89], layouts[89], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[90], layouts[90], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[91], layouts[91], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[92], layouts[92], infinityBuf, [arena_1, arena_0, arena_4], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[93], layouts[93], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[94], layouts[94], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[95], layouts[95], infinityBuf, [arena_5, arena_0, arena_4, arena_3, buf_40, buf_41], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[96], layouts[96], infinityBuf, [arena_0, arena_5, buf_42], [256, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[97], layouts[97], infinityBuf, [arena_1, arena_0], [1536, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[98], layouts[98], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[99], layouts[99], infinityBuf, [arena_3, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[100], layouts[100], infinityBuf, [arena_1, arena_0, arena_3], [2048, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[101], layouts[101], infinityBuf, [arena_2, arena_1], [96, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[102], layouts[102], infinityBuf, [arena_4, arena_2], [6, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[103], layouts[103], infinityBuf, [arena_5, arena_0, arena_3, arena_4, buf_44, buf_45], [32768, 96, 1]);
        addComputePass(device, commandEncoder, pipelines[104], layouts[104], infinityBuf, [arena_0, arena_5, buf_47, buf_48], [32768, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[105], layouts[105], infinityBuf, [arena_5, arena_0], [32768, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[106], layouts[106], infinityBuf, [output0, arena_0, arena_5], [32768, 2, 1]);
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
export default model6chan3cls;
