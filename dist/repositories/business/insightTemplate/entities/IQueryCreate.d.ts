import { IQueryBaseCreate } from '../../../entities';
export default interface ICreate extends IQueryBaseCreate {
    templateName: string;
    agency: string;
    client: string;
    clientHierarchy: {
        k: string;
        v: string[];
    };
    tabs: [
        {
            providerTabName: string;
            aueTabName: string;
            tabDisplayOrder: number;
            isTabVisible: boolean;
            charts: [
                {
                    providerChartName: string;
                    aueChartName: string;
                    chartDisplayOrder: number;
                    isChartVisible: boolean;
                    chartOrientation: string;
                    chartType: string;
                }
            ];
        }
    ];
    provider: string;
    schemaVer: string;
}
