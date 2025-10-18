import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional()
}).strict();
export const BaseModelTypeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeMaxOrderByAggregateInput>;
export const BaseModelTypeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
