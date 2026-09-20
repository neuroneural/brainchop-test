// The shared optimized C fit, measured against the JavaScript oracle on the
// same prepared priors. Both WebGPU and WebGL2 use this adapter through runCatLite.
// The synchronous JavaScript implementation remains the reference and fallback.
const defaults = {
  catLitePurePriorPower: 3, catLiteMinSupport: .03,
  catLiteMinMeanSeparation: .035, catLiteSigmaFloor: .025,
  catLiteBiasBlockSize: 16, catLiteBiasSmoothPasses: 3,
  catLitePriorStrength: .8, catLiteIntensityStrength: .75,
  catLiteMixelPrior: .35, catLiteCsfWmMixelPrior: 6,
  catLiteSpatialWeight: .25,
};
let modulePromise;
function loadModule() {
  if (!modulePromise) {
    // Production entry points and workers both live in assets/. Resolve from
    // their own URL, including deployments below a path, rather than from the
    // document URL (which differs from location.href inside a worker).
    const directory = typeof location !== 'object' ? './public/wasm/'
      : import.meta.env?.PROD ? '../wasm/' : './wasm/';
    const url = new URL(`${directory}cat-lite.js`, import.meta.url);
    modulePromise = import(/* @vite-ignore */ url.href)
      .then(({ default: create }) => create())
      .catch((error) => {
        console.warn('[CAT-lite] wasm fitter unavailable; using JavaScript:', error.message);
        return null;
      });
  }
  return modulePromise;
}

export async function tryCatLiteWasm(volumes, intensity, shape, options = {}) {
  // The C constants are fixed. Customized model entries continue to use the
  // general JavaScript implementation with their original parameters.
  if (Object.entries(defaults).some(([key, value]) => options[key] !== undefined && options[key] !== value)) return null;
  if (shape.length !== 3 || shape.some(n => !Number.isInteger(n) || n < 2 || n > 256)) return null;
  const count = shape[0] * shape[1] * shape[2];
  if (!(intensity instanceof Float32Array) || intensity.length !== count || volumes.length !== 3 ||
      volumes.some(v => !(v instanceof Float32Array) || v.length !== count)) return null;
  const module = await loadModule();
  if (!module) return null;
  let planes = 0, image = 0, dims = 0, report = 0;
  try {
    planes = module._malloc(count * 16); image = module._malloc(count * 4);
    dims = module._malloc(12); report = module._malloc(64);
    if (!planes || !image || !dims || !report) throw new Error('allocation failed');
    module.HEAPU32.set(shape, dims / 4);
    for (let t = 0; t < 3; t++) module.HEAPF32.set(volumes[t], planes / 4 + t * count);
    module.HEAPF32.set(intensity, image / 4);
    if (module._bc_cat_lite_fit_report(planes, image, dims, report)) throw new Error('fit failed');
    const means = Array.from(module.HEAPF64.subarray(report / 8, report / 8 + 3));
    const sigmas = Array.from(module.HEAPF64.subarray(report / 8 + 3, report / 8 + 6));
    const componentCount = module.HEAPU32[report / 4 + 12];
    const removedVoxels = module.HEAPU32[report / 4 + 13];
    const applied = module.HEAPU32[report / 4 + 14] !== 0;
    const refusal = module.HEAPU32[report / 4 + 15];
    const tissueObject = ([csf, gray, white]) => ({ csf, gray, white });
    const stats = applied ? {
      applied, tissueMeans: tissueObject(means), tissueSigmas: tissueObject(sigmas),
      supportCleanup: { componentCount, removedVoxels },
    } : { applied, reason: refusal === 1 ? 'too few high-confidence tissue voxels'
      : `implausible T1 tissue ordering (${means.map(v => v.toFixed(3)).join(', ')})` };
    // Copy only after successful fitting. A failed wasm attempt leaves the
    // caller's priors intact, so the JavaScript fallback sees the original data.
    for (let t = 0; t < 3; t++) volumes[t].set(module.HEAPF32.subarray(planes / 4 + t * count, planes / 4 + (t + 1) * count));
    return { tissues: volumes, stats };
  } catch (error) {
    console.warn('[CAT-lite] wasm fitter failed; using JavaScript:', error.message);
    return null;
  } finally {
    module._free(report); module._free(dims); module._free(image); module._free(planes);
  }
}
