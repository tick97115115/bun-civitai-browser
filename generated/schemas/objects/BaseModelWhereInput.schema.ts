import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ModelVersionListRelationFilterObjectSchema as ModelVersionListRelationFilterObjectSchema } from './ModelVersionListRelationFilter.schema';
import { BaseModelTypeListRelationFilterObjectSchema as BaseModelTypeListRelationFilterObjectSchema } from './BaseModelTypeListRelationFilter.schema'

const basemodelwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BaseModelWhereInputObjectSchema), z.lazy(() => BaseModelWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BaseModelWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BaseModelWhereInputObjectSchema), z.lazy(() => BaseModelWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  modelVersions: z.lazy(() => ModelVersionListRelationFilterObjectSchema).optional(),
  baseModelTypes: z.lazy(() => BaseModelTypeListRelationFilterObjectSchema).optional()
}).strict();
export const BaseModelWhereInputObjectSchema: z.ZodType<Prisma.BaseModelWhereInput> = basemodelwhereinputSchema as unknown as z.ZodType<Prisma.BaseModelWhereInput>;
export const BaseModelWhereInputObjectZodSchema = basemodelwhereinputSchema;
