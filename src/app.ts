import * as express from 'express';
import * as bodyParser from 'body-parser';

import connectDB from './configDB';
import taskSchema from './common/task/task.index';

const expressGraphQL = require('express-graphql');

class App {
    public app: express.Application;

    constructor () {
      this.app = express();
      this.mountRoutes();
      this.config();
      connectDB();
    }

    private mountRoutes (): void {
      this.app.use('/tasks', expressGraphQL({
        schema: taskSchema,
        graphiql: true
      }));
    }

    private config (): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;