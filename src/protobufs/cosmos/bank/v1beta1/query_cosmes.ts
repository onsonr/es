// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/query.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllBalancesRequest, QueryAllBalancesResponse, QueryBalanceRequest, QueryBalanceResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryParamsRequest, QueryParamsResponse, QuerySendEnabledRequest, QuerySendEnabledResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query_pb.js";

const TYPE_NAME = "cosmos.bank.v1beta1.Query";

/**
 * Balance queries the balance of a single coin for a single account.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.Balance
 */
export const QueryBalanceService = {
  typeName: TYPE_NAME,
  method: "Balance",
  Request: QueryBalanceRequest,
  Response: QueryBalanceResponse,
} as const;

/**
 * AllBalances queries the balance of all coins for a single account.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.AllBalances
 */
export const QueryAllBalancesService = {
  typeName: TYPE_NAME,
  method: "AllBalances",
  Request: QueryAllBalancesRequest,
  Response: QueryAllBalancesResponse,
} as const;

/**
 * SpendableBalances queries the spendable balance of all coins for a single
 * account.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SpendableBalances
 */
export const QuerySpendableBalancesService = {
  typeName: TYPE_NAME,
  method: "SpendableBalances",
  Request: QuerySpendableBalancesRequest,
  Response: QuerySpendableBalancesResponse,
} as const;

/**
 * SpendableBalanceByDenom queries the spendable balance of a single denom for
 * a single account.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SpendableBalanceByDenom
 */
export const QuerySpendableBalanceByDenomService = {
  typeName: TYPE_NAME,
  method: "SpendableBalanceByDenom",
  Request: QuerySpendableBalanceByDenomRequest,
  Response: QuerySpendableBalanceByDenomResponse,
} as const;

/**
 * TotalSupply queries the total supply of all coins.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.TotalSupply
 */
export const QueryTotalSupplyService = {
  typeName: TYPE_NAME,
  method: "TotalSupply",
  Request: QueryTotalSupplyRequest,
  Response: QueryTotalSupplyResponse,
} as const;

/**
 * SupplyOf queries the supply of a single coin.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SupplyOf
 */
export const QuerySupplyOfService = {
  typeName: TYPE_NAME,
  method: "SupplyOf",
  Request: QuerySupplyOfRequest,
  Response: QuerySupplyOfResponse,
} as const;

/**
 * Params queries the parameters of x/bank module.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * DenomMetadata queries the client metadata of a given coin denomination.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomMetadata
 */
export const QueryDenomMetadataService = {
  typeName: TYPE_NAME,
  method: "DenomMetadata",
  Request: QueryDenomMetadataRequest,
  Response: QueryDenomMetadataResponse,
} as const;

/**
 * DenomMetadataByQueryString queries the client metadata of a given coin denomination.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomMetadataByQueryString
 */
export const QueryDenomMetadataByQueryStringService = {
  typeName: TYPE_NAME,
  method: "DenomMetadataByQueryString",
  Request: QueryDenomMetadataByQueryStringRequest,
  Response: QueryDenomMetadataByQueryStringResponse,
} as const;

/**
 * DenomsMetadata queries the client metadata for all registered coin
 * denominations.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomsMetadata
 */
export const QueryDenomsMetadataService = {
  typeName: TYPE_NAME,
  method: "DenomsMetadata",
  Request: QueryDenomsMetadataRequest,
  Response: QueryDenomsMetadataResponse,
} as const;

/**
 * DenomOwners queries for all account addresses that own a particular token
 * denomination.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomOwners
 */
export const QueryDenomOwnersService = {
  typeName: TYPE_NAME,
  method: "DenomOwners",
  Request: QueryDenomOwnersRequest,
  Response: QueryDenomOwnersResponse,
} as const;

/**
 * DenomOwnersByQuery queries for all account addresses that own a particular token
 * denomination.
 *
 * Since: cosmos-sdk 0.50.3
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomOwnersByQuery
 */
export const QueryDenomOwnersByQueryService = {
  typeName: TYPE_NAME,
  method: "DenomOwnersByQuery",
  Request: QueryDenomOwnersByQueryRequest,
  Response: QueryDenomOwnersByQueryResponse,
} as const;

/**
 * SendEnabled queries for SendEnabled entries.
 *
 * This query only returns denominations that have specific SendEnabled settings.
 * Any denomination that does not have a specific setting will use the default
 * params.default_send_enabled, and will not be returned by this query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SendEnabled
 */
export const QuerySendEnabledService = {
  typeName: TYPE_NAME,
  method: "SendEnabled",
  Request: QuerySendEnabledRequest,
  Response: QuerySendEnabledResponse,
} as const;

