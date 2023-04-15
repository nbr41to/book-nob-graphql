import { useCreateAuthor } from '@/apollo/hooks/useCreateAuthor';
import { useGetAuthors } from '@/apollo/hooks/useGetAuthors';
import {
  Button,
  InputBase,
  LoadingOverlay,
  Modal,
  Skeleton,
  Table,
  UnstyledButton,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authorMutateSchema } from '@/validations/author';
import { useDisclosure } from '@mantine/hooks';
import { useUpdateAuthor } from '@/apollo/hooks/useUpdateAuthor';
import { Author } from '@/gql/graphql';
import { decodeRelayUuid } from '@/utils/decodeRelayUuid';
import { notifications } from '@mantine/notifications';

export default function Authors() {
  const [opened, handlers] = useDisclosure(false);
  const { data: authors, loading: getAuthorIsLoading } = useGetAuthors();
  const { mutate: createAuthor, loading: createIsLoading } = useCreateAuthor();
  const { mutate: updateAuthor, loading: updateIsLoading } = useUpdateAuthor();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Author>({
    defaultValues: {
      id: '',
      name: '',
      email: '',
    },
    resolver: zodResolver(authorMutateSchema),
  });

  const handleEdit = (author: Author) => {
    setValue('id', author.id);
    setValue('name', author.name);
    setValue('email', author.email);
    handlers.open();
  };

  const handleClose = () => {
    reset();
    handlers.close();
  };

  const onSubmit = async (data: Author) => {
    try {
      if (data.id) {
        await updateAuthor({
          variables: {
            id: decodeRelayUuid(data.id),
            name: data.name,
            email: data.email,
          },
        });
        notifications.show({
          title: 'Success',
          message: 'Successfully updated author',
          color: 'teal',
        });
      } else {
        await createAuthor({
          variables: {
            name: data.name,
            email: data.email,
          },
        });
        notifications.show({
          title: 'Success',
          message: 'Successfully created new author',
          color: 'teal',
        });
      }
      reset();
      handlers.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='space-y-2'>
      <h1>Book List</h1>
      <div className='text-right'>
        <Button variant='outline' onClick={handlers.open}>
          New book
        </Button>
      </div>

      <Modal opened={opened} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className='mx-auto mt-4 w-fit'>
            <Button
              type='submit'
              variant='outline'
              loading={createIsLoading || updateIsLoading}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
      <div className='relative'>
        <LoadingOverlay visible={getAuthorIsLoading} />
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {authors.map(({ node: author }) => (
              <tr key={author.id}>
                <td>{decodeRelayUuid(author.id)}</td>
                <td>{author.name}</td>
                <td>{author.email}</td>
                <td>
                  <UnstyledButton
                    className='font-bold text-blue-600 hover:underline'
                    onClick={() => handleEdit(author as Author)}
                  >
                    edit
                  </UnstyledButton>
                </td>
              </tr>
            ))}
          </tbody>
          {getAuthorIsLoading && (
            <tbody>
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
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
}
