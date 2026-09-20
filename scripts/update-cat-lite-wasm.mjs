// Run with an activated Emscripten environment and a brainchopC checkout:
// node scripts/update-cat-lite-wasm.mjs /path/to/brainchopC
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, chmodSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';

if (!process.argv[2]) throw new Error('Pass the brainchopC source checkout');
const source = resolve(process.argv[2]);
const destination = new URL('../public/wasm/', import.meta.url);
const staging = mkdtempSync(join(tmpdir(), 'cat-lite-build-'));
const sha256 = file => createHash('sha256').update(readFileSync(file)).digest('hex');
const sources = ['src/Makefile', 'src/cat_lite.c', 'src/cat_lite.h',
  'src/bc_threads.c', 'src/bc_threads.h', 'src/bwlabel.c', 'src/bwlabel.h',
  'src/model_specs.h', 'src/models/mindmap/model_def.h', 'src/pve_constants.h'];
try {
  execFileSync('make', ['-C', join(source, 'src'), 'wasm-cat-lite', `WASM_DIR=${staging}`], { stdio: 'inherit' });
  mkdirSync(destination, { recursive: true });
  const files = ['cat-lite.js', 'cat-lite.wasm'];
  for (const file of files) {
    copyFileSync(join(staging, file), new URL(file, destination));
    chmodSync(new URL(file, destination), 0o644);
  }
  copyFileSync(join(source, 'LICENSE'), new URL('CAT_LITE_LICENSE.txt', destination));
  const manifest = {
    repository: 'https://github.com/neuroneural/brainchopC',
    baseRevision: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim(),
    sourceModified: execFileSync('git', ['status', '--porcelain', '--', ...sources], { cwd: source, encoding: 'utf8' }).trim().length > 0,
    compiler: execFileSync('emcc', ['--version'], { encoding: 'utf8' }).trim(),
    target: 'make -C src wasm-cat-lite',
    sourceSha256: Object.fromEntries(sources.map(file => [file, sha256(join(source, file))])),
    artifactSha256: Object.fromEntries(files.map(file => [file, sha256(new URL(file, destination))])),
  };
  writeFileSync(new URL('cat-lite-build.json', destination), JSON.stringify(manifest, null, 2) + '\n');
} finally { rmSync(staging, { recursive: true, force: true }); }
