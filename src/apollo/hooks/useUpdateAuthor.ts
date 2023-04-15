import { UPDATE_AUTHOR } from '@/graphql/queries/author';
import { useMutation } from '@apollo/client';

/**
 * データ更新のMutationのHooks
 */
export const useUpdateAuthor = () => {
  const [mutate, { data, loading }] = useMutation(UPDATE_AUTHOR);

  return {
    mutate,
    data,
    loading,
  };
};
