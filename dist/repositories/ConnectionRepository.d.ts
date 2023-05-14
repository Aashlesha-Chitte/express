import * as mongoose from 'mongoose';
declare class ConnectionRepository {
    static closeConnection(clientId: any): Promise<void>;
    protected static connectionList: any;
    private options;
    constructor();
    getConnection(connectionConfiguration: any): Promise<any>;
    protected createConnection(connectionConfiguration: any): Promise<mongoose.Connection>;
    protected getDbName(connectionConfiguration: any): string;
    private getAtlasConnectionString;
}
declare const _default: ConnectionRepository;
export default _default;
