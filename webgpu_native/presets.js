// webgpu_native/presets.js
// ---------------------------------------------------------------------------
// Launch shape per GPU vendor: `localX` threads per workgroup x `vox` voxels per
// thread in the convolution. Only the work split changes; the arithmetic per
// voxel is identical (a different workgroup size reorders the GroupNorm sums,
// so a few hundred of 16.7M labels can move).
//
// Measured with brainchopC's sweep (scripts/sweep_webgpu_presets.sh), nine
// shapes, mindgrab / model16chan18cls / mindmap, GPU time per 256^3 inference:
//   AMD Radeon 8060S (RDNA 3.5): 256x1 best for all three, 24-27% under 64x2
//   Apple M3 Pro:                 64x2 (= 128x2) best; x1 shapes 4-10% slower
// Unmeasured vendors keep brainchopC's default, 64x2, which was chosen on
// Apple and NVIDIA hardware.
//
// Override for testing: ?wgPreset=128x2 in the page URL.
// ---------------------------------------------------------------------------

const PRESETS = {
  amd: { localX: 256, vox: 1 },
  apple: { localX: 64, vox: 2 },
  default: { localX: 64, vox: 2 },
};

function urlOverride() {
  try {
    const v = new URLSearchParams(globalThis.location?.search || '').get('wgPreset');
    const m = v && /^(\d+)x([124])$/.exec(v);
    return m ? { localX: Number(m[1]), vox: Number(m[2]), source: 'url' } : null;
  } catch { return null; }
}

/**
 * Pick the launch shape for this device and model, clamped to what the device
 * allows. Falls back to the default shape when the vendor preset does not fit.
 *
 * momLX, the GroupNorm moments workgroup, is chosen separately: its scratch is
 * momLX * cs * 8 bytes of workgroup memory and it must cover every channel.
 */
export function choosePreset(device, d) {
  const vendor = String(device.adapterInfo?.vendor || '').toLowerCase();
  const L = device.limits;
  const fits = (p) => p.localX <= L.maxComputeInvocationsPerWorkgroup &&
    p.localX <= L.maxComputeWorkgroupSizeX && d.nx % (p.localX * p.vox) === 0;

  let p = urlOverride() || { ...(PRESETS[vendor] || PRESETS.default), source: vendor || 'default' };
  if (!fits(p)) {
    console.warn(`[WebGPU-native] preset ${p.localX}x${p.vox} does not fit this device; using the default`);
    p = { ...PRESETS.default, source: 'fallback' };
  }

  let momLX = 0;
  for (const m of [256, 128, 64, 32]) {
    if (m <= p.localX && m >= d.cs && d.nx % m === 0 &&
        m <= L.maxComputeInvocationsPerWorkgroup &&
        m * d.cs * 8 <= L.maxComputeWorkgroupStorageSize) { momLX = m; break; }
  }
  if (!momLX) throw new Error(`webgpu-native: no moments workgroup fits ${d.cs} channels on this device`);
  return { ...p, momLX, vendor: vendor || 'unknown' };
}
