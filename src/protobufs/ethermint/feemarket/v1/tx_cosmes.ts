// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file ethermint/feemarket/v1/tx.proto (package ethermint.feemarket.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "ethermint.feemarket.v1.Msg";

/**
 * UpdateParams defined a governance operation for updating the x/feemarket module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc ethermint.feemarket.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

