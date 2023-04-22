import type { FC } from 'react';
import { Skeleton, Table, UnstyledButton } from '@mantine/core';
import { Author } from '@/gql/graphql';

type Props = {
  list: Author[];
  loading?: boolean;
  onEdit: (data: Author) => void;
};

export const AuthorTable: FC<Props> = ({ list, loading = false, onEdit }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
              <UnstyledButton
                className='font-bold text-blue-600 hover:underline'
                onClick={() => onEdit(data)}
              >
                edit
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
