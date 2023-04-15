import type { AppProps } from 'next/app';
import { client } from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';
import '@/styles/globals.css';
import { Layout } from '@/components/layout/Layout';
import { Notifications } from '@mantine/notifications';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Notifications position='top-center' />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
