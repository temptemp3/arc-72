"reach 0.1";
"use strict";

import { fMintTo, NftId } from "@temptemp3/arc-72#arc-72-v0.1.13r0:index.rsh";

// Supported interface

export const SupportedSelector = Bytes.fromHex("0x4e22a3ba");
export const fSupportsInterface = Fun([Bytes(4)], Bool);
export const SupportedView = {
  supportsInterface: fSupportsInterface,
};

// TYPES

export const State = Struct([
  ["nMinted", UInt256],
]);

export const Params = Object({});

// FUN

const supportedInterfaces = [
  SupportedSelector,
];
const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

// REMOTE FUN

const rMintTo = (ctc, addr, addrs) => {
  const r = remote(ctc, { mintTo: fMintTo });
  return r.mintTo(addr, addrs);
};

// arc72 mintTo
// arc72 updateManager

// VIEW

export const StateView = {
  state: State,
};
export const view = {
  ...SupportedView,
  ...StateView,
};

// API

const RMintAPI = {
  mintTo: Fun([Contract, Address], NftId),
}
export const api = {
  ...RMintAPI
};

// EVENTS

export const eLaunch = [];
export const appEvents = {
  Launch: eLaunch,
};
export const events = {
  ...appEvents,
};

// CONTRACT

export const Participants = () => [
  Participant("Manager", {
    getParams: Fun([], Params),
    ready: Fun([], Null),
  }),
];
export const Views = () => [View(view)];
export const Api = () => [API(api)];
export const Event = () => [Events(events)];
export const Options = { connectors: [ALGO] };
export const App = (map) => {
  const [_, _, [M], [V], [A], [E]] = map;
  M.only(() => {
    const params = declassify(interact.getParams());
  });
  M.publish(params);

  // initialize maps 
  // define function using maps

  M.interact.ready();
  E.Launch();

  const initialState = {
    nMinted: UInt256(0)
  };

  V.supportsInterface.set(supportsInterface(supportedInterfaces));
  V.state.set(State.fromObject(initialState));

  const [s] = parallelReduce([initialState])
    .define(() => {
      V.state.set(State.fromObject(s));
    })
    .invariant(balance() == 0, "balance accurate")
    .while(true)
    // api: mintTo
    // - mint tokens to a user
    .api_(A.mintTo, (ctc, address) => {
      return [
        (k) => {
          const i = rMintTo(ctc, address, [address]);
          k(i);
          return [{
            nMinted: s.nMinted + 1
          }];
        },
      ];
    })
  commit();
  exit();
};
