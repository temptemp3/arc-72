"reach 0.1";
"use strict";

import { view as CoreView } from "./arc72-core.rsh";
import { view as MetadataView } from "./arc72-metadata.rsh";
import { view as EnumeratableView } from "./arc72-enumeration.rsh";
import { view as TransferManagementView } from "./arc72-transfer-management.rsh";

export const main = Reach.App(() => {
  setOptions({ connectors: [ETH] });
  //const { /*IDs,*/ View: V /*, Events: E, API: A*/ } = Enumeratable(Metadata);
  const D = Participant("Deployer", {});
  const V = View({
    ...CoreView,
    ...MetadataView,
    ...EnumeratableView,
    ...TransferManagementView,
  });
  init();
  D.publish();
  V.totalSupply.set(0);
  commit();
  exit();
});
