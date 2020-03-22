
import { ApolloServer } from 'apollo-server-lambda';
import { connect } from 'mongoose';
import { linkSchema } from '../schemas/';
import { schema } from '../schemas/schema';
import { userResolver } from '../resolvers/user.resolver';
import { parentResolver } from '../resolvers/parent.resolver';
import { childResolver } from '../resolvers/child.resolver';
import { diaryResolver } from '../resolvers/diary.resolver';
import { diaryEntryResolver } from '../resolvers/diaryEntry.resolver';
import { familyResolver } from '../resolvers/family.resolver';

const server = new ApolloServer({
  typeDefs: [
    linkSchema,
    schema
  ],
  resolvers: [
    userResolver,
    diaryEntryResolver,
    diaryResolver,
    familyResolver,
    childResolver,
    parentResolver
  ]
});

connect('mongodb://ds233596.mlab.com:33596/mapa', {
  // TODO: use credentials from env vars!
  user: 'mapa',
  pass: 'i9-Af4xeq57C#34'
});

export const handler = server.createHandler();
