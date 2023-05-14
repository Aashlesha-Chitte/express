import * as mongoose from 'mongoose';
import IAudienceRespondentIdsModel from './IModel';
import AudienceRespondentsSchema from './schema';
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
export declare const audienceRespondentsSchema: AudienceRespondentsSchema;
/**
 * @typedef Home
 */
export declare const audienceRespondentsModel: mongoose.Model<IAudienceRespondentIdsModel>;
