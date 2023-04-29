import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay, Select } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import { UpdateInputBook } from '@/types/book';
import { updateBookSchema } from '@/validations/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { useUpdateBook } from '@/apollo/hooks/useUpdateBook';

type Props = {
  defaultValues: UpdateInputBook;
  onClose: () => void;
};

export const UpdateBookForm: FC<Props> = ({ defaultValues, onClose }) => {
  const { data: authors } = useGetAuthors();
  const { mutate: updateBook, loading: updateIsLoading } = useUpdateBook();

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

  const handleUpdate = async (data: UpdateInputBook) => {
    await updateBook({
      variables: {
        ...data,
        id: decodeRelayUuid(data.id),
      },
      onCompleted: onClose,
    });
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
        <Button type='submit' variant='outline' disabled={updateIsLoading}>
          Submit
        </Button>
        <Button type='submit' variant='outline' color='red' onClick={onClose}>
          Cancel
        </Button>
      </div>
      <LoadingOverlay visible={updateIsLoading} />
    </form>
  );
};
