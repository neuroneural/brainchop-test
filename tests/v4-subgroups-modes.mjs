// Automated verification for WebGPU V4 flexible Tier 1 subgroup modes:
//   - sg32 (Apple Silicon / NVIDIA, fixed 32)
//   - sg64 (Qualcomm Adreno / GCN, fixed 64 butterfly)
//   - sg32_64 (AMD RDNA / Adreno, dynamic 32 or 64)
//   - sg_small (Intel Xe/Arc/UHD 8..32, ARM Mali 16)
//   - none (shared-8KiB fallback)
// Covers Standard + LowMem128, GroupNorm + norm='none', and CPU-verified sg_size=8/16 combine math.
// Usage: node tests/v4-subgroups-modes.mjs
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const server = await createServer({
  configFile: false,
  root: ROOT,
  server: { host: '127.0.0.1', port: 0, hmr: false },
});
await server.listen();

const pageHtml = `<!doctype html><script type="module">
import { quantileNormalizeVolumeData, transposeVolume3D } from '/tensor-utils.js';
import { inferenceModelsList, resolveModelEntry } from '/brainchop-parameters.js';
import v4Runner from '/webgpu_runners/meshnet_fast_v4_runner.js';

function buildSimSgSmallShader(simSgSize) {
  return \`enable f16;
@group(0) @binding(0) var<storage, read> inp : array<vec4<f16>>;
@group(0) @binding(1) var<storage, read_write> out_q : array<u32>;
@group(0) @binding(2) var<storage, read_write> out_mom : array<vec4<f32>>;
var<workgroup> sh_sg  : array<vec4<f32>, 128>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
var<workgroup> sh_tmp : array<vec4<f32>, 256>;

fn sub_reduce(h : u32, slane : u32, val : vec4<f32>, sim_sz : u32) -> vec4<f32> {
  sh_tmp[h * 32u + slane] = vec4<f32>(
    val.x + val.y + val.z + val.w,
    dot(val, val),
    min(min(val.x, val.y), min(val.z, val.w)),
    max(max(val.x, val.y), max(val.z, val.w))
  );
  workgroupBarrier();
  let base = h * 32u + (slane / sim_sz) * sim_sz;
  var acc = sh_tmp[base];
  for (var i : u32 = 1u; i < sim_sz; i = i + 1u) {
    let v = sh_tmp[base + i];
    acc.x += v.x; acc.y += v.y;
    acc.z = min(acc.z, v.z); acc.w = max(acc.w, v.w);
  }
  workgroupBarrier();
  return acc;
}

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
  let h = lid.y * 2u + sg;
  let sim_sz : u32 = \${simSgSize}u;
  let sim_sg_id = slane % sim_sz;
  let base_in = (h * 4u) * 32u + slane;
  let f0 = vec4<f32>(inp[base_in]);
  let f1 = vec4<f32>(inp[base_in + 32u]);
  let f2 = vec4<f32>(inp[base_in + 64u]);
  let f3 = vec4<f32>(inp[base_in + 96u]);
  let r0_s = sub_reduce(h, slane, f0, sim_sz);
  let r1_s = sub_reduce(h, slane, f1, sim_sz);
  let r2_s = sub_reduce(h, slane, f2, sim_sz);
  let r3_s = sub_reduce(h, slane, f3, sim_sz);

  let b0 = (h * 4u) * 4u + (slane / sim_sz);
  if (sim_sg_id == 0u) {
    sh_sg[b0 + 0u]  = r0_s;
    sh_sg[b0 + 4u]  = r1_s;
    sh_sg[b0 + 8u]  = r2_s;
    sh_sg[b0 + 12u] = r3_s;
  }
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 4u;
    let p0 = sh_sg[rb];
    let p1 = sh_sg[rb + 1u];
    var rs = p0.x + p1.x;
    var rq = p0.y + p1.y;
    var rmn = min(p0.z, p1.z);
    var rmx = max(p0.w, p1.w);
    if (sim_sz == 8u) {
      let p2 = sh_sg[rb + 2u];
      let p3 = sh_sg[rb + 3u];
      rs += p2.x + p3.x;
      rq += p2.y + p3.y;
      rmn = min(rmn, min(p2.z, p3.z));
      rmx = max(rmx, max(p2.w, p3.w));
    }
    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    out_mom[h * 4u + slane] = vec4<f32>(rs, rq, rmn, sp);
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  out_q[base_in]       = pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y);
  out_q[base_in + 32u] = pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y);
  out_q[base_in + 64u] = pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y);
  out_q[base_in + 96u] = pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y);
}\`;
}

function f32ToF16Bits(v) {
  const f = new Float32Array([v]);
  const u = new Uint32Array(f.buffer)[0];
  const s = (u >> 16) & 0x8000;
  let e = ((u >> 23) & 0xff) - 112;
  const m = (u >> 13) & 0x3ff;
  if (e <= 0) return s;
  if (e >= 31) return s | 0x7c00;
  return s | (e << 10) | m;
}
function f16BitsToF32(h) {
  const s = (h & 0x8000) ? -1 : 1;
  const e = (h >> 10) & 0x1f;
  const m = h & 0x3ff;
  if (e === 0) return s * Math.pow(2, -14) * (m / 1024);
  return s * Math.pow(2, e - 15) * (1 + m / 1024);
}

function compareU8(a, b, nclass = 18) {
  let diffs = 0, fgUnion = 0, fgAgree = 0;
  const inter = new Float64Array(nclass);
  const sumA = new Float64Array(nclass);
  const sumB = new Float64Array(nclass);
  for (let i = 0; i < a.length; i++) {
    const x = a[i], y = b[i];
    if (x !== y) diffs++;
    if (x > 0 || y > 0) {
      fgUnion++;
      if (x === y) fgAgree++;
    }
    sumA[x]++; sumB[y]++;
    if (x === y) inter[x]++;
  }
  let diceSum = 0, diceCnt = 0;
  for (let c = 1; c < nclass; c++) {
    if (sumA[c] + sumB[c] > 0) {
      diceSum += (2 * inter[c]) / (sumA[c] + sumB[c]);
      diceCnt++;
    }
  }
  return {
    diffs,
    allAgreePct: +((100 * (a.length - diffs)) / a.length).toFixed(4),
    fgAgreePct: +((100 * fgAgree) / Math.max(1, fgUnion)).toFixed(4),
    macroDice: +(diceSum / Math.max(1, diceCnt)).toFixed(5),
  };
}

window.runSubgroupSuite = async () => {
  const adapter = await navigator.gpu.requestAdapter();
  const hasF16 = adapter.features.has('shader-f16');
  const hasSg = adapter.features.has('subgroups');
  const features = [];
  if (hasF16) features.push('shader-f16');
  if (hasSg) features.push('subgroups');
  const lim = adapter.limits;
  const device = await adapter.requestDevice({
    requiredFeatures: features,
    requiredLimits: {
      maxStorageBufferBindingSize: lim.maxStorageBufferBindingSize,
      maxBufferSize: lim.maxBufferSize,
      maxComputeInvocationsPerWorkgroup: lim.maxComputeInvocationsPerWorkgroup,
    },
  });
  device.__adapterInfo = adapter.info || {};

  // Part 1: CPU-verified sg_size=8 and sg_size=16 combine math
  const simMath = {};
  if (hasF16) {
    const nVec4 = 8 * 4 * 32;
    const h16 = new Uint16Array(nVec4 * 4);
    const f32 = new Float32Array(nVec4 * 4);
    let seed = 42;
    for (let i = 0; i < h16.length; i++) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const b = f32ToF16Bits(((seed / 2**32) - 0.5) * 12.0);
      h16[i] = b;
      f32[i] = f16BitsToF32(b);
    }
    const S = GPUBufferUsage.STORAGE, CD = GPUBufferUsage.COPY_DST, CS = GPUBufferUsage.COPY_SRC, MR = GPUBufferUsage.MAP_READ;
    const inBuf = device.createBuffer({ size: h16.byteLength, usage: S | CD });
    device.queue.writeBuffer(inBuf, 0, h16);
    const qBuf = device.createBuffer({ size: nVec4 * 4, usage: S | CS });
    const momBuf = device.createBuffer({ size: 32 * 16, usage: S | CS });
    const qRd = device.createBuffer({ size: nVec4 * 4, usage: CD | MR });
    const momRd = device.createBuffer({ size: 32 * 16, usage: CD | MR });

    for (const simSz of [8, 16]) {
      const mod = device.createShaderModule({ code: buildSimSgSmallShader(simSz) });
      const pipe = await device.createComputePipelineAsync({ layout: 'auto', compute: { module: mod, entryPoint: 'main' } });
      const bg = device.createBindGroup({
        layout: pipe.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: inBuf } },
          { binding: 1, resource: { buffer: qBuf } },
          { binding: 2, resource: { buffer: momBuf } },
        ],
      });
      const enc = device.createCommandEncoder();
      const pass = enc.beginComputePass();
      pass.setPipeline(pipe); pass.setBindGroup(0, bg); pass.dispatchWorkgroups(1, 1, 1); pass.end();
      enc.copyBufferToBuffer(qBuf, 0, qRd, 0, nVec4 * 4);
      enc.copyBufferToBuffer(momBuf, 0, momRd, 0, 32 * 16);
      device.queue.submit([enc.finish()]);
      await qRd.mapAsync(GPUMapMode.READ);
      await momRd.mapAsync(GPUMapMode.READ);
      const gpuQ = new Uint8Array(qRd.getMappedRange().slice(0));
      const gpuMom = new Float32Array(momRd.getMappedRange().slice(0));
      qRd.unmap(); momRd.unmap();

      let maxMomErr = 0, byteDiffs = 0;
      for (let hc = 0; hc < 32; hc++) {
        let s = 0, q = 0, mn = Infinity, mx = -Infinity;
        for (let lane = 0; lane < 32; lane++) {
          const off = (hc * 32 + lane) * 4;
          for (let j = 0; j < 4; j++) {
            const v = f32[off + j];
            s += v; q += v * v;
            if (v < mn) mn = v;
            if (v > mx) mx = v;
          }
        }
        const sp = mx - mn;
        maxMomErr = Math.max(
          maxMomErr,
          Math.abs(gpuMom[hc * 4 + 0] - s),
          Math.abs(gpuMom[hc * 4 + 1] - q),
          Math.abs(gpuMom[hc * 4 + 2] - mn),
          Math.abs(gpuMom[hc * 4 + 3] - sp)
        );
        const inv = sp > 1e-7 ? 1 / sp : 0;
        for (let lane = 0; lane < 32; lane++) {
          const off = (hc * 32 + lane) * 4;
          for (let j = 0; j < 4; j++) {
            const expected = Math.max(0, Math.min(255, Math.round((f32[off + j] - mn) * inv * 255)));
            if (Math.abs(gpuQ[off + j] - expected) > 1) byteDiffs++;
          }
        }
      }
      simMath['sg' + simSz] = { maxMomErr, byteDiffs };
    }
    inBuf.destroy(); qBuf.destroy(); momBuf.destroy(); qRd.destroy(); momRd.destroy();
  }

  // Part 2: End-to-end MindMap-16ch (Std + LowMem128) across all 5 subgroup modes + adapter range selection
  const buf = await (await fetch('/__nifti/t1_crop.nii.gz')).arrayBuffer();
  const dv = new DataView(buf);
  const f32In = Float32Array.from(new Uint8Array(buf, Math.round(dv.getFloat32(108, true)), 256 ** 3));
  const origRand = Math.random; let seed = 123;
  Math.random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  let normIn; try { normIn = quantileNormalizeVolumeData(f32In); } finally { Math.random = origRand; }
  const input = transposeVolume3D(normIn, [256, 256, 256], [2, 1, 0]);

  const entry16 = resolveModelEntry(inferenceModelsList.find((m) => m.id === 3), true);
  const w16 = new Uint8Array(await (await fetch('/models/model16chan18cls/model.safetensors')).arrayBuffer());
  const modes = hasF16 && hasSg ? ['sg32', 'sg64', 'sg32_64', 'sg_small', 'none'] : ['none'];

  const stdOuts = {}, lowOuts = {}, parity = { std: {}, low128: {} };
  for (const m of modes) {
    device.pushErrorScope('validation');
    device.pushErrorScope('out-of-memory');
    const exStd = await v4Runner.setupNet(device, w16, null, { ...entry16, forceSubgroupMode: m });
    const [oStd] = await exStd(input);
    exStd.dispose();
    const exLow = await v4Runner.setupNet(device, w16, null, { ...entry16, forceLowMem128: true, forceSubgroupMode: m });
    const [oLow] = await exLow(input);
    exLow.dispose();
    const oom = await device.popErrorScope();
    const val = await device.popErrorScope();
    if (oom || val) throw new Error('Mode ' + m + ' GPU error: ' + (oom?.message || val?.message));
    stdOuts[m] = Uint8Array.from(oStd);
    lowOuts[m] = Uint8Array.from(oLow);
  }

  const ref = stdOuts[modes[0]];
  for (const m of modes) {
    parity.std[m] = compareU8(ref, stdOuts[m]);
    parity.low128[m] = compareU8(stdOuts[m], lowOuts[m]);
  }

  // Part 2b: Verify norm='none' (model5_gw_ae) compiles and runs cleanly across all subgroup modes
  const w5 = new Uint8Array(await (await fetch('/models/model5_gw_ae/model.safetensors')).arrayBuffer());
  const entry5 = { id: 1, quantize8Bit: true, webgpu_runner: 'meshnet_fast_v4', enableQuantileNorm: false };
  const normNoneOk = {};
  for (const m of modes) {
    device.pushErrorScope('validation');
    device.pushErrorScope('out-of-memory');
    const ex5Std = await v4Runner.setupNet(device, w5, null, { ...entry5, forceSubgroupMode: m });
    const [o5Std] = await ex5Std(input);
    ex5Std.dispose();
    const ex5Low = await v4Runner.setupNet(device, w5, null, { ...entry5, forceLowMem128: true, forceSubgroupMode: m });
    const [o5Low] = await ex5Low(input);
    ex5Low.dispose();
    const oom = await device.popErrorScope();
    const val = await device.popErrorScope();
    if (oom || val) throw new Error('norm=none mode ' + m + ' GPU error: ' + (oom?.message || val?.message));
    normNoneOk[m] = compareU8(Uint8Array.from(o5Std), Uint8Array.from(o5Low), 3);
  }

  // Part 3: Verify adapter.info subgroupMinSize/MaxSize auto-routing (AMD [32,64], Adreno [64,64], Intel [8,32], Mali [16,16])
  const routingLogs = {};
  if (hasF16 && hasSg) {
    const origLog = console.log;
    const origInfo = device.__adapterInfo;
    try {
      for (const [tag, minS, maxS] of [
        ['apple_nvidia', 32, 32],
        ['amd_rdna', 32, 64],
        ['adreno_64', 64, 64],
        ['intel_xe', 8, 32],
        ['mali_16', 16, 16],
        ['firefox_4_128', 4, 128],
      ]) {
        let captured = '';
        console.log = (...a) => {
          const s = a.join(' ');
          if (s.includes('[WebGPU-V4')) captured = s;
          origLog(...a);
        };
        device.__adapterInfo = { ...origInfo, subgroupMinSize: minS, subgroupMaxSize: maxS };
        const ex = await v4Runner.setupNet(device, w16, null, entry16);
        ex.dispose();
        routingLogs[tag] = captured;
      }
    } finally {
      console.log = origLog;
      device.__adapterInfo = origInfo;
    }
  }

  device.destroy();
  return { hasF16, hasSg, simMath, parity, normNoneOk, routingLogs };
};
</script>`;

let browser;
try {
  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage();
  page.on('pageerror', (e) => { throw e; });
  await page.route('**/__nifti/t1_crop.nii.gz', (r) =>
    r.fulfill({ contentType: 'application/octet-stream', body: gunzipSync(readFileSync(path.join(ROOT, 'public/t1_crop.nii.gz'))) })
  );
  await page.route('**/__sg_suite', (r) => r.fulfill({ contentType: 'text/html', body: pageHtml }));
  await page.goto(`${server.resolvedUrls.local[0]}__sg_suite`);
  await page.waitForFunction(() => typeof window.runSubgroupSuite === 'function');
  const res = await page.evaluate(() => window.runSubgroupSuite());
  console.log('=== V4 Flexible Subgroup Verification ===');
  console.log(JSON.stringify(res, null, 2));

  if (res.hasF16) {
    assert.equal(res.simMath.sg8.byteDiffs, 0, 'sg_size=8 combine must have 0 byte diffs vs CPU exact');
    assert.ok(res.simMath.sg8.maxMomErr < 1e-3, `sg_size=8 moment error too high: ${res.simMath.sg8.maxMomErr}`);
    assert.equal(res.simMath.sg16.byteDiffs, 0, 'sg_size=16 combine must have 0 byte diffs vs CPU exact');
    assert.ok(res.simMath.sg16.maxMomErr < 1e-3, `sg_size=16 moment error too high: ${res.simMath.sg16.maxMomErr}`);
  }
  if (res.hasF16 && res.hasSg) {
    assert.equal(res.parity.std.sg32_64.diffs, 0, 'sg32_64 must be bit-identical to sg32 on 32-wide GPU');
    assert.equal(res.parity.std.sg_small.diffs, 0, 'sg_small must be bit-identical to sg32 on 32-wide GPU');
    assert.ok(res.parity.std.sg64.macroDice >= 0.995 && res.parity.std.sg64.allAgreePct >= 99.95, `sg64 butterfly parity below gate: ${JSON.stringify(res.parity.std.sg64)}`);
    assert.ok(res.parity.std.none.macroDice >= 0.995 && res.parity.std.none.allAgreePct >= 99.95, `shared-8KiB parity below gate: ${JSON.stringify(res.parity.std.none)}`);
    for (const m of ['sg32', 'sg64', 'sg32_64', 'sg_small', 'none']) {
      assert.equal(res.parity.low128[m].diffs, 0, `LowMem128 must be bit-identical to Std in mode ${m}`);
      assert.equal(res.normNoneOk[m].diffs, 0, `norm=none LowMem128 must be bit-identical to Std in mode ${m}`);
    }
    assert.ok(res.routingLogs.apple_nvidia.includes('subgroups32 '), 'Apple/NVIDIA [32,32] -> subgroups32');
    assert.ok(res.routingLogs.amd_rdna.includes('subgroups32-64'), 'AMD RDNA [32,64] -> subgroups32-64');
    assert.ok(res.routingLogs.adreno_64.includes('subgroups64-bf'), 'Adreno [64,64] -> subgroups64-bf');
    assert.ok(res.routingLogs.intel_xe.includes('subgroups8-32'), 'Intel Xe [8,32] -> subgroups8-32');
    assert.ok(res.routingLogs.mali_16.includes('subgroups8-32'), 'Mali [16,16] -> subgroups8-32');
    assert.ok(res.routingLogs.firefox_4_128.includes('shared-8KiB'), 'Unknown [4,128] -> shared-8KiB');
  }
  console.log('ALL V4 FLEXIBLE SUBGROUP MODE, PARITY, AND ROUTING GATES PASSED!');
} finally {
  await browser?.close();
  await server.close();
}
