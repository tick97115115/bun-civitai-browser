import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelVersionOrderByWithRelationInputObjectSchema as ModelVersionOrderByWithRelationInputObjectSchema } from './ModelVersionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sizeKB: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  downloadUrl: SortOrderSchema.optional(),
  modelVersionId: SortOrderSchema.optional(),
  modelVersion: z.lazy(() => ModelVersionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ModelVersionFileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelVersionFileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileOrderByWithRelationInput>;
export const ModelVersionFileOrderByWithRelationInputObjectZodSchema = makeSchema();
