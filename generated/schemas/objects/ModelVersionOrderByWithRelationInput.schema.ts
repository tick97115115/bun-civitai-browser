import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema';
import { BaseModelOrderByWithRelationInputObjectSchema as BaseModelOrderByWithRelationInputObjectSchema } from './BaseModelOrderByWithRelationInput.schema';
import { BaseModelTypeOrderByWithRelationInputObjectSchema as BaseModelTypeOrderByWithRelationInputObjectSchema } from './BaseModelTypeOrderByWithRelationInput.schema';
import { ModelVersionFileOrderByRelationAggregateInputObjectSchema as ModelVersionFileOrderByRelationAggregateInputObjectSchema } from './ModelVersionFileOrderByRelationAggregateInput.schema';
import { ModelVersionImageOrderByRelationAggregateInputObjectSchema as ModelVersionImageOrderByRelationAggregateInputObjectSchema } from './ModelVersionImageOrderByRelationAggregateInput.schema'

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
  model: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  baseModel: z.lazy(() => BaseModelOrderByWithRelationInputObjectSchema).optional(),
  baseModelType: z.lazy(() => BaseModelTypeOrderByWithRelationInputObjectSchema).optional(),
  files: z.lazy(() => ModelVersionFileOrderByRelationAggregateInputObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ModelVersionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelVersionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionOrderByWithRelationInput>;
export const ModelVersionOrderByWithRelationInputObjectZodSchema = makeSchema();
