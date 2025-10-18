import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelVersionFileCountOrderByAggregateInputObjectSchema as ModelVersionFileCountOrderByAggregateInputObjectSchema } from './ModelVersionFileCountOrderByAggregateInput.schema';
import { ModelVersionFileAvgOrderByAggregateInputObjectSchema as ModelVersionFileAvgOrderByAggregateInputObjectSchema } from './ModelVersionFileAvgOrderByAggregateInput.schema';
import { ModelVersionFileMaxOrderByAggregateInputObjectSchema as ModelVersionFileMaxOrderByAggregateInputObjectSchema } from './ModelVersionFileMaxOrderByAggregateInput.schema';
import { ModelVersionFileMinOrderByAggregateInputObjectSchema as ModelVersionFileMinOrderByAggregateInputObjectSchema } from './ModelVersionFileMinOrderByAggregateInput.schema';
import { ModelVersionFileSumOrderByAggregateInputObjectSchema as ModelVersionFileSumOrderByAggregateInputObjectSchema } from './ModelVersionFileSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sizeKB: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  downloadUrl: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelVersionFileCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ModelVersionFileAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelVersionFileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelVersionFileMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ModelVersionFileSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelVersionFileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelVersionFileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileOrderByWithAggregationInput>;
export const ModelVersionFileOrderByWithAggregationInputObjectZodSchema = makeSchema();
