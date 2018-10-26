import * as express from 'express';
const expressGraphQL = require('express-graphql');
import connectDB from './config';
import { makeExecutableSchema } from 'graphql-tools';
import { taskTypeDefs } from './common/task/task.type';
import { taskResolvers } from './common/task/task.schema';

class App {
    public app;

    constructor() {
        this.app = express();
        this.mountRoutes();
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
}

export default new App().app;
