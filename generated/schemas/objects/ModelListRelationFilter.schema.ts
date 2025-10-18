import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  some: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  none: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelListRelationFilterObjectSchema: z.ZodType<Prisma.ModelListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelListRelationFilter>;
export const ModelListRelationFilterObjectZodSchema = makeSchema();
