import { graphql } from '@/gql';

export const CREATE_BOOK = graphql(/* GraphQL */ `
  mutation CreateBook(
    $title: String!
    $description: String
    $author_id: uuid!
  ) {
    insert_book(
      objects: {
        title: $title
        description: $description
        author_id: $author_id
      }
    ) {
      returning {
        id
        title
        description
        author_id
        author {
          id
          name
        }
      }
    }
  }
`);
