import { EaCVertexDetails } from "./.deps.ts";

export type EaCDenoKVDetails = {
  DenoKVPath?: string;
} & EaCVertexDetails;

export function isEaCDenoKVDetails(
  details: unknown,
): details is EaCDenoKVDetails {
  const x = details as EaCDenoKVDetails;

  return !!x;
}
