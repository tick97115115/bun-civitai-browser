import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';
import { ModelVersionImageWhereInputObjectSchema as ModelVersionImageWhereInputObjectSchema } from './ModelVersionImageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ModelVersionImageWhereInputObjectSchema).optional(),
  some: z.lazy(() => ModelVersionImageWhereInputObjectSchema).optional(),
  none: z.lazy(() => ModelVersionImageWhereInputObjectSchema).optional()
}).strict();
export const ModelVersionImageListRelationFilterObjectSchema: z.ZodType<Prisma.ModelVersionImageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionImageListRelationFilter>;
export const ModelVersionImageListRelationFilterObjectZodSchema = makeSchema();
