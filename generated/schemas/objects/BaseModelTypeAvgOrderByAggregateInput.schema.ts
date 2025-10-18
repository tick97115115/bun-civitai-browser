import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional()
}).strict();
export const BaseModelTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeAvgOrderByAggregateInput>;
export const BaseModelTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
