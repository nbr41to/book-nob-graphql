import { graphql } from '@/gql';
import { BookTitles } from '@/components/BookTitles';
import { useQuery } from '@apollo/client';

const book_titles = graphql(/* GraphQL */ `
  query GetBookTitles {
    book_connection {
      edges {
        cursor
        node {
          ...BookTitle
        }
      }
    }
  }
`);

export default function Home() {
  const { data } = useQuery(book_titles);

  return (
    <div>
      <h1>本を買うなら Book nob</h1>
      {data && (
        <BookTitles
          books={data?.book_connection.edges.map((edge) => edge.node)}
        />
      )}
    </div>
  );
}
