import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IActivationTaskModel extends IVersionableDocument {
    id: any;
    activationId: string;
    activationUuid: string;
    clientCode: string;
    destinationCode: string;
    partnerCode: string;
    schemaVer: string;
    status: string;
    tenantId: string;
    zeotapId: string;
}
