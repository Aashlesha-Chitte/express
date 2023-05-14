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
exports.audienceRespondentsModel = exports.audienceRespondentsSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * Audience Schema
 */
/**
 * @swagger
 * definitions:
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
 *   AudienceRespondentsSchema:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/AudienceRespondents'
 *   AudienceRespondents:
 *     properties:
 *       audienceId:
 *         type: string
 *       respondentIds:
 *         type: array
 *         items:
 *           type: string
 *       schemaVer:
 *         type: string
 *         example: '1'
 */
exports.audienceRespondentsSchema = new schema_1.default({
    collection: 'AudiencesRespondents',
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
exports.audienceRespondentsSchema.pre('save', (next) => {
    // this.modifiedAt = new Date();
    next();
});
/**
 * Indicies
 */
exports.audienceRespondentsSchema.index({ deletedAt: 1, audienceId: 1 }, { name: 'audience_respondents_schema_index_1' });
/**
 * Methods
 */
exports.audienceRespondentsSchema.method({});
/**
 * Statics
 */
exports.audienceRespondentsSchema.statics = {};
/**
 * @typedef Home
 */
exports.audienceRespondentsModel = mongoose.model('AudiencesRespondents', exports.audienceRespondentsSchema, 'AudiencesRespondents', true);
//# sourceMappingURL=model.js.map