import { graphql } from '@/gql';

export const DELETE_AUTHOR = graphql(/* GraphQL */ `
  mutation DeleteAuthor($id: uuid!) {
    delete_author(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`);
