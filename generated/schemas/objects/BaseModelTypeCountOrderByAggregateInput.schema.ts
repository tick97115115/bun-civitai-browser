import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional()
}).strict();
export const BaseModelTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeCountOrderByAggregateInput>;
export const BaseModelTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
