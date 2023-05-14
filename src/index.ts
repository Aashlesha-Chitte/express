/*
 * !!! config should be imported before importing any other file !!!
 * */
// import 'module-alias/register';
/* tslint:disable-next-line */
import config from './config/configuration';
import Server from './Server';

const server = new Server(config);
server.bootstrap();
server.run();
