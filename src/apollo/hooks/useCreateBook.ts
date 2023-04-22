import { CREATE_BOOK } from '@/graphql/queries/book';
import { useMutation } from '@apollo/client';

/**
 * データ作成のMutationのHooks
 */
export const useCreateBook = () => {
  const [mutate, { data, loading }] = useMutation(CREATE_BOOK);

  return {
    mutate,
    data,
    loading,
  };
};
