"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class AudienceCountSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            count: {
                default: 1,
                required: true,
                type: Number,
            },
            prefix: {
                default: config_1.default.envName === 'dev' ? 'dev' : 'ABU',
                required: true,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = AudienceCountSchema;
//# sourceMappingURL=schema.js.map