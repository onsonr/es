// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/ibcratelimit/v1beta1/query.proto (package osmosis.ibcratelimit.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ParamsRequest, ParamsResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.ibcratelimit.v1beta1.Query";

/**
 * Params defines a gRPC query method that returns the ibc-rate-limit module's
 * parameters.
 *
 * @generated from rpc osmosis.ibcratelimit.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

