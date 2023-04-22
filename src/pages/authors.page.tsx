import { useCreateAuthor } from '@/apollo/hooks/useCreateAuthor';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useUpdateAuthor } from '@/apollo/hooks/useUpdateAuthor';
import { Author } from '@/gql/graphql';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { AuthorTable } from '@/components/AuthorTable/AuthorTable';
import { useState } from 'react';
import { AuthorCreateForm } from '@/components/AuthorCreateForm/AuthorCreateForm';
import { AuthorUpdateForm } from '@/components/AuthorUpdateForm/AuthorUpdateForm';
import { Modal } from '@/components/Modal/Modal';
import { CreateInputAuthor, UpdateInputAuthor } from '@/types/author';

export default function Authors() {
  const [opened, handlers] = useDisclosure(false);
  const [enteredValues, setEnteredValues] = useState<UpdateInputAuthor>();

  const {
    data: authors,
    refetch,
    loading: getAuthorIsLoading,
  } = useGetAuthors();
  const { mutate: createAuthor, loading: createIsLoading } = useCreateAuthor();
  const { mutate: updateAuthor, loading: updateIsLoading } = useUpdateAuthor();

  const handleEdit = (author: Author) => {
    setEnteredValues({
      id: decodeRelayUuid(author.id),
      name: author.name,
      email: author.email,
    });
    handlers.open();
  };

  const handleClose = () => {
    handlers.close();
  };

  const handleOnCreate = async (params: CreateInputAuthor) => {
    await createAuthor({
      variables: params,
    });
    refetch();
    handlers.close();
  };

  const handleOnUpdate = async (params: UpdateInputAuthor) => {
    await updateAuthor({
      variables: params,
    });
    handlers.close();
  };

  return (
    <div className='space-y-2'>
      <h1>Author List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New author
        </Button>
      </div>

      <Modal open={opened} onClose={handleClose}>
        {enteredValues ? (
          <AuthorUpdateForm
            defaultValues={enteredValues}
            onUpdate={handleOnUpdate}
            onCancel={handleClose}
            loading={updateIsLoading}
          />
        ) : (
          <AuthorCreateForm
            onCreate={handleOnCreate}
            onCancel={handleClose}
            loading={createIsLoading}
          />
        )}
      </Modal>
      <div className='relative'>
        <AuthorTable
          list={authors.map(({ node: author }) => author as Author)}
          loading={getAuthorIsLoading}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}
