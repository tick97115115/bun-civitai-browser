import * as z from 'zod';
export const ModelVersionImageAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    url: z.number(),
    nsfwLevel: z.number(),
    width: z.number(),
    height: z.number(),
    hash: z.number(),
    type: z.number(),
    modelVersionId: z.number(),
    modelVersion: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    nsfwLevel: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    modelVersionId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    nsfwLevel: z.number().nullable(),
    width: z.number().nullable(),
    height: z.number().nullable(),
    modelVersionId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    url: z.string().nullable(),
    nsfwLevel: z.number().int().nullable(),
    width: z.number().int().nullable(),
    height: z.number().int().nullable(),
    hash: z.string().nullable(),
    type: z.string().nullable(),
    modelVersionId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    url: z.string().nullable(),
    nsfwLevel: z.number().int().nullable(),
    width: z.number().int().nullable(),
    height: z.number().int().nullable(),
    hash: z.string().nullable(),
    type: z.string().nullable(),
    modelVersionId: z.number().int().nullable()
  }).nullable().optional()});