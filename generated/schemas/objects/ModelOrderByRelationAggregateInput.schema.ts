import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ModelOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ModelOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelOrderByRelationAggregateInput>;
export const ModelOrderByRelationAggregateInputObjectZodSchema = makeSchema();
