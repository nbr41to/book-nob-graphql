import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://book-nob.hasura.app/v1beta1/relay',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET!,
  },
  cache: new InMemoryCache(),
});
