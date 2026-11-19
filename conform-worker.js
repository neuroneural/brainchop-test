import { conformVolumeData } from './conform-volume.js';

self.onmessage = (event) => {
  const { id, payload } = event.data;
  try {
    const result = conformVolumeData(payload);
    self.postMessage({ id, result }, [result.img.buffer]);
  } catch (err) {
    self.postMessage({
      id,
      error: err instanceof Error ? err.message : String(err),
    });
  }
};
