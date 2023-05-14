import { IQueryBaseUpdate } from '../../../entities';
export default interface IQueryUpdate extends IQueryBaseUpdate {
    id: any;
    destinationCode?: string;
    accountType?: string;
    schemaVer?: string;
    destinationId?: string;
    h1?: string;
    accountId?: string;
    accountName?: string;
    additionalInfo?: [
        {
            k: string;
            v: any;
        }
    ];
    status?: string;
    currency?: string;
}
