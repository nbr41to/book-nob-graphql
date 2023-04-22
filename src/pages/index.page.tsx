import { useCreateBook } from '@/apollo/hooks/useCreateBook';
import { useGetBooks } from '@/apollo/hooks/useGetBooks';
import { useUpdateBook } from '@/apollo/hooks/useUpdateBook';
import { CreateBookForm } from '@/components/CreateBookForm';
import { Modal } from '@/components/Modal/Modal';
import { UpdateBookForm } from '@/components/UpdateBookForm';
import { Book, CreateInputBook, UpdateInputBook } from '@/types/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { Button, Table, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export default function Home() {
  const [opened, handlers] = useDisclosure(false);
  const [enteredValues, setEnteredValues] = useState<UpdateInputBook>();

  const { data: books, refetch } = useGetBooks();
  const { mutate: createBook, loading: createIsLoading } = useCreateBook();
  const { mutate: updateBook, loading: updateIsLoading } = useUpdateBook();
  console.log(books);

  const handleClose = () => {
    handlers.close();
  };

  const handleEdit = (book: Book) => {
    setEnteredValues({
      id: decodeRelayUuid(book.id),
      title: book.title,
      description: book.description || '',
      author_id: book.author_id,
    });
    handlers.open();
  };

  const handleOnCreate = async (params: CreateInputBook) => {
    await createBook({
      variables: params,
    });
    refetch();
    handlers.close();
  };

  const handleOnUpdate = async (params: UpdateInputBook) => {
    await updateBook({
      variables: params,
    });
    handlers.close();
  };

  return (
    <div>
      <h1>Book List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New book
        </Button>
      </div>

      <Modal open={opened} onClose={handleClose}>
        {enteredValues ? (
          <UpdateBookForm
            defaultValues={enteredValues}
            onUpdate={handleOnUpdate}
            onCancel={handleClose}
            loading={updateIsLoading}
          />
        ) : (
          <CreateBookForm
            onCreate={handleOnCreate}
            onCancel={handleClose}
            loading={createIsLoading}
          />
        )}
      </Modal>

      <Table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>author</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ node: book }) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description || '-'}</td>
              <td>{book.author.name}</td>
              <td>
                <UnstyledButton
                  className='font-bold text-blue-600 hover:underline'
                  onClick={() => handleEdit(book as Book)}
                >
                  edit
                </UnstyledButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
