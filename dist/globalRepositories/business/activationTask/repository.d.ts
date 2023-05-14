import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate, IQueryUpdate } from './entities';
import IActivationTaskModel from './IModel';
export default class ActivationTaskRepository extends VersioningRepository<IActivationTaskModel, mongoose.Model<IActivationTaskModel>> {
    constructor();
    /**
     * Create new activationTask
     * @property {IQueryCreate} options - The details of ActivationTask.
     * @returns {ActivationTask}
     */
    createActivationTask(query: any, options: IQueryCreate): Promise<IActivationTaskModel>;
    /**
     * Get all activationTask
     * @property {IQueryGet} query - details of the ActivationTask
     * @returns {ActivationTask}
     */
    list(query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IActivationTaskModel[]>;
    get(query?: any, populate?: any | null): Promise<IActivationTaskModel>;
    update(query: any, data: IQueryUpdate): Promise<IActivationTaskModel>;
    bulkWrite(data?: any, options?: any): Promise<IQueryUpdate[]>;
    /**
     * Delete activation task
     * @property {string}
     * @returns {}
     */
    delete(query: any, user: any): Promise<IQueryUpdate>;
}
