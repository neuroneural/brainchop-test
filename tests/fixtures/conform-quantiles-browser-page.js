import { NiiVue } from '@niivue/niivue';
import { clinicalConform } from '../../conform-transform.js';
import { computeQuantiles } from '../../tensor-utils.js';
import { brainChopOpts, inferenceModelsList, resolveModelEntry } from '../../brainchop-parameters.js';
import { runInferenceWebGpu } from '../../inference-webgpu.js';
import { createDevice } from './cat-lite-browser-page.js';

export async function verifyConformAndDeterminism(niiBytesArr) {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const nv = new NiiVue();
  await nv.attachToCanvas(canvas);
  if (!nv.volumeTransforms.includes('conform')) {
    nv.registerVolumeTransform(clinicalConform);
  }

  const rawBlob = new Blob([new Uint8Array(niiBytesArr)]);
  const blobUrl = URL.createObjectURL(rawBlob);
  try {
    await nv.loadVolumes([{ url: blobUrl, name: 'synthetic_clinical_16bit.nii' }]);
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
  const nativeVol = nv.volumes[0];
  const nativeBefore0 = nativeVol.img[0];
  const nativeLen = nativeVol.img.length;

  const t0 = performance.now();
  const conformed = await nv.volumeTransform.conform(nativeVol, { toRAS: false });
  const conformMs = performance.now() - t0;

  const nativeIntact =
    nativeVol.img.length === nativeLen && nativeVol.img[0] === nativeBefore0;

  const cImg = conformed.img;
  const centerVal = cImg[128 * 65536 + 128 * 256 + 128];
  const cornerVal = cImg[0];
  let nonZero = 0;
  for (let i = 0; i < cImg.length; i++) {
    if (cImg[i] > 0) nonZero++;
  }

  // Repeat-run determinism on bundled t1_crop.nii.gz with live MindMap-16ch WebGPU (NO Math.random mock!)
  const resp = await fetch('/t1_crop.nii.gz');
  const gz = await resp.arrayBuffer();
  const rawT1 =
    new Uint8Array(gz)[0] === 31
      ? await new Response(
          new Blob([gz]).stream().pipeThrough(new DecompressionStream('gzip')),
        ).arrayBuffer()
      : gz;
  const dv = new DataView(rawT1);
  const t1U8 = new Uint8Array(rawT1, Math.round(dv.getFloat32(108, true)), 256 ** 3);
  const qA = computeQuantiles(t1U8);
  const qB = computeQuantiles(t1U8);

  const baseEntry = inferenceModelsList.find((m) => m.id === 3);
  const entry = resolveModelEntry(baseEntry, true);
  const device = await createDevice();
  const hdr = { dims: [3, 256, 256, 256, 1, 1, 1, 1] };
  let labels1 = null;
  let labels2 = null;
  try {
    await runInferenceWebGpu(device, brainChopOpts, entry, hdr, t1U8, (img) => { labels1 = img; }, () => {});
    await runInferenceWebGpu(device, brainChopOpts, entry, hdr, t1U8, (img) => { labels2 = img; }, () => {});
  } finally {
    device.destroy();
  }
  if (!labels1 || !labels2) throw new Error('WebGPU inference did not return labels');
  let repeatDiffs = 0;
  let fgCount = 0;
  for (let i = 0; i < labels1.length; i++) {
    if (labels1[i] !== labels2[i]) repeatDiffs++;
    if (labels1[i] > 0) fgCount++;
  }

  return {
    conformMs,
    conformedDims: conformed.dims.slice(1, 4),
    conformedIsU8: cImg instanceof Uint8Array,
    conformedPermRAS: Array.from(conformed.permRAS),
    conformedPixDims: conformed.hdr.pixDims.slice(1, 4),
    nativeIntact,
    cornerVal,
    centerVal,
    nonZero,
    qA,
    qB,
    repeatDiffs,
    fgCount,
  };
}
