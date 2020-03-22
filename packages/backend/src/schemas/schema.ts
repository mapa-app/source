import { gql } from 'apollo-server-lambda';

export const schema = gql`
  type Child {
    id: ID!
    name: String!
    birthdate:String!
    gender:Boolean!
    color:String!
    image:String!
  }


  type Parent {
    id: ID!
    name: String!
    color:String!
  }

  type Diary {
    family: Family!
    diaryEntries: [DiaryEntry!]
  }

  type DiaryEntry {
    text: String!
    date: String!
    parents:[Parent!]
    children:[Child!]
  }

  input DiaryEntryInput {
    text: String!
    date: String!
    image:String!,
    parents:[String!]
    children:[String!]
  }



  type Family{
    name:String!
    state:String!
    parents:[Parent!]
    children:[Child!]
  }


  type User{
    id:String!
    name:String!
    color:String!


  }


  extend type Query {

    login(name: String!, password: String!): User!
    diary(id:ID!):Diary!
    family(name:String!):Family!
    myFamily(id:ID!):Family!
  }

  extend type Mutation {
    createChild(name: String!, password: String!,color:String!,birthdate:String!,gender:Boolean!,image:String!): User!
    createParent(name: String!, password: String!,color:String!):Parent!
    createFamily(name:String!,state:String!):Family!
    addDiaryEntry(id:ID!,entry:DiaryEntryInput!): Boolean!
    addMember(id:ID!,name:String!):Family!
  }
`;
