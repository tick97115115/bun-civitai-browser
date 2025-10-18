import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const modelversionimagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema), z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema), z.lazy(() => ModelVersionImageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nsfwLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  width: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  modelVersionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ModelVersionImageScalarWhereInputObjectSchema: z.ZodType<Prisma.ModelVersionImageScalarWhereInput> = modelversionimagescalarwhereinputSchema as unknown as z.ZodType<Prisma.ModelVersionImageScalarWhereInput>;
export const ModelVersionImageScalarWhereInputObjectZodSchema = modelversionimagescalarwhereinputSchema;
