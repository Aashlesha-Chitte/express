"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("./usersController"));
const route = (0, express_1.Router)();
route.route('/').post(usersController_1.default.createUser);
route.route('/').get(usersController_1.default.getUsers);
exports.default = route;
//# sourceMappingURL=route.js.map