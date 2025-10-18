import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const creatorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CreatorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CreatorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CreatorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CreatorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CreatorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  link: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const CreatorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CreatorScalarWhereWithAggregatesInput> = creatorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CreatorScalarWhereWithAggregatesInput>;
export const CreatorScalarWhereWithAggregatesInputObjectZodSchema = creatorscalarwherewithaggregatesinputSchema;
