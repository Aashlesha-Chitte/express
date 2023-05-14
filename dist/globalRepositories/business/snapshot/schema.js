"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("globalRepositories/versionable/VersionableSchema"));
const mongoose_1 = require("mongoose");
class SnapShotSchema extends VersionableSchema_1.default {
    constructor(options) {
        const baseSchema = {
            schemaVer: {
                required: false,
                type: String,
            },
            snapShot: [
                {
                    details: [
                        {
                            k: {
                                required: false,
                                type: String,
                            },
                            v: {
                                required: false,
                                type: mongoose_1.Schema.Types.Mixed,
                            },
                        },
                    ],
                    tag: {
                        required: true,
                        type: String,
                    },
                },
            ],
        };
        super(baseSchema, options);
    }
}
exports.default = SnapShotSchema;
//# sourceMappingURL=schema.js.map