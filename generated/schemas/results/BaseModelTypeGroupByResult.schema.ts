import * as z from 'zod';
export const BaseModelTypeGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    baseModelId: z.number(),
    modelVersions: z.number(),
    baseModel: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    baseModelId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    baseModelId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    baseModelId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    baseModelId: z.number().int().nullable()
  }).nullable().optional()
}));