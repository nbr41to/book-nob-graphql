import {
  GET_AUTHOR_CONNECTIONS,
  UPDATE_AUTHOR,
} from '@/graphql/queries/author';
import { useMutation } from '@apollo/client';

/**
 * データ更新のMutationのHooks
 */
export const useUpdateAuthor = () => {
  const [mutate, { data, loading }] = useMutation(UPDATE_AUTHOR, {
    refetchQueries: [
      { query: GET_AUTHOR_CONNECTIONS },
      // 'GetAuthorConnections', // query名を指定することもできる
    ],
  });

  return {
    mutate,
    data,
    loading,
  };
};
