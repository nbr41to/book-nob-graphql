import { CREATE_BOOK, GET_BOOK_CONNECTIONS } from '@/graphql/queries/book';
import { useMutation } from '@apollo/client';

/**
 * データ作成のMutationのHooks
 */
export const useCreateBook = () => {
  const [mutate, { data, loading }] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: GET_BOOK_CONNECTIONS }],
  });

  return {
    mutate,
    data,
    loading,
  };
};
