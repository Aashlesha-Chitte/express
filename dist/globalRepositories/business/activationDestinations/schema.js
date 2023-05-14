"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class ActivationDestinationsSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            accountType: [{
                    accountCode: {
                        required: false,
                        type: String,
                    },
                    accountName: {
                        required: false,
                        type: String,
                    },
                    input: [{
                            default: {
                                required: false,
                                type: [],
                            },
                            isRequired: {
                                required: false,
                                type: Boolean,
                            },
                            label: {
                                required: false,
                                type: String,
                            },
                            validation: {
                                required: false,
                                type: String,
                            },
                        }],
                }],
            activationServiceIsActive: {
                required: true,
                type: Boolean,
            },
            activationServiceUrl: {
                required: true,
                type: String,
            },
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
            currency: {
                required: false,
                type: [String],
            },
            destinationCode: {
                required: true,
                type: String,
            },
            destinationConfig: [
                {
                    _id: false,
                    clientCode: {
                        default: 'ALL',
                        required: true,
                        type: String,
                    },
                    config: [
                        {
                            _id: false,
                            k: {
                                required: true,
                                type: String,
                            },
                            v: {
                                required: true,
                                type: String,
                            },
                        },
                    ],
                    geography: {
                        required: true,
                        type: String,
                    },
                },
            ],
            destinationConnectionUrl: {
                required: false,
                type: String,
            },
            destinationIsActive: {
                required: true,
                type: Boolean,
            },
            destinationLogo: {
                required: false,
                type: String,
            },
            destinationName: {
                required: true,
                type: String,
            },
            partnerId: {
                ref: 'ActivationPartners',
                required: true,
                type: mongoose_1.Schema.Types.ObjectId,
            },
            schemaVer: {
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = ActivationDestinationsSchema;
//# sourceMappingURL=schema.js.map