import { z } from 'zod';

export const checkSchemaByType =
  <T>() =>
  <S extends z.ZodType<T, any, any>>(arg: S) => {
    return arg;
  };
