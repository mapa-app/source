import { gql } from 'apollo-server';

export const schema = gql`
  type User {
    id: ID!
    name: String!
    diary: Diary!
    role: String!
    family:Family!
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

  type Family{
    name:String!
    members:User!
      
 
  }

  type DiaryEntryPayload{
    entries:[DiaryEntry]
  }
  

  input FamilyInput{
    name:String!
  }

  input UserInput{
    id: ID!
  }

  input RoleInput{
    type:String!
  }

  extend type Query {
    user(id: ID!): User!
    login(name: String!, password: String!): String!
    diary(user:UserInput!):Diary!
    family(name:String!):Family!
  }

  extend type Mutation {
    createUser(name: String!, password: String!,role:RoleInput!): User!
    createFamily(name:String!):Family!
    addDiaryEntry(id:ID!,entry:DiaryEntryInput!): Boolean!
    addMember(id:ID!,family:FamilyInput!):Family!
  }
`;
