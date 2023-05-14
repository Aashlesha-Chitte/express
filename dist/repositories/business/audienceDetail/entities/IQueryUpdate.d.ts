import { IQueryBaseUpdate } from '../../../entities';
export default interface IQueryUpdate extends IQueryBaseUpdate {
    audienceId: string;
    questionId: string;
    answer: string;
    type: string;
    itemId: string;
    schemaVer: string;
    description: string;
    operatorType: string;
    children: any[];
    isIncluded: boolean;
    answerDetails: {
        answerId: string;
        description: string;
        isSelected: boolean;
    };
    useMinMaxMatch: boolean;
    minMatch: number;
    maxMatch: number;
}
