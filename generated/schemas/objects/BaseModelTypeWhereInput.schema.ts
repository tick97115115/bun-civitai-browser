import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ModelVersionListRelationFilterObjectSchema as ModelVersionListRelationFilterObjectSchema } from './ModelVersionListRelationFilter.schema';
import { BaseModelScalarRelationFilterObjectSchema as BaseModelScalarRelationFilterObjectSchema } from './BaseModelScalarRelationFilter.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema'

const basemodeltypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BaseModelTypeWhereInputObjectSchema), z.lazy(() => BaseModelTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BaseModelTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BaseModelTypeWhereInputObjectSchema), z.lazy(() => BaseModelTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  baseModelId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelVersions: z.lazy(() => ModelVersionListRelationFilterObjectSchema).optional(),
  baseModel: z.union([z.lazy(() => BaseModelScalarRelationFilterObjectSchema), z.lazy(() => BaseModelWhereInputObjectSchema)]).optional()
}).strict();
export const BaseModelTypeWhereInputObjectSchema: z.ZodType<Prisma.BaseModelTypeWhereInput> = basemodeltypewhereinputSchema as unknown as z.ZodType<Prisma.BaseModelTypeWhereInput>;
export const BaseModelTypeWhereInputObjectZodSchema = basemodeltypewhereinputSchema;
