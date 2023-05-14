import { IQueryBaseGet } from '../../../entities';
export default interface IQueryGet extends IQueryBaseGet {
    geography: string;
}
