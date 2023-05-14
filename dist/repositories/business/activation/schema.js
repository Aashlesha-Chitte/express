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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const VersionableSchema_1 = __importDefault(require("tenantRepositories/versionable/VersionableSchema"));
const Schema = mongoose.Schema;
class ActivationSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            activationResources: [{
                    _id: false,
                    k: {
                        required: false,
                        type: String,
                    },
                    v: {
                        required: false,
                        type: Schema.Types.Mixed,
                    },
                }],
            audienceId: {
                required: true,
                type: String,
            },
            audienceName: {
                required: true,
                type: String,
            },
            description: {
                required: false,
                type: String,
            },
            destinationId: {
                required: false,
                type: String,
            },
            errMsg: {
                required: false,
                type: String,
            },
            h1: {
                required: true,
                type: String,
            },
            h2: {
                required: true,
                type: String,
            },
            partnerId: {
                required: false,
                type: String,
            },
            reContactSurveyId: {
                type: String,
            },
            reContactSurveyName: {
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
            survey: {
                surveyDataProvider: {
                    required: true,
                    type: String,
                },
                surveyId: {
                    required: true,
                    type: String,
                },
                surveyName: {
                    required: true,
                    type: String,
                },
            },
            trackingId: {
                required: false,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = ActivationSchema;
//# sourceMappingURL=schema.js.map