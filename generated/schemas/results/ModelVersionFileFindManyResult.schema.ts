import * as z from 'zod';
export const ModelVersionFileFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string(),
  modelVersionId: z.number().int(),
  modelVersion: z.unknown()
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