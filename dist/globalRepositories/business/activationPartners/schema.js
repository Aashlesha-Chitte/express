"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class ActivationPartnersSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            clientHierarchy: [{
                    _id: false,
                    k: {
                        required: true,
                        type: String,
                    },
                    v: {
                        required: true,
                        type: [String],
                    },
                }],
            modelType: {
                required: true,
                type: String,
            },
            partnerCode: {
                required: true,
                type: String,
            },
            partnerConfig: [{
                    k: String,
                    v: String,
                }],
            partnerConnectionUrl: {
                required: false,
                type: String,
            },
            partnerIsActive: {
                required: true,
                type: Boolean,
            },
            partnerName: {
                required: true,
                type: String,
            },
            schemaVer: {
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = ActivationPartnersSchema;
//# sourceMappingURL=schema.js.map