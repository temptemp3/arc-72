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
  const ctc13 = stdlib.T_Data({
    None: ctc10,
    Some: ctc1
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc12;
  
  const map2_ctc = ctc13;
  
  
  const _arc72_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2696 ) => {
          const v2696 = stdlib.protect(ctc0, _v2696, null);
        
        const v2697 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2696, ctc1), null);
        const v2698 = stdlib.fromSome(v2697, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2698;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_getApproved = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2684 ) => {
          const v2684 = stdlib.protect(ctc1, _v2684, null);
        
        const v2685 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2684, ctc5), null);
        const v2686 = '                                                                                                                                                                                                                                                                ';
        const v2687 = {
          approved: v2655,
          owner: v2655,
          tokenURI: v2686
          };
        const v2688 = stdlib.fromSome(v2685, v2687);
        const v2689 = v2688.approved;
        
        return v2689;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_isApprovedForAll = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2690, _v2691 ) => {
          const v2690 = stdlib.protect(ctc0, _v2690, null);
          const v2691 = stdlib.protect(ctc0, _v2691, null);
        
        const v2692 = [v2690, v2691];
        const v2693 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v2692, ctc6), null);
        const v2694 = stdlib.fromSome(v2693, false);
        
        return v2694;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_ownerOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2668 ) => {
          const v2668 = stdlib.protect(ctc1, _v2668, null);
        
        const v2669 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2668, ctc5), null);
        const v2670 = '                                                                                                                                                                                                                                                                ';
        const v2671 = {
          approved: v2655,
          owner: v2655,
          tokenURI: v2670
          };
        const v2672 = stdlib.fromSome(v2669, v2671);
        const v2673 = v2672.owner;
        
        return v2673;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenByIndex = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2699 ) => {
          const v2699 = stdlib.protect(ctc1, _v2699, null);
        
        
        return v2699;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenURI = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2674 ) => {
          const v2674 = stdlib.protect(ctc1, _v2674, null);
        
        const v2675 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2674, ctc5), null);
        const v2676 = {
          None: 0,
          Some: 1
          }[v2675[0]];
        const v2677 = stdlib.eq(v2676, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2677, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:184:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:197:27:application call to "tokenURI" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:197:27:application)'],
          msg: 'nft must exist',
          who: 'Module'
          });
        const v2680 = '                                                                                                                                                                                                                                                                ';
        const v2681 = {
          approved: v2655,
          owner: v2655,
          tokenURI: v2680
          };
        const v2682 = stdlib.fromSome(v2675, v2681);
        const v2683 = v2682.tokenURI;
        
        return v2683;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async () => {
        
        const v2695 = v2661.totalSupply;
        
        return v2695;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async () => {
        
        const v2724 = v2661.manager;
        
        return v2724;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async () => {
        
        const v2725 = v2661.manager;
        const v2726 = v2661.nMinted;
        const v2727 = v2661.totalSupply;
        const v2728 = {
          manager: v2725,
          nMinted: v2726,
          totalSupply: v2727
          };
        
        return v2728;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2655, v2661, v2665] = svs;
      return (await ((async (_v2700 ) => {
          const v2700 = stdlib.protect(ctc9, _v2700, null);
        
        const v2701 = stdlib.bytesFromHex("0x53f02a40");
        const v2703 = stdlib.digest([ctc9], [v2701]);
        const v2704 = stdlib.digest([ctc9], [v2700]);
        const v2705 = stdlib.digestEq(v2703, v2704);
        const v2706 = stdlib.bytesFromHex("0xc3c1f000");
        const v2708 = stdlib.digest([ctc9], [v2706]);
        const v2710 = stdlib.digestEq(v2708, v2704);
        const v2711 = stdlib.bytesFromHex("0xb9c6f696");
        const v2713 = stdlib.digest([ctc9], [v2711]);
        const v2715 = stdlib.digestEq(v2713, v2704);
        const v2716 = stdlib.bytesFromHex("0xa57d4679");
        const v2718 = stdlib.digest([ctc9], [v2716]);
        const v2720 = stdlib.digestEq(v2718, v2704);
        const v2721 = v2715 ? true : v2720;
        const v2722 = v2710 ? true : v2721;
        const v2723 = v2705 ? true : v2722;
        
        return v2723;}))(...args));
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
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc6, ctc8]);
  return {
    mapDataTy: ctc9
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
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc18 = stdlib.T_Data({
    arc72_approve0_328: ctc10,
    arc72_setApprovalForAll0_328: ctc11,
    arc72_transferFrom0_328: ctc12,
    burn0_328: ctc13,
    close0_328: ctc14,
    deleteHolderDataBox0_328: ctc15,
    deleteNftDataBox0_328: ctc13,
    deleteOperatorDataBox0_328: ctc16,
    grant0_328: ctc15,
    mintTo0_328: ctc17,
    touch0_328: ctc14
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  
  const v2647 = stdlib.protect(ctc9, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2647],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:109:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:109:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2652], secs: v2654, time: v2653, didSend: v28, from: v2651 } = txn1;
      
      ;
      const v2655 = v2652.zeroAddress;
      const v2657 = await ctc.getContractInfo();
      
      const v2660 = {
        manager: v2651,
        nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        zeroAddress: v2655
        };
      const v2661 = v2660;
      const v2662 = v2653;
      const v2665 = stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:105:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
    tys: [ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v2652], secs: v2654, time: v2653, didSend: v28, from: v2651 } = txn1;
  ;
  const v2655 = v2652.zeroAddress;
  const v2657 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2657), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:165:19:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:165:19:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:165:19:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:165:19:application call to "liftedInteract" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:165:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2660 = {
    manager: v2651,
    nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    zeroAddress: v2655
    };
  let v2661 = v2660;
  let v2662 = v2653;
  let v2665 = stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:105:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn3;
    switch (v3018[0]) {
      case 'arc72_approve0_328': {
        const v3021 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v3037 = v3021[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:spread', stdlib.UInt_max, '0')];
        const v3038 = v3021[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:spread', stdlib.UInt_max, '1')];
        const v3039 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3038, ctc3), null);
        const v3040 = {
          None: 0,
          Some: 1
          }[v3039[0]];
        const v3041 = stdlib.eq(v3040, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3041, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:297:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:300:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:300:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v3044 = '                                                                                                                                                                                                                                                                ';
        const v3045 = {
          approved: v2655,
          owner: v2655,
          tokenURI: v3044
          };
        const v3046 = stdlib.fromSome(v3039, v3045);
        const v3047 = v3046.owner;
        const v3048 = stdlib.addressEq(v3047, v3017);
        stdlib.assert(v3048, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:298:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:300:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:300:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        const v3060 = v3046.tokenURI;
        const v3061 = {
          approved: v3037,
          owner: v3017,
          tokenURI: v3060
          };
        await stdlib.mapSet(map0, ctc7, v3038, ctc3, v3061);
        null;
        const v3062 = null;
        await txn3.getOutput('arc72_approve', 'v3062', ctc0, v3062);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_setApprovalForAll0_328': {
        const v3363 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v3414 = v3363[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:spread', stdlib.UInt_max, '0')];
        const v3415 = v3363[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:spread', stdlib.UInt_max, '1')];
        const v3418 = [v3017, v3414];
        await stdlib.mapSet(map1, ctc16, v3418, ctc5, v3415);
        null;
        const v3419 = null;
        await txn3.getOutput('arc72_setApprovalForAll', 'v3419', ctc0, v3419);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_transferFrom0_328': {
        const v3705 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v3771 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '0')];
        const v3772 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '1')];
        const v3773 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '2')];
        const v3774 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3773, ctc3), null);
        const v3775 = {
          None: 0,
          Some: 1
          }[v3774[0]];
        const v3776 = stdlib.eq(v3775, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3776, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v3779 = '                                                                                                                                                                                                                                                                ';
        const v3780 = {
          approved: v2655,
          owner: v2655,
          tokenURI: v3779
          };
        const v3781 = stdlib.fromSome(v3774, v3780);
        const v3782 = v3781.owner;
        const v3783 = stdlib.addressEq(v3771, v3782);
        const v3784 = v3783 ? false : true;
        stdlib.assert(v3784, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'ARC72: must be owner or operator',
          who: 'Deployer'
          });
        const v3791 = stdlib.addressEq(v3017, v3782);
        const v3797 = [v3782, v3017];
        const v3798 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v3797, ctc5), null);
        const v3799 = stdlib.fromSome(v3798, false);
        const v3804 = v3781.approved;
        const v3805 = stdlib.addressEq(v3804, v3017);
        const v3806 = v3799 ? true : v3805;
        const v3807 = v3791 ? true : v3806;
        stdlib.assert(v3807, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'ARC72: must be owner or operator to transfer',
          who: 'Deployer'
          });
        const v3809 = stdlib.addressEq(v3771, v3772);
        const v3810 = v3809 ? false : true;
        stdlib.assert(v3810, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'must transfer to different address',
          who: 'Deployer'
          });
        const v3813 = stdlib.addressEq(v3771, v2655);
        stdlib.assert(v3813, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'must not transfer from zero address',
          who: 'Deployer'
          });
        const v3816 = stdlib.addressEq(v3772, v2655);
        stdlib.assert(v3816, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'must not be burned',
          who: 'Deployer'
          });
        const v3823 = stdlib.addressEq(v3772, v3804);
        stdlib.assert(v3823, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'must not be sent to approved address',
          who: 'Deployer'
          });
        const v3831 = v3781.tokenURI;
        const v3832 = stdlib.addressEq(v3782, v3017);
        const v3834 = v3832 ? true : v3805;
        const v3838 = v3834 ? true : v3799;
        stdlib.assert(v3838, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'must be nft owner or approved operator',
          who: 'Deployer'
          });
        const v3853 = {
          approved: v2655,
          owner: v3772,
          tokenURI: v3831
          };
        await stdlib.mapSet(map0, ctc7, v3773, ctc3, v3853);
        const v3854 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3771, ctc7), null);
        const v3855 = stdlib.fromSome(v3854, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3856 = stdlib.safeSub256(v3855, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:284:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v3771, ctc7, v3856);
        const v3857 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3772, ctc7), null);
        const v3858 = stdlib.fromSome(v3857, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3859 = stdlib.safeAdd256(v3858, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:285:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v3772, ctc7, v3859);
        null;
        const v3860 = null;
        await txn3.getOutput('arc72_transferFrom', 'v3860', ctc0, v3860);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'burn0_328': {
        const v4047 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v4213 = v4047[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:328:10:spread', stdlib.UInt_max, '0')];
        const v4214 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4213, ctc3), null);
        const v4215 = '                                                                                                                                                                                                                                                                ';
        const v4216 = {
          approved: v2655,
          owner: v2655,
          tokenURI: v4215
          };
        const v4217 = stdlib.fromSome(v4214, v4216);
        const v4218 = v4217.owner;
        const v4219 = stdlib.addressEq(v4218, v3017);
        stdlib.assert(v4219, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:329:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:335:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:335:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc7, v4213, ctc3, undefined /* Nothing */);
        const v4237 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3017, ctc7), null);
        const v4238 = stdlib.fromSome(v4237, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4239 = stdlib.safeSub256(v4238, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:337:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v3017, ctc7, v4239);
        null;
        const v4241 = null;
        await txn3.getOutput('burn', 'v4241', ctc0, v4241);
        const v4248 = v2661.manager;
        const v4249 = v2661.nMinted;
        const v4250 = v2661.totalSupply;
        const v4251 = v2661.zeroAddress;
        const v4253 = stdlib.safeSub256(v4250, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:344:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v4254 = {
          manager: v4248,
          nMinted: v4249,
          totalSupply: v4253,
          zeroAddress: v4251
          };
        const cv2661 = v4254;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'close0_328': {
        const v4389 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v4600 = v2661.manager;
        const v4601 = stdlib.addressEq(v3017, v4600);
        stdlib.assert(v4601, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:404:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:404:13:function exp)'],
          msg: 'must be manager to close',
          who: 'Deployer'
          });
        const v4603 = null;
        await txn3.getOutput('close', 'v4603', ctc0, v4603);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteHolderDataBox0_328': {
        const v4731 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v4953 = v4731[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:388:10:spread', stdlib.UInt_max, '0')];
        const v4954 = v2661.manager;
        const v4955 = stdlib.addressEq(v3017, v4954);
        stdlib.assert(v4955, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:389:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:392:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:392:13:function exp)'],
          msg: 'must be manager to delete holder data box',
          who: 'Deployer'
          });
        const v4957 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v4953, ctc7), null);
        const v4958 = stdlib.fromSome(v4957, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4959 = stdlib.eq256(v4958, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:390:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v4959, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:392:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:392:13:function exp)'],
          msg: 'must have zero balance',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc1, v4953, ctc7, undefined /* Nothing */);
        const v4962 = null;
        await txn3.getOutput('deleteHolderDataBox', 'v4962', ctc0, v4962);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteNftDataBox0_328': {
        const v5073 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v5313 = v5073[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:364:10:spread', stdlib.UInt_max, '0')];
        const v5314 = v2661.manager;
        const v5315 = stdlib.addressEq(v3017, v5314);
        stdlib.assert(v5315, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:365:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:367:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:367:13:function exp)'],
          msg: 'must be manager to delete nft data box',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc7, v5313, ctc3, undefined /* Nothing */);
        const v5318 = null;
        await txn3.getOutput('deleteNftDataBox', 'v5318', ctc0, v5318);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteOperatorDataBox0_328': {
        const v5415 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v5669 = v5415[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:spread', stdlib.UInt_max, '0')];
        const v5670 = v5415[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:spread', stdlib.UInt_max, '1')];
        const v5671 = v2661.manager;
        const v5672 = stdlib.addressEq(v3017, v5671);
        stdlib.assert(v5672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:377:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:379:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:379:13:function exp)'],
          msg: 'must be manager to delete operator data box',
          who: 'Deployer'
          });
        const v5676 = [v5669, v5670];
        await stdlib.mapSet(map1, ctc16, v5676, ctc5, undefined /* Nothing */);
        const v5677 = null;
        await txn3.getOutput('deleteOperatorDataBox', 'v5677', ctc0, v5677);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'grant0_328': {
        const v5757 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v6029 = v5757[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:212:10:spread', stdlib.UInt_max, '0')];
        const v6030 = v2661.manager;
        const v6031 = stdlib.addressEq(v3017, v6030);
        stdlib.assert(v6031, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:215:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:215:13:function exp)'],
          msg: 'must be manager to grant',
          who: 'Deployer'
          });
        const v6034 = null;
        await txn3.getOutput('grant', 'v6034', ctc0, v6034);
        const v6042 = v2661.nMinted;
        const v6043 = v2661.totalSupply;
        const v6044 = v2661.zeroAddress;
        const v6045 = {
          manager: v6029,
          nMinted: v6042,
          totalSupply: v6043,
          zeroAddress: v6044
          };
        const cv2661 = v6045;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'mintTo0_328': {
        const v6099 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v6391 = v6099[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:spread', stdlib.UInt_max, '0')];
        const v6392 = v6099[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:spread', stdlib.UInt_max, '1')];
        const v6393 = v2661.manager;
        const v6394 = stdlib.addressEq(v3017, v6393);
        stdlib.assert(v6394, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:231:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:231:13:function exp)'],
          msg: 'must be manager to mint',
          who: 'Deployer'
          });
        const v6396 = v2661.nMinted;
        const v6397 = stdlib.le256(v6396, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:6:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100000000'));
        stdlib.assert(v6397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:231:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:231:13:function exp)'],
          msg: 'already minted max NFT',
          who: 'Deployer'
          });
        const v6400 = stdlib.safeAdd256(v6396, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:228:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v6401 = v2661.totalSupply;
        const v6402 = stdlib.safeAdd256(v6401, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:229:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v6406 = {
          approved: v2655,
          owner: v6391,
          tokenURI: v6392
          };
        await stdlib.mapSet(map0, ctc7, v6400, ctc3, v6406);
        const v6407 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v6391, ctc7), null);
        const v6408 = stdlib.fromSome(v6407, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6409 = stdlib.safeAdd256(v6408, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:237:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v6391, ctc7, v6409);
        null;
        await txn3.getOutput('mintTo', 'v6400', ctc7, v6400);
        const v6421 = v2661.zeroAddress;
        const v6422 = {
          manager: v6393,
          nMinted: v6400,
          totalSupply: v6402,
          zeroAddress: v6421
          };
        const cv2661 = v6422;
        const cv2662 = v3019;
        const cv2665 = v2665;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_328': {
        const v6441 = v3018[1];
        undefined /* setApiDetails */;
        ;
        const v6769 = (stdlib.le(await ctc.getBalance(), v2665) ? stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:355:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2665));
        const v6770 = stdlib.safeAdd(v6769, v2665);
        const v6771 = v2661.manager;
        const v6775 = stdlib.sub(v6770, v6769);
        ;
        const v6776 = null;
        await txn3.getOutput('touch', 'v6776', ctc0, v6776);
        const cv2661 = v2661;
        const cv2662 = v3019;
        const cv2665 = v6775;
        
        v2661 = cv2661;
        v2662 = cv2662;
        v2665 = cv2665;
        
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc11,
    arc72_setApprovalForAll0_328: ctc12,
    arc72_transferFrom0_328: ctc13,
    burn0_328: ctc14,
    close0_328: ctc15,
    deleteHolderDataBox0_328: ctc16,
    deleteNftDataBox0_328: ctc14,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc16,
    mintTo0_328: ctc18,
    touch0_328: ctc15
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2857 = ctc.selfAddress();
  const v2859 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:296:44:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:44:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_approve0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'arc72_approve'
    });
  const v2861 = v2859[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2864 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2861, ctc3), null);
  const v2865 = {
    None: 0,
    Some: 1
    }[v2864[0]];
  const v2866 = stdlib.eq(v2865, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2866, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:297:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:296:44:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:44:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_approve0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_approve'
    });
  const v2869 = '                                                                                                                                                                                                                                                                ';
  const v2870 = {
    approved: v2655,
    owner: v2655,
    tokenURI: v2869
    };
  const v2871 = stdlib.fromSome(v2864, v2870);
  const v2872 = v2871.owner;
  const v2873 = stdlib.addressEq(v2872, v2857);
  stdlib.assert(v2873, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:298:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:296:44:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:44:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_approve0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be nft owner',
    who: 'arc72_approve'
    });
  const v2882 = ['arc72_approve0_328', v2859];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2882],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_approve"
            });
          ;
          const v3037 = v3021[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:spread', stdlib.UInt_max, '0')];
          const v3038 = v3021[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:spread', stdlib.UInt_max, '1')];
          const v3039 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3038, ctc3), null);
          const v3044 = '                                                                                                                                                                                                                                                                ';
          const v3045 = {
            approved: v2655,
            owner: v2655,
            tokenURI: v3044
            };
          const v3046 = stdlib.fromSome(v3039, v3045);
          const v3060 = v3046.tokenURI;
          const v3061 = {
            approved: v3037,
            owner: v3017,
            tokenURI: v3060
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v3038, ctc3, v3061);
          null;
          const v3062 = null;
          const v3063 = await txn1.getOutput('arc72_approve', 'v3062', ctc0, v3062);
          
          const v9442 = v2661;
          const v9444 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v3037 = v3021[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:spread', stdlib.UInt_max, '0')];
      const v3038 = v3021[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:296:10:spread', stdlib.UInt_max, '1')];
      const v3039 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3038, ctc3), null);
      const v3040 = {
        None: 0,
        Some: 1
        }[v3039[0]];
      const v3041 = stdlib.eq(v3040, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3041, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:297:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:300:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:300:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_approve'
        });
      const v3044 = '                                                                                                                                                                                                                                                                ';
      const v3045 = {
        approved: v2655,
        owner: v2655,
        tokenURI: v3044
        };
      const v3046 = stdlib.fromSome(v3039, v3045);
      const v3047 = v3046.owner;
      const v3048 = stdlib.addressEq(v3047, v3017);
      stdlib.assert(v3048, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:298:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:300:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:300:13:function exp)'],
        msg: 'must be nft owner',
        who: 'arc72_approve'
        });
      const v3060 = v3046.tokenURI;
      const v3061 = {
        approved: v3037,
        owner: v3017,
        tokenURI: v3060
        };
      await stdlib.mapSet(map0, ctc7, v3038, ctc3, v3061);
      null;
      const v3062 = null;
      const v3063 = await txn1.getOutput('arc72_approve', 'v3062', ctc0, v3062);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v3021, v3063), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:296:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:296:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:296:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:308:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:300:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:300:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:300:13:function exp)'],
          msg: 'out',
          who: 'arc72_approve'
          });
        }
      else {
        }
      
      const v9442 = v2661;
      const v9444 = v2665;
      return;
      
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc11,
    arc72_transferFrom0_328: ctc13,
    burn0_328: ctc14,
    close0_328: ctc15,
    deleteHolderDataBox0_328: ctc16,
    deleteNftDataBox0_328: ctc14,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc16,
    mintTo0_328: ctc18,
    touch0_328: ctc15
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2886 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:315:55:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:315:55:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_setApprovalForAll0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:315:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'arc72_setApprovalForAll'
    });
  const v2898 = ['arc72_setApprovalForAll0_328', v2886];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2898],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_setApprovalForAll"
            });
          ;
          const v3414 = v3363[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:spread', stdlib.UInt_max, '0')];
          const v3415 = v3363[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:spread', stdlib.UInt_max, '1')];
          const v3418 = [v3017, v3414];
          await stdlib.simMapSet(sim_r, 1, ctc17, v3418, ctc5, v3415);
          null;
          const v3419 = null;
          const v3420 = await txn1.getOutput('arc72_setApprovalForAll', 'v3419', ctc0, v3419);
          
          const v9478 = v2661;
          const v9480 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v3414 = v3363[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:spread', stdlib.UInt_max, '0')];
      const v3415 = v3363[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:315:10:spread', stdlib.UInt_max, '1')];
      const v3418 = [v3017, v3414];
      await stdlib.mapSet(map1, ctc17, v3418, ctc5, v3415);
      null;
      const v3419 = null;
      const v3420 = await txn1.getOutput('arc72_setApprovalForAll', 'v3419', ctc0, v3419);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v3363, v3420), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:315:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:315:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:315:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:321:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:317:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:317:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:317:13:function exp)'],
          msg: 'out',
          who: 'arc72_setApprovalForAll'
          });
        }
      else {
        }
      
      const v9478 = v2661;
      const v9480 = v2665;
      return;
      
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc13,
    arc72_setApprovalForAll0_328: ctc14,
    arc72_transferFrom0_328: ctc11,
    burn0_328: ctc15,
    close0_328: ctc16,
    deleteHolderDataBox0_328: ctc17,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc12,
    grant0_328: ctc17,
    mintTo0_328: ctc18,
    touch0_328: ctc16
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2771 = ctc.selfAddress();
  const v2773 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'arc72_transferFrom'
    });
  const v2774 = v2773[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2775 = v2773[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2776 = v2773[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2780 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2776, ctc3), null);
  const v2781 = {
    None: 0,
    Some: 1
    }[v2780[0]];
  const v2782 = stdlib.eq(v2781, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2782, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_transferFrom'
    });
  const v2785 = '                                                                                                                                                                                                                                                                ';
  const v2786 = {
    approved: v2655,
    owner: v2655,
    tokenURI: v2785
    };
  const v2787 = stdlib.fromSome(v2780, v2786);
  const v2788 = v2787.owner;
  const v2789 = stdlib.addressEq(v2774, v2788);
  const v2790 = v2789 ? false : true;
  stdlib.assert(v2790, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'ARC72: must be owner or operator',
    who: 'arc72_transferFrom'
    });
  const v2797 = stdlib.addressEq(v2771, v2788);
  const v2803 = [v2788, v2771];
  const v2804 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2803, ctc5), null);
  const v2805 = stdlib.fromSome(v2804, false);
  const v2810 = v2787.approved;
  const v2811 = stdlib.addressEq(v2810, v2771);
  const v2812 = v2805 ? true : v2811;
  const v2813 = v2797 ? true : v2812;
  stdlib.assert(v2813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'ARC72: must be owner or operator to transfer',
    who: 'arc72_transferFrom'
    });
  const v2815 = stdlib.addressEq(v2774, v2775);
  const v2816 = v2815 ? false : true;
  stdlib.assert(v2816, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must transfer to different address',
    who: 'arc72_transferFrom'
    });
  const v2819 = stdlib.addressEq(v2774, v2655);
  stdlib.assert(v2819, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must not transfer from zero address',
    who: 'arc72_transferFrom'
    });
  const v2822 = stdlib.addressEq(v2775, v2655);
  stdlib.assert(v2822, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must not be burned',
    who: 'arc72_transferFrom'
    });
  const v2829 = stdlib.addressEq(v2775, v2810);
  stdlib.assert(v2829, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must not be sent to approved address',
    who: 'arc72_transferFrom'
    });
  const v2838 = stdlib.addressEq(v2788, v2771);
  const v2840 = v2838 ? true : v2811;
  const v2844 = v2840 ? true : v2805;
  stdlib.assert(v2844, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:257:61:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:61:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runarc72_transferFrom0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be nft owner or approved operator',
    who: 'arc72_transferFrom'
    });
  const v2855 = ['arc72_transferFrom0_328', v2773];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2855],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_transferFrom"
            });
          ;
          const v3771 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '0')];
          const v3772 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '1')];
          const v3773 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '2')];
          const v3774 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3773, ctc3), null);
          const v3779 = '                                                                                                                                                                                                                                                                ';
          const v3780 = {
            approved: v2655,
            owner: v2655,
            tokenURI: v3779
            };
          const v3781 = stdlib.fromSome(v3774, v3780);
          const v3782 = v3781.owner;
          const v3797 = [v3782, v3017];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v3797, ctc5), null);
          const v3831 = v3781.tokenURI;
          const v3853 = {
            approved: v2655,
            owner: v3772,
            tokenURI: v3831
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v3773, ctc3, v3853);
          const v3854 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v3771, ctc7), null);
          const v3855 = stdlib.fromSome(v3854, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3856 = stdlib.safeSub256(v3855, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:284:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v3771, ctc7, v3856);
          const v3857 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v3772, ctc7), null);
          const v3858 = stdlib.fromSome(v3857, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3859 = stdlib.safeAdd256(v3858, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:285:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v3772, ctc7, v3859);
          null;
          const v3860 = null;
          const v3861 = await txn1.getOutput('arc72_transferFrom', 'v3860', ctc0, v3860);
          
          const v9514 = v2661;
          const v9516 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v3771 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '0')];
      const v3772 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '1')];
      const v3773 = v3705[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:257:10:spread', stdlib.UInt_max, '2')];
      const v3774 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3773, ctc3), null);
      const v3775 = {
        None: 0,
        Some: 1
        }[v3774[0]];
      const v3776 = stdlib.eq(v3775, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3776, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_transferFrom'
        });
      const v3779 = '                                                                                                                                                                                                                                                                ';
      const v3780 = {
        approved: v2655,
        owner: v2655,
        tokenURI: v3779
        };
      const v3781 = stdlib.fromSome(v3774, v3780);
      const v3782 = v3781.owner;
      const v3783 = stdlib.addressEq(v3771, v3782);
      const v3784 = v3783 ? false : true;
      stdlib.assert(v3784, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'ARC72: must be owner or operator',
        who: 'arc72_transferFrom'
        });
      const v3791 = stdlib.addressEq(v3017, v3782);
      const v3797 = [v3782, v3017];
      const v3798 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3797, ctc5), null);
      const v3799 = stdlib.fromSome(v3798, false);
      const v3804 = v3781.approved;
      const v3805 = stdlib.addressEq(v3804, v3017);
      const v3806 = v3799 ? true : v3805;
      const v3807 = v3791 ? true : v3806;
      stdlib.assert(v3807, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'ARC72: must be owner or operator to transfer',
        who: 'arc72_transferFrom'
        });
      const v3809 = stdlib.addressEq(v3771, v3772);
      const v3810 = v3809 ? false : true;
      stdlib.assert(v3810, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'must transfer to different address',
        who: 'arc72_transferFrom'
        });
      const v3813 = stdlib.addressEq(v3771, v2655);
      stdlib.assert(v3813, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:267:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'must not transfer from zero address',
        who: 'arc72_transferFrom'
        });
      const v3816 = stdlib.addressEq(v3772, v2655);
      stdlib.assert(v3816, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:268:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'must not be burned',
        who: 'arc72_transferFrom'
        });
      const v3823 = stdlib.addressEq(v3772, v3804);
      stdlib.assert(v3823, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:269:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'must not be sent to approved address',
        who: 'arc72_transferFrom'
        });
      const v3831 = v3781.tokenURI;
      const v3832 = stdlib.addressEq(v3782, v3017);
      const v3834 = v3832 ? true : v3805;
      const v3838 = v3834 ? true : v3799;
      stdlib.assert(v3838, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
        msg: 'must be nft owner or approved operator',
        who: 'arc72_transferFrom'
        });
      const v3853 = {
        approved: v2655,
        owner: v3772,
        tokenURI: v3831
        };
      await stdlib.mapSet(map0, ctc7, v3773, ctc3, v3853);
      const v3854 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3771, ctc7), null);
      const v3855 = stdlib.fromSome(v3854, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3856 = stdlib.safeSub256(v3855, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:284:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v3771, ctc7, v3856);
      const v3857 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3772, ctc7), null);
      const v3858 = stdlib.fromSome(v3857, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3859 = stdlib.safeAdd256(v3858, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:285:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v3772, ctc7, v3859);
      null;
      const v3860 = null;
      const v3861 = await txn1.getOutput('arc72_transferFrom', 'v3860', ctc0, v3860);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v3705, v3861), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:257:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:257:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:257:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:288:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:278:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:278:13:function exp)'],
          msg: 'out',
          who: 'arc72_transferFrom'
          });
        }
      else {
        }
      
      const v9514 = v2661;
      const v9516 = v2665;
      return;
      
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc11,
    close0_328: ctc15,
    deleteHolderDataBox0_328: ctc16,
    deleteNftDataBox0_328: ctc11,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc16,
    mintTo0_328: ctc18,
    touch0_328: ctc15
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2900 = ctc.selfAddress();
  const v2902 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:328:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:328:29:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runburn0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:328:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v2903 = v2902[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2905 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2903, ctc3), null);
  const v2906 = '                                                                                                                                                                                                                                                                ';
  const v2907 = {
    approved: v2655,
    owner: v2655,
    tokenURI: v2906
    };
  const v2908 = stdlib.fromSome(v2905, v2907);
  const v2909 = v2908.owner;
  const v2910 = stdlib.addressEq(v2909, v2900);
  stdlib.assert(v2910, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:329:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:328:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:328:29:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runburn0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:328:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be nft owner',
    who: 'burn'
    });
  const v2932 = ['burn0_328', v2902];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2932],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:328:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v4213 = v4047[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:328:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v4213, ctc3), null);
          await stdlib.simMapSet(sim_r, 0, ctc7, v4213, ctc3, undefined /* Nothing */);
          const v4237 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v3017, ctc7), null);
          const v4238 = stdlib.fromSome(v4237, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4239 = stdlib.safeSub256(v4238, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:337:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v3017, ctc7, v4239);
          null;
          const v4241 = null;
          const v4242 = await txn1.getOutput('burn', 'v4241', ctc0, v4241);
          
          const v4248 = v2661.manager;
          const v4249 = v2661.nMinted;
          const v4250 = v2661.totalSupply;
          const v4251 = v2661.zeroAddress;
          const v4253 = stdlib.safeSub256(v4250, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:344:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v4254 = {
            manager: v4248,
            nMinted: v4249,
            totalSupply: v4253,
            zeroAddress: v4251
            };
          const v9550 = v4254;
          const v9552 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v4213 = v4047[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:328:10:spread', stdlib.UInt_max, '0')];
      const v4214 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4213, ctc3), null);
      const v4215 = '                                                                                                                                                                                                                                                                ';
      const v4216 = {
        approved: v2655,
        owner: v2655,
        tokenURI: v4215
        };
      const v4217 = stdlib.fromSome(v4214, v4216);
      const v4218 = v4217.owner;
      const v4219 = stdlib.addressEq(v4218, v3017);
      stdlib.assert(v4219, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:329:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:335:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:335:13:function exp)'],
        msg: 'must be nft owner',
        who: 'burn'
        });
      await stdlib.mapSet(map0, ctc7, v4213, ctc3, undefined /* Nothing */);
      const v4237 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3017, ctc7), null);
      const v4238 = stdlib.fromSome(v4237, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4239 = stdlib.safeSub256(v4238, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:337:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v3017, ctc7, v4239);
      null;
      const v4241 = null;
      const v4242 = await txn1.getOutput('burn', 'v4241', ctc0, v4241);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v4047, v4242), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:328:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:328:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:328:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:340:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:335:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:335:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:335:13:function exp)'],
          msg: 'out',
          who: 'burn'
          });
        }
      else {
        }
      
      const v4248 = v2661.manager;
      const v4249 = v2661.nMinted;
      const v4250 = v2661.totalSupply;
      const v4251 = v2661.zeroAddress;
      const v4253 = stdlib.safeSub256(v4250, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:344:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v4254 = {
        manager: v4248,
        nMinted: v4249,
        totalSupply: v4253,
        zeroAddress: v4251
        };
      const v9550 = v4254;
      const v9552 = v2665;
      return;
      
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc15,
    close0_328: ctc11,
    deleteHolderDataBox0_328: ctc16,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc16,
    mintTo0_328: ctc18,
    touch0_328: ctc11
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2995 = ctc.selfAddress();
  const v2997 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:401:23:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:401:23:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runclose0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:401:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v2998 = v2661.manager;
  const v2999 = stdlib.addressEq(v2995, v2998);
  stdlib.assert(v2999, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:401:23:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:401:23:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runclose0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:401:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be manager to close',
    who: 'close'
    });
  const v3004 = ['close0_328', v2997];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v3004],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:401:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v4603 = null;
          const v4604 = await txn1.getOutput('close', 'v4603', ctc0, v4603);
          
          const v9586 = v2661;
          const v9588 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v4600 = v2661.manager;
      const v4601 = stdlib.addressEq(v3017, v4600);
      stdlib.assert(v4601, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:404:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:404:13:function exp)'],
        msg: 'must be manager to close',
        who: 'close'
        });
      const v4603 = null;
      const v4604 = await txn1.getOutput('close', 'v4603', ctc0, v4603);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v4389, v4604), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:401:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:401:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:401:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:405:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:404:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:404:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:404:13:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v9586 = v2661;
      const v9588 = v2665;
      return;
      
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteHolderDataBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteHolderDataBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteHolderDataBox3 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc15,
    close0_328: ctc16,
    deleteHolderDataBox0_328: ctc11,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc11,
    mintTo0_328: ctc18,
    touch0_328: ctc16
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2976 = ctc.selfAddress();
  const v2978 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:388:43:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:43:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteHolderDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'deleteHolderDataBox'
    });
  const v2979 = v2978[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2981 = v2661.manager;
  const v2982 = stdlib.addressEq(v2976, v2981);
  stdlib.assert(v2982, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:389:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:388:43:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:43:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteHolderDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be manager to delete holder data box',
    who: 'deleteHolderDataBox'
    });
  const v2984 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v2979, ctc7), null);
  const v2985 = stdlib.fromSome(v2984, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2986 = stdlib.eq256(v2985, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:390:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:388:43:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:43:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteHolderDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must have zero balance',
    who: 'deleteHolderDataBox'
    });
  const v2993 = ['deleteHolderDataBox0_328', v2978];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2993],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:388:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteHolderDataBox"
            });
          ;
          const v4953 = v4731[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:388:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v4953, ctc7), null);
          await stdlib.simMapSet(sim_r, 2, ctc1, v4953, ctc7, undefined /* Nothing */);
          const v4962 = null;
          const v4963 = await txn1.getOutput('deleteHolderDataBox', 'v4962', ctc0, v4962);
          
          const v9622 = v2661;
          const v9624 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v4953 = v4731[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:388:10:spread', stdlib.UInt_max, '0')];
      const v4954 = v2661.manager;
      const v4955 = stdlib.addressEq(v3017, v4954);
      stdlib.assert(v4955, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:389:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:392:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:392:13:function exp)'],
        msg: 'must be manager to delete holder data box',
        who: 'deleteHolderDataBox'
        });
      const v4957 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v4953, ctc7), null);
      const v4958 = stdlib.fromSome(v4957, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4959 = stdlib.eq256(v4958, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:390:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v4959, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:392:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:392:13:function exp)'],
        msg: 'must have zero balance',
        who: 'deleteHolderDataBox'
        });
      await stdlib.mapSet(map2, ctc1, v4953, ctc7, undefined /* Nothing */);
      const v4962 = null;
      const v4963 = await txn1.getOutput('deleteHolderDataBox', 'v4962', ctc0, v4962);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v4731, v4963), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:388:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:388:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:388:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:394:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:392:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:392:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:392:13:function exp)'],
          msg: 'out',
          who: 'deleteHolderDataBox'
          });
        }
      else {
        }
      
      const v9622 = v2661;
      const v9624 = v2665;
      return;
      
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc11,
    close0_328: ctc15,
    deleteHolderDataBox0_328: ctc16,
    deleteNftDataBox0_328: ctc11,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc16,
    mintTo0_328: ctc18,
    touch0_328: ctc15
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2942 = ctc.selfAddress();
  const v2944 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:364:41:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:364:41:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteNftDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:364:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'deleteNftDataBox'
    });
  const v2947 = v2661.manager;
  const v2948 = stdlib.addressEq(v2942, v2947);
  stdlib.assert(v2948, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:365:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:364:41:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:364:41:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteNftDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:364:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be manager to delete nft data box',
    who: 'deleteNftDataBox'
    });
  const v2955 = ['deleteNftDataBox0_328', v2944];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2955],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:364:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteNftDataBox"
            });
          ;
          const v5313 = v5073[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:364:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc7, v5313, ctc3, undefined /* Nothing */);
          const v5318 = null;
          const v5319 = await txn1.getOutput('deleteNftDataBox', 'v5318', ctc0, v5318);
          
          const v9658 = v2661;
          const v9660 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v5313 = v5073[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:364:10:spread', stdlib.UInt_max, '0')];
      const v5314 = v2661.manager;
      const v5315 = stdlib.addressEq(v3017, v5314);
      stdlib.assert(v5315, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:365:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:367:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:367:13:function exp)'],
        msg: 'must be manager to delete nft data box',
        who: 'deleteNftDataBox'
        });
      await stdlib.mapSet(map0, ctc7, v5313, ctc3, undefined /* Nothing */);
      const v5318 = null;
      const v5319 = await txn1.getOutput('deleteNftDataBox', 'v5318', ctc0, v5318);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v5073, v5319), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:364:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:364:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:364:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:369:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:367:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:367:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:367:13:function exp)'],
          msg: 'out',
          who: 'deleteNftDataBox'
          });
        }
      else {
        }
      
      const v9658 = v2661;
      const v9660 = v2665;
      return;
      
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc15,
    close0_328: ctc16,
    deleteHolderDataBox0_328: ctc17,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc11,
    grant0_328: ctc17,
    mintTo0_328: ctc18,
    touch0_328: ctc16
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2957 = ctc.selfAddress();
  const v2959 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:376:54:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:376:54:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteOperatorDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:376:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'deleteOperatorDataBox'
    });
  const v2964 = v2661.manager;
  const v2965 = stdlib.addressEq(v2957, v2964);
  stdlib.assert(v2965, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:377:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:376:54:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:376:54:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rundeleteOperatorDataBox0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:376:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be manager to delete operator data box',
    who: 'deleteOperatorDataBox'
    });
  const v2974 = ['deleteOperatorDataBox0_328', v2959];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2974],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteOperatorDataBox"
            });
          ;
          const v5669 = v5415[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:spread', stdlib.UInt_max, '0')];
          const v5670 = v5415[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:spread', stdlib.UInt_max, '1')];
          const v5676 = [v5669, v5670];
          await stdlib.simMapSet(sim_r, 1, ctc11, v5676, ctc5, undefined /* Nothing */);
          const v5677 = null;
          const v5678 = await txn1.getOutput('deleteOperatorDataBox', 'v5677', ctc0, v5677);
          
          const v9694 = v2661;
          const v9696 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v5669 = v5415[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:spread', stdlib.UInt_max, '0')];
      const v5670 = v5415[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:376:10:spread', stdlib.UInt_max, '1')];
      const v5671 = v2661.manager;
      const v5672 = stdlib.addressEq(v3017, v5671);
      stdlib.assert(v5672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:377:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:379:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:379:13:function exp)'],
        msg: 'must be manager to delete operator data box',
        who: 'deleteOperatorDataBox'
        });
      const v5676 = [v5669, v5670];
      await stdlib.mapSet(map1, ctc11, v5676, ctc5, undefined /* Nothing */);
      const v5677 = null;
      const v5678 = await txn1.getOutput('deleteOperatorDataBox', 'v5677', ctc0, v5677);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v5415, v5678), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:376:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:376:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:376:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:381:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:379:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:379:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:379:13:function exp)'],
          msg: 'out',
          who: 'deleteOperatorDataBox'
          });
        }
      else {
        }
      
      const v9694 = v2661;
      const v9696 = v2665;
      return;
      
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc15,
    close0_328: ctc16,
    deleteHolderDataBox0_328: ctc11,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc11,
    mintTo0_328: ctc18,
    touch0_328: ctc16
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2730 = ctc.selfAddress();
  const v2732 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:212:27:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:212:27:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rungrant0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:212:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2735 = v2661.manager;
  const v2736 = stdlib.addressEq(v2730, v2735);
  stdlib.assert(v2736, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:212:27:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:212:27:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "rungrant0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:212:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be manager to grant',
    who: 'grant'
    });
  const v2743 = ['grant0_328', v2732];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2743],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:212:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v6029 = v5757[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:212:10:spread', stdlib.UInt_max, '0')];
          const v6034 = null;
          const v6035 = await txn1.getOutput('grant', 'v6034', ctc0, v6034);
          
          const v6042 = v2661.nMinted;
          const v6043 = v2661.totalSupply;
          const v6044 = v2661.zeroAddress;
          const v6045 = {
            manager: v6029,
            nMinted: v6042,
            totalSupply: v6043,
            zeroAddress: v6044
            };
          const v9730 = v6045;
          const v9732 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v6029 = v5757[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:212:10:spread', stdlib.UInt_max, '0')];
      const v6030 = v2661.manager;
      const v6031 = stdlib.addressEq(v3017, v6030);
      stdlib.assert(v6031, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:215:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:215:13:function exp)'],
        msg: 'must be manager to grant',
        who: 'grant'
        });
      const v6034 = null;
      const v6035 = await txn1.getOutput('grant', 'v6034', ctc0, v6034);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v5757, v6035), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:212:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:212:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:212:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:216:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:215:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:215:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:215:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v6042 = v2661.nMinted;
      const v6043 = v2661.totalSupply;
      const v6044 = v2661.zeroAddress;
      const v6045 = {
        manager: v6029,
        nMinted: v6042,
        totalSupply: v6043,
        zeroAddress: v6044
        };
      const v9730 = v6045;
      const v9732 = v2665;
      return;
      
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc15,
    close0_328: ctc16,
    deleteHolderDataBox0_328: ctc17,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc18,
    grant0_328: ctc17,
    mintTo0_328: ctc11,
    touch0_328: ctc16
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2745 = ctc.selfAddress();
  const v2747 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:225:34:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:34:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runmintTo0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'mintTo'
    });
  const v2752 = v2661.manager;
  const v2753 = stdlib.addressEq(v2745, v2752);
  stdlib.assert(v2753, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:225:34:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:34:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runmintTo0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'must be manager to mint',
    who: 'mintTo'
    });
  const v2755 = v2661.nMinted;
  const v2756 = stdlib.le256(v2755, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:6:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100000000'));
  stdlib.assert(v2756, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:225:34:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:34:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runmintTo0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'already minted max NFT',
    who: 'mintTo'
    });
  const v2769 = ['mintTo0_328', v2747];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2769],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mintTo"
            });
          ;
          const v6391 = v6099[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:spread', stdlib.UInt_max, '0')];
          const v6392 = v6099[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:spread', stdlib.UInt_max, '1')];
          const v6393 = v2661.manager;
          const v6396 = v2661.nMinted;
          const v6400 = stdlib.safeAdd256(v6396, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:228:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v6401 = v2661.totalSupply;
          const v6402 = stdlib.safeAdd256(v6401, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:229:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v6406 = {
            approved: v2655,
            owner: v6391,
            tokenURI: v6392
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v6400, ctc3, v6406);
          const v6407 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v6391, ctc7), null);
          const v6408 = stdlib.fromSome(v6407, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6409 = stdlib.safeAdd256(v6408, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:237:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v6391, ctc7, v6409);
          null;
          const v6411 = await txn1.getOutput('mintTo', 'v6400', ctc7, v6400);
          
          const v6421 = v2661.zeroAddress;
          const v6422 = {
            manager: v6393,
            nMinted: v6400,
            totalSupply: v6402,
            zeroAddress: v6421
            };
          const v9766 = v6422;
          const v9768 = v2665;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v6391 = v6099[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:spread', stdlib.UInt_max, '0')];
      const v6392 = v6099[stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:225:10:spread', stdlib.UInt_max, '1')];
      const v6393 = v2661.manager;
      const v6394 = stdlib.addressEq(v3017, v6393);
      stdlib.assert(v6394, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:231:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:231:13:function exp)'],
        msg: 'must be manager to mint',
        who: 'mintTo'
        });
      const v6396 = v2661.nMinted;
      const v6397 = stdlib.le256(v6396, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:6:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100000000'));
      stdlib.assert(v6397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:227:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:231:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:231:13:function exp)'],
        msg: 'already minted max NFT',
        who: 'mintTo'
        });
      const v6400 = stdlib.safeAdd256(v6396, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:228:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v6401 = v2661.totalSupply;
      const v6402 = stdlib.safeAdd256(v6401, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:229:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v6406 = {
        approved: v2655,
        owner: v6391,
        tokenURI: v6392
        };
      await stdlib.mapSet(map0, ctc7, v6400, ctc3, v6406);
      const v6407 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v6391, ctc7), null);
      const v6408 = stdlib.fromSome(v6407, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:134:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6409 = stdlib.safeAdd256(v6408, stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:237:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v6391, ctc7, v6409);
      null;
      const v6411 = await txn1.getOutput('mintTo', 'v6400', ctc7, v6400);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v6099, v6411), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:225:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:225:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:225:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:240:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:231:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:231:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:231:13:function exp)'],
          msg: 'out',
          who: 'mintTo'
          });
        }
      else {
        }
      
      const v6421 = v2661.zeroAddress;
      const v6422 = {
        manager: v6393,
        nMinted: v6400,
        totalSupply: v6402,
        zeroAddress: v6421
        };
      const v9766 = v6422;
      const v9768 = v2665;
      return;
      
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
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
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_328: ctc12,
    arc72_setApprovalForAll0_328: ctc13,
    arc72_transferFrom0_328: ctc14,
    burn0_328: ctc15,
    close0_328: ctc11,
    deleteHolderDataBox0_328: ctc16,
    deleteNftDataBox0_328: ctc15,
    deleteOperatorDataBox0_328: ctc17,
    grant0_328: ctc16,
    mintTo0_328: ctc18,
    touch0_328: ctc11
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
  
  const map2_ctc = ctc8;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2655, v2661, v2665] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc10]);
  const v2936 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72d/ARC72_Dynamic.rsh:1:23:application',
    fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:352:23:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:352:23:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to "runtouch0_328" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:352:10:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:176:29:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:176:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2940 = ['touch0_328', v2936];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2655, v2661, v2665, v2940],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:352:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
      
      switch (v3018[0]) {
        case 'arc72_approve0_328': {
          const v3021 = v3018[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_328': {
          const v3363 = v3018[1];
          
          break;
          }
        case 'arc72_transferFrom0_328': {
          const v3705 = v3018[1];
          
          break;
          }
        case 'burn0_328': {
          const v4047 = v3018[1];
          
          break;
          }
        case 'close0_328': {
          const v4389 = v3018[1];
          
          break;
          }
        case 'deleteHolderDataBox0_328': {
          const v4731 = v3018[1];
          
          break;
          }
        case 'deleteNftDataBox0_328': {
          const v5073 = v3018[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_328': {
          const v5415 = v3018[1];
          
          break;
          }
        case 'grant0_328': {
          const v5757 = v3018[1];
          
          break;
          }
        case 'mintTo0_328': {
          const v6099 = v3018[1];
          
          break;
          }
        case 'touch0_328': {
          const v6441 = v3018[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v6769 = (stdlib.le(await ctc.getBalance(), v2665) ? stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:355:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2665));
          const v6770 = stdlib.safeAdd(v6769, v2665);
          const v6771 = v2661.manager;
          const v6775 = stdlib.sub(v6770, v6769);
          sim_r.txns.push({
            kind: 'from',
            to: v6771,
            tok: undefined /* Nothing */
            });
          const v6776 = null;
          const v6777 = await txn1.getOutput('touch', 'v6776', ctc0, v6776);
          
          const v9802 = v2661;
          const v9804 = v6775;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc10, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3018], secs: v3020, time: v3019, didSend: v1838, from: v3017 } = txn1;
  switch (v3018[0]) {
    case 'arc72_approve0_328': {
      const v3021 = v3018[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_328': {
      const v3363 = v3018[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_328': {
      const v3705 = v3018[1];
      return;
      break;
      }
    case 'burn0_328': {
      const v4047 = v3018[1];
      return;
      break;
      }
    case 'close0_328': {
      const v4389 = v3018[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_328': {
      const v4731 = v3018[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_328': {
      const v5073 = v3018[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_328': {
      const v5415 = v3018[1];
      return;
      break;
      }
    case 'grant0_328': {
      const v5757 = v3018[1];
      return;
      break;
      }
    case 'mintTo0_328': {
      const v6099 = v3018[1];
      return;
      break;
      }
    case 'touch0_328': {
      const v6441 = v3018[1];
      undefined /* setApiDetails */;
      ;
      const v6769 = (stdlib.le(await ctc.getBalance(), v2665) ? stdlib.checkedBigNumberify('./impl/arc72d/ARC72_Dynamic.rsh:355:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2665));
      const v6770 = stdlib.safeAdd(v6769, v2665);
      const v6771 = v2661.manager;
      const v6775 = stdlib.sub(v6770, v6769);
      ;
      const v6776 = null;
      const v6777 = await txn1.getOutput('touch', 'v6776', ctc0, v6776);
      if (v1838) {
        stdlib.protect(ctc0, await interact.out(v6441, v6777), {
          at: './impl/arc72d/ARC72_Dynamic.rsh:352:11:application',
          fs: ['at ./impl/arc72d/ARC72_Dynamic.rsh:352:11:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:352:11:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:357:12:application call to "k" (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:354:13:function exp)', 'at ./impl/arc72d/ARC72_Dynamic.rsh:354:13:application call to [unknown function] (defined at: ./impl/arc72d/ARC72_Dynamic.rsh:354:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v9802 = v2661;
      const v9804 = v6775;
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
export async function deleteHolderDataBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteHolderDataBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteHolderDataBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteHolderDataBox3(ctcTop, interact);}
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
    impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[288])))void`, `arc72_approve(address,uint256)void`, `arc72_setApprovalForAll(address,byte)void`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteHolderDataBox(address)void`, `deleteNftDataBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `mintTo(address,byte[256])uint256`, `touch()void`],
    pure: [`arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `manager()address`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`],
    sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[288])))void`, `arc72_approve(address,uint256)void`, `arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_setApprovalForAll(address,byte)void`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteHolderDataBox(address)void`, `deleteNftDataBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `manager()address`, `mintTo(address,byte[256])uint256`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAIACAwgBwALU4gjU3gFA1Hog4AEmBwABAAECIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCAAAAAAAAAABAQEE2AjU9DEYQQrNKGRJIls1ASVbNQIpZCcFZFCCFwQdwi8sBD6mD38EUh4tYQRk1yp6BGdDQDEEaLeQ7gRtm/0nBHANfqIEcV1g3QR5CWoUBHn1sI0Eiczm8wSUiqTxBJZWBHoEpKku6wSsMZEkBLTtuk4Ew8H8AATXn9M/BN+lG8QE4z2AUgTxUFUnBPLxlKA2GgCOFwsyCqwLNQqECyIKCQp0CmYJ9wpeCsEKtApJCqEKpApBCjQKfApRCyULPQqZCocANAtXACA1DTQLVyAgNQwoIQWvKTQMUIgLdkk1EiJVIQQSRDQRSVAjr1A0EogLWEk1C1cAIDEAEkQhBik0DFAxADQNUDQLIQgjWFCIC2CABIWi5uAxAFA0DVA0DFCwKDULgAgAAAAAAAAL9jQLULA0CzUEMgY1DzQRNBBQNA4WUCQyBjUCNQEpSwFXAH9nJwVMV38pZyg0ARY0AhZQZzEZIhJEiAs6NANAAAqABBUffHU0BFCwIQRDNAtXACA1DTQLVyABFzUMIQknBDEANA1QUAE0DBZRBwiICtOABPatFIwxAFA0DVA0DBZRBwhQsCg1C4AIAAAAAAAADVs0C1CwNAs1BDIGNQ9C/2w0C1cAIDUSNAtXICA1DTQLV0AgNQwoIQWvKTQMUIgKZUk1CyJVIQQSRDQRSVAjr1A0C4gKR0k1FlcAIDUVNBI0FRNEKSgpJwQ0FTEAUFABiAoziAonFzUUNBZXICBJNRMxABI1CzEANBUSNBQ0CxERRDQSNA0TRDQSNBESRDQNNBESRDQNNBMSRDQVMQASNAsRNBQRRCEGKTQMUDQNNBFQNBYhCCNYUIgJ+SEHKjQSUDIDKDIDKjQSUIgJyYgJvSuhiAntiAncIQcqNA1QMgMoMgMqNA1QiAmsiAmgK6CICdCICb8nBjQSUDQNUDQMULAoNQuACAAAAAAAAA8UNAtQsDQLNQQyBjUPQv5gNA1XASA1CzQRSVAjr1AoIQWvKTQLUIgJYIgJVFcAIDEAEkQhBik0C1CICYMhByoxAFAyAygyAyoxAFCICTuICS8roYgJX4gJTicGMQBQNBFQNAtQsCg1C4AIAAAAAAAAEJE0C1CwNAs1BDQQVwAgNBBXICBQNBBXQCAroYgJJlA0EFdgIFAyBjUPNRBC/dExADQQVwAgEkQoNQuACAAAAAAAABH7NAtQsDQLNQQyBjUPQv2sNA1XASA1CzEANBBXACASRDIDKDIDKjQLUIgIqYgInTIDqEQhByo0C1CICM8oNQuACAAAAAAAABNiNAtQsDQLNQQyBjUPQv1kMQA0EFcAIBJEIQYpNA1XASBQiAieKDULgAgAAAAAAAAUxjQLULA0CzUEMgY1D0L9MzEANBBXACASRCEJJwQ0C1cAIDQLVyAgUFABiAhlKDULgAgAAAAAAAAWLTQLULA0CzUEMgY1D0L8+jEANBBXACASRCg1C4AIAAAAAAAAF5I0C1CwNAs1BDQNVwEgNBBXICBQNBBXQCBQNBBXYCBQMgY1DzUQQvy8NAtXACA1EzQQVwAgNRIxADQSEkQ0EFcgIEk1DYAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX14QCmRDQNK6CIB7o1DCEGKTQMUDQTNBFQNAshCiNYUIgHlSEHKjQTUDIDKDIDKjQTUIgHZYgHWSugiAeJiAd4JwY0EVA0E1A0DFCwgAgAAAAAAAAZADQMULA0DDUENBI0DFA0EFdAICugiAdZUDQQV2AgUDIGNQ81EEL8BDIKYDIKeAk0DglJNQw0EFcAIIgHZCg1C4AIAAAAAAAAGng0C1CwNAs1BDIGNAw0Dgg0DAk1DjUPQvvJJa8pNAw0C1BQIQuvUFA1CyQ0ARJEiAbVNAsiWzUMNAslgaECWDUNgASsWisJNAwWUDQNULA0DIgG7jQNIlWNCwX9BgcGEQYbBcUFyAXLBc4F2AXbBehC+vk0ASQSRIgGjDIDKDIDKjQLUIgGdYgGaTUEMRkiEkRC+4M0ASQSRIgGazQRSVAjr1AoIQWvKTQLUIgGTogGQlcgIDUEQv/TNAEkEkSIBkYpKCknBDQMNAtQUAGIBiyIBiA1BEL/tDQBJBJEiAYnNBFJUCOvUCghBa8pNAtQiAYKiAX+VwAgNQRC/48lrycFNAw0CxZRBwhQUIH/Aa9QUDULQv8UNAEkEkSIBek0CzUEQv9nNAEkEkSIBdooIQWvKTQLUIgFxEk1DCJVIQQSRDQRSVAjr1A0DIgFpiEII1g1BEL/NjQBJBJEiAWpNBBXQCA1BEL/JCWvKjQNNAxQNAtQUIHAAa9QUDULQv6rJa+AAQM0C1Ajr1BQNQtC/pqAqQIAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9aSWvgAEFNAtQI69QUDULQv1YJa+AAQY0C1Ajr1BQNQtC/Uclr4ABBzQMNAtQUCELr1BQNQtC/TIlr4ABCDQLUCOvUFA1C0L9ITQBJBJEiAP2NBBXACA1BEL9cSWvgAEJNAw0C1BQUDULQvz+NAEkEkSIA9M0EFcAIDQQVyAgUDQQV0AgUDUEQv1CNAEkEkSIA7U0CwE1DIAgejChhHRVzv0jPcTG0PNrPrZGUhGGlqmH9pdsBGAcQ000DBKAIBedx29/IyCAqvGvxhhqp8TpjjtP652+bCIl7y2r/S8zNAwSgCCOMV+QFN5vVqwpTT6Yi81kBezKYLAfrasC4cehchDAyjQMEoAgC15tDpqFq1+kVKU9sNWL9xQpBtkodb/SO0FaaZFpxUI0DBIREREWUQcINQRC/JWAqQIAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L7AjQMIls1DTQMVwggNQuABN468KE0DRZQNAtQsDQNiAH6NAs1ETEAMgNQMgNQNBFQMgYiNQ41DzUQQvaAiAHXgaCNBogB7zYaATUMQv+ziAHFNhoBNQtC+qoiMTQSRCQxNRJEIjE2EkQiMTcSRIgBpoGoAa8iIkL2TzYaATYaAjULNQxC+m02GgE1C0L6vjYaATULQvrXNhoBNhoCNQs1DEL67zYaATULQvsGNhoBNhoCFzULNQxC+x02GgE1C0L7LjYaATULQvs1QvtjNhoBNhoCNhoDNQs1DDUNQvtjNhoBNQtC+3JC+4A2GgE1C0L8qTYaATULQvyyNhoBNhoCNQs1DEL8tjYaATULQvzDQvfaQvf8QvhBNA1XAUA1C0L4aEL4njQNIQSBoAJYNQtC+M9C+YRITL9IiSKyASEEshCyB7IIs4k0DVcBQDULQvT2NA1XASE1C0L1ozQNVwFgNQtC9exC9vVC/Hg2GgE2GgI1CzUMQvx9QvyLNhoBNQtC/KFC/UtIiUwJSTUGMgmIAKCJCUlB/+5JNQYxFjQAIQQISTUACUcCOAcyChJEOBAhBBJEOAgSRIkxGYEFEkSIAGQiMgoyCYgAckL1H0lXAQBMIlVNib5JFlEHCEUETVCJSVcAIDURSVcggDUQgaABWzUOiUxJvUD/O0sDiAA3Qv8zSRUhCkwJr0xQibwiTgJNNAcINQeJIQQ1A4lJIhJMNAISEUSJNAY0B0oPQf9ZQv9hsUL/BDQGCDUGibGyCUL++A==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `19`,
    1000: `500`,
    1001: `500`,
    1002: `502`,
    1003: `503`,
    1004: `503`,
    1005: `504`,
    1006: `505`,
    1007: `505`,
    1008: `506`,
    1009: `507`,
    101: `21`,
    1010: `507`,
    1011: `507`,
    1012: `508`,
    1013: `508`,
    1014: `508`,
    1015: `509`,
    1016: `509`,
    1017: `510`,
    1018: `511`,
    1019: `516`,
    102: `21`,
    1020: `516`,
    1021: `517`,
    1022: `518`,
    1023: `518`,
    1024: `519`,
    1025: `520`,
    1026: `520`,
    1027: `520`,
    1028: `521`,
    1029: `522`,
    103: `21`,
    1030: `522`,
    1031: `523`,
    1032: `523`,
    1033: `523`,
    1034: `523`,
    1035: `523`,
    1036: `523`,
    1037: `523`,
    1038: `523`,
    1039: `523`,
    104: `21`,
    1040: `523`,
    1041: `524`,
    1042: `524`,
    1043: `525`,
    1044: `526`,
    1045: `527`,
    1046: `527`,
    1047: `528`,
    1048: `528`,
    1049: `529`,
    105: `21`,
    1050: `529`,
    1051: `530`,
    1052: `530`,
    1053: `531`,
    1054: `531`,
    1055: `531`,
    1056: `533`,
    1057: `533`,
    1058: `534`,
    1059: `534`,
    106: `21`,
    1060: `535`,
    1061: `535`,
    1062: `535`,
    1063: `536`,
    1064: `537`,
    1065: `543`,
    1066: `543`,
    1067: `544`,
    1068: `545`,
    1069: `545`,
    107: `21`,
    1070: `546`,
    1071: `546`,
    1072: `546`,
    1073: `547`,
    1074: `548`,
    1075: `548`,
    1076: `548`,
    1077: `549`,
    1078: `550`,
    1079: `550`,
    108: `21`,
    1080: `551`,
    1081: `551`,
    1082: `551`,
    1083: `551`,
    1084: `551`,
    1085: `551`,
    1086: `551`,
    1087: `551`,
    1088: `551`,
    1089: `551`,
    109: `21`,
    1090: `552`,
    1091: `552`,
    1092: `553`,
    1093: `554`,
    1094: `555`,
    1095: `555`,
    1096: `556`,
    1097: `556`,
    1098: `557`,
    1099: `557`,
    11: `2`,
    110: `21`,
    1100: `558`,
    1101: `558`,
    1102: `559`,
    1103: `559`,
    1104: `559`,
    1105: `561`,
    1106: `561`,
    1107: `562`,
    1108: `562`,
    1109: `563`,
    111: `21`,
    1110: `563`,
    1111: `563`,
    1112: `564`,
    1113: `565`,
    1114: `571`,
    1115: `571`,
    1116: `572`,
    1117: `572`,
    1118: `573`,
    1119: `573`,
    112: `21`,
    1120: `574`,
    1121: `574`,
    1122: `574`,
    1123: `575`,
    1124: `575`,
    1125: `576`,
    1126: `576`,
    1127: `576`,
    1128: `577`,
    1129: `578`,
    113: `21`,
    1130: `579`,
    1131: `580`,
    1132: `580`,
    1133: `580`,
    1134: `581`,
    1135: `582`,
    1136: `582`,
    1137: `583`,
    1138: `583`,
    1139: `583`,
    114: `21`,
    1140: `583`,
    1141: `583`,
    1142: `583`,
    1143: `583`,
    1144: `583`,
    1145: `583`,
    1146: `583`,
    1147: `584`,
    1148: `584`,
    1149: `585`,
    115: `21`,
    1150: `586`,
    1151: `587`,
    1152: `587`,
    1153: `588`,
    1154: `588`,
    1155: `589`,
    1156: `589`,
    1157: `590`,
    1158: `590`,
    1159: `591`,
    116: `21`,
    1160: `591`,
    1161: `591`,
    1162: `593`,
    1163: `593`,
    1164: `594`,
    1165: `594`,
    1166: `595`,
    1167: `595`,
    1168: `595`,
    1169: `596`,
    117: `21`,
    1170: `597`,
    1171: `602`,
    1172: `603`,
    1173: `603`,
    1174: `604`,
    1175: `604`,
    1176: `604`,
    1177: `604`,
    1178: `604`,
    1179: `604`,
    118: `21`,
    1180: `604`,
    1181: `604`,
    1182: `604`,
    1183: `604`,
    1184: `605`,
    1185: `605`,
    1186: `606`,
    1187: `607`,
    1188: `608`,
    1189: `608`,
    119: `21`,
    1190: `609`,
    1191: `609`,
    1192: `610`,
    1193: `610`,
    1194: `611`,
    1195: `611`,
    1196: `611`,
    1197: `612`,
    1198: `612`,
    1199: `613`,
    12: `2`,
    120: `21`,
    1200: `613`,
    1201: `613`,
    1202: `614`,
    1203: `615`,
    1204: `615`,
    1205: `616`,
    1206: `616`,
    1207: `616`,
    1208: `617`,
    1209: `618`,
    121: `21`,
    1210: `618`,
    1211: `619`,
    1212: `619`,
    1213: `619`,
    1214: `620`,
    1215: `621`,
    1216: `621`,
    1217: `622`,
    1218: `622`,
    1219: `623`,
    122: `21`,
    1220: `623`,
    1221: `624`,
    1222: `624`,
    1223: `624`,
    1224: `626`,
    1225: `626`,
    1226: `627`,
    1227: `627`,
    1228: `627`,
    1229: `628`,
    123: `21`,
    1230: `628`,
    1231: `629`,
    1232: `629`,
    1233: `630`,
    1234: `630`,
    1235: `630`,
    1236: `631`,
    1237: `631`,
    1238: `632`,
    1239: `632`,
    124: `21`,
    1240: `633`,
    1241: `633`,
    1242: `634`,
    1243: `635`,
    1244: `640`,
    1245: `640`,
    1246: `641`,
    1247: `641`,
    1248: `641`,
    1249: `642`,
    125: `21`,
    1250: `643`,
    1251: `643`,
    1252: `644`,
    1253: `644`,
    1254: `644`,
    1255: `644`,
    1256: `644`,
    1257: `644`,
    1258: `644`,
    1259: `644`,
    126: `21`,
    1260: `644`,
    1261: `644`,
    1262: `644`,
    1263: `644`,
    1264: `644`,
    1265: `644`,
    1266: `644`,
    1267: `644`,
    1268: `644`,
    1269: `644`,
    127: `21`,
    1270: `644`,
    1271: `644`,
    1272: `644`,
    1273: `644`,
    1274: `644`,
    1275: `644`,
    1276: `644`,
    1277: `644`,
    1278: `644`,
    1279: `644`,
    128: `21`,
    1280: `644`,
    1281: `644`,
    1282: `644`,
    1283: `644`,
    1284: `644`,
    1285: `644`,
    1286: `645`,
    1287: `646`,
    1288: `651`,
    1289: `651`,
    129: `21`,
    1290: `652`,
    1291: `653`,
    1292: `654`,
    1293: `654`,
    1294: `654`,
    1295: `655`,
    1296: `655`,
    1297: `657`,
    1298: `657`,
    1299: `658`,
    13: `2`,
    130: `21`,
    1300: `659`,
    1301: `659`,
    1302: `660`,
    1303: `661`,
    1304: `661`,
    1305: `662`,
    1306: `662`,
    1307: `663`,
    1308: `664`,
    1309: `664`,
    131: `21`,
    1310: `665`,
    1311: `665`,
    1312: `666`,
    1313: `667`,
    1314: `668`,
    1315: `669`,
    1316: `669`,
    1317: `669`,
    1318: `671`,
    1319: `671`,
    132: `21`,
    1320: `672`,
    1321: `673`,
    1322: `673`,
    1323: `674`,
    1324: `675`,
    1325: `675`,
    1326: `676`,
    1327: `677`,
    1328: `677`,
    1329: `678`,
    133: `21`,
    1330: `679`,
    1331: `679`,
    1332: `680`,
    1333: `681`,
    1334: `681`,
    1335: `681`,
    1336: `682`,
    1337: `682`,
    1338: `682`,
    1339: `683`,
    134: `21`,
    1340: `684`,
    1341: `685`,
    1342: `685`,
    1343: `685`,
    1344: `686`,
    1345: `686`,
    1346: `686`,
    1347: `687`,
    1348: `687`,
    1349: `688`,
    135: `21`,
    1350: `688`,
    1351: `689`,
    1352: `690`,
    1353: `690`,
    1354: `691`,
    1355: `692`,
    1356: `692`,
    1357: `693`,
    1358: `694`,
    1359: `696`,
    136: `21`,
    1360: `696`,
    1361: `696`,
    1362: `696`,
    1363: `696`,
    1364: `696`,
    1365: `696`,
    1366: `696`,
    1367: `696`,
    1368: `696`,
    1369: `697`,
    137: `21`,
    1370: `697`,
    1371: `698`,
    1372: `699`,
    1373: `700`,
    1374: `700`,
    1375: `701`,
    1376: `701`,
    1377: `702`,
    1378: `702`,
    1379: `703`,
    138: `21`,
    1380: `703`,
    1381: `704`,
    1382: `705`,
    1383: `705`,
    1384: `706`,
    1385: `706`,
    1386: `706`,
    1387: `707`,
    1388: `708`,
    1389: `709`,
    139: `21`,
    1390: `709`,
    1391: `709`,
    1392: `710`,
    1393: `711`,
    1394: `711`,
    1395: `712`,
    1396: `712`,
    1397: `712`,
    1398: `713`,
    1399: `714`,
    14: `2`,
    140: `21`,
    1400: `714`,
    1401: `715`,
    1402: `715`,
    1403: `716`,
    1404: `716`,
    1405: `717`,
    1406: `717`,
    1407: `717`,
    1408: `719`,
    1409: `719`,
    141: `21`,
    1410: `720`,
    1411: `721`,
    1412: `721`,
    1413: `722`,
    1414: `723`,
    1415: `724`,
    1416: `724`,
    1417: `725`,
    1418: `727`,
    1419: `728`,
    142: `21`,
    1420: `728`,
    1421: `730`,
    1422: `730`,
    1423: `731`,
    1424: `731`,
    1425: `731`,
    1426: `732`,
    1427: `732`,
    1428: `732`,
    1429: `733`,
    143: `21`,
    1430: `734`,
    1431: `734`,
    1432: `735`,
    1433: `735`,
    1434: `735`,
    1435: `735`,
    1436: `735`,
    1437: `735`,
    1438: `735`,
    1439: `735`,
    144: `21`,
    1440: `735`,
    1441: `735`,
    1442: `736`,
    1443: `736`,
    1444: `737`,
    1445: `738`,
    1446: `739`,
    1447: `739`,
    1448: `740`,
    1449: `740`,
    145: `21`,
    1450: `741`,
    1451: `741`,
    1452: `742`,
    1453: `742`,
    1454: `743`,
    1455: `743`,
    1456: `744`,
    1457: `745`,
    1458: `745`,
    1459: `746`,
    146: `21`,
    1460: `747`,
    1461: `747`,
    1462: `748`,
    1463: `748`,
    1464: `749`,
    1465: `749`,
    1466: `749`,
    1467: `751`,
    1468: `752`,
    1469: `753`,
    147: `21`,
    1470: `754`,
    1471: `754`,
    1472: `755`,
    1473: `755`,
    1474: `756`,
    1475: `757`,
    1476: `758`,
    1477: `758`,
    1478: `759`,
    1479: `760`,
    148: `21`,
    1480: `761`,
    1481: `762`,
    1482: `762`,
    1483: `764`,
    1484: `765`,
    1485: `765`,
    1486: `766`,
    1487: `767`,
    1488: `768`,
    1489: `768`,
    149: `21`,
    1490: `768`,
    1491: `769`,
    1492: `769`,
    1493: `770`,
    1494: `771`,
    1495: `772`,
    1496: `772`,
    1497: `773`,
    1498: `773`,
    1499: `774`,
    15: `2`,
    150: `21`,
    1500: `775`,
    1501: `775`,
    1502: `775`,
    1503: `776`,
    1504: `777`,
    1505: `777`,
    1506: `778`,
    1507: `778`,
    1508: `778`,
    1509: `778`,
    151: `21`,
    1510: `778`,
    1511: `778`,
    1512: `779`,
    1513: `779`,
    1514: `780`,
    1515: `781`,
    1516: `782`,
    1517: `782`,
    1518: `783`,
    1519: `784`,
    152: `21`,
    1520: `786`,
    1521: `786`,
    1522: `787`,
    1523: `787`,
    1524: `787`,
    1525: `788`,
    1526: `788`,
    1527: `789`,
    1528: `790`,
    1529: `791`,
    153: `21`,
    1530: `791`,
    1531: `791`,
    1532: `791`,
    1533: `791`,
    1534: `791`,
    1535: `791`,
    1536: `791`,
    1537: `791`,
    1538: `791`,
    1539: `791`,
    154: `21`,
    1540: `791`,
    1541: `791`,
    1542: `791`,
    1543: `791`,
    1544: `791`,
    1545: `791`,
    1546: `791`,
    1547: `791`,
    1548: `791`,
    1549: `791`,
    155: `21`,
    1550: `791`,
    1551: `791`,
    1552: `791`,
    1553: `792`,
    1554: `792`,
    1555: `792`,
    1556: `794`,
    1557: `794`,
    1558: `795`,
    1559: `796`,
    156: `21`,
    1560: `797`,
    1561: `800`,
    1562: `800`,
    1563: `800`,
    1564: `801`,
    1565: `801`,
    1566: `803`,
    1567: `804`,
    1568: `804`,
    1569: `805`,
    157: `21`,
    1570: `806`,
    1571: `806`,
    1572: `807`,
    1573: `808`,
    1574: `808`,
    1575: `808`,
    1576: `809`,
    1577: `809`,
    1578: `809`,
    1579: `810`,
    158: `21`,
    1580: `810`,
    1581: `812`,
    1582: `812`,
    1583: `813`,
    1584: `814`,
    1585: `815`,
    1586: `817`,
    1587: `817`,
    1588: `817`,
    1589: `819`,
    159: `21`,
    1590: `819`,
    1591: `820`,
    1592: `821`,
    1593: `822`,
    1594: `825`,
    1595: `825`,
    1596: `825`,
    1597: `826`,
    1598: `826`,
    1599: `827`,
    16: `2`,
    160: `21`,
    1600: `828`,
    1601: `829`,
    1602: `830`,
    1603: `831`,
    1604: `833`,
    1605: `834`,
    1606: `834`,
    1607: `835`,
    1608: `836`,
    1609: `837`,
    161: `21`,
    1610: `837`,
    1611: `838`,
    1612: `839`,
    1613: `839`,
    1614: `839`,
    1615: `840`,
    1616: `840`,
    1617: `840`,
    1618: `841`,
    1619: `841`,
    162: `21`,
    1620: `841`,
    1621: `842`,
    1622: `842`,
    1623: `843`,
    1624: `843`,
    1625: `843`,
    1626: `845`,
    1627: `845`,
    1628: `846`,
    1629: `847`,
    163: `21`,
    1630: `848`,
    1631: `851`,
    1632: `851`,
    1633: `851`,
    1634: `852`,
    1635: `854`,
    1636: `855`,
    1637: `856`,
    1638: `856`,
    1639: `857`,
    164: `21`,
    1640: `857`,
    1641: `858`,
    1642: `858`,
    1643: `859`,
    1644: `860`,
    1645: `861`,
    1646: `862`,
    1647: `862`,
    1648: `862`,
    1649: `863`,
    165: `21`,
    1650: `863`,
    1651: `863`,
    1652: `864`,
    1653: `864`,
    1654: `865`,
    1655: `865`,
    1656: `865`,
    1657: `867`,
    1658: `867`,
    1659: `868`,
    166: `21`,
    1660: `869`,
    1661: `870`,
    1662: `873`,
    1663: `873`,
    1664: `873`,
    1665: `874`,
    1666: `874`,
    1667: `875`,
    1668: `876`,
    1669: `877`,
    167: `21`,
    1670: `878`,
    1671: `879`,
    1672: `881`,
    1673: `882`,
    1674: `882`,
    1675: `883`,
    1676: `884`,
    1677: `885`,
    1678: `885`,
    1679: `886`,
    168: `21`,
    1680: `887`,
    1681: `887`,
    1682: `887`,
    1683: `888`,
    1684: `888`,
    1685: `888`,
    1686: `889`,
    1687: `889`,
    1688: `889`,
    1689: `890`,
    169: `21`,
    1690: `890`,
    1691: `891`,
    1692: `891`,
    1693: `891`,
    1694: `893`,
    1695: `894`,
    1696: `895`,
    1697: `895`,
    1698: `896`,
    1699: `896`,
    17: `2`,
    170: `21`,
    1700: `897`,
    1701: `897`,
    1702: `898`,
    1703: `899`,
    1704: `899`,
    1705: `899`,
    1706: `900`,
    1707: `901`,
    1708: `902`,
    1709: `902`,
    171: `21`,
    1710: `902`,
    1711: `903`,
    1712: `904`,
    1713: `905`,
    1714: `906`,
    1715: `906`,
    1716: `907`,
    1717: `907`,
    1718: `907`,
    1719: `909`,
    172: `21`,
    1720: `909`,
    1721: `910`,
    1722: `911`,
    1723: `912`,
    1724: `915`,
    1725: `915`,
    1726: `915`,
    1727: `916`,
    1728: `916`,
    1729: `917`,
    173: `21`,
    1730: `917`,
    1731: `918`,
    1732: `918`,
    1733: `918`,
    1734: `920`,
    1735: `920`,
    1736: `921`,
    1737: `922`,
    1738: `923`,
    1739: `926`,
    174: `21`,
    1740: `926`,
    1741: `926`,
    1742: `928`,
    1743: `929`,
    1744: `929`,
    1745: `930`,
    1746: `931`,
    1747: `932`,
    1748: `932`,
    1749: `933`,
    175: `21`,
    1750: `934`,
    1751: `934`,
    1752: `934`,
    1753: `935`,
    1754: `936`,
    1755: `936`,
    1756: `937`,
    1757: `938`,
    1758: `939`,
    1759: `939`,
    176: `21`,
    1760: `940`,
    1761: `941`,
    1762: `946`,
    1763: `946`,
    1764: `947`,
    1765: `948`,
    1766: `949`,
    1767: `950`,
    1768: `951`,
    1769: `952`,
    177: `21`,
    1770: `952`,
    1771: `953`,
    1772: `953`,
    1773: `953`,
    1774: `954`,
    1775: `954`,
    1776: `955`,
    1777: `956`,
    1778: `957`,
    1779: `957`,
    178: `21`,
    1780: `958`,
    1781: `958`,
    1782: `958`,
    1783: `960`,
    1784: `960`,
    1785: `961`,
    1786: `962`,
    1787: `963`,
    1788: `966`,
    1789: `966`,
    179: `21`,
    1790: `966`,
    1791: `967`,
    1792: `967`,
    1793: `968`,
    1794: `968`,
    1795: `968`,
    1796: `969`,
    1797: `969`,
    1798: `970`,
    1799: `970`,
    18: `2`,
    180: `21`,
    1800: `970`,
    1801: `972`,
    1802: `973`,
    1803: `974`,
    1804: `975`,
    1805: `975`,
    1806: `976`,
    1807: `976`,
    1808: `977`,
    1809: `978`,
    181: `21`,
    1810: `978`,
    1811: `979`,
    1812: `980`,
    1813: `981`,
    1814: `981`,
    1815: `981`,
    1816: `982`,
    1817: `983`,
    1818: `984`,
    1819: `985`,
    182: `21`,
    1820: `985`,
    1821: `986`,
    1822: `986`,
    1823: `986`,
    1824: `988`,
    1825: `989`,
    1826: `990`,
    1827: `990`,
    1828: `990`,
    1829: `991`,
    183: `21`,
    1830: `991`,
    1831: `992`,
    1832: `993`,
    1833: `994`,
    1834: `995`,
    1835: `996`,
    1836: `997`,
    1837: `997`,
    1838: `998`,
    1839: `998`,
    184: `21`,
    1840: `998`,
    1841: `1000`,
    1842: `1000`,
    1843: `1000`,
    1844: `1000`,
    1845: `1000`,
    1846: `1000`,
    1847: `1000`,
    1848: `1000`,
    1849: `1000`,
    185: `21`,
    1850: `1000`,
    1851: `1000`,
    1852: `1000`,
    1853: `1000`,
    1854: `1000`,
    1855: `1000`,
    1856: `1000`,
    1857: `1000`,
    1858: `1000`,
    1859: `1000`,
    186: `21`,
    1860: `1000`,
    1861: `1000`,
    1862: `1000`,
    1863: `1000`,
    1864: `1000`,
    1865: `1000`,
    1866: `1000`,
    1867: `1000`,
    1868: `1000`,
    1869: `1000`,
    187: `21`,
    1870: `1000`,
    1871: `1000`,
    1872: `1000`,
    1873: `1000`,
    1874: `1000`,
    1875: `1000`,
    1876: `1000`,
    1877: `1000`,
    1878: `1000`,
    1879: `1000`,
    188: `21`,
    1880: `1000`,
    1881: `1000`,
    1882: `1000`,
    1883: `1000`,
    1884: `1000`,
    1885: `1000`,
    1886: `1000`,
    1887: `1000`,
    1888: `1000`,
    1889: `1000`,
    189: `21`,
    1890: `1000`,
    1891: `1000`,
    1892: `1000`,
    1893: `1000`,
    1894: `1000`,
    1895: `1000`,
    1896: `1000`,
    1897: `1000`,
    1898: `1000`,
    1899: `1000`,
    19: `2`,
    190: `21`,
    1900: `1000`,
    1901: `1000`,
    1902: `1000`,
    1903: `1000`,
    1904: `1000`,
    1905: `1000`,
    1906: `1000`,
    1907: `1000`,
    1908: `1000`,
    1909: `1000`,
    191: `21`,
    1910: `1000`,
    1911: `1000`,
    1912: `1000`,
    1913: `1000`,
    1914: `1000`,
    1915: `1000`,
    1916: `1000`,
    1917: `1000`,
    1918: `1000`,
    1919: `1000`,
    192: `21`,
    1920: `1000`,
    1921: `1000`,
    1922: `1000`,
    1923: `1000`,
    1924: `1000`,
    1925: `1000`,
    1926: `1000`,
    1927: `1000`,
    1928: `1000`,
    1929: `1000`,
    193: `21`,
    1930: `1000`,
    1931: `1000`,
    1932: `1000`,
    1933: `1000`,
    1934: `1000`,
    1935: `1000`,
    1936: `1000`,
    1937: `1000`,
    1938: `1000`,
    1939: `1000`,
    194: `21`,
    1940: `1000`,
    1941: `1000`,
    1942: `1000`,
    1943: `1000`,
    1944: `1000`,
    1945: `1000`,
    1946: `1000`,
    1947: `1000`,
    1948: `1000`,
    1949: `1000`,
    195: `21`,
    1950: `1000`,
    1951: `1000`,
    1952: `1000`,
    1953: `1000`,
    1954: `1000`,
    1955: `1000`,
    1956: `1000`,
    1957: `1000`,
    1958: `1000`,
    1959: `1000`,
    196: `21`,
    1960: `1000`,
    1961: `1000`,
    1962: `1000`,
    1963: `1000`,
    1964: `1000`,
    1965: `1000`,
    1966: `1000`,
    1967: `1000`,
    1968: `1000`,
    1969: `1000`,
    197: `21`,
    1970: `1000`,
    1971: `1000`,
    1972: `1000`,
    1973: `1000`,
    1974: `1000`,
    1975: `1000`,
    1976: `1000`,
    1977: `1000`,
    1978: `1000`,
    1979: `1000`,
    198: `21`,
    1980: `1000`,
    1981: `1000`,
    1982: `1000`,
    1983: `1000`,
    1984: `1000`,
    1985: `1000`,
    1986: `1000`,
    1987: `1000`,
    1988: `1000`,
    1989: `1000`,
    199: `21`,
    1990: `1000`,
    1991: `1000`,
    1992: `1000`,
    1993: `1000`,
    1994: `1000`,
    1995: `1000`,
    1996: `1000`,
    1997: `1000`,
    1998: `1000`,
    1999: `1000`,
    2: `2`,
    20: `2`,
    200: `21`,
    2000: `1000`,
    2001: `1000`,
    2002: `1000`,
    2003: `1000`,
    2004: `1000`,
    2005: `1000`,
    2006: `1000`,
    2007: `1000`,
    2008: `1000`,
    2009: `1000`,
    201: `21`,
    2010: `1000`,
    2011: `1000`,
    2012: `1000`,
    2013: `1000`,
    2014: `1000`,
    2015: `1000`,
    2016: `1000`,
    2017: `1000`,
    2018: `1000`,
    2019: `1000`,
    202: `21`,
    2020: `1000`,
    2021: `1000`,
    2022: `1000`,
    2023: `1000`,
    2024: `1000`,
    2025: `1000`,
    2026: `1000`,
    2027: `1000`,
    2028: `1000`,
    2029: `1000`,
    203: `21`,
    2030: `1000`,
    2031: `1000`,
    2032: `1000`,
    2033: `1000`,
    2034: `1000`,
    2035: `1000`,
    2036: `1000`,
    2037: `1000`,
    2038: `1000`,
    2039: `1000`,
    204: `21`,
    2040: `1000`,
    2041: `1000`,
    2042: `1000`,
    2043: `1000`,
    2044: `1000`,
    2045: `1000`,
    2046: `1000`,
    2047: `1000`,
    2048: `1000`,
    2049: `1000`,
    205: `21`,
    2050: `1000`,
    2051: `1000`,
    2052: `1000`,
    2053: `1000`,
    2054: `1000`,
    2055: `1000`,
    2056: `1000`,
    2057: `1000`,
    2058: `1000`,
    2059: `1000`,
    206: `21`,
    2060: `1000`,
    2061: `1000`,
    2062: `1000`,
    2063: `1000`,
    2064: `1000`,
    2065: `1000`,
    2066: `1000`,
    2067: `1000`,
    2068: `1000`,
    2069: `1000`,
    207: `21`,
    2070: `1000`,
    2071: `1000`,
    2072: `1000`,
    2073: `1000`,
    2074: `1000`,
    2075: `1000`,
    2076: `1000`,
    2077: `1000`,
    2078: `1000`,
    2079: `1000`,
    208: `21`,
    2080: `1000`,
    2081: `1000`,
    2082: `1000`,
    2083: `1000`,
    2084: `1000`,
    2085: `1000`,
    2086: `1000`,
    2087: `1000`,
    2088: `1000`,
    2089: `1000`,
    209: `21`,
    2090: `1000`,
    2091: `1000`,
    2092: `1000`,
    2093: `1000`,
    2094: `1000`,
    2095: `1000`,
    2096: `1000`,
    2097: `1000`,
    2098: `1000`,
    2099: `1000`,
    21: `2`,
    210: `21`,
    2100: `1000`,
    2101: `1000`,
    2102: `1000`,
    2103: `1000`,
    2104: `1000`,
    2105: `1000`,
    2106: `1000`,
    2107: `1000`,
    2108: `1000`,
    2109: `1000`,
    211: `21`,
    2110: `1000`,
    2111: `1000`,
    2112: `1000`,
    2113: `1000`,
    2114: `1000`,
    2115: `1000`,
    2116: `1000`,
    2117: `1000`,
    2118: `1000`,
    2119: `1000`,
    212: `21`,
    2120: `1000`,
    2121: `1000`,
    2122: `1000`,
    2123: `1000`,
    2124: `1000`,
    2125: `1000`,
    2126: `1000`,
    2127: `1000`,
    2128: `1000`,
    2129: `1000`,
    213: `21`,
    2130: `1000`,
    2131: `1000`,
    2132: `1000`,
    2133: `1000`,
    2134: `1000`,
    2135: `1000`,
    2136: `1000`,
    2137: `1000`,
    2138: `1000`,
    2139: `1000`,
    214: `21`,
    2140: `1000`,
    2141: `1001`,
    2142: `1001`,
    2143: `1002`,
    2144: `1002`,
    2145: `1002`,
    2146: `1004`,
    2147: `1005`,
    2148: `1006`,
    2149: `1006`,
    215: `21`,
    2150: `1006`,
    2151: `1007`,
    2152: `1007`,
    2153: `1008`,
    2154: `1009`,
    2155: `1010`,
    2156: `1011`,
    2157: `1012`,
    2158: `1013`,
    2159: `1013`,
    216: `21`,
    2160: `1014`,
    2161: `1014`,
    2162: `1014`,
    2163: `1016`,
    2164: `1017`,
    2165: `1018`,
    2166: `1018`,
    2167: `1018`,
    2168: `1019`,
    2169: `1019`,
    217: `21`,
    2170: `1020`,
    2171: `1021`,
    2172: `1022`,
    2173: `1023`,
    2174: `1024`,
    2175: `1025`,
    2176: `1025`,
    2177: `1026`,
    2178: `1026`,
    2179: `1026`,
    218: `22`,
    2180: `1028`,
    2181: `1029`,
    2182: `1030`,
    2183: `1030`,
    2184: `1030`,
    2185: `1031`,
    2186: `1031`,
    2187: `1032`,
    2188: `1032`,
    2189: `1033`,
    219: `22`,
    2190: `1034`,
    2191: `1035`,
    2192: `1035`,
    2193: `1036`,
    2194: `1037`,
    2195: `1038`,
    2196: `1039`,
    2197: `1039`,
    2198: `1040`,
    2199: `1040`,
    22: `2`,
    220: `22`,
    2200: `1040`,
    2201: `1042`,
    2202: `1043`,
    2203: `1044`,
    2204: `1044`,
    2205: `1044`,
    2206: `1045`,
    2207: `1045`,
    2208: `1046`,
    2209: `1047`,
    221: `23`,
    2210: `1048`,
    2211: `1049`,
    2212: `1050`,
    2213: `1051`,
    2214: `1051`,
    2215: `1052`,
    2216: `1052`,
    2217: `1052`,
    2218: `1054`,
    2219: `1054`,
    222: `23`,
    2220: `1055`,
    2221: `1056`,
    2222: `1057`,
    2223: `1060`,
    2224: `1060`,
    2225: `1060`,
    2226: `1061`,
    2227: `1061`,
    2228: `1062`,
    2229: `1062`,
    223: `23`,
    2230: `1062`,
    2231: `1063`,
    2232: `1063`,
    2233: `1064`,
    2234: `1064`,
    2235: `1064`,
    2236: `1066`,
    2237: `1067`,
    2238: `1068`,
    2239: `1068`,
    224: `23`,
    2240: `1068`,
    2241: `1069`,
    2242: `1069`,
    2243: `1070`,
    2244: `1070`,
    2245: `1071`,
    2246: `1072`,
    2247: `1073`,
    2248: `1074`,
    2249: `1074`,
    225: `23`,
    2250: `1075`,
    2251: `1075`,
    2252: `1075`,
    2253: `1077`,
    2254: `1077`,
    2255: `1078`,
    2256: `1079`,
    2257: `1080`,
    2258: `1083`,
    2259: `1083`,
    226: `23`,
    2260: `1083`,
    2261: `1084`,
    2262: `1084`,
    2263: `1085`,
    2264: `1085`,
    2265: `1085`,
    2266: `1086`,
    2267: `1086`,
    2268: `1087`,
    2269: `1087`,
    227: `23`,
    2270: `1087`,
    2271: `1088`,
    2272: `1089`,
    2273: `1089`,
    2274: `1090`,
    2275: `1090`,
    2276: `1090`,
    2277: `1091`,
    2278: `1092`,
    2279: `1092`,
    228: `23`,
    2280: `1093`,
    2281: `1093`,
    2282: `1093`,
    2283: `1095`,
    2284: `1095`,
    2285: `1096`,
    2286: `1097`,
    2287: `1098`,
    2288: `1101`,
    2289: `1101`,
    229: `23`,
    2290: `1101`,
    2291: `1102`,
    2292: `1102`,
    2293: `1103`,
    2294: `1104`,
    2295: `1104`,
    2296: `1105`,
    2297: `1105`,
    2298: `1105`,
    2299: `1105`,
    23: `2`,
    230: `23`,
    2300: `1105`,
    2301: `1105`,
    2302: `1105`,
    2303: `1105`,
    2304: `1105`,
    2305: `1105`,
    2306: `1105`,
    2307: `1105`,
    2308: `1105`,
    2309: `1105`,
    231: `23`,
    2310: `1105`,
    2311: `1105`,
    2312: `1105`,
    2313: `1105`,
    2314: `1105`,
    2315: `1105`,
    2316: `1105`,
    2317: `1105`,
    2318: `1105`,
    2319: `1105`,
    232: `23`,
    2320: `1105`,
    2321: `1105`,
    2322: `1105`,
    2323: `1105`,
    2324: `1105`,
    2325: `1105`,
    2326: `1105`,
    2327: `1105`,
    2328: `1105`,
    2329: `1105`,
    233: `23`,
    2330: `1106`,
    2331: `1106`,
    2332: `1107`,
    2333: `1108`,
    2334: `1108`,
    2335: `1108`,
    2336: `1108`,
    2337: `1108`,
    2338: `1108`,
    2339: `1108`,
    234: `23`,
    2340: `1108`,
    2341: `1108`,
    2342: `1108`,
    2343: `1108`,
    2344: `1108`,
    2345: `1108`,
    2346: `1108`,
    2347: `1108`,
    2348: `1108`,
    2349: `1108`,
    235: `23`,
    2350: `1108`,
    2351: `1108`,
    2352: `1108`,
    2353: `1108`,
    2354: `1108`,
    2355: `1108`,
    2356: `1108`,
    2357: `1108`,
    2358: `1108`,
    2359: `1108`,
    236: `23`,
    2360: `1108`,
    2361: `1108`,
    2362: `1108`,
    2363: `1108`,
    2364: `1108`,
    2365: `1108`,
    2366: `1108`,
    2367: `1109`,
    2368: `1109`,
    2369: `1110`,
    237: `23`,
    2370: `1111`,
    2371: `1111`,
    2372: `1111`,
    2373: `1111`,
    2374: `1111`,
    2375: `1111`,
    2376: `1111`,
    2377: `1111`,
    2378: `1111`,
    2379: `1111`,
    238: `23`,
    2380: `1111`,
    2381: `1111`,
    2382: `1111`,
    2383: `1111`,
    2384: `1111`,
    2385: `1111`,
    2386: `1111`,
    2387: `1111`,
    2388: `1111`,
    2389: `1111`,
    239: `23`,
    2390: `1111`,
    2391: `1111`,
    2392: `1111`,
    2393: `1111`,
    2394: `1111`,
    2395: `1111`,
    2396: `1111`,
    2397: `1111`,
    2398: `1111`,
    2399: `1111`,
    24: `2`,
    240: `23`,
    2400: `1111`,
    2401: `1111`,
    2402: `1111`,
    2403: `1111`,
    2404: `1112`,
    2405: `1112`,
    2406: `1113`,
    2407: `1114`,
    2408: `1114`,
    2409: `1114`,
    241: `23`,
    2410: `1114`,
    2411: `1114`,
    2412: `1114`,
    2413: `1114`,
    2414: `1114`,
    2415: `1114`,
    2416: `1114`,
    2417: `1114`,
    2418: `1114`,
    2419: `1114`,
    242: `23`,
    2420: `1114`,
    2421: `1114`,
    2422: `1114`,
    2423: `1114`,
    2424: `1114`,
    2425: `1114`,
    2426: `1114`,
    2427: `1114`,
    2428: `1114`,
    2429: `1114`,
    243: `23`,
    2430: `1114`,
    2431: `1114`,
    2432: `1114`,
    2433: `1114`,
    2434: `1114`,
    2435: `1114`,
    2436: `1114`,
    2437: `1114`,
    2438: `1114`,
    2439: `1114`,
    244: `23`,
    2440: `1114`,
    2441: `1115`,
    2442: `1115`,
    2443: `1116`,
    2444: `1117`,
    2445: `1118`,
    2446: `1119`,
    2447: `1120`,
    2448: `1121`,
    2449: `1121`,
    245: `23`,
    2450: `1121`,
    2451: `1122`,
    2452: `1122`,
    2453: `1123`,
    2454: `1123`,
    2455: `1123`,
    2456: `1125`,
    2457: `1125`,
    2458: `1125`,
    2459: `1125`,
    246: `23`,
    2460: `1125`,
    2461: `1125`,
    2462: `1125`,
    2463: `1125`,
    2464: `1125`,
    2465: `1125`,
    2466: `1125`,
    2467: `1125`,
    2468: `1125`,
    2469: `1125`,
    247: `23`,
    2470: `1125`,
    2471: `1125`,
    2472: `1125`,
    2473: `1125`,
    2474: `1125`,
    2475: `1125`,
    2476: `1125`,
    2477: `1125`,
    2478: `1125`,
    2479: `1125`,
    248: `23`,
    2480: `1125`,
    2481: `1125`,
    2482: `1125`,
    2483: `1125`,
    2484: `1125`,
    2485: `1125`,
    2486: `1125`,
    2487: `1125`,
    2488: `1125`,
    2489: `1125`,
    249: `23`,
    2490: `1125`,
    2491: `1125`,
    2492: `1125`,
    2493: `1125`,
    2494: `1125`,
    2495: `1125`,
    2496: `1125`,
    2497: `1125`,
    2498: `1125`,
    2499: `1125`,
    25: `2`,
    250: `23`,
    2500: `1125`,
    2501: `1125`,
    2502: `1125`,
    2503: `1125`,
    2504: `1125`,
    2505: `1125`,
    2506: `1125`,
    2507: `1125`,
    2508: `1125`,
    2509: `1125`,
    251: `23`,
    2510: `1125`,
    2511: `1125`,
    2512: `1125`,
    2513: `1125`,
    2514: `1125`,
    2515: `1125`,
    2516: `1125`,
    2517: `1125`,
    2518: `1125`,
    2519: `1125`,
    252: `23`,
    2520: `1125`,
    2521: `1125`,
    2522: `1125`,
    2523: `1125`,
    2524: `1125`,
    2525: `1125`,
    2526: `1125`,
    2527: `1125`,
    2528: `1125`,
    2529: `1125`,
    253: `23`,
    2530: `1125`,
    2531: `1125`,
    2532: `1125`,
    2533: `1125`,
    2534: `1125`,
    2535: `1125`,
    2536: `1125`,
    2537: `1125`,
    2538: `1125`,
    2539: `1125`,
    254: `23`,
    2540: `1125`,
    2541: `1125`,
    2542: `1125`,
    2543: `1125`,
    2544: `1125`,
    2545: `1125`,
    2546: `1125`,
    2547: `1125`,
    2548: `1125`,
    2549: `1125`,
    255: `23`,
    2550: `1125`,
    2551: `1125`,
    2552: `1125`,
    2553: `1125`,
    2554: `1125`,
    2555: `1125`,
    2556: `1125`,
    2557: `1125`,
    2558: `1125`,
    2559: `1125`,
    256: `23`,
    2560: `1125`,
    2561: `1125`,
    2562: `1125`,
    2563: `1125`,
    2564: `1125`,
    2565: `1125`,
    2566: `1125`,
    2567: `1125`,
    2568: `1125`,
    2569: `1125`,
    257: `23`,
    2570: `1125`,
    2571: `1125`,
    2572: `1125`,
    2573: `1125`,
    2574: `1125`,
    2575: `1125`,
    2576: `1125`,
    2577: `1125`,
    2578: `1125`,
    2579: `1125`,
    258: `23`,
    2580: `1125`,
    2581: `1125`,
    2582: `1125`,
    2583: `1125`,
    2584: `1125`,
    2585: `1125`,
    2586: `1125`,
    2587: `1125`,
    2588: `1125`,
    2589: `1125`,
    259: `23`,
    2590: `1125`,
    2591: `1125`,
    2592: `1125`,
    2593: `1125`,
    2594: `1125`,
    2595: `1125`,
    2596: `1125`,
    2597: `1125`,
    2598: `1125`,
    2599: `1125`,
    26: `2`,
    260: `23`,
    2600: `1125`,
    2601: `1125`,
    2602: `1125`,
    2603: `1125`,
    2604: `1125`,
    2605: `1125`,
    2606: `1125`,
    2607: `1125`,
    2608: `1125`,
    2609: `1125`,
    261: `23`,
    2610: `1125`,
    2611: `1125`,
    2612: `1125`,
    2613: `1125`,
    2614: `1125`,
    2615: `1125`,
    2616: `1125`,
    2617: `1125`,
    2618: `1125`,
    2619: `1125`,
    262: `23`,
    2620: `1125`,
    2621: `1125`,
    2622: `1125`,
    2623: `1125`,
    2624: `1125`,
    2625: `1125`,
    2626: `1125`,
    2627: `1125`,
    2628: `1125`,
    2629: `1125`,
    263: `23`,
    2630: `1125`,
    2631: `1125`,
    2632: `1125`,
    2633: `1125`,
    2634: `1125`,
    2635: `1125`,
    2636: `1125`,
    2637: `1125`,
    2638: `1125`,
    2639: `1125`,
    264: `23`,
    2640: `1125`,
    2641: `1125`,
    2642: `1125`,
    2643: `1125`,
    2644: `1125`,
    2645: `1125`,
    2646: `1125`,
    2647: `1125`,
    2648: `1125`,
    2649: `1125`,
    265: `23`,
    2650: `1125`,
    2651: `1125`,
    2652: `1125`,
    2653: `1125`,
    2654: `1125`,
    2655: `1125`,
    2656: `1125`,
    2657: `1125`,
    2658: `1125`,
    2659: `1125`,
    266: `23`,
    2660: `1125`,
    2661: `1125`,
    2662: `1125`,
    2663: `1125`,
    2664: `1125`,
    2665: `1125`,
    2666: `1125`,
    2667: `1125`,
    2668: `1125`,
    2669: `1125`,
    267: `23`,
    2670: `1125`,
    2671: `1125`,
    2672: `1125`,
    2673: `1125`,
    2674: `1125`,
    2675: `1125`,
    2676: `1125`,
    2677: `1125`,
    2678: `1125`,
    2679: `1125`,
    268: `23`,
    2680: `1125`,
    2681: `1125`,
    2682: `1125`,
    2683: `1125`,
    2684: `1125`,
    2685: `1125`,
    2686: `1125`,
    2687: `1125`,
    2688: `1125`,
    2689: `1125`,
    269: `25`,
    2690: `1125`,
    2691: `1125`,
    2692: `1125`,
    2693: `1125`,
    2694: `1125`,
    2695: `1125`,
    2696: `1125`,
    2697: `1125`,
    2698: `1125`,
    2699: `1125`,
    27: `2`,
    270: `27`,
    2700: `1125`,
    2701: `1125`,
    2702: `1125`,
    2703: `1125`,
    2704: `1125`,
    2705: `1125`,
    2706: `1125`,
    2707: `1125`,
    2708: `1125`,
    2709: `1125`,
    271: `27`,
    2710: `1125`,
    2711: `1125`,
    2712: `1125`,
    2713: `1125`,
    2714: `1125`,
    2715: `1125`,
    2716: `1125`,
    2717: `1125`,
    2718: `1125`,
    2719: `1125`,
    272: `28`,
    2720: `1125`,
    2721: `1125`,
    2722: `1125`,
    2723: `1125`,
    2724: `1125`,
    2725: `1125`,
    2726: `1125`,
    2727: `1125`,
    2728: `1125`,
    2729: `1125`,
    273: `28`,
    2730: `1125`,
    2731: `1125`,
    2732: `1125`,
    2733: `1125`,
    2734: `1125`,
    2735: `1125`,
    2736: `1125`,
    2737: `1125`,
    2738: `1125`,
    2739: `1125`,
    274: `28`,
    2740: `1125`,
    2741: `1125`,
    2742: `1125`,
    2743: `1125`,
    2744: `1125`,
    2745: `1125`,
    2746: `1125`,
    2747: `1125`,
    2748: `1125`,
    2749: `1125`,
    275: `29`,
    2750: `1125`,
    2751: `1125`,
    2752: `1125`,
    2753: `1125`,
    2754: `1125`,
    2755: `1125`,
    2756: `1126`,
    2757: `1126`,
    2758: `1127`,
    2759: `1127`,
    276: `29`,
    2760: `1127`,
    2761: `1129`,
    2762: `1129`,
    2763: `1130`,
    2764: `1131`,
    2765: `1132`,
    2766: `1132`,
    2767: `1133`,
    2768: `1133`,
    2769: `1134`,
    277: `30`,
    2770: `1134`,
    2771: `1134`,
    2772: `1135`,
    2773: `1135`,
    2774: `1136`,
    2775: `1136`,
    2776: `1136`,
    2777: `1136`,
    2778: `1136`,
    2779: `1136`,
    278: `30`,
    2780: `1137`,
    2781: `1137`,
    2782: `1138`,
    2783: `1139`,
    2784: `1140`,
    2785: `1140`,
    2786: `1141`,
    2787: `1142`,
    2788: `1144`,
    2789: `1144`,
    279: `31`,
    2790: `1145`,
    2791: `1145`,
    2792: `1145`,
    2793: `1146`,
    2794: `1146`,
    2795: `1147`,
    2796: `1147`,
    2797: `1148`,
    2798: `1148`,
    2799: `1149`,
    28: `2`,
    280: `31`,
    2800: `1149`,
    2801: `1150`,
    2802: `1151`,
    2803: `1151`,
    2804: `1152`,
    2805: `1153`,
    2806: `1153`,
    2807: `1154`,
    2808: `1155`,
    2809: `1155`,
    281: `31`,
    2810: `1156`,
    2811: `1157`,
    2812: `1157`,
    2813: `1158`,
    2814: `1158`,
    2815: `1159`,
    2816: `1159`,
    2817: `1160`,
    2818: `1160`,
    2819: `1160`,
    282: `32`,
    2820: `1162`,
    2821: `1162`,
    2822: `1162`,
    2823: `1163`,
    2824: `1163`,
    2825: `1163`,
    2826: `1163`,
    2827: `1164`,
    2828: `1164`,
    2829: `1164`,
    283: `32`,
    2830: `1165`,
    2831: `1165`,
    2832: `1165`,
    2833: `1166`,
    2834: `1166`,
    2835: `1167`,
    2836: `1167`,
    2837: `1167`,
    2838: `1169`,
    2839: `1169`,
    284: `34`,
    2840: `1169`,
    2841: `1170`,
    2842: `1170`,
    2843: `1170`,
    2844: `1171`,
    2845: `1171`,
    2846: `1172`,
    2847: `1172`,
    2848: `1172`,
    2849: `1174`,
    285: `35`,
    2850: `1175`,
    2851: `1175`,
    2852: `1176`,
    2853: `1177`,
    2854: `1178`,
    2855: `1179`,
    2856: `1179`,
    2857: `1180`,
    2858: `1181`,
    2859: `1182`,
    286: `35`,
    2860: `1183`,
    2861: `1183`,
    2862: `1184`,
    2863: `1185`,
    2864: `1186`,
    2865: `1187`,
    2866: `1187`,
    2867: `1188`,
    2868: `1189`,
    2869: `1190`,
    287: `36`,
    2870: `1190`,
    2871: `1190`,
    2872: `1191`,
    2873: `1191`,
    2874: `1191`,
    2875: `1192`,
    2876: `1193`,
    2877: `1194`,
    2878: `1195`,
    2879: `1195`,
    288: `37`,
    2880: `1195`,
    2881: `1197`,
    2882: `1197`,
    2883: `1197`,
    2884: `1198`,
    2885: `1198`,
    2886: `1198`,
    2887: `1199`,
    2888: `1199`,
    2889: `1200`,
    289: `38`,
    2890: `1200`,
    2891: `1201`,
    2892: `1201`,
    2893: `1201`,
    2894: `1203`,
    2895: `1203`,
    2896: `1203`,
    2897: `1204`,
    2898: `1204`,
    2899: `1205`,
    29: `2`,
    290: `38`,
    2900: `1205`,
    2901: `1205`,
    2902: `1207`,
    2903: `1207`,
    2904: `1207`,
    2905: `1208`,
    2906: `1208`,
    2907: `1209`,
    2908: `1209`,
    2909: `1209`,
    291: `39`,
    2910: `1211`,
    2911: `1211`,
    2912: `1211`,
    2913: `1212`,
    2914: `1212`,
    2915: `1212`,
    2916: `1213`,
    2917: `1213`,
    2918: `1214`,
    2919: `1214`,
    292: `40`,
    2920: `1215`,
    2921: `1215`,
    2922: `1215`,
    2923: `1217`,
    2924: `1217`,
    2925: `1217`,
    2926: `1218`,
    2927: `1218`,
    2928: `1219`,
    2929: `1219`,
    293: `40`,
    2930: `1219`,
    2931: `1221`,
    2932: `1221`,
    2933: `1221`,
    2934: `1222`,
    2935: `1222`,
    2936: `1222`,
    2937: `1223`,
    2938: `1224`,
    2939: `1224`,
    294: `40`,
    2940: `1225`,
    2941: `1225`,
    2942: `1226`,
    2943: `1226`,
    2944: `1226`,
    2945: `1228`,
    2946: `1228`,
    2947: `1228`,
    2948: `1229`,
    2949: `1229`,
    295: `41`,
    2950: `1230`,
    2951: `1230`,
    2952: `1230`,
    2953: `1232`,
    2954: `1232`,
    2955: `1232`,
    2956: `1233`,
    2957: `1233`,
    2958: `1234`,
    2959: `1234`,
    296: `42`,
    2960: `1234`,
    2961: `1236`,
    2962: `1236`,
    2963: `1236`,
    2964: `1238`,
    2965: `1238`,
    2966: `1238`,
    2967: `1239`,
    2968: `1239`,
    2969: `1239`,
    297: `42`,
    2970: `1240`,
    2971: `1240`,
    2972: `1240`,
    2973: `1241`,
    2974: `1241`,
    2975: `1242`,
    2976: `1242`,
    2977: `1243`,
    2978: `1243`,
    2979: `1244`,
    298: `43`,
    2980: `1244`,
    2981: `1244`,
    2982: `1246`,
    2983: `1246`,
    2984: `1246`,
    2985: `1247`,
    2986: `1247`,
    2987: `1248`,
    2988: `1248`,
    2989: `1248`,
    299: `44`,
    2990: `1250`,
    2991: `1250`,
    2992: `1250`,
    2993: `1252`,
    2994: `1252`,
    2995: `1252`,
    2996: `1253`,
    2997: `1253`,
    2998: `1254`,
    2999: `1254`,
    3: `2`,
    30: `2`,
    300: `45`,
    3000: `1254`,
    3001: `1256`,
    3002: `1256`,
    3003: `1256`,
    3004: `1257`,
    3005: `1257`,
    3006: `1258`,
    3007: `1258`,
    3008: `1258`,
    3009: `1260`,
    301: `45`,
    3010: `1260`,
    3011: `1260`,
    3012: `1261`,
    3013: `1261`,
    3014: `1261`,
    3015: `1262`,
    3016: `1262`,
    3017: `1263`,
    3018: `1263`,
    3019: `1264`,
    302: `46`,
    3020: `1264`,
    3021: `1264`,
    3022: `1266`,
    3023: `1266`,
    3024: `1266`,
    3025: `1267`,
    3026: `1267`,
    3027: `1268`,
    3028: `1268`,
    3029: `1268`,
    303: `47`,
    3030: `1270`,
    3031: `1270`,
    3032: `1270`,
    3033: `1272`,
    3034: `1272`,
    3035: `1272`,
    3036: `1274`,
    3037: `1274`,
    3038: `1274`,
    3039: `1276`,
    304: `52`,
    3040: `1276`,
    3041: `1277`,
    3042: `1277`,
    3043: `1277`,
    3044: `1278`,
    3045: `1278`,
    3046: `1279`,
    3047: `1279`,
    3048: `1279`,
    3049: `1281`,
    305: `52`,
    3050: `1281`,
    3051: `1281`,
    3052: `1283`,
    3053: `1283`,
    3054: `1284`,
    3055: `1284`,
    3056: `1285`,
    3057: `1285`,
    3058: `1285`,
    3059: `1286`,
    306: `53`,
    3060: `1287`,
    3061: `1287`,
    3062: `1288`,
    3063: `1288`,
    3064: `1288`,
    3065: `1290`,
    3066: `1290`,
    3067: `1290`,
    3068: `1292`,
    3069: `1293`,
    307: `54`,
    3070: `1294`,
    3071: `1295`,
    3072: `1296`,
    3073: `1298`,
    3074: `1299`,
    3075: `1299`,
    3076: `1300`,
    3077: `1300`,
    3078: `1301`,
    3079: `1301`,
    308: `55`,
    3080: `1302`,
    3081: `1302`,
    3082: `1303`,
    3083: `1303`,
    3084: `1304`,
    3085: `1305`,
    3086: `1307`,
    3087: `1307`,
    3088: `1308`,
    3089: `1308`,
    309: `56`,
    3090: `1308`,
    3091: `1309`,
    3092: `1309`,
    3093: `1310`,
    3094: `1310`,
    3095: `1310`,
    3096: `1312`,
    3097: `1312`,
    3098: `1313`,
    3099: `1313`,
    31: `2`,
    310: `57`,
    3100: `1313`,
    3101: `1314`,
    3102: `1314`,
    3103: `1315`,
    3104: `1315`,
    3105: `1315`,
    3106: `1317`,
    3107: `1317`,
    3108: `1318`,
    3109: `1318`,
    311: `58`,
    3110: `1318`,
    3111: `1319`,
    3112: `1319`,
    3113: `1320`,
    3114: `1320`,
    3115: `1320`,
    3116: `1322`,
    3117: `1322`,
    3118: `1322`,
    3119: `1324`,
    312: `58`,
    3120: `1324`,
    3121: `1324`,
    3122: `1326`,
    3123: `1326`,
    3124: `1326`,
    3125: `1327`,
    3126: `1327`,
    3127: `1327`,
    3128: `1328`,
    3129: `1328`,
    313: `59`,
    3130: `1329`,
    3131: `1329`,
    3132: `1330`,
    3133: `1330`,
    3134: `1330`,
    3135: `1332`,
    3136: `1332`,
    3137: `1332`,
    3138: `1334`,
    3139: `1334`,
    314: `59`,
    3140: `1334`,
    3141: `1335`,
    3142: `1335`,
    3143: `1336`,
    3144: `1336`,
    3145: `1336`,
    3146: `1338`,
    3147: `1338`,
    3148: `1338`,
    3149: `1340`,
    315: `59`,
    3150: `1341`,
    3151: `1343`,
    3152: `1344`,
    3153: `1345`,
    3154: `1346`,
    3155: `1346`,
    3156: `1347`,
    3157: `1347`,
    3158: `1348`,
    3159: `1348`,
    316: `60`,
    3160: `1348`,
    3161: `1349`,
    3162: `1351`,
    3163: `1352`,
    3164: `1353`,
    3165: `1353`,
    3166: `1353`,
    3167: `1354`,
    3168: `1355`,
    3169: `1355`,
    317: `61`,
    3170: `1358`,
    3171: `1358`,
    3172: `1359`,
    3173: `1359`,
    3174: `1360`,
    3175: `1360`,
    3176: `1361`,
    3177: `1362`,
    3178: `1363`,
    3179: `1363`,
    318: `61`,
    3180: `1364`,
    3181: `1365`,
    3182: `1365`,
    3183: `1366`,
    3184: `1366`,
    3185: `1367`,
    3186: `1367`,
    3187: `1368`,
    3188: `1369`,
    3189: `1370`,
    319: `62`,
    3190: `1370`,
    3191: `1371`,
    3192: `1371`,
    3193: `1372`,
    3194: `1373`,
    3195: `1374`,
    3196: `1374`,
    3197: `1375`,
    3198: `1376`,
    3199: `1377`,
    32: `2`,
    320: `62`,
    3200: `1379`,
    3201: `1379`,
    3202: `1380`,
    3203: `1380`,
    3204: `1381`,
    3205: `1382`,
    3206: `1384`,
    3207: `1384`,
    3208: `1384`,
    3209: `1386`,
    321: `62`,
    3210: `1387`,
    3211: `1387`,
    3212: `1388`,
    3213: `1388`,
    3214: `1389`,
    3215: `1389`,
    3216: `1389`,
    3217: `1390`,
    3218: `1390`,
    3219: `1390`,
    322: `63`,
    3220: `1392`,
    3221: `1393`,
    3222: `1393`,
    3223: `1393`,
    3224: `1394`,
    3225: `1395`,
    3226: `1396`,
    3227: `1397`,
    3228: `1398`,
    3229: `1400`,
    323: `63`,
    3230: `1401`,
    3231: `1402`,
    3232: `1403`,
    3233: `1403`,
    3234: `1403`,
    3235: `1404`,
    3236: `1404`,
    3237: `1405`,
    3238: `1406`,
    3239: `1407`,
    324: `64`,
    3240: `1409`,
    3241: `1410`,
    3242: `1410`,
    3243: `1410`,
    3244: `1411`,
    3245: `1411`,
    3246: `1412`,
    3247: `1413`,
    3248: `1413`,
    3249: `1413`,
    325: `65`,
    3250: `1414`,
    3251: `1414`,
    3252: `1415`,
    3253: `1415`,
    3254: `1415`,
    3255: `1416`,
    3256: `1417`,
    3257: `1417`,
    3258: `1418`,
    3259: `1420`,
    326: `70`,
    3260: `1421`,
    3261: `1422`,
    3262: `1423`,
    3263: `1423`,
    3264: `1423`,
    3265: `1424`,
    3266: `1424`,
    3267: `1425`,
    3268: `1425`,
    3269: `1425`,
    327: `70`,
    3270: `1426`,
    3271: `1426`,
    3272: `1426`,
    3273: `1428`,
    3274: `1429`,
    3275: `1430`,
    3276: `1430`,
    3277: `1431`,
    3278: `1432`,
    3279: `1433`,
    328: `71`,
    3280: `1434`,
    3281: `1435`,
    3282: `1436`,
    3283: `1438`,
    3284: `1439`,
    3285: `1440`,
    3286: `1440`,
    3287: `1441`,
    3288: `1443`,
    3289: `1443`,
    329: `72`,
    3290: `1444`,
    3291: `1445`,
    3292: `1445`,
    3293: `1446`,
    3294: `1448`,
    3295: `1448`,
    3296: `1449`,
    3297: `1449`,
    3298: `1450`,
    3299: `1452`,
    33: `2`,
    330: `72`,
    3300: `1453`,
    3301: `1454`,
    3302: `1455`,
    3303: `1456`,
    3304: `1456`,
    3305: `1457`,
    3306: `1458`,
    3307: `1459`,
    3308: `1460`,
    3309: `1462`,
    331: `73`,
    3310: `1462`,
    3311: `1463`,
    3312: `1463`,
    3313: `1464`,
    3314: `1465`,
    3315: `1466`,
    3316: `1466`,
    3317: `1466`,
    3318: `1467`,
    3319: `1467`,
    332: `74`,
    3320: `1467`,
    3321: `1469`,
    3322: `1470`,
    3323: `1470`,
    3324: `1470`,
    3325: `1472`,
    3326: `1472`,
    3327: `1473`,
    3328: `1474`,
    3329: `1474`,
    333: `74`,
    3330: `1475`,
    3331: `1477`,
    3332: `1478`,
    3333: `1478`,
    3334: `1479`,
    334: `75`,
    335: `75`,
    336: `76`,
    337: `77`,
    338: `77`,
    339: `78`,
    34: `2`,
    340: `78`,
    341: `79`,
    342: `80`,
    343: `81`,
    344: `82`,
    345: `82`,
    346: `82`,
    347: `83`,
    348: `83`,
    349: `83`,
    35: `2`,
    350: `83`,
    351: `83`,
    352: `83`,
    353: `84`,
    354: `84`,
    355: `85`,
    356: `86`,
    357: `86`,
    358: `87`,
    359: `88`,
    36: `2`,
    360: `88`,
    361: `89`,
    362: `90`,
    363: `92`,
    364: `93`,
    365: `93`,
    366: `94`,
    367: `94`,
    368: `94`,
    369: `94`,
    37: `2`,
    370: `94`,
    371: `94`,
    372: `94`,
    373: `94`,
    374: `94`,
    375: `94`,
    376: `95`,
    377: `95`,
    378: `96`,
    379: `97`,
    38: `2`,
    380: `98`,
    381: `98`,
    382: `99`,
    383: `99`,
    384: `100`,
    385: `100`,
    386: `101`,
    387: `101`,
    388: `104`,
    389: `104`,
    39: `2`,
    390: `105`,
    391: `105`,
    392: `106`,
    393: `107`,
    394: `107`,
    395: `108`,
    396: `109`,
    397: `110`,
    398: `111`,
    399: `111`,
    4: `2`,
    40: `2`,
    400: `113`,
    401: `113`,
    402: `114`,
    403: `114`,
    404: `115`,
    405: `116`,
    406: `116`,
    407: `117`,
    408: `117`,
    409: `117`,
    41: `2`,
    410: `118`,
    411: `119`,
    412: `119`,
    413: `120`,
    414: `121`,
    415: `121`,
    416: `121`,
    417: `122`,
    418: `123`,
    419: `124`,
    42: `2`,
    420: `124`,
    421: `125`,
    422: `126`,
    423: `126`,
    424: `127`,
    425: `128`,
    426: `129`,
    427: `130`,
    428: `130`,
    429: `131`,
    43: `2`,
    430: `132`,
    431: `133`,
    432: `135`,
    433: `135`,
    434: `135`,
    435: `137`,
    436: `137`,
    437: `138`,
    438: `138`,
    439: `138`,
    44: `2`,
    440: `140`,
    441: `140`,
    442: `140`,
    443: `140`,
    444: `140`,
    445: `140`,
    446: `141`,
    447: `141`,
    448: `142`,
    449: `143`,
    45: `2`,
    450: `145`,
    451: `145`,
    452: `146`,
    453: `148`,
    454: `148`,
    455: `149`,
    456: `149`,
    457: `149`,
    458: `150`,
    459: `150`,
    46: `2`,
    460: `151`,
    461: `151`,
    462: `152`,
    463: `152`,
    464: `152`,
    465: `153`,
    466: `154`,
    467: `154`,
    468: `156`,
    469: `156`,
    47: `2`,
    470: `157`,
    471: `157`,
    472: `158`,
    473: `158`,
    474: `159`,
    475: `159`,
    476: `160`,
    477: `161`,
    478: `162`,
    479: `163`,
    48: `2`,
    480: `163`,
    481: `164`,
    482: `165`,
    483: `165`,
    484: `165`,
    485: `166`,
    486: `166`,
    487: `166`,
    488: `167`,
    489: `167`,
    49: `2`,
    490: `167`,
    491: `167`,
    492: `167`,
    493: `167`,
    494: `168`,
    495: `168`,
    496: `169`,
    497: `170`,
    498: `170`,
    499: `171`,
    5: `2`,
    50: `2`,
    500: `172`,
    501: `172`,
    502: `173`,
    503: `174`,
    504: `174`,
    505: `174`,
    506: `175`,
    507: `176`,
    508: `178`,
    509: `179`,
    51: `2`,
    510: `179`,
    511: `180`,
    512: `180`,
    513: `180`,
    514: `180`,
    515: `180`,
    516: `180`,
    517: `180`,
    518: `180`,
    519: `180`,
    52: `2`,
    520: `180`,
    521: `181`,
    522: `181`,
    523: `182`,
    524: `183`,
    525: `184`,
    526: `184`,
    527: `185`,
    528: `185`,
    529: `186`,
    53: `2`,
    530: `186`,
    531: `187`,
    532: `187`,
    533: `188`,
    534: `188`,
    535: `188`,
    536: `190`,
    537: `190`,
    538: `191`,
    539: `191`,
    54: `2`,
    540: `191`,
    541: `192`,
    542: `192`,
    543: `193`,
    544: `193`,
    545: `194`,
    546: `194`,
    547: `194`,
    548: `195`,
    549: `195`,
    55: `2`,
    550: `196`,
    551: `196`,
    552: `197`,
    553: `197`,
    554: `197`,
    555: `198`,
    556: `198`,
    557: `200`,
    558: `201`,
    559: `201`,
    56: `2`,
    560: `202`,
    561: `203`,
    562: `204`,
    563: `204`,
    564: `205`,
    565: `206`,
    566: `206`,
    567: `206`,
    568: `207`,
    569: `208`,
    57: `2`,
    570: `208`,
    571: `209`,
    572: `210`,
    573: `211`,
    574: `211`,
    575: `212`,
    576: `213`,
    577: `218`,
    578: `218`,
    579: `219`,
    58: `2`,
    580: `220`,
    581: `221`,
    582: `222`,
    583: `223`,
    584: `224`,
    585: `224`,
    586: `225`,
    587: `225`,
    588: `225`,
    589: `226`,
    59: `2`,
    590: `227`,
    591: `227`,
    592: `228`,
    593: `228`,
    594: `228`,
    595: `229`,
    596: `229`,
    597: `230`,
    598: `230`,
    599: `231`,
    6: `2`,
    60: `2`,
    600: `231`,
    601: `232`,
    602: `233`,
    603: `238`,
    604: `240`,
    605: `241`,
    606: `242`,
    607: `242`,
    608: `243`,
    609: `243`,
    61: `2`,
    610: `244`,
    611: `244`,
    612: `245`,
    613: `246`,
    614: `247`,
    615: `248`,
    616: `248`,
    617: `248`,
    618: `249`,
    619: `249`,
    62: `2`,
    620: `249`,
    621: `250`,
    622: `251`,
    623: `251`,
    624: `252`,
    625: `252`,
    626: `253`,
    627: `253`,
    628: `253`,
    629: `254`,
    63: `2`,
    630: `255`,
    631: `255`,
    632: `256`,
    633: `256`,
    634: `257`,
    635: `258`,
    636: `258`,
    637: `259`,
    638: `259`,
    639: `260`,
    64: `2`,
    640: `260`,
    641: `261`,
    642: `262`,
    643: `262`,
    644: `263`,
    645: `263`,
    646: `264`,
    647: `265`,
    648: `266`,
    649: `271`,
    65: `2`,
    650: `271`,
    651: `272`,
    652: `272`,
    653: `273`,
    654: `274`,
    655: `279`,
    656: `279`,
    657: `280`,
    658: `280`,
    659: `281`,
    66: `2`,
    660: `282`,
    661: `287`,
    662: `287`,
    663: `288`,
    664: `288`,
    665: `289`,
    666: `290`,
    667: `295`,
    668: `295`,
    669: `296`,
    67: `2`,
    670: `296`,
    671: `297`,
    672: `298`,
    673: `303`,
    674: `303`,
    675: `304`,
    676: `304`,
    677: `305`,
    678: `306`,
    679: `306`,
    68: `2`,
    680: `307`,
    681: `308`,
    682: `308`,
    683: `309`,
    684: `310`,
    685: `315`,
    686: `315`,
    687: `316`,
    688: `317`,
    689: `317`,
    69: `2`,
    690: `318`,
    691: `319`,
    692: `319`,
    693: `320`,
    694: `320`,
    695: `321`,
    696: `322`,
    697: `322`,
    698: `323`,
    699: `323`,
    7: `2`,
    70: `2`,
    700: `324`,
    701: `325`,
    702: `326`,
    703: `327`,
    704: `327`,
    705: `327`,
    706: `329`,
    707: `329`,
    708: `330`,
    709: `331`,
    71: `2`,
    710: `331`,
    711: `332`,
    712: `333`,
    713: `333`,
    714: `334`,
    715: `335`,
    716: `335`,
    717: `336`,
    718: `337`,
    719: `337`,
    72: `2`,
    720: `338`,
    721: `339`,
    722: `339`,
    723: `339`,
    724: `340`,
    725: `340`,
    726: `340`,
    727: `341`,
    728: `342`,
    729: `343`,
    73: `2`,
    730: `343`,
    731: `343`,
    732: `344`,
    733: `344`,
    734: `344`,
    735: `346`,
    736: `346`,
    737: `347`,
    738: `348`,
    739: `348`,
    74: `2`,
    740: `349`,
    741: `350`,
    742: `350`,
    743: `351`,
    744: `352`,
    745: `352`,
    746: `353`,
    747: `354`,
    748: `354`,
    749: `355`,
    75: `2`,
    750: `356`,
    751: `356`,
    752: `356`,
    753: `357`,
    754: `357`,
    755: `357`,
    756: `358`,
    757: `359`,
    758: `360`,
    759: `360`,
    76: `2`,
    760: `360`,
    761: `361`,
    762: `361`,
    763: `361`,
    764: `362`,
    765: `362`,
    766: `363`,
    767: `363`,
    768: `364`,
    769: `365`,
    77: `2`,
    770: `365`,
    771: `366`,
    772: `367`,
    773: `367`,
    774: `368`,
    775: `369`,
    776: `371`,
    777: `372`,
    778: `372`,
    779: `373`,
    78: `2`,
    780: `373`,
    781: `373`,
    782: `373`,
    783: `373`,
    784: `373`,
    785: `373`,
    786: `373`,
    787: `373`,
    788: `373`,
    789: `374`,
    79: `4`,
    790: `374`,
    791: `375`,
    792: `376`,
    793: `377`,
    794: `377`,
    795: `378`,
    796: `378`,
    797: `379`,
    798: `379`,
    799: `380`,
    8: `2`,
    80: `4`,
    800: `380`,
    801: `381`,
    802: `381`,
    803: `381`,
    804: `383`,
    805: `383`,
    806: `384`,
    807: `384`,
    808: `384`,
    809: `385`,
    81: `5`,
    810: `385`,
    811: `386`,
    812: `386`,
    813: `387`,
    814: `388`,
    815: `389`,
    816: `390`,
    817: `391`,
    818: `393`,
    819: `394`,
    82: `5`,
    820: `394`,
    821: `395`,
    822: `396`,
    823: `397`,
    824: `397`,
    825: `398`,
    826: `399`,
    827: `399`,
    828: `399`,
    829: `400`,
    83: `5`,
    830: `400`,
    831: `400`,
    832: `401`,
    833: `401`,
    834: `401`,
    835: `402`,
    836: `402`,
    837: `403`,
    838: `404`,
    839: `409`,
    84: `6`,
    840: `409`,
    841: `410`,
    842: `411`,
    843: `411`,
    844: `412`,
    845: `413`,
    846: `413`,
    847: `413`,
    848: `415`,
    849: `415`,
    85: `7`,
    850: `416`,
    851: `417`,
    852: `417`,
    853: `418`,
    854: `419`,
    855: `419`,
    856: `420`,
    857: `421`,
    858: `421`,
    859: `422`,
    86: `8`,
    860: `423`,
    861: `423`,
    862: `424`,
    863: `425`,
    864: `425`,
    865: `425`,
    866: `426`,
    867: `426`,
    868: `426`,
    869: `427`,
    87: `9`,
    870: `428`,
    871: `429`,
    872: `429`,
    873: `429`,
    874: `430`,
    875: `430`,
    876: `430`,
    877: `431`,
    878: `431`,
    879: `432`,
    88: `10`,
    880: `432`,
    881: `433`,
    882: `434`,
    883: `434`,
    884: `435`,
    885: `436`,
    886: `436`,
    887: `437`,
    888: `438`,
    889: `440`,
    89: `11`,
    890: `441`,
    891: `441`,
    892: `442`,
    893: `442`,
    894: `442`,
    895: `442`,
    896: `442`,
    897: `442`,
    898: `442`,
    899: `442`,
    9: `2`,
    90: `11`,
    900: `442`,
    901: `442`,
    902: `443`,
    903: `443`,
    904: `444`,
    905: `445`,
    906: `446`,
    907: `446`,
    908: `447`,
    909: `447`,
    91: `12`,
    910: `448`,
    911: `448`,
    912: `449`,
    913: `449`,
    914: `449`,
    915: `450`,
    916: `450`,
    917: `451`,
    918: `451`,
    919: `451`,
    92: `13`,
    920: `452`,
    921: `453`,
    922: `453`,
    923: `454`,
    924: `454`,
    925: `454`,
    926: `455`,
    927: `456`,
    928: `457`,
    929: `457`,
    93: `14`,
    930: `457`,
    931: `458`,
    932: `459`,
    933: `459`,
    934: `460`,
    935: `460`,
    936: `460`,
    937: `461`,
    938: `462`,
    939: `462`,
    94: `14`,
    940: `463`,
    941: `463`,
    942: `464`,
    943: `464`,
    944: `465`,
    945: `465`,
    946: `465`,
    947: `467`,
    948: `467`,
    949: `468`,
    95: `15`,
    950: `468`,
    951: `469`,
    952: `469`,
    953: `469`,
    954: `470`,
    955: `471`,
    956: `476`,
    957: `477`,
    958: `477`,
    959: `478`,
    96: `16`,
    960: `478`,
    961: `478`,
    962: `478`,
    963: `478`,
    964: `478`,
    965: `478`,
    966: `478`,
    967: `478`,
    968: `478`,
    969: `479`,
    97: `17`,
    970: `479`,
    971: `480`,
    972: `481`,
    973: `482`,
    974: `482`,
    975: `483`,
    976: `483`,
    977: `484`,
    978: `484`,
    979: `485`,
    98: `17`,
    980: `485`,
    981: `486`,
    982: `486`,
    983: `486`,
    984: `488`,
    985: `488`,
    986: `489`,
    987: `489`,
    988: `489`,
    989: `490`,
    99: `18`,
    990: `490`,
    991: `491`,
    992: `491`,
    993: `492`,
    994: `492`,
    995: `493`,
    996: `493`,
    997: `493`,
    998: `494`,
    999: `495`
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
    at: './impl/arc72d/ARC72_Dynamic.rsh:410:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './impl/arc72d/ARC72_Dynamic.rsh:176:29:after expr stmt semicolon',
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
  "deleteHolderDataBox": deleteHolderDataBox,
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
  deleteHolderDataBox: deleteHolderDataBox,
  deleteNftDataBox: deleteNftDataBox,
  deleteOperatorDataBox: deleteOperatorDataBox,
  grant: grant,
  mintTo: mintTo,
  touch: touch
  };
