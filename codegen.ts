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
  documents: [
    // 'src/graphql/**/*.ts',
    'src/**/*.{tsx,ts}',
    '!src/graphql/generated/**/*',
  ],
  generates: {
    './src/gql/': {
      preset: 'client',
      // presetConfig: {
      //   extension: '.generated.ts',
      //   baseTypesPath: '~~/gql/graphql',
      // },
      plugins: ['typescript-msw'],
      config: {
        link: {
          name: 'msw',
          endpoint: 'http://localhost:6006/graphql',
        },
      },
    },
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@/gql/graphql',
      },
      plugins: ['typescript-msw'], // オペレーション定義からMSWのハンドラを生成するプラグイン
      config: {
        typesPrefix: 'Types.',
      },
    },
  },
};
export default config;
