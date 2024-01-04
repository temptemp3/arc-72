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
  ["manager", Address], // admin address
  ["nMinted", UInt256], // number minted
  ["totalSupply", UInt256], // total supply
]);

export const MetadataURI = Bytes(metadataUriByteLength);

export const MAddress = Maybe(Address);

const Params = Object({
  zeroAddress: Address,
  metadataUriBase: Bytes(baseUriLength),
});

const NFTData = Struct([
  ["owner", Address],
  ["approved", Address],
]);

// FUNCTIONS

// - Supported interface

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

// CONTRACT

export const ARC72 = Reach.App(() => {
  setOptions({
    connectors: [ALGO],
  });
  const supportedInterfaces = [
    Bytes.fromHex("0x53f02a40"), // ARC-72 Core
    Bytes.fromHex("0xc3c1f000"), // ARC-72 Metadata
    Bytes.fromHex("0xb9c6f696"), // ARC-72 Transfer Management
    Bytes.fromHex("0xef470855"), // ARC-72 Enumeration
    Bytes.fromHex("0x4e22a3ba"), // ARC-73 Supported
  ];
  const D = Participant("Deployer", {
    params: Params,
    ready: Fun([Contract], Null),
  });
  const A = API({
    // ARC72 Core API
    arc72_transferFrom: Fun([Address, Address, UInt256], Null),
    // ARC72 Transfer Management Extension API
    arc72_approve: Fun([Address, UInt256], Null),
    arc72_setApprovalForAll: Fun([Address, Bool], Null), // requires mod: byte to bool in teal
    // Admin API
    grant: Fun([Address], Null),
    // Mint API
    mintTo: Fun([Address], UInt256),
    // Burn API
    burn: Fun([UInt256], Null),
    // Touch API
    touch: Fun([], Null),
    // Box API
    deleteNftDataBox: Fun([UInt256], Null),
    deleteOperatorDataBox: Fun([Address, Address], Null),
    // Close API
    close: Fun([], Null),
  });
  const V = View({
    // ARC72 Core View
    arc72_ownerOf: Fun([UInt256], Address),
    // ARC72 Transfer Management Extension View
    arc72_getApproved: Fun([UInt256], Address),
    arc72_isApprovedForAll: Fun([Address, Address], Bool), // requires mod: byte to bool in teal
    // ARC72 Enumeration Extension View
    arc72_balanceOf: Fun([Address], UInt256),
    arc72_totalSupply: Fun([], UInt256),
    arc72_tokenByIndex: Fun([UInt256], UInt256),
    // ARC72 Metadata Extension View
    arc72_tokenURI: Fun([UInt256], MetadataURI),
    // ARC73 Supported View
    supportsInterface: Fun([Bytes(4)], Bool),
    // Admin View
    manager: Fun([], Address),
    // State View
    state: Fun([], State),
  });
  const N = Events({
    // ARC72 Core Events
    arc72_Transfer: [Address, Address, UInt256],
    // ARC72 Transfer Management Extension Events
    arc72_Approval: [Address, Address, UInt256],
    arc72_ApprovalForAll: [Address, Address, Bool], // requires mod: byte to bool in teal
  });
  init();
  D.only(() => {
    const p = declassify(interact.params);
  });
  D.publish(p);

  const invalidToken = NFTData.fromObject({
    owner: p.zeroAddress,
    approved: p.zeroAddress,
  });

  // ---------------------------------------------
  // nftData is [ownerAddress, approvedAddress]
  // ---------------------------------------------
  const nftData = new Map(UInt256, NFTData);
  // ---------------------------------------------
  // operatorData is [ownerAddress, operatorAddress]
  // ---------------------------------------------
  const operatorData = new Map(Tuple(Address, Address), Bool);
  // ---------------------------------------------
  // getTokenById :: UInt256 -> Bool
  const tokenExists = (tokenId) => isSome(nftData[tokenId]);
  // getTokenById :: UInt256 -> NFTData
  const getTokenById = (tokenId) => fromSome(nftData[tokenId], invalidToken);
  // ownerOf :: UInt256 -> Address
  const ownerOf = (tokenId) => getTokenById(tokenId).owner;
  // getApprovedById :: UInt256 -> Address
  const approvedOf = (tokenId) => getTokenById(tokenId).approved;
  // isOwner :: UInt256 -> Address -> Bool
  const isOwner = (tokenId, addr) => ownerOf(tokenId) == addr;
  // isApproved :: UInt256 -> Address -> Bool
  const isApproved = (tokenId, addr) => approvedOf(tokenId) == addr;
  // getApprovalForAll :: Address -> Address -> Bool
  const getApprovalForAll = (owner, operator) => {
    return fromSome(operatorData[[owner, operator]], false);
  };
  // canTransfer :: UInt256 -> Address -> Bool
  const canTransfer = (nftId, addr) => {
    const [owner, controller] = getTokenById(nftId);
    return (
      owner == addr || controller == addr || getApprovalForAll(owner, addr)
    );
  };
  // operatorOf :: UInt256 -> Address -> Bool
  const operatorOf = (tokenId, addr) => {
    return (
      fromSome(operatorData[[ownerOf(tokenId), addr]], false) ||
      isApproved(tokenId, addr)
    );
  };
  // ---------------------------------------------

  D.interact.ready(getContract());

  const initialState = {
    // HOT
    manager: D,
    nMinted: UInt256(0),
    totalSupply: UInt256(0),
    // COLD
    zeroAddress: p.zeroAddress,
    metadataUriBase: p.metadataUriBase,
  };

  const [s] = parallelReduce([initialState])
    .define(() => {
      // ---------------------------------------------
      // helpers
      // ---------------------------------------------
      const isManager = (addr) => addr == s.manager;
      const currentManager = () => s.manager;
      const tokenURI = (tokenId) => {
        check(isSome(nftData[tokenId]), "nft must exist");
        const idShort = UInt(tokenId, true);
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
        const uri = Bytes.concat(p.metadataUriBase, digits3);
        return MetadataURI.pad(uri);
      };
      // ---------------------------------------------

      // ---------------------------------------------
      // initialize view
      // ---------------------------------------------
      // ownerOf :: UInt256 -> Address
      // Ownership of token ID by zero address indicates token ID is not owned by anyone or invalid.
      // The arc72_ownerOf method MUST return zero address for invalid token IDs.
      V.arc72_ownerOf.set(ownerOf);
      // tokenURI :: UInt256 -> MetadataURI
      V.arc72_tokenURI.set(tokenURI);
      V.arc72_getApproved.set(approvedOf);
      V.arc72_isApprovedForAll.set(getApprovalForAll);
      V.arc72_totalSupply.set(() => s.totalSupply);
      V.arc72_balanceOf.set((_) => UInt256(0)); // TODO not yet implemented
      V.arc72_tokenByIndex.set((_) => UInt256(0)); // TODO not yet implemented
      V.supportsInterface.set(supportsInterface(supportedInterfaces));
      V.manager.set(currentManager);
      V.state.set(() => State.fromObject(s));
      // ---------------------------------------------
    })
    .invariant(balance() === 0)
    .while(true)
    // (admin) api: grant
    // - manager can grant address to be the new manager
    .api_(A.grant, (addr) => {
      check(isManager(this), "must be manager to grant");
      return [
        (k) => {
          k(null);
          return [{ ...s, manager: addr }];
        },
      ];
    })
    // (admin) api: mintTo (address) -> nftId
    // - admin can mint to any address
    // owner of token initialized to addr
    // approved of token initialized to zero address
    .api_(A.mintTo, (addr) => {
      check(s.manager == this, "must be admin to mint to address");
      check(s.nMinted <= UInt256(maxNftId), "already minted max NFT");
      const tokenId = s.nMinted + UInt256(1); //
      const newTotalSupply = s.totalSupply + UInt256(1);
      return [
        (k) => {
          nftData[tokenId] = NFTData.fromObject({
            owner: addr,
            approved: p.zeroAddress, // The zero address indicates there is no approved address
          });
          // arc72_Transfer event SHOULD emit with from being zero address when first minted
          N.arc72_Transfer(p.zeroAddress, addr, tokenId);
          k(tokenId);
          return [
            {
              ...s,
              nMinted: tokenId,
              totalSupply: newTotalSupply,
            },
          ];
        },
      ];
    })
    // (owner | operator) api: transferFrom (address, address, nftId) -> null
    // - owner or approved operator can transfer to any address
    //
    // The arc72_transferFrom method, when its token id is ownded by its from argument,
    // MUST succeed for when called by an address that isi approved for the given NFT or approved as operator for the owner.
    //
    .api_(A.arc72_transferFrom, (addrFrom, addrTo, tokenId) => {
      check(tokenExists(tokenId), "nft must exist");
      // arc72_transferFrom MUST error when from is not owner
      check(addrFrom != ownerOf(tokenId), "ARC72: must be owner or operator");
      // arc72_transferFrom MUST error unless called by owner or approved operator
      check(
        this === ownerOf(tokenId) || operatorOf(tokenId, this),
        "ARC72: must be owner or operator to transfer"
      );
      check(addrFrom != addrTo, "must transfer to different address");
      check(addrFrom == p.zeroAddress, "must not transfer from zero address");
      check(addrTo == p.zeroAddress, "must not be burned");
      check(
        addrTo == approvedOf(tokenId),
        "must not be sent to approved address"
      );
      check(
        canTransfer(tokenId, this),
        "must be nft owner or approved operator"
      );
      return [
        (k) => {
          nftData[tokenId] = NFTData.fromObject({
            owner: addrTo,
            approved: p.zeroAddress, // arc72_Transfer event emits, this also indicates no approved addresss
          });
          // arc72_transferFrom MUST emit Transfer event when a transfer is successful
          N.arc72_Transfer(addrFrom, addrTo, tokenId);
          k(null);
          return [s];
        },
      ];
    })
    // The contract MUST allow multiple operators per owner
    // (owner) api: approve
    // - owner can approve controller
    .api_(A.arc72_approve, (addr, tokenId) => {
      check(tokenExists(tokenId), "nft must exist");
      check(isOwner(tokenId, this), "must be nft owner");
      return [
        (k) => {
          nftData[tokenId] = NFTData.fromObject({
            owner: this,
            approved: addr,
          });
          // arc72_Approval event MUST emit when a controller is approved
          N.arc72_Approval(this, addr, tokenId);
          k(null);
          return [s];
        },
      ];
    })
    // (anyone) api: setApprovalForAll (address, bool) -> null
    // - anyone can approve an operator
    .api_(A.arc72_setApprovalForAll, (addr, approval) => {
      return [
        (k) => {
          operatorData[[this, addr]] = approval;
          // arc72_setApprovalForAll event MUST emit when an operator is approved
          N.arc72_ApprovalForAll(this, addr, approval);
          k(null);
          return [s];
        },
      ];
    })
    // (owner | operator) api: burn (nftId) -> null
    // - owner or operator can burn nft
    .api_(A.burn, (tokenId) => {
      check(isOwner(tokenId, this), "must be nft owner");
      check(
        canTransfer(tokenId, this),
        "must be existing nft owner or approved operator to burn"
      );
      return [
        (k) => {
          delete nftData[tokenId];
          // arc72_transferFrom SHOULD emit with to being zero address when burned
          N.arc72_Transfer(this, p.zeroAddress, tokenId);
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
    // (anyone) api: touch -> null
    // - anyone can touch
    .api_(A.touch, () => {
      return [
        (k) => {
          const ut = getUntrackedFunds();
          transfer(ut).to(s.manager);
          k(null);
          return [s];
        },
      ];
    })
    // (manager) api: deleteNftDataBox (nftId) -> null
    // - manager can delete nft data box
    .api_(A.deleteNftDataBox, (tokenId) => {
      check(isManager(this), "must be manager to delete nft data box");
      return [
        (k) => {
          delete nftData[tokenId];
          k(null);
          return [s];
        },
      ];
    })
    // (manager) api: deleteOperatorDataBox (owner, operator) -> null
    // - manager can delete operator data box
    .api_(A.deleteOperatorDataBox, (owner, operator) => {
      check(isManager(this), "must be manager to delete operator data box");
      return [
        (k) => {
          delete operatorData[[owner, operator]];
          k(null);
          return [s];
        },
      ];
    })
    // api: close -> null
    // - manager can close (dev-only)
    .api_(A.close, () => {
      check(isManager(this), "must be manager to close");
      return [
        (k) => {
          k(null);
          return [s];
        },
      ];
    });
  commit();
  exit();
});

export const main = ARC72;
