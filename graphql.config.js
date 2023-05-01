require('dotenv').config({
  path: './.env',
});

module.exports = {
  schema: [
    {
      'https://book-nob.hasura.app/v1beta1/relay': {
        headers: {
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ['src/graphql/**/*.{graphql,js,ts,jsx,tsx}'],
};
