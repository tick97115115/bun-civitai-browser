import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelVersionOrderByRelationAggregateInputObjectSchema as ModelVersionOrderByRelationAggregateInputObjectSchema } from './ModelVersionOrderByRelationAggregateInput.schema';
import { BaseModelTypeOrderByRelationAggregateInputObjectSchema as BaseModelTypeOrderByRelationAggregateInputObjectSchema } from './BaseModelTypeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  modelVersions: z.lazy(() => ModelVersionOrderByRelationAggregateInputObjectSchema).optional(),
  baseModelTypes: z.lazy(() => BaseModelTypeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BaseModelOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BaseModelOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelOrderByWithRelationInput>;
export const BaseModelOrderByWithRelationInputObjectZodSchema = makeSchema();
