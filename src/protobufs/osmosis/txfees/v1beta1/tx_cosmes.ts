// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/tx.proto (package osmosis.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgSetFeeTokens, MsgSetFeeTokensResponse } from "./tx_pb.js";

const TYPE_NAME = "osmosis.txfees.v1beta1.Msg";

/**
 * @generated from rpc osmosis.txfees.v1beta1.Msg.SetFeeTokens
 */
export const MsgSetFeeTokensService = {
  typeName: TYPE_NAME,
  method: "SetFeeTokens",
  Request: MsgSetFeeTokens,
  Response: MsgSetFeeTokensResponse,
} as const;
