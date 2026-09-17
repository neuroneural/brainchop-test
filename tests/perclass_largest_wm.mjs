import { processSegmentationVolume } from '../tensor-utils.js';

// 40^3 phantom, ONE connected brain blob so the binary largest-blob step keeps
// everything. Each WM class has a main body plus a SMALL stray island of the
// same class, separated from its main body by a layer of cortex. Only the
// PER-CLASS largest-component filter can remove those strays.
const D = 40, N = D * D * D;
const idx = (x, y, z) => (z * D + y) * D + x;
const box = (v, x0, x1, y0, y1, z0, z1, val) => {
  for (let z = z0; z <= z1; z++) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) v[idx(x, y, z)] = val;
};

function phantom() {
  const v = new Int32Array(N);
  box(v, 4, 20, 4, 20, 4, 20, 2);     // cerebral cortex
  box(v, 7, 18, 7, 18, 7, 18, 1);     // cerebral WM, main
  box(v, 9, 11, 5, 5, 9, 11, 1);      // cerebral WM, STRAY (cortex at y=6 separates it)
  box(v, 21, 34, 4, 20, 4, 20, 6);    // cerebellum cortex, face-adjacent to cerebral cortex
  box(v, 24, 31, 7, 17, 7, 17, 5);    // cerebellum WM, main
  box(v, 26, 28, 5, 5, 10, 12, 5);    // cerebellum WM, STRAY (cortex at y=6 separates it)
  return v;
}

const count = (a, c) => { let n = 0; for (const x of a) if (x === c) n++; return n; };
const STRAY1 = 3 * 3, STRAY5 = 3 * 3;

async function run(id) {
  const data = phantom();
  const vol = { shape: [D, D, D], data: async () => data };
  return processSegmentationVolume(vol, null, { id, type: 'Atlas' }, { isPostProcessEnable: true });
}

const before = phantom();
const b1 = count(before, 1), b5 = count(before, 5);
console.log(`before      cerebral-WM(1)=${b1}  cerebellum-WM(5)=${b5}  (each includes a ${STRAY1}-voxel stray)`);
for (const id of [3, 8, 21, 4]) {
  const out = await run(id);
  const a1 = count(out, 1), a5 = count(out, 5);
  const ok = a1 === b1 - STRAY1 && a5 === b5 - STRAY5;
  console.log(`id ${String(id).padStart(2)}  after cerebral-WM(1)=${a1}  cerebellum-WM(5)=${a5}   ${ok ? 'strays REMOVED (per-class largest kept)' : 'strays SURVIVED (no per-class filter)'}`);
}

let fail = 0;
for (const id of [3, 8, 21]) {
  const out = await run(id);
  if (count(out, 1) !== b1 - STRAY1 || count(out, 5) !== b5 - STRAY5) {
    console.error(`FAIL  model id ${id} is missing from the per-class branch in tensor-utils.js`);
    fail++;
  }
}
console.log(fail ? 'FAILED' : 'ALL PASS');
process.exit(fail ? 1 : 0);
