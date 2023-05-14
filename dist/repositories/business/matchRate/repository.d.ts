import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import IMatchRatesModel from './IModel';
export default class MatchRateRepository extends VersioningRepository<IMatchRatesModel, mongoose.Model<IMatchRatesModel>> {
    constructor();
    /**
     * Get all matchRates
     * @property {IQueryGet} query - details of the matchRates
     * @returns {matchRates}
     */
    get(query?: any, projection?: any | null): Promise<IMatchRatesModel>;
    /**
     * Create and update new matchRates
     * @property {IQueryCreate} details - The details of matchRates.
     * @returns {matchRAtes}
     */
    updateMatchRates(query: any, options: IQueryCreate): Promise<IMatchRatesModel>;
}
