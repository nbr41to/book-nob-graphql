import { graphql } from '@/gql';

export const AuthorOptionFragment = graphql(/* GraphQL */ `
  fragment AuthorOption on author {
    id
    name
  }
`);
