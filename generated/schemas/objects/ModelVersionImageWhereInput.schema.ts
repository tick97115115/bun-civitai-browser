import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ModelVersionScalarRelationFilterObjectSchema as ModelVersionScalarRelationFilterObjectSchema } from './ModelVersionScalarRelationFilter.schema';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema'

const modelversionimagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionImageWhereInputObjectSchema), z.lazy(() => ModelVersionImageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionImageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionImageWhereInputObjectSchema), z.lazy(() => ModelVersionImageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nsfwLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  width: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  modelVersionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelVersion: z.union([z.lazy(() => ModelVersionScalarRelationFilterObjectSchema), z.lazy(() => ModelVersionWhereInputObjectSchema)]).optional()
}).strict();
export const ModelVersionImageWhereInputObjectSchema: z.ZodType<Prisma.ModelVersionImageWhereInput> = modelversionimagewhereinputSchema as unknown as z.ZodType<Prisma.ModelVersionImageWhereInput>;
export const ModelVersionImageWhereInputObjectZodSchema = modelversionimagewhereinputSchema;
