
import { ApolloServer } from 'apollo-server-lambda';
import { connect } from 'mongoose';
import { linkSchema } from '../schemas/';
import { schema } from '../schemas/schema';
import { userResolver } from '../resolvers/user.resolver';
import { diaryResolver } from '../resolvers/diary.resolver';
import { diaryEntryResolver } from '../resolvers/diaryEntry.resolver';
import { familyModel } from 'src/models/family.model';
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
    familyResolver
  ]
});

connect('mongodb://ds233596.mlab.com:33596/mapa', {
  // TODO: use credentials from env vars!
  user: 'mapa',
  pass: 'i9-Af4xeq57C#34'
});

export const handler = server.createHandler();
