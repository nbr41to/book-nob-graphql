import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay } from '@mantine/core';
import { Author, CreateAuthorMutationVariables } from '@/gql/graphql';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authorCreateSchema } from '@/validations/author';

type Props = {
  loading?: boolean;
  onCreate: (params: CreateAuthorMutationVariables) => Promise<void>;
  onCancel: () => void;
};

export const AuthorCreateForm: FC<Props> = ({
  loading = false,
  onCreate,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Author>({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(authorCreateSchema),
  });

  const handleCreate = async (data: Author) => {
    await onCreate({
      name: data.name,
      email: data.email,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <h3>Create new author</h3>
      <hr />
      <InputBase
        label='name'
        error={errors.name?.message}
        {...register('name')}
      />
      <InputBase
        label='email'
        error={errors.email?.message}
        {...register('email')}
      />
      <div className='mt-4 flex justify-center gap-4'>
        <Button type='submit' variant='outline' disabled={loading}>
          Submit
        </Button>
        <Button type='submit' variant='outline' color='red' onClick={onCancel}>
          Cancel
        </Button>
      </div>
      <LoadingOverlay visible={loading} />
    </form>
  );
};
