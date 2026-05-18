/**
 * @amlplugins/amazon-bedrock
 *
 * Thin namespaced re-export of the native @aws-sdk/client-bedrock-runtime SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Amazon Bedrock — managed foundation models (Claude, Llama, Mistral, Titan) with invoke and converse APIs.
 */

import * as _sdk from "@aws-sdk/client-bedrock-runtime";
export * from "@aws-sdk/client-bedrock-runtime";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "@aws-sdk/client-bedrock";
export * as secondary from "@aws-sdk/client-bedrock";
export { _secondary };
