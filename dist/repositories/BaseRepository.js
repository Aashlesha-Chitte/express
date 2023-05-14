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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const dan_common_1 = require("@gdo-enablers/dan-common");
const config_1 = __importDefault(require("config"));
// libs
const logger_1 = __importDefault(require("libs/logger"));
const utilities_1 = require("libs/utilities");
const mongoose = __importStar(require("mongoose"));
// import { constants } from "os";
class BaseRepository {
    static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    static updateConnectionList(clientCode) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.logger.debug('::::::Updating connection list cache for clientCode:::::::::', clientCode);
            const isConnectionCacheUpdated = BaseRepository.connectionList.delete(clientCode) || false;
            // this.logger.debug('::::::connection list cache updated:::::::::', isConnectionCacheUpdated);
            return isConnectionCacheUpdated;
        });
    }
    constructor(modelDetails) {
        this.options = {
            maxPoolSize: config_1.default.maxPoolSize,
            minPoolSize: config_1.default.minPoolSize,
            socketTimeoutMS: config_1.default.socketTimeoutMS,
        };
        this.modelDetails = modelDetails;
        this.logger = (0, logger_1.default)('BaseRepository');
    }
    create(connectionConfiguration, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            const { user: createdBy = '' } = options, query = __rest(options, ["user"]);
            this.logger.debug('BaseRepository - create:', JSON.stringify(rest), JSON.stringify(query));
            const id = BaseRepository.generateObjectId();
            const model = this.getModel(connectionConfiguration);
            const queryObj = this.addMultiTenancyIds(connectionConfiguration, query);
            const newModel = new model(Object.assign(Object.assign({}, queryObj), { _id: id, createdBy,
                id, originalId: id }));
            const result = yield newModel.save();
            return this.assignId((0, utilities_1.leanObject)(result.toObject()));
        });
    }
    insertMany(connectionConfiguration, docs, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - insertMany:', JSON.stringify(rest), JSON.stringify(options));
            const model = this.getModel(connectionConfiguration);
            docs = docs.map((x) => this.addMultiTenancyIds(connectionConfiguration, x));
            const result = yield model.insertMany(docs, options);
            return result.map((x) => this.assignId((0, utilities_1.leanObject)(x.toObject())));
        });
    }
    getById(connectionConfiguration, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - getById:', JSON.stringify(rest), id);
            const model = this.getModel(connectionConfiguration);
            let conditions = { _id: new mongoose.Types.ObjectId(id) };
            conditions = this.addMultiTenancyIds(connectionConfiguration, conditions);
            const result = yield model.findOne(conditions).lean();
            return this.assignId((0, utilities_1.leanObject)(result));
        });
    }
    aggregate(connectionConfiguration, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - aggregate:', JSON.stringify(rest), query);
            const model = this.getModel(connectionConfiguration);
            // const conditions = this.addMultiTenancyIds(connectionConfiguration, query);
            return yield model.aggregate(query).collation({ locale: 'en' }).exec();
        });
    }
    getByIds(connectionConfiguration, ids) {
        const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
        this.logger.debug('BaseRepository - getByIds:', JSON.stringify(rest), JSON.stringify(ids));
        return this.getAll(connectionConfiguration, { _id: { $in: ids } });
    }
    get(connectionConfiguration, conditions, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - get:', JSON.stringify(rest), JSON.stringify(conditions), populate);
            const model = this.getModel(connectionConfiguration);
            conditions = this.addMultiTenancyIds(connectionConfiguration, conditions);
            const result = populate
                ? yield model
                    .findOne(conditions)
                    .populate(populate)
                    .lean()
                : yield model.findOne(conditions).lean();
            return this.assignId((0, utilities_1.leanObject)(result));
        });
    }
    getAll(connectionConfiguration, conditions, projection, options, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - getAll:', JSON.stringify(rest), JSON.stringify(conditions), JSON.stringify(projection), JSON.stringify(options), JSON.stringify(populate));
            const model = this.getModel(connectionConfiguration);
            conditions = this.addMultiTenancyIds(connectionConfiguration, conditions);
            return populate
                ? (yield model
                    .find(conditions, projection, options)
                    .populate(populate)
                    .lean()).map((0, utilities_1.leanObject)(this.assignId))
                : (yield model.find(conditions, projection, options).lean()).map((0, utilities_1.leanObject)(this.assignId));
        });
    }
    count(connectionConfiguration, conditions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - count:', JSON.stringify(rest), JSON.stringify(conditions));
            const model = this.getModel(connectionConfiguration);
            conditions = this.addMultiTenancyIds(connectionConfiguration, conditions);
            const result = yield model.countDocuments(conditions).lean();
            return this.assignId((0, utilities_1.leanObject)(result));
        });
    }
    update(connectionConfiguration, conditions, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
            this.logger.debug('BaseRepository - update:', JSON.stringify(rest), JSON.stringify(conditions), JSON.stringify(options));
            const model = this.getModel(connectionConfiguration);
            conditions = this.addMultiTenancyIds(connectionConfiguration, conditions);
            const result = yield model.updateOne(conditions, Object.assign({}, options)).lean();
            return this.assignId((0, utilities_1.leanObject)(result));
        });
    }
    delete(connectionConfiguration, query) {
        const { userName, password } = connectionConfiguration, rest = __rest(connectionConfiguration, ["userName", "password"]);
        this.logger.debug('BaseRepository - delete:', JSON.stringify(rest), query.id);
        return this.update(connectionConfiguration, { _id: query.id }, { isSoftDeleted: true });
    }
    getModel(connectionConfiguration) {
        const connection = this.getConnection(connectionConfiguration);
        const { modelName, schema, collectionName, skipInit } = this.modelDetails;
        return connection.model(modelName, schema, collectionName, skipInit);
    }
    getConnection(connectionConfiguration) {
        const dbName = this.getDbName(connectionConfiguration);
        const { host, port, userName: user, password, clientId } = connectionConfiguration;
        let { options } = connectionConfiguration;
        options = options || {};
        options.authSource = 'admin';
        options.user = user;
        options.pass = password;
        let combinedOptions = Object.assign(Object.assign({}, this.options), options);
        let serverUrl;
        let connection;
        connection = BaseRepository.connectionList.get(clientId);
        if (!connection) {
            if (config_1.default.envName === 'dev' || config_1.default.envName === 'test') {
                serverUrl = connectionConfiguration.credential;
                combinedOptions = Object.assign(Object.assign({}, this.options), { family: 4 });
            }
            else {
                if (connectionConfiguration.credential && connectionConfiguration.credential.indexOf('mongodb+srv') > -1) {
                    serverUrl = this.getAtlasConnectionString(user, password, host, port);
                }
                else {
                    serverUrl = connectionConfiguration.credential;
                }
            }
            connection = mongoose.createConnection(serverUrl, combinedOptions);
            connection.on('connected', () => {
                // logger.debug('::::::::connected to mongodb::::::::::');
            });
            connection.on('disconnected', () => {
                // logger.debug(':::::::::::connection disconnected::::::::');
            });
            connection.on('error', (e) => {
                // logger.debug(':::::::::::::errorrrrrrrr::::::::::::::', e);
            });
            BaseRepository.connectionList.set(clientId, connection);
        }
        return connection.useDb(dbName, { useCache: true });
    }
    getDbName(connectionConfiguration) {
        return connectionConfiguration.dbName;
    }
    assignId(result) {
        if (result && result.originalId && result.id !== result.originalId) {
            result._id = result.id;
            result.id = result.originalId;
        }
        return result;
    }
    addMultiTenancyIds(connectionConfiguration, options) {
        if (connectionConfiguration.operationalDataType !== dan_common_1.constants.OperationalDataTypes.ClientData) {
            return options;
        }
        if (config_1.default.envName === 'dev' || config_1.default.envName === 'test') {
            return options;
        }
        const { tenantId, clientId } = connectionConfiguration;
        options = Object.assign(Object.assign({}, options), { clientCode: clientId, tenantId });
        return options;
    }
    getAtlasConnectionString(user, password, host, port) {
        let serverUrl = 'mongodb+srv://' + user + ':' + password + '@' + host;
        if (port && port.length > 0) {
            serverUrl = serverUrl + ':' + port.toString();
        }
        serverUrl = serverUrl + '/test?retryWrites=true&w=majority';
        return serverUrl;
    }
}
// protected modelType: Model<D>;
BaseRepository.dummyField = 'initial value';
BaseRepository.connectionList = new Map();
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map