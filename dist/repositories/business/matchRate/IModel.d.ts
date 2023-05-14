import IVersionableDocument from '../../versionable/IVersionableDocument';
interface IDestinations {
    name: string;
    code?: string;
    percent: number;
}
interface IAddressableReach {
    totalZeotapIds: string;
    zeotapModellablePercent: number;
}
export default interface IMatchRatesModel extends IVersionableDocument {
    destinations: [IDestinations];
    geography: string;
    limitReach?: string;
    defaultReachPercent?: string;
    addressableReach: IAddressableReach;
}
export {};
