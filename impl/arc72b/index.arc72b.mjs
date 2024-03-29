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
  const ctc5 = stdlib.T_Struct([['owner', ctc0], ['approved', ctc0], ['tokenURI', ctc4], ['originTokenInfo', ctc4], ['originChainInfo', ctc3]]);
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
  
  const map3_ctc = ctc13;
  
  
  const _arc72_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2986 ) => {
          const v2986 = stdlib.protect(ctc0, _v2986, null);
        
        const v2987 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2986, ctc1), null);
        const v2988 = stdlib.fromSome(v2987, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2988;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_getApproved = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2973 ) => {
          const v2973 = stdlib.protect(ctc1, _v2973, null);
        
        const v2974 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2973, ctc5), null);
        const v2975 = '                                                                                                                                                                                                                                                                ';
        const v2977 = {
          approved: v2942,
          originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          originTokenInfo: v2975,
          owner: v2942,
          tokenURI: v2975
          };
        const v2978 = stdlib.fromSome(v2974, v2977);
        const v2979 = v2978.approved;
        
        return v2979;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_isApprovedForAll = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2980, _v2981 ) => {
          const v2980 = stdlib.protect(ctc0, _v2980, null);
          const v2981 = stdlib.protect(ctc0, _v2981, null);
        
        const v2982 = [v2980, v2981];
        const v2983 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v2982, ctc6), null);
        const v2984 = stdlib.fromSome(v2983, false);
        
        return v2984;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_ownerOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2955 ) => {
          const v2955 = stdlib.protect(ctc1, _v2955, null);
        
        const v2956 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2955, ctc5), null);
        const v2957 = '                                                                                                                                                                                                                                                                ';
        const v2959 = {
          approved: v2942,
          originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          originTokenInfo: v2957,
          owner: v2942,
          tokenURI: v2957
          };
        const v2960 = stdlib.fromSome(v2956, v2959);
        const v2961 = v2960.owner;
        
        return v2961;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenByIndex = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2989 ) => {
          const v2989 = stdlib.protect(ctc1, _v2989, null);
        
        let v2990;
        const v2991 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc1, v2989, ctc1), null);
        switch (v2991[0]) {
          case 'None': {
            const v2992 = v2991[1];
            v2990 = stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:154:24:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v2993 = v2991[1];
            const v2994 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2993, ctc5), null);
            switch (v2994[0]) {
              case 'None': {
                const v2995 = v2994[1];
                v2990 = stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:151:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
                
                break;
                }
              case 'Some': {
                const v2996 = v2994[1];
                v2990 = v2993;
                
                break;
                }
              }
            
            break;
            }
          }
        
        return v2990;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_tokenURI = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2962 ) => {
          const v2962 = stdlib.protect(ctc1, _v2962, null);
        
        const v2963 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2962, ctc5), null);
        const v2964 = {
          None: 0,
          Some: 1
          }[v2963[0]];
        const v2965 = stdlib.eq(v2964, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2965, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:219:27:application call to "tokenURI" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:219:27:application)'],
          msg: 'nft must exist',
          who: 'Module'
          });
        const v2968 = '                                                                                                                                                                                                                                                                ';
        const v2970 = {
          approved: v2942,
          originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          originTokenInfo: v2968,
          owner: v2942,
          tokenURI: v2968
          };
        const v2971 = stdlib.fromSome(v2963, v2970);
        const v2972 = v2971.tokenURI;
        
        return v2972;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc72_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async () => {
        
        const v2985 = v2948.totalSupply;
        
        return v2985;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async () => {
        
        const v3021 = v2948.manager;
        
        return v3021;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async () => {
        
        const v3022 = v2948.manager;
        const v3023 = v2948.nMinted;
        const v3024 = v2948.totalSupply;
        const v3025 = {
          manager: v3022,
          nMinted: v3023,
          totalSupply: v3024
          };
        
        return v3025;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2938, v2942, v2948, v2952] = svs;
      return (await ((async (_v2997 ) => {
          const v2997 = stdlib.protect(ctc9, _v2997, null);
        
        const v2998 = stdlib.bytesFromHex("0x53f02a40");
        const v3000 = stdlib.digest([ctc9], [v2998]);
        const v3001 = stdlib.digest([ctc9], [v2997]);
        const v3002 = stdlib.digestEq(v3000, v3001);
        const v3003 = stdlib.bytesFromHex("0xc3c1f000");
        const v3005 = stdlib.digest([ctc9], [v3003]);
        const v3007 = stdlib.digestEq(v3005, v3001);
        const v3008 = stdlib.bytesFromHex("0xb9c6f696");
        const v3010 = stdlib.digest([ctc9], [v3008]);
        const v3012 = stdlib.digestEq(v3010, v3001);
        const v3013 = stdlib.bytesFromHex("0xa57d4679");
        const v3015 = stdlib.digest([ctc9], [v3013]);
        const v3017 = stdlib.digestEq(v3015, v3001);
        const v3018 = v3012 ? true : v3017;
        const v3019 = v3007 ? true : v3018;
        const v3020 = v3002 ? true : v3019;
        
        return v3020;}))(...args));
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
      3: [ctc0, ctc0, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc5, ctc7, ctc9, ctc9]);
  return {
    mapDataTy: ctc10
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc11,
    arc72_setApprovalForAll0_356: ctc12,
    arc72_transferFrom0_356: ctc13,
    burn0_356: ctc14,
    close0_356: ctc15,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc14,
    deleteNftIndexBox0_356: ctc14,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  
  const v2934 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2934],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:110:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:110:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2939], secs: v2941, time: v2940, didSend: v28, from: v2938 } = txn1;
      
      ;
      const v2942 = v2939.zeroAddress;
      const v2944 = await ctc.getContractInfo();
      
      const v2947 = {
        manager: v2938,
        nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        zeroAddress: v2942
        };
      const v2948 = v2947;
      const v2949 = v2940;
      const v2952 = stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:106:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v2939], secs: v2941, time: v2940, didSend: v28, from: v2938 } = txn1;
  ;
  const v2942 = v2939.zeroAddress;
  const v2944 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2944), {
    at: './impl/arc72b/ARC72_Bridge.rsh:185:19:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:185:19:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:185:19:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:185:19:application call to "liftedInteract" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:185:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2947 = {
    manager: v2938,
    nMinted: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    zeroAddress: v2942
    };
  let v2948 = v2947;
  let v2949 = v2940;
  let v2952 = stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:106:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc19],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn3;
    switch (v3365[0]) {
      case 'arc72_approve0_356': {
        const v3368 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v3385 = v3368[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:spread', stdlib.UInt_max, '0')];
        const v3386 = v3368[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:spread', stdlib.UInt_max, '1')];
        const v3387 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3386, ctc4), null);
        const v3388 = {
          None: 0,
          Some: 1
          }[v3387[0]];
        const v3389 = stdlib.eq(v3388, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3389, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:327:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:327:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v3392 = '                                                                                                                                                                                                                                                                ';
        const v3394 = {
          approved: v2942,
          originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          originTokenInfo: v3392,
          owner: v2942,
          tokenURI: v3392
          };
        const v3395 = stdlib.fromSome(v3387, v3394);
        const v3396 = v3395.owner;
        const v3397 = stdlib.addressEq(v3396, v3364);
        stdlib.assert(v3397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:325:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:327:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:327:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        const v3407 = v3395.originChainInfo;
        const v3408 = v3395.originTokenInfo;
        const v3410 = v3395.tokenURI;
        const v3411 = {
          approved: v3385,
          originChainInfo: v3407,
          originTokenInfo: v3408,
          owner: v3396,
          tokenURI: v3410
          };
        await stdlib.mapSet(map0, ctc8, v3386, ctc4, v3411);
        null;
        const v3412 = null;
        await txn3.getOutput('arc72_approve', 'v3412', ctc0, v3412);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_setApprovalForAll0_356': {
        const v3779 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v3833 = v3779[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:spread', stdlib.UInt_max, '0')];
        const v3834 = v3779[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:spread', stdlib.UInt_max, '1')];
        const v3837 = [v3364, v3833];
        await stdlib.mapSet(map1, ctc17, v3837, ctc6, v3834);
        null;
        const v3838 = null;
        await txn3.getOutput('arc72_setApprovalForAll', 'v3838', ctc0, v3838);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc72_transferFrom0_356': {
        const v4190 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v4259 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '0')];
        const v4260 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '1')];
        const v4261 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '2')];
        const v4262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4261, ctc4), null);
        const v4263 = {
          None: 0,
          Some: 1
          }[v4262[0]];
        const v4264 = stdlib.eq(v4263, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4264, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'nft must exist',
          who: 'Deployer'
          });
        const v4267 = '                                                                                                                                                                                                                                                                ';
        const v4269 = {
          approved: v2942,
          originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          originTokenInfo: v4267,
          owner: v2942,
          tokenURI: v4267
          };
        const v4270 = stdlib.fromSome(v4262, v4269);
        const v4271 = v4270.owner;
        const v4272 = stdlib.addressEq(v4259, v4271);
        const v4273 = v4272 ? false : true;
        stdlib.assert(v4273, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'ARC72: must be owner or operator',
          who: 'Deployer'
          });
        const v4281 = stdlib.addressEq(v3364, v4271);
        const v4288 = [v4271, v3364];
        const v4289 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc17, v4288, ctc6), null);
        const v4290 = stdlib.fromSome(v4289, false);
        const v4296 = v4270.approved;
        const v4297 = stdlib.addressEq(v4296, v3364);
        const v4298 = v4290 ? true : v4297;
        const v4299 = v4281 ? true : v4298;
        stdlib.assert(v4299, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'ARC72: must be owner or operator to transfer',
          who: 'Deployer'
          });
        const v4301 = stdlib.addressEq(v4259, v4260);
        const v4302 = v4301 ? false : true;
        stdlib.assert(v4302, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:292:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'must transfer to different address',
          who: 'Deployer'
          });
        const v4305 = stdlib.addressEq(v4259, v2942);
        stdlib.assert(v4305, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'must not transfer from zero address',
          who: 'Deployer'
          });
        const v4308 = stdlib.addressEq(v4260, v2942);
        stdlib.assert(v4308, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:294:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'must not be burned',
          who: 'Deployer'
          });
        const v4316 = stdlib.addressEq(v4260, v4296);
        stdlib.assert(v4316, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'must not be sent to approved address',
          who: 'Deployer'
          });
        const v4325 = v4270.tokenURI;
        const v4326 = v4270.originTokenInfo;
        const v4327 = v4270.originChainInfo;
        const v4328 = stdlib.addressEq(v4271, v3364);
        const v4330 = v4328 ? true : v4297;
        const v4334 = v4330 ? true : v4290;
        stdlib.assert(v4334, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:299:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'must be nft owner or approved operator',
          who: 'Deployer'
          });
        const v4350 = {
          approved: v2942,
          originChainInfo: v4327,
          originTokenInfo: v4326,
          owner: v4260,
          tokenURI: v4325
          };
        await stdlib.mapSet(map0, ctc8, v4261, ctc4, v4350);
        const v4351 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v4259, ctc8), null);
        const v4352 = stdlib.fromSome(v4351, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4353 = stdlib.safeSub256(v4352, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:310:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v4259, ctc8, v4353);
        const v4354 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v4260, ctc8), null);
        const v4355 = stdlib.fromSome(v4354, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4356 = stdlib.safeAdd256(v4355, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:311:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v4260, ctc8, v4356);
        null;
        const v4357 = null;
        await txn3.getOutput('arc72_transferFrom', 'v4357', ctc0, v4357);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'burn0_356': {
        const v4601 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v4779 = v4601[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:354:10:spread', stdlib.UInt_max, '0')];
        const v4780 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4779, ctc4), null);
        const v4781 = '                                                                                                                                                                                                                                                                ';
        const v4783 = {
          approved: v2942,
          originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          originTokenInfo: v4781,
          owner: v2942,
          tokenURI: v4781
          };
        const v4784 = stdlib.fromSome(v4780, v4783);
        const v4785 = v4784.owner;
        const v4786 = stdlib.addressEq(v4785, v3364);
        stdlib.assert(v4786, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:361:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:361:13:function exp)'],
          msg: 'must be nft owner',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v4779, ctc4, undefined /* Nothing */);
        const v4807 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3364, ctc8), null);
        const v4808 = stdlib.fromSome(v4807, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4809 = stdlib.safeSub256(v4808, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:363:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v3364, ctc8, v4809);
        null;
        const v4811 = null;
        await txn3.getOutput('burn', 'v4811', ctc0, v4811);
        const v4818 = v2948.manager;
        const v4819 = v2948.nMinted;
        const v4820 = v2948.totalSupply;
        const v4821 = v2948.zeroAddress;
        const v4823 = stdlib.safeSub256(v4820, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:370:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v4824 = {
          manager: v4818,
          nMinted: v4819,
          totalSupply: v4823,
          zeroAddress: v4821
          };
        const cv2948 = v4824;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'close0_356': {
        const v5012 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v5239 = stdlib.addressEq(v3364, v2938);
        stdlib.assert(v5239, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:452:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:454:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:454:13:function exp)'],
          msg: 'must be manager to close',
          who: 'Deployer'
          });
        const v5241 = null;
        await txn3.getOutput('close', 'v5241', ctc0, v5241);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteHolderDataBox0_356': {
        const v5423 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v5660 = v5423[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:438:10:spread', stdlib.UInt_max, '0')];
        const v5661 = stdlib.addressEq(v3364, v2938);
        const v5662 = v2948.manager;
        const v5663 = stdlib.addressEq(v3364, v5662);
        const v5664 = v5661 ? true : v5663;
        stdlib.assert(v5664, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:439:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:442:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:442:13:function exp)'],
          msg: 'must be manager to delete holder data box',
          who: 'Deployer'
          });
        const v5666 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v5660, ctc8), null);
        const v5667 = stdlib.fromSome(v5666, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5668 = stdlib.eq256(v5667, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:440:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v5668, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:440:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:442:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:442:13:function exp)'],
          msg: 'must have zero balance',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc1, v5660, ctc8, undefined /* Nothing */);
        const v5671 = null;
        await txn3.getOutput('deleteHolderDataBox', 'v5671', ctc0, v5671);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteNftDataBox0_356': {
        const v5834 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v6091 = v5834[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:390:10:spread', stdlib.UInt_max, '0')];
        const v6092 = stdlib.addressEq(v3364, v2938);
        const v6093 = v2948.manager;
        const v6094 = stdlib.addressEq(v3364, v6093);
        const v6095 = v6092 ? true : v6094;
        stdlib.assert(v6095, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:391:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:393:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:393:13:function exp)'],
          msg: 'must be manager to delete nft data box',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v6091, ctc4, undefined /* Nothing */);
        const v6098 = null;
        await txn3.getOutput('deleteNftDataBox', 'v6098', ctc0, v6098);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteNftIndexBox0_356': {
        const v6245 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v6518 = v6245[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:416:10:spread', stdlib.UInt_max, '0')];
        const v6519 = stdlib.addressEq(v3364, v2938);
        const v6520 = v2948.manager;
        const v6521 = stdlib.addressEq(v3364, v6520);
        const v6522 = v6519 ? true : v6521;
        stdlib.assert(v6522, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:417:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:419:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)'],
          msg: 'must be manager to delete nft index box',
          who: 'Deployer'
          });
        const v6525 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v6518, ctc8), null);
        switch (v6525[0]) {
          case 'None': {
            const v6526 = v6525[1];
            const v6527 = null;
            await txn3.getOutput('deleteNftIndexBox', 'v6527', ctc0, v6527);
            const cv2948 = v2948;
            const cv2949 = v3366;
            const cv2952 = v2952;
            
            v2948 = cv2948;
            v2949 = cv2949;
            v2952 = cv2952;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v6535 = v6525[1];
            const v6536 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v6535, ctc4), null);
            switch (v6536[0]) {
              case 'None': {
                const v6537 = v6536[1];
                await stdlib.mapSet(map3, ctc8, v6518, ctc8, undefined /* Nothing */);
                const v6538 = null;
                await txn3.getOutput('deleteNftIndexBox', 'v6538', ctc0, v6538);
                const cv2948 = v2948;
                const cv2949 = v3366;
                const cv2952 = v2952;
                
                v2948 = cv2948;
                v2949 = cv2949;
                v2952 = cv2952;
                
                txn2 = txn3;
                continue;
                break;
                }
              case 'Some': {
                const v6546 = v6536[1];
                const v6547 = null;
                await txn3.getOutput('deleteNftIndexBox', 'v6547', ctc0, v6547);
                const cv2948 = v2948;
                const cv2949 = v3366;
                const cv2952 = v2952;
                
                v2948 = cv2948;
                v2949 = cv2949;
                v2952 = cv2952;
                
                txn2 = txn3;
                continue;
                break;
                }
              }
            break;
            }
          }
        break;
        }
      case 'deleteOperatorDataBox0_356': {
        const v6656 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v6967 = v6656[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:spread', stdlib.UInt_max, '0')];
        const v6968 = v6656[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:spread', stdlib.UInt_max, '1')];
        const v6969 = stdlib.addressEq(v3364, v2938);
        const v6970 = v2948.manager;
        const v6971 = stdlib.addressEq(v3364, v6970);
        const v6972 = v6969 ? true : v6971;
        stdlib.assert(v6972, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:405:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:405:13:function exp)'],
          msg: 'must be manager to delete operator data box',
          who: 'Deployer'
          });
        const v6976 = [v6967, v6968];
        await stdlib.mapSet(map1, ctc17, v6976, ctc6, undefined /* Nothing */);
        const v6977 = null;
        await txn3.getOutput('deleteOperatorDataBox', 'v6977', ctc0, v6977);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'grant0_356': {
        const v7067 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v7398 = v7067[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:234:10:spread', stdlib.UInt_max, '0')];
        const v7399 = stdlib.addressEq(v3364, v2938);
        stdlib.assert(v7399, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:237:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:237:13:function exp)'],
          msg: 'must be owner to grant',
          who: 'Deployer'
          });
        const v7402 = null;
        await txn3.getOutput('grant', 'v7402', ctc0, v7402);
        const v7410 = v2948.nMinted;
        const v7411 = v2948.totalSupply;
        const v7412 = v2948.zeroAddress;
        const v7413 = {
          manager: v7398,
          nMinted: v7410,
          totalSupply: v7411,
          zeroAddress: v7412
          };
        const cv2948 = v7413;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'mintTo0_356': {
        const v7478 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v7828 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '0')];
        const v7829 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '1')];
        const v7830 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '2')];
        const v7831 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '3')];
        const v7832 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '4')];
        const v7833 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v7830, ctc4), null);
        const v7834 = {
          None: 0,
          Some: 1
          }[v7833[0]];
        const v7835 = stdlib.eq(v7834, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7835, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:248:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:253:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:253:13:function exp)'],
          msg: 'nft must not exist',
          who: 'Deployer'
          });
        const v7837 = stdlib.addressEq(v3364, v2938);
        const v7838 = v2948.manager;
        const v7839 = stdlib.addressEq(v3364, v7838);
        const v7840 = v7837 ? true : v7839;
        stdlib.assert(v7840, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:253:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:253:13:function exp)'],
          msg: 'must be manager to mint',
          who: 'Deployer'
          });
        const v7842 = v2948.nMinted;
        const v7843 = stdlib.safeAdd256(v7842, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:250:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v7844 = v2948.totalSupply;
        const v7845 = stdlib.safeAdd256(v7844, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:251:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map3, ctc8, v7843, ctc8, v7830);
        const v7852 = {
          approved: v2942,
          originChainInfo: v7832,
          originTokenInfo: v7831,
          owner: v7828,
          tokenURI: v7829
          };
        await stdlib.mapSet(map0, ctc8, v7830, ctc4, v7852);
        const v7853 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v7828, ctc8), null);
        const v7854 = stdlib.fromSome(v7853, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v7855 = stdlib.safeAdd256(v7854, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:262:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        await stdlib.mapSet(map2, ctc1, v7828, ctc8, v7855);
        null;
        await txn3.getOutput('mintTo', 'v7830', ctc8, v7830);
        const v7870 = v2948.zeroAddress;
        const v7871 = {
          manager: v7838,
          nMinted: v7830,
          totalSupply: v7845,
          zeroAddress: v7870
          };
        const cv2948 = v7871;
        const cv2949 = v3366;
        const cv2952 = v2952;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_356': {
        const v7889 = v3365[1];
        undefined /* setApiDetails */;
        ;
        const v8287 = (stdlib.le(await ctc.getBalance(), v2952) ? stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:381:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2952));
        const v8288 = stdlib.safeAdd(v8287, v2952);
        const v8292 = stdlib.sub(v8288, v8287);
        ;
        const v8293 = null;
        await txn3.getOutput('touch', 'v8293', ctc0, v8293);
        const cv2948 = v2948;
        const cv2949 = v3366;
        const cv2952 = v8292;
        
        v2948 = cv2948;
        v2949 = cv2949;
        v2952 = cv2952;
        
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc11,
    arc72_setApprovalForAll0_356: ctc12,
    arc72_transferFrom0_356: ctc13,
    burn0_356: ctc14,
    close0_356: ctc15,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc14,
    deleteNftIndexBox0_356: ctc14,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3176 = ctc.selfAddress();
  const v3178 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:323:44:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:44:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_approve0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'arc72_approve'
    });
  const v3180 = v3178[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3183 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3180, ctc4), null);
  const v3184 = {
    None: 0,
    Some: 1
    }[v3183[0]];
  const v3185 = stdlib.eq(v3184, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3185, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:323:44:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:44:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_approve0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_approve'
    });
  const v3188 = '                                                                                                                                                                                                                                                                ';
  const v3190 = {
    approved: v2942,
    originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    originTokenInfo: v3188,
    owner: v2942,
    tokenURI: v3188
    };
  const v3191 = stdlib.fromSome(v3183, v3190);
  const v3192 = v3191.owner;
  const v3193 = stdlib.addressEq(v3192, v3176);
  stdlib.assert(v3193, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:325:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:323:44:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:44:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_approve0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be nft owner',
    who: 'arc72_approve'
    });
  const v3202 = ['arc72_approve0_356', v3178];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3202],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_approve"
            });
          ;
          const v3385 = v3368[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:spread', stdlib.UInt_max, '0')];
          const v3386 = v3368[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:spread', stdlib.UInt_max, '1')];
          const v3387 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v3386, ctc4), null);
          const v3392 = '                                                                                                                                                                                                                                                                ';
          const v3394 = {
            approved: v2942,
            originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            originTokenInfo: v3392,
            owner: v2942,
            tokenURI: v3392
            };
          const v3395 = stdlib.fromSome(v3387, v3394);
          const v3396 = v3395.owner;
          const v3407 = v3395.originChainInfo;
          const v3408 = v3395.originTokenInfo;
          const v3410 = v3395.tokenURI;
          const v3411 = {
            approved: v3385,
            originChainInfo: v3407,
            originTokenInfo: v3408,
            owner: v3396,
            tokenURI: v3410
            };
          await stdlib.simMapSet(sim_r, 0, ctc8, v3386, ctc4, v3411);
          null;
          const v3412 = null;
          const v3413 = await txn1.getOutput('arc72_approve', 'v3412', ctc0, v3412);
          
          const v11708 = v2948;
          const v11710 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v3385 = v3368[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:spread', stdlib.UInt_max, '0')];
      const v3386 = v3368[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:323:10:spread', stdlib.UInt_max, '1')];
      const v3387 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3386, ctc4), null);
      const v3388 = {
        None: 0,
        Some: 1
        }[v3387[0]];
      const v3389 = stdlib.eq(v3388, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3389, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:324:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:327:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:327:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_approve'
        });
      const v3392 = '                                                                                                                                                                                                                                                                ';
      const v3394 = {
        approved: v2942,
        originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        originTokenInfo: v3392,
        owner: v2942,
        tokenURI: v3392
        };
      const v3395 = stdlib.fromSome(v3387, v3394);
      const v3396 = v3395.owner;
      const v3397 = stdlib.addressEq(v3396, v3364);
      stdlib.assert(v3397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:325:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:327:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:327:13:function exp)'],
        msg: 'must be nft owner',
        who: 'arc72_approve'
        });
      const v3407 = v3395.originChainInfo;
      const v3408 = v3395.originTokenInfo;
      const v3410 = v3395.tokenURI;
      const v3411 = {
        approved: v3385,
        originChainInfo: v3407,
        originTokenInfo: v3408,
        owner: v3396,
        tokenURI: v3410
        };
      await stdlib.mapSet(map0, ctc8, v3386, ctc4, v3411);
      null;
      const v3412 = null;
      const v3413 = await txn1.getOutput('arc72_approve', 'v3412', ctc0, v3412);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v3368, v3413), {
          at: './impl/arc72b/ARC72_Bridge.rsh:323:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:323:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:323:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:334:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:327:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:327:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:327:13:function exp)'],
          msg: 'out',
          who: 'arc72_approve'
          });
        }
      else {
        }
      
      const v11708 = v2948;
      const v11710 = v2952;
      return;
      
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc8]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc11,
    arc72_transferFrom0_356: ctc13,
    burn0_356: ctc14,
    close0_356: ctc15,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc14,
    deleteNftIndexBox0_356: ctc14,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3206 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:341:55:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:341:55:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_setApprovalForAll0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:341:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'arc72_setApprovalForAll'
    });
  const v3218 = ['arc72_setApprovalForAll0_356', v3206];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3218],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_setApprovalForAll"
            });
          ;
          const v3833 = v3779[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:spread', stdlib.UInt_max, '0')];
          const v3834 = v3779[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:spread', stdlib.UInt_max, '1')];
          const v3837 = [v3364, v3833];
          await stdlib.simMapSet(sim_r, 1, ctc17, v3837, ctc6, v3834);
          null;
          const v3838 = null;
          const v3839 = await txn1.getOutput('arc72_setApprovalForAll', 'v3838', ctc0, v3838);
          
          const v11753 = v2948;
          const v11755 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v3833 = v3779[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:spread', stdlib.UInt_max, '0')];
      const v3834 = v3779[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:341:10:spread', stdlib.UInt_max, '1')];
      const v3837 = [v3364, v3833];
      await stdlib.mapSet(map1, ctc17, v3837, ctc6, v3834);
      null;
      const v3838 = null;
      const v3839 = await txn1.getOutput('arc72_setApprovalForAll', 'v3838', ctc0, v3838);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v3779, v3839), {
          at: './impl/arc72b/ARC72_Bridge.rsh:341:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:341:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:341:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:347:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:343:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:343:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:343:13:function exp)'],
          msg: 'out',
          who: 'arc72_setApprovalForAll'
          });
        }
      else {
        }
      
      const v11753 = v2948;
      const v11755 = v2952;
      return;
      
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc13,
    arc72_setApprovalForAll0_356: ctc14,
    arc72_transferFrom0_356: ctc11,
    burn0_356: ctc15,
    close0_356: ctc16,
    deleteHolderDataBox0_356: ctc17,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc12,
    grant0_356: ctc17,
    mintTo0_356: ctc18,
    touch0_356: ctc16
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3082 = ctc.selfAddress();
  const v3084 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'arc72_transferFrom'
    });
  const v3085 = v3084[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3086 = v3084[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3087 = v3084[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3091 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3087, ctc4), null);
  const v3092 = {
    None: 0,
    Some: 1
    }[v3091[0]];
  const v3093 = stdlib.eq(v3092, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3093, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'nft must exist',
    who: 'arc72_transferFrom'
    });
  const v3096 = '                                                                                                                                                                                                                                                                ';
  const v3098 = {
    approved: v2942,
    originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    originTokenInfo: v3096,
    owner: v2942,
    tokenURI: v3096
    };
  const v3099 = stdlib.fromSome(v3091, v3098);
  const v3100 = v3099.owner;
  const v3101 = stdlib.addressEq(v3085, v3100);
  const v3102 = v3101 ? false : true;
  stdlib.assert(v3102, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'ARC72: must be owner or operator',
    who: 'arc72_transferFrom'
    });
  const v3110 = stdlib.addressEq(v3082, v3100);
  const v3117 = [v3100, v3082];
  const v3118 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3117, ctc6), null);
  const v3119 = stdlib.fromSome(v3118, false);
  const v3125 = v3099.approved;
  const v3126 = stdlib.addressEq(v3125, v3082);
  const v3127 = v3119 ? true : v3126;
  const v3128 = v3110 ? true : v3127;
  stdlib.assert(v3128, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'ARC72: must be owner or operator to transfer',
    who: 'arc72_transferFrom'
    });
  const v3130 = stdlib.addressEq(v3085, v3086);
  const v3131 = v3130 ? false : true;
  stdlib.assert(v3131, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:292:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must transfer to different address',
    who: 'arc72_transferFrom'
    });
  const v3134 = stdlib.addressEq(v3085, v2942);
  stdlib.assert(v3134, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must not transfer from zero address',
    who: 'arc72_transferFrom'
    });
  const v3137 = stdlib.addressEq(v3086, v2942);
  stdlib.assert(v3137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:294:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must not be burned',
    who: 'arc72_transferFrom'
    });
  const v3145 = stdlib.addressEq(v3086, v3125);
  stdlib.assert(v3145, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must not be sent to approved address',
    who: 'arc72_transferFrom'
    });
  const v3157 = stdlib.addressEq(v3100, v3082);
  const v3159 = v3157 ? true : v3126;
  const v3163 = v3159 ? true : v3119;
  stdlib.assert(v3163, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:299:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:283:61:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:61:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runarc72_transferFrom0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be nft owner or approved operator',
    who: 'arc72_transferFrom'
    });
  const v3174 = ['arc72_transferFrom0_356', v3084];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3174],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc72_transferFrom"
            });
          ;
          const v4259 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '0')];
          const v4260 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '1')];
          const v4261 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '2')];
          const v4262 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v4261, ctc4), null);
          const v4267 = '                                                                                                                                                                                                                                                                ';
          const v4269 = {
            approved: v2942,
            originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            originTokenInfo: v4267,
            owner: v2942,
            tokenURI: v4267
            };
          const v4270 = stdlib.fromSome(v4262, v4269);
          const v4271 = v4270.owner;
          const v4288 = [v4271, v3364];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v4288, ctc6), null);
          const v4325 = v4270.tokenURI;
          const v4326 = v4270.originTokenInfo;
          const v4327 = v4270.originChainInfo;
          const v4350 = {
            approved: v2942,
            originChainInfo: v4327,
            originTokenInfo: v4326,
            owner: v4260,
            tokenURI: v4325
            };
          await stdlib.simMapSet(sim_r, 0, ctc8, v4261, ctc4, v4350);
          const v4351 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v4259, ctc8), null);
          const v4352 = stdlib.fromSome(v4351, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4353 = stdlib.safeSub256(v4352, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:310:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v4259, ctc8, v4353);
          const v4354 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v4260, ctc8), null);
          const v4355 = stdlib.fromSome(v4354, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4356 = stdlib.safeAdd256(v4355, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:311:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v4260, ctc8, v4356);
          null;
          const v4357 = null;
          const v4358 = await txn1.getOutput('arc72_transferFrom', 'v4357', ctc0, v4357);
          
          const v11798 = v2948;
          const v11800 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v4259 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '0')];
      const v4260 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '1')];
      const v4261 = v4190[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:283:10:spread', stdlib.UInt_max, '2')];
      const v4262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4261, ctc4), null);
      const v4263 = {
        None: 0,
        Some: 1
        }[v4262[0]];
      const v4264 = stdlib.eq(v4263, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4264, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'nft must exist',
        who: 'arc72_transferFrom'
        });
      const v4267 = '                                                                                                                                                                                                                                                                ';
      const v4269 = {
        approved: v2942,
        originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        originTokenInfo: v4267,
        owner: v2942,
        tokenURI: v4267
        };
      const v4270 = stdlib.fromSome(v4262, v4269);
      const v4271 = v4270.owner;
      const v4272 = stdlib.addressEq(v4259, v4271);
      const v4273 = v4272 ? false : true;
      stdlib.assert(v4273, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'ARC72: must be owner or operator',
        who: 'arc72_transferFrom'
        });
      const v4281 = stdlib.addressEq(v3364, v4271);
      const v4288 = [v4271, v3364];
      const v4289 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v4288, ctc6), null);
      const v4290 = stdlib.fromSome(v4289, false);
      const v4296 = v4270.approved;
      const v4297 = stdlib.addressEq(v4296, v3364);
      const v4298 = v4290 ? true : v4297;
      const v4299 = v4281 ? true : v4298;
      stdlib.assert(v4299, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'ARC72: must be owner or operator to transfer',
        who: 'arc72_transferFrom'
        });
      const v4301 = stdlib.addressEq(v4259, v4260);
      const v4302 = v4301 ? false : true;
      stdlib.assert(v4302, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:292:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'must transfer to different address',
        who: 'arc72_transferFrom'
        });
      const v4305 = stdlib.addressEq(v4259, v2942);
      stdlib.assert(v4305, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'must not transfer from zero address',
        who: 'arc72_transferFrom'
        });
      const v4308 = stdlib.addressEq(v4260, v2942);
      stdlib.assert(v4308, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:294:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'must not be burned',
        who: 'arc72_transferFrom'
        });
      const v4316 = stdlib.addressEq(v4260, v4296);
      stdlib.assert(v4316, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'must not be sent to approved address',
        who: 'arc72_transferFrom'
        });
      const v4325 = v4270.tokenURI;
      const v4326 = v4270.originTokenInfo;
      const v4327 = v4270.originChainInfo;
      const v4328 = stdlib.addressEq(v4271, v3364);
      const v4330 = v4328 ? true : v4297;
      const v4334 = v4330 ? true : v4290;
      stdlib.assert(v4334, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:299:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
        msg: 'must be nft owner or approved operator',
        who: 'arc72_transferFrom'
        });
      const v4350 = {
        approved: v2942,
        originChainInfo: v4327,
        originTokenInfo: v4326,
        owner: v4260,
        tokenURI: v4325
        };
      await stdlib.mapSet(map0, ctc8, v4261, ctc4, v4350);
      const v4351 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v4259, ctc8), null);
      const v4352 = stdlib.fromSome(v4351, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4353 = stdlib.safeSub256(v4352, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:310:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v4259, ctc8, v4353);
      const v4354 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v4260, ctc8), null);
      const v4355 = stdlib.fromSome(v4354, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4356 = stdlib.safeAdd256(v4355, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:311:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v4260, ctc8, v4356);
      null;
      const v4357 = null;
      const v4358 = await txn1.getOutput('arc72_transferFrom', 'v4357', ctc0, v4357);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v4190, v4358), {
          at: './impl/arc72b/ARC72_Bridge.rsh:283:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:283:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:283:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:314:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:304:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:304:13:function exp)'],
          msg: 'out',
          who: 'arc72_transferFrom'
          });
        }
      else {
        }
      
      const v11798 = v2948;
      const v11800 = v2952;
      return;
      
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc11,
    close0_356: ctc15,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc11,
    deleteNftIndexBox0_356: ctc11,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3220 = ctc.selfAddress();
  const v3222 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:354:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:354:29:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runburn0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:354:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v3223 = v3222[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3225 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3223, ctc4), null);
  const v3226 = '                                                                                                                                                                                                                                                                ';
  const v3228 = {
    approved: v2942,
    originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    originTokenInfo: v3226,
    owner: v2942,
    tokenURI: v3226
    };
  const v3229 = stdlib.fromSome(v3225, v3228);
  const v3230 = v3229.owner;
  const v3231 = stdlib.addressEq(v3230, v3220);
  stdlib.assert(v3231, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:354:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:354:29:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runburn0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:354:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be nft owner',
    who: 'burn'
    });
  const v3256 = ['burn0_356', v3222];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3256],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:354:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v4779 = v4601[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:354:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v4779, ctc4), null);
          await stdlib.simMapSet(sim_r, 0, ctc8, v4779, ctc4, undefined /* Nothing */);
          const v4807 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v3364, ctc8), null);
          const v4808 = stdlib.fromSome(v4807, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4809 = stdlib.safeSub256(v4808, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:363:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v3364, ctc8, v4809);
          null;
          const v4811 = null;
          const v4812 = await txn1.getOutput('burn', 'v4811', ctc0, v4811);
          
          const v4818 = v2948.manager;
          const v4819 = v2948.nMinted;
          const v4820 = v2948.totalSupply;
          const v4821 = v2948.zeroAddress;
          const v4823 = stdlib.safeSub256(v4820, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:370:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v4824 = {
            manager: v4818,
            nMinted: v4819,
            totalSupply: v4823,
            zeroAddress: v4821
            };
          const v11843 = v4824;
          const v11845 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v4779 = v4601[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:354:10:spread', stdlib.UInt_max, '0')];
      const v4780 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4779, ctc4), null);
      const v4781 = '                                                                                                                                                                                                                                                                ';
      const v4783 = {
        approved: v2942,
        originChainInfo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        originTokenInfo: v4781,
        owner: v2942,
        tokenURI: v4781
        };
      const v4784 = stdlib.fromSome(v4780, v4783);
      const v4785 = v4784.owner;
      const v4786 = stdlib.addressEq(v4785, v3364);
      stdlib.assert(v4786, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:361:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:361:13:function exp)'],
        msg: 'must be nft owner',
        who: 'burn'
        });
      await stdlib.mapSet(map0, ctc8, v4779, ctc4, undefined /* Nothing */);
      const v4807 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3364, ctc8), null);
      const v4808 = stdlib.fromSome(v4807, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4809 = stdlib.safeSub256(v4808, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:363:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v3364, ctc8, v4809);
      null;
      const v4811 = null;
      const v4812 = await txn1.getOutput('burn', 'v4811', ctc0, v4811);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v4601, v4812), {
          at: './impl/arc72b/ARC72_Bridge.rsh:354:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:354:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:354:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:366:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:361:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:361:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:361:13:function exp)'],
          msg: 'out',
          who: 'burn'
          });
        }
      else {
        }
      
      const v4818 = v2948.manager;
      const v4819 = v2948.nMinted;
      const v4820 = v2948.totalSupply;
      const v4821 = v2948.zeroAddress;
      const v4823 = stdlib.safeSub256(v4820, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:370:52:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v4824 = {
        manager: v4818,
        nMinted: v4819,
        totalSupply: v4823,
        zeroAddress: v4821
        };
      const v11843 = v4824;
      const v11845 = v2952;
      return;
      
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc15,
    close0_356: ctc11,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc11
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3342 = ctc.selfAddress();
  const v3344 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:451:23:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:451:23:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runclose0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:451:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v3345 = stdlib.addressEq(v3342, v2938);
  stdlib.assert(v3345, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:452:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:451:23:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:451:23:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runclose0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:451:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be manager to close',
    who: 'close'
    });
  const v3350 = ['close0_356', v3344];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3350],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:451:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v5241 = null;
          const v5242 = await txn1.getOutput('close', 'v5241', ctc0, v5241);
          
          const v11888 = v2948;
          const v11890 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v5239 = stdlib.addressEq(v3364, v2938);
      stdlib.assert(v5239, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:452:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:454:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:454:13:function exp)'],
        msg: 'must be manager to close',
        who: 'close'
        });
      const v5241 = null;
      const v5242 = await txn1.getOutput('close', 'v5241', ctc0, v5241);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v5012, v5242), {
          at: './impl/arc72b/ARC72_Bridge.rsh:451:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:451:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:451:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:455:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:454:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:454:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:454:13:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v11888 = v2948;
      const v11890 = v2952;
      return;
      
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc15,
    close0_356: ctc16,
    deleteHolderDataBox0_356: ctc11,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc11,
    mintTo0_356: ctc18,
    touch0_356: ctc16
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3321 = ctc.selfAddress();
  const v3323 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:438:43:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:43:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteHolderDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'deleteHolderDataBox'
    });
  const v3324 = v3323[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3326 = stdlib.addressEq(v3321, v2938);
  const v3327 = v2948.manager;
  const v3328 = stdlib.addressEq(v3321, v3327);
  const v3329 = v3326 ? true : v3328;
  stdlib.assert(v3329, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:439:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:438:43:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:43:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteHolderDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be manager to delete holder data box',
    who: 'deleteHolderDataBox'
    });
  const v3331 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v3324, ctc8), null);
  const v3332 = stdlib.fromSome(v3331, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3333 = stdlib.eq256(v3332, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:440:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3333, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:440:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:438:43:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:43:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteHolderDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must have zero balance',
    who: 'deleteHolderDataBox'
    });
  const v3340 = ['deleteHolderDataBox0_356', v3323];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3340],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:438:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteHolderDataBox"
            });
          ;
          const v5660 = v5423[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:438:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v5660, ctc8), null);
          await stdlib.simMapSet(sim_r, 2, ctc1, v5660, ctc8, undefined /* Nothing */);
          const v5671 = null;
          const v5672 = await txn1.getOutput('deleteHolderDataBox', 'v5671', ctc0, v5671);
          
          const v11933 = v2948;
          const v11935 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v5660 = v5423[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:438:10:spread', stdlib.UInt_max, '0')];
      const v5661 = stdlib.addressEq(v3364, v2938);
      const v5662 = v2948.manager;
      const v5663 = stdlib.addressEq(v3364, v5662);
      const v5664 = v5661 ? true : v5663;
      stdlib.assert(v5664, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:439:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:442:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:442:13:function exp)'],
        msg: 'must be manager to delete holder data box',
        who: 'deleteHolderDataBox'
        });
      const v5666 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v5660, ctc8), null);
      const v5667 = stdlib.fromSome(v5666, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5668 = stdlib.eq256(v5667, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:440:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5668, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:440:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:442:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:442:13:function exp)'],
        msg: 'must have zero balance',
        who: 'deleteHolderDataBox'
        });
      await stdlib.mapSet(map2, ctc1, v5660, ctc8, undefined /* Nothing */);
      const v5671 = null;
      const v5672 = await txn1.getOutput('deleteHolderDataBox', 'v5671', ctc0, v5671);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v5423, v5672), {
          at: './impl/arc72b/ARC72_Bridge.rsh:438:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:438:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:438:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:444:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:442:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:442:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:442:13:function exp)'],
          msg: 'out',
          who: 'deleteHolderDataBox'
          });
        }
      else {
        }
      
      const v11933 = v2948;
      const v11935 = v2952;
      return;
      
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc11,
    close0_356: ctc15,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc11,
    deleteNftIndexBox0_356: ctc11,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3266 = ctc.selfAddress();
  const v3268 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:390:41:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:390:41:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteNftDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:390:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'deleteNftDataBox'
    });
  const v3271 = stdlib.addressEq(v3266, v2938);
  const v3272 = v2948.manager;
  const v3273 = stdlib.addressEq(v3266, v3272);
  const v3274 = v3271 ? true : v3273;
  stdlib.assert(v3274, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:391:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:390:41:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:390:41:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteNftDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:390:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be manager to delete nft data box',
    who: 'deleteNftDataBox'
    });
  const v3281 = ['deleteNftDataBox0_356', v3268];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3281],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:390:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteNftDataBox"
            });
          ;
          const v6091 = v5834[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:390:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc8, v6091, ctc4, undefined /* Nothing */);
          const v6098 = null;
          const v6099 = await txn1.getOutput('deleteNftDataBox', 'v6098', ctc0, v6098);
          
          const v11978 = v2948;
          const v11980 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v6091 = v5834[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:390:10:spread', stdlib.UInt_max, '0')];
      const v6092 = stdlib.addressEq(v3364, v2938);
      const v6093 = v2948.manager;
      const v6094 = stdlib.addressEq(v3364, v6093);
      const v6095 = v6092 ? true : v6094;
      stdlib.assert(v6095, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:391:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:393:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:393:13:function exp)'],
        msg: 'must be manager to delete nft data box',
        who: 'deleteNftDataBox'
        });
      await stdlib.mapSet(map0, ctc8, v6091, ctc4, undefined /* Nothing */);
      const v6098 = null;
      const v6099 = await txn1.getOutput('deleteNftDataBox', 'v6098', ctc0, v6098);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v5834, v6099), {
          at: './impl/arc72b/ARC72_Bridge.rsh:390:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:390:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:390:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:395:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:393:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:393:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:393:13:function exp)'],
          msg: 'out',
          who: 'deleteNftDataBox'
          });
        }
      else {
        }
      
      const v11978 = v2948;
      const v11980 = v2952;
      return;
      
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteNftIndexBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteNftIndexBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteNftIndexBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc11,
    close0_356: ctc15,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc11,
    deleteNftIndexBox0_356: ctc11,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3304 = ctc.selfAddress();
  const v3306 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:416:40:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:40:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteNftIndexBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'deleteNftIndexBox'
    });
  const v3309 = stdlib.addressEq(v3304, v2938);
  const v3310 = v2948.manager;
  const v3311 = stdlib.addressEq(v3304, v3310);
  const v3312 = v3309 ? true : v3311;
  stdlib.assert(v3312, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:417:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:416:40:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:40:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteNftIndexBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be manager to delete nft index box',
    who: 'deleteNftIndexBox'
    });
  const v3319 = ['deleteNftIndexBox0_356', v3306];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3319],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:416:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteNftIndexBox"
            });
          ;
          const v6518 = v6245[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:416:10:spread', stdlib.UInt_max, '0')];
          const v6525 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v6518, ctc8), null);
          switch (v6525[0]) {
            case 'None': {
              const v6526 = v6525[1];
              const v6527 = null;
              const v6528 = await txn1.getOutput('deleteNftIndexBox', 'v6527', ctc0, v6527);
              
              const v12023 = v2948;
              const v12025 = v2952;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Some': {
              const v6535 = v6525[1];
              const v6536 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v6535, ctc4), null);
              switch (v6536[0]) {
                case 'None': {
                  const v6537 = v6536[1];
                  await stdlib.simMapSet(sim_r, 3, ctc8, v6518, ctc8, undefined /* Nothing */);
                  const v6538 = null;
                  const v6539 = await txn1.getOutput('deleteNftIndexBox', 'v6538', ctc0, v6538);
                  
                  const v12026 = v2948;
                  const v12028 = v2952;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Some': {
                  const v6546 = v6536[1];
                  const v6547 = null;
                  const v6548 = await txn1.getOutput('deleteNftIndexBox', 'v6547', ctc0, v6547);
                  
                  const v12029 = v2948;
                  const v12031 = v2952;
                  sim_r.isHalt = false;
                  
                  break;
                  }
                }
              break;
              }
            }
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v6518 = v6245[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:416:10:spread', stdlib.UInt_max, '0')];
      const v6519 = stdlib.addressEq(v3364, v2938);
      const v6520 = v2948.manager;
      const v6521 = stdlib.addressEq(v3364, v6520);
      const v6522 = v6519 ? true : v6521;
      stdlib.assert(v6522, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:417:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:419:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)'],
        msg: 'must be manager to delete nft index box',
        who: 'deleteNftIndexBox'
        });
      const v6525 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v6518, ctc8), null);
      switch (v6525[0]) {
        case 'None': {
          const v6526 = v6525[1];
          const v6527 = null;
          const v6528 = await txn1.getOutput('deleteNftIndexBox', 'v6527', ctc0, v6527);
          if (v2066) {
            stdlib.protect(ctc0, await interact.out(v6245, v6528), {
              at: './impl/arc72b/ARC72_Bridge.rsh:416:11:application',
              fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:416:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:431:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:419:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)'],
              msg: 'out',
              who: 'deleteNftIndexBox'
              });
            }
          else {
            }
          
          const v12023 = v2948;
          const v12025 = v2952;
          return;
          
          break;
          }
        case 'Some': {
          const v6535 = v6525[1];
          const v6536 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v6535, ctc4), null);
          switch (v6536[0]) {
            case 'None': {
              const v6537 = v6536[1];
              await stdlib.mapSet(map3, ctc8, v6518, ctc8, undefined /* Nothing */);
              const v6538 = null;
              const v6539 = await txn1.getOutput('deleteNftIndexBox', 'v6538', ctc0, v6538);
              if (v2066) {
                stdlib.protect(ctc0, await interact.out(v6245, v6539), {
                  at: './impl/arc72b/ARC72_Bridge.rsh:416:11:application',
                  fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:416:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:431:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:419:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)'],
                  msg: 'out',
                  who: 'deleteNftIndexBox'
                  });
                }
              else {
                }
              
              const v12026 = v2948;
              const v12028 = v2952;
              return;
              
              break;
              }
            case 'Some': {
              const v6546 = v6536[1];
              const v6547 = null;
              const v6548 = await txn1.getOutput('deleteNftIndexBox', 'v6547', ctc0, v6547);
              if (v2066) {
                stdlib.protect(ctc0, await interact.out(v6245, v6548), {
                  at: './impl/arc72b/ARC72_Bridge.rsh:416:11:application',
                  fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:416:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:416:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:431:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:419:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:419:13:function exp)'],
                  msg: 'out',
                  who: 'deleteNftIndexBox'
                  });
                }
              else {
                }
              
              const v12029 = v2948;
              const v12031 = v2952;
              return;
              
              break;
              }
            }
          break;
          }
        }
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc15,
    close0_356: ctc16,
    deleteHolderDataBox0_356: ctc17,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc11,
    grant0_356: ctc17,
    mintTo0_356: ctc18,
    touch0_356: ctc16
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3283 = ctc.selfAddress();
  const v3285 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:402:54:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:402:54:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteOperatorDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:402:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'deleteOperatorDataBox'
    });
  const v3290 = stdlib.addressEq(v3283, v2938);
  const v3291 = v2948.manager;
  const v3292 = stdlib.addressEq(v3283, v3291);
  const v3293 = v3290 ? true : v3292;
  stdlib.assert(v3293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:402:54:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:402:54:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rundeleteOperatorDataBox0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:402:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be manager to delete operator data box',
    who: 'deleteOperatorDataBox'
    });
  const v3302 = ['deleteOperatorDataBox0_356', v3285];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3302],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteOperatorDataBox"
            });
          ;
          const v6967 = v6656[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:spread', stdlib.UInt_max, '0')];
          const v6968 = v6656[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:spread', stdlib.UInt_max, '1')];
          const v6976 = [v6967, v6968];
          await stdlib.simMapSet(sim_r, 1, ctc11, v6976, ctc6, undefined /* Nothing */);
          const v6977 = null;
          const v6978 = await txn1.getOutput('deleteOperatorDataBox', 'v6977', ctc0, v6977);
          
          const v12074 = v2948;
          const v12076 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v6967 = v6656[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:spread', stdlib.UInt_max, '0')];
      const v6968 = v6656[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:402:10:spread', stdlib.UInt_max, '1')];
      const v6969 = stdlib.addressEq(v3364, v2938);
      const v6970 = v2948.manager;
      const v6971 = stdlib.addressEq(v3364, v6970);
      const v6972 = v6969 ? true : v6971;
      stdlib.assert(v6972, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:405:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:405:13:function exp)'],
        msg: 'must be manager to delete operator data box',
        who: 'deleteOperatorDataBox'
        });
      const v6976 = [v6967, v6968];
      await stdlib.mapSet(map1, ctc11, v6976, ctc6, undefined /* Nothing */);
      const v6977 = null;
      const v6978 = await txn1.getOutput('deleteOperatorDataBox', 'v6977', ctc0, v6977);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v6656, v6978), {
          at: './impl/arc72b/ARC72_Bridge.rsh:402:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:402:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:402:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:407:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:405:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:405:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:405:13:function exp)'],
          msg: 'out',
          who: 'deleteOperatorDataBox'
          });
        }
      else {
        }
      
      const v12074 = v2948;
      const v12076 = v2952;
      return;
      
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc15,
    close0_356: ctc16,
    deleteHolderDataBox0_356: ctc11,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc11,
    mintTo0_356: ctc18,
    touch0_356: ctc16
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3027 = ctc.selfAddress();
  const v3029 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:234:27:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:234:27:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rungrant0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:234:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v3032 = stdlib.addressEq(v3027, v2938);
  stdlib.assert(v3032, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:234:27:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:234:27:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "rungrant0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:234:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be owner to grant',
    who: 'grant'
    });
  const v3039 = ['grant0_356', v3029];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3039],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:234:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v7398 = v7067[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:234:10:spread', stdlib.UInt_max, '0')];
          const v7402 = null;
          const v7403 = await txn1.getOutput('grant', 'v7402', ctc0, v7402);
          
          const v7410 = v2948.nMinted;
          const v7411 = v2948.totalSupply;
          const v7412 = v2948.zeroAddress;
          const v7413 = {
            manager: v7398,
            nMinted: v7410,
            totalSupply: v7411,
            zeroAddress: v7412
            };
          const v12119 = v7413;
          const v12121 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v7398 = v7067[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:234:10:spread', stdlib.UInt_max, '0')];
      const v7399 = stdlib.addressEq(v3364, v2938);
      stdlib.assert(v7399, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:235:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:237:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:237:13:function exp)'],
        msg: 'must be owner to grant',
        who: 'grant'
        });
      const v7402 = null;
      const v7403 = await txn1.getOutput('grant', 'v7402', ctc0, v7402);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v7067, v7403), {
          at: './impl/arc72b/ARC72_Bridge.rsh:234:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:234:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:234:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:238:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:237:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:237:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:237:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v7410 = v2948.nMinted;
      const v7411 = v2948.totalSupply;
      const v7412 = v2948.zeroAddress;
      const v7413 = {
        manager: v7398,
        nMinted: v7410,
        totalSupply: v7411,
        zeroAddress: v7412
        };
      const v12119 = v7413;
      const v12121 = v2952;
      return;
      
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc15,
    close0_356: ctc16,
    deleteHolderDataBox0_356: ctc17,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc18,
    grant0_356: ctc17,
    mintTo0_356: ctc11,
    touch0_356: ctc16
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3041 = ctc.selfAddress();
  const v3043 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:247:63:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:63:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runmintTo0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'mintTo'
    });
  const v3046 = v3043[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3046, ctc4), null);
  const v3055 = {
    None: 0,
    Some: 1
    }[v3054[0]];
  const v3056 = stdlib.eq(v3055, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3056, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:248:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:247:63:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:63:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runmintTo0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'nft must not exist',
    who: 'mintTo'
    });
  const v3058 = stdlib.addressEq(v3041, v2938);
  const v3059 = v2948.manager;
  const v3060 = stdlib.addressEq(v3041, v3059);
  const v3061 = v3058 ? true : v3060;
  stdlib.assert(v3061, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:247:63:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:63:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runmintTo0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'must be manager to mint',
    who: 'mintTo'
    });
  const v3080 = ['mintTo0_356', v3043];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3080],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mintTo"
            });
          ;
          const v7828 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '0')];
          const v7829 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '1')];
          const v7830 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '2')];
          const v7831 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '3')];
          const v7832 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '4')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v7830, ctc4), null);
          const v7838 = v2948.manager;
          const v7842 = v2948.nMinted;
          const v7843 = stdlib.safeAdd256(v7842, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:250:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v7844 = v2948.totalSupply;
          const v7845 = stdlib.safeAdd256(v7844, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:251:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 3, ctc8, v7843, ctc8, v7830);
          const v7852 = {
            approved: v2942,
            originChainInfo: v7832,
            originTokenInfo: v7831,
            owner: v7828,
            tokenURI: v7829
            };
          await stdlib.simMapSet(sim_r, 0, ctc8, v7830, ctc4, v7852);
          const v7853 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc1, v7828, ctc8), null);
          const v7854 = stdlib.fromSome(v7853, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7855 = stdlib.safeAdd256(v7854, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:262:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          await stdlib.simMapSet(sim_r, 2, ctc1, v7828, ctc8, v7855);
          null;
          const v7857 = await txn1.getOutput('mintTo', 'v7830', ctc8, v7830);
          
          const v7870 = v2948.zeroAddress;
          const v7871 = {
            manager: v7838,
            nMinted: v7830,
            totalSupply: v7845,
            zeroAddress: v7870
            };
          const v12164 = v7871;
          const v12166 = v2952;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v7828 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '0')];
      const v7829 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '1')];
      const v7830 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '2')];
      const v7831 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '3')];
      const v7832 = v7478[stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:247:10:spread', stdlib.UInt_max, '4')];
      const v7833 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v7830, ctc4), null);
      const v7834 = {
        None: 0,
        Some: 1
        }[v7833[0]];
      const v7835 = stdlib.eq(v7834, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7835, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:248:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:253:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:253:13:function exp)'],
        msg: 'nft must not exist',
        who: 'mintTo'
        });
      const v7837 = stdlib.addressEq(v3364, v2938);
      const v7838 = v2948.manager;
      const v7839 = stdlib.addressEq(v3364, v7838);
      const v7840 = v7837 ? true : v7839;
      stdlib.assert(v7840, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:253:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:253:13:function exp)'],
        msg: 'must be manager to mint',
        who: 'mintTo'
        });
      const v7842 = v2948.nMinted;
      const v7843 = stdlib.safeAdd256(v7842, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:250:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v7844 = v2948.totalSupply;
      const v7845 = stdlib.safeAdd256(v7844, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:251:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map3, ctc8, v7843, ctc8, v7830);
      const v7852 = {
        approved: v2942,
        originChainInfo: v7832,
        originTokenInfo: v7831,
        owner: v7828,
        tokenURI: v7829
        };
      await stdlib.mapSet(map0, ctc8, v7830, ctc4, v7852);
      const v7853 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc1, v7828, ctc8), null);
      const v7854 = stdlib.fromSome(v7853, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:140:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7855 = stdlib.safeAdd256(v7854, stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:262:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      await stdlib.mapSet(map2, ctc1, v7828, ctc8, v7855);
      null;
      const v7857 = await txn1.getOutput('mintTo', 'v7830', ctc8, v7830);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v7478, v7857), {
          at: './impl/arc72b/ARC72_Bridge.rsh:247:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:247:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:247:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:265:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:253:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:253:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:253:13:function exp)'],
          msg: 'out',
          who: 'mintTo'
          });
        }
      else {
        }
      
      const v7870 = v2948.zeroAddress;
      const v7871 = {
        manager: v7838,
        nMinted: v7830,
        totalSupply: v7845,
        zeroAddress: v7870
        };
      const v12164 = v7871;
      const v12166 = v2952;
      return;
      
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['owner', ctc1], ['approved', ctc1], ['tokenURI', ctc2], ['originTokenInfo', ctc2], ['originChainInfo', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_UInt256;
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    manager: ctc1,
    nMinted: ctc8,
    totalSupply: ctc8,
    zeroAddress: ctc1
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc8, ctc2, ctc3]);
  const ctc19 = stdlib.T_Data({
    arc72_approve0_356: ctc12,
    arc72_setApprovalForAll0_356: ctc13,
    arc72_transferFrom0_356: ctc14,
    burn0_356: ctc15,
    close0_356: ctc11,
    deleteHolderDataBox0_356: ctc16,
    deleteNftDataBox0_356: ctc15,
    deleteNftIndexBox0_356: ctc15,
    deleteOperatorDataBox0_356: ctc17,
    grant0_356: ctc16,
    mintTo0_356: ctc18,
    touch0_356: ctc11
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc9;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc9;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2938, v2942, v2948, v2952] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc1, ctc10, ctc3]);
  const v3260 = stdlib.protect(ctc11, await interact.in(), {
    at: './impl/arc72b/ARC72_Bridge.rsh:1:23:application',
    fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:378:23:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:378:23:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to "runtouch0_356" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:378:10:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:196:29:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:196:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v3264 = ['touch0_356', v3260];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2938, v2942, v2948, v2952, v3264],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:378:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
      
      switch (v3365[0]) {
        case 'arc72_approve0_356': {
          const v3368 = v3365[1];
          
          break;
          }
        case 'arc72_setApprovalForAll0_356': {
          const v3779 = v3365[1];
          
          break;
          }
        case 'arc72_transferFrom0_356': {
          const v4190 = v3365[1];
          
          break;
          }
        case 'burn0_356': {
          const v4601 = v3365[1];
          
          break;
          }
        case 'close0_356': {
          const v5012 = v3365[1];
          
          break;
          }
        case 'deleteHolderDataBox0_356': {
          const v5423 = v3365[1];
          
          break;
          }
        case 'deleteNftDataBox0_356': {
          const v5834 = v3365[1];
          
          break;
          }
        case 'deleteNftIndexBox0_356': {
          const v6245 = v3365[1];
          
          break;
          }
        case 'deleteOperatorDataBox0_356': {
          const v6656 = v3365[1];
          
          break;
          }
        case 'grant0_356': {
          const v7067 = v3365[1];
          
          break;
          }
        case 'mintTo0_356': {
          const v7478 = v3365[1];
          
          break;
          }
        case 'touch0_356': {
          const v7889 = v3365[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v8287 = (stdlib.le(await ctc.getBalance(), v2952) ? stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:381:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2952));
          const v8288 = stdlib.safeAdd(v8287, v2952);
          const v8292 = stdlib.sub(v8288, v8287);
          sim_r.txns.push({
            kind: 'from',
            to: v2938,
            tok: undefined /* Nothing */
            });
          const v8293 = null;
          const v8294 = await txn1.getOutput('touch', 'v8293', ctc0, v8293);
          
          const v12209 = v2948;
          const v12211 = v8292;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc10, ctc3, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v3365], secs: v3367, time: v3366, didSend: v2066, from: v3364 } = txn1;
  switch (v3365[0]) {
    case 'arc72_approve0_356': {
      const v3368 = v3365[1];
      return;
      break;
      }
    case 'arc72_setApprovalForAll0_356': {
      const v3779 = v3365[1];
      return;
      break;
      }
    case 'arc72_transferFrom0_356': {
      const v4190 = v3365[1];
      return;
      break;
      }
    case 'burn0_356': {
      const v4601 = v3365[1];
      return;
      break;
      }
    case 'close0_356': {
      const v5012 = v3365[1];
      return;
      break;
      }
    case 'deleteHolderDataBox0_356': {
      const v5423 = v3365[1];
      return;
      break;
      }
    case 'deleteNftDataBox0_356': {
      const v5834 = v3365[1];
      return;
      break;
      }
    case 'deleteNftIndexBox0_356': {
      const v6245 = v3365[1];
      return;
      break;
      }
    case 'deleteOperatorDataBox0_356': {
      const v6656 = v3365[1];
      return;
      break;
      }
    case 'grant0_356': {
      const v7067 = v3365[1];
      return;
      break;
      }
    case 'mintTo0_356': {
      const v7478 = v3365[1];
      return;
      break;
      }
    case 'touch0_356': {
      const v7889 = v3365[1];
      undefined /* setApiDetails */;
      ;
      const v8287 = (stdlib.le(await ctc.getBalance(), v2952) ? stdlib.checkedBigNumberify('./impl/arc72b/ARC72_Bridge.rsh:381:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2952));
      const v8288 = stdlib.safeAdd(v8287, v2952);
      const v8292 = stdlib.sub(v8288, v8287);
      ;
      const v8293 = null;
      const v8294 = await txn1.getOutput('touch', 'v8293', ctc0, v8293);
      if (v2066) {
        stdlib.protect(ctc0, await interact.out(v7889, v8294), {
          at: './impl/arc72b/ARC72_Bridge.rsh:378:11:application',
          fs: ['at ./impl/arc72b/ARC72_Bridge.rsh:378:11:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:378:11:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:383:12:application call to "k" (defined at: ./impl/arc72b/ARC72_Bridge.rsh:380:13:function exp)', 'at ./impl/arc72b/ARC72_Bridge.rsh:380:13:application call to [unknown function] (defined at: ./impl/arc72b/ARC72_Bridge.rsh:380:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v12209 = v2948;
      const v12211 = v8292;
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
export async function deleteNftIndexBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteNftIndexBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteNftIndexBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteNftIndexBox3(ctcTop, interact);}
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
    impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[584])))void`, `arc72_approve(address,uint256)void`, `arc72_setApprovalForAll(address,byte)void`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteHolderDataBox(address)void`, `deleteNftDataBox(uint256)void`, `deleteNftIndexBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `mintTo(address,byte[256],uint256,byte[256],uint64)uint256`, `touch()void`],
    pure: [`arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `manager()address`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`],
    sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[584])))void`, `arc72_approve(address,uint256)void`, `arc72_balanceOf(address)uint256`, `arc72_getApproved(uint256)address`, `arc72_isApprovedForAll(address,address)byte`, `arc72_ownerOf(uint256)address`, `arc72_setApprovalForAll(address,byte)void`, `arc72_tokenByIndex(uint256)uint256`, `arc72_tokenURI(uint256)byte[256]`, `arc72_totalSupply()uint256`, `arc72_transferFrom(address,address,uint256)void`, `burn(uint256)void`, `close()void`, `deleteHolderDataBox(address)void`, `deleteNftDataBox(uint256)void`, `deleteNftIndexBox(uint256)void`, `deleteOperatorDataBox(address,address)void`, `grant(address)void`, `manager()address`, `mintTo(address,byte[256],uint256,byte[256],uint64)uint256`, `state()(address,uint256,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAiAAgPIBAHU3gHUmw+oBEDAAsAEINR6iAQmCAABAAECIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQMIAAAAAAAAAAEBAQTYCNT0MRhBDgwoZEkiWzUBI1s1AilkJwZkUIIYBB3CLywEJjpE0wQ+pg9/BFIeLWEEZNcqegRnQ0AxBG2b/ScEcTQ5XwRxXWDdBHkJahQEefWwjQSDE9XWBInM5vMElIqk8QSWVgR6BKSpLusErDGRJAS07bpOBMPB/AAEIXrcPQTjPYBSBOv3Ui8E8VBVJwTy8ZSgNhoAjhgPMQ8UDeQPNA28DxENrA2eDS8Nlg4BDewN9A2BDdkN3A15DWwNtA2JDzwNQQ3RDb8ANAtXACA1DTQLVyAgNQwoIQSvKTQMUIgPbEk1FCJVIQUSRCSvNQs0EUlQNAtQNAtQI69QNBSID1hJNRNXACBJNQsxABJEIQcpNAxQNAs0DVA0EyEJJFhQNBMhCiRYUDQTIQsjWFCID0qABIWi5uAxAFA0DVA0DFCwKDULgAgAAAAAAAANVDQLULA0CzUEMgY1DzQSNBFQNBBQNA4WUCUyBjUCNQEpSwFXAH9nJwZMV39JZyg0ARY0AhZQZzEZIhJEiA8XNANAAAqABBUffHU0BFCwIQVDNAtXACA1DTQLVyABF4EHkTUMIQ0nBTEANA1QUAE0DBZRBwiIDreABExN66sxAFA0DVA0DIEHkBZRBwhQsCg1C4AIAAAAAAAADv40C1CwNAs1BDIGNQ9C/2M0C1cAIDUTNAtXICA1DTQLV0AgNQwoIQSvKTQMUIgON0k1FCJVIQUSRCSvNQs0EUlQNAtQNAtQI69QNBSIDiNJNRdXACA1FjQTNBYTRCkoKScFNBYxAFBQAYgN+4gOAxc1FTQXVyAgSTUUMQASNQsxADQWEjQVNAsREUQ0EzQNE0Q0EzQREkQ0DTQREkQ0DTQUEkQ0FjEAEjQLETQVEUQhByk0DFA0DTQRUDQXIQkkWFA0FyEKJFhQNBchCyNYUIgNwiEGKjQTUDIDKDIDKjQTUIgNg4gNiyuhiA22iA2lIQYqNA1QMgMoMgMqNA1QiA1miA1uK6CIDZmIDYgnBzQTUDQNUDQMULAoNQuACAAAAAAAABEFNAtQsDQLNQQyBjUPQv4/NA1XASA1CySvNQw0EUlQNAxQNAxQI69QKCEEryk0C1CIDRCIDRhXACAxABJEIQcpNAtQiA1CIQYqMQBQMgMoMgMqMQBQiAzriAzzK6GIDR6IDQ0nBzEAUDQRUDQLULAoNQuACAAAAAAAABLLNAtQsDQLNQQ0EFcAIDQQVyAgUDQQV0AgK6GIDOVQNBBXYCBQMgY1DzUQQv2mMQA0EhJEKDULgAgAAAAAAAAUeTQLULA0CzUEMgY1D0L9hDQNVwEgNQsxADQSEjEANBBXACASEUQyAygyAyo0C1CIDFaIDF4yA6hEIQYqNAtQiAyLKDULgAgAAAAAAAAWJzQLULA0CzUEMgY1D0L9NjEANBISMQA0EFcAIBIRRCEHKTQNVwEgUIgMVCg1C4AIAAAAAAAAF9I0C1CwNAs1BDIGNQ9C/P80DVcBIDULMQA0EhIxADQQVwAgEhFEKDIDJwQ0C1CIC9JJNQwiVY0CCp4KukL8PjEANBISMQA0EFcAIBIRRCENJwU0C1cAIDQLVyAgUFABiAvmKDULgAgAAAAAAAAbQTQLULA0CzUEMgY1D0L8kTEANBISRCg1C4AIAAAAAAAAHOo0C1CwNAs1BDQNVwEgNBBXICBQNBBXQCBQNBBXYCBQMgY1DzUQQvxWNAtXACA1EzQLgaACIQxYNQ0oIQSvKTQNUIgLLiJVIhJENBBXACA1DDEANBISMQA0DBIRRCEGJwQ0EFcgICugiAtDUDQNiAsvIQcpNA1QNBM0EVA0CyEMJFhQNAshCiRYUDQLIQsjWFCICwwhBio0E1AyAygyAyo0E1CICs2ICtUroIgLAIgK7ycHNBFQNBNQNA1QsIAIAAAAAAAAHpY0DVCwNA01BDQMNA1QNBBXQCAroIgK0FA0EFdgIFAyBjUPNRBC+5EyCmAyCngJNA4JSTUMNBKICtQoNQuACAAAAAAAACBlNAtQsDQLNQQyBjQMNA4INAwJNQ41D0L7WSOvKTQMNAtQUCEOr1BQNQslNAESRIgKSTQLIls1DDQLI4HJBFg1DYAECGtBGDQMFlA0DVCwNAyICn40DSJVjQwIgwiNCJcIoQikCKcIqgitCLAIugi9CMlC+mw0ASUSRIgJ/jIDKDIDKjQLUIgJ3ogJ5jUEMRkiEkRC+xQ0ASUSRIgJ3SSvNQw0EUlQNAxQNAxQI69QKCEEryk0C1CICa2ICbVXICA1BEL/yTQBJRJEiAmuKSgpJwU0DDQLUFABiAmLiAmTF4EHkBZRBwg1BEL/ojQBJRJEiAmHJK81DDQRSVA0DFA0DFAjr1AoIQSvKTQLUIgJV4gJX1cAIDUEQv9zI68nBjQMNAsWUQcIUFCBpwSvUFA1C0L+9jQBJRJEiAk/KDIDJwQ0C1CICSBJNQwiVY0CCHUIfEL5jDQBJRJEiAkeKCEEryk0C1CICP9JNQwiVSEFEkQkrzULNBFJUDQLUDQLUCOvUDQMiAjrIQkkWDUEQv7+NAElEkSICOM0EFdAIDUEQv7sI68qNA00DFA0C1BQgegDr1BQNQtC/nEjrycENAtQIQivUFA1C0L+YIDRBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/Acjr4ABBTQLUCEIr1BQNQtC+/Ujr4ABBjQLUCEIr1BQNQtC++Mjr4ABBzQLUCEIr1BQNQtC+9Ejr4ABCDQMNAtQUCEOr1BQNQtC+7wjr4ABCTQLUCEIr1BQNQtC+6o0ASUSRIgF8zQQVwAgNQRC+/wjr4ABCjQPNA5QNA1QNAxQNAsWUFBQNQtC+300ASUSRIgFxjQQVwAgNBBXICBQNBBXQCBQNQRC+8M0ASUSRIgFqDQLATUMgCB6MKGEdFXO/SM9xMbQ82s+tkZSEYaWqYf2l2wEYBxDTTQMEoAgF53Hb38jIICq8a/GGGqnxOmOO0/rnb5sIiXvLav9LzM0DBKAII4xX5AU3m9WrClNPpiLzWQF7MpgsB+tqwLhx6FyEMDKNAwSgCALXm0OmoWrX6RUpT2w1Yv3FCkG2Sh1v9I7QVppkWnFQjQMEhERERZRBwg1BEL7FoDRBAAAAAAAAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC+FkxADUSNAwiWzUNNAxXCCA1C4AE3jrwoTQNFlA0C1CwNA2IAt00CzURNBIyA1AyA1A0EVAyBiI1DjUPNRBC82OIAqSBoI0GiAKyNhoBNQxC/6+IApI2GgE1C0L3/SIxNBJEJTE1EkQiMTYSRCIxNxJEiAJzgcgBryIiQvM1NhoBNhoCNQs1DEL3wDYaATULQvgTNhoBNQtC+Cw2GgE2GgI1CzUMQvhONhoBNQtC+G02GgE2GgIXNQs1DEL4jjYaATULQvifNhoBNQtC+LhC+PA2GgE2GgI2GgM1CzUMNQ1C+PA2GgE1C0L4/0L5DTYaATULQvteNhoBNQtC+2g2GgE1C0L7cjYaATYaAjULNQxC+3c2GgE1C0L7hDQLNQ00DTUEQveZNA1XAUA1C0Lx4zQNVwEhNQtC8q40DVcBYDULQvL9QvQeQvS0QvTTQvUeQvVSNA1XAUA1C0L1d0L1szQNIQUhBFg1C0L14kL2pCg1C4AIAAAAAAAAGX80C1CwNAs1BDIGNQ9C8hkoIQSvKTQMVwEgUIgA/yJVjQIAAwApQvFuIQYnBDQLUIgBLyg1C4AIAAAAAAAAGYo0C1CwNAs1BDIGNQ9C8dooNQuACAAAAAAAABmTNAtQsDQLNQQyBjUPQvG+SEy/SIkisgEhBbIQsgeyCLOJMgM1DUL/IDQMVwEgNQsoIQSvKTQLUIgAhyJVjQIAA/8CQvD2MgM1DUL+/EL6izYaATYaAjYaAzYaBDYaBRc1CzUMNQ01DjUPQvqAQvqYNhoBNQtC+q5C+1hIiUwJSTUGMgmIAJyJCUlB/+5JNQYxFjQAIQUISTUACUcCOAcyChJEOBAhBRJEOAgORIkxGYEFEkSIAGAiMgoyCYgAeELxPr5JFlEHCEUETVCJSVcBAEwiVU2JSVcAIDUSSVcgIDURSVdAgDUQgcABWzUOiUxJvUD/G0sDiAAtQv8TSRUhDEwJr0xQibwiTgJNNAcINQeJIQU1A4k0BjQHSg9B/11C/2WxQv7uNAYINQaJSSISTDQCEhFEibGyCUL+2A==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `13`,
    1000: `498`,
    1001: `498`,
    1002: `499`,
    1003: `499`,
    1004: `499`,
    1005: `500`,
    1006: `501`,
    1007: `502`,
    1008: `502`,
    1009: `502`,
    101: `14`,
    1010: `503`,
    1011: `504`,
    1012: `504`,
    1013: `505`,
    1014: `505`,
    1015: `505`,
    1016: `506`,
    1017: `507`,
    1018: `507`,
    1019: `508`,
    102: `14`,
    1020: `508`,
    1021: `509`,
    1022: `509`,
    1023: `510`,
    1024: `510`,
    1025: `510`,
    1026: `512`,
    1027: `512`,
    1028: `513`,
    1029: `513`,
    103: `15`,
    1030: `514`,
    1031: `515`,
    1032: `520`,
    1033: `521`,
    1034: `521`,
    1035: `522`,
    1036: `522`,
    1037: `522`,
    1038: `522`,
    1039: `522`,
    104: `16`,
    1040: `522`,
    1041: `522`,
    1042: `522`,
    1043: `522`,
    1044: `522`,
    1045: `523`,
    1046: `523`,
    1047: `524`,
    1048: `525`,
    1049: `526`,
    105: `17`,
    1050: `526`,
    1051: `527`,
    1052: `527`,
    1053: `528`,
    1054: `528`,
    1055: `529`,
    1056: `529`,
    1057: `530`,
    1058: `530`,
    1059: `530`,
    106: `17`,
    1060: `532`,
    1061: `532`,
    1062: `533`,
    1063: `533`,
    1064: `533`,
    1065: `534`,
    1066: `534`,
    1067: `535`,
    1068: `535`,
    1069: `536`,
    107: `18`,
    1070: `536`,
    1071: `537`,
    1072: `538`,
    1073: `538`,
    1074: `539`,
    1075: `539`,
    1076: `540`,
    1077: `540`,
    1078: `540`,
    1079: `541`,
    108: `19`,
    1080: `542`,
    1081: `543`,
    1082: `548`,
    1083: `548`,
    1084: `550`,
    1085: `551`,
    1086: `551`,
    1087: `552`,
    1088: `553`,
    1089: `553`,
    109: `21`,
    1090: `554`,
    1091: `555`,
    1092: `555`,
    1093: `555`,
    1094: `556`,
    1095: `556`,
    1096: `556`,
    1097: `557`,
    1098: `557`,
    1099: `558`,
    11: `2`,
    110: `21`,
    1100: `559`,
    1101: `564`,
    1102: `564`,
    1103: `565`,
    1104: `566`,
    1105: `566`,
    1106: `567`,
    1107: `568`,
    1108: `568`,
    1109: `568`,
    111: `21`,
    1110: `569`,
    1111: `570`,
    1112: `570`,
    1113: `571`,
    1114: `571`,
    1115: `571`,
    1116: `571`,
    1117: `571`,
    1118: `571`,
    1119: `571`,
    112: `21`,
    1120: `571`,
    1121: `571`,
    1122: `571`,
    1123: `572`,
    1124: `572`,
    1125: `573`,
    1126: `574`,
    1127: `575`,
    1128: `575`,
    1129: `576`,
    113: `21`,
    1130: `576`,
    1131: `577`,
    1132: `577`,
    1133: `578`,
    1134: `578`,
    1135: `579`,
    1136: `579`,
    1137: `579`,
    1138: `581`,
    1139: `581`,
    114: `21`,
    1140: `582`,
    1141: `582`,
    1142: `583`,
    1143: `584`,
    1144: `584`,
    1145: `585`,
    1146: `585`,
    1147: `586`,
    1148: `586`,
    1149: `586`,
    115: `21`,
    1150: `587`,
    1151: `588`,
    1152: `589`,
    1153: `595`,
    1154: `595`,
    1155: `596`,
    1156: `597`,
    1157: `597`,
    1158: `598`,
    1159: `598`,
    116: `21`,
    1160: `598`,
    1161: `599`,
    1162: `600`,
    1163: `600`,
    1164: `600`,
    1165: `601`,
    1166: `602`,
    1167: `602`,
    1168: `603`,
    1169: `603`,
    117: `21`,
    1170: `603`,
    1171: `603`,
    1172: `603`,
    1173: `603`,
    1174: `603`,
    1175: `603`,
    1176: `603`,
    1177: `603`,
    1178: `604`,
    1179: `604`,
    118: `21`,
    1180: `605`,
    1181: `606`,
    1182: `607`,
    1183: `607`,
    1184: `608`,
    1185: `608`,
    1186: `609`,
    1187: `609`,
    1188: `610`,
    1189: `610`,
    119: `21`,
    1190: `611`,
    1191: `611`,
    1192: `611`,
    1193: `613`,
    1194: `613`,
    1195: `614`,
    1196: `614`,
    1197: `614`,
    1198: `615`,
    1199: `615`,
    12: `2`,
    120: `21`,
    1200: `616`,
    1201: `616`,
    1202: `617`,
    1203: `617`,
    1204: `618`,
    1205: `619`,
    1206: `619`,
    1207: `620`,
    1208: `620`,
    1209: `621`,
    121: `21`,
    1210: `621`,
    1211: `621`,
    1212: `622`,
    1213: `623`,
    1214: `624`,
    1215: `630`,
    1216: `631`,
    1217: `631`,
    1218: `632`,
    1219: `632`,
    122: `21`,
    1220: `633`,
    1221: `633`,
    1222: `634`,
    1223: `635`,
    1224: `635`,
    1225: `635`,
    1226: `636`,
    1227: `637`,
    1228: `637`,
    1229: `638`,
    123: `21`,
    1230: `639`,
    1231: `640`,
    1232: `640`,
    1233: `640`,
    1234: `640`,
    1235: `640`,
    1236: `640`,
    1237: `641`,
    1238: `641`,
    1239: `641`,
    124: `21`,
    1240: `643`,
    1241: `643`,
    1242: `644`,
    1243: `644`,
    1244: `645`,
    1245: `646`,
    1246: `646`,
    1247: `647`,
    1248: `647`,
    1249: `648`,
    125: `21`,
    1250: `648`,
    1251: `648`,
    1252: `649`,
    1253: `650`,
    1254: `651`,
    1255: `657`,
    1256: `657`,
    1257: `658`,
    1258: `658`,
    1259: `659`,
    126: `21`,
    1260: `659`,
    1261: `660`,
    1262: `660`,
    1263: `660`,
    1264: `661`,
    1265: `661`,
    1266: `662`,
    1267: `662`,
    1268: `662`,
    1269: `663`,
    127: `21`,
    1270: `664`,
    1271: `665`,
    1272: `666`,
    1273: `666`,
    1274: `666`,
    1275: `667`,
    1276: `668`,
    1277: `668`,
    1278: `669`,
    1279: `669`,
    128: `21`,
    1280: `669`,
    1281: `669`,
    1282: `669`,
    1283: `669`,
    1284: `669`,
    1285: `669`,
    1286: `669`,
    1287: `669`,
    1288: `670`,
    1289: `670`,
    129: `21`,
    1290: `671`,
    1291: `672`,
    1292: `673`,
    1293: `673`,
    1294: `674`,
    1295: `674`,
    1296: `675`,
    1297: `675`,
    1298: `676`,
    1299: `676`,
    13: `2`,
    130: `21`,
    1300: `677`,
    1301: `677`,
    1302: `677`,
    1303: `679`,
    1304: `679`,
    1305: `680`,
    1306: `680`,
    1307: `681`,
    1308: `682`,
    1309: `687`,
    131: `21`,
    1310: `688`,
    1311: `688`,
    1312: `689`,
    1313: `689`,
    1314: `689`,
    1315: `689`,
    1316: `689`,
    1317: `689`,
    1318: `689`,
    1319: `689`,
    132: `21`,
    1320: `689`,
    1321: `689`,
    1322: `690`,
    1323: `690`,
    1324: `691`,
    1325: `692`,
    1326: `693`,
    1327: `693`,
    1328: `694`,
    1329: `694`,
    133: `21`,
    1330: `695`,
    1331: `695`,
    1332: `696`,
    1333: `696`,
    1334: `696`,
    1335: `697`,
    1336: `697`,
    1337: `698`,
    1338: `698`,
    1339: `698`,
    134: `21`,
    1340: `699`,
    1341: `700`,
    1342: `700`,
    1343: `701`,
    1344: `701`,
    1345: `701`,
    1346: `702`,
    1347: `703`,
    1348: `703`,
    1349: `704`,
    135: `21`,
    1350: `704`,
    1351: `704`,
    1352: `705`,
    1353: `706`,
    1354: `706`,
    1355: `707`,
    1356: `707`,
    1357: `708`,
    1358: `708`,
    1359: `709`,
    136: `21`,
    1360: `709`,
    1361: `709`,
    1362: `711`,
    1363: `711`,
    1364: `712`,
    1365: `712`,
    1366: `712`,
    1367: `713`,
    1368: `713`,
    1369: `714`,
    137: `21`,
    1370: `714`,
    1371: `715`,
    1372: `715`,
    1373: `715`,
    1374: `716`,
    1375: `716`,
    1376: `717`,
    1377: `718`,
    1378: `718`,
    1379: `720`,
    138: `21`,
    1380: `721`,
    1381: `721`,
    1382: `722`,
    1383: `723`,
    1384: `724`,
    1385: `724`,
    1386: `725`,
    1387: `726`,
    1388: `726`,
    1389: `726`,
    139: `21`,
    1390: `727`,
    1391: `728`,
    1392: `729`,
    1393: `730`,
    1394: `731`,
    1395: `736`,
    1396: `736`,
    1397: `737`,
    1398: `737`,
    1399: `737`,
    14: `2`,
    140: `21`,
    1400: `738`,
    1401: `738`,
    1402: `739`,
    1403: `739`,
    1404: `740`,
    1405: `740`,
    1406: `741`,
    1407: `742`,
    1408: `742`,
    1409: `743`,
    141: `21`,
    1410: `743`,
    1411: `744`,
    1412: `745`,
    1413: `746`,
    1414: `752`,
    1415: `752`,
    1416: `753`,
    1417: `753`,
    1418: `754`,
    1419: `754`,
    142: `21`,
    1420: `755`,
    1421: `755`,
    1422: `755`,
    1423: `756`,
    1424: `757`,
    1425: `758`,
    1426: `758`,
    1427: `758`,
    1428: `759`,
    1429: `760`,
    143: `21`,
    1430: `760`,
    1431: `761`,
    1432: `761`,
    1433: `761`,
    1434: `762`,
    1435: `762`,
    1436: `763`,
    1437: `764`,
    1438: `764`,
    1439: `765`,
    144: `21`,
    1440: `766`,
    1441: `766`,
    1442: `767`,
    1443: `767`,
    1444: `768`,
    1445: `769`,
    1446: `769`,
    1447: `770`,
    1448: `770`,
    1449: `771`,
    145: `21`,
    1450: `772`,
    1451: `773`,
    1452: `774`,
    1453: `774`,
    1454: `775`,
    1455: `775`,
    1456: `776`,
    1457: `777`,
    1458: `778`,
    1459: `779`,
    146: `21`,
    1460: `779`,
    1461: `780`,
    1462: `780`,
    1463: `781`,
    1464: `782`,
    1465: `783`,
    1466: `784`,
    1467: `784`,
    1468: `784`,
    1469: `786`,
    147: `21`,
    1470: `786`,
    1471: `787`,
    1472: `788`,
    1473: `788`,
    1474: `789`,
    1475: `790`,
    1476: `790`,
    1477: `791`,
    1478: `792`,
    1479: `792`,
    148: `21`,
    1480: `793`,
    1481: `794`,
    1482: `794`,
    1483: `795`,
    1484: `796`,
    1485: `796`,
    1486: `796`,
    1487: `797`,
    1488: `797`,
    1489: `797`,
    149: `21`,
    1490: `798`,
    1491: `799`,
    1492: `800`,
    1493: `800`,
    1494: `800`,
    1495: `801`,
    1496: `801`,
    1497: `801`,
    1498: `802`,
    1499: `802`,
    15: `2`,
    150: `21`,
    1500: `803`,
    1501: `803`,
    1502: `804`,
    1503: `805`,
    1504: `805`,
    1505: `806`,
    1506: `807`,
    1507: `807`,
    1508: `808`,
    1509: `809`,
    151: `21`,
    1510: `811`,
    1511: `811`,
    1512: `811`,
    1513: `811`,
    1514: `811`,
    1515: `811`,
    1516: `811`,
    1517: `811`,
    1518: `811`,
    1519: `811`,
    152: `21`,
    1520: `812`,
    1521: `812`,
    1522: `813`,
    1523: `814`,
    1524: `815`,
    1525: `815`,
    1526: `816`,
    1527: `816`,
    1528: `817`,
    1529: `817`,
    153: `21`,
    1530: `818`,
    1531: `818`,
    1532: `819`,
    1533: `820`,
    1534: `820`,
    1535: `821`,
    1536: `821`,
    1537: `821`,
    1538: `822`,
    1539: `823`,
    154: `21`,
    1540: `824`,
    1541: `824`,
    1542: `824`,
    1543: `825`,
    1544: `826`,
    1545: `826`,
    1546: `827`,
    1547: `827`,
    1548: `827`,
    1549: `828`,
    155: `21`,
    1550: `829`,
    1551: `829`,
    1552: `830`,
    1553: `830`,
    1554: `831`,
    1555: `831`,
    1556: `832`,
    1557: `832`,
    1558: `832`,
    1559: `834`,
    156: `21`,
    1560: `834`,
    1561: `835`,
    1562: `836`,
    1563: `836`,
    1564: `837`,
    1565: `838`,
    1566: `839`,
    1567: `839`,
    1568: `840`,
    1569: `842`,
    157: `21`,
    1570: `843`,
    1571: `843`,
    1572: `845`,
    1573: `845`,
    1574: `846`,
    1575: `846`,
    1576: `846`,
    1577: `847`,
    1578: `848`,
    1579: `848`,
    158: `21`,
    1580: `849`,
    1581: `849`,
    1582: `849`,
    1583: `849`,
    1584: `849`,
    1585: `849`,
    1586: `849`,
    1587: `849`,
    1588: `849`,
    1589: `849`,
    159: `21`,
    1590: `850`,
    1591: `850`,
    1592: `851`,
    1593: `852`,
    1594: `853`,
    1595: `853`,
    1596: `854`,
    1597: `854`,
    1598: `855`,
    1599: `855`,
    16: `2`,
    160: `21`,
    1600: `856`,
    1601: `856`,
    1602: `857`,
    1603: `857`,
    1604: `858`,
    1605: `859`,
    1606: `859`,
    1607: `860`,
    1608: `861`,
    1609: `861`,
    161: `21`,
    1610: `862`,
    1611: `862`,
    1612: `863`,
    1613: `863`,
    1614: `863`,
    1615: `865`,
    1616: `866`,
    1617: `867`,
    1618: `868`,
    1619: `868`,
    162: `21`,
    1620: `869`,
    1621: `869`,
    1622: `870`,
    1623: `871`,
    1624: `872`,
    1625: `872`,
    1626: `873`,
    1627: `874`,
    1628: `875`,
    1629: `876`,
    163: `21`,
    1630: `876`,
    1631: `878`,
    1632: `879`,
    1633: `879`,
    1634: `880`,
    1635: `881`,
    1636: `882`,
    1637: `882`,
    1638: `882`,
    1639: `883`,
    164: `21`,
    1640: `883`,
    1641: `884`,
    1642: `885`,
    1643: `886`,
    1644: `886`,
    1645: `887`,
    1646: `887`,
    1647: `888`,
    1648: `889`,
    1649: `889`,
    165: `21`,
    1650: `889`,
    1651: `890`,
    1652: `891`,
    1653: `891`,
    1654: `892`,
    1655: `892`,
    1656: `892`,
    1657: `892`,
    1658: `892`,
    1659: `892`,
    166: `21`,
    1660: `893`,
    1661: `893`,
    1662: `894`,
    1663: `895`,
    1664: `896`,
    1665: `896`,
    1666: `897`,
    1667: `898`,
    1668: `900`,
    1669: `900`,
    167: `21`,
    1670: `901`,
    1671: `901`,
    1672: `901`,
    1673: `902`,
    1674: `902`,
    1675: `903`,
    1676: `904`,
    1677: `905`,
    1678: `905`,
    1679: `905`,
    168: `21`,
    1680: `905`,
    1681: `905`,
    1682: `905`,
    1683: `905`,
    1684: `905`,
    1685: `905`,
    1686: `905`,
    1687: `905`,
    1688: `905`,
    1689: `905`,
    169: `21`,
    1690: `905`,
    1691: `905`,
    1692: `905`,
    1693: `905`,
    1694: `905`,
    1695: `905`,
    1696: `905`,
    1697: `905`,
    1698: `905`,
    1699: `905`,
    17: `2`,
    170: `21`,
    1700: `905`,
    1701: `905`,
    1702: `905`,
    1703: `906`,
    1704: `906`,
    1705: `906`,
    1706: `908`,
    1707: `908`,
    1708: `909`,
    1709: `910`,
    171: `21`,
    1710: `911`,
    1711: `914`,
    1712: `914`,
    1713: `914`,
    1714: `915`,
    1715: `915`,
    1716: `917`,
    1717: `918`,
    1718: `918`,
    1719: `919`,
    172: `21`,
    1720: `920`,
    1721: `920`,
    1722: `921`,
    1723: `922`,
    1724: `922`,
    1725: `922`,
    1726: `923`,
    1727: `923`,
    1728: `923`,
    1729: `924`,
    173: `21`,
    1730: `924`,
    1731: `926`,
    1732: `926`,
    1733: `927`,
    1734: `928`,
    1735: `929`,
    1736: `931`,
    1737: `931`,
    1738: `931`,
    1739: `933`,
    174: `21`,
    1740: `933`,
    1741: `934`,
    1742: `935`,
    1743: `936`,
    1744: `939`,
    1745: `939`,
    1746: `939`,
    1747: `940`,
    1748: `941`,
    1749: `942`,
    175: `21`,
    1750: `942`,
    1751: `943`,
    1752: `943`,
    1753: `944`,
    1754: `945`,
    1755: `946`,
    1756: `946`,
    1757: `947`,
    1758: `948`,
    1759: `948`,
    176: `21`,
    1760: `949`,
    1761: `950`,
    1762: `951`,
    1763: `952`,
    1764: `954`,
    1765: `955`,
    1766: `955`,
    1767: `956`,
    1768: `957`,
    1769: `958`,
    177: `21`,
    1770: `958`,
    1771: `959`,
    1772: `960`,
    1773: `960`,
    1774: `960`,
    1775: `961`,
    1776: `961`,
    1777: `961`,
    1778: `962`,
    1779: `962`,
    178: `21`,
    1780: `962`,
    1781: `963`,
    1782: `963`,
    1783: `964`,
    1784: `964`,
    1785: `964`,
    1786: `966`,
    1787: `966`,
    1788: `967`,
    1789: `968`,
    179: `21`,
    1790: `969`,
    1791: `972`,
    1792: `972`,
    1793: `972`,
    1794: `973`,
    1795: `975`,
    1796: `976`,
    1797: `977`,
    1798: `977`,
    1799: `978`,
    18: `2`,
    180: `21`,
    1800: `978`,
    1801: `979`,
    1802: `979`,
    1803: `980`,
    1804: `981`,
    1805: `982`,
    1806: `983`,
    1807: `983`,
    1808: `983`,
    1809: `984`,
    181: `21`,
    1810: `984`,
    1811: `984`,
    1812: `985`,
    1813: `985`,
    1814: `986`,
    1815: `986`,
    1816: `986`,
    1817: `988`,
    1818: `988`,
    1819: `989`,
    182: `21`,
    1820: `990`,
    1821: `991`,
    1822: `994`,
    1823: `994`,
    1824: `994`,
    1825: `995`,
    1826: `996`,
    1827: `997`,
    1828: `997`,
    1829: `998`,
    183: `21`,
    1830: `998`,
    1831: `999`,
    1832: `1000`,
    1833: `1001`,
    1834: `1001`,
    1835: `1002`,
    1836: `1003`,
    1837: `1003`,
    1838: `1004`,
    1839: `1005`,
    184: `21`,
    1840: `1006`,
    1841: `1007`,
    1842: `1009`,
    1843: `1010`,
    1844: `1010`,
    1845: `1011`,
    1846: `1012`,
    1847: `1013`,
    1848: `1013`,
    1849: `1014`,
    185: `21`,
    1850: `1015`,
    1851: `1015`,
    1852: `1015`,
    1853: `1016`,
    1854: `1016`,
    1855: `1016`,
    1856: `1017`,
    1857: `1017`,
    1858: `1017`,
    1859: `1018`,
    186: `21`,
    1860: `1018`,
    1861: `1019`,
    1862: `1019`,
    1863: `1019`,
    1864: `1021`,
    1865: `1022`,
    1866: `1023`,
    1867: `1023`,
    1868: `1024`,
    1869: `1024`,
    187: `21`,
    1870: `1025`,
    1871: `1025`,
    1872: `1026`,
    1873: `1027`,
    1874: `1027`,
    1875: `1027`,
    1876: `1028`,
    1877: `1029`,
    1878: `1030`,
    1879: `1030`,
    188: `21`,
    1880: `1030`,
    1881: `1031`,
    1882: `1032`,
    1883: `1033`,
    1884: `1034`,
    1885: `1034`,
    1886: `1035`,
    1887: `1035`,
    1888: `1035`,
    1889: `1037`,
    189: `21`,
    1890: `1037`,
    1891: `1038`,
    1892: `1039`,
    1893: `1040`,
    1894: `1043`,
    1895: `1043`,
    1896: `1043`,
    1897: `1045`,
    1898: `1046`,
    1899: `1046`,
    19: `2`,
    190: `21`,
    1900: `1047`,
    1901: `1047`,
    1902: `1048`,
    1903: `1048`,
    1904: `1049`,
    1905: `1050`,
    1906: `1050`,
    1907: `1050`,
    1908: `1051`,
    1909: `1052`,
    191: `21`,
    1910: `1052`,
    1911: `1053`,
    1912: `1054`,
    1913: `1055`,
    1914: `1055`,
    1915: `1055`,
    1916: `1055`,
    1917: `1055`,
    1918: `1055`,
    1919: `1056`,
    192: `21`,
    1920: `1056`,
    1921: `1056`,
    1922: `1058`,
    1923: `1058`,
    1924: `1059`,
    1925: `1060`,
    1926: `1061`,
    1927: `1064`,
    1928: `1064`,
    1929: `1064`,
    193: `21`,
    1930: `1066`,
    1931: `1067`,
    1932: `1067`,
    1933: `1068`,
    1934: `1069`,
    1935: `1070`,
    1936: `1070`,
    1937: `1071`,
    1938: `1072`,
    1939: `1072`,
    194: `21`,
    1940: `1072`,
    1941: `1073`,
    1942: `1074`,
    1943: `1074`,
    1944: `1075`,
    1945: `1076`,
    1946: `1077`,
    1947: `1077`,
    1948: `1078`,
    1949: `1079`,
    195: `21`,
    1950: `1084`,
    1951: `1085`,
    1952: `1086`,
    1953: `1086`,
    1954: `1087`,
    1955: `1087`,
    1956: `1088`,
    1957: `1089`,
    1958: `1090`,
    1959: `1090`,
    196: `21`,
    1960: `1091`,
    1961: `1092`,
    1962: `1092`,
    1963: `1093`,
    1964: `1094`,
    1965: `1095`,
    1966: `1096`,
    1967: `1097`,
    1968: `1097`,
    1969: `1098`,
    197: `21`,
    1970: `1098`,
    1971: `1098`,
    1972: `1099`,
    1973: `1099`,
    1974: `1100`,
    1975: `1101`,
    1976: `1102`,
    1977: `1102`,
    1978: `1103`,
    1979: `1103`,
    198: `21`,
    1980: `1103`,
    1981: `1105`,
    1982: `1105`,
    1983: `1106`,
    1984: `1107`,
    1985: `1108`,
    1986: `1111`,
    1987: `1111`,
    1988: `1111`,
    1989: `1112`,
    199: `21`,
    1990: `1112`,
    1991: `1113`,
    1992: `1113`,
    1993: `1113`,
    1994: `1114`,
    1995: `1114`,
    1996: `1115`,
    1997: `1115`,
    1998: `1115`,
    1999: `1117`,
    2: `2`,
    20: `2`,
    200: `21`,
    2000: `1118`,
    2001: `1119`,
    2002: `1120`,
    2003: `1120`,
    2004: `1121`,
    2005: `1121`,
    2006: `1122`,
    2007: `1123`,
    2008: `1123`,
    2009: `1124`,
    201: `21`,
    2010: `1125`,
    2011: `1126`,
    2012: `1126`,
    2013: `1126`,
    2014: `1127`,
    2015: `1128`,
    2016: `1129`,
    2017: `1130`,
    2018: `1130`,
    2019: `1131`,
    202: `21`,
    2020: `1131`,
    2021: `1131`,
    2022: `1133`,
    2023: `1134`,
    2024: `1135`,
    2025: `1135`,
    2026: `1136`,
    2027: `1136`,
    2028: `1137`,
    2029: `1138`,
    203: `21`,
    2030: `1138`,
    2031: `1139`,
    2032: `1140`,
    2033: `1141`,
    2034: `1142`,
    2035: `1142`,
    2036: `1143`,
    2037: `1143`,
    2038: `1143`,
    2039: `1145`,
    204: `21`,
    2040: `1145`,
    2041: `1145`,
    2042: `1145`,
    2043: `1145`,
    2044: `1145`,
    2045: `1145`,
    2046: `1145`,
    2047: `1145`,
    2048: `1145`,
    2049: `1145`,
    205: `21`,
    2050: `1145`,
    2051: `1145`,
    2052: `1145`,
    2053: `1145`,
    2054: `1145`,
    2055: `1145`,
    2056: `1145`,
    2057: `1145`,
    2058: `1145`,
    2059: `1145`,
    206: `21`,
    2060: `1145`,
    2061: `1145`,
    2062: `1145`,
    2063: `1145`,
    2064: `1145`,
    2065: `1145`,
    2066: `1145`,
    2067: `1145`,
    2068: `1145`,
    2069: `1145`,
    207: `21`,
    2070: `1145`,
    2071: `1145`,
    2072: `1145`,
    2073: `1145`,
    2074: `1145`,
    2075: `1145`,
    2076: `1145`,
    2077: `1145`,
    2078: `1145`,
    2079: `1145`,
    208: `21`,
    2080: `1145`,
    2081: `1145`,
    2082: `1145`,
    2083: `1145`,
    2084: `1145`,
    2085: `1145`,
    2086: `1145`,
    2087: `1145`,
    2088: `1145`,
    2089: `1145`,
    209: `21`,
    2090: `1145`,
    2091: `1145`,
    2092: `1145`,
    2093: `1145`,
    2094: `1145`,
    2095: `1145`,
    2096: `1145`,
    2097: `1145`,
    2098: `1145`,
    2099: `1145`,
    21: `2`,
    210: `21`,
    2100: `1145`,
    2101: `1145`,
    2102: `1145`,
    2103: `1145`,
    2104: `1145`,
    2105: `1145`,
    2106: `1145`,
    2107: `1145`,
    2108: `1145`,
    2109: `1145`,
    211: `21`,
    2110: `1145`,
    2111: `1145`,
    2112: `1145`,
    2113: `1145`,
    2114: `1145`,
    2115: `1145`,
    2116: `1145`,
    2117: `1145`,
    2118: `1145`,
    2119: `1145`,
    212: `21`,
    2120: `1145`,
    2121: `1145`,
    2122: `1145`,
    2123: `1145`,
    2124: `1145`,
    2125: `1145`,
    2126: `1145`,
    2127: `1145`,
    2128: `1145`,
    2129: `1145`,
    213: `21`,
    2130: `1145`,
    2131: `1145`,
    2132: `1145`,
    2133: `1145`,
    2134: `1145`,
    2135: `1145`,
    2136: `1145`,
    2137: `1145`,
    2138: `1145`,
    2139: `1145`,
    214: `21`,
    2140: `1145`,
    2141: `1145`,
    2142: `1145`,
    2143: `1145`,
    2144: `1145`,
    2145: `1145`,
    2146: `1145`,
    2147: `1145`,
    2148: `1145`,
    2149: `1145`,
    215: `21`,
    2150: `1145`,
    2151: `1145`,
    2152: `1145`,
    2153: `1145`,
    2154: `1145`,
    2155: `1145`,
    2156: `1145`,
    2157: `1145`,
    2158: `1145`,
    2159: `1145`,
    216: `21`,
    2160: `1145`,
    2161: `1145`,
    2162: `1145`,
    2163: `1145`,
    2164: `1145`,
    2165: `1145`,
    2166: `1145`,
    2167: `1145`,
    2168: `1145`,
    2169: `1145`,
    217: `21`,
    2170: `1145`,
    2171: `1145`,
    2172: `1145`,
    2173: `1145`,
    2174: `1145`,
    2175: `1145`,
    2176: `1145`,
    2177: `1145`,
    2178: `1145`,
    2179: `1145`,
    218: `21`,
    2180: `1145`,
    2181: `1145`,
    2182: `1145`,
    2183: `1145`,
    2184: `1145`,
    2185: `1145`,
    2186: `1145`,
    2187: `1145`,
    2188: `1145`,
    2189: `1145`,
    219: `21`,
    2190: `1145`,
    2191: `1145`,
    2192: `1145`,
    2193: `1145`,
    2194: `1145`,
    2195: `1145`,
    2196: `1145`,
    2197: `1145`,
    2198: `1145`,
    2199: `1145`,
    22: `2`,
    220: `21`,
    2200: `1145`,
    2201: `1145`,
    2202: `1145`,
    2203: `1145`,
    2204: `1145`,
    2205: `1145`,
    2206: `1145`,
    2207: `1145`,
    2208: `1145`,
    2209: `1145`,
    221: `21`,
    2210: `1145`,
    2211: `1145`,
    2212: `1145`,
    2213: `1145`,
    2214: `1145`,
    2215: `1145`,
    2216: `1145`,
    2217: `1145`,
    2218: `1145`,
    2219: `1145`,
    222: `21`,
    2220: `1145`,
    2221: `1145`,
    2222: `1145`,
    2223: `1145`,
    2224: `1145`,
    2225: `1145`,
    2226: `1145`,
    2227: `1145`,
    2228: `1145`,
    2229: `1145`,
    223: `21`,
    2230: `1145`,
    2231: `1145`,
    2232: `1145`,
    2233: `1145`,
    2234: `1145`,
    2235: `1145`,
    2236: `1145`,
    2237: `1145`,
    2238: `1145`,
    2239: `1145`,
    224: `21`,
    2240: `1145`,
    2241: `1145`,
    2242: `1145`,
    2243: `1145`,
    2244: `1145`,
    2245: `1145`,
    2246: `1145`,
    2247: `1145`,
    2248: `1145`,
    2249: `1145`,
    225: `21`,
    2250: `1145`,
    2251: `1145`,
    2252: `1145`,
    2253: `1145`,
    2254: `1145`,
    2255: `1145`,
    2256: `1145`,
    2257: `1145`,
    2258: `1145`,
    2259: `1145`,
    226: `21`,
    2260: `1145`,
    2261: `1145`,
    2262: `1145`,
    2263: `1145`,
    2264: `1145`,
    2265: `1145`,
    2266: `1145`,
    2267: `1145`,
    2268: `1145`,
    2269: `1145`,
    227: `21`,
    2270: `1145`,
    2271: `1145`,
    2272: `1145`,
    2273: `1145`,
    2274: `1145`,
    2275: `1145`,
    2276: `1145`,
    2277: `1145`,
    2278: `1145`,
    2279: `1145`,
    228: `21`,
    2280: `1145`,
    2281: `1145`,
    2282: `1145`,
    2283: `1145`,
    2284: `1145`,
    2285: `1145`,
    2286: `1145`,
    2287: `1145`,
    2288: `1145`,
    2289: `1145`,
    229: `21`,
    2290: `1145`,
    2291: `1145`,
    2292: `1145`,
    2293: `1145`,
    2294: `1145`,
    2295: `1145`,
    2296: `1145`,
    2297: `1145`,
    2298: `1145`,
    2299: `1145`,
    23: `2`,
    230: `21`,
    2300: `1145`,
    2301: `1145`,
    2302: `1145`,
    2303: `1145`,
    2304: `1145`,
    2305: `1145`,
    2306: `1145`,
    2307: `1145`,
    2308: `1145`,
    2309: `1145`,
    231: `22`,
    2310: `1145`,
    2311: `1145`,
    2312: `1145`,
    2313: `1145`,
    2314: `1145`,
    2315: `1145`,
    2316: `1145`,
    2317: `1145`,
    2318: `1145`,
    2319: `1145`,
    232: `22`,
    2320: `1145`,
    2321: `1145`,
    2322: `1145`,
    2323: `1145`,
    2324: `1145`,
    2325: `1145`,
    2326: `1145`,
    2327: `1145`,
    2328: `1145`,
    2329: `1145`,
    233: `22`,
    2330: `1145`,
    2331: `1145`,
    2332: `1145`,
    2333: `1145`,
    2334: `1145`,
    2335: `1145`,
    2336: `1145`,
    2337: `1145`,
    2338: `1145`,
    2339: `1145`,
    234: `23`,
    2340: `1145`,
    2341: `1145`,
    2342: `1145`,
    2343: `1145`,
    2344: `1145`,
    2345: `1145`,
    2346: `1145`,
    2347: `1145`,
    2348: `1145`,
    2349: `1145`,
    235: `23`,
    2350: `1145`,
    2351: `1145`,
    2352: `1145`,
    2353: `1145`,
    2354: `1145`,
    2355: `1145`,
    2356: `1145`,
    2357: `1145`,
    2358: `1145`,
    2359: `1145`,
    236: `23`,
    2360: `1145`,
    2361: `1145`,
    2362: `1145`,
    2363: `1145`,
    2364: `1145`,
    2365: `1145`,
    2366: `1145`,
    2367: `1145`,
    2368: `1145`,
    2369: `1145`,
    237: `23`,
    2370: `1145`,
    2371: `1145`,
    2372: `1145`,
    2373: `1145`,
    2374: `1145`,
    2375: `1145`,
    2376: `1145`,
    2377: `1145`,
    2378: `1145`,
    2379: `1145`,
    238: `23`,
    2380: `1145`,
    2381: `1145`,
    2382: `1145`,
    2383: `1145`,
    2384: `1145`,
    2385: `1145`,
    2386: `1145`,
    2387: `1145`,
    2388: `1145`,
    2389: `1145`,
    239: `23`,
    2390: `1145`,
    2391: `1145`,
    2392: `1145`,
    2393: `1145`,
    2394: `1145`,
    2395: `1145`,
    2396: `1145`,
    2397: `1145`,
    2398: `1145`,
    2399: `1145`,
    24: `2`,
    240: `23`,
    2400: `1145`,
    2401: `1145`,
    2402: `1145`,
    2403: `1145`,
    2404: `1145`,
    2405: `1145`,
    2406: `1145`,
    2407: `1145`,
    2408: `1145`,
    2409: `1145`,
    241: `23`,
    2410: `1145`,
    2411: `1145`,
    2412: `1145`,
    2413: `1145`,
    2414: `1145`,
    2415: `1145`,
    2416: `1145`,
    2417: `1145`,
    2418: `1145`,
    2419: `1145`,
    242: `23`,
    2420: `1145`,
    2421: `1145`,
    2422: `1145`,
    2423: `1145`,
    2424: `1145`,
    2425: `1145`,
    2426: `1145`,
    2427: `1145`,
    2428: `1145`,
    2429: `1145`,
    243: `23`,
    2430: `1145`,
    2431: `1145`,
    2432: `1145`,
    2433: `1145`,
    2434: `1145`,
    2435: `1145`,
    2436: `1145`,
    2437: `1145`,
    2438: `1145`,
    2439: `1145`,
    244: `23`,
    2440: `1145`,
    2441: `1145`,
    2442: `1145`,
    2443: `1145`,
    2444: `1145`,
    2445: `1145`,
    2446: `1145`,
    2447: `1145`,
    2448: `1145`,
    2449: `1145`,
    245: `23`,
    2450: `1145`,
    2451: `1145`,
    2452: `1145`,
    2453: `1145`,
    2454: `1145`,
    2455: `1145`,
    2456: `1145`,
    2457: `1145`,
    2458: `1145`,
    2459: `1145`,
    246: `23`,
    2460: `1145`,
    2461: `1145`,
    2462: `1145`,
    2463: `1145`,
    2464: `1145`,
    2465: `1145`,
    2466: `1145`,
    2467: `1145`,
    2468: `1145`,
    2469: `1145`,
    247: `23`,
    2470: `1145`,
    2471: `1145`,
    2472: `1145`,
    2473: `1145`,
    2474: `1145`,
    2475: `1145`,
    2476: `1145`,
    2477: `1145`,
    2478: `1145`,
    2479: `1145`,
    248: `23`,
    2480: `1145`,
    2481: `1145`,
    2482: `1145`,
    2483: `1145`,
    2484: `1145`,
    2485: `1145`,
    2486: `1145`,
    2487: `1145`,
    2488: `1145`,
    2489: `1145`,
    249: `23`,
    2490: `1145`,
    2491: `1145`,
    2492: `1145`,
    2493: `1145`,
    2494: `1145`,
    2495: `1145`,
    2496: `1145`,
    2497: `1145`,
    2498: `1145`,
    2499: `1145`,
    25: `2`,
    250: `23`,
    2500: `1145`,
    2501: `1145`,
    2502: `1145`,
    2503: `1145`,
    2504: `1145`,
    2505: `1145`,
    2506: `1145`,
    2507: `1145`,
    2508: `1145`,
    2509: `1145`,
    251: `23`,
    2510: `1145`,
    2511: `1145`,
    2512: `1145`,
    2513: `1145`,
    2514: `1145`,
    2515: `1145`,
    2516: `1145`,
    2517: `1145`,
    2518: `1145`,
    2519: `1145`,
    252: `23`,
    2520: `1145`,
    2521: `1145`,
    2522: `1145`,
    2523: `1145`,
    2524: `1145`,
    2525: `1145`,
    2526: `1145`,
    2527: `1145`,
    2528: `1145`,
    2529: `1145`,
    253: `23`,
    2530: `1145`,
    2531: `1145`,
    2532: `1145`,
    2533: `1145`,
    2534: `1145`,
    2535: `1145`,
    2536: `1145`,
    2537: `1145`,
    2538: `1145`,
    2539: `1145`,
    254: `23`,
    2540: `1145`,
    2541: `1145`,
    2542: `1145`,
    2543: `1145`,
    2544: `1145`,
    2545: `1145`,
    2546: `1145`,
    2547: `1145`,
    2548: `1145`,
    2549: `1145`,
    255: `23`,
    2550: `1145`,
    2551: `1145`,
    2552: `1145`,
    2553: `1145`,
    2554: `1145`,
    2555: `1145`,
    2556: `1145`,
    2557: `1145`,
    2558: `1145`,
    2559: `1145`,
    256: `23`,
    2560: `1145`,
    2561: `1145`,
    2562: `1145`,
    2563: `1145`,
    2564: `1145`,
    2565: `1145`,
    2566: `1145`,
    2567: `1145`,
    2568: `1145`,
    2569: `1145`,
    257: `23`,
    2570: `1145`,
    2571: `1145`,
    2572: `1145`,
    2573: `1145`,
    2574: `1145`,
    2575: `1145`,
    2576: `1145`,
    2577: `1145`,
    2578: `1145`,
    2579: `1145`,
    258: `23`,
    2580: `1145`,
    2581: `1145`,
    2582: `1145`,
    2583: `1145`,
    2584: `1145`,
    2585: `1145`,
    2586: `1145`,
    2587: `1145`,
    2588: `1145`,
    2589: `1145`,
    259: `23`,
    2590: `1145`,
    2591: `1145`,
    2592: `1145`,
    2593: `1145`,
    2594: `1145`,
    2595: `1145`,
    2596: `1145`,
    2597: `1145`,
    2598: `1145`,
    2599: `1145`,
    26: `2`,
    260: `23`,
    2600: `1145`,
    2601: `1145`,
    2602: `1145`,
    2603: `1145`,
    2604: `1145`,
    2605: `1145`,
    2606: `1145`,
    2607: `1145`,
    2608: `1145`,
    2609: `1145`,
    261: `23`,
    2610: `1145`,
    2611: `1145`,
    2612: `1145`,
    2613: `1145`,
    2614: `1145`,
    2615: `1145`,
    2616: `1145`,
    2617: `1145`,
    2618: `1145`,
    2619: `1145`,
    262: `23`,
    2620: `1145`,
    2621: `1145`,
    2622: `1145`,
    2623: `1145`,
    2624: `1145`,
    2625: `1145`,
    2626: `1145`,
    2627: `1145`,
    2628: `1145`,
    2629: `1145`,
    263: `23`,
    2630: `1145`,
    2631: `1145`,
    2632: `1145`,
    2633: `1145`,
    2634: `1145`,
    2635: `1146`,
    2636: `1146`,
    2637: `1147`,
    2638: `1147`,
    2639: `1147`,
    264: `23`,
    2640: `1149`,
    2641: `1150`,
    2642: `1151`,
    2643: `1151`,
    2644: `1151`,
    2645: `1152`,
    2646: `1152`,
    2647: `1153`,
    2648: `1154`,
    2649: `1154`,
    265: `23`,
    2650: `1155`,
    2651: `1156`,
    2652: `1157`,
    2653: `1158`,
    2654: `1158`,
    2655: `1159`,
    2656: `1159`,
    2657: `1159`,
    2658: `1161`,
    2659: `1162`,
    266: `23`,
    2660: `1163`,
    2661: `1163`,
    2662: `1163`,
    2663: `1164`,
    2664: `1164`,
    2665: `1165`,
    2666: `1166`,
    2667: `1166`,
    2668: `1167`,
    2669: `1168`,
    267: `23`,
    2670: `1169`,
    2671: `1170`,
    2672: `1170`,
    2673: `1171`,
    2674: `1171`,
    2675: `1171`,
    2676: `1173`,
    2677: `1174`,
    2678: `1175`,
    2679: `1175`,
    268: `23`,
    2680: `1175`,
    2681: `1176`,
    2682: `1176`,
    2683: `1177`,
    2684: `1178`,
    2685: `1178`,
    2686: `1179`,
    2687: `1180`,
    2688: `1181`,
    2689: `1182`,
    269: `23`,
    2690: `1182`,
    2691: `1183`,
    2692: `1183`,
    2693: `1183`,
    2694: `1185`,
    2695: `1186`,
    2696: `1187`,
    2697: `1187`,
    2698: `1187`,
    2699: `1188`,
    27: `2`,
    270: `23`,
    2700: `1188`,
    2701: `1189`,
    2702: `1189`,
    2703: `1190`,
    2704: `1191`,
    2705: `1192`,
    2706: `1192`,
    2707: `1193`,
    2708: `1194`,
    2709: `1195`,
    271: `23`,
    2710: `1196`,
    2711: `1196`,
    2712: `1197`,
    2713: `1197`,
    2714: `1197`,
    2715: `1199`,
    2716: `1200`,
    2717: `1201`,
    2718: `1201`,
    2719: `1201`,
    272: `23`,
    2720: `1202`,
    2721: `1202`,
    2722: `1203`,
    2723: `1204`,
    2724: `1204`,
    2725: `1205`,
    2726: `1206`,
    2727: `1207`,
    2728: `1208`,
    2729: `1208`,
    273: `23`,
    2730: `1209`,
    2731: `1209`,
    2732: `1209`,
    2733: `1211`,
    2734: `1211`,
    2735: `1212`,
    2736: `1213`,
    2737: `1214`,
    2738: `1217`,
    2739: `1217`,
    274: `23`,
    2740: `1217`,
    2741: `1218`,
    2742: `1218`,
    2743: `1219`,
    2744: `1219`,
    2745: `1219`,
    2746: `1220`,
    2747: `1220`,
    2748: `1221`,
    2749: `1221`,
    275: `23`,
    2750: `1221`,
    2751: `1223`,
    2752: `1224`,
    2753: `1225`,
    2754: `1225`,
    2755: `1225`,
    2756: `1226`,
    2757: `1226`,
    2758: `1227`,
    2759: `1227`,
    276: `23`,
    2760: `1228`,
    2761: `1229`,
    2762: `1229`,
    2763: `1230`,
    2764: `1231`,
    2765: `1231`,
    2766: `1232`,
    2767: `1233`,
    2768: `1233`,
    2769: `1234`,
    277: `23`,
    2770: `1235`,
    2771: `1236`,
    2772: `1237`,
    2773: `1238`,
    2774: `1238`,
    2775: `1239`,
    2776: `1239`,
    2777: `1239`,
    2778: `1241`,
    2779: `1241`,
    278: `23`,
    2780: `1242`,
    2781: `1243`,
    2782: `1244`,
    2783: `1247`,
    2784: `1247`,
    2785: `1247`,
    2786: `1248`,
    2787: `1248`,
    2788: `1249`,
    2789: `1249`,
    279: `23`,
    2790: `1249`,
    2791: `1250`,
    2792: `1250`,
    2793: `1251`,
    2794: `1251`,
    2795: `1251`,
    2796: `1252`,
    2797: `1253`,
    2798: `1253`,
    2799: `1254`,
    28: `2`,
    280: `23`,
    2800: `1254`,
    2801: `1254`,
    2802: `1255`,
    2803: `1256`,
    2804: `1256`,
    2805: `1257`,
    2806: `1257`,
    2807: `1257`,
    2808: `1259`,
    2809: `1259`,
    281: `23`,
    2810: `1260`,
    2811: `1261`,
    2812: `1262`,
    2813: `1265`,
    2814: `1265`,
    2815: `1265`,
    2816: `1266`,
    2817: `1266`,
    2818: `1267`,
    2819: `1268`,
    282: `23`,
    2820: `1268`,
    2821: `1269`,
    2822: `1269`,
    2823: `1269`,
    2824: `1269`,
    2825: `1269`,
    2826: `1269`,
    2827: `1269`,
    2828: `1269`,
    2829: `1269`,
    283: `23`,
    2830: `1269`,
    2831: `1269`,
    2832: `1269`,
    2833: `1269`,
    2834: `1269`,
    2835: `1269`,
    2836: `1269`,
    2837: `1269`,
    2838: `1269`,
    2839: `1269`,
    284: `25`,
    2840: `1269`,
    2841: `1269`,
    2842: `1269`,
    2843: `1269`,
    2844: `1269`,
    2845: `1269`,
    2846: `1269`,
    2847: `1269`,
    2848: `1269`,
    2849: `1269`,
    285: `27`,
    2850: `1269`,
    2851: `1269`,
    2852: `1269`,
    2853: `1269`,
    2854: `1269`,
    2855: `1270`,
    2856: `1270`,
    2857: `1271`,
    2858: `1272`,
    2859: `1272`,
    286: `27`,
    2860: `1272`,
    2861: `1272`,
    2862: `1272`,
    2863: `1272`,
    2864: `1272`,
    2865: `1272`,
    2866: `1272`,
    2867: `1272`,
    2868: `1272`,
    2869: `1272`,
    287: `28`,
    2870: `1272`,
    2871: `1272`,
    2872: `1272`,
    2873: `1272`,
    2874: `1272`,
    2875: `1272`,
    2876: `1272`,
    2877: `1272`,
    2878: `1272`,
    2879: `1272`,
    288: `28`,
    2880: `1272`,
    2881: `1272`,
    2882: `1272`,
    2883: `1272`,
    2884: `1272`,
    2885: `1272`,
    2886: `1272`,
    2887: `1272`,
    2888: `1272`,
    2889: `1272`,
    289: `28`,
    2890: `1272`,
    2891: `1272`,
    2892: `1273`,
    2893: `1273`,
    2894: `1274`,
    2895: `1275`,
    2896: `1275`,
    2897: `1275`,
    2898: `1275`,
    2899: `1275`,
    29: `2`,
    290: `29`,
    2900: `1275`,
    2901: `1275`,
    2902: `1275`,
    2903: `1275`,
    2904: `1275`,
    2905: `1275`,
    2906: `1275`,
    2907: `1275`,
    2908: `1275`,
    2909: `1275`,
    291: `29`,
    2910: `1275`,
    2911: `1275`,
    2912: `1275`,
    2913: `1275`,
    2914: `1275`,
    2915: `1275`,
    2916: `1275`,
    2917: `1275`,
    2918: `1275`,
    2919: `1275`,
    292: `30`,
    2920: `1275`,
    2921: `1275`,
    2922: `1275`,
    2923: `1275`,
    2924: `1275`,
    2925: `1275`,
    2926: `1275`,
    2927: `1275`,
    2928: `1275`,
    2929: `1276`,
    293: `30`,
    2930: `1276`,
    2931: `1277`,
    2932: `1278`,
    2933: `1278`,
    2934: `1278`,
    2935: `1278`,
    2936: `1278`,
    2937: `1278`,
    2938: `1278`,
    2939: `1278`,
    294: `31`,
    2940: `1278`,
    2941: `1278`,
    2942: `1278`,
    2943: `1278`,
    2944: `1278`,
    2945: `1278`,
    2946: `1278`,
    2947: `1278`,
    2948: `1278`,
    2949: `1278`,
    295: `31`,
    2950: `1278`,
    2951: `1278`,
    2952: `1278`,
    2953: `1278`,
    2954: `1278`,
    2955: `1278`,
    2956: `1278`,
    2957: `1278`,
    2958: `1278`,
    2959: `1278`,
    296: `31`,
    2960: `1278`,
    2961: `1278`,
    2962: `1278`,
    2963: `1278`,
    2964: `1278`,
    2965: `1278`,
    2966: `1279`,
    2967: `1279`,
    2968: `1280`,
    2969: `1281`,
    297: `32`,
    2970: `1282`,
    2971: `1283`,
    2972: `1284`,
    2973: `1285`,
    2974: `1285`,
    2975: `1285`,
    2976: `1286`,
    2977: `1286`,
    2978: `1287`,
    2979: `1287`,
    298: `32`,
    2980: `1287`,
    2981: `1289`,
    2982: `1289`,
    2983: `1289`,
    2984: `1289`,
    2985: `1289`,
    2986: `1289`,
    2987: `1289`,
    2988: `1289`,
    2989: `1289`,
    299: `34`,
    2990: `1289`,
    2991: `1289`,
    2992: `1289`,
    2993: `1289`,
    2994: `1289`,
    2995: `1289`,
    2996: `1289`,
    2997: `1289`,
    2998: `1289`,
    2999: `1289`,
    3: `2`,
    30: `2`,
    300: `35`,
    3000: `1289`,
    3001: `1289`,
    3002: `1289`,
    3003: `1289`,
    3004: `1289`,
    3005: `1289`,
    3006: `1289`,
    3007: `1289`,
    3008: `1289`,
    3009: `1289`,
    301: `35`,
    3010: `1289`,
    3011: `1289`,
    3012: `1289`,
    3013: `1289`,
    3014: `1289`,
    3015: `1289`,
    3016: `1289`,
    3017: `1289`,
    3018: `1289`,
    3019: `1289`,
    302: `36`,
    3020: `1289`,
    3021: `1289`,
    3022: `1289`,
    3023: `1289`,
    3024: `1289`,
    3025: `1289`,
    3026: `1289`,
    3027: `1289`,
    3028: `1289`,
    3029: `1289`,
    303: `37`,
    3030: `1289`,
    3031: `1289`,
    3032: `1289`,
    3033: `1289`,
    3034: `1289`,
    3035: `1289`,
    3036: `1289`,
    3037: `1289`,
    3038: `1289`,
    3039: `1289`,
    304: `38`,
    3040: `1289`,
    3041: `1289`,
    3042: `1289`,
    3043: `1289`,
    3044: `1289`,
    3045: `1289`,
    3046: `1289`,
    3047: `1289`,
    3048: `1289`,
    3049: `1289`,
    305: `38`,
    3050: `1289`,
    3051: `1289`,
    3052: `1289`,
    3053: `1289`,
    3054: `1289`,
    3055: `1289`,
    3056: `1289`,
    3057: `1289`,
    3058: `1289`,
    3059: `1289`,
    306: `39`,
    3060: `1289`,
    3061: `1289`,
    3062: `1289`,
    3063: `1289`,
    3064: `1289`,
    3065: `1289`,
    3066: `1289`,
    3067: `1289`,
    3068: `1289`,
    3069: `1289`,
    307: `40`,
    3070: `1289`,
    3071: `1289`,
    3072: `1289`,
    3073: `1289`,
    3074: `1289`,
    3075: `1289`,
    3076: `1289`,
    3077: `1289`,
    3078: `1289`,
    3079: `1289`,
    308: `40`,
    3080: `1289`,
    3081: `1289`,
    3082: `1289`,
    3083: `1289`,
    3084: `1289`,
    3085: `1289`,
    3086: `1289`,
    3087: `1289`,
    3088: `1289`,
    3089: `1289`,
    309: `40`,
    3090: `1289`,
    3091: `1289`,
    3092: `1289`,
    3093: `1289`,
    3094: `1289`,
    3095: `1289`,
    3096: `1289`,
    3097: `1289`,
    3098: `1289`,
    3099: `1289`,
    31: `2`,
    310: `41`,
    3100: `1289`,
    3101: `1289`,
    3102: `1289`,
    3103: `1289`,
    3104: `1289`,
    3105: `1289`,
    3106: `1289`,
    3107: `1289`,
    3108: `1289`,
    3109: `1289`,
    311: `42`,
    3110: `1289`,
    3111: `1289`,
    3112: `1289`,
    3113: `1289`,
    3114: `1289`,
    3115: `1289`,
    3116: `1289`,
    3117: `1289`,
    3118: `1289`,
    3119: `1289`,
    312: `42`,
    3120: `1289`,
    3121: `1289`,
    3122: `1289`,
    3123: `1289`,
    3124: `1289`,
    3125: `1289`,
    3126: `1289`,
    3127: `1289`,
    3128: `1289`,
    3129: `1289`,
    313: `43`,
    3130: `1289`,
    3131: `1289`,
    3132: `1289`,
    3133: `1289`,
    3134: `1289`,
    3135: `1289`,
    3136: `1289`,
    3137: `1289`,
    3138: `1289`,
    3139: `1289`,
    314: `44`,
    3140: `1289`,
    3141: `1289`,
    3142: `1289`,
    3143: `1289`,
    3144: `1289`,
    3145: `1289`,
    3146: `1289`,
    3147: `1289`,
    3148: `1289`,
    3149: `1289`,
    315: `45`,
    3150: `1289`,
    3151: `1289`,
    3152: `1289`,
    3153: `1289`,
    3154: `1289`,
    3155: `1289`,
    3156: `1289`,
    3157: `1289`,
    3158: `1289`,
    3159: `1289`,
    316: `45`,
    3160: `1289`,
    3161: `1289`,
    3162: `1289`,
    3163: `1289`,
    3164: `1289`,
    3165: `1289`,
    3166: `1289`,
    3167: `1289`,
    3168: `1289`,
    3169: `1289`,
    317: `46`,
    3170: `1289`,
    3171: `1289`,
    3172: `1289`,
    3173: `1289`,
    3174: `1289`,
    3175: `1289`,
    3176: `1289`,
    3177: `1289`,
    3178: `1289`,
    3179: `1289`,
    318: `47`,
    3180: `1289`,
    3181: `1289`,
    3182: `1289`,
    3183: `1289`,
    3184: `1289`,
    3185: `1289`,
    3186: `1289`,
    3187: `1289`,
    3188: `1289`,
    3189: `1289`,
    319: `52`,
    3190: `1289`,
    3191: `1289`,
    3192: `1289`,
    3193: `1289`,
    3194: `1289`,
    3195: `1289`,
    3196: `1289`,
    3197: `1289`,
    3198: `1289`,
    3199: `1289`,
    32: `2`,
    320: `53`,
    3200: `1289`,
    3201: `1289`,
    3202: `1289`,
    3203: `1289`,
    3204: `1289`,
    3205: `1289`,
    3206: `1289`,
    3207: `1289`,
    3208: `1289`,
    3209: `1289`,
    321: `54`,
    3210: `1289`,
    3211: `1289`,
    3212: `1289`,
    3213: `1289`,
    3214: `1289`,
    3215: `1289`,
    3216: `1289`,
    3217: `1289`,
    3218: `1289`,
    3219: `1289`,
    322: `54`,
    3220: `1289`,
    3221: `1289`,
    3222: `1289`,
    3223: `1289`,
    3224: `1289`,
    3225: `1289`,
    3226: `1289`,
    3227: `1289`,
    3228: `1289`,
    3229: `1289`,
    323: `55`,
    3230: `1289`,
    3231: `1289`,
    3232: `1289`,
    3233: `1289`,
    3234: `1289`,
    3235: `1289`,
    3236: `1289`,
    3237: `1289`,
    3238: `1289`,
    3239: `1289`,
    324: `55`,
    3240: `1289`,
    3241: `1289`,
    3242: `1289`,
    3243: `1289`,
    3244: `1289`,
    3245: `1289`,
    3246: `1289`,
    3247: `1289`,
    3248: `1289`,
    3249: `1289`,
    325: `56`,
    3250: `1289`,
    3251: `1289`,
    3252: `1289`,
    3253: `1289`,
    3254: `1289`,
    3255: `1289`,
    3256: `1289`,
    3257: `1289`,
    3258: `1289`,
    3259: `1289`,
    326: `57`,
    3260: `1289`,
    3261: `1289`,
    3262: `1289`,
    3263: `1289`,
    3264: `1289`,
    3265: `1289`,
    3266: `1289`,
    3267: `1289`,
    3268: `1289`,
    3269: `1289`,
    327: `58`,
    3270: `1289`,
    3271: `1289`,
    3272: `1289`,
    3273: `1289`,
    3274: `1289`,
    3275: `1289`,
    3276: `1289`,
    3277: `1289`,
    3278: `1289`,
    3279: `1289`,
    328: `58`,
    3280: `1289`,
    3281: `1289`,
    3282: `1289`,
    3283: `1289`,
    3284: `1289`,
    3285: `1289`,
    3286: `1289`,
    3287: `1289`,
    3288: `1289`,
    3289: `1289`,
    329: `59`,
    3290: `1289`,
    3291: `1289`,
    3292: `1289`,
    3293: `1289`,
    3294: `1289`,
    3295: `1289`,
    3296: `1289`,
    3297: `1289`,
    3298: `1289`,
    3299: `1289`,
    33: `2`,
    330: `60`,
    3300: `1289`,
    3301: `1289`,
    3302: `1289`,
    3303: `1289`,
    3304: `1289`,
    3305: `1289`,
    3306: `1289`,
    3307: `1289`,
    3308: `1289`,
    3309: `1289`,
    331: `60`,
    3310: `1289`,
    3311: `1289`,
    3312: `1289`,
    3313: `1289`,
    3314: `1289`,
    3315: `1289`,
    3316: `1289`,
    3317: `1289`,
    3318: `1289`,
    3319: `1289`,
    332: `61`,
    3320: `1289`,
    3321: `1289`,
    3322: `1289`,
    3323: `1289`,
    3324: `1289`,
    3325: `1289`,
    3326: `1289`,
    3327: `1289`,
    3328: `1289`,
    3329: `1289`,
    333: `62`,
    3330: `1289`,
    3331: `1289`,
    3332: `1289`,
    3333: `1289`,
    3334: `1289`,
    3335: `1289`,
    3336: `1289`,
    3337: `1289`,
    3338: `1289`,
    3339: `1289`,
    334: `63`,
    3340: `1289`,
    3341: `1289`,
    3342: `1289`,
    3343: `1289`,
    3344: `1289`,
    3345: `1289`,
    3346: `1289`,
    3347: `1289`,
    3348: `1289`,
    3349: `1289`,
    335: `64`,
    3350: `1289`,
    3351: `1289`,
    3352: `1289`,
    3353: `1289`,
    3354: `1289`,
    3355: `1289`,
    3356: `1289`,
    3357: `1289`,
    3358: `1289`,
    3359: `1289`,
    336: `65`,
    3360: `1289`,
    3361: `1289`,
    3362: `1289`,
    3363: `1289`,
    3364: `1289`,
    3365: `1289`,
    3366: `1289`,
    3367: `1289`,
    3368: `1289`,
    3369: `1289`,
    337: `65`,
    3370: `1289`,
    3371: `1289`,
    3372: `1289`,
    3373: `1289`,
    3374: `1289`,
    3375: `1289`,
    3376: `1289`,
    3377: `1289`,
    3378: `1289`,
    3379: `1289`,
    338: `66`,
    3380: `1289`,
    3381: `1289`,
    3382: `1289`,
    3383: `1289`,
    3384: `1289`,
    3385: `1289`,
    3386: `1289`,
    3387: `1289`,
    3388: `1289`,
    3389: `1289`,
    339: `66`,
    3390: `1289`,
    3391: `1289`,
    3392: `1289`,
    3393: `1289`,
    3394: `1289`,
    3395: `1289`,
    3396: `1289`,
    3397: `1289`,
    3398: `1289`,
    3399: `1289`,
    34: `2`,
    340: `66`,
    3400: `1289`,
    3401: `1289`,
    3402: `1289`,
    3403: `1289`,
    3404: `1289`,
    3405: `1289`,
    3406: `1289`,
    3407: `1289`,
    3408: `1289`,
    3409: `1289`,
    341: `67`,
    3410: `1289`,
    3411: `1289`,
    3412: `1289`,
    3413: `1289`,
    3414: `1289`,
    3415: `1289`,
    3416: `1289`,
    3417: `1289`,
    3418: `1289`,
    3419: `1289`,
    342: `68`,
    3420: `1289`,
    3421: `1289`,
    3422: `1289`,
    3423: `1289`,
    3424: `1289`,
    3425: `1289`,
    3426: `1289`,
    3427: `1289`,
    3428: `1289`,
    3429: `1289`,
    343: `68`,
    3430: `1289`,
    3431: `1289`,
    3432: `1289`,
    3433: `1289`,
    3434: `1289`,
    3435: `1289`,
    3436: `1289`,
    3437: `1289`,
    3438: `1289`,
    3439: `1289`,
    344: `69`,
    3440: `1289`,
    3441: `1289`,
    3442: `1289`,
    3443: `1289`,
    3444: `1289`,
    3445: `1289`,
    3446: `1289`,
    3447: `1289`,
    3448: `1289`,
    3449: `1289`,
    345: `69`,
    3450: `1289`,
    3451: `1289`,
    3452: `1289`,
    3453: `1289`,
    3454: `1289`,
    3455: `1289`,
    3456: `1289`,
    3457: `1289`,
    3458: `1289`,
    3459: `1289`,
    346: `69`,
    3460: `1289`,
    3461: `1289`,
    3462: `1289`,
    3463: `1289`,
    3464: `1289`,
    3465: `1289`,
    3466: `1289`,
    3467: `1289`,
    3468: `1289`,
    3469: `1289`,
    347: `70`,
    3470: `1289`,
    3471: `1289`,
    3472: `1289`,
    3473: `1289`,
    3474: `1289`,
    3475: `1289`,
    3476: `1289`,
    3477: `1289`,
    3478: `1289`,
    3479: `1289`,
    348: `71`,
    3480: `1289`,
    3481: `1289`,
    3482: `1289`,
    3483: `1289`,
    3484: `1289`,
    3485: `1289`,
    3486: `1289`,
    3487: `1289`,
    3488: `1289`,
    3489: `1289`,
    349: `71`,
    3490: `1289`,
    3491: `1289`,
    3492: `1289`,
    3493: `1289`,
    3494: `1289`,
    3495: `1289`,
    3496: `1289`,
    3497: `1289`,
    3498: `1289`,
    3499: `1289`,
    35: `2`,
    350: `72`,
    3500: `1289`,
    3501: `1289`,
    3502: `1289`,
    3503: `1289`,
    3504: `1289`,
    3505: `1289`,
    3506: `1289`,
    3507: `1289`,
    3508: `1289`,
    3509: `1289`,
    351: `72`,
    3510: `1289`,
    3511: `1289`,
    3512: `1289`,
    3513: `1289`,
    3514: `1289`,
    3515: `1289`,
    3516: `1289`,
    3517: `1289`,
    3518: `1289`,
    3519: `1289`,
    352: `73`,
    3520: `1289`,
    3521: `1289`,
    3522: `1289`,
    3523: `1289`,
    3524: `1289`,
    3525: `1289`,
    3526: `1289`,
    3527: `1289`,
    3528: `1289`,
    3529: `1289`,
    353: `74`,
    3530: `1289`,
    3531: `1289`,
    3532: `1289`,
    3533: `1289`,
    3534: `1289`,
    3535: `1289`,
    3536: `1289`,
    3537: `1289`,
    3538: `1289`,
    3539: `1289`,
    354: `79`,
    3540: `1289`,
    3541: `1289`,
    3542: `1289`,
    3543: `1289`,
    3544: `1289`,
    3545: `1289`,
    3546: `1289`,
    3547: `1289`,
    3548: `1289`,
    3549: `1289`,
    355: `79`,
    3550: `1289`,
    3551: `1289`,
    3552: `1289`,
    3553: `1289`,
    3554: `1289`,
    3555: `1289`,
    3556: `1289`,
    3557: `1289`,
    3558: `1289`,
    3559: `1289`,
    356: `80`,
    3560: `1289`,
    3561: `1289`,
    3562: `1289`,
    3563: `1289`,
    3564: `1289`,
    3565: `1289`,
    3566: `1289`,
    3567: `1289`,
    3568: `1289`,
    3569: `1289`,
    357: `81`,
    3570: `1289`,
    3571: `1289`,
    3572: `1289`,
    3573: `1289`,
    3574: `1289`,
    3575: `1289`,
    3576: `1289`,
    3577: `1290`,
    3578: `1290`,
    3579: `1291`,
    358: `81`,
    3580: `1291`,
    3581: `1291`,
    3582: `1293`,
    3583: `1293`,
    3584: `1294`,
    3585: `1294`,
    3586: `1295`,
    3587: `1295`,
    3588: `1296`,
    3589: `1297`,
    359: `82`,
    3590: `1298`,
    3591: `1298`,
    3592: `1299`,
    3593: `1299`,
    3594: `1300`,
    3595: `1300`,
    3596: `1300`,
    3597: `1301`,
    3598: `1301`,
    3599: `1302`,
    36: `2`,
    360: `83`,
    3600: `1302`,
    3601: `1302`,
    3602: `1302`,
    3603: `1302`,
    3604: `1302`,
    3605: `1303`,
    3606: `1303`,
    3607: `1304`,
    3608: `1305`,
    3609: `1306`,
    361: `83`,
    3610: `1306`,
    3611: `1307`,
    3612: `1308`,
    3613: `1310`,
    3614: `1310`,
    3615: `1311`,
    3616: `1311`,
    3617: `1311`,
    3618: `1312`,
    3619: `1312`,
    362: `84`,
    3620: `1313`,
    3621: `1313`,
    3622: `1314`,
    3623: `1314`,
    3624: `1315`,
    3625: `1315`,
    3626: `1316`,
    3627: `1317`,
    3628: `1317`,
    3629: `1318`,
    363: `84`,
    3630: `1319`,
    3631: `1319`,
    3632: `1320`,
    3633: `1321`,
    3634: `1321`,
    3635: `1322`,
    3636: `1323`,
    3637: `1323`,
    3638: `1324`,
    3639: `1324`,
    364: `85`,
    3640: `1325`,
    3641: `1325`,
    3642: `1326`,
    3643: `1326`,
    3644: `1326`,
    3645: `1328`,
    3646: `1328`,
    3647: `1328`,
    3648: `1329`,
    3649: `1329`,
    365: `86`,
    3650: `1329`,
    3651: `1329`,
    3652: `1330`,
    3653: `1330`,
    3654: `1330`,
    3655: `1331`,
    3656: `1331`,
    3657: `1331`,
    3658: `1332`,
    3659: `1332`,
    366: `86`,
    3660: `1333`,
    3661: `1333`,
    3662: `1333`,
    3663: `1335`,
    3664: `1335`,
    3665: `1335`,
    3666: `1336`,
    3667: `1336`,
    3668: `1336`,
    3669: `1337`,
    367: `87`,
    3670: `1337`,
    3671: `1338`,
    3672: `1338`,
    3673: `1338`,
    3674: `1340`,
    3675: `1341`,
    3676: `1341`,
    3677: `1342`,
    3678: `1343`,
    3679: `1344`,
    368: `87`,
    3680: `1345`,
    3681: `1345`,
    3682: `1346`,
    3683: `1347`,
    3684: `1348`,
    3685: `1349`,
    3686: `1349`,
    3687: `1350`,
    3688: `1351`,
    3689: `1352`,
    369: `88`,
    3690: `1353`,
    3691: `1353`,
    3692: `1354`,
    3693: `1355`,
    3694: `1356`,
    3695: `1356`,
    3696: `1356`,
    3697: `1357`,
    3698: `1357`,
    3699: `1357`,
    37: `2`,
    370: `89`,
    3700: `1358`,
    3701: `1359`,
    3702: `1360`,
    3703: `1361`,
    3704: `1361`,
    3705: `1361`,
    3706: `1363`,
    3707: `1363`,
    3708: `1363`,
    3709: `1364`,
    371: `90`,
    3710: `1364`,
    3711: `1364`,
    3712: `1365`,
    3713: `1365`,
    3714: `1366`,
    3715: `1366`,
    3716: `1367`,
    3717: `1367`,
    3718: `1367`,
    3719: `1369`,
    372: `91`,
    3720: `1369`,
    3721: `1369`,
    3722: `1370`,
    3723: `1370`,
    3724: `1371`,
    3725: `1371`,
    3726: `1371`,
    3727: `1373`,
    3728: `1373`,
    3729: `1373`,
    373: `91`,
    3730: `1374`,
    3731: `1374`,
    3732: `1375`,
    3733: `1375`,
    3734: `1375`,
    3735: `1377`,
    3736: `1377`,
    3737: `1377`,
    3738: `1378`,
    3739: `1378`,
    374: `92`,
    3740: `1378`,
    3741: `1379`,
    3742: `1379`,
    3743: `1380`,
    3744: `1380`,
    3745: `1381`,
    3746: `1381`,
    3747: `1381`,
    3748: `1383`,
    3749: `1383`,
    375: `92`,
    3750: `1383`,
    3751: `1384`,
    3752: `1384`,
    3753: `1385`,
    3754: `1385`,
    3755: `1385`,
    3756: `1387`,
    3757: `1387`,
    3758: `1387`,
    3759: `1388`,
    376: `93`,
    3760: `1388`,
    3761: `1388`,
    3762: `1389`,
    3763: `1390`,
    3764: `1390`,
    3765: `1391`,
    3766: `1391`,
    3767: `1392`,
    3768: `1392`,
    3769: `1392`,
    377: `94`,
    3770: `1394`,
    3771: `1394`,
    3772: `1394`,
    3773: `1395`,
    3774: `1395`,
    3775: `1396`,
    3776: `1396`,
    3777: `1396`,
    3778: `1398`,
    3779: `1398`,
    378: `95`,
    3780: `1398`,
    3781: `1399`,
    3782: `1399`,
    3783: `1400`,
    3784: `1400`,
    3785: `1400`,
    3786: `1402`,
    3787: `1402`,
    3788: `1402`,
    3789: `1404`,
    379: `96`,
    3790: `1404`,
    3791: `1404`,
    3792: `1405`,
    3793: `1405`,
    3794: `1405`,
    3795: `1406`,
    3796: `1406`,
    3797: `1406`,
    3798: `1407`,
    3799: `1407`,
    38: `2`,
    380: `96`,
    3800: `1408`,
    3801: `1408`,
    3802: `1409`,
    3803: `1409`,
    3804: `1410`,
    3805: `1410`,
    3806: `1410`,
    3807: `1412`,
    3808: `1412`,
    3809: `1412`,
    381: `97`,
    3810: `1413`,
    3811: `1413`,
    3812: `1414`,
    3813: `1414`,
    3814: `1414`,
    3815: `1416`,
    3816: `1416`,
    3817: `1416`,
    3818: `1418`,
    3819: `1418`,
    382: `97`,
    3820: `1418`,
    3821: `1419`,
    3822: `1419`,
    3823: `1420`,
    3824: `1420`,
    3825: `1420`,
    3826: `1422`,
    3827: `1422`,
    3828: `1422`,
    3829: `1423`,
    383: `98`,
    3830: `1423`,
    3831: `1424`,
    3832: `1424`,
    3833: `1424`,
    3834: `1426`,
    3835: `1426`,
    3836: `1426`,
    3837: `1427`,
    3838: `1427`,
    3839: `1428`,
    384: `99`,
    3840: `1428`,
    3841: `1428`,
    3842: `1430`,
    3843: `1430`,
    3844: `1430`,
    3845: `1431`,
    3846: `1431`,
    3847: `1431`,
    3848: `1432`,
    3849: `1432`,
    385: `100`,
    3850: `1433`,
    3851: `1433`,
    3852: `1434`,
    3853: `1434`,
    3854: `1434`,
    3855: `1436`,
    3856: `1436`,
    3857: `1436`,
    3858: `1437`,
    3859: `1437`,
    386: `101`,
    3860: `1438`,
    3861: `1438`,
    3862: `1438`,
    3863: `1440`,
    3864: `1440`,
    3865: `1441`,
    3866: `1441`,
    3867: `1444`,
    3868: `1444`,
    3869: `1445`,
    387: `101`,
    3870: `1445`,
    3871: `1446`,
    3872: `1446`,
    3873: `1446`,
    3874: `1448`,
    3875: `1448`,
    3876: `1449`,
    3877: `1449`,
    3878: `1449`,
    3879: `1450`,
    388: `101`,
    3880: `1450`,
    3881: `1451`,
    3882: `1451`,
    3883: `1451`,
    3884: `1453`,
    3885: `1453`,
    3886: `1454`,
    3887: `1454`,
    3888: `1454`,
    3889: `1455`,
    389: `102`,
    3890: `1455`,
    3891: `1456`,
    3892: `1456`,
    3893: `1456`,
    3894: `1458`,
    3895: `1458`,
    3896: `1459`,
    3897: `1459`,
    3898: `1459`,
    3899: `1460`,
    39: `2`,
    390: `102`,
    3900: `1460`,
    3901: `1461`,
    3902: `1461`,
    3903: `1461`,
    3904: `1463`,
    3905: `1463`,
    3906: `1463`,
    3907: `1465`,
    3908: `1465`,
    3909: `1465`,
    391: `102`,
    3910: `1467`,
    3911: `1467`,
    3912: `1467`,
    3913: `1469`,
    3914: `1469`,
    3915: `1469`,
    3916: `1471`,
    3917: `1471`,
    3918: `1471`,
    3919: `1473`,
    392: `102`,
    3920: `1473`,
    3921: `1474`,
    3922: `1474`,
    3923: `1474`,
    3924: `1475`,
    3925: `1475`,
    3926: `1476`,
    3927: `1476`,
    3928: `1476`,
    3929: `1478`,
    393: `102`,
    3930: `1478`,
    3931: `1478`,
    3932: `1480`,
    3933: `1480`,
    3934: `1481`,
    3935: `1481`,
    3936: `1482`,
    3937: `1482`,
    3938: `1483`,
    3939: `1484`,
    394: `102`,
    3940: `1484`,
    3941: `1485`,
    3942: `1485`,
    3943: `1485`,
    3944: `1487`,
    3945: `1487`,
    3946: `1487`,
    3947: `1489`,
    3948: `1490`,
    3949: `1490`,
    395: `103`,
    3950: `1491`,
    3951: `1491`,
    3952: `1491`,
    3953: `1491`,
    3954: `1491`,
    3955: `1491`,
    3956: `1491`,
    3957: `1491`,
    3958: `1491`,
    3959: `1491`,
    396: `103`,
    3960: `1492`,
    3961: `1492`,
    3962: `1493`,
    3963: `1494`,
    3964: `1495`,
    3965: `1495`,
    3966: `1496`,
    3967: `1496`,
    3968: `1497`,
    3969: `1497`,
    397: `104`,
    3970: `1498`,
    3971: `1498`,
    3972: `1499`,
    3973: `1499`,
    3974: `1499`,
    3975: `1502`,
    3976: `1503`,
    3977: `1503`,
    3978: `1504`,
    3979: `1505`,
    398: `105`,
    3980: `1506`,
    3981: `1506`,
    3982: `1507`,
    3983: `1507`,
    3984: `1507`,
    3985: `1508`,
    3986: `1509`,
    3987: `1509`,
    3988: `1509`,
    3989: `1510`,
    399: `105`,
    3990: `1511`,
    3991: `1512`,
    3992: `1512`,
    3993: `1512`,
    3994: `1512`,
    3995: `1512`,
    3996: `1512`,
    3997: `1513`,
    3998: `1513`,
    3999: `1513`,
    4: `2`,
    40: `2`,
    400: `106`,
    4000: `1515`,
    4001: `1515`,
    4002: `1516`,
    4003: `1516`,
    4004: `1517`,
    4005: `1517`,
    4006: `1518`,
    4007: `1519`,
    4008: `1519`,
    4009: `1519`,
    401: `107`,
    4010: `1520`,
    4011: `1521`,
    4012: `1521`,
    4013: `1522`,
    4014: `1522`,
    4015: `1522`,
    4016: `1522`,
    4017: `1522`,
    4018: `1522`,
    4019: `1522`,
    402: `107`,
    4020: `1522`,
    4021: `1522`,
    4022: `1522`,
    4023: `1523`,
    4024: `1523`,
    4025: `1524`,
    4026: `1525`,
    4027: `1526`,
    4028: `1526`,
    4029: `1527`,
    403: `108`,
    4030: `1527`,
    4031: `1528`,
    4032: `1528`,
    4033: `1529`,
    4034: `1529`,
    4035: `1530`,
    4036: `1530`,
    4037: `1530`,
    4038: `1532`,
    4039: `1533`,
    404: `109`,
    4040: `1533`,
    4041: `1534`,
    4042: `1534`,
    4043: `1534`,
    4044: `1534`,
    4045: `1534`,
    4046: `1534`,
    4047: `1534`,
    4048: `1534`,
    4049: `1534`,
    405: `111`,
    4050: `1534`,
    4051: `1535`,
    4052: `1535`,
    4053: `1536`,
    4054: `1537`,
    4055: `1538`,
    4056: `1538`,
    4057: `1539`,
    4058: `1539`,
    4059: `1540`,
    406: `112`,
    4060: `1540`,
    4061: `1541`,
    4062: `1541`,
    4063: `1542`,
    4064: `1542`,
    4065: `1542`,
    4066: `1544`,
    4067: `1545`,
    4068: `1546`,
    4069: `1547`,
    407: `112`,
    4070: `1548`,
    4071: `1550`,
    4072: `1551`,
    4073: `1551`,
    4074: `1552`,
    4075: `1552`,
    4076: `1553`,
    4077: `1553`,
    4078: `1554`,
    4079: `1554`,
    408: `113`,
    4080: `1555`,
    4081: `1555`,
    4082: `1556`,
    4083: `1557`,
    4084: `1559`,
    4085: `1559`,
    4086: `1560`,
    4087: `1560`,
    4088: `1561`,
    4089: `1561`,
    409: `113`,
    4090: `1561`,
    4091: `1563`,
    4092: `1563`,
    4093: `1564`,
    4094: `1564`,
    4095: `1564`,
    4096: `1565`,
    4097: `1565`,
    4098: `1567`,
    4099: `1568`,
    41: `2`,
    410: `113`,
    4100: `1568`,
    4101: `1569`,
    4102: `1570`,
    4103: `1571`,
    4104: `1571`,
    4105: `1572`,
    4106: `1573`,
    4107: `1573`,
    4108: `1573`,
    4109: `1574`,
    411: `113`,
    4110: `1575`,
    4111: `1576`,
    4112: `1576`,
    4113: `1576`,
    4114: `1576`,
    4115: `1576`,
    4116: `1576`,
    4117: `1577`,
    4118: `1577`,
    4119: `1577`,
    412: `113`,
    4120: `1579`,
    4121: `1579`,
    4122: `1580`,
    4123: `1580`,
    4124: `1581`,
    4125: `1581`,
    4126: `1581`,
    4127: `1583`,
    4128: `1583`,
    4129: `1583`,
    413: `113`,
    4130: `1585`,
    4131: `1585`,
    4132: `1585`,
    4133: `1586`,
    4134: `1586`,
    4135: `1586`,
    4136: `1587`,
    4137: `1587`,
    4138: `1587`,
    4139: `1588`,
    414: `113`,
    4140: `1588`,
    4141: `1588`,
    4142: `1589`,
    4143: `1589`,
    4144: `1589`,
    4145: `1590`,
    4146: `1591`,
    4147: `1591`,
    4148: `1592`,
    4149: `1592`,
    415: `113`,
    4150: `1593`,
    4151: `1593`,
    4152: `1594`,
    4153: `1594`,
    4154: `1595`,
    4155: `1595`,
    4156: `1596`,
    4157: `1596`,
    4158: `1596`,
    4159: `1598`,
    416: `113`,
    4160: `1598`,
    4161: `1598`,
    4162: `1600`,
    4163: `1600`,
    4164: `1600`,
    4165: `1601`,
    4166: `1601`,
    4167: `1602`,
    4168: `1602`,
    4169: `1602`,
    417: `113`,
    4170: `1604`,
    4171: `1604`,
    4172: `1604`,
    4173: `1606`,
    4174: `1607`,
    4175: `1609`,
    4176: `1610`,
    4177: `1611`,
    4178: `1612`,
    4179: `1612`,
    418: `114`,
    4180: `1613`,
    4181: `1613`,
    4182: `1614`,
    4183: `1614`,
    4184: `1614`,
    4185: `1615`,
    4186: `1617`,
    4187: `1618`,
    4188: `1619`,
    4189: `1619`,
    419: `114`,
    4190: `1619`,
    4191: `1620`,
    4192: `1621`,
    4193: `1621`,
    4194: `1624`,
    4195: `1624`,
    4196: `1625`,
    4197: `1625`,
    4198: `1626`,
    4199: `1626`,
    42: `2`,
    420: `115`,
    4200: `1627`,
    4201: `1628`,
    4202: `1629`,
    4203: `1629`,
    4204: `1630`,
    4205: `1631`,
    4206: `1631`,
    4207: `1632`,
    4208: `1632`,
    4209: `1633`,
    421: `116`,
    4210: `1633`,
    4211: `1634`,
    4212: `1635`,
    4213: `1636`,
    4214: `1636`,
    4215: `1637`,
    4216: `1637`,
    4217: `1638`,
    4218: `1639`,
    4219: `1640`,
    422: `117`,
    4220: `1640`,
    4221: `1641`,
    4222: `1642`,
    4223: `1643`,
    4224: `1645`,
    4225: `1645`,
    4226: `1646`,
    4227: `1646`,
    4228: `1647`,
    4229: `1648`,
    423: `117`,
    4230: `1650`,
    4231: `1650`,
    4232: `1650`,
    4233: `1652`,
    4234: `1653`,
    4235: `1653`,
    4236: `1654`,
    4237: `1654`,
    4238: `1655`,
    4239: `1655`,
    424: `118`,
    4240: `1655`,
    4241: `1656`,
    4242: `1656`,
    4243: `1656`,
    4244: `1658`,
    4245: `1659`,
    4246: `1660`,
    4247: `1661`,
    4248: `1661`,
    4249: `1661`,
    425: `118`,
    4250: `1662`,
    4251: `1662`,
    4252: `1663`,
    4253: `1664`,
    4254: `1665`,
    4255: `1667`,
    4256: `1668`,
    4257: `1668`,
    4258: `1668`,
    4259: `1669`,
    426: `119`,
    4260: `1670`,
    4261: `1671`,
    4262: `1672`,
    4263: `1673`,
    4264: `1675`,
    4265: `1676`,
    4266: `1676`,
    4267: `1676`,
    4268: `1677`,
    4269: `1677`,
    427: `119`,
    4270: `1678`,
    4271: `1679`,
    4272: `1679`,
    4273: `1679`,
    4274: `1680`,
    4275: `1680`,
    4276: `1681`,
    4277: `1682`,
    4278: `1682`,
    4279: `1682`,
    428: `120`,
    4280: `1683`,
    4281: `1683`,
    4282: `1684`,
    4283: `1684`,
    4284: `1684`,
    4285: `1685`,
    4286: `1686`,
    4287: `1686`,
    4288: `1687`,
    4289: `1689`,
    429: `120`,
    4290: `1690`,
    4291: `1691`,
    4292: `1692`,
    4293: `1692`,
    4294: `1692`,
    4295: `1693`,
    4296: `1693`,
    4297: `1694`,
    4298: `1694`,
    4299: `1694`,
    43: `2`,
    430: `123`,
    4300: `1695`,
    4301: `1695`,
    4302: `1695`,
    4303: `1697`,
    4304: `1698`,
    4305: `1699`,
    4306: `1699`,
    4307: `1700`,
    4308: `1701`,
    4309: `1702`,
    431: `123`,
    4310: `1703`,
    4311: `1704`,
    4312: `1705`,
    4313: `1707`,
    4314: `1708`,
    4315: `1709`,
    4316: `1709`,
    4317: `1710`,
    4318: `1712`,
    4319: `1712`,
    432: `124`,
    4320: `1713`,
    4321: `1714`,
    4322: `1714`,
    4323: `1715`,
    4324: `1717`,
    4325: `1717`,
    4326: `1718`,
    4327: `1718`,
    4328: `1719`,
    4329: `1721`,
    433: `124`,
    4330: `1721`,
    4331: `1722`,
    4332: `1722`,
    4333: `1723`,
    4334: `1724`,
    4335: `1725`,
    4336: `1725`,
    4337: `1725`,
    4338: `1726`,
    4339: `1726`,
    434: `125`,
    4340: `1726`,
    4341: `1728`,
    4342: `1729`,
    4343: `1729`,
    4344: `1729`,
    4345: `1731`,
    4346: `1731`,
    4347: `1732`,
    4348: `1733`,
    4349: `1733`,
    435: `126`,
    4350: `1734`,
    4351: `1736`,
    4352: `1737`,
    4353: `1738`,
    4354: `1739`,
    4355: `1740`,
    4356: `1740`,
    4357: `1741`,
    4358: `1742`,
    4359: `1743`,
    436: `126`,
    4360: `1744`,
    4361: `1746`,
    4362: `1747`,
    4363: `1747`,
    4364: `1748`,
    437: `127`,
    438: `128`,
    439: `128`,
    44: `2`,
    440: `129`,
    441: `130`,
    442: `131`,
    443: `132`,
    444: `132`,
    445: `134`,
    446: `134`,
    447: `135`,
    448: `135`,
    449: `136`,
    45: `2`,
    450: `137`,
    451: `137`,
    452: `138`,
    453: `138`,
    454: `138`,
    455: `139`,
    456: `140`,
    457: `140`,
    458: `141`,
    459: `142`,
    46: `2`,
    460: `142`,
    461: `142`,
    462: `143`,
    463: `144`,
    464: `145`,
    465: `145`,
    466: `146`,
    467: `147`,
    468: `147`,
    469: `148`,
    47: `2`,
    470: `149`,
    471: `150`,
    472: `151`,
    473: `151`,
    474: `152`,
    475: `153`,
    476: `154`,
    477: `156`,
    478: `156`,
    479: `156`,
    48: `2`,
    480: `158`,
    481: `158`,
    482: `159`,
    483: `159`,
    484: `159`,
    485: `161`,
    486: `161`,
    487: `161`,
    488: `161`,
    489: `161`,
    49: `2`,
    490: `161`,
    491: `162`,
    492: `162`,
    493: `163`,
    494: `164`,
    495: `166`,
    496: `166`,
    497: `167`,
    498: `169`,
    499: `169`,
    5: `2`,
    50: `2`,
    500: `170`,
    501: `170`,
    502: `170`,
    503: `171`,
    504: `171`,
    505: `172`,
    506: `172`,
    507: `173`,
    508: `173`,
    509: `173`,
    51: `2`,
    510: `174`,
    511: `175`,
    512: `175`,
    513: `177`,
    514: `177`,
    515: `178`,
    516: `178`,
    517: `179`,
    518: `179`,
    519: `180`,
    52: `2`,
    520: `180`,
    521: `181`,
    522: `182`,
    523: `183`,
    524: `184`,
    525: `184`,
    526: `185`,
    527: `186`,
    528: `186`,
    529: `186`,
    53: `2`,
    530: `187`,
    531: `187`,
    532: `187`,
    533: `188`,
    534: `188`,
    535: `188`,
    536: `188`,
    537: `188`,
    538: `188`,
    539: `189`,
    54: `2`,
    540: `189`,
    541: `190`,
    542: `191`,
    543: `191`,
    544: `192`,
    545: `193`,
    546: `193`,
    547: `194`,
    548: `195`,
    549: `195`,
    55: `2`,
    550: `195`,
    551: `196`,
    552: `197`,
    553: `199`,
    554: `200`,
    555: `200`,
    556: `201`,
    557: `201`,
    558: `201`,
    559: `201`,
    56: `2`,
    560: `201`,
    561: `201`,
    562: `201`,
    563: `201`,
    564: `201`,
    565: `201`,
    566: `202`,
    567: `202`,
    568: `203`,
    569: `204`,
    57: `2`,
    570: `205`,
    571: `205`,
    572: `206`,
    573: `206`,
    574: `207`,
    575: `207`,
    576: `208`,
    577: `208`,
    578: `209`,
    579: `209`,
    58: `2`,
    580: `209`,
    581: `211`,
    582: `211`,
    583: `212`,
    584: `212`,
    585: `212`,
    586: `213`,
    587: `213`,
    588: `214`,
    589: `214`,
    59: `2`,
    590: `215`,
    591: `215`,
    592: `215`,
    593: `216`,
    594: `216`,
    595: `217`,
    596: `217`,
    597: `218`,
    598: `218`,
    599: `218`,
    6: `2`,
    60: `2`,
    600: `219`,
    601: `219`,
    602: `221`,
    603: `222`,
    604: `222`,
    605: `223`,
    606: `224`,
    607: `225`,
    608: `225`,
    609: `226`,
    61: `2`,
    610: `227`,
    611: `227`,
    612: `227`,
    613: `228`,
    614: `229`,
    615: `229`,
    616: `230`,
    617: `231`,
    618: `232`,
    619: `232`,
    62: `2`,
    620: `233`,
    621: `234`,
    622: `239`,
    623: `240`,
    624: `241`,
    625: `241`,
    626: `242`,
    627: `242`,
    628: `243`,
    629: `244`,
    63: `2`,
    630: `245`,
    631: `245`,
    632: `246`,
    633: `247`,
    634: `247`,
    635: `248`,
    636: `249`,
    637: `250`,
    638: `251`,
    639: `252`,
    64: `2`,
    640: `252`,
    641: `253`,
    642: `253`,
    643: `253`,
    644: `254`,
    645: `255`,
    646: `255`,
    647: `256`,
    648: `256`,
    649: `256`,
    65: `2`,
    650: `257`,
    651: `257`,
    652: `258`,
    653: `258`,
    654: `259`,
    655: `259`,
    656: `260`,
    657: `261`,
    658: `266`,
    659: `268`,
    66: `2`,
    660: `269`,
    661: `270`,
    662: `270`,
    663: `271`,
    664: `271`,
    665: `272`,
    666: `272`,
    667: `273`,
    668: `274`,
    669: `275`,
    67: `2`,
    670: `276`,
    671: `276`,
    672: `276`,
    673: `277`,
    674: `277`,
    675: `277`,
    676: `278`,
    677: `279`,
    678: `279`,
    679: `280`,
    68: `2`,
    680: `280`,
    681: `281`,
    682: `281`,
    683: `281`,
    684: `282`,
    685: `283`,
    686: `283`,
    687: `284`,
    688: `284`,
    689: `285`,
    69: `2`,
    690: `286`,
    691: `286`,
    692: `287`,
    693: `287`,
    694: `288`,
    695: `288`,
    696: `289`,
    697: `290`,
    698: `290`,
    699: `291`,
    7: `2`,
    70: `2`,
    700: `291`,
    701: `292`,
    702: `293`,
    703: `294`,
    704: `299`,
    705: `299`,
    706: `300`,
    707: `300`,
    708: `301`,
    709: `302`,
    71: `2`,
    710: `307`,
    711: `307`,
    712: `308`,
    713: `308`,
    714: `309`,
    715: `310`,
    716: `315`,
    717: `315`,
    718: `316`,
    719: `316`,
    72: `2`,
    720: `317`,
    721: `318`,
    722: `323`,
    723: `323`,
    724: `324`,
    725: `324`,
    726: `325`,
    727: `326`,
    728: `331`,
    729: `331`,
    73: `2`,
    730: `332`,
    731: `332`,
    732: `333`,
    733: `334`,
    734: `334`,
    735: `335`,
    736: `336`,
    737: `336`,
    738: `337`,
    739: `338`,
    74: `2`,
    740: `343`,
    741: `343`,
    742: `344`,
    743: `345`,
    744: `345`,
    745: `346`,
    746: `347`,
    747: `347`,
    748: `348`,
    749: `348`,
    75: `2`,
    750: `349`,
    751: `350`,
    752: `350`,
    753: `351`,
    754: `351`,
    755: `352`,
    756: `353`,
    757: `354`,
    758: `355`,
    759: `355`,
    76: `2`,
    760: `356`,
    761: `356`,
    762: `357`,
    763: `358`,
    764: `359`,
    765: `360`,
    766: `360`,
    767: `361`,
    768: `361`,
    769: `362`,
    77: `2`,
    770: `363`,
    771: `364`,
    772: `365`,
    773: `365`,
    774: `365`,
    775: `367`,
    776: `367`,
    777: `368`,
    778: `369`,
    779: `369`,
    78: `2`,
    780: `370`,
    781: `371`,
    782: `371`,
    783: `372`,
    784: `373`,
    785: `373`,
    786: `374`,
    787: `375`,
    788: `375`,
    789: `376`,
    79: `2`,
    790: `377`,
    791: `377`,
    792: `377`,
    793: `378`,
    794: `378`,
    795: `378`,
    796: `379`,
    797: `380`,
    798: `381`,
    799: `381`,
    8: `2`,
    80: `2`,
    800: `381`,
    801: `382`,
    802: `382`,
    803: `382`,
    804: `384`,
    805: `384`,
    806: `385`,
    807: `386`,
    808: `386`,
    809: `387`,
    81: `2`,
    810: `388`,
    811: `388`,
    812: `389`,
    813: `390`,
    814: `390`,
    815: `391`,
    816: `392`,
    817: `392`,
    818: `393`,
    819: `394`,
    82: `2`,
    820: `394`,
    821: `394`,
    822: `395`,
    823: `395`,
    824: `395`,
    825: `396`,
    826: `397`,
    827: `398`,
    828: `398`,
    829: `398`,
    83: `2`,
    830: `399`,
    831: `399`,
    832: `399`,
    833: `400`,
    834: `400`,
    835: `401`,
    836: `401`,
    837: `402`,
    838: `403`,
    839: `403`,
    84: `2`,
    840: `404`,
    841: `405`,
    842: `405`,
    843: `406`,
    844: `407`,
    845: `409`,
    846: `410`,
    847: `410`,
    848: `411`,
    849: `411`,
    85: `2`,
    850: `411`,
    851: `411`,
    852: `411`,
    853: `411`,
    854: `411`,
    855: `411`,
    856: `411`,
    857: `411`,
    858: `412`,
    859: `412`,
    86: `2`,
    860: `413`,
    861: `414`,
    862: `415`,
    863: `415`,
    864: `416`,
    865: `416`,
    866: `417`,
    867: `417`,
    868: `418`,
    869: `418`,
    87: `4`,
    870: `419`,
    871: `419`,
    872: `419`,
    873: `421`,
    874: `421`,
    875: `422`,
    876: `422`,
    877: `422`,
    878: `423`,
    879: `423`,
    88: `4`,
    880: `424`,
    881: `425`,
    882: `426`,
    883: `426`,
    884: `427`,
    885: `427`,
    886: `428`,
    887: `429`,
    888: `430`,
    889: `430`,
    89: `5`,
    890: `431`,
    891: `432`,
    892: `432`,
    893: `433`,
    894: `434`,
    895: `435`,
    896: `436`,
    897: `438`,
    898: `439`,
    899: `439`,
    9: `2`,
    90: `5`,
    900: `440`,
    901: `441`,
    902: `442`,
    903: `442`,
    904: `443`,
    905: `444`,
    906: `444`,
    907: `444`,
    908: `445`,
    909: `445`,
    91: `5`,
    910: `445`,
    911: `446`,
    912: `446`,
    913: `446`,
    914: `447`,
    915: `447`,
    916: `448`,
    917: `449`,
    918: `454`,
    919: `454`,
    92: `6`,
    920: `455`,
    921: `456`,
    922: `456`,
    923: `457`,
    924: `458`,
    925: `458`,
    926: `458`,
    927: `460`,
    928: `460`,
    929: `461`,
    93: `7`,
    930: `462`,
    931: `462`,
    932: `463`,
    933: `464`,
    934: `464`,
    935: `465`,
    936: `466`,
    937: `466`,
    938: `467`,
    939: `468`,
    94: `8`,
    940: `468`,
    941: `469`,
    942: `470`,
    943: `470`,
    944: `470`,
    945: `471`,
    946: `471`,
    947: `471`,
    948: `472`,
    949: `473`,
    95: `9`,
    950: `474`,
    951: `474`,
    952: `474`,
    953: `475`,
    954: `475`,
    955: `475`,
    956: `476`,
    957: `476`,
    958: `477`,
    959: `477`,
    96: `10`,
    960: `478`,
    961: `479`,
    962: `479`,
    963: `480`,
    964: `481`,
    965: `481`,
    966: `482`,
    967: `483`,
    968: `485`,
    969: `486`,
    97: `11`,
    970: `486`,
    971: `487`,
    972: `487`,
    973: `487`,
    974: `487`,
    975: `487`,
    976: `487`,
    977: `487`,
    978: `487`,
    979: `487`,
    98: `11`,
    980: `487`,
    981: `488`,
    982: `488`,
    983: `489`,
    984: `490`,
    985: `491`,
    986: `491`,
    987: `492`,
    988: `492`,
    989: `493`,
    99: `12`,
    990: `493`,
    991: `494`,
    992: `494`,
    993: `494`,
    994: `495`,
    995: `495`,
    996: `496`,
    997: `496`,
    998: `496`,
    999: `497`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 2,
  stateSize: 200,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './impl/arc72b/ARC72_Bridge.rsh:460:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './impl/arc72b/ARC72_Bridge.rsh:196:29:after expr stmt semicolon',
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
  "deleteNftIndexBox": deleteNftIndexBox,
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
  deleteNftIndexBox: deleteNftIndexBox,
  deleteOperatorDataBox: deleteOperatorDataBox,
  grant: grant,
  mintTo: mintTo,
  touch: touch
  };
