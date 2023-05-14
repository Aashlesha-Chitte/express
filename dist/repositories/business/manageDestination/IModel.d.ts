import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IManageDestinationModel extends IVersionableDocument {
    id: any;
    destinationCode: string;
    partnerCode: string;
    accountType: string;
    schemaVer: string;
    destinationId: string;
    h1: string;
    accountId: string;
    accountName: string;
    additionalInfo: [
        {
            k: string;
            v: any;
        }
    ];
    status: string;
    currency: string;
}
