// Enumeration (partial) ARC-72

export const selector = "0x8d5a7006";
const fTotalSupply = Fun([], UInt);
export const api = {
  totalSupply: fTotalSupply,
}
export const Mixin = mixin({
  API: [ api ]
})
