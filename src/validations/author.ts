import {
  CreateAuthorMutationVariables,
  UpdateAuthorMutationVariables,
} from '@/gql/graphql';
import { checkSchemaByType } from '@/validations/checkSchemaByType';
import z from 'zod';

export const authorUpdateSchema =
  checkSchemaByType<UpdateAuthorMutationVariables>()(
    z
      .object({
        id: z.string(),
        name: z.string().min(1),
        email: z.string().email(),
      })
      .strict(),
  );

export const authorCreateSchema =
  checkSchemaByType<CreateAuthorMutationVariables>()(
    authorUpdateSchema.omit({ id: true }),
  );
