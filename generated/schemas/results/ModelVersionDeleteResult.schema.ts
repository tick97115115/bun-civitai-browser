import * as z from 'zod';
export const ModelVersionDeleteResultSchema = z.nullable(z.object({
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
}));