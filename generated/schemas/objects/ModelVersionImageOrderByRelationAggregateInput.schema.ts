import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ModelVersionImageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ModelVersionImageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageOrderByRelationAggregateInput>;
export const ModelVersionImageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
