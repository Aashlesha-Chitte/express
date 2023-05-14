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
exports.insightTemplateModel = exports.insightTemplateSchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * InsightTemplate Schema
 */
/**
 * @swagger
 * definitions:
 *   TargetElement:
 *     properties:
 *       answer:
 *         type: string
 *         example: 'Use the Internet (on any device)'
 *       type:
 *         type: string
 *         example: 1
 *       itemType:
 *         type: string
 *         example: 1
 *       itemId:
 *         type: string
 *         example:  780dcaf360b3d_2bd9daad76d6c
 *       description:
 *         type: string
 *         example: "Media consumption - Frequency of usage (M1A/W1A/NP1A)"
 *       questionId:
 *         type: string
 *         example: 79709
 *       isNegative:
 *         type: boolean
 *         example: false
 *       relation:
 *         type: number
 *         example: 2
 *       targetElementValues:
 *         type: array
 *         items:
 *           type: object
 *           $ref: '#/definitions/TargetElementValue'
 *   TargetElementValue:
 *     properties:
 *       dimensionArrayId:
 *         type: string
 *         example: 7529735
 *       description:
 *         type: string
 *         example: "Every day"
 *       isSelected:
 *         type: boolean
 *         example: true
 *   DigitalInterest:
 *     properties:
 *       dashboardName:
 *         type: string
 *       charts:
 *         $ref: '#/definitions/SnapshotDashboardSchema'
 *   DigitalInterestList:
 *     type: array
 *     items:
 *       $ref: '#/definitions/DigitalInterest'
 *   DigitalInterestListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/DigitalInterestList'
 *   DigitalInterestPostBodySchema:
 *     properties:
 *       input:
 *         type: array
 *         default: []
 *         items:
 *           type: object
 *           $ref: '#/definitions/TargetElement'
 *       tabNames:
 *         type: array
 *         items:
 *           type: string
 *           example: DIGITAL INTEREST
 *   ClientHierarchySchema:
 *     properties:
 *       k:
 *         type: string
 *         example: 'h1 || h2'
 *       v:
 *         type: string
 *         example: 'All'
 *   ChartsSchema:
 *     properties:
 *       providerChartName:
 *         type: array
 *         items:
 *           type: string
 *       aueChartName:
 *         type: string
 *       aueChartNameCMSLabel:
 *         type: string
 *       chartDisplayOrder:
 *         type: number
 *       isChartVisible:
 *         type: boolean
 *       chartOrientation:
 *         type: string
 *       chartType:
 *         type: string
 *   TabsSchema:
 *     properties:
 *       providerTabName:
 *         type: array
 *         items:
 *           type: string
 *       aueTabName:
 *         type: string
 *       aueTabNameCMSLabel:
 *         type: string
 *       tabDisplayOrder:
 *         type: number
 *       isTabVisible:
 *         type: boolean
 *       surveyIds:
 *         type: array
 *         items:
 *           type: string
 *       charts:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ChartsSchema'
 *   InsightTemplatePostSchema:
 *     properties:
 *       templateName:
 *         type: string
 *       agency:
 *         type: string
 *       client:
 *         type: string
 *       provider:
 *         type: string
 *       brands:
 *         type: string
 *       markets:
 *         type: string
 *       tabs:
 *         type: array
 *         items:
 *           $ref: '#/definitions/TabsSchema'
 *   InsightTemplateSchema:
 *     properties:
 *       id:
 *         type: string
 *       templateName:
 *         type: string
 *       agency:
 *         type: string
 *         example: 'All'
 *       client:
 *         type: string
 *         example: 'All'
 *       clientHierarchy:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ClientHierarchySchema'
 *       tabs:
 *         type: array
 *         items:
 *           $ref: '#/definitions/TabsSchema'
 *       provider:
 *         type: string
 *         example: 'CSS'
 *       schemaVer:
 *         type: string
 *         example: 'v1.0'
 *       createdBy:
 *         type: string
 *       createdAt:
 *         type: string
 *       isDeleted:
 *         type: boolean
 *       originalId:
 *         type: string
 *       modifiedAt:
 *         type: string
 *   InsightTemplateSuccess:
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
 *           $ref: '#/definitions/InsightTemplateSchema'
 *   InsightTemplates:
 *     type: array
 *     items:
 *       $ref: '#/definitions/InsightTemplateSchema'
 *   InsightTemplateListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/InsightTemplates'
 */
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.insightTemplateSchema = new schema_1.default({
    collection: 'InsightTemplate',
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
exports.insightTemplateSchema.pre('save', (next) => {
    next();
});
/**
 * Methods
 */
exports.insightTemplateSchema.method({});
/**
 * Statics
 */
exports.insightTemplateSchema.statics = {};
/**
 * @typedef InsightTemplate
 */
exports.insightTemplateModel = mongoose.model('InsightTemplate', exports.insightTemplateSchema, 'InsightTemplate');
//# sourceMappingURL=model.js.map