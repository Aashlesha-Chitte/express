import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    accountType: [
        {
            accountCode: string;
            accountName: string;
            input: [
                {
                    label: string;
                    isRequired: boolean;
                    validation: string;
                    default: [string];
                }
            ];
        }
    ];
    activationServiceIsActive: boolean;
    activationServiceUrl: string;
    clientHierarchy: {
        k: string;
        v: [string];
    };
    currency: [string];
    destinationCode: string;
    destinationConfig?: [
        {
            clientCode: string;
            config: [
                {
                    k: string;
                    v: string;
                }
            ];
            geography: string;
        }
    ];
    destinationConnectionUrl?: string;
    destinationIsActive: string;
    destinationName: string;
    partnerId: string;
    schemaVer: string;
}
