// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file ethermint/feemarket/v1/query.proto (package ethermint.feemarket.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "ethermint.feemarket.v1.Query";

/**
 * Params queries the parameters of x/feemarket module.
 *
 * @generated from rpc ethermint.feemarket.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * BaseFee queries the base fee of the parent block of the current block.
 *
 * @generated from rpc ethermint.feemarket.v1.Query.BaseFee
 */
export const QueryBaseFeeService = {
  typeName: TYPE_NAME,
  method: "BaseFee",
  Request: QueryBaseFeeRequest,
  Response: QueryBaseFeeResponse,
} as const;

/**
 * BlockGas queries the gas used at a given block height
 *
 * @generated from rpc ethermint.feemarket.v1.Query.BlockGas
 */
export const QueryBlockGasService = {
  typeName: TYPE_NAME,
  method: "BlockGas",
  Request: QueryBlockGasRequest,
  Response: QueryBlockGasResponse,
} as const;

