// webgl2_runners/descriptors.js
// ---------------------------------------------------------------------------
// Per-model residue: the two things the safetensors file cannot tell us.
//
//   dilations  lives in the tfjs model.json, not in the weights.
//   activation every export declares "gelu" or nothing; the family-A models
//              actually compute relu/elu, and brainchopC records that its two
//              models both declare "gelu" while computing DIFFERENT,
//              non-interchangeable functions. There is no safe default here, so
//              deriveDescriptor() throws rather than guessing.
//
// Everything else -- channel count, plane count, class count, whether there is a
// GroupNorm, whether it has an affine, whether the convs carry a bias, whether
// the classifier has a bias -- is read off the weights, so a new model needs
// only an entry here.
//
// THREE TOPOLOGY FAMILIES, verified by dumping every model.json in
// public/models/ rather than assumed:
//
//   A  plain MeshNet   Conv3D(bias) -> relu/elu, NO norm anywhere
//   B  gn, no affine   conv_gn(no bias) -> gelu
//   C  gn + affine     conv_gn -> affine 1x1 -> gelu
//
// brainchopC only ever built B and C (its mindgrab and model16chan18cls). Family
// A is new here, and is strictly simpler: no moments passes, no norm pass, the
// bias and activation fold into the convolution's output write.
// ---------------------------------------------------------------------------

/** The gridding-free schedule shared by every 13-conv deep MeshNet (RF = 255). */
const DEEP13 = [1, 3, 5, 7, 13, 19, 31, 19, 13, 7, 5, 3, 1];

/** mindgrab: 25 convs, the 16/8/4/2/1 ladder repeated five times. */
const MINDGRAB25 = [
  16, 8, 4, 2, 1, 16, 8, 4, 2, 1, 16, 8, 4, 2, 1, 16, 8, 4, 2, 1, 16, 8, 4, 2, 1,
];

export const DESCRIPTORS = {
  // --- family C: gn + affine, gelu ---------------------------------------
  model16chan18cls: {
    dilations: DEEP13,
    activation: 'gelu_tanh',
    fullVolume: true,
  },
  model6chan3cls: {
    dilations: DEEP13,
    activation: 'gelu_tanh',
    fullVolume: true,
  },
  model24chan104cls_synth: {
    dilations: DEEP13,
    activation: 'gelu_tanh',
    // THE 104 CLASSES COST ALMOST NOTHING HERE, and it is worth being explicit
    // because the model's name invites the opposite assumption. The classify
    // shader loops k over NCLASS keeping a running (bestv, best) pair and writes
    // ONE BYTE per voxel into the RGBA8 label texture -- a [256^3, 104] logits
    // tensor is never instantiated, exactly as in the WebGPU runner. 104 <= 256
    // so it fits the label byte. The only cost is compute: 104*24 = 2496 MACs
    // per voxel, which scales brainchopC's 18-class classify pass to ~0.36 s.
    //
    // What actually costs is the 24 CHANNELS: P=6 planes x 2 sets x 128 MiB =
    // 1.5 GiB of activations, against 1.0 GiB for the 16-channel models. That is
    // 1.5x, not a different order, so it is measured rather than assumed --
    // probeWebgl2 now allocates the real working set and the runner checks
    // isContextLost, so a device that cannot hold it refuses cleanly and the
    // tfjs channel-list path takes over.
    //
    // No VOX=2 at P=6: it would need 12 draw buffers and no browser offers more
    // than 8, so this model permanently forfeits that 1.41x.
    fullVolume: true,
  },
  model32chan18cls: {
    dilations: DEEP13,
    activation: 'gelu_tanh',
    // 32 ch -> P=8 -> 2.0 GiB at 256^3, and P=8 exactly consumes the 8 draw
    // buffers an M1 reports (SwiftShader and some Mesa stacks report 6, where
    // this model cannot run at all). Left cropped for now purely to prove the
    // 24-channel case first -- once that holds on real hardware this is the same
    // one-word change, and the probe already answers the memory question.
    fullVolume: false,
  },

  // --- family B: gn, no affine, gelu -------------------------------------
  mindgrab: {
    dilations: MINDGRAB25,
    activation: 'gelu_tanh',
    fullVolume: true,
  },

  // --- family A: plain MeshNet, conv+bias -> relu/elu, no norm ------------
  // Shared by three menu entries each (ids 1/10/12 and 11/13) that differ only
  // in post-processing, so one descriptor serves all of them.
  model5_gw_ae: {
    dilations: [1, 2, 4, 8, 16, 8, 4, 2, 1],
    activation: 'relu',
    fullVolume: true,
  },
  model11_gw_ae: {
    dilations: [1, 2, 4, 8, 4, 2, 2, 1],
    activation: 'relu',
    // No safetensors export exists for this one, so it stays on the tfjs path
    // until one is generated. Listed so the omission is visible rather than
    // looking like an oversight.
    noSafetensors: true,
    fullVolume: true,
  },
  model30chan18cls: {
    dilations: [1, 2, 4, 8, 16, 8, 4, 2, 1],
    activation: 'elu',
    fullVolume: true,
  },
  model30chan50cls: {
    dilations: [1, 2, 4, 8, 16, 8, 4, 2, 1],
    activation: 'elu',
    fullVolume: true,
  },
};

/**
 * Map a brainchop-test modelEntry to a runner descriptor name.
 *
 * Keyed off the tfjs `path`, because that is the field that actually identifies
 * the weights: ids 1, 10 and 12 all point at model5_gw_ae and must all resolve
 * to the same descriptor, while `webgpu_runner` differs between them.
 */
export function descriptorNameFor(modelEntry) {
  const m = String(modelEntry.path || '').match(/\/models\/([^/]+)\//);
  return m ? m[1] : null;
}

export function descriptorFor(modelEntry) {
  const name = descriptorNameFor(modelEntry);
  if (!name) return null;
  const d = DESCRIPTORS[name];
  if (!d || d.noSafetensors) return null;
  return { name, ...d };
}
