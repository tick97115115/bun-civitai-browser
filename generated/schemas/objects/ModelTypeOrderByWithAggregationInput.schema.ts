import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelTypeCountOrderByAggregateInputObjectSchema as ModelTypeCountOrderByAggregateInputObjectSchema } from './ModelTypeCountOrderByAggregateInput.schema';
import { ModelTypeAvgOrderByAggregateInputObjectSchema as ModelTypeAvgOrderByAggregateInputObjectSchema } from './ModelTypeAvgOrderByAggregateInput.schema';
import { ModelTypeMaxOrderByAggregateInputObjectSchema as ModelTypeMaxOrderByAggregateInputObjectSchema } from './ModelTypeMaxOrderByAggregateInput.schema';
import { ModelTypeMinOrderByAggregateInputObjectSchema as ModelTypeMinOrderByAggregateInputObjectSchema } from './ModelTypeMinOrderByAggregateInput.schema';
import { ModelTypeSumOrderByAggregateInputObjectSchema as ModelTypeSumOrderByAggregateInputObjectSchema } from './ModelTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ModelTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ModelTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeOrderByWithAggregationInput>;
export const ModelTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
