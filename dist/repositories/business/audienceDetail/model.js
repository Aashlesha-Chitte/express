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
exports.audienceDetailModel = exports.audienceDetailSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * AudienceDetail Schema
 */
/**
 * @swagger
 * definitions:
 *   AudienceDetailPost:
 *     properties:
 *       audienceId:
 *         type: string
 *       questionId:
 *         type: string
 *       answer:
 *         type: string
 *       type:
 *         type: string
 *       itemId:
 *         type: string
 *       description:
 *         type: string
 *       operatorType:
 *         type: string
 *       children:
 *         type: any
 *       isIncluded:
 *         type: string
 *       useMinMaxMatch:
 *         type: string
 *       minMatch:
 *         type: string
 *       maxMatch:
 *         type: string
 *   AudienceDetailPut:
 *     properties:
 *       id:
 *         type: string
 *       audienceId:
 *         type: string
 *       questionId:
 *         type: string
 *       answer:
 *         type: string
 *       type:
 *         type: string
 *       itemId:
 *         type: string
 *       description:
 *         type: string
 *       operatorType:
 *         type: string
 *       children:
 *         type: any
 *       isIncluded:
 *         type: string
 *       useMinMaxMatch:
 *         type: string
 *       minMatch:
 *         type: string
 *       maxMatch:
 *         type: string
 *   AudienceDetailResponse:
 *     properties:
 *       id:
 *         type: string
 *       originalId:
 *         type: string
 *       audienceId:
 *         type: string
 *       questionId:
 *         type: string
 *       answer:
 *         type: string
 *       type:
 *         type: string
 *       itemId:
 *         type: string
 *       description:
 *         type: string
 *       operatorType:
 *         type: string
 *       children:
 *         type: any
 *       isIncluded:
 *         type: string
 *       useMinMaxMatch:
 *         type: string
 *       minMatch:
 *         type: string
 *       maxMatch:
 *         type: string
 *       isDeleted:
 *         type: string
 *       createdAt:
 *         type: string
 *       modifiedAt:
 *         type: string
 *       modifiedBy:
 *         type: string
 *       deletedAt:
 *         type: string
 *       deletedBy:
 *         type: string
 *   AudienceDetailArraySuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/AudienceDetailResponse'
 *   AudienceDetailObjectSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/AudienceDetailResponse'
 *   DeleteSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Audience is deleted
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/Delete'
 *   Delete:
 *     properties:
 *       acknowledged:
 *         type: boolean
 *         example: true
 *       matchedCount:
 *         type: number
 *         example: 1
 *       modifiedCount:
 *         type: number
 *         example: 1
 *       upsertedCount:
 *         type: number
 *         example: 0
 *       upsertedId:
 *         type: string
 *         nullable: true
 */
exports.audienceDetailSchema = new schema_1.default({
    collection: 'AudienceDetails',
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
exports.audienceDetailSchema.pre('save', (next) => {
    // this.modifiedAt = new Date();
    next();
});
/**
 * Indicies
 */
// audienceDetailSchema.index({ email: 1, deletedAt: 1 }, { unique: true });
exports.audienceDetailSchema.index({ deletedAt: 1 });
/**
 * Methods
 */
exports.audienceDetailSchema.method({});
/**
 * Statics
 */
exports.audienceDetailSchema.statics = {};
/**
 * @typedef Home
 */
exports.audienceDetailModel = mongoose.model('AudienceDetails', exports.audienceDetailSchema, 'AudienceDetails', true);
//# sourceMappingURL=model.js.map