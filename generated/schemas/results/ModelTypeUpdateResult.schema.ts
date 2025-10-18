import * as z from 'zod';
export const ModelTypeUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  models: z.array(z.unknown())
}));