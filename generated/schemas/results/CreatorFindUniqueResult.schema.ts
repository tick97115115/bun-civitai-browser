import * as z from 'zod';
export const CreatorFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  username: z.string(),
  link: z.string().optional(),
  image: z.string().optional(),
  models: z.array(z.unknown())
}));