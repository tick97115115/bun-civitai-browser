import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ModelTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.ModelTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeSumAggregateInputType>;
export const ModelTypeSumAggregateInputObjectZodSchema = makeSchema();
