import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sizeKB: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional()
}).strict();
export const ModelVersionFileSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileSumOrderByAggregateInput>;
export const ModelVersionFileSumOrderByAggregateInputObjectZodSchema = makeSchema();
