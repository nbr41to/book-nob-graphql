import z from 'zod';
import {
  CreateBookMutationVariables,
  UpdateBookMutationVariables,
} from '@/gql/graphql';
import { checkSchemaByType } from '@/validations/checkSchemaByType';

export const updateBookSchema =
  checkSchemaByType<UpdateBookMutationVariables>()(
    z
      .object({
        id: z.number().min(1),
        title: z.string().min(1),
        description: z.string().optional().nullable(),
        author_id: z.string().min(1),
      })
      .strict(),
  );

export const createBookSchema =
  checkSchemaByType<CreateBookMutationVariables>()(
    updateBookSchema.omit({ id: true }),
  );
