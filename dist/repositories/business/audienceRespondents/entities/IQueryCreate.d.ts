import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    audienceId: string;
    respondentIds: [string];
    schemaVer: string;
}
