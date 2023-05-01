import { graphql } from '@/gql';

export const CREATE_AUTHOR = graphql(/* GraphQL */ `
  mutation CreateAuthor($name: String!, $email: String!) {
    insert_author(objects: { name: $name, email: $email }) {
      returning {
        id
        name
        email
      }
    }
  }
`);
