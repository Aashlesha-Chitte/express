import * as mongoose from 'mongoose';
import IActivationSurveyListModel from './IModel';
import ActivationSurveyListSchema from './schema';
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
export declare const transform: (doc: any, ret: any) => void;
export declare const activationSurveyListSchema: ActivationSurveyListSchema;
/**
 * @typedef InsightTemplate
 */
export declare const activationSurveyModel: mongoose.Model<IActivationSurveyListModel>;
