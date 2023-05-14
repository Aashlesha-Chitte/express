"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class ActivationTaskSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            activationId: {
                required: true,
                type: String,
            },
            activationUuid: {
                required: false,
                type: String,
            },
            clientCode: {
                required: true,
                type: String,
            },
            destinationCode: {
                required: true,
                type: String,
            },
            partnerCode: {
                required: true,
                type: String,
            },
            schemaVer: {
                required: true,
                type: String,
            },
            status: {
                required: true,
                type: String,
            },
            tenantId: {
                required: true,
                type: String,
            },
            zeotapId: {
                required: false,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = ActivationTaskSchema;
//# sourceMappingURL=schema.js.map