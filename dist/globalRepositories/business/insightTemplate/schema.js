"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class InsightTemplateSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            agency: {
                default: 'All',
                required: true,
                type: String,
            },
            client: {
                default: 'All',
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
                        default: 'All',
                        required: false,
                        type: String,
                    },
                }],
            provider: {
                required: true,
                type: String,
            },
            schemaVer: {
                required: true,
                type: String,
            },
            tabs: [
                {
                    _id: false,
                    aueTabName: {
                        required: true,
                        type: String,
                    },
                    aueTabNameCMSLabel: {
                        required: true,
                        type: String,
                    },
                    charts: [
                        {
                            _id: false,
                            aueChartName: {
                                required: true,
                                type: String,
                            },
                            aueChartNameCMSLabel: {
                                required: true,
                                type: String,
                            },
                            chartDisplayOrder: {
                                required: true,
                                type: Number,
                            },
                            chartOrientation: {
                                required: true,
                                type: String,
                            },
                            chartType: {
                                required: true,
                                type: String,
                            },
                            isChartVisible: {
                                required: true,
                                type: Boolean,
                            },
                            providerChartName: {
                                required: true,
                                type: [String],
                            },
                        },
                    ],
                    isTabVisible: {
                        required: true,
                        type: Boolean,
                    },
                    providerTabName: {
                        required: true,
                        type: [String],
                    },
                    surveyIds: {
                        default: [],
                        required: true,
                        type: [String],
                    },
                    tabDisplayOrder: {
                        required: true,
                        type: Number,
                    },
                },
            ],
            templateName: {
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = InsightTemplateSchema;
//# sourceMappingURL=schema.js.map