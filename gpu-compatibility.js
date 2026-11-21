export function isLinuxMesaIntelGen9(renderer) {
  return /Linux/i.test(globalThis.navigator?.platform || '') &&
    /\bMesa\b/i.test(renderer) && /\bIntel\b/i.test(renderer) &&
    /\b(?:WHL|KBL|CFL|SKL|CML)\b/i.test(renderer);
}
