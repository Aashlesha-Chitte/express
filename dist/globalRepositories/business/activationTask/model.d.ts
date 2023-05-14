import * as mongoose from 'mongoose';
import IActivationTaskModel from './IModel';
import ActivationTaskSchema from './schema';
export declare const transform: (doc: any, ret: any) => void;
export declare const activationTaskSchema: ActivationTaskSchema;
/**
 * @typedef ActivationTask
 */
export declare const activationTaskModel: mongoose.Model<IActivationTaskModel>;
