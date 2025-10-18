import * as z from 'zod';
export const CreatorFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  username: z.string(),
  link: z.string().optional(),
  image: z.string().optional(),
  models: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});