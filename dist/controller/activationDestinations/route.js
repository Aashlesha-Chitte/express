"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AuthManager } from '@gdo-enablers/dan-auth-mdw-me';
const express_1 = require("express");
// import serviceAccountValidator from 'middlewares/serviceAccountValidator';
// import validationHandler from 'middlewares/validationHandler';
const activationDestinationsController_1 = __importDefault(require("./activationDestinationsController"));
// import validation from './validation';
// const authManager: AuthManager = AuthManager.getInstance();
// const auth: any = authManager.auth;
const route = (0, express_1.Router)();
/**
 * @
 * /config/activationDestinations:
 *   post:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Activation Destinations
 *     summary: Create Activation Destinations. [QA testing is not required]
 *     description: Create Activation Destinations.
 *     consumes:
 *      - application/json
 *     parameters:
 *       - name: Request Params
 *         in: body
 *         required: true
 *         description: Create Activation Destinations Lists
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ActivationDestinationsPostBodySchema'
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
// route.route('/activationDestinations').post(
//   // auth,
//   // serviceAccountValidator,
//   // validationHandler(validation.createActivationDestinations),
//   ActivationDestinationsController.createActivationDestinations,
// );
/**
 * @swagger
 * /config/activationDestinations:
 *   get:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Activation Destinations
 *     summary: Return list of Activation Destinations
 *     description: Return list of all activation destinations
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: destinationIsActive
 *         required: false
 *         type: boolean
 *         description: destinationIsActive
 *     responses:
 *       200:
 *         description: Array of Activation Destinations
 *         schema:
 *           $ref: '#/definitions/ActivationDestinationsResponse'
 *       422:
 *         description: Unprocessable Entity
 *       500:
 *         description: Internal Server Error
 */
route.route('/activationDestinations').get(
// auth,
// validationHandler(validation.getActivationDestinations),
activationDestinationsController_1.default.getActivationDestinations);
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
//   ActivationDestinationsController.updateDestinationConfig,
// );
exports.default = route;
//# sourceMappingURL=route.js.map