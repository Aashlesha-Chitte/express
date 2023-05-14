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
class ReContactSurveyRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.recontactSurveyModel);
        this.logger = (0, logger_1.default)('ReContactSurveyRepository');
        model_1.recontactSurveyModel.createIndexes((error) => {
            if (error) {
                return this.logger.error(error);
            }
        });
    }
    bulkWrite(data = [], options) {
        const _super = Object.create(null, {
            bulkWrite: { get: () => super.bulkWrite }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.bulkWrite.call(this, data, options);
        });
    }
    /**
     * Create new ReContactSurvey
     * @property {IQueryCreate} details - The details of ReContactSurvey.
     * @returns {ReContactSurvey}
     */
    create(options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('ReContactSurveyRepository - :::::::::::::::Create::::::::::::::');
            return _super.create.call(this, options);
        });
    }
    /**
     * Get all recontactSurvey
     * @property {IQueryGet} query - details of the ReContactSurvey
     * @returns {ReContactSurvey}
     */
    list(query = {}, projection, options = {}, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('ReContactSurveyRepository - :::::::::::::::List::::::::::::::');
            return _super.getAll.call(this, query, projection, options, populate);
        });
    }
    get(query = {}, populate) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('ReContactSurveyRepository - :::::::::::::::get::::::::::::::');
            return _super.get.call(this, query, populate);
        });
    }
    update(query, options) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('ReContactSurveyRepository - :::::::::::::::Update:::::::::::: ');
            return _super.update.call(this, query, options);
        });
    }
    findOneAndUpdate(query, data) {
        const _super = Object.create(null, {
            findOneAndUpdate: { get: () => super.findOneAndUpdate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('ReContactSurveyRepository  - :::::::::::::::findOneUpdate:::::::::::: ');
            return _super.findOneAndUpdate.call(this, Object.assign({}, query), data);
        });
    }
}
exports.default = ReContactSurveyRepository;
//# sourceMappingURL=repository.js.map