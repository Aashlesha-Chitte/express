"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VersionableSchema_1 = __importDefault(require("../versionable/VersionableSchema"));
class UserSchema extends VersionableSchema_1.default {
    constructor(collections) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String
        });
        super(baseSchema, collections);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map