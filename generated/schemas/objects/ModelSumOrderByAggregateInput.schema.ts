import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  creatorId: SortOrderSchema.optional(),
  typeId: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional()
}).strict();
export const ModelSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelSumOrderByAggregateInput>;
export const ModelSumOrderByAggregateInputObjectZodSchema = makeSchema();
