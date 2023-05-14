import * as mongoose from 'mongoose';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model;
    constructor(model: M);
    protected static createObjectId(): string;
    protected find(query: any, projection?: any, options?: any): mongoose.Query<mongoose.Document<D, {}>[], mongoose.Document<D, {}>>;
    protected count(): mongoose.Query<number, mongoose.Document<D, {}>>;
    protected create(data: any): Promise<D>;
}
