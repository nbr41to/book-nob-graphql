import type { FC } from 'react';
import { Button, InputBase, LoadingOverlay, Select } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateInputBook } from '@/types/book';
import { createBookSchema } from '@/validations/book';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { FragmentType, useFragment } from '@/gql';
import {
  AuthorOptionFragment,
  CREATE_BOOK,
} from '@/components/CreateBookForm/graphql';
import { useMutation } from '@apollo/client';

type Props = {
  authors: FragmentType<typeof AuthorOptionFragment>[];
  onClose: () => void;
};

export const CreateBookForm: FC<Props> = ({ authors, onClose }) => {
  const authorsOptions = useFragment(AuthorOptionFragment, authors);

  const [createBook, { loading: createIsLoading }] = useMutation(
    CREATE_BOOK,
    { refetchQueries: ['GetBookConnections'] },
    // memo: このComponentでQueryは定義していないので、refetchQueriesには外部のQueryを指定することになるので,文字列で指定している
    // しかし,上の層で定義していれば解決される問題である
  );

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
              authorsOptions.map((option) => ({
                value: option.id,
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
