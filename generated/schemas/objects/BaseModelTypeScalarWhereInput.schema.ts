import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const basemodeltypescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema), z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema), z.lazy(() => BaseModelTypeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  baseModelId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BaseModelTypeScalarWhereInputObjectSchema: z.ZodType<Prisma.BaseModelTypeScalarWhereInput> = basemodeltypescalarwhereinputSchema as unknown as z.ZodType<Prisma.BaseModelTypeScalarWhereInput>;
export const BaseModelTypeScalarWhereInputObjectZodSchema = basemodeltypescalarwhereinputSchema;
