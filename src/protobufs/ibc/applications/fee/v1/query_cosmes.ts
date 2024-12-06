// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/fee/v1/query.proto (package ibc.applications.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryPayeeRequest, QueryPayeeResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse } from "./query_pb.js";

const TYPE_NAME = "ibc.applications.fee.v1.Query";

/**
 * IncentivizedPackets returns all incentivized packets and their associated fees
 *
 * @generated from rpc ibc.applications.fee.v1.Query.IncentivizedPackets
 */
export const QueryIncentivizedPacketsService = {
  typeName: TYPE_NAME,
  method: "IncentivizedPackets",
  Request: QueryIncentivizedPacketsRequest,
  Response: QueryIncentivizedPacketsResponse,
} as const;

/**
 * IncentivizedPacket returns all packet fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.IncentivizedPacket
 */
export const QueryIncentivizedPacketService = {
  typeName: TYPE_NAME,
  method: "IncentivizedPacket",
  Request: QueryIncentivizedPacketRequest,
  Response: QueryIncentivizedPacketResponse,
} as const;

/**
 * Gets all incentivized packets for a specific channel
 *
 * @generated from rpc ibc.applications.fee.v1.Query.IncentivizedPacketsForChannel
 */
export const QueryIncentivizedPacketsForChannelService = {
  typeName: TYPE_NAME,
  method: "IncentivizedPacketsForChannel",
  Request: QueryIncentivizedPacketsForChannelRequest,
  Response: QueryIncentivizedPacketsForChannelResponse,
} as const;

/**
 * TotalRecvFees returns the total receive fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.TotalRecvFees
 */
export const QueryTotalRecvFeesService = {
  typeName: TYPE_NAME,
  method: "TotalRecvFees",
  Request: QueryTotalRecvFeesRequest,
  Response: QueryTotalRecvFeesResponse,
} as const;

/**
 * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.TotalAckFees
 */
export const QueryTotalAckFeesService = {
  typeName: TYPE_NAME,
  method: "TotalAckFees",
  Request: QueryTotalAckFeesRequest,
  Response: QueryTotalAckFeesResponse,
} as const;

/**
 * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.TotalTimeoutFees
 */
export const QueryTotalTimeoutFeesService = {
  typeName: TYPE_NAME,
  method: "TotalTimeoutFees",
  Request: QueryTotalTimeoutFeesRequest,
  Response: QueryTotalTimeoutFeesResponse,
} as const;

/**
 * Payee returns the registered payee address for a specific channel given the relayer address
 *
 * @generated from rpc ibc.applications.fee.v1.Query.Payee
 */
export const QueryPayeeService = {
  typeName: TYPE_NAME,
  method: "Payee",
  Request: QueryPayeeRequest,
  Response: QueryPayeeResponse,
} as const;

/**
 * CounterpartyPayee returns the registered counterparty payee for forward relaying
 *
 * @generated from rpc ibc.applications.fee.v1.Query.CounterpartyPayee
 */
export const QueryCounterpartyPayeeService = {
  typeName: TYPE_NAME,
  method: "CounterpartyPayee",
  Request: QueryCounterpartyPayeeRequest,
  Response: QueryCounterpartyPayeeResponse,
} as const;

/**
 * FeeEnabledChannels returns a list of all fee enabled channels
 *
 * @generated from rpc ibc.applications.fee.v1.Query.FeeEnabledChannels
 */
export const QueryFeeEnabledChannelsService = {
  typeName: TYPE_NAME,
  method: "FeeEnabledChannels",
  Request: QueryFeeEnabledChannelsRequest,
  Response: QueryFeeEnabledChannelsResponse,
} as const;

/**
 * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
 *
 * @generated from rpc ibc.applications.fee.v1.Query.FeeEnabledChannel
 */
export const QueryFeeEnabledChannelService = {
  typeName: TYPE_NAME,
  method: "FeeEnabledChannel",
  Request: QueryFeeEnabledChannelRequest,
  Response: QueryFeeEnabledChannelResponse,
} as const;

