import { graphql } from '@/gql';

export const AuthorTableFragment = graphql(/* GraphQL */ `
  fragment AuthorTable on author {
    id
    name
    email
    books {
      id
      title
      description
    }
  }
`);
