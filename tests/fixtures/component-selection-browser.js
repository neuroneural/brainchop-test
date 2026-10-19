import * as tf from '@tensorflow/tfjs'
import { BWLabeler } from '../../bwlabels.js'
import { QuadraticBWLabeler } from './component-selection-reference.js'
import { quantileNormalizeVolumeData, processSegmentationVolume } from '../../tensor-utils.js'
import { inferenceModelsList } from '../../brainchop-parameters.js'
import { setupNet } from '../../webgpu_native/meshnet_gpu.js'
import { descriptorFor } from '../../webgl2_runners/descriptors.js'
import { parseSafetensors, describeSafetensors, packWeights, deriveDescriptor } from '../../webgl2_runners/weights.js'
import { runMeshNetGL, probeWebgl2 } from '../../webgl2_runners/meshnet_gl.js'
import generated from '../../webgpu_runners/dkatlas24_synth_runner.js'

const shape = [256, 256, 256], length = 256 ** 3
const family = c => c >= 1 && c <= 34 ? 1 : c >= 35 && c <= 68 ? 2 : 0
const methods = ['largest_original_cluster_labels', 'filter_clusters']
const original = methods.map(name => BWLabeler.prototype[name])
const useReference = reference => methods.forEach((name, i) => {
  BWLabeler.prototype[name] = reference ? QuadraticBWLabeler.prototype[name] : original[i]
})
function exact(a, b) {
  if (a.length !== b.length) throw Error('Output length changed')
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) throw Error(`Output changed at voxel ${i}: ${a[i]} != ${b[i]}`)
}
async function sha(data) {
  return [...new Uint8Array(await crypto.subtle.digest('SHA-256', data))].map(v => v.toString(16).padStart(2, '0')).join('')
}

export async function benchmark({ id, backend, pairs = 9 }) {
  const entry = inferenceModelsList.find(e => e.id === id)
  if (![5, 14].includes(id) || !entry.enableTranspose || !entry.enableQuantileNorm) throw Error('Expected a 104-class model')
  const nii = await (await fetch('/input.nii')).arrayBuffer(), header = new DataView(nii)
  if (header.getInt16(70, true) !== 2 || [42, 44, 46].some(i => header.getInt16(i, true) !== 256)) throw Error('Expected uint8 256³ sample')
  await tf.setBackend('webgl'); await tf.ready()
  tf.env().set('WEBGL_DELETE_TEXTURE_THRESHOLD', 0)
  const tensor = tf.tensor(new Uint8Array(nii, header.getFloat32(108, true), length), shape, 'float32')
  let seed = 123, normalized
  const random = Math.random
  Math.random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32)
  try { normalized = await quantileNormalizeVolumeData(tensor) }
  finally { Math.random = random; tensor.dispose() }
  const transposed = normalized.transpose(), input = await transposed.data()
  normalized.dispose(); transposed.dispose()
  tf.engine().reset() // Release preprocessing textures before full-volume inference.
  const weights = new Uint8Array(await (await fetch(entry.webgpu_safetensor)).arrayBuffer())
  let raw, adapterInfo, inferenceMs
  if (backend === 'webgl2') {
    const graph = descriptorFor(entry)
    const desc = describeSafetensors(parseSafetensors(weights.buffer))
    const d = deriveDescriptor(desc, { nx: 256, ny: 256, nz: 256, activation: graph.activation, dilations: graph.dilations })
    const probe = probeWebgl2(d, shape)
    if (!probe.supported || /swiftshader|llvmpipe/i.test(probe.renderer)) throw Error(JSON.stringify(probe))
    adapterInfo = probe.renderer
    const packed = packWeights(desc, d), start = performance.now()
    raw = runMeshNetGL({ descriptor: d, packed: packed.data, offsets: packed.offsets, input, vox2: true }).labels
    inferenceMs = performance.now() - start
  } else {
    const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' })
    if (!adapter || adapter.isFallbackAdapter || adapter.info.isFallbackAdapter || /swiftshader|llvmpipe/i.test(JSON.stringify(adapter.info))) throw Error('Hardware WebGPU required')
    adapterInfo = { vendor: adapter.info.vendor, architecture: adapter.info.architecture, description: adapter.info.description }
    const requiredLimits = {}
    for (const key of ['maxBufferSize', 'maxStorageBufferBindingSize', 'maxComputeInvocationsPerWorkgroup',
      'maxComputeWorkgroupSizeX', 'maxComputeWorkgroupSizeY', 'maxComputeWorkgroupSizeZ',
      'maxComputeWorkgroupStorageSize', 'maxStorageBuffersPerShaderStage', 'maxComputeWorkgroupsPerDimension']) requiredLimits[key] = adapter.limits[key]
    const device = await adapter.requestDevice({ requiredLimits, requiredFeatures: ['shader-f16'] })
    device.pushErrorScope('validation'); device.pushErrorScope('out-of-memory')
    try {
      const execute = backend === 'generated' ? await generated.setupNet(device, weights) : await setupNet(device, weights, null, entry)
      const start = performance.now()
      raw = (await execute(input))[0]
      await device.queue.onSubmittedWorkDone()
      inferenceMs = performance.now() - start
      const oom = await device.popErrorScope(), validation = await device.popErrorScope()
      if (oom || validation) throw Error((oom || validation).message)
    } finally { device.destroy() }
  }
  // Reverse the input transpose, just as the app does before CPU cleanup.
  const labels = new Int32Array(length)
  for (let z = 0; z < 256; z++) for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) {
    const v = raw[z + y * 256 + x * 65536]
    if (!Number.isInteger(v) || v < 0 || v >= 104) throw Error(`Invalid inference label: ${v}`)
    labels[x + y * 256 + z * 65536] = v
  }
  const bw = new BWLabeler(), t = performance.now()
  const [components, ls] = bw.bwlabel(labels, shape, 6)
  const labelingMs = performance.now() - t
  const times = { selectorWithRefill: { before: [], after: [] }, fullPostprocess: { before: [], after: [] } }
  let outputSha
  try {
    // One discarded warm-up pair, then alternating paired measurements.
    for (let pair = -1; pair < pairs; pair++) {
      for (const scope of Object.keys(times)) {
        const outputs = {}
        for (const name of pair % 2 ? ['after', 'before'] : ['before', 'after']) {
          useReference(name === 'before')
          const data = scope === 'fullPostprocess' ? labels.slice() : labels // clone outside timed region
          const start = performance.now()
          outputs[name] = scope === 'fullPostprocess'
            ? await processSegmentationVolume({ shape, data: async () => data }, null, entry, { isPostProcessEnable: true })
            : bw.largest_original_cluster_labels(data, components, ls, shape, true, family)[1]
          const ms = performance.now() - start
          if (pair >= 0) times[scope][name].push(ms)
        }
        exact(outputs.before, outputs.after)
        if (scope === 'fullPostprocess' && pair === 0) outputSha = await sha(outputs.after)
      }
      console.log(`model ${id} ${backend}: pair ${pair + 1}/${pairs} exact`)
    }
  } finally { useReference(false) }
  return { id, backend, adapter: adapterInfo, components, labelingMs, inferenceMs, rawSha: await sha(labels), outputSha, differingVoxels: 0, times }
}

export function stress({ pairs = 9 } = {}) {
  const results = []
  for (const pattern of ['ties', 'increasing']) for (const components of [1000, 5000, 20000]) {
    // Isolated components across all 103 foreground classes. Increasing sizes
    // force the targeted selector to search past earlier, smaller components
    // instead of taking its early exit on the first equal/larger component.
    const size = i => pattern === 'ties' ? 1 : 1 + Math.floor((i - 1) / 103)
    let n = components
    for (let i = 1; i <= components; i++) n += size(i)
    const labels = new Uint32Array(n), ls = new Uint32Array(n)
    let offset = 0
    for (let i = 1; i <= components; i++) {
      labels.fill(1 + (i % 103), offset, offset + size(i))
      ls.fill(i, offset, offset + size(i))
      offset += size(i) + 1
    }
    for (const method of methods) {
      const before = new QuadraticBWLabeler(), after = new BWLabeler(), times = { before: [], after: [] }
      for (let pair = -1; pair < pairs; pair++) {
        const outputs = {}
        for (const name of pair % 2 ? ['after', 'before'] : ['before', 'after']) {
          const start = performance.now()
          outputs[name] = (name === 'before' ? before : after)[method](labels, components, ls, ...(method === 'filter_clusters' ? ['all'] : []))
          if (pair >= 0) times[name].push(performance.now() - start)
        }
        if (outputs.before[0] !== outputs.after[0]) throw Error('maxClass changed')
        exact(outputs.before[1], outputs.after[1])
      }
      results.push({ pattern, components, voxels: n, method, times, differingVoxels: 0 })
    }
  }
  return results
}
