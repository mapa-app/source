import { gql } from 'apollo-server';

export const schema = gql`

 
  enum Gender {
    MALE
    FEMALE
  }
  enum FamilyState{
    TOGETHER
    DIVORCED
    PATCHED
    SINGLE
  }

  type Child {
    id: ID!
    name: String!
    birthdate:String!
    gender:Gender!
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
    state:FamilyState!
    parents:[String!]
    children:[String!]
  }

  extend type Query {
    login(name: String!, password: String!): Parent!
    diary(userID:ID!):Diary!
    family(name:String!):Family!
    myFamily(userID:ID!):Family!
  }

  extend type Mutation {
    createChild(name: String!, password: String!,color:String!,birthdate:String!,gender:Gender!,image:String!): Child!
    createParent(name: String!, password: String!,color:String!):Parent!
    createFamily(name:String!,state:FamilyState!):Family!
    addDiaryEntry(userID:ID!,entry:DiaryEntryInput!): Boolean!
    addFamilyMember(userID:ID!,familyID:ID!):Family!
  }
`;
