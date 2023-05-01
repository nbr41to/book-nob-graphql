import z from 'zod';

export const updateBookSchema = z
  .object({
    id: z.number().min(1),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    author_id: z.string().min(1),
  })
  .strict();

export const createBookSchema = updateBookSchema.omit({ id: true });
