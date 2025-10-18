import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  modelId: z.number().int(),
  name: z.string(),
  baseModelTypeId: z.number().int().optional().nullable(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelVersionCreateManyBaseModelInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateManyBaseModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateManyBaseModelInput>;
export const ModelVersionCreateManyBaseModelInputObjectZodSchema = makeSchema();
