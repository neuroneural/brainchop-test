
const dkatlas24_f32 = (() => {
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

const r_3_16_256_2_16_16_16_4_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_648:array<f32>;
@compute @workgroup_size(2,16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,64>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 3 */
  var lidx0 = i32(lindex.x); /* 2 */
  var lidx1 = i32(lindex.y); /* 16 */
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
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    var alu65 = ((0<(gidx1+lidx2+Ridx0))&((lidx2+bitcast<i32>((cast1<<4u))+Ridx0)<257));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu66 = (gidx0+Ridx1);
      var alu67 = ((0<alu66)&(alu66<257));
      var alu68 = (alu67&alu65);
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu69 = (lidx1+Ridx2);
        var alu70 = (alu69+cast0+bitcast<i32>((bitcast<u32>(Ridx1)<<8u))+alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<16u)));
        var val0 = select(0.0f, data1_16777216[(alu70+-65793)], ((0<alu69)&alu67&alu65));
        var alu71 = ((Ridx1*3)+Ridx2+(Ridx0*9)+(gidx2*216)+(lidx0*108));
        var val1 = data2_648[alu71];
        var val2 = data2_648[(alu71+27)];
        var val3 = data2_648[(alu71+54)];
        var val4 = data2_648[(alu71+81)];
        var val5 = select(0.0f, data1_16777216[(alu70+-65777)], alu68);
        var val6 = select(0.0f, data1_16777216[(alu70+-65761)], alu68);
        var val7 = select(0.0f, data1_16777216[(alu70+-65745)], alu68);
        var val8 = select(0.0f, data1_16777216[(alu70+-65729)], alu68);
        var val9 = select(0.0f, data1_16777216[(alu70+-65713)], alu68);
        var val10 = select(0.0f, data1_16777216[(alu70+-65697)], alu68);
        var val11 = select(0.0f, data1_16777216[(alu70+-65681)], alu68);
        var val12 = select(0.0f, data1_16777216[(alu70+-65665)], alu68);
        var val13 = select(0.0f, data1_16777216[(alu70+-65649)], alu68);
        var val14 = select(0.0f, data1_16777216[(alu70+-65633)], alu68);
        var val15 = select(0.0f, data1_16777216[(alu70+-65617)], alu68);
        var val16 = select(0.0f, data1_16777216[(alu70+-65601)], alu68);
        var val17 = select(0.0f, data1_16777216[(alu70+-65585)], alu68);
        var val18 = select(0.0f, data1_16777216[(alu70+-65569)], alu68);
        var val19 = select(0.0f, data1_16777216[(alu70+-65553)], ((alu69<17)&alu67&alu65));
        acc0[0] = (acc0[0]+(val0*val1));
        acc0[1] = (acc0[1]+(val0*val2));
        acc0[2] = (acc0[2]+(val0*val3));
        acc0[3] = (acc0[3]+(val0*val4));
        acc0[4] = (acc0[4]+(val5*val1));
        acc0[5] = (acc0[5]+(val5*val2));
        acc0[6] = (acc0[6]+(val5*val3));
        acc0[7] = (acc0[7]+(val5*val4));
        acc0[8] = (acc0[8]+(val6*val1));
        acc0[9] = (acc0[9]+(val6*val2));
        acc0[10] = (acc0[10]+(val6*val3));
        acc0[11] = (acc0[11]+(val6*val4));
        acc0[12] = (acc0[12]+(val7*val1));
        acc0[13] = (acc0[13]+(val7*val2));
        acc0[14] = (acc0[14]+(val7*val3));
        acc0[15] = (acc0[15]+(val7*val4));
        acc0[16] = (acc0[16]+(val8*val1));
        acc0[17] = (acc0[17]+(val8*val2));
        acc0[18] = (acc0[18]+(val8*val3));
        acc0[19] = (acc0[19]+(val8*val4));
        acc0[20] = (acc0[20]+(val9*val1));
        acc0[21] = (acc0[21]+(val9*val2));
        acc0[22] = (acc0[22]+(val9*val3));
        acc0[23] = (acc0[23]+(val9*val4));
        acc0[24] = (acc0[24]+(val10*val1));
        acc0[25] = (acc0[25]+(val10*val2));
        acc0[26] = (acc0[26]+(val10*val3));
        acc0[27] = (acc0[27]+(val10*val4));
        acc0[28] = (acc0[28]+(val11*val1));
        acc0[29] = (acc0[29]+(val11*val2));
        acc0[30] = (acc0[30]+(val11*val3));
        acc0[31] = (acc0[31]+(val11*val4));
        acc0[32] = (acc0[32]+(val12*val1));
        acc0[33] = (acc0[33]+(val12*val2));
        acc0[34] = (acc0[34]+(val12*val3));
        acc0[35] = (acc0[35]+(val12*val4));
        acc0[36] = (acc0[36]+(val13*val1));
        acc0[37] = (acc0[37]+(val13*val2));
        acc0[38] = (acc0[38]+(val13*val3));
        acc0[39] = (acc0[39]+(val13*val4));
        acc0[40] = (acc0[40]+(val14*val1));
        acc0[41] = (acc0[41]+(val14*val2));
        acc0[42] = (acc0[42]+(val14*val3));
        acc0[43] = (acc0[43]+(val14*val4));
        acc0[44] = (acc0[44]+(val15*val1));
        acc0[45] = (acc0[45]+(val15*val2));
        acc0[46] = (acc0[46]+(val15*val3));
        acc0[47] = (acc0[47]+(val15*val4));
        acc0[48] = (acc0[48]+(val16*val1));
        acc0[49] = (acc0[49]+(val16*val2));
        acc0[50] = (acc0[50]+(val16*val3));
        acc0[51] = (acc0[51]+(val16*val4));
        acc0[52] = (acc0[52]+(val17*val1));
        acc0[53] = (acc0[53]+(val17*val2));
        acc0[54] = (acc0[54]+(val17*val3));
        acc0[55] = (acc0[55]+(val17*val4));
        acc0[56] = (acc0[56]+(val18*val1));
        acc0[57] = (acc0[57]+(val18*val2));
        acc0[58] = (acc0[58]+(val18*val3));
        acc0[59] = (acc0[59]+(val18*val4));
        acc0[60] = (acc0[60]+(val19*val1));
        acc0[61] = (acc0[61]+(val19*val2));
        acc0[62] = (acc0[62]+(val19*val3));
        acc0[63] = (acc0[63]+(val19*val4));
      }
    }
  }
  var alu139 = (lidx1+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx0)<<26u)));
  data0_402653184[alu139] = acc0[0];
  data0_402653184[(alu139+16)] = acc0[4];
  data0_402653184[(alu139+32)] = acc0[8];
  data0_402653184[(alu139+48)] = acc0[12];
  data0_402653184[(alu139+64)] = acc0[16];
  data0_402653184[(alu139+80)] = acc0[20];
  data0_402653184[(alu139+96)] = acc0[24];
  data0_402653184[(alu139+112)] = acc0[28];
  data0_402653184[(alu139+128)] = acc0[32];
  data0_402653184[(alu139+144)] = acc0[36];
  data0_402653184[(alu139+160)] = acc0[40];
  data0_402653184[(alu139+176)] = acc0[44];
  data0_402653184[(alu139+192)] = acc0[48];
  data0_402653184[(alu139+208)] = acc0[52];
  data0_402653184[(alu139+224)] = acc0[56];
  data0_402653184[(alu139+240)] = acc0[60];
  data0_402653184[(alu139+16777216)] = acc0[1];
  data0_402653184[(alu139+16777232)] = acc0[5];
  data0_402653184[(alu139+16777248)] = acc0[9];
  data0_402653184[(alu139+16777264)] = acc0[13];
  data0_402653184[(alu139+16777280)] = acc0[17];
  data0_402653184[(alu139+16777296)] = acc0[21];
  data0_402653184[(alu139+16777312)] = acc0[25];
  data0_402653184[(alu139+16777328)] = acc0[29];
  data0_402653184[(alu139+16777344)] = acc0[33];
  data0_402653184[(alu139+16777360)] = acc0[37];
  data0_402653184[(alu139+16777376)] = acc0[41];
  data0_402653184[(alu139+16777392)] = acc0[45];
  data0_402653184[(alu139+16777408)] = acc0[49];
  data0_402653184[(alu139+16777424)] = acc0[53];
  data0_402653184[(alu139+16777440)] = acc0[57];
  data0_402653184[(alu139+16777456)] = acc0[61];
  data0_402653184[(alu139+33554432)] = acc0[2];
  data0_402653184[(alu139+33554448)] = acc0[6];
  data0_402653184[(alu139+33554464)] = acc0[10];
  data0_402653184[(alu139+33554480)] = acc0[14];
  data0_402653184[(alu139+33554496)] = acc0[18];
  data0_402653184[(alu139+33554512)] = acc0[22];
  data0_402653184[(alu139+33554528)] = acc0[26];
  data0_402653184[(alu139+33554544)] = acc0[30];
  data0_402653184[(alu139+33554560)] = acc0[34];
  data0_402653184[(alu139+33554576)] = acc0[38];
  data0_402653184[(alu139+33554592)] = acc0[42];
  data0_402653184[(alu139+33554608)] = acc0[46];
  data0_402653184[(alu139+33554624)] = acc0[50];
  data0_402653184[(alu139+33554640)] = acc0[54];
  data0_402653184[(alu139+33554656)] = acc0[58];
  data0_402653184[(alu139+33554672)] = acc0[62];
  data0_402653184[(alu139+50331648)] = acc0[3];
  data0_402653184[(alu139+50331664)] = acc0[7];
  data0_402653184[(alu139+50331680)] = acc0[11];
  data0_402653184[(alu139+50331696)] = acc0[15];
  data0_402653184[(alu139+50331712)] = acc0[19];
  data0_402653184[(alu139+50331728)] = acc0[23];
  data0_402653184[(alu139+50331744)] = acc0[27];
  data0_402653184[(alu139+50331760)] = acc0[31];
  data0_402653184[(alu139+50331776)] = acc0[35];
  data0_402653184[(alu139+50331792)] = acc0[39];
  data0_402653184[(alu139+50331808)] = acc0[43];
  data0_402653184[(alu139+50331824)] = acc0[47];
  data0_402653184[(alu139+50331840)] = acc0[51];
  data0_402653184[(alu139+50331856)] = acc0[55];
  data0_402653184[(alu139+50331872)] = acc0[59];
  data0_402653184[(alu139+50331888)] = acc0[63];
}`;

const r_6144_16_16_4_4_16 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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

const r_256_4_8_3_64 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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

const r_24_64_4n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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
  data0_24[gidx0] = (acc0[0]*5.960464477539063e-08f);
}`;

const r_24_4096_16_16_16 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,256>;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 24 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(gidx1);
  var cast2 = bitcast<u32>(lidx1);
  var alu0 = (lidx0+bitcast<i32>((cast0<<12u))+bitcast<i32>((cast2<<8u))+bitcast<i32>((cast1<<24u)));
  var val0 = data1_402653184[alu0];
  var val1 = data2_24[gidx1];
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
    data0_1572864[(lidx1+bitcast<i32>((cast0<<4u))+bitcast<i32>((cast1<<16u)))] = acc0[0];
  }
}`;

const r_8_3_256n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_24:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_6144:array<f32>;
@compute @workgroup_size(1) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,3>;
  var gidx0 = i32(gindex.x); /* 8 */
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 256; Ridx0++) {
    var alu3 = ((gidx0*768)+Ridx0);
    var val0 = data1_6144[(alu3+256)];
    var val1 = data1_6144[(alu3+512)];
    var val2 = data1_6144[alu3];
    acc0[0] = (acc0[0]+val2);
    acc0[1] = (acc0[1]+val0);
    acc0[2] = (acc0[2]+val1);
  }
  var alu8 = (gidx0*3);
  data0_24[(alu8+1)] = (1/sqrt(((acc0[1]*5.960464477539063e-08f)+1e-05f)));
  data0_24[(alu8+2)] = (1/sqrt(((acc0[2]*5.960464477539063e-08f)+1e-05f)));
  data0_24[alu8] = (1/sqrt(((acc0[0]*5.960464477539063e-08f)+1e-05f)));
}`;

const E_24_65536_16_16 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_24:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_24:array<f32>;
@group(0) @binding(6)var<storage,read_write>data5_24:array<f32>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 48 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = ((gidx1*43)>>10u);
  var alu1 = (gidx1-(24*alu0));
  var alu2 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u))+bitcast<i32>((bitcast<u32>(alu1)<<24u)));
  var val0 = data1_402653184[alu2];
  var val1 = data2_24[alu1];
  var val2 = data3_24[alu1];
  var val3 = data4_24[alu1];
  var val4 = data5_24[alu1];
  var alu3 = (((val0-val1)*val2*val3)+val4);
  data0_402653184[alu2] = ((1/(1.0f+exp2(((alu3+(0.044715f*alu3*alu3*alu3))*-2.302208198144325f))))*alu3);
}`;

const r_6_16_256_16_4_16_16_24_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
@compute @workgroup_size(16,4,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 6 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 4 */
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu17 = (lidx2+bitcast<i32>((cast1<<4u))+(Ridx1*3));
      var alu18 = ((2<alu17)&(alu17<259));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (Ridx2*3);
        var alu20 = (gidx0+alu19);
        var alu21 = ((2<alu20)&(alu20<259));
        var alu22 = (alu21&alu18);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu23 = (lidx0+(Ridx3*3));
          var alu24 = (alu23+cast0+(Ridx2*768)+alu0+(Ridx1*196608)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu24+-197379)], ((2<alu23)&alu21&alu18));
          var val1 = data2_15552[(alu19+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*2592)+(lidx1*648))];
          var val2 = select(0.0f, data1_402653184[(alu24+-197363)], alu22);
          var val3 = select(0.0f, data1_402653184[(alu24+-197347)], alu22);
          var val4 = select(0.0f, data1_402653184[(alu24+-197331)], alu22);
          var val5 = select(0.0f, data1_402653184[(alu24+-197315)], alu22);
          var val6 = select(0.0f, data1_402653184[(alu24+-197299)], alu22);
          var val7 = select(0.0f, data1_402653184[(alu24+-197283)], alu22);
          var val8 = select(0.0f, data1_402653184[(alu24+-197267)], alu22);
          var val9 = select(0.0f, data1_402653184[(alu24+-197251)], alu22);
          var val10 = select(0.0f, data1_402653184[(alu24+-197235)], alu22);
          var val11 = select(0.0f, data1_402653184[(alu24+-197219)], alu22);
          var val12 = select(0.0f, data1_402653184[(alu24+-197203)], alu22);
          var val13 = select(0.0f, data1_402653184[(alu24+-197187)], alu22);
          var val14 = select(0.0f, data1_402653184[(alu24+-197171)], alu22);
          var val15 = select(0.0f, data1_402653184[(alu24+-197155)], alu22);
          var val16 = select(0.0f, data1_402653184[(alu24+-197139)], ((alu23<19)&alu21&alu18));
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val2*val1));
          acc0[2] = (acc0[2]+(val3*val1));
          acc0[3] = (acc0[3]+(val4*val1));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val6*val1));
          acc0[6] = (acc0[6]+(val7*val1));
          acc0[7] = (acc0[7]+(val8*val1));
          acc0[8] = (acc0[8]+(val9*val1));
          acc0[9] = (acc0[9]+(val10*val1));
          acc0[10] = (acc0[10]+(val11*val1));
          acc0[11] = (acc0[11]+(val12*val1));
          acc0[12] = (acc0[12]+(val13*val1));
          acc0[13] = (acc0[13]+(val14*val1));
          acc0[14] = (acc0[14]+(val15*val1));
          acc0[15] = (acc0[15]+(val16*val1));
        }
      }
    }
  }
  var alu45 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<26u))+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_402653184[alu45] = acc0[0];
  data0_402653184[(alu45+16)] = acc0[1];
  data0_402653184[(alu45+32)] = acc0[2];
  data0_402653184[(alu45+48)] = acc0[3];
  data0_402653184[(alu45+64)] = acc0[4];
  data0_402653184[(alu45+80)] = acc0[5];
  data0_402653184[(alu45+96)] = acc0[6];
  data0_402653184[(alu45+112)] = acc0[7];
  data0_402653184[(alu45+128)] = acc0[8];
  data0_402653184[(alu45+144)] = acc0[9];
  data0_402653184[(alu45+160)] = acc0[10];
  data0_402653184[(alu45+176)] = acc0[11];
  data0_402653184[(alu45+192)] = acc0[12];
  data0_402653184[(alu45+208)] = acc0[13];
  data0_402653184[(alu45+224)] = acc0[14];
  data0_402653184[(alu45+240)] = acc0[15];
}`;

const r_3_32_256_16_8_8_16_24_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 32 */
  var gidx2 = i32(gindex.z); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx0)<<8u));
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu17 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*5));
      var alu18 = ((4<alu17)&(alu17<261));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx0+(Ridx2*5));
        var alu20 = ((4<alu19)&(alu19<261));
        var alu21 = (alu20&alu18);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu22 = (lidx0+(Ridx3*5));
          var alu23 = (alu22+cast0+(Ridx2*1280)+alu0+(Ridx1*327680)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu23+-328965)], ((4<alu22)&alu20&alu18));
          var val1 = data2_15552[((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*648))];
          var val2 = select(0.0f, data1_402653184[(alu23+-328949)], alu21);
          var val3 = select(0.0f, data1_402653184[(alu23+-328933)], alu21);
          var val4 = select(0.0f, data1_402653184[(alu23+-328917)], alu21);
          var val5 = select(0.0f, data1_402653184[(alu23+-328901)], alu21);
          var val6 = select(0.0f, data1_402653184[(alu23+-328885)], alu21);
          var val7 = select(0.0f, data1_402653184[(alu23+-328869)], alu21);
          var val8 = select(0.0f, data1_402653184[(alu23+-328853)], alu21);
          var val9 = select(0.0f, data1_402653184[(alu23+-328837)], alu21);
          var val10 = select(0.0f, data1_402653184[(alu23+-328821)], alu21);
          var val11 = select(0.0f, data1_402653184[(alu23+-328805)], alu21);
          var val12 = select(0.0f, data1_402653184[(alu23+-328789)], alu21);
          var val13 = select(0.0f, data1_402653184[(alu23+-328773)], alu21);
          var val14 = select(0.0f, data1_402653184[(alu23+-328757)], alu21);
          var val15 = select(0.0f, data1_402653184[(alu23+-328741)], alu21);
          var val16 = select(0.0f, data1_402653184[(alu23+-328725)], ((alu22<21)&alu20&alu18));
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val2*val1));
          acc0[2] = (acc0[2]+(val3*val1));
          acc0[3] = (acc0[3]+(val4*val1));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val6*val1));
          acc0[6] = (acc0[6]+(val7*val1));
          acc0[7] = (acc0[7]+(val8*val1));
          acc0[8] = (acc0[8]+(val9*val1));
          acc0[9] = (acc0[9]+(val10*val1));
          acc0[10] = (acc0[10]+(val11*val1));
          acc0[11] = (acc0[11]+(val12*val1));
          acc0[12] = (acc0[12]+(val13*val1));
          acc0[13] = (acc0[13]+(val14*val1));
          acc0[14] = (acc0[14]+(val15*val1));
          acc0[15] = (acc0[15]+(val16*val1));
        }
      }
    }
  }
  var alu44 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_402653184[alu44] = acc0[0];
  data0_402653184[(alu44+16)] = acc0[1];
  data0_402653184[(alu44+32)] = acc0[2];
  data0_402653184[(alu44+48)] = acc0[3];
  data0_402653184[(alu44+64)] = acc0[4];
  data0_402653184[(alu44+80)] = acc0[5];
  data0_402653184[(alu44+96)] = acc0[6];
  data0_402653184[(alu44+112)] = acc0[7];
  data0_402653184[(alu44+128)] = acc0[8];
  data0_402653184[(alu44+144)] = acc0[9];
  data0_402653184[(alu44+160)] = acc0[10];
  data0_402653184[(alu44+176)] = acc0[11];
  data0_402653184[(alu44+192)] = acc0[12];
  data0_402653184[(alu44+208)] = acc0[13];
  data0_402653184[(alu44+224)] = acc0[14];
  data0_402653184[(alu44+240)] = acc0[15];
}`;

const r_3_32_256_16_8_8_16_24_3_3_3n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 32 */
  var gidx2 = i32(gindex.z); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx0)<<8u));
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu17 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*7));
      var alu18 = ((6<alu17)&(alu17<263));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx0+(Ridx2*7));
        var alu20 = ((6<alu19)&(alu19<263));
        var alu21 = (alu20&alu18);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu22 = (lidx0+(Ridx3*7));
          var alu23 = (alu22+cast0+(Ridx2*1792)+alu0+(Ridx1*458752)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu23+-460551)], ((6<alu22)&alu20&alu18));
          var val1 = data2_15552[((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*648))];
          var val2 = select(0.0f, data1_402653184[(alu23+-460535)], alu21);
          var val3 = select(0.0f, data1_402653184[(alu23+-460519)], alu21);
          var val4 = select(0.0f, data1_402653184[(alu23+-460503)], alu21);
          var val5 = select(0.0f, data1_402653184[(alu23+-460487)], alu21);
          var val6 = select(0.0f, data1_402653184[(alu23+-460471)], alu21);
          var val7 = select(0.0f, data1_402653184[(alu23+-460455)], alu21);
          var val8 = select(0.0f, data1_402653184[(alu23+-460439)], alu21);
          var val9 = select(0.0f, data1_402653184[(alu23+-460423)], alu21);
          var val10 = select(0.0f, data1_402653184[(alu23+-460407)], alu21);
          var val11 = select(0.0f, data1_402653184[(alu23+-460391)], alu21);
          var val12 = select(0.0f, data1_402653184[(alu23+-460375)], alu21);
          var val13 = select(0.0f, data1_402653184[(alu23+-460359)], alu21);
          var val14 = select(0.0f, data1_402653184[(alu23+-460343)], alu21);
          var val15 = select(0.0f, data1_402653184[(alu23+-460327)], alu21);
          var val16 = select(0.0f, data1_402653184[(alu23+-460311)], ((alu22<23)&alu20&alu18));
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val2*val1));
          acc0[2] = (acc0[2]+(val3*val1));
          acc0[3] = (acc0[3]+(val4*val1));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val6*val1));
          acc0[6] = (acc0[6]+(val7*val1));
          acc0[7] = (acc0[7]+(val8*val1));
          acc0[8] = (acc0[8]+(val9*val1));
          acc0[9] = (acc0[9]+(val10*val1));
          acc0[10] = (acc0[10]+(val11*val1));
          acc0[11] = (acc0[11]+(val12*val1));
          acc0[12] = (acc0[12]+(val13*val1));
          acc0[13] = (acc0[13]+(val14*val1));
          acc0[14] = (acc0[14]+(val15*val1));
          acc0[15] = (acc0[15]+(val16*val1));
        }
      }
    }
  }
  var alu44 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_402653184[alu44] = acc0[0];
  data0_402653184[(alu44+16)] = acc0[1];
  data0_402653184[(alu44+32)] = acc0[2];
  data0_402653184[(alu44+48)] = acc0[3];
  data0_402653184[(alu44+64)] = acc0[4];
  data0_402653184[(alu44+80)] = acc0[5];
  data0_402653184[(alu44+96)] = acc0[6];
  data0_402653184[(alu44+112)] = acc0[7];
  data0_402653184[(alu44+128)] = acc0[8];
  data0_402653184[(alu44+144)] = acc0[9];
  data0_402653184[(alu44+160)] = acc0[10];
  data0_402653184[(alu44+176)] = acc0[11];
  data0_402653184[(alu44+192)] = acc0[12];
  data0_402653184[(alu44+208)] = acc0[13];
  data0_402653184[(alu44+224)] = acc0[14];
  data0_402653184[(alu44+240)] = acc0[15];
}`;

const r_6_16_256_16_4_16_16_24_3_3_3n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
@compute @workgroup_size(16,4,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 6 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 4 */
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu17 = (lidx2+bitcast<i32>((cast1<<4u))+(Ridx1*13));
      var alu18 = ((12<alu17)&(alu17<269));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx0+(Ridx2*13));
        var alu20 = ((12<alu19)&(alu19<269));
        var alu21 = (alu20&alu18);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu22 = (lidx0+(Ridx3*13));
          var alu23 = (alu22+cast0+(Ridx2*3328)+alu0+(Ridx1*851968)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu23+-855309)], ((12<alu22)&alu20&alu18));
          var val1 = data2_15552[((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*2592)+(lidx1*648))];
          var val2 = select(0.0f, data1_402653184[(alu23+-855293)], alu21);
          var val3 = select(0.0f, data1_402653184[(alu23+-855277)], alu21);
          var val4 = select(0.0f, data1_402653184[(alu23+-855261)], alu21);
          var val5 = select(0.0f, data1_402653184[(alu23+-855245)], alu21);
          var val6 = select(0.0f, data1_402653184[(alu23+-855229)], alu21);
          var val7 = select(0.0f, data1_402653184[(alu23+-855213)], alu21);
          var val8 = select(0.0f, data1_402653184[(alu23+-855197)], alu21);
          var val9 = select(0.0f, data1_402653184[(alu23+-855181)], alu21);
          var val10 = select(0.0f, data1_402653184[(alu23+-855165)], alu21);
          var val11 = select(0.0f, data1_402653184[(alu23+-855149)], alu21);
          var val12 = select(0.0f, data1_402653184[(alu23+-855133)], alu21);
          var val13 = select(0.0f, data1_402653184[(alu23+-855117)], alu21);
          var val14 = select(0.0f, data1_402653184[(alu23+-855101)], alu21);
          var val15 = select(0.0f, data1_402653184[(alu23+-855085)], alu21);
          var val16 = select(0.0f, data1_402653184[(alu23+-855069)], ((alu22<29)&alu20&alu18));
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val2*val1));
          acc0[2] = (acc0[2]+(val3*val1));
          acc0[3] = (acc0[3]+(val4*val1));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val6*val1));
          acc0[6] = (acc0[6]+(val7*val1));
          acc0[7] = (acc0[7]+(val8*val1));
          acc0[8] = (acc0[8]+(val9*val1));
          acc0[9] = (acc0[9]+(val10*val1));
          acc0[10] = (acc0[10]+(val11*val1));
          acc0[11] = (acc0[11]+(val12*val1));
          acc0[12] = (acc0[12]+(val13*val1));
          acc0[13] = (acc0[13]+(val14*val1));
          acc0[14] = (acc0[14]+(val15*val1));
          acc0[15] = (acc0[15]+(val16*val1));
        }
      }
    }
  }
  var alu44 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<26u))+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_402653184[alu44] = acc0[0];
  data0_402653184[(alu44+16)] = acc0[1];
  data0_402653184[(alu44+32)] = acc0[2];
  data0_402653184[(alu44+48)] = acc0[3];
  data0_402653184[(alu44+64)] = acc0[4];
  data0_402653184[(alu44+80)] = acc0[5];
  data0_402653184[(alu44+96)] = acc0[6];
  data0_402653184[(alu44+112)] = acc0[7];
  data0_402653184[(alu44+128)] = acc0[8];
  data0_402653184[(alu44+144)] = acc0[9];
  data0_402653184[(alu44+160)] = acc0[10];
  data0_402653184[(alu44+176)] = acc0[11];
  data0_402653184[(alu44+192)] = acc0[12];
  data0_402653184[(alu44+208)] = acc0[13];
  data0_402653184[(alu44+224)] = acc0[14];
  data0_402653184[(alu44+240)] = acc0[15];
}`;

const r_3_32_256_16_8_8_16_24_3_3_3n2 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 256 */
  var gidx1 = i32(gindex.y); /* 32 */
  var gidx2 = i32(gindex.z); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<i32>((bitcast<u32>(gidx0)<<8u));
  var cast1 = bitcast<u32>(gidx1);
  var alu0 = (bitcast<i32>((cast1<<19u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu17 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*19));
      var alu18 = ((18<alu17)&(alu17<275));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu19 = (gidx0+(Ridx2*19));
        var alu20 = ((18<alu19)&(alu19<275));
        var alu21 = (alu20&alu18);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu22 = (lidx0+(Ridx3*19));
          var alu23 = (alu22+cast0+(Ridx2*4864)+alu0+(Ridx1*1245184)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu23+-1250067)], ((0<Ridx3)&alu20&alu18));
          var val1 = data2_15552[((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*648))];
          var val2 = select(0.0f, data1_402653184[(alu23+-1250051)], ((2<alu22)&alu20&alu18));
          var val3 = select(0.0f, data1_402653184[(alu23+-1250035)], alu21);
          var val4 = select(0.0f, data1_402653184[(alu23+-1250019)], alu21);
          var val5 = select(0.0f, data1_402653184[(alu23+-1250003)], alu21);
          var val6 = select(0.0f, data1_402653184[(alu23+-1249987)], alu21);
          var val7 = select(0.0f, data1_402653184[(alu23+-1249971)], alu21);
          var val8 = select(0.0f, data1_402653184[(alu23+-1249955)], alu21);
          var val9 = select(0.0f, data1_402653184[(alu23+-1249939)], alu21);
          var val10 = select(0.0f, data1_402653184[(alu23+-1249923)], alu21);
          var val11 = select(0.0f, data1_402653184[(alu23+-1249907)], alu21);
          var val12 = select(0.0f, data1_402653184[(alu23+-1249891)], alu21);
          var val13 = select(0.0f, data1_402653184[(alu23+-1249875)], alu21);
          var val14 = select(0.0f, data1_402653184[(alu23+-1249859)], alu21);
          var val15 = select(0.0f, data1_402653184[(alu23+-1249843)], ((alu22<51)&alu20&alu18));
          var val16 = select(0.0f, data1_402653184[(alu23+-1249827)], ((alu22<35)&alu20&alu18));
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val2*val1));
          acc0[2] = (acc0[2]+(val3*val1));
          acc0[3] = (acc0[3]+(val4*val1));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val6*val1));
          acc0[6] = (acc0[6]+(val7*val1));
          acc0[7] = (acc0[7]+(val8*val1));
          acc0[8] = (acc0[8]+(val9*val1));
          acc0[9] = (acc0[9]+(val10*val1));
          acc0[10] = (acc0[10]+(val11*val1));
          acc0[11] = (acc0[11]+(val12*val1));
          acc0[12] = (acc0[12]+(val13*val1));
          acc0[13] = (acc0[13]+(val14*val1));
          acc0[14] = (acc0[14]+(val15*val1));
          acc0[15] = (acc0[15]+(val16*val1));
        }
      }
    }
  }
  var alu44 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_402653184[alu44] = acc0[0];
  data0_402653184[(alu44+16)] = acc0[1];
  data0_402653184[(alu44+32)] = acc0[2];
  data0_402653184[(alu44+48)] = acc0[3];
  data0_402653184[(alu44+64)] = acc0[4];
  data0_402653184[(alu44+80)] = acc0[5];
  data0_402653184[(alu44+96)] = acc0[6];
  data0_402653184[(alu44+112)] = acc0[7];
  data0_402653184[(alu44+128)] = acc0[8];
  data0_402653184[(alu44+144)] = acc0[9];
  data0_402653184[(alu44+160)] = acc0[10];
  data0_402653184[(alu44+176)] = acc0[11];
  data0_402653184[(alu44+192)] = acc0[12];
  data0_402653184[(alu44+208)] = acc0[13];
  data0_402653184[(alu44+224)] = acc0[14];
  data0_402653184[(alu44+240)] = acc0[15];
}`;

const r_3_16_256_16_2_16_4_16_24_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
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
      var alu65 = (lidx2+bitcast<i32>((cast1<<4u))+(Ridx1*31));
      var alu66 = ((30<alu65)&(alu65<287));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu67 = (gidx0+(Ridx2*31));
        var alu68 = ((30<alu67)&(alu67<287));
        var alu69 = (alu68&alu66);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu70 = (lidx0+(Ridx3*31));
          var alu71 = (alu70+cast0+(Ridx2*7936)+alu0+(Ridx1*2031616)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu71+-2039583)], ((0<Ridx3)&alu68&alu66));
          var alu72 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*2592));
          var val1 = data2_15552[alu72];
          var val2 = select(0.0f, data1_402653184[(alu71+-2039567)], ((14<alu70)&alu68&alu66));
          var val3 = select(0.0f, data1_402653184[(alu71+-2039551)], alu69);
          var val4 = select(0.0f, data1_402653184[(alu71+-2039535)], alu69);
          var val5 = select(0.0f, data1_402653184[(alu71+-2039519)], alu69);
          var val6 = select(0.0f, data1_402653184[(alu71+-2039503)], alu69);
          var val7 = select(0.0f, data1_402653184[(alu71+-2039487)], alu69);
          var val8 = select(0.0f, data1_402653184[(alu71+-2039471)], alu69);
          var val9 = select(0.0f, data1_402653184[(alu71+-2039455)], alu69);
          var val10 = select(0.0f, data1_402653184[(alu71+-2039439)], alu69);
          var val11 = select(0.0f, data1_402653184[(alu71+-2039423)], alu69);
          var val12 = select(0.0f, data1_402653184[(alu71+-2039407)], alu69);
          var val13 = select(0.0f, data1_402653184[(alu71+-2039391)], alu69);
          var val14 = select(0.0f, data1_402653184[(alu71+-2039375)], alu69);
          var val15 = select(0.0f, data1_402653184[(alu71+-2039359)], ((alu70<63)&alu68&alu66));
          var val16 = select(0.0f, data1_402653184[(alu71+-2039343)], ((alu70<47)&alu68&alu66));
          var val17 = data2_15552[(alu72+648)];
          var val18 = data2_15552[(alu72+1296)];
          var val19 = data2_15552[(alu72+1944)];
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val2*val1));
          acc0[2] = (acc0[2]+(val3*val1));
          acc0[3] = (acc0[3]+(val4*val1));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val6*val1));
          acc0[6] = (acc0[6]+(val7*val1));
          acc0[7] = (acc0[7]+(val8*val1));
          acc0[8] = (acc0[8]+(val9*val1));
          acc0[9] = (acc0[9]+(val10*val1));
          acc0[10] = (acc0[10]+(val11*val1));
          acc0[11] = (acc0[11]+(val12*val1));
          acc0[12] = (acc0[12]+(val13*val1));
          acc0[13] = (acc0[13]+(val14*val1));
          acc0[14] = (acc0[14]+(val15*val1));
          acc0[15] = (acc0[15]+(val16*val1));
          acc0[16] = (acc0[16]+(val0*val17));
          acc0[17] = (acc0[17]+(val2*val17));
          acc0[18] = (acc0[18]+(val3*val17));
          acc0[19] = (acc0[19]+(val4*val17));
          acc0[20] = (acc0[20]+(val5*val17));
          acc0[21] = (acc0[21]+(val6*val17));
          acc0[22] = (acc0[22]+(val7*val17));
          acc0[23] = (acc0[23]+(val8*val17));
          acc0[24] = (acc0[24]+(val9*val17));
          acc0[25] = (acc0[25]+(val10*val17));
          acc0[26] = (acc0[26]+(val11*val17));
          acc0[27] = (acc0[27]+(val12*val17));
          acc0[28] = (acc0[28]+(val13*val17));
          acc0[29] = (acc0[29]+(val14*val17));
          acc0[30] = (acc0[30]+(val15*val17));
          acc0[31] = (acc0[31]+(val16*val17));
          acc0[32] = (acc0[32]+(val0*val18));
          acc0[33] = (acc0[33]+(val2*val18));
          acc0[34] = (acc0[34]+(val3*val18));
          acc0[35] = (acc0[35]+(val4*val18));
          acc0[36] = (acc0[36]+(val5*val18));
          acc0[37] = (acc0[37]+(val6*val18));
          acc0[38] = (acc0[38]+(val7*val18));
          acc0[39] = (acc0[39]+(val8*val18));
          acc0[40] = (acc0[40]+(val9*val18));
          acc0[41] = (acc0[41]+(val10*val18));
          acc0[42] = (acc0[42]+(val11*val18));
          acc0[43] = (acc0[43]+(val12*val18));
          acc0[44] = (acc0[44]+(val13*val18));
          acc0[45] = (acc0[45]+(val14*val18));
          acc0[46] = (acc0[46]+(val15*val18));
          acc0[47] = (acc0[47]+(val16*val18));
          acc0[48] = (acc0[48]+(val0*val19));
          acc0[49] = (acc0[49]+(val2*val19));
          acc0[50] = (acc0[50]+(val3*val19));
          acc0[51] = (acc0[51]+(val4*val19));
          acc0[52] = (acc0[52]+(val5*val19));
          acc0[53] = (acc0[53]+(val6*val19));
          acc0[54] = (acc0[54]+(val7*val19));
          acc0[55] = (acc0[55]+(val8*val19));
          acc0[56] = (acc0[56]+(val9*val19));
          acc0[57] = (acc0[57]+(val10*val19));
          acc0[58] = (acc0[58]+(val11*val19));
          acc0[59] = (acc0[59]+(val12*val19));
          acc0[60] = (acc0[60]+(val13*val19));
          acc0[61] = (acc0[61]+(val14*val19));
          acc0[62] = (acc0[62]+(val15*val19));
          acc0[63] = (acc0[63]+(val16*val19));
        }
      }
    }
  }
  var alu141 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<26u)));
  data0_402653184[alu141] = acc0[0];
  data0_402653184[(alu141+16)] = acc0[1];
  data0_402653184[(alu141+32)] = acc0[2];
  data0_402653184[(alu141+48)] = acc0[3];
  data0_402653184[(alu141+64)] = acc0[4];
  data0_402653184[(alu141+80)] = acc0[5];
  data0_402653184[(alu141+96)] = acc0[6];
  data0_402653184[(alu141+112)] = acc0[7];
  data0_402653184[(alu141+128)] = acc0[8];
  data0_402653184[(alu141+144)] = acc0[9];
  data0_402653184[(alu141+160)] = acc0[10];
  data0_402653184[(alu141+176)] = acc0[11];
  data0_402653184[(alu141+192)] = acc0[12];
  data0_402653184[(alu141+208)] = acc0[13];
  data0_402653184[(alu141+224)] = acc0[14];
  data0_402653184[(alu141+240)] = acc0[15];
  data0_402653184[(alu141+16777216)] = acc0[16];
  data0_402653184[(alu141+16777232)] = acc0[17];
  data0_402653184[(alu141+16777248)] = acc0[18];
  data0_402653184[(alu141+16777264)] = acc0[19];
  data0_402653184[(alu141+16777280)] = acc0[20];
  data0_402653184[(alu141+16777296)] = acc0[21];
  data0_402653184[(alu141+16777312)] = acc0[22];
  data0_402653184[(alu141+16777328)] = acc0[23];
  data0_402653184[(alu141+16777344)] = acc0[24];
  data0_402653184[(alu141+16777360)] = acc0[25];
  data0_402653184[(alu141+16777376)] = acc0[26];
  data0_402653184[(alu141+16777392)] = acc0[27];
  data0_402653184[(alu141+16777408)] = acc0[28];
  data0_402653184[(alu141+16777424)] = acc0[29];
  data0_402653184[(alu141+16777440)] = acc0[30];
  data0_402653184[(alu141+16777456)] = acc0[31];
  data0_402653184[(alu141+33554432)] = acc0[32];
  data0_402653184[(alu141+33554448)] = acc0[33];
  data0_402653184[(alu141+33554464)] = acc0[34];
  data0_402653184[(alu141+33554480)] = acc0[35];
  data0_402653184[(alu141+33554496)] = acc0[36];
  data0_402653184[(alu141+33554512)] = acc0[37];
  data0_402653184[(alu141+33554528)] = acc0[38];
  data0_402653184[(alu141+33554544)] = acc0[39];
  data0_402653184[(alu141+33554560)] = acc0[40];
  data0_402653184[(alu141+33554576)] = acc0[41];
  data0_402653184[(alu141+33554592)] = acc0[42];
  data0_402653184[(alu141+33554608)] = acc0[43];
  data0_402653184[(alu141+33554624)] = acc0[44];
  data0_402653184[(alu141+33554640)] = acc0[45];
  data0_402653184[(alu141+33554656)] = acc0[46];
  data0_402653184[(alu141+33554672)] = acc0[47];
  data0_402653184[(alu141+50331648)] = acc0[48];
  data0_402653184[(alu141+50331664)] = acc0[49];
  data0_402653184[(alu141+50331680)] = acc0[50];
  data0_402653184[(alu141+50331696)] = acc0[51];
  data0_402653184[(alu141+50331712)] = acc0[52];
  data0_402653184[(alu141+50331728)] = acc0[53];
  data0_402653184[(alu141+50331744)] = acc0[54];
  data0_402653184[(alu141+50331760)] = acc0[55];
  data0_402653184[(alu141+50331776)] = acc0[56];
  data0_402653184[(alu141+50331792)] = acc0[57];
  data0_402653184[(alu141+50331808)] = acc0[58];
  data0_402653184[(alu141+50331824)] = acc0[59];
  data0_402653184[(alu141+50331840)] = acc0[60];
  data0_402653184[(alu141+50331856)] = acc0[61];
  data0_402653184[(alu141+50331872)] = acc0[62];
  data0_402653184[(alu141+50331888)] = acc0[63];
}`;

const r_3_16_256_16_2_16_16_4_24_3_3_3n4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
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
          var val0 = select(0.0f, data1_402653184[(alu70+-65793)], ((0<alu69)&alu67&alu65));
          var alu71 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*2592));
          var val1 = data2_15552[alu71];
          var val2 = data2_15552[(alu71+648)];
          var val3 = data2_15552[(alu71+1296)];
          var val4 = data2_15552[(alu71+1944)];
          var val5 = select(0.0f, data1_402653184[(alu70+-65777)], alu68);
          var val6 = select(0.0f, data1_402653184[(alu70+-65761)], alu68);
          var val7 = select(0.0f, data1_402653184[(alu70+-65745)], alu68);
          var val8 = select(0.0f, data1_402653184[(alu70+-65729)], alu68);
          var val9 = select(0.0f, data1_402653184[(alu70+-65713)], alu68);
          var val10 = select(0.0f, data1_402653184[(alu70+-65697)], alu68);
          var val11 = select(0.0f, data1_402653184[(alu70+-65681)], alu68);
          var val12 = select(0.0f, data1_402653184[(alu70+-65665)], alu68);
          var val13 = select(0.0f, data1_402653184[(alu70+-65649)], alu68);
          var val14 = select(0.0f, data1_402653184[(alu70+-65633)], alu68);
          var val15 = select(0.0f, data1_402653184[(alu70+-65617)], alu68);
          var val16 = select(0.0f, data1_402653184[(alu70+-65601)], alu68);
          var val17 = select(0.0f, data1_402653184[(alu70+-65585)], alu68);
          var val18 = select(0.0f, data1_402653184[(alu70+-65569)], alu68);
          var val19 = select(0.0f, data1_402653184[(alu70+-65553)], ((alu69<17)&alu67&alu65));
          acc0[0] = (acc0[0]+(val0*val1));
          acc0[1] = (acc0[1]+(val0*val2));
          acc0[2] = (acc0[2]+(val0*val3));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val5*val1));
          acc0[5] = (acc0[5]+(val5*val2));
          acc0[6] = (acc0[6]+(val5*val3));
          acc0[7] = (acc0[7]+(val5*val4));
          acc0[8] = (acc0[8]+(val6*val1));
          acc0[9] = (acc0[9]+(val6*val2));
          acc0[10] = (acc0[10]+(val6*val3));
          acc0[11] = (acc0[11]+(val6*val4));
          acc0[12] = (acc0[12]+(val7*val1));
          acc0[13] = (acc0[13]+(val7*val2));
          acc0[14] = (acc0[14]+(val7*val3));
          acc0[15] = (acc0[15]+(val7*val4));
          acc0[16] = (acc0[16]+(val8*val1));
          acc0[17] = (acc0[17]+(val8*val2));
          acc0[18] = (acc0[18]+(val8*val3));
          acc0[19] = (acc0[19]+(val8*val4));
          acc0[20] = (acc0[20]+(val9*val1));
          acc0[21] = (acc0[21]+(val9*val2));
          acc0[22] = (acc0[22]+(val9*val3));
          acc0[23] = (acc0[23]+(val9*val4));
          acc0[24] = (acc0[24]+(val10*val1));
          acc0[25] = (acc0[25]+(val10*val2));
          acc0[26] = (acc0[26]+(val10*val3));
          acc0[27] = (acc0[27]+(val10*val4));
          acc0[28] = (acc0[28]+(val11*val1));
          acc0[29] = (acc0[29]+(val11*val2));
          acc0[30] = (acc0[30]+(val11*val3));
          acc0[31] = (acc0[31]+(val11*val4));
          acc0[32] = (acc0[32]+(val12*val1));
          acc0[33] = (acc0[33]+(val12*val2));
          acc0[34] = (acc0[34]+(val12*val3));
          acc0[35] = (acc0[35]+(val12*val4));
          acc0[36] = (acc0[36]+(val13*val1));
          acc0[37] = (acc0[37]+(val13*val2));
          acc0[38] = (acc0[38]+(val13*val3));
          acc0[39] = (acc0[39]+(val13*val4));
          acc0[40] = (acc0[40]+(val14*val1));
          acc0[41] = (acc0[41]+(val14*val2));
          acc0[42] = (acc0[42]+(val14*val3));
          acc0[43] = (acc0[43]+(val14*val4));
          acc0[44] = (acc0[44]+(val15*val1));
          acc0[45] = (acc0[45]+(val15*val2));
          acc0[46] = (acc0[46]+(val15*val3));
          acc0[47] = (acc0[47]+(val15*val4));
          acc0[48] = (acc0[48]+(val16*val1));
          acc0[49] = (acc0[49]+(val16*val2));
          acc0[50] = (acc0[50]+(val16*val3));
          acc0[51] = (acc0[51]+(val16*val4));
          acc0[52] = (acc0[52]+(val17*val1));
          acc0[53] = (acc0[53]+(val17*val2));
          acc0[54] = (acc0[54]+(val17*val3));
          acc0[55] = (acc0[55]+(val17*val4));
          acc0[56] = (acc0[56]+(val18*val1));
          acc0[57] = (acc0[57]+(val18*val2));
          acc0[58] = (acc0[58]+(val18*val3));
          acc0[59] = (acc0[59]+(val18*val4));
          acc0[60] = (acc0[60]+(val19*val1));
          acc0[61] = (acc0[61]+(val19*val2));
          acc0[62] = (acc0[62]+(val19*val3));
          acc0[63] = (acc0[63]+(val19*val4));
        }
      }
    }
  }
  var alu140 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<26u)));
  data0_402653184[alu140] = acc0[0];
  data0_402653184[(alu140+16)] = acc0[4];
  data0_402653184[(alu140+32)] = acc0[8];
  data0_402653184[(alu140+48)] = acc0[12];
  data0_402653184[(alu140+64)] = acc0[16];
  data0_402653184[(alu140+80)] = acc0[20];
  data0_402653184[(alu140+96)] = acc0[24];
  data0_402653184[(alu140+112)] = acc0[28];
  data0_402653184[(alu140+128)] = acc0[32];
  data0_402653184[(alu140+144)] = acc0[36];
  data0_402653184[(alu140+160)] = acc0[40];
  data0_402653184[(alu140+176)] = acc0[44];
  data0_402653184[(alu140+192)] = acc0[48];
  data0_402653184[(alu140+208)] = acc0[52];
  data0_402653184[(alu140+224)] = acc0[56];
  data0_402653184[(alu140+240)] = acc0[60];
  data0_402653184[(alu140+16777216)] = acc0[1];
  data0_402653184[(alu140+16777232)] = acc0[5];
  data0_402653184[(alu140+16777248)] = acc0[9];
  data0_402653184[(alu140+16777264)] = acc0[13];
  data0_402653184[(alu140+16777280)] = acc0[17];
  data0_402653184[(alu140+16777296)] = acc0[21];
  data0_402653184[(alu140+16777312)] = acc0[25];
  data0_402653184[(alu140+16777328)] = acc0[29];
  data0_402653184[(alu140+16777344)] = acc0[33];
  data0_402653184[(alu140+16777360)] = acc0[37];
  data0_402653184[(alu140+16777376)] = acc0[41];
  data0_402653184[(alu140+16777392)] = acc0[45];
  data0_402653184[(alu140+16777408)] = acc0[49];
  data0_402653184[(alu140+16777424)] = acc0[53];
  data0_402653184[(alu140+16777440)] = acc0[57];
  data0_402653184[(alu140+16777456)] = acc0[61];
  data0_402653184[(alu140+33554432)] = acc0[2];
  data0_402653184[(alu140+33554448)] = acc0[6];
  data0_402653184[(alu140+33554464)] = acc0[10];
  data0_402653184[(alu140+33554480)] = acc0[14];
  data0_402653184[(alu140+33554496)] = acc0[18];
  data0_402653184[(alu140+33554512)] = acc0[22];
  data0_402653184[(alu140+33554528)] = acc0[26];
  data0_402653184[(alu140+33554544)] = acc0[30];
  data0_402653184[(alu140+33554560)] = acc0[34];
  data0_402653184[(alu140+33554576)] = acc0[38];
  data0_402653184[(alu140+33554592)] = acc0[42];
  data0_402653184[(alu140+33554608)] = acc0[46];
  data0_402653184[(alu140+33554624)] = acc0[50];
  data0_402653184[(alu140+33554640)] = acc0[54];
  data0_402653184[(alu140+33554656)] = acc0[58];
  data0_402653184[(alu140+33554672)] = acc0[62];
  data0_402653184[(alu140+50331648)] = acc0[3];
  data0_402653184[(alu140+50331664)] = acc0[7];
  data0_402653184[(alu140+50331680)] = acc0[11];
  data0_402653184[(alu140+50331696)] = acc0[15];
  data0_402653184[(alu140+50331712)] = acc0[19];
  data0_402653184[(alu140+50331728)] = acc0[23];
  data0_402653184[(alu140+50331744)] = acc0[27];
  data0_402653184[(alu140+50331760)] = acc0[31];
  data0_402653184[(alu140+50331776)] = acc0[35];
  data0_402653184[(alu140+50331792)] = acc0[39];
  data0_402653184[(alu140+50331808)] = acc0[43];
  data0_402653184[(alu140+50331824)] = acc0[47];
  data0_402653184[(alu140+50331840)] = acc0[51];
  data0_402653184[(alu140+50331856)] = acc0[55];
  data0_402653184[(alu140+50331872)] = acc0[59];
  data0_402653184[(alu140+50331888)] = acc0[63];
}`;

const r_3_4096_16_16_4_4_4_2_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,32>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<12u))+bitcast<i32>((bitcast<u32>(lidx2)<<10u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
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
    var alu33 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_402653184[alu33];
    var alu34 = ((gidx1*192)+Ridx0);
    var val1 = data2_2496[(alu34+72)];
    var val2 = data2_2496[alu34];
    var val3 = data2_2496[(alu34+96)];
    var val4 = data1_402653184[(alu33+256)];
    var val5 = data1_402653184[(alu33+512)];
    var val6 = data1_402653184[(alu33+768)];
    var val7 = data2_2496[(alu34+24)];
    var val8 = data2_2496[(alu34+120)];
    var val9 = data2_2496[(alu34+48)];
    var val10 = data2_2496[(alu34+144)];
    var val11 = data2_2496[(alu34+168)];
    acc0[0] = (acc0[0]+(val0*val2));
    acc0[1] = (acc0[1]+(val0*val3));
    acc0[2] = (acc0[2]+(val4*val2));
    acc0[3] = (acc0[3]+(val4*val3));
    acc0[4] = (acc0[4]+(val5*val2));
    acc0[5] = (acc0[5]+(val5*val3));
    acc0[6] = (acc0[6]+(val6*val2));
    acc0[7] = (acc0[7]+(val6*val3));
    acc0[8] = (acc0[8]+(val0*val7));
    acc0[9] = (acc0[9]+(val0*val8));
    acc0[10] = (acc0[10]+(val4*val7));
    acc0[11] = (acc0[11]+(val4*val8));
    acc0[12] = (acc0[12]+(val5*val7));
    acc0[13] = (acc0[13]+(val5*val8));
    acc0[14] = (acc0[14]+(val6*val7));
    acc0[15] = (acc0[15]+(val6*val8));
    acc0[16] = (acc0[16]+(val0*val9));
    acc0[17] = (acc0[17]+(val0*val10));
    acc0[18] = (acc0[18]+(val4*val9));
    acc0[19] = (acc0[19]+(val4*val10));
    acc0[20] = (acc0[20]+(val5*val9));
    acc0[21] = (acc0[21]+(val5*val10));
    acc0[22] = (acc0[22]+(val6*val9));
    acc0[23] = (acc0[23]+(val6*val10));
    acc0[24] = (acc0[24]+(val0*val1));
    acc0[25] = (acc0[25]+(val0*val11));
    acc0[26] = (acc0[26]+(val4*val1));
    acc0[27] = (acc0[27]+(val4*val11));
    acc0[28] = (acc0[28]+(val5*val1));
    acc0[29] = (acc0[29]+(val5*val11));
    acc0[30] = (acc0[30]+(val6*val1));
    acc0[31] = (acc0[31]+(val6*val11));
  }
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<i32>((cast0<<3u));
  var val12 = data3_104[cast1];
  var val13 = data3_104[(cast1+1)];
  var val14 = data3_104[(cast1+2)];
  var val15 = data3_104[(cast1+3)];
  var val16 = data3_104[(cast1+4)];
  var val17 = data3_104[(cast1+5)];
  var val18 = data3_104[(cast1+6)];
  var val19 = data3_104[(cast1+7)];
  var alu68 = (alu0+bitcast<i32>((cast0<<27u)));
  data0_402653184[alu68] = (acc0[0]+val12);
  data0_402653184[(alu68+256)] = (acc0[2]+val12);
  data0_402653184[(alu68+512)] = (acc0[4]+val12);
  data0_402653184[(alu68+768)] = (acc0[6]+val12);
  data0_402653184[(alu68+16777216)] = (acc0[8]+val13);
  data0_402653184[(alu68+16777472)] = (acc0[10]+val13);
  data0_402653184[(alu68+16777728)] = (acc0[12]+val13);
  data0_402653184[(alu68+16777984)] = (acc0[14]+val13);
  data0_402653184[(alu68+33554432)] = (acc0[16]+val14);
  data0_402653184[(alu68+33554688)] = (acc0[18]+val14);
  data0_402653184[(alu68+33554944)] = (acc0[20]+val14);
  data0_402653184[(alu68+33555200)] = (acc0[22]+val14);
  data0_402653184[(alu68+50331648)] = (acc0[24]+val15);
  data0_402653184[(alu68+50331904)] = (acc0[26]+val15);
  data0_402653184[(alu68+50332160)] = (acc0[28]+val15);
  data0_402653184[(alu68+50332416)] = (acc0[30]+val15);
  data0_402653184[(alu68+67108864)] = (acc0[1]+val16);
  data0_402653184[(alu68+67109120)] = (acc0[3]+val16);
  data0_402653184[(alu68+67109376)] = (acc0[5]+val16);
  data0_402653184[(alu68+67109632)] = (acc0[7]+val16);
  data0_402653184[(alu68+83886080)] = (acc0[9]+val17);
  data0_402653184[(alu68+83886336)] = (acc0[11]+val17);
  data0_402653184[(alu68+83886592)] = (acc0[13]+val17);
  data0_402653184[(alu68+83886848)] = (acc0[15]+val17);
  data0_402653184[(alu68+100663296)] = (acc0[17]+val18);
  data0_402653184[(alu68+100663552)] = (acc0[19]+val18);
  data0_402653184[(alu68+100663808)] = (acc0[21]+val18);
  data0_402653184[(alu68+100664064)] = (acc0[23]+val18);
  data0_402653184[(alu68+117440512)] = (acc0[25]+val19);
  data0_402653184[(alu68+117440768)] = (acc0[27]+val19);
  data0_402653184[(alu68+117441024)] = (acc0[29]+val19);
  data0_402653184[(alu68+117441280)] = (acc0[31]+val19);
}`;

const r_524288_32_24n5 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 16 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<5u)));
  var val0 = data1_402653184[alu0];
  var val1 = data1_402653184[(alu0+16777216)];
  var val2 = data1_402653184[(alu0+33554432)];
  var val3 = data1_402653184[(alu0+50331648)];
  var val4 = data1_402653184[(alu0+67108864)];
  var val5 = data1_402653184[(alu0+83886080)];
  var val6 = data1_402653184[(alu0+100663296)];
  var val7 = data1_402653184[(alu0+117440512)];
  var val8 = data1_402653184[(alu0+134217728)];
  var val9 = data1_402653184[(alu0+150994944)];
  var val10 = data1_402653184[(alu0+167772160)];
  var val11 = data1_402653184[(alu0+184549376)];
  var val12 = data1_402653184[(alu0+201326592)];
  var val13 = data1_402653184[(alu0+218103808)];
  var val14 = data1_402653184[(alu0+234881024)];
  var val15 = data1_402653184[(alu0+251658240)];
  var val16 = data1_402653184[(alu0+268435456)];
  var val17 = data1_402653184[(alu0+285212672)];
  var val18 = data1_402653184[(alu0+301989888)];
  var val19 = data1_402653184[(alu0+318767104)];
  var val20 = data1_402653184[(alu0+335544320)];
  var val21 = data1_402653184[(alu0+352321536)];
  var val22 = data1_402653184[(alu0+369098752)];
  var val23 = data1_402653184[(alu0+385875968)];
  var alu1 = select(val0,val1,(val0<val1));
  var alu2 = select(alu1,val2,(alu1<val2));
  var alu3 = select(alu2,val3,(alu2<val3));
  var alu4 = select(alu3,val4,(alu3<val4));
  var alu5 = select(alu4,val5,(alu4<val5));
  var alu6 = select(alu5,val6,(alu5<val6));
  var alu7 = select(alu6,val7,(alu6<val7));
  var alu8 = select(alu7,val8,(alu7<val8));
  var alu9 = select(alu8,val9,(alu8<val9));
  var alu10 = select(alu9,val10,(alu9<val10));
  var alu11 = select(alu10,val11,(alu10<val11));
  var alu12 = select(alu11,val12,(alu11<val12));
  var alu13 = select(alu12,val13,(alu12<val13));
  var alu14 = select(alu13,val14,(alu13<val14));
  var alu15 = select(alu14,val15,(alu14<val15));
  var alu16 = select(alu15,val16,(alu15<val16));
  var alu17 = select(alu16,val17,(alu16<val17));
  var alu18 = select(alu17,val18,(alu17<val18));
  var alu19 = select(alu18,val19,(alu18<val19));
  var alu20 = select(alu19,val20,(alu19<val20));
  var alu21 = select(alu20,val21,(alu20<val21));
  var alu22 = select(alu21,val22,(alu21<val22));
  var alu23 = select(alu22,val23,(alu22<val23));
  data0_16777216[alu0] = alu23;
}`;

const r_65536_32_8_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(32,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,1>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 8 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
  var val0 = data2_16777216[alu0];
  acc0[0] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    var val1 = data1_402653184[(alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)))];
    var alu2 = ((i32((val1==val0)))*(24-Ridx0));
    var alu3 = select(acc0[0],alu2,(acc0[0]<alu2));
    acc0[0] = alu3;
  }
  data0_16777216[alu0] = (f32((24-acc0[0])));
}`;

const r_3_4096_16_16_4_4_4_2_24n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,32>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<12u))+bitcast<i32>((bitcast<u32>(lidx2)<<10u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
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
    var alu33 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_402653184[alu33];
    var alu34 = ((gidx1*192)+Ridx0);
    var val1 = data2_2496[(alu34+576)];
    var val2 = data2_2496[(alu34+672)];
    var val3 = data1_402653184[(alu33+256)];
    var val4 = data1_402653184[(alu33+512)];
    var val5 = data1_402653184[(alu33+768)];
    var val6 = data2_2496[(alu34+600)];
    var val7 = data2_2496[(alu34+696)];
    var val8 = data2_2496[(alu34+624)];
    var val9 = data2_2496[(alu34+648)];
    var val10 = data2_2496[(alu34+720)];
    var val11 = data2_2496[(alu34+744)];
    acc0[0] = (acc0[0]+(val0*val1));
    acc0[1] = (acc0[1]+(val0*val2));
    acc0[2] = (acc0[2]+(val3*val1));
    acc0[3] = (acc0[3]+(val3*val2));
    acc0[4] = (acc0[4]+(val4*val1));
    acc0[5] = (acc0[5]+(val4*val2));
    acc0[6] = (acc0[6]+(val5*val1));
    acc0[7] = (acc0[7]+(val5*val2));
    acc0[8] = (acc0[8]+(val0*val6));
    acc0[9] = (acc0[9]+(val0*val7));
    acc0[10] = (acc0[10]+(val3*val6));
    acc0[11] = (acc0[11]+(val3*val7));
    acc0[12] = (acc0[12]+(val4*val6));
    acc0[13] = (acc0[13]+(val4*val7));
    acc0[14] = (acc0[14]+(val5*val6));
    acc0[15] = (acc0[15]+(val5*val7));
    acc0[16] = (acc0[16]+(val0*val8));
    acc0[17] = (acc0[17]+(val0*val10));
    acc0[18] = (acc0[18]+(val3*val8));
    acc0[19] = (acc0[19]+(val3*val10));
    acc0[20] = (acc0[20]+(val4*val8));
    acc0[21] = (acc0[21]+(val4*val10));
    acc0[22] = (acc0[22]+(val5*val8));
    acc0[23] = (acc0[23]+(val5*val10));
    acc0[24] = (acc0[24]+(val0*val9));
    acc0[25] = (acc0[25]+(val0*val11));
    acc0[26] = (acc0[26]+(val3*val9));
    acc0[27] = (acc0[27]+(val3*val11));
    acc0[28] = (acc0[28]+(val4*val9));
    acc0[29] = (acc0[29]+(val4*val11));
    acc0[30] = (acc0[30]+(val5*val9));
    acc0[31] = (acc0[31]+(val5*val11));
  }
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<i32>((cast0<<3u));
  var val12 = data3_104[(cast1+24)];
  var val13 = data3_104[(cast1+25)];
  var val14 = data3_104[(cast1+26)];
  var val15 = data3_104[(cast1+27)];
  var val16 = data3_104[(cast1+28)];
  var val17 = data3_104[(cast1+29)];
  var val18 = data3_104[(cast1+30)];
  var val19 = data3_104[(cast1+31)];
  var alu68 = (alu0+bitcast<i32>((cast0<<27u)));
  data0_402653184[alu68] = (acc0[0]+val12);
  data0_402653184[(alu68+256)] = (acc0[2]+val12);
  data0_402653184[(alu68+512)] = (acc0[4]+val12);
  data0_402653184[(alu68+768)] = (acc0[6]+val12);
  data0_402653184[(alu68+16777216)] = (acc0[8]+val13);
  data0_402653184[(alu68+16777472)] = (acc0[10]+val13);
  data0_402653184[(alu68+16777728)] = (acc0[12]+val13);
  data0_402653184[(alu68+16777984)] = (acc0[14]+val13);
  data0_402653184[(alu68+33554432)] = (acc0[16]+val14);
  data0_402653184[(alu68+33554688)] = (acc0[18]+val14);
  data0_402653184[(alu68+33554944)] = (acc0[20]+val14);
  data0_402653184[(alu68+33555200)] = (acc0[22]+val14);
  data0_402653184[(alu68+50331648)] = (acc0[24]+val15);
  data0_402653184[(alu68+50331904)] = (acc0[26]+val15);
  data0_402653184[(alu68+50332160)] = (acc0[28]+val15);
  data0_402653184[(alu68+50332416)] = (acc0[30]+val15);
  data0_402653184[(alu68+67108864)] = (acc0[1]+val16);
  data0_402653184[(alu68+67109120)] = (acc0[3]+val16);
  data0_402653184[(alu68+67109376)] = (acc0[5]+val16);
  data0_402653184[(alu68+67109632)] = (acc0[7]+val16);
  data0_402653184[(alu68+83886080)] = (acc0[9]+val17);
  data0_402653184[(alu68+83886336)] = (acc0[11]+val17);
  data0_402653184[(alu68+83886592)] = (acc0[13]+val17);
  data0_402653184[(alu68+83886848)] = (acc0[15]+val17);
  data0_402653184[(alu68+100663296)] = (acc0[17]+val18);
  data0_402653184[(alu68+100663552)] = (acc0[19]+val18);
  data0_402653184[(alu68+100663808)] = (acc0[21]+val18);
  data0_402653184[(alu68+100664064)] = (acc0[23]+val18);
  data0_402653184[(alu68+117440512)] = (acc0[25]+val19);
  data0_402653184[(alu68+117440768)] = (acc0[27]+val19);
  data0_402653184[(alu68+117441024)] = (acc0[29]+val19);
  data0_402653184[(alu68+117441280)] = (acc0[31]+val19);
}`;

const r_262144_32_2_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,2>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u)));
  acc0[0] = (f32(-INFINITY));
  acc0[1] = (f32(-INFINITY));
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    var alu3 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_402653184[alu3];
    var val1 = data1_402653184[(alu3+32)];
    var alu4 = select(acc0[0],val0,(acc0[0]<val0));
    var alu5 = select(acc0[1],val1,(acc0[1]<val1));
    acc0[0] = alu4;
    acc0[1] = alu5;
  }
  var val2 = data2_16777216[alu0];
  var alu9 = (alu0+32);
  var val3 = data2_16777216[alu9];
  var alu10 = select(val2,acc0[0],(val2<acc0[0]));
  var alu11 = select(val3,acc0[1],(val3<acc0[1]));
  data0_16777216[alu0] = alu10;
  data0_16777216[alu9] = alu11;
}`;

const r_65536_32_8_24n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_402653184:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16777216:array<f32>;
@compute @workgroup_size(32,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,1>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 8 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
  var val0 = data2_16777216[alu0];
  acc0[0] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    var val1 = data3_402653184[(alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)))];
    var alu2 = ((i32((val1==val0)))*(24-Ridx0));
    var alu3 = select(acc0[0],alu2,(acc0[0]<alu2));
    acc0[0] = alu3;
  }
  var val2 = data1_16777216[alu0];
  var val3 = data4_16777216[alu0];
  var alu6 = select(val3,((f32((24-acc0[0])))+24.0f),(val2<val0));
  data0_16777216[alu0] = alu6;
}`;

const r_4_4096_16_8_8_4_3_2_6_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 4 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<12u))+bitcast<i32>((bitcast<u32>(lidx2)<<9u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
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
    var cast0 = bitcast<u32>(Ridx0);
    var alu25 = (alu0+bitcast<i32>((cast0<<26u)));
    var val0 = data1_402653184[alu25];
    var alu26 = ((gidx1*144)+bitcast<i32>((cast0<<2u)));
    var val1 = data2_2496[(alu26+1152)];
    var val2 = data1_402653184[(alu25+16777216)];
    var val3 = data2_2496[(alu26+1153)];
    var val4 = data1_402653184[(alu25+33554432)];
    var val5 = data2_2496[(alu26+1154)];
    var val6 = data1_402653184[(alu25+50331648)];
    var val7 = data2_2496[(alu26+1155)];
    var val8 = data2_2496[(alu26+1224)];
    var val9 = data2_2496[(alu26+1225)];
    var val10 = data2_2496[(alu26+1226)];
    var val11 = data2_2496[(alu26+1227)];
    var val12 = data2_2496[(alu26+1176)];
    var val13 = data2_2496[(alu26+1177)];
    var val14 = data2_2496[(alu26+1178)];
    var val15 = data2_2496[(alu26+1179)];
    var val16 = data2_2496[(alu26+1248)];
    var val17 = data2_2496[(alu26+1249)];
    var val18 = data2_2496[(alu26+1250)];
    var val19 = data2_2496[(alu26+1251)];
    var val20 = data2_2496[(alu26+1200)];
    var val21 = data2_2496[(alu26+1201)];
    var val22 = data2_2496[(alu26+1202)];
    var val23 = data2_2496[(alu26+1203)];
    var val24 = data2_2496[(alu26+1272)];
    var val25 = data2_2496[(alu26+1273)];
    var val26 = data2_2496[(alu26+1274)];
    var val27 = data2_2496[(alu26+1275)];
    var val28 = data1_402653184[(alu25+128)];
    var val29 = data1_402653184[(alu25+16777344)];
    var val30 = data1_402653184[(alu25+33554560)];
    var val31 = data1_402653184[(alu25+50331776)];
    var val32 = data1_402653184[(alu25+256)];
    var val33 = data1_402653184[(alu25+16777472)];
    var val34 = data1_402653184[(alu25+33554688)];
    var val35 = data1_402653184[(alu25+50331904)];
    var val36 = data1_402653184[(alu25+384)];
    var val37 = data1_402653184[(alu25+16777600)];
    var val38 = data1_402653184[(alu25+33554816)];
    var val39 = data1_402653184[(alu25+50332032)];
    acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val6*val7));
    acc0[1] = (acc0[1]+(val0*val8)+(val2*val9)+(val4*val10)+(val6*val11));
    acc0[2] = (acc0[2]+(val0*val12)+(val2*val13)+(val4*val14)+(val6*val15));
    acc0[3] = (acc0[3]+(val0*val16)+(val2*val17)+(val4*val18)+(val6*val19));
    acc0[4] = (acc0[4]+(val0*val20)+(val2*val21)+(val4*val22)+(val6*val23));
    acc0[5] = (acc0[5]+(val0*val24)+(val2*val25)+(val4*val26)+(val6*val27));
    acc0[6] = (acc0[6]+(val28*val1)+(val29*val3)+(val30*val5)+(val31*val7));
    acc0[7] = (acc0[7]+(val28*val8)+(val29*val9)+(val30*val10)+(val31*val11));
    acc0[8] = (acc0[8]+(val28*val12)+(val29*val13)+(val30*val14)+(val31*val15));
    acc0[9] = (acc0[9]+(val28*val16)+(val29*val17)+(val30*val18)+(val31*val19));
    acc0[10] = (acc0[10]+(val28*val20)+(val29*val21)+(val30*val22)+(val31*val23));
    acc0[11] = (acc0[11]+(val28*val24)+(val29*val25)+(val30*val26)+(val31*val27));
    acc0[12] = (acc0[12]+(val32*val1)+(val33*val3)+(val34*val5)+(val35*val7));
    acc0[13] = (acc0[13]+(val32*val8)+(val33*val9)+(val34*val10)+(val35*val11));
    acc0[14] = (acc0[14]+(val32*val12)+(val33*val13)+(val34*val14)+(val35*val15));
    acc0[15] = (acc0[15]+(val32*val16)+(val33*val17)+(val34*val18)+(val35*val19));
    acc0[16] = (acc0[16]+(val32*val20)+(val33*val21)+(val34*val22)+(val35*val23));
    acc0[17] = (acc0[17]+(val32*val24)+(val33*val25)+(val34*val26)+(val35*val27));
    acc0[18] = (acc0[18]+(val36*val1)+(val37*val3)+(val38*val5)+(val39*val7));
    acc0[19] = (acc0[19]+(val36*val8)+(val37*val9)+(val38*val10)+(val39*val11));
    acc0[20] = (acc0[20]+(val36*val12)+(val37*val13)+(val38*val14)+(val39*val15));
    acc0[21] = (acc0[21]+(val36*val16)+(val37*val17)+(val38*val18)+(val39*val19));
    acc0[22] = (acc0[22]+(val36*val20)+(val37*val21)+(val38*val22)+(val39*val23));
    acc0[23] = (acc0[23]+(val36*val24)+(val37*val25)+(val38*val26)+(val39*val27));
  }
  var alu52 = (gidx1*6);
  var val40 = data3_104[(alu52+48)];
  var val41 = data3_104[(alu52+49)];
  var val42 = data3_104[(alu52+50)];
  var val43 = data3_104[(alu52+51)];
  var val44 = data3_104[(alu52+52)];
  var val45 = data3_104[(alu52+53)];
  var alu53 = (alu0+(gidx1*100663296));
  data0_402653184[alu53] = (acc0[0]+val40);
  data0_402653184[(alu53+128)] = (acc0[6]+val40);
  data0_402653184[(alu53+256)] = (acc0[12]+val40);
  data0_402653184[(alu53+384)] = (acc0[18]+val40);
  data0_402653184[(alu53+16777216)] = (acc0[2]+val41);
  data0_402653184[(alu53+16777344)] = (acc0[8]+val41);
  data0_402653184[(alu53+16777472)] = (acc0[14]+val41);
  data0_402653184[(alu53+16777600)] = (acc0[20]+val41);
  data0_402653184[(alu53+33554432)] = (acc0[4]+val42);
  data0_402653184[(alu53+33554560)] = (acc0[10]+val42);
  data0_402653184[(alu53+33554688)] = (acc0[16]+val42);
  data0_402653184[(alu53+33554816)] = (acc0[22]+val42);
  data0_402653184[(alu53+50331648)] = (acc0[1]+val43);
  data0_402653184[(alu53+50331776)] = (acc0[7]+val43);
  data0_402653184[(alu53+50331904)] = (acc0[13]+val43);
  data0_402653184[(alu53+50332032)] = (acc0[19]+val43);
  data0_402653184[(alu53+67108864)] = (acc0[3]+val44);
  data0_402653184[(alu53+67108992)] = (acc0[9]+val44);
  data0_402653184[(alu53+67109120)] = (acc0[15]+val44);
  data0_402653184[(alu53+67109248)] = (acc0[21]+val44);
  data0_402653184[(alu53+83886080)] = (acc0[5]+val45);
  data0_402653184[(alu53+83886208)] = (acc0[11]+val45);
  data0_402653184[(alu53+83886336)] = (acc0[17]+val45);
  data0_402653184[(alu53+83886464)] = (acc0[23]+val45);
}`;

const r_8192_32_16_4_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_402653184:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16777216:array<f32>;
@compute @workgroup_size(32,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,4>;
  var gidx0 = i32(gindex.x); /* 8192 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
  var val0 = data2_16777216[alu0];
  var alu1 = (alu0+512);
  var val1 = data2_16777216[alu1];
  var alu2 = (alu0+1024);
  var val2 = data2_16777216[alu2];
  var alu3 = (alu0+1536);
  var val3 = data2_16777216[alu3];
  acc0[0] = -2147483648;
  acc0[1] = -2147483648;
  acc0[2] = -2147483648;
  acc0[3] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    var alu8 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val4 = data3_402653184[alu8];
    var val5 = data3_402653184[(alu8+512)];
    var val6 = data3_402653184[(alu8+1024)];
    var val7 = data3_402653184[(alu8+1536)];
    var alu9 = (24-Ridx0);
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
  var val8 = data1_16777216[alu0];
  var val9 = data1_16777216[alu1];
  var val10 = data1_16777216[alu2];
  var val11 = data1_16777216[alu3];
  var val12 = data4_16777216[alu0];
  var val13 = data4_16777216[alu1];
  var val14 = data4_16777216[alu2];
  var val15 = data4_16777216[alu3];
  var alu23 = select(val12,((f32((24-acc0[0])))+48.0f),(val8<val0));
  var alu24 = select(val13,((f32((24-acc0[1])))+48.0f),(val9<val1));
  var alu25 = select(val14,((f32((24-acc0[2])))+48.0f),(val10<val2));
  var alu26 = select(val15,((f32((24-acc0[3])))+48.0f),(val11<val3));
  data0_16777216[alu0] = alu23;
  data0_16777216[alu1] = alu24;
  data0_16777216[alu2] = alu25;
  data0_16777216[alu3] = alu26;
}`;

const r_3_4096_16_16_4_4_4_2_24n2 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,32>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 4 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<12u))+bitcast<i32>((bitcast<u32>(lidx2)<<10u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
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
    var alu33 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_402653184[alu33];
    var alu34 = ((gidx1*192)+Ridx0);
    var val1 = data2_2496[(alu34+1728)];
    var val2 = data2_2496[(alu34+1824)];
    var val3 = data1_402653184[(alu33+256)];
    var val4 = data1_402653184[(alu33+512)];
    var val5 = data1_402653184[(alu33+768)];
    var val6 = data2_2496[(alu34+1752)];
    var val7 = data2_2496[(alu34+1848)];
    var val8 = data2_2496[(alu34+1776)];
    var val9 = data2_2496[(alu34+1800)];
    var val10 = data2_2496[(alu34+1872)];
    var val11 = data2_2496[(alu34+1896)];
    acc0[0] = (acc0[0]+(val0*val1));
    acc0[1] = (acc0[1]+(val0*val2));
    acc0[2] = (acc0[2]+(val3*val1));
    acc0[3] = (acc0[3]+(val3*val2));
    acc0[4] = (acc0[4]+(val4*val1));
    acc0[5] = (acc0[5]+(val4*val2));
    acc0[6] = (acc0[6]+(val5*val1));
    acc0[7] = (acc0[7]+(val5*val2));
    acc0[8] = (acc0[8]+(val0*val6));
    acc0[9] = (acc0[9]+(val0*val7));
    acc0[10] = (acc0[10]+(val3*val6));
    acc0[11] = (acc0[11]+(val3*val7));
    acc0[12] = (acc0[12]+(val4*val6));
    acc0[13] = (acc0[13]+(val4*val7));
    acc0[14] = (acc0[14]+(val5*val6));
    acc0[15] = (acc0[15]+(val5*val7));
    acc0[16] = (acc0[16]+(val0*val8));
    acc0[17] = (acc0[17]+(val0*val10));
    acc0[18] = (acc0[18]+(val3*val8));
    acc0[19] = (acc0[19]+(val3*val10));
    acc0[20] = (acc0[20]+(val4*val8));
    acc0[21] = (acc0[21]+(val4*val10));
    acc0[22] = (acc0[22]+(val5*val8));
    acc0[23] = (acc0[23]+(val5*val10));
    acc0[24] = (acc0[24]+(val0*val9));
    acc0[25] = (acc0[25]+(val0*val11));
    acc0[26] = (acc0[26]+(val3*val9));
    acc0[27] = (acc0[27]+(val3*val11));
    acc0[28] = (acc0[28]+(val4*val9));
    acc0[29] = (acc0[29]+(val4*val11));
    acc0[30] = (acc0[30]+(val5*val9));
    acc0[31] = (acc0[31]+(val5*val11));
  }
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<i32>((cast0<<3u));
  var val12 = data3_104[(cast1+72)];
  var val13 = data3_104[(cast1+73)];
  var val14 = data3_104[(cast1+74)];
  var val15 = data3_104[(cast1+75)];
  var val16 = data3_104[(cast1+76)];
  var val17 = data3_104[(cast1+77)];
  var val18 = data3_104[(cast1+78)];
  var val19 = data3_104[(cast1+79)];
  var alu68 = (alu0+bitcast<i32>((cast0<<27u)));
  data0_402653184[alu68] = (acc0[0]+val12);
  data0_402653184[(alu68+256)] = (acc0[2]+val12);
  data0_402653184[(alu68+512)] = (acc0[4]+val12);
  data0_402653184[(alu68+768)] = (acc0[6]+val12);
  data0_402653184[(alu68+16777216)] = (acc0[8]+val13);
  data0_402653184[(alu68+16777472)] = (acc0[10]+val13);
  data0_402653184[(alu68+16777728)] = (acc0[12]+val13);
  data0_402653184[(alu68+16777984)] = (acc0[14]+val13);
  data0_402653184[(alu68+33554432)] = (acc0[16]+val14);
  data0_402653184[(alu68+33554688)] = (acc0[18]+val14);
  data0_402653184[(alu68+33554944)] = (acc0[20]+val14);
  data0_402653184[(alu68+33555200)] = (acc0[22]+val14);
  data0_402653184[(alu68+50331648)] = (acc0[24]+val15);
  data0_402653184[(alu68+50331904)] = (acc0[26]+val15);
  data0_402653184[(alu68+50332160)] = (acc0[28]+val15);
  data0_402653184[(alu68+50332416)] = (acc0[30]+val15);
  data0_402653184[(alu68+67108864)] = (acc0[1]+val16);
  data0_402653184[(alu68+67109120)] = (acc0[3]+val16);
  data0_402653184[(alu68+67109376)] = (acc0[5]+val16);
  data0_402653184[(alu68+67109632)] = (acc0[7]+val16);
  data0_402653184[(alu68+83886080)] = (acc0[9]+val17);
  data0_402653184[(alu68+83886336)] = (acc0[11]+val17);
  data0_402653184[(alu68+83886592)] = (acc0[13]+val17);
  data0_402653184[(alu68+83886848)] = (acc0[15]+val17);
  data0_402653184[(alu68+100663296)] = (acc0[17]+val18);
  data0_402653184[(alu68+100663552)] = (acc0[19]+val18);
  data0_402653184[(alu68+100663808)] = (acc0[21]+val18);
  data0_402653184[(alu68+100664064)] = (acc0[23]+val18);
  data0_402653184[(alu68+117440512)] = (acc0[25]+val19);
  data0_402653184[(alu68+117440768)] = (acc0[27]+val19);
  data0_402653184[(alu68+117441024)] = (acc0[29]+val19);
  data0_402653184[(alu68+117441280)] = (acc0[31]+val19);
}`;

const r_65536_16_16_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_402653184:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16777216:array<f32>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var val0 = data1_16777216[alu0];
  var val1 = data2_16777216[alu0];
  var val2 = data3_402653184[alu0];
  var val3 = data3_402653184[(alu0+16777216)];
  var val4 = data3_402653184[(alu0+33554432)];
  var val5 = data3_402653184[(alu0+50331648)];
  var val6 = data3_402653184[(alu0+67108864)];
  var val7 = data3_402653184[(alu0+83886080)];
  var val8 = data3_402653184[(alu0+100663296)];
  var val9 = data3_402653184[(alu0+117440512)];
  var val10 = data3_402653184[(alu0+134217728)];
  var val11 = data3_402653184[(alu0+150994944)];
  var val12 = data3_402653184[(alu0+167772160)];
  var val13 = data3_402653184[(alu0+184549376)];
  var val14 = data3_402653184[(alu0+201326592)];
  var val15 = data3_402653184[(alu0+218103808)];
  var val16 = data3_402653184[(alu0+234881024)];
  var val17 = data3_402653184[(alu0+251658240)];
  var val18 = data3_402653184[(alu0+268435456)];
  var val19 = data3_402653184[(alu0+285212672)];
  var val20 = data3_402653184[(alu0+301989888)];
  var val21 = data3_402653184[(alu0+318767104)];
  var val22 = data3_402653184[(alu0+335544320)];
  var val23 = data3_402653184[(alu0+352321536)];
  var val24 = data3_402653184[(alu0+369098752)];
  var val25 = data3_402653184[(alu0+385875968)];
  var val26 = data4_16777216[alu0];
  var cast0 = (i32((val25==val1)));
  var cast1 = bitcast<i32>((bitcast<u32>((i32((val10==val1))))<<4u));
  var cast2 = bitcast<i32>((bitcast<u32>((i32((val18==val1))))<<3u));
  var cast3 = bitcast<i32>((bitcast<u32>((i32((val22==val1))))<<2u));
  var cast4 = bitcast<i32>((bitcast<u32>((i32((val24==val1))))<<1u));
  var alu1 = ((i32((val2==val1)))*24);
  var alu2 = ((i32((val3==val1)))*23);
  var alu3 = ((i32((val4==val1)))*22);
  var alu4 = ((i32((val5==val1)))*21);
  var alu5 = ((i32((val6==val1)))*20);
  var alu6 = ((i32((val7==val1)))*19);
  var alu7 = ((i32((val8==val1)))*18);
  var alu8 = ((i32((val9==val1)))*17);
  var alu9 = ((i32((val11==val1)))*15);
  var alu10 = ((i32((val12==val1)))*14);
  var alu11 = ((i32((val13==val1)))*13);
  var alu12 = ((i32((val14==val1)))*12);
  var alu13 = ((i32((val15==val1)))*11);
  var alu14 = ((i32((val16==val1)))*10);
  var alu15 = ((i32((val17==val1)))*9);
  var alu16 = ((i32((val19==val1)))*7);
  var alu17 = ((i32((val20==val1)))*6);
  var alu18 = ((i32((val21==val1)))*5);
  var alu19 = ((i32((val23==val1)))*3);
  var alu20 = select(alu1,alu2,(alu1<alu2));
  var alu21 = select(alu20,alu3,(alu20<alu3));
  var alu22 = select(alu21,alu4,(alu21<alu4));
  var alu23 = select(alu22,alu5,(alu22<alu5));
  var alu24 = select(alu23,alu6,(alu23<alu6));
  var alu25 = select(alu24,alu7,(alu24<alu7));
  var alu26 = select(alu25,alu8,(alu25<alu8));
  var alu27 = select(alu26,cast1,(alu26<cast1));
  var alu28 = select(alu27,alu9,(alu27<alu9));
  var alu29 = select(alu28,alu10,(alu28<alu10));
  var alu30 = select(alu29,alu11,(alu29<alu11));
  var alu31 = select(alu30,alu12,(alu30<alu12));
  var alu32 = select(alu31,alu13,(alu31<alu13));
  var alu33 = select(alu32,alu14,(alu32<alu14));
  var alu34 = select(alu33,alu15,(alu33<alu15));
  var alu35 = select(alu34,cast2,(alu34<cast2));
  var alu36 = select(alu35,alu16,(alu35<alu16));
  var alu37 = select(alu36,alu17,(alu36<alu17));
  var alu38 = select(alu37,alu18,(alu37<alu18));
  var alu39 = select(alu38,cast3,(alu38<cast3));
  var alu40 = select(alu39,alu19,(alu39<alu19));
  var alu41 = select(alu40,cast4,(alu40<cast4));
  var alu42 = select(alu41,cast0,(alu41<cast0));
  var alu43 = select(val26,((f32((24-alu42)))+72.0f),(val0<val1));
  data0_16777216[alu0] = alu43;
}`;

const r_8192_32_32_8_2_6_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_134217728:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(32,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 8192 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<11u))+bitcast<i32>((bitcast<u32>(lidx1)<<6u)));
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
  for (var Ridx0 = 0; Ridx0 < 6; Ridx0++) {
    var cast0 = bitcast<u32>(Ridx0);
    var alu17 = (alu0+bitcast<i32>((cast0<<26u)));
    var val0 = data1_402653184[alu17];
    var cast1 = bitcast<i32>((cast0<<2u));
    var val1 = data2_2496[(cast1+2304)];
    var val2 = data1_402653184[(alu17+16777216)];
    var val3 = data2_2496[(cast1+2305)];
    var val4 = data1_402653184[(alu17+33554432)];
    var val5 = data2_2496[(cast1+2306)];
    var val6 = data1_402653184[(alu17+32)];
    var val7 = data1_402653184[(alu17+16777248)];
    var val8 = data1_402653184[(alu17+50331648)];
    var val9 = data2_2496[(cast1+2307)];
    var val10 = data1_402653184[(alu17+33554464)];
    var val11 = data1_402653184[(alu17+50331680)];
    var val12 = data2_2496[(cast1+2328)];
    var val13 = data2_2496[(cast1+2329)];
    var val14 = data2_2496[(cast1+2330)];
    var val15 = data2_2496[(cast1+2331)];
    var val16 = data2_2496[(cast1+2352)];
    var val17 = data2_2496[(cast1+2353)];
    var val18 = data2_2496[(cast1+2354)];
    var val19 = data2_2496[(cast1+2355)];
    var val20 = data2_2496[(cast1+2376)];
    var val21 = data2_2496[(cast1+2377)];
    var val22 = data2_2496[(cast1+2378)];
    var val23 = data2_2496[(cast1+2379)];
    var val24 = data2_2496[(cast1+2400)];
    var val25 = data2_2496[(cast1+2401)];
    var val26 = data2_2496[(cast1+2402)];
    var val27 = data2_2496[(cast1+2403)];
    var val28 = data2_2496[(cast1+2424)];
    var val29 = data2_2496[(cast1+2425)];
    var val30 = data2_2496[(cast1+2426)];
    var val31 = data2_2496[(cast1+2427)];
    var val32 = data2_2496[(cast1+2448)];
    var val33 = data2_2496[(cast1+2449)];
    var val34 = data2_2496[(cast1+2450)];
    var val35 = data2_2496[(cast1+2451)];
    var val36 = data2_2496[(cast1+2472)];
    var val37 = data2_2496[(cast1+2473)];
    var val38 = data2_2496[(cast1+2474)];
    var val39 = data2_2496[(cast1+2475)];
    acc0[0] = (acc0[0]+(val0*val1)+(val2*val3)+(val4*val5)+(val8*val9));
    acc0[1] = (acc0[1]+(val6*val1)+(val7*val3)+(val10*val5)+(val11*val9));
    acc0[2] = (acc0[2]+(val0*val12)+(val2*val13)+(val4*val14)+(val8*val15));
    acc0[3] = (acc0[3]+(val6*val12)+(val7*val13)+(val10*val14)+(val11*val15));
    acc0[4] = (acc0[4]+(val0*val16)+(val2*val17)+(val4*val18)+(val8*val19));
    acc0[5] = (acc0[5]+(val6*val16)+(val7*val17)+(val10*val18)+(val11*val19));
    acc0[6] = (acc0[6]+(val0*val20)+(val2*val21)+(val4*val22)+(val8*val23));
    acc0[7] = (acc0[7]+(val6*val20)+(val7*val21)+(val10*val22)+(val11*val23));
    acc0[8] = (acc0[8]+(val0*val24)+(val2*val25)+(val4*val26)+(val8*val27));
    acc0[9] = (acc0[9]+(val6*val24)+(val7*val25)+(val10*val26)+(val11*val27));
    acc0[10] = (acc0[10]+(val0*val28)+(val2*val29)+(val4*val30)+(val8*val31));
    acc0[11] = (acc0[11]+(val6*val28)+(val7*val29)+(val10*val30)+(val11*val31));
    acc0[12] = (acc0[12]+(val0*val32)+(val2*val33)+(val4*val34)+(val8*val35));
    acc0[13] = (acc0[13]+(val6*val32)+(val7*val33)+(val10*val34)+(val11*val35));
    acc0[14] = (acc0[14]+(val0*val36)+(val2*val37)+(val4*val38)+(val8*val39));
    acc0[15] = (acc0[15]+(val6*val36)+(val7*val37)+(val10*val38)+(val11*val39));
  }
  var val40 = data3_104[96];
  var val41 = data3_104[97];
  var val42 = data3_104[98];
  var val43 = data3_104[99];
  var val44 = data3_104[100];
  var val45 = data3_104[101];
  var val46 = data3_104[102];
  var val47 = data3_104[103];
  data0_134217728[alu0] = (acc0[0]+val40);
  data0_134217728[(alu0+32)] = (acc0[1]+val40);
  data0_134217728[(alu0+16777216)] = (acc0[2]+val41);
  data0_134217728[(alu0+16777248)] = (acc0[3]+val41);
  data0_134217728[(alu0+33554432)] = (acc0[4]+val42);
  data0_134217728[(alu0+33554464)] = (acc0[5]+val42);
  data0_134217728[(alu0+50331648)] = (acc0[6]+val43);
  data0_134217728[(alu0+50331680)] = (acc0[7]+val43);
  data0_134217728[(alu0+67108864)] = (acc0[8]+val44);
  data0_134217728[(alu0+67108896)] = (acc0[9]+val44);
  data0_134217728[(alu0+83886080)] = (acc0[10]+val45);
  data0_134217728[(alu0+83886112)] = (acc0[11]+val45);
  data0_134217728[(alu0+100663296)] = (acc0[12]+val46);
  data0_134217728[(alu0+100663328)] = (acc0[13]+val46);
  data0_134217728[(alu0+117440512)] = (acc0[14]+val47);
  data0_134217728[(alu0+117440544)] = (acc0[15]+val47);
}`;

const r_65536_16_16_8n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_134217728:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(16,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  var val0 = data2_16777216[alu0];
  var val1 = data1_134217728[alu0];
  var val2 = data1_134217728[(alu0+16777216)];
  var val3 = data1_134217728[(alu0+33554432)];
  var val4 = data1_134217728[(alu0+50331648)];
  var val5 = data1_134217728[(alu0+67108864)];
  var val6 = data1_134217728[(alu0+83886080)];
  var val7 = data1_134217728[(alu0+100663296)];
  var val8 = data1_134217728[(alu0+117440512)];
  var alu1 = select(val1,val2,(val1<val2));
  var alu2 = select(alu1,val3,(alu1<val3));
  var alu3 = select(alu2,val4,(alu2<val4));
  var alu4 = select(alu3,val5,(alu3<val5));
  var alu5 = select(alu4,val6,(alu4<val6));
  var alu6 = select(alu5,val7,(alu5<val7));
  var alu7 = select(alu6,val8,(alu6<val8));
  var alu8 = select(val0,alu7,(val0<alu7));
  data0_16777216[alu0] = alu8;
}`;

const r_262144_32_2_8 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_134217728:array<f32>;
@compute @workgroup_size(32,2) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 2 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
  var val0 = data1_134217728[alu0];
  var val1 = data1_134217728[(alu0+16777216)];
  var val2 = data1_134217728[(alu0+33554432)];
  var val3 = data1_134217728[(alu0+50331648)];
  var val4 = data1_134217728[(alu0+67108864)];
  var val5 = data1_134217728[(alu0+83886080)];
  var val6 = data1_134217728[(alu0+100663296)];
  var val7 = data1_134217728[(alu0+117440512)];
  var alu1 = select(val0,val1,(val0<val1));
  var alu2 = select(alu1,val2,(alu1<val2));
  var alu3 = select(alu2,val3,(alu2<val3));
  var alu4 = select(alu3,val4,(alu3<val4));
  var alu5 = select(alu4,val5,(alu4<val5));
  var alu6 = select(alu5,val6,(alu5<val6));
  var alu7 = select(alu6,val7,(alu6<val7));
  data0_16777216[alu0] = alu7;
}`;

const r_16384_32_32_8 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_134217728:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16777216:array<f32>;
@compute @workgroup_size(32,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,1>;
  var gidx0 = i32(gindex.x); /* 16384 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<10u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u)));
  var val0 = data2_16777216[alu0];
  acc0[0] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 8; Ridx0++) {
    var val1 = data3_134217728[(alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)))];
    var alu2 = ((i32((val1==val0)))*(8-Ridx0));
    var alu3 = select(acc0[0],alu2,(acc0[0]<alu2));
    acc0[0] = alu3;
  }
  var val2 = data1_16777216[alu0];
  var val3 = data4_16777216[alu0];
  var alu6 = select(val3,((f32((8-acc0[0])))+96.0f),(val2<val0));
  data0_16777216[alu0] = alu6;
}`;

const setupNet = async (device, safetensor) => {
    const metadata = getTensorMetadata(safetensor);
    const infinityBuf = createInfinityUniformBuf(device);

    const layouts=[device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]})]

    const buf_0 = createEmptyBuf(device, 1610612736);;
    const input0 = createEmptyBuf(device, 67108864);;
    const buf_1 = createWeightBuf(device, 2592, getTensorBuffer(safetensor, metadata['m.model.0.weight']));
    const buf_2 = createEmptyBuf(device, 6291456);;
    const buf_3 = createEmptyBuf(device, 24576);;
    const buf_4 = createEmptyBuf(device, 96);;
    const buf_5 = createEmptyBuf(device, 96);;
    const buf_6 = createEmptyBuf(device, 1610612736);;
    const buf_7 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.1.weight']));
    const buf_8 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.1.bias']));
    const buf_9 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.3.weight']));
    const buf_10 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.4.weight']));
    const buf_11 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.4.bias']));
    const buf_12 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.6.weight']));
    const buf_13 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.7.weight']));
    const buf_14 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.7.bias']));
    const buf_15 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.9.weight']));
    const buf_16 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.10.weight']));
    const buf_17 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.10.bias']));
    const buf_18 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.12.weight']));
    const buf_19 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.13.weight']));
    const buf_20 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.13.bias']));
    const buf_21 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.15.weight']));
    const buf_22 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.16.weight']));
    const buf_23 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.16.bias']));
    const buf_24 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.18.weight']));
    const buf_25 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.19.weight']));
    const buf_26 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.19.bias']));
    const buf_27 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.21.weight']));
    const buf_28 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.22.weight']));
    const buf_29 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.22.bias']));
    const buf_30 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.24.weight']));
    const buf_31 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.25.weight']));
    const buf_32 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.25.bias']));
    const buf_33 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.27.weight']));
    const buf_34 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.28.weight']));
    const buf_35 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.28.bias']));
    const buf_36 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.30.weight']));
    const buf_37 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.31.weight']));
    const buf_38 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.31.bias']));
    const buf_39 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.33.weight']));
    const buf_40 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.34.weight']));
    const buf_41 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.34.bias']));
    const buf_42 = createWeightBuf(device, 62208, getTensorBuffer(safetensor, metadata['m.model.36.weight']));
    const buf_43 = createEmptyBuf(device, 1610612736);;
    const buf_44 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.37.weight']));
    const buf_45 = createWeightBuf(device, 96, getTensorBuffer(safetensor, metadata['m.model.37.bias']));
    const buf_46 = createEmptyBuf(device, 1610612736);;
    const buf_47 = createWeightBuf(device, 9984, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.weight']));
    const buf_48 = createWeightBuf(device, 416, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.bias']));
    const buf_49 = createEmptyBuf(device, 67108864);;
    const buf_50 = createEmptyBuf(device, 67108864);;
    const buf_51 = createEmptyBuf(device, 1610612736);;
    const buf_52 = createEmptyBuf(device, 67108864);;
    const buf_53 = createEmptyBuf(device, 67108864);;
    const buf_54 = createEmptyBuf(device, 67108864);;
    const buf_55 = createEmptyBuf(device, 1610612736);;
    const buf_56 = createEmptyBuf(device, 67108864);;
    const buf_57 = createEmptyBuf(device, 67108864);;
    const buf_58 = createEmptyBuf(device, 1610612736);;
    const buf_59 = createEmptyBuf(device, 67108864);;
    const buf_60 = createEmptyBuf(device, 67108864);;
    const buf_61 = createEmptyBuf(device, 536870912);;
    const buf_62 = createEmptyBuf(device, 67108864);;
    const output0 = createEmptyBuf(device, 67108864);;

    const gpuWriteBuffer0 = device.createBuffer({size:input0.size, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE });

    const gpuReadBuffer0 = device.createBuffer({size:output0.size, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });

    const kernels = [r_3_16_256_2_16_16_16_4_3_3_3, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_6_16_256_16_4_16_16_24_3_3_3, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_32_256_16_8_8_16_24_3_3_3, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_32_256_16_8_8_16_24_3_3_3n1, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_6_16_256_16_4_16_16_24_3_3_3n1, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_32_256_16_8_8_16_24_3_3_3n2, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_16_256_16_2_16_4_16_24_3_3_3, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_32_256_16_8_8_16_24_3_3_3n2, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_6_16_256_16_4_16_16_24_3_3_3n1, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_32_256_16_8_8_16_24_3_3_3n1, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_32_256_16_8_8_16_24_3_3_3, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_6_16_256_16_4_16_16_24_3_3_3, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_16_256_16_2_16_16_4_24_3_3_3n4, r_6144_16_16_4_4_16, r_256_4_8_3_64, r_24_64_4n1, r_24_4096_16_16_16, r_256_4_8_3_64, r_8_3_256n1, E_24_65536_16_16, r_3_4096_16_16_4_4_4_2_24, r_524288_32_24n5, r_65536_32_8_24, r_3_4096_16_16_4_4_4_2_24n1, r_262144_32_2_24, r_524288_32_24n5, r_65536_32_8_24n1, r_4_4096_16_8_8_4_3_2_6_4, r_262144_32_2_24, r_524288_32_24n5, r_8192_32_16_4_24, r_3_4096_16_16_4_4_4_2_24n2, r_262144_32_2_24, r_524288_32_24n5, r_65536_16_16_24, r_8192_32_32_8_2_6_4, r_65536_16_16_8n1, r_262144_32_2_8, r_16384_32_32_8];
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
        addComputePass(device, commandEncoder, pipelines[0], layouts[0], infinityBuf, [buf_0, input0, buf_1], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[1], layouts[1], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[2], layouts[2], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[3], layouts[3], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[4], layouts[4], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[5], layouts[5], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[6], layouts[6], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[7], layouts[7], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_7, buf_8], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[8], layouts[8], infinityBuf, [buf_0, buf_6, buf_9], [256, 16, 6]);
        addComputePass(device, commandEncoder, pipelines[9], layouts[9], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[10], layouts[10], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[11], layouts[11], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[12], layouts[12], infinityBuf, [buf_2, buf_0, buf_5], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[13], layouts[13], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[14], layouts[14], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[15], layouts[15], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_10, buf_11], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[16], layouts[16], infinityBuf, [buf_0, buf_6, buf_12], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[17], layouts[17], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[18], layouts[18], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[19], layouts[19], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[20], layouts[20], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[21], layouts[21], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[22], layouts[22], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[23], layouts[23], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_13, buf_14], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[24], layouts[24], infinityBuf, [buf_0, buf_6, buf_15], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[25], layouts[25], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[26], layouts[26], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[27], layouts[27], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[28], layouts[28], infinityBuf, [buf_2, buf_0, buf_5], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[29], layouts[29], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[30], layouts[30], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[31], layouts[31], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_16, buf_17], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[32], layouts[32], infinityBuf, [buf_0, buf_6, buf_18], [256, 16, 6]);
        addComputePass(device, commandEncoder, pipelines[33], layouts[33], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[34], layouts[34], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[35], layouts[35], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[36], layouts[36], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[37], layouts[37], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[38], layouts[38], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[39], layouts[39], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_19, buf_20], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[40], layouts[40], infinityBuf, [buf_0, buf_6, buf_21], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[41], layouts[41], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[42], layouts[42], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[43], layouts[43], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[44], layouts[44], infinityBuf, [buf_2, buf_0, buf_5], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[45], layouts[45], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[46], layouts[46], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[47], layouts[47], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_22, buf_23], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[48], layouts[48], infinityBuf, [buf_0, buf_6, buf_24], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[49], layouts[49], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[50], layouts[50], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[51], layouts[51], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[52], layouts[52], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[53], layouts[53], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[54], layouts[54], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[55], layouts[55], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_25, buf_26], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[56], layouts[56], infinityBuf, [buf_0, buf_6, buf_27], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[57], layouts[57], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[58], layouts[58], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[59], layouts[59], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[60], layouts[60], infinityBuf, [buf_2, buf_0, buf_5], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[61], layouts[61], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[62], layouts[62], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[63], layouts[63], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_28, buf_29], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[64], layouts[64], infinityBuf, [buf_0, buf_6, buf_30], [256, 16, 6]);
        addComputePass(device, commandEncoder, pipelines[65], layouts[65], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[66], layouts[66], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[67], layouts[67], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[68], layouts[68], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[69], layouts[69], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[70], layouts[70], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[71], layouts[71], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_31, buf_32], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[72], layouts[72], infinityBuf, [buf_0, buf_6, buf_33], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[73], layouts[73], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[74], layouts[74], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[75], layouts[75], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[76], layouts[76], infinityBuf, [buf_2, buf_0, buf_5], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[77], layouts[77], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[78], layouts[78], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[79], layouts[79], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_34, buf_35], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[80], layouts[80], infinityBuf, [buf_0, buf_6, buf_36], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[81], layouts[81], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[82], layouts[82], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[83], layouts[83], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[84], layouts[84], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[85], layouts[85], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[86], layouts[86], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[87], layouts[87], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_37, buf_38], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[88], layouts[88], infinityBuf, [buf_0, buf_6, buf_39], [256, 16, 6]);
        addComputePass(device, commandEncoder, pipelines[89], layouts[89], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[90], layouts[90], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[91], layouts[91], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[92], layouts[92], infinityBuf, [buf_2, buf_0, buf_5], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[93], layouts[93], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[94], layouts[94], infinityBuf, [buf_4, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[95], layouts[95], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_40, buf_41], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[96], layouts[96], infinityBuf, [buf_0, buf_6, buf_42], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[97], layouts[97], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[98], layouts[98], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[99], layouts[99], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[100], layouts[100], infinityBuf, [buf_2, buf_0, buf_4], [4096, 24, 1]);
        addComputePass(device, commandEncoder, pipelines[101], layouts[101], infinityBuf, [buf_3, buf_2], [256, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[102], layouts[102], infinityBuf, [buf_5, buf_3], [8, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[103], layouts[103], infinityBuf, [buf_43, buf_0, buf_4, buf_5, buf_44, buf_45], [32768, 48, 1]);
        addComputePass(device, commandEncoder, pipelines[104], layouts[104], infinityBuf, [buf_46, buf_43, buf_47, buf_48], [4096, 3, 1]);
        addComputePass(device, commandEncoder, pipelines[105], layouts[105], infinityBuf, [buf_49, buf_46], [32768, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[106], layouts[106], infinityBuf, [buf_50, buf_46, buf_49], [32768, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[107], layouts[107], infinityBuf, [buf_51, buf_43, buf_47, buf_48], [4096, 3, 1]);
        addComputePass(device, commandEncoder, pipelines[108], layouts[108], infinityBuf, [buf_52, buf_51, buf_49], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[109], layouts[109], infinityBuf, [buf_53, buf_51], [32768, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[110], layouts[110], infinityBuf, [buf_54, buf_49, buf_53, buf_51, buf_50], [32768, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[111], layouts[111], infinityBuf, [buf_55, buf_43, buf_47, buf_48], [4096, 4, 1]);
        addComputePass(device, commandEncoder, pipelines[112], layouts[112], infinityBuf, [buf_56, buf_55, buf_52], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[113], layouts[113], infinityBuf, [buf_53, buf_55], [32768, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[114], layouts[114], infinityBuf, [buf_57, buf_52, buf_53, buf_55, buf_54], [8192, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[115], layouts[115], infinityBuf, [buf_58, buf_43, buf_47, buf_48], [4096, 3, 1]);
        addComputePass(device, commandEncoder, pipelines[116], layouts[116], infinityBuf, [buf_59, buf_58, buf_56], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[117], layouts[117], infinityBuf, [buf_53, buf_58], [32768, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[118], layouts[118], infinityBuf, [buf_60, buf_56, buf_53, buf_58, buf_57], [32768, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[119], layouts[119], infinityBuf, [buf_61, buf_43, buf_47, buf_48], [8192, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[120], layouts[120], infinityBuf, [buf_62, buf_61, buf_59], [32768, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[121], layouts[121], infinityBuf, [buf_53, buf_61], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[122], layouts[122], infinityBuf, [output0, buf_59, buf_53, buf_61, buf_60], [16384, 1, 1]);
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
export default dkatlas24_f32;
