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
import { processSegmentationVolume } from '../tensor-utils.js'

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

// Regression test for 104-class binary main-brain gate on resection cavities
// (processSegmentationVolume for models 5, 14, 60).
console.log('\n--- 104-class resection-cavity island gate (models 5 / 14 / 60) ---')
const RX = 24, RY = 14, RZ = 8
const RDIM = [RX, RY, RZ]
const rat = (x, y, z) => z * RX * RY + y * RX + x
const CTX_MT = 14 // ctx-lh-middletemporal
const CTX_FUS = 6 // ctx-lh-fusiform
const CTX_TP = 32 // ctx-lh-temporalpole

function buildResectionVolume(includeStumpRemnant) {
  const v = new Uint8Array(RX * RY * RZ)
  // Main brain core: WM (x=1..13, y=6..12, z=1..6) + cortical ribbon (y=4..5, z=1..6)
  for (let z = 1; z <= 6; z++) {
    for (let y = 6; y <= 12; y++) {
      for (let x = 1; x <= 13; x++) v[rat(x, y, z)] = WM
    }
    for (let y = 4; y <= 5; y++) {
      for (let x = 2; x <= 8; x++) v[rat(x, y, z)] = CTX_MT
      for (let x = 9; x <= 10; x++) v[rat(x, y, z)] = CTX_FUS
      for (let x = 11; x <= 12; x++) v[rat(x, y, z)] = CTX_MT // attached fragment on main brain -> relabels to CTX_FUS
    }
  }
  // Optional 8-voxel temporalpole remnant attached to the main brain stump
  if (includeStumpRemnant) {
    for (let z = 2; z <= 5; z++) {
      for (let y = 4; y <= 5; y++) v[rat(1, y, z)] = CTX_TP
    }
  }
  // Empty resection cavity across x=14..16; disconnected 40-voxel island at x=17..21
  for (let z = 2; z <= 5; z++) {
    for (let y = 4; y <= 5; y++) {
      for (let x = 17; x <= 19; x++) v[rat(x, y, z)] = CTX_TP // 24 voxels (> 8-voxel stump remnant)
      for (let x = 20; x <= 21; x++) v[rat(x, y, z)] = CTX_MT // 16 voxels touching cavity CTX_TP
    }
  }
  return v
}

const CAVITY_TP = rat(18, 4, 3)
const CAVITY_MT = rat(20, 4, 3)
const STUMP_TP = rat(1, 4, 3)
const ATTACHED_MT = rat(11, 4, 3)
const MAIN_MT = rat(4, 4, 3)
const MAIN_WM = rat(6, 8, 3)

for (const id of [5, 14, 60]) {
  const caseA = await processSegmentationVolume(
    buildResectionVolume(false),
    null,
    { id, type: 'Atlas' },
    { isPostProcessEnable: true },
    null,
    RDIM
  )
  check(`model ${id} Case A: cavity CTX_TP dropped to 0`, caseA[CAVITY_TP], 0)
  check(`model ${id} Case A: cavity CTX_MT dropped to 0`, caseA[CAVITY_MT], 0)
  check(`model ${id} Case A: attached cortical fragment relabels to CTX_FUS`, caseA[ATTACHED_MT], CTX_FUS)
  check(`model ${id} Case A: main CTX_MT untouched`, caseA[MAIN_MT], CTX_MT)
  check(`model ${id} Case A: main WM untouched`, caseA[MAIN_WM], WM)

  const caseB = await processSegmentationVolume(
    buildResectionVolume(true),
    null,
    { id, type: 'Atlas' },
    { isPostProcessEnable: true },
    null,
    RDIM
  )
  check(`model ${id} Case B: larger cavity CTX_TP island dropped to 0`, caseB[CAVITY_TP], 0)
  check(`model ${id} Case B: cavity CTX_MT dropped to 0`, caseB[CAVITY_MT], 0)
  check(`model ${id} Case B: smaller attached stump CTX_TP survives`, caseB[STUMP_TP], CTX_TP)
  check(`model ${id} Case B: attached cortical fragment relabels to CTX_FUS`, caseB[ATTACHED_MT], CTX_FUS)
}

console.log(failures === 0 ? '\nALL PASS' : `\n${failures} FAILURE(S)`)
process.exit(failures === 0 ? 0 : 1)
