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
class SnapShotConstantDataRepository extends VersioningRepository_1.default {
    constructor() {
        super(model_1.snapShotModel);
        this.logger = (0, logger_1.default)('SnapShotConstantDataRepository');
        model_1.snapShotModel.createIndexes((error) => {
            if (error) {
                return this.logger.error(error);
            }
        });
    }
    /**
     * Get Snapshot
     * @property {IQueryGet} query - details of the Snapshot
     * @returns {Snapshot}
     */
    get(query = {}) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('SnapShotRepository - :::::::::::::::Get::::::::::::::');
            return _super.get.call(this, query);
        });
    }
    /**
     * Create/Update Snapshot
     * @property {IQueryCreate} details - The details of Snapshot.
     * @returns {Snapshot}
     */
    update(query, data) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.debug('SnapShotRepository - :::::::::::::::update:::::::::::: ');
            return _super.update.call(this, Object.assign(Object.assign({}, query), { deletedAt: undefined }), data);
        });
    }
}
exports.default = SnapShotConstantDataRepository;
//# sourceMappingURL=repository.js.map