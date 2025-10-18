import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  image: SortOrderSchema.optional()
}).strict();
export const CreatorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CreatorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorMaxOrderByAggregateInput>;
export const CreatorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
