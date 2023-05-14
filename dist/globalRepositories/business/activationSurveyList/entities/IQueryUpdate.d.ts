import { IQueryBaseUpdate } from '../../../entities';
export default interface IUpdate extends IQueryBaseUpdate {
    surveyId: string;
    surveyName: string;
    canActivate: boolean;
}
