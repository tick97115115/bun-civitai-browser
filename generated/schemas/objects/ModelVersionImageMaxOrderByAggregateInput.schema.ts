import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  hash: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional()
}).strict();
export const ModelVersionImageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageMaxOrderByAggregateInput>;
export const ModelVersionImageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
