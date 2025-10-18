import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const modelscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  creatorId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  typeId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nsfw: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  nsfwLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ModelScalarWhereWithAggregatesInput> = modelscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ModelScalarWhereWithAggregatesInput>;
export const ModelScalarWhereWithAggregatesInputObjectZodSchema = modelscalarwherewithaggregatesinputSchema;
