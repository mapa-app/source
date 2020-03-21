import { gql } from 'apollo-server';

export const userSchema = gql`
  type User {
    id: ID!
    name: String!
  }

  type Token {
    token: String!
  }

  extend type Query {
    user(id: ID!): User!
    login(name: String!, password: String!): Token!
  }

  extend type Mutation {
    createUser(name: String!, password: String!): User!
  }
`;
