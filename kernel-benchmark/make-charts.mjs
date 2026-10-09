// Renders the hand-written vs tinygrad comparison as slide-ready PNGs.
//   node make-charts.mjs        (reads summary.json, writes *.png, *.svg, summary.csv)
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire('/home/usmannizam/bctools/package.json')
const { chromium } = require('playwright')
const here = new URL('.', import.meta.url).pathname

const NAMES = {
  0: 'Tissue GWM (light)',
  1: 'Skull stripping (MindGrab)',
  2: 'Subcortical + GWM',
  4: 'Aparc+Aseg 104',
  5: 'Aparc+Aseg 50',
  7: 'Subcortical + GWM (fast)',
  9: 'Aparc+Aseg 104 (lesion)',
}
const rows = JSON.parse(readFileSync(`${here}summary.json`, 'utf8'))
  .map((r) => ({ ...r, label: NAMES[r.model] }))
  .sort((a, b) => b.inf_tg / b.inf_hw - a.inf_tg / a.inf_hw)

const C = {
  surface: '#ffffff', text: '#0b0b0b', text2: '#52514e', muted: '#8a8984', grid: '#e8e7e2',
  hw: '#2a78d6', tg: '#eb6834', good: '#0f6b2f', bad: '#a3322f',
}
const FONT = `'Inter', 'Helvetica Neue', Arial, sans-serif`

/**
 * Horizontal grouped bars: per model a hand-written bar over a tinygrad bar,
 * value at each bar end, and the change in a right-hand column.
 */
function chart({ title, subtitle, unit, hw, tg, change, max, ticks }) {
  const W = 1600, left = 330, right = 230, top = 150, group = 74, bar = 26, gap = 4
  const plotW = W - left - right
  const H = top + rows.length * group + 80
  const x = (v) => left + (v / max) * plotW
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="${FONT}">
<rect width="${W}" height="${H}" fill="${C.surface}"/>
<text x="40" y="58" font-size="34" font-weight="650" fill="${C.text}">${title}</text>
<text x="40" y="96" font-size="21" fill="${C.text2}">${subtitle}</text>
<g transform="translate(${left},122)" font-size="19" fill="${C.text2}">
  <rect x="0" y="-14" width="16" height="16" rx="3" fill="${C.hw}"/><text x="24" y="0">Hand-written kernels</text>
  <rect x="250" y="-14" width="16" height="16" rx="3" fill="${C.tg}"/><text x="274" y="0">tinygrad kernels</text>
</g>
<text x="${W - 40}" y="122" font-size="19" fill="${C.text2}" text-anchor="end">${change.heading}</text>`
  for (const t of ticks) {
    s += `<line x1="${x(t)}" x2="${x(t)}" y1="${top - 8}" y2="${top + rows.length * group}" stroke="${C.grid}" stroke-width="1.5"/>
<text x="${x(t)}" y="${top + rows.length * group + 30}" font-size="18" fill="${C.muted}" text-anchor="middle">${t.toLocaleString()}${t === ticks.at(-1) ? ` ${unit}` : ''}</text>`
  }
  rows.forEach((r, i) => {
    const y0 = top + i * group + (group - 2 * bar - gap) / 2
    s += `<text x="${left - 18}" y="${y0 + bar + gap / 2 + 7}" font-size="21" fill="${C.text}" text-anchor="end">${r.label}</text>`
    for (const [k, v, color] of [[0, hw(r), C.hw], [1, tg(r), C.tg]]) {
      const y = y0 + k * (bar + gap), w = x(v) - left
      // Square at the baseline, 4px rounded at the data end.
      s += `<path d="M${left},${y} h${w - 4} a4,4 0 0 1 4,4 v${bar - 8} a4,4 0 0 1 -4,4 h${-(w - 4)} z" fill="${color}"/>
<text x="${x(v) + 10}" y="${y + bar / 2 + 7}" font-size="18" fill="${C.text2}">${Math.round(v).toLocaleString()}</text>`
    }
    const c = change.value(r)
    s += `<text x="${W - 40}" y="${y0 + bar + gap / 2 + 9}" font-size="25" font-weight="650" text-anchor="end" fill="${c.good ? C.good : c.neutral ? C.text2 : C.bad}">${c.text}</text>`
  })
  return `${s}\n</svg>`
}

const subtitle = 'brainchop-test · WebGPU · 256³ volume · AMD Radeon 8060S, Chrome · mean of runs 2–4'
const time = chart({
  title: 'Inference time: hand-written kernels are up to 2.1× faster',
  subtitle, unit: 'ms', max: 2200, ticks: [0, 500, 1000, 1500, 2000],
  hw: (r) => r.inf_hw, tg: (r) => r.inf_tg,
  change: {
    heading: 'speedup',
    value: (r) => {
      const k = r.inf_tg / r.inf_hw
      return Math.abs(k - 1) < 0.05 ? { text: 'no change', neutral: true } : { text: `${k.toFixed(2)}×`, good: k > 1 }
    },
  },
})
const memory = chart({
  title: 'GPU memory: hand-written kernels use up to 36% less',
  subtitle, unit: 'MiB', max: 2900, ticks: [0, 500, 1000, 1500, 2000, 2500],
  hw: (r) => r.mem_hw, tg: (r) => r.mem_tg,
  change: {
    heading: 'change',
    value: (r) => {
      const p = (r.mem_hw / r.mem_tg - 1) * 100
      return { text: `${p > 0 ? '+' : '−'}${Math.abs(p).toFixed(0)}%`, good: p < 0 }
    },
  },
})
const total = chart({
  title: 'End-to-end run time (conform → overlay shown)',
  subtitle, unit: 'ms', max: 3500, ticks: [0, 1000, 2000, 3000],
  hw: (r) => r.tot_hw, tg: (r) => r.tot_tg,
  change: {
    heading: 'speedup',
    value: (r) => {
      const k = r.tot_tg / r.tot_hw
      return { text: `${k.toFixed(2)}×`, good: k > 1 }
    },
  },
})

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: 2 })
for (const [name, svg] of Object.entries({ 'inference-time': time, 'gpu-memory': memory, 'total-time': total })) {
  writeFileSync(`${here}${name}.svg`, svg)
  await page.setContent(`<body style="margin:0">${svg}</body>`)
  await page.locator('svg').screenshot({ path: `${here}${name}.png` })
}
await browser.close()

const csv = ['model,inference_ms_handwritten,inference_ms_tinygrad,speedup,gpu_mib_handwritten,gpu_mib_tinygrad,memory_change_pct,total_ms_handwritten,total_ms_tinygrad',
  ...rows.map((r) => [JSON.stringify(r.label), r.inf_hw.toFixed(1), r.inf_tg.toFixed(1), (r.inf_tg / r.inf_hw).toFixed(2),
    r.mem_hw.toFixed(0), r.mem_tg.toFixed(0), ((r.mem_hw / r.mem_tg - 1) * 100).toFixed(1), r.tot_hw.toFixed(0), r.tot_tg.toFixed(0)].join(','))]
writeFileSync(`${here}summary.csv`, `${csv.join('\n')}\n`)
