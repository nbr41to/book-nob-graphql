import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay } from '@mantine/core';
import { Author, UpdateAuthorMutationVariables } from '@/gql/graphql';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authorUpdateSchema } from '@/validations/author';

type Props = {
  defaultValues: UpdateAuthorMutationVariables;
  loading?: boolean;
  onUpdate: (params: UpdateAuthorMutationVariables) => Promise<void>;
  onCancel: () => void;
};

export const AuthorUpdateForm: FC<Props> = ({
  defaultValues,
  loading = false,
  onUpdate,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Author>({
    defaultValues,
    resolver: zodResolver(authorUpdateSchema),
  });

  const handleUpdate = async (data: Author) => {
    await onUpdate({
      id: data.id,
      name: data.name,
      email: data.email,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate, (e) => console.log(e))}>
      <h3>Update author</h3>
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
