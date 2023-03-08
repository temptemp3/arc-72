"reach 0.1";
"use strict";

import { Mixin as Arc72Core } from "./arc72-core.rsh";

//import { Mixin as Enumeratable } from "./arc72-enumeration.rsh";

const vTotalSupply = UInt;
const vTokenByIndex = Fun([UInt], UInt);
export const Enumeratable = mixin({
  Base: Arc72Core,
  IDs: [Bytes.fromHex("0x8d5a7006")],
  View: [
    {
      totalSupply: vTotalSupply,
      tokenByIndex: vTokenByIndex,
    },
  ],
});

//import { Mixin as Metadata } from "./arc72-metadata.rsh";

const fTokenURI = Fun([UInt], StringDyn); // returns a URI for a given tokenID
export const Metadata = mixin({
  Base: Arc72Core,
  IDs: [Bytes.fromHex("0x9112544c")],
  View: [{ tokenURI: fTokenURI }],
});

export const main = Reach.App(() => {
  setOptions({ connectors: [ALGO] });
  const { /*IDs,*/ View: V /*, Events: E, API: A*/ } = Enumeratable(Metadata);
  const D = Participant("Deployer", {});
  init();
  D.publish();
  V.totalSupply.set(0);
  commit();
  exit();
});
