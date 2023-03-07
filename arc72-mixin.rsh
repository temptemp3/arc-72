"reach 0.1";
"use strict";

// IMPORTS

//import { Mixin as Core } from "./arc72-core.rsh";
import { Mixin as Metadata } from "./arc72-metadata.rsh";
import { Mixin as Enumeratable } from "./arc72-enumeration.rsh";
//import { Mixin as TransferManagement } from "./transfer-management.rsh";

export const Mixin = () => Enumeratable(Metadata);