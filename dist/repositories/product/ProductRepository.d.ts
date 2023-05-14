import * as mongoose from 'mongoose';
import IProductModel from './IProductModel';
import VersionableRepository from '../versionable/VersionableRepository';
export default class ProductRepository extends VersionableRepository<IProductModel, mongoose.Model<IProductModel>> {
    constructor();
    findOne(query: any): mongoose.Query<mongoose.Document<IProductModel, {}>, mongoose.Document<IProductModel, {}>>;
    find(query: any, projection?: any, options?: any): mongoose.Query<mongoose.Document<IProductModel, {}>[], mongoose.Document<IProductModel, {}>>;
    count(): mongoose.Query<number, mongoose.Document<IProductModel, {}>>;
    create(data: any): Promise<IProductModel>;
    insertMany(data: any): Promise<mongoose.HydratedDocument<IProductModel>[]>;
}
