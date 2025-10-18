import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const modelversionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionScalarWhereInputObjectSchema), z.lazy(() => ModelVersionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionScalarWhereInputObjectSchema), z.lazy(() => ModelVersionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  baseModelId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseModelTypeId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  publishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  nsfwLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelVersionScalarWhereInputObjectSchema: z.ZodType<Prisma.ModelVersionScalarWhereInput> = modelversionscalarwhereinputSchema as unknown as z.ZodType<Prisma.ModelVersionScalarWhereInput>;
export const ModelVersionScalarWhereInputObjectZodSchema = modelversionscalarwhereinputSchema;
