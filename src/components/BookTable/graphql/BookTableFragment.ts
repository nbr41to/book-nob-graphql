import { graphql } from '@/gql';

export const BookTableFragment = graphql(/* GraphQL */ `
  fragment BookTable on book {
    id
    title
    description
    author {
      id
      name
    }
  }
`);
