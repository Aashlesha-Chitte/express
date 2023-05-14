"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger = __importStar(require("@gdo-enablers/dan-logger"));
const config_1 = __importDefault(require("config"));
const moment = __importStar(require("moment"));
const mongoose = __importStar(require("mongoose"));
// import IConnectionConfiguration from '../../libs/tenantCatalogue/ICustomConnectionConfiguration';
class ConnectionRepository {
    static closeConnection(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { connection } = ConnectionRepository.connectionList.get(clientId);
            if (connection) {
                yield connection.close((res, arg) => {
                    logger.log(`close connection cb response ::: ${res} ,arg :: ${arg} `);
                });
            }
        });
    }
    constructor() {
        this.options = {
            maxPoolSize: config_1.default.maxPoolSize,
            minPoolSize: config_1.default.minPoolSize,
            socketTimeoutMS: 60000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        mongoose.set('debug', true);
        if (config_1.default.env !== 'test') {
            setInterval(() => {
                if (ConnectionRepository.connectionList.size) {
                    Array.from(ConnectionRepository.connectionList).forEach(([clientid, { timestamp }]) => {
                        logger.debug(`Connection closing started for client ${clientid}`);
                        const backdate = moment(new Date()).subtract(15, 'm').toDate();
                        if (moment(timestamp).isSameOrBefore(backdate)) {
                            logger.debug(`Connection closed for client ${clientid}`);
                            ConnectionRepository.closeConnection(clientid);
                        }
                    });
                }
            }, 15 * 60 * 1000);
        }
    }
    getConnection(connectionConfiguration) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbName = this.getDbName(connectionConfiguration);
            const { clientId } = connectionConfiguration;
            let { connection } = ConnectionRepository.connectionList.get(clientId) || { connection: '' };
            if (connection && (connection.readyState === 0 || connection.readyState === 3)) {
                logger.debug('Versioning repository:: Invalid connection found. removing it and creating new one. ClientID', clientId, connection.readyState);
                ConnectionRepository.connectionList.delete(clientId);
                connection = yield this.createConnection(connectionConfiguration);
            }
            else if (!connection) {
                connection = yield this.createConnection(connectionConfiguration);
            }
            ConnectionRepository.connectionList.set(clientId, { connection, timestamp: new Date() });
            return connection.useDb(dbName, { useCache: true });
        });
    }
    createConnection(connectionConfiguration) {
        return __awaiter(this, void 0, void 0, function* () {
            const { host, port, userName: user, password, clientId, credential } = connectionConfiguration;
            logger.debug('Versioning Repository: No Connection available, Creating new connection', clientId);
            let serverUrl;
            let options;
            if (credential && credential.indexOf('mongodb+srv') > -1) {
                const connectionString = this.getAtlasConnectionString(user, password, host, port);
                serverUrl = connectionString.serverUrl;
                options = connectionString.options;
            }
            else {
                serverUrl = credential;
            }
            const combinedOptions = Object.assign(Object.assign({}, this.options), options);
            const connection = yield mongoose.createConnection(serverUrl, combinedOptions);
            ConnectionRepository.connectionList.set(clientId, { connection, timestamp: new Date() });
            connection.on('disconnecting', () => {
                logger.log(`disconnecting ${clientId}`);
            });
            connection.on('close', () => {
                logger.log(`close ${clientId}`);
                ConnectionRepository.connectionList.delete(clientId);
            });
            connection.on('disconnected', () => {
                logger.log(`disconnected ${clientId}`);
            });
            return connection;
        });
    }
    getDbName(connectionConfiguration) {
        return connectionConfiguration.dbName;
    }
    getAtlasConnectionString(user, password, host, port) {
        const options = {
            authSource: 'admin',
            pass: password,
            user,
        };
        let serverUrl = 'mongodb+srv://' + user + ':' + password + '@' + host;
        if (port && port.length > 0) {
            serverUrl = serverUrl + ':' + port.toString();
        }
        serverUrl = serverUrl + '/test?retryWrites=true&w=majority';
        return { serverUrl, options };
    }
}
ConnectionRepository.connectionList = new Map();
exports.default = new ConnectionRepository();
//# sourceMappingURL=ConnectionRepository.js.map