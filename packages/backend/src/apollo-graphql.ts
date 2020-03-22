import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { connect } from 'mongoose';

import { linkSchema } from './schemas/';
import { schema } from './schemas/schema';
import { userResolver } from './resolvers/user.resolver';

const app = express();
app.use(cors());

const server = new ApolloServer({
  playground: true,
  typeDefs: [
    linkSchema,
    schema
  ],
  resolvers: [
    userResolver
  ]
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, async () => {
  connect('mongodb://104.248.102.90:27017', {
    // TODO: use credentials from env vars!
    user: 'mapa',
    pass: 'i9-Af4xeq57C#34',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(c => {
    console.log('success')
  }).catch(e => {
    console.log(e);
  });
});
