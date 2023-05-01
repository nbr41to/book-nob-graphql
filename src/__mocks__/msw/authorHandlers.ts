import { AuthorTableFragment } from '@/components/AuthorTable/graphql/AuthorTableFragment';
import { AuthorOptionFragment } from '@/components/BookTable/graphql';
import { makeFragmentData } from '@/gql';
import {
  mockCreateAuthorMutation,
  mockGetAuthorConnectionsQuery,
  mockGetAuthorOptionsQuery,
} from '@/gql/graphql';

/* codegen pluginで生成したMSWのhandlerを使用 */
// memo: 型安全だが,Fragmentを引用しているのでAPIのSnapshotを利用できるか心配
const authorConnectionsHandler = mockGetAuthorConnectionsQuery(
  (req, res, ctx) => {
    return res(
      ctx.data({
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
                  email: 'example3@example.com',
                  name: 'nob',
                  books: [],
                },
                AuthorTableFragment,
              ),
            },
          ],
        },
      }),
    );
  },
);

const createAuthorHandler = mockCreateAuthorMutation((req, res, ctx) => {
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

const authorOptionsHandler = mockGetAuthorOptionsQuery((req, res, ctx) => {
  return res(
    ctx.data({
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
    }),
  );
});

export const authorHandlers = [
  authorConnectionsHandler,
  createAuthorHandler,
  authorOptionsHandler,
];
