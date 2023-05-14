import IConnectionConfiguration from 'libs/IConnectionConfiguration';
import VersioningRepository from 'tenantRepositories/versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryUpdate } from './entities';
import IActivationModel from './IModel';
export default class ActivationRepository extends VersioningRepository<IActivationModel> {
    constructor();
    /**
     * Get audience list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {Audience[]}
     */
    list(connectionConfiguration: IConnectionConfiguration, query?: any, options?: any, projection?: any | null, populate?: any | null): Promise<IActivationModel[]>;
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    get(connectionConfiguration: IConnectionConfiguration, query?: any): Promise<IActivationModel>;
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    aggregateQueries(connectionConfiguration: IConnectionConfiguration, query?: any): Promise<IActivationModel[]>;
    /**
     * Create new audience
     * @property {string} name - The name of record.
     * @returns {Audience}
     */
    create(connectionConfiguration: IConnectionConfiguration, options: IQueryCreate): Promise<IActivationModel>;
    /**
     * Update new audience
     * @property {string} name - The name of record.
     * @returns {Audience}
     */
    update(connectionConfiguration: IConnectionConfiguration, options: IQueryUpdate): Promise<IActivationModel>;
    /**
     * Get Audience count.
     * @returns {AudienceCount}
     *
     */
    getCount(connectionConfiguration: IConnectionConfiguration, query: any): Promise<number>;
    /**
     * Delete Audience
     * @property {string} body.name - The name of record.
     * @returns {Audience}
     */
    delete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IActivationModel>;
    deleteByQuery(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IActivationModel>;
    /**
     * Hard Delete audience
     * @property {string} body.name - The name of record.
     * @returns {audience}
     */
    hardDelete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete): Promise<IActivationModel>;
    hardUpdate(connectionConfiguration: IConnectionConfiguration, query?: any, data?: any): Promise<any>;
    bulkWrite(connectionConfiguration: IConnectionConfiguration, data?: any, options?: any): Promise<IQueryCreate[]>;
}
