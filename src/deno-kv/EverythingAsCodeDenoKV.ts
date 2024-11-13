import { DenoKVAsCode } from "./EaCDenoKVAsCode.ts";

export type EverythingAsCodeDenoKV = {
  DenoKVs?: Record<string, DenoKVAsCode>;
};

export function isEverythingAsCodeDenoKV(
  eac: unknown,
): eac is EverythingAsCodeDenoKV {
  const x = eac as EverythingAsCodeDenoKV;

  return x.DenoKVs !== undefined;
}
