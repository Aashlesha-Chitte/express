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
exports.manageDestinationModel = exports.manageDestinationSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * @swagger
 * definitions:
 *    ManageDestinationsResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ManageDestinations'
 *    DeleteManageDestinationResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *    ActivationAudienceByDestinationIdResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          properties:
 *            count:
 *              type: string
 *              example: 1
 *    ManageDestinations:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ManageDestinationsSchema'
 *    ManageDestinationsSchema:
 *       properties:
 *         _id:
 *           type: string
 *         id:
 *           type: string
 *         clientCode:
 *           type: string
 *         createdBy:
 *           type: string
 *         tenantId:
 *           type: string
 *         h1:
 *           type: string
 *         originalId:
 *           type: string
 *         createdAt:
 *           type: string
 *         modifiedAt:
 *           type: string
 *         accountId:
 *           type: string
 *         accountName:
 *           type: string
 *         accountType:
 *           type: object
 *           $ref: '#/definitions/AccountTypeSchema'
 *         additionalInfo:
 *           type: array
 *           items:
 *             $ref: '#/definitions/AdditionalInfoSchema'
 *         destinationCode:
 *           type: string
 *         partnerCode:
 *           type: string
 *         currency:
 *           type: string
 *         status:
 *           type: string
 *         isDeleted:
 *           type: boolean
 *         schemaVer:
 *           type: string
 *    AccountTypeSchema:
 *       properties:
 *         label:
 *           type: string
 *         value:
 *           type: string
 *    AdditionalInfoSchema:
 *       properties:
 *         k:
 *           type: string
 *         v:
 *           type: string
 *    ManageDestinationsListResponse:
 *       properties:
 *         message:
 *           type: string
 *           example: Success
 *         status:
 *           type: integer
 *           example: 200
 *         data:
 *           $ref: '#/definitions/ManageDestinationsListSchema'
 *    ManageDestinationsListSchema:
 *       properties:
 *         count:
 *           type: integer
 *         list:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ManageDestinationsSchema'
 *    ManageDestinationsStatusResponse:
 *       properties:
 *         message:
 *           type: string
 *           example: Success
 *         status:
 *           type: integer
 *           example: 200
 *         data:
 *           $ref: '#/definitions/ManageDestinationsSchema'
 *
 */
exports.manageDestinationSchema = new schema_1.default({
    collection: 'ManageDestinations',
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
exports.manageDestinationSchema.pre('save', (next) => {
    // this.modifiedAt = new Date();
    next();
});
/**
 * Indicies
 */
exports.manageDestinationSchema.index({ deletedAt: 1, originalId: 1 }, { name: 'manage_destination_schema_index_1' });
exports.manageDestinationSchema.index({ deletedAt: 1, h1: 1, status: 1, destinationCode: 1, modifiedAt: -1 }, { name: 'manage_destination_schema_index_2' });
exports.manageDestinationSchema.index({ deletedAt: 1, h1: 1, destinationCode: 1, accountId: 1, partnerCode: 1, modifiedAt: -1 }, { name: 'manage_destination_schema_index_3' });
/**
 * Methods
 */
exports.manageDestinationSchema.method({});
/**
 * Statics
 */
exports.manageDestinationSchema.statics = {};
/**
 * @typedef Home
 */
exports.manageDestinationModel = mongoose.model('ManageDestinations', exports.manageDestinationSchema, 'ManageDestinations', true);
//# sourceMappingURL=model.js.map