import * as mongoose from 'mongoose';
import IActivationDestinationsModel from './IModel';
import ActivationDestinationsSchema from './schema';
/**
 * @swagger
 * definitions:
 *    ActivationDestinationsResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ActivationDestinations'
 *    ActivationDestinations:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ActivationDestinationsSchema'
 *    ActivationDestinationsSchema:
 *      properties:
 *        id:
 *          type: string
 *        originalId:
 *          type: string
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        destinationConfig:
 *          type: array
 *          items:
 *            $ref: '#/definitions/DestinationConfig'
 *        partnerCode:
 *          type: string
 *        partnerId:
 *          type: object
 *          $ref: '#/definitions/ActivationPartnerListSchema'
 *        activationServiceUrl:
 *          type: string
 *        destinationCode:
 *          type: string
 *        destinationName:
 *          type: string
 *        activationServiceIsActive:
 *          type: boolean
 *        destinationIsActive:
 *          type: boolean
 *        destinationConnectionUrl:
 *          type: string
 *        destinationLogo:
 *          type: string
 *        accountType:
 *          type: array
 *          items:
 *            $ref: '#/definitions/AccountTypeConfig'
 *        currency:
 *          type: array
 *          items:
 *            type: string
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
 *        schemaVer:
 *          type: string
 *          example: 'v1.0'
 *    ActivationDestinationsPostBodySchema:
 *      properties:
 *        partnerCode:
 *          type: string
 *          example: ZT
 *        destinationName:
 *          type: string
 *          example: Google DV360
 *        destinationConnectionUrl:
 *          type: string
 *          example: https://www.google.com/
 *        activationServiceUrl:
 *          type: string
 *          example: https://localhost:9001/
 *        destinationCode:
 *          type: string
 *          example: Google
 *        destinationLogo:
 *          type: string
 *          example: /folderName/Google DV360.png
 *        currency:
 *          type: array
 *          items:
 *            example: "USD"
 *        activationServiceIsActive:
 *          type: boolean
 *          example: true
 *        destinationIsActive:
 *          type: boolean
 *          example: true
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        destinationConfig:
 *          type: array
 *          items:
 *            $ref: '#/definitions/DestinationConfig'
 *        accountType:
 *          type: array
 *          items:
 *            $ref: '#/definitions/AccountTypeConfig'
 *    ClientHierarchy:
 *      properties:
 *        k:
 *          type: string
 *        v:
 *          type: array
 *          items:
 *            type: string
 *    DestinationConfig:
 *      properties:
 *        clientCode:
 *          type: string
 *          example: A_CCCO
 *        geography:
 *          type: string
 *          example: GB
 *        config:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ActivationDestinationsConfig'
 *    ActivationDestinationsConfig:
 *      properties:
 *        k:
 *          type: string
 *        v:
 *          type: string
 *    AccountTypeConfig:
 *      properties:
 *        accountCode:
 *          type: string
 *          example: advertiser
 *        accountName:
 *          type: string
 *          example: Advertiser
 *        input:
 *          type: array
 *          items:
 *            $ref: '#/definitions/InputConfig'
 *    InputConfig:
 *      properties:
 *        label:
 *          type: string
 *          example: Client Name
 *        isRequired:
 *          type: boolean
 *          example: true
 *        validation:
 *          type: string
 *          example: alpha-num-sym
 *        default:
 *          type: array
 *          items:
 *            example: ""
 */
export declare const transform: (doc: any, ret: any) => void;
export declare const activationDestinationsSchema: ActivationDestinationsSchema;
/**
 * @typedef ActivationDestinations
 */
export declare const activationDestinationsModel: mongoose.Model<IActivationDestinationsModel>;
