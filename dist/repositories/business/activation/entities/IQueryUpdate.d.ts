import { IQueryBaseUpdate } from '../../../entities';
export default interface IQueryUpdate extends IQueryBaseUpdate {
    originalId?: string;
    status?: string;
    partnerId?: string;
    destinationId?: string;
    activationResources?: [
        {
            k?: string;
            v?: string;
        }
    ];
}
