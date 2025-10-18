import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const BaseModelAvgAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelAvgAggregateInputType>;
export const BaseModelAvgAggregateInputObjectZodSchema = makeSchema();
