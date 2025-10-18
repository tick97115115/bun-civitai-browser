import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const modelversionimagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelVersionImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionImageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelVersionImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nsfwLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  width: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  hash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  modelVersionId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ModelVersionImageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ModelVersionImageScalarWhereWithAggregatesInput> = modelversionimagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ModelVersionImageScalarWhereWithAggregatesInput>;
export const ModelVersionImageScalarWhereWithAggregatesInputObjectZodSchema = modelversionimagescalarwherewithaggregatesinputSchema;
