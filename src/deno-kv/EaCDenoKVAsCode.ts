import { EaCDetails } from "./.deps.ts";
import { EaCDenoKVDetails, isEaCDenoKVDetails } from "./EaCDenoKVDetails.ts";

export type EaCDenoKVAsCode = {} & EaCDetails<EaCDenoKVDetails>;

export function isEaCDenoKVAsCode(eac: unknown): eac is EaCDenoKVAsCode {
  const x = eac as EaCDenoKVAsCode;

  return x && isEaCDenoKVDetails(x.Details);
}
