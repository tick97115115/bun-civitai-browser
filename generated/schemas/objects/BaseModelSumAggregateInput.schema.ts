import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const BaseModelSumAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelSumAggregateInputType>;
export const BaseModelSumAggregateInputObjectZodSchema = makeSchema();
