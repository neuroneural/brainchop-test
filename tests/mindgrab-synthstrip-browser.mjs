// Full multimodal synthStrip parity & GT Dice benchmark for MindGrab FP16 (id: 2) vs V4 8-bit (id: 28)
// Streams 256^3 scans + masks from MongoDB `synthStrip` on `mongoserver` via O(1) index queries.
// Usage:
//   node tests/mindgrab-synthstrip-browser.mjs [--per-collection 3 | --all] [--collections asl_epi,cim_ct]
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function parseArgs(argv) {
  let perCollection = 3;
  let collectionsFilter = null;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') perCollection = Infinity;
    else if (a === '--per-collection' && argv[i + 1]) perCollection = Math.max(1, Number(argv[++i]));
    else if (a === '--collections' && argv[i + 1]) collectionsFilter = new Set(argv[++i].split(',').map((s) => s.trim()).filter(Boolean));
  }
  return { perCollection, collectionsFilter };
}

function selectIds(ids, limit) {
  if (!Number.isFinite(limit) || limit >= ids.length) return ids;
  if (limit === 1) return [ids[0]];
  const out = [];
  const seen = new Set();
  for (let k = 0; k < limit; k++) {
    const idx = Math.round((k * (ids.length - 1)) / (limit - 1));
    const v = ids[idx];
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  return out;
}

const PY_WORKER = `
import sys, json, io, gzip, struct
import numpy as np
import torch
import lz4.frame
from pymongo import MongoClient

LZ4_MAGIC = b"\\x04\\x22\\x4d\\x18"
mc = MongoClient("mongodb://127.0.0.1:27017", serverSelectionTimeoutMS=10000)
db = mc["synthStrip"]

def load_u8(col, mid, kind):
    docs = list(db[f"{col}.bin"].find({"id": int(mid), "kind": kind}, {"chunk": 1, "chunk_id": 1}))
    if not docs:
        raise KeyError(f"Missing {col}.bin id={mid} kind={kind}")
    blob = b"".join(d["chunk"] for d in sorted(docs, key=lambda d: d["chunk_id"]))
    if blob[:4] == LZ4_MAGIC:
        blob = lz4.frame.decompress(blob)
    arr = torch.load(io.BytesIO(blob), weights_only=True).numpy()
    if arr.shape != (256, 256, 256):
        arr = arr.reshape((256, 256, 256))
    return np.ascontiguousarray(arr, dtype=np.uint8)

while True:
    line = sys.stdin.readline()
    if not line:
        break
    line = line.strip()
    if not line:
        continue
    req = json.loads(line)
    op = req.get("op")
    try:
        if op == "quit":
            break
        elif op == "manifest":
            cols = sorted(c[:-5] for c in db.list_collection_names() if c.endswith(".meta") and c != "log.meta")
            out = []
            for c in cols:
                # O(1) index distinct query -- NEVER count_documents({})!
                ids = sorted(int(x) for x in db[f"{c}.meta"].distinct("id"))
                out.append({"name": c, "ids": ids})
            sys.stdout.buffer.write(("JSON " + json.dumps({"collections": out}) + "\\n").encode("utf-8"))
            sys.stdout.buffer.flush()
        elif op == "scan":
            col, mid = req["col"], int(req["id"])
            img = load_u8(col, mid, "image")
            msk = load_u8(col, mid, "mask")
            gz = gzip.compress(img.tobytes() + msk.tobytes(), compresslevel=1)
            sys.stdout.buffer.write(f"BIN {len(gz)}\\n".encode("ascii"))
            sys.stdout.buffer.write(gz)
            sys.stdout.buffer.flush()
        else:
            sys.stdout.buffer.write(f"ERR Unknown op {op}\\n".encode("utf-8"))
            sys.stdout.buffer.flush()
    except Exception as exc:
        msg = str(exc).replace("\\n", " ")
        sys.stdout.buffer.write(f"ERR {msg}\\n".encode("utf-8"))
        sys.stdout.buffer.flush()
`;

class MongoSynthStripClient {
  constructor() {
    const pyB64 = Buffer.from(PY_WORKER, 'utf8').toString('base64');
    this.proc = spawn(
      'ssh',
      [
        '-o', 'BatchMode=yes',
        '-o', 'ServerAliveInterval=15',
        'mongoserver',
        `/trdapps/linux-x86_64/envs/plis_venv/torch/bin/python -u -c "import base64; exec(base64.b64decode('${pyB64}').decode())"`,
      ],
      { stdio: ['pipe', 'pipe', 'pipe'] }
    );
    this.rxBuf = Buffer.alloc(0);
    this.state = 'header';
    this.expectedLen = 0;
    this.queue = Promise.resolve();
    this.pending = null;
    this.proc.stderr.on('data', (d) => process.stderr.write(`[mongoserver-py] ${d}`));
    this.proc.stdout.on('data', (chunk) => this._onData(chunk));
    this.proc.on('exit', (code) => {
      if (this.pending) {
        const rej = this.pending.reject;
        this.pending = null;
        rej(new Error(`mongoserver python worker exited with code ${code}`));
      }
    });
  }

  _onData(chunk) {
    this.rxBuf = this.rxBuf.length ? Buffer.concat([this.rxBuf, chunk]) : chunk;
    while (this.pending) {
      if (this.state === 'header') {
        const nl = this.rxBuf.indexOf(0x0a);
        if (nl === -1) return;
        const line = this.rxBuf.subarray(0, nl).toString('utf8');
        this.rxBuf = this.rxBuf.subarray(nl + 1);
        if (line.startsWith('JSON ')) {
          const cur = this.pending;
          this.pending = null;
          cur.resolve(JSON.parse(line.slice(5)));
        } else if (line.startsWith('BIN ')) {
          this.expectedLen = Number(line.slice(4));
          this.state = 'binary';
        } else if (line.startsWith('ERR ')) {
          const cur = this.pending;
          this.pending = null;
          cur.reject(new Error(line.slice(4)));
        } else {
          const cur = this.pending;
          this.pending = null;
          cur.reject(new Error(`Unexpected worker header: ${line}`));
        }
      } else {
        if (this.rxBuf.length < this.expectedLen) return;
        const payload = Buffer.from(this.rxBuf.subarray(0, this.expectedLen));
        this.rxBuf = this.rxBuf.subarray(this.expectedLen);
        this.state = 'header';
        this.expectedLen = 0;
        const cur = this.pending;
        this.pending = null;
        cur.resolve(payload);
      }
    }
  }

  request(obj) {
    const next = this.queue.then(() => new Promise((resolve, reject) => {
      this.pending = { resolve, reject };
      this.proc.stdin.write(JSON.stringify(obj) + '\n');
    }));
    this.queue = next.catch(() => {});
    return next;
  }

  async close() {
    try { this.proc.stdin.write(JSON.stringify({ op: 'quit' }) + '\n'); } catch (_) {}
    try { this.proc.kill('SIGTERM'); } catch (_) {}
  }
}

const { perCollection, collectionsFilter } = parseArgs(process.argv.slice(2));
const mongo = new MongoSynthStripClient();
let server;
let browser;

try {
  const manifest = await mongo.request({ op: 'manifest' });
  const plan = manifest.collections
    .filter((c) => !collectionsFilter || collectionsFilter.has(c.name))
    .map((c) => ({ name: c.name, totalAvailable: c.ids.length, ids: selectIds(c.ids, perCollection) }))
    .filter((c) => c.ids.length > 0);
  const totalScans = plan.reduce((s, c) => s + c.ids.length, 0);
  console.log(`Prepared synthStrip benchmark plan: ${totalScans} scans across ${plan.length} collections.`);

  const synthStripPlugin = {
    name: 'synthstrip-mongo-proxy',
    configureServer(srv) {
      srv.middlewares.use('/__synthstrip/scan', async (req, res) => {
        try {
          const u = new URL(req.url, 'http://127.0.0.1');
          const col = u.searchParams.get('col');
          const id = Number(u.searchParams.get('id'));
          const gz = await mongo.request({ op: 'scan', col, id });
          res.writeHead(200, {
            'Content-Type': 'application/octet-stream',
            'Content-Encoding': 'gzip',
            'Content-Length': String(gz.length),
          });
          res.end(gz);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(String(err.message || err));
        }
      });
    },
  };

  server = await createServer({
    configFile: false,
    root: new URL('..', import.meta.url).pathname,
    plugins: [synthStripPlugin],
    server: { host: '127.0.0.1', port: 0, hmr: false },
  });
  await server.listen();

  browser = await chromium.launch({
    executablePath: process.env.BC_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
  });
  const page = await browser.newPage();
  page.on('console', (msg) => console.log('[browser]', msg.text()));
  page.on('pageerror', (err) => console.error('[pageerror]', err));

  await page.route('**/__synthstrip_bench', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><title>MindGrab synthStrip Parity Benchmark</title><script type="module">import { runSynthStripBenchmark } from "/tests/fixtures/mindgrab-synthstrip-browser-page.js"; window.runSynthStripBenchmark = runSynthStripBenchmark;</script>',
    })
  );
  await page.goto(`${server.resolvedUrls.local[0]}__synthstrip_bench`);
  await page.waitForFunction(() => typeof window.runSynthStripBenchmark === 'function');

  const result = await page.evaluate((p) => window.runSynthStripBenchmark({ plan: p }), plan);
  result.plan = plan;

  console.log('\n=== SYNTHSTRIP MULTIMODAL MINDGRAB BENCHMARK SUMMARY ===');
  console.log('Runners:', JSON.stringify(result.runners));
  console.log('Overall:', JSON.stringify(result.overall, null, 2));
  console.log('By collection:');
  for (const [col, st] of Object.entries(result.byCollection)) {
    console.log(
      `  ${col.padEnd(11)} n=${String(st.n).padStart(2)} | fp16=${String(st.fp16MsMean).padStart(7)}ms v4=${String(st.v4MsMean).padStart(6)}ms (${st.speedupMean}x) | ` +
      `parityCC=${st.parityCCDice.mean.toFixed(5)} (min ${st.parityCCDice.min.toFixed(5)}, fg ${st.parityCCFgAgreePctMean}%) | ` +
      `GT: fp16=${st.fp16CCGtDice.mean.toFixed(5)} v4=${st.v4CCGtDice.mean.toFixed(5)} (${st.deltaGtDiceMean >= 0 ? '+' : ''}${st.deltaGtDiceMean.toFixed(5)})`
    );
  }

  const outPath = process.env.BC_BENCH_OUT || fileURLToPath(new URL('../bench-results/mindgrab_v4_synthstrip_benchmark.json', import.meta.url));
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    JSON.stringify(result, null, 2)
  );

  if (result.runners.v4.maxBufMiB > 160.0) {
    throw new Error(`MindGrab V4 maxBufMiB ${result.runners.v4.maxBufMiB} > 160 MiB`);
  }
  if (result.overall.scanWeighted.parityCCDiceMean < 0.995) {
    throw new Error(`Overall V4_CC vs FP16_CC parity Dice ${result.overall.scanWeighted.parityCCDiceMean} < 0.995`);
  }
  for (const [col, st] of Object.entries(result.byCollection)) {
    if (st.parityCCDice.mean < 0.990) {
      throw new Error(`${col}: mean V4_CC vs FP16_CC parity Dice ${st.parityCCDice.mean} < 0.990`);
    }
  }
  if (result.overall.scanWeighted.deltaGtDiceMean < -0.001) {
    throw new Error(`Overall V4_CC GT Dice delta ${result.overall.scanWeighted.deltaGtDiceMean} < -0.001`);
  }
  console.log('\nSYNTHSTRIP MULTIMODAL PARITY & GT GATES PASSED!');
} finally {
  await browser?.close();
  await server?.close();
  await mongo.close();
}
