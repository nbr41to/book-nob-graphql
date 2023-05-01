import { FC, useCallback, useState } from 'react';
import { Skeleton, Table, UnstyledButton } from '@mantine/core';
import { UpdateBookMutationVariables } from '@/gql/graphql';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { FragmentType, useFragment } from '@/gql';
import { BookTableFragment } from '@/components/BookTable/graphql/BookTableFragment';
import { useMutation } from '@apollo/client';
import {
  AuthorOptionFragment,
  DELETE_BOOK,
} from '@/components/BookTable/graphql';
import { Modal } from '@/components/Modal';
import { UpdateBookForm } from '@/components/UpdateBookForm';

type Props = {
  list: FragmentType<typeof BookTableFragment>[];
  authors: FragmentType<typeof AuthorOptionFragment>[];
  loading?: boolean;
};

export const BookTable: FC<Props> = ({ list, authors, loading = false }) => {
  const [enteredValues, setEnteredValues] =
    useState<UpdateBookMutationVariables>();
  console.log(enteredValues);
  const books = useFragment(BookTableFragment, list);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: ['GetBookConnections'],
  });

  const closeModal = useCallback(() => setEnteredValues(undefined), []);

  const handleOnDelete = async (id: string) => {
    if (!window.confirm('Are you sure?')) return;
    await deleteBook({
      variables: { id: decodeRelayUuid(id) },
    });
  };

  return (
    <>
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
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description || '-'}</td>
              <td>{book.author.name}</td>
              <td>
                <UnstyledButton
                  className='font-bold text-blue-600 hover:underline'
                  onClick={() =>
                    setEnteredValues({
                      id: decodeRelayUuid(book.id),
                      title: book.title,
                      description: book.description,
                      author_id: decodeRelayUuid(book.author.id),
                    })
                  }
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
            Array.from({ length: 5 }).map((_, i) => (
              <SkeletonTableRow key={i} />
            ))}
        </tbody>
      </Table>
      {/* Edit Modal */}
      <Modal open={!!enteredValues} onClose={closeModal}>
        {enteredValues && ( // memo: CreateとUpdateを共通にしないとdefaultValuesはundefinedを許容できない
          <UpdateBookForm
            authors={authors}
            defaultValues={enteredValues}
            onClose={closeModal}
          />
        )}
      </Modal>
    </>
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
