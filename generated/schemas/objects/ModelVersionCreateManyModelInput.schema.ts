import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  baseModelTypeId: z.number().int().optional().nullable(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelVersionCreateManyModelInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateManyModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateManyModelInput>;
export const ModelVersionCreateManyModelInputObjectZodSchema = makeSchema();
