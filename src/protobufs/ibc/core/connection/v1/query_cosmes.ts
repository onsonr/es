// @generated by protoc-gen-@onsonr/es v0.0.1 with parameter "target=ts"
// @generated from file ibc/core/connection/v1/query.proto (package ibc.core.connection.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse, QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse } from "./query_pb.js";

const TYPE_NAME = "ibc.core.connection.v1.Query";

/**
 * Connection queries an IBC connection end.
 *
 * @generated from rpc ibc.core.connection.v1.Query.Connection
 */
export const QueryConnectionService = {
  typeName: TYPE_NAME,
  method: "Connection",
  Request: QueryConnectionRequest,
  Response: QueryConnectionResponse,
} as const;

/**
 * Connections queries all the IBC connections of a chain.
 *
 * @generated from rpc ibc.core.connection.v1.Query.Connections
 */
export const QueryConnectionsService = {
  typeName: TYPE_NAME,
  method: "Connections",
  Request: QueryConnectionsRequest,
  Response: QueryConnectionsResponse,
} as const;

/**
 * ClientConnections queries the connection paths associated with a client
 * state.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ClientConnections
 */
export const QueryClientConnectionsService = {
  typeName: TYPE_NAME,
  method: "ClientConnections",
  Request: QueryClientConnectionsRequest,
  Response: QueryClientConnectionsResponse,
} as const;

/**
 * ConnectionClientState queries the client state associated with the
 * connection.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ConnectionClientState
 */
export const QueryConnectionClientStateService = {
  typeName: TYPE_NAME,
  method: "ConnectionClientState",
  Request: QueryConnectionClientStateRequest,
  Response: QueryConnectionClientStateResponse,
} as const;

/**
 * ConnectionConsensusState queries the consensus state associated with the
 * connection.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ConnectionConsensusState
 */
export const QueryConnectionConsensusStateService = {
  typeName: TYPE_NAME,
  method: "ConnectionConsensusState",
  Request: QueryConnectionConsensusStateRequest,
  Response: QueryConnectionConsensusStateResponse,
} as const;

/**
 * ConnectionParams queries all parameters of the ibc connection submodule.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ConnectionParams
 */
export const QueryConnectionParamsService = {
  typeName: TYPE_NAME,
  method: "ConnectionParams",
  Request: QueryConnectionParamsRequest,
  Response: QueryConnectionParamsResponse,
} as const;

