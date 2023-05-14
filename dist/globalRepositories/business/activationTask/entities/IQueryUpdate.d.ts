import { IQueryBaseUpdate } from '../../../entities';
export default interface IUpdate extends IQueryBaseUpdate {
    partnerCode?: string;
    activationId?: string;
    destinationCode?: string;
    status?: string;
    user?: string;
}
