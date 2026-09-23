#!/usr/bin/env node
// Paired WebGPU runner benchmark: normalized input -> raw runner output.
//
// Times one or more webgpu_runners/*.js "arms" on the same browser, GPU and
// input, alternating arm order across rounds, each round in a fresh browser
// process. Built to compare the shipped (BEAM-tuned elsewhere) runners against
// re-exports of the same model tuned on this machine.
//
//   node tests/webgpu_runner_bench.mjs --model mindgrab
//   node tests/webgpu_runner_bench.mjs --model mindmap --rounds 4 --repeats 5
//   node tests/webgpu_runner_bench.mjs --model mindgrab \
//     --arm shipped=webgpu_runners/mindgrab_runner.js,public/models/mindgrab/model.safetensors \
//     --arm amd=/tmp/amd/mindgrab_runner.js,/tmp/amd/model.safetensors [--split-submit]
//
// Without --arm, the model's shipped runner is the only arm.
// Needs system Chrome with hardware WebGPU (refuses software adapters). On
// Linux: CHROME=/usr/bin/google-chrome (default) and access to /dev/dri/renderD*.
//
// Scope: excludes NIfTI decode, normalization, transposes and postprocessing.
// setup = setupNet (weight upload + pipeline compilation); run = one inference
// call including the output readback the runner itself performs; compute = sum
// of GPU timestamp deltas over the runner's compute passes.

import { createServer } from 'node:http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { createHash } from 'node:crypto'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const MODELS = {
  mindgrab: { runner: 'mindgrab', weights: 'public/models/mindgrab/model.safetensors', nclass: 2 },
  mindmap: { runner: 'model24chan18cls_gdice_prio', weights: 'public/models/model24chan18cls_gdice_prio/model.safetensors', nclass: 18 },
  model16: { runner: 'model16chan18cls', weights: 'public/models/model16chan18cls/model.safetensors', nclass: 18 },
}

function parseArgs(argv) {
  const a = { model: 'mindgrab', rounds: 3, repeats: 3, arms: [], input: 'public/t1_crop.nii.gz', out: null, splitSubmit: false }
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i], v = argv[i + 1]
    if (k === '--model') { a.model = v; i++ }
    else if (k === '--rounds') { a.rounds = Number(v); i++ }
    else if (k === '--repeats') { a.repeats = Number(v); i++ }
    else if (k === '--input') { a.input = v; i++ }
    else if (k === '--out') { a.out = v; i++ }
    else if (k === '--split-submit') a.splitSubmit = true
    else if (k === '--arm') {
      const m = /^([\w.-]+)=([^,]+),(.+)$/.exec(v)
      if (!m) throw Error(`--arm wants name=runner.js,weights.safetensors, got ${v}`)
      a.arms.push({ name: m[1], runner: resolve(m[2]), weights: resolve(m[3]) }); i++
    } else throw Error(`unknown argument ${k}`)
  }
  const model = MODELS[a.model]
  if (!model) throw Error(`--model must be one of ${Object.keys(MODELS).join(', ')}`)
  if (!a.arms.length) a.arms.push({ name: 'shipped', runner: join(root, `webgpu_runners/${model.runner}_runner.js`), weights: join(root, model.weights) })
  for (const arm of a.arms) for (const f of [arm.runner, arm.weights]) if (!existsSync(f)) throw Error(`missing ${f}`)
  if (!Number.isInteger(a.rounds) || a.rounds < 1 || !Number.isInteger(a.repeats) || a.repeats < 1) throw Error('invalid --rounds/--repeats')
  a.nclass = model.nclass
  a.out = resolve(a.out ?? join(root, 'bench-results', `${a.model}-${new Date().toISOString().replace(/[:.]/g, '-')}`))
  return a
}

// The app's preprocessing for these models: 256^3 input, quantile
// normalization (0.05/0.95; the app samples 100k voxels, exact here), then
// enableTranspose (tf transpose of a 3D tensor reverses the axes).
function loadInput(path) {
  const b = gunzipSync(readFileSync(resolve(root, path)))
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength)
  const dims = [1, 2, 3].map(i => dv.getInt16(40 + 2 * i, true))
  if (dims.some(d => d !== 256)) throw Error(`input must be 256^3 (conformed), got ${dims}`)
  const datatype = dv.getInt16(70, true), voxOffset = dv.getFloat32(108, true)
  let slope = dv.getFloat32(112, true); const inter = dv.getFloat32(116, true)
  if (!slope) slope = 1
  const n = 256 ** 3, raw = new Float32Array(n), off = Math.round(voxOffset)
  const read = { 2: i => dv.getUint8(off + i), 4: i => dv.getInt16(off + 2 * i, true), 512: i => dv.getUint16(off + 2 * i, true), 16: i => dv.getFloat32(off + 4 * i, true) }[datatype]
  if (!read) throw Error(`unsupported NIfTI datatype ${datatype}`)
  for (let i = 0; i < n; i++) raw[i] = read(i) * slope + inter
  const sorted = Float32Array.from(raw).sort()
  const q = p => sorted[Math.min(n - 1, Math.floor(p * (n - 1)))]
  const qmin = q(0.05), qmax = q(0.95), range = qmax - qmin
  const out = new Float32Array(n)
  for (let z = 0; z < 256; z++) for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++)
    out[z + y * 256 + x * 65536] = (raw[x + y * 256 + z * 65536] - qmin) / range
  return out
}

const median = xs => { const s = [...xs].sort((p, q) => p - q), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2 }
const sha = buf => createHash('sha256').update(buf).digest('hex').slice(0, 16)

// Runs inside the page. One arm, one fresh device.
async function pageBench({ armName, repeats, n, nclass, splitSubmit }) {
  if (!navigator.gpu) throw Error('WebGPU unavailable (not a secure context, or disabled)')
  const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' })
  if (!adapter) throw Error('no WebGPU adapter')
  const info = adapter.info
  if (adapter.isFallbackAdapter || info.isFallbackAdapter || /swiftshader|llvmpipe|software/i.test(`${info.vendor} ${info.architecture} ${info.device} ${info.description}`))
    throw Error(`software adapter (${info.vendor}/${info.architecture}) is not a hardware measurement`)
  const hasTs = adapter.features.has('timestamp-query')
  const L = adapter.limits
  // Same device shape main.js asks for, plus timestamps.
  const device = await adapter.requestDevice({
    requiredFeatures: ['shader-f16', ...(hasTs ? ['timestamp-query'] : [])],
    requiredLimits: {
      maxBufferSize: L.maxBufferSize, maxStorageBufferBindingSize: L.maxStorageBufferBindingSize,
      maxComputeInvocationsPerWorkgroup: L.maxComputeInvocationsPerWorkgroup,
      maxComputeWorkgroupSizeX: L.maxComputeWorkgroupSizeX,
      maxComputeWorkgroupStorageSize: L.maxComputeWorkgroupStorageSize,
      maxStorageBuffersPerShaderStage: L.maxStorageBuffersPerShaderStage,
    },
  })
  const errors = []
  device.addEventListener('uncapturederror', e => errors.push(e.error.message))

  // Wrap every compute pass the runner opens with a begin/end timestamp pair.
  // splitSubmit: submit each pass as its own command buffer. Generated runners
  // put every pass in one submission; a slow (e.g. untuned) runner can then
  // exceed the driver's GPU watchdog (amdgpu: ~10 s per job) and lose the
  // device. Kernel timestamps are unaffected; wall time gains per-submit cost.
  const QCAP = 4096   // WebGPU maximum; drained after every call
  let cursor = 0
  const querySet = hasTs ? device.createQuerySet({ type: 'timestamp', count: QCAP }) : null
  if (querySet || splitSubmit) {
    const createEncoder = device.createCommandEncoder.bind(device)
    device.createCommandEncoder = (...args) => {
      let real = createEncoder(...args)
      const wrapper = {
        beginComputePass(desc = {}) {
          if (querySet) {
            if (desc.timestampWrites) throw Error('runner already uses timestampWrites')
            if (cursor + 2 > QCAP) throw Error('timestamp capacity exceeded')
            const i = cursor; cursor += 2
            desc = { ...desc, timestampWrites: { querySet, beginningOfPassWriteIndex: i, endOfPassWriteIndex: i + 1 } }
          }
          const pass = real.beginComputePass(desc)
          if (splitSubmit) {
            const end = pass.end.bind(pass)
            pass.end = () => { end(); device.queue.submit([real.finish()]); real = createEncoder(...args) }
          }
          return pass
        },
        finish: (...a) => real.finish(...a),
      }
      return new Proxy(wrapper, { get: (t, k) => k in t ? t[k] : (typeof real[k] === 'function' ? real[k].bind(real) : real[k]) })
    }
  }
  const drainTimestamps = async () => {
    if (!querySet || !cursor) return { ms: null, passes: 0 }
    const count = cursor; cursor = 0
    const resolved = device.createBuffer({ size: count * 8, usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC })
    const read = device.createBuffer({ size: count * 8, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ })
    const e = device.createCommandEncoder()
    e.resolveQuerySet(querySet, 0, count, resolved, 0)
    e.copyBufferToBuffer(resolved, 0, read, 0, count * 8)
    device.queue.submit([e.finish()])
    await read.mapAsync(GPUMapMode.READ)
    const t = new BigUint64Array(read.getMappedRange())
    let ns = 0n
    for (let q = 0; q < count; q += 2) if (t[q + 1] > t[q]) ns += t[q + 1] - t[q]
    read.unmap(); read.destroy(); resolved.destroy()
    return { ms: Number(ns) / 1e6, passes: count / 2 }
  }

  // Track live GPU buffer bytes (excluding our own timestamp buffers above,
  // which are created through the unwrapped path below).
  let live = 0, peak = 0
  const createBuffer = device.createBuffer.bind(device)
  device.createBuffer = desc => {
    const b = createBuffer(desc); live += Number(desc.size); peak = Math.max(peak, live)
    const destroy = b.destroy.bind(b); let gone = false
    b.destroy = () => { if (!gone) { live -= Number(desc.size); gone = true } destroy() }
    return b
  }
  const drain = drainTimestamps
  const drainUntracked = async () => { const cb = device.createBuffer; device.createBuffer = createBuffer; try { return await drain() } finally { device.createBuffer = cb } }

  const input = new Float32Array(await (await fetch('/input')).arrayBuffer())
  let weights = new Uint8Array(await (await fetch(`/arm/${armName}/weights`)).arrayBuffer())
  weights = castSafetensorsToF16(weights)
  const runner = (await import(`/arm/${armName}/runner.js`)).default

  device.pushErrorScope('validation'); device.pushErrorScope('out-of-memory')
  let t = performance.now()
  const execute = await runner.setupNet(device, weights)
  await device.queue.onSubmittedWorkDone()
  const setupMs = performance.now() - t
  await drainUntracked()

  const runs = [], compute = []
  let out
  for (let r = 0; r < repeats + 1; r++) {       // run 0 = first (cold) call
    t = performance.now()
    out = await execute(input)
    await device.queue.onSubmittedWorkDone()
    runs.push(performance.now() - t)
    const ts = await drainUntracked()
    compute.push(ts.ms); runs.passes = ts.passes
  }
  const oom = await device.popErrorScope(), validation = await device.popErrorScope()
  if (oom || validation || errors.length) throw Error(JSON.stringify({ oom: oom?.message, validation: validation?.message, errors }))

  const labels = out[0]
  if (labels.length !== n) throw Error(`output has ${labels.length} values, expected ${n}`)
  let fg = 0
  for (let i = 0; i < n; i++) { const v = labels[i]; if (!Number.isInteger(v) || v < 0 || v >= nclass) throw Error(`invalid label ${v} at ${i}`); fg += v !== 0 }
  if (!fg || fg > 0.95 * n) throw Error(`implausible foreground count ${fg}`)
  await fetch('/result', { method: 'POST', body: new Uint8Array(labels.buffer, labels.byteOffset, labels.byteLength) })
  device.destroy()
  return {
    adapter: { vendor: info.vendor, architecture: info.architecture, device: info.device, description: info.description },
    timestamps: hasTs, passes: runs.passes, setupMs, firstRunMs: runs[0], warmRunMs: runs.slice(1),
    firstComputeMs: compute[0], warmComputeMs: compute.slice(1), peakBufferBytes: peak, foreground: fg,
  }

  // Mirror of inference-webgpu.js castSafetensorsToF16 (no-op on F16 files).
  function castSafetensorsToF16(bytes) {
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    const hl = Number(dv.getBigUint64(0, true))
    const header = JSON.parse(new TextDecoder().decode(bytes.subarray(8, 8 + hl)))
    if (!Object.entries(header).some(([k, v]) => k !== '__metadata__' && v.dtype === 'F32')) return bytes
    const start = 8 + hl, nh = {}, chunks = []; let o = 0
    for (const [k, v] of Object.entries(header)) {
      if (k === '__metadata__') { nh[k] = v; continue }
      const raw = bytes.subarray(start + v.data_offsets[0], start + v.data_offsets[1])
      const ob = v.dtype === 'F32' ? new Uint8Array(new Float16Array(new Float32Array(raw.slice().buffer)).buffer) : raw
      nh[k] = { dtype: v.dtype === 'F32' ? 'F16' : v.dtype, shape: v.shape, data_offsets: [o, o + ob.byteLength] }
      chunks.push(ob); o += ob.byteLength
    }
    const hb = new TextEncoder().encode(JSON.stringify(nh)), pad = (8 - hb.byteLength % 8) % 8
    const res = new Uint8Array(8 + hb.byteLength + pad + o)
    new DataView(res.buffer).setBigUint64(0, BigInt(hb.byteLength + pad), true)
    res.set(hb, 8); res.fill(0x20, 8 + hb.byteLength, 8 + hb.byteLength + pad)
    let p = 8 + hb.byteLength + pad; for (const c of chunks) { res.set(c, p); p += c.byteLength }
    return res
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  mkdirSync(args.out, { recursive: true })
  const n = 256 ** 3
  console.log(`model=${args.model} arms=${args.arms.map(a => a.name).join(',')} rounds=${args.rounds} repeats=${args.repeats}${args.splitSubmit ? ' split-submit' : ''}`)
  const input = loadInput(args.input)

  let posted = null
  const server = createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/result') {
      const chunks = []; req.on('data', c => chunks.push(c)); req.on('end', () => { posted = Buffer.concat(chunks); res.writeHead(204); res.end() }); return
    }
    if (req.url === '/') { res.setHeader('Content-Type', 'text/html'); res.end('<!doctype html><title>runner bench</title>'); return }
    if (req.url === '/input') { res.end(Buffer.from(input.buffer)); return }
    const m = /^\/arm\/([\w.-]+)\/(runner\.js|weights)$/.exec(req.url)
    const arm = m && args.arms.find(a => a.name === m[1])
    if (!arm) { res.writeHead(404); res.end(); return }
    res.setHeader('Content-Type', m[2] === 'runner.js' ? 'text/javascript' : 'application/octet-stream')
    res.end(readFileSync(m[2] === 'runner.js' ? arm.runner : arm.weights))
  })
  await new Promise(r => server.listen(0, '127.0.0.1', r))
  const url = `http://127.0.0.1:${server.address().port}/`

  const report = {
    model: args.model, input: args.input, rounds: args.rounds, repeats: args.repeats, splitSubmit: args.splitSubmit,
    arms: args.arms.map(a => ({ ...a, runnerSha: sha(readFileSync(a.runner)), weightsSha: sha(readFileSync(a.weights)) })),
    scope: 'normalized+transposed input -> runner output readback; setup = setupNet', rows: [],
  }
  const chromeArgs = ['--enable-unsafe-webgpu', '--enable-features=Vulkan', '--use-angle=vulkan', '--ignore-gpu-blocklist',
    // Full-resolution GPU timestamps (Chrome quantizes them to 100 us by default).
    '--enable-dawn-features=allow_unsafe_apis', '--disable-dawn-features=timestamp_quantization']
  const reference = new Map()   // round -> first arm's output, for agreement counts
  try {
    for (let round = 0; round < args.rounds; round++) {
      const order = round % 2 ? [...args.arms].reverse() : args.arms
      for (const arm of order) {
        const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: chromeArgs })
        try {
          const page = await browser.newPage()
          page.on('pageerror', e => console.error('pageerror:', e.message))
          await page.goto(url)
          posted = null
          const r = await page.evaluate(pageBench, { armName: arm.name, repeats: args.repeats, n, nclass: args.nclass, splitSubmit: args.splitSubmit })
          if (!posted || posted.length !== n * 4) throw Error('missing output')
          const labels = new Float32Array(posted.buffer, posted.byteOffset, n)
          let diff = null
          if (!reference.has(round)) reference.set(round, labels)
          else { const ref = reference.get(round); diff = 0; for (let i = 0; i < n; i++) diff += ref[i] !== labels[i] }
          const row = { round, arm: arm.name, browser: browser.version(), ...r, outputSha: sha(posted), diffVsFirstArm: diff }
          report.rows.push(row)
          console.log(`round ${round} ${arm.name.padEnd(10)} setup ${r.setupMs.toFixed(0)} ms | first ${r.firstRunMs.toFixed(0)} ms | warm ${median(r.warmRunMs).toFixed(0)} ms | compute ${r.warmComputeMs[0] == null ? 'n/a' : median(r.warmComputeMs).toFixed(1) + ' ms'} (${r.passes} passes) | peak ${(r.peakBufferBytes / 2 ** 20).toFixed(0)} MiB${diff == null ? '' : ` | diff ${diff}`}`)
        } finally { await browser.close() }
        writeFileSync(join(args.out, 'report.json'), JSON.stringify(report, null, 2))
      }
    }
  } finally { server.close() }

  console.log(`\nsummary (medians across rounds), ${report.rows[0].adapter.vendor}/${report.rows[0].adapter.architecture}, Chrome ${report.rows[0].browser}`)
  for (const arm of args.arms) {
    const rows = report.rows.filter(r => r.arm === arm.name)
    const warm = rows.flatMap(r => r.warmRunMs), comp = rows.flatMap(r => r.warmComputeMs).filter(x => x != null)
    console.log(`${arm.name.padEnd(10)} setup ${median(rows.map(r => r.setupMs)).toFixed(0)} ms | first ${median(rows.map(r => r.firstRunMs)).toFixed(0)} ms | warm ${median(warm).toFixed(0)} ms | compute ${comp.length ? median(comp).toFixed(1) + ' ms' : 'n/a'} | peak ${(Math.max(...rows.map(r => r.peakBufferBytes)) / 2 ** 20).toFixed(0)} MiB | outputs ${[...new Set(rows.map(r => r.outputSha))].join(',')}`)
  }
  console.log(`report: ${join(args.out, 'report.json')}`)
}

main().catch(e => { console.error(e); process.exit(1) })
