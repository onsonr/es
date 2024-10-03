// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file macaroon/v1/genesis.proto (package macaroon.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the module genesis state
 *
 * @generated from message macaroon.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines all the parameters of the module.
   *
   * @generated from field: macaroon.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Params defines the set of module parameters.
 *
 * @generated from message macaroon.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * The list of methods
   *
   * @generated from field: macaroon.v1.Methods methods = 1;
   */
  methods?: Methods;

  /**
   * The list of scopes
   *
   * @generated from field: macaroon.v1.Scopes scopes = 2;
   */
  scopes?: Scopes;

  /**
   * The list of caveats
   *
   * @generated from field: macaroon.v1.Caveats caveats = 3;
   */
  caveats?: Caveats;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "methods", kind: "message", T: Methods },
    { no: 2, name: "scopes", kind: "message", T: Scopes },
    { no: 3, name: "caveats", kind: "message", T: Caveats },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * Methods defines the available DID methods
 *
 * @generated from message macaroon.v1.Methods
 */
export class Methods extends Message<Methods> {
  /**
   * @generated from field: string default = 1;
   */
  default = "";

  /**
   * @generated from field: repeated string supported = 2;
   */
  supported: string[] = [];

  constructor(data?: PartialMessage<Methods>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.Methods";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "default", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "supported", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Methods {
    return new Methods().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Methods {
    return new Methods().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Methods {
    return new Methods().fromJsonString(jsonString, options);
  }

  static equals(a: Methods | PlainMessage<Methods> | undefined, b: Methods | PlainMessage<Methods> | undefined): boolean {
    return proto3.util.equals(Methods, a, b);
  }
}

/**
 * Scopes defines the set of scopes
 *
 * @generated from message macaroon.v1.Scopes
 */
export class Scopes extends Message<Scopes> {
  /**
   * @generated from field: string base = 1;
   */
  base = "";

  /**
   * @generated from field: repeated string supported = 2;
   */
  supported: string[] = [];

  constructor(data?: PartialMessage<Scopes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.Scopes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "supported", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Scopes {
    return new Scopes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Scopes {
    return new Scopes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Scopes {
    return new Scopes().fromJsonString(jsonString, options);
  }

  static equals(a: Scopes | PlainMessage<Scopes> | undefined, b: Scopes | PlainMessage<Scopes> | undefined): boolean {
    return proto3.util.equals(Scopes, a, b);
  }
}

/**
 * Caveats defines the available caveats
 *
 * @generated from message macaroon.v1.Caveats
 */
export class Caveats extends Message<Caveats> {
  /**
   * @generated from field: repeated string supported_first_party = 1;
   */
  supportedFirstParty: string[] = [];

  /**
   * @generated from field: repeated string supported_third_party = 2;
   */
  supportedThirdParty: string[] = [];

  constructor(data?: PartialMessage<Caveats>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "macaroon.v1.Caveats";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "supported_first_party", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "supported_third_party", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Caveats {
    return new Caveats().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Caveats {
    return new Caveats().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Caveats {
    return new Caveats().fromJsonString(jsonString, options);
  }

  static equals(a: Caveats | PlainMessage<Caveats> | undefined, b: Caveats | PlainMessage<Caveats> | undefined): boolean {
    return proto3.util.equals(Caveats, a, b);
  }
}
