// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/protorev/v1beta1/tx.proto (package osmosis.protorev.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgSetBaseDenoms, MsgSetBaseDenomsResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse, MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetInfoByPoolType, MsgSetInfoByPoolTypeResponse, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockResponse, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxResponse } from "./tx_pb.js";

const TYPE_NAME = "osmosis.protorev.v1beta1.Msg";

/**
 * SetHotRoutes sets the hot routes that will be explored when creating
 * cyclic arbitrage routes. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetHotRoutes
 */
export const MsgSetHotRoutesService = {
  typeName: TYPE_NAME,
  method: "SetHotRoutes",
  Request: MsgSetHotRoutes,
  Response: MsgSetHotRoutesResponse,
} as const;

/**
 * SetDeveloperAccount sets the account that can withdraw a portion of the
 * profits from the protorev module. This will be Skip's address.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetDeveloperAccount
 */
export const MsgSetDeveloperAccountService = {
  typeName: TYPE_NAME,
  method: "SetDeveloperAccount",
  Request: MsgSetDeveloperAccount,
  Response: MsgSetDeveloperAccountResponse,
} as const;

/**
 * SetMaxPoolPointsPerTx sets the maximum number of pool points that can be
 * consumed per transaction. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetMaxPoolPointsPerTx
 */
export const MsgSetMaxPoolPointsPerTxService = {
  typeName: TYPE_NAME,
  method: "SetMaxPoolPointsPerTx",
  Request: MsgSetMaxPoolPointsPerTx,
  Response: MsgSetMaxPoolPointsPerTxResponse,
} as const;

/**
 * SetMaxPoolPointsPerBlock sets the maximum number of pool points that can be
 * consumed per block. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetMaxPoolPointsPerBlock
 */
export const MsgSetMaxPoolPointsPerBlockService = {
  typeName: TYPE_NAME,
  method: "SetMaxPoolPointsPerBlock",
  Request: MsgSetMaxPoolPointsPerBlock,
  Response: MsgSetMaxPoolPointsPerBlockResponse,
} as const;

/**
 * SetInfoByPoolType sets the pool type information needed to make smart
 * assumptions about swapping on different pool types
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetInfoByPoolType
 */
export const MsgSetInfoByPoolTypeService = {
  typeName: TYPE_NAME,
  method: "SetInfoByPoolType",
  Request: MsgSetInfoByPoolType,
  Response: MsgSetInfoByPoolTypeResponse,
} as const;

/**
 * SetBaseDenoms sets the base denoms that will be used to create cyclic
 * arbitrage routes. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetBaseDenoms
 */
export const MsgSetBaseDenomsService = {
  typeName: TYPE_NAME,
  method: "SetBaseDenoms",
  Request: MsgSetBaseDenoms,
  Response: MsgSetBaseDenomsResponse,
} as const;

