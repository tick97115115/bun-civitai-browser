import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionFileWhereInputObjectSchema as ModelVersionFileWhereInputObjectSchema } from './ModelVersionFileWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ModelVersionFileWhereInputObjectSchema).optional(),
  some: z.lazy(() => ModelVersionFileWhereInputObjectSchema).optional(),
  none: z.lazy(() => ModelVersionFileWhereInputObjectSchema).optional()
}).strict();
export const ModelVersionFileListRelationFilterObjectSchema: z.ZodType<Prisma.ModelVersionFileListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionFileListRelationFilter>;
export const ModelVersionFileListRelationFilterObjectZodSchema = makeSchema();
