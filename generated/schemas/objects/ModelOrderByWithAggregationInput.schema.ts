import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelCountOrderByAggregateInputObjectSchema as ModelCountOrderByAggregateInputObjectSchema } from './ModelCountOrderByAggregateInput.schema';
import { ModelAvgOrderByAggregateInputObjectSchema as ModelAvgOrderByAggregateInputObjectSchema } from './ModelAvgOrderByAggregateInput.schema';
import { ModelMaxOrderByAggregateInputObjectSchema as ModelMaxOrderByAggregateInputObjectSchema } from './ModelMaxOrderByAggregateInput.schema';
import { ModelMinOrderByAggregateInputObjectSchema as ModelMinOrderByAggregateInputObjectSchema } from './ModelMinOrderByAggregateInput.schema';
import { ModelSumOrderByAggregateInputObjectSchema as ModelSumOrderByAggregateInputObjectSchema } from './ModelSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  creatorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  typeId: SortOrderSchema.optional(),
  nsfw: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ModelAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ModelSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelOrderByWithAggregationInput>;
export const ModelOrderByWithAggregationInputObjectZodSchema = makeSchema();
