import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './ModelTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ModelTypeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ModelTypeWhereInputObjectSchema).optional()
}).strict();
export const ModelTypeScalarRelationFilterObjectSchema: z.ZodType<Prisma.ModelTypeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelTypeScalarRelationFilter>;
export const ModelTypeScalarRelationFilterObjectZodSchema = makeSchema();
