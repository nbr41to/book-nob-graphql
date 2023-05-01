import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetBookConnectionsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ book_connection })
 *   )
 * })
 */
export const mockGetBookConnectionsQuery = (resolver: ResponseResolver<GraphQLRequest<Types.GetBookConnectionsQueryVariables>, GraphQLContext<Types.GetBookConnectionsQuery>, any>) =>
  graphql.query<Types.GetBookConnectionsQuery, Types.GetBookConnectionsQueryVariables>(
    'GetBookConnections',
    resolver
  )
