import * as z from 'zod';
export const ModelVersionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    modelId: z.number(),
    name: z.number(),
    baseModelId: z.number(),
    baseModelTypeId: z.number(),
    publishedAt: z.number(),
    nsfwLevel: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    model: z.number(),
    baseModel: z.number(),
    baseModelType: z.number(),
    files: z.number(),
    images: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    modelId: z.number().nullable(),
    baseModelId: z.number().nullable(),
    baseModelTypeId: z.number().nullable(),
    nsfwLevel: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    modelId: z.number().nullable(),
    baseModelId: z.number().nullable(),
    baseModelTypeId: z.number().nullable(),
    nsfwLevel: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    modelId: z.number().int().nullable(),
    name: z.string().nullable(),
    baseModelId: z.number().int().nullable(),
    baseModelTypeId: z.number().int().nullable(),
    publishedAt: z.date().nullable(),
    nsfwLevel: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    modelId: z.number().int().nullable(),
    name: z.string().nullable(),
    baseModelId: z.number().int().nullable(),
    baseModelTypeId: z.number().int().nullable(),
    publishedAt: z.date().nullable(),
    nsfwLevel: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});