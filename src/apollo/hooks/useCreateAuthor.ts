import {
  CREATE_AUTHOR,
  GET_AUTHOR_CONNECTIONS,
} from '@/graphql/queries/author';
import { useMutation } from '@apollo/client';

/**
 * データ作成のMutationのHooks
 */
export const useCreateAuthor = () => {
  const [mutate, { data, loading }] = useMutation(CREATE_AUTHOR, {
    refetchQueries: [
      { query: GET_AUTHOR_CONNECTIONS },
      // 'GetAuthorConnections', // query名を指定することもできる
    ],
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    mutate,
    data,
    loading,
  };
};
