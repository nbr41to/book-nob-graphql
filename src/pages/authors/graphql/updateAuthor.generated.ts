import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateAuthorMutation((req, res, ctx) => {
 *   const { id, name, email } = req.variables;
 *   return res(
 *     ctx.data({ update_author })
 *   )
 * })
 */
export const mockUpdateAuthorMutation = (resolver: ResponseResolver<GraphQLRequest<Types.UpdateAuthorMutationVariables>, GraphQLContext<Types.UpdateAuthorMutation>, any>) =>
  graphql.mutation<Types.UpdateAuthorMutation, Types.UpdateAuthorMutationVariables>(
    'UpdateAuthor',
    resolver
  )
