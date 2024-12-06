// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file babylon/incentive/tx.proto (package babylon.incentive, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgWithdrawReward,
  MsgWithdrawRewardResponse,
} from "./tx_pb.js";

const TYPE_NAME = "babylon.incentive.Msg";

/**
 * WithdrawReward defines a method to withdraw rewards of a stakeholder
 *
 * @generated from rpc babylon.incentive.Msg.WithdrawReward
 */
export const MsgWithdrawRewardService = {
  typeName: TYPE_NAME,
  method: "WithdrawReward",
  Request: MsgWithdrawReward,
  Response: MsgWithdrawRewardResponse,
} as const;

/**
 * UpdateParams updates the incentive module parameters.
 *
 * @generated from rpc babylon.incentive.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;
