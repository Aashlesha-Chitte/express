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
exports.activationModel = exports.activationSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
/**
 * Activation Schema
 */
/**
 * @swagger
 * definitions:
 *   AudienceListSchema:
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
 *       status:
 *         type: string
 *       subStatus:
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
 *   ActivationAudienceSchema:
 *     properties:
 *       _id:
 *         type: string
 *       id:
 *         type: string
 *       originalId:
 *         type: string
 *       h2:
 *         type: string
 *       h1:
 *         type: string
 *       clientCode:
 *         type: string
 *       status:
 *         type: string
 *       audienceId:
 *         type: string
 *       audienceName:
 *         type: string
 *       description:
 *         type: string
 *       destinationId:
 *         type: string
 *       partnerId:
 *         type: string
 *       survey:
 *         type: object
 *         $ref: '#/definitions/SurveySchema'
 *       activationResources:
 *         type: array
 *         items:
 *          properties:
 *            k:
 *              type: string
 *            v:
 *              type: string
 *       createdBy:
 *         type: string
 *       createdAt:
 *         type: string
 *       modifiedAt:
 *         type: string
 *       modifiedBy:
 *         type: string
 *       tenantId:
 *         type: string
 *       trackingId:
 *         type: string
 *       isDeleted:
 *         type: boolean
 *   ActivationAudiences:
 *     type: array
 *     items:
 *      $ref: '#/definitions/ActivationAudienceSchema'
 *   ActivationAudienceListResponse:
 *    properties:
 *      message:
 *        type: string
 *        example: Success
 *      status:
 *        type: integer
 *        example: 200
 *      data:
 *        $ref: '#/definitions/ActivationAudiences'
 *   ActivationStatusSchema:
 *     properties:
 *       activationId:
 *         type: string
 *       audienceId:
 *         type: string
 *       partnerId:
 *         type: string
 *       destinationId:
 *         type: string
 *       description:
 *         type: string
 *       geography:
 *         type: string
 *       manageDestinationId:
 *         type: string
 *       destinationAttributes:
 *         type: array
 *         items:
 *           $ref: '#/definitions/DestinationAttributes'
 *       activationResources:
 *         type: object
 *         properties:
 *           endDate:
 *             type: string
 *             example: '11/09/2022'
 *           campaignBudgetRange:
 *             type: string
 *             example: MEDIUM_BUDGET
 *   DestinationAttributes:
 *     properties:
 *       modelSize:
 *         type: object
 *         $ref: '#/definitions/ModelSizeAttributesSchema'
 *   ModelSizeAttributesSchema:
 *     properties:
 *       min:
 *         type: number
 *       max:
 *         type: number
 *   ActivationStatusResponse:
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
 *           $ref: '#/definitions/ActivationAudienceSchema'
 *   AudienceListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/AudienceListSchema'
 *   FetchSimulationResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/FetchSimulation'
 *   FetchSimulation:
 *     properties:
 *        activation:
 *          type: string
 *          example: "6149d60c96442fd2ac0361e4"
 *        id:
 *          type: string
 *          example: "6149d60c96442fd2ac0361e4"
 *        score:
 *          type: array
 *          items:
 *           $ref: '#/definitions/ScoreSchema'
 *   SendThresholdResponse:
 *     properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/SendThreshold'
 *   SendThreshold:
 *     properties:
 *        activationUuid:
 *          type: string
 *          example: 237v3r4
 *        lowerbound:
 *          type: int
 *          example: 734
 *        upperbound:
 *          type: int
 *          example: 326523
 *   ScoreSchema:
 *     properties:
 *        x:
 *          type: number
 *        y:
 *          type: number
 *   ActivationResourcesSchema:
 *     properties:
 *        lookalikeId:
 *          type: string
 *        destinationShareStatus:
 *          type: string
 *        destinationShareErr:
 *          type: string
 *        merkleSegmentId:
 *          type: string
 *        status:
 *          type: string
 *   LiverampTaskByIdSchema:
 *     allOf:
 *       - $ref: '#/definitions/AudienceBuilderSchema'
 *       - type: object
 *         properties:
 *           activation:
 *             type: object
 *             $ref: '#/definitions/ActivationAudienceSchema'
 *   LiverampTaskByIdGetResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/LiverampTaskByIdSchema'
 *   ZeoTapTaskByIdGetResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         allOf:
 *           - $ref: '#/definitions/ActivationAudienceSchema'
 *           - type: object
 *             properties:
 *               marketName:
 *                 type: string
 *               brandName:
 *                 type: string
 */
exports.activationSchema = new schema_1.default({
    collection: 'Activation',
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
exports.activationSchema.pre('save', (next) => {
    // this.modifiedAt = new Date();
    next();
});
/**
 * Indicies
 */
// activationSchema.index({ email: 1, deletedAt: 1 }, { unique: true });
exports.activationSchema.index({ deletedAt: 1, originalId: 1 }, { name: 'activation_schema_index_1' });
exports.activationSchema.index({ deletedAt: 1, h1: 1, h2: 1, status: 1, createdAt: 1, modifiedAt: -1 }, { name: 'activation_schema_index_2' });
exports.activationSchema.index({ deletedAt: 1, audienceId: 1 }, { name: 'activation_schema_index_3' });
/**
 * Methods
 */
exports.activationSchema.method({});
/**
 * Statics
 */
exports.activationSchema.statics = {};
/**
 * @typedef Home
 */
exports.activationModel = mongoose.model('Activation', exports.activationSchema, 'Activation', true);
//# sourceMappingURL=model.js.map