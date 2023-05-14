import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    audienceId: string;
    questionId: string;
    answer: string;
    schemaVer: string;
    type: string;
    itemId: string;
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
