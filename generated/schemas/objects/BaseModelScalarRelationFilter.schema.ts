import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BaseModelWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BaseModelWhereInputObjectSchema).optional()
}).strict();
export const BaseModelScalarRelationFilterObjectSchema: z.ZodType<Prisma.BaseModelScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelScalarRelationFilter>;
export const BaseModelScalarRelationFilterObjectZodSchema = makeSchema();
