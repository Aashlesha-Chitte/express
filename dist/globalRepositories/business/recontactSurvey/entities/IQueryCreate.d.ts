import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
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
