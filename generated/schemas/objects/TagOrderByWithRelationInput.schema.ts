import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelOrderByRelationAggregateInputObjectSchema as ModelOrderByRelationAggregateInputObjectSchema } from './ModelOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  models: z.lazy(() => ModelOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithRelationInput>;
export const TagOrderByWithRelationInputObjectZodSchema = makeSchema();
