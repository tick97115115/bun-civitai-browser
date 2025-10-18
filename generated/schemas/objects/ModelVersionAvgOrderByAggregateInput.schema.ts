import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional(),
  baseModelTypeId: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional()
}).strict();
export const ModelVersionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionAvgOrderByAggregateInput>;
export const ModelVersionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
