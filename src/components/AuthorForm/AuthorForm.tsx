import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay } from '@mantine/core';
import {
  Author,
  CreateAuthorMutationVariables,
  UpdateAuthorMutationVariables,
} from '@/gql/graphql';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authorCreateSchema, authorUpdateSchema } from '@/validations/author';

type Props = {
  defaultValues?: UpdateAuthorMutationVariables;
  loading?: boolean;
  onSubmit:
    | ((params: CreateAuthorMutationVariables) => Promise<void>)
    | ((params: UpdateAuthorMutationVariables) => Promise<void>);
  onCancel: () => void;
};

// memo: createとupdateを共通化してみたpattern
export const AuthorForm: FC<Props> = ({
  defaultValues,
  loading = false,
  onSubmit,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Author>({
    defaultValues: defaultValues || {
      name: '',
      email: '',
    },
    resolver: zodResolver(
      defaultValues ? authorUpdateSchema : authorCreateSchema,
    ),
  });

  const handleOnSubmit = async (data: Author) => {
    await onSubmit({
      id: data.id,
      name: data.name,
      email: data.email,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit, (e) => console.log(e))}>
      <h3>{!defaultValues ? 'Create new author' : 'Update author'}</h3>
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
