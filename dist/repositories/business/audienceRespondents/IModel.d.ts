import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IAudienceRespondentIdsModel extends IVersionableDocument {
    id: any;
    audienceId: string;
    respondentIds: [string];
    schemaVer: string;
}
