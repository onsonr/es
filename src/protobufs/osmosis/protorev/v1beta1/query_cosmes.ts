// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/protorev/v1beta1/query.proto (package osmosis.protorev.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryGetAllProtocolRevenueRequest, QueryGetAllProtocolRevenueResponse, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponse, QueryGetProtoRevInfoByPoolTypeRequest, QueryGetProtoRevInfoByPoolTypeResponse, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevPoolRequest, QueryGetProtoRevPoolResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.protorev.v1beta1.Query";

/**
 * Params queries the parameters of the module.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
 * has executed
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevNumberOfTrades
 */
export const QueryGetProtoRevNumberOfTradesService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevNumberOfTrades",
  Request: QueryGetProtoRevNumberOfTradesRequest,
  Response: QueryGetProtoRevNumberOfTradesResponse,
} as const;

/**
 * GetProtoRevProfitsByDenom queries the profits of the module by denom
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevProfitsByDenom
 */
export const QueryGetProtoRevProfitsByDenomService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevProfitsByDenom",
  Request: QueryGetProtoRevProfitsByDenomRequest,
  Response: QueryGetProtoRevProfitsByDenomResponse,
} as const;

/**
 * GetProtoRevAllProfits queries all of the profits from the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevAllProfits
 */
export const QueryGetProtoRevAllProfitsService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevAllProfits",
  Request: QueryGetProtoRevAllProfitsRequest,
  Response: QueryGetProtoRevAllProfitsResponse,
} as const;

/**
 * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
 * that have been executed for a given route
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevStatisticsByRoute
 */
export const QueryGetProtoRevStatisticsByRouteService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevStatisticsByRoute",
  Request: QueryGetProtoRevStatisticsByRouteRequest,
  Response: QueryGetProtoRevStatisticsByRouteResponse,
} as const;

/**
 * GetProtoRevAllRouteStatistics queries all of routes that the module has
 * arbitraged against and the number of trades and profits that have been
 * accumulated for each route
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevAllRouteStatistics
 */
export const QueryGetProtoRevAllRouteStatisticsService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevAllRouteStatistics",
  Request: QueryGetProtoRevAllRouteStatisticsRequest,
  Response: QueryGetProtoRevAllRouteStatisticsResponse,
} as const;

/**
 * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
 * is currently arbitraging
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevTokenPairArbRoutes
 */
export const QueryGetProtoRevTokenPairArbRoutesService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevTokenPairArbRoutes",
  Request: QueryGetProtoRevTokenPairArbRoutesRequest,
  Response: QueryGetProtoRevTokenPairArbRoutesResponse,
} as const;

/**
 * GetProtoRevAdminAccount queries the admin account of the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevAdminAccount
 */
export const QueryGetProtoRevAdminAccountService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevAdminAccount",
  Request: QueryGetProtoRevAdminAccountRequest,
  Response: QueryGetProtoRevAdminAccountResponse,
} as const;

/**
 * GetProtoRevDeveloperAccount queries the developer account of the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevDeveloperAccount
 */
export const QueryGetProtoRevDeveloperAccountService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevDeveloperAccount",
  Request: QueryGetProtoRevDeveloperAccountRequest,
  Response: QueryGetProtoRevDeveloperAccountResponse,
} as const;

/**
 * GetProtoRevInfoByPoolType queries pool type information that is currently
 * being utilized by the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevInfoByPoolType
 */
export const QueryGetProtoRevInfoByPoolTypeService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevInfoByPoolType",
  Request: QueryGetProtoRevInfoByPoolTypeRequest,
  Response: QueryGetProtoRevInfoByPoolTypeResponse,
} as const;

/**
 * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
 * that can be consumed per transaction
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevMaxPoolPointsPerTx
 */
export const QueryGetProtoRevMaxPoolPointsPerTxService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevMaxPoolPointsPerTx",
  Request: QueryGetProtoRevMaxPoolPointsPerTxRequest,
  Response: QueryGetProtoRevMaxPoolPointsPerTxResponse,
} as const;

/**
 * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
 * that can consumed per block
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevMaxPoolPointsPerBlock
 */
export const QueryGetProtoRevMaxPoolPointsPerBlockService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevMaxPoolPointsPerBlock",
  Request: QueryGetProtoRevMaxPoolPointsPerBlockRequest,
  Response: QueryGetProtoRevMaxPoolPointsPerBlockResponse,
} as const;

/**
 * GetProtoRevBaseDenoms queries the base denoms that the module is currently
 * utilizing for arbitrage
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevBaseDenoms
 */
export const QueryGetProtoRevBaseDenomsService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevBaseDenoms",
  Request: QueryGetProtoRevBaseDenomsRequest,
  Response: QueryGetProtoRevBaseDenomsResponse,
} as const;

/**
 * GetProtoRevEnabled queries whether the module is enabled or not
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevEnabled
 */
export const QueryGetProtoRevEnabledService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevEnabled",
  Request: QueryGetProtoRevEnabledRequest,
  Response: QueryGetProtoRevEnabledResponse,
} as const;

/**
 * GetProtoRevPool queries the pool id used via the highest liquidity method
 * for arbitrage route building given a pair of denominations
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevPool
 */
export const QueryGetProtoRevPoolService = {
  typeName: TYPE_NAME,
  method: "GetProtoRevPool",
  Request: QueryGetProtoRevPoolRequest,
  Response: QueryGetProtoRevPoolResponse,
} as const;

/**
 * GetAllProtocolRevenue queries all of the protocol revenue that has been
 * accumulated by any module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetAllProtocolRevenue
 */
export const QueryGetAllProtocolRevenueService = {
  typeName: TYPE_NAME,
  method: "GetAllProtocolRevenue",
  Request: QueryGetAllProtocolRevenueRequest,
  Response: QueryGetAllProtocolRevenueResponse,
} as const;

