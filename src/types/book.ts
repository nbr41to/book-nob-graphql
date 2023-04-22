import {
  Book as GeneratedBook,
  UpdateBookMutationVariables as GeneratedUpdateBookMutationVariables,
  CreateBookMutationVariables as GeneratedCreateBookMutationVariables,
} from '@/gql/graphql';
import { z } from 'zod';
import { createBookSchema, updateBookSchema } from '@/validations/book';

export type Book = GeneratedBook;
export type UpdateBookMutationVariables = GeneratedUpdateBookMutationVariables;
export type CreateBookMutationVariables = GeneratedCreateBookMutationVariables;

export type CreateInputBook = z.infer<typeof createBookSchema>;
export type UpdateInputBook = z.infer<typeof updateBookSchema>;
