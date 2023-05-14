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
const products_1 = __importDefault(require("../../models/products"));
class ProductService {
    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    getProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { logger }: any = req.headers;
            try {
                const products = yield products_1.default.find({});
                return res.send({ message: 'Success', status: 200, data: products });
            }
            catch (e) {
                console.log(`ProductService :: getProducts :: Error
      `, JSON.stringify(e));
                // return next(SystemResponse.internalServerError('Internal Error', e));
            }
        });
    }
    createProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield products_1.default.create(req.body);
                return res.send({ message: 'Success', status: 200, data: products });
            }
            catch (e) {
                console.log(`ProductService :: createProducts :: Error
      `, JSON.stringify(e));
            }
        });
    }
    updateProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const product = yield products_1.default.findById(productId);
                // we cannot find any product in database
                if (!product) {
                    return res.status(404).json({ message: `cannot find any product with ID ${productId}` });
                }
                const updatedProduct = yield products_1.default.findByIdAndUpdate(productId, req.body);
                console.log('updatedProduct', updatedProduct);
                const updatedProductData = yield products_1.default.findById(productId);
                return res.send({ message: 'Success', status: 200, data: updatedProductData });
            }
            catch (e) {
                console.log(`ProductService :: updateProducts :: Error
      `, JSON.stringify(e));
            }
        });
    }
    deleteProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const product = yield products_1.default.findById(productId);
                if (!product) {
                    return res.status(404).json({ message: `cannot find any product with ID ${productId}` });
                }
                yield products_1.default.findByIdAndDelete(productId);
                return res.send({ message: 'Success', status: 200 });
            }
            catch (e) {
                console.log(`ProductService :: deleteProducts :: Error
      `, JSON.stringify(e));
            }
        });
    }
}
exports.default = ProductService.getInstance();
//# sourceMappingURL=ProductService.js.map