import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import IActivationPartnersModel from './IModel';
export default class ActivationPartnerRepository extends VersioningRepository<IActivationPartnersModel, mongoose.Model<IActivationPartnersModel>> {
    constructor();
    bulkWrite(data?: any, options?: any): Promise<IQueryCreate[]>;
    /**
     * Get all activationPartners
     * @property {IQueryGet} query - details of the ActivationPartners
     * @returns {ActivationPartners}
     */
    list(query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IActivationPartnersModel[]>;
    /**
     * Create new ActivationPartner
     * @property {IQueryCreate} details - The details of ActivationPartner.
     * @returns {ActivationPartner}
     */
    create(details: IQueryCreate): Promise<IActivationPartnersModel>;
    get(query?: any, populate?: any | null): Promise<IActivationPartnersModel>;
}
