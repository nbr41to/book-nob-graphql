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
