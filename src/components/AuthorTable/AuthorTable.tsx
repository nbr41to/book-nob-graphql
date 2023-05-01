import { FC, useCallback, useState } from 'react';
import { Skeleton, Table, UnstyledButton } from '@mantine/core';
import { UpdateAuthorMutationVariables } from '@/gql/graphql';
import { FragmentType, useFragment } from '@/gql';
import { AuthorTableFragment } from '@/components/AuthorTable/graphql/AuthorTableFragment';
import { AuthorForm } from '@/components/AuthorForm';
import { Modal } from '@/components/Modal';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';

type Props = {
  list: FragmentType<typeof AuthorTableFragment>[];
  loading?: boolean;
  updateIsLoading?: boolean;
  onUpdate: (params: UpdateAuthorMutationVariables) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
};

export const AuthorTable: FC<Props> = ({
  list,
  loading = false,
  updateIsLoading = false,
  onUpdate,
  onDelete,
}) => {
  const [enteredValues, setEnteredValues] =
    useState<UpdateAuthorMutationVariables>();

  const books = useFragment(AuthorTableFragment, list);

  const closeModal = useCallback(() => setEnteredValues(undefined), []);
  const handleOnUpdate = useCallback(
    async (params: UpdateAuthorMutationVariables) => {
      await onUpdate(params);
      closeModal();
    },
    [onUpdate, closeModal],
  );

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.email}</td>
              <td>
                <UnstyledButton
                  className='font-bold text-blue-600 hover:underline'
                  onClick={() =>
                    setEnteredValues({
                      id: decodeRelayUuid(book.id),
                      name: book.name,
                      email: book.email,
                    })
                  }
                >
                  edit
                </UnstyledButton>
              </td>
              <td>
                <UnstyledButton
                  className='font-bold text-gray-500 hover:opacity-80'
                  onClick={() => onDelete(book.id)}
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
        <AuthorForm
          defaultValues={enteredValues}
          onSubmit={handleOnUpdate}
          onCancel={closeModal}
          loading={updateIsLoading}
        />
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
    </tr>
  );
};
