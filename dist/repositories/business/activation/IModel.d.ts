import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IActivationModel extends IVersionableDocument {
    id: any;
    audienceId: string;
    audienceName: string;
    partnerId: string;
    status: string;
    destinationId: string;
    description: string;
    errMsg?: string;
    h1: string;
    h2: string;
    activationResources: [
        {
            k: string;
            v: any;
        }
    ];
    trackingId: string;
}
