import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import ISnapShotModel from './IModel';
export default class SnapShotConstantDataRepository extends VersioningRepository<ISnapShotModel, mongoose.Model<ISnapShotModel>> {
    constructor();
    /**
     * Get Snapshot
     * @property {IQueryGet} query - details of the Snapshot
     * @returns {Snapshot}
     */
    get(query?: any): Promise<ISnapShotModel>;
    /**
     * Create/Update Snapshot
     * @property {IQueryCreate} details - The details of Snapshot.
     * @returns {Snapshot}
     */
    update(query: any, data: IQueryCreate): Promise<ISnapShotModel>;
}
