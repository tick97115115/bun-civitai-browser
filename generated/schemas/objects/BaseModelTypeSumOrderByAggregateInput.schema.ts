import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional()
}).strict();
export const BaseModelTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeSumOrderByAggregateInput>;
export const BaseModelTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
