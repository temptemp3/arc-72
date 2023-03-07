"reach 0.1";
"use strict";

// Core ARC-72

export const selector = "0x15974096"; 
const fOwnerOf = Fun([UInt], Address); // returns address of current owner of the NFT with given tokenID
const fTransferFrom = Fun([Address, Address, UInt], Null); // transfers ownership of an NFT
export const api = {
  ownerOf: fOwnerOf,
  transferFrom: fTransferFrom,
}
const eTransfer = [Address, Address, UInt]; // emitted when ownership of an NFT changes
export const events = {
  Transfer: eTransfer,
}
export const Mixin = mixin({
  IDs: [ Bytes.fromHex(selector) ],
  API: [ api ],
  Events: [ events ],
})
