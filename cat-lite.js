// Lightweight, browser-side approximation of CAT's AMAP/PVE idea.
//
// This is deliberately separate from the ordinary grouped-softmax output. It
// jointly considers GM, WM and CSF model priors plus the subject's normalized
// T1 intensity, estimates a coarse local bias field, and evaluates CAT-like
// pure/mixed tissue classes. A sixth, zero-GM CSF-WM nuisance class prevents a
// direct ventricular boundary from being explained as a false gray rim. It is
// not CAT12 and does not use a hard segmentation boundary.

import { BWLabeler } from './bwlabels.js';

const EPSILON = 1e-8;

function clamp(value, low, high) {
  return Math.max(low, Math.min(high, value));
}

function optionNumber(options, name, fallback, low, high) {
  const value = Number(options[name] ?? fallback);
  if (!Number.isFinite(value)) return fallback;
  return clamp(value, low, high);
}

function validateVolumes(volumes, intensity, shape) {
  if (!Array.isArray(volumes) || volumes.length !== 3) {
    throw new Error('CAT-lite requires [GM, WM, CSF] probability volumes.');
  }
  const [nx, ny, nz] = shape;
  const length = nx * ny * nz;
  if (!Number.isInteger(length) || length <= 0) throw new Error(`Invalid CAT-lite shape: ${shape}`);
  if (intensity.length !== length || volumes.some((volume) => volume.length !== length)) {
    throw new Error('CAT-lite volume sizes do not match the requested shape.');
  }
  return { nx, ny, nz, length };
}

function retainPrincipalSupport(volumes, shape, options) {
  if (options.catLiteKeepLargestComponent === false) {
    return { applied: false, componentCount: 0, removedVoxels: 0 };
  }
  const threshold = optionNumber(
    options,
    'catLiteComponentThreshold',
    options.catLiteMinSupport ?? 0.03,
    0.001,
    0.95
  );
  const length = volumes[0].length;
  const supportMask = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    const support = Math.max(0, volumes[0][i])
      + Math.max(0, volumes[1][i])
      + Math.max(0, volumes[2][i]);
    if (Number.isFinite(support) && support >= threshold) supportMask[i] = 1;
  }

  // Match the ordinary 18-class postprocessor: form a binary anatomical
  // support and retain its largest 6-connected component. The threshold is the
  // same low support floor already used by CAT-lite, so this removes detached
  // eyes/neck/shoulders without quantising probabilities inside the brain.
  const labeler = new BWLabeler();
  const [componentCount, componentLabels] = labeler.bwlabel(
    supportMask, shape, 6, true, false
  );
  const [, principalMask] = labeler.largest_original_cluster_labels(
    supportMask, componentCount, componentLabels, shape
  );
  let removedVoxels = 0;
  if (componentCount > 1) {
    for (let i = 0; i < length; i++) {
      if (!supportMask[i] || principalMask[i]) continue;
      volumes[0][i] = 0;
      volumes[1][i] = 0;
      volumes[2][i] = 0;
      removedVoxels++;
    }
  }
  return { applied: true, threshold, componentCount, removedVoxels };
}

function tissuePriorAt(gm, wm, csf, index) {
  const pg = Math.max(0, gm[index]);
  const pw = Math.max(0, wm[index]);
  const pc = Math.max(0, csf[index]);
  const support = pg + pw + pc;
  if (!Number.isFinite(support) || support <= EPSILON) return [0, 0, 0, 0];
  return [pg / support, pw / support, pc / support, clamp(support, 0, 1)];
}

function estimateStats(volumes, intensity, biasAt, options) {
  const [gm, wm, csf] = volumes;
  const priorPower = optionNumber(options, 'catLitePurePriorPower', 3, 1, 8);
  const minSupport = optionNumber(options, 'catLiteMinSupport', 0.03, 0, 0.5);
  const sums = new Float64Array(3);
  const weights = new Float64Array(3);

  for (let i = 0; i < intensity.length; i++) {
    const [pg, pw, pc, support] = tissuePriorAt(gm, wm, csf, i);
    if (support < minSupport || !Number.isFinite(intensity[i])) continue;
    const value = intensity[i] - biasAt(i);
    const priors = [pc, pg, pw]; // enforce T1 ordering: CSF, GM, WM
    for (let tissue = 0; tissue < 3; tissue++) {
      const weight = support * Math.pow(priors[tissue], priorPower);
      sums[tissue] += weight * value;
      weights[tissue] += weight;
    }
  }

  if (weights.some((weight) => weight < 100)) {
    return { applied: false, reason: 'too few high-confidence tissue voxels' };
  }

  const means = Array.from(sums, (sum, tissue) => sum / weights[tissue]);
  const minSeparation = optionNumber(options, 'catLiteMinMeanSeparation', 0.035, 0.005, 0.25);
  if (!(means[0] + minSeparation < means[1] && means[1] + minSeparation < means[2])) {
    return {
      applied: false,
      reason: `implausible T1 tissue ordering (${means.map((v) => v.toFixed(3)).join(', ')})`,
    };
  }

  const squareSums = new Float64Array(3);
  for (let i = 0; i < intensity.length; i++) {
    const [pg, pw, pc, support] = tissuePriorAt(gm, wm, csf, i);
    if (support < minSupport || !Number.isFinite(intensity[i])) continue;
    const value = intensity[i] - biasAt(i);
    const priors = [pc, pg, pw];
    for (let tissue = 0; tissue < 3; tissue++) {
      const weight = support * Math.pow(priors[tissue], priorPower);
      const delta = value - means[tissue];
      squareSums[tissue] += weight * delta * delta;
    }
  }

  const sigmaFloor = optionNumber(options, 'catLiteSigmaFloor', 0.025, 0.005, 0.15);
  const sigmas = Array.from(squareSums, (sum, tissue) =>
    Math.sqrt(Math.max(sigmaFloor * sigmaFloor, sum / weights[tissue]))
  );
  return { applied: true, means, sigmas };
}

function makeCoarseBiasField(volumes, intensity, shape, tissueStats, options) {
  const [gm, wm, csf] = volumes;
  const [nx, ny, nz] = shape;
  const block = Math.max(4, Math.round(optionNumber(options, 'catLiteBiasBlockSize', 16, 4, 64)));
  const gx = Math.ceil(nx / block);
  const gy = Math.ceil(ny / block);
  const gz = Math.ceil(nz / block);
  const count = gx * gy * gz;
  const sums = new Float64Array(count);
  const weights = new Float64Array(count);
  const [muCsf, muGm, muWm] = tissueStats.means;
  const minSupport = optionNumber(options, 'catLiteMinSupport', 0.03, 0, 0.5);

  const plane = nx * ny;
  for (let z = 0; z < nz; z++) {
    const bz = Math.floor(z / block);
    for (let y = 0; y < ny; y++) {
      const by = Math.floor(y / block);
      let voxel = z * plane + y * nx;
      const base = (bz * gy + by) * gx;
      for (let x = 0; x < nx; x++, voxel++) {
        const [pg, pw, pc, support] = tissuePriorAt(gm, wm, csf, voxel);
        if (support < minSupport || !Number.isFinite(intensity[voxel])) continue;
        const expected = pc * muCsf + pg * muGm + pw * muWm;
        const confidence = support * (pc * pc + pg * pg + pw * pw);
        const cell = base + Math.floor(x / block);
        sums[cell] += confidence * (intensity[voxel] - expected);
        weights[cell] += confidence;
      }
    }
  }

  let values = new Float32Array(count);
  let valid = new Uint8Array(count);
  for (let i = 0; i < count; i++) {
    if (weights[i] > 1) {
      values[i] = sums[i] / weights[i];
      valid[i] = 1;
    }
  }

  const smoothingPasses = Math.round(optionNumber(options, 'catLiteBiasSmoothPasses', 3, 0, 12));
  for (let pass = 0; pass < smoothingPasses; pass++) {
    const next = new Float32Array(count);
    const nextValid = new Uint8Array(count);
    for (let z = 0; z < gz; z++) {
      for (let y = 0; y < gy; y++) {
        for (let x = 0; x < gx; x++) {
          let sum = 0;
          let n = 0;
          for (let dz = -1; dz <= 1; dz++) {
            const zz = z + dz;
            if (zz < 0 || zz >= gz) continue;
            for (let dy = -1; dy <= 1; dy++) {
              const yy = y + dy;
              if (yy < 0 || yy >= gy) continue;
              for (let dx = -1; dx <= 1; dx++) {
                const xx = x + dx;
                if (xx < 0 || xx >= gx) continue;
                const neighbour = (zz * gy + yy) * gx + xx;
                if (!valid[neighbour]) continue;
                sum += values[neighbour];
                n++;
              }
            }
          }
          const cell = (z * gy + y) * gx + x;
          if (n > 0) {
            next[cell] = sum / n;
            nextValid[cell] = 1;
          }
        }
      }
    }
    values = next;
    valid = nextValid;
  }

  // Interpolate between block-centre estimates. A nearest-cell lookup creates
  // artificial intensity steps every `block` voxels; those steps can become
  // contours after the tissue likelihoods are evaluated (especially beside
  // ventricles). Trilinear interpolation keeps this field genuinely smooth.
  return (index) => {
    const z = Math.floor(index / plane);
    const remainder = index - z * plane;
    const y = Math.floor(remainder / nx);
    const x = remainder - y * nx;

    const coordinate = (voxel, cells) => {
      const grid = clamp((voxel + 0.5) / block - 0.5, 0, cells - 1);
      const low = Math.floor(grid);
      return [low, Math.min(low + 1, cells - 1), grid - low];
    };
    const [x0, x1, tx] = coordinate(x, gx);
    const [y0, y1, ty] = coordinate(y, gy);
    const [z0, z1, tz] = coordinate(z, gz);
    const at = (xx, yy, zz) => values[(zz * gy + yy) * gx + xx] || 0;
    const lerp = (a, b, t) => a + (b - a) * t;
    const z0y0 = lerp(at(x0, y0, z0), at(x1, y0, z0), tx);
    const z0y1 = lerp(at(x0, y1, z0), at(x1, y1, z0), tx);
    const z1y0 = lerp(at(x0, y0, z1), at(x1, y0, z1), tx);
    const z1y1 = lerp(at(x0, y1, z1), at(x1, y1, z1), tx);
    return lerp(lerp(z0y0, z0y1, ty), lerp(z1y0, z1y1, ty), tz);
  };
}

function smoothedPriors(volumes, index, x, y, z, shape, spatialWeight) {
  const [gm, wm, csf] = volumes;
  const [nx, ny, nz] = shape;
  const plane = nx * ny;
  const own = tissuePriorAt(gm, wm, csf, index);
  if (spatialWeight <= 0) return own;

  let sumG = 0;
  let sumW = 0;
  let sumC = 0;
  let neighbours = 0;
  const add = (i) => {
    const prior = tissuePriorAt(gm, wm, csf, i);
    if (prior[3] <= EPSILON) return;
    sumG += prior[0];
    sumW += prior[1];
    sumC += prior[2];
    neighbours++;
  };
  if (x > 0) add(index - 1);
  if (x + 1 < nx) add(index + 1);
  if (y > 0) add(index - nx);
  if (y + 1 < ny) add(index + nx);
  if (z > 0) add(index - plane);
  if (z + 1 < nz) add(index + plane);
  if (!neighbours) return own;

  const keep = 1 - spatialWeight;
  return [
    keep * own[0] + spatialWeight * sumG / neighbours,
    keep * own[1] + spatialWeight * sumW / neighbours,
    keep * own[2] + spatialWeight * sumC / neighbours,
    own[3],
  ];
}

function gaussianLogLikelihood(value, mean, sigma) {
  const z = (value - mean) / sigma;
  return -0.5 * z * z - Math.log(sigma);
}

/**
 * Return the CAT-lite gray-matter fraction in native voxel order.
 * `volumes` must be [GM, WM, CSF] model probabilities in the same orientation
 * as `intensity`.
 */
export function applyCatLitePartialVolume(volumes, intensity, shape, options = {}) {
  const { nx, ny, nz, length } = validateVolumes(volumes, intensity, shape);
  const supportCleanup = retainPrincipalSupport(volumes, shape, options);
  const zeroBias = () => 0;
  const initialStats = estimateStats(volumes, intensity, zeroBias, options);
  if (!initialStats.applied) {
    return { probabilities: Float32Array.from(volumes[0]), stats: initialStats };
  }

  const biasAt = makeCoarseBiasField(volumes, intensity, shape, initialStats, options);
  const tissueStats = estimateStats(volumes, intensity, biasAt, options);
  if (!tissueStats.applied) {
    return { probabilities: Float32Array.from(volumes[0]), stats: tissueStats };
  }

  const [muCsf, muGm, muWm] = tissueStats.means;
  const [sigmaCsf, sigmaGm, sigmaWm] = tissueStats.sigmas;
  const priorStrength = optionNumber(options, 'catLitePriorStrength', 0.8, 0, 4);
  const intensityStrength = optionNumber(options, 'catLiteIntensityStrength', 0.75, 0, 4);
  const mixelPrior = optionNumber(options, 'catLiteMixelPrior', 0.35, 0, 4);
  const csfWmMixelPrior = optionNumber(options, 'catLiteCsfWmMixelPrior', 6.0, 0, 12);
  const spatialWeight = optionNumber(options, 'catLiteSpatialWeight', 0.25, 0, 0.75);
  const minSupport = optionNumber(options, 'catLiteMinSupport', 0.03, 0, 0.5);
  const output = new Float32Array(length);
  let outputSum = 0;
  let outputMin = 1;
  let outputMax = 0;
  let supportedVoxels = 0;
  let partialVolumeVoxels = 0;
  let visibleVoxels = 0;
  let midrangeVoxels = 0;
  let nearPureGrayVoxels = 0;
  const plane = nx * ny;

  const mixGcMean = 0.5 * (muCsf + muGm);
  const mixGwMean = 0.5 * (muGm + muWm);
  const mixCwMean = 0.5 * (muCsf + muWm);
  const mixGcSigma = Math.sqrt((muGm - muCsf) ** 2 / 12 + 0.5 * (sigmaCsf ** 2 + sigmaGm ** 2));
  const mixGwSigma = Math.sqrt((muWm - muGm) ** 2 / 12 + 0.5 * (sigmaGm ** 2 + sigmaWm ** 2));
  const mixCwSigma = Math.sqrt((muWm - muCsf) ** 2 / 12 + 0.5 * (sigmaCsf ** 2 + sigmaWm ** 2));

  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      let index = z * plane + y * nx;
      for (let x = 0; x < nx; x++, index++) {
        const [pg, pw, pc, support] = smoothedPriors(volumes, index, x, y, z, shape, spatialWeight);
        if (support < minSupport || !Number.isFinite(intensity[index])) continue;
        const value = intensity[index] - biasAt(index);

        const logs = [
          priorStrength * Math.log(pc + EPSILON) + intensityStrength * gaussianLogLikelihood(value, muCsf, sigmaCsf),
          priorStrength * Math.log(pg + EPSILON) + intensityStrength * gaussianLogLikelihood(value, muGm, sigmaGm),
          priorStrength * Math.log(pw + EPSILON) + intensityStrength * gaussianLogLikelihood(value, muWm, sigmaWm),
          priorStrength * Math.log(mixelPrior * 2 * Math.sqrt(pc * pg) + EPSILON)
            + intensityStrength * gaussianLogLikelihood(value, mixGcMean, mixGcSigma),
          priorStrength * Math.log(mixelPrior * 2 * Math.sqrt(pg * pw) + EPSILON)
            + intensityStrength * gaussianLogLikelihood(value, mixGwMean, mixGwSigma),
          // CAT's five-class model has no explicit CSF-WM mixel, but the two
          // tissues do meet at the ventricles. Without this zero-GM nuisance
          // hypothesis, uncertainty at that interface can only be explained by
          // the two GM-containing mixel classes and appears as a spurious rim.
          priorStrength * Math.log(csfWmMixelPrior * 2 * Math.sqrt(pc * pw) * (1 - pg) ** 2 + EPSILON)
            + intensityStrength * gaussianLogLikelihood(value, mixCwMean, mixCwSigma),
        ];
        const maximum = Math.max(...logs);
        const weights = logs.map((logValue) => Math.exp(logValue - maximum));
        const total = weights.reduce((sum, weight) => sum + weight, 0);

        // Fractions within each mixed class follow the observed T1 position.
        // Class membership itself remains fully probabilistic and continuous.
        const gmInGc = clamp((value - muCsf) / (muGm - muCsf), 0, 1);
        const gmInGw = clamp((muWm - value) / (muWm - muGm), 0, 1);
        const gmFraction = (weights[1] + weights[3] * gmInGc + weights[4] * gmInGw) / total;
        // When CSF and WM both dominate the local priors, their direct contact
        // must not leave a one-voxel GM contour. Do not apply this gate where
        // GM is at least as plausible as either neighbour: that is the normal
        // CSF-GM-WM cortical partial-volume configuration.
        const csfWmMinimum = Math.min(pc, pw);
        const csfWmDominance = clamp(
          (csfWmMinimum - pg) / (csfWmMinimum + EPSILON), 0, 1
        );
        const csfWmContact = clamp(4 * pc * pw, 0, 1);
        const topologyGate = (1 - csfWmContact * csfWmDominance) ** 2;
        const probability = clamp(gmFraction * support * topologyGate, 0, 1);
        output[index] = probability;
        supportedVoxels++;
        if (probability > 0.05 && probability < 0.95) partialVolumeVoxels++;
        if (probability > 0.05) visibleVoxels++;
        if (probability >= 0.2 && probability <= 0.8) midrangeVoxels++;
        if (probability >= 0.95) nearPureGrayVoxels++;
        outputSum += probability;
        outputMin = Math.min(outputMin, probability);
        outputMax = Math.max(outputMax, probability);
      }
    }
  }

  return {
    probabilities: output,
    stats: {
      applied: true,
      tissueMeans: { csf: muCsf, gray: muGm, white: muWm },
      tissueSigmas: { csf: sigmaCsf, gray: sigmaGm, white: sigmaWm },
      model: 'six-class GM/WM/CSF + GM-CSF/GM-WM + zero-GM CSF-WM nuisance',
      supportCleanup,
      outputSum,
      outputMin,
      outputMax,
      supportedVoxels,
      partialVolumeVoxels,
      partialVolumeFraction: supportedVoxels ? partialVolumeVoxels / supportedVoxels : 0,
      visibleVoxels,
      midrangeVoxels,
      nearPureGrayVoxels,
      midrangeVisibleFraction: visibleVoxels ? midrangeVoxels / visibleVoxels : 0,
    },
  };
}
