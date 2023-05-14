import * as mongoose from 'mongoose';
import IManageDestinationModel from './IModel';
import ManageDestinationSchema from './schema';
/**
 * @swagger
 * definitions:
 *    ManageDestinationsResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ManageDestinations'
 *    DeleteManageDestinationResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *    ActivationAudienceByDestinationIdResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          properties:
 *            count:
 *              type: string
 *              example: 1
 *    ManageDestinations:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ManageDestinationsSchema'
 *    ManageDestinationsSchema:
 *       properties:
 *         _id:
 *           type: string
 *         id:
 *           type: string
 *         clientCode:
 *           type: string
 *         createdBy:
 *           type: string
 *         tenantId:
 *           type: string
 *         h1:
 *           type: string
 *         originalId:
 *           type: string
 *         createdAt:
 *           type: string
 *         modifiedAt:
 *           type: string
 *         accountId:
 *           type: string
 *         accountName:
 *           type: string
 *         accountType:
 *           type: object
 *           $ref: '#/definitions/AccountTypeSchema'
 *         additionalInfo:
 *           type: array
 *           items:
 *             $ref: '#/definitions/AdditionalInfoSchema'
 *         destinationCode:
 *           type: string
 *         partnerCode:
 *           type: string
 *         currency:
 *           type: string
 *         status:
 *           type: string
 *         isDeleted:
 *           type: boolean
 *         schemaVer:
 *           type: string
 *    AccountTypeSchema:
 *       properties:
 *         label:
 *           type: string
 *         value:
 *           type: string
 *    AdditionalInfoSchema:
 *       properties:
 *         k:
 *           type: string
 *         v:
 *           type: string
 *    ManageDestinationsListResponse:
 *       properties:
 *         message:
 *           type: string
 *           example: Success
 *         status:
 *           type: integer
 *           example: 200
 *         data:
 *           $ref: '#/definitions/ManageDestinationsListSchema'
 *    ManageDestinationsListSchema:
 *       properties:
 *         count:
 *           type: integer
 *         list:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ManageDestinationsSchema'
 *    ManageDestinationsStatusResponse:
 *       properties:
 *         message:
 *           type: string
 *           example: Success
 *         status:
 *           type: integer
 *           example: 200
 *         data:
 *           $ref: '#/definitions/ManageDestinationsSchema'
 *
 */
export declare const manageDestinationSchema: ManageDestinationSchema;
/**
 * @typedef Home
 */
export declare const manageDestinationModel: mongoose.Model<IManageDestinationModel>;
