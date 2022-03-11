"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wasm = void 0;
var proto_1 = require("../../proto");
var core_1 = require("@cosmos-client/core");
exports.wasm = __importStar(require("./module"));
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgStoreCode', proto_1.cosmwasm.wasm.v1.MsgStoreCode);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgInstantiateContract', proto_1.cosmwasm.wasm.v1.MsgInstantiateContract);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgExecuteContract', proto_1.cosmwasm.wasm.v1.MsgExecuteContract);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgMigrateContract', proto_1.cosmwasm.wasm.v1.MsgMigrateContract);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgUpdateAdmin', proto_1.cosmwasm.wasm.v1.MsgUpdateAdmin);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgClearAdmin', proto_1.cosmwasm.wasm.v1.MsgClearAdmin);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgIBCCloseChannel', proto_1.cosmwasm.wasm.v1.MsgIBCCloseChannel);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgIBCSend', proto_1.cosmwasm.wasm.v1.MsgIBCSend);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.StoreCodeProposal', proto_1.cosmwasm.wasm.v1.StoreCodeProposal);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.InstantiateContractProposal', proto_1.cosmwasm.wasm.v1.InstantiateContractProposal);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.MigrateContractProposal', proto_1.cosmwasm.wasm.v1.MigrateContractProposal);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.UpdateAdminProposal', proto_1.cosmwasm.wasm.v1.UpdateAdminProposal);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.ClearAdminProposal', proto_1.cosmwasm.wasm.v1.ClearAdminProposal);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.PinCodesProposal', proto_1.cosmwasm.wasm.v1.PinCodesProposal);
core_1.cosmosclient.codec.register('/cosmwasm.wasm.v1.UnpinCodesProposal', proto_1.cosmwasm.wasm.v1.UnpinCodesProposal);
