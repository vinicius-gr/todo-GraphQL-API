import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schemas/task';
import resolvers from '/resolvers/task';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

mongoose.connect('mongodb://localhost/test');

const Task = mongoose.model('Task', {id: String, desc: String, done: Boolean, createdAt: Date, lastModifiedAt: Date});

const PORT = process.env.PORT | 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Task } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);