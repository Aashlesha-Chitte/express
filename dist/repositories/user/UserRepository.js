"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const UserModel_1 = require("./UserModel");
const VersionableRepository_1 = __importDefault(require("../versionable/VersionableRepository"));
const helper_1 = __importDefault(require("../../controllers/helper"));
class UserRepository extends VersionableRepository_1.default {
    constructor() {
        super(UserModel_1.userModel);
    }
    static createObejectId() {
        return String(new mongoose.Types.ObjectId());
    }
    findOne(query) {
        return super.findOne(query).lean();
    }
    find(query, projection, options) {
        return super.find(query, projection, options);
    }
    count() {
        return super.count();
    }
    create(data) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log('UserRepository::create create', data);
            const hashPassword = yield helper_1.default.hashPassword(data.password);
            data.password = hashPassword;
            return _super.create.call(this, data);
        });
    }
    update(data) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (data.hasOwnProperty('password')) {
                const hashPassword = yield helper_1.default.hashPassword(data.password);
                data.password = hashPassword;
            }
            return _super.update.call(this, data);
        });
    }
    delete(filter, data) {
        return super.softdelete(filter, data);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map