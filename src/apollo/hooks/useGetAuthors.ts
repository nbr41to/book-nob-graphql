import { GetAuthorConnectionsQuery } from '@/gql/graphql';
import { GET_AUTHOR_CONNECTIONS } from '@/graphql/queries/author';
import { useQuery } from '@apollo/client';

/**
 * データ取得のHooks
 * - データを加工する
 * - データをキャッシュする
 */
export const useGetAuthors = () => {
  const { data, loading, refetch } = useQuery<GetAuthorConnectionsQuery>(
    GET_AUTHOR_CONNECTIONS,
  );

  return {
    data: data?.author_connection.edges || [],
    loading,
    refetch,
  };
};
