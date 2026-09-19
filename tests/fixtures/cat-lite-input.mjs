// Deterministic soft priors with a bias field, background and detached support.
export function makeInput(shape = [64, 61, 58], seed = 123) {
  const [nx, ny, nz] = shape;
  const length = nx * ny * nz;
  const volumes = Array.from({ length: 3 }, () => new Float32Array(length));
  const intensity = new Float32Array(length);
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 2 ** 32;
  };
  for (let z = 0, i = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++, i++) {
        const radius = ((x / nx - 0.5) / 0.43) ** 2
          + ((y / ny - 0.5) / 0.42) ** 2 + ((z / nz - 0.5) / 0.4) ** 2;
        const detached = x < nx * 0.07 && y < ny * 0.07 && z < nz * 0.07;
        const support = radius < 1 || detached ? 0.1 + 1.1 * random() : 0.02 * random();
        const tissue = Math.min(2, Math.floor(x / nx * 3));
        const priors = [0.01 + random() * 0.06, 0.01 + random() * 0.06, 0.01 + random() * 0.06];
        priors[tissue] += 0.7 + random() * 0.2;
        const sum = priors[0] + priors[1] + priors[2];
        for (let t = 0; t < 3; t++) volumes[t][i] = support * priors[t] / sum;
        intensity[i] = (0.5 * priors[0] + 0.8 * priors[1] + 0.2 * priors[2]) / sum
          + 0.08 * (y / ny - 0.5) + 0.03 * (random() - 0.5);
      }
    }
  }
  return { volumes, intensity, shape };
}
