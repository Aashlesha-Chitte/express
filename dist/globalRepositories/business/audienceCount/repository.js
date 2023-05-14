"use strict";
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
const VersioningRepository_1 = __importDefault(require("globalRepositories/versionable/VersioningRepository"));
const logger_1 = __importDefault(require("libs/logger"));
const model_1 = require("./model");
class AudienceCountSchemaRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.audienceCountModel);
        this.logger = (0, logger_1.default)('AudienceCountSchemaRepository');
        model_1.audienceCountModel.createIndexes((error) => {
            if (error) {
                return this.logger.error(error);
            }
        });
    }
    /**
     * Create/Update Audience Count
     * @property {IQueryCreate} details - The details of AudienceCount.
     * @returns {AudienceCount}
     */
    findOneAndUpdate(query, data) {
        const _super = Object.create(null, {
            findOneAndUpdate: { get: () => super.findOneAndUpdate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('AudienceCount  - :::::::::::::::findOneUpdate:::::::::::: ');
            return _super.findOneAndUpdate.call(this, Object.assign({}, query), data);
        });
    }
    hardUpdate(query, data) {
        const _super = Object.create(null, {
            hardUpdate: { get: () => super.hardUpdate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('AudienceCount  - :::::::::::::::update:::::::::::: ');
            return _super.hardUpdate.call(this, Object.assign({}, query), data);
        });
    }
}
exports.default = AudienceCountSchemaRepository;
//# sourceMappingURL=repository.js.map