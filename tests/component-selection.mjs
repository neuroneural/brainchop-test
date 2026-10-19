// node tests/component-selection.mjs
import assert from 'node:assert/strict'
import { BWLabeler } from '../bwlabels.js'
import { QuadraticBWLabeler } from './fixtures/component-selection-reference.js'
import { processSegmentationVolume } from '../tensor-utils.js'

const current = new BWLabeler(), reference = new QuadraticBWLabeler()
const family = c => c >= 1 && c <= 34 ? 1 : c >= 35 && c <= 68 ? 2 : 0
let comparisons = 0
const log = console.log
console.log = () => {} // Labeling/family diagnostics would obscure the assertions.
try {
  // Explicit expectations independently pin the two different component tie rules.
  const dim = [9, 2, 1], bw = Uint32Array.from([7, 7, 0, 7, 7, 0, 7, 7, 0, ...Array(9).fill(0)])
  const [cl, ls] = current.bwlabel(bw, dim, 6)
  assert.equal(cl, 3)
  assert.deepEqual([...current.largest_original_cluster_labels(bw, cl, ls)[1]].slice(0, 9), [0, 0, 0, 0, 0, 0, 7, 7, 0])
  assert.deepEqual([...current.filter_clusters(bw, cl, ls, 'all')[1]].slice(0, 9), [7, 7, 0, 0, 0, 0, 0, 0, 0])
  assert.deepEqual(current.filter_clusters(bw, cl, ls, new Set())[1], bw)
  assert.deepEqual(current.bwlabel(bw, dim, 6, true, true)[1], reference.bwlabel(bw, dim, 6, true, true)[1])

  // Suppressed A touches equally many kept B/C faces: lower class ID wins.
  // Suppressed D touches A, but must NOT acquire A's newly inherited class.
  const voteDim = [10, 2, 1]
  const vote = Uint32Array.from([2, 1, 4, 0, 1, 1, 1, 0, 4, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0])
  const [vc, vl] = current.bwlabel(vote, voteDim, 6)
  const plain = current.largest_original_cluster_labels(vote, vc, vl, voteDim, true)[1]
  assert.equal(plain[1], 2, 'boundary contact tie uses lower class')
  assert.equal(plain[2], 0, 'neighbor voting uses only originally kept components')
  assert.equal(current.largest_original_cluster_labels(vote, vc, vl, voteDim, true, c => c === 1 || c === 3 ? 1 : 0)[1][1], 3,
    'family preference can override the unrestricted tie')
  assert.equal(current.largest_original_cluster_labels(vote, vc, vl, voteDim, true, c => c === 1 ? 1 : 0)[1][1], 2,
    'family without eligible contacts falls back to unrestricted voting')

  let seed = 0x1234abcd
  const random = n => Math.floor(((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32) * n)
  for (let trial = 0; trial < 250; trial++) {
    const dims = [2 + random(10), 2 + random(9), 1 + random(7)]
    const n = dims.reduce((a, b) => a * b), classes = [0, 1, 2, 5, 21, 35, 68, 85, 103, 4000000000]
    const data = new Uint32Array(n)
    for (let i = 0; i < n; i++) data[i] = trial === 0 ? 0 : trial === 1 ? 103 : classes[random(classes.length)]
    const original = data.slice()
    for (const conn of [6, 18, 26]) {
      const [count, labels] = current.bwlabel(data, dims, conn)
      const originalLabels = labels.slice()
      for (const refill of [false, true]) for (const gate of [null, family]) {
        const args = [data, count, labels]
        assert.deepEqual(current.largest_original_cluster_labels(...args, dims, refill, gate),
          reference.largest_original_cluster_labels(...args, dims, refill, gate), `largest trial=${trial} conn=${conn}`)
        comparisons++
        for (const targets of ['all', new Set(), new Set([1, 5, 85, 4000000000])]) {
          assert.deepEqual(current.filter_clusters(...args, targets, dims, refill, gate),
            reference.filter_clusters(...args, targets, dims, refill, gate), `targeted trial=${trial} conn=${conn}`)
          comparisons++
        }
      }
      assert.deepEqual(labels, originalLabels, 'component map is immutable')
    }
    assert.deepEqual(data, original, 'class volume is immutable')
  }

  // Integration through the same postprocessor called by all inference backends.
  const dims = [12, 10, 4], data = Int32Array.from({ length: 480 }, () => random(6) ? 1 + random(103) : 0)
  const methods = ['largest_original_cluster_labels', 'filter_clusters']
  const saved = methods.map(name => BWLabeler.prototype[name])
  for (const id of [1, 3, 4, 5, 7, 8, 9, 14, 15, 21]) for (const refill of [false, true]) {
    const run = () => processSegmentationVolume({ shape: dims, data: async () => data.slice() }, null,
      { id, type: 'Atlas' }, { isPostProcessEnable: true, fillSuppressedWithNeighborLabel: refill })
    const actual = await run()
    let expected
    try {
      methods.forEach(name => { BWLabeler.prototype[name] = QuadraticBWLabeler.prototype[name] })
      expected = await run()
    } finally { methods.forEach((name, i) => { BWLabeler.prototype[name] = saved[i] }) }
    assert.deepEqual(actual, expected, `postprocessor model=${id} refill=${refill}`)
    comparisons++
  }
} finally { console.log = log }
console.log(`PASS: ${comparisons} exact reference comparisons; explicit component/contact ties, immutable neighbor votes, family preference/fallback and input immutability`)
