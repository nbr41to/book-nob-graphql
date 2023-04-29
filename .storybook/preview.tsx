import type { Preview } from '@storybook/react';
import React from 'react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { RecoilRoot } from 'recoil';
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
      /* TODO: MockedProviderを使用するとmswが挿入されなくなる */
      <ApolloProvider client={dummyApolloClient}>
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      </ApolloProvider>
    ),
    mswDecorator,
  ],
};

export default preview;
