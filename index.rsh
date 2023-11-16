"reach 0.1";
"use strict";

// CONSTANTS

// baseUriLength is the length of ipfs://<v1-CID-in-base32-format>/
const baseUriLength = 67;
// This NFT is limitted to 10^3 tokens for the sake of the `tokenUri` method to construct a URI.  But this limit could be raised by extending the URI construction.
const maxNftId = 9999;
// This is the length of the meta data URI
const metadataUriByteLength = 256;

export const BOX_INDEX_NFT_DATA = 0;
export const BOX_INDEX_OPERATOR_DATA = 1;

// TYPES

export const State = Struct([
  ["adminAddress", Address], // admin address
  ["nMinted", UInt256], // number minted
  ["totalSupply", UInt256], // total supply
]);

export const NftId = UInt256;

export const metadataUriType = Bytes(metadataUriByteLength);

export const MAddress = Maybe(Address);

// Admin interface

export const fCurrentAdmin = Fun([], Address);
export const AdminView = {
  currentAdmin: fCurrentAdmin,
};
export const fUpdateAdmin = Fun([Address], Null);
export const AdminAPI = {
  updateAdmin: fUpdateAdmin,
};
export const rfUpdateAdmin = Fun([Contract, Address], Null);
export const RAdminAPI = {
  updateAdmin: rfUpdateAdmin,
};
export const rUpdateAdmin = (ctc, address) => {
  const r = remote(ctc, { updateAdmin: fUpdateAdmin });
  return r.updateAdmin(address);
};

// Mint interface

export const fMintTo = Fun([Address], NftId);
export const MintAPI = {
  mintTo: fMintTo,
};
export const rfMintTo = Fun([Contract, Address], NftId);
export const RMintAPI = {
  mintTo: rfMintTo,
};
export const rMintTo = (ctc, address) => {
  const r = remote(ctc, { mintTo: fMintTo });
  return r.mintTo(address);
};

// Burn interface

export const fBurn = Fun([NftId], Null);
export const BurnAPI = {
  burn: fBurn,
};

// ARC72 - Core NFT specification interface

export const Arc72CoreSelector = Bytes.fromHex("0x53f02a40"); // TODO validate this
export const fOwnerOf = Fun([NftId], MAddress);
export const Arc72CoreView = {
  arc72_ownerOf: fOwnerOf,
};
export const fTransferFrom = Fun([Address, Address, NftId], Null);
export const Arc72CoreAPI = {
  arc72_transferFrom: fTransferFrom,
};
export const eTransfer = [MAddress, MAddress, NftId];
export const Arc72CoreEvents = {
  arc72_Transfer: eTransfer,
};

// ARC72 - Metadata extension interface

export const Arc72MetadataSelector = Bytes.fromHex("0xc3c1f000"); // TODO validate this
export const fTokenURI = Fun([NftId], metadataUriType);
export const ARC72MetadataView = {
  arc72_tokenURI: fTokenURI,
};

// ARC72 - Transfer management extension interface

export const Arc72TransferManagementSelector = Bytes.fromHex("0xb9c6f696"); // TODO validate this
export const fApprove = Fun([Address, NftId], Null);
export const fSetApprovalForAll = Fun([Address, Bool], Null);
export const Arc72TransferManagementAPI = {
  arc72_approve: fApprove,
  arc72_setApprovalForAll: fSetApprovalForAll,
};
export const vGetApproved = Fun([NftId], MAddress);
export const vIsApprovedForAll = Fun([MAddress, MAddress], Bool);
export const Arc72TransferManagementView = {
  arc72_getApproved: vGetApproved,
  arc72_isApprovedForAll: vIsApprovedForAll,
};
export const eApproval = [MAddress, MAddress, NftId];
export const eApprovalForAll = [MAddress, MAddress, Bool];
export const Arc72TransferManagementEvents = {
  arc72_Approval: eApproval,
  arc72_ApprovalForAll: eApprovalForAll,
};



// Enumeration extension interface

export const Arc72EnumerationSelector = Bytes.fromHex("0xef470855");
export const fBalanceOf = Fun([Address], UInt256);
export const fTotalSupply = Fun([], UInt256);
export const fTokenByIndex = Fun([UInt256], NftId);
export const Arc72EnumerationView = {
  arc72_balanceOf: fBalanceOf,
  arc72_totalSupply: fTotalSupply,
  arc72_tokenByIndex: fTokenByIndex,
};

// Supported interface

export const ARC73SupportedSelector = Bytes.fromHex("0x4e22a3ba"); // TODO validate this
export const fSupportsInterface = Fun([Bytes(4)], Bool);
export const ARC73SupportedView = {
  arc73_supportsInterface: fSupportsInterface,
};
export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};


// API

export const Arc72API = {
  ...Arc72CoreAPI,
  ...Arc72TransferManagementAPI,
};
export const api = {
  ...Arc72API,
  ...AdminAPI,
  ...MintAPI,
  ...BurnAPI,
};

// VIEW

export const fState = Fun([], State);
export const StateView = {
  state: fState,
};
export const Arc72View = {
  ...Arc72CoreView,
  ...ARC72MetadataView,
  ...Arc72TransferManagementView,
  ...Arc72EnumerationView,
};
export const view = {
  ...Arc72View,
  ...ARC73SupportedView,
  ...AdminView,
  ...StateView,
};

// EVENTS

export const eLaunch = [];
export const appEvents = {
  Launch: eLaunch,
};
export const Arc72Events = {
  ...Arc72CoreEvents,
  ...Arc72TransferManagementEvents,
};
export const events = { ...Arc72Events, ...appEvents };

// PARTICIPANTS

const fReady = Fun([], Null);
const fParams = Object({
  metadataUriBase: Bytes(baseUriLength),
});
const managerInteract = {
  ready: fReady,
  params: fParams,
};
export const Deployer = () => {
  return Participant("Manager", managerInteract);
};

// SUPPORTED

const supportedInterfaces = [
  // ARC-73 (supportsInterface)
  ARC73SupportedSelector,
  // ARC-72 Core
  Arc72CoreSelector,
  // ARC-72 Metadata extension
  Arc72MetadataSelector,
  // ARC-72 Transfer Management extension
  Arc72TransferManagementSelector,
  // ARC-72 Enumeration extension
  Arc72EnumerationSelector,
];

// CONTRACT

export const main = Reach.App(() => {
  setOptions({
    connectors: [ALGO],
  });
  const D = Deployer();
  const A = API(api);
  const V = View(view);
  const E = Events(events);

  init();
  D.only(() => {
    const params = declassify(interact.params);
  });
  D.publish(params);

  // ---------------------------------------------
  // nftData is [ownerAddress, approvedAddress]
  // ---------------------------------------------
  const nftData = new Map(NftId, Tuple(MAddress, MAddress));
  const getNft = (nftId, mustExist) => {
    if (mustExist) {
      check(isSome(nftData[nftId]), "nft must exist");
    }
    return fromSome(nftData[nftId], [MAddress.None(), MAddress.None()]);
  };
  const getNftOwner = (nftId, mustExist) => getNft(nftId, mustExist)[0];
  const getNftApproved = (nftId, mustExist) => getNft(nftId, mustExist)[1];
  // ---------------------------------------------

  // ---------------------------------------------
  // operatorData is [ownerAddress, operatorAddress]
  // ---------------------------------------------
  const operatorData = new Map(Tuple(MAddress, MAddress), Bool);
  const getApprovalForAll = (owner, operator) => {
    return fromSome(operatorData[[owner, operator]], false);
  };
  const canTransfer = (nftId, addr) => {
    const [owner, controller] = getNft(nftId, true);
    return (
      (isSome(owner) && addr == fromSome(owner, D)) ||
      (isSome(controller) && addr == fromSome(controller, D)) ||
      getApprovalForAll(owner, MAddress.Some(addr))
    );
  };
  // ---------------------------------------------

  D.interact.ready();
  E.Launch();

  const initialState = {
    adminAddress: D,
    nMinted: UInt256(0),
    totalSupply: UInt256(0),
  };

  // TODO dump view
  const [s] = parallelReduce([initialState])
    .define(() => {
      // ---------------------------------------------
      // helpers
      // ---------------------------------------------
      const tokenURI = (nftId) => {
        check(isSome(nftData[nftId]), "nft must exist");
        const idShort = UInt(nftId, true);
        const digitArr = array(Bytes(1), [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ]);
        const digit0 = digitArr[idShort % 10];
        const digit1 = digitArr[(idShort / 10) % 10];
        const digit2 = digitArr[(idShort / 100) % 10];
        const digit3 = digitArr[(idShort / 1000) % 10];
        const digits1 = Bytes.concat(digit1, digit0);
        const digits2 = Bytes.concat(digit2, digits1);
        const digits3 = Bytes.concat(digit3, digits2);
        const uri = Bytes.concat(params.metadataUriBase, digits3);
        return metadataUriType.pad(uri);
      };
      // ---------------------------------------------

      // ---------------------------------------------
      // initialize view
      // ---------------------------------------------
      V.arc72_ownerOf.set((nftId) => getNftOwner(nftId, false));
      V.arc72_tokenURI.set(tokenURI);
      V.arc72_getApproved.set((nftId) => getNftApproved(nftId, false));
      V.arc72_isApprovedForAll.set(getApprovalForAll);
      V.arc72_totalSupply.set(() => s.totalSupply);
      V.arc72_balanceOf.set((_) => UInt256(0));
      V.arc72_tokenByIndex.set((_) => NftId(0));
      V.arc73_supportsInterface.set(supportsInterface(supportedInterfaces));
      V.currentAdmin.set(() => s.adminAddress);
      V.state.set(() => State.fromObject(s));
      // ---------------------------------------------
    })
    .invariant(balance() === 0)
    .while(true)
    // (admin) api: updateAdmin (address) -> null
    // - admin can change admin
    .api_(A.updateAdmin, (newAdmin) => {
      check(s.adminAddress == this, "must be admin to update admin");
      return [
        (k) => {
          k(null);
          return [{ ...s, adminAddress: newAdmin }];
        },
      ];
    })
    // (admin) api: mintTo (address) -> nftId
    // - admin can mint to any address
    .api_(A.mintTo, (firstOwner) => {
      check(s.adminAddress == this, "must be admin to mint to address");
      check(s.nMinted <= UInt256(maxNftId), "already minted max NFT");
      const nftId = s.nMinted + UInt256(1);
      const newTotalSupply = s.totalSupply + UInt256(1);
      return [
        (k) => {
          nftData[nftId] = [MAddress.Some(firstOwner), MAddress.None()];
          E.arc72_Transfer(MAddress.None(), MAddress.Some(firstOwner), nftId);
          k(nftId);
          return [
            {
              ...s,
              nMinted: nftId,
              totalSupply: newTotalSupply,
            },
          ];
        },
      ];
    })
    // (owner | operator) api: transferFrom (address, address, nftId) -> null
    // - owner or approved operator can transfer to any address
    .api_(A.arc72_transferFrom, (oldOwner, newOwner, nftId) => {
      const oldOwnerReal = getNftOwner(nftId, true);
      check(oldOwner != newOwner, "must transfer to different address");
      check(
        isNone(oldOwnerReal) || newOwner != fromSome(oldOwnerReal, D),
        "must transfer to different real address"
      );
      check(
        isNone(oldOwnerReal) || oldOwner == fromSome(oldOwnerReal, D),
        "nft must exists and owner specified in must be correct"
      );
      check(
        canTransfer(nftId, this),
        "must be existing nft owner or approved operator"
      );
      return [
        (k) => {
          nftData[nftId] = [MAddress.Some(newOwner), MAddress.None()];
          E.arc72_Transfer(MAddress.Some(oldOwner), MAddress.Some(newOwner), nftId);
          k(null);
          return [s];
        },
      ];
    })
    // (owner | operator) api: burn (nftId) -> null
    // - owner or operator can burn nft
    .api_(A.burn, (nftId) => {
      const owner = getNftOwner(nftId, true);
      check(
        canTransfer(nftId, this),
        "must be existing nft owner or approved operator to burn"
      );
      return [
        (k) => {
          delete nftData[nftId];
          E.arc72_Transfer(owner, MAddress.None(), nftId);
          k(null);
          return [
            {
              ...s,
              totalSupply: s.totalSupply - UInt256(1),
            },
          ];
        },
      ];
    })
    // (owner) api: approve
    // - owner can approve controller
    .api_(A.arc72_approve, (controller, nftId) => {
      const owner = getNftOwner(nftId, true);
      check(isSome(owner), "nft must exist");
      check(
        this == fromSome(owner, D),
        "must be nft owner to approve controller"
      );
      return [
        (k) => {
          nftData[nftId] = [owner, MAddress.Some(controller)];
          E.arc72_Approval(owner, MAddress.Some(controller), nftId);
          k(null);
          return [s];
        },
      ];
    })
    // (anyone) api: setApprovalForAll (address, bool) -> null
    // - anyone can approve an operator
    .api_(A.arc72_setApprovalForAll, (operator, tOrF) => {
      return [
        (k) => {
          if (tOrF) {
            operatorData[[MAddress.Some(this), MAddress.Some(operator)]] = true;
          } else {
            delete operatorData[[MAddress.Some(this), MAddress.Some(operator)]];
          }
          E.arc72_ApprovalForAll(MAddress.Some(this), MAddress.Some(operator), tOrF);
          k(null);
          return [s];
        },
      ];
    });
  commit();
  exit();
});
