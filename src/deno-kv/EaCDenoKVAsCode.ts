import { EaCDetails } from "./.deps.ts";
import { EaCDenoKVDetails, isEaCDenoKVDetails } from "./EaCDenoKVDetails.ts";

export type DenoKVAsCode = {} & EaCDetails<EaCDenoKVDetails>;

export function isDenoKV(eac: unknown): eac is DenoKVAsCode {
  const x = eac as DenoKVAsCode;

  return x && isEaCDenoKVDetails(x.Details);
}
