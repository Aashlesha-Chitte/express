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
exports.matchRatesModel = exports.matchRateSchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
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
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.matchRateSchema = new schema_1.default({
    collection: 'matchRates',
    toJSON: {
        transform: exports.transform,
        versionKey: false,
        virtuals: true,
    },
    toObject: {
        transform: exports.transform,
        versionKey: false,
        virtuals: true,
    },
});
/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
exports.matchRateSchema.pre('save', (next) => {
    next();
});
exports.matchRateSchema.index({ deletedAt: 1, geography: 1 }, { name: 'match_rate_schema_index_1' });
/**
 * Methods
 */
exports.matchRateSchema.method({});
/**
 * Statics
 */
exports.matchRateSchema.statics = {};
/**
 * @typedef MatchRates
 */
exports.matchRatesModel = mongoose.model('MatchRates', exports.matchRateSchema, 'MatchRates');
//# sourceMappingURL=model.js.map