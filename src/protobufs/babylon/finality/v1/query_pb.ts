// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/finality/v1/query.proto (package babylon.finality.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Evidence, IndexedBlock } from "./finality_pb.js";

/**
 * QueriedBlockStatus is the status of blocks that the querier wants to query.
 *
 * @generated from enum babylon.finality.v1.QueriedBlockStatus
 */
export enum QueriedBlockStatus {
  /**
   * NON_FINALIZED means the block is not finalised
   *
   * @generated from enum value: NON_FINALIZED = 0;
   */
  NON_FINALIZED = 0,

  /**
   * FINALIZED means the block is finalized
   *
   * @generated from enum value: FINALIZED = 1;
   */
  FINALIZED = 1,

  /**
   * ANY means the block can be in any status
   *
   * @generated from enum value: ANY = 2;
   */
  ANY = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(QueriedBlockStatus)
proto3.util.setEnumType(QueriedBlockStatus, "babylon.finality.v1.QueriedBlockStatus", [
  { no: 0, name: "NON_FINALIZED" },
  { no: 1, name: "FINALIZED" },
  { no: 2, name: "ANY" },
]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message babylon.finality.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message babylon.finality.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: babylon.finality.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QueryListPublicRandomnessRequest is the request type for the
 * Query/ListPublicRandomness RPC method.
 *
 * @generated from message babylon.finality.v1.QueryListPublicRandomnessRequest
 */
export class QueryListPublicRandomnessRequest extends Message<QueryListPublicRandomnessRequest> {
  /**
   * fp_btc_pk_hex is the hex str of Bitcoin secp256k1 PK of the finality provider
   *
   * @generated from field: string fp_btc_pk_hex = 1;
   */
  fpBtcPkHex = "";

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryListPublicRandomnessRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryListPublicRandomnessRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fp_btc_pk_hex", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListPublicRandomnessRequest {
    return new QueryListPublicRandomnessRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListPublicRandomnessRequest {
    return new QueryListPublicRandomnessRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListPublicRandomnessRequest {
    return new QueryListPublicRandomnessRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListPublicRandomnessRequest | PlainMessage<QueryListPublicRandomnessRequest> | undefined, b: QueryListPublicRandomnessRequest | PlainMessage<QueryListPublicRandomnessRequest> | undefined): boolean {
    return proto3.util.equals(QueryListPublicRandomnessRequest, a, b);
  }
}

/**
 * QueryListPublicRandomnessResponse is the response type for the
 * Query/ListPublicRandomness RPC method.
 *
 * @generated from message babylon.finality.v1.QueryListPublicRandomnessResponse
 */
export class QueryListPublicRandomnessResponse extends Message<QueryListPublicRandomnessResponse> {
  /**
   * pub_rand_map is the map where the key is the height and the value
   * is the public randomness at this height for the given finality provider
   *
   * @generated from field: map<uint64, bytes> pub_rand_map = 1;
   */
  pubRandMap: { [key: string]: Uint8Array } = {};

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryListPublicRandomnessResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryListPublicRandomnessResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pub_rand_map", kind: "map", K: 4 /* ScalarType.UINT64 */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListPublicRandomnessResponse {
    return new QueryListPublicRandomnessResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListPublicRandomnessResponse {
    return new QueryListPublicRandomnessResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListPublicRandomnessResponse {
    return new QueryListPublicRandomnessResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListPublicRandomnessResponse | PlainMessage<QueryListPublicRandomnessResponse> | undefined, b: QueryListPublicRandomnessResponse | PlainMessage<QueryListPublicRandomnessResponse> | undefined): boolean {
    return proto3.util.equals(QueryListPublicRandomnessResponse, a, b);
  }
}

/**
 * QueryBlockRequest is the request type for the
 * Query/Block RPC method.
 *
 * @generated from message babylon.finality.v1.QueryBlockRequest
 */
export class QueryBlockRequest extends Message<QueryBlockRequest> {
  /**
   * height is the height of the Babylon block
   *
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<QueryBlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryBlockRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBlockRequest {
    return new QueryBlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBlockRequest {
    return new QueryBlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBlockRequest {
    return new QueryBlockRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBlockRequest | PlainMessage<QueryBlockRequest> | undefined, b: QueryBlockRequest | PlainMessage<QueryBlockRequest> | undefined): boolean {
    return proto3.util.equals(QueryBlockRequest, a, b);
  }
}

/**
 * QueryBlockResponse is the response type for the
 * Query/Block RPC method.
 *
 * @generated from message babylon.finality.v1.QueryBlockResponse
 */
export class QueryBlockResponse extends Message<QueryBlockResponse> {
  /**
   * block is the Babylon at the given height
   *
   * @generated from field: babylon.finality.v1.IndexedBlock block = 1;
   */
  block?: IndexedBlock;

  constructor(data?: PartialMessage<QueryBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryBlockResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block", kind: "message", T: IndexedBlock },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBlockResponse {
    return new QueryBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBlockResponse {
    return new QueryBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBlockResponse {
    return new QueryBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBlockResponse | PlainMessage<QueryBlockResponse> | undefined, b: QueryBlockResponse | PlainMessage<QueryBlockResponse> | undefined): boolean {
    return proto3.util.equals(QueryBlockResponse, a, b);
  }
}

/**
 * QueryListBlocksRequest is the request type for the
 * Query/ListBlocks RPC method.
 *
 * @generated from message babylon.finality.v1.QueryListBlocksRequest
 */
export class QueryListBlocksRequest extends Message<QueryListBlocksRequest> {
  /**
   * status indicates the status of blocks that the querier wants to query
   *
   * @generated from field: babylon.finality.v1.QueriedBlockStatus status = 1;
   */
  status = QueriedBlockStatus.NON_FINALIZED;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryListBlocksRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryListBlocksRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(QueriedBlockStatus) },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListBlocksRequest {
    return new QueryListBlocksRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListBlocksRequest {
    return new QueryListBlocksRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListBlocksRequest {
    return new QueryListBlocksRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListBlocksRequest | PlainMessage<QueryListBlocksRequest> | undefined, b: QueryListBlocksRequest | PlainMessage<QueryListBlocksRequest> | undefined): boolean {
    return proto3.util.equals(QueryListBlocksRequest, a, b);
  }
}

/**
 * QueryListBlocksResponse is the response type for the
 * Query/ListBlocks RPC method.
 *
 * @generated from message babylon.finality.v1.QueryListBlocksResponse
 */
export class QueryListBlocksResponse extends Message<QueryListBlocksResponse> {
  /**
   * blocks is the list of blocks at the given status
   *
   * @generated from field: repeated babylon.finality.v1.IndexedBlock blocks = 1;
   */
  blocks: IndexedBlock[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryListBlocksResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryListBlocksResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "blocks", kind: "message", T: IndexedBlock, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListBlocksResponse {
    return new QueryListBlocksResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListBlocksResponse {
    return new QueryListBlocksResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListBlocksResponse {
    return new QueryListBlocksResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListBlocksResponse | PlainMessage<QueryListBlocksResponse> | undefined, b: QueryListBlocksResponse | PlainMessage<QueryListBlocksResponse> | undefined): boolean {
    return proto3.util.equals(QueryListBlocksResponse, a, b);
  }
}

/**
 * QueryVotesAtHeightRequest is the request type for the
 * Query/VotesAtHeight RPC method.
 *
 * @generated from message babylon.finality.v1.QueryVotesAtHeightRequest
 */
export class QueryVotesAtHeightRequest extends Message<QueryVotesAtHeightRequest> {
  /**
   * height defines at which height to query the finality providers.
   *
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<QueryVotesAtHeightRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryVotesAtHeightRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesAtHeightRequest {
    return new QueryVotesAtHeightRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesAtHeightRequest {
    return new QueryVotesAtHeightRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesAtHeightRequest {
    return new QueryVotesAtHeightRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVotesAtHeightRequest | PlainMessage<QueryVotesAtHeightRequest> | undefined, b: QueryVotesAtHeightRequest | PlainMessage<QueryVotesAtHeightRequest> | undefined): boolean {
    return proto3.util.equals(QueryVotesAtHeightRequest, a, b);
  }
}

/**
 * QueryVotesAtHeightResponse is the response type for the
 * Query/VotesAtHeight RPC method.
 *
 * @generated from message babylon.finality.v1.QueryVotesAtHeightResponse
 */
export class QueryVotesAtHeightResponse extends Message<QueryVotesAtHeightResponse> {
  /**
   * btc_pk is the Bitcoin secp256k1 PK of finality providers who have signed the block at given height.
   * the PK follows encoding in BIP-340 spec
   *
   * @generated from field: repeated bytes btc_pks = 1;
   */
  btcPks: Uint8Array[] = [];

  constructor(data?: PartialMessage<QueryVotesAtHeightResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryVotesAtHeightResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "btc_pks", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesAtHeightResponse {
    return new QueryVotesAtHeightResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesAtHeightResponse {
    return new QueryVotesAtHeightResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesAtHeightResponse {
    return new QueryVotesAtHeightResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVotesAtHeightResponse | PlainMessage<QueryVotesAtHeightResponse> | undefined, b: QueryVotesAtHeightResponse | PlainMessage<QueryVotesAtHeightResponse> | undefined): boolean {
    return proto3.util.equals(QueryVotesAtHeightResponse, a, b);
  }
}

/**
 * QueryEvidenceRequest is the request type for the
 * Query/Evidence RPC method.
 *
 * @generated from message babylon.finality.v1.QueryEvidenceRequest
 */
export class QueryEvidenceRequest extends Message<QueryEvidenceRequest> {
  /**
   * fp_btc_pk_hex is the hex str of Bitcoin secp256k1 PK
   * (in BIP340 format) of the finality provider
   *
   * @generated from field: string fp_btc_pk_hex = 1;
   */
  fpBtcPkHex = "";

  constructor(data?: PartialMessage<QueryEvidenceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryEvidenceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fp_btc_pk_hex", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEvidenceRequest {
    return new QueryEvidenceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEvidenceRequest {
    return new QueryEvidenceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEvidenceRequest {
    return new QueryEvidenceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEvidenceRequest | PlainMessage<QueryEvidenceRequest> | undefined, b: QueryEvidenceRequest | PlainMessage<QueryEvidenceRequest> | undefined): boolean {
    return proto3.util.equals(QueryEvidenceRequest, a, b);
  }
}

/**
 * QueryEvidenceResponse is the response type for the
 * Query/Evidence RPC method.
 *
 * @generated from message babylon.finality.v1.QueryEvidenceResponse
 */
export class QueryEvidenceResponse extends Message<QueryEvidenceResponse> {
  /**
   * @generated from field: babylon.finality.v1.Evidence evidence = 1;
   */
  evidence?: Evidence;

  constructor(data?: PartialMessage<QueryEvidenceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryEvidenceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "evidence", kind: "message", T: Evidence },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEvidenceResponse {
    return new QueryEvidenceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEvidenceResponse {
    return new QueryEvidenceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEvidenceResponse {
    return new QueryEvidenceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEvidenceResponse | PlainMessage<QueryEvidenceResponse> | undefined, b: QueryEvidenceResponse | PlainMessage<QueryEvidenceResponse> | undefined): boolean {
    return proto3.util.equals(QueryEvidenceResponse, a, b);
  }
}

/**
 * QueryListEvidencesRequest is the request type for the
 * Query/ListEvidences RPC method.
 *
 * @generated from message babylon.finality.v1.QueryListEvidencesRequest
 */
export class QueryListEvidencesRequest extends Message<QueryListEvidencesRequest> {
  /**
   * start_height is the starting height that the querier specifies
   * such that the RPC will only return evidences since this height
   *
   * @generated from field: uint64 start_height = 1;
   */
  startHeight = protoInt64.zero;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryListEvidencesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryListEvidencesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListEvidencesRequest {
    return new QueryListEvidencesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListEvidencesRequest {
    return new QueryListEvidencesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListEvidencesRequest {
    return new QueryListEvidencesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListEvidencesRequest | PlainMessage<QueryListEvidencesRequest> | undefined, b: QueryListEvidencesRequest | PlainMessage<QueryListEvidencesRequest> | undefined): boolean {
    return proto3.util.equals(QueryListEvidencesRequest, a, b);
  }
}

/**
 * QueryListEvidencesResponse is the response type for the
 * Query/ListEvidences RPC method.
 *
 * @generated from message babylon.finality.v1.QueryListEvidencesResponse
 */
export class QueryListEvidencesResponse extends Message<QueryListEvidencesResponse> {
  /**
   * blocks is the list of evidences
   *
   * @generated from field: repeated babylon.finality.v1.Evidence evidences = 1;
   */
  evidences: Evidence[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryListEvidencesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.finality.v1.QueryListEvidencesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "evidences", kind: "message", T: Evidence, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListEvidencesResponse {
    return new QueryListEvidencesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListEvidencesResponse {
    return new QueryListEvidencesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListEvidencesResponse {
    return new QueryListEvidencesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListEvidencesResponse | PlainMessage<QueryListEvidencesResponse> | undefined, b: QueryListEvidencesResponse | PlainMessage<QueryListEvidencesResponse> | undefined): boolean {
    return proto3.util.equals(QueryListEvidencesResponse, a, b);
  }
}

