import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    activationId?: string;
    activationUuid?: string;
    clientCode?: string;
    destinationCode?: string;
    partnerCode?: string;
    schemaVer?: string;
    status: string;
    tenantId?: string;
    zeotapId?: string;
}
