import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import { linkSchema } from './schemas/';
import { schema } from './schemas/schema';
import { userResolver } from './resolvers/user.resolver';
import { userModel } from './models/user.model';
import { diaryModel } from './models/diary.model';
import { roleModel } from './models/role.model';
import { diaryEntryModel } from './models/diaryentry.model';

const app = express();
app.use(cors());


const server = new ApolloServer({
  typeDefs: [

  linkSchema,schema

  ],
  resolvers: [
    userResolver
  ],
  
});


server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, async () => {
  await mongoose.connect('mongodb://ds233596.mlab.com:33596/mapa', {
    // TODO: use credentials from env vars!
    user: 'mapa',
    pass: 'i9-Af4xeq57C#34'
  });
});
