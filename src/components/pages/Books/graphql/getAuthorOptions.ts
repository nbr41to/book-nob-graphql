import { graphql } from '@/gql';

export const GET_AUTHOR_OPTIONS = graphql(/* GraphQL */ `
  query GetAuthorOptions {
    author_connection {
      edges {
        cursor
        node {
          ...AuthorOption
        }
      }
    }
  }
`);
