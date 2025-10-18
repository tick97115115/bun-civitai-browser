import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const modeltypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ModelTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ModelTypeScalarWhereWithAggregatesInput> = modeltypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ModelTypeScalarWhereWithAggregatesInput>;
export const ModelTypeScalarWhereWithAggregatesInputObjectZodSchema = modeltypescalarwherewithaggregatesinputSchema;
