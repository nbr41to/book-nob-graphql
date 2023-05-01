import { graphql } from '@/gql';

export const UPDATE_BOOK = graphql(/* GraphQL */ `
  mutation UpdateBook(
    $id: Int!
    $title: String!
    $description: String
    $author_id: uuid!
  ) {
    update_book(
      where: { id: { _eq: $id } }
      _set: { title: $title, description: $description, author_id: $author_id }
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
