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
class ActivationRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.activationModel);
    }
    /**
     * Get audience list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {Audience[]}
     */
    list(connectionConfiguration, query = {}, options = {}, projection, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getAll.call(this, connectionConfiguration, query, options, projection, populate);
        });
    }
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    get(connectionConfiguration, query = {}) {
        const _super = Object.create(null, {
            getById: { get: () => super.getById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getById.call(this, connectionConfiguration, query);
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
     * Create new audience
     * @property {string} name - The name of record.
     * @returns {Audience}
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
     * Update new audience
     * @property {string} name - The name of record.
     * @returns {Audience}
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
     * Get Audience count.
     * @returns {AudienceCount}
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
     * Delete Audience
     * @property {string} body.name - The name of record.
     * @returns {Audience}
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
     * Hard Delete audience
     * @property {string} body.name - The name of record.
     * @returns {audience}
     */
    hardDelete(connectionConfiguration, query) {
        const _super = Object.create(null, {
            hardRemove: { get: () => super.hardRemove }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.hardRemove.call(this, connectionConfiguration, query);
        });
    }
    hardUpdate(connectionConfiguration, query = {}, data = {}) {
        const _super = Object.create(null, {
            hardUpdate: { get: () => super.hardUpdate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.hardUpdate.call(this, connectionConfiguration, query, data);
        });
    }
    bulkWrite(connectionConfiguration, data = [], options) {
        const _super = Object.create(null, {
            bulkWrite: { get: () => super.bulkWrite }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.bulkWrite.call(this, connectionConfiguration, data, options);
        });
    }
}
exports.default = ActivationRepository;
//# sourceMappingURL=repository.js.map