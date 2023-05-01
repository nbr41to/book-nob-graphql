import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteBookMutation((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ delete_book })
 *   )
 * })
 */
export const mockDeleteBookMutation = (resolver: ResponseResolver<GraphQLRequest<Types.DeleteBookMutationVariables>, GraphQLContext<Types.DeleteBookMutation>, any>) =>
  graphql.mutation<Types.DeleteBookMutation, Types.DeleteBookMutationVariables>(
    'DeleteBook',
    resolver
  )
