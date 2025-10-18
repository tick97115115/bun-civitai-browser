import * as z from 'zod';
export const ModelVersionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  modelId: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  baseModelTypeId: z.number().int().optional(),
  publishedAt: z.date().optional(),
  nsfwLevel: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  model: z.unknown(),
  baseModel: z.unknown(),
  baseModelType: z.unknown().optional(),
  files: z.array(z.unknown()),
  images: z.array(z.unknown())
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