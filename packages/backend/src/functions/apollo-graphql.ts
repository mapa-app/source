import { ApolloServer } from 'apollo-server-lambda';
import { connect } from 'mongoose';
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
  ]
});

connect('mongodb://ds233596.mlab.com:33596/mapa', {
  // TODO: use credentials from env vars!
  user: 'mapa',
  pass: 'i9-Af4xeq57C#34',
  bufferCommands: false,
  bufferMaxEntries: 0,
  useNewUrlParser: true

}).then(mongoose => {
  console.log('success');
}).catch(e => {
  console.error('error', e)
  process.exit()
})

export const handler = server.createHandler();
