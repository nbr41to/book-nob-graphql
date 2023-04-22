import { UPDATE_BOOK } from '@/graphql/queries/book';
import { useMutation } from '@apollo/client';

/**
 * データ作成のMutationのHooks
 */
export const useUpdateBook = () => {
  const [mutate, { data, loading }] = useMutation(UPDATE_BOOK);

  return {
    mutate,
    data,
    loading,
  };
};
