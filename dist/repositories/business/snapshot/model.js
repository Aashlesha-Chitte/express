"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapShotModel = exports.snapShotSchema = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
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
exports.snapShotSchema = new schema_1.default({
    collection: 'Snapshot',
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
        virtuals: true,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
exports.snapShotSchema.pre('save', (next) => {
    // this.modifiedAt = new Date();
    next();
});
/**
 * Indicies
 */
exports.snapShotSchema.index({ deletedAt: 1 }, { name: 'snap_shot_schema_index_1' });
/**
 * Methods
 */
exports.snapShotSchema.method({});
/**
 * Statics
 */
exports.snapShotSchema.statics = {};
/**
 * @typedef Snapshot
 */
exports.snapShotModel = mongoose.model('Snapshot', exports.snapShotSchema, 'Snapshot', true);
//# sourceMappingURL=model.js.map