import { inferenceModelsList, resolveModelEntry } from '../../brainchop-parameters.js';
import { createDevice, prepareInput } from './cat-lite-browser-page.js';
import * as v4Runner from '../../webgpu_runners/meshnet_fast_v4_runner.js';

function countDiffs(a, b) {
  if (a.length !== b.length) throw new Error(`Length mismatch: ${a.length} vs ${b.length}`);
  let diffs = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diffs++;
  }
  return diffs;
}

function maxAbsDiff(a, b) {
  let mx = 0;
  for (let i = 0; i < a.length; i++) {
    const d = Math.abs(a[i] - b[i]);
    if (d > mx) mx = d;
  }
  return mx;
}

export async function runWindowsPacedSuite() {
  const { input } = await prepareInput('original');
  // Test under non-subgroups (shared-8KiB) just like Windows Intel UHD 630!
  const device = await createDevice({ disableSubgroups: true });
  // Override Apple vendor in Part 1 so Windows/Linux platform logic is exercised directly
  device.__adapterInfo = { vendor: 'nvidia', architecture: 'ada', description: 'Simulated Windows GPU' };
  const capturedWgsl = [];
  const origCreateShaderModule = device.createShaderModule.bind(device);
  device.createShaderModule = (desc) => {
    if (desc?.code) capturedWgsl.push(String(desc.code));
    return origCreateShaderModule(desc);
  };
  const results = {};

  try {
    // 1. 16ch MindMap v3.5: single (Mac) vs pipelined (Linux/RTX) vs paced (Windows Z-chunks, std)
    const entry16 = resolveModelEntry(inferenceModelsList.find((m) => m.id === 3), true);
    const w16 = new Uint8Array(await (await fetch('/models/model16chan18cls/model.safetensors')).arrayBuffer());

    device.pushErrorScope('validation');
    device.pushErrorScope('out-of-memory');

    const exec16Single = await v4Runner.setupNet(device, w16, null, {
      ...entry16,
      disableSubgroups: true,
      webgpuExecMode: 'single',
    });
    const [out16Single] = await exec16Single(input);
    exec16Single.dispose();

    const exec16Pipe = await v4Runner.setupNet(device, w16, null, {
      ...entry16,
      disableSubgroups: true,
      webgpuExecMode: 'pipelined',
    });
    const [out16Pipe] = await exec16Pipe(input);
    exec16Pipe.dispose();

    // Test default Windows auto-calibration mode (no webgpuExecMode override!)
    delete device.__v4WinCalibrated;
    delete device.__v4WinFast;
    const exec16Cal = await v4Runner.setupNet(device, w16, null, {
      ...entry16,
      disableSubgroups: true,
    });
    const [out16Cal] = await exec16Cal(input);
    exec16Cal.dispose();
    const calibratedFlag = !!device.__v4WinCalibrated;

    const prog16 = [];
    const layers16 = [];
    const exec16Paced = await v4Runner.setupNet(device, w16, null, {
      ...entry16,
      disableSubgroups: true,
      webgpuExecMode: 'paced',
    });
    const [out16Paced] = await exec16Paced(input, {
      onProgress: (frac, msg) => {
        prog16.push(frac);
        if (msg) layers16.push(msg);
      },
    });
    exec16Paced.dispose();

    results.m16 = {
      diffPipeVsSingle: countDiffs(out16Single, out16Pipe),
      diffCalibrateVsSingle: countDiffs(out16Single, out16Cal),
      calibratedFlag,
      diffPacedVsSingle: countDiffs(out16Single, out16Paced),
      progressTicks: prog16.length,
      layerMessages: layers16.length,
      firstFrac: prog16[0],
      lastFrac: prog16.at(-1),
      monotonic: prog16.every((v, i) => i === 0 || v >= prog16[i - 1] - 1e-9),
    };

    // 2. 24ch MindMap v3.5: simulated Windows Intel UHD 630 (LowMem128 auto-selection + paced Z-bands)
    const entry24 = resolveModelEntry(inferenceModelsList.find((m) => m.id === 21), true);
    const w24 = new Uint8Array(await (await fetch('/models/model24chan18cls_gdice_prio/model.safetensors')).arrayBuffer());

    const exec24Single128 = await v4Runner.setupNet(device, w24, null, {
      ...entry24,
      disableSubgroups: true,
      forceLowMem128: true,
      webgpuExecMode: 'single',
    });
    const [out24Single128] = await exec24Single128(input);
    exec24Single128.dispose();

    // Spoof Intel UHD 630 adapter info on Windows
    const origAdapterInfo = device.__adapterInfo;
    device.__adapterInfo = {
      vendor: 'intel',
      architecture: 'gen-9',
      device: '0x3e92',
      description: 'Intel(R) UHD Graphics 630',
    };
    const prog24 = [];
    const layers24 = [];
    let cone24 = null;
    let out24Paced128;
    try {
      const exec24WinIgpu = await v4Runner.setupNet(device, w24, null, {
        ...entry24,
        disableSubgroups: true,
        webgpuExecMode: 'paced',
      });
      cone24 = exec24WinIgpu.__coneInfo?.() || null;
      [out24Paced128] = await exec24WinIgpu(input, {
        onProgress: (frac, msg) => {
          prog24.push(frac);
          if (msg) layers24.push(msg);
        },
      });
      exec24WinIgpu.dispose();
    } finally {
      device.__adapterInfo = origAdapterInfo;
    }

    results.m24LowMem128 = {
      coneInfo: cone24,
      diffPacedVsSingle128: countDiffs(out24Single128, out24Paced128),
      progressTicks: prog24.length,
      layerMessages: layers24.length,
      monotonic: prog24.every((v, i) => i === 0 || v >= prog24[i - 1] - 1e-9),
    };

    // 3. CAT-lite probability maps (id: 23): single vs paced
    const entryProb = resolveModelEntry(inferenceModelsList.find((m) => m.id === 23), true);
    const execProbSingle = await v4Runner.setupNet(device, w24, null, {
      ...entryProb,
      disableSubgroups: true,
      webgpuExecMode: 'single',
    });
    const priorsSingle = await execProbSingle(input, { gpuNativeOutput: true });
    execProbSingle.dispose();

    const progProb = [];
    const execProbPaced = await v4Runner.setupNet(device, w24, null, {
      ...entryProb,
      disableSubgroups: true,
      webgpuExecMode: 'paced',
    });
    const priorsPaced = await execProbPaced(input, {
      gpuNativeOutput: true,
      onProgress: (frac) => progProb.push(frac),
    });
    execProbPaced.dispose();

    results.catLite = {
      maxDiffGm: maxAbsDiff(priorsSingle[0], priorsPaced[0]),
      maxDiffWm: maxAbsDiff(priorsSingle[1], priorsPaced[1]),
      maxDiffCsf: maxAbsDiff(priorsSingle[2], priorsPaced[2]),
      progressTicks: progProb.length,
      monotonic: progProb.every((v, i) => i === 0 || v >= progProb[i - 1] - 1e-9),
    };

    // 4. Windows Firefox regression guard:
    //    (a) Intercept every WGSL shader compiled for Std + LowMem128 across GroupNorm
    //        and MindGrab (norm='none') and assert zero matrix types in `var<uniform>`
    //        (which Naga's HLSL backend emits as `row_major half2x4` with 32B row-padded stride).
    //    (b) Verify Firefox's redacted GPUAdapterInfo (`vendor: ''`) + sanitized Windows
    //        WebGL2 RENDERER (`Intel(R) HD Graphics 400, or similar`) still triggers LowMem128.
    const origAd = device.__adapterInfo;
    const origGl = device.__glRenderer;
    try {
      const entryMg = resolveModelEntry(inferenceModelsList.find((m) => m.id === 2), true);
      const wMg = new Uint8Array(await (await fetch('/models/mindgrab/model.safetensors')).arrayBuffer());

      const execMgRef = await v4Runner.setupNet(device, wMg, null, {
        ...entryMg,
        disableSubgroups: true,
        disableF16: true,
        webgpuExecMode: 'single',
      });
      const [outMgF32] = await execMgRef(input);
      execMgRef.dispose();

      // Simulate Windows Firefox (empty adapterInfo strings + sanitized WebGL2 RENDERER)
      device.__adapterInfo = { vendor: '', architecture: '', device: '', description: '' };
      device.__glRenderer = 'Intel(R) HD Graphics 400, or similar';

      const before24Mods = capturedWgsl.length;
      const exec24FfWin = await v4Runner.setupNet(device, w24, null, {
        ...entry24,
        disableSubgroups: true,
        webgpuExecMode: 'paced',
      });
      const ffWin24NewModules = capturedWgsl.length - before24Mods;
      const ffWinCone = exec24FfWin.__coneInfo?.() || null;
      const [out24FfWin] = await exec24FfWin(input);
      exec24FfWin.dispose();

      const beforeMgMods = capturedWgsl.length;
      const execMgFfWin = await v4Runner.setupNet(device, wMg, null, {
        ...entryMg,
        disableSubgroups: true,
        forceLowMem128: true,
        webgpuExecMode: 'paced',
      });
      const ffWinMgNewModules = capturedWgsl.length - beforeMgMods;
      const [outMgFfWin] = await execMgFfWin(input);
      execMgFfWin.dispose();

      const uniformMatDecls = capturedWgsl.filter((code) => /var<\s*uniform\s*>[^;]*\bmat\d+x\d+/s.test(code));
      let mgAgree = 0;
      for (let i = 0; i < outMgFfWin.length; i++) {
        if (outMgFfWin[i] === outMgF32[i]) mgAgree++;
      }
      results.windowsFirefox = {
        compiledShadersChecked: capturedWgsl.length,
        uniformMatShaderCount: uniformMatDecls.length,
        ffWin24NewModules,
        ffWinMgNewModules,
        ffWin24Mode: ffWinCone?.mode || 'Std',
        diff24FfWinVsSingle128: countDiffs(out24Single128, out24FfWin),
        mgF16VsF32AgreePct: (mgAgree / outMgFfWin.length) * 100,
      };
    } finally {
      device.__adapterInfo = origAd;
      device.__glRenderer = origGl;
    }

    const oom = await device.popErrorScope();
    const val = await device.popErrorScope();
    if (oom || val) {
      throw new Error(`WebGPU error scope caught: ${(oom || val).message}`);
    }
  } finally {
    device.destroy();
  }

  return results;
}
