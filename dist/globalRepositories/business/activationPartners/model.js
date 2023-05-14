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
exports.activationPartnersModel = exports.activationPartnersSchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * @swagger
 * definitions:
 *    ActivationPartnersListResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ActivationPartnerList'
 *    ActivationPartnerList:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ActivationPartnerListSchema'
 *    ActivationPartnerListSchema:
 *      properties:
 *        id:
 *          type: string
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        partnerCode:
 *          type: string
 *        partnerConfig:
 *          properties:
 *            k:
 *              type: string
 *            v:
 *              type: string
 *        modelType:
 *          type: string
 *        partnerConnectionUrl:
 *          type: string
 *        partnerIsActive:
 *          type: boolean
 *        partnerName:
 *          type: string
 *        schemaVer:
 *          type: string
 *          example: 'v1.0'
 *        originalId:
 *          type: string
 *        isDeleted:
 *          type: boolean
 *        createdBy:
 *          type: string
 *        createdAt:
 *          type: string
 *        modifiedAt:
 *          type: string
 *    ActivationPartnerBodySchema:
 *      properties:
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        partnerCode:
 *          type: string
 *        partnerConfig:
 *          properties:
 *            k:
 *              type: string
 *            v:
 *              type: string
 *        partnerConnectionUrl:
 *          type: string
 *        partnerIsActive:
 *          type: boolean
 *        partnerName:
 *          type: string
 *    ClientHierarchy:
 *      properties:
 *        k:
 *          type: string
 *        v:
 *          type: array
 *          items:
 *            type: string
 */
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.activationPartnersSchema = new schema_1.default({
    collection: 'activationPartners',
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
exports.activationPartnersSchema.pre('save', (next) => {
    next();
});
/**
 * Methods
 */
exports.activationPartnersSchema.method({});
// activationPartnersSchema.index({ partnerCode: 1 }, { unique: true });
/**
 * Statics
 */
exports.activationPartnersSchema.statics = {};
/**
 * @typedef ActivationPartners
 */
exports.activationPartnersModel = mongoose.model('ActivationPartners', exports.activationPartnersSchema, 'ActivationPartners');
//# sourceMappingURL=model.js.map