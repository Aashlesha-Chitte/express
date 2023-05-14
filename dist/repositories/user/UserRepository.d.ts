import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    constructor();
    static createObejectId(): string;
    findOne(query: any): mongoose.Query<mongoose.EnforceDocument<IUserModel, {}>, mongoose.EnforceDocument<IUserModel, {}>>;
    find(query: any, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<IUserModel, {}>[], mongoose.EnforceDocument<IUserModel, {}>>;
    count(): mongoose.Query<number, mongoose.EnforceDocument<IUserModel, {}>>;
    create(data: any): Promise<IUserModel>;
    update(data: any): Promise<IUserModel>;
    delete(filter: any, data: any): mongoose.Query<any, mongoose.EnforceDocument<D, {}>, {}, mongoose.EnforceDocument<D, {}>>;
}
