import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelOrderByRelationAggregateInputObjectSchema as ModelOrderByRelationAggregateInputObjectSchema } from './ModelOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CreatorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CreatorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorOrderByWithRelationInput>;
export const CreatorOrderByWithRelationInputObjectZodSchema = makeSchema();
