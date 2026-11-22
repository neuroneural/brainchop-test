import { conformVolumeData } from './conform-volume.js';

self.onmessage = (event) => {
  const { id, payload } = event.data;
  try {
    const result = conformVolumeData(payload);
    const transfer = [result.img.buffer];
    if (result.inferenceImg && result.inferenceImg.buffer !== result.img.buffer) {
      transfer.push(result.inferenceImg.buffer);
    }
    self.postMessage({ id, result }, transfer);
  } catch (err) {
    self.postMessage({
      id,
      error: err instanceof Error ? err.message : String(err),
    });
  }
};
