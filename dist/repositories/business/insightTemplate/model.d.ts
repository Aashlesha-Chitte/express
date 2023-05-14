import * as mongoose from 'mongoose';
import IInsightTemplateModel from './IModel';
import InsightTemplateSchema from './schema';
/**
 * InsightTemplate Schema
 */
/**
 * @swagger
 * definitions:
 *   TargetElement:
 *     properties:
 *       answer:
 *         type: string
 *         example: 'Use the Internet (on any device)'
 *       type:
 *         type: string
 *         example: 1
 *       itemType:
 *         type: string
 *         example: 1
 *       itemId:
 *         type: string
 *         example:  780dcaf360b3d_2bd9daad76d6c
 *       description:
 *         type: string
 *         example: "Media consumption - Frequency of usage (M1A/W1A/NP1A)"
 *       questionId:
 *         type: string
 *         example: 79709
 *       isNegative:
 *         type: boolean
 *         example: false
 *       relation:
 *         type: number
 *         example: 2
 *       targetElementValues:
 *         type: array
 *         items:
 *           type: object
 *           $ref: '#/definitions/TargetElementValue'
 *   TargetElementValue:
 *     properties:
 *       dimensionArrayId:
 *         type: string
 *         example: 7529735
 *       description:
 *         type: string
 *         example: "Every day"
 *       isSelected:
 *         type: boolean
 *         example: true
 *   DigitalInterest:
 *     properties:
 *       dashboardName:
 *         type: string
 *       charts:
 *         $ref: '#/definitions/SnapshotDashboardSchema'
 *   DigitalInterestList:
 *     type: array
 *     items:
 *       $ref: '#/definitions/DigitalInterest'
 *   DigitalInterestListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/DigitalInterestList'
 *   DigitalInterestPostBodySchema:
 *     properties:
 *       input:
 *         type: array
 *         default: []
 *         items:
 *           type: object
 *           $ref: '#/definitions/TargetElement'
 *       tabNames:
 *         type: array
 *         items:
 *           type: string
 *           example: DIGITAL INTEREST
 *   ClientHierarchySchema:
 *     properties:
 *       k:
 *         type: string
 *         example: 'h1 || h2'
 *       v:
 *         type: string
 *         example: 'All'
 *   ChartsSchema:
 *     properties:
 *       providerChartName:
 *         type: array
 *         items:
 *           type: string
 *       aueChartName:
 *         type: string
 *       aueChartNameCMSLabel:
 *         type: string
 *       chartDisplayOrder:
 *         type: number
 *       isChartVisible:
 *         type: boolean
 *       chartOrientation:
 *         type: string
 *       chartType:
 *         type: string
 *   TabsSchema:
 *     properties:
 *       providerTabName:
 *         type: array
 *         items:
 *           type: string
 *       aueTabName:
 *         type: string
 *       aueTabNameCMSLabel:
 *         type: string
 *       tabDisplayOrder:
 *         type: number
 *       isTabVisible:
 *         type: boolean
 *       surveyIds:
 *         type: array
 *         items:
 *           type: string
 *       charts:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ChartsSchema'
 *   InsightTemplatePostSchema:
 *     properties:
 *       templateName:
 *         type: string
 *       agency:
 *         type: string
 *       client:
 *         type: string
 *       provider:
 *         type: string
 *       brands:
 *         type: string
 *       markets:
 *         type: string
 *       tabs:
 *         type: array
 *         items:
 *           $ref: '#/definitions/TabsSchema'
 *   InsightTemplateSchema:
 *     properties:
 *       id:
 *         type: string
 *       templateName:
 *         type: string
 *       agency:
 *         type: string
 *         example: 'All'
 *       client:
 *         type: string
 *         example: 'All'
 *       clientHierarchy:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ClientHierarchySchema'
 *       tabs:
 *         type: array
 *         items:
 *           $ref: '#/definitions/TabsSchema'
 *       provider:
 *         type: string
 *         example: 'CSS'
 *       schemaVer:
 *         type: string
 *         example: 'v1.0'
 *       createdBy:
 *         type: string
 *       createdAt:
 *         type: string
 *       isDeleted:
 *         type: boolean
 *       originalId:
 *         type: string
 *       modifiedAt:
 *         type: string
 *   InsightTemplateSuccess:
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
 *           $ref: '#/definitions/InsightTemplateSchema'
 *   InsightTemplates:
 *     type: array
 *     items:
 *       $ref: '#/definitions/InsightTemplateSchema'
 *   InsightTemplateListResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/InsightTemplates'
 */
export declare const transform: (doc: any, ret: any) => void;
export declare const insightTemplateSchema: InsightTemplateSchema;
/**
 * @typedef InsightTemplate
 */
export declare const insightTemplateModel: mongoose.Model<IInsightTemplateModel>;
