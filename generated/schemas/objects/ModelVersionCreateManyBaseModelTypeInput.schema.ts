import * as z from 'zod';
import type { Prisma } from '../../../src/modules/db/generated/client';


const makeSchema = () => z.object({
  id: z.number().int(),
  modelId: z.number().int(),
  name: z.string(),
  baseModelId: z.number().int(),
  publishedAt: z.coerce.date().optional().nullable(),
  nsfwLevel: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelVersionCreateManyBaseModelTypeInputObjectSchema: z.ZodType<Prisma.ModelVersionCreateManyBaseModelTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelVersionCreateManyBaseModelTypeInput>;
export const ModelVersionCreateManyBaseModelTypeInputObjectZodSchema = makeSchema();
