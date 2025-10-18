import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelVersionImageCountOrderByAggregateInputObjectSchema as ModelVersionImageCountOrderByAggregateInputObjectSchema } from './ModelVersionImageCountOrderByAggregateInput.schema';
import { ModelVersionImageAvgOrderByAggregateInputObjectSchema as ModelVersionImageAvgOrderByAggregateInputObjectSchema } from './ModelVersionImageAvgOrderByAggregateInput.schema';
import { ModelVersionImageMaxOrderByAggregateInputObjectSchema as ModelVersionImageMaxOrderByAggregateInputObjectSchema } from './ModelVersionImageMaxOrderByAggregateInput.schema';
import { ModelVersionImageMinOrderByAggregateInputObjectSchema as ModelVersionImageMinOrderByAggregateInputObjectSchema } from './ModelVersionImageMinOrderByAggregateInput.schema';
import { ModelVersionImageSumOrderByAggregateInputObjectSchema as ModelVersionImageSumOrderByAggregateInputObjectSchema } from './ModelVersionImageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  hash: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelVersionImageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ModelVersionImageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelVersionImageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelVersionImageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ModelVersionImageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelVersionImageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelVersionImageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageOrderByWithAggregationInput>;
export const ModelVersionImageOrderByWithAggregationInputObjectZodSchema = makeSchema();
