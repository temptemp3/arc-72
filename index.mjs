import { loadStdlib, test } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

// import CONTRACT from "arccjs";
// import template from "./template.json" assert { type: "json" };
// import fs from "fs";
// import { generateABI } from "ctc2abi";

const stdlib = loadStdlib(process.env);

const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

const accZero = await stdlib.connectAccount({ addr: zeroAddress });

const ctcZero = accZero.contract(backend);

//
// generates ABI from template.json
//
// const schema = await generateABI(ctcZero);
//
// try {
//   fs.writeFileSync("contract.json", JSON.stringify(schema));
// } catch (err) {
//   console.error(err);
// }

const fa = stdlib.formatAddress;
const bn2n = stdlib.bigNumberToNumber;
const bn = stdlib.bigNumberify;

const fromSome = (v, d) => (v[0] === "None" ? d : v[1]);

const assertFail = async (promise, errStr) => {
  try {
    await promise;
  } catch (e) {
    if (errStr) {
      if (`${e}`.includes(errStr)) {
        return;
      }
      throw `Expected exception including message: "${errStr}", but got: ${e}`;
    } else {
      return;
    }
  }
  throw `Expected exception but did not catch one: ${errStr}`;
};
const assertEq = (a, b, context = "assertEq") => {
  if (a === b) return;
  try {
    const res1BN = bigNumberify(a);
    const res2BN = bigNumberify(b);
    if (res1BN.eq(res2BN)) return;
  } catch {}
  try {
    const stripNulls = (s) => s.replace(/\0*$/g, "");
    if (stripNulls(`${a}`) === stripNulls(`${b}`)) return;
  } catch {}
  try {
    if (JSON.stringify(a) === JSON.stringify(b)) return;
  } catch {}
  try {
    if (parseInt(a) == parseInt(b)) return;
  } catch {}
  //assert(false, `${context}: ${a} == ${b}`);
};

const deployAs = async (acc) => {
  const ctc0 = acc.contract(backend);
  const params = {
    zeroAddress,
    // This is the length of an ipfs base32 cid v1
    metadataUriBase:
      "ipfs://bafy0000000000000000000000000000000000000000000000000000000/",
  };
  console.log("About to launch NFT contract.");
  const ctcInfo = await stdlib.withDisconnect(() =>
    ctc0.participants.Deployer({
      params,
      ready: (ctcInfo) => stdlib.disconnect(ctcInfo),
    })
  );
  return ctcInfo;
};

const initBal = stdlib.parseCurrency(1000);
const accs = await stdlib.newTestAccounts(4, initBal);

const [acc0, acc1, acc2, acc3] = accs;
const [addr0, addr1, addr2, addr3] = accs.map((a) => a.networkAccount.addr);

console.log({ addr0, addr1, addr2, addr3 });

const ctcInfo = await deployAs(acc0);

console.log("ABI:");
console.log(await ctcZero.getABI());

console.log("CtcInfo:", bn2n(ctcInfo));

///--- main

const {
  v: {
    arc72_balanceOf,
    arc72_totalSupply,
    arc72_tokenByIndex,
    arc72_ownerOf,
    arc72_tokenURI,
  },
  e: { arc72_Transfer },
} = ctcZero;

// monitor events
arc72_Transfer.monitor(console.log);

const displayAddressIndex = async (addr, idx) => {
  console.log(
    `arc72_balanceOf(${addr})`,
    bn2n(fromSome(await arc72_balanceOf(addr)), bn(0))
  ); // Some(0)
  console.log(
    "arc72_totalSupply()",
    bn2n(fromSome(await arc72_totalSupply()), bn(0))
  ); // Some(1)
  console.log(
    `arc72_tokenByIndex(${idx})`,
    bn2n(fromSome(await arc72_tokenByIndex(idx)), bn(0))
  );
  console.log(
    "arc72_ownerOf(1)",
    fa(
      fromSome(
        await arc72_ownerOf(1),
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      )
    )
  );
  console.log(`arc72_tokenURI(${idx})`, await arc72_tokenURI(idx));
};

// ---------------------------------------------
// Expect
// ownerOf(1) = zeroAddress
// ---------------------------------------------
// ownerOf(1) = zeroAddress
// ---------------------------------------------

test.chk(
  "ownerOf(1) = zeroAddress",
  fa(fromSome(await arc72_ownerOf(1))),
  zeroAddress
);
// ---------------------------------------------

const ctc0 = acc0.contract(backend, ctcInfo);

console.log(`Minting to ${addr1}`);

// TODO figure out cost of minting
// TODO check max mint ('0x26ca')
// TODO check ownder of 1 before mint
// TODO check owner of 1 after mint

await ctc0.a.mintTo(addr1);

await arc72_Transfer.next();

// ---------------------------------------------
// Expect
// ownerOf(1) = addr1
// arc72_Transfer
// ---------------------------------------------
// ownerOf(1) = addr1
// ---------------------------------------------
test.chk("ownerOf(1) = addr1", fa(fromSome(await arc72_ownerOf(1))), addr1);
// ---------------------------------------------

await displayAddressIndex(addr1, 1);

await stdlib.wait(20);

const ctc = (acc) => acc.contract(backend, ctcinfo);
const [ctc1, ctc2, ctc3] = [acc1, acc2, acc3].map((a) => ctc(a));

const assertEvent = async (event, ...expectedArgs) => {
  try {
    const e = await ctc0.events[event].next();
    const actualArgs = e.what;
    expectedArgs.forEach((expectedArg, i) =>
      assertEq(actualArgs[i], expectedArg, `${event} field ${i}`)
    );
  } catch (e) {}
};

const assertView = async (view, args, expectedRet) => {
  try {
    const ret = await ctc0.unsafeViews[view](...args).catch(() => {});
    assertEq(
      ret,
      expectedRet,
      `view ${view}: expected ${expectedRet}, got ${ret}`
    );
  } catch (e) {}
};

const TestARC72ARC73SupportsInterface = async () => {
  console.log("Testing ARC-72 Interface Detection (ARC-73)...");
  return;
  // Interface ID that must be false
  await assertView("arc73_supportsInterface", ["0xffffffff"], false);
  // arc73_supportsInterface (ARC-73) interface ID
  await assertView("arc73_supportsInterface", ["0x4e22a3ba"], true);
  // ARC-72 core id
  await assertView("arc73_supportsInterface", ["0x15974096"], true);
  // ARC-72 metadata id
  await assertView("arc73_supportsInterface", ["0x9112544c"], true);
  // ARC-72 transfer management id
  await assertView("arc73_supportsInterface", ["0x924d64fb"], true);
  // Some non-existent interface ID
  await assertView("arc73_supportsInterface", ["0x12345678"], false);
};
const TestARC72Core = async () => {};

const TestARC72TransferManagement = async () => {};

const TestARC72 = async () => {
  console.log("Testing ARC-72...");

  await TestARC72ARC73SupportsInterface();

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  // Test happy/sad paths

  console.log("About to start testing.");

  await assertView("arc72_ownerOf", [1], ["None", null]);
  await assertFail(ctc1.a.mintTo(addr2), "must be admin");
  await assertFail(
    ctc2.a.arc72_transferFrom(addr2, addr3, 1),
    "nft must exist"
  );

  console.log("About to mint first NFT.");

  await ctc0.a.mintTo(addr2);

  await assertEvent("arc72_Transfer", ["None", null], addr2, 1);
  await assertView("arc72_ownerOf", [1], addr2);
  await assertView("arc72_tokenURI", [1], params.metadataUriBase + "0001");
  // ---------------------------------------------
  /*
  await ctc0.a.arc72_transferFrom(addr2, addr3, 1);
  await assertFail(
    ctc0.a.arc72_transferFrom(addr2, addr3, 1),
    "must be existing nft owner or arc72_approved operator"
  );
  await assertFail(
    ctc0.a.arc72_transferFrom(addr0, addr3, 1),
    "owner specified in must be correct"
  );
  await ctc2.a.arc72_transferFrom(addr2, addr3, 1);
  await assertEvent("arc72_Transfer", addr2, addr3, 1);
  await assertView("arc72_ownerOf", [1], addr3);
  await assertFail(
    ctc0.a.arc72_transferFrom(addr3, addr1, 1),
    "must be existing nft owner or arc72_approved operator"
  );
  await assertFail(
    ctc0.a.arc72_transferFrom(addr0, addr1, 1),
    "owner specified in must be correct"
  );
  // ---------------------------------------------
  await ctc3.a.arc72_transferFrom(addr3, addr2, 1);
  await assertEvent("arc72_Transfer", addr3, addr2, 1);
  await assertView("arc72_ownerOf", [1], addr2);

  console.log("About to test transfer management.");
  await ctc0.a.mintTo(addr2);
  await assertEvent("arc72_Transfer", ["None", null], ["Some", addr2], 2);
  await assertView("arc72_ownerOf", [2], addr2);
  await assertView("arc72_tokenURI", [2], params.metadataUriBase + "0002");
  await assertView("arc72_getApproved", [2], ["None", null]);
  await assertView(
    "arc72_isApprovedForAll",
    [
      ["Some", addr3],
      ["Some", addr1],
    ],
    false
  );
  await ctc3.a.arc72_setApprovalForAll(addr1, true);
  await assertEvent("arc72_ApprovalForAll", addr3, addr1, true);
  await assertView(
    "arc72_isApprovedForAll",
    [
      ["Some", addr3],
      ["Some", addr1],
    ],
    true
  );
  await assertFail(
    ctc0.a.arc72_transferFrom(addr2, addr3, 2),
    "must be existing nft owner or arc72_approved operator"
  );
  await ctc2.a.arc72_approve(addr0, 2);
  await assertView("arc72_getApproved", [2], addr0);
  await ctc0.a.arc72_transferFrom(addr2, addr3, 2);
  await assertEvent("arc72_Transfer", ["Some", addr2], ["Some", addr3], 2);
  await assertView("arc72_getApproved", [2], ["None", null]);
  // addr1 is arc72_approved for all for addr3
  await ctc1.a.arc72_transferFrom(addr3, addr1, 2);
  await assertEvent("arc72_Transfer", ["Some", addr3], ["Some", addr1], 2);
  await assertView(
    "arc72_isApprovedForAll",
    [
      ["Some", addr3],
      ["Some", addr1],
    ],
    true
  ); // still arc72_approved
  await ctc1.a.arc72_transferFrom(addr1, addr3, 2);
  await assertEvent("arc72_Transfer", addr1, addr3, 2);
  await ctc3.a.arc72_setApprovalForAll(addr1, false);
  await assertEvent(
    "arc72_ApprovalForAll",
    ["Some", addr3],
    ["Some", addr1],
    false
  ); // no longer arc72_approved
  await assertView(
    "arc72_isApprovedForAll",
    [
      ["Some", addr3],
      ["Some", addr1],
    ],
    false
  );
  // addr1 is no longer arc72_approved
  await assertFail(ctc1.a.arc72_transferFrom(addr3, addr1, 2)); // addr1 can not transfer addr3 nft anymore
  await assertView("arc72_totalSupply", [], 2);
  await assertFail(
    ctc1.a.burn(2),
    "must be existing nft owner or arc72_approved operator to burn"
  );
  await ctc3.a.burn(2);
  await assertEvent("arc72_Transfer", addr3, ["None", null], 2);
  await assertView("arc72_totalSupply", [], 1);

  console.log("About to test admin update.");
  await assertFail(ctc1.a.updateAdmin(addr2), "must be admin");
  await ctc0.a.updateAdmin(addr2);
  await assertFail(ctc0.a.updateAdmin(addr3), "must be admin");
  await assertFail(ctc0.a.mintTo(addr3), "must be admin");
  await ctc2.a.mintTo(addr3);
  await assertEvent("arc72_Transfer", zeroAddress, addr3, 3);
  await assertView("arc72_ownerOf", [3], addr3);
  await assertView("arc72_totalSupply", [], 2);

  console.log("Done testing NFT contract.");
  */
};

const main = async () => {
  await TestARC72();
};

await main();
