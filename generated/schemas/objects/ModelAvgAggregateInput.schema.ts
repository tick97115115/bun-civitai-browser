import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  creatorId: z.literal(true).optional(),
  typeId: z.literal(true).optional(),
  nsfwLevel: z.literal(true).optional()
}).strict();
export const ModelAvgAggregateInputObjectSchema: z.ZodType<Prisma.ModelAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelAvgAggregateInputType>;
export const ModelAvgAggregateInputObjectZodSchema = makeSchema();
