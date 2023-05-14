import IVersionableDocument from '../../versionable/IVersionableDocument';
import IAudienceModel from '../audience/IModel';
export default interface IAudienceDetailModel extends IVersionableDocument {
    id: any;
    audience?: IAudienceModel;
    audienceId: string;
    questionId: string;
    answer: string;
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
    h1: string;
    h2: string;
    minMatch: number;
    maxMatch: number;
    schemaVer: string;
}
