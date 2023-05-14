import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import IReContactSurveySchema from './IModel';
export default class ReContactSurveyRepository extends VersioningRepository<IReContactSurveySchema, mongoose.Model<IReContactSurveySchema>> {
    constructor();
    bulkWrite(data?: any, options?: any): Promise<IQueryCreate[]>;
    /**
     * Create new ReContactSurvey
     * @property {IQueryCreate} details - The details of ReContactSurvey.
     * @returns {ReContactSurvey}
     */
    create(options: IQueryCreate): Promise<IReContactSurveySchema>;
    /**
     * Get all recontactSurvey
     * @property {IQueryGet} query - details of the ReContactSurvey
     * @returns {ReContactSurvey}
     */
    list(query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IReContactSurveySchema[]>;
    get(query?: any, populate?: any | null): Promise<IReContactSurveySchema>;
    update(query: any, options: IQueryCreate): Promise<IReContactSurveySchema>;
    findOneAndUpdate(query: any, data: any): Promise<IReContactSurveySchema>;
}
