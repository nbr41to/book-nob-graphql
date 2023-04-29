import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay, Select } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import { Book, CreateInputBook } from '@/types/book';
import { createBookSchema } from '@/validations/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { useCreateBook } from '@/apollo/hooks/useCreateBook';

type Props = {
  onClose: () => void;
};

export const CreateBookForm: FC<Props> = ({ onClose }) => {
  const { data: authors } = useGetAuthors();
  const { mutate: createBook, loading: createIsLoading } = useCreateBook();

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

  const handleOnClose = () => {
    onClose();
    reset();
  };

  const handleCreate = async (data: CreateInputBook) => {
    await createBook({
      variables: {
        ...data,
        author_id: decodeRelayUuid(data.author_id),
      },
      onCompleted: handleOnClose,
    });
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
                value: author.id,
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
        <Button type='submit' variant='outline' disabled={createIsLoading}>
          Submit
        </Button>
        <Button
          type='submit'
          variant='outline'
          color='red'
          onClick={handleOnClose}
        >
          Cancel
        </Button>
      </div>
      <LoadingOverlay visible={createIsLoading} />
    </form>
  );
};
