"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const envVars = process.env;
let configurations = Object.freeze({
    corsOrigin: envVars.CORS_ORIGIN,
    env: envVars.NODE_ENV,
    mongoAdmin: envVars.MONGO_ADMIN_URL,
    port: envVars.PORT,
    serverURL: envVars.SERVER_URL,
    envName: envVars.NODE_ENV,
});
exports.default = configurations;
//# sourceMappingURL=configuration.js.map