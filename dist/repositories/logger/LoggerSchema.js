"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("../versionable/VersionableSchema"));
class LoggerSchema extends VersionableSchema_1.default {
    constructor(collections) {
        const baseSchema = {
            fileName: String,
            handle: String,
            date: String,
            time: String,
            error: String,
        };
        super(baseSchema, collections);
    }
}
exports.default = LoggerSchema;
//# sourceMappingURL=LoggerSchema.js.map