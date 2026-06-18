
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

const r_3_16_256_16_2_16_16_4_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_648:array<f32>;
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
  for (var Ridx0 = 0; Ridx0 < 3; Ridx0++) {
    var alu65 = ((0<(gidx1+lidx2+Ridx0))&((lidx2+bitcast<i32>((cast1<<4u))+Ridx0)<257));
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu66 = (gidx0+Ridx1);
      var alu67 = ((0<alu66)&(alu66<257));
      var alu68 = (alu67&alu65);
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu69 = (lidx0+Ridx2);
        var alu70 = (alu69+cast0+bitcast<i32>((bitcast<u32>(Ridx1)<<8u))+alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<16u)));
        var val0 = select(0.0f, data1_16777216[(alu70+-65793)], ((0<alu69)&alu67&alu65));
        var alu71 = ((Ridx1*3)+Ridx2+(Ridx0*9)+(gidx2*216)+(lidx1*108));
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
  var alu139 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<26u)));
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

const r_6144_8_16_8_2_32 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,2048>;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@compute @workgroup_size(8,16,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,2>;
  var gidx0 = i32(gindex.x); /* 6144 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 8 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((cast0<<16u))+bitcast<i32>((cast2<<13u))+bitcast<i32>((cast1<<8u)));
  var val0 = data1_402653184[alu0];
  var val1 = data1_402653184[(alu0+8)];
  var val2 = data1_402653184[(alu0+16)];
  var val3 = data1_402653184[(alu0+24)];
  var val4 = data1_402653184[(alu0+32)];
  var val5 = data1_402653184[(alu0+40)];
  var val6 = data1_402653184[(alu0+48)];
  var val7 = data1_402653184[(alu0+56)];
  var val8 = data1_402653184[(alu0+64)];
  var val9 = data1_402653184[(alu0+72)];
  var val10 = data1_402653184[(alu0+80)];
  var val11 = data1_402653184[(alu0+88)];
  var val12 = data1_402653184[(alu0+96)];
  var val13 = data1_402653184[(alu0+104)];
  var val14 = data1_402653184[(alu0+112)];
  var val15 = data1_402653184[(alu0+120)];
  var val16 = data1_402653184[(alu0+128)];
  var val17 = data1_402653184[(alu0+136)];
  var val18 = data1_402653184[(alu0+144)];
  var val19 = data1_402653184[(alu0+152)];
  var val20 = data1_402653184[(alu0+160)];
  var val21 = data1_402653184[(alu0+168)];
  var val22 = data1_402653184[(alu0+176)];
  var val23 = data1_402653184[(alu0+184)];
  var val24 = data1_402653184[(alu0+192)];
  var val25 = data1_402653184[(alu0+200)];
  var val26 = data1_402653184[(alu0+208)];
  var val27 = data1_402653184[(alu0+216)];
  var val28 = data1_402653184[(alu0+224)];
  var val29 = data1_402653184[(alu0+232)];
  var val30 = data1_402653184[(alu0+240)];
  var val31 = data1_402653184[(alu0+248)];
  var val32 = data1_402653184[(alu0+4096)];
  var val33 = data1_402653184[(alu0+4104)];
  var val34 = data1_402653184[(alu0+4112)];
  var val35 = data1_402653184[(alu0+4120)];
  var val36 = data1_402653184[(alu0+4128)];
  var val37 = data1_402653184[(alu0+4136)];
  var val38 = data1_402653184[(alu0+4144)];
  var val39 = data1_402653184[(alu0+4152)];
  var val40 = data1_402653184[(alu0+4160)];
  var val41 = data1_402653184[(alu0+4168)];
  var val42 = data1_402653184[(alu0+4176)];
  var val43 = data1_402653184[(alu0+4184)];
  var val44 = data1_402653184[(alu0+4192)];
  var val45 = data1_402653184[(alu0+4200)];
  var val46 = data1_402653184[(alu0+4208)];
  var val47 = data1_402653184[(alu0+4216)];
  var val48 = data1_402653184[(alu0+4224)];
  var val49 = data1_402653184[(alu0+4232)];
  var val50 = data1_402653184[(alu0+4240)];
  var val51 = data1_402653184[(alu0+4248)];
  var val52 = data1_402653184[(alu0+4256)];
  var val53 = data1_402653184[(alu0+4264)];
  var val54 = data1_402653184[(alu0+4272)];
  var val55 = data1_402653184[(alu0+4280)];
  var val56 = data1_402653184[(alu0+4288)];
  var val57 = data1_402653184[(alu0+4296)];
  var val58 = data1_402653184[(alu0+4304)];
  var val59 = data1_402653184[(alu0+4312)];
  var val60 = data1_402653184[(alu0+4320)];
  var val61 = data1_402653184[(alu0+4328)];
  var val62 = data1_402653184[(alu0+4336)];
  var val63 = data1_402653184[(alu0+4344)];
  var cast3 = bitcast<i32>((cast1<<4u));
  var cast4 = bitcast<i32>((cast2<<8u));
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
  var alu11 = (lidx1+bitcast<i32>((cast0<<8u))+bitcast<i32>((cast2<<5u)));
  var alu12 = ((bool(lidx0))!=true);
  if (alu12) {
    data0_1572864[alu11] = acc0[0];
  }
  if (alu12) {
    data0_1572864[(alu11+16)] = acc0[1];
  }
}`;

const r_6144_4_64 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,4>;
@group(0) @binding(1)var<storage,read_write>data0_6144:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_1572864:array<f32>;
@compute @workgroup_size(4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,1>;
  var acc1: array<f32,1>;
  var gidx0 = i32(gindex.x); /* 6144 */
  var lidx0 = i32(lindex.x); /* 4 */
  acc0[0] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 64; Ridx0++) {
    var val0 = data1_1572864[(lidx0+bitcast<i32>((bitcast<u32>(Ridx0)<<2u))+bitcast<i32>((bitcast<u32>(gidx0)<<8u)))];
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
    data0_6144[gidx0] = acc1[0];
  }
}`;

const r_24_16_16 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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
    data0_24[gidx0] = (acc1[0]*5.960464477539063e-08f);
  }
}`;

const r_2_4096_16_16_3_4_16 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
var<workgroup> temp0: array<f32,3072>;
@group(0) @binding(1)var<storage,read_write>data0_1572864:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@compute @workgroup_size(16,16,3) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,4>;
  var gidx0 = i32(gindex.x); /* 4096 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 16 */
  var lidx2 = i32(lindex.z); /* 3 */
  var cast0 = bitcast<u32>(gidx0);
  var cast1 = bitcast<u32>(lidx2);
  var alu0 = (lidx0+bitcast<i32>((cast0<<12u))+bitcast<i32>((bitcast<u32>(lidx1)<<8u))+(gidx1*201326592)+bitcast<i32>((cast1<<26u)));
  var val0 = data1_402653184[alu0];
  var alu1 = ((gidx1*12)+bitcast<i32>((cast1<<2u)));
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
  var val51 = data1_402653184[(alu0+50331648)];
  var val52 = data2_24[(alu1+3)];
  var val53 = data1_402653184[(alu0+50331664)];
  var val54 = data1_402653184[(alu0+50331680)];
  var val55 = data1_402653184[(alu0+50331696)];
  var val56 = data1_402653184[(alu0+50331712)];
  var val57 = data1_402653184[(alu0+50331728)];
  var val58 = data1_402653184[(alu0+50331744)];
  var val59 = data1_402653184[(alu0+50331760)];
  var val60 = data1_402653184[(alu0+50331776)];
  var val61 = data1_402653184[(alu0+50331792)];
  var val62 = data1_402653184[(alu0+50331808)];
  var val63 = data1_402653184[(alu0+50331824)];
  var val64 = data1_402653184[(alu0+50331840)];
  var val65 = data1_402653184[(alu0+50331856)];
  var val66 = data1_402653184[(alu0+50331872)];
  var val67 = data1_402653184[(alu0+50331888)];
  var cast2 = bitcast<i32>((cast1<<6u));
  var alu2 = (lidx1*192);
  var alu3 = (bitcast<i32>((bitcast<u32>(lidx0)<<2u))+cast2+alu2);
  var alu4 = (val0-val1);
  var alu5 = (val2-val1);
  var alu6 = (val3-val1);
  var alu7 = (val4-val1);
  var alu8 = (val5-val1);
  var alu9 = (val6-val1);
  var alu10 = (val7-val1);
  var alu11 = (val8-val1);
  var alu12 = (val9-val1);
  var alu13 = (val10-val1);
  var alu14 = (val11-val1);
  var alu15 = (val12-val1);
  var alu16 = (val13-val1);
  var alu17 = (val14-val1);
  var alu18 = (val15-val1);
  var alu19 = (val16-val1);
  var alu20 = (val17-val18);
  var alu21 = (val19-val18);
  var alu22 = (val20-val18);
  var alu23 = (val21-val18);
  var alu24 = (val22-val18);
  var alu25 = (val23-val18);
  var alu26 = (val24-val18);
  var alu27 = (val25-val18);
  var alu28 = (val26-val18);
  var alu29 = (val27-val18);
  var alu30 = (val28-val18);
  var alu31 = (val29-val18);
  var alu32 = (val30-val18);
  var alu33 = (val31-val18);
  var alu34 = (val32-val18);
  var alu35 = (val33-val18);
  var alu36 = (val34-val35);
  var alu37 = (val36-val35);
  var alu38 = (val37-val35);
  var alu39 = (val38-val35);
  var alu40 = (val39-val35);
  var alu41 = (val40-val35);
  var alu42 = (val41-val35);
  var alu43 = (val42-val35);
  var alu44 = (val43-val35);
  var alu45 = (val44-val35);
  var alu46 = (val45-val35);
  var alu47 = (val46-val35);
  var alu48 = (val47-val35);
  var alu49 = (val48-val35);
  var alu50 = (val49-val35);
  var alu51 = (val50-val35);
  var alu52 = (val51-val52);
  var alu53 = (val53-val52);
  var alu54 = (val54-val52);
  var alu55 = (val55-val52);
  var alu56 = (val56-val52);
  var alu57 = (val57-val52);
  var alu58 = (val58-val52);
  var alu59 = (val59-val52);
  var alu60 = (val60-val52);
  var alu61 = (val61-val52);
  var alu62 = (val62-val52);
  var alu63 = (val63-val52);
  var alu64 = (val64-val52);
  var alu65 = (val65-val52);
  var alu66 = (val66-val52);
  var alu67 = (val67-val52);
  temp0[alu3] = ((alu4*alu4)+(alu5*alu5)+(alu6*alu6)+(alu7*alu7)+(alu8*alu8)+(alu9*alu9)+(alu10*alu10)+(alu11*alu11)+(alu12*alu12)+(alu13*alu13)+(alu14*alu14)+(alu15*alu15)+(alu16*alu16)+(alu17*alu17)+(alu18*alu18)+(alu19*alu19));
  temp0[(alu3+1)] = ((alu20*alu20)+(alu21*alu21)+(alu22*alu22)+(alu23*alu23)+(alu24*alu24)+(alu25*alu25)+(alu26*alu26)+(alu27*alu27)+(alu28*alu28)+(alu29*alu29)+(alu30*alu30)+(alu31*alu31)+(alu32*alu32)+(alu33*alu33)+(alu34*alu34)+(alu35*alu35));
  temp0[(alu3+2)] = ((alu36*alu36)+(alu37*alu37)+(alu38*alu38)+(alu39*alu39)+(alu40*alu40)+(alu41*alu41)+(alu42*alu42)+(alu43*alu43)+(alu44*alu44)+(alu45*alu45)+(alu46*alu46)+(alu47*alu47)+(alu48*alu48)+(alu49*alu49)+(alu50*alu50)+(alu51*alu51));
  temp0[(alu3+3)] = ((alu52*alu52)+(alu53*alu53)+(alu54*alu54)+(alu55*alu55)+(alu56*alu56)+(alu57*alu57)+(alu58*alu58)+(alu59*alu59)+(alu60*alu60)+(alu61*alu61)+(alu62*alu62)+(alu63*alu63)+(alu64*alu64)+(alu65*alu65)+(alu66*alu66)+(alu67*alu67));
  workgroupBarrier();
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  for (var Ridx103 = 0; Ridx103 < 16; Ridx103++) {
    var alu77 = (cast2+bitcast<i32>((bitcast<u32>(Ridx103)<<2u))+alu2);
    var val68 = temp0[alu77];
    var val69 = temp0[(alu77+1)];
    var val70 = temp0[(alu77+2)];
    var val71 = temp0[(alu77+3)];
    acc0[0] = (acc0[0]+val68);
    acc0[1] = (acc0[1]+val69);
    acc0[2] = (acc0[2]+val70);
    acc0[3] = (acc0[3]+val71);
  }
  var alu83 = (lidx1+bitcast<i32>((cast0<<4u))+(gidx1*786432)+bitcast<i32>((cast1<<18u)));
  var alu84 = ((bool(lidx0))!=true);
  if (alu84) {
    data0_1572864[alu83] = acc0[0];
  }
  if (alu84) {
    data0_1572864[(alu83+65536)] = acc0[1];
  }
  if (alu84) {
    data0_1572864[(alu83+131072)] = acc0[2];
  }
  if (alu84) {
    data0_1572864[(alu83+196608)] = acc0[3];
  }
}`;

const r_24_16_16n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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
    data0_24[gidx0] = (1/sqrt(((acc1[0]*5.960464477539063e-08f)+1e-05f)));
  }
}`;

const E_24_524288_16_2 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_24:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_24:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_24:array<f32>;
@group(0) @binding(6)var<storage,read_write>data5_24:array<f32>;
@compute @workgroup_size(16,2) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 384 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var alu0 = ((gidx1*171)>>12u);
  var alu1 = (gidx1-(24*alu0));
  var alu2 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(alu0)<<5u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u))+bitcast<i32>((bitcast<u32>(alu1)<<24u)));
  var val0 = data1_402653184[alu2];
  var val1 = data2_24[alu1];
  var val2 = data3_24[alu1];
  var val3 = data4_24[alu1];
  var val4 = data5_24[alu1];
  var alu3 = (((val0-val1)*val2*val3)+val4);
  data0_402653184[alu2] = ((1/(1.0f+exp2(((alu3+(0.044715f*alu3*alu3*alu3))*-2.302208198144325f))))*alu3);
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
      var alu17 = (lidx2+bitcast<i32>((cast1<<3u))+(Ridx1*3));
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
          var val1 = data2_15552[(alu19+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*648))];
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
  var alu45 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
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
      var alu65 = (lidx2+bitcast<i32>((cast1<<4u))+(Ridx1*7));
      var alu66 = ((6<alu65)&(alu65<263));
      for (var Ridx2 = 0; Ridx2 < 3; Ridx2++) {
        var alu67 = (gidx0+(Ridx2*7));
        var alu68 = ((6<alu67)&(alu67<263));
        var alu69 = (alu68&alu66);
        for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
          var alu70 = (lidx0+(Ridx3*7));
          var alu71 = (alu70+cast0+(Ridx2*1792)+alu0+(Ridx1*458752)+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
          var val0 = select(0.0f, data1_402653184[(alu71+-460551)], ((6<alu70)&alu68&alu66));
          var alu72 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*2592));
          var val1 = data2_15552[alu72];
          var val2 = select(0.0f, data1_402653184[(alu71+-460535)], alu69);
          var val3 = select(0.0f, data1_402653184[(alu71+-460519)], alu69);
          var val4 = select(0.0f, data1_402653184[(alu71+-460503)], alu69);
          var val5 = select(0.0f, data1_402653184[(alu71+-460487)], alu69);
          var val6 = select(0.0f, data1_402653184[(alu71+-460471)], alu69);
          var val7 = select(0.0f, data1_402653184[(alu71+-460455)], alu69);
          var val8 = select(0.0f, data1_402653184[(alu71+-460439)], alu69);
          var val9 = select(0.0f, data1_402653184[(alu71+-460423)], alu69);
          var val10 = select(0.0f, data1_402653184[(alu71+-460407)], alu69);
          var val11 = select(0.0f, data1_402653184[(alu71+-460391)], alu69);
          var val12 = select(0.0f, data1_402653184[(alu71+-460375)], alu69);
          var val13 = select(0.0f, data1_402653184[(alu71+-460359)], alu69);
          var val14 = select(0.0f, data1_402653184[(alu71+-460343)], alu69);
          var val15 = select(0.0f, data1_402653184[(alu71+-460327)], alu69);
          var val16 = select(0.0f, data1_402653184[(alu71+-460311)], ((alu70<23)&alu68&alu66));
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

const r_3_16_64_16_16_2_16_4_4_6_3_3_4_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_402653184:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_15552:array<f32>;
@compute @workgroup_size(16,2,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,16>;
  var gidx0 = i32(gindex.x); /* 1024 */
  var gidx1 = i32(gindex.y); /* 16 */
  var gidx2 = i32(gindex.z); /* 3 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 2 */
  var lidx2 = i32(lindex.z); /* 16 */
  var cast0 = bitcast<u32>(gidx1);
  var cast1 = bitcast<i32>((bitcast<u32>((gidx0>>4u))<<10u));
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>((gidx0&15))<<4u)));
  var alu1 = (bitcast<i32>((cast0<<20u))+bitcast<i32>((bitcast<u32>(lidx2)<<16u)));
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
    for (var Ridx1 = 0; Ridx1 < 3; Ridx1++) {
      var alu18 = (lidx2+bitcast<i32>((cast0<<4u))+(Ridx1*19));
      var alu19 = ((18<alu18)&(alu18<275));
      for (var Ridx3 = 0; Ridx3 < 3; Ridx3++) {
        var alu20 = (alu0+(Ridx3*19));
        var alu21 = (alu20+cast1+alu1+(Ridx1*1245184)+bitcast<i32>((bitcast<u32>(Ridx0)<<26u)));
        var alu22 = ((18<alu20)&(alu20<275));
        var alu23 = (alu22&(79<gidx0)&alu19);
        var val0 = select(0.0f, data1_402653184[(alu21+-1250067)], alu23);
        var alu24 = ((Ridx1*9)+Ridx3+(Ridx0*108)+(gidx2*5184)+(lidx1*2592));
        var val1 = data2_15552[(alu24+3)];
        var val2 = data2_15552[(alu24+708)];
        var val3 = data2_15552[(alu24+729)];
        var val4 = data2_15552[(alu24+732)];
        var val5 = data2_15552[(alu24+735)];
        var val6 = data2_15552[alu24];
        var alu25 = (alu22&alu19);
        var val7 = select(0.0f, data1_402653184[(alu21+-1245203)], alu25);
        var alu26 = (alu22&(gidx0<960)&alu19);
        var val8 = select(0.0f, data1_402653184[(alu21+-1240339)], alu26);
        var val9 = data2_15552[(alu24+6)];
        var val10 = select(0.0f, data1_402653184[(alu21+15527149)], alu23);
        var val11 = data2_15552[(alu24+27)];
        var val12 = select(0.0f, data1_402653184[(alu21+15532013)], alu25);
        var val13 = data2_15552[(alu24+30)];
        var val14 = select(0.0f, data1_402653184[(alu21+15536877)], alu26);
        var val15 = data2_15552[(alu24+33)];
        var val16 = select(0.0f, data1_402653184[(alu21+32304365)], alu23);
        var val17 = data2_15552[(alu24+54)];
        var val18 = select(0.0f, data1_402653184[(alu21+32309229)], alu25);
        var val19 = data2_15552[(alu24+57)];
        var val20 = select(0.0f, data1_402653184[(alu21+32314093)], alu26);
        var val21 = data2_15552[(alu24+60)];
        var val22 = data2_15552[(alu24+81)];
        var val23 = select(0.0f, data1_402653184[(alu21+49086445)], alu25);
        var val24 = data2_15552[(alu24+84)];
        var val25 = select(0.0f, data1_402653184[(alu21+49091309)], alu26);
        var val26 = data2_15552[(alu24+87)];
        var val27 = select(0.0f, data1_402653184[(alu21+-1249811)], alu23);
        var val28 = select(0.0f, data1_402653184[(alu21+49081581)], alu23);
        var val29 = select(0.0f, data1_402653184[(alu21+-1249555)], alu23);
        var alu27 = (alu22&(63<gidx0)&alu19);
        var val30 = select(0.0f, data1_402653184[(alu21+-1249299)], alu27);
        var val31 = select(0.0f, data1_402653184[(alu21+-1244947)], alu25);
        var val32 = select(0.0f, data1_402653184[(alu21+-1244691)], alu25);
        var alu28 = (alu22&(gidx0<944)&alu19);
        var val33 = select(0.0f, data1_402653184[(alu21+-1239571)], alu28);
        var val34 = select(0.0f, data1_402653184[(alu21+15527917)], alu27);
        var val35 = select(0.0f, data1_402653184[(alu21+15532781)], alu25);
        var val36 = select(0.0f, data1_402653184[(alu21+15537645)], alu28);
        var val37 = select(0.0f, data1_402653184[(alu21+32305133)], alu27);
        var val38 = select(0.0f, data1_402653184[(alu21+32309997)], alu25);
        var val39 = select(0.0f, data1_402653184[(alu21+32314861)], alu28);
        var val40 = select(0.0f, data1_402653184[(alu21+49082349)], alu27);
        var val41 = select(0.0f, data1_402653184[(alu21+49087213)], alu25);
        var val42 = select(0.0f, data1_402653184[(alu21+49091821)], alu28);
        var val43 = select(0.0f, data1_402653184[(alu21+-1244435)], alu25);
        var val44 = select(0.0f, data1_402653184[(alu21+-1240083)], alu28);
        var val45 = select(0.0f, data1_402653184[(alu21+-1239827)], alu28);
        var val46 = select(0.0f, data1_402653184[(alu21+15527405)], alu23);
        var val47 = select(0.0f, data1_402653184[(alu21+15527661)], alu23);
        var val48 = select(0.0f, data1_402653184[(alu21+15532269)], alu25);
        var val49 = select(0.0f, data1_402653184[(alu21+15532525)], alu25);
        var val50 = select(0.0f, data1_402653184[(alu21+15537133)], alu28);
        var val51 = select(0.0f, data1_402653184[(alu21+15537389)], alu28);
        var val52 = select(0.0f, data1_402653184[(alu21+32304621)], alu23);
        var val53 = select(0.0f, data1_402653184[(alu21+32304877)], alu23);
        var val54 = select(0.0f, data1_402653184[(alu21+32309485)], alu25);
        var val55 = select(0.0f, data1_402653184[(alu21+32309741)], alu25);
        var val56 = select(0.0f, data1_402653184[(alu21+32314349)], alu28);
        var val57 = select(0.0f, data1_402653184[(alu21+32314605)], alu28);
        var val58 = select(0.0f, data1_402653184[(alu21+49081837)], alu23);
        var val59 = select(0.0f, data1_402653184[(alu21+49082093)], alu23);
        var val60 = select(0.0f, data1_402653184[(alu21+49086701)], alu25);
        var val61 = select(0.0f, data1_402653184[(alu21+49086957)], alu25);
        var val62 = select(0.0f, data1_402653184[(alu21+49091565)], alu28);
        var val63 = select(0.0f, data1_402653184[(alu21+49092077)], alu28);
        var val64 = data2_15552[(alu24+648)];
        var val65 = data2_15552[(alu24+651)];
        var val66 = data2_15552[(alu24+654)];
        var val67 = data2_15552[(alu24+675)];
        var val68 = data2_15552[(alu24+678)];
        var val69 = data2_15552[(alu24+681)];
        var val70 = data2_15552[(alu24+702)];
        var val71 = data2_15552[(alu24+705)];
        var val72 = data2_15552[(alu24+1296)];
        var val73 = data2_15552[(alu24+1299)];
        var val74 = data2_15552[(alu24+1302)];
        var val75 = data2_15552[(alu24+1323)];
        var val76 = data2_15552[(alu24+1326)];
        var val77 = data2_15552[(alu24+1329)];
        var val78 = data2_15552[(alu24+1350)];
        var val79 = data2_15552[(alu24+1353)];
        var val80 = data2_15552[(alu24+1356)];
        var val81 = data2_15552[(alu24+1377)];
        var val82 = data2_15552[(alu24+1380)];
        var val83 = data2_15552[(alu24+1383)];
        var val84 = data2_15552[(alu24+1944)];
        var val85 = data2_15552[(alu24+1947)];
        var val86 = data2_15552[(alu24+1950)];
        var val87 = data2_15552[(alu24+1971)];
        var val88 = data2_15552[(alu24+1974)];
        var val89 = data2_15552[(alu24+1977)];
        var val90 = data2_15552[(alu24+1998)];
        var val91 = data2_15552[(alu24+2001)];
        var val92 = data2_15552[(alu24+2004)];
        var val93 = data2_15552[(alu24+2025)];
        var val94 = data2_15552[(alu24+2028)];
        var val95 = data2_15552[(alu24+2031)];
        acc0[0] = (acc0[0]+(val0*val6)+(val7*val1)+(val8*val9)+(val10*val11)+(val12*val13)+(val14*val15)+(val16*val17)+(val18*val19)+(val20*val21)+(val28*val22)+(val23*val24)+(val25*val26));
        acc0[1] = (acc0[1]+(val27*val6)+(val31*val1)+(val44*val9)+(val46*val11)+(val48*val13)+(val50*val15)+(val52*val17)+(val54*val19)+(val56*val21)+(val58*val22)+(val60*val24)+(val62*val26));
        acc0[2] = (acc0[2]+(val29*val6)+(val32*val1)+(val45*val9)+(val47*val11)+(val49*val13)+(val51*val15)+(val53*val17)+(val55*val19)+(val57*val21)+(val59*val22)+(val61*val24)+(val42*val26));
        acc0[3] = (acc0[3]+(val30*val6)+(val43*val1)+(val33*val9)+(val34*val11)+(val35*val13)+(val36*val15)+(val37*val17)+(val38*val19)+(val39*val21)+(val40*val22)+(val41*val24)+(val63*val26));
        acc0[4] = (acc0[4]+(val0*val64)+(val7*val65)+(val8*val66)+(val10*val67)+(val12*val68)+(val14*val69)+(val16*val70)+(val18*val71)+(val20*val2)+(val28*val3)+(val23*val4)+(val25*val5));
        acc0[5] = (acc0[5]+(val27*val64)+(val31*val65)+(val44*val66)+(val46*val67)+(val48*val68)+(val50*val69)+(val52*val70)+(val54*val71)+(val56*val2)+(val58*val3)+(val60*val4)+(val62*val5));
        acc0[6] = (acc0[6]+(val29*val64)+(val32*val65)+(val45*val66)+(val47*val67)+(val49*val68)+(val51*val69)+(val53*val70)+(val55*val71)+(val57*val2)+(val59*val3)+(val61*val4)+(val42*val5));
        acc0[7] = (acc0[7]+(val30*val64)+(val43*val65)+(val33*val66)+(val34*val67)+(val35*val68)+(val36*val69)+(val37*val70)+(val38*val71)+(val39*val2)+(val40*val3)+(val41*val4)+(val63*val5));
        acc0[8] = (acc0[8]+(val0*val72)+(val7*val73)+(val8*val74)+(val10*val75)+(val12*val76)+(val14*val77)+(val16*val78)+(val18*val79)+(val20*val80)+(val28*val81)+(val23*val82)+(val25*val83));
        acc0[9] = (acc0[9]+(val27*val72)+(val31*val73)+(val44*val74)+(val46*val75)+(val48*val76)+(val50*val77)+(val52*val78)+(val54*val79)+(val56*val80)+(val58*val81)+(val60*val82)+(val62*val83));
        acc0[10] = (acc0[10]+(val29*val72)+(val32*val73)+(val45*val74)+(val47*val75)+(val49*val76)+(val51*val77)+(val53*val78)+(val55*val79)+(val57*val80)+(val59*val81)+(val61*val82)+(val42*val83));
        acc0[11] = (acc0[11]+(val30*val72)+(val43*val73)+(val33*val74)+(val34*val75)+(val35*val76)+(val36*val77)+(val37*val78)+(val38*val79)+(val39*val80)+(val40*val81)+(val41*val82)+(val63*val83));
        acc0[12] = (acc0[12]+(val0*val84)+(val7*val85)+(val8*val86)+(val10*val87)+(val12*val88)+(val14*val89)+(val16*val90)+(val18*val91)+(val20*val92)+(val28*val93)+(val23*val94)+(val25*val95));
        acc0[13] = (acc0[13]+(val27*val84)+(val31*val85)+(val44*val86)+(val46*val87)+(val48*val88)+(val50*val89)+(val52*val90)+(val54*val91)+(val56*val92)+(val58*val93)+(val60*val94)+(val62*val95));
        acc0[14] = (acc0[14]+(val29*val84)+(val32*val85)+(val45*val86)+(val47*val87)+(val49*val88)+(val51*val89)+(val53*val90)+(val55*val91)+(val57*val92)+(val59*val93)+(val61*val94)+(val42*val95));
        acc0[15] = (acc0[15]+(val30*val84)+(val43*val85)+(val33*val86)+(val34*val87)+(val35*val88)+(val36*val89)+(val37*val90)+(val38*val91)+(val39*val92)+(val40*val93)+(val41*val94)+(val63*val95));
      }
    }
  }
  var alu48 = (alu0+cast1+alu1+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<26u)));
  data0_402653184[alu48] = acc0[0];
  data0_402653184[(alu48+256)] = acc0[1];
  data0_402653184[(alu48+512)] = acc0[2];
  data0_402653184[(alu48+768)] = acc0[3];
  data0_402653184[(alu48+16777216)] = acc0[4];
  data0_402653184[(alu48+16777472)] = acc0[5];
  data0_402653184[(alu48+16777728)] = acc0[6];
  data0_402653184[(alu48+16777984)] = acc0[7];
  data0_402653184[(alu48+33554432)] = acc0[8];
  data0_402653184[(alu48+33554688)] = acc0[9];
  data0_402653184[(alu48+33554944)] = acc0[10];
  data0_402653184[(alu48+33555200)] = acc0[11];
  data0_402653184[(alu48+50331648)] = acc0[12];
  data0_402653184[(alu48+50331904)] = acc0[13];
  data0_402653184[(alu48+50332160)] = acc0[14];
  data0_402653184[(alu48+50332416)] = acc0[15];
}`;

const r_3_16_256_16_2_16_16_2_2_24_3_3_3 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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
          var alu72 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*1296));
          var val1 = data2_15552[(alu72+648)];
          var val2 = data2_15552[alu72];
          var val3 = data2_15552[(alu72+2592)];
          var val4 = data2_15552[(alu72+3240)];
          var val5 = select(0.0f, data1_402653184[(alu71+-2039567)], ((14<alu70)&alu68&alu66));
          var val6 = select(0.0f, data1_402653184[(alu71+-2039551)], alu69);
          var val7 = select(0.0f, data1_402653184[(alu71+-2039535)], alu69);
          var val8 = select(0.0f, data1_402653184[(alu71+-2039519)], alu69);
          var val9 = select(0.0f, data1_402653184[(alu71+-2039503)], alu69);
          var val10 = select(0.0f, data1_402653184[(alu71+-2039487)], alu69);
          var val11 = select(0.0f, data1_402653184[(alu71+-2039471)], alu69);
          var val12 = select(0.0f, data1_402653184[(alu71+-2039455)], alu69);
          var val13 = select(0.0f, data1_402653184[(alu71+-2039439)], alu69);
          var val14 = select(0.0f, data1_402653184[(alu71+-2039423)], alu69);
          var val15 = select(0.0f, data1_402653184[(alu71+-2039407)], alu69);
          var val16 = select(0.0f, data1_402653184[(alu71+-2039391)], alu69);
          var val17 = select(0.0f, data1_402653184[(alu71+-2039375)], alu69);
          var val18 = select(0.0f, data1_402653184[(alu71+-2039359)], ((alu70<63)&alu68&alu66));
          var val19 = select(0.0f, data1_402653184[(alu71+-2039343)], ((alu70<47)&alu68&alu66));
          acc0[0] = (acc0[0]+(val0*val2));
          acc0[1] = (acc0[1]+(val0*val3));
          acc0[2] = (acc0[2]+(val0*val1));
          acc0[3] = (acc0[3]+(val0*val4));
          acc0[4] = (acc0[4]+(val5*val2));
          acc0[5] = (acc0[5]+(val5*val3));
          acc0[6] = (acc0[6]+(val5*val1));
          acc0[7] = (acc0[7]+(val5*val4));
          acc0[8] = (acc0[8]+(val6*val2));
          acc0[9] = (acc0[9]+(val6*val3));
          acc0[10] = (acc0[10]+(val6*val1));
          acc0[11] = (acc0[11]+(val6*val4));
          acc0[12] = (acc0[12]+(val7*val2));
          acc0[13] = (acc0[13]+(val7*val3));
          acc0[14] = (acc0[14]+(val7*val1));
          acc0[15] = (acc0[15]+(val7*val4));
          acc0[16] = (acc0[16]+(val8*val2));
          acc0[17] = (acc0[17]+(val8*val3));
          acc0[18] = (acc0[18]+(val8*val1));
          acc0[19] = (acc0[19]+(val8*val4));
          acc0[20] = (acc0[20]+(val9*val2));
          acc0[21] = (acc0[21]+(val9*val3));
          acc0[22] = (acc0[22]+(val9*val1));
          acc0[23] = (acc0[23]+(val9*val4));
          acc0[24] = (acc0[24]+(val10*val2));
          acc0[25] = (acc0[25]+(val10*val3));
          acc0[26] = (acc0[26]+(val10*val1));
          acc0[27] = (acc0[27]+(val10*val4));
          acc0[28] = (acc0[28]+(val11*val2));
          acc0[29] = (acc0[29]+(val11*val3));
          acc0[30] = (acc0[30]+(val11*val1));
          acc0[31] = (acc0[31]+(val11*val4));
          acc0[32] = (acc0[32]+(val12*val2));
          acc0[33] = (acc0[33]+(val12*val3));
          acc0[34] = (acc0[34]+(val12*val1));
          acc0[35] = (acc0[35]+(val12*val4));
          acc0[36] = (acc0[36]+(val13*val2));
          acc0[37] = (acc0[37]+(val13*val3));
          acc0[38] = (acc0[38]+(val13*val1));
          acc0[39] = (acc0[39]+(val13*val4));
          acc0[40] = (acc0[40]+(val14*val2));
          acc0[41] = (acc0[41]+(val14*val3));
          acc0[42] = (acc0[42]+(val14*val1));
          acc0[43] = (acc0[43]+(val14*val4));
          acc0[44] = (acc0[44]+(val15*val2));
          acc0[45] = (acc0[45]+(val15*val3));
          acc0[46] = (acc0[46]+(val15*val1));
          acc0[47] = (acc0[47]+(val15*val4));
          acc0[48] = (acc0[48]+(val16*val2));
          acc0[49] = (acc0[49]+(val16*val3));
          acc0[50] = (acc0[50]+(val16*val1));
          acc0[51] = (acc0[51]+(val16*val4));
          acc0[52] = (acc0[52]+(val17*val2));
          acc0[53] = (acc0[53]+(val17*val3));
          acc0[54] = (acc0[54]+(val17*val1));
          acc0[55] = (acc0[55]+(val17*val4));
          acc0[56] = (acc0[56]+(val18*val2));
          acc0[57] = (acc0[57]+(val18*val3));
          acc0[58] = (acc0[58]+(val18*val1));
          acc0[59] = (acc0[59]+(val18*val4));
          acc0[60] = (acc0[60]+(val19*val2));
          acc0[61] = (acc0[61]+(val19*val3));
          acc0[62] = (acc0[62]+(val19*val1));
          acc0[63] = (acc0[63]+(val19*val4));
        }
      }
    }
  }
  var alu141 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<25u)));
  data0_402653184[alu141] = acc0[0];
  data0_402653184[(alu141+16)] = acc0[4];
  data0_402653184[(alu141+32)] = acc0[8];
  data0_402653184[(alu141+48)] = acc0[12];
  data0_402653184[(alu141+64)] = acc0[16];
  data0_402653184[(alu141+80)] = acc0[20];
  data0_402653184[(alu141+96)] = acc0[24];
  data0_402653184[(alu141+112)] = acc0[28];
  data0_402653184[(alu141+128)] = acc0[32];
  data0_402653184[(alu141+144)] = acc0[36];
  data0_402653184[(alu141+160)] = acc0[40];
  data0_402653184[(alu141+176)] = acc0[44];
  data0_402653184[(alu141+192)] = acc0[48];
  data0_402653184[(alu141+208)] = acc0[52];
  data0_402653184[(alu141+224)] = acc0[56];
  data0_402653184[(alu141+240)] = acc0[60];
  data0_402653184[(alu141+16777216)] = acc0[2];
  data0_402653184[(alu141+16777232)] = acc0[6];
  data0_402653184[(alu141+16777248)] = acc0[10];
  data0_402653184[(alu141+16777264)] = acc0[14];
  data0_402653184[(alu141+16777280)] = acc0[18];
  data0_402653184[(alu141+16777296)] = acc0[22];
  data0_402653184[(alu141+16777312)] = acc0[26];
  data0_402653184[(alu141+16777328)] = acc0[30];
  data0_402653184[(alu141+16777344)] = acc0[34];
  data0_402653184[(alu141+16777360)] = acc0[38];
  data0_402653184[(alu141+16777376)] = acc0[42];
  data0_402653184[(alu141+16777392)] = acc0[46];
  data0_402653184[(alu141+16777408)] = acc0[50];
  data0_402653184[(alu141+16777424)] = acc0[54];
  data0_402653184[(alu141+16777440)] = acc0[58];
  data0_402653184[(alu141+16777456)] = acc0[62];
  data0_402653184[(alu141+67108864)] = acc0[1];
  data0_402653184[(alu141+67108880)] = acc0[5];
  data0_402653184[(alu141+67108896)] = acc0[9];
  data0_402653184[(alu141+67108912)] = acc0[13];
  data0_402653184[(alu141+67108928)] = acc0[17];
  data0_402653184[(alu141+67108944)] = acc0[21];
  data0_402653184[(alu141+67108960)] = acc0[25];
  data0_402653184[(alu141+67108976)] = acc0[29];
  data0_402653184[(alu141+67108992)] = acc0[33];
  data0_402653184[(alu141+67109008)] = acc0[37];
  data0_402653184[(alu141+67109024)] = acc0[41];
  data0_402653184[(alu141+67109040)] = acc0[45];
  data0_402653184[(alu141+67109056)] = acc0[49];
  data0_402653184[(alu141+67109072)] = acc0[53];
  data0_402653184[(alu141+67109088)] = acc0[57];
  data0_402653184[(alu141+67109104)] = acc0[61];
  data0_402653184[(alu141+83886080)] = acc0[3];
  data0_402653184[(alu141+83886096)] = acc0[7];
  data0_402653184[(alu141+83886112)] = acc0[11];
  data0_402653184[(alu141+83886128)] = acc0[15];
  data0_402653184[(alu141+83886144)] = acc0[19];
  data0_402653184[(alu141+83886160)] = acc0[23];
  data0_402653184[(alu141+83886176)] = acc0[27];
  data0_402653184[(alu141+83886192)] = acc0[31];
  data0_402653184[(alu141+83886208)] = acc0[35];
  data0_402653184[(alu141+83886224)] = acc0[39];
  data0_402653184[(alu141+83886240)] = acc0[43];
  data0_402653184[(alu141+83886256)] = acc0[47];
  data0_402653184[(alu141+83886272)] = acc0[51];
  data0_402653184[(alu141+83886288)] = acc0[55];
  data0_402653184[(alu141+83886304)] = acc0[59];
  data0_402653184[(alu141+83886320)] = acc0[63];
}`;

const r_3_16_256_16_2_16_16_2_2_24_3_3_3n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
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
          var alu71 = ((Ridx2*3)+Ridx3+(Ridx1*9)+(Ridx0*27)+(gidx2*5184)+(lidx1*1296));
          var val1 = data2_15552[alu71];
          var val2 = data2_15552[(alu71+2592)];
          var val3 = data2_15552[(alu71+648)];
          var val4 = data2_15552[(alu71+3240)];
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
  var alu140 = (lidx0+cast0+alu0+bitcast<i32>((bitcast<u32>(gidx2)<<27u))+bitcast<i32>((bitcast<u32>(lidx1)<<25u)));
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
  data0_402653184[(alu140+16777216)] = acc0[2];
  data0_402653184[(alu140+16777232)] = acc0[6];
  data0_402653184[(alu140+16777248)] = acc0[10];
  data0_402653184[(alu140+16777264)] = acc0[14];
  data0_402653184[(alu140+16777280)] = acc0[18];
  data0_402653184[(alu140+16777296)] = acc0[22];
  data0_402653184[(alu140+16777312)] = acc0[26];
  data0_402653184[(alu140+16777328)] = acc0[30];
  data0_402653184[(alu140+16777344)] = acc0[34];
  data0_402653184[(alu140+16777360)] = acc0[38];
  data0_402653184[(alu140+16777376)] = acc0[42];
  data0_402653184[(alu140+16777392)] = acc0[46];
  data0_402653184[(alu140+16777408)] = acc0[50];
  data0_402653184[(alu140+16777424)] = acc0[54];
  data0_402653184[(alu140+16777440)] = acc0[58];
  data0_402653184[(alu140+16777456)] = acc0[62];
  data0_402653184[(alu140+67108864)] = acc0[1];
  data0_402653184[(alu140+67108880)] = acc0[5];
  data0_402653184[(alu140+67108896)] = acc0[9];
  data0_402653184[(alu140+67108912)] = acc0[13];
  data0_402653184[(alu140+67108928)] = acc0[17];
  data0_402653184[(alu140+67108944)] = acc0[21];
  data0_402653184[(alu140+67108960)] = acc0[25];
  data0_402653184[(alu140+67108976)] = acc0[29];
  data0_402653184[(alu140+67108992)] = acc0[33];
  data0_402653184[(alu140+67109008)] = acc0[37];
  data0_402653184[(alu140+67109024)] = acc0[41];
  data0_402653184[(alu140+67109040)] = acc0[45];
  data0_402653184[(alu140+67109056)] = acc0[49];
  data0_402653184[(alu140+67109072)] = acc0[53];
  data0_402653184[(alu140+67109088)] = acc0[57];
  data0_402653184[(alu140+67109104)] = acc0[61];
  data0_402653184[(alu140+83886080)] = acc0[3];
  data0_402653184[(alu140+83886096)] = acc0[7];
  data0_402653184[(alu140+83886112)] = acc0[11];
  data0_402653184[(alu140+83886128)] = acc0[15];
  data0_402653184[(alu140+83886144)] = acc0[19];
  data0_402653184[(alu140+83886160)] = acc0[23];
  data0_402653184[(alu140+83886176)] = acc0[27];
  data0_402653184[(alu140+83886192)] = acc0[31];
  data0_402653184[(alu140+83886208)] = acc0[35];
  data0_402653184[(alu140+83886224)] = acc0[39];
  data0_402653184[(alu140+83886240)] = acc0[43];
  data0_402653184[(alu140+83886256)] = acc0[47];
  data0_402653184[(alu140+83886272)] = acc0[51];
  data0_402653184[(alu140+83886288)] = acc0[55];
  data0_402653184[(alu140+83886304)] = acc0[59];
  data0_402653184[(alu140+83886320)] = acc0[63];
}`;

const r_524288_16_8_6_2_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_805306368:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,12>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 16 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<5u)));
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
    var alu13 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_402653184[alu13];
    var alu14 = ((lidx1*24)+Ridx0);
    var val1 = data2_2496[alu14];
    var val2 = data1_402653184[(alu13+16)];
    var val3 = data2_2496[(alu14+192)];
    var val4 = data2_2496[(alu14+384)];
    var val5 = data2_2496[(alu14+576)];
    var val6 = data2_2496[(alu14+768)];
    var val7 = data2_2496[(alu14+960)];
    acc0[0] = (acc0[0]+(val0*val1));
    acc0[1] = (acc0[1]+(val2*val1));
    acc0[2] = (acc0[2]+(val0*val3));
    acc0[3] = (acc0[3]+(val2*val3));
    acc0[4] = (acc0[4]+(val0*val4));
    acc0[5] = (acc0[5]+(val2*val4));
    acc0[6] = (acc0[6]+(val0*val5));
    acc0[7] = (acc0[7]+(val2*val5));
    acc0[8] = (acc0[8]+(val0*val6));
    acc0[9] = (acc0[9]+(val2*val6));
    acc0[10] = (acc0[10]+(val0*val7));
    acc0[11] = (acc0[11]+(val2*val7));
  }
  var val8 = data3_104[lidx1];
  var val9 = data3_104[(lidx1+8)];
  var val10 = data3_104[(lidx1+16)];
  var val11 = data3_104[(lidx1+24)];
  var val12 = data3_104[(lidx1+32)];
  var val13 = data3_104[(lidx1+40)];
  var alu28 = (alu0+bitcast<i32>((bitcast<u32>(lidx1)<<24u)));
  data0_805306368[alu28] = (acc0[0]+val8);
  data0_805306368[(alu28+16)] = (acc0[1]+val8);
  data0_805306368[(alu28+134217728)] = (acc0[2]+val9);
  data0_805306368[(alu28+134217744)] = (acc0[3]+val9);
  data0_805306368[(alu28+268435456)] = (acc0[4]+val10);
  data0_805306368[(alu28+268435472)] = (acc0[5]+val10);
  data0_805306368[(alu28+402653184)] = (acc0[6]+val11);
  data0_805306368[(alu28+402653200)] = (acc0[7]+val11);
  data0_805306368[(alu28+536870912)] = (acc0[8]+val12);
  data0_805306368[(alu28+536870928)] = (acc0[9]+val12);
  data0_805306368[(alu28+671088640)] = (acc0[10]+val13);
  data0_805306368[(alu28+671088656)] = (acc0[11]+val13);
}`;

const r_262144_8_4_2_48 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_805306368:array<f32>;
@compute @workgroup_size(8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,8>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u))+bitcast<i32>((bitcast<u32>(lidx0)<<1u)));
  acc0[0] = (f32(-INFINITY));
  acc0[1] = (f32(-INFINITY));
  acc0[2] = (f32(-INFINITY));
  acc0[3] = (f32(-INFINITY));
  acc0[4] = (f32(-INFINITY));
  acc0[5] = (f32(-INFINITY));
  acc0[6] = (f32(-INFINITY));
  acc0[7] = (f32(-INFINITY));
  for (var Ridx0 = 0; Ridx0 < 48; Ridx0++) {
    var alu9 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_805306368[alu9];
    var val1 = data1_805306368[(alu9+1)];
    var val2 = data1_805306368[(alu9+16)];
    var val3 = data1_805306368[(alu9+17)];
    var val4 = data1_805306368[(alu9+32)];
    var val5 = data1_805306368[(alu9+33)];
    var val6 = data1_805306368[(alu9+48)];
    var val7 = data1_805306368[(alu9+49)];
    var alu10 = select(acc0[0],val0,(acc0[0]<val0));
    var alu11 = select(acc0[1],val1,(acc0[1]<val1));
    var alu12 = select(acc0[2],val2,(acc0[2]<val2));
    var alu13 = select(acc0[3],val3,(acc0[3]<val3));
    var alu14 = select(acc0[4],val4,(acc0[4]<val4));
    var alu15 = select(acc0[5],val5,(acc0[5]<val5));
    var alu16 = select(acc0[6],val6,(acc0[6]<val6));
    var alu17 = select(acc0[7],val7,(acc0[7]<val7));
    acc0[0] = alu10;
    acc0[1] = alu11;
    acc0[2] = alu12;
    acc0[3] = alu13;
    acc0[4] = alu14;
    acc0[5] = alu15;
    acc0[6] = alu16;
    acc0[7] = alu17;
  }
  data0_16777216[alu0] = acc0[0];
  data0_16777216[(alu0+1)] = acc0[1];
  data0_16777216[(alu0+16)] = acc0[2];
  data0_16777216[(alu0+17)] = acc0[3];
  data0_16777216[(alu0+32)] = acc0[4];
  data0_16777216[(alu0+33)] = acc0[5];
  data0_16777216[(alu0+48)] = acc0[6];
  data0_16777216[(alu0+49)] = acc0[7];
}`;

const r_262144_16_4_12_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_805306368:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,4>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 16 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u)));
  var val0 = data2_16777216[alu0];
  var alu1 = (alu0+16);
  var val1 = data2_16777216[alu1];
  var alu2 = (alu0+32);
  var val2 = data2_16777216[alu2];
  var alu3 = (alu0+48);
  var val3 = data2_16777216[alu3];
  acc0[0] = -2147483648;
  acc0[1] = -2147483648;
  acc0[2] = -2147483648;
  acc0[3] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 12; Ridx0++) {
    var alu8 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<26u)));
    var val4 = data1_805306368[alu8];
    var val5 = data1_805306368[(alu8+16)];
    var val6 = data1_805306368[(alu8+32)];
    var val7 = data1_805306368[(alu8+48)];
    var val8 = data1_805306368[(alu8+16777216)];
    var val9 = data1_805306368[(alu8+16777232)];
    var val10 = data1_805306368[(alu8+16777248)];
    var val11 = data1_805306368[(alu8+16777264)];
    var val12 = data1_805306368[(alu8+33554432)];
    var val13 = data1_805306368[(alu8+33554448)];
    var val14 = data1_805306368[(alu8+33554464)];
    var val15 = data1_805306368[(alu8+33554480)];
    var val16 = data1_805306368[(alu8+50331648)];
    var val17 = data1_805306368[(alu8+50331664)];
    var val18 = data1_805306368[(alu8+50331680)];
    var val19 = data1_805306368[(alu8+50331696)];
    var alu9 = (Ridx0*-4);
    var alu10 = (alu9+45);
    var alu11 = (alu9+46);
    var alu12 = (alu9+47);
    var alu13 = (alu9+48);
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
  data0_16777216[alu0] = (f32((48-acc0[0])));
  data0_16777216[alu1] = (f32((48-acc0[1])));
  data0_16777216[alu2] = (f32((48-acc0[2])));
  data0_16777216[alu3] = (f32((48-acc0[3])));
}`;

const r_32768_16_8_8_3_4_2_6_4 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_805306368:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,8,8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,24>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 8 */
  var lidx2 = i32(lindex.z); /* 8 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(lidx2)<<6u)));
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
    var alu26 = ((lidx1*48)+bitcast<i32>((cast0<<2u)));
    var val1 = data2_2496[(alu26+1152)];
    var val2 = data1_402653184[(alu25+32)];
    var val3 = data1_402653184[(alu25+48)];
    var val4 = data1_402653184[(alu25+16777216)];
    var val5 = data2_2496[(alu26+1153)];
    var val6 = data1_402653184[(alu25+16777232)];
    var val7 = data1_402653184[(alu25+16777264)];
    var val8 = data1_402653184[(alu25+33554432)];
    var val9 = data2_2496[(alu26+1154)];
    var val10 = data1_402653184[(alu25+33554448)];
    var val11 = data1_402653184[(alu25+33554464)];
    var val12 = data1_402653184[(alu25+50331648)];
    var val13 = data2_2496[(alu26+1155)];
    var val14 = data2_2496[(alu26+1176)];
    var val15 = data2_2496[(alu26+1177)];
    var val16 = data2_2496[(alu26+1178)];
    var val17 = data2_2496[(alu26+1179)];
    var val18 = data1_402653184[(alu25+16)];
    var val19 = data1_402653184[(alu25+50331664)];
    var val20 = data1_402653184[(alu25+16777248)];
    var val21 = data1_402653184[(alu25+50331680)];
    var val22 = data1_402653184[(alu25+33554480)];
    var val23 = data1_402653184[(alu25+50331696)];
    var val24 = data2_2496[(alu26+1536)];
    var val25 = data2_2496[(alu26+1537)];
    var val26 = data2_2496[(alu26+1538)];
    var val27 = data2_2496[(alu26+1539)];
    var val28 = data2_2496[(alu26+1560)];
    var val29 = data2_2496[(alu26+1561)];
    var val30 = data2_2496[(alu26+1562)];
    var val31 = data2_2496[(alu26+1563)];
    var val32 = data2_2496[(alu26+1920)];
    var val33 = data2_2496[(alu26+1921)];
    var val34 = data2_2496[(alu26+1922)];
    var val35 = data2_2496[(alu26+1923)];
    var val36 = data2_2496[(alu26+1944)];
    var val37 = data2_2496[(alu26+1945)];
    var val38 = data2_2496[(alu26+1946)];
    var val39 = data2_2496[(alu26+1947)];
    acc0[0] = (acc0[0]+(val0*val1)+(val4*val5)+(val8*val9)+(val12*val13));
    acc0[1] = (acc0[1]+(val0*val14)+(val4*val15)+(val8*val16)+(val12*val17));
    acc0[2] = (acc0[2]+(val18*val1)+(val6*val5)+(val10*val9)+(val19*val13));
    acc0[3] = (acc0[3]+(val18*val14)+(val6*val15)+(val10*val16)+(val19*val17));
    acc0[4] = (acc0[4]+(val2*val1)+(val20*val5)+(val11*val9)+(val21*val13));
    acc0[5] = (acc0[5]+(val2*val14)+(val20*val15)+(val11*val16)+(val21*val17));
    acc0[6] = (acc0[6]+(val3*val1)+(val7*val5)+(val22*val9)+(val23*val13));
    acc0[7] = (acc0[7]+(val3*val14)+(val7*val15)+(val22*val16)+(val23*val17));
    acc0[8] = (acc0[8]+(val0*val24)+(val4*val25)+(val8*val26)+(val12*val27));
    acc0[9] = (acc0[9]+(val0*val28)+(val4*val29)+(val8*val30)+(val12*val31));
    acc0[10] = (acc0[10]+(val18*val24)+(val6*val25)+(val10*val26)+(val19*val27));
    acc0[11] = (acc0[11]+(val18*val28)+(val6*val29)+(val10*val30)+(val19*val31));
    acc0[12] = (acc0[12]+(val2*val24)+(val20*val25)+(val11*val26)+(val21*val27));
    acc0[13] = (acc0[13]+(val2*val28)+(val20*val29)+(val11*val30)+(val21*val31));
    acc0[14] = (acc0[14]+(val3*val24)+(val7*val25)+(val22*val26)+(val23*val27));
    acc0[15] = (acc0[15]+(val3*val28)+(val7*val29)+(val22*val30)+(val23*val31));
    acc0[16] = (acc0[16]+(val0*val32)+(val4*val33)+(val8*val34)+(val12*val35));
    acc0[17] = (acc0[17]+(val0*val36)+(val4*val37)+(val8*val38)+(val12*val39));
    acc0[18] = (acc0[18]+(val18*val32)+(val6*val33)+(val10*val34)+(val19*val35));
    acc0[19] = (acc0[19]+(val18*val36)+(val6*val37)+(val10*val38)+(val19*val39));
    acc0[20] = (acc0[20]+(val2*val32)+(val20*val33)+(val11*val34)+(val21*val35));
    acc0[21] = (acc0[21]+(val2*val36)+(val20*val37)+(val11*val38)+(val21*val39));
    acc0[22] = (acc0[22]+(val3*val32)+(val7*val33)+(val22*val34)+(val23*val35));
    acc0[23] = (acc0[23]+(val3*val36)+(val7*val37)+(val22*val38)+(val23*val39));
  }
  var cast1 = bitcast<u32>(lidx1);
  var cast2 = bitcast<i32>((cast1<<1u));
  var val40 = data3_104[(cast2+48)];
  var val41 = data3_104[(cast2+49)];
  var val42 = data3_104[(cast2+64)];
  var val43 = data3_104[(cast2+65)];
  var val44 = data3_104[(cast2+80)];
  var val45 = data3_104[(cast2+81)];
  var alu52 = (alu0+bitcast<i32>((cast1<<25u)));
  data0_805306368[alu52] = (acc0[0]+val40);
  data0_805306368[(alu52+16)] = (acc0[2]+val40);
  data0_805306368[(alu52+32)] = (acc0[4]+val40);
  data0_805306368[(alu52+48)] = (acc0[6]+val40);
  data0_805306368[(alu52+16777216)] = (acc0[1]+val41);
  data0_805306368[(alu52+16777232)] = (acc0[3]+val41);
  data0_805306368[(alu52+16777248)] = (acc0[5]+val41);
  data0_805306368[(alu52+16777264)] = (acc0[7]+val41);
  data0_805306368[(alu52+268435456)] = (acc0[8]+val42);
  data0_805306368[(alu52+268435472)] = (acc0[10]+val42);
  data0_805306368[(alu52+268435488)] = (acc0[12]+val42);
  data0_805306368[(alu52+268435504)] = (acc0[14]+val42);
  data0_805306368[(alu52+285212672)] = (acc0[9]+val43);
  data0_805306368[(alu52+285212688)] = (acc0[11]+val43);
  data0_805306368[(alu52+285212704)] = (acc0[13]+val43);
  data0_805306368[(alu52+285212720)] = (acc0[15]+val43);
  data0_805306368[(alu52+536870912)] = (acc0[16]+val44);
  data0_805306368[(alu52+536870928)] = (acc0[18]+val44);
  data0_805306368[(alu52+536870944)] = (acc0[20]+val44);
  data0_805306368[(alu52+536870960)] = (acc0[22]+val44);
  data0_805306368[(alu52+553648128)] = (acc0[17]+val45);
  data0_805306368[(alu52+553648144)] = (acc0[19]+val45);
  data0_805306368[(alu52+553648160)] = (acc0[21]+val45);
  data0_805306368[(alu52+553648176)] = (acc0[23]+val45);
}`;

const r_262144_8_4_2_48n1 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_805306368:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(8) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,8>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u))+bitcast<i32>((bitcast<u32>(lidx0)<<1u)));
  acc0[0] = (f32(-INFINITY));
  acc0[1] = (f32(-INFINITY));
  acc0[2] = (f32(-INFINITY));
  acc0[3] = (f32(-INFINITY));
  acc0[4] = (f32(-INFINITY));
  acc0[5] = (f32(-INFINITY));
  acc0[6] = (f32(-INFINITY));
  acc0[7] = (f32(-INFINITY));
  for (var Ridx0 = 0; Ridx0 < 48; Ridx0++) {
    var alu9 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_805306368[alu9];
    var val1 = data1_805306368[(alu9+1)];
    var val2 = data1_805306368[(alu9+16)];
    var val3 = data1_805306368[(alu9+17)];
    var val4 = data1_805306368[(alu9+32)];
    var val5 = data1_805306368[(alu9+33)];
    var val6 = data1_805306368[(alu9+48)];
    var val7 = data1_805306368[(alu9+49)];
    var alu10 = select(acc0[0],val0,(acc0[0]<val0));
    var alu11 = select(acc0[1],val1,(acc0[1]<val1));
    var alu12 = select(acc0[2],val2,(acc0[2]<val2));
    var alu13 = select(acc0[3],val3,(acc0[3]<val3));
    var alu14 = select(acc0[4],val4,(acc0[4]<val4));
    var alu15 = select(acc0[5],val5,(acc0[5]<val5));
    var alu16 = select(acc0[6],val6,(acc0[6]<val6));
    var alu17 = select(acc0[7],val7,(acc0[7]<val7));
    acc0[0] = alu10;
    acc0[1] = alu11;
    acc0[2] = alu12;
    acc0[3] = alu13;
    acc0[4] = alu14;
    acc0[5] = alu15;
    acc0[6] = alu16;
    acc0[7] = alu17;
  }
  var val8 = data2_16777216[alu0];
  var alu27 = (alu0+1);
  var val9 = data2_16777216[alu27];
  var alu28 = (alu0+16);
  var val10 = data2_16777216[alu28];
  var alu29 = (alu0+17);
  var val11 = data2_16777216[alu29];
  var alu30 = (alu0+32);
  var val12 = data2_16777216[alu30];
  var alu31 = (alu0+33);
  var val13 = data2_16777216[alu31];
  var alu32 = (alu0+48);
  var val14 = data2_16777216[alu32];
  var alu33 = (alu0+49);
  var val15 = data2_16777216[alu33];
  var alu34 = select(val8,acc0[0],(val8<acc0[0]));
  var alu35 = select(val9,acc0[1],(val9<acc0[1]));
  data0_16777216[alu0] = alu34;
  data0_16777216[alu27] = alu35;
  var alu38 = select(val10,acc0[2],(val10<acc0[2]));
  var alu39 = select(val11,acc0[3],(val11<acc0[3]));
  data0_16777216[alu28] = alu38;
  data0_16777216[alu29] = alu39;
  var alu42 = select(val12,acc0[4],(val12<acc0[4]));
  var alu43 = select(val13,acc0[5],(val13<acc0[5]));
  data0_16777216[alu30] = alu42;
  data0_16777216[alu31] = alu43;
  var alu46 = select(val14,acc0[6],(val14<acc0[6]));
  var alu47 = select(val15,acc0[7],(val15<acc0[7]));
  data0_16777216[alu32] = alu46;
  data0_16777216[alu33] = alu47;
}`;

const r_262144_8_2_4_48 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_805306368:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16777216:array<f32>;
@compute @workgroup_size(8,2) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,4>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 2 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<5u))+bitcast<i32>((bitcast<u32>(lidx0)<<2u)));
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
  for (var Ridx0 = 0; Ridx0 < 48; Ridx0++) {
    var alu8 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val4 = data3_805306368[alu8];
    var val5 = data3_805306368[(alu8+1)];
    var val6 = data3_805306368[(alu8+2)];
    var val7 = data3_805306368[(alu8+3)];
    var alu9 = (48-Ridx0);
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
  var alu23 = select(val12,((f32((48-acc0[0])))+48.0f),(val8<val0));
  var alu24 = select(val13,((f32((48-acc0[1])))+48.0f),(val9<val1));
  var alu25 = select(val14,((f32((48-acc0[2])))+48.0f),(val10<val2));
  var alu26 = select(val15,((f32((48-acc0[3])))+48.0f),(val11<val3));
  data0_16777216[alu0] = alu23;
  data0_16777216[alu1] = alu24;
  data0_16777216[alu2] = alu25;
  data0_16777216[alu3] = alu26;
}`;

const r_262144_16_4_8_24 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_134217728:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_402653184:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_2496:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_104:array<f32>;
@compute @workgroup_size(16,4) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,8>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 8 */
  var lidx0 = i32(lindex.x); /* 16 */
  var lidx1 = i32(lindex.y); /* 4 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<6u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u)));
  acc0[0] = 0.0f;
  acc0[1] = 0.0f;
  acc0[2] = 0.0f;
  acc0[3] = 0.0f;
  acc0[4] = 0.0f;
  acc0[5] = 0.0f;
  acc0[6] = 0.0f;
  acc0[7] = 0.0f;
  for (var Ridx0 = 0; Ridx0 < 24; Ridx0++) {
    var val0 = data1_402653184[(alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)))];
    var val1 = data2_2496[(Ridx0+2304)];
    var val2 = data2_2496[(Ridx0+2328)];
    var val3 = data2_2496[(Ridx0+2352)];
    var val4 = data2_2496[(Ridx0+2376)];
    var val5 = data2_2496[(Ridx0+2400)];
    var val6 = data2_2496[(Ridx0+2424)];
    var val7 = data2_2496[(Ridx0+2448)];
    var val8 = data2_2496[(Ridx0+2472)];
    acc0[0] = (acc0[0]+(val0*val1));
    acc0[1] = (acc0[1]+(val0*val2));
    acc0[2] = (acc0[2]+(val0*val3));
    acc0[3] = (acc0[3]+(val0*val4));
    acc0[4] = (acc0[4]+(val0*val5));
    acc0[5] = (acc0[5]+(val0*val6));
    acc0[6] = (acc0[6]+(val0*val7));
    acc0[7] = (acc0[7]+(val0*val8));
  }
  var val9 = data3_104[96];
  var val10 = data3_104[97];
  var val11 = data3_104[98];
  var val12 = data3_104[99];
  var val13 = data3_104[100];
  var val14 = data3_104[101];
  var val15 = data3_104[102];
  var val16 = data3_104[103];
  data0_134217728[alu0] = (acc0[0]+val9);
  data0_134217728[(alu0+16777216)] = (acc0[1]+val10);
  data0_134217728[(alu0+33554432)] = (acc0[2]+val11);
  data0_134217728[(alu0+50331648)] = (acc0[3]+val12);
  data0_134217728[(alu0+67108864)] = (acc0[4]+val13);
  data0_134217728[(alu0+83886080)] = (acc0[5]+val14);
  data0_134217728[(alu0+100663296)] = (acc0[6]+val15);
  data0_134217728[(alu0+117440512)] = (acc0[7]+val16);
}`;

const r_32768_16_16_2_8 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_134217728:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@compute @workgroup_size(16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<f32,32>;
  var gidx0 = i32(gindex.x); /* 32768 */
  var lidx0 = i32(lindex.x); /* 16 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(lidx0)<<5u)));
  acc0[0] = (f32(-INFINITY));
  acc0[1] = (f32(-INFINITY));
  acc0[2] = (f32(-INFINITY));
  acc0[3] = (f32(-INFINITY));
  acc0[4] = (f32(-INFINITY));
  acc0[5] = (f32(-INFINITY));
  acc0[6] = (f32(-INFINITY));
  acc0[7] = (f32(-INFINITY));
  acc0[8] = (f32(-INFINITY));
  acc0[9] = (f32(-INFINITY));
  acc0[10] = (f32(-INFINITY));
  acc0[11] = (f32(-INFINITY));
  acc0[12] = (f32(-INFINITY));
  acc0[13] = (f32(-INFINITY));
  acc0[14] = (f32(-INFINITY));
  acc0[15] = (f32(-INFINITY));
  acc0[16] = (f32(-INFINITY));
  acc0[17] = (f32(-INFINITY));
  acc0[18] = (f32(-INFINITY));
  acc0[19] = (f32(-INFINITY));
  acc0[20] = (f32(-INFINITY));
  acc0[21] = (f32(-INFINITY));
  acc0[22] = (f32(-INFINITY));
  acc0[23] = (f32(-INFINITY));
  acc0[24] = (f32(-INFINITY));
  acc0[25] = (f32(-INFINITY));
  acc0[26] = (f32(-INFINITY));
  acc0[27] = (f32(-INFINITY));
  acc0[28] = (f32(-INFINITY));
  acc0[29] = (f32(-INFINITY));
  acc0[30] = (f32(-INFINITY));
  acc0[31] = (f32(-INFINITY));
  for (var Ridx0 = 0; Ridx0 < 8; Ridx0++) {
    var alu33 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val0 = data1_134217728[alu33];
    var val1 = data1_134217728[(alu33+1)];
    var val2 = data1_134217728[(alu33+16)];
    var val3 = data1_134217728[(alu33+2)];
    var val4 = data1_134217728[(alu33+17)];
    var val5 = data1_134217728[(alu33+18)];
    var val6 = data1_134217728[(alu33+3)];
    var val7 = data1_134217728[(alu33+19)];
    var val8 = data1_134217728[(alu33+4)];
    var val9 = data1_134217728[(alu33+5)];
    var val10 = data1_134217728[(alu33+20)];
    var val11 = data1_134217728[(alu33+6)];
    var val12 = data1_134217728[(alu33+21)];
    var val13 = data1_134217728[(alu33+7)];
    var val14 = data1_134217728[(alu33+22)];
    var val15 = data1_134217728[(alu33+23)];
    var val16 = data1_134217728[(alu33+8)];
    var val17 = data1_134217728[(alu33+9)];
    var val18 = data1_134217728[(alu33+24)];
    var val19 = data1_134217728[(alu33+10)];
    var val20 = data1_134217728[(alu33+25)];
    var val21 = data1_134217728[(alu33+26)];
    var val22 = data1_134217728[(alu33+11)];
    var val23 = data1_134217728[(alu33+27)];
    var val24 = data1_134217728[(alu33+12)];
    var val25 = data1_134217728[(alu33+13)];
    var val26 = data1_134217728[(alu33+28)];
    var val27 = data1_134217728[(alu33+14)];
    var val28 = data1_134217728[(alu33+29)];
    var val29 = data1_134217728[(alu33+15)];
    var val30 = data1_134217728[(alu33+30)];
    var val31 = data1_134217728[(alu33+31)];
    var alu34 = select(acc0[0],val0,(acc0[0]<val0));
    var alu35 = select(acc0[1],val2,(acc0[1]<val2));
    var alu36 = select(acc0[2],val1,(acc0[2]<val1));
    var alu37 = select(acc0[3],val4,(acc0[3]<val4));
    var alu38 = select(acc0[4],val3,(acc0[4]<val3));
    var alu39 = select(acc0[5],val5,(acc0[5]<val5));
    var alu40 = select(acc0[6],val6,(acc0[6]<val6));
    var alu41 = select(acc0[7],val7,(acc0[7]<val7));
    var alu42 = select(acc0[8],val8,(acc0[8]<val8));
    var alu43 = select(acc0[9],val10,(acc0[9]<val10));
    var alu44 = select(acc0[10],val9,(acc0[10]<val9));
    var alu45 = select(acc0[11],val12,(acc0[11]<val12));
    var alu46 = select(acc0[12],val11,(acc0[12]<val11));
    var alu47 = select(acc0[13],val14,(acc0[13]<val14));
    var alu48 = select(acc0[14],val13,(acc0[14]<val13));
    var alu49 = select(acc0[15],val15,(acc0[15]<val15));
    var alu50 = select(acc0[16],val16,(acc0[16]<val16));
    var alu51 = select(acc0[17],val18,(acc0[17]<val18));
    var alu52 = select(acc0[18],val17,(acc0[18]<val17));
    var alu53 = select(acc0[19],val20,(acc0[19]<val20));
    var alu54 = select(acc0[20],val19,(acc0[20]<val19));
    var alu55 = select(acc0[21],val21,(acc0[21]<val21));
    var alu56 = select(acc0[22],val22,(acc0[22]<val22));
    var alu57 = select(acc0[23],val23,(acc0[23]<val23));
    var alu58 = select(acc0[24],val24,(acc0[24]<val24));
    var alu59 = select(acc0[25],val26,(acc0[25]<val26));
    var alu60 = select(acc0[26],val25,(acc0[26]<val25));
    var alu61 = select(acc0[27],val28,(acc0[27]<val28));
    var alu62 = select(acc0[28],val27,(acc0[28]<val27));
    var alu63 = select(acc0[29],val30,(acc0[29]<val30));
    var alu64 = select(acc0[30],val29,(acc0[30]<val29));
    var alu65 = select(acc0[31],val31,(acc0[31]<val31));
    acc0[0] = alu34;
    acc0[1] = alu35;
    acc0[2] = alu36;
    acc0[3] = alu37;
    acc0[4] = alu38;
    acc0[5] = alu39;
    acc0[6] = alu40;
    acc0[7] = alu41;
    acc0[8] = alu42;
    acc0[9] = alu43;
    acc0[10] = alu44;
    acc0[11] = alu45;
    acc0[12] = alu46;
    acc0[13] = alu47;
    acc0[14] = alu48;
    acc0[15] = alu49;
    acc0[16] = alu50;
    acc0[17] = alu51;
    acc0[18] = alu52;
    acc0[19] = alu53;
    acc0[20] = alu54;
    acc0[21] = alu55;
    acc0[22] = alu56;
    acc0[23] = alu57;
    acc0[24] = alu58;
    acc0[25] = alu59;
    acc0[26] = alu60;
    acc0[27] = alu61;
    acc0[28] = alu62;
    acc0[29] = alu63;
    acc0[30] = alu64;
    acc0[31] = alu65;
  }
  var val32 = data2_16777216[alu0];
  var alu99 = (alu0+1);
  var val33 = data2_16777216[alu99];
  var alu100 = (alu0+2);
  var val34 = data2_16777216[alu100];
  var alu101 = (alu0+3);
  var val35 = data2_16777216[alu101];
  var alu102 = (alu0+4);
  var val36 = data2_16777216[alu102];
  var alu103 = (alu0+5);
  var val37 = data2_16777216[alu103];
  var alu104 = (alu0+6);
  var val38 = data2_16777216[alu104];
  var alu105 = (alu0+7);
  var val39 = data2_16777216[alu105];
  var alu106 = (alu0+8);
  var val40 = data2_16777216[alu106];
  var alu107 = (alu0+9);
  var val41 = data2_16777216[alu107];
  var alu108 = (alu0+10);
  var val42 = data2_16777216[alu108];
  var alu109 = (alu0+11);
  var val43 = data2_16777216[alu109];
  var alu110 = (alu0+12);
  var val44 = data2_16777216[alu110];
  var alu111 = (alu0+13);
  var val45 = data2_16777216[alu111];
  var alu112 = (alu0+14);
  var val46 = data2_16777216[alu112];
  var alu113 = (alu0+15);
  var val47 = data2_16777216[alu113];
  var alu114 = (alu0+16);
  var val48 = data2_16777216[alu114];
  var alu115 = (alu0+17);
  var val49 = data2_16777216[alu115];
  var alu116 = (alu0+18);
  var val50 = data2_16777216[alu116];
  var alu117 = (alu0+19);
  var val51 = data2_16777216[alu117];
  var alu118 = (alu0+20);
  var val52 = data2_16777216[alu118];
  var alu119 = (alu0+21);
  var val53 = data2_16777216[alu119];
  var alu120 = (alu0+22);
  var val54 = data2_16777216[alu120];
  var alu121 = (alu0+23);
  var val55 = data2_16777216[alu121];
  var alu122 = (alu0+24);
  var val56 = data2_16777216[alu122];
  var alu123 = (alu0+25);
  var val57 = data2_16777216[alu123];
  var alu124 = (alu0+26);
  var val58 = data2_16777216[alu124];
  var alu125 = (alu0+27);
  var val59 = data2_16777216[alu125];
  var alu126 = (alu0+28);
  var val60 = data2_16777216[alu126];
  var alu127 = (alu0+29);
  var val61 = data2_16777216[alu127];
  var alu128 = (alu0+30);
  var val62 = data2_16777216[alu128];
  var alu129 = (alu0+31);
  var val63 = data2_16777216[alu129];
  var alu130 = select(val32,acc0[0],(val32<acc0[0]));
  var alu131 = select(val33,acc0[2],(val33<acc0[2]));
  var alu132 = select(val34,acc0[4],(val34<acc0[4]));
  var alu133 = select(val35,acc0[6],(val35<acc0[6]));
  var alu134 = select(val36,acc0[8],(val36<acc0[8]));
  var alu135 = select(val37,acc0[10],(val37<acc0[10]));
  var alu136 = select(val38,acc0[12],(val38<acc0[12]));
  var alu137 = select(val39,acc0[14],(val39<acc0[14]));
  var alu138 = select(val40,acc0[16],(val40<acc0[16]));
  var alu139 = select(val41,acc0[18],(val41<acc0[18]));
  var alu140 = select(val42,acc0[20],(val42<acc0[20]));
  var alu141 = select(val43,acc0[22],(val43<acc0[22]));
  var alu142 = select(val44,acc0[24],(val44<acc0[24]));
  var alu143 = select(val45,acc0[26],(val45<acc0[26]));
  var alu144 = select(val46,acc0[28],(val46<acc0[28]));
  var alu145 = select(val47,acc0[30],(val47<acc0[30]));
  var alu146 = select(val48,acc0[1],(val48<acc0[1]));
  var alu147 = select(val49,acc0[3],(val49<acc0[3]));
  var alu148 = select(val50,acc0[5],(val50<acc0[5]));
  var alu149 = select(val51,acc0[7],(val51<acc0[7]));
  var alu150 = select(val52,acc0[9],(val52<acc0[9]));
  var alu151 = select(val53,acc0[11],(val53<acc0[11]));
  var alu152 = select(val54,acc0[13],(val54<acc0[13]));
  var alu153 = select(val55,acc0[15],(val55<acc0[15]));
  var alu154 = select(val56,acc0[17],(val56<acc0[17]));
  var alu155 = select(val57,acc0[19],(val57<acc0[19]));
  var alu156 = select(val58,acc0[21],(val58<acc0[21]));
  var alu157 = select(val59,acc0[23],(val59<acc0[23]));
  var alu158 = select(val60,acc0[25],(val60<acc0[25]));
  var alu159 = select(val61,acc0[27],(val61<acc0[27]));
  var alu160 = select(val62,acc0[29],(val62<acc0[29]));
  var alu161 = select(val63,acc0[31],(val63<acc0[31]));
  data0_16777216[alu0] = alu130;
  data0_16777216[alu99] = alu131;
  data0_16777216[alu100] = alu132;
  data0_16777216[alu101] = alu133;
  data0_16777216[alu102] = alu134;
  data0_16777216[alu103] = alu135;
  data0_16777216[alu104] = alu136;
  data0_16777216[alu105] = alu137;
  data0_16777216[alu106] = alu138;
  data0_16777216[alu107] = alu139;
  data0_16777216[alu108] = alu140;
  data0_16777216[alu109] = alu141;
  data0_16777216[alu110] = alu142;
  data0_16777216[alu111] = alu143;
  data0_16777216[alu112] = alu144;
  data0_16777216[alu113] = alu145;
  data0_16777216[alu114] = alu146;
  data0_16777216[alu115] = alu147;
  data0_16777216[alu116] = alu148;
  data0_16777216[alu117] = alu149;
  data0_16777216[alu118] = alu150;
  data0_16777216[alu119] = alu151;
  data0_16777216[alu120] = alu152;
  data0_16777216[alu121] = alu153;
  data0_16777216[alu122] = alu154;
  data0_16777216[alu123] = alu155;
  data0_16777216[alu124] = alu156;
  data0_16777216[alu125] = alu157;
  data0_16777216[alu126] = alu158;
  data0_16777216[alu127] = alu159;
  data0_16777216[alu128] = alu160;
  data0_16777216[alu129] = alu161;
}`;

const r_65536_8_16_2_8 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_134217728:array<f32>;
@compute @workgroup_size(8,16) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var gidx0 = i32(gindex.x); /* 32768 */
  var gidx1 = i32(gindex.y); /* 2 */
  var lidx0 = i32(lindex.x); /* 8 */
  var lidx1 = i32(lindex.y); /* 16 */
  var alu0 = (bitcast<i32>((bitcast<u32>(gidx0)<<9u))+bitcast<i32>((bitcast<u32>(gidx1)<<8u))+bitcast<i32>((bitcast<u32>(lidx1)<<4u))+bitcast<i32>((bitcast<u32>(lidx0)<<1u)));
  var val0 = data1_134217728[alu0];
  var alu1 = (alu0+1);
  var val1 = data1_134217728[alu1];
  var val2 = data1_134217728[(alu0+16777216)];
  var val3 = data1_134217728[(alu0+16777217)];
  var val4 = data1_134217728[(alu0+33554432)];
  var val5 = data1_134217728[(alu0+33554433)];
  var val6 = data1_134217728[(alu0+50331648)];
  var val7 = data1_134217728[(alu0+50331649)];
  var val8 = data1_134217728[(alu0+67108864)];
  var val9 = data1_134217728[(alu0+67108865)];
  var val10 = data1_134217728[(alu0+83886080)];
  var val11 = data1_134217728[(alu0+83886081)];
  var val12 = data1_134217728[(alu0+100663296)];
  var val13 = data1_134217728[(alu0+100663297)];
  var val14 = data1_134217728[(alu0+117440512)];
  var val15 = data1_134217728[(alu0+117440513)];
  var alu2 = select(val0,val2,(val0<val2));
  var alu3 = select(val1,val3,(val1<val3));
  var alu4 = select(alu2,val4,(alu2<val4));
  var alu5 = select(alu3,val5,(alu3<val5));
  var alu6 = select(alu4,val6,(alu4<val6));
  var alu7 = select(alu5,val7,(alu5<val7));
  var alu8 = select(alu6,val8,(alu6<val8));
  var alu9 = select(alu7,val9,(alu7<val9));
  var alu10 = select(alu8,val10,(alu8<val10));
  var alu11 = select(alu9,val11,(alu9<val11));
  var alu12 = select(alu10,val12,(alu10<val12));
  var alu13 = select(alu11,val13,(alu11<val13));
  var alu14 = select(alu12,val14,(alu12<val14));
  var alu15 = select(alu13,val15,(alu13<val15));
  data0_16777216[alu0] = alu14;
  data0_16777216[alu1] = alu15;
}`;

const r_1024_32_32_16_8 = `fn nan() -> f32 { let bits = 0xffffffffu; return bitcast<f32>(bits); }
@group(0) @binding(0)
var<uniform> INFINITY : f32;
@group(0) @binding(1)var<storage,read_write>data0_16777216:array<f32>;
@group(0) @binding(2)var<storage,read_write>data1_16777216:array<f32>;
@group(0) @binding(3)var<storage,read_write>data2_16777216:array<f32>;
@group(0) @binding(4)var<storage,read_write>data3_134217728:array<f32>;
@group(0) @binding(5)var<storage,read_write>data4_16777216:array<f32>;
@compute @workgroup_size(32,32) fn main(@builtin(workgroup_id) gindex: vec3<u32>,@builtin(local_invocation_id) lindex: vec3<u32>) {
  var acc0: array<i32,16>;
  var gidx0 = i32(gindex.x); /* 1024 */
  var lidx0 = i32(lindex.x); /* 32 */
  var lidx1 = i32(lindex.y); /* 32 */
  var alu0 = (lidx0+bitcast<i32>((bitcast<u32>(gidx0)<<14u))+bitcast<i32>((bitcast<u32>(lidx1)<<9u)));
  var val0 = data2_16777216[alu0];
  var alu1 = (alu0+32);
  var val1 = data2_16777216[alu1];
  var alu2 = (alu0+64);
  var val2 = data2_16777216[alu2];
  var alu3 = (alu0+96);
  var val3 = data2_16777216[alu3];
  var alu4 = (alu0+128);
  var val4 = data2_16777216[alu4];
  var alu5 = (alu0+160);
  var val5 = data2_16777216[alu5];
  var alu6 = (alu0+192);
  var val6 = data2_16777216[alu6];
  var alu7 = (alu0+224);
  var val7 = data2_16777216[alu7];
  var alu8 = (alu0+256);
  var val8 = data2_16777216[alu8];
  var alu9 = (alu0+288);
  var val9 = data2_16777216[alu9];
  var alu10 = (alu0+320);
  var val10 = data2_16777216[alu10];
  var alu11 = (alu0+352);
  var val11 = data2_16777216[alu11];
  var alu12 = (alu0+384);
  var val12 = data2_16777216[alu12];
  var alu13 = (alu0+416);
  var val13 = data2_16777216[alu13];
  var alu14 = (alu0+448);
  var val14 = data2_16777216[alu14];
  var alu15 = (alu0+480);
  var val15 = data2_16777216[alu15];
  acc0[0] = -2147483648;
  acc0[1] = -2147483648;
  acc0[2] = -2147483648;
  acc0[3] = -2147483648;
  acc0[4] = -2147483648;
  acc0[5] = -2147483648;
  acc0[6] = -2147483648;
  acc0[7] = -2147483648;
  acc0[8] = -2147483648;
  acc0[9] = -2147483648;
  acc0[10] = -2147483648;
  acc0[11] = -2147483648;
  acc0[12] = -2147483648;
  acc0[13] = -2147483648;
  acc0[14] = -2147483648;
  acc0[15] = -2147483648;
  for (var Ridx0 = 0; Ridx0 < 8; Ridx0++) {
    var alu32 = (alu0+bitcast<i32>((bitcast<u32>(Ridx0)<<24u)));
    var val16 = data3_134217728[alu32];
    var val17 = data3_134217728[(alu32+32)];
    var val18 = data3_134217728[(alu32+64)];
    var val19 = data3_134217728[(alu32+96)];
    var val20 = data3_134217728[(alu32+128)];
    var val21 = data3_134217728[(alu32+160)];
    var val22 = data3_134217728[(alu32+192)];
    var val23 = data3_134217728[(alu32+224)];
    var val24 = data3_134217728[(alu32+256)];
    var val25 = data3_134217728[(alu32+288)];
    var val26 = data3_134217728[(alu32+320)];
    var val27 = data3_134217728[(alu32+352)];
    var val28 = data3_134217728[(alu32+384)];
    var val29 = data3_134217728[(alu32+416)];
    var val30 = data3_134217728[(alu32+448)];
    var val31 = data3_134217728[(alu32+480)];
    var alu33 = (8-Ridx0);
    var alu34 = ((i32((val16==val0)))*alu33);
    var alu35 = ((i32((val17==val1)))*alu33);
    var alu36 = ((i32((val18==val2)))*alu33);
    var alu37 = ((i32((val19==val3)))*alu33);
    var alu38 = ((i32((val20==val4)))*alu33);
    var alu39 = ((i32((val21==val5)))*alu33);
    var alu40 = ((i32((val22==val6)))*alu33);
    var alu41 = ((i32((val23==val7)))*alu33);
    var alu42 = ((i32((val24==val8)))*alu33);
    var alu43 = ((i32((val25==val9)))*alu33);
    var alu44 = ((i32((val26==val10)))*alu33);
    var alu45 = ((i32((val27==val11)))*alu33);
    var alu46 = ((i32((val28==val12)))*alu33);
    var alu47 = ((i32((val29==val13)))*alu33);
    var alu48 = ((i32((val30==val14)))*alu33);
    var alu49 = ((i32((val31==val15)))*alu33);
    var alu50 = select(acc0[0],alu34,(acc0[0]<alu34));
    var alu51 = select(acc0[1],alu35,(acc0[1]<alu35));
    var alu52 = select(acc0[2],alu36,(acc0[2]<alu36));
    var alu53 = select(acc0[3],alu37,(acc0[3]<alu37));
    var alu54 = select(acc0[4],alu38,(acc0[4]<alu38));
    var alu55 = select(acc0[5],alu39,(acc0[5]<alu39));
    var alu56 = select(acc0[6],alu40,(acc0[6]<alu40));
    var alu57 = select(acc0[7],alu41,(acc0[7]<alu41));
    var alu58 = select(acc0[8],alu42,(acc0[8]<alu42));
    var alu59 = select(acc0[9],alu43,(acc0[9]<alu43));
    var alu60 = select(acc0[10],alu44,(acc0[10]<alu44));
    var alu61 = select(acc0[11],alu45,(acc0[11]<alu45));
    var alu62 = select(acc0[12],alu46,(acc0[12]<alu46));
    var alu63 = select(acc0[13],alu47,(acc0[13]<alu47));
    var alu64 = select(acc0[14],alu48,(acc0[14]<alu48));
    var alu65 = select(acc0[15],alu49,(acc0[15]<alu49));
    acc0[0] = alu50;
    acc0[1] = alu51;
    acc0[2] = alu52;
    acc0[3] = alu53;
    acc0[4] = alu54;
    acc0[5] = alu55;
    acc0[6] = alu56;
    acc0[7] = alu57;
    acc0[8] = alu58;
    acc0[9] = alu59;
    acc0[10] = alu60;
    acc0[11] = alu61;
    acc0[12] = alu62;
    acc0[13] = alu63;
    acc0[14] = alu64;
    acc0[15] = alu65;
  }
  var val32 = data1_16777216[alu0];
  var val33 = data1_16777216[alu1];
  var val34 = data1_16777216[alu2];
  var val35 = data1_16777216[alu3];
  var val36 = data1_16777216[alu4];
  var val37 = data1_16777216[alu5];
  var val38 = data1_16777216[alu6];
  var val39 = data1_16777216[alu7];
  var val40 = data1_16777216[alu8];
  var val41 = data1_16777216[alu9];
  var val42 = data1_16777216[alu10];
  var val43 = data1_16777216[alu11];
  var val44 = data1_16777216[alu12];
  var val45 = data1_16777216[alu13];
  var val46 = data1_16777216[alu14];
  var val47 = data1_16777216[alu15];
  var val48 = data4_16777216[alu0];
  var val49 = data4_16777216[alu1];
  var val50 = data4_16777216[alu2];
  var val51 = data4_16777216[alu3];
  var val52 = data4_16777216[alu4];
  var val53 = data4_16777216[alu5];
  var val54 = data4_16777216[alu6];
  var val55 = data4_16777216[alu7];
  var val56 = data4_16777216[alu8];
  var val57 = data4_16777216[alu9];
  var val58 = data4_16777216[alu10];
  var val59 = data4_16777216[alu11];
  var val60 = data4_16777216[alu12];
  var val61 = data4_16777216[alu13];
  var val62 = data4_16777216[alu14];
  var val63 = data4_16777216[alu15];
  var alu83 = select(val48,((f32((8-acc0[0])))+96.0f),(val32<val0));
  var alu84 = select(val49,((f32((8-acc0[1])))+96.0f),(val33<val1));
  var alu85 = select(val50,((f32((8-acc0[2])))+96.0f),(val34<val2));
  var alu86 = select(val51,((f32((8-acc0[3])))+96.0f),(val35<val3));
  var alu87 = select(val52,((f32((8-acc0[4])))+96.0f),(val36<val4));
  var alu88 = select(val53,((f32((8-acc0[5])))+96.0f),(val37<val5));
  var alu89 = select(val54,((f32((8-acc0[6])))+96.0f),(val38<val6));
  var alu90 = select(val55,((f32((8-acc0[7])))+96.0f),(val39<val7));
  var alu91 = select(val56,((f32((8-acc0[8])))+96.0f),(val40<val8));
  var alu92 = select(val57,((f32((8-acc0[9])))+96.0f),(val41<val9));
  var alu93 = select(val58,((f32((8-acc0[10])))+96.0f),(val42<val10));
  var alu94 = select(val59,((f32((8-acc0[11])))+96.0f),(val43<val11));
  var alu95 = select(val60,((f32((8-acc0[12])))+96.0f),(val44<val12));
  var alu96 = select(val61,((f32((8-acc0[13])))+96.0f),(val45<val13));
  var alu97 = select(val62,((f32((8-acc0[14])))+96.0f),(val46<val14));
  var alu98 = select(val63,((f32((8-acc0[15])))+96.0f),(val47<val15));
  data0_16777216[alu0] = alu83;
  data0_16777216[alu1] = alu84;
  data0_16777216[alu2] = alu85;
  data0_16777216[alu3] = alu86;
  data0_16777216[alu4] = alu87;
  data0_16777216[alu5] = alu88;
  data0_16777216[alu6] = alu89;
  data0_16777216[alu7] = alu90;
  data0_16777216[alu8] = alu91;
  data0_16777216[alu9] = alu92;
  data0_16777216[alu10] = alu93;
  data0_16777216[alu11] = alu94;
  data0_16777216[alu12] = alu95;
  data0_16777216[alu13] = alu96;
  data0_16777216[alu14] = alu97;
  data0_16777216[alu15] = alu98;
}`;

const setupNet = async (device, safetensor) => {
    const metadata = getTensorMetadata(safetensor);
    const infinityBuf = createInfinityUniformBuf(device);

    const layouts=[device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]}),device.createBindGroupLayout({entries: [{binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' }}, {binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },{binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } }]})]

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
    const buf_46 = createEmptyBuf(device, 3221225472);;
    const buf_47 = createWeightBuf(device, 9984, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.weight']));
    const buf_48 = createWeightBuf(device, 416, getTensorBuffer(safetensor, metadata['m.seq_conv_argmax.bias']));
    const buf_49 = createEmptyBuf(device, 67108864);;
    const buf_50 = createEmptyBuf(device, 67108864);;
    const buf_51 = createEmptyBuf(device, 3221225472);;
    const buf_52 = createEmptyBuf(device, 67108864);;
    const buf_53 = createEmptyBuf(device, 67108864);;
    const buf_54 = createEmptyBuf(device, 67108864);;
    const buf_55 = createEmptyBuf(device, 536870912);;
    const buf_56 = createEmptyBuf(device, 67108864);;
    const output0 = createEmptyBuf(device, 67108864);;

    const gpuWriteBuffer0 = device.createBuffer({size:input0.size, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE });

    const gpuReadBuffer0 = device.createBuffer({size:output0.size, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });

    const kernels = [r_3_16_256_16_2_16_16_4_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_32_256_16_8_8_16_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_32_256_16_8_8_16_24_3_3_3n1, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_16_256_16_2_16_4_16_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_6_16_256_16_4_16_16_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_16_64_16_16_2_16_4_4_6_3_3_4_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_16_256_16_2_16_16_2_2_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_16_64_16_16_2_16_4_4_6_3_3_4_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_6_16_256_16_4_16_16_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_16_256_16_2_16_4_16_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_32_256_16_8_8_16_24_3_3_3n1, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_32_256_16_8_8_16_24_3_3_3, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_3_16_256_16_2_16_16_2_2_24_3_3_3n1, r_6144_8_16_8_2_32, r_6144_4_64, r_24_16_16, r_2_4096_16_16_3_4_16, r_6144_4_64, r_24_16_16n1, E_24_524288_16_2, r_524288_16_8_6_2_24, r_262144_8_4_2_48, r_262144_16_4_12_4, r_32768_16_8_8_3_4_2_6_4, r_262144_8_4_2_48n1, r_262144_8_4_2_48, r_262144_8_2_4_48, r_262144_16_4_8_24, r_32768_16_16_2_8, r_65536_8_16_2_8, r_1024_32_32_16_8];
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
        addComputePass(device, commandEncoder, pipelines[2], layouts[2], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[3], layouts[3], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[4], layouts[4], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[5], layouts[5], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[6], layouts[6], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[7], layouts[7], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_7, buf_8], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[8], layouts[8], infinityBuf, [buf_0, buf_6, buf_9], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[9], layouts[9], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[10], layouts[10], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[11], layouts[11], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[12], layouts[12], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[13], layouts[13], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[14], layouts[14], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[15], layouts[15], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_10, buf_11], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[16], layouts[16], infinityBuf, [buf_0, buf_6, buf_12], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[17], layouts[17], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[18], layouts[18], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[19], layouts[19], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[20], layouts[20], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[21], layouts[21], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[22], layouts[22], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[23], layouts[23], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_13, buf_14], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[24], layouts[24], infinityBuf, [buf_0, buf_6, buf_15], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[25], layouts[25], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[26], layouts[26], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[27], layouts[27], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[28], layouts[28], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[29], layouts[29], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[30], layouts[30], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[31], layouts[31], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_16, buf_17], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[32], layouts[32], infinityBuf, [buf_0, buf_6, buf_18], [256, 16, 6]);
        addComputePass(device, commandEncoder, pipelines[33], layouts[33], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[34], layouts[34], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[35], layouts[35], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[36], layouts[36], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[37], layouts[37], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[38], layouts[38], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[39], layouts[39], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_19, buf_20], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[40], layouts[40], infinityBuf, [buf_0, buf_6, buf_21], [1024, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[41], layouts[41], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[42], layouts[42], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[43], layouts[43], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[44], layouts[44], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[45], layouts[45], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[46], layouts[46], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[47], layouts[47], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_22, buf_23], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[48], layouts[48], infinityBuf, [buf_0, buf_6, buf_24], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[49], layouts[49], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[50], layouts[50], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[51], layouts[51], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[52], layouts[52], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[53], layouts[53], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[54], layouts[54], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[55], layouts[55], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_25, buf_26], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[56], layouts[56], infinityBuf, [buf_0, buf_6, buf_27], [1024, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[57], layouts[57], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[58], layouts[58], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[59], layouts[59], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[60], layouts[60], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[61], layouts[61], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[62], layouts[62], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[63], layouts[63], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_28, buf_29], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[64], layouts[64], infinityBuf, [buf_0, buf_6, buf_30], [256, 16, 6]);
        addComputePass(device, commandEncoder, pipelines[65], layouts[65], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[66], layouts[66], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[67], layouts[67], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[68], layouts[68], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[69], layouts[69], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[70], layouts[70], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[71], layouts[71], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_31, buf_32], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[72], layouts[72], infinityBuf, [buf_0, buf_6, buf_33], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[73], layouts[73], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[74], layouts[74], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[75], layouts[75], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[76], layouts[76], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[77], layouts[77], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[78], layouts[78], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[79], layouts[79], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_34, buf_35], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[80], layouts[80], infinityBuf, [buf_0, buf_6, buf_36], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[81], layouts[81], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[82], layouts[82], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[83], layouts[83], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[84], layouts[84], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[85], layouts[85], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[86], layouts[86], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[87], layouts[87], infinityBuf, [buf_6, buf_0, buf_4, buf_5, buf_37, buf_38], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[88], layouts[88], infinityBuf, [buf_0, buf_6, buf_39], [256, 32, 3]);
        addComputePass(device, commandEncoder, pipelines[89], layouts[89], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[90], layouts[90], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[91], layouts[91], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[92], layouts[92], infinityBuf, [buf_2, buf_0, buf_5], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[93], layouts[93], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[94], layouts[94], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[95], layouts[95], infinityBuf, [buf_6, buf_0, buf_5, buf_4, buf_40, buf_41], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[96], layouts[96], infinityBuf, [buf_0, buf_6, buf_42], [256, 16, 3]);
        addComputePass(device, commandEncoder, pipelines[97], layouts[97], infinityBuf, [buf_2, buf_0], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[98], layouts[98], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[99], layouts[99], infinityBuf, [buf_4, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[100], layouts[100], infinityBuf, [buf_2, buf_0, buf_4], [4096, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[101], layouts[101], infinityBuf, [buf_3, buf_2], [6144, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[102], layouts[102], infinityBuf, [buf_5, buf_3], [24, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[103], layouts[103], infinityBuf, [buf_43, buf_0, buf_4, buf_5, buf_44, buf_45], [32768, 384, 1]);
        addComputePass(device, commandEncoder, pipelines[104], layouts[104], infinityBuf, [buf_46, buf_43, buf_47, buf_48], [32768, 16, 1]);
        addComputePass(device, commandEncoder, pipelines[105], layouts[105], infinityBuf, [buf_49, buf_46], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[106], layouts[106], infinityBuf, [buf_50, buf_46, buf_49], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[107], layouts[107], infinityBuf, [buf_51, buf_43, buf_47, buf_48], [32768, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[108], layouts[108], infinityBuf, [buf_52, buf_51, buf_49], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[109], layouts[109], infinityBuf, [buf_53, buf_51], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[110], layouts[110], infinityBuf, [buf_54, buf_49, buf_53, buf_51, buf_50], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[111], layouts[111], infinityBuf, [buf_55, buf_43, buf_47, buf_48], [32768, 8, 1]);
        addComputePass(device, commandEncoder, pipelines[112], layouts[112], infinityBuf, [buf_56, buf_55, buf_52], [32768, 1, 1]);
        addComputePass(device, commandEncoder, pipelines[113], layouts[113], infinityBuf, [buf_53, buf_55], [32768, 2, 1]);
        addComputePass(device, commandEncoder, pipelines[114], layouts[114], infinityBuf, [output0, buf_52, buf_53, buf_55, buf_54], [1024, 1, 1]);
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
