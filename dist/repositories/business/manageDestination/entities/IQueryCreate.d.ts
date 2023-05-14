import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    destinationCode: string;
    accountType: string;
    h1: string;
    accountId: string;
    accountName: string;
    additionalInfo?: [
        {
            k: string;
            v: any;
        }
    ];
    status: string;
    currency?: string;
}
