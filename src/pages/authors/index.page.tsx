import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  CreateAuthorMutationVariables,
  UpdateAuthorMutationVariables,
} from '@/gql/graphql';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { AuthorTable } from '@/components/AuthorTable';
import { useCallback } from 'react';
import { AuthorForm } from '@/components/AuthorForm';
import { Modal } from '@/components/Modal/Modal';
import { useMutation, useQuery } from '@apollo/client';
import {
  GET_AUTHOR_CONNECTIONS,
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
} from '@/pages/authors/graphql';

export default function Authors() {
  const [opened, handlers] = useDisclosure(false);

  /* Apollo Hook層 */
  const { data: authors, loading: getAuthorIsLoading } = useQuery(
    GET_AUTHOR_CONNECTIONS,
  );
  const [createAuthor, { loading: createIsLoading }] = useMutation(
    CREATE_AUTHOR,
    { refetchQueries: [{ query: GET_AUTHOR_CONNECTIONS }] },
  );
  const [updateAuthor, { loading: updateIsLoading }] =
    useMutation(UPDATE_AUTHOR);
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_AUTHOR_CONNECTIONS }],
  });

  /* 関数層 */
  const handleOnCreate = useCallback(
    async (params: CreateAuthorMutationVariables) => {
      await createAuthor({
        variables: params,
        onCompleted: handlers.close,
      });
    },
    [createAuthor, handlers],
  );

  const handleOnUpdate = useCallback(
    async (params: UpdateAuthorMutationVariables) => {
      await updateAuthor({
        variables: params,
        onCompleted: handlers.close,
      });
    },
    [updateAuthor, handlers],
  );

  const handleOnDelete = useCallback(
    async (id: string) => {
      if (!window.confirm('Are you sure?')) return;
      await deleteAuthor({
        variables: { id: decodeRelayUuid(id) },
      });
    },
    [deleteAuthor],
  );

  return (
    <div className='space-y-2'>
      <h1>Author List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New author
        </Button>
      </div>

      <AuthorTable
        list={authors?.author_connection.edges.map(({ node }) => node) || []}
        loading={getAuthorIsLoading}
        onUpdate={handleOnUpdate}
        updateIsLoading={updateIsLoading}
        onDelete={handleOnDelete}
      />

      <Modal open={opened} onClose={handlers.close}>
        <AuthorForm
          onSubmit={handleOnCreate}
          onCancel={handlers.close}
          loading={createIsLoading}
        />
      </Modal>
    </div>
  );
}
