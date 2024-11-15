import { EaCDenoKVAsCode } from "./EaCDenoKVAsCode.ts";

export type EverythingAsCodeDenoKV = {
  DenoKVs?: Record<string, EaCDenoKVAsCode>;
};

export function isEverythingAsCodeDenoKV(
  eac: unknown,
): eac is EverythingAsCodeDenoKV {
  const x = eac as EverythingAsCodeDenoKV;

  return x.DenoKVs !== undefined;
}
