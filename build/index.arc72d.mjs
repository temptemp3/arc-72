// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Bool;
  return {
    arc72_Approval: [ctc0, ctc0, ctc1],
    arc72_ApprovalForAll: [ctc0, ctc0, ctc2],
    arc72_Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Object({
    manager: ctc0,
    nMinted: ctc1,
    totalSupply: ctc1,
    zeroAddress: ctc0
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Struct([['owner', ctc0], ['approved', ctc0], ['tokenURI', ctc4]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc8 = stdlib.T_Struct([['manager', ctc0], ['nMinted', ctc1], ['totalSupply', ctc1]]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc5
    });
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc6
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc12;
  
  
  const _arc72_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2496 ) => {
          const v2496 = stdlib.protect(ctc0, _v2496, null);
        
        
        return stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:194:44:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_getApproved = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2484 ) => {
          const v2484 = stdlib.protect(ctc1, _v2484, null);
        
        const v2485 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2484, ctc5), null);
        const v2486 = '                                                                                                                                                                                                                                                                ';
        const v2487 = {
          approved: v2455,
          owner: v2455,
          tokenURI: v2486
          };
        const v2488 = stdlib.fromSome(v2485, v2487);
        const v2489 = v2488.approved;
        
        return v2489;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_isApprovedForAll = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2490, _v2491 ) => {
          const v2490 = stdlib.protect(ctc0, _v2490, null);
          const v2491 = stdlib.protect(ctc0, _v2491, null);
        
        const v2492 = [v2490, v2491];
        const v2493 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v2492, ctc6), null);
        const v2494 = stdlib.fromSome(v2493, false);
        
        return v2494;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_ownerOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2468 ) => {
          const v2468 = stdlib.protect(ctc1, _v2468, null);
        
        const v2469 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2468, ctc5), null);
        const v2470 = '                                                                                                                                                                                                                                                                ';
        const v2471 = {
          approved: v2455,
          owner: v2455,
          tokenURI: v2470
          };
        const v2472 = stdlib.fromSome(v2469, v2471);
        const v2473 = v2472.owner;
        
        return v2473;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenByIndex = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2497 ) => {
          const v2497 = stdlib.protect(ctc1, _v2497, null);
        
        
        return stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:195:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenURI = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2474 ) => {
          const v2474 = stdlib.protect(ctc1, _v2474, null);
        
        const v2475 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2474, ctc5), null);
        const v2476 = {
          None: 0,
          Some: 1
          }[v2475[0]];
        const v2477 = stdlib.eq(v2476, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2477, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:177:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:190:27:application call to "tokenURI" (defined at: ./ARC72_Dynamic.rsh:190:27:application)'],
          msg: 'nft must exist',
          who: 'Module'
          });
        const v2480 = '                                                                                                                                                                                                                                                                ';
        const v2481 = {
          approved: v2455,
          owner: v2455,
          tokenURI: v2480
          };
        const v2482 = stdlib.fromSome(v2475, v2481);
        const v2483 = v2482.tokenURI;
        
        return v2483;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async () => {
        
        const v2495 = v2461.totalSupply;
        
        return v2495;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async () => {
        
        const v2528 = v2461.manager;
        
        return v2528;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async () => {
        
        const v2529 = v2461.manager;
        const v2530 = v2461.nMinted;
        const v2531 = v2461.totalSupply;
        const v2532 = {
          manager: v2529,
          nMinted: v2530,
          totalSupply: v2531
          };
        
        return v2532;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2461, v2465] = svs;
      return (await ((async (_v2498 ) => {
          const v2498 = stdlib.protect(ctc9, _v2498, null);
        
        const v2499 = stdlib.bytesFromHex("0x53f02a40");
        const v2501 = stdlib.digest([ctc9], [v2499]);
        const v2502 = stdlib.digest([ctc9], [v2498]);
        const v2503 = stdlib.digestEq(v2501, v2502);
        const v2504 = stdlib.bytesFromHex("0xc3c1f000");
        const v2506 = stdlib.digest([ctc9], [v2504]);
        const v2508 = stdlib.digestEq(v2506, v2502);
        const v2509 = stdlib.bytesFromHex("0xb9c6f696");
        const v2511 = stdlib.digest([ctc9], [v2509]);
        const v2513 = stdlib.digestEq(v2511, v2502);
        const v2514 = stdlib.bytesFromHex("0xef470855");
        const v2516 = stdlib.digest([ctc9], [v2514]);
        const v2518 = stdlib.digestEq(v2516, v2502);
        const v2519 = stdlib.bytesFromHex("0x4e22a3ba");
        const v2521 = stdlib.digest([ctc9], [v2519]);
        const v2523 = stdlib.digestEq(v2521, v2502);
        const v2524 = v2518 ? true : v2523;
        const v2525 = v2513 ? true : v2524;
        const v2526 = v2508 ? true : v2525;
        const v2527 = v2503 ? true : v2526;
        
        return v2527;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc72_balanceOf: {
        decode: _arc72_balanceOf,
        dom: [ctc0],
        rng: ctc1
        },
      arc72_getApproved: {
        decode: _arc72_getApproved,
        dom: [ctc1],
        rng: ctc0
        },
      arc72_isApprovedForAll: {
        decode: _arc72_isApprovedForAll,
        dom: [ctc0, ctc0],
        rng: ctc6
        },
      arc72_ownerOf: {
        decode: _arc72_ownerOf,
        dom: [ctc1],
        rng: ctc0
        },
      arc72_tokenByIndex: {
        decode: _arc72_tokenByIndex,
        dom: [ctc1],
        rng: ctc1
        },
      arc72_tokenURI: {
        decode: _arc72_tokenURI,
        dom: [ctc1],
        rng: ctc4
        },
      arc72_totalSupply: {
        decode: _arc72_totalSupply,
        dom: [],
        rng: ctc1
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc8
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc9],
        rng: ctc6
        }
      },
    views: {
      3: [ctc0, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Object({
    zeroAddress: ctc1
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_340: ctc9,
    arc72_setApprovalForAll0_340: ctc10,
    arc72_transferFrom0_340: ctc11,
    burn0_340: ctc12,
    close0_340: ctc13,
    deleteNftDataBox0_340: ctc12,
    deleteOperatorDataBox0_340: ctc14,
    grant0_340: ctc15,
    mintTo0_340: ctc16,
    touch0_340: ctc13
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v2447 = stdlib.protect(ctc7, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2447],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:109:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:109:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2452], secs: v2454, time: v2453, didSend: v29, from: v2451 } = txn1;
      
      ;
      const v2455 = v2452.zeroAddress;
      const v2457 = await ctc.getContractInfo();
      
      const v2460 = {
        manager: v2451,
        nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        zeroAddress: v2455
        };
      const v2461 = v2460;
      const v2462 = v2453;
      const v2465 = stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:105:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2452], secs: v2454, time: v2453, didSend: v29, from: v2451 } = txn1;
  ;
  const v2455 = v2452.zeroAddress;
  const v2457 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2457), {
    at: './ARC72_Dynamic.rsh:158:19:application',
    fs: ['at ./ARC72_Dynamic.rsh:158:19:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:158:19:function exp)', 'at ./ARC72_Dynamic.rsh:158:19:application call to "liftedInteract" (defined at: ./ARC72_Dynamic.rsh:158:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2460 = {
    manager: v2451,
    nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    zeroAddress: v2455
    };
  let v2461 = v2460;
  let v2462 = v2453;
  let v2465 = stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:105:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn3;
    switch (v2802[0]) {
      case 'arc72_approve0_340': {
        const v2805 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v2820 = v2805[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:spread', stdlib.UInt_max, '0')];
        const v2821 = v2805[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:spread', stdlib.UInt_max, '1')];
        const v2822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2821, ctc3), null);
        const v2823 = {
          None: 0,
          Some: 1
          }[v2822[0]];
        const v2824 = stdlib.eq(v2823, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2824, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:290:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:290:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v2827 = '                                                                                                                                                                                                                                                                ';
        const v2828 = {
          approved: v2455,
          owner: v2455,
          tokenURI: v2827
          };
        const v2829 = stdlib.fromSome(v2822, v2828);
        const v2830 = v2829.owner;
        const v2831 = stdlib.addressEq(v2830, v2801);
        stdlib.assert(v2831, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:290:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:290:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        const v2843 = v2829.tokenURI;
        const v2844 = {
          approved: v2820,
          owner: v2801,
          tokenURI: v2843
          };
        await stdlib.mapSet(map0, ctc8, v2821, ctc3, v2844);
        null;
        const v2845 = null;
        await txn3.getOutput('arc72_approve', 'v2845', ctc0, v2845);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_setApprovalForAll0_340': {
        const v3116 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v3166 = v3116[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:spread', stdlib.UInt_max, '0')];
        const v3167 = v3116[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:spread', stdlib.UInt_max, '1')];
        const v3170 = [v2801, v3166];
        await stdlib.mapSet(map1, ctc14, v3170, ctc5, v3167);
        null;
        const v3171 = null;
        await txn3.getOutput('arc72_setApprovalForAll', 'v3171', ctc0, v3171);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_transferFrom0_340': {
        const v3427 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v3492 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '0')];
        const v3493 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '1')];
        const v3494 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '2')];
        const v3495 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3494, ctc3), null);
        const v3496 = {
          None: 0,
          Some: 1
          }[v3495[0]];
        const v3497 = stdlib.eq(v3496, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3497, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v3500 = '                                                                                                                                                                                                                                                                ';
        const v3501 = {
          approved: v2455,
          owner: v2455,
          tokenURI: v3500
          };
        const v3502 = stdlib.fromSome(v3495, v3501);
        const v3503 = v3502.owner;
        const v3504 = stdlib.addressEq(v3492, v3503);
        const v3505 = v3504 ? false : true;
        stdlib.assert(v3505, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'ARC72: must be owner or operator',
          who: 'Deployer'
          });
        const v3512 = stdlib.addressEq(v2801, v3503);
        const v3518 = [v3503, v2801];
        const v3519 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3518, ctc5), null);
        const v3520 = stdlib.fromSome(v3519, false);
        const v3525 = v3502.approved;
        const v3526 = stdlib.addressEq(v3525, v2801);
        const v3527 = v3520 ? true : v3526;
        const v3528 = v3512 ? true : v3527;
        stdlib.assert(v3528, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:254:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'ARC72: must be owner or operator to transfer',
          who: 'Deployer'
          });
        const v3530 = stdlib.addressEq(v3492, v3493);
        const v3531 = v3530 ? false : true;
        stdlib.assert(v3531, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'must transfer to different address',
          who: 'Deployer'
          });
        const v3534 = stdlib.addressEq(v3492, v2455);
        stdlib.assert(v3534, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'must not transfer from zero address',
          who: 'Deployer'
          });
        const v3537 = stdlib.addressEq(v3493, v2455);
        stdlib.assert(v3537, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'must not be burned',
          who: 'Deployer'
          });
        const v3544 = stdlib.addressEq(v3493, v3525);
        stdlib.assert(v3544, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'must not be sent to approved address',
          who: 'Deployer'
          });
        const v3552 = v3502.tokenURI;
        const v3553 = stdlib.addressEq(v3503, v2801);
        const v3555 = v3553 ? true : v3526;
        const v3559 = v3555 ? true : v3520;
        stdlib.assert(v3559, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'must be nft owner or approved operator',
          who: 'Deployer'
          });
        const v3574 = {
          approved: v2455,
          owner: v3493,
          tokenURI: v3552
          };
        await stdlib.mapSet(map0, ctc8, v3494, ctc3, v3574);
        null;
        const v3575 = null;
        await txn3.getOutput('arc72_transferFrom', 'v3575', ctc0, v3575);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'burn0_340': {
        const v3738 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v3897 = v3738[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:318:10:spread', stdlib.UInt_max, '0')];
        const v3898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3897, ctc3), null);
        const v3899 = '                                                                                                                                                                                                                                                                ';
        const v3900 = {
          approved: v2455,
          owner: v2455,
          tokenURI: v3899
          };
        const v3901 = stdlib.fromSome(v3898, v3900);
        const v3902 = v3901.owner;
        const v3903 = stdlib.addressEq(v3902, v2801);
        stdlib.assert(v3903, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:319:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:325:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:325:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v3897, ctc3, undefined /* Nothing */);
        null;
        const v3922 = null;
        await txn3.getOutput('burn', 'v3922', ctc0, v3922);
        const v3929 = v2461.manager;
        const v3930 = v2461.nMinted;
        const v3931 = v2461.totalSupply;
        const v3932 = v2461.zeroAddress;
        const v3934 = stdlib.safeSub256(v3931, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:333:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v3935 = {
          manager: v3929,
          nMinted: v3930,
          totalSupply: v3934,
          zeroAddress: v3932
          };
        const cv2461 = v3935;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'close0_340': {
        const v4049 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v4250 = v2461.manager;
        const v4251 = stdlib.addressEq(v2801, v4250);
        stdlib.assert(v4251, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:380:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:380:13:function exp)'],
          msg: 'must be manager to close',
          who: 'Deployer'
          });
        const v4253 = null;
        await txn3.getOutput('close', 'v4253', ctc0, v4253);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteNftDataBox0_340': {
        const v4360 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v4572 = v4360[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:353:10:spread', stdlib.UInt_max, '0')];
        const v4573 = v2461.manager;
        const v4574 = stdlib.addressEq(v2801, v4573);
        stdlib.assert(v4574, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:356:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:356:13:function exp)'],
          msg: 'must be manager to delete nft data box',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v4572, ctc3, undefined /* Nothing */);
        const v4577 = null;
        await txn3.getOutput('deleteNftDataBox', 'v4577', ctc0, v4577);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteOperatorDataBox0_340': {
        const v4671 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v4897 = v4671[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:spread', stdlib.UInt_max, '0')];
        const v4898 = v4671[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:spread', stdlib.UInt_max, '1')];
        const v4899 = v2461.manager;
        const v4900 = stdlib.addressEq(v2801, v4899);
        stdlib.assert(v4900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:366:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:368:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:368:13:function exp)'],
          msg: 'must be manager to delete operator data box',
          who: 'Deployer'
          });
        const v4904 = [v4897, v4898];
        await stdlib.mapSet(map1, ctc14, v4904, ctc5, undefined /* Nothing */);
        const v4905 = null;
        await txn3.getOutput('deleteOperatorDataBox', 'v4905', ctc0, v4905);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'grant0_340': {
        const v4982 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v5226 = v4982[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:205:10:spread', stdlib.UInt_max, '0')];
        const v5227 = v2461.manager;
        const v5228 = stdlib.addressEq(v2801, v5227);
        stdlib.assert(v5228, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:208:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:208:13:function exp)'],
          msg: 'must be manager to grant',
          who: 'Deployer'
          });
        const v5231 = null;
        await txn3.getOutput('grant', 'v5231', ctc0, v5231);
        const v5239 = v2461.nMinted;
        const v5240 = v2461.totalSupply;
        const v5241 = v2461.zeroAddress;
        const v5242 = {
          manager: v5226,
          nMinted: v5239,
          totalSupply: v5240,
          zeroAddress: v5241
          };
        const cv2461 = v5242;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'mintTo0_340': {
        const v5293 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v5557 = v5293[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:spread', stdlib.UInt_max, '0')];
        const v5558 = v5293[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:spread', stdlib.UInt_max, '1')];
        const v5559 = v2461.manager;
        const v5560 = stdlib.addressEq(v5559, v2801);
        stdlib.assert(v5560, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:224:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:224:13:function exp)'],
          msg: 'must be admin to mint to address',
          who: 'Deployer'
          });
        const v5562 = v2461.nMinted;
        const v5563 = stdlib.le256(v5562, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:6:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100000000'));
        stdlib.assert(v5563, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./ARC72_Dynamic.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:224:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:224:13:function exp)'],
          msg: 'already minted max NFT',
          who: 'Deployer'
          });
        const v5566 = stdlib.safeAdd256(v5562, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:221:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v5567 = v2461.totalSupply;
        const v5568 = stdlib.safeAdd256(v5567, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:222:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v5572 = {
          approved: v2455,
          owner: v5557,
          tokenURI: v5558
          };
        await stdlib.mapSet(map0, ctc8, v5566, ctc3, v5572);
        null;
        await txn3.getOutput('mintTo', 'v5566', ctc8, v5566);
        const v5584 = v2461.zeroAddress;
        const v5585 = {
          manager: v5559,
          nMinted: v5566,
          totalSupply: v5568,
          zeroAddress: v5584
          };
        const cv2461 = v5585;
        const cv2462 = v2803;
        const cv2465 = v2465;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_340': {
        const v5604 = v2802[1];
        undefined /* setApiDetails */;
        ;
        const v5901 = (stdlib.le(await ctc.getBalance(), v2465) ? stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:344:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2465));
        const v5902 = stdlib.safeAdd(v5901, v2465);
        const v5903 = v2461.manager;
        const v5907 = stdlib.sub(v5902, v5901);
        ;
        const v5908 = null;
        await txn3.getOutput('touch', 'v5908', ctc0, v5908);
        const cv2461 = v2461;
        const cv2462 = v2803;
        const cv2465 = v5907;
        
        v2461 = cv2461;
        v2462 = cv2462;
        v2465 = cv2465;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _arc72_approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc72_approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc72_approve3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc10,
    arc72_setApprovalForAll0_340: ctc11,
    arc72_transferFrom0_340: ctc12,
    burn0_340: ctc13,
    close0_340: ctc14,
    deleteNftDataBox0_340: ctc13,
    deleteOperatorDataBox0_340: ctc15,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc14
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2661 = ctc.selfAddress();
  const v2663 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:286:44:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:286:44:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_approve0_340" (defined at: ./ARC72_Dynamic.rsh:286:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'arc72_approve'
    });
  const v2665 = v2663[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2668 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2665, ctc3), null);
  const v2669 = {
    None: 0,
    Some: 1
    }[v2668[0]];
  const v2670 = stdlib.eq(v2669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2670, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:286:44:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:286:44:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_approve0_340" (defined at: ./ARC72_Dynamic.rsh:286:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_approve'
    });
  const v2673 = '                                                                                                                                                                                                                                                                ';
  const v2674 = {
    approved: v2455,
    owner: v2455,
    tokenURI: v2673
    };
  const v2675 = stdlib.fromSome(v2668, v2674);
  const v2676 = v2675.owner;
  const v2677 = stdlib.addressEq(v2676, v2661);
  stdlib.assert(v2677, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:286:44:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:286:44:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_approve0_340" (defined at: ./ARC72_Dynamic.rsh:286:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be nft owner',
    who: 'arc72_approve'
    });
  const v2686 = ['arc72_approve0_340', v2663];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2686],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_approve"
            });
          ;
          const v2820 = v2805[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:spread', stdlib.UInt_max, '0')];
          const v2821 = v2805[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:spread', stdlib.UInt_max, '1')];
          const v2822 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2821, ctc3), null);
          const v2827 = '                                                                                                                                                                                                                                                                ';
          const v2828 = {
            approved: v2455,
            owner: v2455,
            tokenURI: v2827
            };
          const v2829 = stdlib.fromSome(v2822, v2828);
          const v2843 = v2829.tokenURI;
          const v2844 = {
            approved: v2820,
            owner: v2801,
            tokenURI: v2843
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v2821, ctc3, v2844);
          null;
          const v2845 = null;
          const v2846 = await txn1.getOutput('arc72_approve', 'v2845', ctc0, v2845);
          
          const v8103 = v2461;
          const v8105 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v2820 = v2805[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:spread', stdlib.UInt_max, '0')];
      const v2821 = v2805[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:286:10:spread', stdlib.UInt_max, '1')];
      const v2822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2821, ctc3), null);
      const v2823 = {
        None: 0,
        Some: 1
        }[v2822[0]];
      const v2824 = stdlib.eq(v2823, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2824, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:290:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:290:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_approve'
        });
      const v2827 = '                                                                                                                                                                                                                                                                ';
      const v2828 = {
        approved: v2455,
        owner: v2455,
        tokenURI: v2827
        };
      const v2829 = stdlib.fromSome(v2822, v2828);
      const v2830 = v2829.owner;
      const v2831 = stdlib.addressEq(v2830, v2801);
      stdlib.assert(v2831, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:290:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:290:13:function exp)'],
        msg: 'must be nft owner',
        who: 'arc72_approve'
        });
      const v2843 = v2829.tokenURI;
      const v2844 = {
        approved: v2820,
        owner: v2801,
        tokenURI: v2843
        };
      await stdlib.mapSet(map0, ctc7, v2821, ctc3, v2844);
      null;
      const v2845 = null;
      const v2846 = await txn1.getOutput('arc72_approve', 'v2845', ctc0, v2845);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v2805, v2846), {
          at: './ARC72_Dynamic.rsh:286:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:286:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:286:11:function exp)', 'at ./ARC72_Dynamic.rsh:298:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:290:13:function exp)', 'at ./ARC72_Dynamic.rsh:290:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:290:13:function exp)'],
          msg: 'out',
          who: 'arc72_approve'
          });
        }
      else {
        }
      
      const v8103 = v2461;
      const v8105 = v2465;
      return;
      
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc72_setApprovalForAll3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc72_setApprovalForAll3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc72_setApprovalForAll3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc10,
    arc72_transferFrom0_340: ctc12,
    burn0_340: ctc13,
    close0_340: ctc14,
    deleteNftDataBox0_340: ctc13,
    deleteOperatorDataBox0_340: ctc15,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc14
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2690 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:305:55:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:305:55:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_setApprovalForAll0_340" (defined at: ./ARC72_Dynamic.rsh:305:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'arc72_setApprovalForAll'
    });
  const v2702 = ['arc72_setApprovalForAll0_340', v2690];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2702],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_setApprovalForAll"
            });
          ;
          const v3166 = v3116[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:spread', stdlib.UInt_max, '0')];
          const v3167 = v3116[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:spread', stdlib.UInt_max, '1')];
          const v3170 = [v2801, v3166];
          await stdlib.simMapSet(sim_r, 1, ctc15, v3170, ctc5, v3167);
          null;
          const v3171 = null;
          const v3172 = await txn1.getOutput('arc72_setApprovalForAll', 'v3171', ctc0, v3171);
          
          const v8136 = v2461;
          const v8138 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v3166 = v3116[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:spread', stdlib.UInt_max, '0')];
      const v3167 = v3116[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:305:10:spread', stdlib.UInt_max, '1')];
      const v3170 = [v2801, v3166];
      await stdlib.mapSet(map1, ctc15, v3170, ctc5, v3167);
      null;
      const v3171 = null;
      const v3172 = await txn1.getOutput('arc72_setApprovalForAll', 'v3171', ctc0, v3171);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v3116, v3172), {
          at: './ARC72_Dynamic.rsh:305:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:305:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:305:11:function exp)', 'at ./ARC72_Dynamic.rsh:311:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:307:13:function exp)', 'at ./ARC72_Dynamic.rsh:307:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:307:13:function exp)'],
          msg: 'out',
          who: 'arc72_setApprovalForAll'
          });
        }
      else {
        }
      
      const v8136 = v2461;
      const v8138 = v2465;
      return;
      
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc72_transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc72_transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc72_transferFrom3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc12,
    arc72_setApprovalForAll0_340: ctc13,
    arc72_transferFrom0_340: ctc10,
    burn0_340: ctc14,
    close0_340: ctc15,
    deleteNftDataBox0_340: ctc14,
    deleteOperatorDataBox0_340: ctc11,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc15
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2575 = ctc.selfAddress();
  const v2577 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'arc72_transferFrom'
    });
  const v2578 = v2577[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2579 = v2577[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2580 = v2577[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2584 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2580, ctc3), null);
  const v2585 = {
    None: 0,
    Some: 1
    }[v2584[0]];
  const v2586 = stdlib.eq(v2585, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2586, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_transferFrom'
    });
  const v2589 = '                                                                                                                                                                                                                                                                ';
  const v2590 = {
    approved: v2455,
    owner: v2455,
    tokenURI: v2589
    };
  const v2591 = stdlib.fromSome(v2584, v2590);
  const v2592 = v2591.owner;
  const v2593 = stdlib.addressEq(v2578, v2592);
  const v2594 = v2593 ? false : true;
  stdlib.assert(v2594, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'ARC72: must be owner or operator',
    who: 'arc72_transferFrom'
    });
  const v2601 = stdlib.addressEq(v2575, v2592);
  const v2607 = [v2592, v2575];
  const v2608 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2607, ctc5), null);
  const v2609 = stdlib.fromSome(v2608, false);
  const v2614 = v2591.approved;
  const v2615 = stdlib.addressEq(v2614, v2575);
  const v2616 = v2609 ? true : v2615;
  const v2617 = v2601 ? true : v2616;
  stdlib.assert(v2617, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:254:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'ARC72: must be owner or operator to transfer',
    who: 'arc72_transferFrom'
    });
  const v2619 = stdlib.addressEq(v2578, v2579);
  const v2620 = v2619 ? false : true;
  stdlib.assert(v2620, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must transfer to different address',
    who: 'arc72_transferFrom'
    });
  const v2623 = stdlib.addressEq(v2578, v2455);
  stdlib.assert(v2623, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must not transfer from zero address',
    who: 'arc72_transferFrom'
    });
  const v2626 = stdlib.addressEq(v2579, v2455);
  stdlib.assert(v2626, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must not be burned',
    who: 'arc72_transferFrom'
    });
  const v2633 = stdlib.addressEq(v2579, v2614);
  stdlib.assert(v2633, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must not be sent to approved address',
    who: 'arc72_transferFrom'
    });
  const v2642 = stdlib.addressEq(v2592, v2575);
  const v2644 = v2642 ? true : v2615;
  const v2648 = v2644 ? true : v2609;
  stdlib.assert(v2648, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:249:61:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:61:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runarc72_transferFrom0_340" (defined at: ./ARC72_Dynamic.rsh:249:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be nft owner or approved operator',
    who: 'arc72_transferFrom'
    });
  const v2659 = ['arc72_transferFrom0_340', v2577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2659],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_transferFrom"
            });
          ;
          const v3492 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '0')];
          const v3493 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '1')];
          const v3494 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '2')];
          const v3495 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3494, ctc3), null);
          const v3500 = '                                                                                                                                                                                                                                                                ';
          const v3501 = {
            approved: v2455,
            owner: v2455,
            tokenURI: v3500
            };
          const v3502 = stdlib.fromSome(v3495, v3501);
          const v3503 = v3502.owner;
          const v3518 = [v3503, v2801];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v3518, ctc5), null);
          const v3552 = v3502.tokenURI;
          const v3574 = {
            approved: v2455,
            owner: v3493,
            tokenURI: v3552
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v3494, ctc3, v3574);
          null;
          const v3575 = null;
          const v3576 = await txn1.getOutput('arc72_transferFrom', 'v3575', ctc0, v3575);
          
          const v8169 = v2461;
          const v8171 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v3492 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '0')];
      const v3493 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '1')];
      const v3494 = v3427[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:249:10:spread', stdlib.UInt_max, '2')];
      const v3495 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3494, ctc3), null);
      const v3496 = {
        None: 0,
        Some: 1
        }[v3495[0]];
      const v3497 = stdlib.eq(v3496, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3497, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_transferFrom'
        });
      const v3500 = '                                                                                                                                                                                                                                                                ';
      const v3501 = {
        approved: v2455,
        owner: v2455,
        tokenURI: v3500
        };
      const v3502 = stdlib.fromSome(v3495, v3501);
      const v3503 = v3502.owner;
      const v3504 = stdlib.addressEq(v3492, v3503);
      const v3505 = v3504 ? false : true;
      stdlib.assert(v3505, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:252:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'ARC72: must be owner or operator',
        who: 'arc72_transferFrom'
        });
      const v3512 = stdlib.addressEq(v2801, v3503);
      const v3518 = [v3503, v2801];
      const v3519 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3518, ctc5), null);
      const v3520 = stdlib.fromSome(v3519, false);
      const v3525 = v3502.approved;
      const v3526 = stdlib.addressEq(v3525, v2801);
      const v3527 = v3520 ? true : v3526;
      const v3528 = v3512 ? true : v3527;
      stdlib.assert(v3528, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:254:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'ARC72: must be owner or operator to transfer',
        who: 'arc72_transferFrom'
        });
      const v3530 = stdlib.addressEq(v3492, v3493);
      const v3531 = v3530 ? false : true;
      stdlib.assert(v3531, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'must transfer to different address',
        who: 'arc72_transferFrom'
        });
      const v3534 = stdlib.addressEq(v3492, v2455);
      stdlib.assert(v3534, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'must not transfer from zero address',
        who: 'arc72_transferFrom'
        });
      const v3537 = stdlib.addressEq(v3493, v2455);
      stdlib.assert(v3537, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'must not be burned',
        who: 'arc72_transferFrom'
        });
      const v3544 = stdlib.addressEq(v3493, v3525);
      stdlib.assert(v3544, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'must not be sent to approved address',
        who: 'arc72_transferFrom'
        });
      const v3552 = v3502.tokenURI;
      const v3553 = stdlib.addressEq(v3503, v2801);
      const v3555 = v3553 ? true : v3526;
      const v3559 = v3555 ? true : v3520;
      stdlib.assert(v3559, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:265:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
        msg: 'must be nft owner or approved operator',
        who: 'arc72_transferFrom'
        });
      const v3574 = {
        approved: v2455,
        owner: v3493,
        tokenURI: v3552
        };
      await stdlib.mapSet(map0, ctc7, v3494, ctc3, v3574);
      null;
      const v3575 = null;
      const v3576 = await txn1.getOutput('arc72_transferFrom', 'v3575', ctc0, v3575);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v3427, v3576), {
          at: './ARC72_Dynamic.rsh:249:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:249:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:249:11:function exp)', 'at ./ARC72_Dynamic.rsh:278:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)', 'at ./ARC72_Dynamic.rsh:270:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:270:13:function exp)'],
          msg: 'out',
          who: 'arc72_transferFrom'
          });
        }
      else {
        }
      
      const v8169 = v2461;
      const v8171 = v2465;
      return;
      
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _burn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _burn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _burn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc10,
    close0_340: ctc14,
    deleteNftDataBox0_340: ctc10,
    deleteOperatorDataBox0_340: ctc15,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc14
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2704 = ctc.selfAddress();
  const v2706 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:318:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:318:29:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runburn0_340" (defined at: ./ARC72_Dynamic.rsh:318:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v2707 = v2706[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2709 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2707, ctc3), null);
  const v2710 = '                                                                                                                                                                                                                                                                ';
  const v2711 = {
    approved: v2455,
    owner: v2455,
    tokenURI: v2710
    };
  const v2712 = stdlib.fromSome(v2709, v2711);
  const v2713 = v2712.owner;
  const v2714 = stdlib.addressEq(v2713, v2704);
  stdlib.assert(v2714, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:319:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:318:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:318:29:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runburn0_340" (defined at: ./ARC72_Dynamic.rsh:318:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be nft owner',
    who: 'burn'
    });
  const v2736 = ['burn0_340', v2706];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2736],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:318:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v3897 = v3738[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:318:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3897, ctc3), null);
          await stdlib.simMapSet(sim_r, 0, ctc7, v3897, ctc3, undefined /* Nothing */);
          null;
          const v3922 = null;
          const v3923 = await txn1.getOutput('burn', 'v3922', ctc0, v3922);
          
          const v3929 = v2461.manager;
          const v3930 = v2461.nMinted;
          const v3931 = v2461.totalSupply;
          const v3932 = v2461.zeroAddress;
          const v3934 = stdlib.safeSub256(v3931, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:333:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v3935 = {
            manager: v3929,
            nMinted: v3930,
            totalSupply: v3934,
            zeroAddress: v3932
            };
          const v8202 = v3935;
          const v8204 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v3897 = v3738[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:318:10:spread', stdlib.UInt_max, '0')];
      const v3898 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3897, ctc3), null);
      const v3899 = '                                                                                                                                                                                                                                                                ';
      const v3900 = {
        approved: v2455,
        owner: v2455,
        tokenURI: v3899
        };
      const v3901 = stdlib.fromSome(v3898, v3900);
      const v3902 = v3901.owner;
      const v3903 = stdlib.addressEq(v3902, v2801);
      stdlib.assert(v3903, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:319:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:325:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:325:13:function exp)'],
        msg: 'must be nft owner',
        who: 'burn'
        });
      await stdlib.mapSet(map0, ctc7, v3897, ctc3, undefined /* Nothing */);
      null;
      const v3922 = null;
      const v3923 = await txn1.getOutput('burn', 'v3922', ctc0, v3922);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v3738, v3923), {
          at: './ARC72_Dynamic.rsh:318:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:318:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:318:11:function exp)', 'at ./ARC72_Dynamic.rsh:329:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:325:13:function exp)', 'at ./ARC72_Dynamic.rsh:325:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:325:13:function exp)'],
          msg: 'out',
          who: 'burn'
          });
        }
      else {
        }
      
      const v3929 = v2461.manager;
      const v3930 = v2461.nMinted;
      const v3931 = v2461.totalSupply;
      const v3932 = v2461.zeroAddress;
      const v3934 = stdlib.safeSub256(v3931, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:333:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v3935 = {
        manager: v3929,
        nMinted: v3930,
        totalSupply: v3934,
        zeroAddress: v3932
        };
      const v8202 = v3935;
      const v8204 = v2465;
      return;
      
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _close3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _close3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _close3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc14,
    close0_340: ctc10,
    deleteNftDataBox0_340: ctc14,
    deleteOperatorDataBox0_340: ctc15,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc10
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2780 = ctc.selfAddress();
  const v2782 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:377:23:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:377:23:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runclose0_340" (defined at: ./ARC72_Dynamic.rsh:377:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v2783 = v2461.manager;
  const v2784 = stdlib.addressEq(v2780, v2783);
  stdlib.assert(v2784, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:377:23:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:377:23:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runclose0_340" (defined at: ./ARC72_Dynamic.rsh:377:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be manager to close',
    who: 'close'
    });
  const v2789 = ['close0_340', v2782];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2789],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:377:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v4253 = null;
          const v4254 = await txn1.getOutput('close', 'v4253', ctc0, v4253);
          
          const v8235 = v2461;
          const v8237 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v4250 = v2461.manager;
      const v4251 = stdlib.addressEq(v2801, v4250);
      stdlib.assert(v4251, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:380:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:380:13:function exp)'],
        msg: 'must be manager to close',
        who: 'close'
        });
      const v4253 = null;
      const v4254 = await txn1.getOutput('close', 'v4253', ctc0, v4253);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v4049, v4254), {
          at: './ARC72_Dynamic.rsh:377:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:377:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:377:11:function exp)', 'at ./ARC72_Dynamic.rsh:381:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:380:13:function exp)', 'at ./ARC72_Dynamic.rsh:380:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:380:13:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v8235 = v2461;
      const v8237 = v2465;
      return;
      
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteNftDataBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteNftDataBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteNftDataBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc10,
    close0_340: ctc14,
    deleteNftDataBox0_340: ctc10,
    deleteOperatorDataBox0_340: ctc15,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc14
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2746 = ctc.selfAddress();
  const v2748 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:353:41:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:353:41:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "rundeleteNftDataBox0_340" (defined at: ./ARC72_Dynamic.rsh:353:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'deleteNftDataBox'
    });
  const v2751 = v2461.manager;
  const v2752 = stdlib.addressEq(v2746, v2751);
  stdlib.assert(v2752, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:353:41:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:353:41:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "rundeleteNftDataBox0_340" (defined at: ./ARC72_Dynamic.rsh:353:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be manager to delete nft data box',
    who: 'deleteNftDataBox'
    });
  const v2759 = ['deleteNftDataBox0_340', v2748];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2759],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:353:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteNftDataBox"
            });
          ;
          const v4572 = v4360[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:353:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc7, v4572, ctc3, undefined /* Nothing */);
          const v4577 = null;
          const v4578 = await txn1.getOutput('deleteNftDataBox', 'v4577', ctc0, v4577);
          
          const v8268 = v2461;
          const v8270 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v4572 = v4360[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:353:10:spread', stdlib.UInt_max, '0')];
      const v4573 = v2461.manager;
      const v4574 = stdlib.addressEq(v2801, v4573);
      stdlib.assert(v4574, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:356:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:356:13:function exp)'],
        msg: 'must be manager to delete nft data box',
        who: 'deleteNftDataBox'
        });
      await stdlib.mapSet(map0, ctc7, v4572, ctc3, undefined /* Nothing */);
      const v4577 = null;
      const v4578 = await txn1.getOutput('deleteNftDataBox', 'v4577', ctc0, v4577);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v4360, v4578), {
          at: './ARC72_Dynamic.rsh:353:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:353:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:353:11:function exp)', 'at ./ARC72_Dynamic.rsh:358:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:356:13:function exp)', 'at ./ARC72_Dynamic.rsh:356:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:356:13:function exp)'],
          msg: 'out',
          who: 'deleteNftDataBox'
          });
        }
      else {
        }
      
      const v8268 = v2461;
      const v8270 = v2465;
      return;
      
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteOperatorDataBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteOperatorDataBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteOperatorDataBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc14,
    close0_340: ctc15,
    deleteNftDataBox0_340: ctc14,
    deleteOperatorDataBox0_340: ctc10,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc15
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2761 = ctc.selfAddress();
  const v2763 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:365:54:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:365:54:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "rundeleteOperatorDataBox0_340" (defined at: ./ARC72_Dynamic.rsh:365:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'deleteOperatorDataBox'
    });
  const v2768 = v2461.manager;
  const v2769 = stdlib.addressEq(v2761, v2768);
  stdlib.assert(v2769, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:366:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:365:54:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:365:54:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "rundeleteOperatorDataBox0_340" (defined at: ./ARC72_Dynamic.rsh:365:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be manager to delete operator data box',
    who: 'deleteOperatorDataBox'
    });
  const v2778 = ['deleteOperatorDataBox0_340', v2763];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2778],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteOperatorDataBox"
            });
          ;
          const v4897 = v4671[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:spread', stdlib.UInt_max, '0')];
          const v4898 = v4671[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:spread', stdlib.UInt_max, '1')];
          const v4904 = [v4897, v4898];
          await stdlib.simMapSet(sim_r, 1, ctc10, v4904, ctc5, undefined /* Nothing */);
          const v4905 = null;
          const v4906 = await txn1.getOutput('deleteOperatorDataBox', 'v4905', ctc0, v4905);
          
          const v8301 = v2461;
          const v8303 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v4897 = v4671[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:spread', stdlib.UInt_max, '0')];
      const v4898 = v4671[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:365:10:spread', stdlib.UInt_max, '1')];
      const v4899 = v2461.manager;
      const v4900 = stdlib.addressEq(v2801, v4899);
      stdlib.assert(v4900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:366:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:368:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:368:13:function exp)'],
        msg: 'must be manager to delete operator data box',
        who: 'deleteOperatorDataBox'
        });
      const v4904 = [v4897, v4898];
      await stdlib.mapSet(map1, ctc10, v4904, ctc5, undefined /* Nothing */);
      const v4905 = null;
      const v4906 = await txn1.getOutput('deleteOperatorDataBox', 'v4905', ctc0, v4905);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v4671, v4906), {
          at: './ARC72_Dynamic.rsh:365:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:365:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:365:11:function exp)', 'at ./ARC72_Dynamic.rsh:370:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:368:13:function exp)', 'at ./ARC72_Dynamic.rsh:368:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:368:13:function exp)'],
          msg: 'out',
          who: 'deleteOperatorDataBox'
          });
        }
      else {
        }
      
      const v8301 = v2461;
      const v8303 = v2465;
      return;
      
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc14,
    close0_340: ctc15,
    deleteNftDataBox0_340: ctc14,
    deleteOperatorDataBox0_340: ctc16,
    grant0_340: ctc10,
    mintTo0_340: ctc17,
    touch0_340: ctc15
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2534 = ctc.selfAddress();
  const v2536 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:205:27:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:205:27:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "rungrant0_340" (defined at: ./ARC72_Dynamic.rsh:205:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2539 = v2461.manager;
  const v2540 = stdlib.addressEq(v2534, v2539);
  stdlib.assert(v2540, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:205:27:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:205:27:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "rungrant0_340" (defined at: ./ARC72_Dynamic.rsh:205:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be manager to grant',
    who: 'grant'
    });
  const v2547 = ['grant0_340', v2536];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2547],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:205:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v5226 = v4982[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:205:10:spread', stdlib.UInt_max, '0')];
          const v5231 = null;
          const v5232 = await txn1.getOutput('grant', 'v5231', ctc0, v5231);
          
          const v5239 = v2461.nMinted;
          const v5240 = v2461.totalSupply;
          const v5241 = v2461.zeroAddress;
          const v5242 = {
            manager: v5226,
            nMinted: v5239,
            totalSupply: v5240,
            zeroAddress: v5241
            };
          const v8334 = v5242;
          const v8336 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v5226 = v4982[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:205:10:spread', stdlib.UInt_max, '0')];
      const v5227 = v2461.manager;
      const v5228 = stdlib.addressEq(v2801, v5227);
      stdlib.assert(v5228, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:208:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:208:13:function exp)'],
        msg: 'must be manager to grant',
        who: 'grant'
        });
      const v5231 = null;
      const v5232 = await txn1.getOutput('grant', 'v5231', ctc0, v5231);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v4982, v5232), {
          at: './ARC72_Dynamic.rsh:205:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:205:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:205:11:function exp)', 'at ./ARC72_Dynamic.rsh:209:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:208:13:function exp)', 'at ./ARC72_Dynamic.rsh:208:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:208:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v5239 = v2461.nMinted;
      const v5240 = v2461.totalSupply;
      const v5241 = v2461.zeroAddress;
      const v5242 = {
        manager: v5226,
        nMinted: v5239,
        totalSupply: v5240,
        zeroAddress: v5241
        };
      const v8334 = v5242;
      const v8336 = v2465;
      return;
      
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _mintTo3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _mintTo3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _mintTo3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc14,
    close0_340: ctc15,
    deleteNftDataBox0_340: ctc14,
    deleteOperatorDataBox0_340: ctc16,
    grant0_340: ctc17,
    mintTo0_340: ctc10,
    touch0_340: ctc15
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2549 = ctc.selfAddress();
  const v2551 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:218:34:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:218:34:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runmintTo0_340" (defined at: ./ARC72_Dynamic.rsh:218:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'mintTo'
    });
  const v2556 = v2461.manager;
  const v2557 = stdlib.addressEq(v2556, v2549);
  stdlib.assert(v2557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:218:34:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:218:34:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runmintTo0_340" (defined at: ./ARC72_Dynamic.rsh:218:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'must be admin to mint to address',
    who: 'mintTo'
    });
  const v2559 = v2461.nMinted;
  const v2560 = stdlib.le256(v2559, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:6:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100000000'));
  stdlib.assert(v2560, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./ARC72_Dynamic.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:218:34:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:218:34:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runmintTo0_340" (defined at: ./ARC72_Dynamic.rsh:218:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'already minted max NFT',
    who: 'mintTo'
    });
  const v2573 = ['mintTo0_340', v2551];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2573],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mintTo"
            });
          ;
          const v5557 = v5293[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:spread', stdlib.UInt_max, '0')];
          const v5558 = v5293[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:spread', stdlib.UInt_max, '1')];
          const v5559 = v2461.manager;
          const v5562 = v2461.nMinted;
          const v5566 = stdlib.safeAdd256(v5562, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:221:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v5567 = v2461.totalSupply;
          const v5568 = stdlib.safeAdd256(v5567, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:222:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v5572 = {
            approved: v2455,
            owner: v5557,
            tokenURI: v5558
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v5566, ctc3, v5572);
          null;
          const v5574 = await txn1.getOutput('mintTo', 'v5566', ctc7, v5566);
          
          const v5584 = v2461.zeroAddress;
          const v5585 = {
            manager: v5559,
            nMinted: v5566,
            totalSupply: v5568,
            zeroAddress: v5584
            };
          const v8367 = v5585;
          const v8369 = v2465;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v5557 = v5293[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:spread', stdlib.UInt_max, '0')];
      const v5558 = v5293[stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:218:10:spread', stdlib.UInt_max, '1')];
      const v5559 = v2461.manager;
      const v5560 = stdlib.addressEq(v5559, v2801);
      stdlib.assert(v5560, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:224:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:224:13:function exp)'],
        msg: 'must be admin to mint to address',
        who: 'mintTo'
        });
      const v5562 = v2461.nMinted;
      const v5563 = stdlib.le256(v5562, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:6:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100000000'));
      stdlib.assert(v5563, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./ARC72_Dynamic.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./ARC72_Dynamic.rsh:224:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:224:13:function exp)'],
        msg: 'already minted max NFT',
        who: 'mintTo'
        });
      const v5566 = stdlib.safeAdd256(v5562, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:221:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v5567 = v2461.totalSupply;
      const v5568 = stdlib.safeAdd256(v5567, stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:222:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v5572 = {
        approved: v2455,
        owner: v5557,
        tokenURI: v5558
        };
      await stdlib.mapSet(map0, ctc7, v5566, ctc3, v5572);
      null;
      const v5574 = await txn1.getOutput('mintTo', 'v5566', ctc7, v5566);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v5293, v5574), {
          at: './ARC72_Dynamic.rsh:218:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:218:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:218:11:function exp)', 'at ./ARC72_Dynamic.rsh:232:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:224:13:function exp)', 'at ./ARC72_Dynamic.rsh:224:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:224:13:function exp)'],
          msg: 'out',
          who: 'mintTo'
          });
        }
      else {
        }
      
      const v5584 = v2461.zeroAddress;
      const v5585 = {
        manager: v5559,
        nMinted: v5566,
        totalSupply: v5568,
        zeroAddress: v5584
        };
      const v8367 = v5585;
      const v8369 = v2465;
      return;
      
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2]]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_340: ctc11,
    arc72_setApprovalForAll0_340: ctc12,
    arc72_transferFrom0_340: ctc13,
    burn0_340: ctc14,
    close0_340: ctc10,
    deleteNftDataBox0_340: ctc14,
    deleteOperatorDataBox0_340: ctc15,
    grant0_340: ctc16,
    mintTo0_340: ctc17,
    touch0_340: ctc10
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2455, v2461, v2465] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9]);
  const v2740 = stdlib.protect(ctc10, await interact.in(), {
    at: './ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./ARC72_Dynamic.rsh:341:23:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:341:23:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to "runtouch0_340" (defined at: ./ARC72_Dynamic.rsh:341:10:function exp)', 'at ./ARC72_Dynamic.rsh:169:29:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:169:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2744 = ['touch0_340', v2740];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2461, v2465, v2744],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:341:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
      
      switch (v2802[0]) {
        case 'arc72_approve0_340': {
          const v2805 = v2802[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_340': {
          const v3116 = v2802[1];
          
          break;
          }
        case 'arc72_transferFrom0_340': {
          const v3427 = v2802[1];
          
          break;
          }
        case 'burn0_340': {
          const v3738 = v2802[1];
          
          break;
          }
        case 'close0_340': {
          const v4049 = v2802[1];
          
          break;
          }
        case 'deleteNftDataBox0_340': {
          const v4360 = v2802[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_340': {
          const v4671 = v2802[1];
          
          break;
          }
        case 'grant0_340': {
          const v4982 = v2802[1];
          
          break;
          }
        case 'mintTo0_340': {
          const v5293 = v2802[1];
          
          break;
          }
        case 'touch0_340': {
          const v5604 = v2802[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v5901 = (stdlib.le(await ctc.getBalance(), v2465) ? stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:344:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2465));
          const v5902 = stdlib.safeAdd(v5901, v2465);
          const v5903 = v2461.manager;
          const v5907 = stdlib.sub(v5902, v5901);
          sim_r.txns.push({
            kind: 'from',
            to: v5903,
            tok: undefined /* Nothing */
            });
          const v5908 = null;
          const v5909 = await txn1.getOutput('touch', 'v5908', ctc0, v5908);
          
          const v8400 = v2461;
          const v8402 = v5907;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2802], secs: v2804, time: v2803, didSend: v1701, from: v2801 } = txn1;
  switch (v2802[0]) {
    case 'arc72_approve0_340': {
      const v2805 = v2802[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_340': {
      const v3116 = v2802[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_340': {
      const v3427 = v2802[1];
      return;
      break;
      }
    case 'burn0_340': {
      const v3738 = v2802[1];
      return;
      break;
      }
    case 'close0_340': {
      const v4049 = v2802[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_340': {
      const v4360 = v2802[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_340': {
      const v4671 = v2802[1];
      return;
      break;
      }
    case 'grant0_340': {
      const v4982 = v2802[1];
      return;
      break;
      }
    case 'mintTo0_340': {
      const v5293 = v2802[1];
      return;
      break;
      }
    case 'touch0_340': {
      const v5604 = v2802[1];
      undefined /* setApiDetails */;
      ;
      const v5901 = (stdlib.le(await ctc.getBalance(), v2465) ? stdlib.checkedBigNumberify('./ARC72_Dynamic.rsh:344:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2465));
      const v5902 = stdlib.safeAdd(v5901, v2465);
      const v5903 = v2461.manager;
      const v5907 = stdlib.sub(v5902, v5901);
      ;
      const v5908 = null;
      const v5909 = await txn1.getOutput('touch', 'v5908', ctc0, v5908);
      if (v1701) {
        stdlib.protect(ctc0, await interact.out(v5604, v5909), {
          at: './ARC72_Dynamic.rsh:341:11:application',
          fs: ['at ./ARC72_Dynamic.rsh:341:11:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:341:11:function exp)', 'at ./ARC72_Dynamic.rsh:346:12:application call to "k" (defined at: ./ARC72_Dynamic.rsh:343:13:function exp)', 'at ./ARC72_Dynamic.rsh:343:13:application call to [unknown function] (defined at: ./ARC72_Dynamic.rsh:343:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v8400 = v2461;
      const v8402 = v5907;
      return;
      
      break;
      }
    }
  
  
  };
export async function arc72_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc72_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc72_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc72_approve3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc72_setApprovalForAll(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc72_setApprovalForAll expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc72_setApprovalForAll expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc72_setApprovalForAll3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc72_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc72_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc72_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc72_transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function burn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for burn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for burn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _burn3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _close3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteNftDataBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteNftDataBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteNftDataBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteNftDataBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteOperatorDataBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteOperatorDataBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteOperatorDataBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteOperatorDataBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function mintTo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for mintTo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for mintTo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _mintTo3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[288])))void`, `arc72_approve(address,uint256)void`, `arc72_setApprovalForAll(address,byte)void`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteNftDataBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `mintTo(address,byte[256])uint256`, `touch()void`],
    pure: [`arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `manager()address`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`],
    sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[288])))void`, `arc72_approve(address,uint256)void`, `arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_setApprovalForAll(address,byte)void`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteNftDataBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `manager()address`, `mintTo(address,byte[256])uint256`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAIACAwgBwALU4ghA1Hog4AEmBgABAAgAAAAAAAAAAQEBBNgI1PQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExGEEKGyhkSSJbNQElWzUCKWQrZFCCFgQdwi8sBD6mD38EUh4tYQRk1yp6BGdDQDEEaLeQ7gRtm/0nBHE0OV8EcV1g3QR5CWoUBHn1sI0Eiczm8wSUiqTxBJZWBHoErDGRJAS07bpOBMPB/AAEIXrcPQTfpRvEBOM9gFIE8VBVJwTy8ZSgNhoAjhYKfQn6CoAJ2gptCV8Jygm8CU0JtAoPCgIJnwn3CZcJignSCacKcAqICe8J3QA0C1cAIDUNNAtXICA1DCghBa8pNAxQiArUSTUSIlUhBBJENBFJUCOvUDQSiAq2STULVwAgMQASRCEGKTQMUDEANA1QNAshByNYUIgKq4AEhaLm4DEAUDQNUDQMULAoNQuACAAAAAAAAAsdNAtQsDQLNQQyBjUPNBE0EFA0DhZQJDIGNQI1ASlLAVcAf2crTFd/KWcoNAEWNAIWUGcxGSISRIgKhjQDQAAKgAQVH3x1NARQsCEEQzQLVwAgNQ00C1cgAReBB5E1DCEIKjEANA1QUAE0DBZRBwiICh2ABExN66sxAFA0DVA0DIEHkBZRBwhQsCg1C4AIAAAAAAAADGM0C1CwNAs1BDIGNQ9C/2g0C1cAIDUSNAtXICA1DTQLV0AgNQwoIQWvKTQMUIgJv0k1CyJVIQQSRDQRSVAjr1A0C4gJoUk1FlcAIDUVNBI0FRNEKSgpKjQVMQBQUAGICY6ICYIXNRQ0FlcgIEk1EzEAEjULMQA0FRI0FDQLERFENBI0DRNENBI0ERJENA00ERJENA00ExJENBUxABI0CxE0FBFEIQYpNAxQNA00EVA0FiEHI1hQiAlBJwQ0ElA0DVA0DFCwKDULgAgAAAAAAAAN9zQLULA0CzUEMgY1D0L+lzQNVwEgNQs0EUlQI69QKCEFryk0C1CICPWICOlXACAxABJEIQYpNAtQiAkFJwQxAFA0EVA0C1CwKDULgAgAAAAAAAAPUjQLULA0CzUENBBXACA0EFcgIFA0EFdAICcFoYgIxFA0EFdgIFAyBjUPNRBC/iQxADQQVwAgEkQoNQuACAAAAAAAABCdNAtQsDQLNQQyBjUPQv3/MQA0EFcAIBJEIQYpNA1XASBQiAiEKDULgAgAAAAAAAAR4TQLULA0CzUEMgY1D0L9zjEANBBXACASRCEIKjQLVwAgNAtXICBQUAGICEwoNQuACAAAAAAAABMpNAtQsDQLNQQyBjUPQv2WMQA0EFcAIBJEKDULgAgAAAAAAAAUbzQLULA0CzUENA1XASA0EFcgIFA0EFdAIFA0EFdgIFAyBjUPNRBC/Vg0C1cAIDUTNBBXACBJNRIxABJENBBXICBJNQ2AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF9eEApkQ0DScFoIgHoTUMIQYpNAxQNBM0EVA0CyEJI1hQiAd8JwQ0EVA0E1A0DFCwgAgAAAAAAAAVvjQMULA0DDUENBI0DFA0EFdAICcFoIgHXFA0EFdgIFAyBjUPNRBC/LwyCmAyCngJNA4JSTUMNBBXACCIB2coNQuACAAAAAAAABcUNAtQsDQLNQQyBjQMNA4INAwJNQ41D0L8gSWvKTQMNAtQUCEKr1BQNQskNAESRIgGxDQLIls1DDQLJYGhAlg1DYAErForCTQMFlA0DVCwNAyIBvE0DSJVjQoGAgYMBhYGIAXNBdAF0wXdBeAF7UL7szQBJBJEiAZ9MgM1BDEZIhJEQvxJNAEkEkSIBmk0EUlQI69QKCEFryk0C1CIBnOIBmdXICA1BEL/0zQBJBJEiAZEKSgpKjQMNAtQUAGIBlKIBkYXgQeQFlEHCDUEQv+tNAEkEkSIBh40EUlQI69QKCEFryk0C1CIBiiIBhxXACA1BEL/iCWvKzQMNAsWUQcIUFCB/wGvUFA1C0L/HTQBJBJEiAXhMgM1BEL/YTQBJBJEiAXSKCEFryk0C1CIBeNJNQwiVSEEEkQ0EUlQI69QNAyIBcUhByNYNQRC/zA0ASQSRIgFoTQQV0AgNQRC/x4lr4ABAjQNNAxQNAtQUIHAAa9QUDULQv6yJa+AAQM0C1Ajr1BQNQtC/qGAqQIAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9cCWvgAEFNAtQI69QUDULQv1fJa+AAQY0DDQLUFAhCq9QUDULQv1KJa+AAQc0C1Ajr1BQNQtC/Tk0ASQSRIgD/TQQVwAgNQRC/Xolr4ABCDQMNAtQUFA1C0L9FjQBJBJEiAPaNBBXACA0EFcgIFA0EFdAIFA1BEL9SzQBJBJEiAO8NAsBNQyAIHowoYR0Vc79Iz3ExtDzaz62RlIRhpaph/aXbARgHENNNAwSgCAXncdvfyMggKrxr8YYaqfE6Y47T+udvmwiJe8tq/0vMzQMEoAgjjFfkBTeb1asKU0+mIvNZAXsymCwH62rAuHHoXIQwMo0DBKAIA7Tnav53AhYLGN5rkObx60WMqxJSWnqJToDgx59OHTrNAwSgCAuHPY0LmFrdCbVk4T2VxtkIiWf/a1OTZRw0I4Vx5DsFTQMEhEREREWUQcINQRC/HiAqQIAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L69DQMIls1DTQMVwggNQuABN468KE0DRZQNAtQsDQNiAHvNAs1ETEAMgNQMgNQNBFQMgYiNQ41DzUQQvcqiAHMgaCNBogB5DYaATUMQv+ziAG6NhoBNQtC+pwiMTQSRCQxNRJEIjE2EkQiMTcSRIgBm4GoAa8iIkL2+TYaATYaAjULNQxC+l82GgE1C0L6rjYaATULQvq6NhoBNhoCNQs1DEL60jYaATULQvrwNhoBNhoCFzULNQxC+wc2GgE1C0L7FzYaATULQvseQvtMNhoBNhoCNhoDNQs1DDUNQvtMNhoBNQtC+11C+2s2GgE1C0L8lDYaATYaAjULNQxC/Jg2GgE1C0L8pUL4OUL4WzQNVwFANQtC+IJC+Lc0DSEEgaACWDULQvjoQvmBSEy/SIkisgEhBLIQsgeyCLOJNA1XAUA1C0L1qzQNVwEhNQtC9lc0DVcBYDULQvalQvdzQvxdNhoBNhoCNQs1DEL8YkL8cDYaATULQvyGQv1WSIlMCUk1BjIJiACgiQlJQf/uSTUGMRY0ACEECEk1AAlHAjgHMgoSRDgQIQQSRDgIDkSJMRmBBRJEiABkIjIKMgmIAHJC9dNJVwAgNRFJVyCANRCBoAFbNQ6JSVcBAEwiVU2JvkkWUQcIRQRNUIlMSb1A/ztLA4gAN0L/M0kVIQlMCa9MUIm8Ik4CTTQHCDUHiSEENQOJSSISTDQCEhFEiTQGNAdKD0H/WUL/YbFC/wQ0Bgg1BomxsglC/vg=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `508`,
    1001: `508`,
    1002: `508`,
    1003: `508`,
    1004: `508`,
    1005: `508`,
    1006: `508`,
    1007: `508`,
    1008: `508`,
    1009: `509`,
    101: `21`,
    1010: `509`,
    1011: `510`,
    1012: `511`,
    1013: `512`,
    1014: `512`,
    1015: `513`,
    1016: `513`,
    1017: `514`,
    1018: `514`,
    1019: `515`,
    102: `21`,
    1020: `515`,
    1021: `515`,
    1022: `516`,
    1023: `516`,
    1024: `517`,
    1025: `517`,
    1026: `517`,
    1027: `518`,
    1028: `519`,
    1029: `519`,
    103: `21`,
    1030: `520`,
    1031: `520`,
    1032: `520`,
    1033: `521`,
    1034: `522`,
    1035: `522`,
    1036: `523`,
    1037: `523`,
    1038: `523`,
    1039: `524`,
    104: `21`,
    1040: `525`,
    1041: `525`,
    1042: `526`,
    1043: `526`,
    1044: `527`,
    1045: `527`,
    1046: `528`,
    1047: `528`,
    1048: `528`,
    1049: `530`,
    105: `21`,
    1050: `530`,
    1051: `531`,
    1052: `531`,
    1053: `531`,
    1054: `532`,
    1055: `532`,
    1056: `533`,
    1057: `533`,
    1058: `534`,
    1059: `534`,
    106: `21`,
    1060: `534`,
    1061: `535`,
    1062: `536`,
    1063: `536`,
    1064: `537`,
    1065: `537`,
    1066: `538`,
    1067: `539`,
    1068: `544`,
    1069: `544`,
    107: `21`,
    1070: `545`,
    1071: `545`,
    1072: `545`,
    1073: `546`,
    1074: `547`,
    1075: `547`,
    1076: `548`,
    1077: `548`,
    1078: `548`,
    1079: `548`,
    108: `21`,
    1080: `548`,
    1081: `548`,
    1082: `548`,
    1083: `548`,
    1084: `548`,
    1085: `548`,
    1086: `548`,
    1087: `548`,
    1088: `548`,
    1089: `548`,
    109: `21`,
    1090: `548`,
    1091: `548`,
    1092: `548`,
    1093: `548`,
    1094: `548`,
    1095: `548`,
    1096: `548`,
    1097: `548`,
    1098: `548`,
    1099: `548`,
    11: `2`,
    110: `21`,
    1100: `548`,
    1101: `548`,
    1102: `548`,
    1103: `548`,
    1104: `548`,
    1105: `548`,
    1106: `548`,
    1107: `548`,
    1108: `548`,
    1109: `548`,
    111: `21`,
    1110: `549`,
    1111: `550`,
    1112: `555`,
    1113: `555`,
    1114: `556`,
    1115: `556`,
    1116: `557`,
    1117: `558`,
    1118: `558`,
    1119: `558`,
    112: `21`,
    1120: `559`,
    1121: `559`,
    1122: `561`,
    1123: `561`,
    1124: `562`,
    1125: `563`,
    1126: `563`,
    1127: `564`,
    1128: `565`,
    1129: `565`,
    113: `21`,
    1130: `566`,
    1131: `566`,
    1132: `567`,
    1133: `568`,
    1134: `568`,
    1135: `569`,
    1136: `569`,
    1137: `570`,
    1138: `571`,
    1139: `572`,
    114: `21`,
    1140: `573`,
    1141: `573`,
    1142: `573`,
    1143: `574`,
    1144: `574`,
    1145: `575`,
    1146: `575`,
    1147: `576`,
    1148: `577`,
    1149: `577`,
    115: `21`,
    1150: `578`,
    1151: `579`,
    1152: `579`,
    1153: `580`,
    1154: `581`,
    1155: `583`,
    1156: `583`,
    1157: `583`,
    1158: `583`,
    1159: `583`,
    116: `21`,
    1160: `583`,
    1161: `583`,
    1162: `583`,
    1163: `583`,
    1164: `583`,
    1165: `584`,
    1166: `584`,
    1167: `585`,
    1168: `586`,
    1169: `587`,
    117: `21`,
    1170: `587`,
    1171: `588`,
    1172: `588`,
    1173: `589`,
    1174: `589`,
    1175: `590`,
    1176: `590`,
    1177: `591`,
    1178: `592`,
    1179: `592`,
    118: `21`,
    1180: `593`,
    1181: `593`,
    1182: `593`,
    1183: `594`,
    1184: `594`,
    1185: `595`,
    1186: `596`,
    1187: `596`,
    1188: `596`,
    1189: `597`,
    119: `21`,
    1190: `598`,
    1191: `598`,
    1192: `599`,
    1193: `599`,
    1194: `599`,
    1195: `600`,
    1196: `601`,
    1197: `601`,
    1198: `602`,
    1199: `602`,
    12: `2`,
    120: `21`,
    1200: `603`,
    1201: `603`,
    1202: `604`,
    1203: `604`,
    1204: `604`,
    1205: `606`,
    1206: `606`,
    1207: `607`,
    1208: `608`,
    1209: `608`,
    121: `21`,
    1210: `609`,
    1211: `610`,
    1212: `611`,
    1213: `611`,
    1214: `612`,
    1215: `614`,
    1216: `615`,
    1217: `615`,
    1218: `617`,
    1219: `617`,
    122: `21`,
    1220: `618`,
    1221: `618`,
    1222: `618`,
    1223: `619`,
    1224: `619`,
    1225: `619`,
    1226: `620`,
    1227: `621`,
    1228: `621`,
    1229: `622`,
    123: `21`,
    1230: `622`,
    1231: `622`,
    1232: `622`,
    1233: `622`,
    1234: `622`,
    1235: `622`,
    1236: `622`,
    1237: `622`,
    1238: `622`,
    1239: `623`,
    124: `21`,
    1240: `623`,
    1241: `624`,
    1242: `625`,
    1243: `626`,
    1244: `626`,
    1245: `627`,
    1246: `627`,
    1247: `628`,
    1248: `628`,
    1249: `629`,
    125: `21`,
    1250: `629`,
    1251: `630`,
    1252: `630`,
    1253: `631`,
    1254: `632`,
    1255: `632`,
    1256: `633`,
    1257: `634`,
    1258: `634`,
    1259: `635`,
    126: `21`,
    1260: `635`,
    1261: `636`,
    1262: `636`,
    1263: `636`,
    1264: `638`,
    1265: `639`,
    1266: `640`,
    1267: `641`,
    1268: `641`,
    1269: `642`,
    127: `21`,
    1270: `642`,
    1271: `643`,
    1272: `644`,
    1273: `645`,
    1274: `645`,
    1275: `646`,
    1276: `647`,
    1277: `648`,
    1278: `649`,
    1279: `649`,
    128: `21`,
    1280: `651`,
    1281: `652`,
    1282: `652`,
    1283: `653`,
    1284: `654`,
    1285: `655`,
    1286: `655`,
    1287: `655`,
    1288: `656`,
    1289: `656`,
    129: `21`,
    1290: `657`,
    1291: `658`,
    1292: `659`,
    1293: `659`,
    1294: `660`,
    1295: `660`,
    1296: `661`,
    1297: `662`,
    1298: `662`,
    1299: `662`,
    13: `2`,
    130: `21`,
    1300: `663`,
    1301: `664`,
    1302: `664`,
    1303: `665`,
    1304: `665`,
    1305: `665`,
    1306: `665`,
    1307: `665`,
    1308: `665`,
    1309: `666`,
    131: `21`,
    1310: `666`,
    1311: `667`,
    1312: `668`,
    1313: `669`,
    1314: `669`,
    1315: `670`,
    1316: `671`,
    1317: `673`,
    1318: `673`,
    1319: `674`,
    132: `21`,
    1320: `674`,
    1321: `674`,
    1322: `675`,
    1323: `675`,
    1324: `676`,
    1325: `677`,
    1326: `678`,
    1327: `678`,
    1328: `678`,
    1329: `678`,
    133: `21`,
    1330: `678`,
    1331: `678`,
    1332: `678`,
    1333: `678`,
    1334: `678`,
    1335: `678`,
    1336: `678`,
    1337: `678`,
    1338: `678`,
    1339: `678`,
    134: `21`,
    1340: `678`,
    1341: `678`,
    1342: `678`,
    1343: `678`,
    1344: `678`,
    1345: `678`,
    1346: `678`,
    1347: `678`,
    1348: `679`,
    1349: `679`,
    135: `21`,
    1350: `679`,
    1351: `681`,
    1352: `681`,
    1353: `682`,
    1354: `683`,
    1355: `684`,
    1356: `687`,
    1357: `687`,
    1358: `687`,
    1359: `688`,
    136: `21`,
    1360: `688`,
    1361: `689`,
    1362: `689`,
    1363: `691`,
    1364: `691`,
    1365: `692`,
    1366: `693`,
    1367: `694`,
    1368: `696`,
    1369: `696`,
    137: `21`,
    1370: `696`,
    1371: `698`,
    1372: `698`,
    1373: `699`,
    1374: `700`,
    1375: `701`,
    1376: `704`,
    1377: `704`,
    1378: `704`,
    1379: `705`,
    138: `21`,
    1380: `705`,
    1381: `706`,
    1382: `707`,
    1383: `708`,
    1384: `709`,
    1385: `710`,
    1386: `712`,
    1387: `713`,
    1388: `713`,
    1389: `714`,
    139: `21`,
    1390: `715`,
    1391: `716`,
    1392: `716`,
    1393: `717`,
    1394: `718`,
    1395: `718`,
    1396: `718`,
    1397: `719`,
    1398: `719`,
    1399: `719`,
    14: `2`,
    140: `21`,
    1400: `720`,
    1401: `720`,
    1402: `720`,
    1403: `721`,
    1404: `721`,
    1405: `722`,
    1406: `722`,
    1407: `722`,
    1408: `724`,
    1409: `724`,
    141: `21`,
    1410: `725`,
    1411: `726`,
    1412: `727`,
    1413: `730`,
    1414: `730`,
    1415: `730`,
    1416: `731`,
    1417: `733`,
    1418: `734`,
    1419: `735`,
    142: `21`,
    1420: `736`,
    1421: `736`,
    1422: `737`,
    1423: `737`,
    1424: `738`,
    1425: `739`,
    1426: `740`,
    1427: `741`,
    1428: `741`,
    1429: `741`,
    143: `21`,
    1430: `742`,
    1431: `742`,
    1432: `742`,
    1433: `743`,
    1434: `743`,
    1435: `744`,
    1436: `744`,
    1437: `744`,
    1438: `746`,
    1439: `746`,
    144: `21`,
    1440: `747`,
    1441: `748`,
    1442: `749`,
    1443: `752`,
    1444: `752`,
    1445: `752`,
    1446: `753`,
    1447: `753`,
    1448: `754`,
    1449: `755`,
    145: `21`,
    1450: `756`,
    1451: `757`,
    1452: `758`,
    1453: `760`,
    1454: `761`,
    1455: `761`,
    1456: `762`,
    1457: `763`,
    1458: `764`,
    1459: `764`,
    146: `21`,
    1460: `765`,
    1461: `766`,
    1462: `766`,
    1463: `766`,
    1464: `767`,
    1465: `767`,
    1466: `767`,
    1467: `768`,
    1468: `768`,
    1469: `768`,
    147: `21`,
    1470: `769`,
    1471: `769`,
    1472: `770`,
    1473: `770`,
    1474: `770`,
    1475: `772`,
    1476: `773`,
    1477: `774`,
    1478: `775`,
    1479: `775`,
    148: `21`,
    1480: `776`,
    1481: `776`,
    1482: `777`,
    1483: `778`,
    1484: `778`,
    1485: `778`,
    1486: `779`,
    1487: `780`,
    1488: `781`,
    1489: `781`,
    149: `21`,
    1490: `781`,
    1491: `782`,
    1492: `783`,
    1493: `784`,
    1494: `785`,
    1495: `785`,
    1496: `786`,
    1497: `786`,
    1498: `786`,
    1499: `788`,
    15: `2`,
    150: `21`,
    1500: `788`,
    1501: `789`,
    1502: `790`,
    1503: `791`,
    1504: `794`,
    1505: `794`,
    1506: `794`,
    1507: `795`,
    1508: `795`,
    1509: `796`,
    151: `21`,
    1510: `796`,
    1511: `797`,
    1512: `797`,
    1513: `797`,
    1514: `799`,
    1515: `799`,
    1516: `800`,
    1517: `801`,
    1518: `802`,
    1519: `805`,
    152: `21`,
    1520: `805`,
    1521: `805`,
    1522: `807`,
    1523: `808`,
    1524: `808`,
    1525: `809`,
    1526: `810`,
    1527: `811`,
    1528: `811`,
    1529: `812`,
    153: `21`,
    1530: `813`,
    1531: `813`,
    1532: `813`,
    1533: `814`,
    1534: `815`,
    1535: `815`,
    1536: `816`,
    1537: `817`,
    1538: `818`,
    1539: `818`,
    154: `21`,
    1540: `819`,
    1541: `820`,
    1542: `825`,
    1543: `825`,
    1544: `826`,
    1545: `827`,
    1546: `828`,
    1547: `829`,
    1548: `830`,
    1549: `831`,
    155: `21`,
    1550: `831`,
    1551: `832`,
    1552: `832`,
    1553: `832`,
    1554: `833`,
    1555: `833`,
    1556: `834`,
    1557: `835`,
    1558: `836`,
    1559: `836`,
    156: `21`,
    1560: `837`,
    1561: `837`,
    1562: `837`,
    1563: `839`,
    1564: `839`,
    1565: `840`,
    1566: `841`,
    1567: `842`,
    1568: `845`,
    1569: `845`,
    157: `21`,
    1570: `845`,
    1571: `846`,
    1572: `846`,
    1573: `847`,
    1574: `847`,
    1575: `847`,
    1576: `848`,
    1577: `848`,
    1578: `849`,
    1579: `849`,
    158: `21`,
    1580: `849`,
    1581: `851`,
    1582: `852`,
    1583: `853`,
    1584: `853`,
    1585: `853`,
    1586: `854`,
    1587: `854`,
    1588: `855`,
    1589: `855`,
    159: `21`,
    1590: `856`,
    1591: `857`,
    1592: `857`,
    1593: `858`,
    1594: `859`,
    1595: `860`,
    1596: `860`,
    1597: `860`,
    1598: `861`,
    1599: `862`,
    16: `2`,
    160: `21`,
    1600: `863`,
    1601: `864`,
    1602: `864`,
    1603: `865`,
    1604: `865`,
    1605: `865`,
    1606: `867`,
    1607: `868`,
    1608: `869`,
    1609: `869`,
    161: `21`,
    1610: `869`,
    1611: `870`,
    1612: `870`,
    1613: `871`,
    1614: `872`,
    1615: `873`,
    1616: `874`,
    1617: `875`,
    1618: `876`,
    1619: `876`,
    162: `21`,
    1620: `877`,
    1621: `877`,
    1622: `877`,
    1623: `879`,
    1624: `879`,
    1625: `879`,
    1626: `879`,
    1627: `879`,
    1628: `879`,
    1629: `879`,
    163: `21`,
    1630: `879`,
    1631: `879`,
    1632: `879`,
    1633: `879`,
    1634: `879`,
    1635: `879`,
    1636: `879`,
    1637: `879`,
    1638: `879`,
    1639: `879`,
    164: `21`,
    1640: `879`,
    1641: `879`,
    1642: `879`,
    1643: `879`,
    1644: `879`,
    1645: `879`,
    1646: `879`,
    1647: `879`,
    1648: `879`,
    1649: `879`,
    165: `21`,
    1650: `879`,
    1651: `879`,
    1652: `879`,
    1653: `879`,
    1654: `879`,
    1655: `879`,
    1656: `879`,
    1657: `879`,
    1658: `879`,
    1659: `879`,
    166: `21`,
    1660: `879`,
    1661: `879`,
    1662: `879`,
    1663: `879`,
    1664: `879`,
    1665: `879`,
    1666: `879`,
    1667: `879`,
    1668: `879`,
    1669: `879`,
    167: `21`,
    1670: `879`,
    1671: `879`,
    1672: `879`,
    1673: `879`,
    1674: `879`,
    1675: `879`,
    1676: `879`,
    1677: `879`,
    1678: `879`,
    1679: `879`,
    168: `21`,
    1680: `879`,
    1681: `879`,
    1682: `879`,
    1683: `879`,
    1684: `879`,
    1685: `879`,
    1686: `879`,
    1687: `879`,
    1688: `879`,
    1689: `879`,
    169: `21`,
    1690: `879`,
    1691: `879`,
    1692: `879`,
    1693: `879`,
    1694: `879`,
    1695: `879`,
    1696: `879`,
    1697: `879`,
    1698: `879`,
    1699: `879`,
    17: `2`,
    170: `21`,
    1700: `879`,
    1701: `879`,
    1702: `879`,
    1703: `879`,
    1704: `879`,
    1705: `879`,
    1706: `879`,
    1707: `879`,
    1708: `879`,
    1709: `879`,
    171: `21`,
    1710: `879`,
    1711: `879`,
    1712: `879`,
    1713: `879`,
    1714: `879`,
    1715: `879`,
    1716: `879`,
    1717: `879`,
    1718: `879`,
    1719: `879`,
    172: `21`,
    1720: `879`,
    1721: `879`,
    1722: `879`,
    1723: `879`,
    1724: `879`,
    1725: `879`,
    1726: `879`,
    1727: `879`,
    1728: `879`,
    1729: `879`,
    173: `21`,
    1730: `879`,
    1731: `879`,
    1732: `879`,
    1733: `879`,
    1734: `879`,
    1735: `879`,
    1736: `879`,
    1737: `879`,
    1738: `879`,
    1739: `879`,
    174: `21`,
    1740: `879`,
    1741: `879`,
    1742: `879`,
    1743: `879`,
    1744: `879`,
    1745: `879`,
    1746: `879`,
    1747: `879`,
    1748: `879`,
    1749: `879`,
    175: `21`,
    1750: `879`,
    1751: `879`,
    1752: `879`,
    1753: `879`,
    1754: `879`,
    1755: `879`,
    1756: `879`,
    1757: `879`,
    1758: `879`,
    1759: `879`,
    176: `21`,
    1760: `879`,
    1761: `879`,
    1762: `879`,
    1763: `879`,
    1764: `879`,
    1765: `879`,
    1766: `879`,
    1767: `879`,
    1768: `879`,
    1769: `879`,
    177: `21`,
    1770: `879`,
    1771: `879`,
    1772: `879`,
    1773: `879`,
    1774: `879`,
    1775: `879`,
    1776: `879`,
    1777: `879`,
    1778: `879`,
    1779: `879`,
    178: `21`,
    1780: `879`,
    1781: `879`,
    1782: `879`,
    1783: `879`,
    1784: `879`,
    1785: `879`,
    1786: `879`,
    1787: `879`,
    1788: `879`,
    1789: `879`,
    179: `21`,
    1790: `879`,
    1791: `879`,
    1792: `879`,
    1793: `879`,
    1794: `879`,
    1795: `879`,
    1796: `879`,
    1797: `879`,
    1798: `879`,
    1799: `879`,
    18: `2`,
    180: `21`,
    1800: `879`,
    1801: `879`,
    1802: `879`,
    1803: `879`,
    1804: `879`,
    1805: `879`,
    1806: `879`,
    1807: `879`,
    1808: `879`,
    1809: `879`,
    181: `21`,
    1810: `879`,
    1811: `879`,
    1812: `879`,
    1813: `879`,
    1814: `879`,
    1815: `879`,
    1816: `879`,
    1817: `879`,
    1818: `879`,
    1819: `879`,
    182: `21`,
    1820: `879`,
    1821: `879`,
    1822: `879`,
    1823: `879`,
    1824: `879`,
    1825: `879`,
    1826: `879`,
    1827: `879`,
    1828: `879`,
    1829: `879`,
    183: `21`,
    1830: `879`,
    1831: `879`,
    1832: `879`,
    1833: `879`,
    1834: `879`,
    1835: `879`,
    1836: `879`,
    1837: `879`,
    1838: `879`,
    1839: `879`,
    184: `21`,
    1840: `879`,
    1841: `879`,
    1842: `879`,
    1843: `879`,
    1844: `879`,
    1845: `879`,
    1846: `879`,
    1847: `879`,
    1848: `879`,
    1849: `879`,
    185: `21`,
    1850: `879`,
    1851: `879`,
    1852: `879`,
    1853: `879`,
    1854: `879`,
    1855: `879`,
    1856: `879`,
    1857: `879`,
    1858: `879`,
    1859: `879`,
    186: `21`,
    1860: `879`,
    1861: `879`,
    1862: `879`,
    1863: `879`,
    1864: `879`,
    1865: `879`,
    1866: `879`,
    1867: `879`,
    1868: `879`,
    1869: `879`,
    187: `21`,
    1870: `879`,
    1871: `879`,
    1872: `879`,
    1873: `879`,
    1874: `879`,
    1875: `879`,
    1876: `879`,
    1877: `879`,
    1878: `879`,
    1879: `879`,
    188: `21`,
    1880: `879`,
    1881: `879`,
    1882: `879`,
    1883: `879`,
    1884: `879`,
    1885: `879`,
    1886: `879`,
    1887: `879`,
    1888: `879`,
    1889: `879`,
    189: `21`,
    1890: `879`,
    1891: `879`,
    1892: `879`,
    1893: `879`,
    1894: `879`,
    1895: `879`,
    1896: `879`,
    1897: `879`,
    1898: `879`,
    1899: `879`,
    19: `2`,
    190: `21`,
    1900: `879`,
    1901: `879`,
    1902: `879`,
    1903: `879`,
    1904: `879`,
    1905: `879`,
    1906: `879`,
    1907: `879`,
    1908: `879`,
    1909: `879`,
    191: `21`,
    1910: `879`,
    1911: `879`,
    1912: `879`,
    1913: `879`,
    1914: `879`,
    1915: `879`,
    1916: `879`,
    1917: `879`,
    1918: `879`,
    1919: `879`,
    192: `21`,
    1920: `879`,
    1921: `879`,
    1922: `879`,
    1923: `880`,
    1924: `880`,
    1925: `881`,
    1926: `881`,
    1927: `881`,
    1928: `883`,
    1929: `884`,
    193: `21`,
    1930: `885`,
    1931: `885`,
    1932: `885`,
    1933: `886`,
    1934: `886`,
    1935: `887`,
    1936: `888`,
    1937: `889`,
    1938: `890`,
    1939: `891`,
    194: `21`,
    1940: `892`,
    1941: `892`,
    1942: `893`,
    1943: `893`,
    1944: `893`,
    1945: `895`,
    1946: `896`,
    1947: `897`,
    1948: `897`,
    1949: `897`,
    195: `21`,
    1950: `898`,
    1951: `898`,
    1952: `899`,
    1953: `899`,
    1954: `900`,
    1955: `901`,
    1956: `902`,
    1957: `902`,
    1958: `903`,
    1959: `904`,
    196: `21`,
    1960: `905`,
    1961: `906`,
    1962: `906`,
    1963: `907`,
    1964: `907`,
    1965: `907`,
    1966: `909`,
    1967: `910`,
    1968: `911`,
    1969: `911`,
    197: `21`,
    1970: `911`,
    1971: `912`,
    1972: `912`,
    1973: `913`,
    1974: `914`,
    1975: `915`,
    1976: `916`,
    1977: `917`,
    1978: `918`,
    1979: `918`,
    198: `21`,
    1980: `919`,
    1981: `919`,
    1982: `919`,
    1983: `921`,
    1984: `921`,
    1985: `922`,
    1986: `923`,
    1987: `924`,
    1988: `927`,
    1989: `927`,
    199: `21`,
    1990: `927`,
    1991: `928`,
    1992: `928`,
    1993: `929`,
    1994: `929`,
    1995: `929`,
    1996: `930`,
    1997: `930`,
    1998: `931`,
    1999: `931`,
    2: `2`,
    20: `2`,
    200: `21`,
    2000: `931`,
    2001: `933`,
    2002: `934`,
    2003: `935`,
    2004: `935`,
    2005: `935`,
    2006: `936`,
    2007: `936`,
    2008: `937`,
    2009: `937`,
    201: `21`,
    2010: `938`,
    2011: `939`,
    2012: `940`,
    2013: `941`,
    2014: `941`,
    2015: `942`,
    2016: `942`,
    2017: `942`,
    2018: `944`,
    2019: `944`,
    202: `21`,
    2020: `945`,
    2021: `946`,
    2022: `947`,
    2023: `950`,
    2024: `950`,
    2025: `950`,
    2026: `951`,
    2027: `951`,
    2028: `952`,
    2029: `952`,
    203: `21`,
    2030: `952`,
    2031: `953`,
    2032: `953`,
    2033: `954`,
    2034: `954`,
    2035: `954`,
    2036: `955`,
    2037: `956`,
    2038: `956`,
    2039: `957`,
    204: `21`,
    2040: `957`,
    2041: `957`,
    2042: `958`,
    2043: `959`,
    2044: `959`,
    2045: `960`,
    2046: `960`,
    2047: `960`,
    2048: `962`,
    2049: `962`,
    205: `21`,
    2050: `963`,
    2051: `964`,
    2052: `965`,
    2053: `968`,
    2054: `968`,
    2055: `968`,
    2056: `969`,
    2057: `969`,
    2058: `970`,
    2059: `971`,
    206: `21`,
    2060: `971`,
    2061: `972`,
    2062: `972`,
    2063: `972`,
    2064: `972`,
    2065: `972`,
    2066: `972`,
    2067: `972`,
    2068: `972`,
    2069: `972`,
    207: `22`,
    2070: `972`,
    2071: `972`,
    2072: `972`,
    2073: `972`,
    2074: `972`,
    2075: `972`,
    2076: `972`,
    2077: `972`,
    2078: `972`,
    2079: `972`,
    208: `22`,
    2080: `972`,
    2081: `972`,
    2082: `972`,
    2083: `972`,
    2084: `972`,
    2085: `972`,
    2086: `972`,
    2087: `972`,
    2088: `972`,
    2089: `972`,
    209: `22`,
    2090: `972`,
    2091: `972`,
    2092: `972`,
    2093: `972`,
    2094: `972`,
    2095: `973`,
    2096: `973`,
    2097: `974`,
    2098: `975`,
    2099: `975`,
    21: `2`,
    210: `23`,
    2100: `975`,
    2101: `975`,
    2102: `975`,
    2103: `975`,
    2104: `975`,
    2105: `975`,
    2106: `975`,
    2107: `975`,
    2108: `975`,
    2109: `975`,
    211: `23`,
    2110: `975`,
    2111: `975`,
    2112: `975`,
    2113: `975`,
    2114: `975`,
    2115: `975`,
    2116: `975`,
    2117: `975`,
    2118: `975`,
    2119: `975`,
    212: `23`,
    2120: `975`,
    2121: `975`,
    2122: `975`,
    2123: `975`,
    2124: `975`,
    2125: `975`,
    2126: `975`,
    2127: `975`,
    2128: `975`,
    2129: `975`,
    213: `23`,
    2130: `975`,
    2131: `975`,
    2132: `976`,
    2133: `976`,
    2134: `977`,
    2135: `978`,
    2136: `978`,
    2137: `978`,
    2138: `978`,
    2139: `978`,
    214: `23`,
    2140: `978`,
    2141: `978`,
    2142: `978`,
    2143: `978`,
    2144: `978`,
    2145: `978`,
    2146: `978`,
    2147: `978`,
    2148: `978`,
    2149: `978`,
    215: `23`,
    2150: `978`,
    2151: `978`,
    2152: `978`,
    2153: `978`,
    2154: `978`,
    2155: `978`,
    2156: `978`,
    2157: `978`,
    2158: `978`,
    2159: `978`,
    216: `23`,
    2160: `978`,
    2161: `978`,
    2162: `978`,
    2163: `978`,
    2164: `978`,
    2165: `978`,
    2166: `978`,
    2167: `978`,
    2168: `978`,
    2169: `979`,
    217: `23`,
    2170: `979`,
    2171: `980`,
    2172: `981`,
    2173: `981`,
    2174: `981`,
    2175: `981`,
    2176: `981`,
    2177: `981`,
    2178: `981`,
    2179: `981`,
    218: `23`,
    2180: `981`,
    2181: `981`,
    2182: `981`,
    2183: `981`,
    2184: `981`,
    2185: `981`,
    2186: `981`,
    2187: `981`,
    2188: `981`,
    2189: `981`,
    219: `23`,
    2190: `981`,
    2191: `981`,
    2192: `981`,
    2193: `981`,
    2194: `981`,
    2195: `981`,
    2196: `981`,
    2197: `981`,
    2198: `981`,
    2199: `981`,
    22: `2`,
    220: `23`,
    2200: `981`,
    2201: `981`,
    2202: `981`,
    2203: `981`,
    2204: `981`,
    2205: `981`,
    2206: `982`,
    2207: `982`,
    2208: `983`,
    2209: `984`,
    221: `23`,
    2210: `984`,
    2211: `984`,
    2212: `984`,
    2213: `984`,
    2214: `984`,
    2215: `984`,
    2216: `984`,
    2217: `984`,
    2218: `984`,
    2219: `984`,
    222: `23`,
    2220: `984`,
    2221: `984`,
    2222: `984`,
    2223: `984`,
    2224: `984`,
    2225: `984`,
    2226: `984`,
    2227: `984`,
    2228: `984`,
    2229: `984`,
    223: `23`,
    2230: `984`,
    2231: `984`,
    2232: `984`,
    2233: `984`,
    2234: `984`,
    2235: `984`,
    2236: `984`,
    2237: `984`,
    2238: `984`,
    2239: `984`,
    224: `23`,
    2240: `984`,
    2241: `984`,
    2242: `984`,
    2243: `985`,
    2244: `985`,
    2245: `986`,
    2246: `987`,
    2247: `988`,
    2248: `989`,
    2249: `990`,
    225: `23`,
    2250: `991`,
    2251: `992`,
    2252: `992`,
    2253: `992`,
    2254: `993`,
    2255: `993`,
    2256: `994`,
    2257: `994`,
    2258: `994`,
    2259: `996`,
    226: `23`,
    2260: `996`,
    2261: `996`,
    2262: `996`,
    2263: `996`,
    2264: `996`,
    2265: `996`,
    2266: `996`,
    2267: `996`,
    2268: `996`,
    2269: `996`,
    227: `23`,
    2270: `996`,
    2271: `996`,
    2272: `996`,
    2273: `996`,
    2274: `996`,
    2275: `996`,
    2276: `996`,
    2277: `996`,
    2278: `996`,
    2279: `996`,
    228: `23`,
    2280: `996`,
    2281: `996`,
    2282: `996`,
    2283: `996`,
    2284: `996`,
    2285: `996`,
    2286: `996`,
    2287: `996`,
    2288: `996`,
    2289: `996`,
    229: `23`,
    2290: `996`,
    2291: `996`,
    2292: `996`,
    2293: `996`,
    2294: `996`,
    2295: `996`,
    2296: `996`,
    2297: `996`,
    2298: `996`,
    2299: `996`,
    23: `2`,
    230: `23`,
    2300: `996`,
    2301: `996`,
    2302: `996`,
    2303: `996`,
    2304: `996`,
    2305: `996`,
    2306: `996`,
    2307: `996`,
    2308: `996`,
    2309: `996`,
    231: `23`,
    2310: `996`,
    2311: `996`,
    2312: `996`,
    2313: `996`,
    2314: `996`,
    2315: `996`,
    2316: `996`,
    2317: `996`,
    2318: `996`,
    2319: `996`,
    232: `23`,
    2320: `996`,
    2321: `996`,
    2322: `996`,
    2323: `996`,
    2324: `996`,
    2325: `996`,
    2326: `996`,
    2327: `996`,
    2328: `996`,
    2329: `996`,
    233: `23`,
    2330: `996`,
    2331: `996`,
    2332: `996`,
    2333: `996`,
    2334: `996`,
    2335: `996`,
    2336: `996`,
    2337: `996`,
    2338: `996`,
    2339: `996`,
    234: `23`,
    2340: `996`,
    2341: `996`,
    2342: `996`,
    2343: `996`,
    2344: `996`,
    2345: `996`,
    2346: `996`,
    2347: `996`,
    2348: `996`,
    2349: `996`,
    235: `23`,
    2350: `996`,
    2351: `996`,
    2352: `996`,
    2353: `996`,
    2354: `996`,
    2355: `996`,
    2356: `996`,
    2357: `996`,
    2358: `996`,
    2359: `996`,
    236: `23`,
    2360: `996`,
    2361: `996`,
    2362: `996`,
    2363: `996`,
    2364: `996`,
    2365: `996`,
    2366: `996`,
    2367: `996`,
    2368: `996`,
    2369: `996`,
    237: `23`,
    2370: `996`,
    2371: `996`,
    2372: `996`,
    2373: `996`,
    2374: `996`,
    2375: `996`,
    2376: `996`,
    2377: `996`,
    2378: `996`,
    2379: `996`,
    238: `23`,
    2380: `996`,
    2381: `996`,
    2382: `996`,
    2383: `996`,
    2384: `996`,
    2385: `996`,
    2386: `996`,
    2387: `996`,
    2388: `996`,
    2389: `996`,
    239: `23`,
    2390: `996`,
    2391: `996`,
    2392: `996`,
    2393: `996`,
    2394: `996`,
    2395: `996`,
    2396: `996`,
    2397: `996`,
    2398: `996`,
    2399: `996`,
    24: `2`,
    240: `23`,
    2400: `996`,
    2401: `996`,
    2402: `996`,
    2403: `996`,
    2404: `996`,
    2405: `996`,
    2406: `996`,
    2407: `996`,
    2408: `996`,
    2409: `996`,
    241: `23`,
    2410: `996`,
    2411: `996`,
    2412: `996`,
    2413: `996`,
    2414: `996`,
    2415: `996`,
    2416: `996`,
    2417: `996`,
    2418: `996`,
    2419: `996`,
    242: `23`,
    2420: `996`,
    2421: `996`,
    2422: `996`,
    2423: `996`,
    2424: `996`,
    2425: `996`,
    2426: `996`,
    2427: `996`,
    2428: `996`,
    2429: `996`,
    243: `23`,
    2430: `996`,
    2431: `996`,
    2432: `996`,
    2433: `996`,
    2434: `996`,
    2435: `996`,
    2436: `996`,
    2437: `996`,
    2438: `996`,
    2439: `996`,
    244: `23`,
    2440: `996`,
    2441: `996`,
    2442: `996`,
    2443: `996`,
    2444: `996`,
    2445: `996`,
    2446: `996`,
    2447: `996`,
    2448: `996`,
    2449: `996`,
    245: `23`,
    2450: `996`,
    2451: `996`,
    2452: `996`,
    2453: `996`,
    2454: `996`,
    2455: `996`,
    2456: `996`,
    2457: `996`,
    2458: `996`,
    2459: `996`,
    246: `23`,
    2460: `996`,
    2461: `996`,
    2462: `996`,
    2463: `996`,
    2464: `996`,
    2465: `996`,
    2466: `996`,
    2467: `996`,
    2468: `996`,
    2469: `996`,
    247: `23`,
    2470: `996`,
    2471: `996`,
    2472: `996`,
    2473: `996`,
    2474: `996`,
    2475: `996`,
    2476: `996`,
    2477: `996`,
    2478: `996`,
    2479: `996`,
    248: `23`,
    2480: `996`,
    2481: `996`,
    2482: `996`,
    2483: `996`,
    2484: `996`,
    2485: `996`,
    2486: `996`,
    2487: `996`,
    2488: `996`,
    2489: `996`,
    249: `23`,
    2490: `996`,
    2491: `996`,
    2492: `996`,
    2493: `996`,
    2494: `996`,
    2495: `996`,
    2496: `996`,
    2497: `996`,
    2498: `996`,
    2499: `996`,
    25: `2`,
    250: `23`,
    2500: `996`,
    2501: `996`,
    2502: `996`,
    2503: `996`,
    2504: `996`,
    2505: `996`,
    2506: `996`,
    2507: `996`,
    2508: `996`,
    2509: `996`,
    251: `23`,
    2510: `996`,
    2511: `996`,
    2512: `996`,
    2513: `996`,
    2514: `996`,
    2515: `996`,
    2516: `996`,
    2517: `996`,
    2518: `996`,
    2519: `996`,
    252: `23`,
    2520: `996`,
    2521: `996`,
    2522: `996`,
    2523: `996`,
    2524: `996`,
    2525: `996`,
    2526: `996`,
    2527: `996`,
    2528: `996`,
    2529: `996`,
    253: `23`,
    2530: `996`,
    2531: `996`,
    2532: `996`,
    2533: `996`,
    2534: `996`,
    2535: `996`,
    2536: `996`,
    2537: `996`,
    2538: `996`,
    2539: `996`,
    254: `23`,
    2540: `996`,
    2541: `996`,
    2542: `996`,
    2543: `996`,
    2544: `996`,
    2545: `996`,
    2546: `996`,
    2547: `996`,
    2548: `996`,
    2549: `996`,
    255: `23`,
    2550: `996`,
    2551: `996`,
    2552: `996`,
    2553: `996`,
    2554: `996`,
    2555: `996`,
    2556: `996`,
    2557: `996`,
    2558: `996`,
    2559: `997`,
    256: `25`,
    2560: `997`,
    2561: `998`,
    2562: `998`,
    2563: `998`,
    2564: `1000`,
    2565: `1000`,
    2566: `1001`,
    2567: `1002`,
    2568: `1003`,
    2569: `1003`,
    257: `27`,
    2570: `1004`,
    2571: `1004`,
    2572: `1005`,
    2573: `1005`,
    2574: `1005`,
    2575: `1006`,
    2576: `1006`,
    2577: `1007`,
    2578: `1007`,
    2579: `1007`,
    258: `27`,
    2580: `1007`,
    2581: `1007`,
    2582: `1007`,
    2583: `1008`,
    2584: `1008`,
    2585: `1009`,
    2586: `1010`,
    2587: `1011`,
    2588: `1011`,
    2589: `1012`,
    259: `28`,
    2590: `1013`,
    2591: `1015`,
    2592: `1015`,
    2593: `1016`,
    2594: `1016`,
    2595: `1016`,
    2596: `1017`,
    2597: `1017`,
    2598: `1018`,
    2599: `1018`,
    26: `2`,
    260: `28`,
    2600: `1019`,
    2601: `1019`,
    2602: `1020`,
    2603: `1020`,
    2604: `1021`,
    2605: `1022`,
    2606: `1022`,
    2607: `1023`,
    2608: `1024`,
    2609: `1024`,
    261: `28`,
    2610: `1025`,
    2611: `1026`,
    2612: `1026`,
    2613: `1027`,
    2614: `1028`,
    2615: `1028`,
    2616: `1029`,
    2617: `1029`,
    2618: `1030`,
    2619: `1030`,
    262: `29`,
    2620: `1031`,
    2621: `1031`,
    2622: `1031`,
    2623: `1033`,
    2624: `1033`,
    2625: `1033`,
    2626: `1034`,
    2627: `1034`,
    2628: `1034`,
    2629: `1034`,
    263: `29`,
    2630: `1035`,
    2631: `1035`,
    2632: `1035`,
    2633: `1036`,
    2634: `1036`,
    2635: `1036`,
    2636: `1037`,
    2637: `1037`,
    2638: `1038`,
    2639: `1038`,
    264: `30`,
    2640: `1038`,
    2641: `1040`,
    2642: `1040`,
    2643: `1040`,
    2644: `1041`,
    2645: `1041`,
    2646: `1041`,
    2647: `1042`,
    2648: `1042`,
    2649: `1043`,
    265: `30`,
    2650: `1043`,
    2651: `1043`,
    2652: `1045`,
    2653: `1046`,
    2654: `1046`,
    2655: `1047`,
    2656: `1048`,
    2657: `1049`,
    2658: `1050`,
    2659: `1050`,
    266: `31`,
    2660: `1051`,
    2661: `1052`,
    2662: `1053`,
    2663: `1054`,
    2664: `1054`,
    2665: `1055`,
    2666: `1056`,
    2667: `1057`,
    2668: `1058`,
    2669: `1058`,
    267: `31`,
    2670: `1059`,
    2671: `1060`,
    2672: `1061`,
    2673: `1061`,
    2674: `1061`,
    2675: `1062`,
    2676: `1062`,
    2677: `1062`,
    2678: `1063`,
    2679: `1064`,
    268: `31`,
    2680: `1065`,
    2681: `1066`,
    2682: `1066`,
    2683: `1066`,
    2684: `1068`,
    2685: `1068`,
    2686: `1068`,
    2687: `1069`,
    2688: `1069`,
    2689: `1069`,
    269: `32`,
    2690: `1070`,
    2691: `1070`,
    2692: `1071`,
    2693: `1071`,
    2694: `1072`,
    2695: `1072`,
    2696: `1072`,
    2697: `1074`,
    2698: `1074`,
    2699: `1074`,
    27: `2`,
    270: `32`,
    2700: `1075`,
    2701: `1075`,
    2702: `1076`,
    2703: `1076`,
    2704: `1076`,
    2705: `1078`,
    2706: `1078`,
    2707: `1078`,
    2708: `1079`,
    2709: `1079`,
    271: `34`,
    2710: `1080`,
    2711: `1080`,
    2712: `1080`,
    2713: `1082`,
    2714: `1082`,
    2715: `1082`,
    2716: `1083`,
    2717: `1083`,
    2718: `1083`,
    2719: `1084`,
    272: `35`,
    2720: `1084`,
    2721: `1085`,
    2722: `1085`,
    2723: `1086`,
    2724: `1086`,
    2725: `1086`,
    2726: `1088`,
    2727: `1088`,
    2728: `1088`,
    2729: `1089`,
    273: `35`,
    2730: `1089`,
    2731: `1090`,
    2732: `1090`,
    2733: `1090`,
    2734: `1092`,
    2735: `1092`,
    2736: `1092`,
    2737: `1093`,
    2738: `1093`,
    2739: `1093`,
    274: `36`,
    2740: `1094`,
    2741: `1095`,
    2742: `1095`,
    2743: `1096`,
    2744: `1096`,
    2745: `1097`,
    2746: `1097`,
    2747: `1097`,
    2748: `1099`,
    2749: `1099`,
    275: `37`,
    2750: `1099`,
    2751: `1100`,
    2752: `1100`,
    2753: `1101`,
    2754: `1101`,
    2755: `1101`,
    2756: `1103`,
    2757: `1103`,
    2758: `1103`,
    2759: `1104`,
    276: `38`,
    2760: `1104`,
    2761: `1105`,
    2762: `1105`,
    2763: `1105`,
    2764: `1107`,
    2765: `1107`,
    2766: `1107`,
    2767: `1109`,
    2768: `1109`,
    2769: `1109`,
    277: `38`,
    2770: `1110`,
    2771: `1110`,
    2772: `1110`,
    2773: `1111`,
    2774: `1111`,
    2775: `1111`,
    2776: `1112`,
    2777: `1112`,
    2778: `1113`,
    2779: `1113`,
    278: `39`,
    2780: `1114`,
    2781: `1114`,
    2782: `1115`,
    2783: `1115`,
    2784: `1115`,
    2785: `1117`,
    2786: `1117`,
    2787: `1117`,
    2788: `1118`,
    2789: `1118`,
    279: `40`,
    2790: `1119`,
    2791: `1119`,
    2792: `1119`,
    2793: `1121`,
    2794: `1121`,
    2795: `1121`,
    2796: `1123`,
    2797: `1123`,
    2798: `1123`,
    2799: `1124`,
    28: `2`,
    280: `40`,
    2800: `1124`,
    2801: `1125`,
    2802: `1125`,
    2803: `1125`,
    2804: `1127`,
    2805: `1127`,
    2806: `1127`,
    2807: `1128`,
    2808: `1128`,
    2809: `1128`,
    281: `40`,
    2810: `1129`,
    2811: `1129`,
    2812: `1130`,
    2813: `1130`,
    2814: `1131`,
    2815: `1131`,
    2816: `1131`,
    2817: `1133`,
    2818: `1133`,
    2819: `1133`,
    282: `41`,
    2820: `1134`,
    2821: `1134`,
    2822: `1135`,
    2823: `1135`,
    2824: `1135`,
    2825: `1137`,
    2826: `1137`,
    2827: `1137`,
    2828: `1139`,
    2829: `1139`,
    283: `42`,
    2830: `1139`,
    2831: `1141`,
    2832: `1141`,
    2833: `1142`,
    2834: `1142`,
    2835: `1142`,
    2836: `1143`,
    2837: `1143`,
    2838: `1144`,
    2839: `1144`,
    284: `42`,
    2840: `1144`,
    2841: `1146`,
    2842: `1146`,
    2843: `1146`,
    2844: `1148`,
    2845: `1148`,
    2846: `1149`,
    2847: `1149`,
    2848: `1150`,
    2849: `1150`,
    285: `43`,
    2850: `1150`,
    2851: `1151`,
    2852: `1152`,
    2853: `1152`,
    2854: `1153`,
    2855: `1153`,
    2856: `1153`,
    2857: `1155`,
    2858: `1155`,
    2859: `1155`,
    286: `44`,
    2860: `1157`,
    2861: `1158`,
    2862: `1159`,
    2863: `1160`,
    2864: `1161`,
    2865: `1163`,
    2866: `1164`,
    2867: `1164`,
    2868: `1165`,
    2869: `1165`,
    287: `45`,
    2870: `1166`,
    2871: `1166`,
    2872: `1167`,
    2873: `1167`,
    2874: `1168`,
    2875: `1168`,
    2876: `1169`,
    2877: `1170`,
    2878: `1172`,
    2879: `1172`,
    288: `45`,
    2880: `1173`,
    2881: `1173`,
    2882: `1173`,
    2883: `1174`,
    2884: `1174`,
    2885: `1175`,
    2886: `1175`,
    2887: `1175`,
    2888: `1177`,
    2889: `1177`,
    289: `46`,
    2890: `1178`,
    2891: `1178`,
    2892: `1178`,
    2893: `1179`,
    2894: `1179`,
    2895: `1180`,
    2896: `1180`,
    2897: `1180`,
    2898: `1182`,
    2899: `1182`,
    29: `2`,
    290: `47`,
    2900: `1183`,
    2901: `1183`,
    2902: `1183`,
    2903: `1184`,
    2904: `1184`,
    2905: `1185`,
    2906: `1185`,
    2907: `1185`,
    2908: `1187`,
    2909: `1187`,
    291: `52`,
    2910: `1187`,
    2911: `1189`,
    2912: `1189`,
    2913: `1189`,
    2914: `1191`,
    2915: `1191`,
    2916: `1191`,
    2917: `1192`,
    2918: `1192`,
    2919: `1192`,
    292: `52`,
    2920: `1193`,
    2921: `1193`,
    2922: `1194`,
    2923: `1194`,
    2924: `1195`,
    2925: `1195`,
    2926: `1195`,
    2927: `1197`,
    2928: `1197`,
    2929: `1197`,
    293: `53`,
    2930: `1199`,
    2931: `1199`,
    2932: `1199`,
    2933: `1200`,
    2934: `1200`,
    2935: `1201`,
    2936: `1201`,
    2937: `1201`,
    2938: `1203`,
    2939: `1203`,
    294: `54`,
    2940: `1203`,
    2941: `1205`,
    2942: `1206`,
    2943: `1208`,
    2944: `1209`,
    2945: `1210`,
    2946: `1211`,
    2947: `1211`,
    2948: `1212`,
    2949: `1212`,
    295: `55`,
    2950: `1213`,
    2951: `1213`,
    2952: `1213`,
    2953: `1214`,
    2954: `1216`,
    2955: `1217`,
    2956: `1218`,
    2957: `1218`,
    2958: `1218`,
    2959: `1219`,
    296: `56`,
    2960: `1220`,
    2961: `1220`,
    2962: `1223`,
    2963: `1223`,
    2964: `1224`,
    2965: `1224`,
    2966: `1225`,
    2967: `1225`,
    2968: `1226`,
    2969: `1227`,
    297: `57`,
    2970: `1228`,
    2971: `1228`,
    2972: `1229`,
    2973: `1230`,
    2974: `1230`,
    2975: `1231`,
    2976: `1231`,
    2977: `1232`,
    2978: `1232`,
    2979: `1233`,
    298: `58`,
    2980: `1234`,
    2981: `1235`,
    2982: `1235`,
    2983: `1236`,
    2984: `1236`,
    2985: `1237`,
    2986: `1238`,
    2987: `1239`,
    2988: `1239`,
    2989: `1240`,
    299: `58`,
    2990: `1241`,
    2991: `1242`,
    2992: `1244`,
    2993: `1244`,
    2994: `1245`,
    2995: `1245`,
    2996: `1246`,
    2997: `1247`,
    2998: `1249`,
    2999: `1249`,
    3: `2`,
    30: `2`,
    300: `59`,
    3000: `1249`,
    3001: `1251`,
    3002: `1252`,
    3003: `1252`,
    3004: `1253`,
    3005: `1253`,
    3006: `1254`,
    3007: `1254`,
    3008: `1254`,
    3009: `1255`,
    301: `59`,
    3010: `1255`,
    3011: `1255`,
    3012: `1257`,
    3013: `1258`,
    3014: `1258`,
    3015: `1258`,
    3016: `1259`,
    3017: `1259`,
    3018: `1260`,
    3019: `1261`,
    302: `59`,
    3020: `1261`,
    3021: `1261`,
    3022: `1262`,
    3023: `1262`,
    3024: `1263`,
    3025: `1263`,
    3026: `1263`,
    3027: `1264`,
    3028: `1265`,
    3029: `1265`,
    303: `60`,
    3030: `1266`,
    3031: `1268`,
    3032: `1269`,
    3033: `1269`,
    3034: `1269`,
    3035: `1270`,
    3036: `1271`,
    3037: `1272`,
    3038: `1273`,
    3039: `1274`,
    304: `61`,
    3040: `1276`,
    3041: `1277`,
    3042: `1278`,
    3043: `1279`,
    3044: `1279`,
    3045: `1279`,
    3046: `1280`,
    3047: `1280`,
    3048: `1281`,
    3049: `1282`,
    305: `61`,
    3050: `1283`,
    3051: `1285`,
    3052: `1286`,
    3053: `1287`,
    3054: `1288`,
    3055: `1288`,
    3056: `1288`,
    3057: `1289`,
    3058: `1289`,
    3059: `1290`,
    306: `62`,
    3060: `1290`,
    3061: `1290`,
    3062: `1291`,
    3063: `1291`,
    3064: `1291`,
    3065: `1293`,
    3066: `1294`,
    3067: `1295`,
    3068: `1295`,
    3069: `1296`,
    307: `62`,
    3070: `1297`,
    3071: `1298`,
    3072: `1299`,
    3073: `1300`,
    3074: `1301`,
    3075: `1303`,
    3076: `1304`,
    3077: `1305`,
    3078: `1305`,
    3079: `1306`,
    308: `62`,
    3080: `1308`,
    3081: `1308`,
    3082: `1309`,
    3083: `1310`,
    3084: `1310`,
    3085: `1311`,
    3086: `1313`,
    3087: `1313`,
    3088: `1314`,
    3089: `1314`,
    309: `63`,
    3090: `1315`,
    3091: `1317`,
    3092: `1318`,
    3093: `1319`,
    3094: `1320`,
    3095: `1321`,
    3096: `1321`,
    3097: `1322`,
    3098: `1323`,
    3099: `1324`,
    31: `2`,
    310: `63`,
    3100: `1325`,
    3101: `1327`,
    3102: `1327`,
    3103: `1328`,
    3104: `1328`,
    3105: `1329`,
    3106: `1330`,
    3107: `1331`,
    3108: `1331`,
    3109: `1331`,
    311: `64`,
    3110: `1332`,
    3111: `1332`,
    3112: `1332`,
    3113: `1334`,
    3114: `1335`,
    3115: `1335`,
    3116: `1335`,
    3117: `1337`,
    3118: `1337`,
    3119: `1338`,
    312: `65`,
    3120: `1339`,
    3121: `1339`,
    3122: `1340`,
    3123: `1342`,
    3124: `1343`,
    3125: `1343`,
    3126: `1344`,
    313: `70`,
    314: `70`,
    315: `71`,
    316: `72`,
    317: `72`,
    318: `73`,
    319: `74`,
    32: `2`,
    320: `74`,
    321: `75`,
    322: `75`,
    323: `76`,
    324: `77`,
    325: `77`,
    326: `78`,
    327: `78`,
    328: `79`,
    329: `80`,
    33: `2`,
    330: `81`,
    331: `82`,
    332: `82`,
    333: `82`,
    334: `83`,
    335: `83`,
    336: `83`,
    337: `83`,
    338: `83`,
    339: `83`,
    34: `2`,
    340: `84`,
    341: `84`,
    342: `85`,
    343: `86`,
    344: `86`,
    345: `87`,
    346: `88`,
    347: `88`,
    348: `89`,
    349: `90`,
    35: `2`,
    350: `92`,
    351: `93`,
    352: `93`,
    353: `94`,
    354: `94`,
    355: `94`,
    356: `94`,
    357: `94`,
    358: `94`,
    359: `94`,
    36: `2`,
    360: `94`,
    361: `94`,
    362: `94`,
    363: `95`,
    364: `95`,
    365: `96`,
    366: `97`,
    367: `98`,
    368: `98`,
    369: `99`,
    37: `2`,
    370: `99`,
    371: `100`,
    372: `100`,
    373: `101`,
    374: `101`,
    375: `104`,
    376: `104`,
    377: `105`,
    378: `105`,
    379: `106`,
    38: `2`,
    380: `107`,
    381: `107`,
    382: `108`,
    383: `109`,
    384: `110`,
    385: `111`,
    386: `111`,
    387: `113`,
    388: `113`,
    389: `114`,
    39: `2`,
    390: `114`,
    391: `115`,
    392: `116`,
    393: `116`,
    394: `117`,
    395: `117`,
    396: `117`,
    397: `118`,
    398: `119`,
    399: `120`,
    4: `2`,
    40: `2`,
    400: `121`,
    401: `121`,
    402: `121`,
    403: `122`,
    404: `123`,
    405: `124`,
    406: `124`,
    407: `125`,
    408: `126`,
    409: `126`,
    41: `2`,
    410: `127`,
    411: `128`,
    412: `129`,
    413: `130`,
    414: `130`,
    415: `131`,
    416: `132`,
    417: `133`,
    418: `135`,
    419: `135`,
    42: `2`,
    420: `135`,
    421: `137`,
    422: `137`,
    423: `138`,
    424: `138`,
    425: `138`,
    426: `140`,
    427: `140`,
    428: `140`,
    429: `140`,
    43: `2`,
    430: `140`,
    431: `140`,
    432: `141`,
    433: `141`,
    434: `142`,
    435: `143`,
    436: `145`,
    437: `145`,
    438: `146`,
    439: `148`,
    44: `2`,
    440: `148`,
    441: `149`,
    442: `149`,
    443: `149`,
    444: `150`,
    445: `150`,
    446: `151`,
    447: `151`,
    448: `152`,
    449: `152`,
    45: `2`,
    450: `152`,
    451: `153`,
    452: `154`,
    453: `154`,
    454: `156`,
    455: `156`,
    456: `157`,
    457: `158`,
    458: `158`,
    459: `159`,
    46: `2`,
    460: `159`,
    461: `160`,
    462: `161`,
    463: `162`,
    464: `163`,
    465: `163`,
    466: `164`,
    467: `165`,
    468: `165`,
    469: `165`,
    47: `2`,
    470: `166`,
    471: `166`,
    472: `166`,
    473: `167`,
    474: `167`,
    475: `167`,
    476: `167`,
    477: `167`,
    478: `167`,
    479: `168`,
    48: `2`,
    480: `168`,
    481: `169`,
    482: `170`,
    483: `170`,
    484: `171`,
    485: `172`,
    486: `172`,
    487: `173`,
    488: `174`,
    489: `174`,
    49: `2`,
    490: `174`,
    491: `175`,
    492: `176`,
    493: `178`,
    494: `179`,
    495: `179`,
    496: `180`,
    497: `180`,
    498: `180`,
    499: `180`,
    5: `2`,
    50: `2`,
    500: `180`,
    501: `180`,
    502: `180`,
    503: `180`,
    504: `180`,
    505: `180`,
    506: `181`,
    507: `181`,
    508: `182`,
    509: `183`,
    51: `2`,
    510: `184`,
    511: `184`,
    512: `185`,
    513: `185`,
    514: `186`,
    515: `186`,
    516: `187`,
    517: `187`,
    518: `188`,
    519: `188`,
    52: `2`,
    520: `188`,
    521: `190`,
    522: `190`,
    523: `191`,
    524: `191`,
    525: `191`,
    526: `192`,
    527: `192`,
    528: `193`,
    529: `193`,
    53: `2`,
    530: `194`,
    531: `194`,
    532: `194`,
    533: `195`,
    534: `195`,
    535: `196`,
    536: `196`,
    537: `197`,
    538: `197`,
    539: `197`,
    54: `2`,
    540: `198`,
    541: `198`,
    542: `200`,
    543: `201`,
    544: `201`,
    545: `202`,
    546: `203`,
    547: `204`,
    548: `204`,
    549: `205`,
    55: `2`,
    550: `206`,
    551: `206`,
    552: `206`,
    553: `207`,
    554: `208`,
    555: `208`,
    556: `209`,
    557: `210`,
    558: `211`,
    559: `211`,
    56: `2`,
    560: `212`,
    561: `213`,
    562: `218`,
    563: `218`,
    564: `219`,
    565: `220`,
    566: `221`,
    567: `222`,
    568: `223`,
    569: `224`,
    57: `2`,
    570: `224`,
    571: `225`,
    572: `225`,
    573: `225`,
    574: `226`,
    575: `227`,
    576: `227`,
    577: `228`,
    578: `228`,
    579: `228`,
    58: `2`,
    580: `229`,
    581: `229`,
    582: `230`,
    583: `230`,
    584: `231`,
    585: `231`,
    586: `232`,
    587: `233`,
    588: `238`,
    589: `240`,
    59: `2`,
    590: `241`,
    591: `242`,
    592: `243`,
    593: `243`,
    594: `244`,
    595: `244`,
    596: `245`,
    597: `246`,
    598: `247`,
    599: `248`,
    6: `2`,
    60: `2`,
    600: `248`,
    601: `248`,
    602: `249`,
    603: `249`,
    604: `249`,
    605: `250`,
    606: `251`,
    607: `251`,
    608: `252`,
    609: `252`,
    61: `2`,
    610: `253`,
    611: `253`,
    612: `253`,
    613: `254`,
    614: `255`,
    615: `255`,
    616: `256`,
    617: `256`,
    618: `257`,
    619: `258`,
    62: `2`,
    620: `258`,
    621: `259`,
    622: `259`,
    623: `260`,
    624: `260`,
    625: `261`,
    626: `262`,
    627: `262`,
    628: `263`,
    629: `263`,
    63: `2`,
    630: `264`,
    631: `265`,
    632: `266`,
    633: `271`,
    634: `271`,
    635: `272`,
    636: `272`,
    637: `273`,
    638: `274`,
    639: `279`,
    64: `2`,
    640: `279`,
    641: `280`,
    642: `280`,
    643: `281`,
    644: `282`,
    645: `287`,
    646: `287`,
    647: `288`,
    648: `288`,
    649: `289`,
    65: `2`,
    650: `290`,
    651: `295`,
    652: `295`,
    653: `296`,
    654: `296`,
    655: `297`,
    656: `298`,
    657: `303`,
    658: `303`,
    659: `304`,
    66: `2`,
    660: `304`,
    661: `305`,
    662: `306`,
    663: `306`,
    664: `307`,
    665: `308`,
    666: `308`,
    667: `309`,
    668: `310`,
    669: `315`,
    67: `2`,
    670: `315`,
    671: `316`,
    672: `317`,
    673: `317`,
    674: `318`,
    675: `319`,
    676: `319`,
    677: `320`,
    678: `320`,
    679: `321`,
    68: `2`,
    680: `322`,
    681: `322`,
    682: `323`,
    683: `323`,
    684: `324`,
    685: `325`,
    686: `326`,
    687: `327`,
    688: `327`,
    689: `327`,
    69: `2`,
    690: `328`,
    691: `328`,
    692: `329`,
    693: `329`,
    694: `330`,
    695: `331`,
    696: `331`,
    697: `332`,
    698: `333`,
    699: `333`,
    7: `2`,
    70: `2`,
    700: `334`,
    701: `335`,
    702: `337`,
    703: `338`,
    704: `338`,
    705: `339`,
    706: `339`,
    707: `339`,
    708: `339`,
    709: `339`,
    71: `2`,
    710: `339`,
    711: `339`,
    712: `339`,
    713: `339`,
    714: `339`,
    715: `340`,
    716: `340`,
    717: `341`,
    718: `342`,
    719: `343`,
    72: `2`,
    720: `343`,
    721: `344`,
    722: `344`,
    723: `345`,
    724: `345`,
    725: `346`,
    726: `346`,
    727: `347`,
    728: `347`,
    729: `347`,
    73: `2`,
    730: `349`,
    731: `349`,
    732: `350`,
    733: `350`,
    734: `350`,
    735: `351`,
    736: `351`,
    737: `352`,
    738: `352`,
    739: `353`,
    74: `4`,
    740: `354`,
    741: `355`,
    742: `356`,
    743: `357`,
    744: `359`,
    745: `360`,
    746: `360`,
    747: `361`,
    748: `362`,
    749: `363`,
    75: `4`,
    750: `363`,
    751: `364`,
    752: `365`,
    753: `365`,
    754: `365`,
    755: `366`,
    756: `366`,
    757: `366`,
    758: `367`,
    759: `367`,
    76: `5`,
    760: `367`,
    761: `368`,
    762: `368`,
    763: `369`,
    764: `370`,
    765: `375`,
    766: `375`,
    767: `376`,
    768: `377`,
    769: `377`,
    77: `5`,
    770: `378`,
    771: `379`,
    772: `379`,
    773: `379`,
    774: `380`,
    775: `380`,
    776: `381`,
    777: `381`,
    778: `382`,
    779: `383`,
    78: `5`,
    780: `383`,
    781: `384`,
    782: `385`,
    783: `385`,
    784: `386`,
    785: `387`,
    786: `389`,
    787: `390`,
    788: `390`,
    789: `391`,
    79: `6`,
    790: `391`,
    791: `391`,
    792: `391`,
    793: `391`,
    794: `391`,
    795: `391`,
    796: `391`,
    797: `391`,
    798: `391`,
    799: `392`,
    8: `2`,
    80: `7`,
    800: `392`,
    801: `393`,
    802: `394`,
    803: `395`,
    804: `395`,
    805: `396`,
    806: `396`,
    807: `397`,
    808: `397`,
    809: `398`,
    81: `8`,
    810: `398`,
    811: `398`,
    812: `399`,
    813: `399`,
    814: `400`,
    815: `400`,
    816: `400`,
    817: `401`,
    818: `402`,
    819: `402`,
    82: `9`,
    820: `403`,
    821: `403`,
    822: `403`,
    823: `404`,
    824: `404`,
    825: `405`,
    826: `406`,
    827: `406`,
    828: `406`,
    829: `407`,
    83: `10`,
    830: `408`,
    831: `408`,
    832: `409`,
    833: `409`,
    834: `409`,
    835: `410`,
    836: `411`,
    837: `411`,
    838: `412`,
    839: `412`,
    84: `11`,
    840: `413`,
    841: `413`,
    842: `414`,
    843: `414`,
    844: `414`,
    845: `416`,
    846: `416`,
    847: `417`,
    848: `417`,
    849: `418`,
    85: `11`,
    850: `418`,
    851: `418`,
    852: `419`,
    853: `420`,
    854: `425`,
    855: `426`,
    856: `426`,
    857: `427`,
    858: `427`,
    859: `427`,
    86: `12`,
    860: `427`,
    861: `427`,
    862: `427`,
    863: `427`,
    864: `427`,
    865: `427`,
    866: `427`,
    867: `428`,
    868: `428`,
    869: `429`,
    87: `13`,
    870: `430`,
    871: `431`,
    872: `431`,
    873: `432`,
    874: `432`,
    875: `433`,
    876: `433`,
    877: `434`,
    878: `434`,
    879: `435`,
    88: `14`,
    880: `435`,
    881: `435`,
    882: `437`,
    883: `437`,
    884: `438`,
    885: `438`,
    886: `439`,
    887: `439`,
    888: `439`,
    889: `440`,
    89: `14`,
    890: `441`,
    891: `447`,
    892: `447`,
    893: `448`,
    894: `449`,
    895: `449`,
    896: `450`,
    897: `450`,
    898: `450`,
    899: `451`,
    9: `2`,
    90: `15`,
    900: `452`,
    901: `452`,
    902: `452`,
    903: `453`,
    904: `454`,
    905: `454`,
    906: `455`,
    907: `455`,
    908: `455`,
    909: `455`,
    91: `16`,
    910: `455`,
    911: `455`,
    912: `455`,
    913: `455`,
    914: `455`,
    915: `455`,
    916: `456`,
    917: `456`,
    918: `457`,
    919: `458`,
    92: `17`,
    920: `459`,
    921: `459`,
    922: `460`,
    923: `460`,
    924: `461`,
    925: `461`,
    926: `462`,
    927: `462`,
    928: `463`,
    929: `463`,
    93: `18`,
    930: `463`,
    931: `465`,
    932: `465`,
    933: `466`,
    934: `466`,
    935: `467`,
    936: `467`,
    937: `467`,
    938: `468`,
    939: `469`,
    94: `19`,
    940: `475`,
    941: `475`,
    942: `476`,
    943: `477`,
    944: `477`,
    945: `478`,
    946: `478`,
    947: `478`,
    948: `479`,
    949: `479`,
    95: `21`,
    950: `480`,
    951: `480`,
    952: `480`,
    953: `481`,
    954: `482`,
    955: `483`,
    956: `484`,
    957: `484`,
    958: `484`,
    959: `485`,
    96: `21`,
    960: `486`,
    961: `486`,
    962: `487`,
    963: `487`,
    964: `487`,
    965: `487`,
    966: `487`,
    967: `487`,
    968: `487`,
    969: `487`,
    97: `21`,
    970: `487`,
    971: `487`,
    972: `488`,
    973: `488`,
    974: `489`,
    975: `490`,
    976: `491`,
    977: `491`,
    978: `492`,
    979: `492`,
    98: `21`,
    980: `493`,
    981: `493`,
    982: `494`,
    983: `494`,
    984: `495`,
    985: `495`,
    986: `495`,
    987: `497`,
    988: `497`,
    989: `498`,
    99: `21`,
    990: `498`,
    991: `499`,
    992: `499`,
    993: `499`,
    994: `500`,
    995: `501`,
    996: `506`,
    997: `507`,
    998: `507`,
    999: `508`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './ARC72_Dynamic.rsh:386:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './ARC72_Dynamic.rsh:169:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "arc72_approve": arc72_approve,
  "arc72_setApprovalForAll": arc72_setApprovalForAll,
  "arc72_transferFrom": arc72_transferFrom,
  "burn": burn,
  "close": close,
  "deleteNftDataBox": deleteNftDataBox,
  "deleteOperatorDataBox": deleteOperatorDataBox,
  "grant": grant,
  "mintTo": mintTo,
  "touch": touch
  };
export const _APIs = {
  arc72_approve: arc72_approve,
  arc72_setApprovalForAll: arc72_setApprovalForAll,
  arc72_transferFrom: arc72_transferFrom,
  burn: burn,
  close: close,
  deleteNftDataBox: deleteNftDataBox,
  deleteOperatorDataBox: deleteOperatorDataBox,
  grant: grant,
  mintTo: mintTo,
  touch: touch
  };
