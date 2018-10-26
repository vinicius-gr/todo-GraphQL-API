import * as express from 'express';
import * as bodyParser from "body-parser";

import connectDB from './config';

const expressGraphQL = require('express-graphql');

import { makeExecutableSchema } from 'graphql-tools';
import { taskTypeDefs } from './common/task/task.type';
import { taskResolvers } from './common/task/task.schema';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.mountRoutes();
        this.config();
        connectDB();
    }

    private mountRoutes(): void {
        const schema = makeExecutableSchema({
            typeDefs: taskTypeDefs,
            resolvers: taskResolvers,
        });

        this.app.use('/tasks', expressGraphQL({
            schema: schema,
            graphiql: true
        }));
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;