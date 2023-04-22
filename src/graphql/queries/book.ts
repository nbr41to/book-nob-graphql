import { gql } from '@apollo/client';

export const GET_BOOK_CONNECTIONS = gql`
  query GetBookConnections {
    book_connection {
      edges {
        cursor
        node {
          author_id
          created_at
          description
          id
          title
          updated_at
          author {
            name
            id
            email
          }
        }
      }
    }
  }
`;

export const CREATE_BOOK = gql`
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
`;

export const UPDATE_BOOK = gql`
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
`;
