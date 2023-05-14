"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = exports.productService = void 0;
const ProductService_1 = __importDefault(require("./product/ProductService"));
exports.productService = ProductService_1.default;
const UserService_1 = __importDefault(require("./users/UserService"));
exports.usersService = UserService_1.default;
//# sourceMappingURL=index.js.map