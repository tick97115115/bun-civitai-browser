import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ModelVersionListRelationFilterObjectSchema as ModelVersionListRelationFilterObjectSchema } from './ModelVersionListRelationFilter.schema';
import { TagListRelationFilterObjectSchema as TagListRelationFilterObjectSchema } from './TagListRelationFilter.schema';
import { CreatorNullableScalarRelationFilterObjectSchema as CreatorNullableScalarRelationFilterObjectSchema } from './CreatorNullableScalarRelationFilter.schema';
import { CreatorWhereInputObjectSchema as CreatorWhereInputObjectSchema } from './CreatorWhereInput.schema';
import { ModelTypeScalarRelationFilterObjectSchema as ModelTypeScalarRelationFilterObjectSchema } from './ModelTypeScalarRelationFilter.schema';
import { ModelTypeWhereInputObjectSchema as ModelTypeWhereInputObjectSchema } from './ModelTypeWhereInput.schema'

const modelwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelWhereInputObjectSchema), z.lazy(() => ModelWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelWhereInputObjectSchema), z.lazy(() => ModelWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  creatorId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  typeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nsfw: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  nsfwLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  modelVersions: z.lazy(() => ModelVersionListRelationFilterObjectSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
  creator: z.union([z.lazy(() => CreatorNullableScalarRelationFilterObjectSchema), z.lazy(() => CreatorWhereInputObjectSchema)]).optional(),
  type: z.union([z.lazy(() => ModelTypeScalarRelationFilterObjectSchema), z.lazy(() => ModelTypeWhereInputObjectSchema)]).optional()
}).strict();
export const ModelWhereInputObjectSchema: z.ZodType<Prisma.ModelWhereInput> = modelwhereinputSchema as unknown as z.ZodType<Prisma.ModelWhereInput>;
export const ModelWhereInputObjectZodSchema = modelwhereinputSchema;
