// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file babylon/finality/v1/tx.proto (package babylon.finality.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddFinalitySig, MsgAddFinalitySigResponse, MsgCommitPubRandList, MsgCommitPubRandListResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "babylon.finality.v1.Msg";

/**
 * AddFinalitySig adds a finality signature to a given block
 *
 * @generated from rpc babylon.finality.v1.Msg.AddFinalitySig
 */
export const MsgAddFinalitySigService = {
  typeName: TYPE_NAME,
  method: "AddFinalitySig",
  Request: MsgAddFinalitySig,
  Response: MsgAddFinalitySigResponse,
} as const;

/**
 * CommitPubRandList commits a list of public randomness for EOTS
 *
 * @generated from rpc babylon.finality.v1.Msg.CommitPubRandList
 */
export const MsgCommitPubRandListService = {
  typeName: TYPE_NAME,
  method: "CommitPubRandList",
  Request: MsgCommitPubRandList,
  Response: MsgCommitPubRandListResponse,
} as const;

/**
 * TODO: msg for evidence of equivocation. this is not specified yet
 * UpdateParams updates the finality module parameters.
 *
 * @generated from rpc babylon.finality.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

