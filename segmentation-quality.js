// A categorical brain segmentation on a conformed volume must leave some
// background. In particular, a full cube of a single nonzero class is a GPU
// failure, even though its sum is finite and the postprocessor can complete.
export function validateCategoricalSegmentation(labels) {
  if (!labels?.length) throw new Error('Segmentation volume is empty.');

  let foreground = 0;
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    if (!Number.isFinite(label) || label < 0) {
      throw new Error(`Segmentation contains an invalid label at voxel ${i}: ${label}.`);
    }
    if (label !== 0) foreground++;
  }

  if (foreground === 0) throw new Error('Segmentation volume contains no foreground labels.');
  if (foreground > labels.length * 0.95) {
    throw new Error(`Segmentation fills ${(100 * foreground / labels.length).toFixed(1)}% of the volume; GPU output is unusable.`);
  }
}
