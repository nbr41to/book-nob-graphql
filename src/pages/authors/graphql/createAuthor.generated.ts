import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateAuthorMutation((req, res, ctx) => {
 *   const { name, email } = req.variables;
 *   return res(
 *     ctx.data({ insert_author })
 *   )
 * })
 */
export const mockCreateAuthorMutation = (resolver: ResponseResolver<GraphQLRequest<Types.CreateAuthorMutationVariables>, GraphQLContext<Types.CreateAuthorMutation>, any>) =>
  graphql.mutation<Types.CreateAuthorMutation, Types.CreateAuthorMutationVariables>(
    'CreateAuthor',
    resolver
  )
