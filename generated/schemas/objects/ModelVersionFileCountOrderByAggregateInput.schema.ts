import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sizeKB: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  downloadUrl: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional()
}).strict();
export const ModelVersionFileCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionFileCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileCountOrderByAggregateInput>;
export const ModelVersionFileCountOrderByAggregateInputObjectZodSchema = makeSchema();
