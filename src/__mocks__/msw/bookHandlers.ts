import { BookTableFragment } from '@/components/BookTable/graphql';
import { makeFragmentData } from '@/gql';
import {
  mockCreateBookMutation,
  mockGetBookConnectionsQuery,
} from '@/gql/graphql';

const bookQueryHandler = mockGetBookConnectionsQuery((req, res, ctx) => {
  return res(
    ctx.data({
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
    }),
  );
});

const createBookHandler = mockCreateBookMutation((req, res, ctx) => {
  console.log('req');
  return res(
    ctx.data({
      insert_book: {
        returning: [
          {
            id: 'new-book-id',
            title: 'new-book-title',
            description: 'new-book-description',
            author_id: 'author-uid',
            author: {
              id: 'author-uid',
              name: 'author-name',
            },
          },
        ],
      },
    }),
  );
});

export const bookHandlers = [bookQueryHandler, createBookHandler];
