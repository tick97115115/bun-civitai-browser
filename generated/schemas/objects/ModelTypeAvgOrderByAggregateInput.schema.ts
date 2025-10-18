import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ModelTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeAvgOrderByAggregateInput>;
export const ModelTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
