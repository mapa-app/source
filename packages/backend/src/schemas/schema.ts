import { gql } from 'apollo-server';

export const schema = gql`
  type User {
    id: ID!
    name: String!
    diary: Diary!
    role: Role!
  }

  type Role{
      type: String!
  }

  type Diary {
    user: User!
    diaryEntries: [DiaryEntry!]!
  }

  type DiaryEntry {
    text: String!
    date: String!
  }

  input DiaryEntryInput {
    text: String!
    date: String!
  }

  type DiaryEntryPayload{
    entries:[DiaryEntry]
  }


  input UserInput{
    id: ID!
  }

  extend type Query {
    user(id: ID!): User!
    login(name: String!, password: String!): String!
    diary(user:UserInput!):Diary!
  }

  extend type Mutation {
    createUser(name: String!, password: String!): User!
    addDiaryEntry(id:ID!,entry:DiaryEntryInput!):Boolean!
  }
`;
