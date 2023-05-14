import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    audienceName: string;
    surveyName: string;
    status: string;
    subStatus: string;
    sendForActivation: boolean;
    schemaVer: string;
    sizingPanel: {
        audienceReach: string;
        addressableReach: string;
        male: number;
        female: number;
        otherGender: number;
        medianAge: string;
        medianIncome: number;
        medianIncomeCurrencyCode: string;
        medianIncomeCurrencySymbol: string;
        averageIncome: number;
        averageIncomeCurrencyCode: string;
        averageIncomeCurrencySymbol: string;
    };
    h1: string;
    h2: string;
    surveyId: string;
    surveyDataProvider: string;
    reContactSurveyId?: string;
    reContactSurveyName?: string;
}
