import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  baseModelId: z.literal(true).optional()
}).strict();
export const BaseModelTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeAvgAggregateInputType>;
export const BaseModelTypeAvgAggregateInputObjectZodSchema = makeSchema();
