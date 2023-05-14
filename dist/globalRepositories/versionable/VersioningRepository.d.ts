import * as mongoose from 'mongoose';
import { IQueryBaseCreate } from '../entities';
export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    static generateObjectId(): string;
    logger: any;
    private modelDetails;
    constructor(modelDetails: any);
    /**
     * Create new Document
     * @property {IQueryBaseCreate} details - The details of record.
     * @returns {Document}
     */
    protected create(options: IQueryBaseCreate): Promise<D>;
    protected assignId(result: any): any;
    protected get(conditions?: any, populate?: any | null): Promise<D>;
    protected getAll(conditions?: any, projection?: any | null, options?: any | null, populate?: any | null): Promise<D[]>;
    protected bulkWrite(data?: any, options?: any): Promise<any>;
    protected invalidate(criteria: any, user: any): Promise<D>;
    protected update(query: any, options: any): Promise<D>;
    protected findOneAndUpdate(query: any, data: any): Promise<D>;
    protected hardUpdate(query: any, data: any): Promise<D>;
    protected aggregate(query: any[]): any;
}
