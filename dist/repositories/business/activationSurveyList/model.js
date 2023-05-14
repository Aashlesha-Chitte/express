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
exports.activationSurveyModel = exports.activationSurveyListSchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * ActivationSurveyList Schema
 */
/**
 * @swagger
 * definitions:
 *    ActivationSurveyListResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ActivationSurveyList'
 *    ActivationSurveyList:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ActivationSurveyListSchema'
 *    ActivationSurveyListSchema:
 *      properties:
 *        originalId:
 *          type: string
 *        surveyId:
 *          type: string
 *        canActivate:
 *          type: boolean
 *        isDeleted:
 *          type: boolean
 *        surveyName:
 *          type: string
 *          example: M1 Panel (CCS) Singapore 2020
 *        createdBy:
 *          type: string
 *        createdAt:
 *          type: string
 *        modifiedAt:
 *          type: string
 *    ActivationPostBodySchema:
 *      properties:
 *        surveyId:
 *          type: string
 *        canActivate:
 *          type: boolean
 *        surveyName:
 *          type: string
 *          example: M1 Panel (CCS) Singapore 2020
 *
 */
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.activationSurveyListSchema = new schema_1.default({
    collection: 'activationSurveyList',
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
exports.activationSurveyListSchema.pre('save', (next) => {
    next();
});
exports.activationSurveyListSchema.index({ isDeleted: 1, canActivate: 1 }, { name: 'activation_survey_list_schema_index_1' });
/**
 * Methods
 */
exports.activationSurveyListSchema.method({});
/**
 * Statics
 */
exports.activationSurveyListSchema.statics = {};
/**
 * @typedef InsightTemplate
 */
exports.activationSurveyModel = mongoose.model('ActivationSurveyList', exports.activationSurveyListSchema, 'ActivationSurveyList');
//# sourceMappingURL=model.js.map