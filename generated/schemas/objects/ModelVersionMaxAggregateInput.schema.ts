import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  modelId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  baseModelId: z.literal(true).optional(),
  baseModelTypeId: z.literal(true).optional(),
  publishedAt: z.literal(true).optional(),
  nsfwLevel: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ModelVersionMaxAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionMaxAggregateInputType>;
export const ModelVersionMaxAggregateInputObjectZodSchema = makeSchema();
