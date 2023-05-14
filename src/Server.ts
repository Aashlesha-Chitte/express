// import axios from 'axios';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import Database from './libs/Database';
import * as bodyParser from 'body-parser';

// import * as morganBody from 'morgan-body';

import { errorHandler } from './libs/error';
import { notFoundRoutes } from './libs/routes';
// import Swagger from 'libs/Swagger';
import router from './router';

export default class Server {
  private app: Application;

  constructor(private config: any) {
    this.app = express();
  }

  get application() {
    return this.app;
  }

  /**
   * To enable all the setting on our express app
   * @returns -Instance of Current Object
   */
  public async bootstrap() {
    this.initCors();
    this.initJsonParser();
    // this.initMethodOverride();
    // this.initSwagger();
    this.setupRoutes();

    return this.app;
  }

  /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
  public setupRoutes() {
    this.app.use(
      '/api',
      router,
    );

    // catch 404 and forward to error handler
    this.app.use(notFoundRoutes);

    // error handler, send stacktrace only during development
    this.app.use(errorHandler);
  }
  /**
   * This will run the server at specified port after opening up of Database
   *
   * @returns -Instance of Current Object
   */
  public run() {
    // open Database & listen on port config.port
    const { port, env, mongoAdmin } = this.config;
    Database.open({ mongoUri: mongoAdmin, testEnv: false }).then(() => {
      this.app.listen(port, async () => {
        console.info(`Mongo service running...`);
        const message = `|| App is running at port '${port}' in '${env}' mode ||`;
        // console.info(message.replace(/[^]/g, '-'));
        console.info(message);
        // console.info(message.replace(/[^]/g, '-'));
        console.info('Press CTRL-C to stop\n');
      });
    }).catch((err) => console.error('DB connection err::', err));
    return this;
  }
  /**
   *
   * Lets you to enable cors
   */
  private initCors() {
    this.app.use(cors({
      optionsSuccessStatus: 200,
      origin: JSON.parse(this.config.corsOrigin),
      // credentials: true,
    }));
  }
  private initJsonParser() {
    this.app.use(bodyParser.json({ limit: '2mb' }));
    this.app.use(express.json({ limit: '2mb' }));
    this.app.use(express.urlencoded({
      extended: true,
      parameterLimit: 100000,
    }));
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  // /**
  //  * Compression of the output
  //  */
  // private initCompress() {
  //   this.app.use(compress());
  // }

  // private initHeaders() {
  //   this.app.use((req, res, next) => {
  //   res.setHeader('Content-Security-Policy', 'font-src "self"');
  //   res.setHeader('Cache-control', 'no-store, no-cache');
  //   res.setHeader('x-request-id', req.headers['x-request-id'] || '');
  //   res.setHeader('x-b3-traceid', req.headers['x-b3-traceid'] || this.logger.getUUID());
  //   res.setHeader('x-b3-spanid', req.headers['x-b3-spanid'] || '');
  //   res.setHeader('x-b3-parentspanid', req.headers['x-b3-parentspanid'] || '');
  //   res.setHeader('x-b3-sampled', req.headers['x-b3-sampled'] || '');
  //   res.setHeader('x-b3-flags', req.headers['x-b3-flags'] || '');
  //   next();
  //   });
  // }

  // private initAxiosHeaders() {
  //   this.app.use((req, res, next) => {
  //     axios.defaults.headers.common['x-request-id'] = req.headers['x-request-id'] || '';
  //     axios.defaults.headers.common['x-b3-traceid'] = req.headers['x-b3-traceid'] || this.logger.getUUID();
  //     axios.defaults.headers.common['x-b3-spanid'] = req.headers['x-b3-spanid'] || '';
  //     axios.defaults.headers.common['x-b3-parentspanid'] = req.headers['x-b3-parentspanid'] || '';
  //     axios.defaults.headers.common['x-b3-sampled'] = req.headers['x-b3-sampled'] || '';
  //     axios.defaults.headers.common['x-b3-flags'] = req.headers['x-b3-flags'] || '';
  //     next();
  //   });
  // }

  // /**
  //  * Parse Cookie header and populate req.cookies with an object keyed by the cookie names
  //  */
  // private initCookieParser() {
  //   this.app.use(cookieParser());
  // }

  // /**
  //  *
  //  * Helmet helps you secure your Express apps by setting various HTTP headers.
  //  */
  // private initHelmet() {
  //   this.app.use(helmet({
  //     contentSecurityPolicy: false,
  //   }));
  // }

  // private initAuth(authProvider) {
  //   const authManager: AuthManager = AuthManager.getInstance();
  //   authManager.init(authProvider);
  // }
  // /**
  //  *  - Parses urlencoded bodies & JSON
  //  */


  // /**
  //  * Enabling Logger for Development Environment
  //  */
  // private initLogger() {
  //   morganBody(this.app);
  // }

  // /**
  //  *
  //  * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
  //  */
  // private initMethodOverride() {
  //   this.app.use(methodOverride());
  // }

  // /**
  //  * Initialize Swagger
  //  */
  // private initSwagger() {
  //   const { swaggerDefinition, swaggerUrl } = this.config;

  //   const swaggerSetup = new Swagger();

  //   // JSON route
  //   this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter({
  //     swaggerDefinition,
  //   }));

  //   // UI route
  //   const { serve, setup } = swaggerSetup.getUI(swaggerUrl);

  //   this.app.use(swaggerUrl, serve, setup);
  // }
}
