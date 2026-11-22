// gpu-compatibility.js
// ---------------------------------------------------------------------------
// Portable GPU compatibility, WebGPU V4 3-layer auto-detection, self-calibrating
// micro-probe, profile persistence, and safe-mode retry orchestration.
//
// Designed with zero hard DOM dependencies (all browser globals guarded and
// injectable via `env`) so this module can be lifted cleanly into brainchop-core/js.
// ---------------------------------------------------------------------------

export const V4_CALIB_SCHEMA_VERSION = 'v1';
export const V4_CALIB_STORAGE_PREFIX = 'brainchop:webgpu-v4-profile:';
export const V4_CALIB_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// Micro-probe geometry: representative 24-channel 3x3x3 dilated conv slice
// matching V4's ZYCX-pad80 layout, Sterbenz f16 unpack (or f32 split-half when
// shader-f16 is absent), and packed uniform weights.
// Total temporary GPU allocation: 2*3.75 + 2*3.0 = 13.5 MiB (<= 16 MiB),
// max single buffer = 3.75 MiB.
export const V4_PROBE_TOTAL_STRIPS = 256 * 64; // 16,384 strips in a full 256^3 hidden layer
export const V4_PROBE_Z_SLAB = 4;              // 4 slices -> 256 unique strips per pass
export const V4_PROBE_PASSES = 2;              // 2 sequential passes -> 512 strips (1/32 layer) per sample
export const V4_PROBE_STRIPS = V4_PROBE_Z_SLAB * 64 * V4_PROBE_PASSES; // 512 strips per timed sample
export const V4_PROBE_WARMUP_STRIPS = 16;      // 1 tiny warmup dispatch before timing
export const V4_PROBE_WARMUP_ABORT_MS = 120;   // early-classify software renderers (SwiftShader/llvmpipe)
export const V4_PROBE_SAMPLE1_SKIP2_MS = 140;  // skip 2nd sample when sample 1 already proves very-slow (>=4.5s/layer)

// Classification thresholds on extrapolated full 24ch hidden-layer time (ms):
//   < 220 ms       -> 'fast'      : std + pipelined (RTX, RDNA, Arc, fast discrete)
//   220..549 ms    -> 'moderate'  : std + paced (~150 ms chunks; masked >=450ms on 24ch/25-layer -> LowMem128 + paced)
//   >= 550 ms      -> 'very-slow' : LowMem128 + paced (Intel UHD 620/630, constrained/software GPUs)
export const V4_PROBE_FAST_MAX_MS = 220;
export const V4_PROBE_SLOW_MAX_MS = 550;
export const V4_PROBE_MASKED_MODERATE_LOWMEM_MS = 450;

const X4_VALID = 64;
const X4_HALO = 8;
const X4_PAD = X4_VALID + 2 * X4_HALO; // 80 u32 words per padded X row
const PROBE_CS = 24;
const PROBE_CS_HALF = 12;
const PROBE_OC4 = 6;
const PROBE_W_VEC4S = 9 * PROBE_CS * 3 * PROBE_OC4; // 3,888 vec4s (31,104 B f16 / 62,208 B f32)
const PROBE_W_U32X4S = PROBE_W_VEC4S / 2;          // 1,944 vec4<u32> packed f16 pairs

// Fallback in-memory profile store when localStorage is unavailable (private mode / workers / tests)
const memoryProfileStore = new Map();
const probePipeCache = new WeakMap();
const inflightProbeByDevice = new WeakMap();

const RECOGNIZED_GPU_RE = /\b(?:nvidia|geforce|rtx|gtx|quadro|tesla|amd|radeon|ryzen|intel|arc|uhd|iris|apple|qualcomm|adreno|arm|mali|immortalis|powervr|microsoft|swiftshader|llvmpipe|mesa)\b/i;

function getEnvNavigator(env) {
  return env?.navigator ?? globalThis.navigator;
}

function getEnvStorage(env) {
  if (env && 'storage' in env) return env.storage;
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

function getEnvSearch(env) {
  if (env && typeof env.search === 'string') return env.search;
  try {
    return globalThis.location?.search || '';
  } catch {
    return '';
  }
}

function getNow(env) {
  if (typeof env?.now === 'function') return env.now();
  if (typeof globalThis.performance?.now === 'function') return globalThis.performance.now();
  return Date.now();
}

function getWallClockMs(env) {
  return typeof env?.wallNow === 'function' ? env.wallNow() : Date.now();
}

export function isLinuxMesaIntelGen9(renderer, platform = undefined) {
  const plat = String(
    platform ??
    globalThis.navigator?.userAgentData?.platform ??
    globalThis.navigator?.platform ??
    ''
  );
  const text = String(renderer || '');
  return /Linux/i.test(plat) && !/Android/i.test(plat) &&
    /\bMesa\b/i.test(text) && /\bIntel\b/i.test(text) &&
    /\b(?:WHL|KBL|CFL|SKL|CML)\b/i.test(text);
}

export function normalizeV4ExecMode(value) {
  const s = String(value || '').trim().toLowerCase();
  if (s === 'single' || s === 'pipelined' || s === 'paced' || s === 'calibrate') return s;
  if (s === 'chunked') return 'paced';
  return '';
}

export function parseWebGpuUrlOverrides(search = undefined) {
  let rawSearch = search;
  if (rawSearch === undefined) {
    try {
      rawSearch = globalThis.location?.search || '';
    } catch {
      rawSearch = '';
    }
  }
  const result = { mode: '', exec: '' };
  if (!rawSearch) return result;
  try {
    const params = new URLSearchParams(rawSearch);
    const rawMode = (params.get('webgpuMode') || '').trim().toLowerCase();
    if (rawMode === 'low-memory' || rawMode === 'lowmem' || rawMode === 'low_memory' || rawMode === '128m') {
      result.mode = 'low-memory';
    } else if (rawMode === 'standard' || rawMode === 'std') {
      result.mode = 'standard';
    } else if (rawMode === 'recalibrate' || rawMode === 'reset') {
      result.mode = 'recalibrate';
    } else if (rawMode === 'probe') {
      result.mode = 'probe';
    }
    result.exec = normalizeV4ExecMode(params.get('webgpuExec'));
  } catch { /* ignore malformed query */ }
  return result;
}

export function applyWebGpuUrlOverrides(modelEntry, search = undefined) {
  if (!modelEntry || !modelEntry.quantize8Bit) return modelEntry;
  const parsed = parseWebGpuUrlOverrides(search);
  if (!parsed.mode && !parsed.exec) return modelEntry;

  const next = { ...modelEntry };
  if (parsed.mode === 'low-memory') {
    next.forceLowMem128 = true;
    next.webgpuExecMode = parsed.exec || 'paced';
    next.__v4PlanReasonOverride = 'url-override';
  } else if (parsed.mode === 'standard') {
    next.forceLowMem128 = false;
    if (parsed.exec) next.webgpuExecMode = parsed.exec;
    next.__v4PlanReasonOverride = 'url-override';
  } else if (parsed.mode === 'recalibrate') {
    next.recalibrate = true;
    if (parsed.exec) next.webgpuExecMode = parsed.exec;
  } else if (parsed.mode === 'probe') {
    next.recalibrate = true;
    next.forceProbe = true;
    if (parsed.exec) next.webgpuExecMode = parsed.exec;
  } else if (parsed.exec) {
    next.webgpuExecMode = parsed.exec;
    next.__v4PlanReasonOverride = 'url-override';
  }
  return next;
}

export function probeGlRendererHint(device, env = null) {
  if (!device) return '';
  if (typeof device.__glRenderer === 'string') return device.__glRenderer;
  let renderer = '';
  try {
    const nav = getEnvNavigator(env);
    const isFirefox = Boolean(nav && /Firefox/i.test(nav.userAgent || ''));
    const canvas = typeof globalThis.OffscreenCanvas !== 'undefined'
      ? new globalThis.OffscreenCanvas(1, 1)
      : (typeof globalThis.document !== 'undefined' ? globalThis.document.createElement('canvas') : null);
    const gl = canvas?.getContext?.('webgl2', { powerPreference: 'high-performance' });
    if (gl) {
      if (isFirefox) {
        renderer = String(gl.getParameter(gl.RENDERER) || '');
      } else {
        const dbg = gl.getExtension('WEBGL_debug_renderer_info');
        renderer = String((dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) || '');
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  } catch { /* ignore fallback probe failure */ }
  device.__glRenderer = renderer;
  return renderer;
}

export function detectV4Platform(device, env = null) {
  const adInfo = device?.__adapterInfo || device?.adapterInfo || {};
  const vendor = String(adInfo.vendor || '').trim().toLowerCase();
  const arch = String(adInfo.architecture || '').trim().toLowerCase();
  const nav = getEnvNavigator(env);
  const ua = String(env?.userAgent ?? nav?.userAgent ?? '');
  const plat = String(env?.platform ?? nav?.userAgentData?.platform ?? nav?.platform ?? '');

  const isAndroid = /Android/i.test(ua) || /Android/i.test(plat);
  const isApple = !isAndroid && (
    vendor === 'apple' ||
    (/Mac|iPhone|iPad|iPod/i.test(`${plat} ${ua}`) && !['intel', 'amd', 'nvidia', 'microsoft'].includes(vendor))
  );
  const isWindows = !isApple && !isAndroid && (/Win/i.test(plat) || /Windows/i.test(ua));
  const isLinux = !isApple && !isWindows && !isAndroid && (/Linux/i.test(plat) || /Linux/i.test(ua));

  const glRenderer = typeof device?.__glRenderer === 'string'
    ? device.__glRenderer
    : (!isApple && !vendor && !env?.skipGlProbe ? probeGlRendererHint(device, env) : '');

  const desc = `${adInfo.device || ''} ${adInfo.description || ''} ${glRenderer}`.trim();
  const effVendor = vendor || (
    /\bintel\b/i.test(glRenderer) ? 'intel' :
    /\bmicrosoft\b|\bbasic render\b/i.test(glRenderer) ? 'microsoft' :
    /\bnvidia\b/i.test(glRenderer) ? 'nvidia' :
    /\bamd\b|\bradeon\b/i.test(glRenderer) ? 'amd' : ''
  );

  const isWindowsSharedIgpu = isWindows && (
    effVendor === 'microsoft' ||
    (effVendor === 'intel' && !/\bArc\b/i.test(desc) && (
      /^gen-(9|11|12lp)/i.test(arch) ||
      /(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(desc)
    ))
  );

  const isLinuxIntelGen9 = isLinux && (
    (vendor === 'intel' && /^gen-9/i.test(arch)) ||
    isLinuxMesaIntelGen9(glRenderer, plat || 'Linux') ||
    isLinuxMesaIntelGen9(adInfo.description || '', plat || 'Linux') ||
    (effVendor === 'intel' && /\b(?:WHL|KBL|CFL|SKL|CML|UHD\s+Graphics\s+6[0-3]0|HD\s+Graphics\s+(?:5[0-3]0|6[0-3]0))\b/i.test(desc))
  );

  const identityBlob = `${vendor} ${arch} ${adInfo.device || ''} ${adInfo.description || ''} ${glRenderer}`.trim();
  const isMaskedGpu = !isApple && (
    identityBlob === '' ||
    /^(?:brave|unknown|generic|webgl|webgpu|default|\s)+$/i.test(identityBlob) ||
    (!RECOGNIZED_GPU_RE.test(identityBlob) && !/^gen-\d/i.test(arch))
  );

  const os = isApple ? 'apple' : isWindows ? 'windows' : isAndroid ? 'android' : isLinux ? 'linux' : 'other';
  return {
    os,
    vendor: effVendor,
    arch,
    desc,
    glRenderer,
    isApple,
    isWindows,
    isLinux,
    isAndroid,
    isWindowsSharedIgpu,
    isLinuxIntelGen9,
    isMaskedGpu,
  };
}

export function isLinuxIntelGen9Device(device, env = null) {
  return detectV4Platform(device, env).isLinuxIntelGen9;
}

export function buildV4ProfileFingerprint(device, plat = null, env = null) {
  const p = plat || detectV4Platform(device, env);
  const lim = device?.limits || {};
  const adInfo = device?.__adapterInfo || device?.adapterInfo || {};
  const maxStorage = Number(lim.maxStorageBufferBindingSize || 0);
  const maxBuffer = Number(lim.maxBufferSize || 0);
  const hasF16 = device?.features?.has?.('shader-f16') ? 1 : 0;
  const hasSg = Boolean(device?.features?.has?.('subgroups'));
  const sgRange = hasSg
    ? `${adInfo.subgroupMinSize | 0}-${adInfo.subgroupMaxSize | 0}`
    : 'none';

  const rawHint = [
    adInfo.vendor || '',
    adInfo.architecture || '',
    adInfo.device || '',
    adInfo.description || '',
    p.glRenderer || '',
  ]
    .map((s) => String(s).trim().toLowerCase().replace(/\s+/g, ' '))
    .filter(Boolean)
    .join('/');
  const rendererHint = (rawHint || 'masked').slice(0, 96);

  return [
    V4_CALIB_SCHEMA_VERSION,
    p.os,
    `sb=${maxStorage}`,
    `mb=${maxBuffer}`,
    `f16=${hasF16}`,
    `sg=${sgRange}`,
    rendererHint,
  ].join('|');
}

export function buildV4ProfileStorageKey(fingerprint) {
  return `${V4_CALIB_STORAGE_PREFIX}${fingerprint}`;
}

function getDeviceCalibMap(device) {
  if (!device) return null;
  if (!(device.__v4Calib instanceof Map)) {
    device.__v4Calib = new Map();
  }
  return device.__v4Calib;
}

function isRecordFresh(rec, nowMs) {
  if (!rec || typeof rec !== 'object') return false;
  if (rec.version !== V4_CALIB_SCHEMA_VERSION) return false;
  if (typeof rec.ts !== 'number' || !Number.isFinite(rec.ts)) return false;
  return (nowMs - rec.ts) <= V4_CALIB_TTL_MS;
}

export function readV4ProfileCache(device, storageKey, env = null) {
  const nowMs = getWallClockMs(env);
  const devMap = getDeviceCalibMap(device);
  const devRec = devMap?.get(storageKey);
  if (isRecordFresh(devRec, nowMs)) return devRec;

  const storage = getEnvStorage(env);
  let storageAccessible = false;
  if (storage && typeof storage.getItem === 'function') {
    try {
      const raw = storage.getItem(storageKey);
      storageAccessible = true;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (isRecordFresh(parsed, nowMs)) {
          devMap?.set(storageKey, parsed);
          return parsed;
        }
      }
    } catch { /* private browsing / blocked storage / corrupt JSON */ }
  }

  if (!storageAccessible) {
    const memRec = memoryProfileStore.get(storageKey);
    if (isRecordFresh(memRec, nowMs)) {
      devMap?.set(storageKey, memRec);
      return memRec;
    }
  }
  return null;
}

export function writeV4ProfileCache(device, storageKey, record, env = null) {
  const payload = {
    version: V4_CALIB_SCHEMA_VERSION,
    ts: getWallClockMs(env),
    ...record,
  };
  getDeviceCalibMap(device)?.set(storageKey, payload);

  const storage = getEnvStorage(env);
  let wroteStorage = false;
  if (storage && typeof storage.setItem === 'function') {
    try {
      storage.setItem(storageKey, JSON.stringify(payload));
      wroteStorage = true;
    } catch { /* ignore quota / private mode storage errors */ }
  }
  if (!wroteStorage) {
    memoryProfileStore.set(storageKey, payload);
  }
  return payload;
}

export function clearV4ProfileCache(device, storageKey = null, env = null) {
  const key = storageKey || (device ? buildV4ProfileStorageKey(buildV4ProfileFingerprint(device, null, env)) : null);
  if (device) {
    if (device.__v4Calib instanceof Map) {
      if (key) device.__v4Calib.delete(key);
      else device.__v4Calib.clear();
    }
    delete device.__v4WinCalibrated;
    delete device.__v4WinFast;
    delete device.__v4MsPerStrip;
    delete device.__v4Recalibrated;
    delete device.__v4ProbeDone;
  }
  if (key) {
    memoryProfileStore.delete(key);
    const storage = getEnvStorage(env);
    if (storage && typeof storage.removeItem === 'function') {
      try {
        storage.removeItem(key);
      } catch { /* ignore */ }
    }
  } else {
    memoryProfileStore.clear();
  }
}

export function persistV4SafeMode(device, safeModeReason = 'device-lost', env = null) {
  if (!device) return null;
  const plat = detectV4Platform(device, env);
  const fingerprint = buildV4ProfileFingerprint(device, plat, env);
  const storageKey = buildV4ProfileStorageKey(fingerprint);
  const prev = readV4ProfileCache(device, storageKey, env) || {};
  return writeV4ProfileCache(
    device,
    storageKey,
    {
      ...prev,
      safeMode: 'low-memory-paced',
      safeModeReason,
    },
    env
  );
}

export function classifyV4ProbeMs(estFullLayerMs) {
  if (!Number.isFinite(estFullLayerMs) || estFullLayerMs >= V4_PROBE_SLOW_MAX_MS) {
    return 'very-slow';
  }
  if (estFullLayerMs >= V4_PROBE_FAST_MAX_MS) {
    return 'moderate';
  }
  return 'fast';
}

// ---------------------------------------------------------------------------
// Layer 2: Self-Calibrating WebGPU Micro-Probe Shader & Runner
// ---------------------------------------------------------------------------

export function buildV4MicroProbeWgsl(hasF16) {
  const rowStrideAct = PROBE_CS_HALF * X4_PAD; // 960 u32s
  const rowStrideY = PROBE_CS_HALF * X4_VALID; // 768 u32s
  const rep = (n, fn) => Array.from({ length: n }, (_, i) => fn(i)).join('');

  if (hasF16) {
    const emitFmaBlock = () => {
      let s = '';
      for (let g = 0; g < PROBE_OC4; g += 2) {
        const o = g * 4;
        const hp = g / 2;
        s += `      {
        let wp0 = w_eff_u[wbu + ${hp}u];
        let wp1 = w_eff_u[wbu + ${3 + hp}u];
        let wp2 = w_eff_u[wbu + ${6 + hp}u];
        let w0a = u4_lo(wp0);
        let w0b = u4_hi(wp0);
        let w1a = u4_lo(wp1);
        let w1b = u4_hi(wp1);
        let w2a = u4_lo(wp2);
        let w2b = u4_hi(wp2);
        a_${o}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${o})));
        a_${o + 1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${o + 1})));
        a_${o + 2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${o + 2})));
        a_${o + 3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${o + 3})));
        a_${o + 4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${o + 4})));
        a_${o + 5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${o + 5})));
        a_${o + 6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${o + 6})));
        a_${o + 7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${o + 7})));
      }\n`;
      }
      return s;
    };

    const emitLoop = (arrName, icBase) => `    for (var ic : u32 = 0u; ic < ${PROBE_CS_HALF}u; ic = ic + 1u) {
      let base = row_off + ic * ${X4_PAD}u;
      let uL = ${arrName}[base - 2u];
      let uN = ${arrName}[base - 1u];
      let uC = ${arrName}[base];
      let uP = ${arrName}[base + 1u];
      let uR = ${arrName}[base + 2u];
      let u_neg = (uL >> 24u) | (uN << 8u);
      let u_pos = (uP >> 8u) | (uR << 24u);
      let vn = vec4<f16>(vec2<f16>(unpack2x16float(((u_neg & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((u_neg >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(1.02734375h);
      let vc = vec4<f16>(vec2<f16>(unpack2x16float(((uC & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((uC >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(1.02734375h);
      let vp = vec4<f16>(vec2<f16>(unpack2x16float(((u_pos & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((u_pos >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(1.02734375h);
      let wbu = wbu_tap + (${icBase}u + ic) * 9u;
${emitFmaBlock()}    }\n`;

    return `enable f16;
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<uniform> w_eff_u : array<vec4<u32>, ${PROBE_W_U32X4S}>;

fn u4_lo(p : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(p.x)), vec2<f16>(unpack2x16float(p.y)));
}
fn u4_hi(p : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(p.z)), vec2<f16>(unpack2x16float(p.w)));
}

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${X4_HALO}u;
  let y = (wid.y * 4u + lid.y) & 255u;
  let z = wid.z & ${V4_PROBE_Z_SLAB - 1}u;
${rep(PROBE_CS, (c) => `  var a_${c} = vec4<f16>(0.0h);\n`)}
  for (var tap_yz : u32 = 0u; tap_yz < 9u; tap_yz = tap_yz + 1u) {
    let dz = tap_yz / 3u;
    let dy = tap_yz - dz * 3u;
    let z_src = (z + dz + ${V4_PROBE_Z_SLAB - 1}u) & ${V4_PROBE_Z_SLAB - 1}u;
    let y_src = (y + dy * 5u + 251u) & 255u;
    let row_off = (z_src * 256u + y_src) * ${rowStrideAct}u + x_pad;
    let wbu_tap = tap_yz * 216u;
${emitLoop('act8_0', 0)}${emitLoop('act8_1', PROBE_CS_HALF)}  }

  let y_base = (z * 256u + y) * ${rowStrideY}u + x4;
${rep(PROBE_CS_HALF, (c) => `  y8_0[y_base + ${c * X4_VALID}u] = pack4x8unorm(vec4<f32>(a_${c}) * 0.5 + vec4<f32>(0.5));\n`)}${rep(PROBE_CS_HALF, (c) => `  y8_1[y_base + ${c * X4_VALID}u] = pack4x8unorm(vec4<f32>(a_${c + PROBE_CS_HALF}) * 0.5 + vec4<f32>(0.5));\n`)}
}`;
  }

  // f32 split-half fallback (matches V4 Tier 3 halfPassConv: lo 12ch + hi 12ch)
  const emitF32Entry = (entryName, gStart, outArr) => {
    const cStart = gStart * 4;
    const emitFma = () => rep(3, (gi) => {
      const g = gStart + gi;
      const o = cStart + gi * 4;
      return `      {
        let w0 = w_eff[wb + ${g}u];
        let w1 = w_eff[wb + ${PROBE_OC4 + g}u];
        let w2 = w_eff[wb + ${2 * PROBE_OC4 + g}u];
        a_${o}     = fma(vn, vec4<f32>(w0.x), fma(vc, vec4<f32>(w1.x), fma(vp, vec4<f32>(w2.x), a_${o})));
        a_${o + 1} = fma(vn, vec4<f32>(w0.y), fma(vc, vec4<f32>(w1.y), fma(vp, vec4<f32>(w2.y), a_${o + 1})));
        a_${o + 2} = fma(vn, vec4<f32>(w0.z), fma(vc, vec4<f32>(w1.z), fma(vp, vec4<f32>(w2.z), a_${o + 2})));
        a_${o + 3} = fma(vn, vec4<f32>(w0.w), fma(vc, vec4<f32>(w1.w), fma(vp, vec4<f32>(w2.w), a_${o + 3})));
      }\n`;
    });
    const emitLoop = (arrName, icBase) => `    for (var ic : u32 = 0u; ic < ${PROBE_CS_HALF}u; ic = ic + 1u) {
      let base = row_off + ic * ${X4_PAD}u;
      let uL = ${arrName}[base - 2u];
      let uN = ${arrName}[base - 1u];
      let uC = ${arrName}[base];
      let uP = ${arrName}[base + 1u];
      let uR = ${arrName}[base + 2u];
      let u_neg = (uL >> 24u) | (uN << 8u);
      let u_pos = (uP >> 8u) | (uR << 24u);
      let vn = unpack4x8unorm(u_neg) - vec4<f32>(0.02745098);
      let vc = unpack4x8unorm(uC) - vec4<f32>(0.02745098);
      let vp = unpack4x8unorm(u_pos) - vec4<f32>(0.02745098);
      let wb = wb_tap + (${icBase}u + ic) * ${3 * PROBE_OC4}u;
${emitFma()}    }\n`;

    return `@compute @workgroup_size(64, 4, 1)
fn ${entryName}(@builtin(local_invocation_id) lid : vec3<u32>,
                @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${X4_HALO}u;
  let y = (wid.y * 4u + lid.y) & 255u;
  let z = wid.z & ${V4_PROBE_Z_SLAB - 1}u;
${rep(PROBE_CS_HALF, (i) => `  var a_${cStart + i} = vec4<f32>(0.0);\n`)}
  for (var tap_yz : u32 = 0u; tap_yz < 9u; tap_yz = tap_yz + 1u) {
    let dz = tap_yz / 3u;
    let dy = tap_yz - dz * 3u;
    let z_src = (z + dz + ${V4_PROBE_Z_SLAB - 1}u) & ${V4_PROBE_Z_SLAB - 1}u;
    let y_src = (y + dy * 5u + 251u) & 255u;
    let row_off = (z_src * 256u + y_src) * ${rowStrideAct}u + x_pad;
    let wb_tap = tap_yz * ${PROBE_CS * 3 * PROBE_OC4}u;
${emitLoop('act8_0', 0)}${emitLoop('act8_1', PROBE_CS_HALF)}  }

  let y_base = (z * 256u + y) * ${rowStrideY}u + x4;
${rep(PROBE_CS_HALF, (i) => `  ${outArr}[y_base + ${i * X4_VALID}u] = pack4x8unorm(a_${cStart + i} * 0.5 + vec4<f32>(0.5));\n`)}
}`;
  };

  return `@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read> w_eff : array<vec4<f32>>;

${emitF32Entry('main_lo', 0, 'y8_0')}

${emitF32Entry('main_hi', 3, 'y8_1')}`;
}

async function getOrBuildProbePipelines(device, hasF16) {
  let devMap = probePipeCache.get(device);
  if (!devMap) {
    devMap = new Map();
    probePipeCache.set(device, devMap);
  }
  const key = hasF16 ? 'f16' : 'f32';
  let p = devMap.get(key);
  if (!p) {
    p = (async () => {
      const code = buildV4MicroProbeWgsl(hasF16);
      const module = device.createShaderModule({ code });
      if (hasF16) {
        const main = await device.createComputePipelineAsync({
          layout: 'auto',
          compute: { module, entryPoint: 'main' },
        });
        return { main, bgl: main.getBindGroupLayout(0) };
      }
      const bgl = device.createBindGroupLayout({
        entries: [
          { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
          { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
          { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
          { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
          { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        ],
      });
      const layout = device.createPipelineLayout({ bindGroupLayouts: [bgl] });
      const [lo, hi] = await Promise.all([
        device.createComputePipelineAsync({ layout, compute: { module, entryPoint: 'main_lo' } }),
        device.createComputePipelineAsync({ layout, compute: { module, entryPoint: 'main_hi' } }),
      ]);
      return { lo, hi, bgl };
    })().catch((err) => {
      devMap.delete(key);
      throw err;
    });
    devMap.set(key, p);
  }
  return p;
}

export async function runV4GpuMicroProbe(device, opts = {}) {
  const env = opts?.env || null;
  if (typeof opts?.runProbe === 'function') {
    const custom = await opts.runProbe(device);
    const probeMs = Math.max(0.1, Number(custom?.probeMs ?? custom) || 0.1);
    const estFullLayerMs = Number.isFinite(custom?.estFullLayerMs)
      ? custom.estFullLayerMs
      : probeMs * (V4_PROBE_TOTAL_STRIPS / V4_PROBE_STRIPS);
    const tier = custom?.tier || classifyV4ProbeMs(estFullLayerMs);
    return {
      probeMs,
      warmupMs: Number(custom?.warmupMs ?? 0),
      estFullLayerMs,
      msPerStrip24: estFullLayerMs / V4_PROBE_TOTAL_STRIPS,
      tier,
      abortedEarly: Boolean(custom?.abortedEarly),
    };
  }

  const existing = inflightProbeByDevice.get(device);
  if (existing) return existing;

  const task = (async () => {
    const hasF16 = opts.hasF16 !== undefined
      ? Boolean(opts.hasF16)
      : Boolean(device?.features?.has?.('shader-f16'));

    const S = GPUBufferUsage.STORAGE;
    const CD = GPUBufferUsage.COPY_DST;
    const U = GPUBufferUsage.UNIFORM;

    const actHalfBytes = V4_PROBE_Z_SLAB * 256 * PROBE_CS_HALF * X4_PAD * 4; // 3.75 MiB
    const yHalfBytes = V4_PROBE_Z_SLAB * 256 * PROBE_CS_HALF * X4_VALID * 4; // 3.00 MiB
    const wBytes = hasF16 ? PROBE_W_U32X4S * 16 : PROBE_W_VEC4S * 16;

    const tempBuffers = [];
    const hasScopes = typeof device.pushErrorScope === 'function' && typeof device.popErrorScope === 'function';
    let scopeOpen = false;
    if (hasScopes) {
      device.pushErrorScope('out-of-memory');
      scopeOpen = true;
    }

    try {
      const pipes = await getOrBuildProbePipelines(device, hasF16);

      const mk = (size, usage) => {
        const b = device.createBuffer({ size, usage });
        tempBuffers.push(b);
        return b;
      };
      const act8_0 = mk(actHalfBytes, S);
      const act8_1 = mk(actHalfBytes, S);
      const y8_0 = mk(yHalfBytes, S);
      const y8_1 = mk(yHalfBytes, S);
      const wBuf = mk(wBytes, (hasF16 ? U : S) | CD);

      // Fill tiny ~31-62 KiB weight buffer with small alternating +/-0.01 values
      // so FMAs do real non-zero work with zero overflow/denormals.
      if (hasF16) {
        const wHost = new Uint32Array(PROBE_W_U32X4S * 4);
        wHost.fill(0xA11F211F); // pair of f16 (+0.01, -0.01)
        device.queue.writeBuffer(wBuf, 0, wHost);
      } else {
        const wHost = new Float32Array(PROBE_W_VEC4S * 4);
        for (let i = 0; i < wHost.length; i++) wHost[i] = (i & 1) ? -0.01 : 0.01;
        device.queue.writeBuffer(wBuf, 0, wHost);
      }

      const bg = device.createBindGroup({
        layout: pipes.bgl,
        entries: [
          { binding: 0, resource: { buffer: act8_0 } },
          { binding: 1, resource: { buffer: act8_1 } },
          { binding: 2, resource: { buffer: y8_0 } },
          { binding: 3, resource: { buffer: y8_1 } },
          { binding: 4, resource: { buffer: wBuf } },
        ],
      });

      const encodePasses = (enc, yGroups, zGroups, repeats) => {
        for (let r = 0; r < repeats; r++) {
          if (hasF16) {
            const pass = enc.beginComputePass();
            pass.setPipeline(pipes.main);
            pass.setBindGroup(0, bg);
            pass.dispatchWorkgroups(1, yGroups, zGroups);
            pass.end();
          } else {
            const pLo = enc.beginComputePass();
            pLo.setPipeline(pipes.lo);
            pLo.setBindGroup(0, bg);
            pLo.dispatchWorkgroups(1, yGroups, zGroups);
            pLo.end();
            const pHi = enc.beginComputePass();
            pHi.setPipeline(pipes.hi);
            pHi.setBindGroup(0, bg);
            pHi.dispatchWorkgroups(1, yGroups, zGroups);
            pHi.end();
          }
        }
      };

      // 1. Tiny warmup dispatch (16 strips) so pipeline compilation / residency /
      //    GPU clock ramp is excluded from the throughput timing.
      const wEnc = device.createCommandEncoder();
      encodePasses(wEnc, V4_PROBE_WARMUP_STRIPS, 1, 1);
      const tW0 = getNow(env);
      device.queue.submit([wEnc.finish()]);
      await device.queue.onSubmittedWorkDone();
      const warmupMs = Math.max(0.1, getNow(env) - tW0);

      let result;
      if (warmupMs >= V4_PROBE_WARMUP_ABORT_MS) {
        const estFullLayerMs = warmupMs * (V4_PROBE_TOTAL_STRIPS / V4_PROBE_WARMUP_STRIPS);
        result = {
          probeMs: warmupMs,
          warmupMs,
          estFullLayerMs,
          msPerStrip24: estFullLayerMs / V4_PROBE_TOTAL_STRIPS,
          tier: 'very-slow',
          abortedEarly: true,
        };
      } else {
        // 2. Two short timed samples of 512 strips (1/32 of a 24ch layer each) and take
        //    min(sample1, sample2) to eliminate cold GPU P-state clock ramp and OS/browser
        //    compositor hiccups while keeping every single submission safely short (<100ms
        //    even on Intel UHD 620, well below Linux i915 640ms and Windows 2s WDDM TDR).
        const runSample = async () => {
          const tEnc = device.createCommandEncoder();
          encodePasses(tEnc, 64, V4_PROBE_Z_SLAB, V4_PROBE_PASSES);
          const t0 = getNow(env);
          device.queue.submit([tEnc.finish()]);
          await device.queue.onSubmittedWorkDone();
          return Math.max(0.1, getNow(env) - t0);
        };
        const sample1Ms = await runSample();
        const sample2Ms = sample1Ms >= V4_PROBE_SAMPLE1_SKIP2_MS ? sample1Ms : await runSample();
        const probeMs = Math.min(sample1Ms, sample2Ms);

        const estFullLayerMs = probeMs * (V4_PROBE_TOTAL_STRIPS / V4_PROBE_STRIPS);
        const tier = classifyV4ProbeMs(estFullLayerMs);
        result = {
          probeMs,
          warmupMs,
          estFullLayerMs,
          msPerStrip24: estFullLayerMs / V4_PROBE_TOTAL_STRIPS,
          tier,
          abortedEarly: false,
        };
      }

      if (scopeOpen) {
        scopeOpen = false;
        const oomErr = await device.popErrorScope();
        if (oomErr) {
          const err = new Error(`WebGPU micro-probe out of memory: ${oomErr.message || 'allocation failed'}`);
          err.oomError = oomErr;
          throw err;
        }
      }
      return result;
    } finally {
      for (const b of tempBuffers) {
        try { b.destroy(); } catch { /* ignore */ }
      }
      if (scopeOpen) {
        scopeOpen = false;
        try { await device.popErrorScope(); } catch { /* device may be lost */ }
      }
    }
  })().finally(() => {
    inflightProbeByDevice.delete(device);
  });

  inflightProbeByDevice.set(device, task);
  return task;
}

// ---------------------------------------------------------------------------
// Unified 3-Layer V4 Execution Plan Resolver
// ---------------------------------------------------------------------------

function formatLimitReason(maxAllowed) {
  const mib = Math.floor(maxAllowed / 1048576);
  return mib <= 128 ? 'limit<=128M' : `limit<=${mib}M`;
}

function scaledMsPerStrip(msPerStrip24, cs) {
  const ratio = Math.max(8, Number(cs) || 24) / 24;
  const scale = Math.max(0.35, Math.min(1.0, ratio * ratio));
  return Math.max(0.005, Math.min(2.0, msPerStrip24 * scale));
}

function isMindGrabOrDeep(d) {
  return d.chan === 15 || (Array.isArray(d.dilations) && d.dilations.length >= 25);
}

/**
 * Resolve the V4 layout ('std' | 'LowMem128'), execution mode ('single' | 'pipelined' | 'paced' | 'calibrate'),
 * std chunking flag, initial pacing estimate, and concise diagnostic reason.
 */
export async function resolveV4ExecutionPlan(device, d, modelEntry = null, opts = {}) {
  const env = opts?.env || null;
  const plat = detectV4Platform(device, env);
  const fingerprint = buildV4ProfileFingerprint(device, plat, env);
  const storageKey = buildV4ProfileStorageKey(fingerprint);

  const lim = device?.limits || {};
  const maxAllowed = Math.min(
    lim.maxStorageBufferBindingSize ?? Infinity,
    lim.maxBufferSize ?? Infinity
  );
  const canLowMem128 = d.cs >= 8 && d.cs % 4 === 0;
  const actBytes = Number(opts.actBytes ?? 0);
  const outBufBytes = Number(opts.outBufBytes ?? 0);
  const mustLowMem128 = (actBytes > maxAllowed || outBufBytes > maxAllowed) && canLowMem128;

  const urlOverrides = parseWebGpuUrlOverrides(getEnvSearch(env));
  const explicitExec = normalizeV4ExecMode(modelEntry?.webgpuExecMode) || urlOverrides.exec;
  const explicitLowMem = modelEntry?.forceLowMem128 === true
    ? true
    : modelEntry?.forceLowMem128 === false
      ? false
      : urlOverrides.mode === 'low-memory'
        ? true
        : urlOverrides.mode === 'standard'
          ? false
          : null;

  const isUrlDriven = Boolean(
    urlOverrides.mode === 'low-memory' ||
    urlOverrides.mode === 'standard' ||
    urlOverrides.exec ||
    modelEntry?.__v4PlanReasonOverride === 'url-override'
  );
  const forceProbe = Boolean(
    modelEntry?.forceProbe === true ||
    (urlOverrides.mode === 'probe' && !device?.__v4ProbeDone)
  );
  const wantRecalibrate = Boolean(
    (urlOverrides.mode === 'recalibrate' || urlOverrides.mode === 'probe' || modelEntry?.recalibrate === true) &&
    !device?.__v4Recalibrated
  );

  if (wantRecalibrate) {
    clearV4ProfileCache(device, storageKey, env);
    if (device) device.__v4Recalibrated = true;
  }

  const finalize = ({
    layout,
    execMode,
    reason,
    tier = null,
    probeMs = null,
    estFullLayerMs = null,
    msPerStrip = null,
    fromCache = false,
    safeMode = false,
  }) => {
    const effectiveLayout = mustLowMem128 ? 'LowMem128' : (layout === 'LowMem128' && canLowMem128 ? 'LowMem128' : 'std');
    const chunkableStd = effectiveLayout === 'std' && (execMode === 'paced' || execMode === 'calibrate');
    if (device && Number.isFinite(msPerStrip)) {
      device.__v4MsPerStrip = msPerStrip;
    }
    return {
      layout: effectiveLayout,
      execMode,
      chunkableStd,
      reason,
      tier,
      probeMs,
      estFullLayerMs,
      msPerStrip,
      fromCache,
      safeMode,
      fingerprint,
      storageKey,
      platform: plat,
    };
  };

  // Priority 0: Layer 3 automatic safe-mode retry
  if (modelEntry?.__v4PlanReasonOverride === 'safe-mode-retry') {
    return finalize({
      layout: canLowMem128 ? 'LowMem128' : 'std',
      execMode: 'paced',
      reason: 'safe-mode-retry',
      safeMode: true,
    });
  }

  const cached = forceProbe ? null : readV4ProfileCache(device, storageKey, env);

  // Priority 1: Explicit URL or programmatic overrides (unless forceProbe)
  if (!forceProbe && (explicitLowMem !== null || explicitExec !== '')) {
    let layout = 'std';
    let layoutHintReason = '';
    if (mustLowMem128) {
      layout = 'LowMem128';
      layoutHintReason = formatLimitReason(maxAllowed);
    } else if (explicitLowMem === true) {
      layout = canLowMem128 ? 'LowMem128' : 'std';
    } else if (explicitLowMem === false) {
      layout = 'std';
    } else if (plat.isWindowsSharedIgpu && d.cs >= 24 && canLowMem128) {
      layout = 'LowMem128';
      layoutHintReason = 'hint:win-igpu';
    } else if (plat.isLinuxIntelGen9 && isMindGrabOrDeep(d) && canLowMem128) {
      layout = 'LowMem128';
      layoutHintReason = 'hint:intel-gen9';
    } else if (cached?.safeMode === 'low-memory-paced' && canLowMem128) {
      layout = 'LowMem128';
      layoutHintReason = 'cached-safe-mode';
    } else if (cached?.tier === 'very-slow' && canLowMem128) {
      layout = 'LowMem128';
      layoutHintReason = 'cached-probe';
    }

    let execMode = explicitExec;
    if (!execMode) {
      if (explicitLowMem === true) execMode = 'paced';
      else if (plat.isApple) execMode = 'single';
      else if (plat.isWindowsSharedIgpu || plat.isLinuxIntelGen9) execMode = 'paced';
      else execMode = 'pipelined';
    }

    const reason = (mustLowMem128 && explicitLowMem === false)
      ? formatLimitReason(maxAllowed)
      : isUrlDriven
        ? 'url-override'
        : (layoutHintReason || 'override');

    return finalize({
      layout,
      execMode,
      reason,
      tier: cached?.tier ?? null,
      probeMs: cached?.probeMs ?? null,
      estFullLayerMs: cached?.estFullLayerMs ?? null,
      msPerStrip: cached?.msPerStrip24 ? scaledMsPerStrip(cached.msPerStrip24, d.cs) : null,
      fromCache: Boolean(cached),
      safeMode: cached?.safeMode === 'low-memory-paced',
    });
  }

  // Priority 2: Apple Silicon untouched fast single-encoder path (zero micro-probe!)
  if (plat.isApple && !forceProbe) {
    if (cached?.safeMode === 'low-memory-paced') {
      return finalize({
        layout: canLowMem128 ? 'LowMem128' : 'std',
        execMode: 'paced',
        reason: 'cached-safe-mode',
        fromCache: true,
        safeMode: true,
      });
    }
    return finalize({
      layout: mustLowMem128 ? 'LowMem128' : 'std',
      execMode: 'single',
      reason: mustLowMem128 ? formatLimitReason(maxAllowed) : 'apple',
    });
  }

  // Priority 3: Persisted Layer 3 safe-mode override (skip probe, go straight to safe mode)
  if (!forceProbe && cached?.safeMode === 'low-memory-paced') {
    if (plat.isWindows && device) {
      device.__v4WinCalibrated = true;
      device.__v4WinFast = false;
    }
    return finalize({
      layout: canLowMem128 ? 'LowMem128' : 'std',
      execMode: 'paced',
      reason: 'cached-safe-mode',
      tier: cached.tier ?? 'very-slow',
      probeMs: cached.probeMs ?? null,
      estFullLayerMs: cached.estFullLayerMs ?? null,
      msPerStrip: cached.msPerStrip24 ? scaledMsPerStrip(cached.msPerStrip24, d.cs) : null,
      fromCache: true,
      safeMode: true,
    });
  }

  // Priority 4: Layer 1 known-weak fast hints (zero probe overhead)
  if (!forceProbe && plat.isLinuxIntelGen9) {
    const use128 = mustLowMem128 || (isMindGrabOrDeep(d) && canLowMem128);
    return finalize({
      layout: use128 ? 'LowMem128' : 'std',
      execMode: 'paced',
      reason: mustLowMem128 ? formatLimitReason(maxAllowed) : 'hint:intel-gen9',
    });
  }

  if (!forceProbe && plat.isWindowsSharedIgpu) {
    if (device) {
      device.__v4WinCalibrated = true;
      device.__v4WinFast = false;
    }
    const use128 = mustLowMem128 || (d.cs >= 24 && canLowMem128);
    return finalize({
      layout: use128 ? 'LowMem128' : 'std',
      execMode: 'paced',
      reason: mustLowMem128 ? formatLimitReason(maxAllowed) : 'hint:win-igpu',
    });
  }

  // Priority 5: Layer 2 cached calibration OR live ~20-50 ms GPU micro-probe
  let calib = (!forceProbe && cached && cached.tier && Number.isFinite(cached.estFullLayerMs))
    ? cached
    : null;
  let fromCache = Boolean(calib);

  if (!calib) {
    try {
      const measured = await runV4GpuMicroProbe(device, {
        hasF16: opts.hasF16,
        runProbe: opts.runProbe,
        env,
      });
      calib = writeV4ProfileCache(
        device,
        storageKey,
        {
          tier: measured.tier,
          probeMs: Number(measured.probeMs.toFixed(2)),
          estFullLayerMs: Number(measured.estFullLayerMs.toFixed(1)),
          msPerStrip24: measured.msPerStrip24,
          safeMode: null,
          safeModeReason: null,
        },
        env
      );
      if (device) device.__v4ProbeDone = true;
      fromCache = false;
    } catch (err) {
      // If the device died or OOM'd during the tiny micro-probe, rethrow on device loss
      // so Layer 3 can recover; otherwise fall back conservatively to paced mode.
      const kind = classifyWebGpuFailure(err, device, Boolean(device?.__isLost));
      if (kind === 'device-lost') throw err;
      const fallbackTier = kind === 'oom' ? 'very-slow' : 'moderate';
      calib = {
        tier: fallbackTier,
        probeMs: null,
        estFullLayerMs: fallbackTier === 'very-slow' ? V4_PROBE_SLOW_MAX_MS : V4_PROBE_FAST_MAX_MS,
        msPerStrip24: (fallbackTier === 'very-slow' ? V4_PROBE_SLOW_MAX_MS : V4_PROBE_FAST_MAX_MS) / V4_PROBE_TOTAL_STRIPS,
      };
      fromCache = false;
    }
  }

  if (plat.isWindows && device) {
    device.__v4WinCalibrated = true;
    device.__v4WinFast = calib.tier === 'fast';
  }

  const estMs = Number(calib.estFullLayerMs);
  const maskedLowMemUpgrade = Boolean(
    plat.isMaskedGpu &&
    calib.tier === 'moderate' &&
    estMs >= V4_PROBE_MASKED_MODERATE_LOWMEM_MS &&
    (d.cs >= 24 || isMindGrabOrDeep(d))
  );

  const use128 = mustLowMem128 || (
    canLowMem128 && (calib.tier === 'very-slow' || maskedLowMemUpgrade)
  );
  const execMode = explicitExec || (calib.tier === 'fast' ? 'pipelined' : 'paced');

  let reason;
  if (mustLowMem128) {
    reason = formatLimitReason(maxAllowed);
  } else if (fromCache) {
    reason = 'cached-probe';
  } else if (Number.isFinite(calib.probeMs)) {
    reason = `probe:${Number(calib.probeMs).toFixed(1)}ms`;
  } else {
    reason = 'probe:fallback';
  }

  return finalize({
    layout: use128 ? 'LowMem128' : 'std',
    execMode,
    reason,
    tier: calib.tier,
    probeMs: calib.probeMs ?? null,
    estFullLayerMs: Number.isFinite(estMs) ? estMs : null,
    msPerStrip: Number.isFinite(calib.msPerStrip24) ? scaledMsPerStrip(calib.msPerStrip24, d.cs) : null,
    fromCache,
    safeMode: false,
  });
}

export function formatV4PlanDiagnostic(plan, d = null) {
  const modelPart = d ? ` | ${d.chan}ch(cs=${d.cs})/${d.dilations?.length ?? '?'}L` : '';
  const estPart = Number.isFinite(plan?.estFullLayerMs)
    ? ` | est24ch=${Math.round(plan.estFullLayerMs)}ms(${plan.tier})`
    : '';
  return `[WebGPU-V4] layout=${plan.layout} exec=${plan.execMode} reason=${plan.reason}${estPart}${modelPart}`;
}

// ---------------------------------------------------------------------------
// Layer 3: Device-Lost / OOM Failure Classification & Single Safe-Mode Retry
// ---------------------------------------------------------------------------

export async function checkDeviceLost(device, waitMs = 10) {
  if (!device) return false;
  if (device.__isLost) return true;
  if (!device.lost || typeof device.lost.then !== 'function') return false;
  return Promise.race([
    device.lost.then((info) => {
      device.__isLost = true;
      return info?.reason !== 'destroyed';
    }),
    new Promise((resolve) => setTimeout(() => resolve(Boolean(device.__isLost)), waitMs)),
  ]);
}

export function classifyWebGpuFailure(error, device = null, isLostHint = false) {
  if (isLostHint || device?.__isLost) return 'device-lost';
  if (error?.oomError) return 'oom';
  const msg = String(error?.message || error || '');
  if (/\bdevice(?:\s+was|\s+is)?\s+lost\b|gpu\s+reset|engine\s+reset|\btdr\b|instance\s+dropped|device\s+destroyed/i.test(msg)) {
    return 'device-lost';
  }
  if (/out[- ]of[- ]memory|\boom\b|allocation\s+failed|failed\s+to\s+allocate|exceeds\s+device\s+limit|binding\s+size|maxbuffersize|maxstoragebufferbinding/i.test(msg)) {
    return 'oom';
  }
  return null;
}

/**
 * Executes a WebGPU inference attempt with Layer 3 automatic safe-mode recovery:
 * if a V4 run outside `LowMem128 + paced` fails due to `device.lost` or OOM,
 * persists `safeMode = 'low-memory-paced'` for the device profile, requests a
 * fresh GPUDevice, and retries ONCE in `LowMem128 + paced` before failing over
 * to native WebGL2.
 */
export async function executeWithWebGpuSafeModeRetry({
  device,
  modelEntry,
  runAttempt,
  requestFreshDevice,
  onRetry = null,
  env = null,
}) {
  try {
    return await runAttempt(device, modelEntry, { isRetry: false });
  } catch (err1) {
    const isV4 = Boolean(modelEntry?.quantize8Bit);
    const lostNow = await checkDeviceLost(device, env?.lostWaitMs ?? 10);
    const failureKind = classifyWebGpuFailure(err1, device, lostNow);
    const lastPlan = device?.__v4LastPlan || null;
    const alreadySafe = Boolean(
      (lastPlan?.layout === 'LowMem128' && lastPlan?.execMode === 'paced') ||
      (modelEntry?.forceLowMem128 === true && normalizeV4ExecMode(modelEntry?.webgpuExecMode) === 'paced')
    );
    const urlOverrides = parseWebGpuUrlOverrides(getEnvSearch(env));
    const explicitStandard = urlOverrides.mode === 'standard' || modelEntry?.forceLowMem128 === false;

    if (!isV4 || !failureKind || alreadySafe || explicitStandard || typeof requestFreshDevice !== 'function') {
      throw err1;
    }

    persistV4SafeMode(device, failureKind, env);

    const freshDevice = await requestFreshDevice({ failedDevice: device, failureKind, error: err1 });
    if (!freshDevice || freshDevice.__isLost) {
      const noDevErr = new Error(
        `WebGPU safe-mode retry aborted: could not acquire fresh GPUDevice after ${failureKind} (${err1?.message || err1})`
      );
      noDevErr.priorWebGpuError = err1;
      throw noDevErr;
    }

    const retryEntry = {
      ...modelEntry,
      forceLowMem128: true,
      webgpuExecMode: 'paced',
      __v4PlanReasonOverride: 'safe-mode-retry',
    };
    onRetry?.({ failureKind, error: err1, retryEntry, freshDevice });

    try {
      return await runAttempt(freshDevice, retryEntry, { isRetry: true });
    } catch (err2) {
      if (err2 && typeof err2 === 'object') {
        err2.priorWebGpuError = err1;
      }
      throw err2;
    }
  }
}
