import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import { linkSchema } from './schemas';

import { userSchema } from './schemas/user.schema';
import { userResolver } from './resolvers/user.resolver';
import { userModel } from './models/user.model';

const app = express();
app.use(cors());

const getUser = async req => {
  const token = req.headers['token'];
  if (token) {
    try {
      return await jwt.verify(token, 'riddlemethis');
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

const server = new ApolloServer({
  typeDefs: [
    linkSchema,
    userSchema
  ],
  resolvers: [
    userResolver
  ],
  context: async ({ req }) => {
    if (req) {
      const me = await getUser(req);

      return {
        me,
        models: {
          userModel
        }
      };
    }
  }
});


server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, async () => {
  await mongoose.connect('mongodb://ds233596.mlab.com:33596/mapa', {
    // TODO: use credentials from env vars!
    user: 'mapa',
    pass: 'i9-Af4xeq57C#34'
  });
});
