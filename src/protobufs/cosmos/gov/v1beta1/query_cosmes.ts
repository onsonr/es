// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file cosmos/gov/v1beta1/query.proto (package cosmos.gov.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryParamsRequest, QueryParamsResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse } from "./query_pb.js";

const TYPE_NAME = "cosmos.gov.v1beta1.Query";

/**
 * Proposal queries proposal details based on ProposalID.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Proposal
 */
export const QueryProposalService = {
  typeName: TYPE_NAME,
  method: "Proposal",
  Request: QueryProposalRequest,
  Response: QueryProposalResponse,
} as const;

/**
 * Proposals queries all proposals based on given status.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Proposals
 */
export const QueryProposalsService = {
  typeName: TYPE_NAME,
  method: "Proposals",
  Request: QueryProposalsRequest,
  Response: QueryProposalsResponse,
} as const;

/**
 * Vote queries voted information based on proposalID, voterAddr.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Vote
 */
export const QueryVoteService = {
  typeName: TYPE_NAME,
  method: "Vote",
  Request: QueryVoteRequest,
  Response: QueryVoteResponse,
} as const;

/**
 * Votes queries votes of a given proposal.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Votes
 */
export const QueryVotesService = {
  typeName: TYPE_NAME,
  method: "Votes",
  Request: QueryVotesRequest,
  Response: QueryVotesResponse,
} as const;

/**
 * Params queries all parameters of the gov module.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Deposit queries single deposit information based on proposalID, depositor address.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Deposit
 */
export const QueryDepositService = {
  typeName: TYPE_NAME,
  method: "Deposit",
  Request: QueryDepositRequest,
  Response: QueryDepositResponse,
} as const;

/**
 * Deposits queries all deposits of a single proposal.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.Deposits
 */
export const QueryDepositsService = {
  typeName: TYPE_NAME,
  method: "Deposits",
  Request: QueryDepositsRequest,
  Response: QueryDepositsResponse,
} as const;

/**
 * TallyResult queries the tally of a proposal vote.
 *
 * @generated from rpc cosmos.gov.v1beta1.Query.TallyResult
 */
export const QueryTallyResultService = {
  typeName: TYPE_NAME,
  method: "TallyResult",
  Request: QueryTallyResultRequest,
  Response: QueryTallyResultResponse,
} as const;

