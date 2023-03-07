"reach 0.1";
"use strict";

// Enumeration ARC-72

import { Mixin as Arc72Core } from "./arc72-core.rsh";

export const selector = "0x8d5a7006";
const vTotalSupply = UInt;
const vTokenByIndex = Fun([UInt], UInt);
export const view = {
  totalSupply: vTotalSupply,
  tokenByIndex: vTokenByIndex,
};
export const Mixin = mixin({
  Base: Arc72Core,
  IDs: [Bytes.fromHex(selector)],
  View: [view],
});
