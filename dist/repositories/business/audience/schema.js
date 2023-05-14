"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("tenantRepositories/versionable/VersionableSchema"));
class AudienceSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            audienceName: {
                required: true,
                type: String,
            },
            createdVia: {
                default: 'manual',
                required: true,
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
            sendForActivation: {
                default: false,
                required: true,
                type: Boolean,
            },
            sizingPanel: {
                audienceReach: {
                    required: true,
                    type: String,
                },
                averageIncome: {
                    required: true,
                    type: Number,
                },
                averageIncomeCurrencyCode: {
                    required: false,
                    type: String,
                },
                averageIncomeCurrencySymbol: {
                    required: false,
                    type: String,
                },
                baseAudienceReach: {
                    required: true,
                    type: String,
                },
                female: {
                    required: true,
                    type: Number,
                },
                male: {
                    required: true,
                    type: Number,
                },
                medianAge: {
                    required: true,
                    type: String,
                },
                medianIncome: {
                    required: true,
                    type: Number,
                },
                medianIncomeCurrencyCode: {
                    required: false,
                    type: String,
                },
                medianIncomeCurrencySymbol: {
                    required: false,
                    type: String,
                },
                otherGender: {
                    required: false,
                    type: Number,
                },
                respondents: {
                    required: true,
                    type: Number,
                },
            },
            status: {
                required: true,
                type: String,
            },
            subStatus: {
                required: false,
                type: String,
            },
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
            trackingId: {
                required: false,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = AudienceSchema;
//# sourceMappingURL=schema.js.map