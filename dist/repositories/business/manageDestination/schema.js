"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VersionableSchema_1 = __importDefault(require("tenantRepositories/versionable/VersionableSchema"));
class ManageDestinationSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            accountId: {
                type: String,
            },
            accountName: {
                type: String,
            },
            accountType: {
                label: {
                    type: String,
                },
                value: {
                    type: String,
                },
            },
            additionalInfo: [{
                    _id: false,
                    k: {
                        required: false,
                        type: String,
                    },
                    v: {
                        required: false,
                        type: mongoose_1.Schema.Types.Mixed,
                    },
                }],
            currency: {
                type: String,
            },
            destinationCode: {
                required: true,
                type: String,
            },
            h1: {
                required: true,
                type: String,
            },
            partnerCode: {
                type: String,
            },
            schemaVer: {
                required: true,
                type: String,
            },
            status: {
                default: 'ENABLED',
                enum: ['ENABLED', 'DISABLED'],
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = ManageDestinationSchema;
//# sourceMappingURL=schema.js.map