import * as z from 'zod';
export const ModelTypeDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  models: z.array(z.unknown())
}));