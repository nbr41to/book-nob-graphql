import { BooksPage } from '@/components/pages/Books/BooksPage';
import Head from 'next/head';

export default function Books() {
  return (
    <>
      <Head>
        <title>Books | book nob</title>
      </Head>
      <BooksPage />
    </>
  );
}
