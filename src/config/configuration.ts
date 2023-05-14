import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';

const envVars: NodeJS.ProcessEnv = process.env;

let configurations = Object.freeze({
  corsOrigin: envVars.CORS_ORIGIN,
  env: envVars.NODE_ENV,
  mongoAdmin: envVars.MONGO_ADMIN_URL,
  port: envVars.PORT,
  serverURL: envVars.SERVER_URL,
  envName: envVars.NODE_ENV,
}) as IConfig;

export default configurations;
