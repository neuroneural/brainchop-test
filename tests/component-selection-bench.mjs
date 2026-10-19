#!/usr/bin/env node
// Hardware Chrome; both actual 104-class checkpoints on the bundled 256³ sample.
// node tests/component-selection-bench.mjs --out /tmp/component-bench
// Optional: --backend native,webgl2,generated --models 5,14 --pairs 9
// Selection stress only (no inference): --models none
// Inference runs once per checkpoint/backend. Before/after cleanup receives the
// SAME raw labels. Timings exclude inference, transpose and input cloning.
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { createHash } from 'node:crypto'
import { chromium } from 'playwright'
import { build } from 'esbuild'
import { inferenceModelsList } from '../brainchop-parameters.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const opts = { out: '/tmp/brainchop-component-bench', backend: 'native,webgl2', models: '5,14', pairs: '9' }
for (let i = 2; i < process.argv.length; i += 2) {
  const key = process.argv[i].slice(2)
  if (!(key in opts) || !process.argv[i + 1]) throw Error(`Unknown/missing argument ${process.argv[i]}`)
  opts[key] = process.argv[i + 1]
}
const pairs = Number(opts.pairs), models = opts.models === 'none' ? [] : opts.models.split(',').map(Number), backends = opts.backend.split(',')
if (!Number.isInteger(pairs) || pairs < 1 || models.some(id => ![5, 14].includes(id)) || backends.some(b => !['native', 'webgl2', 'generated'].includes(b))) throw Error('Invalid benchmark arguments')
mkdirSync(opts.out, { recursive: true })
const bundle = await build({ entryPoints: [join(root, 'tests/fixtures/component-selection-browser.js')], bundle: true, format: 'esm', write: false, logLevel: 'warning' })
const input = gunzipSync(readFileSync(join(root, 'public/t1_crop.nii.gz')))
const weights = new Map(models.map(id => {
  const entry = inferenceModelsList.find(e => e.id === id)
  return ['/' + entry.webgpu_safetensor.replace(/^\.\//, ''), readFileSync(join(root, 'public', entry.webgpu_safetensor))]
}))
const sha = b => createHash('sha256').update(b).digest('hex')
const report = { input: 'public/t1_crop.nii.gz', inputSha: sha(input), pairs, rows: [], stress: [],
  weights: [...weights].map(([path, bytes]) => ({ path, sha256: sha(bytes) })),
  scope: 'selectorWithRefill = component counts + linear/quadratic selection + unchanged neighbor refill; fullPostprocess additionally includes validation, guard labeling, set and final uint8 conversion; excludes inference, transpose and input cloning' }
const server = createServer((req, res) => {
  if (req.url === '/') { res.setHeader('Content-Type', 'text/html'); res.end('<!doctype html><title>component selection benchmark</title>'); return }
  if (req.url === '/bench.js') { res.setHeader('Content-Type', 'text/javascript'); res.end(bundle.outputFiles[0].contents); return }
  const bytes = req.url === '/input.nii' ? input : weights.get(req.url)
  if (!bytes) { res.writeHead(404); res.end(); return }
  res.end(bytes)
})
await new Promise(r => server.listen(0, '127.0.0.1', r))
const mac = process.platform === 'darwin'
const median = values => { const s = [...values].sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2 }
const save = () => writeFileSync(join(opts.out, 'report.json'), JSON.stringify(report, null, 2))
try {
  const jobs = models.length ? models.flatMap(id => backends.map(backend => ({ id, backend }))) : [{ id: null, backend: null }]
  for (const { id, backend } of jobs) {
    const browser = await chromium.launch({ executablePath: process.env.CHROME || (mac ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : '/usr/bin/google-chrome'),
      headless: process.env.HEADLESS ? process.env.HEADLESS === '1' : !mac,
      args: ['--enable-unsafe-webgpu', ...(mac ? [] : ['--enable-features=Vulkan', '--use-angle=vulkan', '--ignore-gpu-blocklist'])] })
    try {
      const page = await browser.newPage()
      page.on('console', m => { if (/exact$/.test(m.text())) console.log(m.text()) })
      page.on('pageerror', e => console.error(e.message))
      await page.goto(`http://127.0.0.1:${server.address().port}/`)
      if (id !== null) {
        const row = await page.evaluate(async args => (await import('/bench.js')).benchmark(args), { id, backend, pairs })
        report.rows.push({ browser: browser.version(), ...row })
        console.log(`model ${id} ${backend}: ${row.components} components; ` + Object.entries(row.times).map(([scope, t]) => `${scope} ${median(t.before).toFixed(1)} -> ${median(t.after).toFixed(1)} ms`).join('; '))
      }
      if (!report.stress.length) report.stress = await page.evaluate(async args => (await import('/bench.js')).stress(args), { pairs })
      save()
    } finally { await browser.close() }
  }
} finally { server.close() }
for (const r of report.stress) console.log(`${r.method} ${r.pattern} K=${r.components}: ${median(r.times.before).toFixed(2)} -> ${median(r.times.after).toFixed(2)} ms; exact`)
console.log(`Report: ${join(opts.out, 'report.json')}`)
