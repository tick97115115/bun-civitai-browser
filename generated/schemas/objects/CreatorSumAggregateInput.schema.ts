import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CreatorSumAggregateInputObjectSchema: z.ZodType<Prisma.CreatorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CreatorSumAggregateInputType>;
export const CreatorSumAggregateInputObjectZodSchema = makeSchema();
