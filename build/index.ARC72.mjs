// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    BOX_INDEX_NFT_DATA: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:15:35:decimal', stdlib.UInt_max, '0');})(),
    BOX_INDEX_OPERATOR_DATA: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:16:40:decimal', stdlib.UInt_max, '1');})()
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Object({
    manager: ctc0,
    metadataUriBase: ctc1,
    nMinted: ctc2,
    totalSupply: ctc2,
    zeroAddress: ctc0
    });
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Struct([['owner', ctc0], ['approved', ctc0]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc9 = stdlib.T_Struct([['manager', ctc0], ['nMinted', ctc2], ['totalSupply', ctc2]]);
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc5
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc6
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc13;
  
  
  const _arc72_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2705 ) => {
          const v2705 = stdlib.protect(ctc0, _v2705, null);
        
        
        return stdlib.checkedBigNumberify('./index.rsh:221:44:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_getApproved = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2694 ) => {
          const v2694 = stdlib.protect(ctc2, _v2694, null);
        
        const v2695 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v2694, ctc5), null);
        const v2696 = {
          approved: v2604,
          owner: v2604
          };
        const v2697 = stdlib.fromSome(v2695, v2696);
        const v2698 = v2697.approved;
        
        return v2698;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_isApprovedForAll = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2699, _v2700 ) => {
          const v2699 = stdlib.protect(ctc0, _v2699, null);
          const v2700 = stdlib.protect(ctc0, _v2700, null);
        
        const v2701 = [v2699, v2700];
        const v2702 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v2701, ctc6), null);
        const v2703 = stdlib.fromSome(v2702, false);
        
        return v2703;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_ownerOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2618 ) => {
          const v2618 = stdlib.protect(ctc2, _v2618, null);
        
        const v2619 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v2618, ctc5), null);
        const v2620 = {
          approved: v2604,
          owner: v2604
          };
        const v2621 = stdlib.fromSome(v2619, v2620);
        const v2622 = v2621.owner;
        
        return v2622;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenByIndex = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2706 ) => {
          const v2706 = stdlib.protect(ctc2, _v2706, null);
        
        
        return stdlib.checkedBigNumberify('./index.rsh:222:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenURI = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2623 ) => {
          const v2623 = stdlib.protect(ctc2, _v2623, null);
        
        const v2624 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v2623, ctc5), null);
        const v2625 = {
          None: 0,
          Some: 1
          }[v2624[0]];
        const v2626 = stdlib.eq(v2625, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2626, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:183:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:217:27:application call to "tokenURI" (defined at: ./index.rsh:217:27:application)'],
          msg: 'nft must exist',
          who: 'Module'
          });
        const v2628 = stdlib.cast("UInt256", "UInt", v2623, true, true);
        const v2629 = stdlib.safeMod(v2628, stdlib.checkedBigNumberify('./index.rsh:197:43:decimal', stdlib.UInt_max, '10'));
        const v2630 = '0';
        const v2631 = '1';
        const v2632 = '2';
        const v2633 = '3';
        const v2634 = '4';
        const v2635 = '5';
        const v2636 = '6';
        const v2637 = '7';
        const v2638 = '8';
        const v2639 = '9';
        const v2640 = [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2638, v2639];
        const v2642 = v2640[v2629];
        const v2643 = stdlib.safeDiv(v2628, stdlib.checkedBigNumberify('./index.rsh:198:44:decimal', stdlib.UInt_max, '10'));
        const v2644 = stdlib.safeMod(v2643, stdlib.checkedBigNumberify('./index.rsh:198:50:decimal', stdlib.UInt_max, '10'));
        const v2657 = v2640[v2644];
        const v2658 = stdlib.safeDiv(v2628, stdlib.checkedBigNumberify('./index.rsh:199:44:decimal', stdlib.UInt_max, '100'));
        const v2659 = stdlib.safeMod(v2658, stdlib.checkedBigNumberify('./index.rsh:199:51:decimal', stdlib.UInt_max, '10'));
        const v2672 = v2640[v2659];
        const v2673 = stdlib.safeDiv(v2628, stdlib.checkedBigNumberify('./index.rsh:200:44:decimal', stdlib.UInt_max, '1000'));
        const v2674 = stdlib.safeMod(v2673, stdlib.checkedBigNumberify('./index.rsh:200:52:decimal', stdlib.UInt_max, '10'));
        const v2687 = v2640[v2674];
        const v2688 = stdlib.bytesConcat(v2657, v2642);
        const v2689 = stdlib.bytesConcat(v2672, v2688);
        const v2690 = stdlib.bytesConcat(v2687, v2689);
        const v2692 = stdlib.bytesConcat(v2609, v2690);
        const v2693 = stdlib.bytesConcat(v2692, '                                                                                                                                                                                         ');
        
        return v2693;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async () => {
        
        const v2704 = v2611.totalSupply;
        
        return v2704;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async () => {
        
        const v2737 = v2611.manager;
        
        return v2737;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async () => {
        
        const v2738 = v2611.manager;
        const v2739 = v2611.nMinted;
        const v2740 = v2611.totalSupply;
        const v2741 = {
          manager: v2738,
          nMinted: v2739,
          totalSupply: v2740
          };
        
        return v2741;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2604, v2609, v2611, v2615] = svs;
      return (await ((async (_v2707 ) => {
          const v2707 = stdlib.protect(ctc10, _v2707, null);
        
        const v2708 = stdlib.bytesFromHex("0x53f02a40");
        const v2710 = stdlib.digest([ctc10], [v2708]);
        const v2711 = stdlib.digest([ctc10], [v2707]);
        const v2712 = stdlib.digestEq(v2710, v2711);
        const v2713 = stdlib.bytesFromHex("0xc3c1f000");
        const v2715 = stdlib.digest([ctc10], [v2713]);
        const v2717 = stdlib.digestEq(v2715, v2711);
        const v2718 = stdlib.bytesFromHex("0xb9c6f696");
        const v2720 = stdlib.digest([ctc10], [v2718]);
        const v2722 = stdlib.digestEq(v2720, v2711);
        const v2723 = stdlib.bytesFromHex("0xef470855");
        const v2725 = stdlib.digest([ctc10], [v2723]);
        const v2727 = stdlib.digestEq(v2725, v2711);
        const v2728 = stdlib.bytesFromHex("0x4e22a3ba");
        const v2730 = stdlib.digest([ctc10], [v2728]);
        const v2732 = stdlib.digestEq(v2730, v2711);
        const v2733 = v2727 ? true : v2732;
        const v2734 = v2722 ? true : v2733;
        const v2735 = v2717 ? true : v2734;
        const v2736 = v2712 ? true : v2735;
        
        return v2736;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc72_balanceOf: {
        decode: _arc72_balanceOf,
        dom: [ctc0],
        rng: ctc2
        },
      arc72_getApproved: {
        decode: _arc72_getApproved,
        dom: [ctc2],
        rng: ctc0
        },
      arc72_isApprovedForAll: {
        decode: _arc72_isApprovedForAll,
        dom: [ctc0, ctc0],
        rng: ctc6
        },
      arc72_ownerOf: {
        decode: _arc72_ownerOf,
        dom: [ctc2],
        rng: ctc0
        },
      arc72_tokenByIndex: {
        decode: _arc72_tokenByIndex,
        dom: [ctc2],
        rng: ctc2
        },
      arc72_tokenURI: {
        decode: _arc72_tokenURI,
        dom: [ctc2],
        rng: ctc8
        },
      arc72_totalSupply: {
        decode: _arc72_totalSupply,
        dom: [],
        rng: ctc2
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc9
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc10],
        rng: ctc6
        }
      },
    views: {
      3: [ctc0, ctc1, ctc3, ctc4]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc5]);
  return {
    mapDataTy: ctc6
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_Object({
    metadataUriBase: ctc6,
    zeroAddress: ctc1
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    arc72_approve0_519: ctc9,
    arc72_setApprovalForAll0_519: ctc10,
    arc72_transferFrom0_519: ctc11,
    burn0_519: ctc12,
    close0_519: ctc13,
    deleteNftDataBox0_519: ctc12,
    deleteOperatorDataBox0_519: ctc14,
    grant0_519: ctc15,
    mintTo0_519: ctc15,
    touch0_519: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v2595 = stdlib.protect(ctc7, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2595],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:115:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:115:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2601], secs: v2603, time: v2602, didSend: v30, from: v2600 } = txn1;
      
      ;
      const v2604 = v2601.zeroAddress;
      const v2606 = await ctc.getContractInfo();
      
      const v2609 = v2601.metadataUriBase;
      const v2610 = {
        manager: v2600,
        metadataUriBase: v2609,
        nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        zeroAddress: v2604
        };
      const v2611 = v2610;
      const v2612 = v2602;
      const v2615 = stdlib.checkedBigNumberify('./index.rsh:111:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
  const {data: [v2601], secs: v2603, time: v2602, didSend: v30, from: v2600 } = txn1;
  ;
  const v2604 = v2601.zeroAddress;
  const v2606 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2606), {
    at: './index.rsh:163:19:application',
    fs: ['at ./index.rsh:163:19:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)', 'at ./index.rsh:163:19:application call to "liftedInteract" (defined at: ./index.rsh:163:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2609 = v2601.metadataUriBase;
  const v2610 = {
    manager: v2600,
    metadataUriBase: v2609,
    nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    zeroAddress: v2604
    };
  let v2611 = v2610;
  let v2612 = v2602;
  let v2615 = stdlib.checkedBigNumberify('./index.rsh:111:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn3;
    switch (v2996[0]) {
      case 'arc72_approve0_519': {
        const v2999 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v3014 = v2999[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '0')];
        const v3015 = v2999[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '1')];
        const v3016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3015, ctc2), null);
        const v3017 = {
          None: 0,
          Some: 1
          }[v3016[0]];
        const v3018 = stdlib.eq(v3017, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3018, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v3021 = {
          approved: v2604,
          owner: v2604
          };
        const v3022 = stdlib.fromSome(v3016, v3021);
        const v3023 = v3022.owner;
        const v3024 = stdlib.addressEq(v3023, v2995);
        stdlib.assert(v3024, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:313:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        const v3028 = {
          approved: v3014,
          owner: v2995
          };
        await stdlib.mapSet(map0, ctc8, v3015, ctc2, v3028);
        null;
        const v3029 = null;
        await txn3.getOutput('arc72_approve', 'v3029', ctc0, v3029);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_setApprovalForAll0_519': {
        const v3281 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v3321 = v3281[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
        const v3322 = v3281[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
        const v3325 = [v2995, v3321];
        await stdlib.mapSet(map1, ctc14, v3325, ctc4, v3322);
        null;
        const v3326 = null;
        await txn3.getOutput('arc72_setApprovalForAll', 'v3326', ctc0, v3326);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_transferFrom0_519': {
        const v3563 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v3618 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '0')];
        const v3619 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '1')];
        const v3620 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '2')];
        const v3621 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3620, ctc2), null);
        const v3622 = {
          None: 0,
          Some: 1
          }[v3621[0]];
        const v3623 = stdlib.eq(v3622, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3623, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v3626 = {
          approved: v2604,
          owner: v2604
          };
        const v3627 = stdlib.fromSome(v3621, v3626);
        const v3628 = v3627.owner;
        const v3629 = stdlib.addressEq(v3618, v3628);
        const v3630 = v3629 ? false : true;
        stdlib.assert(v3630, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'ARC72: must be owner or operator',
          who: 'Deployer'
          });
        const v3636 = stdlib.addressEq(v2995, v3628);
        const v3641 = [v3628, v2995];
        const v3642 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3641, ctc4), null);
        const v3643 = stdlib.fromSome(v3642, false);
        const v3647 = v3627.approved;
        const v3648 = stdlib.addressEq(v3647, v2995);
        const v3649 = v3643 ? true : v3648;
        const v3650 = v3636 ? true : v3649;
        stdlib.assert(v3650, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:280:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'ARC72: must be owner or operator to transfer',
          who: 'Deployer'
          });
        const v3652 = stdlib.addressEq(v3618, v3619);
        const v3653 = v3652 ? false : true;
        stdlib.assert(v3653, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'must transfer to different address',
          who: 'Deployer'
          });
        const v3656 = stdlib.addressEq(v3618, v2604);
        stdlib.assert(v3656, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'must not transfer from zero address',
          who: 'Deployer'
          });
        const v3659 = stdlib.addressEq(v3619, v2604);
        stdlib.assert(v3659, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'must not be burned',
          who: 'Deployer'
          });
        const v3665 = stdlib.addressEq(v3619, v3647);
        stdlib.assert(v3665, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'must not be sent to approved address',
          who: 'Deployer'
          });
        const v3672 = stdlib.addressEq(v3628, v2995);
        const v3674 = v3672 ? true : v3648;
        const v3678 = v3674 ? true : v3643;
        stdlib.assert(v3678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'must be nft owner or approved operator',
          who: 'Deployer'
          });
        const v3684 = {
          approved: v2604,
          owner: v3619
          };
        await stdlib.mapSet(map0, ctc8, v3620, ctc2, v3684);
        null;
        const v3685 = null;
        await txn3.getOutput('arc72_transferFrom', 'v3685', ctc0, v3685);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'burn0_519': {
        const v3845 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v3978 = v3845[stdlib.checkedBigNumberify('./index.rsh:342:10:spread', stdlib.UInt_max, '0')];
        const v3979 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3978, ctc2), null);
        const v3980 = {
          approved: v2604,
          owner: v2604
          };
        const v3981 = stdlib.fromSome(v3979, v3980);
        const v3982 = v3981.owner;
        const v3983 = stdlib.addressEq(v3982, v2995);
        stdlib.assert(v3983, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:343:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v3978, ctc2, undefined /* Nothing */);
        null;
        const v4000 = null;
        await txn3.getOutput('burn', 'v4000', ctc0, v4000);
        const v4007 = v2611.manager;
        const v4008 = v2611.metadataUriBase;
        const v4009 = v2611.nMinted;
        const v4010 = v2611.totalSupply;
        const v4011 = v2611.zeroAddress;
        const v4013 = stdlib.safeSub256(v4010, stdlib.checkedBigNumberify('./index.rsh:357:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v4014 = {
          manager: v4007,
          metadataUriBase: v4008,
          nMinted: v4009,
          totalSupply: v4013,
          zeroAddress: v4011
          };
        const cv2611 = v4014;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'close0_519': {
        const v4127 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v4300 = v2611.manager;
        const v4301 = stdlib.addressEq(v2995, v4300);
        stdlib.assert(v4301, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:404:13:application call to [unknown function] (defined at: ./index.rsh:404:13:function exp)'],
          msg: 'must be manager to close',
          who: 'Deployer'
          });
        const v4303 = null;
        await txn3.getOutput('close', 'v4303', ctc0, v4303);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteNftDataBox0_519': {
        const v4409 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v4593 = v4409[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
        const v4594 = v2611.manager;
        const v4595 = stdlib.addressEq(v2995, v4594);
        stdlib.assert(v4595, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:380:13:application call to [unknown function] (defined at: ./index.rsh:380:13:function exp)'],
          msg: 'must be manager to delete nft data box',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v4593, ctc2, undefined /* Nothing */);
        const v4598 = null;
        await txn3.getOutput('deleteNftDataBox', 'v4598', ctc0, v4598);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteOperatorDataBox0_519': {
        const v4691 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v4889 = v4691[stdlib.checkedBigNumberify('./index.rsh:389:10:spread', stdlib.UInt_max, '0')];
        const v4890 = v4691[stdlib.checkedBigNumberify('./index.rsh:389:10:spread', stdlib.UInt_max, '1')];
        const v4891 = v2611.manager;
        const v4892 = stdlib.addressEq(v2995, v4891);
        stdlib.assert(v4892, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:392:13:application call to [unknown function] (defined at: ./index.rsh:392:13:function exp)'],
          msg: 'must be manager to delete operator data box',
          who: 'Deployer'
          });
        const v4896 = [v4889, v4890];
        await stdlib.mapSet(map1, ctc14, v4896, ctc4, undefined /* Nothing */);
        const v4897 = null;
        await txn3.getOutput('deleteOperatorDataBox', 'v4897', ctc0, v4897);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'grant0_519': {
        const v4973 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v5189 = v4973[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
        const v5190 = v2611.manager;
        const v5191 = stdlib.addressEq(v2995, v5190);
        stdlib.assert(v5191, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'must be manager to grant',
          who: 'Deployer'
          });
        const v5194 = null;
        await txn3.getOutput('grant', 'v5194', ctc0, v5194);
        const v5202 = v2611.metadataUriBase;
        const v5203 = v2611.nMinted;
        const v5204 = v2611.totalSupply;
        const v5205 = v2611.zeroAddress;
        const v5206 = {
          manager: v5189,
          metadataUriBase: v5202,
          nMinted: v5203,
          totalSupply: v5204,
          zeroAddress: v5205
          };
        const cv2611 = v5206;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'mintTo0_519': {
        const v5255 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v5492 = v5255[stdlib.checkedBigNumberify('./index.rsh:245:10:spread', stdlib.UInt_max, '0')];
        const v5493 = v2611.manager;
        const v5494 = stdlib.addressEq(v5493, v2995);
        stdlib.assert(v5494, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'must be admin to mint to address',
          who: 'Deployer'
          });
        const v5496 = v2611.nMinted;
        const v5497 = stdlib.le256(v5496, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '9999'));
        stdlib.assert(v5497, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'already minted max NFT',
          who: 'Deployer'
          });
        const v5500 = stdlib.safeAdd256(v5496, stdlib.checkedBigNumberify('./index.rsh:248:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v5501 = v2611.totalSupply;
        const v5502 = stdlib.safeAdd256(v5501, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v5505 = {
          approved: v2604,
          owner: v5492
          };
        await stdlib.mapSet(map0, ctc8, v5500, ctc2, v5505);
        null;
        await txn3.getOutput('mintTo', 'v5500', ctc8, v5500);
        const v5514 = v2611.metadataUriBase;
        const v5517 = v2611.zeroAddress;
        const v5518 = {
          manager: v5493,
          metadataUriBase: v5514,
          nMinted: v5500,
          totalSupply: v5502,
          zeroAddress: v5517
          };
        const cv2611 = v5518;
        const cv2612 = v2997;
        const cv2615 = v2615;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_519': {
        const v5537 = v2996[1];
        undefined /* setApiDetails */;
        ;
        const v5805 = (stdlib.le(await ctc.getBalance(), v2615) ? stdlib.checkedBigNumberify('./index.rsh:368:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2615));
        const v5806 = stdlib.safeAdd(v5805, v2615);
        const v5807 = v2611.manager;
        const v5811 = stdlib.sub(v5806, v5805);
        ;
        const v5812 = null;
        await txn3.getOutput('touch', 'v5812', ctc0, v5812);
        const cv2611 = v2611;
        const cv2612 = v2997;
        const cv2615 = v5811;
        
        v2611 = cv2611;
        v2612 = cv2612;
        v2615 = cv2615;
        
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc10,
    arc72_setApprovalForAll0_519: ctc11,
    arc72_transferFrom0_519: ctc12,
    burn0_519: ctc13,
    close0_519: ctc14,
    deleteNftDataBox0_519: ctc13,
    deleteOperatorDataBox0_519: ctc15,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc14
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2859 = ctc.selfAddress();
  const v2861 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:311:44:application call to [unknown function] (defined at: ./index.rsh:311:44:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_approve0_519" (defined at: ./index.rsh:311:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'arc72_approve'
    });
  const v2863 = v2861[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2863, ctc2), null);
  const v2867 = {
    None: 0,
    Some: 1
    }[v2866[0]];
  const v2868 = stdlib.eq(v2867, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2868, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:311:44:application call to [unknown function] (defined at: ./index.rsh:311:44:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_approve0_519" (defined at: ./index.rsh:311:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_approve'
    });
  const v2871 = {
    approved: v2604,
    owner: v2604
    };
  const v2872 = stdlib.fromSome(v2866, v2871);
  const v2873 = v2872.owner;
  const v2874 = stdlib.addressEq(v2873, v2859);
  stdlib.assert(v2874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:313:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:311:44:application call to [unknown function] (defined at: ./index.rsh:311:44:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_approve0_519" (defined at: ./index.rsh:311:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be nft owner',
    who: 'arc72_approve'
    });
  const v2883 = ['arc72_approve0_519', v2861];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2883],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:311:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_approve"
            });
          ;
          const v3014 = v2999[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '0')];
          const v3015 = v2999[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3015, ctc2), null);
          const v3028 = {
            approved: v3014,
            owner: v2995
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v3015, ctc2, v3028);
          null;
          const v3029 = null;
          const v3030 = await txn1.getOutput('arc72_approve', 'v3029', ctc0, v3029);
          
          const v8110 = v2611;
          const v8112 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v3014 = v2999[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '0')];
      const v3015 = v2999[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '1')];
      const v3016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3015, ctc2), null);
      const v3017 = {
        None: 0,
        Some: 1
        }[v3016[0]];
      const v3018 = stdlib.eq(v3017, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3018, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_approve'
        });
      const v3021 = {
        approved: v2604,
        owner: v2604
        };
      const v3022 = stdlib.fromSome(v3016, v3021);
      const v3023 = v3022.owner;
      const v3024 = stdlib.addressEq(v3023, v2995);
      stdlib.assert(v3024, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:313:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
        msg: 'must be nft owner',
        who: 'arc72_approve'
        });
      const v3028 = {
        approved: v3014,
        owner: v2995
        };
      await stdlib.mapSet(map0, ctc7, v3015, ctc2, v3028);
      null;
      const v3029 = null;
      const v3030 = await txn1.getOutput('arc72_approve', 'v3029', ctc0, v3029);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v2999, v3030), {
          at: './index.rsh:311:11:application',
          fs: ['at ./index.rsh:311:11:application call to [unknown function] (defined at: ./index.rsh:311:11:function exp)', 'at ./index.rsh:322:12:application call to "k" (defined at: ./index.rsh:315:13:function exp)', 'at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
          msg: 'out',
          who: 'arc72_approve'
          });
        }
      else {
        }
      
      const v8110 = v2611;
      const v8112 = v2615;
      return;
      
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc10,
    arc72_transferFrom0_519: ctc12,
    burn0_519: ctc13,
    close0_519: ctc14,
    deleteNftDataBox0_519: ctc13,
    deleteOperatorDataBox0_519: ctc15,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc14
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2887 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:329:55:application call to [unknown function] (defined at: ./index.rsh:329:55:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_setApprovalForAll0_519" (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'arc72_setApprovalForAll'
    });
  const v2899 = ['arc72_setApprovalForAll0_519', v2887];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2899],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:329:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_setApprovalForAll"
            });
          ;
          const v3321 = v3281[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
          const v3322 = v3281[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
          const v3325 = [v2995, v3321];
          await stdlib.simMapSet(sim_r, 1, ctc15, v3325, ctc4, v3322);
          null;
          const v3326 = null;
          const v3327 = await txn1.getOutput('arc72_setApprovalForAll', 'v3326', ctc0, v3326);
          
          const v8143 = v2611;
          const v8145 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v3321 = v3281[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
      const v3322 = v3281[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
      const v3325 = [v2995, v3321];
      await stdlib.mapSet(map1, ctc15, v3325, ctc4, v3322);
      null;
      const v3326 = null;
      const v3327 = await txn1.getOutput('arc72_setApprovalForAll', 'v3326', ctc0, v3326);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v3281, v3327), {
          at: './index.rsh:329:11:application',
          fs: ['at ./index.rsh:329:11:application call to [unknown function] (defined at: ./index.rsh:329:11:function exp)', 'at ./index.rsh:335:12:application call to "k" (defined at: ./index.rsh:331:13:function exp)', 'at ./index.rsh:331:13:application call to [unknown function] (defined at: ./index.rsh:331:13:function exp)'],
          msg: 'out',
          who: 'arc72_setApprovalForAll'
          });
        }
      else {
        }
      
      const v8143 = v2611;
      const v8145 = v2615;
      return;
      
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc12,
    arc72_setApprovalForAll0_519: ctc13,
    arc72_transferFrom0_519: ctc10,
    burn0_519: ctc14,
    close0_519: ctc15,
    deleteNftDataBox0_519: ctc14,
    deleteOperatorDataBox0_519: ctc11,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2780 = ctc.selfAddress();
  const v2782 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'arc72_transferFrom'
    });
  const v2783 = v2782[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2784 = v2782[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2785 = v2782[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2789 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2785, ctc2), null);
  const v2790 = {
    None: 0,
    Some: 1
    }[v2789[0]];
  const v2791 = stdlib.eq(v2790, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2791, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_transferFrom'
    });
  const v2794 = {
    approved: v2604,
    owner: v2604
    };
  const v2795 = stdlib.fromSome(v2789, v2794);
  const v2796 = v2795.owner;
  const v2797 = stdlib.addressEq(v2783, v2796);
  const v2798 = v2797 ? false : true;
  stdlib.assert(v2798, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'ARC72: must be owner or operator',
    who: 'arc72_transferFrom'
    });
  const v2804 = stdlib.addressEq(v2780, v2796);
  const v2809 = [v2796, v2780];
  const v2810 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2809, ctc4), null);
  const v2811 = stdlib.fromSome(v2810, false);
  const v2815 = v2795.approved;
  const v2816 = stdlib.addressEq(v2815, v2780);
  const v2817 = v2811 ? true : v2816;
  const v2818 = v2804 ? true : v2817;
  stdlib.assert(v2818, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:280:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'ARC72: must be owner or operator to transfer',
    who: 'arc72_transferFrom'
    });
  const v2820 = stdlib.addressEq(v2783, v2784);
  const v2821 = v2820 ? false : true;
  stdlib.assert(v2821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must transfer to different address',
    who: 'arc72_transferFrom'
    });
  const v2824 = stdlib.addressEq(v2783, v2604);
  stdlib.assert(v2824, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must not transfer from zero address',
    who: 'arc72_transferFrom'
    });
  const v2827 = stdlib.addressEq(v2784, v2604);
  stdlib.assert(v2827, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must not be burned',
    who: 'arc72_transferFrom'
    });
  const v2833 = stdlib.addressEq(v2784, v2815);
  stdlib.assert(v2833, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must not be sent to approved address',
    who: 'arc72_transferFrom'
    });
  const v2840 = stdlib.addressEq(v2796, v2780);
  const v2842 = v2840 ? true : v2816;
  const v2846 = v2842 ? true : v2811;
  stdlib.assert(v2846, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:61:application call to [unknown function] (defined at: ./index.rsh:275:61:function exp)', 'at ./index.rsh:175:29:application call to "runarc72_transferFrom0_519" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be nft owner or approved operator',
    who: 'arc72_transferFrom'
    });
  const v2857 = ['arc72_transferFrom0_519', v2782];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2857],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:275:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_transferFrom"
            });
          ;
          const v3618 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '0')];
          const v3619 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '1')];
          const v3620 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '2')];
          const v3621 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3620, ctc2), null);
          const v3626 = {
            approved: v2604,
            owner: v2604
            };
          const v3627 = stdlib.fromSome(v3621, v3626);
          const v3628 = v3627.owner;
          const v3641 = [v3628, v2995];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v3641, ctc4), null);
          const v3684 = {
            approved: v2604,
            owner: v3619
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v3620, ctc2, v3684);
          null;
          const v3685 = null;
          const v3686 = await txn1.getOutput('arc72_transferFrom', 'v3685', ctc0, v3685);
          
          const v8176 = v2611;
          const v8178 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v3618 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '0')];
      const v3619 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '1')];
      const v3620 = v3563[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '2')];
      const v3621 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3620, ctc2), null);
      const v3622 = {
        None: 0,
        Some: 1
        }[v3621[0]];
      const v3623 = stdlib.eq(v3622, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3623, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_transferFrom'
        });
      const v3626 = {
        approved: v2604,
        owner: v2604
        };
      const v3627 = stdlib.fromSome(v3621, v3626);
      const v3628 = v3627.owner;
      const v3629 = stdlib.addressEq(v3618, v3628);
      const v3630 = v3629 ? false : true;
      stdlib.assert(v3630, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'ARC72: must be owner or operator',
        who: 'arc72_transferFrom'
        });
      const v3636 = stdlib.addressEq(v2995, v3628);
      const v3641 = [v3628, v2995];
      const v3642 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3641, ctc4), null);
      const v3643 = stdlib.fromSome(v3642, false);
      const v3647 = v3627.approved;
      const v3648 = stdlib.addressEq(v3647, v2995);
      const v3649 = v3643 ? true : v3648;
      const v3650 = v3636 ? true : v3649;
      stdlib.assert(v3650, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:280:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'ARC72: must be owner or operator to transfer',
        who: 'arc72_transferFrom'
        });
      const v3652 = stdlib.addressEq(v3618, v3619);
      const v3653 = v3652 ? false : true;
      stdlib.assert(v3653, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'must transfer to different address',
        who: 'arc72_transferFrom'
        });
      const v3656 = stdlib.addressEq(v3618, v2604);
      stdlib.assert(v3656, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'must not transfer from zero address',
        who: 'arc72_transferFrom'
        });
      const v3659 = stdlib.addressEq(v3619, v2604);
      stdlib.assert(v3659, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'must not be burned',
        who: 'arc72_transferFrom'
        });
      const v3665 = stdlib.addressEq(v3619, v3647);
      stdlib.assert(v3665, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'must not be sent to approved address',
        who: 'arc72_transferFrom'
        });
      const v3672 = stdlib.addressEq(v3628, v2995);
      const v3674 = v3672 ? true : v3648;
      const v3678 = v3674 ? true : v3643;
      stdlib.assert(v3678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:291:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
        msg: 'must be nft owner or approved operator',
        who: 'arc72_transferFrom'
        });
      const v3684 = {
        approved: v2604,
        owner: v3619
        };
      await stdlib.mapSet(map0, ctc7, v3620, ctc2, v3684);
      null;
      const v3685 = null;
      const v3686 = await txn1.getOutput('arc72_transferFrom', 'v3685', ctc0, v3685);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v3563, v3686), {
          at: './index.rsh:275:11:application',
          fs: ['at ./index.rsh:275:11:application call to [unknown function] (defined at: ./index.rsh:275:11:function exp)', 'at ./index.rsh:303:12:application call to "k" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:296:13:application call to [unknown function] (defined at: ./index.rsh:296:13:function exp)'],
          msg: 'out',
          who: 'arc72_transferFrom'
          });
        }
      else {
        }
      
      const v8176 = v2611;
      const v8178 = v2615;
      return;
      
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc10,
    close0_519: ctc14,
    deleteNftDataBox0_519: ctc10,
    deleteOperatorDataBox0_519: ctc15,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc14
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2901 = ctc.selfAddress();
  const v2903 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:342:29:application call to [unknown function] (defined at: ./index.rsh:342:29:function exp)', 'at ./index.rsh:175:29:application call to "runburn0_519" (defined at: ./index.rsh:342:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v2904 = v2903[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2906 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2904, ctc2), null);
  const v2907 = {
    approved: v2604,
    owner: v2604
    };
  const v2908 = stdlib.fromSome(v2906, v2907);
  const v2909 = v2908.owner;
  const v2910 = stdlib.addressEq(v2909, v2901);
  stdlib.assert(v2910, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:343:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:342:29:application call to [unknown function] (defined at: ./index.rsh:342:29:function exp)', 'at ./index.rsh:175:29:application call to "runburn0_519" (defined at: ./index.rsh:342:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be nft owner',
    who: 'burn'
    });
  const v2930 = ['burn0_519', v2903];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2930],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:342:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v3978 = v3845[stdlib.checkedBigNumberify('./index.rsh:342:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v3978, ctc2), null);
          await stdlib.simMapSet(sim_r, 0, ctc7, v3978, ctc2, undefined /* Nothing */);
          null;
          const v4000 = null;
          const v4001 = await txn1.getOutput('burn', 'v4000', ctc0, v4000);
          
          const v4007 = v2611.manager;
          const v4008 = v2611.metadataUriBase;
          const v4009 = v2611.nMinted;
          const v4010 = v2611.totalSupply;
          const v4011 = v2611.zeroAddress;
          const v4013 = stdlib.safeSub256(v4010, stdlib.checkedBigNumberify('./index.rsh:357:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v4014 = {
            manager: v4007,
            metadataUriBase: v4008,
            nMinted: v4009,
            totalSupply: v4013,
            zeroAddress: v4011
            };
          const v8209 = v4014;
          const v8211 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v3978 = v3845[stdlib.checkedBigNumberify('./index.rsh:342:10:spread', stdlib.UInt_max, '0')];
      const v3979 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3978, ctc2), null);
      const v3980 = {
        approved: v2604,
        owner: v2604
        };
      const v3981 = stdlib.fromSome(v3979, v3980);
      const v3982 = v3981.owner;
      const v3983 = stdlib.addressEq(v3982, v2995);
      stdlib.assert(v3983, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:343:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
        msg: 'must be nft owner',
        who: 'burn'
        });
      await stdlib.mapSet(map0, ctc7, v3978, ctc2, undefined /* Nothing */);
      null;
      const v4000 = null;
      const v4001 = await txn1.getOutput('burn', 'v4000', ctc0, v4000);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v3845, v4001), {
          at: './index.rsh:342:11:application',
          fs: ['at ./index.rsh:342:11:application call to [unknown function] (defined at: ./index.rsh:342:11:function exp)', 'at ./index.rsh:353:12:application call to "k" (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
          msg: 'out',
          who: 'burn'
          });
        }
      else {
        }
      
      const v4007 = v2611.manager;
      const v4008 = v2611.metadataUriBase;
      const v4009 = v2611.nMinted;
      const v4010 = v2611.totalSupply;
      const v4011 = v2611.zeroAddress;
      const v4013 = stdlib.safeSub256(v4010, stdlib.checkedBigNumberify('./index.rsh:357:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v4014 = {
        manager: v4007,
        metadataUriBase: v4008,
        nMinted: v4009,
        totalSupply: v4013,
        zeroAddress: v4011
        };
      const v8209 = v4014;
      const v8211 = v2615;
      return;
      
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc14,
    close0_519: ctc10,
    deleteNftDataBox0_519: ctc14,
    deleteOperatorDataBox0_519: ctc15,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2974 = ctc.selfAddress();
  const v2976 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:401:23:application call to [unknown function] (defined at: ./index.rsh:401:23:function exp)', 'at ./index.rsh:175:29:application call to "runclose0_519" (defined at: ./index.rsh:401:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v2977 = v2611.manager;
  const v2978 = stdlib.addressEq(v2974, v2977);
  stdlib.assert(v2978, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:23:application call to [unknown function] (defined at: ./index.rsh:401:23:function exp)', 'at ./index.rsh:175:29:application call to "runclose0_519" (defined at: ./index.rsh:401:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be manager to close',
    who: 'close'
    });
  const v2983 = ['close0_519', v2976];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2983],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:401:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v4303 = null;
          const v4304 = await txn1.getOutput('close', 'v4303', ctc0, v4303);
          
          const v8242 = v2611;
          const v8244 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v4300 = v2611.manager;
      const v4301 = stdlib.addressEq(v2995, v4300);
      stdlib.assert(v4301, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:404:13:application call to [unknown function] (defined at: ./index.rsh:404:13:function exp)'],
        msg: 'must be manager to close',
        who: 'close'
        });
      const v4303 = null;
      const v4304 = await txn1.getOutput('close', 'v4303', ctc0, v4303);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v4127, v4304), {
          at: './index.rsh:401:11:application',
          fs: ['at ./index.rsh:401:11:application call to [unknown function] (defined at: ./index.rsh:401:11:function exp)', 'at ./index.rsh:405:12:application call to "k" (defined at: ./index.rsh:404:13:function exp)', 'at ./index.rsh:404:13:application call to [unknown function] (defined at: ./index.rsh:404:13:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v8242 = v2611;
      const v8244 = v2615;
      return;
      
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc10,
    close0_519: ctc14,
    deleteNftDataBox0_519: ctc10,
    deleteOperatorDataBox0_519: ctc15,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc14
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2940 = ctc.selfAddress();
  const v2942 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:377:41:application call to [unknown function] (defined at: ./index.rsh:377:41:function exp)', 'at ./index.rsh:175:29:application call to "rundeleteNftDataBox0_519" (defined at: ./index.rsh:377:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'deleteNftDataBox'
    });
  const v2945 = v2611.manager;
  const v2946 = stdlib.addressEq(v2940, v2945);
  stdlib.assert(v2946, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:377:41:application call to [unknown function] (defined at: ./index.rsh:377:41:function exp)', 'at ./index.rsh:175:29:application call to "rundeleteNftDataBox0_519" (defined at: ./index.rsh:377:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be manager to delete nft data box',
    who: 'deleteNftDataBox'
    });
  const v2953 = ['deleteNftDataBox0_519', v2942];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2953],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:377:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteNftDataBox"
            });
          ;
          const v4593 = v4409[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc7, v4593, ctc2, undefined /* Nothing */);
          const v4598 = null;
          const v4599 = await txn1.getOutput('deleteNftDataBox', 'v4598', ctc0, v4598);
          
          const v8275 = v2611;
          const v8277 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v4593 = v4409[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
      const v4594 = v2611.manager;
      const v4595 = stdlib.addressEq(v2995, v4594);
      stdlib.assert(v4595, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:380:13:application call to [unknown function] (defined at: ./index.rsh:380:13:function exp)'],
        msg: 'must be manager to delete nft data box',
        who: 'deleteNftDataBox'
        });
      await stdlib.mapSet(map0, ctc7, v4593, ctc2, undefined /* Nothing */);
      const v4598 = null;
      const v4599 = await txn1.getOutput('deleteNftDataBox', 'v4598', ctc0, v4598);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v4409, v4599), {
          at: './index.rsh:377:11:application',
          fs: ['at ./index.rsh:377:11:application call to [unknown function] (defined at: ./index.rsh:377:11:function exp)', 'at ./index.rsh:382:12:application call to "k" (defined at: ./index.rsh:380:13:function exp)', 'at ./index.rsh:380:13:application call to [unknown function] (defined at: ./index.rsh:380:13:function exp)'],
          msg: 'out',
          who: 'deleteNftDataBox'
          });
        }
      else {
        }
      
      const v8275 = v2611;
      const v8277 = v2615;
      return;
      
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc14,
    close0_519: ctc15,
    deleteNftDataBox0_519: ctc14,
    deleteOperatorDataBox0_519: ctc10,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2955 = ctc.selfAddress();
  const v2957 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:389:54:application call to [unknown function] (defined at: ./index.rsh:389:54:function exp)', 'at ./index.rsh:175:29:application call to "rundeleteOperatorDataBox0_519" (defined at: ./index.rsh:389:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'deleteOperatorDataBox'
    });
  const v2962 = v2611.manager;
  const v2963 = stdlib.addressEq(v2955, v2962);
  stdlib.assert(v2963, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:389:54:application call to [unknown function] (defined at: ./index.rsh:389:54:function exp)', 'at ./index.rsh:175:29:application call to "rundeleteOperatorDataBox0_519" (defined at: ./index.rsh:389:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be manager to delete operator data box',
    who: 'deleteOperatorDataBox'
    });
  const v2972 = ['deleteOperatorDataBox0_519', v2957];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2972],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:389:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteOperatorDataBox"
            });
          ;
          const v4889 = v4691[stdlib.checkedBigNumberify('./index.rsh:389:10:spread', stdlib.UInt_max, '0')];
          const v4890 = v4691[stdlib.checkedBigNumberify('./index.rsh:389:10:spread', stdlib.UInt_max, '1')];
          const v4896 = [v4889, v4890];
          await stdlib.simMapSet(sim_r, 1, ctc10, v4896, ctc4, undefined /* Nothing */);
          const v4897 = null;
          const v4898 = await txn1.getOutput('deleteOperatorDataBox', 'v4897', ctc0, v4897);
          
          const v8308 = v2611;
          const v8310 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v4889 = v4691[stdlib.checkedBigNumberify('./index.rsh:389:10:spread', stdlib.UInt_max, '0')];
      const v4890 = v4691[stdlib.checkedBigNumberify('./index.rsh:389:10:spread', stdlib.UInt_max, '1')];
      const v4891 = v2611.manager;
      const v4892 = stdlib.addressEq(v2995, v4891);
      stdlib.assert(v4892, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:392:13:application call to [unknown function] (defined at: ./index.rsh:392:13:function exp)'],
        msg: 'must be manager to delete operator data box',
        who: 'deleteOperatorDataBox'
        });
      const v4896 = [v4889, v4890];
      await stdlib.mapSet(map1, ctc10, v4896, ctc4, undefined /* Nothing */);
      const v4897 = null;
      const v4898 = await txn1.getOutput('deleteOperatorDataBox', 'v4897', ctc0, v4897);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v4691, v4898), {
          at: './index.rsh:389:11:application',
          fs: ['at ./index.rsh:389:11:application call to [unknown function] (defined at: ./index.rsh:389:11:function exp)', 'at ./index.rsh:394:12:application call to "k" (defined at: ./index.rsh:392:13:function exp)', 'at ./index.rsh:392:13:application call to [unknown function] (defined at: ./index.rsh:392:13:function exp)'],
          msg: 'out',
          who: 'deleteOperatorDataBox'
          });
        }
      else {
        }
      
      const v8308 = v2611;
      const v8310 = v2615;
      return;
      
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc14,
    close0_519: ctc15,
    deleteNftDataBox0_519: ctc14,
    deleteOperatorDataBox0_519: ctc16,
    grant0_519: ctc10,
    mintTo0_519: ctc10,
    touch0_519: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2743 = ctc.selfAddress();
  const v2745 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:232:27:application call to [unknown function] (defined at: ./index.rsh:232:27:function exp)', 'at ./index.rsh:175:29:application call to "rungrant0_519" (defined at: ./index.rsh:232:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2748 = v2611.manager;
  const v2749 = stdlib.addressEq(v2743, v2748);
  stdlib.assert(v2749, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:232:27:application call to [unknown function] (defined at: ./index.rsh:232:27:function exp)', 'at ./index.rsh:175:29:application call to "rungrant0_519" (defined at: ./index.rsh:232:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be manager to grant',
    who: 'grant'
    });
  const v2756 = ['grant0_519', v2745];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2756],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:232:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v5189 = v4973[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
          const v5194 = null;
          const v5195 = await txn1.getOutput('grant', 'v5194', ctc0, v5194);
          
          const v5202 = v2611.metadataUriBase;
          const v5203 = v2611.nMinted;
          const v5204 = v2611.totalSupply;
          const v5205 = v2611.zeroAddress;
          const v5206 = {
            manager: v5189,
            metadataUriBase: v5202,
            nMinted: v5203,
            totalSupply: v5204,
            zeroAddress: v5205
            };
          const v8341 = v5206;
          const v8343 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v5189 = v4973[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
      const v5190 = v2611.manager;
      const v5191 = stdlib.addressEq(v2995, v5190);
      stdlib.assert(v5191, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
        msg: 'must be manager to grant',
        who: 'grant'
        });
      const v5194 = null;
      const v5195 = await txn1.getOutput('grant', 'v5194', ctc0, v5194);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v4973, v5195), {
          at: './index.rsh:232:11:application',
          fs: ['at ./index.rsh:232:11:application call to [unknown function] (defined at: ./index.rsh:232:11:function exp)', 'at ./index.rsh:236:12:application call to "k" (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v5202 = v2611.metadataUriBase;
      const v5203 = v2611.nMinted;
      const v5204 = v2611.totalSupply;
      const v5205 = v2611.zeroAddress;
      const v5206 = {
        manager: v5189,
        metadataUriBase: v5202,
        nMinted: v5203,
        totalSupply: v5204,
        zeroAddress: v5205
        };
      const v8341 = v5206;
      const v8343 = v2615;
      return;
      
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc14,
    close0_519: ctc15,
    deleteNftDataBox0_519: ctc14,
    deleteOperatorDataBox0_519: ctc16,
    grant0_519: ctc10,
    mintTo0_519: ctc10,
    touch0_519: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2758 = ctc.selfAddress();
  const v2760 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:245:28:application call to [unknown function] (defined at: ./index.rsh:245:28:function exp)', 'at ./index.rsh:175:29:application call to "runmintTo0_519" (defined at: ./index.rsh:245:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'mintTo'
    });
  const v2763 = v2611.manager;
  const v2764 = stdlib.addressEq(v2763, v2758);
  stdlib.assert(v2764, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:28:application call to [unknown function] (defined at: ./index.rsh:245:28:function exp)', 'at ./index.rsh:175:29:application call to "runmintTo0_519" (defined at: ./index.rsh:245:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'must be admin to mint to address',
    who: 'mintTo'
    });
  const v2766 = v2611.nMinted;
  const v2767 = stdlib.le256(v2766, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '9999'));
  stdlib.assert(v2767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:28:application call to [unknown function] (defined at: ./index.rsh:245:28:function exp)', 'at ./index.rsh:175:29:application call to "runmintTo0_519" (defined at: ./index.rsh:245:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'already minted max NFT',
    who: 'mintTo'
    });
  const v2778 = ['mintTo0_519', v2760];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2778],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:245:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mintTo"
            });
          ;
          const v5492 = v5255[stdlib.checkedBigNumberify('./index.rsh:245:10:spread', stdlib.UInt_max, '0')];
          const v5493 = v2611.manager;
          const v5496 = v2611.nMinted;
          const v5500 = stdlib.safeAdd256(v5496, stdlib.checkedBigNumberify('./index.rsh:248:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v5501 = v2611.totalSupply;
          const v5502 = stdlib.safeAdd256(v5501, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v5505 = {
            approved: v2604,
            owner: v5492
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v5500, ctc2, v5505);
          null;
          const v5507 = await txn1.getOutput('mintTo', 'v5500', ctc7, v5500);
          
          const v5514 = v2611.metadataUriBase;
          const v5517 = v2611.zeroAddress;
          const v5518 = {
            manager: v5493,
            metadataUriBase: v5514,
            nMinted: v5500,
            totalSupply: v5502,
            zeroAddress: v5517
            };
          const v8374 = v5518;
          const v8376 = v2615;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v5492 = v5255[stdlib.checkedBigNumberify('./index.rsh:245:10:spread', stdlib.UInt_max, '0')];
      const v5493 = v2611.manager;
      const v5494 = stdlib.addressEq(v5493, v2995);
      stdlib.assert(v5494, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'must be admin to mint to address',
        who: 'mintTo'
        });
      const v5496 = v2611.nMinted;
      const v5497 = stdlib.le256(v5496, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '9999'));
      stdlib.assert(v5497, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'already minted max NFT',
        who: 'mintTo'
        });
      const v5500 = stdlib.safeAdd256(v5496, stdlib.checkedBigNumberify('./index.rsh:248:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v5501 = v2611.totalSupply;
      const v5502 = stdlib.safeAdd256(v5501, stdlib.checkedBigNumberify('./index.rsh:249:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v5505 = {
        approved: v2604,
        owner: v5492
        };
      await stdlib.mapSet(map0, ctc7, v5500, ctc2, v5505);
      null;
      const v5507 = await txn1.getOutput('mintTo', 'v5500', ctc7, v5500);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v5255, v5507), {
          at: './index.rsh:245:11:application',
          fs: ['at ./index.rsh:245:11:application call to [unknown function] (defined at: ./index.rsh:245:11:function exp)', 'at ./index.rsh:258:12:application call to "k" (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'out',
          who: 'mintTo'
          });
        }
      else {
        }
      
      const v5514 = v2611.metadataUriBase;
      const v5517 = v2611.zeroAddress;
      const v5518 = {
        manager: v5493,
        metadataUriBase: v5514,
        nMinted: v5500,
        totalSupply: v5502,
        zeroAddress: v5517
        };
      const v8374 = v5518;
      const v8376 = v2615;
      return;
      
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
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
  const ctc2 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '67'));
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    manager: ctc1,
    metadataUriBase: ctc6,
    nMinted: ctc7,
    totalSupply: ctc7,
    zeroAddress: ctc1
    });
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Data({
    arc72_approve0_519: ctc11,
    arc72_setApprovalForAll0_519: ctc12,
    arc72_transferFrom0_519: ctc13,
    burn0_519: ctc14,
    close0_519: ctc10,
    deleteNftDataBox0_519: ctc14,
    deleteOperatorDataBox0_519: ctc15,
    grant0_519: ctc16,
    mintTo0_519: ctc16,
    touch0_519: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2604, v2609, v2611, v2615] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc6, ctc8, ctc9]);
  const v2934 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:365:23:application call to [unknown function] (defined at: ./index.rsh:365:23:function exp)', 'at ./index.rsh:175:29:application call to "runtouch0_519" (defined at: ./index.rsh:365:10:function exp)', 'at ./index.rsh:175:29:application call to [unknown function] (defined at: ./index.rsh:175:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2938 = ['touch0_519', v2934];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2609, v2611, v2615, v2938],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:365:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
      
      switch (v2996[0]) {
        case 'arc72_approve0_519': {
          const v2999 = v2996[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_519': {
          const v3281 = v2996[1];
          
          break;
          }
        case 'arc72_transferFrom0_519': {
          const v3563 = v2996[1];
          
          break;
          }
        case 'burn0_519': {
          const v3845 = v2996[1];
          
          break;
          }
        case 'close0_519': {
          const v4127 = v2996[1];
          
          break;
          }
        case 'deleteNftDataBox0_519': {
          const v4409 = v2996[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_519': {
          const v4691 = v2996[1];
          
          break;
          }
        case 'grant0_519': {
          const v4973 = v2996[1];
          
          break;
          }
        case 'mintTo0_519': {
          const v5255 = v2996[1];
          
          break;
          }
        case 'touch0_519': {
          const v5537 = v2996[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v5805 = (stdlib.le(await ctc.getBalance(), v2615) ? stdlib.checkedBigNumberify('./index.rsh:368:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2615));
          const v5806 = stdlib.safeAdd(v5805, v2615);
          const v5807 = v2611.manager;
          const v5811 = stdlib.sub(v5806, v5805);
          sim_r.txns.push({
            kind: 'from',
            to: v5807,
            tok: undefined /* Nothing */
            });
          const v5812 = null;
          const v5813 = await txn1.getOutput('touch', 'v5812', ctc0, v5812);
          
          const v8407 = v2611;
          const v8409 = v5811;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc6, ctc8, ctc9, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2996], secs: v2998, time: v2997, didSend: v1851, from: v2995 } = txn1;
  switch (v2996[0]) {
    case 'arc72_approve0_519': {
      const v2999 = v2996[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_519': {
      const v3281 = v2996[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_519': {
      const v3563 = v2996[1];
      return;
      break;
      }
    case 'burn0_519': {
      const v3845 = v2996[1];
      return;
      break;
      }
    case 'close0_519': {
      const v4127 = v2996[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_519': {
      const v4409 = v2996[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_519': {
      const v4691 = v2996[1];
      return;
      break;
      }
    case 'grant0_519': {
      const v4973 = v2996[1];
      return;
      break;
      }
    case 'mintTo0_519': {
      const v5255 = v2996[1];
      return;
      break;
      }
    case 'touch0_519': {
      const v5537 = v2996[1];
      undefined /* setApiDetails */;
      ;
      const v5805 = (stdlib.le(await ctc.getBalance(), v2615) ? stdlib.checkedBigNumberify('./index.rsh:368:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2615));
      const v5806 = stdlib.safeAdd(v5805, v2615);
      const v5807 = v2611.manager;
      const v5811 = stdlib.sub(v5806, v5805);
      ;
      const v5812 = null;
      const v5813 = await txn1.getOutput('touch', 'v5812', ctc0, v5812);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v5537, v5813), {
          at: './index.rsh:365:11:application',
          fs: ['at ./index.rsh:365:11:application call to [unknown function] (defined at: ./index.rsh:365:11:function exp)', 'at ./index.rsh:370:12:application call to "k" (defined at: ./index.rsh:367:13:function exp)', 'at ./index.rsh:367:13:application call to [unknown function] (defined at: ./index.rsh:367:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v8407 = v2611;
      const v8409 = v5811;
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
    impure: [`_reachp_0((uint64,(byte[67],address)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc72_approve(address,uint256)void`, `arc72_setApprovalForAll(address,byte)void`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteNftDataBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `mintTo(address)uint256`, `touch()void`],
    pure: [`arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `manager()address`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`],
    sigs: [`_reachp_0((uint64,(byte[67],address)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc72_approve(address,uint256)void`, `arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_setApprovalForAll(address,byte)void`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteNftDataBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `manager()address`, `mintTo(address)uint256`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAIAAEDQAjUwgIK1HomBwABAAgAAAAAAAAAAQEBAQIE2AjU9CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATEYQQjaKGRJIls1ASEEWzUCKWQrZFAnBGRQghYEHcIvLAQ+pg9/BFIeLWEEZNcqegRnQ0AxBG2b/ScEcTQ5XwR5CWoUBHn1sI0Eiczm8wSUiqTxBJZWBHoEl8XYbwSlwXK7BKwxkSQEtO26TgS8PBVvBMPB/AAEIXrcPQTjPYBSBPFQVScE8vGUoDYaAI4WCSgItQkrCJUJHQiFCHcIbwjKCL0IWgiyCSAIBwhSCEUIGQiNCGIJMwiqCJgANAtXACA1DTQLVyAgNQwoJa8pNAxQiAl7STULIlUjEkQ0EklQNAuICXVXACAxABJEIQUpNAxQMQA0DVCICWmABIWi5uAxAFA0DVA0DFCwKDULgAgAAAAAAAAL1TQLULA0CzUEMgY1DzQSNBFQNBBQNA4WUCQyBjUCNQEpSwFXAH9nK0sBV39/ZycETFf+MGcoNAEWNAIWUGcxGSISRIgJODQDQAAKgAQVH3x1NARQsCNDNAtXACA1DTQLVyABF4EHkTUMIQcqMQA0DVBQATQMFlEHCIgI0YAETE3rqzEAUDQNUDQMgQeQFlEHCFCwKDULgAgAAAAAAAAM/jQLULA0CzUEMgY1D0L/XjQLVwAgNRM0C1cgIDUNNAtXQCA1DCglryk0DFCICGtJNRQiVSMSRDQSSVA0FIgIZUk1C1cAIDUWNBM0FhNEKSgpKjQWMQBQUAGICD6ICEYXNRU0C1cgIEk1FDEAEjULMQA0FhI0FTQLERFENBM0DRNENBM0EhJENA00EhJENA00FBJENBYxABI0CxE0FRFEIQUpNAxQNA00ElCICAEnBTQTUDQNUDQMULAoNQuACAAAAAAAAA5lNAtQsDQLNQQyBjUPQv6ZNA1XASA1CzQSSVAoJa8pNAtQiAewiAe4VwAgMQASRCEFKTQLUIgHyScFMQBQNBJQNAtQsCg1C4AIAAAAAAAAD6A0C1CwNAs1BDQQVwAgNBBXIENQNBBXYyBQNBBXgyAnBqGIB4JQNBBXoyBQMgY1DzUQQv4kMQA0EFcAIBJEKDULgAgAAAAAAAAQzzQLULA0CzUEMgY1D0L9/zEANBBXACASRCEFKTQNVwEgUIgHQig1C4AIAAAAAAAAEfY0C1CwNAs1BDIGNQ9C/c4xADQQVwAgEkQhByo0C1cAIDQLVyAgUFABiAcKKDULgAgAAAAAAAATITQLULA0CzUEMgY1D0L9ljEANBBXACASRCg1C4AIAAAAAAAAFEo0C1CwNAs1BDQNVwEgNBBXIENQNBBXYyBQNBBXgyBQNBBXoyBQMgY1DzUQQv1SNA1XASA1CzQQVwAgSTUTMQASRDQQV2MgSTUNgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnD6ZENA0nBqCIBlk1DCEFKTQMUDQLNBJQiAY7JwU0ElA0C1A0DFCwgAgAAAAAAAAVfDQMULA0DDUENBM0EFcgQ1A0DFA0EFeDICcGoIgGFVA0EFejIFAyBjUPNRBC/LcyCmAyCngJNA4JSTUMNBBXACCIBh8oNQuACAAAAAAAABa0NAtQsDQLNQQyBjQMNA4INAwJNQ41D0L8fCEEryk0DDQLUFAyA1BQNQskNAESRIgFdzQLIls1DDQLVwhhNQ2ABNkeTdo0DBZQNA1QsDQMiAWrNA0iVY0KBL4EyATSBNwElASXBJoEpASnBKpC+780ASQSRIgFMjIDNQQxGSISREL8UTQBJBJEiAUeNBJJUCglryk0C1CIBSmIBTFXICA1BEL/1zQBJBJEiAT9KSgpKjQMNAtQUAGIBQiIBRCBB5AWUQcINQRC/7I0ASQSRIgE2DQSSVAoJa8pNAtQiATjiATrVwAgNQRC/5EhBK8rNAw0CxZRBwhQUIE/r1BQNQtC/yg0ASQSRIgEnzIDNQRC/2o0ASQSRIgEkDQLNQwoJa8pNAxQiASbIlUjEkQ0DIEYWzULgAowMTIzNDU2Nzg5NQw0ETQMIzQLgegHCiEGGAsjWDQMIzQLgWQKIQYYCyNYNAwjNAshBgohBhgLI1g0DCM0CyEGGAsjWFBQUFCBuQGvUDUEQv70NAEkEkSIBBo0EFeDIDUEQv7iIQSvJwQ0DTQMUDQLUFBQNQtC/n0hBK+AAQM0C1Alr1BQNQtC/muAaQAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv37IQSvgAEFNAtQJa9QUDULQv3pIQSvgAEGNAw0C1BQMgNQUDULQv3UIQSvgAEHNAtQJa9QUDULQv3CNAEkEkSIAzk0EFcAIDUEQv4BIQSvgAEINAtQJa9QUDULQv2eNAEkEkSIAxU0EFcAIDQQV2MgUDQQV4MgUDUEQv3RNAEkEkSIAvc0CwE1DIAgejChhHRVzv0jPcTG0PNrPrZGUhGGlqmH9pdsBGAcQ000DBKAIBedx29/IyCAqvGvxhhqp8TpjjtP652+bCIl7y2r/S8zNAwSgCCOMV+QFN5vVqwpTT6Yi81kBezKYLAfrasC4cehchDAyjQMEoAgDtOdq/ncCFgsY3muQ5vHrRYyrElJaeolOgODHn04dOs0DBKAIC4c9jQuYWt0JtWThPZXG2QiJZ/9rU5NlHDQjhXHkOwVNAwSERERERZRBwg1BEL8/oBpAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/D00DCJbNQ00DFcIYzULgAQFOazDNA0WUDQLULA0DYgB8DQLV0MgNRI0C1cAQzURMQA0EVAyA1AyA1A0ElAyBiI1DjUPNRBC+GGIAcGBoI0GiAHYNhoBNQxC/6aIAa82GgE1C0L72CIxNBJEgQQxNRJEIjE2EkQiMTcSRIgBj4GuAq8iIkL4MjYaATYaAjULNQxC+5o2GgE1C0L75zYaATULQvvzNhoBNhoCNQs1DEL8BzYaATULQvwkNhoBNhoCFzULNQxC/Dc2GgE1C0L8RzYaATULQvxOQvzBNhoBNhoCNhoDNQs1DDUNQvzBNhoBNQtC/M1C/Nw2GgE1C0L9RDYaATYaAjULNQxC/Uk2GgE1C0L9VkL5b0L5kTQNVwFANQtC+bhC+e1C+i5C+sZITL9IiSKyASOyELIHsgiziTQNVwFANQtC9vs0DVcBITULQveiNA1XAWA1C0L38EL4skL9GjYaATULQv0kQv0zNhoBNQtC/UlC/hlIiUwJSTUGMgmIAKOJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIDkSJMRmBBRJEiABpIjIKMgmIAHdC9yZJVwAgNRJJVyBDNRFJV2PDNRCBpgJbNQ6JvkkWUQcIRQRNUIlJVwEATCJVTYlMSb1A/z1LA4gANkL/NUkVgSBMCa9MUIm8Ik4CTTQHCDUHiSM1A4lJIhJMNAISEUSJNAY0B0oPQf9WQv9esUL/BzQGCDUGibGyCUL++w==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `503`,
    1001: `504`,
    1002: `504`,
    1003: `505`,
    1004: `505`,
    1005: `506`,
    1006: `506`,
    1007: `506`,
    1008: `507`,
    1009: `507`,
    101: `24`,
    1010: `508`,
    1011: `508`,
    1012: `508`,
    1013: `509`,
    1014: `510`,
    1015: `510`,
    1016: `511`,
    1017: `511`,
    1018: `511`,
    1019: `512`,
    102: `24`,
    1020: `513`,
    1021: `513`,
    1022: `514`,
    1023: `514`,
    1024: `514`,
    1025: `515`,
    1026: `516`,
    1027: `516`,
    1028: `517`,
    1029: `517`,
    103: `24`,
    1030: `517`,
    1031: `518`,
    1032: `519`,
    1033: `519`,
    1034: `520`,
    1035: `520`,
    1036: `521`,
    1037: `521`,
    1038: `522`,
    1039: `522`,
    104: `24`,
    1040: `522`,
    1041: `524`,
    1042: `524`,
    1043: `525`,
    1044: `525`,
    1045: `525`,
    1046: `526`,
    1047: `526`,
    1048: `527`,
    1049: `527`,
    105: `24`,
    1050: `528`,
    1051: `528`,
    1052: `528`,
    1053: `529`,
    1054: `530`,
    1055: `530`,
    1056: `531`,
    1057: `531`,
    1058: `532`,
    1059: `533`,
    106: `24`,
    1060: `538`,
    1061: `538`,
    1062: `539`,
    1063: `539`,
    1064: `539`,
    1065: `540`,
    1066: `541`,
    1067: `541`,
    1068: `542`,
    1069: `542`,
    107: `24`,
    1070: `542`,
    1071: `542`,
    1072: `542`,
    1073: `542`,
    1074: `542`,
    1075: `542`,
    1076: `542`,
    1077: `542`,
    1078: `542`,
    1079: `542`,
    108: `24`,
    1080: `542`,
    1081: `542`,
    1082: `542`,
    1083: `542`,
    1084: `542`,
    1085: `542`,
    1086: `542`,
    1087: `542`,
    1088: `542`,
    1089: `542`,
    109: `24`,
    1090: `542`,
    1091: `542`,
    1092: `542`,
    1093: `542`,
    1094: `542`,
    1095: `542`,
    1096: `542`,
    1097: `542`,
    1098: `542`,
    1099: `542`,
    11: `2`,
    110: `24`,
    1100: `542`,
    1101: `542`,
    1102: `543`,
    1103: `544`,
    1104: `549`,
    1105: `549`,
    1106: `550`,
    1107: `550`,
    1108: `551`,
    1109: `552`,
    111: `24`,
    1110: `552`,
    1111: `552`,
    1112: `553`,
    1113: `553`,
    1114: `555`,
    1115: `555`,
    1116: `556`,
    1117: `557`,
    1118: `557`,
    1119: `558`,
    112: `24`,
    1120: `559`,
    1121: `559`,
    1122: `560`,
    1123: `560`,
    1124: `561`,
    1125: `562`,
    1126: `562`,
    1127: `562`,
    1128: `563`,
    1129: `563`,
    113: `24`,
    1130: `564`,
    1131: `564`,
    1132: `565`,
    1133: `566`,
    1134: `566`,
    1135: `567`,
    1136: `568`,
    1137: `568`,
    1138: `569`,
    1139: `570`,
    114: `24`,
    1140: `572`,
    1141: `572`,
    1142: `572`,
    1143: `572`,
    1144: `572`,
    1145: `572`,
    1146: `572`,
    1147: `572`,
    1148: `572`,
    1149: `572`,
    115: `24`,
    1150: `573`,
    1151: `573`,
    1152: `574`,
    1153: `575`,
    1154: `576`,
    1155: `576`,
    1156: `577`,
    1157: `577`,
    1158: `578`,
    1159: `578`,
    116: `24`,
    1160: `579`,
    1161: `579`,
    1162: `580`,
    1163: `580`,
    1164: `580`,
    1165: `581`,
    1166: `582`,
    1167: `582`,
    1168: `583`,
    1169: `584`,
    117: `24`,
    1170: `584`,
    1171: `585`,
    1172: `585`,
    1173: `585`,
    1174: `586`,
    1175: `586`,
    1176: `587`,
    1177: `588`,
    1178: `588`,
    1179: `588`,
    118: `24`,
    1180: `589`,
    1181: `590`,
    1182: `590`,
    1183: `591`,
    1184: `591`,
    1185: `591`,
    1186: `592`,
    1187: `593`,
    1188: `593`,
    1189: `594`,
    119: `24`,
    1190: `594`,
    1191: `595`,
    1192: `595`,
    1193: `596`,
    1194: `596`,
    1195: `596`,
    1196: `598`,
    1197: `598`,
    1198: `599`,
    1199: `600`,
    12: `2`,
    120: `24`,
    1200: `600`,
    1201: `601`,
    1202: `602`,
    1203: `603`,
    1204: `603`,
    1205: `604`,
    1206: `606`,
    1207: `607`,
    1208: `607`,
    1209: `609`,
    121: `24`,
    1210: `609`,
    1211: `610`,
    1212: `610`,
    1213: `610`,
    1214: `611`,
    1215: `611`,
    1216: `611`,
    1217: `612`,
    1218: `613`,
    1219: `613`,
    122: `24`,
    1220: `614`,
    1221: `614`,
    1222: `614`,
    1223: `614`,
    1224: `614`,
    1225: `614`,
    1226: `614`,
    1227: `614`,
    1228: `614`,
    1229: `614`,
    123: `24`,
    1230: `615`,
    1231: `615`,
    1232: `616`,
    1233: `617`,
    1234: `618`,
    1235: `618`,
    1236: `619`,
    1237: `619`,
    1238: `620`,
    1239: `620`,
    124: `24`,
    1240: `621`,
    1241: `621`,
    1242: `622`,
    1243: `622`,
    1244: `623`,
    1245: `624`,
    1246: `624`,
    1247: `625`,
    1248: `626`,
    1249: `626`,
    125: `24`,
    1250: `627`,
    1251: `627`,
    1252: `628`,
    1253: `628`,
    1254: `628`,
    1255: `630`,
    1256: `630`,
    1257: `631`,
    1258: `632`,
    1259: `633`,
    126: `24`,
    1260: `633`,
    1261: `634`,
    1262: `634`,
    1263: `635`,
    1264: `636`,
    1265: `637`,
    1266: `637`,
    1267: `638`,
    1268: `639`,
    1269: `640`,
    127: `24`,
    1270: `640`,
    1271: `642`,
    1272: `643`,
    1273: `643`,
    1274: `644`,
    1275: `645`,
    1276: `646`,
    1277: `646`,
    1278: `646`,
    1279: `647`,
    128: `24`,
    1280: `647`,
    1281: `648`,
    1282: `649`,
    1283: `650`,
    1284: `650`,
    1285: `651`,
    1286: `651`,
    1287: `652`,
    1288: `652`,
    1289: `652`,
    129: `24`,
    1290: `653`,
    1291: `653`,
    1292: `654`,
    1293: `654`,
    1294: `654`,
    1295: `654`,
    1296: `654`,
    1297: `654`,
    1298: `655`,
    1299: `655`,
    13: `2`,
    130: `24`,
    1300: `656`,
    1301: `657`,
    1302: `658`,
    1303: `658`,
    1304: `659`,
    1305: `660`,
    1306: `662`,
    1307: `662`,
    1308: `663`,
    1309: `663`,
    131: `24`,
    1310: `663`,
    1311: `664`,
    1312: `664`,
    1313: `665`,
    1314: `666`,
    1315: `667`,
    1316: `667`,
    1317: `667`,
    1318: `667`,
    1319: `667`,
    132: `24`,
    1320: `667`,
    1321: `667`,
    1322: `667`,
    1323: `667`,
    1324: `667`,
    1325: `667`,
    1326: `667`,
    1327: `667`,
    1328: `667`,
    1329: `667`,
    133: `24`,
    1330: `667`,
    1331: `667`,
    1332: `667`,
    1333: `667`,
    1334: `667`,
    1335: `667`,
    1336: `667`,
    1337: `668`,
    1338: `668`,
    1339: `668`,
    134: `24`,
    1340: `670`,
    1341: `670`,
    1342: `671`,
    1343: `672`,
    1344: `673`,
    1345: `676`,
    1346: `676`,
    1347: `676`,
    1348: `677`,
    1349: `677`,
    135: `24`,
    1350: `678`,
    1351: `678`,
    1352: `680`,
    1353: `680`,
    1354: `681`,
    1355: `682`,
    1356: `683`,
    1357: `685`,
    1358: `685`,
    1359: `685`,
    136: `24`,
    1360: `687`,
    1361: `687`,
    1362: `688`,
    1363: `689`,
    1364: `690`,
    1365: `693`,
    1366: `693`,
    1367: `693`,
    1368: `694`,
    1369: `694`,
    137: `24`,
    1370: `695`,
    1371: `696`,
    1372: `698`,
    1373: `699`,
    1374: `700`,
    1375: `701`,
    1376: `702`,
    1377: `702`,
    1378: `703`,
    1379: `704`,
    138: `24`,
    1380: `704`,
    1381: `704`,
    1382: `705`,
    1383: `705`,
    1384: `705`,
    1385: `706`,
    1386: `706`,
    1387: `706`,
    1388: `707`,
    1389: `707`,
    139: `24`,
    1390: `708`,
    1391: `708`,
    1392: `708`,
    1393: `710`,
    1394: `710`,
    1395: `711`,
    1396: `712`,
    1397: `713`,
    1398: `716`,
    1399: `716`,
    14: `2`,
    140: `24`,
    1400: `716`,
    1401: `717`,
    1402: `719`,
    1403: `720`,
    1404: `721`,
    1405: `722`,
    1406: `722`,
    1407: `723`,
    1408: `723`,
    1409: `724`,
    141: `24`,
    1410: `725`,
    1411: `726`,
    1412: `727`,
    1413: `727`,
    1414: `727`,
    1415: `728`,
    1416: `728`,
    1417: `728`,
    1418: `729`,
    1419: `729`,
    142: `24`,
    1420: `730`,
    1421: `730`,
    1422: `730`,
    1423: `732`,
    1424: `732`,
    1425: `733`,
    1426: `734`,
    1427: `735`,
    1428: `738`,
    1429: `738`,
    143: `24`,
    1430: `738`,
    1431: `739`,
    1432: `739`,
    1433: `740`,
    1434: `741`,
    1435: `743`,
    1436: `744`,
    1437: `745`,
    1438: `746`,
    1439: `747`,
    144: `24`,
    1440: `747`,
    1441: `748`,
    1442: `749`,
    1443: `749`,
    1444: `749`,
    1445: `750`,
    1446: `750`,
    1447: `750`,
    1448: `751`,
    1449: `751`,
    145: `24`,
    1450: `751`,
    1451: `752`,
    1452: `752`,
    1453: `753`,
    1454: `753`,
    1455: `753`,
    1456: `755`,
    1457: `755`,
    1458: `756`,
    1459: `757`,
    146: `24`,
    1460: `758`,
    1461: `758`,
    1462: `759`,
    1463: `759`,
    1464: `760`,
    1465: `761`,
    1466: `761`,
    1467: `761`,
    1468: `762`,
    1469: `763`,
    147: `24`,
    1470: `764`,
    1471: `764`,
    1472: `765`,
    1473: `766`,
    1474: `767`,
    1475: `768`,
    1476: `768`,
    1477: `769`,
    1478: `769`,
    1479: `769`,
    148: `24`,
    1480: `771`,
    1481: `771`,
    1482: `772`,
    1483: `773`,
    1484: `774`,
    1485: `777`,
    1486: `777`,
    1487: `777`,
    1488: `778`,
    1489: `778`,
    149: `24`,
    1490: `779`,
    1491: `779`,
    1492: `780`,
    1493: `780`,
    1494: `780`,
    1495: `782`,
    1496: `782`,
    1497: `783`,
    1498: `784`,
    1499: `785`,
    15: `2`,
    150: `24`,
    1500: `788`,
    1501: `788`,
    1502: `788`,
    1503: `789`,
    1504: `789`,
    1505: `790`,
    1506: `790`,
    1507: `792`,
    1508: `793`,
    1509: `794`,
    151: `24`,
    1510: `795`,
    1511: `796`,
    1512: `796`,
    1513: `797`,
    1514: `798`,
    1515: `798`,
    1516: `798`,
    1517: `799`,
    1518: `800`,
    1519: `801`,
    152: `24`,
    1520: `802`,
    1521: `803`,
    1522: `808`,
    1523: `808`,
    1524: `809`,
    1525: `809`,
    1526: `810`,
    1527: `811`,
    1528: `811`,
    1529: `812`,
    153: `24`,
    1530: `812`,
    1531: `812`,
    1532: `812`,
    1533: `812`,
    1534: `812`,
    1535: `812`,
    1536: `812`,
    1537: `812`,
    1538: `812`,
    1539: `812`,
    154: `24`,
    1540: `812`,
    1541: `813`,
    1542: `813`,
    1543: `814`,
    1544: `814`,
    1545: `815`,
    1546: `815`,
    1547: `816`,
    1548: `817`,
    1549: `817`,
    155: `24`,
    1550: `818`,
    1551: `818`,
    1552: `818`,
    1553: `819`,
    1554: `820`,
    1555: `820`,
    1556: `821`,
    1557: `822`,
    1558: `823`,
    1559: `824`,
    156: `24`,
    1560: `825`,
    1561: `825`,
    1562: `826`,
    1563: `827`,
    1564: `827`,
    1565: `828`,
    1566: `828`,
    1567: `829`,
    1568: `830`,
    1569: `830`,
    157: `24`,
    1570: `831`,
    1571: `832`,
    1572: `833`,
    1573: `834`,
    1574: `835`,
    1575: `835`,
    1576: `836`,
    1577: `837`,
    1578: `837`,
    1579: `838`,
    158: `24`,
    1580: `838`,
    1581: `839`,
    1582: `840`,
    1583: `840`,
    1584: `841`,
    1585: `842`,
    1586: `843`,
    1587: `844`,
    1588: `845`,
    1589: `845`,
    159: `24`,
    1590: `846`,
    1591: `847`,
    1592: `847`,
    1593: `848`,
    1594: `848`,
    1595: `849`,
    1596: `850`,
    1597: `851`,
    1598: `852`,
    1599: `853`,
    16: `2`,
    160: `24`,
    1600: `854`,
    1601: `855`,
    1602: `856`,
    1603: `857`,
    1604: `857`,
    1605: `857`,
    1606: `858`,
    1607: `859`,
    1608: `860`,
    1609: `860`,
    161: `24`,
    1610: `861`,
    1611: `861`,
    1612: `861`,
    1613: `863`,
    1614: `863`,
    1615: `864`,
    1616: `865`,
    1617: `866`,
    1618: `869`,
    1619: `869`,
    162: `24`,
    1620: `869`,
    1621: `870`,
    1622: `870`,
    1623: `871`,
    1624: `871`,
    1625: `871`,
    1626: `872`,
    1627: `872`,
    1628: `873`,
    1629: `873`,
    163: `24`,
    1630: `873`,
    1631: `875`,
    1632: `875`,
    1633: `876`,
    1634: `877`,
    1635: `877`,
    1636: `878`,
    1637: `878`,
    1638: `879`,
    1639: `879`,
    164: `24`,
    1640: `880`,
    1641: `881`,
    1642: `881`,
    1643: `882`,
    1644: `883`,
    1645: `884`,
    1646: `885`,
    1647: `885`,
    1648: `886`,
    1649: `886`,
    165: `24`,
    1650: `886`,
    1651: `888`,
    1652: `888`,
    1653: `889`,
    1654: `890`,
    1655: `890`,
    1656: `890`,
    1657: `891`,
    1658: `891`,
    1659: `892`,
    166: `24`,
    1660: `893`,
    1661: `894`,
    1662: `895`,
    1663: `896`,
    1664: `897`,
    1665: `897`,
    1666: `898`,
    1667: `898`,
    1668: `898`,
    1669: `900`,
    167: `24`,
    1670: `900`,
    1671: `900`,
    1672: `900`,
    1673: `900`,
    1674: `900`,
    1675: `900`,
    1676: `900`,
    1677: `900`,
    1678: `900`,
    1679: `900`,
    168: `24`,
    1680: `900`,
    1681: `900`,
    1682: `900`,
    1683: `900`,
    1684: `900`,
    1685: `900`,
    1686: `900`,
    1687: `900`,
    1688: `900`,
    1689: `900`,
    169: `24`,
    1690: `900`,
    1691: `900`,
    1692: `900`,
    1693: `900`,
    1694: `900`,
    1695: `900`,
    1696: `900`,
    1697: `900`,
    1698: `900`,
    1699: `900`,
    17: `2`,
    170: `24`,
    1700: `900`,
    1701: `900`,
    1702: `900`,
    1703: `900`,
    1704: `900`,
    1705: `900`,
    1706: `900`,
    1707: `900`,
    1708: `900`,
    1709: `900`,
    171: `24`,
    1710: `900`,
    1711: `900`,
    1712: `900`,
    1713: `900`,
    1714: `900`,
    1715: `900`,
    1716: `900`,
    1717: `900`,
    1718: `900`,
    1719: `900`,
    172: `24`,
    1720: `900`,
    1721: `900`,
    1722: `900`,
    1723: `900`,
    1724: `900`,
    1725: `900`,
    1726: `900`,
    1727: `900`,
    1728: `900`,
    1729: `900`,
    173: `24`,
    1730: `900`,
    1731: `900`,
    1732: `900`,
    1733: `900`,
    1734: `900`,
    1735: `900`,
    1736: `900`,
    1737: `900`,
    1738: `900`,
    1739: `900`,
    174: `24`,
    1740: `900`,
    1741: `900`,
    1742: `900`,
    1743: `900`,
    1744: `900`,
    1745: `900`,
    1746: `900`,
    1747: `900`,
    1748: `900`,
    1749: `900`,
    175: `24`,
    1750: `900`,
    1751: `900`,
    1752: `900`,
    1753: `900`,
    1754: `900`,
    1755: `900`,
    1756: `900`,
    1757: `900`,
    1758: `900`,
    1759: `900`,
    176: `24`,
    1760: `900`,
    1761: `900`,
    1762: `900`,
    1763: `900`,
    1764: `900`,
    1765: `900`,
    1766: `900`,
    1767: `900`,
    1768: `900`,
    1769: `900`,
    177: `24`,
    1770: `900`,
    1771: `900`,
    1772: `900`,
    1773: `900`,
    1774: `900`,
    1775: `900`,
    1776: `901`,
    1777: `901`,
    1778: `902`,
    1779: `902`,
    178: `24`,
    1780: `902`,
    1781: `904`,
    1782: `904`,
    1783: `905`,
    1784: `906`,
    1785: `906`,
    1786: `906`,
    1787: `907`,
    1788: `907`,
    1789: `908`,
    179: `24`,
    1790: `909`,
    1791: `910`,
    1792: `911`,
    1793: `912`,
    1794: `913`,
    1795: `913`,
    1796: `914`,
    1797: `914`,
    1798: `914`,
    1799: `916`,
    18: `2`,
    180: `24`,
    1800: `916`,
    1801: `917`,
    1802: `918`,
    1803: `918`,
    1804: `918`,
    1805: `919`,
    1806: `919`,
    1807: `920`,
    1808: `920`,
    1809: `921`,
    181: `24`,
    1810: `922`,
    1811: `923`,
    1812: `923`,
    1813: `924`,
    1814: `925`,
    1815: `926`,
    1816: `926`,
    1817: `927`,
    1818: `927`,
    1819: `927`,
    182: `24`,
    1820: `929`,
    1821: `929`,
    1822: `930`,
    1823: `931`,
    1824: `931`,
    1825: `931`,
    1826: `932`,
    1827: `932`,
    1828: `933`,
    1829: `934`,
    183: `24`,
    1830: `935`,
    1831: `936`,
    1832: `937`,
    1833: `938`,
    1834: `938`,
    1835: `939`,
    1836: `939`,
    1837: `939`,
    1838: `941`,
    1839: `941`,
    184: `24`,
    1840: `942`,
    1841: `943`,
    1842: `944`,
    1843: `947`,
    1844: `947`,
    1845: `947`,
    1846: `948`,
    1847: `948`,
    1848: `949`,
    1849: `949`,
    185: `24`,
    1850: `949`,
    1851: `950`,
    1852: `950`,
    1853: `951`,
    1854: `951`,
    1855: `951`,
    1856: `953`,
    1857: `953`,
    1858: `954`,
    1859: `955`,
    186: `24`,
    1860: `955`,
    1861: `955`,
    1862: `956`,
    1863: `956`,
    1864: `957`,
    1865: `958`,
    1866: `959`,
    1867: `960`,
    1868: `961`,
    1869: `962`,
    187: `24`,
    1870: `962`,
    1871: `963`,
    1872: `963`,
    1873: `963`,
    1874: `965`,
    1875: `965`,
    1876: `966`,
    1877: `967`,
    1878: `968`,
    1879: `971`,
    188: `24`,
    1880: `971`,
    1881: `971`,
    1882: `972`,
    1883: `972`,
    1884: `973`,
    1885: `973`,
    1886: `973`,
    1887: `974`,
    1888: `974`,
    1889: `975`,
    189: `24`,
    1890: `975`,
    1891: `975`,
    1892: `976`,
    1893: `977`,
    1894: `977`,
    1895: `978`,
    1896: `978`,
    1897: `978`,
    1898: `979`,
    1899: `980`,
    19: `2`,
    190: `24`,
    1900: `980`,
    1901: `981`,
    1902: `981`,
    1903: `981`,
    1904: `983`,
    1905: `983`,
    1906: `984`,
    1907: `985`,
    1908: `986`,
    1909: `989`,
    191: `24`,
    1910: `989`,
    1911: `989`,
    1912: `990`,
    1913: `990`,
    1914: `991`,
    1915: `992`,
    1916: `992`,
    1917: `993`,
    1918: `993`,
    1919: `993`,
    192: `24`,
    1920: `993`,
    1921: `993`,
    1922: `993`,
    1923: `993`,
    1924: `993`,
    1925: `993`,
    1926: `993`,
    1927: `993`,
    1928: `993`,
    1929: `993`,
    193: `24`,
    1930: `993`,
    1931: `993`,
    1932: `993`,
    1933: `993`,
    1934: `993`,
    1935: `993`,
    1936: `993`,
    1937: `993`,
    1938: `993`,
    1939: `993`,
    194: `24`,
    1940: `993`,
    1941: `993`,
    1942: `993`,
    1943: `993`,
    1944: `993`,
    1945: `993`,
    1946: `993`,
    1947: `993`,
    1948: `993`,
    1949: `993`,
    195: `24`,
    1950: `993`,
    1951: `994`,
    1952: `994`,
    1953: `995`,
    1954: `996`,
    1955: `996`,
    1956: `996`,
    1957: `996`,
    1958: `996`,
    1959: `996`,
    196: `24`,
    1960: `996`,
    1961: `996`,
    1962: `996`,
    1963: `996`,
    1964: `996`,
    1965: `996`,
    1966: `996`,
    1967: `996`,
    1968: `996`,
    1969: `996`,
    197: `24`,
    1970: `996`,
    1971: `996`,
    1972: `996`,
    1973: `996`,
    1974: `996`,
    1975: `996`,
    1976: `996`,
    1977: `996`,
    1978: `996`,
    1979: `996`,
    198: `24`,
    1980: `996`,
    1981: `996`,
    1982: `996`,
    1983: `996`,
    1984: `996`,
    1985: `996`,
    1986: `996`,
    1987: `996`,
    1988: `997`,
    1989: `997`,
    199: `24`,
    1990: `998`,
    1991: `999`,
    1992: `999`,
    1993: `999`,
    1994: `999`,
    1995: `999`,
    1996: `999`,
    1997: `999`,
    1998: `999`,
    1999: `999`,
    2: `2`,
    20: `2`,
    200: `24`,
    2000: `999`,
    2001: `999`,
    2002: `999`,
    2003: `999`,
    2004: `999`,
    2005: `999`,
    2006: `999`,
    2007: `999`,
    2008: `999`,
    2009: `999`,
    201: `24`,
    2010: `999`,
    2011: `999`,
    2012: `999`,
    2013: `999`,
    2014: `999`,
    2015: `999`,
    2016: `999`,
    2017: `999`,
    2018: `999`,
    2019: `999`,
    202: `24`,
    2020: `999`,
    2021: `999`,
    2022: `999`,
    2023: `999`,
    2024: `999`,
    2025: `1000`,
    2026: `1000`,
    2027: `1001`,
    2028: `1002`,
    2029: `1002`,
    203: `24`,
    2030: `1002`,
    2031: `1002`,
    2032: `1002`,
    2033: `1002`,
    2034: `1002`,
    2035: `1002`,
    2036: `1002`,
    2037: `1002`,
    2038: `1002`,
    2039: `1002`,
    204: `24`,
    2040: `1002`,
    2041: `1002`,
    2042: `1002`,
    2043: `1002`,
    2044: `1002`,
    2045: `1002`,
    2046: `1002`,
    2047: `1002`,
    2048: `1002`,
    2049: `1002`,
    205: `24`,
    2050: `1002`,
    2051: `1002`,
    2052: `1002`,
    2053: `1002`,
    2054: `1002`,
    2055: `1002`,
    2056: `1002`,
    2057: `1002`,
    2058: `1002`,
    2059: `1002`,
    206: `24`,
    2060: `1002`,
    2061: `1002`,
    2062: `1003`,
    2063: `1003`,
    2064: `1004`,
    2065: `1005`,
    2066: `1005`,
    2067: `1005`,
    2068: `1005`,
    2069: `1005`,
    207: `24`,
    2070: `1005`,
    2071: `1005`,
    2072: `1005`,
    2073: `1005`,
    2074: `1005`,
    2075: `1005`,
    2076: `1005`,
    2077: `1005`,
    2078: `1005`,
    2079: `1005`,
    208: `25`,
    2080: `1005`,
    2081: `1005`,
    2082: `1005`,
    2083: `1005`,
    2084: `1005`,
    2085: `1005`,
    2086: `1005`,
    2087: `1005`,
    2088: `1005`,
    2089: `1005`,
    209: `25`,
    2090: `1005`,
    2091: `1005`,
    2092: `1005`,
    2093: `1005`,
    2094: `1005`,
    2095: `1005`,
    2096: `1005`,
    2097: `1005`,
    2098: `1005`,
    2099: `1006`,
    21: `2`,
    210: `25`,
    2100: `1006`,
    2101: `1007`,
    2102: `1008`,
    2103: `1009`,
    2104: `1010`,
    2105: `1011`,
    2106: `1012`,
    2107: `1013`,
    2108: `1013`,
    2109: `1013`,
    211: `26`,
    2110: `1014`,
    2111: `1014`,
    2112: `1015`,
    2113: `1015`,
    2114: `1015`,
    2115: `1017`,
    2116: `1017`,
    2117: `1017`,
    2118: `1017`,
    2119: `1017`,
    212: `26`,
    2120: `1017`,
    2121: `1017`,
    2122: `1017`,
    2123: `1017`,
    2124: `1017`,
    2125: `1017`,
    2126: `1017`,
    2127: `1017`,
    2128: `1017`,
    2129: `1017`,
    213: `26`,
    2130: `1017`,
    2131: `1017`,
    2132: `1017`,
    2133: `1017`,
    2134: `1017`,
    2135: `1017`,
    2136: `1017`,
    2137: `1017`,
    2138: `1017`,
    2139: `1017`,
    214: `26`,
    2140: `1017`,
    2141: `1017`,
    2142: `1017`,
    2143: `1017`,
    2144: `1017`,
    2145: `1017`,
    2146: `1017`,
    2147: `1017`,
    2148: `1017`,
    2149: `1017`,
    215: `26`,
    2150: `1017`,
    2151: `1017`,
    2152: `1017`,
    2153: `1017`,
    2154: `1017`,
    2155: `1017`,
    2156: `1017`,
    2157: `1017`,
    2158: `1017`,
    2159: `1017`,
    216: `26`,
    2160: `1017`,
    2161: `1017`,
    2162: `1017`,
    2163: `1017`,
    2164: `1017`,
    2165: `1017`,
    2166: `1017`,
    2167: `1017`,
    2168: `1017`,
    2169: `1017`,
    217: `26`,
    2170: `1017`,
    2171: `1017`,
    2172: `1017`,
    2173: `1017`,
    2174: `1017`,
    2175: `1017`,
    2176: `1017`,
    2177: `1017`,
    2178: `1017`,
    2179: `1017`,
    218: `26`,
    2180: `1017`,
    2181: `1017`,
    2182: `1017`,
    2183: `1017`,
    2184: `1017`,
    2185: `1017`,
    2186: `1017`,
    2187: `1017`,
    2188: `1017`,
    2189: `1017`,
    219: `26`,
    2190: `1017`,
    2191: `1017`,
    2192: `1017`,
    2193: `1017`,
    2194: `1017`,
    2195: `1017`,
    2196: `1017`,
    2197: `1017`,
    2198: `1017`,
    2199: `1017`,
    22: `2`,
    220: `26`,
    2200: `1017`,
    2201: `1017`,
    2202: `1017`,
    2203: `1017`,
    2204: `1017`,
    2205: `1017`,
    2206: `1017`,
    2207: `1017`,
    2208: `1017`,
    2209: `1017`,
    221: `26`,
    2210: `1017`,
    2211: `1017`,
    2212: `1017`,
    2213: `1017`,
    2214: `1017`,
    2215: `1017`,
    2216: `1017`,
    2217: `1017`,
    2218: `1017`,
    2219: `1017`,
    222: `26`,
    2220: `1017`,
    2221: `1017`,
    2222: `1018`,
    2223: `1018`,
    2224: `1019`,
    2225: `1019`,
    2226: `1019`,
    2227: `1021`,
    2228: `1021`,
    2229: `1022`,
    223: `26`,
    2230: `1023`,
    2231: `1024`,
    2232: `1024`,
    2233: `1025`,
    2234: `1025`,
    2235: `1026`,
    2236: `1026`,
    2237: `1026`,
    2238: `1027`,
    2239: `1027`,
    224: `26`,
    2240: `1028`,
    2241: `1028`,
    2242: `1028`,
    2243: `1028`,
    2244: `1028`,
    2245: `1028`,
    2246: `1029`,
    2247: `1029`,
    2248: `1030`,
    2249: `1031`,
    225: `26`,
    2250: `1032`,
    2251: `1032`,
    2252: `1033`,
    2253: `1034`,
    2254: `1036`,
    2255: `1036`,
    2256: `1037`,
    2257: `1037`,
    2258: `1037`,
    2259: `1038`,
    226: `26`,
    2260: `1038`,
    2261: `1039`,
    2262: `1039`,
    2263: `1039`,
    2264: `1040`,
    2265: `1040`,
    2266: `1041`,
    2267: `1041`,
    2268: `1042`,
    2269: `1042`,
    227: `26`,
    2270: `1042`,
    2271: `1043`,
    2272: `1043`,
    2273: `1044`,
    2274: `1044`,
    2275: `1045`,
    2276: `1045`,
    2277: `1046`,
    2278: `1047`,
    2279: `1047`,
    228: `26`,
    2280: `1048`,
    2281: `1049`,
    2282: `1049`,
    2283: `1050`,
    2284: `1051`,
    2285: `1051`,
    2286: `1052`,
    2287: `1053`,
    2288: `1053`,
    2289: `1054`,
    229: `26`,
    2290: `1055`,
    2291: `1055`,
    2292: `1056`,
    2293: `1056`,
    2294: `1057`,
    2295: `1057`,
    2296: `1058`,
    2297: `1058`,
    2298: `1058`,
    2299: `1060`,
    23: `2`,
    230: `26`,
    2300: `1060`,
    2301: `1060`,
    2302: `1061`,
    2303: `1061`,
    2304: `1061`,
    2305: `1061`,
    2306: `1062`,
    2307: `1062`,
    2308: `1062`,
    2309: `1063`,
    231: `26`,
    2310: `1063`,
    2311: `1063`,
    2312: `1064`,
    2313: `1064`,
    2314: `1065`,
    2315: `1065`,
    2316: `1065`,
    2317: `1067`,
    2318: `1067`,
    2319: `1067`,
    232: `26`,
    2320: `1068`,
    2321: `1068`,
    2322: `1068`,
    2323: `1069`,
    2324: `1069`,
    2325: `1070`,
    2326: `1070`,
    2327: `1070`,
    2328: `1072`,
    2329: `1073`,
    233: `26`,
    2330: `1073`,
    2331: `1074`,
    2332: `1075`,
    2333: `1076`,
    2334: `1076`,
    2335: `1077`,
    2336: `1077`,
    2337: `1078`,
    2338: `1079`,
    2339: `1080`,
    234: `26`,
    2340: `1081`,
    2341: `1081`,
    2342: `1082`,
    2343: `1083`,
    2344: `1084`,
    2345: `1085`,
    2346: `1085`,
    2347: `1086`,
    2348: `1087`,
    2349: `1088`,
    235: `26`,
    2350: `1088`,
    2351: `1088`,
    2352: `1089`,
    2353: `1089`,
    2354: `1089`,
    2355: `1090`,
    2356: `1091`,
    2357: `1092`,
    2358: `1093`,
    2359: `1093`,
    236: `26`,
    2360: `1093`,
    2361: `1095`,
    2362: `1095`,
    2363: `1095`,
    2364: `1096`,
    2365: `1096`,
    2366: `1096`,
    2367: `1097`,
    2368: `1097`,
    2369: `1098`,
    237: `26`,
    2370: `1098`,
    2371: `1099`,
    2372: `1099`,
    2373: `1099`,
    2374: `1101`,
    2375: `1101`,
    2376: `1101`,
    2377: `1102`,
    2378: `1102`,
    2379: `1103`,
    238: `26`,
    2380: `1103`,
    2381: `1103`,
    2382: `1105`,
    2383: `1105`,
    2384: `1105`,
    2385: `1106`,
    2386: `1106`,
    2387: `1107`,
    2388: `1107`,
    2389: `1107`,
    239: `26`,
    2390: `1109`,
    2391: `1109`,
    2392: `1109`,
    2393: `1110`,
    2394: `1110`,
    2395: `1110`,
    2396: `1111`,
    2397: `1111`,
    2398: `1112`,
    2399: `1112`,
    24: `2`,
    240: `26`,
    2400: `1113`,
    2401: `1113`,
    2402: `1113`,
    2403: `1115`,
    2404: `1115`,
    2405: `1115`,
    2406: `1116`,
    2407: `1116`,
    2408: `1117`,
    2409: `1117`,
    241: `26`,
    2410: `1117`,
    2411: `1119`,
    2412: `1119`,
    2413: `1119`,
    2414: `1120`,
    2415: `1120`,
    2416: `1120`,
    2417: `1121`,
    2418: `1122`,
    2419: `1122`,
    242: `26`,
    2420: `1123`,
    2421: `1123`,
    2422: `1124`,
    2423: `1124`,
    2424: `1124`,
    2425: `1126`,
    2426: `1126`,
    2427: `1126`,
    2428: `1127`,
    2429: `1127`,
    243: `26`,
    2430: `1128`,
    2431: `1128`,
    2432: `1128`,
    2433: `1130`,
    2434: `1130`,
    2435: `1130`,
    2436: `1131`,
    2437: `1131`,
    2438: `1132`,
    2439: `1132`,
    244: `26`,
    2440: `1132`,
    2441: `1134`,
    2442: `1134`,
    2443: `1134`,
    2444: `1136`,
    2445: `1136`,
    2446: `1136`,
    2447: `1137`,
    2448: `1137`,
    2449: `1137`,
    245: `26`,
    2450: `1138`,
    2451: `1138`,
    2452: `1138`,
    2453: `1139`,
    2454: `1139`,
    2455: `1140`,
    2456: `1140`,
    2457: `1141`,
    2458: `1141`,
    2459: `1142`,
    246: `26`,
    2460: `1142`,
    2461: `1142`,
    2462: `1144`,
    2463: `1144`,
    2464: `1144`,
    2465: `1145`,
    2466: `1145`,
    2467: `1146`,
    2468: `1146`,
    2469: `1146`,
    247: `26`,
    2470: `1148`,
    2471: `1148`,
    2472: `1148`,
    2473: `1150`,
    2474: `1150`,
    2475: `1150`,
    2476: `1151`,
    2477: `1151`,
    2478: `1152`,
    2479: `1152`,
    248: `26`,
    2480: `1152`,
    2481: `1154`,
    2482: `1154`,
    2483: `1154`,
    2484: `1155`,
    2485: `1155`,
    2486: `1155`,
    2487: `1156`,
    2488: `1156`,
    2489: `1157`,
    249: `26`,
    2490: `1157`,
    2491: `1158`,
    2492: `1158`,
    2493: `1158`,
    2494: `1160`,
    2495: `1160`,
    2496: `1160`,
    2497: `1161`,
    2498: `1161`,
    2499: `1162`,
    25: `2`,
    250: `26`,
    2500: `1162`,
    2501: `1162`,
    2502: `1164`,
    2503: `1164`,
    2504: `1164`,
    2505: `1166`,
    2506: `1166`,
    2507: `1166`,
    2508: `1168`,
    2509: `1168`,
    251: `26`,
    2510: `1169`,
    2511: `1169`,
    2512: `1169`,
    2513: `1170`,
    2514: `1170`,
    2515: `1171`,
    2516: `1171`,
    2517: `1171`,
    2518: `1173`,
    2519: `1173`,
    252: `26`,
    2520: `1173`,
    2521: `1175`,
    2522: `1175`,
    2523: `1175`,
    2524: `1177`,
    2525: `1177`,
    2526: `1177`,
    2527: `1179`,
    2528: `1180`,
    2529: `1181`,
    253: `26`,
    2530: `1182`,
    2531: `1183`,
    2532: `1185`,
    2533: `1186`,
    2534: `1186`,
    2535: `1187`,
    2536: `1188`,
    2537: `1188`,
    2538: `1189`,
    2539: `1189`,
    254: `26`,
    2540: `1190`,
    2541: `1190`,
    2542: `1191`,
    2543: `1192`,
    2544: `1194`,
    2545: `1194`,
    2546: `1195`,
    2547: `1195`,
    2548: `1195`,
    2549: `1196`,
    255: `26`,
    2550: `1196`,
    2551: `1197`,
    2552: `1197`,
    2553: `1197`,
    2554: `1199`,
    2555: `1199`,
    2556: `1200`,
    2557: `1200`,
    2558: `1200`,
    2559: `1201`,
    256: `26`,
    2560: `1201`,
    2561: `1202`,
    2562: `1202`,
    2563: `1202`,
    2564: `1204`,
    2565: `1204`,
    2566: `1205`,
    2567: `1205`,
    2568: `1205`,
    2569: `1206`,
    257: `28`,
    2570: `1206`,
    2571: `1207`,
    2572: `1207`,
    2573: `1207`,
    2574: `1209`,
    2575: `1209`,
    2576: `1209`,
    2577: `1211`,
    2578: `1211`,
    2579: `1211`,
    258: `30`,
    2580: `1213`,
    2581: `1213`,
    2582: `1213`,
    2583: `1214`,
    2584: `1214`,
    2585: `1215`,
    2586: `1215`,
    2587: `1215`,
    2588: `1217`,
    2589: `1217`,
    259: `30`,
    2590: `1217`,
    2591: `1219`,
    2592: `1219`,
    2593: `1219`,
    2594: `1220`,
    2595: `1220`,
    2596: `1221`,
    2597: `1221`,
    2598: `1221`,
    2599: `1223`,
    26: `2`,
    260: `31`,
    2600: `1223`,
    2601: `1223`,
    2602: `1225`,
    2603: `1226`,
    2604: `1228`,
    2605: `1229`,
    2606: `1230`,
    2607: `1231`,
    2608: `1231`,
    2609: `1232`,
    261: `31`,
    2610: `1232`,
    2611: `1233`,
    2612: `1233`,
    2613: `1233`,
    2614: `1234`,
    2615: `1236`,
    2616: `1237`,
    2617: `1238`,
    2618: `1238`,
    2619: `1238`,
    262: `31`,
    2620: `1239`,
    2621: `1240`,
    2622: `1240`,
    2623: `1243`,
    2624: `1243`,
    2625: `1244`,
    2626: `1244`,
    2627: `1245`,
    2628: `1246`,
    2629: `1247`,
    263: `32`,
    2630: `1248`,
    2631: `1248`,
    2632: `1249`,
    2633: `1250`,
    2634: `1250`,
    2635: `1251`,
    2636: `1251`,
    2637: `1252`,
    2638: `1252`,
    2639: `1253`,
    264: `32`,
    2640: `1254`,
    2641: `1255`,
    2642: `1255`,
    2643: `1256`,
    2644: `1257`,
    2645: `1258`,
    2646: `1259`,
    2647: `1259`,
    2648: `1260`,
    2649: `1261`,
    265: `33`,
    2650: `1262`,
    2651: `1264`,
    2652: `1264`,
    2653: `1265`,
    2654: `1265`,
    2655: `1266`,
    2656: `1267`,
    2657: `1269`,
    2658: `1269`,
    2659: `1269`,
    266: `33`,
    2660: `1271`,
    2661: `1272`,
    2662: `1272`,
    2663: `1273`,
    2664: `1273`,
    2665: `1274`,
    2666: `1274`,
    2667: `1274`,
    2668: `1275`,
    2669: `1275`,
    267: `34`,
    2670: `1275`,
    2671: `1277`,
    2672: `1278`,
    2673: `1278`,
    2674: `1278`,
    2675: `1279`,
    2676: `1279`,
    2677: `1280`,
    2678: `1281`,
    2679: `1281`,
    268: `34`,
    2680: `1281`,
    2681: `1282`,
    2682: `1282`,
    2683: `1283`,
    2684: `1284`,
    2685: `1284`,
    2686: `1284`,
    2687: `1285`,
    2688: `1285`,
    2689: `1286`,
    269: `34`,
    2690: `1286`,
    2691: `1286`,
    2692: `1287`,
    2693: `1288`,
    2694: `1288`,
    2695: `1289`,
    2696: `1291`,
    2697: `1292`,
    2698: `1293`,
    2699: `1294`,
    27: `2`,
    270: `35`,
    2700: `1294`,
    2701: `1294`,
    2702: `1295`,
    2703: `1295`,
    2704: `1296`,
    2705: `1297`,
    2706: `1298`,
    2707: `1300`,
    2708: `1301`,
    2709: `1301`,
    271: `35`,
    2710: `1301`,
    2711: `1302`,
    2712: `1303`,
    2713: `1304`,
    2714: `1305`,
    2715: `1306`,
    2716: `1308`,
    2717: `1309`,
    2718: `1310`,
    2719: `1311`,
    272: `37`,
    2720: `1311`,
    2721: `1311`,
    2722: `1312`,
    2723: `1312`,
    2724: `1313`,
    2725: `1313`,
    2726: `1313`,
    2727: `1314`,
    2728: `1314`,
    2729: `1314`,
    273: `38`,
    2730: `1316`,
    2731: `1317`,
    2732: `1318`,
    2733: `1318`,
    2734: `1319`,
    2735: `1320`,
    2736: `1321`,
    2737: `1322`,
    2738: `1323`,
    2739: `1324`,
    274: `39`,
    2740: `1326`,
    2741: `1327`,
    2742: `1328`,
    2743: `1328`,
    2744: `1329`,
    2745: `1331`,
    2746: `1331`,
    2747: `1332`,
    2748: `1333`,
    2749: `1333`,
    275: `40`,
    2750: `1334`,
    2751: `1336`,
    2752: `1337`,
    2753: `1337`,
    2754: `1338`,
    2755: `1340`,
    2756: `1341`,
    2757: `1342`,
    2758: `1343`,
    2759: `1344`,
    276: `41`,
    2760: `1344`,
    2761: `1345`,
    2762: `1346`,
    2763: `1347`,
    2764: `1348`,
    2765: `1350`,
    2766: `1350`,
    2767: `1351`,
    2768: `1351`,
    2769: `1352`,
    277: `41`,
    2770: `1353`,
    2771: `1354`,
    2772: `1354`,
    2773: `1354`,
    2774: `1355`,
    2775: `1355`,
    2776: `1355`,
    2777: `1357`,
    2778: `1358`,
    2779: `1358`,
    278: `42`,
    2780: `1358`,
    2781: `1360`,
    2782: `1360`,
    2783: `1361`,
    2784: `1362`,
    2785: `1362`,
    2786: `1363`,
    2787: `1365`,
    2788: `1366`,
    2789: `1366`,
    279: `43`,
    2790: `1367`,
    28: `2`,
    280: `43`,
    281: `43`,
    282: `44`,
    283: `45`,
    284: `45`,
    285: `46`,
    286: `47`,
    287: `48`,
    288: `49`,
    289: `50`,
    29: `2`,
    290: `55`,
    291: `55`,
    292: `56`,
    293: `57`,
    294: `58`,
    295: `58`,
    296: `59`,
    297: `59`,
    298: `59`,
    299: `60`,
    3: `2`,
    30: `2`,
    300: `60`,
    301: `60`,
    302: `61`,
    303: `61`,
    304: `62`,
    305: `63`,
    306: `68`,
    307: `68`,
    308: `69`,
    309: `70`,
    31: `2`,
    310: `70`,
    311: `71`,
    312: `72`,
    313: `72`,
    314: `73`,
    315: `73`,
    316: `74`,
    317: `75`,
    318: `75`,
    319: `75`,
    32: `2`,
    320: `76`,
    321: `76`,
    322: `76`,
    323: `76`,
    324: `76`,
    325: `76`,
    326: `77`,
    327: `77`,
    328: `78`,
    329: `79`,
    33: `2`,
    330: `79`,
    331: `80`,
    332: `81`,
    333: `81`,
    334: `82`,
    335: `83`,
    336: `85`,
    337: `86`,
    338: `86`,
    339: `87`,
    34: `2`,
    340: `87`,
    341: `87`,
    342: `87`,
    343: `87`,
    344: `87`,
    345: `87`,
    346: `87`,
    347: `87`,
    348: `87`,
    349: `88`,
    35: `2`,
    350: `88`,
    351: `89`,
    352: `90`,
    353: `91`,
    354: `91`,
    355: `92`,
    356: `92`,
    357: `93`,
    358: `93`,
    359: `94`,
    36: `2`,
    360: `94`,
    361: `97`,
    362: `97`,
    363: `98`,
    364: `98`,
    365: `99`,
    366: `100`,
    367: `100`,
    368: `101`,
    369: `102`,
    37: `2`,
    370: `102`,
    371: `103`,
    372: `104`,
    373: `105`,
    374: `106`,
    375: `106`,
    376: `108`,
    377: `108`,
    378: `109`,
    379: `109`,
    38: `2`,
    380: `110`,
    381: `111`,
    382: `111`,
    383: `112`,
    384: `112`,
    385: `112`,
    386: `113`,
    387: `114`,
    388: `115`,
    389: `115`,
    39: `2`,
    390: `116`,
    391: `116`,
    392: `116`,
    393: `117`,
    394: `118`,
    395: `118`,
    396: `119`,
    397: `120`,
    398: `120`,
    399: `120`,
    4: `2`,
    40: `2`,
    400: `121`,
    401: `122`,
    402: `123`,
    403: `123`,
    404: `124`,
    405: `125`,
    406: `125`,
    407: `126`,
    408: `127`,
    409: `128`,
    41: `2`,
    410: `129`,
    411: `129`,
    412: `130`,
    413: `131`,
    414: `132`,
    415: `134`,
    416: `134`,
    417: `134`,
    418: `136`,
    419: `136`,
    42: `2`,
    420: `137`,
    421: `137`,
    422: `137`,
    423: `139`,
    424: `139`,
    425: `139`,
    426: `139`,
    427: `139`,
    428: `139`,
    429: `140`,
    43: `2`,
    430: `140`,
    431: `141`,
    432: `142`,
    433: `144`,
    434: `145`,
    435: `147`,
    436: `147`,
    437: `148`,
    438: `148`,
    439: `148`,
    44: `2`,
    440: `149`,
    441: `149`,
    442: `150`,
    443: `150`,
    444: `151`,
    445: `151`,
    446: `151`,
    447: `152`,
    448: `153`,
    449: `153`,
    45: `2`,
    450: `155`,
    451: `155`,
    452: `156`,
    453: `157`,
    454: `157`,
    455: `158`,
    456: `158`,
    457: `159`,
    458: `160`,
    459: `161`,
    46: `2`,
    460: `162`,
    461: `162`,
    462: `163`,
    463: `164`,
    464: `164`,
    465: `164`,
    466: `165`,
    467: `165`,
    468: `165`,
    469: `166`,
    47: `2`,
    470: `166`,
    471: `166`,
    472: `166`,
    473: `166`,
    474: `166`,
    475: `167`,
    476: `167`,
    477: `168`,
    478: `169`,
    479: `169`,
    48: `2`,
    480: `170`,
    481: `171`,
    482: `171`,
    483: `172`,
    484: `173`,
    485: `173`,
    486: `173`,
    487: `174`,
    488: `175`,
    489: `177`,
    49: `2`,
    490: `178`,
    491: `178`,
    492: `179`,
    493: `179`,
    494: `179`,
    495: `179`,
    496: `179`,
    497: `179`,
    498: `179`,
    499: `179`,
    5: `2`,
    50: `2`,
    500: `179`,
    501: `179`,
    502: `180`,
    503: `180`,
    504: `181`,
    505: `182`,
    506: `183`,
    507: `183`,
    508: `184`,
    509: `184`,
    51: `2`,
    510: `185`,
    511: `185`,
    512: `186`,
    513: `186`,
    514: `187`,
    515: `187`,
    516: `187`,
    517: `189`,
    518: `189`,
    519: `190`,
    52: `2`,
    520: `190`,
    521: `190`,
    522: `191`,
    523: `191`,
    524: `192`,
    525: `192`,
    526: `193`,
    527: `193`,
    528: `193`,
    529: `194`,
    53: `2`,
    530: `194`,
    531: `195`,
    532: `195`,
    533: `196`,
    534: `196`,
    535: `196`,
    536: `197`,
    537: `197`,
    538: `199`,
    539: `200`,
    54: `2`,
    540: `201`,
    541: `202`,
    542: `203`,
    543: `203`,
    544: `204`,
    545: `205`,
    546: `205`,
    547: `205`,
    548: `206`,
    549: `207`,
    55: `2`,
    550: `207`,
    551: `208`,
    552: `209`,
    553: `210`,
    554: `211`,
    555: `212`,
    556: `217`,
    557: `217`,
    558: `218`,
    559: `219`,
    56: `2`,
    560: `220`,
    561: `220`,
    562: `221`,
    563: `221`,
    564: `221`,
    565: `222`,
    566: `223`,
    567: `223`,
    568: `224`,
    569: `224`,
    57: `2`,
    570: `224`,
    571: `225`,
    572: `225`,
    573: `226`,
    574: `226`,
    575: `227`,
    576: `227`,
    577: `228`,
    578: `229`,
    579: `234`,
    58: `2`,
    580: `236`,
    581: `237`,
    582: `238`,
    583: `239`,
    584: `239`,
    585: `240`,
    586: `240`,
    587: `241`,
    588: `242`,
    589: `243`,
    59: `2`,
    590: `244`,
    591: `244`,
    592: `244`,
    593: `245`,
    594: `245`,
    595: `245`,
    596: `246`,
    597: `247`,
    598: `247`,
    599: `248`,
    6: `2`,
    60: `2`,
    600: `248`,
    601: `249`,
    602: `249`,
    603: `249`,
    604: `250`,
    605: `251`,
    606: `251`,
    607: `252`,
    608: `252`,
    609: `253`,
    61: `2`,
    610: `254`,
    611: `254`,
    612: `255`,
    613: `255`,
    614: `256`,
    615: `256`,
    616: `257`,
    617: `258`,
    618: `258`,
    619: `259`,
    62: `2`,
    620: `259`,
    621: `260`,
    622: `261`,
    623: `262`,
    624: `267`,
    625: `267`,
    626: `268`,
    627: `268`,
    628: `269`,
    629: `270`,
    63: `2`,
    630: `275`,
    631: `275`,
    632: `276`,
    633: `276`,
    634: `277`,
    635: `278`,
    636: `283`,
    637: `283`,
    638: `284`,
    639: `284`,
    64: `2`,
    640: `285`,
    641: `286`,
    642: `291`,
    643: `291`,
    644: `292`,
    645: `292`,
    646: `293`,
    647: `294`,
    648: `299`,
    649: `299`,
    65: `2`,
    650: `300`,
    651: `300`,
    652: `301`,
    653: `302`,
    654: `302`,
    655: `303`,
    656: `304`,
    657: `304`,
    658: `305`,
    659: `306`,
    66: `2`,
    660: `311`,
    661: `311`,
    662: `312`,
    663: `313`,
    664: `313`,
    665: `314`,
    666: `315`,
    667: `315`,
    668: `316`,
    669: `316`,
    67: `2`,
    670: `317`,
    671: `318`,
    672: `318`,
    673: `318`,
    674: `319`,
    675: `319`,
    676: `320`,
    677: `320`,
    678: `321`,
    679: `322`,
    68: `2`,
    680: `322`,
    681: `323`,
    682: `324`,
    683: `324`,
    684: `325`,
    685: `326`,
    686: `328`,
    687: `329`,
    688: `329`,
    689: `330`,
    69: `2`,
    690: `330`,
    691: `330`,
    692: `330`,
    693: `330`,
    694: `330`,
    695: `330`,
    696: `330`,
    697: `330`,
    698: `330`,
    699: `331`,
    7: `2`,
    70: `4`,
    700: `331`,
    701: `332`,
    702: `333`,
    703: `334`,
    704: `334`,
    705: `335`,
    706: `335`,
    707: `336`,
    708: `336`,
    709: `337`,
    71: `4`,
    710: `337`,
    711: `338`,
    712: `338`,
    713: `338`,
    714: `340`,
    715: `340`,
    716: `341`,
    717: `341`,
    718: `341`,
    719: `342`,
    72: `5`,
    720: `342`,
    721: `343`,
    722: `343`,
    723: `344`,
    724: `345`,
    725: `347`,
    726: `348`,
    727: `349`,
    728: `350`,
    729: `351`,
    73: `5`,
    730: `351`,
    731: `352`,
    732: `353`,
    733: `353`,
    734: `353`,
    735: `354`,
    736: `354`,
    737: `354`,
    738: `355`,
    739: `355`,
    74: `5`,
    740: `355`,
    741: `356`,
    742: `356`,
    743: `357`,
    744: `358`,
    745: `363`,
    746: `363`,
    747: `364`,
    748: `365`,
    749: `365`,
    75: `6`,
    750: `366`,
    751: `367`,
    752: `367`,
    753: `367`,
    754: `368`,
    755: `368`,
    756: `369`,
    757: `369`,
    758: `370`,
    759: `371`,
    76: `7`,
    760: `371`,
    761: `372`,
    762: `373`,
    763: `373`,
    764: `374`,
    765: `375`,
    766: `377`,
    767: `378`,
    768: `378`,
    769: `379`,
    77: `8`,
    770: `379`,
    771: `379`,
    772: `379`,
    773: `379`,
    774: `379`,
    775: `379`,
    776: `379`,
    777: `379`,
    778: `379`,
    779: `380`,
    78: `9`,
    780: `380`,
    781: `381`,
    782: `382`,
    783: `383`,
    784: `383`,
    785: `384`,
    786: `384`,
    787: `385`,
    788: `385`,
    789: `386`,
    79: `10`,
    790: `386`,
    791: `386`,
    792: `387`,
    793: `387`,
    794: `388`,
    795: `388`,
    796: `388`,
    797: `389`,
    798: `390`,
    799: `390`,
    8: `2`,
    80: `11`,
    800: `391`,
    801: `391`,
    802: `391`,
    803: `392`,
    804: `393`,
    805: `393`,
    806: `394`,
    807: `394`,
    808: `394`,
    809: `395`,
    81: `11`,
    810: `395`,
    811: `396`,
    812: `397`,
    813: `397`,
    814: `397`,
    815: `398`,
    816: `399`,
    817: `399`,
    818: `400`,
    819: `400`,
    82: `12`,
    820: `400`,
    821: `401`,
    822: `402`,
    823: `402`,
    824: `403`,
    825: `403`,
    826: `404`,
    827: `404`,
    828: `405`,
    829: `405`,
    83: `12`,
    830: `405`,
    831: `407`,
    832: `407`,
    833: `408`,
    834: `408`,
    835: `409`,
    836: `409`,
    837: `409`,
    838: `410`,
    839: `411`,
    84: `13`,
    840: `416`,
    841: `417`,
    842: `417`,
    843: `418`,
    844: `418`,
    845: `418`,
    846: `418`,
    847: `418`,
    848: `418`,
    849: `418`,
    85: `14`,
    850: `418`,
    851: `418`,
    852: `418`,
    853: `419`,
    854: `419`,
    855: `420`,
    856: `421`,
    857: `422`,
    858: `422`,
    859: `423`,
    86: `14`,
    860: `423`,
    861: `424`,
    862: `424`,
    863: `425`,
    864: `425`,
    865: `426`,
    866: `426`,
    867: `426`,
    868: `428`,
    869: `428`,
    87: `15`,
    870: `429`,
    871: `429`,
    872: `430`,
    873: `430`,
    874: `430`,
    875: `431`,
    876: `432`,
    877: `438`,
    878: `438`,
    879: `439`,
    88: `16`,
    880: `440`,
    881: `440`,
    882: `441`,
    883: `441`,
    884: `441`,
    885: `442`,
    886: `443`,
    887: `443`,
    888: `443`,
    889: `444`,
    89: `17`,
    890: `445`,
    891: `445`,
    892: `446`,
    893: `446`,
    894: `446`,
    895: `446`,
    896: `446`,
    897: `446`,
    898: `446`,
    899: `446`,
    9: `2`,
    90: `18`,
    900: `446`,
    901: `446`,
    902: `447`,
    903: `447`,
    904: `448`,
    905: `449`,
    906: `450`,
    907: `450`,
    908: `451`,
    909: `451`,
    91: `19`,
    910: `452`,
    911: `452`,
    912: `453`,
    913: `453`,
    914: `454`,
    915: `454`,
    916: `454`,
    917: `456`,
    918: `456`,
    919: `457`,
    92: `20`,
    920: `457`,
    921: `458`,
    922: `458`,
    923: `458`,
    924: `459`,
    925: `460`,
    926: `466`,
    927: `466`,
    928: `467`,
    929: `468`,
    93: `20`,
    930: `468`,
    931: `469`,
    932: `469`,
    933: `469`,
    934: `470`,
    935: `470`,
    936: `471`,
    937: `471`,
    938: `471`,
    939: `472`,
    94: `21`,
    940: `473`,
    941: `474`,
    942: `475`,
    943: `475`,
    944: `475`,
    945: `476`,
    946: `477`,
    947: `477`,
    948: `478`,
    949: `478`,
    95: `22`,
    950: `478`,
    951: `478`,
    952: `478`,
    953: `478`,
    954: `478`,
    955: `478`,
    956: `478`,
    957: `478`,
    958: `479`,
    959: `479`,
    96: `24`,
    960: `480`,
    961: `481`,
    962: `482`,
    963: `482`,
    964: `483`,
    965: `483`,
    966: `484`,
    967: `484`,
    968: `485`,
    969: `485`,
    97: `24`,
    970: `486`,
    971: `486`,
    972: `486`,
    973: `488`,
    974: `488`,
    975: `489`,
    976: `489`,
    977: `490`,
    978: `490`,
    979: `490`,
    98: `24`,
    980: `491`,
    981: `492`,
    982: `497`,
    983: `498`,
    984: `498`,
    985: `499`,
    986: `499`,
    987: `499`,
    988: `499`,
    989: `499`,
    99: `24`,
    990: `499`,
    991: `499`,
    992: `499`,
    993: `499`,
    994: `499`,
    995: `500`,
    996: `500`,
    997: `501`,
    998: `502`,
    999: `503`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 302,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:410:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:175:29:after expr stmt semicolon',
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
