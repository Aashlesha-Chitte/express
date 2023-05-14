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
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
class ProductController {
    constructor() {
        this.createProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return services_1.productService.createProducts(req, res, next);
        });
        this.getProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return services_1.productService.getProducts(req, res, next);
        });
        this.updateProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return services_1.productService.updateProducts(req, res, next);
        });
        this.deleteProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return services_1.productService.deleteProducts(req, res, next);
        });
    }
    static getInstance() {
        if (!ProductController.instance) {
            ProductController.instance = new ProductController();
        }
        return ProductController.instance;
    }
}
exports.default = ProductController.getInstance();
//# sourceMappingURL=productController.js.map