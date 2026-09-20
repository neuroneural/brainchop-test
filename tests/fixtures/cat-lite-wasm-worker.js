import { check } from './cat-lite-wasm-check.js';
self.onmessage = async () => {
  try { self.postMessage({ result: await check() }); }
  catch (error) { self.postMessage({ error: error.message }); }
};
