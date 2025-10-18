import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional()
}).strict();
export const ModelVersionImageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageAvgOrderByAggregateInput>;
export const ModelVersionImageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
