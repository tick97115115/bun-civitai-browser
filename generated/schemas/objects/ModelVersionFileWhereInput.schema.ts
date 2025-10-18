import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ModelVersionScalarRelationFilterObjectSchema as ModelVersionScalarRelationFilterObjectSchema } from './ModelVersionScalarRelationFilter.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema'

const modelversionfilewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionFileWhereInputObjectSchema), z.lazy(() => ModelVersionFileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionFileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionFileWhereInputObjectSchema), z.lazy(() => ModelVersionFileWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sizeKB: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  downloadUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  modelVersionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelVersion: z.union([z.lazy(() => ModelVersionScalarRelationFilterObjectSchema), z.lazy(() => ModelVersionWhereInputObjectSchema)]).optional()
}).strict();
export const ModelVersionFileWhereInputObjectSchema: z.ZodType<Prisma.ModelVersionFileWhereInput> = modelversionfilewhereinputSchema as unknown as z.ZodType<Prisma.ModelVersionFileWhereInput>;
export const ModelVersionFileWhereInputObjectZodSchema = modelversionfilewhereinputSchema;
