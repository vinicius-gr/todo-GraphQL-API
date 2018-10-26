import * as express from 'express';
const expressGraphQL = require('express-graphql');
import connectDB from './config';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import rootTypeDefs from './root';
import { taskTypeDefs } from './common/task/task.type';
import { taskResolvers } from './common/task/task.schema';
import Task from './common/task/taks.model';

class App {
    public app;

    constructor() {
        this.app = express();
        this.mountRoutes();
        connectDB();
    }

    private mountRoutes(): void {
        const schema = makeExecutableSchema({
            typeDefs: [rootTypeDefs, taskTypeDefs],
            resolvers: merge(taskResolvers),
        });

        this.app.use('/tasks', expressGraphQL({
            schema: schema,
            graphiql: true
        }));
    }
}

export default new App().app;
