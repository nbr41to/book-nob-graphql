import { GetBookConnectionsQuery } from '@/gql/graphql';
import { GET_BOOK_CONNECTIONS } from '@/graphql/queries/book';
import { useQuery } from '@apollo/client';

/**
 * データ取得のHooks
 * - データを加工する
 * - データをキャッシュする
 */
export const useGetBooks = () => {
  const { data, loading, refetch } =
    useQuery<GetBookConnectionsQuery>(GET_BOOK_CONNECTIONS);

  return {
    data: data?.book_connection.edges || [],
    loading,
    refetch,
  };
};
