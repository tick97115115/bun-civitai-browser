import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional(),
  baseModelTypeId: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ModelVersionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionMaxOrderByAggregateInput>;
export const ModelVersionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
