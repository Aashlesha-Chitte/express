import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface ISnapShotModel extends IVersionableDocument {
    id: any;
    snapShot: [
        {
            tag: string;
            details: [
                {
                    k: string;
                    v: any;
                }
            ];
        }
    ];
    schemaVer: string;
}
