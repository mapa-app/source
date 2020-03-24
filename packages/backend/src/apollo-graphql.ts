import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { connect } from 'mongoose';

import { linkSchema } from './schemas/';
import { schema } from './schemas/schema';
import { parentResolver } from './resolvers/parent.resolver';
import { childResolver } from './resolvers/child.resolver';
import { diaryEntryResolver } from './resolvers/diary-entry.resolver';
import { familyResolver } from './resolvers/family.resolver';

dotenv.config();
const { MONGO_HOST, MONGO_USER, MONGO_PASS } = process.env;

const app = express();
app.use(cors());

const server = new ApolloServer({
  playground: true,
  typeDefs: [
    linkSchema,
    schema
  ],
  resolvers: [
    diaryEntryResolver,
    familyResolver,
    childResolver,
    parentResolver
  ]
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, async () => {
  try {
    await connect(MONGO_HOST, {
      user: MONGO_USER,
      pass: MONGO_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connected to database ${ MONGO_HOST }`);
  } catch (error) {
    console.error(error);
  }
});
