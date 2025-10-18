import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ModelScalarRelationFilterObjectSchema as ModelScalarRelationFilterObjectSchema } from './ModelScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { BaseModelScalarRelationFilterObjectSchema as BaseModelScalarRelationFilterObjectSchema } from './BaseModelScalarRelationFilter.schema';
import { BaseModelWhereInputObjectSchema as BaseModelWhereInputObjectSchema } from './BaseModelWhereInput.schema';
import { BaseModelTypeNullableScalarRelationFilterObjectSchema as BaseModelTypeNullableScalarRelationFilterObjectSchema } from './BaseModelTypeNullableScalarRelationFilter.schema';
import { BaseModelTypeWhereInputObjectSchema as BaseModelTypeWhereInputObjectSchema } from './BaseModelTypeWhereInput.schema';
import { ModelVersionFileListRelationFilterObjectSchema as ModelVersionFileListRelationFilterObjectSchema } from './ModelVersionFileListRelationFilter.schema';
import { ModelVersionImageListRelationFilterObjectSchema as ModelVersionImageListRelationFilterObjectSchema } from './ModelVersionImageListRelationFilter.schema'

const modelversionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionWhereInputObjectSchema), z.lazy(() => ModelVersionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionWhereInputObjectSchema), z.lazy(() => ModelVersionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  baseModelId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseModelTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  nsfwLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  model: z.union([z.lazy(() => ModelScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  baseModel: z.union([z.lazy(() => BaseModelScalarRelationFilterObjectSchema), z.lazy(() => BaseModelWhereInputObjectSchema)]).optional(),
  baseModelType: z.union([z.lazy(() => BaseModelTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => BaseModelTypeWhereInputObjectSchema)]).optional(),
  files: z.lazy(() => ModelVersionFileListRelationFilterObjectSchema).optional(),
  images: z.lazy(() => ModelVersionImageListRelationFilterObjectSchema).optional()
}).strict();
export const ModelVersionWhereInputObjectSchema: z.ZodType<Prisma.ModelVersionWhereInput> = modelversionwhereinputSchema as unknown as z.ZodType<Prisma.ModelVersionWhereInput>;
export const ModelVersionWhereInputObjectZodSchema = modelversionwhereinputSchema;
