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
class InsightTemplateRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.insightTemplateModel);
        this.logger = (0, logger_1.default)('AdminRepository');
    }
    /**
     * Create new insightTemplate
     * @property {IQueryCreate} details - The details of Admin.
     * @returns {Admin}
     */
    createTemplate(options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('AdminRepository - :::::::::::::::Create::::::::::::::');
            return _super.create.call(this, options);
        });
    }
    /**
     * Get all insightTemplate
     * @property {IQueryGet} query - details of the Admin
     * @returns {Admin}
     */
    list(query = {}, projection, options = {}, populate) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('AdminRepository - :::::::::::::::List::::::::::::::');
            return _super.getAll.call(this, query, projection, options, populate);
        });
    }
}
exports.default = InsightTemplateRepository;
//# sourceMappingURL=repository.js.map