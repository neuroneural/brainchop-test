import assert from 'node:assert/strict';
import { validateCategoricalSegmentation } from '../segmentation-quality.js';

assert.throws(() => validateCategoricalSegmentation(new Int32Array(100)), /no foreground/);
assert.throws(() => validateCategoricalSegmentation(new Int32Array(100).fill(2)), /fills 100\.0%/);
assert.throws(() => validateCategoricalSegmentation(Int32Array.of(0, -1)), /invalid label/);

const plausible = new Int32Array(100);
plausible.fill(1, 20, 50);
plausible.fill(2, 50, 70);
assert.doesNotThrow(() => validateCategoricalSegmentation(plausible));
