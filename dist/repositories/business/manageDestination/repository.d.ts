import IConnectionConfiguration from 'libs/IConnectionConfiguration';
import VersioningRepository from 'tenantRepositories/versionable/VersioningRepository';
import { IQueryCreate, IQueryDelete, IQueryList, IQueryUpdate } from './entities';
import IManageDestinationModel from './IModel';
export default class ManageDestinationRepository extends VersioningRepository<IManageDestinationModel> {
    constructor();
    /**
     * Get manageDestination list.
     * @property {number} skip - Number of records to be skipped.
     * @property {number} limit - Limit number of records to be returned.
     * @returns {ManageDestination[]}
     */
    list(connectionConfiguration: IConnectionConfiguration, query?: any, options?: IQueryList, projection?: any | null, populate?: any | null): Promise<IManageDestinationModel[]>;
    /**
     * Get manageDestination.
     * @property {string} id - _id of the record
     * @returns {ManageDestination}
     */
    get(connectionConfiguration: IConnectionConfiguration, query?: any): Promise<IManageDestinationModel>;
    /**
     * Create new manageDestination
     * @property {string} destinationName - The name of record.
     * @returns {ManageDestination}
     */
    create(connectionConfiguration: IConnectionConfiguration, options: IQueryCreate): Promise<IManageDestinationModel>;
    /**
     * Update new manageDestination
     * @property {string} destinationName - The name of record.
     * @returns {ManageDestination}
     */
    update(connectionConfiguration: IConnectionConfiguration, options: IQueryUpdate): Promise<IManageDestinationModel>;
    /**
     * Get manageDestination count.
     * @returns {ManageDestinationCount}
     *
     */
    getCount(connectionConfiguration: IConnectionConfiguration, query: any): Promise<number>;
    /**
     * Delete manageDestination
     * @property {string} id - originalId of record.
     * @returns {ManageDestination}
     */
    delete(connectionConfiguration: IConnectionConfiguration, query: IQueryDelete, option?: any): Promise<IManageDestinationModel>;
    bulkWrite(connectionConfiguration: IConnectionConfiguration, data?: any, options?: any): Promise<IQueryCreate[]>;
}
