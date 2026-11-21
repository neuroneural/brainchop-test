// reslice-volume.js
// Pure volume reslicing from conformed space (typically 256³, 1 mm) back onto
// the original native input grid. Zero DOM / NiiVue dependency so it runs
// identically inside postprocess-worker.js and in Node unit tests.

import { mat4 } from "gl-matrix";

const TYPED_ARRAY_CTORS = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
};

/**
 * Reslice a conformed segmentation, intensity volume, or probability map onto
 * a target native grid.
 *
 * - Discrete label map (`isLabel === true`): adaptive center-anchored odd-count
 *   majority vote per destination axis (1 tap at exact center for step length
 *   `L <= 1.5001` conformed voxels; symmetric 3, 5, or 7 taps `{0, ±1/n, ...}`
 *   for `L <= 3.5001`, `L <= 5.5001`, or `L > 5.5001`, with `deltas[0] = [0,0,0]`
 *   so equal-vote ties always resolve to the voxel center), written as Int16
 *   tagged NIFTI_INTENT_LABEL (1002), optionally remapped via `labelLut`.
 * - Probability map (`isProbability === true`): trilinear interpolation stored
 *   as Uint8 (0..255) with `scl_slope = 1/255`.
 * - Intensity output (e.g. MindGrab skull-stripped brain): nearest-neighbor,
 *   preserving the target native TypedArray kind (`dstTypedArrayKind`).
 *
 * @param {object} params
 * @param {ArrayBufferView} params.srcImg
 * @param {number[]} params.srcDims        [snx, sny, snz]
 * @param {number[][]} params.srcAffine    4×4 row-major storage-voxel -> mm
 * @param {number[]} params.dstDims        [nx, ny, nz]
 * @param {number[][]} params.dstAffine    4×4 row-major storage-voxel -> mm
 * @param {boolean} params.isLabel
 * @param {boolean} [params.isProbability=false]
 * @param {string} [params.dstTypedArrayKind='Uint8Array']
 * @param {Uint16Array|Int16Array|Int32Array|number[]|null} [params.labelLut=null]
 */
export function resliceVolumeData({
  srcImg,
  srcDims,
  srcAffine,
  dstDims,
  dstAffine,
  isLabel,
  isProbability = false,
  dstTypedArrayKind = "Uint8Array",
  labelLut = null,
}) {
  const [nx, ny, nz] = dstDims;
  const [snx, sny, snz] = srcDims;
  const A = dstAffine;

  const applyAffine = (a, v) => [
    a[0][0] * v[0] + a[0][1] * v[1] + a[0][2] * v[2] + a[0][3],
    a[1][0] * v[0] + a[1][1] * v[1] + a[1][2] * v[2] + a[1][3],
    a[2][0] * v[0] + a[2][1] * v[1] + a[2][2] * v[2] + a[2][3],
  ];

  // mm -> conformed storage voxel via inverting the overlay's own storage-voxel -> mm affine.
  const segInv = mat4.create();
  if (
    !mat4.invert(
      segInv,
      mat4.fromValues(
        ...srcAffine[0],
        ...srcAffine[1],
        ...srcAffine[2],
        ...srcAffine[3]
      )
    )
  ) {
    throw new Error("Segmentation affine is not invertible");
  }

  // gl-matrix is column-major, and fromValues consumed the rows in order, so
  // segInv is the inverse's transpose — read it back the same way.
  const applyInv = (m, v) => [
    m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3],
    m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7],
    m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11],
  ];

  // native storage voxel -> conformed storage voxel (fractional)
  const f = (v) => applyInv(segInv, applyAffine(A, v));
  const o = f([0, 0, 0]);
  const ex = f([1, 0, 0]).map((x, i) => x - o[i]);
  const ey = f([0, 1, 0]).map((x, i) => x - o[i]);
  const ez = f([0, 0, 1]).map((x, i) => x - o[i]);

  const nvox = nx * ny * nz;
  const snxy = snx * sny;
  const sample = (x, y, z) =>
    x >= 0 && x < snx && y >= 0 && y < sny && z >= 0 && z < snz
      ? srcImg[x + y * snx + z * snxy]
      : 0;

  if (isLabel) {
    // Adaptive center-anchored odd-count sub-voxel offsets per destination axis
    // (bit-exact with brainchopC conform.c):
    //   L <= 1.5001 -> 1 tap  [0]
    //   L <= 3.5001 -> 3 taps [0, -1/3, +1/3]
    //   L <= 5.5001 -> 5 taps [0, -1/5, +1/5, -2/5, +2/5]
    //   L >  5.5001 -> 7 taps [0, -1/7, +1/7, -2/7, +2/7, -3/7, +3/7]
    const axisOffsets = (e) => {
      const len = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
      const n = len <= 1.5001 ? 1 : len <= 3.5001 ? 3 : len <= 5.5001 ? 5 : 7;
      const offs = [0.0];
      const half = (n - 1) >> 1;
      for (let m = 1; m <= half; m++) {
        offs.push(-m / n, m / n);
      }
      return offs;
    };

    const ox = axisOffsets(ex);
    const oy = axisOffsets(ey);
    const oz = axisOffsets(ez);
    const deltas = [];
    for (const dx of ox) {
      for (const dy of oy) {
        for (const dz of oz) {
          deltas.push([
            dx * ex[0] + dy * ey[0] + dz * ez[0],
            dx * ex[1] + dy * ey[1] + dz * ez[1],
            dx * ex[2] + dy * ey[2] + dz * ez[2],
          ]);
        }
      }
    }

    const out = new Int16Array(nvox);
    const lutLen = labelLut ? labelLut.length : 0;
    let maxLabel = 0;
    const nDeltas = deltas.length;
    let idx = 0;

    if (nDeltas === 1) {
      for (let k = 0; k < nz; k++) {
        for (let j = 0; j < ny; j++) {
          let bx = o[0] + j * ey[0] + k * ez[0];
          let by = o[1] + j * ey[1] + k * ez[1];
          let bz = o[2] + j * ey[2] + k * ez[2];
          for (let i = 0; i < nx; i++) {
            let best = sample(
              Math.floor(bx + 0.5),
              Math.floor(by + 0.5),
              Math.floor(bz + 0.5)
            );
            if (labelLut && best >= 0 && best < lutLen) best = labelLut[best];
            if (best > maxLabel) maxLabel = best;
            out[idx++] = best;
            bx += ex[0];
            by += ex[1];
            bz += ex[2];
          }
        }
      }
    } else {
      const tv = new Int32Array(nDeltas);
      const tc = new Int32Array(nDeltas);
      for (let k = 0; k < nz; k++) {
        for (let j = 0; j < ny; j++) {
          let bx = o[0] + j * ey[0] + k * ez[0];
          let by = o[1] + j * ey[1] + k * ez[1];
          let bz = o[2] + j * ey[2] + k * ez[2];
          for (let i = 0; i < nx; i++) {
            let nt = 0;
            for (let s = 0; s < nDeltas; s++) {
              const d = deltas[s];
              const lbl = sample(
                Math.floor(bx + d[0] + 0.5),
                Math.floor(by + d[1] + 0.5),
                Math.floor(bz + d[2] + 0.5)
              );
              let t = -1;
              for (let q = 0; q < nt; q++) {
                if (tv[q] === lbl) {
                  t = q;
                  break;
                }
              }
              if (t < 0) {
                tv[nt] = lbl;
                tc[nt] = 1;
                nt++;
              } else {
                tc[t]++;
              }
            }
            let best = tv[0];
            let bc = tc[0];
            for (let q = 1; q < nt; q++) {
              if (tc[q] > bc) {
                bc = tc[q];
                best = tv[q];
              }
            }
            if (labelLut && best >= 0 && best < lutLen) best = labelLut[best];
            if (best > maxLabel) maxLabel = best;
            out[idx++] = best;
            bx += ex[0];
            by += ex[1];
            bz += ex[2];
          }
        }
      }
    }

    return {
      img: out,
      hdrPatch: {
        datatypeCode: 4, // DT_INT16
        numBitsPerVoxel: 16,
        scl_slope: 1,
        scl_inter: 0,
        cal_min: 0,
        cal_max: maxLabel,
        intent_code: 1002, // NIFTI_INTENT_LABEL
      },
    };
  }

  // Intensity output (skull-stripped brain): plain nearest-neighbor keeping the
  // native datatype, NOT tagged as LABEL.
  // Probabilities (0..1 float): trilinear, uint8 0..255 with scl_slope = 1/255.
  const Ctor = TYPED_ARRAY_CTORS[dstTypedArrayKind] || Uint8Array;
  const scale = isProbability ? 255 : 1;
  const round = isProbability ? 0.5 : 0;
  const out = isProbability ? new Uint8Array(nvox) : new Ctor(nvox);

  const trilinear = (x, y, z) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const z0 = Math.floor(z);
    const fx = x - x0;
    const fy = y - y0;
    const fz = z - z0;
    const v000 = sample(x0, y0, z0);
    const v100 = sample(x0 + 1, y0, z0);
    const v010 = sample(x0, y0 + 1, z0);
    const v110 = sample(x0 + 1, y0 + 1, z0);
    const v001 = sample(x0, y0, z0 + 1);
    const v101 = sample(x0 + 1, y0, z0 + 1);
    const v011 = sample(x0, y0 + 1, z0 + 1);
    const v111 = sample(x0 + 1, y0 + 1, z0 + 1);
    const y0z0 = v000 + fx * (v100 - v000);
    const y1z0 = v010 + fx * (v110 - v010);
    const y0z1 = v001 + fx * (v101 - v001);
    const y1z1 = v011 + fx * (v111 - v011);
    const z0v = y0z0 + fy * (y1z0 - y0z0);
    const z1v = y0z1 + fy * (y1z1 - y0z1);
    return z0v + fz * (z1v - z0v);
  };

  const at = isProbability
    ? trilinear
    : (x, y, z) => sample(Math.round(x), Math.round(y), Math.round(z));

  let idx = 0;
  for (let k = 0; k < nz; k++) {
    for (let j = 0; j < ny; j++) {
      let bx = o[0] + j * ey[0] + k * ez[0];
      let by = o[1] + j * ey[1] + k * ez[1];
      let bz = o[2] + j * ey[2] + k * ez[2];
      for (let i = 0; i < nx; i++) {
        out[idx++] = at(bx, by, bz) * scale + round;
        bx += ex[0];
        by += ex[1];
        bz += ex[2];
      }
    }
  }

  const hdrPatch = isProbability
    ? {
        datatypeCode: 2,
        numBitsPerVoxel: 8,
        cal_min: 0,
        cal_max: 1,
        scl_slope: 1 / scale,
        scl_inter: 0,
      }
    : {
        scl_slope: 1,
        scl_inter: 0,
      };

  return { img: out, hdrPatch };
}
