import * as z from 'zod';
export const ModelFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  creatorId: z.number().int().optional(),
  typeId: z.number().int(),
  nsfw: z.boolean(),
  nsfwLevel: z.number().int(),
  modelVersions: z.array(z.unknown()),
  tags: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  creator: z.unknown().optional(),
  type: z.unknown()
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