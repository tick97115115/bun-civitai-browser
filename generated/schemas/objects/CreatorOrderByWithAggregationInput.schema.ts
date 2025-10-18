import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CreatorCountOrderByAggregateInputObjectSchema as CreatorCountOrderByAggregateInputObjectSchema } from './CreatorCountOrderByAggregateInput.schema';
import { CreatorAvgOrderByAggregateInputObjectSchema as CreatorAvgOrderByAggregateInputObjectSchema } from './CreatorAvgOrderByAggregateInput.schema';
import { CreatorMaxOrderByAggregateInputObjectSchema as CreatorMaxOrderByAggregateInputObjectSchema } from './CreatorMaxOrderByAggregateInput.schema';
import { CreatorMinOrderByAggregateInputObjectSchema as CreatorMinOrderByAggregateInputObjectSchema } from './CreatorMinOrderByAggregateInput.schema';
import { CreatorSumOrderByAggregateInputObjectSchema as CreatorSumOrderByAggregateInputObjectSchema } from './CreatorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CreatorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CreatorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CreatorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CreatorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CreatorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CreatorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CreatorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CreatorOrderByWithAggregationInput>;
export const CreatorOrderByWithAggregationInputObjectZodSchema = makeSchema();
