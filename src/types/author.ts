import { authorCreateSchema, authorUpdateSchema } from '@/validations/author';
import { Author as GeneratedAuthor } from '@/gql/graphql';
import { z } from 'zod';

export type Author = GeneratedAuthor;
export type CreateInputAuthor = z.infer<typeof authorCreateSchema>;
export type UpdateInputAuthor = z.infer<typeof authorUpdateSchema>;
