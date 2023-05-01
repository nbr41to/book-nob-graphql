import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetAuthorOptionsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ author_connection })
 *   )
 * })
 */
export const mockGetAuthorOptionsQuery = (resolver: ResponseResolver<GraphQLRequest<Types.GetAuthorOptionsQueryVariables>, GraphQLContext<Types.GetAuthorOptionsQuery>, any>) =>
  graphql.query<Types.GetAuthorOptionsQuery, Types.GetAuthorOptionsQueryVariables>(
    'GetAuthorOptions',
    resolver
  )
