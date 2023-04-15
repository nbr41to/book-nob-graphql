import { useGetBooks } from '@/apollo/hooks/useGetBooks';
import { Table, UnstyledButton } from '@mantine/core';

export default function Home() {
  const { data: books } = useGetBooks();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>author</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ node: books }) => (
            <tr key={books.id}>
              <td>{books.title}</td>
              <td>{books.description || '-'}</td>
              <td>{books.author.name}</td>
              <td>
                <UnstyledButton className='font-bold text-blue-600 hover:underline'>
                  edit
                </UnstyledButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
