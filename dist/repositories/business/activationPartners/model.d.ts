import * as mongoose from 'mongoose';
import IActivationPartnersModel from './IModel';
import ActivationPartnersSchema from './schema';
/**
 * @swagger
 * definitions:
 *    ActivationPartnersListResponse:
 *      properties:
 *        message:
 *          type: string
 *          example: Success
 *        status:
 *          type: integer
 *          example: 200
 *        data:
 *          $ref: '#/definitions/ActivationPartnerList'
 *    ActivationPartnerList:
 *      type: array
 *      items:
 *       $ref: '#/definitions/ActivationPartnerListSchema'
 *    ActivationPartnerListSchema:
 *      properties:
 *        id:
 *          type: string
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        partnerCode:
 *          type: string
 *        partnerConfig:
 *          properties:
 *            k:
 *              type: string
 *            v:
 *              type: string
 *        modelType:
 *          type: string
 *        partnerConnectionUrl:
 *          type: string
 *        partnerIsActive:
 *          type: boolean
 *        partnerName:
 *          type: string
 *        schemaVer:
 *          type: string
 *          example: 'v1.0'
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
 *    ActivationPartnerBodySchema:
 *      properties:
 *        clientHierarchy:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ClientHierarchy'
 *        partnerCode:
 *          type: string
 *        partnerConfig:
 *          properties:
 *            k:
 *              type: string
 *            v:
 *              type: string
 *        partnerConnectionUrl:
 *          type: string
 *        partnerIsActive:
 *          type: boolean
 *        partnerName:
 *          type: string
 *    ClientHierarchy:
 *      properties:
 *        k:
 *          type: string
 *        v:
 *          type: array
 *          items:
 *            type: string
 */
export declare const transform: (doc: any, ret: any) => void;
export declare const activationPartnersSchema: ActivationPartnersSchema;
/**
 * @typedef ActivationPartners
 */
export declare const activationPartnersModel: mongoose.Model<IActivationPartnersModel>;
