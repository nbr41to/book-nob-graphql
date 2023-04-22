import type { Preview } from '@storybook/react';
import React from 'react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import '@/styles/globals.css';

initialize();
const dummyApolloClient = new ApolloClient({
  uri: 'http://localhost:6006/graphql',
  cache: new InMemoryCache(),
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ApolloProvider client={dummyApolloClient}>
        <Story />
      </ApolloProvider>
    ),
    mswDecorator,
  ],
};

export default preview;
