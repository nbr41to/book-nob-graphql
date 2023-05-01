import { AuthorTableFragment } from '@/components/AuthorTable/graphql/AuthorTableFragment';
import { AuthorOptionFragment } from '@/components/BookTable/graphql';
import { makeFragmentData } from '@/gql';

export const DUMMY_AUTHOR_CONNECTION = {
  author_connection: {
    __typename: 'authorConnection',
    edges: [
      {
        __typename: 'authorEdge',
        cursor: 'cursor-1',
        node: makeFragmentData(
          {
            __typename: 'author',
            id: 'author-uid-1',
            name: 'testman',
            email: 'example1@example.com',
            books: [
              {
                __typename: 'book',
                id: 'book-uid-1',
                title: '本だよ',
                description: null,
              },
            ],
          },
          AuthorTableFragment,
        ),
      },
      {
        __typename: 'authorEdge',
        cursor: 'cursor-2',
        node: makeFragmentData(
          {
            __typename: 'author',
            id: 'author-uid-2',
            name: '新しい人',
            email: 'example2@example.com',
            books: [],
          },
          AuthorTableFragment,
        ),
      },
      {
        __typename: 'authorEdge',
        cursor: 'cursor-3',
        node: makeFragmentData(
          {
            __typename: 'author',
            id: 'author-uid-3',
            name: 'nob',
            email: 'example3@example.com',
            books: [],
          },
          AuthorTableFragment,
        ),
      },
    ],
  },
};

export const DUMMY_AUTHOR_NODE =
  DUMMY_AUTHOR_CONNECTION.author_connection.edges[0].node;

export const DUMMY_AUTHORS =
  DUMMY_AUTHOR_CONNECTION.author_connection.edges.map(({ node }) => node);

export const DUMMY_AUTHOR_OPTIONS_CONNECTION = {
  author_connection: {
    __typename: 'authorConnection',
    edges: [
      {
        __typename: 'authorEdge',
        cursor: 'cursor-1',
        node: makeFragmentData(
          {
            __typename: 'author',
            id: 'author-uid-1',
            name: 'testman',
          },
          AuthorOptionFragment,
        ),
      },
      {
        __typename: 'authorEdge',
        cursor: 'cursor-2',
        node: makeFragmentData(
          {
            __typename: 'author',
            id: 'author-uid-2',
            name: '新しい人',
          },
          AuthorOptionFragment,
        ),
      },
      {
        __typename: 'authorEdge',
        cursor: 'cursor-3',
        node: makeFragmentData(
          {
            __typename: 'author',
            id: 'author-uid-3',
            name: 'nob',
          },
          AuthorOptionFragment,
        ),
      },
    ],
  },
};

export const DUMMY_AUTHOR_OPTION_NODE =
  DUMMY_AUTHOR_OPTIONS_CONNECTION.author_connection.edges[0].node;

export const DUMMY_AUTHOR_OPTIONS =
  DUMMY_AUTHOR_OPTIONS_CONNECTION.author_connection.edges.map(
    ({ node }) => node,
  );
