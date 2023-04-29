import { graphql } from 'msw';
import {
  CREATE_AUTHOR,
  GET_AUTHOR_CONNECTIONS,
} from '@/graphql/queries/author';

const hasura = graphql.link('http://localhost:6006/graphql');

const authorQueryHandler = hasura.query(
  GET_AUTHOR_CONNECTIONS,
  (req, res, ctx) => {
    return res(
      ctx.data({
        author_connection: {
          __typename: 'authorConnection',
          edges: [
            {
              __typename: 'authorEdge',
              cursor: 'cursor-1',
              node: {
                __typename: 'author',
                email: 'example1@example.com',
                id: 'author-uid-1',
                name: 'testman',
                books: [
                  {
                    __typename: 'book',
                    description: null,
                    id: 'book-uid-1',
                    title: '本だよ',
                  },
                ],
              },
            },
            {
              __typename: 'authorEdge',
              cursor: 'cursor-2',
              node: {
                __typename: 'author',
                email: 'example2@example.com',
                id: 'author-uid-2',
                name: '新しい人',
                books: [],
              },
            },
            {
              __typename: 'authorEdge',
              cursor: 'cursor-3',
              node: {
                __typename: 'author',
                email: 'example3@example.com',
                id: 'author-uid-3',
                name: 'nob',
                books: [],
              },
            },
          ],
        },
      }),
    );
  },
);

const createAuthorHandler = graphql.mutation(CREATE_AUTHOR, (req, res, ctx) => {
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

export const authorHandlers = [authorQueryHandler, createAuthorHandler];
