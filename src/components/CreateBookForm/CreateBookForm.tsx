import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay, Select } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authorCreateSchema } from '@/validations/author';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import { Book, CreateInputBook } from '@/types/book';
import { createBookSchema } from '@/validations/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';

type Props = {
  loading?: boolean;
  onCreate: (params: CreateInputBook) => Promise<void>;
  onCancel: () => void;
};

export const CreateBookForm: FC<Props> = ({
  loading = false,
  onCreate,
  onCancel,
}) => {
  const { data: authors } = useGetAuthors();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateInputBook>({
    defaultValues: {
      title: '',
      description: '',
      author_id: '',
    },
    resolver: zodResolver(createBookSchema),
  });

  const handleCreate = async (data: CreateInputBook) => {
    await onCreate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreate, (e) => console.log(e))}>
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
