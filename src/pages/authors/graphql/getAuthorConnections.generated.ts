import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetAuthorConnectionsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ author_connection })
 *   )
 * })
 */
export const mockGetAuthorConnectionsQuery = (resolver: ResponseResolver<GraphQLRequest<Types.GetAuthorConnectionsQueryVariables>, GraphQLContext<Types.GetAuthorConnectionsQuery>, any>) =>
  graphql.query<Types.GetAuthorConnectionsQuery, Types.GetAuthorConnectionsQueryVariables>(
    'GetAuthorConnections',
    resolver
  )
