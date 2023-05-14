import IQueryEntity from './IQueryEntity';
export default interface IQueryBaseUpdate extends IQueryEntity {
    id?: string;
    originalId?: string;
    query?: IQueryBaseUpdate[];
    user?: string;
}
