import * as mongoose from 'mongoose';
import IAudienceDetailModel from './IModel';
import AudienceDetailSchema from './schema';
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
export declare const audienceDetailSchema: AudienceDetailSchema;
/**
 * @typedef Home
 */
export declare const audienceDetailModel: mongoose.Model<IAudienceDetailModel>;
