import { ApolloServer } from 'apollo-server-lambda';
import { MongoClient } from 'mongodb';
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

export const handler = server.createHandler();

console.log('created handler');

MongoClient.connect('mongodb://ds233596.mlab.com:33596/mapa', {
  auth: {
    user: 'mapa',
    password: 'i9-Af4xeq57C#34',
  },
  bufferCommands: false,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(mongoose => {
  console.log('connected to mongodb');
}).catch(e => {
  console.error('error connecting to mongodb', e)
  process.exit();
})
