// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file osmosis/superfluid/query.proto (package osmosis.superfluid, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  AllAssetsRequest,
  AllAssetsResponse,
  AllIntermediaryAccountsRequest,
  AllIntermediaryAccountsResponse,
  AssetMultiplierRequest,
  AssetMultiplierResponse,
  AssetTypeRequest,
  AssetTypeResponse,
  ConnectedIntermediaryAccountRequest,
  ConnectedIntermediaryAccountResponse,
  EstimateSuperfluidDelegatedAmountByValidatorDenomRequest,
  EstimateSuperfluidDelegatedAmountByValidatorDenomResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryRestSupplyRequest,
  QueryRestSupplyResponse,
  QueryTotalDelegationByDelegatorRequest,
  QueryTotalDelegationByDelegatorResponse,
  QueryTotalDelegationByValidatorForDenomRequest,
  QueryTotalDelegationByValidatorForDenomResponse,
  QueryUnpoolWhitelistRequest,
  QueryUnpoolWhitelistResponse,
  SuperfluidDelegationAmountRequest,
  SuperfluidDelegationAmountResponse,
  SuperfluidDelegationsByDelegatorRequest,
  SuperfluidDelegationsByDelegatorResponse,
  SuperfluidDelegationsByValidatorDenomRequest,
  SuperfluidDelegationsByValidatorDenomResponse,
  SuperfluidUndelegationsByDelegatorRequest,
  SuperfluidUndelegationsByDelegatorResponse,
  TotalSuperfluidDelegationsRequest,
  TotalSuperfluidDelegationsResponse,
  UserConcentratedSuperfluidPositionsDelegatedRequest,
  UserConcentratedSuperfluidPositionsDelegatedResponse,
  UserConcentratedSuperfluidPositionsUndelegatingRequest,
  UserConcentratedSuperfluidPositionsUndelegatingResponse,
} from "./query_pb.js";

const TYPE_NAME = "osmosis.superfluid.Query";

/**
 * Params returns the total set of superfluid parameters.
 *
 * @generated from rpc osmosis.superfluid.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Returns superfluid asset type, whether if it's a native asset or an lp
 * share.
 *
 * @generated from rpc osmosis.superfluid.Query.AssetType
 */
export const QueryAssetTypeService = {
  typeName: TYPE_NAME,
  method: "AssetType",
  Request: AssetTypeRequest,
  Response: AssetTypeResponse,
} as const;

/**
 * Returns all registered superfluid assets.
 *
 * @generated from rpc osmosis.superfluid.Query.AllAssets
 */
export const QueryAllAssetsService = {
  typeName: TYPE_NAME,
  method: "AllAssets",
  Request: AllAssetsRequest,
  Response: AllAssetsResponse,
} as const;

/**
 * Returns the osmo equivalent multiplier used in the most recent epoch.
 *
 * @generated from rpc osmosis.superfluid.Query.AssetMultiplier
 */
export const QueryAssetMultiplierService = {
  typeName: TYPE_NAME,
  method: "AssetMultiplier",
  Request: AssetMultiplierRequest,
  Response: AssetMultiplierResponse,
} as const;

/**
 * Returns all superfluid intermediary accounts.
 *
 * @generated from rpc osmosis.superfluid.Query.AllIntermediaryAccounts
 */
export const QueryAllIntermediaryAccountsService = {
  typeName: TYPE_NAME,
  method: "AllIntermediaryAccounts",
  Request: AllIntermediaryAccountsRequest,
  Response: AllIntermediaryAccountsResponse,
} as const;

/**
 * Returns intermediary account connected to a superfluid staked lock by id
 *
 * @generated from rpc osmosis.superfluid.Query.ConnectedIntermediaryAccount
 */
export const QueryConnectedIntermediaryAccountService = {
  typeName: TYPE_NAME,
  method: "ConnectedIntermediaryAccount",
  Request: ConnectedIntermediaryAccountRequest,
  Response: ConnectedIntermediaryAccountResponse,
} as const;

/**
 * Returns the amount of delegations of specific denom for all validators
 *
 * @generated from rpc osmosis.superfluid.Query.TotalDelegationByValidatorForDenom
 */
export const QueryTotalDelegationByValidatorForDenomService = {
  typeName: TYPE_NAME,
  method: "TotalDelegationByValidatorForDenom",
  Request: QueryTotalDelegationByValidatorForDenomRequest,
  Response: QueryTotalDelegationByValidatorForDenomResponse,
} as const;

/**
 * Returns the total amount of osmo superfluidly staked.
 * Response is denominated in uosmo.
 *
 * @generated from rpc osmosis.superfluid.Query.TotalSuperfluidDelegations
 */
export const QueryTotalSuperfluidDelegationsService = {
  typeName: TYPE_NAME,
  method: "TotalSuperfluidDelegations",
  Request: TotalSuperfluidDelegationsRequest,
  Response: TotalSuperfluidDelegationsResponse,
} as const;

/**
 * Returns the coins superfluid delegated for the delegator, validator, denom
 * triplet
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidDelegationAmount
 */
export const QuerySuperfluidDelegationAmountService = {
  typeName: TYPE_NAME,
  method: "SuperfluidDelegationAmount",
  Request: SuperfluidDelegationAmountRequest,
  Response: SuperfluidDelegationAmountResponse,
} as const;

/**
 * Returns all the delegated superfluid positions for a specific delegator.
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidDelegationsByDelegator
 */
export const QuerySuperfluidDelegationsByDelegatorService = {
  typeName: TYPE_NAME,
  method: "SuperfluidDelegationsByDelegator",
  Request: SuperfluidDelegationsByDelegatorRequest,
  Response: SuperfluidDelegationsByDelegatorResponse,
} as const;

/**
 * Returns all the undelegating superfluid positions for a specific delegator.
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidUndelegationsByDelegator
 */
export const QuerySuperfluidUndelegationsByDelegatorService = {
  typeName: TYPE_NAME,
  method: "SuperfluidUndelegationsByDelegator",
  Request: SuperfluidUndelegationsByDelegatorRequest,
  Response: SuperfluidUndelegationsByDelegatorResponse,
} as const;

/**
 * Returns all the superfluid positions of a specific denom delegated to one
 * validator
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidDelegationsByValidatorDenom
 */
export const QuerySuperfluidDelegationsByValidatorDenomService = {
  typeName: TYPE_NAME,
  method: "SuperfluidDelegationsByValidatorDenom",
  Request: SuperfluidDelegationsByValidatorDenomRequest,
  Response: SuperfluidDelegationsByValidatorDenomResponse,
} as const;

/**
 * Returns the amount of a specific denom delegated to a specific validator
 * This is labeled an estimate, because the way it calculates the amount can
 * lead rounding errors from the true delegated amount
 *
 * @generated from rpc osmosis.superfluid.Query.EstimateSuperfluidDelegatedAmountByValidatorDenom
 */
export const QueryEstimateSuperfluidDelegatedAmountByValidatorDenomService = {
  typeName: TYPE_NAME,
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom",
  Request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest,
  Response: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse,
} as const;

/**
 * Returns the specified delegations for a specific delegator
 *
 * @generated from rpc osmosis.superfluid.Query.TotalDelegationByDelegator
 */
export const QueryTotalDelegationByDelegatorService = {
  typeName: TYPE_NAME,
  method: "TotalDelegationByDelegator",
  Request: QueryTotalDelegationByDelegatorRequest,
  Response: QueryTotalDelegationByDelegatorResponse,
} as const;

/**
 * Returns a list of whitelisted pool ids to unpool.
 *
 * @generated from rpc osmosis.superfluid.Query.UnpoolWhitelist
 */
export const QueryUnpoolWhitelistService = {
  typeName: TYPE_NAME,
  method: "UnpoolWhitelist",
  Request: QueryUnpoolWhitelistRequest,
  Response: QueryUnpoolWhitelistResponse,
} as const;

/**
 * Returns all of a user's full range CL positions that are superfluid staked.
 *
 * @generated from rpc osmosis.superfluid.Query.UserConcentratedSuperfluidPositionsDelegated
 */
export const QueryUserConcentratedSuperfluidPositionsDelegatedService = {
  typeName: TYPE_NAME,
  method: "UserConcentratedSuperfluidPositionsDelegated",
  Request: UserConcentratedSuperfluidPositionsDelegatedRequest,
  Response: UserConcentratedSuperfluidPositionsDelegatedResponse,
} as const;

/**
 * @generated from rpc osmosis.superfluid.Query.UserConcentratedSuperfluidPositionsUndelegating
 */
export const QueryUserConcentratedSuperfluidPositionsUndelegatingService = {
  typeName: TYPE_NAME,
  method: "UserConcentratedSuperfluidPositionsUndelegating",
  Request: UserConcentratedSuperfluidPositionsUndelegatingRequest,
  Response: UserConcentratedSuperfluidPositionsUndelegatingResponse,
} as const;

/**
 * @generated from rpc osmosis.superfluid.Query.RestSupply
 */
export const QueryRestSupplyService = {
  typeName: TYPE_NAME,
  method: "RestSupply",
  Request: QueryRestSupplyRequest,
  Response: QueryRestSupplyResponse,
} as const;
