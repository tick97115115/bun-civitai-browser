import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const TagMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagMaxOrderByAggregateInput>;
export const TagMaxOrderByAggregateInputObjectZodSchema = makeSchema();
