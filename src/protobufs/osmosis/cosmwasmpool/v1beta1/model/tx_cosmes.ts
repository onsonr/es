// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/tx.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCreateCosmWasmPool, MsgCreateCosmWasmPoolResponse } from "./tx_pb.js";

const TYPE_NAME = "osmosis.cosmwasmpool.v1beta1.MsgCreator";

/**
 * @generated from rpc osmosis.cosmwasmpool.v1beta1.MsgCreator.CreateCosmWasmPool
 */
export const MsgCreatorCreateCosmWasmPoolService = {
  typeName: TYPE_NAME,
  method: "CreateCosmWasmPool",
  Request: MsgCreateCosmWasmPool,
  Response: MsgCreateCosmWasmPoolResponse,
} as const;

