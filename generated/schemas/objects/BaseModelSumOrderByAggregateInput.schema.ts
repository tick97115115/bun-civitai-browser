import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const BaseModelSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelSumOrderByAggregateInput>;
export const BaseModelSumOrderByAggregateInputObjectZodSchema = makeSchema();
