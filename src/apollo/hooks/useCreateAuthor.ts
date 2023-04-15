import { CREATE_AUTHOR } from '@/graphql/queries/author';
import { useMutation } from '@apollo/client';

/**
 * データ作成のMutationのHooks
 */
export const useCreateAuthor = () => {
  const [mutate, { data, loading }] = useMutation(CREATE_AUTHOR);

  return {
    mutate,
    data,
    loading,
  };
};
