import IConnectionConfiguration from 'libs/IConnectionConfiguration';
import VersioningRepository from 'tenantRepositories/versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete } from './entities';
import IAudienceRespondentIdsModel from './IModel';
export default class AudienceRespondentIdsRepository extends VersioningRepository<IAudienceRespondentIdsModel> {
    constructor();
    /**
     * Get audience.
     * @property {string} id - _id of the record
     * @returns {Audience}
     */
    get(connectionConfiguration: IConnectionConfiguration, query?: any, populate?: any | null): Promise<IAudienceRespondentIdsModel>;
    /**
     * Create new audience
     * @property {string} name - The name of record.
     * @returns {AudienceRespondents}
     */
    create(connectionConfiguration: IConnectionConfiguration, options: IQueryCreate): Promise<IAudienceRespondentIdsModel>;
    /**
     * Delete AudienceREspondentIds
     * @property {string} body.name - The name of record.
     * @returns {Audience}
     */
    delete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IAudienceRespondentIdsModel>;
}
