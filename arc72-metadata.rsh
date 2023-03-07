"reach 0.1";
"use strict";

// Metadata ARC-72

import { Mixin as Arc72Core } from "./arc72-core.rsh";

export const selector = "0x9112544c";
const fTokenURI = Fun([UInt], StringDyn); // returns a URI for a given tokenID
export const view = {
  tokenURI: fTokenURI,
};
export const Mixin = mixin({
  Base: Arc72Core,
  IDs: [Bytes.fromHex(selector)],
  View: [view],
});
