import * as mongoose from 'mongoose';
import VersioningRepository from 'globalRepositories/versionable/VersioningRepository';
import { IQueryCreate } from './entities';
import IInsightTemplateModel from './IModel';
export default class InsightTemplateRepository extends VersioningRepository<IInsightTemplateModel, mongoose.Model<IInsightTemplateModel>> {
    constructor();
    /**
     * Create new insightTemplate
     * @property {IQueryCreate} details - The details of Admin.
     * @returns {Admin}
     */
    createTemplate(options: IQueryCreate): Promise<IInsightTemplateModel>;
    /**
     * Get all insightTemplate
     * @property {IQueryGet} query - details of the Admin
     * @returns {Admin}
     */
    list(query?: any, projection?: any | null, options?: any, populate?: any | null): Promise<IInsightTemplateModel[]>;
}
