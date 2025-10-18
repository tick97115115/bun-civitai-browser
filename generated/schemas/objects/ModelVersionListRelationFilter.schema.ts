import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionWhereInputObjectSchema as ModelVersionWhereInputObjectSchema } from './ModelVersionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ModelVersionWhereInputObjectSchema).optional(),
  some: z.lazy(() => ModelVersionWhereInputObjectSchema).optional(),
  none: z.lazy(() => ModelVersionWhereInputObjectSchema).optional()
}).strict();
export const ModelVersionListRelationFilterObjectSchema: z.ZodType<Prisma.ModelVersionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionListRelationFilter>;
export const ModelVersionListRelationFilterObjectZodSchema = makeSchema();
