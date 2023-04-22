import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay, Select } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import {
  Book,
  CreateInputBook,
  UpdateBookMutationVariables,
  UpdateInputBook,
} from '@/types/book';
import { updateBookSchema } from '@/validations/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';

type Props = {
  defaultValues: UpdateBookMutationVariables;
  loading?: boolean;
  onUpdate: (params: UpdateBookMutationVariables) => Promise<void>;
  onCancel: () => void;
};

export const UpdateBookForm: FC<Props> = ({
  defaultValues,
  loading = false,
  onUpdate,
  onCancel,
}) => {
  const { data: authors } = useGetAuthors();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UpdateInputBook>({
    defaultValues,
    resolver: zodResolver(updateBookSchema),
  });

  const handleUpdate = async (data: UpdateBookMutationVariables) => {
    await onUpdate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)}>
      <h3>Create new author</h3>
      <hr />
      <InputBase
        label='title'
        error={errors.title?.message}
        {...register('title')}
      />
      <InputBase
        label='description'
        error={errors.description?.message}
        {...register('description')}
      />
      <Controller
        render={({ field }) => (
          <Select
            data={
              authors?.map(({ node: author }) => ({
                value: decodeRelayUuid(author.id),
                label: author.name,
              })) || []
            }
            searchable
            label='Author'
            placeholder='Select author'
            {...field}
          />
        )}
        name='author_id'
        control={control}
        defaultValue=''
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
