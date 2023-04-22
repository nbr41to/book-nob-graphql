import { graphql } from 'msw';
import {
  CREATE_AUTHOR,
  GET_AUTHOR_CONNECTIONS,
} from '@/graphql/queries/author';

const authorQueryHandler = graphql.query(
  GET_AUTHOR_CONNECTIONS,
  (req, res, ctx) => {
    return res(
      ctx.data({
        author_connection: {
          __typename: 'authorConnection',
          edges: [
            {
              __typename: 'authorEdge',
              cursor:
                'eyJpZCIgOiAiNmU3MzQyNjgtYjAyNi00NThmLWI3MTctMTYwMjQ1MzE5ZDJjIn0=',
              node: {
                __typename: 'author',
                email: 'nbr.41to@gmail.com',
                id: 'WzEsICJwdWJsaWMiLCAiYXV0aG9yIiwgIjZlNzM0MjY4LWIwMjYtNDU4Zi1iNzE3LTE2MDI0NTMxOWQyYyJd',
                name: 'testman',
                books: [
                  {
                    __typename: 'book',
                    description: null,
                    id: 'WzEsICJwdWJsaWMiLCAiYm9vayIsIDJd',
                    title: '本だよ',
                  },
                ],
              },
            },
            {
              __typename: 'authorEdge',
              cursor:
                'eyJpZCIgOiAiZWEzODM4MmMtMDFmOC00ZmVlLTkzOWUtOTVmOTk5ZTM5ZWRiIn0=',
              node: {
                __typename: 'author',
                email: 'ado@ado.com',
                id: 'WzEsICJwdWJsaWMiLCAiYXV0aG9yIiwgImVhMzgzODJjLTAxZjgtNGZlZS05MzllLTk1Zjk5OWUzOWVkYiJd',
                name: '新しい',
                books: [],
              },
            },
            {
              __typename: 'authorEdge',
              cursor:
                'eyJpZCIgOiAiZTAxYmVlM2ItMTFhYi00Y2ZkLTgzY2UtZjcwNDU4OGM3MzRlIn0=',
              node: {
                __typename: 'author',
                email: 'nbr@gmail.co',
                id: 'WzEsICJwdWJsaWMiLCAiYXV0aG9yIiwgImUwMWJlZTNiLTExYWItNGNmZC04M2NlLWY3MDQ1ODhjNzM0ZSJd',
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
  return res(ctx.data({}));
});

export const authorHandlers = [authorQueryHandler, createAuthorHandler];
