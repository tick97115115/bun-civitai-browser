import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CreatorAvgAggregateInputObjectSchema: z.ZodType<Prisma.CreatorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CreatorAvgAggregateInputType>;
export const CreatorAvgAggregateInputObjectZodSchema = makeSchema();
