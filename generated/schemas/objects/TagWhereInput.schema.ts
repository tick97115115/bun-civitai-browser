import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ModelListRelationFilterObjectSchema as ModelListRelationFilterObjectSchema } from './ModelListRelationFilter.schema'

const tagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  models: z.lazy(() => ModelListRelationFilterObjectSchema).optional()
}).strict();
export const TagWhereInputObjectSchema: z.ZodType<Prisma.TagWhereInput> = tagwhereinputSchema as unknown as z.ZodType<Prisma.TagWhereInput>;
export const TagWhereInputObjectZodSchema = tagwhereinputSchema;
