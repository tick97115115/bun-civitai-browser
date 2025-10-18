import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BaseModelTypeCountOrderByAggregateInputObjectSchema as BaseModelTypeCountOrderByAggregateInputObjectSchema } from './BaseModelTypeCountOrderByAggregateInput.schema';
import { BaseModelTypeAvgOrderByAggregateInputObjectSchema as BaseModelTypeAvgOrderByAggregateInputObjectSchema } from './BaseModelTypeAvgOrderByAggregateInput.schema';
import { BaseModelTypeMaxOrderByAggregateInputObjectSchema as BaseModelTypeMaxOrderByAggregateInputObjectSchema } from './BaseModelTypeMaxOrderByAggregateInput.schema';
import { BaseModelTypeMinOrderByAggregateInputObjectSchema as BaseModelTypeMinOrderByAggregateInputObjectSchema } from './BaseModelTypeMinOrderByAggregateInput.schema';
import { BaseModelTypeSumOrderByAggregateInputObjectSchema as BaseModelTypeSumOrderByAggregateInputObjectSchema } from './BaseModelTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional(),
  _count: z.lazy(() => BaseModelTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BaseModelTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BaseModelTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BaseModelTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BaseModelTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BaseModelTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BaseModelTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeOrderByWithAggregationInput>;
export const BaseModelTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
