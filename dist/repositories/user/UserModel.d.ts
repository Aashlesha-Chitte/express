import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';
export declare const userSchema: UserSchema;
export declare const userModel: mongoose.Model<IUserModel>;
