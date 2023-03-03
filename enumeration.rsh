// Enumeration ARC-72

export const selector = "0x8d5a7006";
const fBalanceOf = Fun([Address], UInt);
const fTotalSupply = Fun([], UInt);
const fTokenByIndex = Fun([UInt], UInt);
const fTokenOfOwnerByIndex = Fun([Address, UInt], UInt);
export const api = {
  balanceOf: fBalanceOf,
  totalSupply: fTotalSupply,
  tokenByIndex: fTokenByIndex,
  tokenOfOwnerByIndex: fTokenOfOwnerByIndex,
}
const Mixin = mixin({
  //Base: ARC72,
  IDs: [ Bytes.fromHex(selector) ],
  API: [ api ]
})
