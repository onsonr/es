// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file cosmos/gov/v1beta1/tx.proto (package cosmos.gov.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgDeposit, MsgDepositResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse } from "./tx_pb.js";

const TYPE_NAME = "cosmos.gov.v1beta1.Msg";

/**
 * SubmitProposal defines a method to create new proposal given a content.
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.SubmitProposal
 */
export const MsgSubmitProposalService = {
  typeName: TYPE_NAME,
  method: "SubmitProposal",
  Request: MsgSubmitProposal,
  Response: MsgSubmitProposalResponse,
} as const;

/**
 * Vote defines a method to add a vote on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.Vote
 */
export const MsgVoteService = {
  typeName: TYPE_NAME,
  method: "Vote",
  Request: MsgVote,
  Response: MsgVoteResponse,
} as const;

/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.VoteWeighted
 */
export const MsgVoteWeightedService = {
  typeName: TYPE_NAME,
  method: "VoteWeighted",
  Request: MsgVoteWeighted,
  Response: MsgVoteWeightedResponse,
} as const;

/**
 * Deposit defines a method to add deposit on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.Deposit
 */
export const MsgDepositService = {
  typeName: TYPE_NAME,
  method: "Deposit",
  Request: MsgDeposit,
  Response: MsgDepositResponse,
} as const;

