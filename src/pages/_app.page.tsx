import type { AppProps } from 'next/app';
import { client } from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { Layout } from '@/components/layout/Layout';
import { Notifications } from '@mantine/notifications';
import { RecoilRoot } from 'recoil';
import { RecoilEnv } from 'recoil';
import '@/styles/globals.css';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Layout>
          <Notifications position='top-center' />
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ApolloProvider>
  );
}
