import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const basemodeltypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BaseModelTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BaseModelTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BaseModelTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BaseModelTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BaseModelTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  baseModelId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BaseModelTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BaseModelTypeScalarWhereWithAggregatesInput> = basemodeltypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BaseModelTypeScalarWhereWithAggregatesInput>;
export const BaseModelTypeScalarWhereWithAggregatesInputObjectZodSchema = basemodeltypescalarwherewithaggregatesinputSchema;
