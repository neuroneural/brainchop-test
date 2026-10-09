// Hand-written vs tinygrad WebGPU kernels in brainchop-test.
//   node kernels.mjs [runs=4]
import { createRequire } from 'node:module'
import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'
const require = createRequire('/home/usmannizam/bctools/package.json')
const { chromium } = require('playwright')
const RUNS = Number(process.argv[2] || 4)
const PORT = 4183
const ARGS = ['--enable-unsafe-webgpu', '--enable-features=Vulkan', '--use-angle=vulkan', '--ignore-gpu-blocklist']
const MODELS = (process.env.MODELS || '0,1,2,4,5,7,8,9').split(',')
const KERNELS = { 'hand-written': '', tinygrad: '?webgpuKernels=tinygrad' }

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: '/home/usmannizam/projects/brainchop-test', stdio: 'pipe' })
await new Promise((r) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && r()))

const results = []
for (const model of MODELS) for (const [kernels, query] of Object.entries(KERNELS)) {
  const browser = await chromium.launch({ headless: true, args: ARGS })
  try {
    for (let run = 1; run <= RUNS; run++) {
      const page = await browser.newPage({ viewport: { width: 1400, height: 900 } })
      let memory = null, row = null, error = null
      const done = new Promise((resolve) => {
        const timer = setTimeout(() => { error = 'timeout'; resolve() }, 300_000)
        page.on('console', (m) => {
          const t = m.text()
          const mem = /WebGPU inference \((.+?) kernels\) took .*?, ([\d.]+) (MiB|GiB) GPU memory/.exec(t)
          if (mem) memory = { kernels: mem[1], mib: Number(mem[2]) * (mem[3] === 'GiB' ? 1024 : 1) }
          if (t.startsWith('[stage-timings] ')) { row = JSON.parse(t.slice(16)); if (!row.export) { clearTimeout(timer); resolve() } }
          if (/WebGPU inference failed/.test(t)) { error = t.slice(0, 200); clearTimeout(timer); resolve() }
        })
      })
      const ready = new Promise((r) => page.on('console', (m) => /WebGPU initialized successfully/.test(m.text()) && r()))
      await page.goto(`http://127.0.0.1:${PORT}/${query}`, { waitUntil: 'networkidle' })
      await ready
      await page.waitForTimeout(1000)
      await page.selectOption('#modelSelect', model)
      await done
      const rec = { model, name: row?.model, kernels, ran: memory?.kernels, run, inference: row?.inference, setup: row?.setup,
        total: row?.total, memoryMiB: memory?.mib, error }
      console.log(JSON.stringify(rec))
      results.push(rec)
      await page.close()
    }
  } finally { await browser.close() }
}
writeFileSync(new URL('./kernels-results.json', import.meta.url), JSON.stringify(results, null, 2))
server.kill()
process.exit(0)
