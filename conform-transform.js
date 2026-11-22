import ConformWorker from './conform-worker.js?worker';
import {
  conformVolumeData,
  DISPLAY_CONFORM_FHIGH,
  INFERENCE_CONFORM_FHIGH,
} from './conform-volume.js';

export { DISPLAY_CONFORM_FHIGH, INFERENCE_CONFORM_FHIGH };

let sharedWorker = null;
let nextRequestId = 1;
const pending = new Map();

function resetWorker(err) {
  if (sharedWorker) {
    sharedWorker.terminate();
    sharedWorker = null;
  }
  for (const { reject } of pending.values()) {
    reject(err);
  }
  pending.clear();
}

function getWorker() {
  if (sharedWorker) return sharedWorker;
  const worker = new ConformWorker({ type: 'module' });
  worker.onmessage = (event) => {
    const { id, result, error } = event.data;
    const entry = pending.get(id);
    if (!entry) return;
    pending.delete(id);
    if (error) {
      entry.reject(new Error(error));
    } else {
      entry.resolve(result);
    }
  };
  worker.onerror = (event) => {
    const msg = event?.message || 'Conform worker crashed';
    resetWorker(new Error(msg));
  };
  sharedWorker = worker;
  return worker;
}

function runConformInWorker(payload) {
  if (typeof Worker === 'undefined') {
    return Promise.resolve(conformVolumeData(payload));
  }
  return new Promise((resolve, reject) => {
    const id = nextRequestId++;
    pending.set(id, { resolve, reject });
    try {
      // Do NOT transfer payload.img.buffer: main.js keeps nativeInputNV.img intact for native export.
      getWorker().postMessage({ id, payload });
    } catch (err) {
      pending.delete(id);
      reject(err);
    }
  });
}

function buildConformedHeader(hdr, res) {
  const outHdr = Object.assign(
    Object.create(Object.getPrototypeOf(hdr) || Object.prototype),
    JSON.parse(JSON.stringify(hdr)),
  );
  outHdr.datatypeCode = res.datatypeCode;
  outHdr.numBitsPerVoxel = res.bitsPerVoxel;
  outHdr.scl_slope = res.sclSlope;
  outHdr.scl_inter = res.sclInter;
  outHdr.cal_min = res.calMin;
  outHdr.cal_max = res.calMax;
  outHdr.dims = res.dims;
  outHdr.pixDims = res.pixDims;
  outHdr.affine = [
    [res.affine[0], res.affine[1], res.affine[2], res.affine[3]],
    [res.affine[4], res.affine[5], res.affine[6], res.affine[7]],
    [res.affine[8], res.affine[9], res.affine[10], res.affine[11]],
    [0, 0, 0, 1],
  ];
  outHdr.sform_code = 1;
  outHdr.qform_code = 0;
  return outHdr;
}

/**
 * NiiVue VolumeTransform for robust 256³ conforming (0–99.9% display clip +
 * <2% negative floor, with optional single-pass 0–98% inference output via
 * `options.inferenceFHigh`).
 */
export const clinicalConform = {
  name: 'conform',
  description: 'Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling',
  options: [
    { name: 'toRAS', type: 'checkbox', label: 'Output RAS orientation', default: false },
    { name: 'isLinear', type: 'checkbox', label: 'Linear interpolation', default: true },
    { name: 'asFloat32', type: 'checkbox', label: 'Output as Float32', default: false },
  ],
  async apply(hdr, img, options = {}) {
    const inferenceFHigh = options.inferenceFHigh ?? null;
    const payload = {
      img,
      datatypeCode: hdr.datatypeCode,
      dims: [...hdr.dims],
      affine: Array.isArray(hdr.affine[0]) ? hdr.affine.flat() : [...hdr.affine],
      sclSlope: hdr.scl_slope || 1,
      sclInter: hdr.scl_inter || 0,
      toRAS: options.toRAS ?? false,
      isLinear: options.isLinear ?? true,
      asFloat32: options.asFloat32 ?? false,
      fHigh: options.fHigh ?? DISPLAY_CONFORM_FHIGH,
      inferenceFHigh,
    };
    const res = await runConformInWorker(payload);
    const out = {
      hdr: buildConformedHeader(hdr, res),
      img: res.img,
    };
    if (inferenceFHigh != null) {
      out.inferenceImg = res.inferenceImg ?? res.img;
    }
    return out;
  },
};
