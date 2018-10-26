import { makeExecutableSchema } from 'graphql-tools';

import rootTypeDefs from '../root';
import taskTypeDefs from './task.type';
import taskResolvers from './task.resolver';

export default makeExecutableSchema({
  typeDefs: taskTypeDefs,
  resolvers: taskResolvers
});
