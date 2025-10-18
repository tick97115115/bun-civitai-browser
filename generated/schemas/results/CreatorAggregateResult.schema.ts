import * as z from 'zod';
export const CreatorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    username: z.number(),
    link: z.number(),
    image: z.number(),
    models: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    username: z.string().nullable(),
    link: z.string().nullable(),
    image: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    username: z.string().nullable(),
    link: z.string().nullable(),
    image: z.string().nullable()
  }).nullable().optional()});