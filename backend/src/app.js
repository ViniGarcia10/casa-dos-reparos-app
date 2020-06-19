import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // for parsing application/json
    this.server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
