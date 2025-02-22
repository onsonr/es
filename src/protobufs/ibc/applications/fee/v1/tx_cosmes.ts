// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file ibc/applications/fee/v1/tx.proto (package ibc.applications.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgPayPacketFee, MsgPayPacketFeeAsync, MsgPayPacketFeeAsyncResponse, MsgPayPacketFeeResponse, MsgRegisterCounterpartyPayee, MsgRegisterCounterpartyPayeeResponse, MsgRegisterPayee, MsgRegisterPayeeResponse } from "./tx_pb.js";

const TYPE_NAME = "ibc.applications.fee.v1.Msg";

/**
 * RegisterPayee defines a rpc handler method for MsgRegisterPayee
 * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
 * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
 * the source chain from which packets originate as this is where fee distribution takes place. This function may be
 * called more than once by a relayer, in which case, the latest payee is always used.
 *
 * @generated from rpc ibc.applications.fee.v1.Msg.RegisterPayee
 */
export const MsgRegisterPayeeService = {
  typeName: TYPE_NAME,
  method: "RegisterPayee",
  Request: MsgRegisterPayee,
  Response: MsgRegisterPayeeResponse,
} as const;

/**
 * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
 * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
 * payee address before relaying. This ensures they will be properly compensated for forward relaying since
 * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
 * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
 *
 * @generated from rpc ibc.applications.fee.v1.Msg.RegisterCounterpartyPayee
 */
export const MsgRegisterCounterpartyPayeeService = {
  typeName: TYPE_NAME,
  method: "RegisterCounterpartyPayee",
  Request: MsgRegisterCounterpartyPayee,
  Response: MsgRegisterCounterpartyPayeeResponse,
} as const;

/**
 * PayPacketFee defines a rpc handler method for MsgPayPacketFee
 * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
 * incentivize the relaying of the packet at the next sequence
 * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
 * initiates the lifecycle of the incentivized packet
 *
 * @generated from rpc ibc.applications.fee.v1.Msg.PayPacketFee
 */
export const MsgPayPacketFeeService = {
  typeName: TYPE_NAME,
  method: "PayPacketFee",
  Request: MsgPayPacketFee,
  Response: MsgPayPacketFeeResponse,
} as const;

/**
 * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
 * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
 * incentivize the relaying of a known packet (i.e. at a particular sequence)
 *
 * @generated from rpc ibc.applications.fee.v1.Msg.PayPacketFeeAsync
 */
export const MsgPayPacketFeeAsyncService = {
  typeName: TYPE_NAME,
  method: "PayPacketFeeAsync",
  Request: MsgPayPacketFeeAsync,
  Response: MsgPayPacketFeeAsyncResponse,
} as const;

