import * as z from 'zod';
export const ModelAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    creatorId: z.number(),
    typeId: z.number(),
    nsfw: z.number(),
    nsfwLevel: z.number(),
    modelVersions: z.number(),
    tags: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    creator: z.number(),
    type: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    creatorId: z.number().nullable(),
    typeId: z.number().nullable(),
    nsfwLevel: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    creatorId: z.number().nullable(),
    typeId: z.number().nullable(),
    nsfwLevel: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    creatorId: z.number().int().nullable(),
    typeId: z.number().int().nullable(),
    nsfwLevel: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    creatorId: z.number().int().nullable(),
    typeId: z.number().int().nullable(),
    nsfwLevel: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});