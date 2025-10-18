import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  creatorId: SortOrderSchema.optional(),
  typeId: SortOrderSchema.optional(),
  nsfw: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ModelMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelMinOrderByAggregateInput>;
export const ModelMinOrderByAggregateInputObjectZodSchema = makeSchema();
