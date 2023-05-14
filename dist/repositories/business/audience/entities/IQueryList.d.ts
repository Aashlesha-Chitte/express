import { IQueryBaseList } from '../../../entities';
export default interface IQueryList extends IQueryBaseList {
    limit?: number;
    skip?: number;
    name?: string;
    sort?: object;
}
