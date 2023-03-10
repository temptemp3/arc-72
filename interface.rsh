"reach 0.1";
"use strict";

import {
  SupportedSelector,
  supportsInterface,
  SupportedView,
  RMintAPI as MintAPI,
  rMintTo,
  RAdminAPI as AdminAPI,
  rUpdateAdmin
} from "@temptemp3/arc-72#arc-72-v0.1.13r5:index.rsh";

// CONSTANTS

const SERIAL_VER = 0;

// TYPES

export const State = Struct([["nMinted", UInt256]]);

export const Params = Object({});

// VIEW

export const StateView = {
  state: State,
};
export const view = {
  ...SupportedView,
  ...StateView,
};

// API

export const api = {
  ...MintAPI,
  ...AdminAPI,
};

// EVENTS

export const eLaunch = [];
export const appEvents = {
  Launch: eLaunch,
};
export const events = {
  ...appEvents,
};

// SUPPORTED

const supportedInterfaces = [SupportedSelector];

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
  const [{ amt, ttl }, [addr, _], [M], [V], [A], [E]] = map;
  M.only(() => {
    const params = declassify(interact.getParams());
  });
  M.publish(params)
    .pay([amt + SERIAL_VER])
    .timeout(relativeTime(ttl), () => {
      Anybody.publish();
      commit();
      exit();
    });
  transfer(amt + SERIAL_VER).to(addr);

  M.interact.ready();
  E.Launch();

  const initialState = {
    nMinted: UInt256(0),
  };

  V.supportsInterface.set(supportsInterface(supportedInterfaces));
  V.state.set(State.fromObject(initialState));

  const [s] = parallelReduce([initialState])
    .define(() => {
      V.state.set(State.fromObject(s));
    })
    .invariant(balance() == 0, "balance accurate")
    .while(true)
    .api_(A.updateAdmin, (ctc, addres) => {
      return [
        (k) => {
          k(null);
          rUpdateAdmin(ctc, addres);
          return [s];
        },
      ];
    })
    // (remote) api: mintTo (contract, address) -> nftId
    // - mint tokens to a user
    .api_(A.mintTo, (ctc, address) => {
      return [
        (k) => {
          k(rMintTo(ctc, address));
          return [
            {
              nMinted: s.nMinted + UInt256(1),
            },
          ];
        },
      ];
    });
  commit();
  exit();
};
