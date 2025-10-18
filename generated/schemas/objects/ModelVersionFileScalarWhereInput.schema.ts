import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const modelversionfilescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema), z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema), z.lazy(() => ModelVersionFileScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  sizeKB: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  downloadUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  modelVersionId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ModelVersionFileScalarWhereInputObjectSchema: z.ZodType<Prisma.ModelVersionFileScalarWhereInput> = modelversionfilescalarwhereinputSchema as unknown as z.ZodType<Prisma.ModelVersionFileScalarWhereInput>;
export const ModelVersionFileScalarWhereInputObjectZodSchema = modelversionfilescalarwhereinputSchema;
