import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelOrderByRelationAggregateInputObjectSchema as ModelOrderByRelationAggregateInputObjectSchema } from './ModelOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  models: z.lazy(() => ModelOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ModelTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeOrderByWithRelationInput>;
export const ModelTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
