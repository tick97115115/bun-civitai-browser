import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BaseModelTypeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BaseModelTypeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeOrderByRelationAggregateInput>;
export const BaseModelTypeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
