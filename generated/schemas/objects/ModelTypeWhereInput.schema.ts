import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ModelListRelationFilterObjectSchema as ModelListRelationFilterObjectSchema } from './ModelListRelationFilter.schema'

const modeltypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelTypeWhereInputObjectSchema), z.lazy(() => ModelTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelTypeWhereInputObjectSchema), z.lazy(() => ModelTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  models: z.lazy(() => ModelListRelationFilterObjectSchema).optional()
}).strict();
export const ModelTypeWhereInputObjectSchema: z.ZodType<Prisma.ModelTypeWhereInput> = modeltypewhereinputSchema as unknown as z.ZodType<Prisma.ModelTypeWhereInput>;
export const ModelTypeWhereInputObjectZodSchema = modeltypewhereinputSchema;
