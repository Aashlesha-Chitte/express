import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
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
