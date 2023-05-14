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
exports.audienceModel = exports.audienceSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * Audience Schema
 */
/**
 * @swagger
 * definitions:
 *   Canvases:
 *     type: array
 *     items:
 *       properties:
 *         base:
 *           type: string
 *         createdAt:
 *           type: string
 *         modifiedAt:
 *           type: string
 *         female:
 *           type: string
 *         id:
 *           type: string
 *         male:
 *           type: string
 *         name:
 *           type: string
 *         originalId:
 *           type: string
 *         sizing:
 *           type: string
 *   Canvas:
 *     properties:
 *       base:
 *         type: string
 *       createdAt:
 *         type: string
 *       modifiedAt:
 *         type: string
 *       female:
 *         type: string
 *       id:
 *         type: string
 *       male:
 *         type: string
 *       name:
 *         type: string
 *       originalId:
 *         type: string
 *       sizing:
 *         type: string
 *   SurveySchema:
 *     properties:
 *       id:
 *        type: string
 *        example: '254'
 *       name:
 *        type: string
 *        example: 'CCS Germany 2020'
 *       dataSource:
 *        type: string
 *        example: 'CCS'
 *   SizingPanelSchema:
 *     properties:
 *       averageIncomeCurrencyCode:
 *         type: string
 *         example: 'USD'
 *       averageIncomeCurrencySymbol:
 *         type: string
 *         example: '$'
 *       medianIncomeCurrencyCode:
 *         type: string
 *         example: 'USD'
 *       medianIncomeCurrencySymbol:
 *         type: string
 *         example: '$'
 *       baseAudienceSize:
 *         type : integer
 *         format: int64
 *         example: 58091000
 *       audienceSize:
 *         type : integer
 *         format: int64
 *         example: 58091000
 *       averageIncome:
 *         type : integer
 *         format: int64
 *         example: 31734
 *       femaleSize:
 *         type : integer
 *         format: int64
 *         example: 49
 *       maleSize:
 *         type : integer
 *         format: int64
 *         example: 50
 *       otherGender:
 *         type : integer
 *         format: int64
 *         example: 0
 *       medianAge:
 *         type : integer
 *         format: int64
 *         example: 39
 *       medianIncome:
 *         type : integer
 *         format: int64
 *         example: 33674
 *       respondents:
 *         type : integer
 *         format: int64
 *         example: 13000
 *   ContentSchema:
 *     properties:
 *       answer:
 *         type: string
 *       itemType:
 *         type: string
 *       type:
 *         type: string
 *       itemId:
 *         type: string
 *       description:
 *         type: string
 *       questionId:
 *         type: string
 *       isNegative:
 *         type: boolean
 *   AudienceBuilderSchema:
 *     properties:
 *       _id:
 *         type: string
 *       id:
 *         type: string
 *       originalId:
 *         type: string
 *       name:
 *         type: string
 *       h2:
 *         type: string
 *       h1:
 *         type: string
 *       clientCode:
 *         type: string
 *       survey:
 *         type: object
 *         $ref: '#/definitions/SurveySchema'
 *       sizingPanel:
 *         type: object
 *         $ref: '#/definitions/SizingPanelSchema'
 *       content:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ContentSchema'
 *       status:
 *         type: string
 *       subStatus:
 *         type: string
 *       lockExpireTimeStamp:
 *         type: string
 *       createdBy:
 *         type: string
 *       createdAt:
 *         type: string
 *       modifiedAt:
 *         type: string
 *       modifiedBy:
 *         type: string
 *       createdVia:
 *         type: string
 *       tenantId:
 *         type: string
 *       sendForActivation:
 *         type: boolean
 *       trackingId:
 *         type: string
 *       isDeleted:
 *         type: boolean
 *   AudienceBuilders:
 *     type: array
 *     items:
 *      $ref: '#/definitions/AudienceBuilderSchema'
 *   AudienceBuilder:
 *     type: object
 *     $ref: '#/definitions/AudienceBuilderSchema'
 *   AudienceBuilderListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/AudienceBuilders'
 *   AudienceByIdsPostResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/AudienceBuilders'
 *   AudienceByIdGetResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/AudienceBuilder'
 *   CanvasPostResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/Canvas'
 *   RedisResponseObject:
 *     properties:
 *       audienceId:
 *         type: string
 *         example: "6149d60c96442fd2ac0361e4"
 *       timeStamp:
 *         type: string
 *         example: "2021-11-10T05:16:40.762Z"
 *       userOktaId:
 *         type: string
 *       lockExpireTimeStamp:
 *         type: string
 *         example: "2021-11-10T05:16:40.762Z"
 *       isAccessible:
 *         type: boolean
 *         example: true
 *   RedisLockResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Audience is available for edit
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/RedisResponseObject'
 *   DeleteRedisLockObject:
 *    properties:
 *      isAccessible:
 *        type: boolean
 *        example: true
 *   DeleteRedisLock:
 *    properties:
 *      message:
 *        type: string
 *        example: Audience is available for edit
 *      status:
 *        type: integer
 *        example: 200
 *      data:
 *        $ref: '#/definitions/DeleteRedisLockObject'
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
 *   UploadFileResponse:
 *     properties:
 *       respodentKey:
 *         type: string
 *       h1:
 *         type: string
 *       name:
 *         type: string
 *       survey:
 *         properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 *            dataSource:
 *              type: string
 *            mdmMarketCode:
 *              type: string
 *            mdmMarketName:
 *              type: string
 *   UploadFileSuccess:
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
 *           $ref: '#/definitions/UploadFileResponse'
 *   UploadAudienceSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 */
exports.audienceSchema = new schema_1.default({
    collection: 'Audiences',
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
exports.audienceSchema.pre('save', (next) => {
    // this.modifiedAt = new Date();
    next();
});
/**
 * Indicies
 */
exports.audienceSchema.index({ deletedAt: 1, originalId: 1, audienceName: 1, h1: 1 }, { name: 'audience_schema_index_1' });
exports.audienceSchema.index({ deletedAt: 1, h1: 1, h2: 1, createdVia: 1, status: 1, createdBy: 1, modifiedBy: 1, modifiedAt: -1 }, { name: 'audience_schema_index_2' });
exports.audienceSchema.index({ deletedAt: 1, h1: 1, h2: 1, createdVia: 1, status: 1, surveyId: 1, sendForActivation: 1, modifiedAt: -1 }, { name: 'audience_schema_index_3' });
/**
 * Methods
 */
exports.audienceSchema.method({});
/**
 * Statics
 */
exports.audienceSchema.statics = {};
/**
 * @typedef Home
 */
exports.audienceModel = mongoose.model('Audiences', exports.audienceSchema, 'Audiences', true);
//# sourceMappingURL=model.js.map