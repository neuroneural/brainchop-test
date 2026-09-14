// Shared host-side pieces for the native WebGL2 CAT-lite probability path.

const DEFAULT_GROUPS = {
  grayMatter: [2, 6, 7, 8, 9, 10, 14, 15, 16, 17],
  whiteMatter: [1, 5],
  csf: [3, 4, 11, 12],
};

function finiteOption(options, name, fallback, low, high) {
  const value = Number(options[name] ?? fallback);
  if (!Number.isFinite(value) || value < low || value > high) {
    throw new Error(`${name} must be between ${low} and ${high}, got ${options[name]}`);
  }
  return value;
}

function maskFor(labels, nclass, name) {
  let mask = 0;
  for (const label of labels || []) {
    if (!Number.isInteger(label) || label < 0 || label >= nclass || label >= 32) {
      throw new Error(`Invalid ${name} tissue label ${label} for ${nclass} classes`);
    }
    mask = (mask | (1 << label)) >>> 0;
  }
  return mask;
}

export function tissueProbabilityConfig(options, nclass) {
  if (!Number.isInteger(nclass) || nclass < 2 || nclass > 32) {
    throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${nclass}`);
  }
  const groups = { ...DEFAULT_GROUPS, ...(options.probabilityGroups || {}) };
  return {
    temperature: finiteOption(options, 'softmaxTemperature', 1, 1e-6, 1e6),
    supportTemperature: finiteOption(options, 'brainSupportTemperature', 1, 1e-6, 1e6),
    supportPower: finiteOption(options, 'brainSupportPower', 1, 1e-6, 1e6),
    sigma: finiteOption(options, 'partialVolumeSigma', 0, 0, 2),
    grayMask: maskFor(groups.grayMatter, nclass, 'gray-matter'),
    whiteMask: maskFor(groups.whiteMatter, nclass, 'white-matter'),
    csfMask: maskFor(groups.csf, nclass, 'CSF'),
  };
}

function blurAxis(source, target, shape, stride, kernel, weightSum) {
  const [nx, ny, nz] = shape;
  const plane = nx * ny;
  const radius = (kernel.length - 1) >> 1;
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        const index = z * plane + y * nx + x;
        const coordinate = stride === 1 ? x : (stride === nx ? y : z);
        const limit = stride === 1 ? nx : (stride === nx ? ny : nz);
        let sum = 0;
        for (let offset = -radius; offset <= radius; offset++) {
          const sample = coordinate + offset;
          if (sample < 0 || sample >= limit) continue;
          sum += kernel[offset + radius] * source[index + offset * stride];
        }
        // Match the WebGPU blur: out-of-volume samples contribute zero while
        // the full kernel weight remains in the denominator.
        target[index] = sum / weightSum;
      }
    }
  }
}

/**
 * Apply the same separable Gaussian and soft brain-support gate used by the
 * WebGPU probability runner. Arrays are modified in place to avoid retaining
 * another three full 256^3 volumes in the worker.
 */
export function smoothAndGateTissuePriors(volumes, support, shape, options) {
  const [nx, ny, nz] = shape;
  const length = nx * ny * nz;
  if (!Array.isArray(volumes) || volumes.length !== 3
      || volumes.some((volume) => volume.length !== length)
      || support.length !== length) {
    throw new Error('Native WebGL2 tissue-prior dimensions do not match');
  }

  const sigma = finiteOption(options, 'partialVolumeSigma', 0, 0, 2);
  const supportPower = finiteOption(options, 'brainSupportPower', 1, 1e-6, 1e6);
  let scratch = null;
  let kernel = null;
  let weightSum = 1;
  if (sigma > 0) {
    const radius = Math.max(1, Math.round(3 * sigma));
    kernel = new Float32Array(radius * 2 + 1);
    weightSum = 0;
    for (let offset = -radius; offset <= radius; offset++) {
      const weight = Math.exp(-0.5 * offset * offset / (sigma * sigma));
      kernel[offset + radius] = weight;
      weightSum += weight;
    }
    scratch = new Float32Array(length);
  }

  for (const volume of volumes) {
    let source = volume;
    if (kernel) {
      blurAxis(volume, scratch, shape, 1, kernel, weightSum);
      blurAxis(scratch, volume, shape, nx, kernel, weightSum);
      blurAxis(volume, scratch, shape, nx * ny, kernel, weightSum);
      source = scratch;
    }
    for (let i = 0; i < length; i++) {
      const gate = Math.pow(Math.max(0, Math.min(1, support[i])), supportPower);
      volume[i] = Math.max(0, Math.min(1, source[i] * gate));
    }
  }
  return volumes;
}
