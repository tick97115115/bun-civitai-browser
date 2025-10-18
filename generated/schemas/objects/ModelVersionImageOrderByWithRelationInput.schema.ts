import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelVersionOrderByWithRelationInputObjectSchema as ModelVersionOrderByWithRelationInputObjectSchema } from './ModelVersionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  nsfwLevel: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  hash: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional(),
  modelVersion: z.lazy(() => ModelVersionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ModelVersionImageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelVersionImageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageOrderByWithRelationInput>;
export const ModelVersionImageOrderByWithRelationInputObjectZodSchema = makeSchema();
