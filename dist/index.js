"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * !!! config should be imported before importing any other file !!!
 * */
// import 'module-alias/register';
/* tslint:disable-next-line */
const configuration_1 = __importDefault(require("./config/configuration"));
const Server_1 = __importDefault(require("./Server"));
const server = new Server_1.default(configuration_1.default);
server.bootstrap();
server.run();
//# sourceMappingURL=index.js.map