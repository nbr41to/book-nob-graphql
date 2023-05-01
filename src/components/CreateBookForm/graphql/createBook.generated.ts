import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateBookMutation((req, res, ctx) => {
 *   const { title, description, author_id } = req.variables;
 *   return res(
 *     ctx.data({ insert_book })
 *   )
 * })
 */
export const mockCreateBookMutation = (resolver: ResponseResolver<GraphQLRequest<Types.CreateBookMutationVariables>, GraphQLContext<Types.CreateBookMutation>, any>) =>
  graphql.mutation<Types.CreateBookMutation, Types.CreateBookMutationVariables>(
    'CreateBook',
    resolver
  )
