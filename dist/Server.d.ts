import express from 'express';
export default class Server {
    private config;
    private app;
    constructor(config: any);
    get application(): express.Application;
    /**
     * To enable all the setting on our express app
     * @returns -Instance of Current Object
     */
    bootstrap(): Promise<express.Application>;
    /**
     * This will Setup all the routes in the system
     *
     * @returns -Instance of Current Object
     * @memberof Server
     */
    setupRoutes(): void;
    /**
     * This will run the server at specified port after opening up of Database
     *
     * @returns -Instance of Current Object
     */
    run(): this;
    /**
     *
     * Lets you to enable cors
     */
    private initCors;
    private initJsonParser;
}
