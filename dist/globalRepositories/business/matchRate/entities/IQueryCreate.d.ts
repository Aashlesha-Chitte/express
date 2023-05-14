import { IQueryBaseCreate } from '../../../entities';
interface IDestinations {
    name: string;
    percent: number;
}
interface IAddressableReach {
    totalZeotapIds: string;
    zeotapModellablePercent: number;
}
export default interface ICreate extends IQueryBaseCreate {
    destinations: [IDestinations];
    geography: string;
    addressableReach: IAddressableReach;
}
export {};
