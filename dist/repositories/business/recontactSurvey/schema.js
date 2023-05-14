"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class ReContactSurveySchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            masterSurveyId: {
                required: false,
                type: String,
            },
            masterSurveyName: {
                required: false,
                type: String,
            },
            recontactSurveyList: [{
                    _id: false,
                    clientCode: {
                        required: false,
                        type: String,
                    },
                    isActive: {
                        default: true,
                        required: true,
                        type: Boolean,
                    },
                    surveyId: {
                        required: false,
                        type: String,
                    },
                    surveyName: {
                        required: false,
                        type: String,
                    },
                }],
        };
        super(baseSchema, options);
    }
}
exports.default = ReContactSurveySchema;
//# sourceMappingURL=schema.js.map