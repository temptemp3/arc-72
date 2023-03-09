'reach 0.1';
'use strict'
// -----------------------------------------------
// Name: Template
// Description: Reach App using Constructor
// Author: Nicholas Shellabarger
// Version: 0.1.1 - update version
// Requires Reach v0.1.9 (402c3faa)
// ----------------------------------------------
//import { useConstructor } from '@nash-protocol/starter-kit#atom-v0.1.10r1:util.rsh'
import { useConstructor } from 'util.rsh';
import { Participants as AppParticipants,Views, Api, App, Event, Options } from 'interface.rsh'
export const main = Reach.App(() => 
  App(useConstructor(AppParticipants, Views, Api, Event, Options)));
// ----------------------------------------------