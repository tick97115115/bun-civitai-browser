import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ModelVersionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ModelVersionWhereInputObjectSchema).optional()
}).strict();
export const ModelVersionScalarRelationFilterObjectSchema: z.ZodType<Prisma.ModelVersionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionScalarRelationFilter>;
export const ModelVersionScalarRelationFilterObjectZodSchema = makeSchema();
