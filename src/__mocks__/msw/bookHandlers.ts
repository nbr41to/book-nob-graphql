import { graphql } from 'msw';
import { CREATE_BOOK, GET_BOOK_CONNECTIONS } from '@/graphql/queries/book';

const bookQueryHandler = graphql.query(
  GET_BOOK_CONNECTIONS,
  (req, res, ctx) => {
    return res(
      ctx.data({
        book_connection: {
          edges: [
            {
              cursor: 'cursor-1',
              node: {
                author_id: 'author-uid-1',
                created_at: '2023-04-22T07:00:59.833163+00:00',
                description: 'すごそうなやつ',
                id: 'book-uid-1',
                title: '本で来た',
                updated_at: '2023-04-22T07:00:59.833163+00:00',
                author: {
                  name: 'nob',
                  id: 'author-uid-1',
                  email: 'example1@example.com',
                  __typename: 'author',
                },
                __typename: 'book',
              },
              __typename: 'bookEdge',
            },
            {
              cursor: 'cursor-2',
              node: {
                author_id: 'author-uid-2',
                created_at: '2023-04-22T07:01:57.060852+00:00',
                description: '',
                id: 'book-uid-2',
                title: 'あああ',
                updated_at: '2023-04-22T07:01:57.060852+00:00',
                author: {
                  name: 'testman',
                  id: 'author-uid-2',
                  email: 'example2@example.com',
                  __typename: 'author',
                },
                __typename: 'book',
              },
              __typename: 'bookEdge',
            },
            {
              cursor: 'cursor-3',
              node: {
                author_id: 'author-uid-2',
                created_at: '2023-04-14T12:50:17.583392+00:00',
                description: '説明の追加',
                id: 'book-uid-3',
                title: '本だよ',
                updated_at: '2023-04-22T14:17:02.699729+00:00',
                author: {
                  name: 'testman',
                  id: 'author-uid-2',
                  email: 'example2@example.com',
                  __typename: 'author',
                },
                __typename: 'book',
              },
              __typename: 'bookEdge',
            },
          ],
          __typename: 'bookConnection',
        },
      }),
    );
  },
);

const createBookHandler = graphql.mutation(CREATE_BOOK, (req, res, ctx) => {
  console.log('req');
  return res(
    ctx.data({
      insert_author: {
        returning: [
          {
            __typename: 'author',
            id: 'new-author-uid',
            name: 'author-name',
            email: 'example@example.com',
          },
        ],
      },
    }),
  );
});

export const bookHandlers = [bookQueryHandler, createBookHandler];
