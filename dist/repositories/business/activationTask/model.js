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
exports.activationTaskModel = exports.activationTaskSchema = exports.transform = void 0;
const mongoose = __importStar(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
const transform = (doc, ret) => {
    delete ret._id;
};
exports.transform = transform;
exports.activationTaskSchema = new schema_1.default({
    collection: 'activationTask',
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
exports.activationTaskSchema.pre('save', (next) => {
    next();
});
exports.activationTaskSchema.index({ deletedAt: 1, activationId: 1 }, { name: 'activation_task_schema_index_1' });
exports.activationTaskSchema.index({ deletedAt: 1, clientCode: 1, partnerCode: 1, status: 1 }, { name: 'activation_task_schema_index_2' });
/**
 * Methods
 */
exports.activationTaskSchema.method({});
/**
 * Statics
 */
exports.activationTaskSchema.statics = {};
/**
 * @typedef ActivationTask
 */
exports.activationTaskModel = mongoose.model('ActivationTask', exports.activationTaskSchema, 'ActivationTask');
//# sourceMappingURL=model.js.map