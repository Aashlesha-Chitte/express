import * as mongoose from 'mongoose';
import IReContactSurveyModel from './IModel';
import ReContactSurveySchema from './schema';
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
export declare const transform: (doc: any, ret: any) => void;
export declare const recontactSurveySchema: ReContactSurveySchema;
/**
 * @typedef ReContactSurvey
 */
export declare const recontactSurveyModel: mongoose.Model<IReContactSurveyModel>;
