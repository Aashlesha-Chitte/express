import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IActivationSurveyListModel extends IVersionableDocument {
    id: any;
    surveyId: string;
    surveyName: string;
    canActivate: boolean;
}
