import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const ModelTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeMinOrderByAggregateInput>;
export const ModelTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
