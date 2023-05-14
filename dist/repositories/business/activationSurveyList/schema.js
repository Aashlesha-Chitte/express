"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class ActivationSurveyListSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            canActivate: {
                required: true,
                type: Boolean,
            },
            surveyId: {
                required: true,
                type: String,
            },
            surveyName: {
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = ActivationSurveyListSchema;
//# sourceMappingURL=schema.js.map