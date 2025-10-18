import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const TagAvgAggregateInputObjectSchema: z.ZodType<Prisma.TagAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagAvgAggregateInputType>;
export const TagAvgAggregateInputObjectZodSchema = makeSchema();
