import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  baseModelId: z.literal(true).optional()
}).strict();
export const BaseModelTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeSumAggregateInputType>;
export const BaseModelTypeSumAggregateInputObjectZodSchema = makeSchema();
