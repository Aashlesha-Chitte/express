import * as mongoose from 'mongoose';
import ILoggerModel from './ILoggerModel';
import VersionableRepository from '../versionable/VersionableRepository';
export default class LoggerRepository extends VersionableRepository<ILoggerModel, mongoose.Model<ILoggerModel>> {
    constructor();
    findOne(query: any): mongoose.Query<mongoose.Document<ILoggerModel, {}>, mongoose.Document<ILoggerModel, {}>>;
    find(query: any, projection?: any, options?: any): mongoose.Query<mongoose.Document<ILoggerModel, {}>[], mongoose.Document<ILoggerModel, {}>>;
    count(): mongoose.Query<number, mongoose.Document<ILoggerModel, {}>>;
    create(data: any): Promise<ILoggerModel>;
}
