import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelVersionOrderByRelationAggregateInputObjectSchema as ModelVersionOrderByRelationAggregateInputObjectSchema } from './ModelVersionOrderByRelationAggregateInput.schema';
import { BaseModelOrderByWithRelationInputObjectSchema as BaseModelOrderByWithRelationInputObjectSchema } from './BaseModelOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  baseModelId: SortOrderSchema.optional(),
  modelVersions: z.lazy(() => ModelVersionOrderByRelationAggregateInputObjectSchema).optional(),
  baseModel: z.lazy(() => BaseModelOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BaseModelTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BaseModelTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeOrderByWithRelationInput>;
export const BaseModelTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
