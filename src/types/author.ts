import { authorCreateSchema, authorUpdateSchema } from '@/validations/author';
import { z } from 'zod';

export type CreateInputAuthor = z.infer<typeof authorCreateSchema>;
export type UpdateInputAuthor = z.infer<typeof authorUpdateSchema>;
