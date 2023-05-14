import IConnectionConfiguration from 'libs/IConnectionConfiguration';
import VersioningRepository from 'tenantRepositories/versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryList, IQueryUpdate } from './entities';
import IAudienceModel from './IModel';
export default class AudienceRepository extends VersioningRepository<IAudienceModel> {
    constructor();
    /**
     * Get audience list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {Audience[]}
     */
    list(connectionConfiguration: IConnectionConfiguration, query?: any, options?: IQueryList, projection?: any | null, populate?: any | null): Promise<IAudienceModel[]>;
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    get(connectionConfiguration: IConnectionConfiguration, query?: any): Promise<IAudienceModel>;
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    aggregateQueries(connectionConfiguration: IConnectionConfiguration, query?: any): Promise<IAudienceModel[]>;
    /**
     * Create new audience
     * @property {string} name - The name of record.
     * @returns {Audience}
     */
    create(connectionConfiguration: IConnectionConfiguration, options: IQueryCreate): Promise<IAudienceModel>;
    /**
     * Update new audience
     * @property {string} name - The name of record.
     * @returns {Audience}
     */
    update(connectionConfiguration: IConnectionConfiguration, options: IQueryUpdate): Promise<IAudienceModel>;
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
    delete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IAudienceModel>;
    /**
     * Hard Delete audience
     * @property {string} body.name - The name of record.
     * @returns {audience}
     */
    hardDelete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete): Promise<IAudienceModel>;
    hardUpdate(connectionConfiguration: IConnectionConfiguration, query?: any, data?: any): Promise<any>;
    bulkWrite(connectionConfiguration: IConnectionConfiguration, data?: any, options?: any): Promise<IQueryCreate[]>;
}
