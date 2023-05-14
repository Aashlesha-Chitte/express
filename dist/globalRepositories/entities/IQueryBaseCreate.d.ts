import IQueryEntity from './IQueryEntity';
export default interface IQueryBaseCreate extends IQueryEntity {
    id?: string;
    user?: string;
    query?: IQueryBaseCreate[];
    createdAt?: any;
}
