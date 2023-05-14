import IVersionableDocument from '../../versionable/IVersionableDocument';
interface IClientHierarchy {
    k: string;
    v: [string];
}
interface IPartnerConfig {
    k: string;
    v: string;
}
export default interface IActivationPartnersModel extends IVersionableDocument {
    id: any;
    clientHierarchy: [IClientHierarchy];
    modelType: string;
    partnerConnectionUrl?: string;
    partnerCode: string;
    partnerIsActive: boolean;
    partnerConfig?: IPartnerConfig;
    partnerName: string;
    schemaVer: string;
}
export {};
