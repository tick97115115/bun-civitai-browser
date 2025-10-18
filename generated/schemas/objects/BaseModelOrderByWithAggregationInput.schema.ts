import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BaseModelCountOrderByAggregateInputObjectSchema as BaseModelCountOrderByAggregateInputObjectSchema } from './BaseModelCountOrderByAggregateInput.schema';
import { BaseModelAvgOrderByAggregateInputObjectSchema as BaseModelAvgOrderByAggregateInputObjectSchema } from './BaseModelAvgOrderByAggregateInput.schema';
import { BaseModelMaxOrderByAggregateInputObjectSchema as BaseModelMaxOrderByAggregateInputObjectSchema } from './BaseModelMaxOrderByAggregateInput.schema';
import { BaseModelMinOrderByAggregateInputObjectSchema as BaseModelMinOrderByAggregateInputObjectSchema } from './BaseModelMinOrderByAggregateInput.schema';
import { BaseModelSumOrderByAggregateInputObjectSchema as BaseModelSumOrderByAggregateInputObjectSchema } from './BaseModelSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => BaseModelCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BaseModelAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BaseModelMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BaseModelMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BaseModelSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BaseModelOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BaseModelOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelOrderByWithAggregationInput>;
export const BaseModelOrderByWithAggregationInputObjectZodSchema = makeSchema();
