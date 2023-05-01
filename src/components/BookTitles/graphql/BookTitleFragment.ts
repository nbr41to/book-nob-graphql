import { graphql } from '@/gql';

export const BookTitleFragment = graphql(/* GraphQL */ `
  fragment BookTitle on book {
    id
    title
  }
`);
