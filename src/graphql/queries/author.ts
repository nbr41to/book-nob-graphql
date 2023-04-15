import { gql } from '@apollo/client';

export const GET_AUTHOR_CONNECTIONS = gql`
  query GetAuthorConnections {
    author_connection {
      edges {
        cursor
        node {
          email
          id
          name
          books {
            description
            id
            title
          }
        }
      }
    }
  }
`;

export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($name: String!, $email: String!) {
    insert_author(objects: { name: $name, email: $email }) {
      returning {
        id
        name
        email
      }
    }
  }
`;

export const UPDATE_AUTHOR = gql`
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
`;
