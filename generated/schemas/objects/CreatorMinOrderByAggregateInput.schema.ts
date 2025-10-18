import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  image: SortOrderSchema.optional()
}).strict();
export const CreatorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CreatorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorMinOrderByAggregateInput>;
export const CreatorMinOrderByAggregateInputObjectZodSchema = makeSchema();
