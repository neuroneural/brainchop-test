// A categorical brain segmentation on a conformed volume must leave some
// background. In particular, a full cube of a single nonzero class is a GPU
// failure, even though its sum is finite and the postprocessor can complete.
export function validateCategoricalSegmentation(labels) {
  if (!labels?.length) throw new Error('Segmentation volume is empty.');

  let foreground = 0;
  if ((labels instanceof Uint8Array || labels instanceof Uint8ClampedArray) && (labels.byteOffset & 3) === 0 && labels.length >= 4) {
    const qLen = labels.length >> 2;
    const u32 = new Uint32Array(labels.buffer, labels.byteOffset, qLen);
    for (let q = 0; q < qLen; q++) {
      const w = u32[q];
      if (w === 0) continue;
      if (w & 0xff) foreground++;
      if (w & 0xff00) foreground++;
      if (w & 0xff0000) foreground++;
      if (w & 0xff000000) foreground++;
    }
    for (let i = qLen << 2; i < labels.length; i++) {
      if (labels[i] !== 0) foreground++;
    }
  } else if (
    labels instanceof Uint8Array ||
    labels instanceof Uint8ClampedArray ||
    labels instanceof Uint16Array ||
    labels instanceof Uint32Array
  ) {
    for (let i = 0; i < labels.length; i++) {
      if (labels[i] !== 0) foreground++;
    }
  } else {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (!Number.isFinite(label) || label < 0) {
        throw new Error(`Segmentation contains an invalid label at voxel ${i}: ${label}.`);
      }
      if (label !== 0) foreground++;
    }
  }

  if (foreground === 0) throw new Error('Segmentation volume contains no foreground labels.');
  if (foreground > labels.length * 0.95) {
    throw new Error(`Segmentation fills ${(100 * foreground / labels.length).toFixed(1)}% of the volume; GPU output is unusable.`);
  }
}
