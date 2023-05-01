import { graphql } from '@/gql';

export const UPDATE_AUTHOR = graphql(/* GraphQL */ `
  mutation UpdateAuthor($id: uuid!, $name: String!, $email: String!) {
    update_author(
      where: { id: { _eq: $id } }
      _set: { name: $name, email: $email }
    ) {
      returning {
        id
        name
        email
      }
    }
  }
`);
