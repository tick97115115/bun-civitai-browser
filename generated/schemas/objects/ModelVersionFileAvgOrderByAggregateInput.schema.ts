import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sizeKB: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional()
}).strict();
export const ModelVersionFileAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileAvgOrderByAggregateInput>;
export const ModelVersionFileAvgOrderByAggregateInputObjectZodSchema = makeSchema();
