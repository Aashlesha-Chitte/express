import * as mongoose from 'mongoose';
import ISnapShotModel from './IModel';
import SnapShotSchema from './schema';
/**
 * @swagger
 * definitions:
 *   SnapshotResponse:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/SnapshotSchema'
 *   SnapshotDashboardSchema:
 *     properties:
 *       baseCount:
 *           type: integer
 *           example: 161
 *       basePercent:
 *         type: number
 *         example: 0.015901
 *       baseTotalWeight:
 *         type: number
 *         example: 740585.0778
 *       baseWeight:
 *         type: number
 *         example: 740585.0778
 *       chartType:
 *         type: string
 *         example: App Categories"
 *       frequency:
 *         type: string
 *         example: string
 *       index:
 *         type: integer
 *         example: 100
 *       index1:
 *         type: integer
 *         example: 0
 *       label:
 *         type: string
 *         example: 37
 *       targetCount:
 *         type: integer
 *         example: 0
 *       targetPercent:
 *         type: integer
 *         example: 0
 *       targetTotalWeight:
 *         type: integer
 *         example: 0
 *       targetWeight:
 *         type: integer
 *         example: 0
 *   SnapshotSchema:
 *     properties:
 *       cmslabel:
 *         type: string
 *         example: AUE_SNAPSHOTS_MODAL_AVERAGE
 *       dashboardData:
 *         type: array
 *         items:
 *           $ref: '#/definitions/SnapshotDashboardSchema'
 *       dashboardName:
 *         type: string
 *         example: Average
 *       dashboardKey:
 *         type: string
 *         example: AGE
 *   SnapshotConstantSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         $ref: '#/definitions/SnapshotConstant'
 *   SnapshotConstant:
 *     properties:
 *       id:
 *         type: string
 *         example: 62b5840f31038f3768ae4984
 *       _id:
 *         type: string
 *         example: 62b5840f31038f3768ae4984
 *       createdAt:
 *         type: string
 *         example: 2022-06-24T09:29:50.614Z
 *       createdBy:
 *         type: string
 *         example: 00u3ey33g6Ub6vdOS417
 *       isDeleted:
 *         type: boolean
 *         example: false
 *       modifiedAt:
 *         type: string
 *         example: 2022-06-24T09:29:50.614Z
 *       originalId:
 *         type: string
 *         example: 62b5840f31038f3768ae4984
 *       schemaVer:
 *         type: string
 *         example: v1.0
 *       snapShot:
 *         $ref: '#/definitions/Snapshot'
 *   Snapshot:
 *     properties:
 *       ADVERTISING:
 *         type: object
 *         properties:
 *           AGREEMENT:
 *             type: string
 *             example: ANY AGREE
 *           CATEGORY:
 *             type: string
 *             example: Lifestyle statements - NETs - Advertising
 */
export declare const snapShotSchema: SnapShotSchema;
/**
 * @typedef Snapshot
 */
export declare const snapShotModel: mongoose.Model<ISnapShotModel>;
