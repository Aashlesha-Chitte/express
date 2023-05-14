import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IAudienceCountModel extends IVersionableDocument {
    id: any;
    count: string;
    prefix: string;
}
