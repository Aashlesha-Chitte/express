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
const VersioningRepository_1 = __importDefault(require("tenantRepositories/versionable/VersioningRepository"));
const model_1 = require("./model");
class AudienceRespondentIdsRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.audienceRespondentsModel);
    }
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    get(connectionConfiguration, query = {}, populate) {
        const _super = Object.create(null, {
            getById: { get: () => super.getById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getById.call(this, connectionConfiguration, query, populate);
        });
    }
    /**
     * Create new audience
     * @property {string} name - The name of record.
     * @returns {AudienceRespondents}
     */
    create(connectionConfiguration, options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, connectionConfiguration, options);
        });
    }
    /**
     * Delete AudienceREspondentIds
     * @property {string} body.name - The name of record.
     * @returns {Audience}
     */
    delete(connectionConfiguration, query, option = {}) {
        const _super = Object.create(null, {
            removeByQuery: { get: () => super.removeByQuery }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.removeByQuery.call(this, connectionConfiguration, query, option);
        });
    }
}
exports.default = AudienceRespondentIdsRepository;
//# sourceMappingURL=repository.js.map