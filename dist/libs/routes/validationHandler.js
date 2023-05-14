"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validationHandler = (validator) => {
    return [
        (0, express_validator_1.checkSchema)(validator),
        (request, response, next) => {
            const error = (0, express_validator_1.validationResult)(request);
            console.log(error);
            if (!error.isEmpty()) {
                next({
                    message: 'Bad Request',
                    status: 422,
                    error: error.array()
                });
            }
            next();
        }
    ];
};
exports.default = validationHandler;
//# sourceMappingURL=validationHandler.js.map