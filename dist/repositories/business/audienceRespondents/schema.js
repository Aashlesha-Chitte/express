"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("tenantRepositories/versionable/VersionableSchema"));
class AudienceRespondentsSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            audienceId: {
                required: true,
                type: String,
            },
            respondentIds: {
                required: true,
                type: [String],
            },
            schemaVer: {
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = AudienceRespondentsSchema;
//# sourceMappingURL=schema.js.map