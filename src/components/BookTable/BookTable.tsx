import type { FC } from 'react';
import { Skeleton, Table, UnstyledButton } from '@mantine/core';
import { Book } from '@/gql/graphql';
import { useGetBooks } from '@/apollo/hooks/useGetBooks';
import { useDeleteBook } from '@/apollo/hooks/useDeleteBook';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';

type Props = {
  onEdit: (data: Book) => void;
};

export const BookTable: FC<Props> = ({ onEdit }) => {
  const { data: books, loading } = useGetBooks();
  const { mutate: deleteBook } = useDeleteBook();

  const handleOnDelete = async (id: string) => {
    await deleteBook({
      variables: { id: decodeRelayUuid(id) },
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
          <th>author</th>
          <th>{/* edit */}</th>
          <th>{/* delete */}</th>
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
                onClick={() => onEdit(book as Book)}
              >
                edit
              </UnstyledButton>
            </td>
            <td>
              <UnstyledButton
                className='font-bold text-gray-500 hover:opacity-80'
                onClick={() => handleOnDelete(book.id)}
              >
                delete
              </UnstyledButton>
            </td>
          </tr>
        ))}
        {loading &&
          Array.from({ length: 5 }).map((_, i) => <SkeletonTableRow key={i} />)}
      </tbody>
    </Table>
  );
};

const SkeletonTableRow: FC = () => {
  return (
    <tr>
      <td>
        <Skeleton h={36} />
      </td>
      <td>
        <Skeleton h={36} />
      </td>
      <td>
        <Skeleton h={36} />
      </td>
      <td>
        <Skeleton h={36} />
      </td>
    </tr>
  );
};
