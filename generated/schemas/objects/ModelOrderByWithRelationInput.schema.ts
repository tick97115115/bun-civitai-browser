import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelVersionOrderByRelationAggregateInputObjectSchema as ModelVersionOrderByRelationAggregateInputObjectSchema } from './ModelVersionOrderByRelationAggregateInput.schema';
import { TagOrderByRelationAggregateInputObjectSchema as TagOrderByRelationAggregateInputObjectSchema } from './TagOrderByRelationAggregateInput.schema';
import { CreatorOrderByWithRelationInputObjectSchema as CreatorOrderByWithRelationInputObjectSchema } from './CreatorOrderByWithRelationInput.schema';
import { ModelTypeOrderByWithRelationInputObjectSchema as ModelTypeOrderByWithRelationInputObjectSchema } from './ModelTypeOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  creatorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  typeId: SortOrderSchema.optional(),
  nsfw: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  modelVersions: z.lazy(() => ModelVersionOrderByRelationAggregateInputObjectSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputObjectSchema).optional(),
  creator: z.lazy(() => CreatorOrderByWithRelationInputObjectSchema).optional(),
  type: z.lazy(() => ModelTypeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ModelOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelOrderByWithRelationInput>;
export const ModelOrderByWithRelationInputObjectZodSchema = makeSchema();
