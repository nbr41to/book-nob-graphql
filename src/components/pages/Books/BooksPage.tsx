import { BookTable } from '@/components/BookTable';
import { CreateBookForm } from '@/components/CreateBookForm';
import { Modal } from '@/components/Modal/Modal';
import {
  GET_AUTHOR_OPTIONS,
  GET_BOOK_CONNECTIONS,
} from '@/components/pages/Books/graphql';
import { useQuery } from '@apollo/client';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const BooksPage = () => {
  const [opened, handlers] = useDisclosure(false);

  /* Apollo Hook層 */
  const { data: authors } = useQuery(GET_AUTHOR_OPTIONS);
  const { data: books } = useQuery(GET_BOOK_CONNECTIONS);

  return (
    <div>
      <h1>Book List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New book
        </Button>
      </div>

      <Modal open={opened} onClose={handlers.close}>
        <CreateBookForm
          authors={
            authors?.author_connection.edges.map(({ node }) => node) || []
          }
          onClose={handlers.close}
        />
      </Modal>

      <BookTable
        list={books?.book_connection.edges.map(({ node }) => node) || []}
        authors={authors?.author_connection.edges.map(({ node }) => node) || []} // memo: こいつのネストがだるい
      />
    </div>
  );
};
