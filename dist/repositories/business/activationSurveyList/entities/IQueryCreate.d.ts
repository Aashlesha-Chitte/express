import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    surveyId: string;
    surveyName: string;
    canActivate: boolean;
}
