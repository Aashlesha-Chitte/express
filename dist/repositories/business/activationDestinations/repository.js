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
const VersioningRepository_1 = __importDefault(require("../../versionable/VersioningRepository"));
const model_1 = require("./model");
class ActivationDestinationsRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.activationDestinationsModel);
        // activationDestinationsModel.createIndexes((error) => {
        //   if (error) {
        //     return console.error(error);
        //   }
        // });
    }
    bulkWrite(data = [], options) {
        const _super = Object.create(null, {
            bulkWrite: { get: () => super.bulkWrite }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.bulkWrite.call(this, data, options);
        });
    }
    hardUpdate(data = [], options) {
        const _super = Object.create(null, {
            hardUpdate: { get: () => super.hardUpdate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.hardUpdate.call(this, data, options);
        });
    }
    /**
     * Create new ActivationDestinations
     * @property {IQueryCreate} details - The details of ActivationDestinations.
     * @returns {ActivationDestinations}
     */
    create(options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('ActivationDestinationsRepository - :::::::::::::::Create::::::::::::::');
            return _super.create.call(this, options);
        });
    }
    /**
     * Get all activationDestinations
     * @property {IQueryGet} query - details of the ActivationDestinations
     * @returns {ActivationDestinations}
     */
    list(query = {}, projection, options = {}, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('ActivationDestinationsRepository - :::::::::::::::List::::::::::::::');
            return _super.getAll.call(this, query, projection, options, populate);
        });
    }
    get(query = {}, populate) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.debug('ActivationDestination - :::::::::::::::List::::::::::::::');
            return _super.get.call(this, query, populate);
        });
    }
}
exports.default = ActivationDestinationsRepository;
//# sourceMappingURL=repository.js.map