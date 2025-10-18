import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = tagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TagScalarWhereWithAggregatesInput>;
export const TagScalarWhereWithAggregatesInputObjectZodSchema = tagscalarwherewithaggregatesinputSchema;
