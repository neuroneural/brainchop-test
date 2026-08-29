/**
 * Regression test for the class-family gate on the suppressed-component
 * neighbour vote (bwlabels.js neighbor_winners / finalize_volume).
 *
 * Run: node tests/cortical_relabel.mjs
 *
 * Synthetic phantom, laid out in y (B axis) as tissue layers:
 *   y 0..3   background / CSF (pial side)   -> class 0, never counted as a voter
 *   y 4..5   cortical ribbon, 2 voxels thick
 *   y 6..11  cerebral white matter          -> class 85
 *
 * The ribbon holds one large ctx-lh-superiorfrontal (27) component, a thin
 * ctx-lh-postcentral (21) divider, and a detached 27 fragment on the far side of
 * that divider. The fragment's contact budget is deliberately WM-dominated
 * (48 WM faces vs 16 cortical faces), which is exactly the real-world geometry:
 * a ribbon fragment sits on white matter across its whole inner surface and only
 * meets its neighbouring parcel along a thin tangential rim.
 */
import { BWLabeler } from '../bwlabels.js'

const NX = 20, NY = 12, NZ = 8
const DIM = [NX, NY, NZ]
const CTX_A = 27 // ctx-lh-superiorfrontal
const CTX_B = 21 // ctx-lh-postcentral
const WM = 85 // Left-Cerebral-White-Matter
const at = (x, y, z) => z * NX * NY + y * NX + x

const DK104_FAMILY_OF = (c) => (c >= 1 && c <= 34 ? 1 : c >= 35 && c <= 68 ? 2 : 0)

function buildVolume() {
  const v = new Uint32Array(NX * NY * NZ)
  for (let z = 0; z < NZ; z++) {
    // white matter slab
    for (let y = 6; y < 12; y++) for (let x = 1; x < 16; x++) v[at(x, y, z)] = WM
    // cortical ribbon
    for (let y = 4; y < 6; y++) {
      for (let x = 1; x < 9; x++) v[at(x, y, z)] = CTX_A // main component (128 vox)
      v[at(9, y, z)] = CTX_B // divider (16 vox), sole component of its class
      for (let x = 10; x < 16; x++) v[at(x, y, z)] = CTX_A // fragment (96 vox)
    }
  }
  // A genuine speck of cortex buried deep inside white matter: every neighbour
  // is WM, so the family pass finds no candidate and must fall back.
  v[at(4, 9, 4)] = CTX_A
  return v
}

function run(familyOf) {
  const bw = new BWLabeler()
  const vol = buildVolume()
  const [cl, ls] = bw.bwlabel(vol, DIM, 6, false, false)
  const [, out] = bw.largest_original_cluster_labels(vol, cl, ls, DIM, true, familyOf)
  return out
}

let failures = 0
const check = (name, got, want) => {
  const ok = got === want
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got}, want ${want}`)
}

const FRAG = at(12, 4, 3) // inside the detached ribbon fragment
const SPECK = at(4, 9, 4) // the buried speck
const MAIN = at(4, 4, 3) // surviving main component
const WMV = at(4, 8, 3) // plain white matter

console.log('--- familyOf = DK104 (models 5 / 14 / 15) ---')
const withGate = run(DK104_FAMILY_OF)
check('detached cortical fragment -> adjacent cortical parcel', withGate[FRAG], CTX_B)
check('speck buried in WM falls back to WM', withGate[SPECK], WM)
check('main cortical component untouched', withGate[MAIN], CTX_A)
check('white matter untouched', withGate[WMV], WM)

console.log('\n--- familyOf = null (unchanged legacy path, all other models) ---')
const noGate = run(null)
check('detached fragment still takes the area-majority (WM)', noGate[FRAG], WM)
check('speck still WM', noGate[SPECK], WM)
check('main cortical component untouched', noGate[MAIN], CTX_A)

let drift = 0
for (let i = 0; i < noGate.length; i++) {
  if (noGate[i] !== withGate[i]) drift++
}
console.log(`\nvoxels changed by the gate: ${drift} (expected 96 = the fragment only)`)
if (drift !== 96) failures++

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURE(S)`)
process.exit(failures === 0 ? 0 : 1)
