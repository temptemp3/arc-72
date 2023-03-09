"reach 0.1";
"use strict";

// CONSTANTS

// baseUriLength is the length of ipfs://<v1-CID-in-base32-format>/
const baseUriLength = 67;
// This NFT is limitted to 10^3 tokens for the sake of the `tokenUri` method to construct a URI.  But this limit could be raised by extending the URI construction.
const maxNftId = 9999;
// This is the length of the meta data URI
const metadataUriByteLength = 256;

// TYPES

export const State = Struct([
  ["adminAddress", Address], // admin address
  ["nMinted", UInt256], // number minted
  ["totalSupply", UInt256], // total supply
]);

export const NftId = UInt256;

export const metadataUriType = Bytes(metadataUriByteLength);

export const MAddress = Maybe(Address);

// TODO adminAddress -> manager
// TODO updateAdmin -> grant

// Supported interface

export const SupportedSelector = Bytes.fromHex("0x4e22a3ba");
export const fSupportsInterface = Fun([Bytes(4)], Bool);
export const SupportedView = {
  supportsInterface: fSupportsInterface,
};

// Admin interface

export const AdminSelector = Bytes.fromHex("0xffffffff");
export const fCurrentAdmin = Fun([], Address);
export const AdminView = {
  currentAdmin: fCurrentAdmin,
};
export const fUpdateAdmin = Fun([Address], Null);
export const AdminAPI = {
  updateAdmin: fUpdateAdmin,
};

// Mint interface

export const fMintTo = Fun([Address], NftId);
export const MintAPI = {
  mintTo: fMintTo,
};
export const rMintTo = Fun([Contract, Address], NftId);
export const RMintAPI = {
  mintTo: rMintTo,
}

// Burn interface

export const fBurn = Fun([NftId], Null);
export const BurnAPI = {
  burn: fBurn,
};

// Core NFT specification interface

export const Arc72CoreSelector = Bytes.fromHex("0x15974096");
export const fOwnerOf = Fun([NftId], MAddress);
export const Arc72CoreView = {
  ownerOf: fOwnerOf,
};
export const fTransferFrom = Fun([Address, Address, NftId], Null);
export const Arc72CoreAPI = {
  transferFrom: fTransferFrom,
};
export const eTransfer = [MAddress, MAddress, NftId];
export const Arc72CoreEvents = {
  Transfer: eTransfer,
};

// Metadata extension interface

export const Arc72MetadataSelector = Bytes.fromHex("0x9112544c");
export const fTokenURI = Fun([NftId], metadataUriType);
export const ARC72MetadataView = {
  tokenURI: fTokenURI,
};

// Transfer management extension interface

export const Arc72TransferManagementSelector = Bytes.fromHex("0x924d64fb");
export const fApprove = Fun([Address, NftId], Null);
export const fSetApprovalForAll = Fun([Address, Bool], Null);
export const Arc72TransferManagementAPI = {
  approve: fApprove,
  setApprovalForAll: fSetApprovalForAll,
};
export const vGetApproved = Fun([NftId], MAddress);
export const vIsApprovedForAll = Fun([MAddress, MAddress], Bool);
export const Arc72TransferManagementView = {
  getApproved: vGetApproved,
  isApprovedForAll: vIsApprovedForAll,
};
export const eApproval = [MAddress, MAddress, NftId];
export const eApprovalForAll = [MAddress, MAddress, Bool];
export const Arc72TransferManagementEvents = {
  Approval: eApproval,
  ApprovalForAll: eApprovalForAll,
};

// Enumeration extension interface

export const Arc72EnumerationSelector = Bytes.fromHex("0xef470855");
export const fBalanceOf = Fun([Address], UInt256);
export const fTotalSupply = Fun([], UInt256);
export const fTokenByIndex = Fun([UInt256], NftId);
export const Arc72EnumerationView = {
  balanceOf: fBalanceOf,
  totalSupply: fTotalSupply,
  tokenByIndex: fTokenByIndex,
};

// FUN

const supportedInterfaces = [
  // ARC-73 (supportsInterface)
  SupportedSelector,
  // ARC-72 Core
  Arc72CoreSelector,
  // ARC-72 Metadata extension
  Arc72MetadataSelector,
  // ARC-72 Transfer Management extension
  Arc72TransferManagementSelector,
  // ARC-72 Enumeration extension
  Arc72EnumerationSelector,
];
const supportsInterface = (interfaces) => (interfaceSelector) => {
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
  ...SupportedView,
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
      V.ownerOf.set((nftId) => getNftOwner(nftId, false));
      V.tokenURI.set(tokenURI);
      V.supportsInterface.set(supportsInterface(supportedInterfaces));
      V.getApproved.set((nftId) => getNftApproved(nftId, false));
      V.isApprovedForAll.set(getApprovalForAll);
      V.totalSupply.set(() => s.totalSupply);
      V.currentAdmin.set(() => s.adminAddress);
      V.balanceOf.set((_) => UInt256(0));
      V.tokenByIndex.set((_) => NftId(0));
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
          E.Transfer(MAddress.None(), MAddress.Some(firstOwner), nftId);
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
    .api_(A.transferFrom, (oldOwner, newOwner, nftId) => {
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
          E.Transfer(MAddress.Some(oldOwner), MAddress.Some(newOwner), nftId);
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
          E.Transfer(owner, MAddress.None(), nftId);
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
    .api_(A.approve, (controller, nftId) => {
      const owner = getNftOwner(nftId, true);
      check(isSome(owner), "nft must exist");
      check(
        this == fromSome(owner, D),
        "must be nft owner to approve controller"
      );
      return [
        (k) => {
          nftData[nftId] = [owner, MAddress.Some(controller)];
          E.Approval(owner, MAddress.Some(controller), nftId);
          k(null);
          return [s];
        },
      ];
    })
    // (anyone) api: setApprovalForAll (address, bool) -> null
    // - anyone can approve an operator
    .api_(A.setApprovalForAll, (operator, tOrF) => {
      return [
        (k) => {
          if (tOrF) {
            operatorData[[MAddress.Some(this), MAddress.Some(operator)]] = true;
          } else {
            delete operatorData[[MAddress.Some(this), MAddress.Some(operator)]];
          }
          E.ApprovalForAll(MAddress.Some(this), MAddress.Some(operator), tOrF);
          k(null);
          return [s];
        },
      ];
    });
  commit();
  exit();
});
