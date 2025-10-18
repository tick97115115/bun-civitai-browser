import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './BaseModelTypeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional(),
  some: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional(),
  none: z.lazy(() => BaseModelTypeWhereInputObjectSchema).optional()
}).strict();
export const BaseModelTypeListRelationFilterObjectSchema: z.ZodType<Prisma.BaseModelTypeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BaseModelTypeListRelationFilter>;
export const BaseModelTypeListRelationFilterObjectZodSchema = makeSchema();
