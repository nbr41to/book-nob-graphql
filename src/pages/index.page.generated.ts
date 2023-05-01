import * as Types from '@/gql/graphql';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetBookTitlesQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ book_connection })
 *   )
 * })
 */
export const mockGetBookTitlesQuery = (resolver: ResponseResolver<GraphQLRequest<Types.GetBookTitlesQueryVariables>, GraphQLContext<Types.GetBookTitlesQuery>, any>) =>
  graphql.query<Types.GetBookTitlesQuery, Types.GetBookTitlesQueryVariables>(
    'GetBookTitles',
    resolver
  )
