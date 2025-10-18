import * as z from 'zod';
export const TagGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
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
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable()
  }).nullable().optional()
}));