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
exports.recontactSurveyModel = exports.recontactSurveySchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * @swagger
 * definitions:
 *    ReContactSurveyResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ReContactSurveySchema'
 *    ReContactSurveySchema:
 *       properties:
 *         id:
 *           type: string
 *         originalId:
 *           type: string
 *         createdBy:
 *          type: string
 *         createdAt:
 *           type: string
 *         modifiedAt:
 *           type: string
 *         masterSurveyId:
 *           type: string
 *         masterSurveyName:
 *           type: string
 *         recontactSurveyList:
 *           type: array
 *           items:
 *             properties:
 *               surveyName:
 *                 type: string
 *               surveyId:
 *                 type: string
 *               clientCode:
 *                 type: string
 *         isDeleted:
 *           type: boolean
 *    ReContactSurveyListResponse:
 *       properties:
 *         message:
 *           type: string
 *           example: Success
 *         status:
 *           type: integer
 *           example: 200
 *         data:
 *           type: array
 *           $ref: '#/definitions/ReContactSurveyList'
 *    ReContactSurveyList:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ReContactSurveySchema'
 */
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.recontactSurveySchema = new schema_1.default({
    collection: 'recontactSurvey',
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
exports.recontactSurveySchema.pre('save', (next) => {
    next();
});
exports.recontactSurveySchema.index({ masterSurveyId: 1 }, { name: 'recontact_survey_schema_index_1' });
exports.recontactSurveySchema.index({ 'recontactSurveyList.clientCode': 1 }, { name: 'recontact_survey_schema_index_2' });
/**
 * Methods
 */
exports.recontactSurveySchema.method({});
/**
 * Statics
 */
exports.recontactSurveySchema.statics = {};
/**
 * @typedef ReContactSurvey
 */
exports.recontactSurveyModel = mongoose.model('ReContactSurvey', exports.recontactSurveySchema, 'ReContactSurvey');
//# sourceMappingURL=model.js.map