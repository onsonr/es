// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file did/v1/genesis.proto (package did.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the module genesis state
 *
 * @generated from message did.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines all the parameters of the module.
   *
   * @generated from field: did.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "did.v1.GenesisState";
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
 * @generated from message did.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * Whitelisted Key Types
   *
   * @generated from field: map<string, did.v1.KeyInfo> allowed_public_keys = 2;
   */
  allowedPublicKeys: { [key: string]: KeyInfo } = {};

  /**
   * ConveyancePreference defines the conveyance preference
   *
   * @generated from field: string conveyance_preference = 3;
   */
  conveyancePreference = "";

  /**
   * AttestationFormats defines the attestation formats
   *
   * @generated from field: repeated string attestation_formats = 4;
   */
  attestationFormats: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "did.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "allowed_public_keys", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: KeyInfo} },
    { no: 3, name: "conveyance_preference", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "attestation_formats", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
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
 * KeyInfo defines information for accepted PubKey types
 *
 * @generated from message did.v1.KeyInfo
 */
export class KeyInfo extends Message<KeyInfo> {
  /**
   * @generated from field: string role = 1;
   */
  role = "";

  /**
   * e.g., "ES256", "EdDSA", "ES256K"
   *
   * @generated from field: string algorithm = 2;
   */
  algorithm = "";

  /**
   * e.g., "hex", "base64", "multibase"
   *
   * @generated from field: string encoding = 3;
   */
  encoding = "";

  /**
   * e.g., "P256", "P384", "P521", "X25519", "X448",
   *
   * @generated from field: string curve = 4;
   */
  curve = "";

  constructor(data?: PartialMessage<KeyInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "did.v1.KeyInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "algorithm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "encoding", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "curve", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyInfo {
    return new KeyInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyInfo {
    return new KeyInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyInfo {
    return new KeyInfo().fromJsonString(jsonString, options);
  }

  static equals(a: KeyInfo | PlainMessage<KeyInfo> | undefined, b: KeyInfo | PlainMessage<KeyInfo> | undefined): boolean {
    return proto3.util.equals(KeyInfo, a, b);
  }
}
