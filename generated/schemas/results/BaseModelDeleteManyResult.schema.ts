import * as z from 'zod';
export const BaseModelDeleteManyResultSchema = z.object({
  count: z.number()
});