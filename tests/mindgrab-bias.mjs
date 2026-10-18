// Regression check: the regular MindGrab entry restores its trained final bias
// in the shared native GPU weight packer and the generated WebGPU head.
// Run with: node tests/mindgrab-bias.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { inferenceModelsList } from '../brainchop-parameters.js';
import { parseSafetensors, describeSafetensors, applyClassifierBias, deriveDescriptor, packWeights } from '../webgl2_runners/weights.js';
import { descriptorFor } from '../webgl2_runners/descriptors.js';
import mindgrab from '../webgpu_runners/mindgrab_runner.js';

const model = inferenceModelsList.find(entry => entry.id === 2);
const file = name => new URL(`../public/models/mindgrab/${name}`, import.meta.url);
const topology = JSON.parse(readFileSync(file('model.json'), 'utf8'));
const payload = readFileSync(file('model.bin'));
let offset = 0, expected;
for (const tensor of topology.weightsManifest.flatMap(group => group.weights)) {
  if (tensor.name === 'output/bias') {
    expected = Array.from({ length: tensor.shape[0] }, (_, i) => payload.readFloatLE(offset + i * 4));
  }
  offset += tensor.shape.reduce((a, b) => a * b, 1) * 4;
}
assert.deepEqual(model.classifierBias, expected);
assert.equal(model.webgpuTTArunner, false, 'Do not select the stale biasless TTA export');

const bytes = new Uint8Array(readFileSync(file('model.safetensors')));
const tensors = parseSafetensors(bytes.buffer);
const desc = describeSafetensors(tensors);
assert.equal(applyClassifierBias(desc, undefined), desc);
const convWeights = desc.convs.map(conv => conv.w);
applyClassifierBias(desc, model.classifierBias);
applyClassifierBias(desc, model.classifierBias); // replace, never add twice
assert.deepEqual(Array.from(desc.classifier.bias), expected);
assert.deepEqual(desc.convs.map(conv => conv.w), convWeights);
const entry = descriptorFor(model);
const descriptor = deriveDescriptor(desc, { activation: entry.activation, dilations: entry.dilations });
assert.equal(descriptor.classifierBias, true);
const packed = packWeights(desc, descriptor);
assert.deepEqual(Array.from(packed.data.slice(packed.offsets.clsBiasFloat, packed.offsets.clsBiasFloat + 2)), expected);
assert.throws(() => applyClassifierBias(desc, [0]), /one finite value per exported class/);
assert.throws(() => applyClassifierBias(desc, [0, NaN]), /one finite value per exported class/);

// Capture the actual compiled shaders without allocating full MRI buffers.
globalThis.GPUBufferUsage = { STORAGE: 1, COPY_SRC: 2, COPY_DST: 4, UNIFORM: 8, MAP_WRITE: 16, MAP_READ: 32 };
globalThis.GPUShaderStage = { COMPUTE: 1 };
async function shaders(modelEntry) {
  const codes = [];
  const device = {
    createBuffer: ({ size }) => ({ size, getMappedRange: () => new ArrayBuffer(size), unmap() {} }),
    createBindGroupLayout: value => value,
    createPipelineLayout: value => value,
    createShaderModule: value => value,
    createComputePipelineAsync: async pipeline => { codes.push(pipeline.compute.module.code); return pipeline; },
  };
  await mindgrab.setupNet(device, bytes, () => {}, modelEntry);
  return codes;
}
const original = await shaders({}), corrected = await shaders(model);
const changed = corrected.flatMap((code, i) => code === original[i] ? [] : [i]);
assert.equal(changed.length, 1, 'Only the final classifier shader may change');
for (const bias of expected) {
  assert.equal(corrected[changed[0]].split(` + ${bias}f`).length - 1, 16);
}
console.log('MindGrab: trained checkpoint bias restored in native GPU packing and generated WebGPU classifier; backbone unchanged.');
