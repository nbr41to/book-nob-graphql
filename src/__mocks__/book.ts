import { AuthorTableFragment } from '@/components/AuthorTable/graphql/AuthorTableFragment';
import { BookTableFragment } from '@/components/BookTable/graphql';
import { makeFragmentData } from '@/gql';

export const DUMMY_BOOK_CONNECTION = {
  book_connection: {
    edges: [
      {
        __typename: 'bookEdge',
        cursor: 'cursor-1',
        node: makeFragmentData(
          {
            __typename: 'book',
            id: 'book-uid-1',
            title: '本で来た',
            description: 'すごそうなやつ',
            author: {
              __typename: 'author',
              id: 'author-uid-1',
              name: 'nob',
            },
          },
          BookTableFragment,
        ),
      },
      {
        __typename: 'bookEdge',
        cursor: 'cursor-2',
        node: makeFragmentData(
          {
            __typename: 'book',
            id: 'book-uid-2',
            title: 'あああ',
            description: '',
            author: {
              name: 'testman',
              id: 'author-uid-2',
              __typename: 'author',
            },
          },
          BookTableFragment,
        ),
      },
      {
        __typename: 'bookEdge',
        cursor: 'cursor-3',
        node: makeFragmentData(
          {
            __typename: 'book',
            id: 'book-uid-3',
            title: '本だよ',
            description: '説明の追加',
            author: {
              __typename: 'author',
              id: 'author-uid-2',
              name: 'testman',
            },
          },
          BookTableFragment,
        ),
      },
    ],
    __typename: 'bookConnection',
  },
};

export const DUMMY_BOOK_NODE =
  DUMMY_BOOK_CONNECTION.book_connection.edges[0].node;

export const DUMMY_BOOKS = DUMMY_BOOK_CONNECTION.book_connection.edges.map(
  ({ node }) => node,
);
