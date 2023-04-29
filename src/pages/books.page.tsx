import { BookTable } from '@/components/BookTable';
import { CreateBookForm } from '@/components/CreateBookForm';
import { Modal } from '@/components/Modal/Modal';
import { UpdateBookForm } from '@/components/UpdateBookForm';
import { Book, UpdateInputBook } from '@/types/book';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export default function Books() {
  const [opened, handlers] = useDisclosure(false);
  const [enteredValues, setEnteredValues] = useState<UpdateInputBook>();

  const handleEdit = (book: Book) => {
    setEnteredValues({
      id: book.id,
      title: book.title,
      description: book.description || '',
      author_id: book.author_id,
    });
    handlers.open();
  };

  return (
    <div>
      <h1>Book List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New book
        </Button>
      </div>

      <Modal open={opened} onClose={handlers.close}>
        {enteredValues ? (
          <UpdateBookForm
            defaultValues={enteredValues}
            onClose={() => {
              handlers.close();
              setEnteredValues(undefined);
            }}
          />
        ) : (
          <CreateBookForm onClose={handlers.close} />
        )}
      </Modal>

      <BookTable onEdit={handleEdit} />
    </div>
  );
}
