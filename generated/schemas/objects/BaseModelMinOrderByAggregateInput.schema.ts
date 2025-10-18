import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const BaseModelMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelMinOrderByAggregateInput>;
export const BaseModelMinOrderByAggregateInputObjectZodSchema = makeSchema();
