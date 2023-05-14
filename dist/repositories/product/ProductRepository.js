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
const ProductModel_1 = require("./ProductModel");
const VersionableRepository_1 = __importDefault(require("../versionable/VersionableRepository"));
class ProductRepository extends VersionableRepository_1.default {
    constructor() {
        super(ProductModel_1.productModel);
    }
    findOne(query) {
        console.log(query);
        return super.findOne(query).lean();
    }
    find(query, projection, options) {
        return super.find(query, projection, options);
    }
    count() {
        return super.count();
    }
    create(data) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, data);
        });
    }
    insertMany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return ProductModel_1.productModel.insertMany(data);
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map