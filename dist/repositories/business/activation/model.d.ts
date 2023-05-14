import * as mongoose from 'mongoose';
import IActivationModel from './IModel';
import ActivationSchema from './schema';
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
export declare const activationSchema: ActivationSchema;
/**
 * @typedef Home
 */
export declare const activationModel: mongoose.Model<IActivationModel>;
