import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: 'https://book-nob.hasura.app/v1beta1/relay',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET!,
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.error({ graphQLErrors, networkError });
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  // uri: 'https://book-nob.hasura.app/v1beta1/relay',
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});
