import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateBookMutation((req, res, ctx) => {
 *   const { id, title, description, author_id } = req.variables;
 *   return res(
 *     ctx.data({ update_book })
 *   )
 * })
 */
export const mockUpdateBookMutation = (resolver: ResponseResolver<GraphQLRequest<Types.UpdateBookMutationVariables>, GraphQLContext<Types.UpdateBookMutation>, any>) =>
  graphql.mutation<Types.UpdateBookMutation, Types.UpdateBookMutationVariables>(
    'UpdateBook',
    resolver
  )
