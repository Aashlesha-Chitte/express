import { IQueryBaseUpdate } from '../../../entities';
interface IDestinations {
    name: string;
    percent: number;
}
interface IAddressableReach {
    totalZeotapIds: string;
    zeotapModellablePercent: number;
}
export default interface IUpdate extends IQueryBaseUpdate {
    destinations: [IDestinations];
    geography: string;
    addressableReach: IAddressableReach;
}
export {};
