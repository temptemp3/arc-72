"reach 0.1";
"use strict";

// Metadata ARC-72

export const selector = "0x9112544c";
const fTokenURI = Fun([UInt], Byte[256]); // returns a URI for a given tokenID
const api = {
  tokenURI: fTokenURI,
}
const Mixin = mixin({
  //Base: ARC72,
  IDs: [ Bytes.fromHex(selector) ],
  API: api
})
