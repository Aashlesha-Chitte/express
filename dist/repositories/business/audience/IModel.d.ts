import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IAudienceModel extends IVersionableDocument {
    id: any;
    audienceName: string;
    createdVia: string;
    surveyName: string;
    status: string;
    subStatus: string;
    sendForActivation?: boolean;
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
        respondents: number;
    };
    h1: string;
    h2: string;
    surveyId: string;
    surveyDataProvider: string;
    schemaVer: string;
    trackingId: string;
    reContactSurveyId?: string;
    reContactSurveyName?: string;
}
