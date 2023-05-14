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
class AudienceDetailRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.audienceDetailModel);
    }
    /**
     * Get audienceDetails list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {AudienceDetail[]}
     */
    list(connectionConfiguration, query = {}, projection, options = {}, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getAll.call(this, connectionConfiguration, query, projection, options, populate);
        });
    }
    /**
     * Get AudienceDetail.
     * @property {string} id - _id of the record
     * @returns {AudienceDetail}
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
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    aggregateQueries(connectionConfiguration, query = []) {
        const _super = Object.create(null, {
            aggregate: { get: () => super.aggregate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.aggregate.call(this, connectionConfiguration, query);
        });
    }
    /**
     * Create new AudienceDetail
     * @property {string} name - The name of record.
     * @returns {AudienceDetail}
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
     * Update new AudienceDetail
     * @property {string} name - The name of record.
     * @returns {AudienceDetail}
     */
    update(connectionConfiguration, options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.update.call(this, connectionConfiguration, options);
        });
    }
    /**
     * Update new AudienceDetail
     * @property {string} name - The name of record.
     * @returns {AudienceDetail}
     */
    updateWithQuery(connectionConfiguration, query, options) {
        const _super = Object.create(null, {
            updateWithQuery: { get: () => super.updateWithQuery }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.updateWithQuery.call(this, connectionConfiguration, query, options);
        });
    }
    /**
     * Get AudienceDetail count.
     * @returns {AudienceDetailCount}
     *
     */
    getCount(connectionConfiguration, query) {
        const _super = Object.create(null, {
            getCount: { get: () => super.getCount }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getCount.call(this, connectionConfiguration, query);
        });
    }
    /**
     * Delete AudienceDetail
     * @property {string} body.name - The name of record.
     * @returns {AudienceDetail}
     */
    delete(connectionConfiguration, query, option = {}) {
        const _super = Object.create(null, {
            remove: { get: () => super.remove }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.remove.call(this, connectionConfiguration, query.id, option);
        });
    }
    deleteByQuery(connectionConfiguration, query, option = {}) {
        const _super = Object.create(null, {
            removeByQuery: { get: () => super.removeByQuery }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.removeByQuery.call(this, connectionConfiguration, query, option);
        });
    }
    /**
     * Hard Delete AudienceDetail
     * @property {string} body.name - The name of record.
     * @returns {AudienceDetail}
     */
    hardDelete(connectionConfiguration, query) {
        const _super = Object.create(null, {
            hardRemove: { get: () => super.hardRemove }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.hardRemove.call(this, connectionConfiguration, query);
        });
    }
}
exports.default = AudienceDetailRepository;
//# sourceMappingURL=repository.js.map