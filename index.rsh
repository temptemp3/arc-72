"reach 0.1";
"use strict";

// IMPORTS

//import { Mixin as Core } from "./arc72-core.rsh";
//import { Mixin as Metadata } from "./arc72-metadata.rsh";
//import { Mixin as Enumeratable } from "./arc72-enumeration.rsh";
//import { Mixin as TransferManagement } from "./transfer-management.rsh";
//import { Mixin } from "./arc72-mixin.rsh";

//import { Mixin as Core } from "./arc72-core.rsh";
import { Mixin as Metadata } from "./arc72-metadata.rsh";
import { Mixin as Enumeratable } from "./arc72-enumeration.rsh";
//import { Mixin as TransferManagement } from "./transfer-management.rsh";
//export const Mixin = () => Enumeratable(Metadata);

//const Mixin = () => Enumeratable(Metadata);
export const main = Reach.App(() => {
  setOptions({ connectors: [ALGO] });
  const { /*IDs,*/ View: V /*, Events: E, API: A*/ } = Enumeratable(Metadata);
  const D = Participant("Deployer", {});
  init();
  D.publish();
  V.totalSupply.set(0);
  commit();
  exit();
});
