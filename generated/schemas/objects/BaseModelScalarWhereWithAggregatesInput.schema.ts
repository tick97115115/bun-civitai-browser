import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const basemodelscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BaseModelScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BaseModelScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BaseModelScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BaseModelScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BaseModelScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const BaseModelScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BaseModelScalarWhereWithAggregatesInput> = basemodelscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BaseModelScalarWhereWithAggregatesInput>;
export const BaseModelScalarWhereWithAggregatesInputObjectZodSchema = basemodelscalarwherewithaggregatesinputSchema;
