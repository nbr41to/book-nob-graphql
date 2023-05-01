import { graphql } from '@/gql';

export const DELETE_BOOK = graphql(/* GraphQL */ `
  mutation DeleteBook($id: Int!) {
    delete_book(where: { id: { _eq: $id } }) {
      returning {
        id
        title
        description
        author_id
      }
    }
  }
`);
