import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IReContactSurveyModel extends IVersionableDocument {
    id: any;
    masterSurveyName: string;
    masterSurveyId: string;
    recontactSurveyList: [
        {
            surveyName: string;
            surveyId: string;
            clientCode: string;
            isActivate?: boolean;
        }
    ];
}
