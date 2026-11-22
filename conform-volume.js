/**
 * Clinical-robust NIfTI volume conforming (256³ isotropic 1 mm LIA uint8).
 *
 * Keeps FreeSurfer mri_convert --conform's 0–99.9% upper clip for display
 * (preserving bright white matter and natural highlights) while optionally
 * emitting a paired 0–98% upper-clipped uint8 buffer (`inferenceFHigh = 0.98`)
 * in the same pass for model inference — matching `brainchopC/src/conform.c`
 * and training (`q_drop_nz = 0.02`) so bright scalp fat / coil flare (1–1.5%
 * at 4–8×) cannot crush brain contrast or blow up GroupNorm variance:
 *   1. Decode scalar input with scl_slope / scl_inter and replace NaN/Inf with 0.
 *   2. Floor rare negative ringing (< 2% negative voxels) to 0 so background air
 *      stays pure black instead of lifting to gray, and compute upper clips from
 *      a single 1000-bin histogram (f_high = 0.999 display, 0.98 inference).
 *   3. Reslice to 256³ isotropic 1 mm (FreeSurfer LIA by default, or RAS when
 *      toRAS is true), short-circuiting when already on the target grid.
 *   4. Round and clamp directly to uint8 [0..255] (saving 64 MiB peak RAM vs
 *      an intermediate Float32Array(256³)), or preserve float32 when asFloat32 is true.
 *
 * Pure JS (no Worker/DOM dependency) so both Web Workers and Node tests can run it.
 */

const CONFORM_DIM = 256;
const CONFORM_NVOX = CONFORM_DIM * CONFORM_DIM * CONFORM_DIM;

export const DISPLAY_CONFORM_FHIGH = 0.999;
export const INFERENCE_CONFORM_FHIGH = 0.98;

/**
 * Return true iff an NVImage-like volume is already on the conformed
 * 256³ isotropic 1 mm LIA uint8 grid with unscaled intensities.
 */
export function isVolumeConformed(vol) {
  if (!vol || !vol.dims || !(vol.img instanceof Uint8Array)) return false;
  if (
    vol.dims[1] !== CONFORM_DIM ||
    vol.dims[2] !== CONFORM_DIM ||
    vol.dims[3] !== CONFORM_DIM ||
    vol.img.length !== CONFORM_NVOX
  ) {
    return false;
  }
  const pixDims = vol.hdr?.pixDims;
  const is1mm = !pixDims || (
    Math.abs(Math.abs(pixDims[1]) - 1) < 1e-3 &&
    Math.abs(Math.abs(pixDims[2]) - 1) < 1e-3 &&
    Math.abs(Math.abs(pixDims[3]) - 1) < 1e-3
  );
  if (!is1mm) return false;
  const slope = vol.hdr?.scl_slope;
  const inter = vol.hdr?.scl_inter;
  const isUnscaled =
    (slope === undefined || slope === 0 || Math.abs(slope - 1) < 1e-6) &&
    (inter === undefined || Math.abs(inter) < 1e-6);
  if (!isUnscaled) return false;
  const perm = vol.permRAS;
  if (!perm || perm[0] !== -1 || perm[1] !== 3 || perm[2] !== -2) return false;
  return true;
}

/**
 * Identity-bound cache holding at most one 0–98% conformed uint8 inference
 * buffer paired to the active display base volume (`nv1.volumes[0]`).
 * Releases the buffer as soon as the base volume changes and falls back to
 * `volume.img` when the loaded volume is already conformed (zero overhead).
 */
export function createInferenceInputCache() {
  let entry = null; // { volume, img }
  return {
    set(volume, img) {
      entry = volume && img && img !== volume.img ? { volume, img } : null;
    },
    get(volume) {
      if (!volume) return null;
      if (entry && entry.volume === volume) return entry.img;
      return volume.img;
    },
    sync(currentVolume) {
      if (entry && entry.volume !== currentVolume) {
        entry = null;
      }
    },
    clear() {
      entry = null;
    },
    hasDistinctBuffer(volume) {
      return Boolean(entry && (!volume || entry.volume === volume));
    },
  };
}

function toTypedArray(img, datatypeCode) {
  if (!(img instanceof ArrayBuffer)) {
    return img;
  }
  switch (datatypeCode) {
    case 2:
      return new Uint8Array(img);
    case 4:
      return new Int16Array(img);
    case 8:
      return new Int32Array(img);
    case 16:
      return new Float32Array(img);
    case 64:
      return new Float64Array(img);
    case 256:
      return new Int8Array(img);
    case 512:
      return new Uint16Array(img);
    case 768:
      return new Uint32Array(img);
    case 1024:
      return new BigInt64Array(img);
    case 1280:
      return new BigUint64Array(img);
    default:
      return new Float32Array(img);
  }
}

function det3x3(m) {
  return (
    m[0] * (m[5] * m[10] - m[6] * m[9]) -
    m[1] * (m[4] * m[10] - m[6] * m[8]) +
    m[2] * (m[4] * m[9] - m[5] * m[8])
  );
}

function isValidAffine(m) {
  if (!m || m.length < 16) return false;
  for (let i = 0; i < 16; i++) {
    if (!Number.isFinite(m[i])) return false;
  }
  return Math.abs(det3x3(m)) >= 1e-6;
}

/**
 * Invert an affine 4x4 row-major matrix (bottom row [0, 0, 0, 1]).
 * Uses double-precision cofactor inversion of the upper-left 3x3 linear block.
 */
function invertAffine4x4(m) {
  const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
  const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
  const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];

  const c00 = a11 * a22 - a12 * a21;
  const c01 = -(a10 * a22 - a12 * a20);
  const c02 = a10 * a21 - a11 * a20;
  const det = a00 * c00 + a01 * c01 + a02 * c02;
  if (!Number.isFinite(det) || Math.abs(det) < 1e-12) {
    throw new Error('Cannot conform volume: singular affine transform.');
  }
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

  const t0 = -(r00 * a03 + r01 * a13 + r02 * a23);
  const t1 = -(r10 * a03 + r11 * a13 + r12 * a23);
  const t2 = -(r20 * a03 + r21 * a13 + r22 * a23);

  return [
    r00, r01, r02, t0,
    r10, r11, r12, t1,
    r20, r21, r22, t2,
    0, 0, 0, 1,
  ];
}

function mulAffine4x4(a, b) {
  const out = new Array(16);
  for (let r = 0; r < 3; r++) {
    const r4 = r * 4;
    const a0 = a[r4], a1 = a[r4 + 1], a2 = a[r4 + 2], a3 = a[r4 + 3];
    out[r4]     = a0 * b[0] + a1 * b[4] + a2 * b[8];
    out[r4 + 1] = a0 * b[1] + a1 * b[5] + a2 * b[9];
    out[r4 + 2] = a0 * b[2] + a1 * b[6] + a2 * b[10];
    out[r4 + 3] = a0 * b[3] + a1 * b[7] + a2 * b[11] + a3;
  }
  out[12] = 0; out[13] = 0; out[14] = 0; out[15] = 1;
  return out;
}

/**
 * Compute FreeSurfer-style conformed 256³ 1 mm output affine (LIA or RAS).
 * Matches brainchopC/src/conform.c conform_xform().
 */
export function computeConformAffine(nx, ny, nz, inAffine, toRAS = false) {
  const hx = nx * 0.5;
  const hy = ny * 0.5;
  const hz = nz * 0.5;
  const cx = inAffine[0] * hx + inAffine[1] * hy + inAffine[2] * hz + inAffine[3];
  const cy = inAffine[4] * hx + inAffine[5] * hy + inAffine[6] * hz + inAffine[7];
  const cz = inAffine[8] * hx + inAffine[9] * hy + inAffine[10] * hz + inAffine[11];

  const half = CONFORM_DIM * 0.5;
  if (toRAS) {
    return [
      1, 0, 0, cx - half,
      0, 1, 0, cy - half,
      0, 0, 1, cz - half,
      0, 0, 0, 1,
    ];
  }
  // FreeSurfer conformed LIA orientation: [-1,0,0; 0,0,1; 0,-1,0]
  return [
    -1, 0, 0, cx + half,
    0, 0, 1, cy - half,
    0, -1, 0, cz + half,
    0, 0, 0, 1,
  ];
}

function clampScaledF32(v, srcMin, scale) {
  const scaled = scale * (v - srcMin);
  return scaled <= 0 ? 0 : scaled >= 255 ? 255 : Math.fround(scaled);
}

function analyzeIntensityDistribution(vol) {
  const n = vol.length;
  if (n === 0) {
    return {
      n: 0,
      rawMin: 0,
      rawMax: 0,
      srcMin: 0,
      nz: 0,
      flooredNegative: false,
      binSize: 0,
      hist: null,
    };
  }

  let rawMin = Infinity;
  let rawMax = -Infinity;
  let nz = 0;
  let nltz = 0;
  for (let i = 0; i < n; i++) {
    let v = vol[i];
    if (!Number.isFinite(v)) {
      v = 0;
      vol[i] = 0;
    }
    if (v < rawMin) rawMin = v;
    if (v > rawMax) rawMax = v;
    if (v >= 1e-15 || v <= -1e-15) nz++;
    if (v < 0) nltz++;
  }

  let srcMin = rawMin;
  let flooredNegative = false;
  if (srcMin < 0 && (100 * nltz) / n < 2.0) {
    srcMin = 0;
    flooredNegative = true;
  }

  const binSize = Math.fround((rawMax - srcMin) / 1000);
  if (!(binSize > 0)) {
    return { n, rawMin, rawMax, srcMin, nz, flooredNegative, binSize: 0, hist: null };
  }

  const hist = new Uint32Array(1000);
  for (let i = 0; i < n; i++) {
    const raw = Math.fround((vol[i] - srcMin) / binSize);
    const bin = raw <= 0 ? 0 : raw >= 999 ? 999 : Math.trunc(raw);
    hist[bin]++;
  }

  return { n, rawMin, rawMax, srcMin, nz, flooredNegative, binSize, hist };
}

function resolveUpperClipScale(stats, fHigh = DISPLAY_CONFORM_FHIGH) {
  if (!stats.hist || !(stats.binSize > 0)) {
    return {
      srcMin: stats.srcMin,
      srcMax: stats.rawMax,
      scale: 1,
      flooredNegative: stats.flooredNegative,
      degenerate: true,
    };
  }

  const tailFrac = Math.max(0, Math.min(1, 1 - fHigh));
  const nth = stats.n - Math.floor(tailFrac * stats.nz);
  let cumulative = 0;
  let idx = 0;
  for (; idx < 999; idx++) {
    cumulative += stats.hist[idx];
    if (cumulative + stats.hist[idx + 1] >= nth) break;
  }

  const srcMax = Math.fround(idx * stats.binSize + stats.srcMin);
  const scale = stats.srcMin !== srcMax ? Math.fround(255 / (srcMax - stats.srcMin)) : 1;
  return {
    srcMin: stats.srcMin,
    srcMax,
    scale,
    flooredNegative: stats.flooredNegative,
    degenerate: false,
  };
}

function applyScaleInPlace(vol, info) {
  const n = vol.length;
  if (info.degenerate) {
    for (let i = 0; i < n; i++) {
      const v = vol[i];
      vol[i] = v <= 0 ? 0 : v >= 255 ? 255 : v;
    }
    return;
  }
  const { srcMin, scale } = info;
  for (let i = 0; i < n; i++) {
    const scaled = scale * (vol[i] - srcMin);
    vol[i] = scaled <= 0 ? 0 : scaled >= 255 ? 255 : scaled;
  }
}

/**
 * In-place intensity rescale:
 *   - Floors src_min to 0 when < 2% of voxels are negative (suppressing Gibbs/air ringing).
 *   - Clips the upper tail of non-zero voxels via a 1000-bin histogram (default f_high = 0.999,
 *     matching FreeSurfer mri_convert --conform so clean scans never saturate white matter;
 *     pass fHigh = 0.98 for brainchopC/niimath inference parity).
 *   - Linearly rescales and clamps into [0, 255] in Float32.
 *
 * @param {Float32Array} vol - Finite float32 voxel array modified in place.
 * @param {number} [fHigh=0.999] - Upper non-zero quantile clip in (0, 1].
 * @returns {{ srcMin: number, srcMax: number, scale: number, flooredNegative: boolean }}
 */
export function scaleIntensityConform(vol, fHigh = DISPLAY_CONFORM_FHIGH) {
  if (vol.length === 0) {
    return { srcMin: 0, srcMax: 0, scale: 1, flooredNegative: false };
  }
  const stats = analyzeIntensityDistribution(vol);
  const info = resolveUpperClipScale(stats, fHigh);
  applyScaleInPlace(vol, info);
  return {
    srcMin: info.srcMin,
    srcMax: info.srcMax,
    scale: info.scale,
    flooredNegative: info.flooredNegative,
  };
}

/**
 * Conform a 3D NIfTI volume to 256³ isotropic 1 mm LIA (or RAS) uint8.
 *
 * When `inferenceFHigh` is provided (with `asFloat32 = false`), computes both
 * the display volume (`fHigh`, default 0.999) and a coil-flare-safe inference
 * volume (`inferenceFHigh`, e.g. 0.98) from the same decoded volume and
 * histogram in a single spatial pass with zero extra Float32Array copies.
 * When both clips yield the exact same scale, `inferenceImg` is `null`
 * (signaling that `img` itself already matches `inferenceFHigh`).
 *
 * @param {object} params
 * @param {ArrayBuffer|ArrayLike<number>} params.img
 * @param {number} params.datatypeCode
 * @param {number[]} params.dims - NIfTI dims array [ndim, nx, ny, nz, ...]
 * @param {number[]} params.affine - 16-element row-major affine (or 4x4 nested array)
 * @param {number} [params.sclSlope=1]
 * @param {number} [params.sclInter=0]
 * @param {boolean} [params.toRAS=false]
 * @param {boolean} [params.isLinear=true]
 * @param {boolean} [params.asFloat32=false]
 * @param {number} [params.fHigh=0.999]
 * @param {number|null} [params.inferenceFHigh=null]
 */
export function conformVolumeData({
  img,
  datatypeCode,
  dims,
  affine,
  sclSlope = 1,
  sclInter = 0,
  toRAS = false,
  isLinear = true,
  asFloat32 = false,
  fHigh = DISPLAY_CONFORM_FHIGH,
  inferenceFHigh = null,
}) {
  const nx = dims[1] | 0;
  const ny = dims[2] | 0;
  const nz = dims[3] | 0;
  if (nx < 1 || ny < 1 || nz < 1) {
    throw new Error(`Invalid input volume dimensions: [${nx}, ${ny}, ${nz}]`);
  }

  const flatAffine = Array.isArray(affine[0]) ? affine.flat() : Array.from(affine);
  if (!isValidAffine(flatAffine)) {
    throw new Error('Cannot conform volume: invalid or singular affine matrix.');
  }

  const raw = toTypedArray(img, datatypeCode);
  const nvox = nx * ny * nz;
  if (!raw || raw.length < nvox) {
    throw new Error(`Input buffer length (${raw ? raw.length : 0}) is smaller than ${nx}x${ny}x${nz}`);
  }

  const slope = Number.isFinite(sclSlope) && sclSlope !== 0 ? sclSlope : 1;
  const inter = Number.isFinite(sclInter) ? sclInter : 0;
  const vol = new Float32Array(nvox);
  const isBigInt = raw instanceof BigInt64Array || raw instanceof BigUint64Array;
  let finiteCount = 0;

  if (isBigInt) {
    for (let i = 0; i < nvox; i++) {
      const v = Number(raw[i]) * slope + inter;
      if (Number.isFinite(v)) {
        vol[i] = v;
        finiteCount++;
      } else {
        vol[i] = 0;
      }
    }
  } else if (slope === 1 && inter === 0) {
    for (let i = 0; i < nvox; i++) {
      const v = raw[i];
      if (Number.isFinite(v)) {
        vol[i] = v;
        finiteCount++;
      } else {
        vol[i] = 0;
      }
    }
  } else {
    for (let i = 0; i < nvox; i++) {
      const v = raw[i] * slope + inter;
      if (Number.isFinite(v)) {
        vol[i] = v;
        finiteCount++;
      } else {
        vol[i] = 0;
      }
    }
  }

  if (finiteCount === 0) {
    throw new Error('Input volume contains no finite voxel values.');
  }

  // Analyze intensity histogram once; resolve display clip and optional inference clip.
  const stats = analyzeIntensityDistribution(vol);
  const displayInfo = resolveUpperClipScale(stats, fHigh);
  const inferInfo =
    inferenceFHigh != null && !asFloat32 ? resolveUpperClipScale(stats, inferenceFHigh) : null;
  const needDualOutput = Boolean(
    inferInfo && !displayInfo.degenerate && inferInfo.scale !== displayInfo.scale
  );

  const outAffine = computeConformAffine(nx, ny, nz, flatAffine, toRAS);
  const inInv = invertAffine4x4(flatAffine);
  const outToIn = mulAffine4x4(inInv, outAffine);

  // Skip trilinear resampling when input already coincides with target 256³ 1 mm grid
  // (matches conform.c's same_grid check, avoiding redundant blur and 64 MiB copy).
  let sameGrid = nx === CONFORM_DIM && ny === CONFORM_DIM && nz === CONFORM_DIM;
  for (let r = 0; r < 3 && sameGrid; r++) {
    const r4 = r * 4;
    let shift = Math.abs(outToIn[r4 + 3]);
    for (let c = 0; c < 3; c++) {
      shift += Math.abs(outToIn[r4 + c] - (r === c ? 1 : 0)) * (CONFORM_DIM - 1);
    }
    sameGrid = shift < 1e-3;
  }

  const outImg = asFloat32 ? new Float32Array(CONFORM_NVOX) : new Uint8Array(CONFORM_NVOX);
  let inferenceImg = null;

  if (needDualOutput) {
    // Single-pass dual display (fHigh) + inference (inferenceFHigh) reslice:
    // keeps `vol` unmutated (zero extra Float32Array) while producing outputs
    // bit-identical to standalone conformVolumeData calls at each fHigh.
    inferenceImg = new Uint8Array(CONFORM_NVOX);
    const srcMin = displayInfo.srcMin;
    const displayScale = displayInfo.scale;
    const inferScale = inferInfo.scale;

    if (sameGrid) {
      for (let i = 0; i < CONFORM_NVOX; i++) {
        const rawV = vol[i];
        const vd = clampScaledF32(rawV, srcMin, displayScale);
        outImg[i] = vd <= 0 ? 0 : vd >= 255 ? 255 : Math.round(vd);
        const vi = clampScaledF32(rawV, srcMin, inferScale);
        inferenceImg[i] = vi <= 0 ? 0 : vi >= 255 ? 255 : Math.round(vi);
      }
    } else {
      const fillDisplay = clampScaledF32(stats.rawMin, srcMin, displayScale);
      if (fillDisplay !== 0) {
        outImg.fill(Math.min(255, Math.max(0, Math.round(fillDisplay))));
      }
      const fillInfer = clampScaledF32(stats.rawMin, srcMin, inferScale);
      if (fillInfer !== 0) {
        inferenceImg.fill(Math.min(255, Math.max(0, Math.round(fillInfer))));
      }

      const m00 = outToIn[0], m01 = outToIn[1], m02 = outToIn[2], m03 = outToIn[3];
      const m10 = outToIn[4], m11 = outToIn[5], m12 = outToIn[6], m13 = outToIn[7];
      const m20 = outToIn[8], m21 = outToIn[9], m22 = outToIn[10], m23 = outToIn[11];
      const nxy = nx * ny;
      const nxM1 = nx - 1;
      const nyM1 = ny - 1;
      const nzM1 = nz - 1;

      let outIdx = 0;
      if (isLinear) {
        for (let z = 0; z < CONFORM_DIM; z++) {
          const zx = z * m02 + m03;
          const zy = z * m12 + m13;
          const zz = z * m22 + m23;
          for (let y = 0; y < CONFORM_DIM; y++) {
            const bx = y * m01 + zx;
            const by = y * m11 + zy;
            const bz = y * m21 + zz;
            for (let x = 0; x < CONFORM_DIM; x++, outIdx++) {
              const fxp = x * m00 + bx;
              const fyp = x * m10 + by;
              const fzp = x * m20 + bz;
              const ix = Math.floor(fxp);
              const iy = Math.floor(fyp);
              const iz = Math.floor(fzp);
              if (ix < 0 || iy < 0 || iz < 0 || ix >= nxM1 || iy >= nyM1 || iz >= nzM1) {
                continue;
              }
              const p = ix + iy * nx + iz * nxy;
              const r000 = vol[p];
              const r100 = vol[p + 1];
              const r010 = vol[p + nx];
              const r110 = vol[p + nx + 1];
              const r001 = vol[p + nxy];
              const r101 = vol[p + nxy + 1];
              const r011 = vol[p + nx + nxy];
              const r111 = vol[p + nx + nxy + 1];
              if (
                r000 <= srcMin && r100 <= srcMin && r010 <= srcMin && r110 <= srcMin &&
                r001 <= srcMin && r101 <= srcMin && r011 <= srcMin && r111 <= srcMin
              ) {
                outImg[outIdx] = 0;
                inferenceImg[outIdx] = 0;
                continue;
              }
              const dx = fxp - ix;
              const dy = fyp - iy;
              const dz = fzp - iz;
              const wx0 = 1 - dx;
              const wy0 = 1 - dy;
              const wz0 = 1 - dz;

              const d00 = clampScaledF32(r000, srcMin, displayScale) * wx0 + clampScaledF32(r100, srcMin, displayScale) * dx;
              const d10 = clampScaledF32(r010, srcMin, displayScale) * wx0 + clampScaledF32(r110, srcMin, displayScale) * dx;
              const d01 = clampScaledF32(r001, srcMin, displayScale) * wx0 + clampScaledF32(r101, srcMin, displayScale) * dx;
              const d11 = clampScaledF32(r011, srcMin, displayScale) * wx0 + clampScaledF32(r111, srcMin, displayScale) * dx;
              const vd = Math.fround((d00 * wy0 + d10 * dy) * wz0 + (d01 * wy0 + d11 * dy) * dz);
              outImg[outIdx] = vd <= 0 ? 0 : vd >= 255 ? 255 : Math.floor(vd + 0.5);

              const i00 = clampScaledF32(r000, srcMin, inferScale) * wx0 + clampScaledF32(r100, srcMin, inferScale) * dx;
              const i10 = clampScaledF32(r010, srcMin, inferScale) * wx0 + clampScaledF32(r110, srcMin, inferScale) * dx;
              const i01 = clampScaledF32(r001, srcMin, inferScale) * wx0 + clampScaledF32(r101, srcMin, inferScale) * dx;
              const i11 = clampScaledF32(r011, srcMin, inferScale) * wx0 + clampScaledF32(r111, srcMin, inferScale) * dx;
              const vi = Math.fround((i00 * wy0 + i10 * dy) * wz0 + (i01 * wy0 + i11 * dy) * dz);
              inferenceImg[outIdx] = vi <= 0 ? 0 : vi >= 255 ? 255 : Math.floor(vi + 0.5);
            }
          }
        }
      } else {
        for (let z = 0; z < CONFORM_DIM; z++) {
          const zx = z * m02 + m03;
          const zy = z * m12 + m13;
          const zz = z * m22 + m23;
          for (let y = 0; y < CONFORM_DIM; y++) {
            const bx = y * m01 + zx;
            const by = y * m11 + zy;
            const bz = y * m21 + zz;
            for (let x = 0; x < CONFORM_DIM; x++, outIdx++) {
              const ix = Math.round(x * m00 + bx);
              const iy = Math.round(x * m10 + by);
              const iz = Math.round(x * m20 + bz);
              if (ix < 0 || iy < 0 || iz < 0 || ix >= nx || iy >= ny || iz >= nz) {
                continue;
              }
              const rawV = vol[ix + iy * nx + iz * nxy];
              const vd = clampScaledF32(rawV, srcMin, displayScale);
              outImg[outIdx] = vd <= 0 ? 0 : vd >= 255 ? 255 : Math.floor(vd + 0.5);
              const vi = clampScaledF32(rawV, srcMin, inferScale);
              inferenceImg[outIdx] = vi <= 0 ? 0 : vi >= 255 ? 255 : Math.floor(vi + 0.5);
            }
          }
        }
      }
    }
  } else {
    // Rescale intensities (negative-ringing floor + upper clip) before spatial reslice.
    applyScaleInPlace(vol, displayInfo);

    if (sameGrid) {
      if (asFloat32) {
        for (let i = 0; i < CONFORM_NVOX; i++) {
          outImg[i] = vol[i] * (1 / 255);
        }
      } else {
        for (let i = 0; i < CONFORM_NVOX; i++) {
          const v = vol[i];
          outImg[i] = v <= 0 ? 0 : v >= 255 ? 255 : Math.round(v);
        }
      }
    } else {
      // Out-of-bounds fill matches conform.c (minimum of scaled input, typically 0).
      let fillVal = vol[0];
      for (let i = 1; i < nvox; i++) {
        if (vol[i] < fillVal) fillVal = vol[i];
      }
      if (fillVal !== 0) {
        outImg.fill(asFloat32 ? fillVal * (1 / 255) : Math.min(255, Math.max(0, Math.round(fillVal))));
      }

      const m00 = outToIn[0], m01 = outToIn[1], m02 = outToIn[2], m03 = outToIn[3];
      const m10 = outToIn[4], m11 = outToIn[5], m12 = outToIn[6], m13 = outToIn[7];
      const m20 = outToIn[8], m21 = outToIn[9], m22 = outToIn[10], m23 = outToIn[11];
      const nxy = nx * ny;
      const nxM1 = nx - 1;
      const nyM1 = ny - 1;
      const nzM1 = nz - 1;
      const inv255 = 1 / 255;

      let outIdx = 0;
      if (isLinear) {
        for (let z = 0; z < CONFORM_DIM; z++) {
          const zx = z * m02 + m03;
          const zy = z * m12 + m13;
          const zz = z * m22 + m23;
          for (let y = 0; y < CONFORM_DIM; y++) {
            const bx = y * m01 + zx;
            const by = y * m11 + zy;
            const bz = y * m21 + zz;
            for (let x = 0; x < CONFORM_DIM; x++, outIdx++) {
              const fxp = x * m00 + bx;
              const fyp = x * m10 + by;
              const fzp = x * m20 + bz;
              const ix = Math.floor(fxp);
              const iy = Math.floor(fyp);
              const iz = Math.floor(fzp);
              if (ix < 0 || iy < 0 || iz < 0 || ix >= nxM1 || iy >= nyM1 || iz >= nzM1) {
                continue;
              }
              const dx = fxp - ix;
              const dy = fyp - iy;
              const dz = fzp - iz;
              const wx0 = 1 - dx;
              const wy0 = 1 - dy;
              const wz0 = 1 - dz;
              const p = ix + iy * nx + iz * nxy;
              const v00 = vol[p] * wx0 + vol[p + 1] * dx;
              const v10 = vol[p + nx] * wx0 + vol[p + nx + 1] * dx;
              const v01 = vol[p + nxy] * wx0 + vol[p + nxy + 1] * dx;
              const v11 = vol[p + nx + nxy] * wx0 + vol[p + nx + nxy + 1] * dx;
              const v = (v00 * wy0 + v10 * dy) * wz0 + (v01 * wy0 + v11 * dy) * dz;
              if (asFloat32) {
                outImg[outIdx] = v <= 0 ? 0 : v >= 255 ? 1 : v * inv255;
              } else {
                const vf = Math.fround(v);
                outImg[outIdx] = vf <= 0 ? 0 : vf >= 255 ? 255 : Math.floor(vf + 0.5);
              }
            }
          }
        }
      } else {
        for (let z = 0; z < CONFORM_DIM; z++) {
          const zx = z * m02 + m03;
          const zy = z * m12 + m13;
          const zz = z * m22 + m23;
          for (let y = 0; y < CONFORM_DIM; y++) {
            const bx = y * m01 + zx;
            const by = y * m11 + zy;
            const bz = y * m21 + zz;
            for (let x = 0; x < CONFORM_DIM; x++, outIdx++) {
              const ix = Math.round(x * m00 + bx);
              const iy = Math.round(x * m10 + by);
              const iz = Math.round(x * m20 + bz);
              if (ix < 0 || iy < 0 || iz < 0 || ix >= nx || iy >= ny || iz >= nz) {
                continue;
              }
              const v = vol[ix + iy * nx + iz * nxy];
              if (asFloat32) {
                outImg[outIdx] = v <= 0 ? 0 : v >= 255 ? 1 : v * inv255;
              } else {
                outImg[outIdx] = v <= 0 ? 0 : v >= 255 ? 255 : Math.floor(v + 0.5);
              }
            }
          }
        }
      }
    }
  }

  const out = {
    img: outImg,
    dims: [3, CONFORM_DIM, CONFORM_DIM, CONFORM_DIM, 1, 1, 1, 1],
    pixDims: [1, 1, 1, 1, 1, 0, 0, 0],
    affine: outAffine,
    datatypeCode: asFloat32 ? 16 : 2,
    bitsPerVoxel: asFloat32 ? 32 : 8,
    sclSlope: 1,
    sclInter: 0,
    calMin: 0,
    calMax: 0,
  };
  if (inferenceFHigh != null) {
    out.inferenceImg = inferenceImg;
  }
  return out;
}
