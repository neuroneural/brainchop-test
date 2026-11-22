// Automated unit tests for 3-layer WebGPU V4 auto-detection, self-calibrating
// micro-probe, profile persistence, Layer 3 safe-mode retry, and URL overrides.
//
// Usage: node tests/webgpu-v4-compat.mjs
import assert from 'node:assert/strict';
import {
  V4_PROBE_STRIPS,
  V4_PROBE_TOTAL_STRIPS,
  V4_PROBE_WARMUP_ABORT_MS,
  isLinuxMesaIntelGen9,
  parseWebGpuUrlOverrides,
  applyWebGpuUrlOverrides,
  detectV4Platform,
  buildV4ProfileFingerprint,
  buildV4ProfileStorageKey,
  readV4ProfileCache,
  clearV4ProfileCache,
  persistV4SafeMode,
  buildV4MicroProbeWgsl,
  runV4GpuMicroProbe,
  resolveV4ExecutionPlan,
  formatV4PlanDiagnostic,
  classifyWebGpuFailure,
  executeWithWebGpuSafeModeRetry,
} from '../gpu-compatibility.js';

const MIB = 1024 * 1024;
const D_24CH = { chan: 24, cs: 24, dilations: [1, 3, 5, 7, 13, 19, 31, 19, 13, 7, 5, 3, 1] };
const D_16CH = { chan: 16, cs: 16, dilations: [1, 3, 5, 7, 13, 19, 31, 19, 13, 7, 5, 3, 1] };
const D_MINDGRAB = { chan: 15, cs: 16, dilations: Array(25).fill(1) };

const ACT_BYTES_24 = 256 * 256 * 12 * 80 * 4; // 240 MiB
const ACT_BYTES_16 = 256 * 256 * 8 * 80 * 4;  // 160 MiB
const OUT_BYTES_LABEL = 256 * 256 * 256;      // 16 MiB

function createMemoryStorage() {
  const map = new Map();
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => { map.set(k, String(v)); },
    removeItem: (k) => { map.delete(k); },
    keys: () => Array.from(map.keys()),
    size: () => map.size,
  };
}

function createThrowingStorage() {
  return {
    getItem: () => { throw new Error('SecurityError: storage disabled'); },
    setItem: () => { throw new Error('SecurityError: storage disabled'); },
    removeItem: () => { throw new Error('SecurityError: storage disabled'); },
  };
}

function makeDevice({
  adapterInfo = {},
  glRenderer = '',
  maxStorage = 1024 * MIB,
  maxBuffer = 2048 * MIB,
  f16 = true,
  subgroups = false,
  lostPromise = null,
} = {}) {
  const feats = new Set();
  if (f16) feats.add('shader-f16');
  if (subgroups) feats.add('subgroups');
  return {
    __adapterInfo: adapterInfo,
    __glRenderer: glRenderer,
    __isLost: false,
    features: feats,
    limits: {
      maxStorageBufferBindingSize: maxStorage,
      maxBufferSize: maxBuffer,
    },
    lost: lostPromise || new Promise(() => {}),
  };
}

function makeEnv({ platform, userAgent, storage, search = '', now = undefined } = {}) {
  return {
    platform,
    userAgent,
    storage: storage ?? createMemoryStorage(),
    search,
    skipGlProbe: true,
    now,
  };
}

// ---------------------------------------------------------------------------
// 1. Masked "Brave" renderer on Linux with SLOW probe -> LowMem128 + paced + cache
// ---------------------------------------------------------------------------
{
  const storage = createMemoryStorage();
  const env = makeEnv({
    platform: 'Linux x86_64',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
    storage,
  });
  const dev1 = makeDevice({
    adapterInfo: { vendor: '', architecture: '', device: '', description: '' },
    glRenderer: 'Brave',
  });
  let probeCalls = 0;
  const runProbe = async () => {
    probeCalls++;
    return { probeMs: 55.0 }; // 55 * 16 = 880 ms >= 450 ms -> very-slow
  };

  const plan1 = await resolveV4ExecutionPlan(dev1, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env,
    runProbe,
  });
  assert.equal(probeCalls, 1, 'first run on masked Linux Brave must run micro-probe');
  assert.equal(plan1.platform.isMaskedGpu, true);
  assert.equal(plan1.layout, 'LowMem128');
  assert.equal(plan1.execMode, 'paced');
  assert.equal(plan1.tier, 'very-slow');
  assert.equal(plan1.reason, 'probe:55.0ms');
  assert.equal(plan1.fromCache, false);
  assert.equal(storage.size(), 1, 'probe result must be persisted in localStorage');
  assert.match(formatV4PlanDiagnostic(plan1, D_24CH), /^\[WebGPU-V4\] layout=LowMem128 exec=paced reason=probe:55\.0ms/);

  // Second run on a fresh device (simulating page reload): skips probe completely
  const dev2 = makeDevice({
    adapterInfo: { vendor: '', architecture: '', device: '', description: '' },
    glRenderer: 'Brave',
  });
  const plan2 = await resolveV4ExecutionPlan(dev2, D_MINDGRAB, null, {
    actBytes: ACT_BYTES_16,
    outBufBytes: OUT_BYTES_LABEL,
    env,
    runProbe,
  });
  assert.equal(probeCalls, 1, 'cached profile must skip micro-probe on subsequent runs');
  assert.equal(plan2.layout, 'LowMem128');
  assert.equal(plan2.execMode, 'paced');
  assert.equal(plan2.reason, 'cached-probe');
  assert.equal(plan2.fromCache, true);

  // Upper-moderate masked GPU (est 480 ms): 25-layer MindGrab & 24ch -> LowMem128 + paced; 16ch -> std + paced
  const storageMod = createMemoryStorage();
  const envMod = makeEnv({ platform: 'Linux x86_64', userAgent: 'Mozilla/5.0 (X11; Linux x86_64)', storage: storageMod });
  const devMod = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });
  const planModMg = await resolveV4ExecutionPlan(devMod, D_MINDGRAB, null, {
    actBytes: ACT_BYTES_16,
    outBufBytes: OUT_BYTES_LABEL,
    env: envMod,
    runProbe: async () => ({ probeMs: 15.0 }), // 15 * 32 = 480 ms (moderate >= 450 ms)
  });
  assert.equal(planModMg.layout, 'LowMem128');
  assert.equal(planModMg.execMode, 'paced');

  const planMod16 = await resolveV4ExecutionPlan(devMod, D_16CH, null, {
    actBytes: ACT_BYTES_16,
    outBufBytes: OUT_BYTES_LABEL,
    env: envMod,
    runProbe: async () => { throw new Error('must use cached probe'); },
  });
  assert.equal(planMod16.layout, 'std');
  assert.equal(planMod16.execMode, 'paced');
  assert.equal(planMod16.chunkableStd, true);
  assert.equal(planMod16.reason, 'cached-probe');
}

// ---------------------------------------------------------------------------
// 2. Masked "Brave" renderer on Linux with FAST probe (RTX / Arc) -> std + pipelined
// ---------------------------------------------------------------------------
{
  const storage = createMemoryStorage();
  const env = makeEnv({
    platform: 'Linux x86_64',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
    storage,
  });
  const dev = makeDevice({
    adapterInfo: { vendor: '', architecture: '', device: '', description: '' },
    glRenderer: 'Brave',
  });
  let probeCalls = 0;
  const plan = await resolveV4ExecutionPlan(dev, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env,
    runProbe: async () => {
      probeCalls++;
      return { probeMs: 4.2 }; // 4.2 * 32 = 134.4 ms < 220 ms -> fast
    },
  });
  assert.equal(probeCalls, 1);
  assert.equal(plan.layout, 'std');
  assert.equal(plan.execMode, 'pipelined');
  assert.equal(plan.chunkableStd, false);
  assert.equal(plan.tier, 'fast');
  assert.equal(plan.reason, 'probe:4.2ms');

  // Cached fast GPU stays on std + pipelined without re-probing
  const planCached = await resolveV4ExecutionPlan(dev, D_MINDGRAB, null, {
    actBytes: ACT_BYTES_16,
    outBufBytes: OUT_BYTES_LABEL,
    env,
    runProbe: async () => { throw new Error('must not re-probe cached fast GPU'); },
  });
  assert.equal(planCached.layout, 'std');
  assert.equal(planCached.execMode, 'pipelined');
  assert.equal(planCached.reason, 'cached-probe');
}

// ---------------------------------------------------------------------------
// 3. Identifiable Linux Mesa Intel Gen9 -> LowMem128 (MindGrab) / paced (24ch), zero probe
// ---------------------------------------------------------------------------
{
  assert.equal(isLinuxMesaIntelGen9('Mesa Intel(R) UHD Graphics 620 (WHL GT2)', 'Linux x86_64'), true);
  assert.equal(isLinuxMesaIntelGen9('Mesa Intel(R) UHD Graphics 620 (WHL GT2)', 'Win32'), false);
  assert.equal(isLinuxMesaIntelGen9('Brave', 'Linux x86_64'), false);

  const env = makeEnv({ platform: 'Linux x86_64', userAgent: 'Mozilla/5.0 (X11; Linux x86_64)' });
  const devMesa = makeDevice({
    adapterInfo: { vendor: '', architecture: '' },
    glRenderer: 'Mesa Intel(R) UHD Graphics 620 (WHL GT2)',
  });
  const devAdInfo = makeDevice({
    adapterInfo: { vendor: 'intel', architecture: 'gen-9', description: 'Intel UHD 620' },
  });

  const forbidProbe = async () => { throw new Error('known-weak Intel Gen9 must not run micro-probe'); };

  for (const dev of [devMesa, devAdInfo]) {
    const planMg = await resolveV4ExecutionPlan(dev, D_MINDGRAB, null, {
      actBytes: ACT_BYTES_16,
      outBufBytes: OUT_BYTES_LABEL,
      env,
      runProbe: forbidProbe,
    });
    assert.equal(planMg.layout, 'LowMem128', 'MindGrab on Linux Intel Gen9 must select LowMem128');
    assert.equal(planMg.execMode, 'paced');
    assert.equal(planMg.reason, 'hint:intel-gen9');

    const plan24 = await resolveV4ExecutionPlan(dev, D_24CH, null, {
      actBytes: ACT_BYTES_24,
      outBufBytes: OUT_BYTES_LABEL,
      env,
      runProbe: forbidProbe,
    });
    assert.equal(plan24.layout, 'std', '24ch on identifiable Linux Intel Gen9 uses std + paced');
    assert.equal(plan24.execMode, 'paced');
    assert.equal(plan24.chunkableStd, true);
    assert.equal(plan24.reason, 'hint:intel-gen9');
  }
}

// ---------------------------------------------------------------------------
// 4. Windows shared iGPU & Windows discrete GPU
// ---------------------------------------------------------------------------
{
  const envWin = makeEnv({
    platform: 'Win32',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0',
  });
  const forbidProbe = async () => { throw new Error('known-weak Windows shared iGPU must not run micro-probe'); };

  // Windows Intel UHD 630
  const devWinIgpu = makeDevice({
    adapterInfo: { vendor: 'intel', architecture: 'gen-9', description: 'Intel(R) UHD Graphics 630' },
  });
  const planWin24 = await resolveV4ExecutionPlan(devWinIgpu, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env: envWin,
    runProbe: forbidProbe,
  });
  assert.equal(planWin24.layout, 'LowMem128');
  assert.equal(planWin24.execMode, 'paced');
  assert.equal(planWin24.reason, 'hint:win-igpu');
  assert.equal(devWinIgpu.__v4WinCalibrated, true);
  assert.equal(devWinIgpu.__v4WinFast, false);

  // Windows Firefox redacted adapterInfo + Intel WebGL2 RENDERER
  const devWinFf = makeDevice({
    adapterInfo: { vendor: '', architecture: '', description: '' },
    glRenderer: 'Intel(R) HD Graphics 400, or similar',
  });
  const planWinFf24 = await resolveV4ExecutionPlan(devWinFf, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env: envWin,
    runProbe: forbidProbe,
  });
  assert.equal(planWinFf24.layout, 'LowMem128');
  assert.equal(planWinFf24.execMode, 'paced');
  assert.equal(planWinFf24.reason, 'hint:win-igpu');

  // Windows discrete NVIDIA RTX -> runs probe, fast -> std + pipelined
  const devWinRtx = makeDevice({
    adapterInfo: { vendor: 'nvidia', architecture: 'ada', description: 'NVIDIA GeForce RTX 4070' },
  });
  let rtxProbes = 0;
  const planWinRtx = await resolveV4ExecutionPlan(devWinRtx, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env: envWin,
    runProbe: async () => { rtxProbes++; return { probeMs: 3.1 }; },
  });
  assert.equal(rtxProbes, 1);
  assert.equal(planWinRtx.layout, 'std');
  assert.equal(planWinRtx.execMode, 'pipelined');
  assert.equal(planWinRtx.chunkableStd, false);
  assert.equal(devWinRtx.__v4WinCalibrated, true);
  assert.equal(devWinRtx.__v4WinFast, true);
}

// ---------------------------------------------------------------------------
// 5. Apple Silicon -> single without running micro-probe
// ---------------------------------------------------------------------------
{
  const envMac = makeEnv({
    platform: 'MacIntel',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0',
  });
  const devApple = makeDevice({
    adapterInfo: { vendor: 'apple', architecture: 'metal-3', description: 'Apple M1' },
  });
  const devMacBrave = makeDevice({
    adapterInfo: { vendor: '', architecture: '' },
    glRenderer: 'Brave',
  });
  const forbidProbe = async () => { throw new Error('Apple Silicon must never run micro-probe by default'); };

  for (const dev of [devApple, devMacBrave]) {
    const plan = await resolveV4ExecutionPlan(dev, D_24CH, null, {
      actBytes: ACT_BYTES_24,
      outBufBytes: OUT_BYTES_LABEL,
      env: envMac,
      runProbe: forbidProbe,
    });
    assert.equal(plan.layout, 'std');
    assert.equal(plan.execMode, 'single');
    assert.equal(plan.chunkableStd, false);
    assert.equal(plan.reason, 'apple');
  }

  // Explicit ?webgpuMode=probe forces micro-probe on Apple Silicon for diagnostics/testing
  let appleForcedProbes = 0;
  const planForced = await resolveV4ExecutionPlan(
    makeDevice({ adapterInfo: { vendor: 'apple', architecture: 'metal-3' } }),
    D_24CH,
    null,
    {
      actBytes: ACT_BYTES_24,
      outBufBytes: OUT_BYTES_LABEL,
      env: makeEnv({ platform: 'MacIntel', userAgent: 'Macintosh', search: '?webgpuMode=probe' }),
      runProbe: async () => { appleForcedProbes++; return { probeMs: 9.5 }; },
    }
  );
  assert.equal(appleForcedProbes, 1);
  assert.equal(planForced.reason, 'probe:9.5ms');
}

// ---------------------------------------------------------------------------
// 6. Android 128 MiB maxStorageBufferBindingSize -> LowMem128
// ---------------------------------------------------------------------------
{
  const envAndroid = makeEnv({
    platform: 'Linux armv8l',
    userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/131.0.0.0 Mobile',
  });
  const devAndroid = makeDevice({
    adapterInfo: { vendor: 'arm', architecture: 'valhall', subgroupMinSize: 16, subgroupMaxSize: 16 },
    maxStorage: 128 * MIB,
    maxBuffer: 256 * MIB,
    subgroups: true,
  });
  assert.equal(detectV4Platform(devAndroid, envAndroid).isAndroid, true);
  assert.equal(detectV4Platform(devAndroid, envAndroid).isLinux, false);

  const planAndroidFast = await resolveV4ExecutionPlan(devAndroid, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env: envAndroid,
    runProbe: async () => ({ probeMs: 5.5 }), // 5.5 * 32 = 176 ms -> fast
  });
  assert.equal(planAndroidFast.layout, 'LowMem128');
  assert.equal(planAndroidFast.execMode, 'pipelined');
  assert.equal(planAndroidFast.reason, 'limit<=128M');

  const devAndroidSlow = makeDevice({
    adapterInfo: { vendor: 'qualcomm', architecture: 'adreno-6xx' },
    maxStorage: 128 * MIB,
    maxBuffer: 256 * MIB,
  });
  const planAndroidSlow = await resolveV4ExecutionPlan(devAndroidSlow, D_16CH, null, {
    actBytes: ACT_BYTES_16,
    outBufBytes: OUT_BYTES_LABEL,
    env: envAndroid,
    runProbe: async () => ({ probeMs: 32.0 }), // 512 ms -> very-slow
  });
  assert.equal(planAndroidSlow.layout, 'LowMem128');
  assert.equal(planAndroidSlow.execMode, 'paced');
  assert.equal(planAndroidSlow.reason, 'limit<=128M');

  // Even ?webgpuMode=standard cannot violate hardware 128 MiB limit
  const planAndroidStdOverride = await resolveV4ExecutionPlan(devAndroid, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env: makeEnv({
      platform: 'Linux armv8l',
      userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8)',
      search: '?webgpuMode=standard',
    }),
  });
  assert.equal(planAndroidStdOverride.layout, 'LowMem128');
  assert.equal(planAndroidStdOverride.reason, 'limit<=128M');
}

// ---------------------------------------------------------------------------
// 7. Layer 3: device.lost / OOM -> persists safe-mode + retries ONCE + WebGL2 fallthrough
// ---------------------------------------------------------------------------
{
  const storage = createMemoryStorage();
  const env = makeEnv({
    platform: 'Linux x86_64',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64)',
    storage,
  });

  // 7a. device.lost (async promise resolution) during standard run -> retry once -> succeeds
  let resolveLost;
  const lostPromise = new Promise((r) => { resolveLost = r; });
  const dev1 = makeDevice({ adapterInfo: {}, glRenderer: 'Brave', lostPromise });
  dev1.__v4LastPlan = { layout: 'std', execMode: 'pipelined', reason: 'probe:5.0ms' };
  const dev2 = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });

  const calls = [];
  let retryInfo = null;
  const res = await executeWithWebGpuSafeModeRetry({
    device: dev1,
    modelEntry: { quantize8Bit: true, modelName: 'MindSnap-104' },
    env,
    requestFreshDevice: async () => dev2,
    onRetry: (info) => { retryInfo = info; },
    runAttempt: async (dev, entry, { isRetry }) => {
      calls.push({ dev, entry, isRetry });
      if (!isRetry) {
        // Simulate Chrome/Dawn rejecting mapAsync right before device.lost resolves
        setTimeout(() => resolveLost({ reason: 'unknown', message: 'i915 GPU hang reset' }), 1);
        throw new Error('OperationError: Buffer map failed');
      }
      return 'OK_RETRY';
    },
  });

  assert.equal(res, 'OK_RETRY');
  assert.equal(calls.length, 2, 'must retry exactly once');
  assert.equal(calls[1].dev, dev2);
  assert.equal(calls[1].entry.forceLowMem128, true);
  assert.equal(calls[1].entry.webgpuExecMode, 'paced');
  assert.equal(calls[1].entry.__v4PlanReasonOverride, 'safe-mode-retry');
  assert.equal(retryInfo?.failureKind, 'device-lost');

  // Verify safe-mode was persisted and next fresh device starts directly in LowMem128 + paced
  const dev3 = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });
  const planAfterSafe = await resolveV4ExecutionPlan(dev3, D_24CH, null, {
    actBytes: ACT_BYTES_24,
    outBufBytes: OUT_BYTES_LABEL,
    env,
    runProbe: async () => { throw new Error('cached safe-mode must skip micro-probe'); },
  });
  assert.equal(planAfterSafe.layout, 'LowMem128');
  assert.equal(planAfterSafe.execMode, 'paced');
  assert.equal(planAfterSafe.reason, 'cached-safe-mode');
  assert.equal(planAfterSafe.safeMode, true);

  // 7b. OOM failure -> retries once, and if retry ALSO fails, throws with priorWebGpuError (no loop!)
  const storageOom = createMemoryStorage();
  const envOom = makeEnv({ platform: 'Linux x86_64', userAgent: 'Linux', storage: storageOom });
  const devOom1 = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });
  devOom1.__v4LastPlan = { layout: 'std', execMode: 'pipelined', reason: 'probe:8.0ms' };
  const devOom2 = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });

  let oomAttempts = 0;
  let caughtErr = null;
  try {
    await executeWithWebGpuSafeModeRetry({
      device: devOom1,
      modelEntry: { quantize8Bit: true },
      env: envOom,
      requestFreshDevice: async () => devOom2,
      runAttempt: async (_dev, _entry, { isRetry }) => {
        oomAttempts++;
        if (!isRetry) {
          const e = new Error('WebGPU out of memory (buffer allocation failed)');
          e.oomError = { message: 'allocation failed' };
          throw e;
        }
        throw new Error('LowMem128 retry also OOM');
      },
    });
  } catch (err) {
    caughtErr = err;
  }
  assert.equal(oomAttempts, 2, 'must guard strictly against >1 retry');
  assert.equal(caughtErr?.message, 'LowMem128 retry also OOM');
  assert.match(caughtErr?.priorWebGpuError?.message || '', /out of memory/i);

  // 7c. Already running LowMem128 + paced -> MUST NOT retry (attempts === 1)
  const devAlreadySafe = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });
  devAlreadySafe.__v4LastPlan = { layout: 'LowMem128', execMode: 'paced', reason: 'cached-probe' };
  let alreadySafeAttempts = 0;
  await assert.rejects(
    () => executeWithWebGpuSafeModeRetry({
      device: devAlreadySafe,
      modelEntry: { quantize8Bit: true },
      env: envOom,
      requestFreshDevice: async () => { throw new Error('must not request fresh device'); },
      runAttempt: async () => {
        alreadySafeAttempts++;
        throw new Error('WebGPU out of memory');
      },
    }),
    /out of memory/
  );
  assert.equal(alreadySafeAttempts, 1);

  // 7d. Non-GPU error (404 network) -> MUST NOT persist safe-mode or retry
  const storage404 = createMemoryStorage();
  const env404 = makeEnv({ platform: 'Linux x86_64', userAgent: 'Linux', storage: storage404 });
  const dev404 = makeDevice({ adapterInfo: { vendor: 'nvidia', architecture: 'ada' } });
  assert.equal(classifyWebGpuFailure(new Error('Failed to load weights: HTTP 404'), dev404), null);
  let attempts404 = 0;
  await assert.rejects(
    () => executeWithWebGpuSafeModeRetry({
      device: dev404,
      modelEntry: { quantize8Bit: true },
      env: env404,
      requestFreshDevice: async () => { throw new Error('must not retry 404'); },
      runAttempt: async () => {
        attempts404++;
        throw new Error('Failed to load weights: HTTP 404');
      },
    }),
    /HTTP 404/
  );
  assert.equal(attempts404, 1);
  assert.equal(storage404.size(), 0);

  // 7e. Private browsing (localStorage throws) -> in-memory fallback still persists safe-mode across fresh devices
  const envPriv = makeEnv({
    platform: 'Linux x86_64',
    userAgent: 'Linux',
    storage: createThrowingStorage(),
  });
  const devPriv1 = makeDevice({ adapterInfo: { device: 'private-test-gpu' }, glRenderer: 'Brave' });
  const fpPriv = buildV4ProfileFingerprint(devPriv1, null, envPriv);
  const keyPriv = buildV4ProfileStorageKey(fpPriv);
  clearV4ProfileCache(devPriv1, keyPriv, envPriv);
  persistV4SafeMode(devPriv1, 'oom', envPriv);

  const devPriv2 = makeDevice({ adapterInfo: { device: 'private-test-gpu' }, glRenderer: 'Brave' });
  const cachedPriv = readV4ProfileCache(devPriv2, keyPriv, envPriv);
  assert.equal(cachedPriv?.safeMode, 'low-memory-paced', 'in-memory fallback must survive fresh device when localStorage throws');
  clearV4ProfileCache(devPriv2, keyPriv, envPriv);
}

// ---------------------------------------------------------------------------
// 8. URL Overrides (?webgpuMode=low-memory|standard|recalibrate|reset, ?webgpuExec=...)
// ---------------------------------------------------------------------------
{
  assert.deepEqual(parseWebGpuUrlOverrides('?webgpuMode=low-memory'), { mode: 'low-memory', exec: '' });
  assert.deepEqual(parseWebGpuUrlOverrides('?webgpuMode=low-memory&webgpuExec=single'), { mode: 'low-memory', exec: 'single' });
  assert.deepEqual(parseWebGpuUrlOverrides('?webgpuMode=standard&webgpuExec=chunked'), { mode: 'standard', exec: 'paced' });
  assert.deepEqual(parseWebGpuUrlOverrides('?webgpuMode=reset'), { mode: 'recalibrate', exec: '' });
  assert.deepEqual(parseWebGpuUrlOverrides('?webgpuMode=recalibrate'), { mode: 'recalibrate', exec: '' });

  const appliedLow = applyWebGpuUrlOverrides({ quantize8Bit: true }, '?webgpuMode=low-memory');
  assert.equal(appliedLow.forceLowMem128, true);
  assert.equal(appliedLow.webgpuExecMode, 'paced');

  const appliedLowSingle = applyWebGpuUrlOverrides({ quantize8Bit: true }, '?webgpuMode=low-memory&webgpuExec=single');
  assert.equal(appliedLowSingle.forceLowMem128, true);
  assert.equal(appliedLowSingle.webgpuExecMode, 'single');

  const storage = createMemoryStorage();
  const devBase = makeDevice({ adapterInfo: {}, glRenderer: 'Brave' });
  const envBase = makeEnv({ platform: 'Linux x86_64', userAgent: 'Linux', storage });
  persistV4SafeMode(devBase, 'device-lost', envBase);

  // ?webgpuMode=standard overrides persisted safe-mode
  const planStd = await resolveV4ExecutionPlan(
    makeDevice({ adapterInfo: {}, glRenderer: 'Brave' }),
    D_24CH,
    null,
    {
      actBytes: ACT_BYTES_24,
      outBufBytes: OUT_BYTES_LABEL,
      env: makeEnv({ platform: 'Linux x86_64', userAgent: 'Linux', storage, search: '?webgpuMode=standard' }),
    }
  );
  assert.equal(planStd.layout, 'std');
  assert.equal(planStd.execMode, 'pipelined');
  assert.equal(planStd.reason, 'url-override');

  // ?webgpuMode=recalibrate clears safe-mode & cached calibration and runs fresh probe
  let recalProbes = 0;
  const planRecal = await resolveV4ExecutionPlan(
    makeDevice({ adapterInfo: {}, glRenderer: 'Brave' }),
    D_24CH,
    null,
    {
      actBytes: ACT_BYTES_24,
      outBufBytes: OUT_BYTES_LABEL,
      env: makeEnv({ platform: 'Linux x86_64', userAgent: 'Linux', storage, search: '?webgpuMode=recalibrate' }),
      runProbe: async () => { recalProbes++; return { probeMs: 5.0 }; },
    }
  );
  assert.equal(recalProbes, 1, '?webgpuMode=recalibrate must clear safe-mode and run fresh probe');
  assert.equal(planRecal.layout, 'std');
  assert.equal(planRecal.execMode, 'pipelined');
  assert.equal(planRecal.safeMode, false);
  assert.equal(planRecal.reason, 'probe:5.0ms');

  // ?webgpuMode=low-memory forces LowMem128 + paced even on Apple Silicon
  const planMacLow = await resolveV4ExecutionPlan(
    makeDevice({ adapterInfo: { vendor: 'apple', architecture: 'metal-3' } }),
    D_24CH,
    null,
    {
      actBytes: ACT_BYTES_24,
      outBufBytes: OUT_BYTES_LABEL,
      env: makeEnv({ platform: 'MacIntel', userAgent: 'Macintosh', search: '?webgpuMode=low-memory' }),
    }
  );
  assert.equal(planMacLow.layout, 'LowMem128');
  assert.equal(planMacLow.execMode, 'paced');
  assert.equal(planMacLow.reason, 'url-override');
}

// ---------------------------------------------------------------------------
// 9. Micro-probe WGSL safety & mock device buffer lifecycle verification
// ---------------------------------------------------------------------------
{
  const wgslF16 = buildV4MicroProbeWgsl(true);
  const wgslF32 = buildV4MicroProbeWgsl(false);
  assert.ok(wgslF16.includes('enable f16;'));
  assert.ok(!wgslF32.includes('enable f16;'));
  assert.equal(/var<\s*uniform\s*>[^;]*\bmat\d+x\d+/s.test(wgslF16), false, 'f16 probe WGSL must not put matCxR in var<uniform>');
  assert.equal(/var<\s*uniform\s*>[^;]*\bmat\d+x\d+/s.test(wgslF32), false, 'f32 probe WGSL must not put matCxR in var<uniform>');

  // Mock GPUBufferUsage & GPUShaderStage for pure Node runV4GpuMicroProbe test
  globalThis.GPUBufferUsage = globalThis.GPUBufferUsage || {
    STORAGE: 0x80,
    COPY_DST: 0x08,
    UNIFORM: 0x40,
  };
  globalThis.GPUShaderStage = globalThis.GPUShaderStage || { COMPUTE: 0x4 };

  const makeMockProbeDevice = ({ f16, stepDurationsMs }) => {
    const buffers = [];
    let submitIdx = 0;
    let clock = 1000;
    let openScopes = 0;
    const dispatches = [];
    const device = {
      features: new Set(f16 ? ['shader-f16'] : []),
      limits: { maxStorageBufferBindingSize: 128 * MIB, maxBufferSize: 256 * MIB },
      createShaderModule: ({ code }) => ({ code }),
      createBindGroupLayout: (desc) => desc,
      createPipelineLayout: (desc) => desc,
      createComputePipelineAsync: async () => ({ getBindGroupLayout: () => ({}) }),
      createBuffer: ({ size, usage }) => {
        const b = { size, usage, destroyed: false, destroy() { this.destroyed = true; } };
        buffers.push(b);
        return b;
      },
      createBindGroup: (desc) => desc,
      createCommandEncoder: () => ({
        beginComputePass: () => ({
          setPipeline() {},
          setBindGroup() {},
          dispatchWorkgroups(x, y, z) { dispatches.push([x, y, z]); },
          end() {},
        }),
        finish: () => ({}),
      }),
      pushErrorScope: () => { openScopes++; },
      popErrorScope: async () => { openScopes--; return null; },
      queue: {
        writeBuffer() {},
        submit() {
          const dt = stepDurationsMs[submitIdx++] ?? 10;
          clock += dt;
        },
        onSubmittedWorkDone: async () => {},
      },
    };
    return {
      device,
      buffers,
      dispatches,
      getOpenScopes: () => openScopes,
      now: () => clock,
    };
  };

  // Normal path (f16): warmup 8ms (excluded!) + sample1 45ms (cold) + sample2 28ms (warm) -> min=28ms -> est 896ms -> very-slow
  {
    const m = makeMockProbeDevice({ f16: true, stepDurationsMs: [8, 45, 28] });
    const res = await runV4GpuMicroProbe(m.device, { env: { now: m.now } });
    const totalBytes = m.buffers.reduce((s, b) => s + b.size, 0);
    assert.ok(totalBytes <= 16 * MIB, `probe buffers must be <= 16 MiB, got ${(totalBytes / MIB).toFixed(2)} MiB`);
    assert.ok(m.buffers.every((b) => b.destroyed), 'all temporary probe buffers must be destroyed');
    assert.equal(m.getOpenScopes(), 0, 'error scopes must stay balanced');
    assert.equal(res.warmupMs, 8);
    assert.equal(res.probeMs, 28, 'must take min(sample1, sample2) and exclude warmupMs');
    assert.equal(res.estFullLayerMs, 28 * (V4_PROBE_TOTAL_STRIPS / V4_PROBE_STRIPS));
    assert.equal(res.tier, 'very-slow');
    assert.equal(res.abortedEarly, false);
    assert.equal(m.dispatches.length, 5, '1 warmup + 2 passes (sample1) + 2 passes (sample2)');
  }

  // Early-abort path (software renderer: warmup >= 120ms -> skips timed 1024-strip dispatch)
  {
    const m = makeMockProbeDevice({ f16: false, stepDurationsMs: [V4_PROBE_WARMUP_ABORT_MS + 15, 9999] });
    const res = await runV4GpuMicroProbe(m.device, { env: { now: m.now } });
    assert.ok(m.buffers.every((b) => b.destroyed), 'all temporary probe buffers must be destroyed on early abort');
    assert.equal(m.getOpenScopes(), 0);
    assert.equal(res.abortedEarly, true);
    assert.equal(res.tier, 'very-slow');
    assert.equal(m.dispatches.length, 2, 'only 1 lo+hi warmup pass on f32 early abort');
  }
}

console.log('ALL WEBGPU V4 COMPATIBILITY & AUTO-DETECTION TESTS PASSED');
