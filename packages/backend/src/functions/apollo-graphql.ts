const { ApolloServer, gql } = require('apollo-server-lambda')
import mongoose from 'mongoose';
import { linkSchema } from '../schemas/';
import { schema } from '../schemas/schema';
import { userResolver } from '../resolvers/user.resolver';

const server = new ApolloServer({
 typeDefs: [
    linkSchema,
    schema
    ],
    resolvers: [
      userResolver
    ],
})

mongoose.connect('mongodb://ds233596.mlab.com:33596/mapa', {
  // TODO: use credentials from env vars!
  user: 'mapa',
  pass: 'i9-Af4xeq57C#34'
});

exports.handler = server.createHandler()
