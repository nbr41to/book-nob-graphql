import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { AppShell, Navbar, Header, UnstyledButton } from '@mantine/core';
import { M_PLUS_Rounded_1c } from '@next/font/google';

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  variable: '--font-rounded1c',
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <AppShell
      className={mPlusRounded1c.variable}
      zIndex={10}
      padding='md'
      navbar={
        <Navbar width={{ base: 200 }} p='xs'>
          <Navbar.Section>
            <Link
              href='/'
              className='block w-full rounded p-2 hover:bg-gray-100'
            >
              Books
            </Link>
            <Link
              href='/authors'
              className='block w-full rounded p-2 hover:bg-gray-100'
            >
              Authors
            </Link>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={68} p={8}>
          <h1 className='font-round1c text-2xl font-bold'>BOOK・NOB</h1>
          <p className='font-round1c text-xs'>安く、清く、美しく</p>
        </Header>
      }
    >
      <main>{children}</main>
    </AppShell>
  );
};
