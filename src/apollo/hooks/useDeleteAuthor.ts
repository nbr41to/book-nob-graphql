import {
  DELETE_AUTHOR,
  GET_AUTHOR_CONNECTIONS,
} from '@/graphql/queries/author';
import { useLoading } from '@/recoil/hooks/useLoading';
import { useMutation } from '@apollo/client';

/**
 * データ削除のMutationのHooks
 */
export const useDeleteAuthor = () => {
  const [mutate, { data, loading }] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHOR_CONNECTIONS }],
    onError: (error) => {
      console.log(error);
    },
  });

  useLoading(loading);

  return {
    mutate,
    data,
    loading,
  };
};
