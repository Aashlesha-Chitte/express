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
class ManageDestinationRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.manageDestinationModel);
    }
    /**
     * Get manageDestination list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {ManageDestination[]}
     */
    list(connectionConfiguration, query = {}, options, projection, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getAll.call(this, connectionConfiguration, query, options, projection, populate);
        });
    }
    /**
     * Get manageDestination.
     * @property {string} id - _id of the record
     * @returns {ManageDestination}
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
     * Create new manageDestination
     * @property {string} destinationName - The name of record.
     * @returns {ManageDestination}
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
     * Update new manageDestination
     * @property {string} destinationName - The name of record.
     * @returns {ManageDestination}
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
     * Get manageDestination count.
     * @returns {ManageDestinationCount}
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
     * Delete manageDestination
     * @property {string} id - originalId of record.
     * @returns {ManageDestination}
     */
    delete(connectionConfiguration, query, option = {}) {
        const _super = Object.create(null, {
            remove: { get: () => super.remove }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.remove.call(this, connectionConfiguration, query.id, option);
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
exports.default = ManageDestinationRepository;
//# sourceMappingURL=repository.js.map