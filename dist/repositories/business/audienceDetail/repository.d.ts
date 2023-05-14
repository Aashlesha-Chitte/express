import IConnectionConfiguration from 'libs/IConnectionConfiguration';
import VersioningRepository from 'tenantRepositories/versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryUpdate } from './entities';
import IAudienceDetailModel from './IModel';
export default class AudienceDetailRepository extends VersioningRepository<IAudienceDetailModel> {
    constructor();
    /**
     * Get audienceDetails list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {AudienceDetail[]}
     */
    list(connectionConfiguration: IConnectionConfiguration, query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IAudienceDetailModel[]>;
    /**
     * Get AudienceDetail.
     * @property {string} id - _id of the record
     * @returns {AudienceDetail}
     */
    get(connectionConfiguration: IConnectionConfiguration, query?: any, populate?: any | null): Promise<IAudienceDetailModel>;
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    aggregateQueries(connectionConfiguration: IConnectionConfiguration, query?: any): Promise<IAudienceDetailModel[]>;
    /**
     * Create new AudienceDetail
     * @property {string} name - The name of record.
     * @returns {AudienceDetail}
     */
    create(connectionConfiguration: IConnectionConfiguration, options: IQueryCreate): Promise<IAudienceDetailModel>;
    /**
     * Update new AudienceDetail
     * @property {string} name - The name of record.
     * @returns {AudienceDetail}
     */
    update(connectionConfiguration: IConnectionConfiguration, options: IQueryUpdate): Promise<IAudienceDetailModel>;
    /**
     * Update new AudienceDetail
     * @property {string} name - The name of record.
     * @returns {AudienceDetail}
     */
    updateWithQuery(connectionConfiguration: IConnectionConfiguration, query: any, options: IQueryUpdate): Promise<IAudienceDetailModel>;
    /**
     * Get AudienceDetail count.
     * @returns {AudienceDetailCount}
     *
     */
    getCount(connectionConfiguration: IConnectionConfiguration, query: any): Promise<number>;
    /**
     * Delete AudienceDetail
     * @property {string} body.name - The name of record.
     * @returns {AudienceDetail}
     */
    delete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IAudienceDetailModel>;
    deleteByQuery(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IAudienceDetailModel>;
    /**
     * Hard Delete AudienceDetail
     * @property {string} body.name - The name of record.
     * @returns {AudienceDetail}
     */
    hardDelete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete): Promise<IAudienceDetailModel>;
}
