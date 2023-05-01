import { graphql } from '@/gql';

export const GET_BOOK_CONNECTIONS = graphql(/* GraphQL */ `
  query GetBookConnections {
    book_connection {
      edges {
        cursor
        node {
          ...BookTable
        }
      }
    }
  }
`);
