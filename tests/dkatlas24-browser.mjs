// Real Chrome comparison of both 24-channel / 104-class weight sets.
// node tests/dkatlas24-browser.mjs [--model=infant|lesion] [--variant=original|gamma0.7|gamma1.4|flip] [--reverse] [--no-repeat]
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
const argument = (name, fallback) => process.argv.find(arg => arg.startsWith(`--${name}=`))?.split('=')[1] || fallback;
const config = { model: argument('model', 'both'), variant: argument('variant', 'original'),
  reverse: process.argv.includes('--reverse'), repeat: !process.argv.includes('--no-repeat') };
const pairedKernels = process.argv.includes('--paired-kernels');
const referenceSource = execFileSync('git', ['show', '18206847562c8c326049c22da93bda12555725e7:webgpu_runners/dkatlas24_synth_runner.js'],
  { encoding: 'utf8', cwd: new URL('..', import.meta.url) });
let pairedSource;
if (pairedKernels) {
  // Diagnostic only: time old/new convolutions consecutively on the same input
  // and output buffers. The accelerated pass runs last, preserving its result.
  pairedSource = readFileSync(new URL('../webgpu_runners/dkatlas24_synth_runner.js', import.meta.url), 'utf8');
  const kernelList = /const kernels = \[([^\]]+)\];/;
  const oldNames = referenceSource.match(kernelList)[1].split(', ');
  const oldShader = referenceSource.match(new RegExp('const ' + oldNames[8] + ' = `([\\s\\S]*?)`;'))[1];
  const extraIndex = pairedSource.match(kernelList)[1].split(', ').length;
  pairedSource = pairedSource.replace('const setupNet =', 'const paired_baseline_conv = `' + oldShader + '`;\nconst setupNet =');
  pairedSource = pairedSource.replace(kernelList, (_, names) => `layouts.push(layouts[8]);\n    const kernels = [${names}, paired_baseline_conv];`);
  for (const pass of [8, 88]) {
    const pattern = new RegExp('addComputePass\\(device, commandEncoder, pipelines\\[' + pass + '\\].*');
    const oldCall = referenceSource.match(pattern)[0]
      .replace(`pipelines[${pass}]`, `pipelines[${extraIndex}]`).replace(`layouts[${pass}]`, `layouts[${extraIndex}]`);
    pairedSource = pairedSource.replace(pattern, call => oldCall + '\n        ' + call);
  }
}
const server = await createServer({ configFile: false, root: new URL('..', import.meta.url).pathname,
  plugins: [{ name: 'dkatlas-reference-runner', enforce: 'pre',
    resolveId(id) {
      if (id === '/__dkatlas-reference.js') return id;
      if (pairedKernels && id.endsWith('/webgpu_runners/dkatlas24_synth_runner.js')) return '\0dkatlas-paired';
    },
    load(id) {
      if (id === '/__dkatlas-reference.js') return referenceSource;
      if (id === '\0dkatlas-paired') return pairedSource;
    },
  }], server: { host: '127.0.0.1', port: 0, hmr: false } });
await server.listen();
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('[browser]', msg.text()));
  page.on('pageerror', error => console.error(error));
  await page.route('**/__dkatlas', route => route.fulfill({ contentType: 'text/html',
    body: '<!doctype html><title>104-class runner comparison</title><script type="module">import { benchmark } from "/tests/fixtures/dkatlas24-browser-page.js"; window.benchmark = benchmark;</script>' }));
  await page.goto(`${server.resolvedUrls.local[0]}__dkatlas`);
  await page.waitForFunction(() => typeof window.benchmark === 'function');
  const result = await page.evaluate(config => window.benchmark(config), config);
  result.pairedKernels = pairedKernels;
  console.log(JSON.stringify(result, null, 2));
  if (pairedKernels) {
    for (const comparison of Object.values(result.comparisons)) {
      if (!comparison.results.current.passMs?.every(passes => passes?.length === 125)) {
        throw new Error('Paired-kernel profiling requires timestamp queries and 125 instrumented passes');
      }
    }
  }
  if (!result.byteExact) process.exitCode = 1;
} finally {
  await browser?.close();
  await server.close();
}
