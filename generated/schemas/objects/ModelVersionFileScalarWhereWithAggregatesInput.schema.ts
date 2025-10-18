import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const modelversionfilescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionFileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelVersionFileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionFileScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionFileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelVersionFileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  sizeKB: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  downloadUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  modelVersionId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ModelVersionFileScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ModelVersionFileScalarWhereWithAggregatesInput> = modelversionfilescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ModelVersionFileScalarWhereWithAggregatesInput>;
export const ModelVersionFileScalarWhereWithAggregatesInputObjectZodSchema = modelversionfilescalarwherewithaggregatesinputSchema;
