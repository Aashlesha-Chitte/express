"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("./productController"));
const route = (0, express_1.Router)();
route.route('/products').post(productController_1.default.createProducts);
route.route('/products').get(productController_1.default.getProducts);
route.route('/products/:id').put(productController_1.default.updateProducts);
route.route('/products/:id').delete(productController_1.default.deleteProducts);
/**
 * @
 * /config/activationDestinations:
 *   put:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Activation Destinations
 *     summary: Update Activation Destinations - Destination config. [QA testing is not required]
 *     description: Update Activation Destinations.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Request Params
 *         in: body
 *         description: Update activation destination config params
 *         schema:
 *           $ref: '#/definitions/DestinationConfig'
 *         required:
 *           - destinationConfig
 *           - destinationCode
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Created Successfully
 *       422:
 *         description: Unprocessable Entity
 *       500:
 *         description: Internal Server Error
 */
// route.route('/activationDestinations').put(
//   // auth,
//   // serviceAccountValidator,
//   // validationHandler(validation.updateDestinationConfig),
//   ProductController.updateDestinationConfig,
// );
exports.default = route;
//# sourceMappingURL=route.js.map