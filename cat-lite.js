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
// main.js conforms every input to 256^3 before dispatching to a backend.
const CONFORMED_SHAPE = [256, 256, 256];

function clamp(value, low, high) {
  return Math.max(low, Math.min(high, value));
}

export function isCatLite(modelEntry) {
  return modelEntry.outputType === 'probability' && modelEntry.probabilityPostprocess === 'cat-lite';
}

function retainPrincipalSupport(volumes, shape, minSupport) {
  const [gm, wm, csf] = volumes;
  const length = gm.length;
  const supportMask = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    if (Math.max(0, gm[i]) + Math.max(0, wm[i]) + Math.max(0, csf[i]) >= minSupport) supportMask[i] = 1;
  }

  // Match the ordinary 18-class postprocessor: form a binary anatomical
  // support and retain its largest 6-connected component. The threshold is the
  // same low support floor used by the fit, so this removes detached
  // eyes/neck/shoulders without quantising probabilities inside the brain.
  const labeler = new BWLabeler();
  const [componentCount, componentLabels] = labeler.bwlabel(supportMask, shape, 6, true, false);
  const [, principalMask] = labeler.largest_original_cluster_labels(
    supportMask, componentCount, componentLabels, shape
  );
  let removedVoxels = 0;
  if (componentCount > 1) {
    for (let i = 0; i < length; i++) {
      if (!supportMask[i] || principalMask[i]) continue;
      gm[i] = 0;
      wm[i] = 0;
      csf[i] = 0;
      removedVoxels++;
    }
  }
  return { componentCount, removedVoxels };
}

// Priors are each tissue's share of the (non-negative) model support; support
// itself is capped at 1. `!(support >= minSupport)` also rejects NaN.
function estimateStats(volumes, intensity, biasAt, { priorPower, minSupport, minSeparation, sigmaFloor }) {
  const [gm, wm, csf] = volumes;
  const sums = new Float64Array(3);
  const weights = new Float64Array(3);

  for (let i = 0; i < intensity.length; i++) {
    const g = Math.max(0, gm[i]), w = Math.max(0, wm[i]), c = Math.max(0, csf[i]);
    const raw = g + w + c;
    const support = Math.min(raw, 1);
    if (!(support >= minSupport) || !Number.isFinite(intensity[i])) continue;
    const value = intensity[i] - biasAt(i);
    // T1 ordering: CSF, GM, WM
    const weightCsf = support * Math.pow(c / raw, priorPower);
    const weightGm = support * Math.pow(g / raw, priorPower);
    const weightWm = support * Math.pow(w / raw, priorPower);
    sums[0] += weightCsf * value; weights[0] += weightCsf;
    sums[1] += weightGm * value; weights[1] += weightGm;
    sums[2] += weightWm * value; weights[2] += weightWm;
  }

  if (weights.some((weight) => weight < 100)) {
    return { applied: false, reason: 'too few high-confidence tissue voxels' };
  }

  const means = Array.from(sums, (sum, tissue) => sum / weights[tissue]);
  if (!(means[0] + minSeparation < means[1] && means[1] + minSeparation < means[2])) {
    return {
      applied: false,
      reason: `implausible T1 tissue ordering (${means.map((v) => v.toFixed(3)).join(', ')})`,
    };
  }

  const squareSums = new Float64Array(3);
  for (let i = 0; i < intensity.length; i++) {
    const g = Math.max(0, gm[i]), w = Math.max(0, wm[i]), c = Math.max(0, csf[i]);
    const raw = g + w + c;
    const support = Math.min(raw, 1);
    if (!(support >= minSupport) || !Number.isFinite(intensity[i])) continue;
    const value = intensity[i] - biasAt(i);
    const dCsf = value - means[0], dGm = value - means[1], dWm = value - means[2];
    squareSums[0] += support * Math.pow(c / raw, priorPower) * dCsf * dCsf;
    squareSums[1] += support * Math.pow(g / raw, priorPower) * dGm * dGm;
    squareSums[2] += support * Math.pow(w / raw, priorPower) * dWm * dWm;
  }

  const sigmas = Array.from(squareSums, (sum, tissue) =>
    Math.sqrt(Math.max(sigmaFloor * sigmaFloor, sum / weights[tissue]))
  );
  return { applied: true, means, sigmas };
}

function makeCoarseBiasField(volumes, intensity, shape, means, { minSupport, block, smoothingPasses }) {
  const [gm, wm, csf] = volumes;
  const [nx, ny, nz] = shape;
  const gx = Math.ceil(nx / block);
  const gy = Math.ceil(ny / block);
  const gz = Math.ceil(nz / block);
  const count = gx * gy * gz;
  const sums = new Float64Array(count);
  const weights = new Float64Array(count);
  const [muCsf, muGm, muWm] = means;

  const plane = nx * ny;
  for (let z = 0; z < nz; z++) {
    const bz = Math.floor(z / block);
    for (let y = 0; y < ny; y++) {
      const by = Math.floor(y / block);
      let voxel = z * plane + y * nx;
      const base = (bz * gy + by) * gx;
      for (let x = 0; x < nx; x++, voxel++) {
        const g = Math.max(0, gm[voxel]), w = Math.max(0, wm[voxel]), c = Math.max(0, csf[voxel]);
        const raw = g + w + c;
        const support = Math.min(raw, 1);
        if (!(support >= minSupport) || !Number.isFinite(intensity[voxel])) continue;
        const pg = g / raw, pw = w / raw, pc = c / raw;
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
  const axisTable = (voxels, cells) => {
    const low = new Int32Array(voxels), high = new Int32Array(voxels), t = new Float32Array(voxels);
    for (let v = 0; v < voxels; v++) {
      const grid = clamp((v + 0.5) / block - 0.5, 0, cells - 1);
      low[v] = Math.floor(grid);
      high[v] = Math.min(low[v] + 1, cells - 1);
      t[v] = grid - low[v];
    }
    return { low, high, t };
  };
  const ax = axisTable(nx, gx), ay = axisTable(ny, gy), az = axisTable(nz, gz);
  return (index) => {
    const z = Math.floor(index / plane);
    const remainder = index - z * plane;
    const y = Math.floor(remainder / nx);
    const x = remainder - y * nx;
    const x0 = ax.low[x], x1 = ax.high[x], tx = ax.t[x];
    const row00 = (az.low[z] * gy + ay.low[y]) * gx, row01 = (az.low[z] * gy + ay.high[y]) * gx;
    const row10 = (az.high[z] * gy + ay.low[y]) * gx, row11 = (az.high[z] * gy + ay.high[y]) * gx;
    const z0y0 = values[row00 + x0] + (values[row00 + x1] - values[row00 + x0]) * tx;
    const z0y1 = values[row01 + x0] + (values[row01 + x1] - values[row01 + x0]) * tx;
    const z1y0 = values[row10 + x0] + (values[row10 + x1] - values[row10 + x0]) * tx;
    const z1y1 = values[row11 + x0] + (values[row11 + x1] - values[row11 + x0]) * tx;
    const ty = ay.t[y];
    const z0 = z0y0 + (z0y1 - z0y0) * ty, z1 = z1y0 + (z1y1 - z1y0) * ty;
    return z0 + (z1 - z0) * az.t[z];
  };
}

function addNeighbourPrior([gm, wm, csf], j, sums) {
  const g = Math.max(0, gm[j]), w = Math.max(0, wm[j]), c = Math.max(0, csf[j]);
  const raw = g + w + c;
  if (!(raw > EPSILON)) return;
  sums[0] += g / raw;
  sums[1] += w / raw;
  sums[2] += c / raw;
  sums[3]++;
}

function gaussianLogLikelihood(value, mean, sigma) {
  const z = (value - mean) / sigma;
  return -0.5 * z * z - Math.log(sigma);
}

/**
 * Return CAT-lite [GM, WM, CSF] fractions (`tissues`) in native voxel order.
 * `volumes` must be [GM, WM, CSF] model probabilities in the same orientation
 * as `intensity`; they are modified in place by support cleanup.
 */
export function applyCatLitePartialVolume(volumes, intensity, shape, options = {}) {
  const {
    catLiteMinSupport: minSupport = 0.03,
    catLitePurePriorPower: priorPower = 3,
    catLiteMinMeanSeparation: minSeparation = 0.035,
    catLiteSigmaFloor: sigmaFloor = 0.025,
    catLiteBiasBlockSize: block = 16,
    catLiteBiasSmoothPasses: smoothingPasses = 3,
    catLitePriorStrength: priorStrength = 0.8,
    catLiteIntensityStrength: intensityStrength = 0.75,
    catLiteMixelPrior: mixelPrior = 0.35,
    catLiteCsfWmMixelPrior: csfWmMixelPrior = 6,
    catLiteSpatialWeight: spatialWeight = 0.25,
  } = options;
  const statOptions = { priorPower, minSupport, minSeparation, sigmaFloor };
  const [nx, ny, nz] = shape;
  const length = intensity.length;
  const supportCleanup = retainPrincipalSupport(volumes, shape, minSupport);
  const initialStats = estimateStats(volumes, intensity, () => 0, statOptions);
  if (!initialStats.applied) return { tissues: volumes, stats: initialStats };

  const biasAt = makeCoarseBiasField(
    volumes, intensity, shape, initialStats.means, { minSupport, block, smoothingPasses }
  );
  const tissueStats = estimateStats(volumes, intensity, biasAt, statOptions);
  if (!tissueStats.applied) return { tissues: volumes, stats: tissueStats };

  const [muCsf, muGm, muWm] = tissueStats.means;
  const [sigmaCsf, sigmaGm, sigmaWm] = tissueStats.sigmas;
  const [gm, wm, csf] = volumes;
  const gmOutput = new Float32Array(length);
  const wmOutput = new Float32Array(length);
  const csfOutput = new Float32Array(length);
  const plane = nx * ny;

  const mixGcMean = 0.5 * (muCsf + muGm);
  const mixGwMean = 0.5 * (muGm + muWm);
  const mixCwMean = 0.5 * (muCsf + muWm);
  const mixGcSigma = Math.sqrt((muGm - muCsf) ** 2 / 12 + 0.5 * (sigmaCsf ** 2 + sigmaGm ** 2));
  const mixGwSigma = Math.sqrt((muWm - muGm) ** 2 / 12 + 0.5 * (sigmaGm ** 2 + sigmaWm ** 2));
  const mixCwSigma = Math.sqrt((muWm - muCsf) ** 2 / 12 + 0.5 * (sigmaCsf ** 2 + sigmaWm ** 2));

  // [sumG, sumW, sumC, neighbours] of the 6-neighbour priors, reused for every voxel.
  const neighbourSums = new Float64Array(4);

  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      let index = z * plane + y * nx;
      for (let x = 0; x < nx; x++, index++) {
        const g = Math.max(0, gm[index]), w = Math.max(0, wm[index]), c = Math.max(0, csf[index]);
        const raw = g + w + c;
        const support = Math.min(raw, 1);
        if (!(support >= minSupport) || !Number.isFinite(intensity[index])) continue;
        let pg = g / raw, pw = w / raw, pc = c / raw;
        if (spatialWeight > 0) {
          neighbourSums.fill(0);
          if (x > 0) addNeighbourPrior(volumes, index - 1, neighbourSums);
          if (x + 1 < nx) addNeighbourPrior(volumes, index + 1, neighbourSums);
          if (y > 0) addNeighbourPrior(volumes, index - nx, neighbourSums);
          if (y + 1 < ny) addNeighbourPrior(volumes, index + nx, neighbourSums);
          if (z > 0) addNeighbourPrior(volumes, index - plane, neighbourSums);
          if (z + 1 < nz) addNeighbourPrior(volumes, index + plane, neighbourSums);
          const neighbours = neighbourSums[3];
          if (neighbours) {
            const keep = 1 - spatialWeight;
            pg = keep * pg + spatialWeight * neighbourSums[0] / neighbours;
            pw = keep * pw + spatialWeight * neighbourSums[1] / neighbours;
            pc = keep * pc + spatialWeight * neighbourSums[2] / neighbours;
          }
        }
        const value = intensity[index] - biasAt(index);

        const logCsf = priorStrength * Math.log(pc + EPSILON)
          + intensityStrength * gaussianLogLikelihood(value, muCsf, sigmaCsf);
        const logGm = priorStrength * Math.log(pg + EPSILON)
          + intensityStrength * gaussianLogLikelihood(value, muGm, sigmaGm);
        const logWm = priorStrength * Math.log(pw + EPSILON)
          + intensityStrength * gaussianLogLikelihood(value, muWm, sigmaWm);
        const logGc = priorStrength * Math.log(mixelPrior * 2 * Math.sqrt(pc * pg) + EPSILON)
          + intensityStrength * gaussianLogLikelihood(value, mixGcMean, mixGcSigma);
        const logGw = priorStrength * Math.log(mixelPrior * 2 * Math.sqrt(pg * pw) + EPSILON)
          + intensityStrength * gaussianLogLikelihood(value, mixGwMean, mixGwSigma);
        // CAT's five-class model has no explicit CSF-WM mixel, but the two
        // tissues do meet at the ventricles. Without this zero-GM nuisance
        // hypothesis, uncertainty at that interface can only be explained by
        // the two GM-containing mixel classes and appears as a spurious rim.
        const logCw = priorStrength * Math.log(csfWmMixelPrior * 2 * Math.sqrt(pc * pw) * (1 - pg) ** 2 + EPSILON)
          + intensityStrength * gaussianLogLikelihood(value, mixCwMean, mixCwSigma);
        const maximum = Math.max(logCsf, logGm, logWm, logGc, logGw, logCw);
        const pureCsf = Math.exp(logCsf - maximum);
        const pureGm = Math.exp(logGm - maximum);
        const pureWm = Math.exp(logWm - maximum);
        const mixGc = Math.exp(logGc - maximum);
        const mixGw = Math.exp(logGw - maximum);
        const mixCw = Math.exp(logCw - maximum);
        const total = pureCsf + pureGm + pureWm + mixGc + mixGw + mixCw;

        // Fractions within each mixed class follow the observed T1 position.
        // Class membership itself remains fully probabilistic and continuous.
        const gmInGc = clamp((value - muCsf) / (muGm - muCsf), 0, 1);
        const gmInGw = clamp((muWm - value) / (muWm - muGm), 0, 1);
        const wmInCw = clamp((value - muCsf) / (muWm - muCsf), 0, 1);
        const gmFraction = (pureGm + mixGc * gmInGc + mixGw * gmInGw) / total;
        const wmFraction = (pureWm + mixGw * (1 - gmInGw) + mixCw * wmInCw) / total;
        const csfFraction = (pureCsf + mixGc * (1 - gmInGc) + mixCw * (1 - wmInCw)) / total;
        // When CSF and WM both dominate the local priors, their direct contact
        // must not leave a one-voxel GM contour. Do not apply this gate where
        // GM is at least as plausible as either neighbour: that is the normal
        // CSF-GM-WM cortical partial-volume configuration.
        const csfWmMinimum = Math.min(pc, pw);
        const csfWmDominance = clamp((csfWmMinimum - pg) / (csfWmMinimum + EPSILON), 0, 1);
        const csfWmContact = clamp(4 * pc * pw, 0, 1);
        const topologyGate = (1 - csfWmContact * csfWmDominance) ** 2;
        gmOutput[index] = clamp(gmFraction * support * topologyGate, 0, 1);
        // GM removed by the gate goes to WM/CSF so the three maps still sum to support.
        const restScale = (1 - gmFraction * topologyGate) / Math.max(wmFraction + csfFraction, EPSILON);
        wmOutput[index] = clamp(wmFraction * restScale * support, 0, 1);
        csfOutput[index] = clamp(csfFraction * restScale * support, 0, 1);
      }
    }
  }

  return {
    tissues: [gmOutput, wmOutput, csfOutput],
    stats: {
      applied: true,
      tissueMeans: { csf: muCsf, gray: muGm, white: muWm },
      tissueSigmas: { csf: sigmaCsf, gray: sigmaGm, white: sigmaWm },
      supportCleanup,
    },
  };
}

const formatTissues = ({ csf, gray, white }) =>
  `CSF=${csf.toFixed(3)} GM=${gray.toFixed(3)} WM=${white.toFixed(3)}`;

/**
 * Backend-shared CAT-lite tail. `priors` are the runner's [GM, WM, CSF] maps in
 * model order; `toNative(prior, tissueIndex)` returns one in native voxel order.
 * Fills `statData` and returns the [GM, WM, CSF] maps to display.
 */
export async function runCatLite(priors, intensity, modelEntry, statData, toNative) {
  const native = [];
  for (let tissue = 0; tissue < 3; tissue++) {
    native.push(await toNative(priors[tissue], tissue));
    priors[tissue] = null; // release each model-order map before the next readback
  }
  const { tissues, stats } = applyCatLitePartialVolume(native, intensity, CONFORMED_SHAPE, modelEntry);
  statData.Output_Type = 'Continuous tissue probability';
  statData.Tissue = 'GM/WM/CSF';
  statData.Softmax_Temperature = modelEntry.softmaxTemperature ?? 1;
  if (stats.applied) {
    statData.Partial_Volume = 'CAT-lite mixed-class PVE';
    statData.CAT_Lite_Tissue_Means = formatTissues(stats.tissueMeans);
    statData.CAT_Lite_Tissue_Sigmas = formatTissues(stats.tissueSigmas);
    const { componentCount, removedVoxels } = stats.supportCleanup;
    console.log(
      `[CAT-lite] means ${statData.CAT_Lite_Tissue_Means}; sigmas ${statData.CAT_Lite_Tissue_Sigmas}; ` +
      `removed ${removedVoxels} voxels outside the largest of ${componentCount} support components`
    );
  } else {
    statData.Partial_Volume = `Skipped: ${stats.reason}`;
    console.warn(`[CAT-lite] skipped: ${stats.reason}`);
  }
  return tissues;
}
