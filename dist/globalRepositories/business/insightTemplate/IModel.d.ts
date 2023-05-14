import IVersionableDocument from '../../versionable/IVersionableDocument';
export default interface IInsightTemplateModel extends IVersionableDocument {
    id: any;
    templateName: string;
    agency: string;
    client: string;
    clientHierarchy: {
        k: string;
        v: string[];
    };
    tabs: [
        {
            providerTabName: [string];
            aueTabName: string;
            tabDisplayOrder: number;
            isTabVisible: boolean;
            charts: [
                {
                    providerChartName: [string];
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
