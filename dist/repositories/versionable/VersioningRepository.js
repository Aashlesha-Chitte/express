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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
// import log from 'libs/logger';
const utilities_1 = require("../../libs/utilities");
class VersioningRepository {
    static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    constructor(modelDetails) {
        this.modelDetails = modelDetails;
    }
    /**
     * Create new Document
     * @property {IQueryBaseCreate} details - The details of record.
     * @returns {Document}
     */
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user: createdBy = '' } = options, query = __rest(options, ["user"]);
            console.log('VersioningRepository - Create ::::::', JSON.stringify(options));
            const id = VersioningRepository.generateObjectId();
            if (!query.createdAt) {
                query.createdAt = new Date(Date.now());
            }
            const newModel = new this.modelDetails(Object.assign(Object.assign({}, query), { _id: id, createdBy, originalId: id }));
            console.log('VersioningRepository - Create ::::::start', JSON.stringify(newModel));
            const result = yield newModel.save();
            console.log('VersioningRepository - Create ::::::end');
            return this.assignId((0, utilities_1.leanObject)(result.toObject()));
        });
    }
    assignId(result) {
        if (result && result.originalId && result.id !== result.originalId) {
            result._id = result.id;
            result.id = result.originalId;
        }
        return result;
    }
    get(conditions = {}, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = populate
                ? yield this.modelDetails
                    .findOne(conditions)
                    .populate(populate)
                    .lean()
                : yield this.modelDetails.findOne(conditions).lean();
            return this.assignId((0, utilities_1.leanObject)(result));
        });
    }
    getAll(conditions = {}, projection, options, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            conditions.deletedAt = undefined;
            console.log('getAll query: ', conditions);
            console.log('getAll options: ', options);
            console.log('VersioningRepository - getAll:', JSON.stringify(conditions), JSON.stringify(projection), JSON.stringify(options), JSON.stringify(populate));
            return populate
                ? (yield this.modelDetails
                    .find(conditions, projection, options)
                    .populate(populate)
                    .lean()).map((0, utilities_1.leanObject)(this.assignId))
                : (yield this.modelDetails.find(conditions, projection, options).lean()).map((0, utilities_1.leanObject)(this.assignId));
        });
    }
    bulkWrite(data = [], options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelDetails.bulkWrite(data, options || {});
        });
    }
    invalidate(criteria, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            return this.modelDetails
                .updateOne(criteria, { deletedAt: now, isDeleted: true, deletedBy: user })
                .lean();
        });
    }
    update(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = options;
            console.log('Searching for previous valid object...');
            const previous = yield this.get(query);
            if (previous) {
                console.log('Invalidating previous valid object...');
                yield this.invalidate(query, user);
            }
            else {
                return this.create(options);
            }
            let newInstance = Object.assign(previous, options);
            newInstance.id = VersioningRepository.generateObjectId();
            newInstance = Object.assign(Object.assign({}, newInstance), { _id: newInstance.id, modifiedAt: new Date(Date.now()), modifiedBy: user });
            const updatedModel = new this.modelDetails(newInstance);
            console.log('Creating new object...');
            return (0, utilities_1.leanObject)((yield updatedModel.save()).toObject());
        });
    }
    findOneAndUpdate(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelDetails.findOneAndUpdate(query, Object.assign({}, data), { upsert: true, returnOriginal: false });
        });
    }
    hardUpdate(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelDetails.updateMany(query, {
                $set: Object.assign({}, data),
            });
        });
    }
    aggregate(query) {
        return this.modelDetails.aggregate(query, { allowDiskUse: true }).collation({ locale: 'en' }).exec();
    }
}
exports.default = VersioningRepository;
//# sourceMappingURL=VersioningRepository.js.map