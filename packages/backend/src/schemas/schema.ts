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

  type Parent {
    id: ID!
    name: String!
    color: String!
  }

  type Child {
    id: ID!
    name: String!
    birthdate: String!
    color: String!
    gender: Gender!
    image: String
  }

  type Family {
    id: ID!
    state: FamilyState!
    parents: [ID!]!
    children: [ID]!
    diary: [ID]!
  }

  type DiaryEntry {
    id: ID!
    title: String!
    date: String!
    text: String
    parents: [ID!]!
    children: [ID]!
  }

  input DiaryEntryInput {
    text: String!
    date: String!
    image: String!,
    parents: [ID]!
    children: [ID]!
  }

  extend type Query {
    login(name: String!, password: String!): Parent
    familyOfParent(parentID: ID!): Family!
    familyOfChild(childID: ID!): Family!
  }

  extend type Mutation {
    createChild(name: String!, birthdate: String!, color: String!, gender: Gender!): Child
    createParent(name: String!, password: String!, color: String!): Parent
    createFamily(state: FamilyState!): Family
    addChild(familyID: ID!, childID: ID!): Boolean!
    addParent(familyID: ID!, parentID: ID!): Boolean!
    addDiaryEntry(familyID: ID!, entry: DiaryEntryInput!): Boolean!
  }
`;
