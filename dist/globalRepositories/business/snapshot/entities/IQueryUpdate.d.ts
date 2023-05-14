import { IQueryBaseUpdate } from '../../../entities';
export default interface IQueryUpdate extends IQueryBaseUpdate {
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
