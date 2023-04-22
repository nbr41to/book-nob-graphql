import type { AppProps } from 'next/app';
import { client } from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Layout } from '@/components/layout/Layout';
import { Notifications } from '@mantine/notifications';
import '@/styles/globals.css';

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
