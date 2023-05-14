"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
class MatchRateSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            addressableReach: {
                _id: false,
                totalZeotapIds: {
                    required: true,
                    type: String,
                },
                zeotapModellablePercent: {
                    required: true,
                    type: Number,
                },
            },
            defaultReachPercent: {
                required: false,
                type: String,
            },
            destinations: [{
                    _id: false,
                    code: {
                        required: false,
                        type: String,
                    },
                    name: {
                        required: true,
                        type: String,
                    },
                    percent: {
                        required: true,
                        type: Number,
                    },
                }],
            geography: {
                required: true,
                type: String,
            },
            limitReach: {
                required: false,
                type: String,
            },
        };
        super(baseSchema, options);
    }
}
exports.default = MatchRateSchema;
//# sourceMappingURL=schema.js.map