import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    id: string;
    audienceId: string;
    partnerId: string;
    status: string;
    destinationId: string;
    description: string;
    activationResources: [
        {
            k: string;
            v: any;
        }
    ];
}
