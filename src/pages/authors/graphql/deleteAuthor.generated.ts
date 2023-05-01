import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteAuthorMutation((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ delete_author })
 *   )
 * })
 */
export const mockDeleteAuthorMutation = (resolver: ResponseResolver<GraphQLRequest<Types.DeleteAuthorMutationVariables>, GraphQLContext<Types.DeleteAuthorMutation>, any>) =>
  graphql.mutation<Types.DeleteAuthorMutation, Types.DeleteAuthorMutationVariables>(
    'DeleteAuthor',
    resolver
  )
