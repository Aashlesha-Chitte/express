import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import IActivationSurveyListModel from './IModel';
export default class ActivationSurveyRepository extends VersioningRepository<IActivationSurveyListModel, mongoose.Model<IActivationSurveyListModel>> {
    constructor();
    bulkWrite(data?: any): Promise<IQueryCreate[]>;
    /**
     * Get all activationSurveyList
     * @property {IQueryGet} query - details of the ActivationSurvey
     * @returns {ActivationSurvey}
     */
    list(query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IActivationSurveyListModel[]>;
}
