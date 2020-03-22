import { gql } from 'apollo-server-lambda';

export const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;
