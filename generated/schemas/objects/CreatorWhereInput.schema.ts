import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ModelListRelationFilterObjectSchema as ModelListRelationFilterObjectSchema } from './ModelListRelationFilter.schema'

const creatorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CreatorWhereInputObjectSchema), z.lazy(() => CreatorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CreatorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CreatorWhereInputObjectSchema), z.lazy(() => CreatorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  models: z.lazy(() => ModelListRelationFilterObjectSchema).optional()
}).strict();
export const CreatorWhereInputObjectSchema: z.ZodType<Prisma.CreatorWhereInput> = creatorwhereinputSchema as unknown as z.ZodType<Prisma.CreatorWhereInput>;
export const CreatorWhereInputObjectZodSchema = creatorwhereinputSchema;
