import * as mongoose from 'mongoose';
import IMatchRatesModel from './IModel';
import MatchRateSchema from './schema';
/**
 * @swagger
 * definitions:
 *    MatchRatesResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/MatchRatesSchema'
 *    AddressableReachResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/AddressableReachDataResponse'
 *    MatchRatesSchema:
 *      properties:
 *        _id:
 *          type: string
 *        id:
 *          type: string
 *        geography:
 *          type: string
 *        limitReach:
 *          type: string
 *        defaultReachPercent:
 *          type: string
 *        destinations:
 *          type: array
 *          items:
 *           $ref: '#/definitions/DestinationsSchema'
 *        addressableReach:
 *          type: object
 *          $ref: '#/definitions/AddressableReachSchema'
 *        originalId:
 *          type: string
 *        isDeleted:
 *          type: boolean
 *        createdBy:
 *          type: string
 *        createdAt:
 *          type: string
 *        modifiedAt:
 *          type: string
 *        modifiedBy:
 *          type: string
 *    AddressableReachSchema:
 *      properties:
 *        totalZeotapIds:
 *          type: string
 *        zeotapModellablePercent:
 *          type: number
 *    AddressableReachDataResponse:
 *      properties:
 *        totalZeotapIds:
 *          type: number
 *        zeotapModellablePercent:
 *          type: number
 *    DestinationsSchema:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        code:
 *          type: string
 *        percent:
 *          type: number
 */
export declare const transform: (doc: any, ret: any) => void;
export declare const matchRateSchema: MatchRateSchema;
/**
 * @typedef MatchRates
 */
export declare const matchRatesModel: mongoose.Model<IMatchRatesModel>;
