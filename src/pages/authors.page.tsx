import { useCreateAuthor } from '@/apollo/hooks/useCreateAuthor';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useUpdateAuthor } from '@/apollo/hooks/useUpdateAuthor';
import { Author } from '@/gql/graphql';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { AuthorTable } from '@/components/AuthorTable';
import { useState } from 'react';
import { AuthorCreateForm } from '@/components/AuthorCreateForm';
import { AuthorUpdateForm } from '@/components/AuthorUpdateForm';
import { Modal } from '@/components/Modal/Modal';
import { CreateInputAuthor, UpdateInputAuthor } from '@/types/author';
import { useDeleteAuthor } from '@/apollo/hooks/useDeleteAuthor';

export default function Authors() {
  const [opened, handlers] = useDisclosure(false);
  const [enteredValues, setEnteredValues] = useState<UpdateInputAuthor>();

  const { data: authors, loading: getAuthorIsLoading } = useGetAuthors();
  const { mutate: createAuthor, loading: createIsLoading } = useCreateAuthor();
  const { mutate: updateAuthor, loading: updateIsLoading } = useUpdateAuthor();
  const { mutate: deleteAuthor } = useDeleteAuthor();

  const handleEdit = (author: Author) => {
    setEnteredValues({
      id: decodeRelayUuid(author.id),
      name: author.name,
      email: author.email,
    });
    handlers.open();
  };

  const handleOnCreate = async (params: CreateInputAuthor) => {
    await createAuthor({
      variables: params,
      onCompleted: handlers.close,
    });
  };

  const handleOnUpdate = async (params: UpdateInputAuthor) => {
    await updateAuthor({
      variables: params,
      onCompleted: handlers.close,
    });
  };

  const handleOnDelete = async (id: string) => {
    await deleteAuthor({
      variables: { id: decodeRelayUuid(id) },
    });
  };

  return (
    <div className='space-y-2'>
      <h1>Author List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New author
        </Button>
      </div>

      <AuthorTable
        list={authors.map(({ node: author }) => author as Author)}
        loading={getAuthorIsLoading}
        onEdit={handleEdit}
        onDelete={handleOnDelete}
      />

      <Modal open={opened} onClose={handlers.close}>
        {enteredValues ? (
          <AuthorUpdateForm
            defaultValues={enteredValues}
            onUpdate={handleOnUpdate}
            onCancel={handlers.close}
            loading={updateIsLoading}
          />
        ) : (
          <AuthorCreateForm
            onCreate={handleOnCreate}
            onCancel={handlers.close}
            loading={createIsLoading}
          />
        )}
      </Modal>
    </div>
  );
}
