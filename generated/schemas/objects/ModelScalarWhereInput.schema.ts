import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const modelscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelScalarWhereInputObjectSchema), z.lazy(() => ModelScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelScalarWhereInputObjectSchema), z.lazy(() => ModelScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creatorId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  typeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nsfw: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  nsfwLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelScalarWhereInputObjectSchema: z.ZodType<Prisma.ModelScalarWhereInput> = modelscalarwhereinputSchema as unknown as z.ZodType<Prisma.ModelScalarWhereInput>;
export const ModelScalarWhereInputObjectZodSchema = modelscalarwhereinputSchema;
