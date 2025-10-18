import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  nsfwLevel: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  hash: z.literal(true).optional(),
  type: z.literal(true).optional(),
  modelVersionId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ModelVersionImageCountAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageCountAggregateInputType>;
export const ModelVersionImageCountAggregateInputObjectZodSchema = makeSchema();
