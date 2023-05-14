import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryUpdate } from './entities';
import IAudienceCountModel from './IModel';
export default class AudienceCountSchemaRepository extends VersioningRepository<IAudienceCountModel, mongoose.Model<IAudienceCountModel>> {
    constructor();
    /**
     * Create/Update Audience Count
     * @property {IQueryCreate} details - The details of AudienceCount.
     * @returns {AudienceCount}
     */
    findOneAndUpdate(query: any, data: any): Promise<IAudienceCountModel>;
    hardUpdate(query: any, data: IQueryUpdate): Promise<IAudienceCountModel>;
}
