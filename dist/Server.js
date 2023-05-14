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
// import axios from 'axios';
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const Database_1 = __importDefault(require("./libs/Database"));
const bodyParser = __importStar(require("body-parser"));
// import * as morganBody from 'morgan-body';
const error_1 = require("./libs/error");
const routes_1 = require("./libs/routes");
// import Swagger from 'libs/Swagger';
const router_1 = __importDefault(require("./router"));
class Server {
    constructor(config) {
        this.config = config;
        this.app = (0, express_1.default)();
    }
    get application() {
        return this.app;
    }
    /**
     * To enable all the setting on our express app
     * @returns -Instance of Current Object
     */
    bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initCors();
            this.initJsonParser();
            // this.initMethodOverride();
            // this.initSwagger();
            this.setupRoutes();
            return this.app;
        });
    }
    /**
     * This will Setup all the routes in the system
     *
     * @returns -Instance of Current Object
     * @memberof Server
     */
    setupRoutes() {
        this.app.use('/api', router_1.default);
        // catch 404 and forward to error handler
        this.app.use(routes_1.notFoundRoutes);
        // error handler, send stacktrace only during development
        this.app.use(error_1.errorHandler);
    }
    /**
     * This will run the server at specified port after opening up of Database
     *
     * @returns -Instance of Current Object
     */
    run() {
        // open Database & listen on port config.port
        const { port, env, mongoAdmin } = this.config;
        Database_1.default.open({ mongoUri: mongoAdmin, testEnv: false }).then(() => {
            this.app.listen(port, () => __awaiter(this, void 0, void 0, function* () {
                console.info(`Mongo service running...`);
                const message = `|| App is running at port '${port}' in '${env}' mode ||`;
                // console.info(message.replace(/[^]/g, '-'));
                console.info(message);
                // console.info(message.replace(/[^]/g, '-'));
                console.info('Press CTRL-C to stop\n');
            }));
        }).catch((err) => console.error('DB connection err::', err));
        return this;
    }
    /**
     *
     * Lets you to enable cors
     */
    initCors() {
        this.app.use((0, cors_1.default)({
            optionsSuccessStatus: 200,
            origin: JSON.parse(this.config.corsOrigin),
            // credentials: true,
        }));
    }
    initJsonParser() {
        this.app.use(bodyParser.json({ limit: '2mb' }));
        this.app.use(express_1.default.json({ limit: '2mb' }));
        this.app.use(express_1.default.urlencoded({
            extended: true,
            parameterLimit: 100000,
        }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map