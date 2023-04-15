import z from 'zod';

export const authorMutateSchema = z
  .object({
    id: z.string(),
    name: z.string().min(1),
    email: z.string().email(),
  })
  .strict();

export const authorUpdateSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  })
  .strict();

export const authorCreateSchema = authorUpdateSchema
  .omit({ id: true })
  .optional();
