import { IQueryBaseUpdate } from '../../../entities';
interface IClientHierarchy {
    k: string;
    v: [string];
}
interface IPartnerConfig {
    k: string;
    v: string;
}
export default interface IUpdate extends IQueryBaseUpdate {
    clientHierarchy: [IClientHierarchy];
    partnerConnectionUrl?: string;
    partnerCode: string;
    partnerIsActive: boolean;
    partnerConfig?: IPartnerConfig;
    partnerName: string;
    schemaVer: string;
}
export {};
