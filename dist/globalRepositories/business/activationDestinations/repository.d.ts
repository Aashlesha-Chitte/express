import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import IActivationDestinationsModel from './IModel';
export default class ActivationDestinationsRepository extends VersioningRepository<IActivationDestinationsModel, mongoose.Model<IActivationDestinationsModel>> {
    constructor();
    bulkWrite(data?: any, options?: any): Promise<IQueryCreate[]>;
    hardUpdate(data?: any, options?: any): Promise<IActivationDestinationsModel>;
    /**
     * Create new ActivationDestinations
     * @property {IQueryCreate} details - The details of ActivationDestinations.
     * @returns {ActivationDestinations}
     */
    create(options: IQueryCreate): Promise<IActivationDestinationsModel>;
    /**
     * Get all activationDestinations
     * @property {IQueryGet} query - details of the ActivationDestinations
     * @returns {ActivationDestinations}
     */
    list(query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IActivationDestinationsModel[]>;
    get(query?: any, populate?: any | null): Promise<IActivationDestinationsModel>;
}
