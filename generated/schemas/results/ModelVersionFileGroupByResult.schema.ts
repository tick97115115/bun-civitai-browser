import * as z from 'zod';
export const ModelVersionFileGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  sizeKB: z.number(),
  name: z.string(),
  type: z.string(),
  downloadUrl: z.string(),
  modelVersionId: z.number().int(),
  _count: z.object({
    id: z.number(),
    sizeKB: z.number(),
    name: z.number(),
    type: z.number(),
    downloadUrl: z.number(),
    modelVersionId: z.number(),
    modelVersion: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    sizeKB: z.number().nullable(),
    modelVersionId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    sizeKB: z.number().nullable(),
    modelVersionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    sizeKB: z.number().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    downloadUrl: z.string().nullable(),
    modelVersionId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    sizeKB: z.number().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    downloadUrl: z.string().nullable(),
    modelVersionId: z.number().int().nullable()
  }).nullable().optional()
}));