"reach 0.1";
"use strict";

// Transfer Management ARC-72

export const selector = "0x924d64fb";
const fApprove = Fun([Address, UInt], Null);
const fApproveForAll = Fun([Address, Bool], Null);
const fGetApproved = Fun([UInt], Address);
const fIsApprovedForAll = Fun([Address, Address], Bool);
export const api = {
  approve: fApprove,
  approveForAll: fApproveForAll,
  getApproved: fGetApproved,
  isApprovedForAll: fIsApprovedForAll,
}
const eApproval = [Address, Address, UInt];
const eApprovalForAll = [Address, Address, Bool];
export const events = {
  Approval: eApproval,
  ApprovalForAll: eApprovalForAll,
};
const Mixin = mixin({
  //Base: ARC72,
  IDs: [ Bytes.fromHex(selector) ],
  API: [ api ],
  Events: [ events]
})
