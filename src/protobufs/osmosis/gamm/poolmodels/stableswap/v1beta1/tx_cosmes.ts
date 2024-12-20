// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/gamm/poolmodels/stableswap/v1beta1/tx.proto (package osmosis.gamm.poolmodels.stableswap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCreateStableswapPool, MsgCreateStableswapPoolResponse, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsResponse } from "./tx_pb.js";

const TYPE_NAME = "osmosis.gamm.poolmodels.stableswap.v1beta1.Msg";

/**
 * @generated from rpc osmosis.gamm.poolmodels.stableswap.v1beta1.Msg.CreateStableswapPool
 */
export const MsgCreateStableswapPoolService = {
  typeName: TYPE_NAME,
  method: "CreateStableswapPool",
  Request: MsgCreateStableswapPool,
  Response: MsgCreateStableswapPoolResponse,
} as const;

/**
 * @generated from rpc osmosis.gamm.poolmodels.stableswap.v1beta1.Msg.StableSwapAdjustScalingFactors
 */
export const MsgStableSwapAdjustScalingFactorsService = {
  typeName: TYPE_NAME,
  method: "StableSwapAdjustScalingFactors",
  Request: MsgStableSwapAdjustScalingFactors,
  Response: MsgStableSwapAdjustScalingFactorsResponse,
} as const;

