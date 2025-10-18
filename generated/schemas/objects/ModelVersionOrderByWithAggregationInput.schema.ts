import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelVersionCountOrderByAggregateInputObjectSchema as ModelVersionCountOrderByAggregateInputObjectSchema } from './ModelVersionCountOrderByAggregateInput.schema';
import { ModelVersionAvgOrderByAggregateInputObjectSchema as ModelVersionAvgOrderByAggregateInputObjectSchema } from './ModelVersionAvgOrderByAggregateInput.schema';
import { ModelVersionMaxOrderByAggregateInputObjectSchema as ModelVersionMaxOrderByAggregateInputObjectSchema } from './ModelVersionMaxOrderByAggregateInput.schema';
import { ModelVersionMinOrderByAggregateInputObjectSchema as ModelVersionMinOrderByAggregateInputObjectSchema } from './ModelVersionMinOrderByAggregateInput.schema';
import { ModelVersionSumOrderByAggregateInputObjectSchema as ModelVersionSumOrderByAggregateInputObjectSchema } from './ModelVersionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional(),
  baseModelTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nsfwLevel: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelVersionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ModelVersionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelVersionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelVersionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ModelVersionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelVersionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelVersionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionOrderByWithAggregationInput>;
export const ModelVersionOrderByWithAggregationInputObjectZodSchema = makeSchema();
