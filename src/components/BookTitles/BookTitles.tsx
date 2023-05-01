import type { FC } from 'react';
import { FragmentType, useFragment } from '@/gql';
import { BookTitleFragment } from './graphql/BookTitleFragment';

type Props = {
  books: FragmentType<typeof BookTitleFragment>[];
};

/* Colocationのサンプル用Component */
export const BookTitles: FC<Props> = ({ books }) => {
  const _books = useFragment(BookTitleFragment, books);
  console.log(_books[0].title);
  // console.log(books[0].title); // type error

  return (
    <div>
      <h1>本を買うなら Book nob</h1>
    </div>
  );
};
