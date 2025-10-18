import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ModelTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeSumOrderByAggregateInput>;
export const ModelTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
