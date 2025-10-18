import * as z from 'zod';
export const BaseModelCreateManyResultSchema = z.object({
  count: z.number()
});