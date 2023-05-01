import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay, Select } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateBookSchema } from '@/validations/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { FragmentType, useFragment } from '@/gql';
import { UpdateBookMutationVariables } from '@/gql/graphql';
import { useMutation } from '@apollo/client';
import {
  UPDATE_BOOK,
  AuthorOptionFragment,
} from '@/components/UpdateBookForm/graphql';

type Props = {
  defaultValues: UpdateBookMutationVariables;
  authors: FragmentType<typeof AuthorOptionFragment>[];
  onClose: () => void;
};

export const UpdateBookForm: FC<Props> = ({
  defaultValues,
  authors,
  onClose,
}) => {
  const authorOptions = useFragment(AuthorOptionFragment, authors);

  const [updateBook, { loading: updateIsLoading }] = useMutation(UPDATE_BOOK);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UpdateBookMutationVariables>({
    defaultValues,
    resolver: zodResolver(updateBookSchema),
  });

  const handleUpdate = async (params: UpdateBookMutationVariables) => {
    await updateBook({
      variables: params,
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
              authorOptions.map((option) => ({
                value: decodeRelayUuid(option.id),
                label: option.name,
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
