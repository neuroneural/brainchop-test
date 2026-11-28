// reslice-volume.js
// Pure volume reslicing from conformed space (typically 256³, 1 mm) back onto
// the original native input grid. Zero DOM / NiiVue / gl-matrix dependency so
// it runs identically inside postprocess-worker.js and in Node unit tests.

function invertAffine4x4(m) {
  const flat = Array.isArray(m[0])
    ? [
        m[0][0], m[0][1], m[0][2], m[0][3],
        m[1][0], m[1][1], m[1][2], m[1][3],
        m[2][0], m[2][1], m[2][2], m[2][3],
        0, 0, 0, 1,
      ]
    : m;
  const a00 = flat[0], a01 = flat[1], a02 = flat[2], a03 = flat[3];
  const a10 = flat[4], a11 = flat[5], a12 = flat[6], a13 = flat[7];
  const a20 = flat[8], a21 = flat[9], a22 = flat[10], a23 = flat[11];

  const c00 = a11 * a22 - a12 * a21;
  const c01 = -(a10 * a22 - a12 * a20);
  const c02 = a10 * a21 - a11 * a20;
  const det = a00 * c00 + a01 * c01 + a02 * c02;
  if (!Number.isFinite(det) || Math.abs(det) < 1e-12) return null;
  const invDet = 1 / det;

  const r00 = c00 * invDet;
  const r01 = -(a01 * a22 - a02 * a21) * invDet;
  const r02 = (a01 * a12 - a02 * a11) * invDet;
  const r10 = c01 * invDet;
  const r11 = (a00 * a22 - a02 * a20) * invDet;
  const r12 = -(a00 * a12 - a02 * a10) * invDet;
  const r20 = c02 * invDet;
  const r21 = -(a00 * a21 - a01 * a20) * invDet;
  const r22 = (a00 * a11 - a01 * a10) * invDet;

  return [
    r00, r01, r02, -(r00 * a03 + r01 * a13 + r02 * a23),
    r10, r11, r12, -(r10 * a03 + r11 * a13 + r12 * a23),
    r20, r21, r22, -(r20 * a03 + r21 * a13 + r22 * a23),
    0, 0, 0, 1,
  ];
}

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
 * - Discrete label map (`isLabel === true`):
 *   - Thin/isotropic grids (all destination axes `L <= 1.5001` conformed
 *     voxels): streaming 2×2×2 fixed-point (`Q = 16384 = 2^14`, exact integer
 *     weights summing to `2^42`) trilinear one-hot label voting with
 *     nearest-neighbor tie-breaking and foreground bounding-box row clipping.
 *     Zero extra volume memory, bit-exact identity on cardinal integer-aligned
 *     1 mm grids, and eliminates oblique/sub-mm Moiré voxel teeth while
 *     matching `brainchop-core/src/conform.c` bit-for-bit.
 *   - Thick-slice grids (any axis `L > 1.5001`): adaptive center-outward
 *     midpoint pair majority vote per destination axis (symmetric `n = 4, 6,
 *     or 8` midpoint taps `±(m + 0.5) / n` ordered center-outward for
 *     `L <= 3.5001`, `L <= 5.5001`, or `L > 5.5001`, avoiding half-integer `.5`
 *     collisions at both integer `C` and odd-dimension half-integer `C + 0.5`
 *     centers while resolving equal-vote ties to the centermost probe), written
 *     as Int16 tagged NIFTI_INTENT_LABEL (1002), optionally remapped via
 *     `labelLut`.
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
  const A = Array.isArray(dstAffine[0])
    ? dstAffine
    : [
        dstAffine.slice(0, 4),
        dstAffine.slice(4, 8),
        dstAffine.slice(8, 12),
        [0, 0, 0, 1],
      ];

  const applyAffine = (a, v) => [
    a[0][0] * v[0] + a[0][1] * v[1] + a[0][2] * v[2] + a[0][3],
    a[1][0] * v[0] + a[1][1] * v[1] + a[1][2] * v[2] + a[1][3],
    a[2][0] * v[0] + a[2][1] * v[1] + a[2][2] * v[2] + a[2][3],
  ];

  // mm -> conformed storage voxel via inverting the overlay's own storage-voxel -> mm affine.
  const segInv = invertAffine4x4(srcAffine);
  if (!segInv) {
    throw new Error("Segmentation affine is not invertible");
  }

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
    const axisOffsets = (e) => {
      const len = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
      if (len <= 1.5001) return [0.0];
      const n = len <= 3.5001 ? 4 : len <= 5.5001 ? 6 : 8;
      const offs = new Array(n);
      for (let m = 0; m < n / 2; m++) {
        const d = (m + 0.5) / n;
        offs[2 * m] = -d;
        offs[2 * m + 1] = d;
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
      // Streaming 2x2x2 fixed-point (Q = 16384 = 2^14, exact integer weights
      // summing to 2^42 < 2^53) trilinear one-hot label voting with
      // nearest-neighbor tie-break and foreground bounding-box row clipping.
      // Bit-exact with brainchop-core/src/conform.c label_reslice_rows(np == 1).
      const bgOut = labelLut && lutLen > 0 ? labelLut[0] : 0;
      if (bgOut !== 0) {
        out.fill(bgOut);
        if (bgOut > maxLabel) maxLabel = bgOut;
      }

      let minX = snx, maxX = -1, minY = sny, maxY = -1, minZ = snz, maxZ = -1;
      if (
        (srcImg instanceof Uint8Array || srcImg instanceof Uint8ClampedArray) &&
        (srcImg.byteOffset & 3) === 0 &&
        (snx & 3) === 0
      ) {
        const u32 = new Uint32Array(srcImg.buffer, srcImg.byteOffset, (snx * sny * snz) >>> 2);
        const snx4 = snx >>> 2;
        const snxy4 = snx4 * sny;
        for (let z = 0; z < snz; z++) {
          let zHas = false;
          const zBase = z * snxy4;
          for (let y = 0; y < sny; y++) {
            let yHas = false;
            const yBase = zBase + y * snx4;
            for (let x4 = 0; x4 < snx4; x4++) {
              if (u32[yBase + x4] !== 0) {
                yHas = true;
                const x = x4 << 2;
                if (x < minX) minX = x;
                if (x + 3 > maxX) maxX = x + 3;
              }
            }
            if (yHas) {
              zHas = true;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
          if (zHas) {
            if (z < minZ) minZ = z;
            if (z > maxZ) maxZ = z;
          }
        }
        if (maxX >= snx) maxX = snx - 1;
      } else {
        for (let z = 0; z < snz; z++) {
          let zHas = false;
          const zBase = z * snxy;
          for (let y = 0; y < sny; y++) {
            let yHas = false;
            const yBase = zBase + y * snx;
            for (let x = 0; x < snx; x++) {
              if (srcImg[yBase + x] !== 0) {
                yHas = true;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
              }
            }
            if (yHas) {
              zHas = true;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
          if (zHas) {
            if (z < minZ) minZ = z;
            if (z > maxZ) maxZ = z;
          }
        }
      }

      if (maxX >= minX) {
        const Q = 16384;
        const loX = minX - 1, hiX = maxX + 1;
        const loY = minY - 1, hiY = maxY + 1;
        const loZ = minZ - 1, hiZ = maxZ + 1;
        const snx1 = snx - 1, sny1 = sny - 1, snz1 = snz - 1;
        const ex0 = ex[0], ex1 = ex[1], ex2 = ex[2];
        const ey0 = ey[0], ey1 = ey[1], ey2 = ey[2];
        const ez0 = ez[0], ez1 = ez[1], ez2 = ez[2];
        const o0 = o[0], o1 = o[1], o2 = o[2];
        const nxy = nx * ny;
        const ls = new Float64Array(8);
        const ws = new Float64Array(8);
        const cl = new Float64Array(8);
        const wt = new Float64Array(8);

        for (let k = 0; k < nz; k++) {
          const kBase = k * nxy;
          const oz0 = o0 + k * ez0;
          const oz1 = o1 + k * ez1;
          const oz2 = o2 + k * ez2;
          for (let j = 0; j < ny; j++) {
            const bx0 = oz0 + j * ey0;
            const by0 = oz1 + j * ey1;
            const bz0 = oz2 + j * ey2;
            let i0 = 0;
            let i1 = nx - 1;

            if (Math.abs(ex0) < 1e-12) {
              if (bx0 < loX || bx0 > hiX) continue;
            } else {
              let t0 = (loX - bx0) / ex0;
              let t1 = (hiX - bx0) / ex0;
              if (t0 > t1) { const tmp = t0; t0 = t1; t1 = tmp; }
              const a = Math.ceil(t0);
              const b = Math.floor(t1);
              if (a > i0) i0 = a;
              if (b < i1) i1 = b;
              if (i0 > i1) continue;
            }
            if (Math.abs(ex1) < 1e-12) {
              if (by0 < loY || by0 > hiY) continue;
            } else {
              let t0 = (loY - by0) / ex1;
              let t1 = (hiY - by0) / ex1;
              if (t0 > t1) { const tmp = t0; t0 = t1; t1 = tmp; }
              const a = Math.ceil(t0);
              const b = Math.floor(t1);
              if (a > i0) i0 = a;
              if (b < i1) i1 = b;
              if (i0 > i1) continue;
            }
            if (Math.abs(ex2) < 1e-12) {
              if (bz0 < loZ || bz0 > hiZ) continue;
            } else {
              let t0 = (loZ - bz0) / ex2;
              let t1 = (hiZ - bz0) / ex2;
              if (t0 > t1) { const tmp = t0; t0 = t1; t1 = tmp; }
              const a = Math.ceil(t0);
              const b = Math.floor(t1);
              if (a > i0) i0 = a;
              if (b < i1) i1 = b;
              if (i0 > i1) continue;
            }

            let rowIdx = kBase + j * nx + i0;
            for (let i = i0; i <= i1; i++, rowIdx++) {
              const bx = bx0 + i * ex0;
              const by = by0 + i * ex1;
              const bz = bz0 + i * ex2;
              const x0 = Math.floor(bx);
              const y0 = Math.floor(by);
              const z0 = Math.floor(bz);
              if (x0 < -1 || y0 < -1 || z0 < -1 || x0 >= snx || y0 >= sny || z0 >= snz) {
                continue;
              }
              let l0, l1, l2, l3, l4, l5, l6, l7;
              if (x0 >= 0 && x0 < snx1 && y0 >= 0 && y0 < sny1 && z0 >= 0 && z0 < snz1) {
                const p = x0 + y0 * snx + z0 * snxy;
                l0 = srcImg[p];
                l1 = srcImg[p + 1];
                l2 = srcImg[p + snx];
                l3 = srcImg[p + snx + 1];
                l4 = srcImg[p + snxy];
                l5 = srcImg[p + snxy + 1];
                l6 = srcImg[p + snxy + snx];
                l7 = srcImg[p + snxy + snx + 1];
              } else {
                l0 = sample(x0,     y0,     z0);
                l1 = sample(x0 + 1, y0,     z0);
                l2 = sample(x0,     y0 + 1, z0);
                l3 = sample(x0 + 1, y0 + 1, z0);
                l4 = sample(x0,     y0,     z0 + 1);
                l5 = sample(x0 + 1, y0,     z0 + 1);
                l6 = sample(x0,     y0 + 1, z0 + 1);
                l7 = sample(x0 + 1, y0 + 1, z0 + 1);
              }

              let best;
              if (
                l0 === l1 && l0 === l2 && l0 === l3 &&
                l0 === l4 && l0 === l5 && l0 === l6 && l0 === l7
              ) {
                best = l0;
              } else {
                const fx = bx - x0;
                const fy = by - y0;
                const fz = bz - z0;
                let qx = Math.floor(fx * Q + 0.5);
                let qy = Math.floor(fy * Q + 0.5);
                let qz = Math.floor(fz * Q + 0.5);
                if (qx < 0) qx = 0; else if (qx > Q) qx = Q;
                if (qy < 0) qy = 0; else if (qy > Q) qy = Q;
                if (qz < 0) qz = 0; else if (qz > Q) qz = Q;
                if ((qx | qy | qz) === 0) {
                  best = l0;
                } else {
                  const ix0 = Q - qx;
                  const iy0 = Q - qy;
                  const iz0 = Q - qz;
                  const w00 = ix0 * iy0;
                  const w10 = qx * iy0;
                  const w01 = ix0 * qy;
                  const w11 = qx * qy;
                  ls[0] = l0; ls[1] = l1; ls[2] = l2; ls[3] = l3;
                  ls[4] = l4; ls[5] = l5; ls[6] = l6; ls[7] = l7;
                  ws[0] = w00 * iz0; ws[1] = w10 * iz0; ws[2] = w01 * iz0; ws[3] = w11 * iz0;
                  ws[4] = w00 * qz;  ws[5] = w10 * qz;  ws[6] = w01 * qz;  ws[7] = w11 * qz;
                  const nn = (fx >= 0.5 ? 1 : 0) | (fy >= 0.5 ? 2 : 0) | (fz >= 0.5 ? 4 : 0);
                  cl[0] = ls[nn];
                  wt[0] = ws[nn];
                  let nc = 1;
                  for (let t = 0; t < 8; t++) {
                    if (t === nn) continue;
                    const w = ws[t];
                    if (w === 0) continue;
                    const c = ls[t];
                    let q = 0;
                    while (q < nc && cl[q] !== c) q++;
                    if (q === nc) {
                      cl[nc] = c;
                      wt[nc] = w;
                      nc++;
                    } else {
                      wt[q] += w;
                    }
                  }
                  let bi = 0;
                  let bw = wt[0];
                  for (let q = 1; q < nc; q++) {
                    if (wt[q] > bw) {
                      bw = wt[q];
                      bi = q;
                    }
                  }
                  best = cl[bi];
                }
              }

              if (labelLut && best >= 0 && best < lutLen) best = labelLut[best];
              if (best > maxLabel) maxLabel = best;
              out[rowIdx] = best;
            }
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
