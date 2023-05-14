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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activationDestinationsModel = exports.activationDestinationsSchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * @swagger
 * definitions:
 *    ActivationDestinationsResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ActivationDestinations'
 *    ActivationDestinations:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ActivationDestinationsSchema'
 *    ActivationDestinationsSchema:
 *      properties:
 *        id:
 *          type: string
 *        originalId:
 *          type: string
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        destinationConfig:
 *          type: array
 *          items:
 *            $ref: '#/definitions/DestinationConfig'
 *        partnerCode:
 *          type: string
 *        partnerId:
 *          type: object
 *          $ref: '#/definitions/ActivationPartnerListSchema'
 *        activationServiceUrl:
 *          type: string
 *        destinationCode:
 *          type: string
 *        destinationName:
 *          type: string
 *        activationServiceIsActive:
 *          type: boolean
 *        destinationIsActive:
 *          type: boolean
 *        destinationConnectionUrl:
 *          type: string
 *        destinationLogo:
 *          type: string
 *        accountType:
 *          type: array
 *          items:
 *            $ref: '#/definitions/AccountTypeConfig'
 *        currency:
 *          type: array
 *          items:
 *            type: string
 *        isDeleted:
 *          type: boolean
 *        createdBy:
 *          type: string
 *        createdAt:
 *          type: string
 *        modifiedAt:
 *          type: string
 *        modifiedBy:
 *          type: string
 *        schemaVer:
 *          type: string
 *          example: 'v1.0'
 *    ActivationDestinationsPostBodySchema:
 *      properties:
 *        partnerCode:
 *          type: string
 *          example: ZT
 *        destinationName:
 *          type: string
 *          example: Google DV360
 *        destinationConnectionUrl:
 *          type: string
 *          example: https://www.google.com/
 *        activationServiceUrl:
 *          type: string
 *          example: https://localhost:9001/
 *        destinationCode:
 *          type: string
 *          example: Google
 *        destinationLogo:
 *          type: string
 *          example: /folderName/Google DV360.png
 *        currency:
 *          type: array
 *          items:
 *            example: "USD"
 *        activationServiceIsActive:
 *          type: boolean
 *          example: true
 *        destinationIsActive:
 *          type: boolean
 *          example: true
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        destinationConfig:
 *          type: array
 *          items:
 *            $ref: '#/definitions/DestinationConfig'
 *        accountType:
 *          type: array
 *          items:
 *            $ref: '#/definitions/AccountTypeConfig'
 *    ClientHierarchy:
 *      properties:
 *        k:
 *          type: string
 *        v:
 *          type: array
 *          items:
 *            type: string
 *    DestinationConfig:
 *      properties:
 *        clientCode:
 *          type: string
 *          example: A_CCCO
 *        geography:
 *          type: string
 *          example: GB
 *        config:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ActivationDestinationsConfig'
 *    ActivationDestinationsConfig:
 *      properties:
 *        k:
 *          type: string
 *        v:
 *          type: string
 *    AccountTypeConfig:
 *      properties:
 *        accountCode:
 *          type: string
 *          example: advertiser
 *        accountName:
 *          type: string
 *          example: Advertiser
 *        input:
 *          type: array
 *          items:
 *            $ref: '#/definitions/InputConfig'
 *    InputConfig:
 *      properties:
 *        label:
 *          type: string
 *          example: Client Name
 *        isRequired:
 *          type: boolean
 *          example: true
 *        validation:
 *          type: string
 *          example: alpha-num-sym
 *        default:
 *          type: array
 *          items:
 *            example: ""
 */
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.activationDestinationsSchema = new schema_1.default({
    collection: 'activationDestinations',
    toJSON: {
        transform: exports.transform,
        versionKey: false,
        virtuals: true,
    },
    toObject: {
        transform: exports.transform,
        versionKey: false,
        virtuals: true,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
exports.activationDestinationsSchema.pre('save', (next) => {
    next();
});
exports.activationDestinationsSchema.index({ destinationCode: 1 }, { unique: true, name: 'activation_destinations_schema_index_1' });
exports.activationDestinationsSchema.index({ destinationName: 1 }, { name: 'activation_destinations_schema_index_2' });
/**
 * Methods
 */
exports.activationDestinationsSchema.method({});
/**
 * Statics
 */
exports.activationDestinationsSchema.statics = {};
/**
 * @typedef ActivationDestinations
 */
exports.activationDestinationsModel = mongoose.model('ActivationDestinations', exports.activationDestinationsSchema, 'ActivationDestinations');
//# sourceMappingURL=model.js.map