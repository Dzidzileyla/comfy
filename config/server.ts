import express = require('express');
import { Server } from 'typescript-rest';
import { AddressInfo } from 'net';

import http = require('http');
import path = require('path');
import cors = require('cors');

export class ApiServer {
  private server: http.Server = null as any;
  public PORT: number = (process.env.PORT as any) || 8081;

  constructor(private readonly app: express.Application = express()) {
    this.app.use(cors());

    this.app.use(
      express.static(path.join(process.cwd(), 'public'), {
        maxAge: 31557600000,
      })
    );

    const apiRouter: express.Router = express.Router();
    Server.loadServices(apiRouter, ['../controller/*'], __dirname);

    this.app.use(apiRouter);
  }

  public async start(): Promise<ApiServer> {
    return new Promise<ApiServer>((resolve, reject) => {
      this.server = this.app.listen(this.PORT, () => {
        const addressInfo = this.server.address() as AddressInfo;

        const address =
          addressInfo.address === '::' ? '0.0.0.0' : addressInfo.address;

        // tslint:disable-next-line:no-console
        console.log(`Listening to http://${address}:${addressInfo.port}`);

        return resolve(this);
      });
    });
  }

  public async stop(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (this.server) {
        this.server.close(() => {
          return resolve(true);
        });
      } else {
        return resolve(false);
      }
    });
  }

}
