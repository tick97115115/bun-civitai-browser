import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './CreatorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CreatorWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CreatorWhereInputObjectSchema).optional().nullable()
}).strict();
export const CreatorNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CreatorNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CreatorNullableScalarRelationFilter>;
export const CreatorNullableScalarRelationFilterObjectZodSchema = makeSchema();
