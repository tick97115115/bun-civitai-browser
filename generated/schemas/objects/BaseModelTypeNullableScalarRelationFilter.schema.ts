import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './BaseModelTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional().nullable()
}).strict();
export const BaseModelTypeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.BaseModelTypeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeNullableScalarRelationFilter>;
export const BaseModelTypeNullableScalarRelationFilterObjectZodSchema = makeSchema();
