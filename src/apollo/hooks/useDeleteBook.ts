import { DELETE_BOOK, GET_BOOK_CONNECTIONS } from '@/graphql/queries/book';
import { useLoading } from '@/recoil/hooks/useLoading';
import { useMutation } from '@apollo/client';

/**
 * データ削除のMutationのHooks
 */
export const useDeleteBook = () => {
  const [mutate, { data, loading }] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOK_CONNECTIONS }],
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
