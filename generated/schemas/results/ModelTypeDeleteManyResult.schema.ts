import * as z from 'zod';
export const ModelTypeDeleteManyResultSchema = z.object({
  count: z.number()
});