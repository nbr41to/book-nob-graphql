import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://book-nob.hasura.app/v1beta1/relay': {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET!,
      },
    },
  },
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};
export default config;
