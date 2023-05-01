import { graphql } from '@/gql';

export const GET_AUTHOR_CONNECTIONS = graphql(/* GraphQL */ `
  query GetAuthorConnections {
    author_connection {
      edges {
        cursor
        node {
          ...AuthorTable
        }
      }
    }
  }
`);
